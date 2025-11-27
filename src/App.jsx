import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { SignupModal } from './components/Sign.jsx';
import { Features } from './components/Features.jsx';
import { SocialProof } from './components/SocialProof.jsx';
import Mission from './components/Mission.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [showSignup, setShowSignup] = useState(false);

   useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <Header onSignupClick={() => setShowSignup(true)} />
      <Hero onSignupClick={() => setShowSignup(true)} />
      <Features />
      <SocialProof />
      <Mission onSignupClick={() => setShowSignup(true)} />
      <Footer />
      
      {/* Shared Signup Modal */}
      <SignupModal showSignup={showSignup} setShowSignup={setShowSignup} />
    </div>
  );
}

export default App;