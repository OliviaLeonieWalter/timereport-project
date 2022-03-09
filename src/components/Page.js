import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';

export const Page = () => {
  return (
    <>
      <Header />

      <Content />
    </>
  );
};