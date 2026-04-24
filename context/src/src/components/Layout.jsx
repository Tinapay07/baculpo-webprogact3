import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#181716]">
      <NavBar />
      <main className="pb-20 pt-32 sm:pt-36">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
