'use client';

import useSWR from "swr";
import { useEffect, useState, useCallback } from 'react';
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import '@/public/styles/main-seminuevos.css';
import ModalFiltrosSeminuevos from "./ModalFiltrosSeminuevos";
import Buscador from "./Buscador";
import Error from "./Error";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAngleDown, 
    faAngleUp,
    faFilter,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const SeminuevosPage = ({ searchParams }) => {
    const fetcher = url => fetch(url).then(r => r.json());
    const { data, error, isLoading } = useSWR("/api/autos", fetcher);

    const [ordenar, setOrdenar] = useState(false);
    const [ordenarOption, setOrdenarOption] = useState('');
    const [modalFiltros, setModalFiltros] = useState(false);
    const [showFiltros, setShowFiltros] = useState(true);

    //acordeon para los filtros
    const [marcaAcordeon, setMarcaAcordeon] = useState(false);
    const [yearAcordeon, setYearAcordeon] = useState(false);
    const [colorAcordeon, setColorAcordeon] = useState(false);
    const [puertasAcordeon, setPuertasAcordeon] = useState(false);
    const [transmisionAcordeon, setTransmisionAcordeon] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const ordenarOptions = ['Mayor precio', 'Menor precio', 'Más antiguos', 'Más recientes'];

    let autos = []; //arreglo de autos para filtrar y mostrar al cliente
    let params = []; //agrupar todos los parametros de forma global para algunos casos.

    //arreglos para los filtros
    let autosFiltros = [];
    let marcas = [];
    let years = [];
    let puertas = [];
    let transmisiones = [];
    let colores = [];

    useEffect(() => {
        if(!searchParams.orden) {
            setOrdenarOption('');
        }

    }, [searchParams])

    useEffect(() => {
        if(window.innerWidth >= 1024) {
            setModalFiltros(true);
        } else {
            setShowFiltros(true);
        }

        addEventListener('resize', () => {
            if(window.innerWidth >= 1024) {
                setModalFiltros(true);
            } else {
                setModalFiltros(false);
                setShowFiltros(true);
            }
        })
    }, [])

    useEffect(() => {
        const body = document.getElementsByTagName('body');

        if (modalFiltros && window.innerWidth <= 1023) {
            body[0].style.overflowY = 'hidden';
        } else {
            body[0].style.overflowY = 'auto';

            setMarcaAcordeon(false);
            setYearAcordeon(false);
            setPuertasAcordeon(false);
            setColorAcordeon(false);
            setTransmisionAcordeon(false);
        }

    }, [modalFiltros])

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            if(searchParams.keywords && name !== 'orden') {
                params.delete('keywords');
            }

            return params.toString();
        },
        [searchParams]
    )

    const deleteParam = (param) => {
        const url = '/seminuevos';
        const urlP = new URLSearchParams(searchParams);

        if(searchParams.keywords) urlP.delete('keywords');

        if(searchParams.marca) {
            //multiples valores de un parametro
            if(searchParams.marca.includes('-')){
                let arr = searchParams.marca.split('-');
                arr = arr.filter((p) => p !== param);

                urlP.set('marca', arr.join('-'));
            } else if(searchParams.marca === param) {
                urlP.delete('marca'); //un solo valor del parametro
            }
        }

        if(searchParams.year) {
            if(searchParams.year.includes('-')){
                let arr = searchParams.year.split('-');
                arr = arr.filter((p) => p !== param);

                urlP.set('year', arr.join('-'));
            } else if(searchParams.year === param) {
                urlP.delete('year');
            }
        }

        if(searchParams.color) {
            if(searchParams.color.includes('-')){
                let arr = searchParams.color.split('-');
                arr = arr.filter((p) => p !== param);

                urlP.set('color', arr.join('-'));
            } else if(searchParams.color === param) {
                urlP.delete('color');
            }
        }

        if(searchParams.puertas) {
            if(searchParams.puertas.includes('-')){
                let arr = searchParams.puertas.split('-');
                arr = arr.filter((p) => p !== param);

                urlP.set('puertas', arr.join('-'));
            } else if(searchParams.puertas === param) {
                urlP.delete('puertas');
            }
        }

        if(searchParams.transmision) {
            if(searchParams.transmision.includes('-')){
                let arr = searchParams.transmision.split('-');
                arr = arr.filter((p) => p !== param);

                urlP.set('transmision', arr.join('-'));
            } else if(searchParams.transmision === param) {
                urlP.delete('transmision');
            }
        }

        router.push(url + '?' + urlP.toString());
    }
 
    function getDatos() {
        //guardar todo aqui mientras se filtra, por cada parametro y luego mandarlo al arreglo de "autos" al final
        let preAutos = [];

        //extraer los datos
        if (data) {
            for (let auto of data) {
                preAutos.push(auto); //si hay parametros, este arreglo se ira modificando hasta al final para poder reemplazar el de "autos"
                autosFiltros.push(auto); //para extraer las opciones de filtros diponibles
            }
        }

        getOpcionesFiltros();

        if (searchParams.marca) {
            if(searchParams.marca.includes('-')) {
                const marcaParams = searchParams.marca.split('-');

                let marcasFiltros = [];

                for(let marcaParam of marcaParams) {
                    params.push(marcaParam);

                    const filtro = preAutos.filter((auto) => auto.marca.toLowerCase().replace(' ', '_') === marcaParam);

                    for(let auto of filtro) {
                        marcasFiltros.push(auto);
                    }
                }

                preAutos = marcasFiltros;
            } else {
                params.push(searchParams.marca);

                const filtro = preAutos.filter((auto) => auto.marca.toLowerCase().replace(' ', '_') === searchParams.marca);

                preAutos = filtro;
            }
        }

        if (searchParams.year) {
            if(searchParams.year.includes('-')) {
                const yearParams = searchParams.year.split('-');

                let yearsFiltros = [];

                for(let yearParam of yearParams) {
                    params.push(yearParam);

                    const filtro = preAutos.filter((auto) => auto.year.toString() === yearParam);

                    for(let auto of filtro) {
                        yearsFiltros.push(auto);
                    }
                }

                preAutos = yearsFiltros;
            } else {
                params.push(searchParams.year);

                const filtro = preAutos.filter((auto) => auto.year.toString() === searchParams.year);

                preAutos = filtro;
            }
        }

        if (searchParams.puertas) {
            if(searchParams.puertas.includes('-')) {
                const puertasParams = searchParams.puertas.split('-');

                let puertaFiltros = [];

                for(let puertaParam of puertasParams) {
                    params.push(puertaParam);

                    const filtro = preAutos.filter((auto) => auto.puertas.toString() === puertaParam);

                    for(let auto of filtro) {
                        puertaFiltros.push(auto);
                    }
                }

                preAutos = puertaFiltros;
            } else {
                params.push(searchParams.puertas);

                const filtro = preAutos.filter((auto) => auto.puertas.toString() === searchParams.puertas);

                preAutos = filtro;
            }
        }

        if (searchParams.transmision) {
            if(searchParams.transmision.includes('-')) {
                const transmisionParams = searchParams.transmision.split('-');

                let transmisionFiltros = [];

                for(let transmisionParam of transmisionParams) {
                    params.push(transmisionParam);

                    const filtro = preAutos.filter((auto) => auto.transmision.toLowerCase() === transmisionParam);

                    for(let auto of filtro) {
                        transmisionFiltros.push(auto);
                    }
                }

                preAutos = transmisionFiltros;
            } else {
                params.push(searchParams.transmision);

                const filtro = preAutos.filter((auto) => auto.transmision.toLowerCase() === searchParams.transmision);

                preAutos = filtro;
            }
        }

        if (searchParams.color) {
            if(searchParams.color.includes('-')) {
                const colorParams = searchParams.color.split('-');

                let colorFiltros = [];

                for(let colorParam of colorParams) {
                    params.push(colorParam);

                    const filtro = preAutos.filter((auto) => auto.color.toLowerCase() === colorParam);

                    for(let auto of filtro) {
                        colorFiltros.push(auto);
                    }
                }

                preAutos = colorFiltros;
            } else {
                params.push(searchParams.color);

                const filtro = preAutos.filter((auto) => auto.color.toLowerCase() === searchParams.color);

                preAutos = filtro;
            }
        }

        if (searchParams.keywords) {
            const keywords = searchParams.keywords.split('-');

            let keyMarcas = [];
            let keyYears = [];
            let keyPuertas = [];
            let keyTransmision = [];
            let keyColores = [];
            let keyModelos = [];

            for (let word of keywords) {
                params.push(word);

                for (let marca of marcas) {
                    if(marca.toLowerCase().includes(word) && !keyMarcas.includes(marca)){
                        keyMarcas.push(marca);
                    }
                }

                for (let year of years) {
                    if(year.includes(word) && !keyYears.includes(year)){
                        keyYears.push(year);
                    }
                }

                for (let puerta of puertas) {
                    if(puerta.includes(word) && !keyPuertas.includes(puerta)){
                        keyPuertas.push(puerta);
                    }
                }

                for (let transmision of transmisiones) {
                    if(transmision.toLowerCase().includes(word) && !keyTransmision.includes(transmision)){
                        keyTransmision.push(transmision);
                    }
                }

                for (let color of colores) {
                    if(color.includes(word) && !keyColores.includes(color)){
                        keyColores.push(color);
                    }
                }

                for(let auto of preAutos) {
                    if(auto.modelo.toLowerCase().includes(word) && !keyModelos.includes(auto.modelo)) {
                        keyModelos.push(auto.modelo);
                    }
                }
            }

            let autosId = []; //para guardar los ids de  los autos y poder evitar repeticiones al instante
            let filtros = []; //guardar los autos filtrados

            for(let keyMarca of keyMarcas) {
                for(let auto of preAutos) {
                    if(auto.marca === keyMarca && !autosId.includes(auto.id)) {
                        autosId.push(auto.id);

                        filtros.push(auto);
                    }
                }
            }

            for(let keyYear of keyYears) {
                for(let auto of preAutos) {
                    if(auto.year.toString() === keyYear && !autosId.includes(auto.id)) {
                        autosId.push(auto.id);

                        filtros.push(auto);
                    }
                }
            }

            for(let keyPuerta of keyPuertas) {
                for(let auto of preAutos) {
                    if(auto.puertas.toString() === keyPuerta && !autosId.includes(auto.id)) {
                        autosId.push(auto.id);

                        filtros.push(auto);
                    }
                }
            }

            for(let keyTrans of keyTransmision) {
                for(let auto of preAutos) {
                    if(auto.transmision === keyTrans && !autosId.includes(auto.id)) {
                        autosId.push(auto.id);

                        filtros.push(auto);
                    }
                }
            }

            for(let keyColor of keyColores) {
                for(let auto of preAutos) {
                    if(auto.color.toLowerCase() === keyColor && !autosId.includes(auto.id)) {
                        autosId.push(auto.id);

                        filtros.push(auto);
                    }
                }
            }

            for(let keyModelo of keyModelos) {
                for(let auto of preAutos) {
                    if(auto.modelo === keyModelo && !autosId.includes(auto.id)) {
                        autosId.push(auto.id);

                        filtros.push(auto);
                    }
                }
            }

            preAutos = filtros;
        }

        if (searchParams.orden) {
            if (searchParams.orden === 'Mayor precio') {
                preAutos.sort((x, y) => y.precio - x.precio);
            } else if (searchParams.orden === 'Menor precio') {
                preAutos.sort((x, y) => x.precio - y.precio);
            } else if (searchParams.orden === 'Más antiguos') {
                preAutos.sort((x, y) => x.year - y.year);
            } else if (searchParams.orden === 'Más recientes') {
                preAutos.sort((x, y) => y.year - x.year);
            }
        }

        autos = preAutos;
    }

    function getOpcionesFiltros() {
        for(let carro of autosFiltros){
            marcas.push(carro.marca);
            years.push(carro.year.toString());
            puertas.push(carro.puertas.toString());
            transmisiones.push(carro.transmision);
            colores.push(carro.color.toLowerCase());
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

        const coloresUnicos = new Set(colores);
        colores = [...coloresUnicos];
    }

    //para remarcar el btn de filtros si esta activado
    const clases = (param) => {
        if(params.includes(param)){
            return 'btn-secundario'
        } else {
            return 'btn-primario'
        }
    }

    getDatos();

    if(isLoading) return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    if(error) return (
        <Error 
            titulo={'Lo sentimos...'}
            mensaje={'Ha ocurrido un error. Recargue la pagina o intentelo mas tarde.'}
        />
    )

    return (
        <div id="main-seminuevos">
            <div className="buscador-container">
                <Buscador />
            </div>

            <div className='semi-header-container'>
                <p className="titulo params-titulo capitalize">Seminuevos {searchParams.marca}</p>

                <div className="resultados-ordenar-container">
                    <p 
                        className="parrafo capitalize btn-toggle-filtros"
                        onClick={() => setShowFiltros(!showFiltros)}
                    >
                        <FontAwesomeIcon icon={faFilter} className="icon-filter"/> {showFiltros ? 'ocultar filtros' : 'mostrar filtros'}
                    </p>

                    <Link href='/seminuevos' className="parrafo btn-limpiar text-color-3">Limpiar</Link>

                    <p className="resultados parrafo">{autos.length} Resultados</p>

                    <div className="ordenar">
                        <p
                            className='parrafo items-center'
                            onClick={() => setOrdenar(!ordenar)}
                        >
                            Ordenar: <span className='seleccionado capitalize btn-action'>{ordenarOption} <FontAwesomeIcon icon={ordenar ? faAngleUp : faAngleDown} className='icon-arrow' /></span>
                        </p>

                        {ordenar && (
                            <div className="opciones-ordenar-contenedor">
                                {ordenarOptions.map((option) => (
                                    <button
                                        className="parrafo"
                                        key={option}
                                        onClick={(e) => {
                                            setOrdenarOption(e.target.innerText);

                                            setOrdenar(false);

                                            router.push(pathname + '?' + createQueryString('orden', e.target.innerText));
                                        }}
                                        value={option}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={`autos-filtros-container ${showFiltros ? 'grid-container-filtros-activados' : 'grid-container-filtros-desactivados'}`}>
                {showFiltros && (
                    <div className="filtros-container-mobile">
                        <button
                            className="parrafo btn-open-filter"
                            onClick={() => setModalFiltros(true)}
                        >
                            + Filtros
                        </button>

                        {modalFiltros && (
                            <ModalFiltrosSeminuevos
                                setModalFiltros={setModalFiltros}
                                setMarcaAcordeon={setMarcaAcordeon}
                                marcaAcordeon={marcaAcordeon}
                                marcas={marcas}
                                setYearAcordeon={setYearAcordeon}
                                yearAcordeon={yearAcordeon}
                                years={years}
                                setColorAcordeon={setColorAcordeon}
                                colorAcordeon={colorAcordeon}
                                colores={colores}
                                setPuertasAcordeon={setPuertasAcordeon}
                                puertasAcordeon={puertasAcordeon}
                                puertas={puertas}
                                setTransmisionAcordeon={setTransmisionAcordeon}
                                transmisionAcordeon={transmisionAcordeon}
                                transmisiones={transmisiones}
                                searchParams={searchParams}
                                clases={clases}
                                router={router}
                                pathname={pathname}
                                createQueryString={createQueryString}
                            />
                        )}
                    </div>
                )}

                <div className="sub-container-autos-filtros">
                    <div className={`eliminar-filtros-contenedor ${params.length > 0 ? 'margin-top' : ''}`} >
                        {params.map((param) => (
                            <button
                                key={param} 
                                className="parrafo"
                                onClick={() => deleteParam(param)}
                            >
                                {param} <FontAwesomeIcon icon={faTimes} className="icon-delete" onClick={() => deleteParam(param)}/>
                            </button>
                        ))}
                    </div>

                    {autos.length > 0 ? (
                        <div className={`autos-container ${showFiltros ? 'grid-filtros-activados' : 'grid-filtros-desactivados'}`}>
                            {autos.map((auto) => (
                                <div className="auto pointer" key={auto.id}>
                                    <div className="img-container">
                                        <Image src={auto.urlImage} alt="imagen auto" width={600} height={310} priority={true} />
                                    </div>

                                    <div className="auto-info">
                                        <p className="titulo">{auto.marca} - {auto.modelo}</p>
                                        <p className="parrafo capitalize text-color-3">{auto.year} • {auto.transmision} • {auto.puertas} Puertas</p>
                                    </div>

                                    <div className="auto-precio">
                                        <p className="titulo">${auto.precio}</p>
                                        <p className="parrafo capitalize text-color-4">Desde $3,000/mes*</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Error 
                            titulo={'No encontramos autos relacionados a tu búsqueda.'}
                            mensaje={'Ajusta los filtros y encuentra otras opciones.'}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SeminuevosPage