
import React, { useState } from 'react';
import Layout from './components/Layout';
import Calculator from './components/Calculator';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';

const App: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <Layout onOpenPrivacy={() => setIsPrivacyModalOpen(true)}>
      <Calculator />
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </Layout>
  );
};

export default App;
