// import React, { useState, useEffect } from 'react'
// import Loading from './Loading'
// import Tours from './Tours'
// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tours-project'
// function App() {
//   return <h2>Tours Project Setup</h2>
// }

// export default App
import React from 'react';
import {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App () {  
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  useEffect(()=> {
    setLoading(true);
    fetchTours();
  }, [])

  if(tours.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  if(loading) {
    return <main>
      <Loading />
    </main>
  }

  return(
      <main>
        <Tours tours={tours}  setTours={setTours}/>
      </main>
  )
}
export default App;