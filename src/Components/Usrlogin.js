import React, { useEffect, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"

const Usrlogin = () => {
    const [data, setData] = useState([]);
    const [var_correo, UsevarCorreo] = useState("")
    const [var_pass, UsevarPass] = useState("")
    const [var_rol, Usevarol] = useState("Cliente")
    const [other, UsuOther] = useState([])

    var cor = ""
    var con = ""
    var bloc = false

    const [mensaje, UsuMen] = useState("")
    const [mensaje2, UsuMen2] = useState("")

    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS
    let formularioValido = 0
    let formularioValido2 = 0
    let formularioValido3 = false

    //const [datarecaptcha, SetDataRecap] = useState([])
    const [datarecaptcha, SetDataRecap] = useState(true)

    const onChange = () => {
        SetDataRecap(true)
    }

    const restring = () => {
        var nose1 = document.getElementById("log_correo").value
        var knose1 = nose1.replace(/[,;:{}/¡¿?'=)(%$"!|°><)´ ´]/, "").replace("[", "").replace("]", "")
        document.getElementById("log_correo").value = knose1
        UsevarCorreo(knose1)

        var nose2 = document.getElementById("log_pass").value
        var knose2 = nose2.replace(/[,;:{}/¡¿?'=)(%$"!|°><)´ ´]/, "").replace("[", "").replace("]", "")
        document.getElementById("log_pass").value = knose2
        UsevarPass(knose2)
    }


    //alert (ciphertext)

    const enviardata = async () => {

        bloc = false

        if (bloc === false) {
        //if (datarecaptcha === false) {  // CAMBIAR A TRUE PARA ACTIVAR CAPTCHA

            cor = var_correo
            con = var_pass

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


            if (!con) {
                UsuMen2("Por favor, llene el campo.")
                formularioValido2 = false
            }
            else {
                UsuMen2("")
                formularioValido2 = true

            }

            if (formularioValido && formularioValido2 && formularioValido3) {
                

                const resp = await fetch("http://localhost:4000/apiregistro/" + var_correo + "/" + var_pass + "/pc");
                const data1 = await resp.json();

                if (data1.length == 0) {
                    alert("Correo, contraseña o tipo de usuario incorrecto, por favor intente de nuevo.")
                }
                else {
                    sessionStorage.setItem("item_key", data1[0]._id)
                    var varnombb = data1[0].UsuNombre
                    //alert(varnombb + " " + data1[0].UsuRol)
                    //var item_value = sessionStorage.getItem("item_key")
                    if (data1[0].UsuRol == "Administrador") {
                        window.location.href = "/Admin"
                        sessionStorage.setItem("item_rol", data1[0].UsuRol)
                    }
                    else {
                        window.location.href = "/Cliente"
                        sessionStorage.setItem("item_rol", data1[0].UsuRol)
                    }
                }
            }
            else {
                alert("Por favor ingrese los campos requeridos")
            }

        }
        else {
            alert("¡Captcha incorrecto!")
            datarecaptcha = false
        }
    }

    const SendPass = async () => {
        //      post
        //        apiverificacion


        /*const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch("http://localhost:4000/apiverificacion/" + var_id, requestOptions)
            .then((response) => response.json())
            .then((data) => alert(data));*/

        cor = var_correo


        ///////////////////CAMPOS CON ESPACIO y VACIOS /////////////////
        if (cor === " ") {
            UsuMen("Por favor ingrese el correo para recuperar contraseña.")
            formularioValido3 = false
        }
        else {
            if (!cor) {
                UsuMen("Por favor ingrese el correo para recuperar contraseña.")
                formularioValido = false
            }
            else {
                UsuMen("")
                formularioValido = true
                formularioValido3 = true
            }
        }


       

        if (formularioValido && formularioValido3) {

            const Ver = async () => {


                const a = await fetch("http://localhost:4000/apiverificacion/" + var_correo)
                const data_res = await a.json()

                if (data_res.length == 0) {
                    
                    alert("Correo no registrado en el sistema para recuperación de contraseña.")
                        
                } else {
                    const codrec = Math.round(Math.random()*99999)
                    const requestOptions = {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' }
                    };
                    fetch("http://localhost:4000/apirecuperar/" + var_correo + "/" + codrec, requestOptions)
                        .then((response) => response.json())
                        .then((data) => alert(data));
                }

            }

            Ver()
        }
        else {
            
            alert("No se ha ingresado un correo electrónico")
        }

    }



    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <div class="row">
                            <div class="col-lg-4 col-md-3">

                                <div class="form-outline mb-4">
                                    <div class="checkout__input">
                                        <p>Correo: <span>   {mensaje}</span></p>
                                        <input type="email" id="log_correo" class="form-control" onChange={() => restring()}  />
                                    </div>
                                </div>

                                <div class="form-outline mb-4">
                                    <div class="checkout__input">
                                        <p>Contraseña: <span>   {mensaje2}</span></p>
                                        <input type="password" id="log_pass" class="form-control" onChange={() => restring()} />
                                    </div>
                                </div>


                                <div class="col d-flex justify-content-center">
                                    <ReCAPTCHA
                                        sitekey="6LeCwfwhAAAAAMk1l0OghSp5Y7BhxyTbpn7FWTlj"
                                        onChange={onChange}
                                    />

                                </div> <br></br>


                                <a> <button type="button" class="btn btn-primary btn-block mb-4" id="btn_ingresar" onClick={() => enviardata()}>Ingresar</button></a>

                                <div class="text-center">
                                    <button class="site-btn" onClick={() => SendPass()}>Recuperar contraseña</button><br></br>
                                    <br></br>
                                    <a href="/Registro">Registrarse</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Usrlogin