import React, { useEffect, useState } from 'react'

const prueba = "";




const UsuPrueba = () => {

    const [postId, setPostId] = useState([]);

    var ub = "porfa"
    var ub2 = "a la casa de bv"
    


    const regis = (correo, pass, initialurl) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ var11: correo, var12: pass })
        };
        fetch("http://localhost:4000/users", requestOptions)
            .then((response) => response.json())
            .then((data) => setPostId(data));

        postId.filter(varid => varid = 1).map(filname => (
            alert(filname.name),
            prueba = filname.name
        ))
    }

    function porfa (ub){
        document.getElementById("user_pass").value = ub
        document.getElementById("user_correo").value = ub2

    }



    return (
        <div>
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <form onSubmit={ev => {
                            ev.preventDefault();

                            const correo = ev.target.correosi.value;
                            const pass = ev.target.passsi.value;


                            const initialurl = "http://localhost:4000/users";


                            regis(correo, pass, initialurl);

                        }}>


                            <div class="row">
                                <div class="col-lg-8 col-md-6">
                                    <h6 class="checkout__title">Registro de Clientes</h6>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Correo<span>*</span></p>
                                                <input type="text" name='correosi' id="user_correo"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Contraseña<span>*</span></p>
                                                {postId.filter(varid => varid = 1).map(filname => (
                                                    filname.name,
                                                    prueba
                                                ))}
                                                <input type="text" name='passsi' id="user_pass"  defaultValue = {""} />

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <button type="submit" class="site-btn" id="btn_registrar_cliente" 
                                            onClick={() => porfa(ub, ub2)}>Registrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default UsuPrueba