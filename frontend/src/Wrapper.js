import { Link, Outlet } from 'react-router-dom';
import './stores.css'

export default function Wrapper() {
  return (
    <>
      <header>
        <link rel="stylesheet" href="stores.css" />
        <Link to="/stores">View all stores</Link>
      </header>
      <header>
      <link rel="stylesheet" href="stores.css" />
        <Link to="/stores/new">Add new store</Link>
      </header>
    

      <Outlet />
    </>
  );
}
