import React, { useEffect, useState } from 'react'

const Clsreclamo = () => {
    var item_valueid = sessionStorage.getItem("item_key");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    let date = new Date().toLocaleDateString()

    var tem = ""
    var det = ""
   
    const [mensaje, UsuMen] = useState("")
    const [mensaje2, UsuMen2] = useState("")
    
    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS
    let formularioValido = 0
    let formularioValido2 = 0
    let formularioValido3 = false
    let formularioValido4 = false

    const sinsig = () => {
        var nose = document.getElementById("tema").value
        var knose = nose.replace(/[}{}/]/, "").replace("[", "").replace("]", "")
        document.getElementById("tema").value = knose

        var nose = document.getElementById("detalle").value
        var knose = nose.replace(/[}{}/]/, "").replace("[", "").replace("]", "")
        document.getElementById("detalle").value = knose
    }

    const limp = () => {
        document.getElementById("tema").value = ""
        document.getElementById("detalle").value =""
        UsuMen("")
        UsuMen2("")
    }
 
    const send_reclamo = () => {

        tem = document.getElementById("tema").value
        det = document.getElementById("detalle").value

        ///////////////////CAMPOS CON ESPACIO y VACIOS /////////////////
        if (tem === " ") {
            UsuMen("Por favor, llene el campo.")
            formularioValido3 = false
        }
        else {
            if (!tem) {
                UsuMen("Por favor, llene el campo.")
                formularioValido = false
            }
            else {
                UsuMen("")
                formularioValido = true
                formularioValido3 = true
            }
        }


        if (det === " ") {
            UsuMen2("Por favor, llene el campo.")
            formularioValido4 = false
        }
        else {
            if (!det) {
                UsuMen2("Por favor, llene el campo.")
                formularioValido2 = false
            }
            else {
                UsuMen2("")
                formularioValido2 = true
                formularioValido4 = true
            }
        }

        if (formularioValido && formularioValido2 && formularioValido3 && formularioValido4) {

            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                RecTitulo: document.getElementById("tema").value,
                RecDetalle: document.getElementById("detalle").value,
                RecFecha: date
            })
        };
        fetch("http://localhost:4000/apiusureclamo/" + item_valueid, requestOptions)
            .then((response) => response.json())
            .then((data) => window.location.href = "/Reclamos", regis());
        }
        else {
            alert("Por favor ingrese los campos requeridos")
        }

    }

    const regis = async () => {

        const resp = await fetch("http://localhost:4000/apiusureclamo/" + item_valueid);
        const data1 = await resp.json();
        setData(data1);

        /*if(data1.length === 0){
            alert("Al momento no tiene reclamos registrados.")
        }*/


    }

    useEffect(() => {
        setLoading(true);
        regis();
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
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Tema:     <span style={{color:"gray"}}>(Redacte el tema concreto a tratar en el mensaje )</span><span>   {mensaje}</span></p>
                                            <input type="text" id="tema" maxlength="35" placeholder="Tema" onChange={() => sinsig()}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout__input">
                                    <p>Detalle:     <span style={{color:"gray"}}>(Redacte a detalle su mensaje)</span><span>   {mensaje2}</span></p>
                                    <input type="text" maxlength="100" id="detalle" placeholder="Redactar sugerencia" onChange={() => sinsig()} />
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_enviar" onClick={() => send_reclamo()}>Enviar sugerencia</button>
                                    </div>
                                    <div class="col-lg-6">
                                        <button  class="site-btn" onClick={() => limp()}>Cancelar sugerencia</button>
                                    </div>
                                </div>
                                <h6 class="checkout__title"></h6>
                                <br />
                                <br />
                                <h5 class="checkout__title">Lista de sugerencias</h5>
                                <div class="row">

                                    <table id="tbl_productos" class="table">

                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">Tema de la sugerencia</th>
                                                <th scope="col">Detalle de la sugerencia</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Respuesta</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.filter(varid => varid).map(filname => (
                                                filname.CliReclamos.map(filname2 => (
                                                    <>
                                                        <tr>
                                                            <th scope="row">{filname2.RecTitulo}</th>
                                                            <td>{filname2.RecDetalle}</td>
                                                            <td>{filname2.RecFecha}</td>
                                                            <td>{filname2.RecRespuesta}</td>
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

export default Clsreclamo