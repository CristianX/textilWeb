import React, { useEffect, useState } from 'react'
var CryptoJS = require("crypto-js");

var item_value = sessionStorage.getItem("item_key");

const Usrregistro = () => {
    var cor = ""
    var con = ""

    const [mensaje, UsuMen] = useState("")
    const [mensaje2, UsuMen2] = useState("")

    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS
    let formularioValido = 0
    let formularioValido2 = 0
    let formularioValido3 = false
    let formularioValido4 = false
    let formularioValido5 = false


    const enviardata = () => {

        cor = document.getElementById("user_correo").value
        con = document.getElementById("user_pass").value

        ///////////////////CAMPOS CON ESPACIO y VACIOS /////////////////
        if (cor === " ") {
            UsuMen("Por favor, llene el campo.")
            formularioValido3 = false
        }
        else {
            if (!cor) {
                UsuMen("Por favor, llene el campo.")
                formularioValido = false
            }
            else {
                UsuMen("")
                formularioValido = true
                formularioValido3 = true
            }
        }


        if (con === " ") {
            UsuMen2("Por favor, llene el campo.")
            formularioValido4 = false
        }
        else {
            if (!con) {
                UsuMen2("Por favor, llene el campo.")
                formularioValido2 = false
            }
            else {
                UsuMen2("")
                formularioValido2 = true
                formularioValido4 = true
            }
        }

        if (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
        .test(cor)) {
            formularioValido5 = true
            UsuMen("")

        } else {
            UsuMen("La dirección de email es incorrecta.")
            formularioValido5 = false
        }

        if (formularioValido && formularioValido2 && formularioValido3 && formularioValido5) {

            const Ver = async () => {
                const a = await fetch("http://localhost:4000/apiverificacion/" + document.getElementById("user_correo").value)
                const data_res = await a.json()

                if (data_res.length == 0) {

                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json',
                        'Content-Length':'<calculated when request is sent>',
                        'Host' : '<calculated when request is sent>',
                        'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                        'Access-Control-Allow-Credentials' : true },
                        body: JSON.stringify({
                            "UsuEmail": document.getElementById("user_correo").value,
                            "UsuPassword": document.getElementById("user_pass").value,
                            "UsuRol": "Cliente"
                        })
                    };
                    fetch("http://localhost:4000/apiregistro", requestOptions)
                        .then((response) => response.json())
                        .then((data) => alert(data, window.location.href = "/Login"));

                } else {
                    alert("Correo ya registrado")
                }

            }

            Ver()

        }
        else {
            alert("Por favor ingrese los campos requeridos")
        }

    }



    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <div class="row">
                            <div class="col-lg-8 col-md-6">
                                <h6 class="checkout__title">Registro de Clientes</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Correo<span>   {mensaje}</span></p>
                                            <input type="text" name='correosi' id="user_correo" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Contraseña<span>   {mensaje2}</span></p>

                                            <input type="password" name='passsi' id="user_pass" placeholder={""} />

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_registrar_cliente" onClick={() => enviardata()}>Registrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Usrregistro