import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/global.scss';

const root: Element | null = document.querySelector('.root');

if (!root) {
	throw new Error('root not found');
}

const container = createRoot(root);

container.render(<App />);
