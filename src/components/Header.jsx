import { Link } from 'react-router-dom';
import '../App.css';
const Header = () => {
  return (
    <div className="header">
        <nav className='nav-bar'>
            <h1><Link className='navbar-title' to='/'>Movie Finder</Link></h1>
            <ul className='nav-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/popular'>Popular</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header