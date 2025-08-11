import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import ProfileBrowsing from './components/ProfileBrowsing';
import AcquisitionWorkflow from './components/AcquisitionWorkflow';
import Settings from './components/Settings';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState<{
    type: 'buyer' | 'seller' | null;
    onboardingComplete: boolean;
    name: string;
  }>({
    type: null,
    onboardingComplete: false,
    name: ''
  });

  const handleOnboardingComplete = (userData: any) => {
    setUser({
      ...userData,
      onboardingComplete: true
    });
  };

  if (!user.onboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/browse" element={<ProfileBrowsing user={user} />} />
          <Route path="/deals" element={<AcquisitionWorkflow user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/settings" element={<Settings user={user} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;