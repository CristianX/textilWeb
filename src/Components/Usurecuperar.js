import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'


const Usurecuperar = () => {

    const [var_display, display] = useState("none")
    const [var_item_valueid, item_valueid] = useState("")

    let var_codigo2 = 0



    var pas = ""
    var pas2 = ""

    const [mensaje2, UsuMen2] = useState("")
    const [mensaje4, UsuMen4] = useState("")
    const [mensaje6, UsuMen6] = useState("")

    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS
    let formularioValido2 = 0
    let formularioValido3 = 0
    let formularioValido4 = 0
    let formularioValido6 = 0


    ///VARIABLES PARA VALIDAR CAMPOS CON ESPACIO

    let formularioValido10 = false
    let formularioValido12 = false

    const sinsig = () => {
        var nose = document.getElementById("user_direccion").value
        var knose = nose.replace(/[}{}/]/, "").replace("[", "").replace("]", "")
        document.getElementById("user_direccion").value = knose

        var nose = document.getElementById("user_correo").value
        var knose = nose.replace(/[}{}/]/, "").replace("[", "").replace("]", "")
        document.getElementById("user_correo").value = knose
    }


    const soloNum = () => {
        var nose1 = document.getElementById("user_cod").value
        var knose1 = nose1.replace(/[,.;:_{}+*/¡¿?'=)@(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "")
        document.getElementById("user_cod").value = knose1
    }

    const Confir = async () => {

        const var_codigo = document.getElementById("user_cod").value

        if (var_codigo === " ") {
            UsuMen2("Por favor, ingrese el código de seguridad.")
            formularioValido3 = false
        }
        else {
            if (!var_codigo) {
                UsuMen2("Por favor, ingrese el código de seguridad.")
                formularioValido2 = false
            }
            else {
                UsuMen2("")
                formularioValido2 = true
                formularioValido3 = true
            }
        }

        if (formularioValido2 === true &&  formularioValido3 === true) {

            const resp = await fetch("http://localhost:4000/apirecuperar/" + var_codigo);
        const data1 = await resp.json();

        //console.log(data1)

        if(data1 == "Error en la API: /usuario"){
            alert("Código incorrecto")
            display("none")
        }else{
            item_valueid (data1)
            display("block")
        }

        }
    }




    const Update = () => {
        
        pas = document.getElementById("user_pass").value
        pas2 = document.getElementById("user_pass2").value

        ///////////////////CAMPOS CON ESPACIO y VACIOS /////////////////
        if (pas2 === " ") {
            UsuMen4("Por favor, llene el campo para confirmar la contraseña.")
            formularioValido10 = false
        }
        else {
            if (!pas2) {
                UsuMen4("Por favor, llene el campo para confirmar la contraseña.")
                formularioValido4 = false
            }
            else {
                UsuMen4("")
                formularioValido4 = true
                formularioValido10 = true
            }
        }

       

        if (pas === " ") {
            UsuMen6("Por favor, llene el campo.")
            formularioValido12 = false
        }
        else {
            if (!pas) {
                UsuMen6("Por favor, llene el campo.")
                formularioValido6 = false
            }
            else {
                UsuMen6("")
                formularioValido6 = true
                formularioValido12 = true
            }
        }

        /////////////////// FIN CAMPOS CON ESPACIO Y VACIO/////////////////

        if(pas === pas2){

            if (formularioValido4 === true &&  formularioValido6 === true  && formularioValido10 === true &&
                formularioValido12 === true) {
    
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        UsuPassword: document.getElementById("user_pass").value
                    })
                };

                fetch("http://localhost:4000/apirecuperar/" + var_item_valueid, requestOptions)
                    .then((response) => response.json())
                    .then((data) => redireccion_inicio());
    
            }
            else {
                alert("Por favor ingrese los campos requeridos")
            }

        }
        else{

            alert("La contraseña de confirmación no coincide con la nueva contraseña.")

        }

        

    }

   

    const redireccion = () =>{
        sessionStorage.setItem("item_rol", "")
        window.location.href = "/"
    }

    const redireccion_inicio =() => {
        window.location.href = "/Inicio"
    }


  


    return (
        <div>

            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">

                        <div class="row">
                            <div class="col-lg-8 col-md-6">
                                <h6 class="checkout__title">Confirmación de Código de seguridad</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Código de seguridad:<span>   {mensaje2}</span></p>
                                            <input type="" maxlength="5" id="user_cod" placeholder="Ingrese el código de seguridad de 5 dígitos" defaultValue={""} onChange={() => soloNum()} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_enviar" onClick={() => Confir()}>Enviar</button>
                                    </div>
                                </div>
                                <h6 class="checkout__title"></h6>
                            </div>


                            <div class="col-lg-8 col-md-6" style={{display: var_display}}>
                                <h6 class="checkout__title">Cambiar contraseña</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Contraseña<span>   {mensaje6}</span></p>
                                            <input type="" id="user_pass" placeholder="Ingrese la nueva contraseña" defaultValue={""} onChange={() => sinsig()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Confirmar contraseña<span>   {mensaje4}</span></p>
                                            <input type="" id="user_pass2" placeholder="Confirme la contraseña" defaultValue={""} onChange={() => sinsig()} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_guardar" onClick={() => Update()}>Guardar Cambios</button>
                                    </div>
                                </div>
                                <h6 class="checkout__title"></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Usurecuperar 