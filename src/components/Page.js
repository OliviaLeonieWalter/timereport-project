import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';
import { Login } from './pages/login/Login';

export function Page({ user, setUser, users }) {
  if (!user) return <Login {...{ setUser, users }} />;

  return (
    <>
      <Header {...{ user, setUser }} />

      <main>
        <Content />
      </main>
    </>
  );
};