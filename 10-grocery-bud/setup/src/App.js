import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return (list=JSON.parse(localStorage.getItem('list')));
  }
  else{
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  },[list]) 

  const handleChange = (e) => {
    e.preventDefault();
    if(name===''){
      // danger alert
      showAlert(true, 'please enter value', 'danger');
    }
    else if(name && isEditing) {
      setList(
        list.map((item) => {
          if(item.id === editId){
            return {...item, title:name};
          }
          return item;
        })
      );
      showAlert(true, 'item edited', 'success');
      setIsEditing(false);
      setName('');
      setEditId('');
    }
    else{
      showAlert(true, 'item added to the list', 'success');
      const newItem = {id: new Date().getTime().toString(), title:name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  const clearList = () => {
    showAlert(true, 'list empty', 'danger');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditId(id);
    setName(specificItem.title);
    setIsEditing(true);
  }

  return (
    <section className="section-center">

      <form onSubmit={handleChange} className="grocery-form">
        {/* alert container */}
        {alert.show && <Alert {...alert}  removeAlert={showAlert} list={list}/>}

        <h3>grocery buddy</h3>
        <div className="form-control">
          <input type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className='grocery' 
            placeholder='e.g. bread'
          />
          <button className="submit-btn" type='submit'>
            {isEditing? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {/* list container */}
      {list.length>0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
      )}
            
    </section>
  )
}

export default App
