const db = {
    carros: [
        {
            id: 1,
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2020,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696393527/Venta%20de%20autos%20-%20Proyecto/BMW-Serie-2020-4_k06muj.jpg'
        },
        { 
            id: 2,
            marca: 'Audi', 
            modelo: 'A4', 
            year: 2020, 
            precio: 40000, 
            puertas: 4, 
            color: 'Negro', 
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696393915/Venta%20de%20autos%20-%20Proyecto/3-5dc5-3263_res2cp.jpg' 
        },
        {
            id: 3,
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696394158/Venta%20de%20autos%20-%20Proyecto/1533731056728_ze2dxs.jpg' 
        },
        { 
            id: 4,
            marca: 'Audi', 
            modelo: 'A6', 
            year: 2020, 
            precio: 35000, 
            puertas: 4, 
            color: 'Negro', 
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696394352/Venta%20de%20autos%20-%20Proyecto/z28242415Q_Audi-A6-50-TFSI-e-quattro-S-tronic_pvcx8e.jpg' 
        },
        {
            id: 5,
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696394949/Venta%20de%20autos%20-%20Proyecto/t7gjl-f9ymg_wd9qdr.webp'
        },
        {
            id: 6,
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395084/Venta%20de%20autos%20-%20Proyecto/GAZ_8aa6ce5c52c743049c2cb496b8f728f4_zeyoi9.jpg'
        },
        {
            id: 7,
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395343/Venta%20de%20autos%20-%20Proyecto/EXTERIOR-frontSidePilotNear-1677795220108_xlmryg.jpg'
        },
        { 
            id: 8,
            marca: 'Ford', 
            modelo: 'Mustang', 
            year: 2019, 
            precio: 80000, 
            puertas: 2, 
            color: 'Rojo', 
            transmision: 'manual' ,
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395437/Venta%20de%20autos%20-%20Proyecto/450_1000_x9c11b.jpg'
        },
        {
            id: 9,
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2020,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395518/Venta%20de%20autos%20-%20Proyecto/D_NQ_NP_882118-MLM71558535320_092023-O_uurxha.webp'
        },
        { 
            id: 10,
            marca: 'Audi', 
            modelo: 'A3', 
            year: 2017, 
            precio: 55000, 
            puertas: 2, 
            color: 'Negro', 
            transmision: 'manual' ,
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696395626/Venta%20de%20autos%20-%20Proyecto/D_NQ_NP_892037-MLM71080004851_082023-O_rz1q8h.webp'
        },
        {
            id: 11,
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2020,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396387/Venta%20de%20autos%20-%20Proyecto/dg020_090clbk1nih9fdssm02bjaiogeg52cr-760x507_h2cy5d.jpg'
        },
        {
            id: 12,
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396454/Venta%20de%20autos%20-%20Proyecto/Mercedes-Clase-C-2018-1-830x460_lvzkxq.jpg'
        },
        {
            id: 13,
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396613/Venta%20de%20autos%20-%20Proyecto/bmw-serie-5-precio-automexico-479c_f2nuuc.jpg'
        },
        { 
            id: 14,
            marca: 'Ford', 
            modelo: 'Mustang', 
            year: 2017, 
            precio: 60000, 
            puertas: 2, 
            color: 'Negro', 
            transmision: 'manual',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396674/Venta%20de%20autos%20-%20Proyecto/HD-wallpaper-ford-mustang-sports-cars-black-mustang-tuning-forgeline-gs1r-ford_ksmcxe.jpg' 
        },
        {
            id: 15,
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396744/Venta%20de%20autos%20-%20Proyecto/desktop-wallpaper-dodge-challenger-_-for-ultra-tv_megtve.jpg'
        },
        {
            id: 16,
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396800/Venta%20de%20autos%20-%20Proyecto/serie-3-bmw-318i-sport-line-2018-exterior-frontsidepilotnear-16268048837496_hsa7qm.jpg'
        },
        {
            id: 17,
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396883/Venta%20de%20autos%20-%20Proyecto/bmw-serie-5-dark-shadow-edition-1609432185_gxotn7.jpg'
        },
        {
            id: 18,
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696396952/Venta%20de%20autos%20-%20Proyecto/EXTERIOR-frontSidePilotNear-1662576244725_bglkjq.jpg'
        },
        { 
            id: 19,
            marca: 'Audi', 
            modelo: 'A4', 
            year: 2016, 
            precio: 30000, 
            puertas: 4, 
            color: 'Azul', 
            transmision: 'automatico',
            urlImage: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1696397043/Venta%20de%20autos%20-%20Proyecto/HD-wallpaper-2016-audi-a4-2-tfsi-quattro-ara-blue-crystal-effect-front-car_txikm7.jpg' 
        }
    ]
}

export default db;