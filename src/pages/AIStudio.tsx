import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Image as ImageIcon, Upload, Wand2, Download, AlertCircle, Key, Loader2, X } from 'lucide-react';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function AIStudio() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState<boolean | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    if (window.aistudio) {
      try {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } catch (err) {
        console.error("Error checking API key:", err);
        setHasKey(false);
      }
    } else {
      // Fallback for environments without the aistudio object
      setHasKey(true);
    }
  };

  const handleOpenKeyDialog = async () => {
    if (window.aistudio) {
      try {
        await window.aistudio.openSelectKey();
        setHasKey(true);
      } catch (err) {
        console.error("Error opening key dialog:", err);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // Create a new instance right before making the call as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const contents = {
        parts: [
          ...(selectedImage ? [{
            inlineData: {
              data: selectedImage.split(',')[1],
              mimeType: 'image/png'
            }
          }] : []),
          { text: prompt }
        ]
      };

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents,
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K"
          }
        }
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0] && response.candidates[0].content) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError('No image was generated. Try a different prompt.');
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setHasKey(false);
        setError("API Key session expired. Please select your key again.");
      } else {
        setError(err.message || 'An error occurred during generation.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `generated-image-${Date.now()}.png`;
    link.click();
  };

  if (hasKey === false) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-3xl border border-black/5 shadow-xl space-y-8"
        >
          <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto">
            <Key className="text-emerald-600" size={40} />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-zinc-900">API Key Required</h1>
            <p className="text-zinc-500 max-w-md mx-auto">
              To use the AI Image Studio, you need to select a paid Gemini API key. 
              This ensures you have the credits needed for high-quality generation.
            </p>
            <p className="text-xs text-zinc-400">
              Learn more about <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Gemini API billing</a>.
            </p>
          </div>
          <button
            onClick={handleOpenKeyDialog}
            className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
          >
            Select API Key
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Sparkles className="text-emerald-600" size={24} />
              </div>
              <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">AI Image Studio</h1>
            </div>
            <p className="text-zinc-500">
              Create stunning visuals or edit existing images using the power of Gemini 3.1 Flash.
            </p>
          </div>

          <div className="space-y-6">
            {/* Prompt Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
                Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create or how to edit the uploaded one..."
                className="w-full h-32 p-4 bg-zinc-50 border border-black/5 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-zinc-900"
              />
            </div>

            {/* Image Upload for Editing */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
                Reference Image (Optional)
              </label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`relative h-48 rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center gap-3 overflow-hidden
                  ${selectedImage ? 'border-emerald-500 bg-emerald-50/30' : 'border-zinc-200 hover:border-emerald-400 hover:bg-zinc-50'}
                `}
              >
                {selectedImage ? (
                  <>
                    <img src={selectedImage} alt="Selected" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <ImageIcon className="text-emerald-600" size={32} />
                      <span className="text-sm font-medium text-emerald-700">Image Selected</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(null);
                        }}
                        className="p-1 bg-white rounded-full shadow-sm hover:bg-zinc-50"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Upload className="text-zinc-400" size={32} />
                    <div className="text-center">
                      <p className="text-sm font-medium text-zinc-900">Click to upload</p>
                      <p className="text-xs text-zinc-500">PNG, JPG up to 5MB</p>
                    </div>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  className="hidden" 
                  accept="image/*"
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700 text-sm"
              >
                <AlertCircle size={18} />
                {error}
              </motion.div>
            )}

            <button
              onClick={generateImage}
              disabled={isGenerating || !prompt.trim()}
              className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all shadow-lg
                ${isGenerating || !prompt.trim() 
                  ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed' 
                  : 'bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]'}
              `}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Generating Magic...
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  Generate Image
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="relative">
          <div className="sticky top-32 space-y-6">
            <div className="aspect-square bg-zinc-50 rounded-3xl border border-black/5 overflow-hidden shadow-inner flex items-center justify-center relative group">
              <AnimatePresence mode="wait">
                {generatedImage ? (
                  <motion.img
                    key={generatedImage}
                    src={generatedImage}
                    alt="Generated"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center space-y-4 px-8">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-black/5">
                      <ImageIcon className="text-zinc-300" size={32} />
                    </div>
                    <p className="text-zinc-400 font-medium">
                      Your masterpiece will appear here
                    </p>
                  </div>
                )}
              </AnimatePresence>

              {isGenerating && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-emerald-100 rounded-full" />
                    <div className="w-16 h-16 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin absolute inset-0" />
                  </div>
                  <p className="text-emerald-700 font-semibold animate-pulse">
                    Dreaming in pixels...
                  </p>
                </div>
              )}
            </div>

            {generatedImage && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center"
              >
                <button
                  onClick={downloadImage}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-medium hover:bg-zinc-50 transition-all shadow-sm"
                >
                  <Download size={18} />
                  Download Masterpiece
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
