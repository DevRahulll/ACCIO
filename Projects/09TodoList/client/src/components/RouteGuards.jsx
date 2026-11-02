import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
    const isAuth = false;
    return isAuth ? <Outlet /> : <Navigate to={"/login"} replace />;
}

export function PublicRoute() {
    const isAuth = false;
    return isAuth ? <Navigate to={"/"} replace /> : <Outlet />;
}
