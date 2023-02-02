import React, { useEffect, useState } from 'react'

const Clspedidos = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [var_idped, SetIdPed] = useState("");
    const [dato_tipo, Pro_tipo] = useState("Todo");
    var item_valueid = sessionStorage.getItem("item_key");


    const regis = async () => {


        const resp = await fetch("http://localhost:4000/apiverpedidos/" + item_valueid + "/" + dato_tipo);
        const data1 = await resp.json();
        setData(data1);

        if (data1.length === 0) {
            alert("No existen pedidos con estado " + dato_tipo)
            window.location.href = "/Pedidos"
        }

    }

    const des_factura = (var_id) => {
        //window.open = ("http://localhost:4000/apifactura/" + var_id, '_blank')
        var anchor = document.createElement('a');
        anchor.href = "http://localhost:4000/apifactura/" + var_id;
        anchor.target = "_blank";
        anchor.click();
    }

    useEffect(() => {
        setLoading(true);
        //regis();
        setLoading(false)
    }, [])
    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">

                        <div class="row">
                            <div class="col-lg-12 col-md-8">
                                <h6 class="checkout__title">Mis pedidos</h6>
                                <div class="row">
                                    <div class="col-lg-6">

                                        <p>Estado del pedido   <span style={{ color: "gray" }}>(filtro por estado que se encuentra el pedido)</span><span>*</span></p>
                                        <input type="radio" id="proceso de pago" name="tipo" value="proceso de pago" onClick={() => Pro_tipo("Proceso de pago")} />
                                        <label for="proceso de pago">En Transacción</label><br />
                                        <input type="radio" id="finalizado" name="tipo" value="finalizado" onClick={() => Pro_tipo("Finalizado")} />
                                        <label for="finalizado">Finalizado</label><br />
                                        <input type="radio" id="inicial" name="tipo" value="inicial" checked onClick={() => Pro_tipo("inicial")} />
                                        <label for="inicial">Inicial</label><br />
                                        <input type="radio" id="todo" name="tipo" value="todo" checked onClick={() => Pro_tipo("Todo")} />
                                        <label for="todo">Todo</label><br />

                                    </div>


                                </div>
                                <h6 class="checkout__title"></h6>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_buscar" onClick={() => regis()}>BUSCAR</button>
                                    </div>
                                </div>
                                <h6 class="checkout__title"></h6>

                                <div class="row">
                                    <table class="table" id="tbl_pedidos">
                                        <thead class="thead-dark">
                                            <tr>

                                                <th scope="col">Fecha</th>
                                                {/*<th scope="col">Código</th>*/}
                                                <th scope="col">Estado del pedido</th>
                                                <th scope="col">Valor Total $</th>
                                                <th scope="col">Estado de la entrega</th>
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
                                                        <td>{filname.PedEstado === "Finalizado" ? "Finalizado": "En Facturación"}</td>
                                                        <td> $ {filname.PedTotal}</td>
                                                        <td>{filname.PedEntrega}({filname.PedUbicacion})</td>
                                                        <td>{filname.PedEstado === "Finalizado" ? <><a class="cambio_entrega" onClick={() => des_factura(filname._id)}>Descargar</a></> : filname.PedTransaccion}</td>

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

export default Clspedidos