/* eslint-disable typescript/no-explicit-any */
import { Camera, Dices, MountainSnow } from '@lucide/astro';
import type { Props } from 'astro';

import AngularIcon from './angular.astro';
import AstroIcon from './astro.astro';
import AWSIcon from './aws.astro';
import CssIcon from './css.astro';
import GitIcon from './git.astro';
import GithubIcon from './github.astro';
import GoogleIcon from './google.astro';
import HTMLIcon from './html.astro';
import JavaIcon from './java.astro';
import JavaScriptIcon from './javascript.astro';
import LinkedinIcon from './linkedin.astro';
import SQLIcon from './mysql.astro';
import NodeJSIcon from './node.astro';
import ReactIcon from './react.astro';
import RemixIcon from './remix.astro';
import SpringIcon from './spring.astro';
import StorybookIcon from './storybook.astro';
import TailwindIcon from './tailwind.astro';
import TypeScriptIcon from './typescript.astro';
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
	Angular: AngularIcon,
	Astro: AstroIcon,
	AWS: AWSIcon,
	CSS: CssIcon,
	Git: GitIcon,
	GitHub: GithubIcon,
	'Google Cloud': GoogleIcon,
	HTML: HTMLIcon,
	Java: JavaIcon,
	JavaScript: JavaScriptIcon,
	MySQL: SQLIcon,
	Node: NodeJSIcon,
	NodeJS: NodeJSIcon,
	React: ReactIcon,
	Remix: RemixIcon,
	Spring: SpringIcon,
	'Spring Boot': SpringIcon,
	Storybook: StorybookIcon,
	Tailwind: TailwindIcon,
	TypeScript: TypeScriptIcon,
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
