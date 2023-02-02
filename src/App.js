import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Usrheader from './Components/Usrheader';
import Usrfooter from './Components/Usrfooter';
import Usrindex from './Components/Usrindex';
import Usrnosotros from './Components/Usrnosotros';
import Usrcatalogo from './Components/Usrcatalogo';
import Usrcatalogofil from './Components/Usrcatalogofil';
import Usrcontactos from './Components/Usrcontactos';
import Usrregistro from './Components/Usrregistro';
import Usrlogin from './Components/Usrlogin';
import Clsheader from './Cliente/Clsheader';
import Clsindex from './Cliente/Clsindex';
import Clspedidos from './Cliente/Clspedidos';
import Clsmicuenta from './Cliente/Clsmicuenta';
import Clsrecuppass from './Cliente/Clsrecuppass';
import Clsreclamo from './Cliente/Clsreclamo';
import Clscompra from './Cliente/Clscompra';
import Clsproducto from './Cliente/Clsproducto';
import Clscarrito from './Cliente/Clscarrito';
import Admheader from './Admin/Admheader';
import Admindex from './Admin/Admindex';
import Admnuevopro from './Admin/Admnuevopro';
import Admreporteped from './Admin/Admreporteped';
import Admlistapro from './Admin/Admlistapro';
import Admpedido from './Admin/Admpedido';
import Admreclamo from './Admin/Admreclamo';
import Admreclamo2 from './Admin/Admreclamo2';
import Admcliente from './Admin/Admcliente';
import Admcliente2 from './Admin/Admcliente2';
import Admeditproducto from './Admin/Admeditproducto';
import UsuPrueba from './Components/UsuPrueba';
import Usurecuperar from './Components/Usurecuperar';
import Admlisclientes from './Admin/Admlisclientes';


function App() {


  var item_varRoll = sessionStorage.getItem("item_rol");
  //var item_varRoll = "Cliente"
  var sess = ""
  /*const [users, setUsers] = useState([]);
  const initialurl = "http://localhost:4000/users";
  const varid = "";
  const [postId, setPostId] = useState([]);

  const fetchUsers = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ var11: 'la mona' })
    };
    fetch('http://localhost:4000/users', requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []); Admreporteped*/

  const FiltRollCli = () => {
    return <Router>
      <div>
        <Routes>
          <Route path="/Cliente"
            element={<><Clsheader /><Clsindex /></>} />
          <Route path="/Pedidos"
            element={<><Clsheader /><Clspedidos /></>} />
          <Route path="/CliProducto/:idpro/:idcliente" component={Clsproducto}
            element={<><Clsheader /><Clsproducto /></>} />
          <Route path="/Micuenta"
            element={<><Clsheader /><Clsmicuenta /></>} />
          <Route path="/Recpass"
            element={<><Clsheader /><Clsrecuppass /></>} />
          <Route path="/Reclamos"
            element={<><Clsheader /><Clsreclamo /></>} />
          <Route path="/Compra"
            element={<><Clsheader /><Clscompra /></>} />
          <Route path="/Carrito"
            element={<><Clsheader /><Clscarrito /></>} />
        </Routes>
      </div>
    </Router>
  }

  const FiltRollAdm = () => {
    return <Router>
      <div>
        <Routes>
          <Route path="/Admin"
            element={<><Admheader /><Admindex /></>} />
          <Route path="/Nuevopro"
            element={<><Admheader /><Admnuevopro /></>} />

          <Route path="/Reporteped/:pedido" component={Admreporteped}
            element={<><Admheader /><Admreporteped /></>} />  
          
          <Route path="/Listapro"
            element={<><Admheader /><Admlistapro /></>} />
          <Route path="/Admpedido"
            element={<><Admheader /><Admpedido /></>} />

          <Route path="/Admreclamo/:nomb" component={Admreclamo}
            element={<><Admheader /><Admreclamo /></>} />

          <Route path="/Admreclamo2/:nomb2" component={Admreclamo2}
            element={<><Admheader /><Admreclamo2 /></>} />
          <Route path="/Admclientes"
            element={<><Admheader /><Admcliente /></>} />
          <Route path="/Admlisclientes"
            element={<><Admheader /><Admlisclientes /></>} />  
          <Route path="/Admclientes2"
            element={<><Admheader /><Admcliente2 /></>} />
          <Route exact path="/Admeditarpro/:idpro" component={Admeditproducto}
            element={<><Admheader /><Admeditproducto /></>} />
          <Route path="/Prueba"
            element={<><Usrheader /><UsuPrueba /></>} />
        </Routes>
      </div>
    </Router>
  }

  const FiltRollUsuario = () => {
    return <Router>
      <div>
        <Routes>
          <Route path="/Inicio"
            element={<><Usrheader /><Usrindex /></>} />
          <Route exact path="/"
            element={<><Usrheader /><Usrindex /></>} />
          <Route path="/Nosotros"
            element={<><Usrheader /><Usrnosotros /></>} />
          <Route path="/Catalogo"
            element={<><Usrheader /><Usrcatalogo /></>} />
          <Route path="/Catalogofil/:fil" component={Usrcatalogofil}
            element={<><Usrheader /><Usrcatalogofil /></>} />
          <Route path="/Contactos"
            element={<><Usrheader /><Usrcontactos /></>} />
          <Route path="/Recuperar"
            element={<><Usrheader /><Usurecuperar /></>} />
          <Route path="/Registro"
            element={<><Usrheader /><Usrregistro /></>} />
          <Route path="/Login"
            element={<><Usrheader /><Usrlogin /></>} />
        </Routes>
      </div>
    </Router>
  }



  return (
    <>
      {item_varRoll === "Administrador" ? < FiltRollAdm /> : item_varRoll === "Cliente" ? < FiltRollCli /> : null}
      <FiltRollUsuario />
      <Usrfooter />
    </>
  );
}


export default App;
