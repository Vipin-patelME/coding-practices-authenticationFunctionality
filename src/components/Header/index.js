// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nave-cont">
    <Link to="/">
      <p className="para-style">Home</p>
    </Link>
    <Link to="/about">
      <p>About</p>
    </Link>
  </nav>
)
export default Header
