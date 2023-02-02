import React, { useEffect, useState } from 'react'

const Clsindex = () => {
    var item_valueid = sessionStorage.getItem("item_key");
    const [postId, setPostId] = useState([]);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);

    const MisDatos = async () => {

        const resp = await fetch("http://localhost:4000/apiusumicuenta/" + item_valueid);
        const data1 = await resp.json();

        if (!data1[0].UsuNombre) {
            alert("Gestione sus datos para utilizar el sistema")
            window.location.href = "/micuenta"
        }
        else
            setData(data1);


    }

    const MiPedido = async () => {

        const resp = await fetch("http://localhost:4000/apiinfopedido/" + item_valueid);
        const data1 = await resp.json();
        if (data1.length !== 0) 
            setData2(data1);   
        
    }

    const cerrar = () =>{
        sessionStorage.setItem("item_rol", "")
        window.location.href = "/"
    }

    useEffect(() => {
        setLoading(true);
        MisDatos();
        MiPedido();
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
                                {data.filter(varid => varid).map(filname => (
                                    <ul>
                                        <li id="txt_nom">{filname.UsuNombre + " " + filname.UsuApellido}</li>
                                        <li id="txt_correo">{filname.UsuEmail}</li>
                                        <li id="txt_tipous">Tipo de usuario : {filname.UsuRol}</li>
                                        <li><a href="./Recpass"><i class="" aria-hidden="true"></i>Cambiar contraseña</a></li>
                                    </ul>
                                ))}
                                <button  id="btn_close" onClick={() => cerrar()} class="site-btn">Cerrar sesión</button>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="cart__total">
                                <h2>Pedidos:</h2>
                                {data2.filter(varid => varid).map(filname => (
                                    <ul>
                                        <li id="txt_fecha_pedido">Último pedido: {filname.PedFecha}</li>
                                        <li id="txt_total">Precio total: ${filname.PedTotal}</li>
                                        <li id="txt_tipouni">Estado del pedido: {filname.PedEstado}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="cart__total">
                                <h2>Acceso rápido:</h2>
                                <ul>
                                    <li><a href="./Cliente"><i class="fab fa-diaspora"></i>_Inicio</a></li>
                                    <li><a href="./Pedidos"><i class="fab fa-creative-commons-share"></i>_Mis pedidos</a></li>
                                    <li><a href="./Micuenta"><i class="fab fa-buffer"></i>_Mi cuenta</a></li>
                                    <li><a href="./Reclamos"><i class="fab fa-pushed" aria-hidden="true"></i>Sugerencias</a></li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </section>
            <br />
            <br></br>
        </div>
    )
}

export default Clsindex