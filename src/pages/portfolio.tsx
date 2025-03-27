import "./portfoli.css"
import { useAuth } from "../AuthContext";

const Portfolio = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return <p>Ma'lumot topilmadi.</p>;
    }

    return (
        <>
            <div className="div" >
                <h2>Portfolio</h2>
                <p><strong>Ism:</strong> {user.fullName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
                <button onClick={logout}>Chiqish</button>
            </div>
        </>
    );
};

export default Portfolio;
