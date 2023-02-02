import React from 'react';
import logo2 from '../img/logo.png';
import { Link } from 'react-router-dom';

const Clsheader = () => {

    const cerrar = () =>{
        sessionStorage.setItem("item_rol", "")
        window.location.href = "/"
    }

    return (
        <div>
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-7">
                                <div class="header__top__left">
                                    <p>Maquinaria texil, repuestos y servicio técnico.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-5">
                                <div class="header__top__right">
                                    <div class="header__top__links">
                                        <button  id="btn_close" class="site-btn" onClick={() => cerrar()}>Cerrar sesión</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <div class="header__logo">
                                <Link to="/Cliente"><img src={logo2} style={{ width: 100 }} alt="" /></Link>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <nav class="header__menu mobile-menu">
                                <ul>
                                    <li><Link to="/Cliente">Inicio</Link></li>
                                    <li><Link to="/Pedidos">Pedidos</Link></li>
                                    <li><Link to="/Micuenta">Mi cuenta</Link></li>
                                    <li><Link to="/Reclamos">Sugerencias</Link></li>
                                    <li><Link to="/Compra">Compra</Link></li>
                                    <li><Link to="/Carrito">Carrito</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="canvas__open"><i class="fa fa-bars"></i></div>
                </div>
            </header>

        </div>
    )
}

export default Clsheader