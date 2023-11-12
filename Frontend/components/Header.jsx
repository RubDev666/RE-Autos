'use client';

import '@/public/styles/header.css';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faBars,
    faBolt,
    faCar,
    faComment,
    faDollarSign,
    faQuestionCircle,
    faTag,
    faTimes,
    faMagnifyingGlass,
    faAngleRight,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

import Buscador from './Buscador';

const Header = ({ data }) => {
    const [openMenu, setOpenMenu] = useState(false); //mobile
    const [nosotrosAcordeon, setNosotrosAcordeon] = useState(false);
    const [ayudaAcordeon, setAyudaAcordeon] = useState(false);
    const [filtrosOptions, setFiltrosOptions] = useState('');
    const [pagina, setPagina] = useState('');

    const pathname = usePathname();
    const router = useRouter();

    //las opciones del filtrador
    const filtradorOptions = ['marca', 'año', 'puertas', 'transmision']

    //añadir los datos a estos arrays
    let marcas = [];
    let years = [];
    let puertas = [];
    let transmisiones = [];

    useEffect(() => {
        addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                setOpenMenu(false);
                setFiltrosOptions('');
                setAyudaAcordeon(false);
                setNosotrosAcordeon(false);
            }
        })
    })

    useEffect(() => {
        setOpenMenu(false);
        setNosotrosAcordeon(false);
        setAyudaAcordeon(false);

        setFiltrosOptions('');
    }, [pathname])

    //para el menu mobile, quitar el scroll del body al abrir el menu
    //al hacerlo de esta forma es mas rapido e inmediata la respuesta y asi evitamos algunos errores de diseño
    useEffect(() => {
        const body = document.getElementsByTagName('body');
        const header = document.getElementsByTagName('header');

        if (openMenu) {
            body[0].style.overflowY = 'hidden';

            header[0].style.position = 'fixed';
            header[0].style.width = '100%';
            header[0].style.top = '0';
            header[0].style.overflowY = 'auto';
            header[0].style.height = '100vh';
        } else {
            body[0].style.overflowY = 'auto';

            header[0].style.position = 'inherit';
            header[0].style.width = 'auto';
            header[0].style.height = 'auto';
            header[0].style.overflowY = 'visible';

            //cerrar siempre los acordeones cuando se cierra el menu mobile
            setNosotrosAcordeon(false);
            setAyudaAcordeon(false);

            setFiltrosOptions('');
        }
    }, [openMenu]);

    //extraer los datos del prop
    function extraerDatos() {
        if(!data.carros || data.length === 0) return;

        const {carros} = data;

        for(let carro of carros){
            marcas.push(carro.marca);
            years.push(carro.year);
            puertas.push(carro.puertas);
            transmisiones.push(carro.transmision);
        }

        const marcasUnicos = new Set(marcas);
        marcas = [...marcasUnicos]

        years.sort((a, b) => b - a); //ordenar los años de mayor a menor

        const yearUnicos = new Set(years);
        years = [...yearUnicos];

        const puertasUnicos = new Set(puertas);
        puertas = [...puertasUnicos];

        const transmisionUnicos = new Set(transmisiones);
        transmisiones = [...transmisionUnicos];
    }

    extraerDatos();

    return (
        <header>
            <div className="logo-navbar-container">
                <div className="logo-container items-between">
                    <Link
                        className='titulo logo-header'
                        href='/'
                    >
                        RE <FontAwesomeIcon icon={faBolt} className='color-icon' />Autos
                    </Link>


                    {!openMenu && <FontAwesomeIcon icon={faBars} className='icon-bars color-icon pointer' onClick={() => setOpenMenu(true)} />}
                    {openMenu && <FontAwesomeIcon icon={faTimes} className='icon-bars color-icon pointer' onClick={() => setOpenMenu(false)} />}
                </div>

                <nav className={`${openMenu ? 'show' : ''} ${pathname === '/seminuevos' ? 'mobile-seminuevos' : 'mobile'}`}>
                    <div className='ingresar-container'>
                        <p className='titulo'>Te damos la bienvenida</p>
                        <p className='parrafo text-color-3'>Crea una cuenta o inicia sesión para tener el control de tu compra, venta o financiamiento.</p>
                        <button className='btn btn-secundario parrafo'>Ingresar</button>
                    </div>

                    <div className='links-icons border-bottom'>
                        <Link href='/' className='parrafo'>
                            <span><FontAwesomeIcon icon={faDollarSign} className='link-icon' /></span> Paga a meses
                        </Link>
                        <Link href='/seminuevos' className='parrafo'>
                            <span><FontAwesomeIcon icon={faCar} className='link-icon' /></span> Compra un auto
                        </Link>
                        <Link href='/' className='parrafo'>
                            <span><FontAwesomeIcon icon={faTag} className='link-icon' /></span> Vende tu auto
                        </Link>
                    </div>

                    <div className="links-acordeon border-bottom">
                        <Link className='parrafo' href='/'>Cuida tu auto</Link>

                        <div className='nosotros-acordeon'>
                            <p
                                className={`parrafo pointer btn-action ${nosotrosAcordeon ? 'text-color-4' : 'text-color-3'}`}
                                onClick={() => setNosotrosAcordeon(!nosotrosAcordeon)}
                            >
                                Nosotros <FontAwesomeIcon icon={nosotrosAcordeon ? faAngleUp : faAngleDown} className='color-icon' />
                            </p>

                            {nosotrosAcordeon && (
                                <div className='acordeon'>
                                    <Link href='/' className='parrafo'>Sedes</Link>
                                    <Link href='/' className='parrafo'>Guía de precios</Link>
                                    <Link href='/' className='parrafo'>Testimoniales</Link>
                                    <Link href='/' className='parrafo'>Blog</Link>
                                </div>
                            )}
                        </div>

                        <div className="ayuda-acordeon">
                            <p
                                className={`parrafo pointer btn-action ${ayudaAcordeon ? 'text-color-4' : 'text-color-3'}`}
                                onClick={() => setAyudaAcordeon(!ayudaAcordeon)}
                            >
                                Ayuda <FontAwesomeIcon icon={ayudaAcordeon ? faAngleUp : faAngleDown} className='color-icon' />
                            </p>

                            {ayudaAcordeon && (
                                <div className='acordeon'>
                                    <Link href='/' className='parrafo capitalize'>
                                        <FontAwesomeIcon icon={faQuestionCircle} className='ayuda-icon' /> Preguntas frecuentes
                                    </Link>
                                    <Link href='/' className='parrafo'>
                                        <FontAwesomeIcon icon={faComment} className='ayuda-icon' /> Contacto
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            {data.carros && (
                <div className={`search-filtros-container ${pathname !== '/' ? 'display-none' : 'items-between'}`} >
                    <div className={`buscador-container ${openMenu ? 'display-none' : 'display-block'}`}>
                        <Buscador />
                    </div>

                    <div className={`filtrador-header-container ${openMenu ? 'display-block' : 'display-none'}`}>
                        <p className="parrafo text-color-3">Filtrar por:</p>

                        {filtradorOptions.map((option) => (
                            <p
                                className={`parrafo btn-action capitalize pointer ${filtrosOptions === option ? 'text-color-4' : 'text-color-3'}`}
                                onClick={() => filtrosOptions === option ? setFiltrosOptions('') : setFiltrosOptions(option)}
                                key={option}
                            >
                                {option} <FontAwesomeIcon icon={faAngleRight} className='color-icon icon-mobile' /> <FontAwesomeIcon icon={filtrosOptions === option ? faAngleUp : faAngleDown} className='color-icon icon-pc' />
                            </p>
                        ))}
                    </div>

                    <div className={`options-container ${filtrosOptions !== '' ? 'display-block' : 'display-none'} ${filtrosOptions}`}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            onClick={() => setFiltrosOptions('')}
                            className='color-icon pointer'
                        />

                        {filtrosOptions === 'marca' ? (
                            <p className='titulo'>Marcas mas populares</p>
                        ) : (
                            <p className='titulo capitalize'>{filtrosOptions}</p>
                        )}

                        <div className="options">
                            {filtrosOptions === 'marca' && (
                                marcas.map((marca) => (
                                    <Link href={`/seminuevos?marca=${marca.toLowerCase().replace(' ', '_')}`} className="parrafo text-color-3" key={marca}>{marca}</Link>
                                ))
                            )}

                            {filtrosOptions === 'año' && (
                                years.map((year) => (
                                    <Link href={`/seminuevos?year=${year.toString()}`} className="parrafo text-color-3" key={year}>{year}</Link>
                                ))
                            )}

                            {filtrosOptions === 'puertas' && (
                                puertas.map((puerta) => (
                                    <Link href={`/seminuevos?puertas=${puerta.toString()}`} className="parrafo text-color-3" key={puerta}>{puerta}</Link>
                                ))
                            )}

                            {filtrosOptions === 'transmision' && (
                                transmisiones.map((transmision) => (
                                    <Link href={`/seminuevos?transmision=${transmision.toLowerCase().replace(' ', '_')}`} className="parrafo text-color-3 capitalize" key={transmision}>{transmision}</Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header