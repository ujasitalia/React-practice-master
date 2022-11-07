// import React, { useState } from 'react';
// import data from './data';
// import List from './List';
// function App() {
//   return <h2>reminder project setup</h2>;
// }

// export default App;

import React from 'react';
import data from './data';
import List from './List';
import {useState} from 'react';

const App = () => {
  const [people, setPeople] = useState(data);
  return(
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn" onClick={()=> setPeople([])}>clear all</button>
      </section>
    </main>
  )
}
export default App;