import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/magicitemshop">Magic Item Shop</Link>
            <Link to="/magicitemdatabase">Magic Item Database</Link>
        </header>
    );
}