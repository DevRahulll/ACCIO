import { useState } from "react";
import AuthCard, { Field } from "../components/AuthCard";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const onChange = () => {};
    const onSubmit = (e) => {
        e.preventDefault();

        setForm({
            name: "",
            email: "",
            password: "",
        });
    };
    return (
        <AuthCard
            title={"Create your account"}
            subtitle={"Your tasks stay private to you."}
            error={""}
            footer={
                <>
                    Already registered?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                        Log in
                    </Link>
                </>
            }
        >
            <form onSubmit={onSubmit} className="space-y-4">
                <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    autoComplete="name"
                />
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
                    label="Password (min 5 characters)"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required
                    minLength={6}
                    autoComplete="new-password"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-60"
                >
                    {status === "loading"
                        ? "Creating account…"
                        : "Create account"}
                </button>
            </form>
        </AuthCard>
    );
};
export default Register;
