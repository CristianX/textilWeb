import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Admcliente2 = () => {
    const [nombre, Use_nombre] = useState("")
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);



    const soloLetras = () => {
        var nose = document.getElementById("nom_cliente").value
        var knose = nose.replace(/[1234567890]/, "").replace("@", "").replace(/[,.-;:_{}+*/¡¿?'=)(&%$#"!|°><)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("nom_cliente").value = knose

        Use_nombre(knose)
    }




    const SendNom = async () => {

        var data1= []

        if (nombre.length === 0) {
            const resp = await fetch("http://localhost:4000/apiadminreclamos/_ERROR_");
            data1 = await resp.json();
        } else {
            alert ("entro 2")
            const resp = await fetch("http://localhost:4000/apiadminreclamos/" + nombre);
            data1 = await resp.json();
        }

        setData(data1);

        if(data1.length === 0){
            alert("Al momento no tiene sugerencias por revisar.")
        }
    }

    useEffect(() => {
        setLoading(true);
       // SendNom();
        setLoading(false)
    }, [])

    const refress = () => {
        window.location.href = "/Admclientes2"
    }

    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                    
                            <div class="row">
                                <div class="col-lg-8 col-md-6">



                                    <h6 class="checkout__title">Lista de Clientes con sugerencias sin revisar</h6>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Nombre del cliente    <span style={{color:"gray"}}>(filtro por nombre o letra inicial)</span><span></span></p>
                                                <input id="nom_cliente" type="text" placeholder="Nombre" onChange = {() => soloLetras()}/>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="checkout__title"></h6>

                                    <div class="row">
                                        <div class="col-lg-6">
                                            <button  class="site-btn" id="btn_buscar" onClick={() => SendNom()}>BUSCAR</button>
                                        </div>
                                        <div class="col-lg-6">
                                            <button type="submit" class="site-btn" onClick={() => refress()}>REFRESCAR</button>
                                        </div>
                                    </div>
                                    <h6 class="checkout__title"></h6>

                                    <div class="row">
                                        <table id="tbl_clientes" class="table">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Dirección</th>
                                                    <th scope="col">Teléfono</th>
                                                    <th scope="col">Correo</th>
                                                    <th scope="col">Sugerencias</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <>
                                                {data.filter(varid => varid).map(filname => (
                                                <tr>
                                                    <th scope="row">{filname.UsuNombre + " " + filname.UsuApellido}</th>
                                                    <td>{filname.UsuDireccion}</td>
                                                    <td>{filname.UsuTelefono}</td>
                                                    <td>{filname.UsuEmail}</td>
                                                    <td><Link to ={"/Admreclamo2/" + filname._id}><a>Ver Sugerencias</a></Link></td>
                                                </tr>
                                                ))}
                                                </>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Admcliente2