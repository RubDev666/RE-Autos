import Link from 'next/link';
import Image from 'next/image';
import '../public/styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className='logo-links-container'>
                <Link className="logo-footer titulo" href='/'>
                    RE <FontAwesomeIcon icon={faBolt} className='icon-bolt'/> Autos
                </Link>

                <div className="links-container">
                    <div>
                        <Link href='/seminuevos'>Compra un auto</Link>
                        <Link href='/'>Paga a meses</Link>
                        <Link href='/'>Venta entre particulares</Link>
                        <Link href='/'>Vende tu auto</Link>
                        <Link href='/'>Cuida tu auto</Link>
                    </div>

                    <div>
                        <Link href='/'>Sedes</Link>
                        <Link href='/'>preguntas frecuentes</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>Guía de precios</Link>
                        <Link href='/'>Testimoniales</Link>
                    </div>

                    <div>
                        <Link href='/'>Trabaja con nosotros</Link>
                        <Link href='/'>Contacto</Link>
                    </div>
                </div>
            </div>

            <div className="icons-store-container">
                <div className="icons-container">
                    <Image src='/images/footer-icons/facebook.svg' width={20} height={20} alt='icon-img' />
                    <Image src='/images/footer-icons/instagram.svg' width={20} height={20} alt='icon-img' />
                    <Image src='/images/footer-icons/youtube.svg' width={20} height={20} alt='icon-img' />
                    <Image src='/images/footer-icons/twitter.svg' width={20} height={20} alt='icon-img' />
                    <Image src='/images/footer-icons/pinterest.svg' width={20} height={20} alt='icon-img' />
                    <Image src='/images/footer-icons/linkedin.svg' width={20} height={20} alt='icon-img' />
                    <Image src='/images/footer-icons/tiktok.svg' width={20} height={20} alt='icon-img' />
                </div>

                <div className="store-container">
                    <Image src='/images/footer-store/app-store.svg' width={110} height={35} alt='store-img' />
                    <Image src='/images/footer-store/google-play.svg' width={110} height={35} alt='store-img' />
                    <Image src='/images/footer-store/app-gallery.svg' width={110} height={35} alt='store-img' />
                </div>
            </div>

            <p className="parrafo">Created by <span className="rub">Rub</span> Developer © {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;