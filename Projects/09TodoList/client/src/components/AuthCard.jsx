import ThemeToggle from "./ThemeToggle";

export function Field({ label, ...props }) {
    return (
        <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                {label}
            </span>
            <input
                {...props}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500"
            />
        </label>
    );
}

export default function AuthCard({ title, subtitle, error, children, footer }) {
    return (
        <main className="grid min-h-screen place-items-center px-4">
            {/* Theme Toggler */}
            <ThemeToggle className="absolute right-4 top-4" />
            <div className="w-full max-w-sm">
                <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                <p className="mb-6 mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {subtitle}
                </p>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    {error && (
                        <p
                            role="alert"
                            className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/60 dark:text-red-300"
                        >
                            {error}
                        </p>
                    )}
                    {children}
                </div>
                <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                    {footer}
                </p>
            </div>
        </main>
    );
}
