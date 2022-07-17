import './App.css';
import { useState } from "react";
import React from 'react';
import ListeDeger from './components/ListeDeger';

//<button type="button" onClick={addItem} >Listeye Ekle</button>


function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName
      }]);
    setItemName("");
  };

//(event) => {console.log(items.id!==event.target.previousSibling.textContent[0])}

  function deletele(event) {
    const name=event.target.previousSibling.textContent[0];
    const itemler = items.filter(i=>i.id !== Number(name)-1)
    setItems(itemler)
  }


  return (
    <div className="App">
      <header className="App-header">
        TO DO LİST
      </header>
      <div>
        <div className='todolistdiskutu'>
          {items.map((item) => (<ListeDeger ids={item.id} key={item.id} name={item.name} deletele={deletele}/>))}
        </div>
        <form onSubmit={addItem}>
          <label>
            <input
              name="item"
              type="text"
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />Listeye değer ekle
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
