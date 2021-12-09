import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="y-app">
      <header>
        <NavLink to="/">Home</NavLink>
        <div className="navs">
          <NavLink to="/checking">Checking</NavLink>
          <NavLink to="/savings">Savings</NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;