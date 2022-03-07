import { Link } from 'react-router-dom';
import Login from './components/pages/login/Login';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Login />
          </li>
          <li>
            <Link to="/example-page">Example Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};