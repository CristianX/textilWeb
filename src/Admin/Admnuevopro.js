import React, { useState } from 'react'
import imgtest from '../img/product/producto.png';
import axios from 'axios';




const Admnuevopro = () => {
    const [dato_tipo, Pro_tipo] = useState("Maquinaria");
    const [imgpro, UseIMGPRO] = useState(imgtest);
    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    const [mensaje, UsuMen] = useState("")
    const [mensaje2, UsuMen2] = useState("")
    const [mensaje3, UsuMen3] = useState("")
    const [mensaje4, UsuMen4] = useState("")
    const [mensaje5, UsuMen5] = useState("")
    const [mensaje6, UsuMen6] = useState("")
    const [mensaje7, UsuMen7] = useState("")
    const [mensaje8, UsuMen8] = useState("")

    const [mensaje9, UsuMen9] = useState("")
    const [mensaje10, UsuMen10] = useState("")
    const [mensaje11, UsuMen11] = useState("")
    const [mensaje12, UsuMen12] = useState("")

    const [mensaje13, UsuMen13] = useState("")
    const [mensaje14, UsuMen14] = useState("")
    const [mensaje15, UsuMen15] = useState("")

    ///VARIABLES PARA VALIDAR CAMPOS VACÍOS
    let formularioValido = 0
    let formularioValido2 = 0
    let formularioValido3 = 0
    let formularioValido4 = 0
    let formularioValido5 = 0
    let formularioValido6 = 0
    let formularioValido7 = 0
    let formularioValido8 = 0

    let formularioValido17 = 0
    let formularioValido19 = 0
    let formularioValido21 = 0
    let formularioValido23 = 0

    let formularioValido25 = 0
    let formularioValido27 = 0
    let formularioValido29 = 0

    ///VARIABLES PARA VALIDAR CAMPOS CON ESPACIO
    let formularioValido9 = false
    let formularioValido10 = false
    let formularioValido11 = false
    let formularioValido12 = false
    let formularioValido13 = false
    let formularioValido14 = false
    let formularioValido15 = false
    let formularioValido16 = false

    let formularioValido18 = false
    let formularioValido20 = false
    let formularioValido22 = false
    let formularioValido24 = false

    let formularioValido26 = false
    let formularioValido28 = false
    let formularioValido30 = false


    const val_prov = () => {
        var nose = document.getElementById("pro_proveedor").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_proveedor").value = knose

        var nose = document.getElementById("pro_modelo").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_modelo").value = knose

        var nose = document.getElementById("pro_dimension").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_dimension").value = knose
    }

    const soloLetrasynum = () => {
        var nose = document.getElementById("pro_nombre").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_nombre").value = knose

        var nose = document.getElementById("pro_detalle").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_detalle").value = knose

        var nose = document.getElementById("pro_color").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_color").value = knose

        var nose = document.getElementById("pro_peso").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_peso").value = knose

        var nose = document.getElementById("pro_marca").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_marca").value = knose

        var nose = document.getElementById("pro_garantia").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_garantia").value = knose

        var nose = document.getElementById("pro_capacidad").value
        var knose = nose.replace("@", "").replace(/[_{}+/¡)-]/, "").replace("[", "").replace("]", "")
        document.getElementById("pro_capacidad").value = knose
    }

    const soloNum = () => {
        var nose1 = document.getElementById("pro_stock_ini").value
        var knose1 = nose1.replace(/[,.;:_{}+*/¡¿?'=@)(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "").replace("-", "")
        document.getElementById("pro_stock_ini").value = knose1
    }

    const val_fecha = () => {
        var nose1 = document.getElementById("pro_fecha_ini").value
        var knose1 = nose1.replace(/[,.;:_{}+*¡¿?'=@)(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "").replace("-", "")
        document.getElementById("pro_fecha_ini").value = knose1

        var nose1 = document.getElementById("pro_fecha_fin").value
        var knose1 = nose1.replace(/[,.;:_{}+*¡¿?'=@)(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "").replace("-", "")
        document.getElementById("pro_fecha_fin").value = knose1
    }

    const soloNumPrecio = () => {
        var nose1 = document.getElementById("pro_precio").value
        var knose1 = nose1.replace(/[,;:_{}+*/¡¿?'=)(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "").replace("-", "")
        document.getElementById("pro_precio").value = knose1
    }

    const limp = () => {
        document.getElementById("pro_nombre").value = ""
        document.getElementById("pro_detalle").value = ""
        document.getElementById("pro_precio").value = ""
        document.getElementById("pro_proveedor").value = ""
        document.getElementById("pro_stock_ini").value = ""
        document.getElementById("pro_fecha_ini").value = ""
        document.getElementById("pro_fecha_fin").value = ""
        document.getElementById("pro_urlimg").value = ""
        document.getElementById("pro_color").value = ""
        document.getElementById("pro_modelo").value = ""
        document.getElementById("pro_peso").value = ""
        document.getElementById("pro_dimension").value = ""
        document.getElementById("pro_marca").value = ""
        document.getElementById("pro_garantia").value = ""
        document.getElementById("pro_capacidad").value = ""

        UsuMen("")
        UsuMen2("")
        UsuMen3("")
        UsuMen4("")
        UsuMen5("")
        UsuMen6("")
        UsuMen7("")
        UsuMen8("")

        UsuMen9("")
        UsuMen10("")
        UsuMen11("")
        UsuMen12("")

        UsuMen13("")
        UsuMen14("")
        UsuMen15("")
    }




    const Insert = () => {
        var nom = document.getElementById("pro_nombre").value
        var des = document.getElementById("pro_detalle").value
        var pre = document.getElementById("pro_precio").value
        var pro = document.getElementById("pro_proveedor").value
        var sin = document.getElementById("pro_stock_ini").value
        var fini = document.getElementById("pro_fecha_ini").value
        var ffin = document.getElementById("pro_fecha_fin").value
        var im = document.getElementById("pro_urlimg").value

        var col = document.getElementById("pro_color").value
        var mod = document.getElementById("pro_modelo").value
        var pes = document.getElementById("pro_peso").value
        var dim = document.getElementById("pro_dimension").value

        var mar = document.getElementById("pro_marca").value
        var gar = document.getElementById("pro_garantia").value
        var cap = document.getElementById("pro_capacidad").value

        ///////////////////CAMPOS CON ESPACIO y VACIOS /////////////////
        if (nom === " ") {
            UsuMen("Por favor, llene el campo.")
            formularioValido9 = false
        }
        else {
            if (!nom) {
                UsuMen("Por favor, llene el campo.")
                formularioValido = false
            }
            else {
                UsuMen("")
                formularioValido = true
                formularioValido9 = true
            }
        }


        if (des === " ") {
            UsuMen2("Por favor, llene el campo.")
            formularioValido10 = false
        }
        else {
            if (!des) {
                UsuMen2("Por favor, llene el campo.")
                formularioValido2 = false
            }
            else {
                UsuMen2("")
                formularioValido2 = true
                formularioValido10 = true
            }
        }

        if (pre === " ") {
            UsuMen3("Por favor, llene el campo.")
            formularioValido11 = false
        }
        else {
            if (!pre) {
                UsuMen3("Por favor, llene el campo.")
                formularioValido3 = false
            }
            else {
                UsuMen3("")
                formularioValido3 = true
                formularioValido11 = true
            }
        }

        if (pro === " ") {
            UsuMen4("Por favor, llene el campo.")
            formularioValido12 = false
        }
        else {
            if (!pro) {
                UsuMen4("Por favor, llene el campo.")
                formularioValido4 = false
            }
            else {
                UsuMen4("")
                formularioValido4 = true
                formularioValido12 = true
            }
        }

        if (sin === " ") {
            UsuMen5("Por favor, llene el campo.")
            formularioValido13 = false
        }
        else {
            if (!sin) {
                UsuMen5("Por favor, llene el campo.")
                formularioValido5 = false
            }
            else {
                UsuMen5("")
                formularioValido5 = true
                formularioValido13 = true
            }
        }

        if (fini === " ") {
            UsuMen6("Por favor, llene el campo.")
            formularioValido14 = false
        }
        else {
            if (!fini) {
                UsuMen6("Por favor, llene el campo.")
                formularioValido6 = false
            }
            else {
                UsuMen6("")
                formularioValido6 = true
                formularioValido14 = true
            }
        }

        if (ffin === " ") {
            UsuMen7("Por favor, llene el campo.")
            formularioValido15 = false
        }
        else {
            if (!ffin) {
                UsuMen7("Por favor, llene el campo.")
                formularioValido7 = false
            }
            else {
                UsuMen7("")
                formularioValido7 = true
                formularioValido15 = true
            }
        }

        if (im === " ") {
            UsuMen8("Por favor, llene el campo.")
            formularioValido16 = false
        }
        else {
            if (!im) {
                UsuMen8("Por favor, llene el campo.")
                formularioValido8 = false
            }
            else {
                UsuMen8("")
                formularioValido8 = true
                formularioValido16 = true
            }
        }

        if (col === " ") {
            UsuMen9("Por favor, llene el campo.")
            formularioValido18 = false
        }
        else {
            if (!col) {
                UsuMen9("Por favor, llene el campo.")
                formularioValido17 = false
            }
            else {
                UsuMen9("")
                formularioValido17 = true
                formularioValido18 = true
            }
        }

        if (mod === " ") {
            UsuMen10("Por favor, llene el campo.")
            formularioValido20 = false
        }
        else {
            if (!mod) {
                UsuMen10("Por favor, llene el campo.")
                formularioValido19 = false
            }
            else {
                UsuMen10("")
                formularioValido19 = true
                formularioValido20 = true
            }
        }

        if (pes === " ") {
            UsuMen11("Por favor, llene el campo.")
            formularioValido22 = false
        }
        else {
            if (!pes) {
                UsuMen11("Por favor, llene el campo.")
                formularioValido21 = false
            }
            else {
                UsuMen11("")
                formularioValido21 = true
                formularioValido22 = true
            }
        }
        
        if (dim === " ") {
            UsuMen12("Por favor, llene el campo.")
            formularioValido24 = false
        }
        else {
            if (!dim) {
                UsuMen12("Por favor, llene el campo.")
                formularioValido23 = false
            }
            else {
                UsuMen12("")
                formularioValido23 = true
                formularioValido24 = true
            }
        }

        if (mar === " ") {
            UsuMen13("Por favor, llene el campo.")
            formularioValido26 = false
        }
        else {
            if (!mar) {
                UsuMen13("Por favor, llene el campo.")
                formularioValido25 = false
            }
            else {
                UsuMen13("")
                formularioValido25 = true
                formularioValido26 = true
            }
        }

        if (gar === " ") {
            UsuMen14("Por favor, llene el campo.")
            formularioValido28 = false
        }
        else {
            if (!gar) {
                UsuMen14("Por favor, llene el campo.")
                formularioValido27 = false
            }
            else {
                UsuMen14("")
                formularioValido27 = true
                formularioValido28 = true
            }
        }

        if (cap === " ") {
            UsuMen15("Por favor, llene el campo.")
            formularioValido30 = false
        }
        else {
            if (!cap) {
                UsuMen15("Por favor, llene el campo.")
                formularioValido29 = false
            }
            else {
                UsuMen15("")
                formularioValido29 = true
                formularioValido30 = true
            }
        }

        /////////////////// FIN CAMPOS CON ESPACIO Y VACIO/////////////////


        if (formularioValido && formularioValido2 && formularioValido3 && formularioValido4 && formularioValido5 &&
            formularioValido6 && formularioValido7 && formularioValido8 && formularioValido9 && formularioValido10 &&
            formularioValido11 && formularioValido12 && formularioValido17 && formularioValido18 && formularioValido19
            && formularioValido20 && formularioValido21 && formularioValido22 && formularioValido23 && formularioValido24
            && formularioValido25 && formularioValido26 && formularioValido27 && formularioValido28 && formularioValido29
            && formularioValido30) {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ProNombre: document.getElementById("pro_nombre").value,
                    ProDescripcion: document.getElementById("pro_detalle").value,
                    ProPrecio: document.getElementById("pro_precio").value,
                    ProProveedor: document.getElementById("pro_proveedor").value,
                    ProStockInicial: document.getElementById("pro_stock_ini").value,
                    ProFechaInicial: document.getElementById("pro_fecha_ini").value,
                    ProFechaFinal: document.getElementById('pro_fecha_fin').value,
                    ProEstado: "disponible",
                    ProStockActual: document.getElementById("pro_stock_ini").value,
                    ProImagen: document.getElementById("pro_nombre").value + '.jpg',
                    ProTipo: dato_tipo,
                    ProColor: document.getElementById("pro_color").value,
                    ProModelo: document.getElementById("pro_modelo").value,
                    ProPeso: document.getElementById("pro_peso").value,
                    ProDimension: document.getElementById("pro_dimension").value,
                    ProMarca: document.getElementById("pro_marca").value,
                    ProGarantia: document.getElementById("pro_garantia").value,
                    ProCapacidad: document.getElementById("pro_capacidad").value
                })
            };
            fetch("http://localhost:4000/apiproductos", requestOptions)
                .then((response) => response.json())
                .then((data) => limp());

            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append('file', selectedFile)
            fd.append('name', document.getElementById("pro_nombre").value)

            axios.post("http://localhost:4000/capuchino", fd, config)
                .then((response) => console.log(response.data)
                );

            //window.location.href = "/Nuevopro"

        }
        else {
            alert("Por favor ingrese los campos requeridos")
        }

    }

    /*const nuwimage = e => {
        let reader = new FileReader();
        reader.readAsDataURL(e);
        reader.onload = function() {
            let preview = document.getElementById('preview');
            var imagen = document.createElement('img');
            imagen.src = reader.result;
            preview.append(imagen);
        }
    }*/


    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <div class="row">
                            <div class="col-lg-8 col-md-6">

                                <h6 class="checkout__title">Ingresar Producto</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <p>Tipo : &nbsp;&nbsp;</p>
                                        <select>
                                            <option value="" onClick={() => Pro_tipo("Maquinaria")}>Maquinaria </option>
                                            <option value="" onClick={() => Pro_tipo("Repuesto")}>Repuestos </option>
                                        </select>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Nombre<span>   {mensaje}</span></p>
                                            <input type="text" id="pro_nombre" placeholder="Nombre del producto" onChange={() => soloLetrasynum()} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Precio<span>   {mensaje3}</span></p>
                                            <input id="pro_precio" maxlength="9" type="text" placeholder="Precio" onChange={() => soloNumPrecio()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Detalle<span>   {mensaje2}</span></p>
                                            <input id="pro_detalle" type="text" placeholder="Detalle" onChange={() => soloLetrasynum()} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Proveedor<span>   {mensaje4}</span></p>
                                            <input id="pro_proveedor" placeholder="Proveedor" onChange={() => val_prov()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Fecha Inicial   <span style={{ color: "gray" }}>(fecha de registro)</span><span>   {mensaje6}</span></p>
                                            <input id="pro_fecha_ini" maxlength="10" type="text" placeholder="DD/MM/AAAA" onChange={() => val_fecha()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Stock      <span>   {mensaje5}</span></p>
                                            <input id="pro_stock_ini" maxlength="6" type="text" placeholder="Stock" onChange={() => soloNum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Fecha límite    <span style={{ color: "gray" }}>(fecha de caducidad)</span><span>   {mensaje7}</span></p>
                                            <input id="pro_fecha_fin" maxlength="10" type="text" placeholder="DD/MM/AAAA" onChange={() => val_fecha()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Color      <span>   {mensaje9}</span></p>
                                            <input id="pro_color" maxlength="20" type="text" placeholder="Color" onChange={() => soloLetrasynum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Modelo    <span style={{ color: "gray" }}>(Número de modelo)</span><span>   {mensaje10}</span></p>
                                            <input id="pro_modelo" maxlength="25" type="text" placeholder="Modelo" onChange={() => val_prov()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Peso      <span>   {mensaje11}</span></p>
                                            <input id="pro_peso" maxlength="15" type="text" placeholder="Peso en kg" onChange={() => soloLetrasynum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Dimensión    <span style={{ color: "gray" }}></span><span>   {mensaje12}</span></p>
                                            <input id="pro_dimension" maxlength="25" type="text" placeholder="Dimensión" onChange={() => val_prov()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Marca      <span>   {mensaje13}</span></p>
                                            <input id="pro_marca" maxlength="25" type="text" placeholder="Marca del producto" onChange={() => soloLetrasynum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Garantía    <span style={{ color: "gray" }}></span><span>   {mensaje14}</span></p>
                                            <input id="pro_garantia" maxlength="25" type="text" placeholder="Detalle de la garantía" onChange={() => soloLetrasynum()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Capacidad      <span>   {mensaje15}</span></p>
                                            <input id="pro_capacidad" maxlength="50" type="text" placeholder="Detalle de la capacidad" onChange={() => soloLetrasynum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Seleccionar imágen:<span>   {mensaje8}</span></p>
                                        </div>
                                        <div class="checkout__input">
                                            <input id="pro_urlimg" type="file" placeholder="Ingresar la url de la imágen" name="file" onChange={changeHandler} accept=".png, .jpg, .jpeg" />
                                            {/*<input id="pro_urlimg" type="text" placeholder="Ingresar la url de la imágen" onChange={e => UseIMGPRO(e.target.value)} />*/}
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                <br />
                                <br />
                                <h6 class="checkout__title"></h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_guardar" onClick={() => Insert()}>Guardar Producto</button>
                                    </div>
                                    <div class="col-lg-6">
                                        <button class="site-btn" onClick={() => limp()}>limpiar</button>
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
export default Admnuevopro