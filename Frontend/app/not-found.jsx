import Error from "@/components/Error"

export const metadata = {
    title: 'RE Autos | No encontrado',
    description: 'Pagina de no encontrado',
}

export default function NotFound() {
    return (
        <Error
            titulo={'Lo sentimos...'}
            mensaje={'Página no encontrada. Tal vez quieras volver al inicio.'}
        />
    )
}