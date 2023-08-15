import React, { useState } from 'react';


const Tabs = ({ items, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabClick) {
      onTabClick(index);
    }
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`tab-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">{items[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
