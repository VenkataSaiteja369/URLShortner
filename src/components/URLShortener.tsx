import React, { useState } from 'react';
import { Link2, Copy, Download, QrCode, Check } from 'lucide-react';
import { Toast } from './ui/Toast';

export function URLShortener() {
  const [url, setUrl] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would be an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      const baseUrl = 'linkmetrics.io/';
      const slug = customSlug || Math.random().toString(36).substring(2, 8);
      
      // Store the URL mapping in localStorage for demo purposes
      // In production, this would be handled by your backend
      localStorage.setItem(slug, url);
      setShortenedUrl(`${baseUrl}${slug}`);
    } catch (error) {
      console.error('Error shortening URL:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!shortenedUrl) return;

    try {
      await navigator.clipboard.writeText(`https://${shortenedUrl}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleRedirect = (shortUrl: string) => {
    const slug = shortUrl.split('/').pop();
    if (slug) {
      const originalUrl = localStorage.getItem(slug);
      if (originalUrl) {
        window.open(originalUrl, '_blank');
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Short Link</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Long URL
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Link2 className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg 
                  focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="https://your-long-url.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
              Custom Slug (Optional)
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                linkmetrics.io/
              </span>
              <input
                type="text"
                id="slug"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
                className="flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-lg 
                  border focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="custom-slug"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg 
              hover:bg-indigo-700 transition-all duration-200 
              disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:scale-102 active:scale-98"
          >
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>
      </div>

      {shortenedUrl && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Shortened URL</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowQR(!showQR)}
                className="p-2 text-gray-500 hover:text-indigo-600 rounded-lg 
                  hover:bg-gray-100 transition-colors duration-200"
              >
                <QrCode className="h-5 w-5" />
              </button>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-indigo-600 rounded-lg 
                  hover:bg-gray-100 transition-colors duration-200"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div 
            className="bg-gray-50 p-4 rounded-lg break-all cursor-pointer
              hover:bg-gray-100 transition-colors duration-200"
            onClick={() => handleRedirect(shortenedUrl)}
          >
            <span className="text-gray-900">https://{shortenedUrl}</span>
          </div>

          {showQR && (
            <div className="mt-6 flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://${shortenedUrl}`}
                  alt="QR Code"
                  className="w-48 h-48"
                />
              </div>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=https://${shortenedUrl}`;
                  link.download = 'qr-code.png';
                  link.click();
                }}
                className="mt-4 flex items-center space-x-2 text-indigo-600 hover:text-indigo-700
                  transition-colors duration-200"
              >
                <Download className="h-4 w-4" />
                <span>Download QR Code</span>
              </button>
            </div>
          )}
        </div>
      )}

      <Toast
        show={showToast}
        message="URL copied to clipboard!"
        icon={<Check className="h-5 w-5 text-green-500" />}
      />
    </div>
  );
}