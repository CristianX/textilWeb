import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'


const Clsmicuenta = () => {
    const [postId, setPostId] = useState([]);
    const [loading, setLoading] = useState(true);
    const [var_nombre, uptadate1] = useState("")
    const [var_apellido, uptadate2] = useState("")
    const [var_direccion, uptadate3] = useState("")
    const [var_telf, uptadate4] = useState("")
    const [var_cedula, uptadate5] = useState("")
    const [var_social, uptadate6] = useState("")

    var item_valueid = sessionStorage.getItem("item_key");

    var nom = ""
    var ape = ""
    var dir = ""
    var tel = ""
    var ced = ""
    var soc = ""

    const [mensaje, UsuMen] = useState("")
    const [mensaje2, UsuMen2] = useState("")
    const [mensaje3, UsuMen3] = useState("")
    const [mensaje4, UsuMen4] = useState("")
    const [mensaje5, UsuMen5] = useState("")
    const [mensaje6, UsuMen6] = useState("")

    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS
    let formularioValido = 0
    let formularioValido2 = 0
    let formularioValido3 = 0
    let formularioValido4 = 0
    let formularioValido5 = 0
    let formularioValido6 = 0


    ///VARIABLES PARA VALIDAR CAMPOS CON ESPACIO
    let formularioValido7 = false
    let formularioValido8 = false
    let formularioValido9 = false
    let formularioValido10 = false
    let formularioValido11 = false
    let formularioValido12 = false

    const sinsig = () => {
        var nose = document.getElementById("user_direccion").value
        var knose = nose.replace(/[}{}/]/, "").replace("[", "").replace("]", "")
        document.getElementById("user_direccion").value = knose

    }

    const soloLetras = () => {
        var nose = document.getElementById("user_nombre").value
        var knose = nose.replace(/[1234567890]/, "").replace("@", "").replace(/[,.-;:_{}+*/¡¿?'=)(&%$#"!|°><)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("user_nombre").value = knose

        var nose = document.getElementById("user_apellido").value
        //var knose = nose.replace(/[1234567890.,-_+*/@}{;:¡!'?¿=&%$#"°|]/g, "")
        var knose = nose.replace(/[1234567890]/, "").replace(/[,.-;:_{}+*/¡¿?'=)(&%$#"!|°><)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("user_apellido").value = knose

        var nose = document.getElementById("user_social").value
        //var knose = nose.replace(/[1234567890.,-_+*/@}{;:¡!'?¿=&%$#"°|]/g, "")
        var knose = nose.replace(/[1234567890]/, "").replace(/[,.-;:_{}+*/¡¿?'=)(&%$#"!|°><)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("user_social").value = knose
    }

    const soloNum = () => {
        var nose1 = document.getElementById("user_telefono").value
        var knose1 = nose1.replace(/[,.;:_{}+*/¡¿?'=)@(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "")
        document.getElementById("user_telefono").value = knose1

        var nose1 = document.getElementById("user_cedula").value
        var knose1 = nose1.replace(/[,.;:_{}+*/¡¿?'=)@(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "")
        document.getElementById("user_cedula").value = knose1
    }




    const Update = () => {
        nom = document.getElementById("user_nombre").value
        ape = document.getElementById("user_apellido").value
        dir = document.getElementById("user_direccion").value
        tel = document.getElementById("user_telefono").value
        ced = document.getElementById("user_cedula").value
        soc = document.getElementById("user_social").value

        ///////////////////CAMPOS CON ESPACIO y VACIOS /////////////////
        if (nom === " ") {
            UsuMen("Por favor, llene el campo.")
            formularioValido7 = false
        }
        else {
            if (!nom) {
                UsuMen("Por favor, llene el campo.")
                formularioValido = false
            }
            else {
                UsuMen("")
                formularioValido = true
                formularioValido7 = true
            }
        }


        if (ape === " ") {
            UsuMen2("Por favor, llene el campo.")
            formularioValido8 = false
        }
        else {
            if (!ape) {
                UsuMen2("Por favor, llene el campo.")
                formularioValido2 = false
            }
            else {
                UsuMen2("")
                formularioValido2 = true
                formularioValido8 = true
            }
        }

        if (dir === " ") {
            UsuMen3("Por favor, llene el campo.")
            formularioValido9 = false
        }
        else {
            if (!dir) {
                UsuMen3("Por favor, llene el campo.")
                formularioValido3 = false
            }
            else {
                UsuMen3("")
                formularioValido3 = true
                formularioValido9 = true
            }
        }

        if (tel === " ") {
            UsuMen4("Por favor, llene el campo.")
            formularioValido10 = false
        }
        else {
            if (!tel) {
                UsuMen4("Por favor, llene el campo.")
                formularioValido4 = false
            }
            else {
                UsuMen4("")
                formularioValido4 = true
                formularioValido10 = true
            }
        }

        if (ced === " ") {
            UsuMen5("Por favor, llene el campo.")
            formularioValido11 = false
        }
        else {
            if (!ced) {
                UsuMen5("Por favor, llene el campo.")
                formularioValido5 = false
            }
            else {
                UsuMen5("")
                formularioValido5 = true
                formularioValido11 = true
            }
        }

        if (soc === " ") {
            UsuMen6("Por favor, llene el campo.")
            formularioValido12 = false
        }
        else {
            if (!soc) {
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

        if (formularioValido === true && formularioValido2 === true && formularioValido3 === true && formularioValido4 === true && formularioValido5 === true &&
            formularioValido6 === true && formularioValido7 === true && formularioValido8 === true && formularioValido9 === true && formularioValido10 === true &&
            formularioValido11 === true && formularioValido12 === true) {

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    UsuNombre: document.getElementById("user_nombre").value,
                    UsuApellido: document.getElementById("user_apellido").value,
                    UsuDireccion: document.getElementById("user_direccion").value,
                    UsuTelefono: document.getElementById("user_telefono").value,
                    UsuCedula: document.getElementById("user_cedula").value,
                    UsuSocial: document.getElementById("user_social").value
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

    const regis = () => {

        fetch("http://localhost:4000/apiusumicuenta/" + item_valueid)
            .then((response) => response.json())
            .then((data) => data.filter(varid => varid).map(filname => (
                uptadate1(filname.UsuNombre),
                //document.getElementById("user_apellido").value = filname.UsuNombre
                uptadate2(filname.UsuApellido),
                uptadate3(filname.UsuDireccion),
                uptadate4(filname.UsuTelefono),
                uptadate5(filname.UsuCedula),
                uptadate6(filname.UsuSocial)
            )));
    }

    const redireccion = () =>{
        sessionStorage.setItem("item_rol", "")
        window.location.href = "/"
    }

    const redireccion_inicio =() => {
        window.location.href = "/Cliente"
    }

    const Delete = () => {
        var answer = window.confirm("¿Seguro desea eliminar su cuenta?")

        if (answer) {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch("http://localhost:4000/apiusumicuenta/" + item_valueid, requestOptions)
                .then((response) => response.json())
                .then((data) => redireccion());
        }
        
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
                                <h6 class="checkout__title">Información de Cliente</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Nombre<span>   {mensaje}</span></p>
                                            <input type="text" name="name" id="user_nombre" placeholder="Nombre de usuario" defaultValue={var_nombre} onChange={() => soloLetras()} />

                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Apellido<span>   {mensaje2}</span></p>
                                            <input type="text" name="apellido" id="user_apellido" placeholder="Apellido de usuario" defaultValue={var_apellido} onChange={() => soloLetras()} />
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout__input">
                                    <p>Dirección<span>   {mensaje3}</span></p>
                                    <input type="text" id="user_direccion" placeholder="Dirección de usuario" class="checkout__input__add" defaultValue={var_direccion} onChange={() => sinsig()} />
                                </div>
                                <div class="checkout__input">
                                    <p>Teléfono<span>   {mensaje4}</span></p>
                                    <input type="text" maxlength="10" id="user_telefono" placeholder="Teléfono de usuario" defaultValue={var_telf} onChange={() => soloNum()} />
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Cédula o Ruc<span>   {mensaje5}</span></p>
                                            <input type="text" maxlength="10" id="user_cedula" placeholder="Cédula de identidad" defaultValue={var_cedula} onChange={() => soloNum()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Razón Social<span>   {mensaje6}</span></p>
                                            <input type="text" id="user_social" placeholder="Natural/Jurídico" defaultValue={var_social} onChange={() => soloLetras()} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_guardar" onClick={() => Update()}>Guardar Cambios</button>
                                    </div>
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_eliminar" onClick={() => Delete()}>Eliminar Cuenta</button>
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

export default Clsmicuenta