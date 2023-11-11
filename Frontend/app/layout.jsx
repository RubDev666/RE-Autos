import './globals.css';
import '../public/styles/normalize.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'RE Autos',
    description: 'Autos usados, o seminuevos a los mejores precios',
}

async function getAutos() {
    try {
        const data = await fetch(process.env.NEXT_PUBLIC_API).then(res => res.json());
    
        return data;
    } catch (error) {
        return [];
    }
}

export default async function RootLayout({ children }) {
    const data = await getAutos();

    return (
        <html lang="en">
            <body>
                <Header data={data} />

                {children}

                <Footer />
            </body>
        </html>
    )
}
