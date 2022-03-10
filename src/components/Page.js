import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';

export function Page() {
  return (
    <>
      <Header />

      <main>
        <Content />
      </main>
    </>
  );
};