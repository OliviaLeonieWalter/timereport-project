import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example-page">Example Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};