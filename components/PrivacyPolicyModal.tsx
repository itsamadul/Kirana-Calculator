
import React from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-sm w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Privacy Policy</h2>
        
        <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
          <section>
            <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Data Collection</h3>
            <p>Kirana Calculator does not collect, store, or share any personal data. All calculations are performed locally on your device.</p>
          </section>

          <section>
            <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Offline Use</h3>
            <p>The core calculator functionality works entirely offline. No internet connection is required to perform calculations.</p>
          </section>

          <section>
            <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Advertisements</h3>
            <p>We display advertisements provided by Adstera to keep this tool free. These ads require an internet connection to load.</p>
          </section>

          <section>
            <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Third-Party Cookies</h3>
            <p>Our advertising partners (like Adstera) may use cookies or similar technologies to serve personalized ads based on your interests.</p>
          </section>

          <section>
            <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Usage in WebView</h3>
            <p>This application is designed to work seamlessly in mobile browsers and Play Store WebView applications.</p>
          </section>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-md hover:bg-blue-700"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
