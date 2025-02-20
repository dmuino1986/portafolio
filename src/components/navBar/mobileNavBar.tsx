import { MdClose, MdOutlineMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { hideMenu, showMenu } from "../../store/navBarSlice";
const MobileNavBar = () => {
  const isMenuOpen = useSelector(
    (state: RootState) => state.navbar.isMenuActive
  );
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(showMenu());
  };

  const closeMenu = () => {
    dispatch(hideMenu());
  };

  return (
    <nav className={`navbar mobile-nav ${isMenuOpen ? "show" : ""}`}>
      {!isMenuOpen ? (
        <MdOutlineMenu size="50px" onClick={openMenu} />
      ) : (
        <MdClose size="50px" onClick={closeMenu} />
      )}
      {isMenuOpen && (
        <ul>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default MobileNavBar;
