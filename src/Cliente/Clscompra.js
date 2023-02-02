import React, { useEffect, useState } from 'react'
import imgtest from '../img/product/producto.png';
import { Link } from 'react-router-dom';

const Clscompra = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [dato_nombre, Pro_nombre] = useState("_ERROR_");
    const [dato_color, Pro_color] = useState("_ERROR_");
    const [dato_modelo, Pro_modelo] = useState("_ERROR_");
    const [dato_tipo, Pro_tipo] = useState("Todos");
    var item_valueid = sessionStorage.getItem("item_key");

    const FetchData = async () => {

        if (dato_nombre.length === 0)
            Pro_nombre("_ERROR_")
        if (dato_color.length === 0)
            Pro_color("_ERROR_")
        if (dato_modelo.length === 0)
            Pro_modelo("_ERROR_")

        const resp = await fetch("http://localhost:4000/apilistpedidos/" + dato_nombre + "/" + dato_tipo + "/" + dato_color + "/" + dato_modelo);
        const data1 = await resp.json();
        setData(data1);



    };


    useEffect(() => {
        setLoading(true);
        FetchData();
        setLoading(false)
    }, [])



    return (
        <div>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Catálogo</h4>
                                <div>
                                    <Link to="/Cliente">Inicio &gt; </Link>
                                    <span>Catálogo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shop spad">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-9">
                            <div class="shop__product__option">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <p>Ordenar por : &nbsp;&nbsp;</p>
                                        <select>
                                            <option value="" onClick={() => Pro_tipo("Todos")}>Todos </option>
                                            <option value="" onClick={() => Pro_tipo("Maquinaria")}>Maquinaria </option>
                                            <option value="" onClick={() => Pro_tipo("Repuesto")}>Repuestos </option>
                                        </select> <br></br><br></br>

                                        <p>Nombre del producto:  &nbsp;&nbsp; </p>
                                        <input id="pro_nombre" type="text" placeholder="Descripción/Nombre" onChange={e => Pro_nombre(e.target.value)} />


                                    </div>
                                    <div class="col-lg-4">
                                        <p>Color:  &nbsp;&nbsp; </p>
                                        <input id="pro_color" type="text" placeholder="Color del producto" onChange={e => Pro_color(e.target.value)} />
                                        <br></br><br></br>
                                        <p>Modelo:  &nbsp;&nbsp; </p>
                                        <input id="pro_modelo" type="text" placeholder="Modelo del producto" onChange={e => Pro_modelo(e.target.value)} />


                                    </div>
                                    <div class="col-lg-4">
                                        <div class="shop__product__option__right">
                                            <button herf="" class="site-btn" id="btn_add_car" onClick={() => FetchData()} >BUSCAR</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div class="row">
                                {data.filter(varid => varid).map(filname => (
                                    <>
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="product__item">
                                                <Link to={"/CliProducto/" + filname._id + "/" + item_valueid}><div class="product__item__pic set-bg"> <img style={{ width: 'auto', height: 275 }} src={'http://localhost:4000/capuchino/' + filname.ProImagen} />
                                                </div> </Link>
                                                <div class="product__item__text">
                                                    <h6>{filname.ProNombre}</h6>
                                                    <a href={"/CliProducto/" + filname._id + "/" + item_valueid} class="add-cart">Ver más</a>
                                                    <h5>{filname.ProPrecio}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}

                                </div>*/}
                            <div class="row product__filter">
                                {data.filter(varid => varid).map(filname => (
                                    <>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                                            <div class="product__item">
                                                <div class="product__item__pic set-bg" >
                                                <img style={{ width: 'auto', height: 275 }} src={'http://localhost:4000/capuchino/' + filname.ProImagen} />
                                                    <span class="label">{filname.ProTipo}</span>
                                                    
                                                    <ul class="product__hover"><br></br>
                                                        <li class="label2">{filname.ProColor}</li>
                                                        <li class="label2">{filname.ProPeso} Kg</li>
                                                        <li class="label2">{filname.ProModelo}</li>
                                                        <li class="label2">{filname.ProDimension}</li>
                                                    </ul>
                                                
                                                </div>
                                                <div class="product__item__text">
                                                    <h6>{filname.ProNombre}</h6>
                                                    <a href={"/CliProducto/" + filname._id + "/" + item_valueid} class="add-cart">Ver detalles</a>
                                                    <h5>${filname.ProPrecio}</h5>
                                                    <div class="product__color__select">
                                                        {filname.ProDescripcion}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clscompra