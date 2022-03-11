import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';

export function Page({ user, logout }) {
  return (
    <>
      <Header {...{ user, logout }} />

      <main>
        <Content />
      </main>
    </>
  );
};