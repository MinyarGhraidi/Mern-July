
import Tabs from './component/tabs';
import React from 'react';

const App = () => {
  const items = [
    {
      label: 'Tab 1',
      content: 'Content for Tab 1',
    },
    {
      label: 'Tab 2',
      content: 'Content for Tab 2',
    },
    {
      label: 'Tab 3',
      content: 'Content for Tab 3',
    },
    // Add more items here
  ];

  const handleTabClick = (index) => {
    console.log(`Clicked on tab ${index + 1}`);
  };

  return (
    <div>
      <Tabs items={items} onTabClick={handleTabClick} />
    </div>
  );
};

export default App;


