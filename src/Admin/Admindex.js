import React, { useEffect, useState } from 'react'


//import React from "react";
//import ReactDOM from "react-dom"
/*const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
}

const onApprove = (data, actions) => {

    return actions.order.capture();

}*/

const Admindex = () => {
    //var item_valueid = sessionStorage.getItem("item_key");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [dato_usuario, usuario] = useState("0");
    const [dato_pedidos, pedidos] = useState("0");
    const [dato_domicilio, domicilio] = useState("0");
    const [dato_reclamos, reclamos] = useState("0");
    const [dato_fecha, fecha] = useState("S/D");
    const [dato_total, total] = useState("0");

    const fetchData = async () => {
        const resp = await fetch("http://localhost:4000/apiconteo");
        const data1 = await resp.json();
        
        if(data1 !== "Error en la API: /contador"){
            usuario(data1.usuarios)
            pedidos(data1.pedidos)
            domicilio(data1.domicilio)
            reclamos(data1.reclamos)
            fecha(data1.fecha)
            total(data1.total)
        }
    };


    useEffect(() => {
        setLoading(true);
        fetchData();
        setLoading(false)
    }, [])

    return (
        <div>
            <section class="menu inicio">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="cart__total">
                                <h2>Bienvenido !!</h2>
                                <br />
                                <h5>Tipo usuario: Administrador</h5>
                                <br />
                                <a href="/Inicio" class="primary-btn">Cerrar sesión</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="cart__total">
                                <h2>Reportes:</h2>
                                <>

                                        <ul>
                                            <li id="total_clientes">Total clientes: {dato_usuario}</li>
                                            <li id="tatal_reclamos">Total sugerencias: {dato_reclamos}</li>
                                            <li id="tatal_reclamos">Número de pedidos: {dato_pedidos}</li>
                                            <li id="tatal_reclamos">Pedidos a domicilio: {dato_domicilio}</li>
                                            <li id="total_stock">Fecha último pedido: {dato_fecha}</li>
                                            <li id="total_pedidos">Valor total último pedido: $ {dato_total}</li>
                                        </ul>
                           
                                </>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="cart__total">
                                <h2>Acceso rápido:</h2>
                                <ul>
                                    <li><a href="./Admin"><i class="fab fa-diaspora"></i>  Inicio</a></li>
                                    <li><a href="./Listapro"><i class="fab fa-buffer"></i>  Lista Productos</a></li>
                                    <li><a href="./Admlisclientes"><i class="fab fa-buffer"></i>  Lista Usuarios</a></li>
                                    <li><a href="./Admclientes"><i class="fab fa-pushed" aria-hidden="true"></i>  Sugerencias Generales</a></li>
                                    <li><a href="./Admclientes2"><i class="fab fa-pushed" aria-hidden="true"></i>  Sugerencias sin Revisar</a></li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <br />

                     
                    </div>
                </div>
            </section>
            <br />
            <br />
        </div>
    )
}

export default Admindex