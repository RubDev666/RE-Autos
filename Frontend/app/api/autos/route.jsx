export async function GET () {
    const respuesta = await fetch(process.env.NEXT_PUBLIC_API).then((res) => res.json());

    return Response.json(respuesta.carros);
}
