import React, { useEffect } from 'react';
import { Theme } from '@swc-react/theme';
import { App } from './main';

import { useTheme, getTheme, photoshopUiEvent } from './hooks/useTheme';

export const WrapperApp = () => {
	const { theme, setColor } = useTheme();

	useEffect(() => {
		(async () => {
			setColor(await getTheme());
		})();
		photoshopUiEvent(setColor);
	}, []);

	return (
		<Theme theme="spectrum" scale="medium" color={theme}>
			{theme ? <App /> : 'Loading Theme...'}
		</Theme>
	);
};
