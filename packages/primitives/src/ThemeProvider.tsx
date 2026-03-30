import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

export const themeNames = [
	"dark",
	"light",
	"midnight",
	"noir",
	"slate",
	"nord",
	"mocha",
	"neon-lime",
	"pink",
	"orange",
	"elegant",
] as const;

export type ThemeName = (typeof themeNames)[number];

const themeClassMap: Record<ThemeName, string> = {
	dark: "dark",
	light: "light",
	midnight: "midnight-theme",
	noir: "noir-theme",
	slate: "slate-theme",
	nord: "nord-theme",
	mocha: "mocha-theme",
	"neon-lime": "neon-lime-theme",
	pink: "pink-theme",
	orange: "orange-theme",
	elegant: "elegant-theme",
};

export const themeLabels: Record<ThemeName, string> = {
	dark: "Dark",
	light: "Light",
	midnight: "Midnight",
	noir: "Noir",
	slate: "Slate",
	nord: "Nord",
	mocha: "Mocha",
	"neon-lime": "Neon Lime",
	pink: "Pink",
	orange: "Orange",
	elegant: "Elegant",
};

interface ThemeContextValue {
	theme: ThemeName;
	setTheme: (theme: ThemeName) => void;
	themes: typeof themeNames;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function removeAllThemeClasses(el: HTMLElement) {
	for (const name of themeNames) {
		el.classList.remove(themeClassMap[name]);
	}
}

export function ThemeProvider({
	children,
	defaultTheme = "neon-lime",
	persistKey = "sqx-theme",
}: {
	children: ReactNode;
	defaultTheme?: ThemeName;
	persistKey?: string;
}) {
	const [theme, setThemeState] = useState<ThemeName>(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem(persistKey);
			if (stored && themeNames.includes(stored as ThemeName)) {
				return stored as ThemeName;
			}
		}
		return defaultTheme;
	});

	useEffect(() => {
		const el = document.documentElement;
		removeAllThemeClasses(el);
		el.classList.add(themeClassMap[theme]);
		localStorage.setItem(persistKey, theme);
	}, [theme, persistKey]);

	const setTheme = useCallback((next: ThemeName) => {
		setThemeState(next);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, themes: themeNames }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
	return ctx;
}
