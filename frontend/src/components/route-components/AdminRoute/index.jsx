// components/AdminRoute.jsx
import { useAuthContext } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, isAuthChecked } = useAuthContext();

     if (!isAuthChecked) {
        return <div>Loading...</div>;
    }

    if (!user) return <Navigate to="/" />;

    if (user.role !== "admin") return <Navigate to="/" />;

    return children;
};

export default AdminRoute;