import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Admreclamo = () => {
    const [nombre, Use_nombre] = useState("")
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dato_respuesta, Use_respuesta] = useState("");

    let { nomb } = useParams();
    var idcunt = nomb

    var respu = ""


    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS
    let formularioValido = 0
    let formularioValido2 = false


    const fetchData = async () => {
        
        const resp = await fetch("http://localhost:4000/apiusumicuenta/" + idcunt);
        const data1 = await resp.json();
        setData(data1);

        if (data1[0].CliReclamos.length === 0) {
            alert("El cliente no tiene sugerencias registradas.")
            window.location.href = "/Admclientes"
        }

        
    };



    const guardar_respuesta = async (var_id, var_titulo, var_fecha) => {

        respu = dato_respuesta

        if (respu === " ") {
            formularioValido2 = false
        }
        else {
            if (!respu) {
                formularioValido = false
            }
            else {
                formularioValido = true
                formularioValido2 = true
            }
        }


        if (formularioValido && formularioValido2) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    RecTitulo: var_titulo,
                    RecFecha: var_fecha,
                    RecRespuesta: dato_respuesta
                })
            };
            fetch("http://localhost:4000/apiadminclientes/" + var_id, requestOptions)
                .then((response) => response.json())
                .then((data_res) => alert(data_res));

            fetchData()
        }
        else {
            alert("Por favor redacte la respuesta")
        }
    };

    const eliminar_respuesta = async (var_id, var_titulo, var_fecha) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                RecTitulo: var_titulo,
                RecFecha: var_fecha,
                RecRespuesta: dato_respuesta
            })
        };
        fetch("http://localhost:4000/apiadminclientes/" + var_id, requestOptions)
            .then((response) => response.json())
            .then((data_res) => alert(data_res));

        fetchData()

    };

    useEffect(() => {
        setLoading(true);
        fetchData();
        setLoading(false)
    }, [])


    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">

                        <div class="row">
                            <div class="col-lg-8 col-md-6">
                                <h6 class="checkout__title">Buzón de sugerencias</h6>




                                <div class="row">
                                    <table id="tbl_reclamos" class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Tipo de sugerencia</th>
                                                <th scope="col">Fecha de sugerencia</th>
                                                <th scope="col">Detalle</th>
                                                <th scope="col">Redactar respuesta</th>
                                                <th scope="col">Enviar Respuesta</th>
                                                <th scope="col">Eliminar sugerencia</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.filter(varid => varid).map(filname => (
                                                filname.CliReclamos.map(filname2 => (
                                                    <>
                                                        <tr>
                                                            <th scope="row">{filname.UsuNombre}</th>
                                                            <td>{filname2.RecTitulo}</td>
                                                            <td>{filname2.RecFecha}</td>
                                                            <td>{filname2.RecDetalle}</td>
                                                            <input id="res_reclamo" type="text" defaultValue={filname2.RecRespuesta} onChange={e => Use_respuesta(e.target.value)} />
                                                            <td><button onClick={() => guardar_respuesta(filname._id, filname2.RecTitulo, filname2.RecFecha)}>RESPONDER</button></td>
                                                            <td><button onClick={() => eliminar_respuesta(filname._id, filname2.RecTitulo, filname2.RecFecha)}>ELIMINAR</button></td>

                                                        </tr>
                                                    </>
                                                ))))}
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

export default Admreclamo