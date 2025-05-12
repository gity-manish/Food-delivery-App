import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets/frontend_assets/assets';



const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div
              key={index}
              className={`explore-menu-list-item ${isActive ? 'active' : ''}`}
              onClick={() =>
                setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
              }
            >
              <div className="explore-menu-img-wrapper">
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  loading="lazy"
                  className={isActive ? 'active' : ''}
                />
              </div>
              <p className="menu-name">{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
      
    </div>
  );
};

export default ExploreMenu;
