import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Admpedido = () => {
    const [dato_tipo, Pro_tipo] = useState("Todo")
    const [dato_entrega, Pro_entrega] = useState("Todo")
    const [dato_codpedido, Cod_pedido] = useState("_ERROR_")
    const [dato_id, Ped_id] = useState("")
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
        //setSelectedFile(event.target.files[0]);

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        fd.append('file', event.target.files[0])
        fd.append('name', dato_id)

        axios.post("http://localhost:4000/apifactura", fd, config)
            .then((response) => alert(response.data, List_pedidos())
            );

    };


    const List_pedidos = async () => {


        //if (document.getElementById("ped_codigo").value.length === 0)
            //Cod_pedido("_ERROR_")
       // else
            //Cod_pedido(document.getElementById("ped_codigo").value)

        const resp = await fetch("http://localhost:4000/apiadminproducto/" + dato_codpedido + "/" + dato_tipo + "/" + dato_entrega);
        const data1 = await resp.json();
        setData(data1);

        if (data1.length === 0) {
            alert("No se han encontrado pedidos.")
        }
    }

    /*useEffect(() => {
        setLoading(true);
        //List_pedidos();
        setLoading(false)
    }, [])*/

    const refress = () => {
        window.location.href = "/Admpedido"
    }

    const Pedido_entregado = async (pedido_id) => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch("http://localhost:4000/apifactura/" + pedido_id, requestOptions)
            .then((response) => response.json())
            .then((data) => List_pedidos());

        
    }



    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <div class="row">
                            <div class="col-lg-12 col-md-8">
                                <h6 class="checkout__title">Reporte Pedidos</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="shop__product__option__right">
                                            <p>Filtro por estado del pedido:</p>
                                            <select style={{ paddingRight: 100 }}>
                                                <option value="" onClick={() => Pro_tipo("Todo")}>Todo</option>
                                                <option value="" onClick={() => Pro_tipo("Proceso de pago")}>Proceso de facturación</option>
                                                <option value="" onClick={() => Pro_tipo("Finalizado")}>Finalizado</option>
                                            </select><br /><br />
                                            <p>Filtro por estado de la entrega:</p>
                                            <select style={{ paddingRight: 100 }}>
                                                <option value="" onClick={() => Pro_entrega("Todo")}>Todo</option>
                                                <option value="" onClick={() => Pro_entrega("Entrega a domicilio")}>Entrega a domicilio</option>
                                                <option value="" onClick={() => Pro_entrega("Retiro en sucursales")}>Retiro en sucursales</option>
                                                <option value="" onClick={() => Pro_entrega("Entregado")}>Entregado</option>
                                            </select><br /><br />
                                            {/*<p>Código del pedido: &nbsp;&nbsp; </p>
                                            <input id="ped_codigo" maxlength="25" type="text" placeholder="Código" />*/}
                                        </div>
                                    </div>
                                </div>
                                <h6 class="checkout__title"></h6>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <button type="submit" class="site-btn" id="btn_buscar" onClick={() => List_pedidos()}>BUSCAR</button>
                                    </div>
                                    <div class="col-lg-6">
                                        <button class="site-btn" onClick={() => refress()}>REFRESCAR</button>
                                    </div>
                                </div>
                                <h6 class="checkout__title"></h6>

                                <div class="row">
                                    <table class="table" id="tbl_pedidos">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Fecha</th>
                                                {/*<th scope="col">Código de pedido</th>*/}
                                                <th scope="col">Estado del pedido</th>
                                                <th scope="col">Valor Total</th>
                                                <th scope="col">Estado de la entrega</th>
                                                <th scope="col">Dirección de entrega</th>
                                                <th scope="col">Factura</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <>
                                                {data.filter(varid => varid).map(filname => (
                                                    <tr>
                                                        <th scope="row">{filname.PedFecha}</th>
                                                        {/*<td>{filname._id}</td>*/}
                                                        <td>{filname.PedEstado}</td>
                                                        <td>${filname.PedTotal}</td>
                                                        <td>{filname.PedEntrega !== "Entregado" ? <>{filname.PedEntrega} | <a class="cambio_entrega" onClick={() => Pedido_entregado(filname._id)}>Entregar</a></> : filname.PedEntrega}</td>
                                                        <td>{filname.PedUbicacion}</td>
                                                        <td>
                                                            <label class="custom-file-upload" >
                                                                <input class="input_factura" type="file" multiple accept=".pdf" name="file" id="pro_urlimg" onChange={changeHandler} onClick={() => Ped_id(filname._id)} />
                                                                subir archivo
                                                            </label>
                                                        </td>
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

export default Admpedido