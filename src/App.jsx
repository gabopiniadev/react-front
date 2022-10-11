import React, {useEffect, useState} from 'react';
import MenuNav from './components/pages/Nav/nav';
import Listoperator from './components/pages/Contein/content';
import Pages from './components/pages/Contein/pagination';
import Header from './components/pages/Header/header'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/main.css'

function App() {
  const url = ''
  const [proveedor, setProveedor] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setProveedor(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
   <>
      <MenuNav />
      <Header />
        <h1 className='proveedor'> Lista de Proveedores!</h1>  
      <Listoperator />
      <Pages />

   </> 
  );
}

export default App;
