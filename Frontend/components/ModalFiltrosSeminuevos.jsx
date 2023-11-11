'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAngleDown, 
    faAngleUp,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

const ModalFiltrosSeminuevos = ({
    setModalFiltros,
    setMarcaAcordeon,
    marcaAcordeon,
    marcas,
    setYearAcordeon,
    yearAcordeon,
    years,
    setColorAcordeon,
    colorAcordeon,
    colores,
    setPuertasAcordeon,
    puertasAcordeon,
    puertas,
    setTransmisionAcordeon,
    transmisionAcordeon,
    transmisiones,
    searchParams,
    clases,
    router,
    pathname,
    createQueryString
}) => {

    return (
        <div className="modal-container">
            <div className="filtros-mobile">
                <div className="acciones items-between">
                    <button className="btn-close items-center pointer"><FontAwesomeIcon icon={faTimes} onClick={() => setModalFiltros(false)} /></button>

                    <p className="titulo">Filtros</p>
                    
                    <Link href='/seminuevos' className="btn-limpiar parrafo">Limpiar</Link>
                </div>

                <div className="filtros">
                    <div className="opcion-contenedor">
                        <p
                            className={`parrafo btn-action pointer ${marcaAcordeon ? 'text-color-4' : 'text-color-3'}`}
                            onClick={() => setMarcaAcordeon(!marcaAcordeon)}
                        >
                            Marca <FontAwesomeIcon icon={marcaAcordeon ? faAngleUp : faAngleDown} className="opcion-icon" />
                        </p>

                        {marcaAcordeon && (
                            <div className="opciones">
                                {marcas.map((marca) => (
                                    <button
                                        className={`capitalize btn parrafo ${clases(marca.toLowerCase().replace(' ', '_'))}`}
                                        key={marca}
                                        onClick={(e) => {
                                            const text = e.target.innerText.toLowerCase().replace(' ', '_');

                                            if (searchParams.marca) {
                                                if (!searchParams.marca.includes(text)) {
                                                    router.push(pathname + '?' + createQueryString('marca', searchParams.marca + '-' + text))
                                                }
                                            } else {
                                                router.push(pathname + '?' + createQueryString('marca', text))
                                            }
                                        }}
                                    >
                                        {marca}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="opcion-contenedor">
                        <p
                            className={`parrafo btn-action pointer ${yearAcordeon ? 'text-color-4' : 'text-color-3'}`}
                            onClick={() => setYearAcordeon(!yearAcordeon)}
                        >
                            Año <FontAwesomeIcon icon={yearAcordeon ? faAngleUp : faAngleDown} className="opcion-icon" />
                        </p>

                        {yearAcordeon && (
                            <div className="opciones">
                                {years.map((year) => (
                                    <button
                                        className={`capitalize btn parrafo ${clases(year.toLowerCase().replace(' ', '_'))}`}
                                        key={year}
                                        onClick={(e) => {
                                            const text = e.target.innerText.toLowerCase().replace(' ', '_');

                                            if (searchParams.year) {
                                                if (!searchParams.year.includes(text)) {
                                                    router.push(pathname + '?' + createQueryString('year', searchParams.year + '-' + text))
                                                }
                                            } else {
                                                router.push(pathname + '?' + createQueryString('year', text))
                                            }
                                        }}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="opcion-contenedor">
                        <p
                            className={`parrafo btn-action pointer ${colorAcordeon ? 'text-color-4' : 'text-color-3'}`}
                            onClick={() => setColorAcordeon(!colorAcordeon)}
                        >
                            Color <FontAwesomeIcon icon={colorAcordeon ? faAngleUp : faAngleDown} className="opcion-icon" />
                        </p>

                        {colorAcordeon && (
                            <div className="opciones">
                                {colores.map((color) => (
                                    <button
                                        className={`capitalize btn parrafo ${clases(color.toLowerCase())}`}
                                        key={color}
                                        onClick={(e) => {
                                            const text = e.target.innerText.toLowerCase();

                                            if (searchParams.color) {
                                                if (!searchParams.color.includes(text)) {
                                                    router.push(pathname + '?' + createQueryString('color', searchParams.color + '-' + text))
                                                }
                                            } else {
                                                router.push(pathname + '?' + createQueryString('color', text))
                                            }
                                        }}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="opcion-contenedor">
                        <p
                            className={`parrafo btn-action pointer ${puertasAcordeon ? 'text-color-4' : 'text-color-3'}`}
                            onClick={() => setPuertasAcordeon(!puertasAcordeon)}
                        >
                            Puertas <FontAwesomeIcon icon={puertasAcordeon ? faAngleUp : faAngleDown} className="opcion-icon" />
                        </p>

                        {puertasAcordeon && (
                            <div className="opciones">
                                {puertas.map((puerta) => (
                                    <button
                                        className={`capitalize btn parrafo ${clases(puerta)}`}
                                        key={puerta}
                                        onClick={(e) => {
                                            const text = e.target.innerText;

                                            if (searchParams.puertas) {
                                                if (!searchParams.puertas.includes(text)) {
                                                    router.push(pathname + '?' + createQueryString('puertas', searchParams.puertas + '-' + text))
                                                }
                                            } else {
                                                router.push(pathname + '?' + createQueryString('puertas', text))
                                            }
                                        }}
                                    >
                                        {puerta}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="opcion-contenedor">
                        <p
                            className={`parrafo btn-action pointer ${transmisionAcordeon ? 'text-color-4' : 'text-color-3'}`}
                            onClick={() => setTransmisionAcordeon(!transmisionAcordeon)}
                        >
                            Transmision <FontAwesomeIcon icon={transmisionAcordeon ? faAngleUp : faAngleDown} className="opcion-icon" />
                        </p>

                        {transmisionAcordeon && (
                            <div className="opciones">
                                {transmisiones.map((transmision) => (
                                    <button
                                        className={`capitalize btn parrafo ${clases(transmision.toLowerCase())}`}
                                        key={transmision}
                                        onClick={(e) => {
                                            const text = e.target.innerText.toLowerCase();

                                            if (searchParams.transmision) {
                                                if (!searchParams.transmision.includes(text)) {
                                                    router.push(pathname + '?' + createQueryString('transmision', searchParams.transmision + '-' + text))
                                                }
                                            } else {
                                                router.push(pathname + '?' + createQueryString('transmision', text))
                                            }
                                        }}
                                    >
                                        {transmision}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <button
                    className="btn btn-secundario parrafo capitalize btn-mostrar-resultados"
                    onClick={() => setModalFiltros(false)}
                >
                    Mostrar resultados
                </button>
            </div>
        </div>
    )
}

export default ModalFiltrosSeminuevos