import React from 'react';
import Logo from '@components/shared/Logo';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__top">
          <Logo />
          <button className="button sidebar__toggle">
            свернуть
          </button>
        </div>
        <nav className="menu sidebar__menu">
          <ul className="list menu__list">
            <li className="list__item menu__list-item">
              <span className="icon menu__list-icon"></span>
              <span className="menu__list-text">Home</span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
};

export default Sidebar;
