import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  console.log(props);
  return (
    <header>
      <div className="flex">
        <div className="flex">
          <NavLink activeHouseClass="active" to="/" exact>
            <h3>Popular</h3>
          </NavLink>
          <NavLink
          activeHouseClass="active"
            to="/battle"
            exact
          >
            <h3>Battle</h3>
          </NavLink>
        </div>
        <button className="power" onClick={props.handleMode}>
          {props.darkmode ? '💡' : '🔦'}
        </button>
      </div>
    </header>
  );
}

export default Header;
