import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

import defaultTheme from './theme';
import utils from './utils';

export type { ComponentProps, VariantProps } from '@stitches/react';

export const breakpoints = {
	root: '(min-width: 0px)',
	bp0: '(min-width: 320px)',
	bp1: '(min-width: 520px)',
	bp2: '(min-width: 760px)',
	bp3: '(min-width: 920px)',
	bp4: '(min-width: 1030px)',
	bp5: '(min-width: 1200px)',
	bp6: '(min-width: 1500px)',
	bp7: '(min-width: 1520px)',
	bp8: '(min-width: 1660px)',
	hover: '(any-hover: hover)',
};

export const {
	styled,
	css,
	theme,
	createTheme,
	getCssText,
	globalCss,
	keyframes,
	config,
	reset,
} = createStitches({
	theme: defaultTheme,
	utils,
	media: breakpoints,
});

export type CSS = Stitches.CSS<typeof config>;
