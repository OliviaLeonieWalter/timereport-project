import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header id='primary-header'>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/example" className={({ isActive }) => isActive ? 'active' : ''}>Example</NavLink>
          </li>
          <li>
            <NavLink to="/dev" className={({ isActive }) => isActive ? 'active' : ''}>Development</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};