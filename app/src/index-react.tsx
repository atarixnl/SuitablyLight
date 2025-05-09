import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// ✅ Replace direct App import with WrapperApp
import { WrapperApp } from './WrapperApp';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
	<React.StrictMode>
		<WrapperApp />
	</React.StrictMode>
);
