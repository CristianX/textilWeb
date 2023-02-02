import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'


const Clsrecuppass = () => {
    const [postId, setPostId] = useState([]);
    const [loading, setLoading] = useState(true);
    const [var_nombre, uptadate1] = useState("")
    const [var_apellido, uptadate2] = useState("")
    const [var_direccion, uptadate3] = useState("")
    const [var_telf, uptadate4] = useState("")
    const [var_email, uptadate5] = useState("")
    const [var_ced, uptadate8] = useState("")
    const [var_social, uptadate9] = useState("")
    const [var_pass, uptadate6] = useState("")
    const [var_pass2, uptadate7] = useState("")




    var item_valueid = sessionStorage.getItem("item_key");



    var pas = ""
    var pas2 = ""


    const [mensaje4, UsuMen4] = useState("")
    const [mensaje6, UsuMen6] = useState("")

    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS

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
        var nose1 = document.getElementById("user_telefono").value
        var knose1 = nose1.replace(/[,.;:_{}+*/¡¿?'=)@(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "")
        document.getElementById("user_telefono").value = knose1
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
                        UsuPassword: pas
                    })
                };
                fetch("http://localhost:4000/apiusumicuenta/" + item_valueid, requestOptions)
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

    const regis = () => {

        fetch("http://localhost:4000/apiusumicuenta/" + item_valueid)
            .then((response) => response.json())
            .then((data) => data.filter(varid => varid).map(filname => (
                uptadate1(filname.UsuNombre),
                //document.getElementById("user_apellido").value = filname.UsuNombre
                uptadate2(filname.UsuApellido),
                uptadate3(filname.UsuDireccion),
                uptadate4(filname.UsuTelefono),
                uptadate5(filname.UsuEmail),
                uptadate6(filname.UsuPassword),
                uptadate8(filname.UsuCedula),
                uptadate9(filname.UsuSocial)
            )));
    }

    const redireccion = () =>{
        sessionStorage.setItem("item_rol", "")
        window.location.href = "/"
    }

    const redireccion_inicio =() => {
        window.location.href = "/Cliente"
    }


    useEffect(() => {
        setLoading(true);
        regis();
        //impri();
        setLoading(false)
    }, [])


    return (
        <div>

            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">

                        <div class="row">
                            <div class="col-lg-8 col-md-6">
                                <h6 class="checkout__title">Cambiar contraseña</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Correo<span></span></p>
                                            <input type="text" id="user_correo" placeholder="Correo de usuario" disabled= "false" value={var_email} onChange={() => sinsig()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Contraseña<span>   {mensaje6}</span></p>
                                            <input type="" id="user_pass" placeholder="Ingrese la nueva contraseña" onChange={() => sinsig()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Confirmar contraseña<span>   {mensaje4}</span></p>
                                            <input type="" id="user_pass2" placeholder="Confirme la contraseña" onChange={() => sinsig()} />
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

export default Clsrecuppass