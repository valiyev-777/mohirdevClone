import { Link } from "react-router-dom";
import "./navbar.css"

const navbar = () => {
    return (
        <>
            <nav>
                <Link to="/">Asosiy</Link>
                <Link to="/kasblar">Blog</Link>
                <Link to="/Portfolio">Result</Link>
            </nav>
        </>
    )
}

export default navbar;