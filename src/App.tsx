import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import DashboardLayout from './components/Layout/DashboardLayout';
import MCAPricingCalculator from './components/Calculator/MCAPricingCalculator';
import KYCVerification from './components/KYC/KYCVerification';
import DocumentUpload from './components/Documents/DocumentUpload';
import BankStatementAnalysis from './components/Analysis/BankStatementAnalysis';
import InvestorList from './components/Investors/InvestorList';
import PlatformSettings from './components/Settings/PlatformSettings';
import LoginForm from './components/Auth/LoginForm';
import Home from './components/Dashboard/Home';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="calculator" element={<MCAPricingCalculator />} />
          <Route path="kyc" element={<KYCVerification />} />
          <Route path="documents" element={<DocumentUpload />} />
          <Route path="analysis" element={<BankStatementAnalysis />} />
          <Route path="investors" element={<InvestorList />} />
          <Route path="settings" element={<PlatformSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;