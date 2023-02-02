import React from 'react'
import logo2 from '../img/logo.png';
import { Link } from 'react-router-dom';

const Admheader = () => {

    const cerrar = () => {
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
                                        <button class="site-btn" onClick={() => cerrar()}>Cerrar sesión</button>
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
                                    <li><a href="/Admin">Inicio</a></li>
                                    <li><a href="/Nuevopro">Nuevo Producto</a></li>
                                    <li><a href="/Listapro">Lista Productos</a></li>
                                    <li><a href="/Admpedido">Pedidos</a></li>
                                    <li><a >Sugerencias</a>
                                        <ul class="dropdown">
                                            <li><a href="/Admclientes">Generales</a></li>
                                            <li><a href="/Admclientes2">Sin Revisar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/Admlisclientes">Clientes</a></li>
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

export default Admheader