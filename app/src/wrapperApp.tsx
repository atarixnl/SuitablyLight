import React, { useEffect, useState } from 'react';
import { uxp, photoshop } from './globals';
import '@spectrum-web-components/theme/src/themes.js';
import '@spectrum-web-components/theme/src/themes-core-tokens.js';

import '@spectrum-web-components/theme/src/express/themes-core-tokens.js';
import '@spectrum-web-components/theme/src/express/themes.js';

import '@spectrum-web-components/theme/scale-medium.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import { Theme } from '@swc-react/theme';

import { useTheme, getTheme, photoshopUiEvent } from './hooks/useTheme';
import { App } from './main';

export const WrapperApp = () => {
	// custom hook
	useEffect(() => {
		const hostName = (uxp.host.name as string).toLowerCase();
		if (hostName === 'photoshop') {
			console.log('👋🏽 Photoshop Object', photoshop);
		}
	}, []);

	const {
		theme, //"darkest"|"dark"|"light"|"lightest" SWC theme brightness
		setColor,
	} = useTheme();

	useEffect(() => {
		(async () => {
			setColor(await getTheme());
		})();
		photoshopUiEvent(setColor); //register event and panel detects brightness change on UI
		//console.log('Got Theme, rerendering');
	}, []);

	return (
		<Theme theme="spectrum" scale="medium" color={theme}>
			{theme ? <App /> : null}
		</Theme>
	);
};
