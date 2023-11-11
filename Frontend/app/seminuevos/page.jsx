import SeminuevosPage from "@/components/SeminuevosPage";

export const metadata = {
    title: 'RE Autos | Seminuevos',
    description: 'Autos usados, o seminuevos a los mejores precios',
}
 
const Page = ({ searchParams }) => {
    return (
        <SeminuevosPage searchParams={searchParams}/>
    )
}

export default Page;
