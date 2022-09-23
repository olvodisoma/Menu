import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {React,useState} from 'react';

import {Menus} from './components/Menus';
import {Categories} from './components/Categories';
import {menus} from './data';
import {allCategories} from './data';

function App() {
  const [categories,setCategories] = useState(allCategories)
  const [ourMenus,setOurMenus] = useState(menus)

  //console.log("state App:",categories)
  return (
    <div className="container border">
      <h1 className='text-center'>Our menu</h1>
      <Categories categories={categories} ourMenus={ourMenus} setOurMenus={setOurMenus}/>
      <Menus ourMenus={ourMenus}/>
    </div>
  );
}

export default App;
