'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { register } from 'swiper/element/bundle';
register();

const SliderMain = () => {
    const [sliderView, setSliderView] = useState('1'); //numero de elementos a mostrar en el slider
    const [navigationBtn, setNavigationBtn] = useState('false');
    const [slider, setSlider] = useState(false);

    useEffect(() => {
        setSlider(true);

        //al cargar el sitio se ejecuta esto
        if (innerWidth < 768) {
            setSliderView('1');
        } else if (innerWidth >= 768 && innerWidth <= 919) {
            setSliderView('2');
        } else if (innerWidth >= 920) {
            setSliderView('3');
        }

        //escuchando los cambios de tamaño de pantalla
        addEventListener("resize", (event) => {
            setNavigationBtn('false');

            if (innerWidth < 768) {
                setSliderView('1');
            } else if (innerWidth >= 768 && innerWidth <= 919) {
                setSliderView('2');
            } else if (innerWidth >= 920) {
                setSliderView('3');
            }
        });
    }, [])

    return (
        <section id="slider-main">
            <h2 className='titulo'>7 razones para comprar un auto en <span className="italic">RE AUTOS</span></h2>

            {!slider && (
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )}

            {slider && (
                <swiper-container
                    speed="700"
                    slides-per-view={sliderView}
                    pagination={sliderView === '1' ? "true" : "false"}
                    navigation={navigationBtn}
                    onMouseEnter={() => setNavigationBtn(sliderView === '2' || sliderView === '3' ? 'true' : 'false')}
                    onMouseLeave={() => setNavigationBtn('false')}
                >
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-1.webp' width={450} height={200} alt='img-main' priority={true} />

                            <div className='slider-text'>
                                <h3 className='titulo'>Te damos 3 meses de garantía limitada</h3>
                                <p className='parrafo'>Contrata <span className="italic">RE AUTOS</span> Total para recibir mayor cobertura y beneficios adicionales por 12 meses.</p>
                            </div>
                        </article>
                    </swiper-slide>
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-2.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='titulo'>Certificamos todos nuestros auto</h3>
                                <p className='parrafo'>Revisamos mecánica, estética y documentación para que te sientas seguro en tu <span className="italic">RE AUTOS</span></p>
                            </div>
                        </article>
                    </swiper-slide>
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-3.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='titulo'>Atención Mecánica Especializada</h3>
                                <p className='parrafo'>Con nuestros servicios posventa extiendes la vida de tu auto</p>
                            </div>
                        </article>
                    </swiper-slide>
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-4.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='titulo'>Ofrecemos planes de pago a medida</h3>
                                <p className='parrafo'>Preaprobamos tu plan de pagos en menos de 2 minutos.</p>
                            </div>
                        </article>
                    </swiper-slide>
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-5.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='titulo'>Vive la experiencia <span className="italic">RE AUTOS</span></h3>
                                <p className='parrafo'>Visita nuestras sedes con miles de autos para escoger.</p>
                            </div>
                        </article>
                    </swiper-slide>
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-6.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='titulo'>Pruébalo por 7 dias o hasta 300 km</h3>
                                <p className='parrafo'>¿No te convence? No te preocupes, cámbialo por otro auto.</p>
                            </div>
                        </article>
                    </swiper-slide>
                    <swiper-slide>
                        <article>
                            <Image src='/images/slider-main/sm-7.webp' width={150} height={100} alt='img-main' />

                            <div className='slider-text'>
                                <h3 className='titulo'>Tu auto en tu bolsillo</h3>
                                <p className='parrafo'>Da seguimiento a coberturas, mantenimiento, verificacion y más, desde la app <span className="italic">RE AUTOS</span></p>
                            </div>
                        </article>
                    </swiper-slide>
                </swiper-container>
            )}
 
            <Link href='/seminuevos' className='btn btn-secundario parrafo'>Comprar un auto</Link>
        </section>
    )
}

export default SliderMain;