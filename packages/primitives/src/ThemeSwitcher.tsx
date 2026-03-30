import { clsx } from "clsx";
import { useTheme, themeNames, themeLabels } from "./ThemeProvider";

export function ThemeSwitcher({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	return (
		<div className={clsx("flex flex-wrap gap-2", className)}>
			{themeNames.map((name) => (
				<button
					key={name}
					type="button"
					onClick={() => setTheme(name)}
					className={clsx(
						"px-3 py-1.5 rounded-md text-sm font-medium transition-all",
						"border border-app-line",
						theme === name
							? "bg-accent text-black border-accent"
							: "bg-app-box text-ink-dull hover:bg-app-hover hover:text-ink"
					)}
				>
					{themeLabels[name]}
				</button>
			))}
		</div>
	);
}
