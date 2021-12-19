import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Home
            </NavLink>
          </li>
          <li>
            <li>
              <NavLink activeClassName={classes.active} to="/products">
                Products
              </NavLink>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
