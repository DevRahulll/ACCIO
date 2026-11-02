import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ProtectedRoute, PublicRoute } from "./components/RouteGuards";
import Dashboard from "./pages/Dashboard";
import { selectThemeMode } from "./features/theme/themeSlice";

function App() {
    const mode = useSelector(selectThemeMode);

    useEffect(() => {
        const root = document.documentElement;
        if (mode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", mode);
    }, [mode]);

    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
    );
}

export default App;
