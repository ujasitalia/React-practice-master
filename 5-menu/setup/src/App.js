import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// const allCategories = new Set(items.map((item) => item.category)).add('all');

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  let [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    
    const newItems = menuItems.filter((item) => item.category === category);
    setMenuItems(newItems);
    return;
  }

  return (
    <main>
      <section className="menu selection">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
