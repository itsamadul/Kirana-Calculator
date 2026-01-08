
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onOpenPrivacy: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onOpenPrivacy }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto w-full bg-white shadow-xl">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center shadow-md">
        <h1 className="text-2xl font-bold">Kirana Calculator</h1>
        <p className="text-blue-100 text-sm">₹/কिलो Quick Conversions</p>
      </header>

      {/* Top Banner Ad Placeholder */}
      <div className="bg-gray-100 min-h-[60px] flex items-center justify-center border-b border-gray-200">
        {/* ADSTERA TOP BANNER START */}
        <div id="adstera-top-banner">
          <span className="text-gray-400 text-xs uppercase tracking-widest">Advertisement</span>
          {/* 
            Paste your Adstera banner code here. 
            Example: <script type="text/javascript">...</script> 
          */}
        </div>
        {/* ADSTERA TOP BANNER END */}
      </div>

      <main className="flex-grow p-4">
        {children}
      </main>

      {/* Bottom Banner Ad Placeholder */}
      <div className="bg-gray-100 min-h-[60px] flex items-center justify-center border-t border-gray-200">
        {/* ADSTERA BOTTOM BANNER START */}
        <div id="adstera-bottom-banner">
          <span className="text-gray-400 text-xs uppercase tracking-widest">Advertisement</span>
          {/* 
            Paste your Adstera banner code here. 
            Example: <script type="text/javascript">...</script> 
          */}
        </div>
        {/* ADSTERA BOTTOM BANNER END */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 p-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-700"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-red-600 text-2xl hover:text-red-700"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-pink-600 text-2xl hover:text-pink-700"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-green-600 text-2xl hover:text-green-700"><i className="fab fa-whatsapp"></i></a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <a 
            href="https://wa.me/yourwhatsappnumber" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-sm hover:bg-blue-700 transition-colors"
          >
            Contact Developer
          </a>

          <button 
            onClick={onOpenPrivacy}
            className="text-blue-600 text-sm underline font-medium"
          >
            Privacy Policy
          </button>

          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Powered by{' '}
              <a 
                href="https://www.emadulai.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-bold"
              >
                www.emadulai.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
