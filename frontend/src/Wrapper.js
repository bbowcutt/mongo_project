import { Link, Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <>
      <header>
        <Link to="/stores">View all stores</Link>
      </header>
      <header>
        <Link to="/stores/new">Add new store</Link>
      </header>

      <Outlet />
    </>
  );
}
