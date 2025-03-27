
import { Link, useLocation, } from "react-router-dom";
import "./header.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";


const header = () => {
    const location = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleAuthAction = () => {
        if (user) {
            logout(); // ✅ Logout qilish
        } else {
            navigate("/register"); // ✅ Ro‘yxatdan o‘tish sahifasiga yo‘naltirish
        }
    };
    return (
        <header>
            <div className="logo">
                <img src="..\public\mohirdev-logo-light.svg" alt="" />
            </div>
            <div className="navbar">
                <nav>
                    <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                        Asosiy
                    </Link>
                    <Link to="/kasblar" className={`nav-link ${location.pathname === "/kasblar" ? "active" : ""}`}>
                        Kasblar
                    </Link>
                    <Link to="/kurslar" className={`nav-link ${location.pathname === "/kurslar" ? "active" : ""}`}>
                        Kurslar
                    </Link>
                    <Link to="/portfolio" className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>
                        Portfolio
                    </Link>
                </nav>
            </div>
            <div className="login">
                {/* Portfolio ikon */}
                <button onClick={handleAuthAction}>
                    {user ? "Logout" : "Login"}
                </button>
            </div>
        </header >
    )
}

export default header;