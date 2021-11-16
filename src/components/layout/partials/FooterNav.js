import React from "react";
import classNames from "classnames";
import { Link, useLocation, useHistory } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);
  const location = useLocation();
  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        {location.pathname == "/" ? (
          <li>
            <Link to="/contact">Contact us -></Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default FooterNav;
