import { NavLink } from 'react-router-dom';

export function Header({ user, logout }) {
  return (
    <header id='primary-header'>
      <div>
        <img src={user.avatar_url ? user.avatar_url : 'profile-picture.png'} alt="Profile" />
        <h1>{user.name}</h1>
      </div>
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
      <button onClick={() => logout()} children="Log out" />
    </header>
  );
};