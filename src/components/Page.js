import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';

export function Page({ user, setUser }) {
  return (
    <>
      <Header {...{ user, setUser }} />

      <main>
        <Content />
      </main>
    </>
  );
};