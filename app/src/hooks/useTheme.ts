import { useState } from 'react';
import photoshop from 'photoshop';

type ThemeBrightness = 'darkest' | 'dark' | 'light' | 'lightest' | '';

type UIColorKey =
	| 'kPanelBrightnessDarkGray'
	| 'kPanelBrightnessMediumGray'
	| 'kPanelBrightnessLightGray'
	| 'kPanelBrightnessOriginal';

/**
 * batchPlay detects brightness change and
 * returns theme brightness.
 * @returns {UIColorKey}
 */
export const getTheme = async () => {
	const result = await photoshop.action.batchPlay(
		[
			{
				_obj: 'get',
				_target: [
					{ _property: 'kuiBrightnessLevel' },
					{ _ref: 'application', _enum: 'ordinal', _value: 'targetEnum' },
				],
				_options: { dialogOptions: 'dontDisplay' },
			},
		],
		{ synchronousExecution: true }
	);

	const pinned = result[0].kuiBrightnessLevel._value;

	return pinned;
};

/**
 * register event
 * @param setTheme
 */
export const photoshopUiEvent = async (setTheme: any) => {
	// console.log('🔊 Adding Theme Switch Listener');
	photoshop.action.addNotificationListener(['modalStateChanged'], async (event, descriptor) => {
		console.log('🔊 Event:', event);
		setTheme(await getTheme());
	});
};

/**
 * switch from UIColorKey to ThemeBrightness
 * @param {UIColorKey} key
 * @returns {ThemeBrightness}
 */
const setThemeColor = (key: UIColorKey): ThemeBrightness => {
	switch (key) {
		case 'kPanelBrightnessDarkGray':
			return 'darkest';

		case 'kPanelBrightnessMediumGray':
			return 'dark';

		case 'kPanelBrightnessLightGray':
			return 'light';

		case 'kPanelBrightnessOriginal':
			return 'lightest';
	}
};

/**
 * custom hook
 * @returns {theme, setTheme}
 */
export const useTheme = () => {
	//console.log('useTheme');
	const [theme, setTheme] = useState<ThemeBrightness>('');
	const setColor = (key: UIColorKey) => {
		setTheme(setThemeColor(key));
	};
	return {
		theme,
		setColor,
	};
};
