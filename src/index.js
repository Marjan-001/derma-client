import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-day-picker/dist/style.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'; 
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './pages/context/AuthProvider';
// import AuthProvider from './pages/context/AuthProvider';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
          <App/>
      </AuthProvider>
    </QueryClientProvider>
      
  </React.StrictMode>
);


reportWebVitals();
