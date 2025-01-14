/* eslint-disable typescript/no-explicit-any */
import type { Props } from 'astro';
import { Camera, Dices, MountainSnow } from 'lucide-astro';

import AstroIcon from './astro.astro';
import CssIcon from './css.astro';
import GitIcon from './git.astro';
import GithubIcon from './github.astro';
import HTMLIcon from './html.astro';
import JavaScriptIcon from './javascript.astro';
import LinkedinIcon from './linkedin.astro';
import SQLIcon from './mysql.astro';
import NodeJSIcon from './node.astro';
import ReactIcon from './react.astro';
import TailwindIcon from './tailwind.astro';
import XIcon from './x.astro';

const INTEREST_ICONS = {
	Fotografía: Camera,
	Juegos: Dices,
	Naturaleza: MountainSnow,
	'X (Twitter)': XIcon,
} as Record<string, (properties: Props) => any>;

const SOCIAL_ICONS = {
	GitHub: GithubIcon,
	LinkedIn: LinkedinIcon,
	'X (Twitter)': XIcon,
} as Record<string, (properties: Props) => any>;

const SKILLS_ICONS = {
	Astro: AstroIcon,
	CSS: CssIcon,
	Git: GitIcon,
	GitHub: GithubIcon,
	HTML: HTMLIcon,
	JavaScript: JavaScriptIcon,
	MySQL: SQLIcon,
	NodeJS: NodeJSIcon,
	React: ReactIcon,
	Tailwind: TailwindIcon,
} as Record<string, (properties: Props) => any>;

export { INTEREST_ICONS, SKILLS_ICONS, SOCIAL_ICONS };

export { default as ArrowIcon } from './arrow.astro';
export { default as AstroIcon } from './astro.astro';
export { default as CaretDownIcon } from './caret-down.astro';
export { default as CssIcon } from './css.astro';
export { default as GitIcon } from './git.astro';
export { default as GithubIcon } from './github.astro';
export { default as HTMLIcon } from './html.astro';
export { default as JavaScriptIcon } from './javascript.astro';
export { default as LinkedinIcon } from './linkedin.astro';
export { default as SQLIcon } from './mysql.astro';
export { default as NodeJSIcon } from './node.astro';
export { default as ReactIcon } from './react.astro';
export { default as TailwindIcon } from './tailwind.astro';
export { default as XIcon } from './x.astro';
