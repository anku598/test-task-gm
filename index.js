import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.js';
import { WishlistProvider } from './src/components/WishlistContext.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WishlistProvider>
  <App />
</WishlistProvider>);