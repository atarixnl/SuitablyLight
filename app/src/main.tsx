import React, { useState } from 'react';

import boltUxpLogo from './assets/bolt-uxp.png';
import viteLogo from './assets/vite.png';
import tsLogo from './assets/typescript.png';
import sassLogo from './assets/sass.png';
import reactLogo from './assets/react.png';

import { uxp, indesign, photoshop } from './globals';
import { api } from './api/api';

export const App = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount((prev) => prev + 1);
	const helloWorld = () => api.notify('Hello World');

	const hostName = (uxp.host.name as string).toLowerCase();

	return (
		<>
			<main>
				<div>
					<img className="logo-lg" src={boltUxpLogo} alt="" />
				</div>
				<div className="stack-icons">
					<img src={viteLogo} className="logo" alt="" />
					<span> + </span>
					<img src={reactLogo} className="logo" alt="" />
					<span> + </span>
					<img src={tsLogo} className="logo" alt="" />
					<span> + </span>
					<img src={sassLogo} className="logo" alt="" />
				</div>
				<div className="button-group">
					<button className="btn" onClick={increment}>
						count is {count}
					</button>
					<button className="btn" onClick={helloWorld}>
						Hello World
					</button>
				</div>
				<div>
					<p>
						Edit <span className="code">main.tsx</span> and save to test HMR updates.
					</p>
				</div>
				<div className="button-group">
					<a href="https://github.com/hyperbrew/bolt-uxp/">Bolt UXP Docs</a>
					<a href="https://svelte.dev">Svelte Docs</a>
					<a href="https://vitejs.dev/">Vite Docs</a>
				</div>
			</main>

			{/* <uxp-panel panelid="bolt.uxp.plugin.settings">
				<h1>Settings Panel</h1>
				<p>count is: {count}</p>
			</uxp-panel> */}
		</>
	);
};
