import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';
import '../public/styles/main.css'; //estilos para el main y slider

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import SliderMain from '@/components/SliderMain';

export const metadata = {
    title: 'RE Autos | Inicio',
    description: 'Autos usados, o seminuevos a los mejores precios',
}

export default function Home() {
    return (
        <>
            <main id='#main-index' className='relative main'>
                <div className="fondo-skew"></div>

                <div className="contenedor-main relative items-center">
                    <Image src='/images/main-img.png' width={600} height={337} alt='main-img' className='auto-main' priority={true} />

                    <div className="main-info-container">
                        <h1 className='titulo'>Transformamos la compra y venta de autos seminuevos</h1>

                        <Link href='/seminuevos' className='parrafo btn btn-secundario'>Comprar un auto</Link>

                        <div className="link">
                            <Link href='/' className='btn-link relative parrafo'>Cambia o vende tu auto ahora <FontAwesomeIcon icon={faAngleRight} className='angle-right' /></Link>
                        </div>
                    </div>
                </div>
            </main>

            <SliderMain />

            <section id={styles.cambia_tu_auto} className={`${styles.seccion} ${styles.seccion_gris}`}>
                <div>
                    <h3 className='titulo'>Cambia tu auto con más beneficios</h3>
                    <p className={`parrafo ${styles.border_bottom}`}>Te damos un bono extra.</p>
                    <p className={`parrafo ${styles.border_bottom}`}>Plan de Pagos Pre aprobado*</p>
                    <p className={`parrafo ${styles.line_height}`}>No te quedes sin tu auto, los intercambiamos en menos de 24hrs.</p>

                    <button className="btn btn-primario-no-border parrafo">Vende tu auto</button>
                </div>

                <Image src='/images/seccion-1.png' width={750} height={772} alt='img-main' priority={true} />
            </section>

            <section id={styles.aprobamos_plan} className={`${styles.seccion} ${styles.seccion_white}`}>
                <div>
                    <h3 className='titulo'>Aprobamos tu plan de pagos en 2 minutos</h3>
                    <p className={`parrafo`}>Tenemos planes personalizados para todos los perfiles.</p>

                    <button className="btn btn-secundario parrafo">Compra auto a meses</button>
                </div>

                <Image src='/images/seccion-2-mobile.webp' width={750} height={772} alt='img-main' priority={true} className={styles.img_mobile} />

                <Image src='/images/seccion-2-mobile.webp' width={750} height={772} alt='img-main' priority={true} className={styles.img_normal} />
            </section>

            <section id={styles.disfruta_tu_auto} className={`${styles.seccion} ${styles.seccion_gris}`}>
                <div>
                    <h3 className='titulo'>Disfruta tu auto, nosotros lo cuidamos</h3>
                    <p className={`parrafo`}>Damos servicios a cualquier auto: mantenimiento, verificación y más</p>

                    <button className="btn btn-primario-no-border parrafo">Conoce los servicios</button>
                </div>

                <Image src='/images/seccion-3.png' width={750} height={772} alt='img-main' priority={true} />
            </section>

            <section id={styles.visitanos} className={`items-center ${styles.seccion} ${styles.seccion_white}`}>
                <h3 className="titulo">¡Visita nuestras sedes y conócenos!</h3>

                <div className={`${styles.sedes_contenedor}`}>
                    <div className={styles.sedes}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.sede_icono} />

                        <div className={styles.direccion}>
                            <p className={`parrafo ${styles.sede_nombre}`}>RE AUTOS CDMX</p>
                            <p className={`parrafo ${styles.sede_direccion}`}>Carr Amomolulco Ocoyoacac, Estado de México, 52740.</p>
                        </div>

                        <button className='btn btn-primario parrafo'>Ver detalles</button>
                    </div>

                    <div className={styles.sedes}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.sede_icono} />

                        <div className={styles.direccion}>
                            <p className={`parrafo ${styles.sede_nombre}`}>RE AUTOS Monterrey</p>
                            <p className={`parrafo ${styles.sede_direccion}`}>AV Sin nombre 9087, Guadalupe, Monterrey, 52740.</p>
                        </div>

                        <button className='btn btn-primario parrafo'>Ver detalles</button>
                    </div>

                    <div className={styles.sedes}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.sede_icono} />

                        <div className={styles.direccion}>
                            <p className={`parrafo ${styles.sede_nombre}`}>RE AUTOS Mérida</p>
                            <p className={`parrafo ${styles.sede_direccion}`}>Periferico Norte, No.73, Francisco de Montejo, 52740.</p>
                        </div>

                        <button className='btn btn-primario parrafo'>Ver detalles</button>
                    </div>

                    <div className={styles.sedes}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.sede_icono} />

                        <div className={styles.direccion}>
                            <p className={`parrafo ${styles.sede_nombre}`}>RE AUTOS Guadalajara</p>
                            <p className={`parrafo ${styles.sede_direccion}`}>Cristobal Colón 6013, San Pedro Tlaquepaque, Jalisco, 45601.</p>
                        </div>

                        <button className='btn btn-primario parrafo'>Ver detalles</button>
                    </div>
                </div>

                <button className='btn btn-secundario parrafo'>Conoce nuestras sedes</button>
            </section>
        </>
    )
}
