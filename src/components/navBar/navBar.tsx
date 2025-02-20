import DesktopNavBar from "./desktopNavBar";
import MobileNavBar from "./mobileNavBar";

const Navbar: React.FC = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  );
};

export default Navbar;
