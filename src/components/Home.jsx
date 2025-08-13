import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Sign In</Link>
                <Link to="/register">Sign Up</Link>
            </nav>
        </>
    )
}
