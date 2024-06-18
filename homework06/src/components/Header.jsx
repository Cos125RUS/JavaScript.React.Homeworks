import {Link, Outlet} from "react-router-dom";

/**
 * Хэдер сайта с навигационными ссылками
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add</Link></li>
                </ul>
            </header>
            <Outlet/>
        </>
    );
}

export default Header;