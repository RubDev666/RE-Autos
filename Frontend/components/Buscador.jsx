'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Buscador = () => {
    const [formOnSelect, setFormOnSelect] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const router = useRouter();

    const handleBuscar = (e) => {
        e.preventDefault();

        if(busqueda === '') return;

        //obtener un arreglo con palabras clave para iterar en la busqueda
        const arr = busqueda.toLocaleLowerCase().trim().split(' '); //incluye en el arreglo los strings vacios
        const arr2 = arr.filter((text) => text !== '');  //aqui eliminamos los strings vacios y extraemos las palabras clave

        router.push('/seminuevos?keywords=' + arr2.join('-'));
    }

    return (
        <form
            onSubmit={handleBuscar}
            onSelect={() => setFormOnSelect(true)}
            onBlur={() => setFormOnSelect(false)}
            className={`items-center ${formOnSelect ? 'border-activado' : 'border-desactivado'}`}
        >
            <label
                htmlFor='filtrador'
                onClick={() => setFormOnSelect(true)}
            >
                <button type='submit' id="btn-subtmit" aria-label="btn-submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={`search-icon ${formOnSelect ? 'icon-activado' : 'icon-desactivado'}`} />
                </button>
            </label>
            <input id='filtrador' type="text" placeholder='Buscar por marca, modelo, año, etc.' className='parrafo' onChange={e => setBusqueda(e.target.value.trim())} />
        </form>
    )
}

export default Buscador