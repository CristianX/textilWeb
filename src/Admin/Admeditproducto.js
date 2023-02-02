import React, { useEffect, useState } from 'react'
import imgtest from '../img/product/producto.png';
import { useParams } from 'react-router';
import axios from 'axios';

const Admeditproducto = () => {

    const [imgpro, UseIMGPRO] = useState(imgtest);
    const [postId, setPostId] = useState([]);
    const [loading, setLoading] = useState(true);
    const [var_nombre, uptadate1] = useState("")
    const [var_estado, estado] = useState("")
    const [var_precio, uptadate2] = useState("")
    const [var_proveedor, uptadate3] = useState("")
    //const [var_stock_ini, uptadate4] = useState("")
    const [var_fecha_ini, uptadate4] = useState("")
    const [var_fecha_fin, uptadate5] = useState("")
    const [var_stock_act, uptadate6] = useState("")
    const [var_stock_new, uptadate14] = useState("")
    const [var_imagen, uptadate7] = useState("")
    const [dato_imagen2, var_imagen2] = useState("")
    const [var_tipo, uptadate8] = useState("")
    const [var_detalle, uptadate9] = useState("")
    const [var_color, uptadate10] = useState("")
    const [var_modelo, uptadate11] = useState("")
    const [var_peso, uptadate12] = useState("")
    const [var_dimension, uptadate13] = useState("")
    const [var_marca, uptadate15] = useState("")
    const [var_garantia, uptadate16] = useState("")
    const [var_capacidad, uptadate17] = useState("")
    let { idpro } = useParams();
    var var_id = idpro
    var sact = 0
    var snew = 0
    const [selectedFile, setSelectedFile] = useState();
    const [var_cambio, cambio] = useState(false)

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        cambio(true)
    };



    const [dato_tipo, Pro_tipo] = useState("Maquinaria");


    var nom = ""
    var des = ""
    var pre = ""
    var pro = ""
    var sac = ""
    var nwstock = ""
    var fini = ""
    var ffin = ""
    var im = ""

    var col = ""
    var mod = ""
    var pes = ""
    var dim = ""
    var mar = ""
    var gar = ""
    var cap = ""

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
    const [mensaje16, UsuMen16] = useState("")



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
    let formularioValido31 = 0
    

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
    let formularioValido32 = false


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

        var nose1 = document.getElementById("pro_stock_new").value
        var knose1 = nose1.replace(/[,.;:_{}+*/¡¿?'=@)(&%$#"!|°><)´ ´]/, "").replace(/[qwertyuiopasdfghjklñzxcvbnm]/gi, "").replace("[", "").replace("]", "").replace("-", "")
        document.getElementById("pro_stock_new").value = knose1
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

    const pros_pproducto = (var_data) => {
        //alert(var_data)
        window.location.href = "/Listapro"
    }

    const Update = () => {

        var nom = document.getElementById("pro_nombre").value
        var des = document.getElementById("pro_detalle").value
        var pre = document.getElementById("pro_precio").value
        var pro = document.getElementById("pro_proveedor").value
        var sac = document.getElementById("pro_stock_act").value
        var nwstock = document.getElementById("pro_stock_new").value
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

        /*if (sac === " ") {
            UsuMen5("Por favor, llene el campo.")
            formularioValido13 = false
        }
        else {
            if (!sac) {
                UsuMen5("Por favor, llene el campo.")
                formularioValido5 = false
            }
            else {
                UsuMen5("")
                formularioValido5 = true
                formularioValido13 = true
            }
        }*/

        if (nwstock === " ") {
            UsuMen13("Por favor, llene el campo.")
            formularioValido26 = false
        }
        else {
            if (!nwstock) {
                UsuMen13("Por favor, llene el campo.")
                formularioValido16 = false
            }
            else {
                UsuMen13("")
                formularioValido16 = true
                formularioValido26 = true
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
            UsuMen14("Por favor, llene el campo.")
            formularioValido28 = false
        }
        else {
            if (!mar) {
                UsuMen14("Por favor, llene el campo.")
                formularioValido27 = false
            }
            else {
                UsuMen14("")
                formularioValido27 = true
                formularioValido28 = true
            }
        }

        if (gar === " ") {
            UsuMen15("Por favor, llene el campo.")
            formularioValido30 = false
        }
        else {
            if (!gar) {
                UsuMen15("Por favor, llene el campo.")
                formularioValido29 = false
            }
            else {
                UsuMen15("")
                formularioValido29 = true
                formularioValido30 = true
            }
        }

        if (cap === " ") {
            UsuMen16("Por favor, llene el campo.")
            formularioValido32 = false
        }
        else {
            if (!cap) {
                UsuMen16("Por favor, llene el campo.")
                formularioValido31 = false
            }
            else {
                UsuMen16("")
                formularioValido31 = true
                formularioValido32 = true
            }
        }


        /////////////////// FIN CAMPOS CON ESPACIO Y VACIO/////////////////

        if (formularioValido && formularioValido2 && formularioValido3 && formularioValido4 &&
            formularioValido6 && formularioValido7 && formularioValido9 && formularioValido10 &&
            formularioValido11 && formularioValido12 && formularioValido17 && formularioValido18 && formularioValido19
            && formularioValido20 && formularioValido21 && formularioValido22 && formularioValido23 && formularioValido24 && formularioValido26 && formularioValido16
            && formularioValido27 && formularioValido28 && formularioValido29 && formularioValido30 && formularioValido31 && formularioValido32) {

            var imagen = ""

            if (var_cambio) {
                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                let fd = new FormData();
                fd.append('file', selectedFile)
                fd.append('name', document.getElementById("pro_nombre").value)

                axios.post("http://localhost:4000/capuchino", fd, config)
                    .then((response) => console.log(response.data)
                    );

                imagen = document.getElementById("pro_nombre").value + '.jpg'
            }
            else
                imagen = dato_imagen2
            sact = parseFloat(document.getElementById("pro_stock_act").value)
            snew = parseFloat(document.getElementById("pro_stock_new").value)
            sact = sact + snew

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ProNombre: document.getElementById("pro_nombre").value,
                    ProDescripcion: document.getElementById("pro_detalle").value,
                    ProPrecio: document.getElementById("pro_precio").value,
                    ProProveedor: document.getElementById("pro_proveedor").value,
                    ProFechaInicial: document.getElementById("pro_fecha_ini").value,
                    ProFechaFinal: document.getElementById('pro_fecha_fin').value,
                    ProEstado: var_estado,
                    ProStockActual: sact,
                    ProImagen: imagen,
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
            fetch("http://localhost:4000/apiunproducto/" + var_id, requestOptions)
                .then((response) => response.json())
                .then((data) => pros_pproducto(data));

            /*regis();
            window.location.reload(true);*/

        }
        else {
            alert("Por favor ingrese los campos requeridos")
        }

    }

    const regis = () => {

        fetch("http://localhost:4000/apiunproducto/" + var_id)
            .then((response) => response.json())
            .then((data) => data.filter(varid => varid).map(filname => (
                uptadate1(filname.ProNombre),
                uptadate2(filname.ProPrecio),
                uptadate3(filname.ProProveedor),
                uptadate4(filname.ProFechaInicial),
                uptadate5(filname.ProFechaFinal),
                uptadate6(filname.ProStockActual),
                uptadate7('http://localhost:4000/capuchino/' + filname.ProImagen),
                uptadate8(filname.ProTipo),
                uptadate9(filname.ProDescripcion),
                uptadate10(filname.ProColor),
                uptadate11(filname.ProModelo),
                uptadate12(filname.ProPeso),
                uptadate13(filname.ProDimension),
                uptadate15(filname.ProMarca),
                uptadate16(filname.ProGarantia),
                uptadate17(filname.ProCapacidad),
                var_imagen2(filname.ProImagen),
                estado(filname.ProEstado)
            )));

        //var_tipo === 'Maquinaria' ? checked : null

    }

    useEffect(() => {
        setLoading(true);
        regis();
        setLoading(false)
    }, [])

    const redireccion = () => {
        window.location.href = "/Listapro"
    }

    const Delete = () => {
        var answer = window.confirm("¿Seguro desea eliminar el producto?")

        if (answer) {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch("http://localhost:4000/apiproductos/" + var_id, requestOptions)
                .then((response) => response.json())
                .then((data) => redireccion());
        }
    }


    const impr = () => {
        alert(var_id)
    }

    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <div class="row">
                            <div class="col-lg-8 col-md-6">
                                <h6 class="checkout__title">Modificar Producto</h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Nombre<span>   {mensaje}</span></p>
                                            <input id="pro_nombre" type="text" placeholder="Nombre del producto" defaultValue={var_nombre} onChange={() => soloLetrasynum()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Tipo : &nbsp;&nbsp;</p>
                                            <select>
                                                <option {...var_tipo === "Maquinaria" ? "selected" : null} value="" onClick={() => Pro_tipo("Maquinaria")}>Maquinaria </option>
                                                <option {...var_tipo === "Maquinaria" ? "selected" : null} value="" onClick={() => Pro_tipo("Repuesto")}>Repuestos </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-lg-12">
                                        <div class="checkout__input">
                                            <p>Detalle<span>   {mensaje2}</span></p>
                                            <input id="pro_detalle" placeholder="Detalle" defaultValue={var_detalle} onChange={() => soloLetrasynum()} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Stock Actual    <span style={{ color: "gray" }}>(cantidad actual de productos)</span><span>   {mensaje5}</span></p>
                                            <input id="pro_stock_act" type="text" maxlength="6" placeholder="Stock" value={var_stock_act} disabled="disabled" />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Fecha inicial    <span style={{ color: "gray" }}>(fecha de registro)</span><span>   {mensaje6}</span></p>
                                            <input id="pro_fecha_ini" type="text" maxlength="9" placeholder="DD/MM/AAAA" defaultValue={var_fecha_ini} onChange={() => val_fecha()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Agregar Nuevo Stock<span style={{ color: "gray" }}></span><span>   {mensaje13}</span></p>
                                            <input id="pro_stock_new" type="text" maxlength="6" placeholder="Nuevo Stock" defaultValue={0} onChange={() => soloNum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Proveedor<span>   {mensaje4}</span></p>
                                            <input id="pro_proveedor" placeholder="Proveedor" defaultValue={var_proveedor} onChange={() => val_prov()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Precio<span>   {mensaje3}</span></p>
                                            <input id="pro_precio" type="text" maxlength="9" placeholder="Precio" defaultValue={var_precio} onChange={() => soloNumPrecio()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Fecha límite    <span style={{ color: "gray" }}>(fecha de caducidad)</span><span>   {mensaje7}</span></p>
                                            <input id="pro_fecha_fin" type="text" maxlength="9" placeholder="DD/MM/AAAA" defaultValue={var_fecha_fin} onChange={() => val_fecha()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Color      <span>   {mensaje9}</span></p>
                                            <input id="pro_color" maxlength="20" type="text" placeholder="Color" defaultValue={var_color} onChange={() => soloLetrasynum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Modelo    <span style={{ color: "gray" }}>(Número de modelo)</span><span>   {mensaje10}</span></p>
                                            <input id="pro_modelo" maxlength="25" type="text" placeholder="Modelo" defaultValue={var_modelo} onChange={() => val_prov()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Peso      <span>   {mensaje11}</span></p>
                                            <input id="pro_peso" maxlength="15" type="text" placeholder="Peso en kg" defaultValue={var_peso} onChange={() => soloLetrasynum()} />
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Dimensión    <span style={{ color: "gray" }}></span><span>   {mensaje12}</span></p>
                                            <input id="pro_dimension" maxlength="25" type="text" placeholder="Dimensión" defaultValue={var_dimension} onChange={() => val_prov()} />
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Marca      <span>   {mensaje14}</span></p>
                                            <input id="pro_marca" maxlength="25" type="text" placeholder="Marca del producto" defaultValue={var_marca} onChange={() => soloLetrasynum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Garantía    <span style={{ color: "gray" }}></span><span>   {mensaje15}</span></p>
                                            <input id="pro_garantia" maxlength="25" type="text" placeholder="Detalle de la garantía" defaultValue={var_garantia} onChange={() => soloLetrasynum()} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="checkout__input">
                                            <p>Capacidad      <span>   {mensaje16}</span></p>
                                            <input id="pro_capacidad" maxlength="25" type="text" placeholder="Detalle de la capacidad" defaultValue={var_capacidad} onChange={() => soloLetrasynum()} />
                                        </div>
                                        <div class="checkout__input">
                                            <p>Seleccionar imágen:<span>   {mensaje8}</span></p>
                                            <input id="pro_urlimg" type="file" placeholder="Ingresar la url de la imágen" name="file" onChange={changeHandler} accept=".png, .jpg, .jpeg" />
                                            <img src={var_imagen} style={{ width: 100 }} alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                                <br />
                                <br />
                                <h6 class="checkout__title"></h6>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_guardar" onClick={() => Update()}>Guardar cambio</button>
                                    </div>
                                    <div class="col-lg-6">
                                        <button class="site-btn" id="btn_guardar" onClick={() => Delete()}>Eliminar Producto</button>
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

export default Admeditproducto