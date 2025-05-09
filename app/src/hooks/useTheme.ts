import { useState } from 'react';

export function useTheme() {
	const [theme, setTheme] = useState<string | null>(null);
	return {
		theme,
		setColor: setTheme,
	};
}

export async function getTheme(): Promise<string> {
	const hostTheme = (window as any)?.uxp?.host?.theme?.toLowerCase?.();
	switch (hostTheme) {
		case 'dark':
		case 'darkest':
			return 'dark';
		case 'light':
		case 'lightest':
			return 'light';
		default:
			return 'light';
	}
}

export function photoshopUiEvent(setTheme: (value: string) => void) {
	try {
		const app = (window as any).require?.('photoshop')?.app;
		app?.addEventListener?.('uxpThemeColorChanged', async () => {
			setTheme(await getTheme());
		});
	} catch (err) {
		console.warn('Photoshop theme event unavailable', err);
	}
}
