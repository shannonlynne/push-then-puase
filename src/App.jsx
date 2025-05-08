import { useContext } from 'react';
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>}
              />
              <Route path="*" element={<Navigate to="/login" /> } />;           
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

function ProtectedRoute({children}) {
  const { token } = useContext(AuthContext);
  return token ? 
}

export default App;
