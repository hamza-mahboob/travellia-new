import React, { Suspense } from 'react';
import './App.css';
import logoGif from './assets/gif.mp4';

// Create a wait function that returns a promise that resolves after the specified delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Combine wait with React.lazy to delay the component loading
const Layout = React.lazy(() => wait(2000).then(() => import('./layouts/Layout')));

function App() {
  return (
    <Suspense fallback={
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#F7F2F4]"></div>
        <div className="flex justify-center items-center h-screen">
          <video src={logoGif} alt="Logo" className="relative z-10" width='1280px' height='720px' autoPlay muted />
        </div>
      </div>
    }>
      <Layout />
    </Suspense>
  );
}

export default App;
