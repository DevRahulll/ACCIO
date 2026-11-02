import { useState } from "react";
import AuthCard, { Field } from "../components/AuthCard";
import { Link } from "react-router-dom";

const Login = () => {
    const [form, setFrom] = useState({ email: "", password: "" });

    const onChange = () => {};
    const onSubmit = () => {
        setFrom({
            email: "",
            password: "",
        });
    };

    return (
        <AuthCard
            title={"Welcome back"}
            subtitle={"Log in to see your tasks."}
            error={""}
            footer={
                <>
                    New here?{" "}
                    <Link
                        to={"/register"}
                        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                        Create an account
                    </Link>
                </>
            }
        >
            <form onSubmit={onSubmit} className="space-y-4">
                <Field
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                />
                <Field
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required
                    autoComplete="current-password"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-60"
                >
                    {status === "loading" ? "Logging in…" : "Log in"}
                </button>
            </form>
        </AuthCard>
    );
};

export default Login;
