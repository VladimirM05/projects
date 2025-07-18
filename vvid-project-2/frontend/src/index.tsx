import ReactDOM from 'react-dom/client';

import { App } from './App';

const wrapper = document.querySelector('.wrapper') as Element;

const root = ReactDOM.createRoot(wrapper);

root.render(<App />);
