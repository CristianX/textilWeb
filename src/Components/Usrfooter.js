import React from 'react'
import logo2 from '../img/logo.png'
import logo_pay from '../img/payment.png';

const Usrfooter = () => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__about">
                                <div class="footer__logo">
                                    <a href="#"><img src={logo2} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div class="footer__widget">
                                <h6>Redes Sociales</h6>
                                <ul>
                                    <li><a href="https://www.facebook.com/Danytex-101963601641239/">Facebook</a></li>
                                    <li><a href="https://api.whatsapp.com/send?phone=593997860570&app=facebook&entry_point=page_cta">Whatsapp</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__about">
                                <p>Danitex, expertos en proveer maquinarias y repuestos textiles e innovadores de alta calidad que satisfagan las necesidades de nuestros clientes, brindando siempre un servicio de excelencia</p>
                                <a href="#"><img src={logo_pay} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="footer__copyright__text">
                                <p>Copyright ©
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script>
                                    Todos los derechos reservados |
                                    por <a href="https://www.facebook.com/people/Danytex/100026536276773/" target="_blank">Danitex</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Usrfooter