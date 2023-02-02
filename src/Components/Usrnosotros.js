import React from 'react'
import imgtest from '../img/about/testimonial-pic.jpg';
import { Link } from 'react-router-dom';

const Usrnosotros = () => {
    return (
        <div>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Nosotros</h4>
                                <div>
                                    <Link to="/Inicio">Inicio &gt; </Link>
                                    <span>Nosotros</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="breadcrumb__text">
                                <p>Somos un grupo de trabajadores dedicados a brindar soluciones a las necesidades en cuanto a maquinaria e insumos textiles.
                                    Nuestros clientes comprenden desde las amas de casa, microempresarios, hasta las más grandes empresas, cuyo propósito es resaltar la calidad de producción, haciendo uso de la mejor maquinaria e insumos del área textil llegando al éxito empresarial.
                                </p>
                                <h2>Misión</h2>
                                <p>
                                    Somos una empresa que se dedica a comercializar maquinaria e insumos de la industria textil de la más alta calidad y garantía, basados en la capacidad innovadora con productos diferenciados y enfocados en un alto estándar de servicio al cliente con personal altamente capacitado.
                                </p>
                                <h2>Visión</h2>
                                <p>
                                    Ser una empresa líder en la comercialización de productos textiles a nivel nacional e internacional  en 8 años,  reconocida por su innovación y calidad,  fomentando siempre la eficiencia y vocación de servicio, estableciendo relaciones con los clientes a largo plazo.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0">
                            <div class="testimonial__pic set-bg"><img src={imgtest} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br />
        </div>
    )
}

export default Usrnosotros