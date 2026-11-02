import { useDispatch, useSelector } from "react-redux";
import { selectThemeMode, toggleTheme } from "../features/theme/themeSlice";

const ThemeToggle = ({ className = "" }) => {
    const dispatch = useDispatch();
    const mode = useSelector(selectThemeMode);
    const isDark = mode === "dark";

    return (
        <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`grid h-9 w-9 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-blue-500 dark:text-slate-300 dark:hover:bg-slate-800 ${className}`}
        >
            {isDark ? (
                <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
            ) : (
                <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
