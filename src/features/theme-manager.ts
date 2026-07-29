const THEME = {
	DARK: 'dark',
	LIGHT: 'light',
} as const;

type Theme = (typeof THEME)[keyof typeof THEME];

interface ThemeManagerOptions {
	overrideSystemPreference?: boolean;
	root?: HTMLElement;
	storageKey?: string;
}

type OnThemeChangeCallback = (theme: Theme) => void;

class ThemeManager {
	readonly #matchMedia: MediaQueryList;
	readonly #onThemeChangeCallbacks: OnThemeChangeCallback[] = [];
	readonly #root: HTMLElement;
	readonly #storageKey: string;

	constructor({
		overrideSystemPreference = false,
		root = document.documentElement,
		storageKey = 'theme',
	}: ThemeManagerOptions = {}) {
		this.#root = root;
		this.#storageKey = storageKey;
		this.#matchMedia = matchMedia('(prefers-color-scheme: dark)');
		this.#onThemeChangeCallbacks = [];
		this.#matchMedia.addEventListener('change', (event: MediaQueryListEvent) => {
			const newTheme = event.matches ? THEME.DARK : THEME.LIGHT;
			const storedTheme = this.getStoredPreference();

			if (overrideSystemPreference) {
				this.apply(newTheme);
				this.notifyThemeChange(newTheme);
				if (storedTheme !== undefined) {
					this.setManualPreference(newTheme);
				}
			} else {
				if (storedTheme) {
					return;
				}

				this.apply(newTheme);
				this.notifyThemeChange(newTheme);
			}
		});
	}

	apply(theme: Theme): void {
		const isDark = theme === THEME.DARK;

		this.#root.classList.toggle(THEME.DARK, isDark);
	}

	applyCurrentTheme(): void {
		const currentTheme = this.getCurrentTheme();
		this.apply(currentTheme);
	}

	getCurrentTheme(): Theme {
		const storedTheme = this.getStoredPreference();
		if (storedTheme) {
			return storedTheme;
		}

		return this.getSystemPreference();
	}

	getStoredPreference(): Theme | undefined {
		if (typeof localStorage === 'undefined') {
			return undefined;
		}

		const stored = localStorage.getItem(this.#storageKey);

		if (stored === null) {
			return undefined;
		}

		if (stored !== THEME.DARK && stored !== THEME.LIGHT) {
			return undefined;
		}

		return stored;
	}

	getSystemPreference(): Theme {
		return this.#matchMedia.matches ? THEME.DARK : THEME.LIGHT;
	}

	onThemeChange(callback: OnThemeChangeCallback): void {
		this.#onThemeChangeCallbacks.push(callback);
	}

	removeManualPreference(): void {
		if (typeof localStorage !== 'undefined') {
			localStorage.removeItem(this.#storageKey);
		}
	}

	removeOnThemeChange(callback: OnThemeChangeCallback): void {
		const index = this.#onThemeChangeCallbacks.indexOf(callback);
		if (index !== -1) {
			this.#onThemeChangeCallbacks.splice(index, 1);
		}
	}

	setManualPreference(theme: Theme): void {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(this.#storageKey, theme);
		}
	}

	toggle(): void {
		const current = this.getCurrentTheme();
		const next = current === THEME.DARK ? THEME.LIGHT : THEME.DARK;
		this.setManualPreference(next);
		this.apply(next);
		this.notifyThemeChange(next);
	}

	private notifyThemeChange(theme: Theme): void {
		for (const callback of this.#onThemeChangeCallbacks) {
			callback(theme);
		}
	}
}

export default ThemeManager;
