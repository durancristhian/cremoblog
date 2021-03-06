# cremoblog

## Desarrollo

Duplicar el archivo `.env.template`, renombrarlo como `.env.` y agregar los valores para poder correr el proyecto. Luego:

```bash
# Instalar dependencias
npm i

# Correr la aplicación
npm run dev
```

Este es un blog que estoy desarrollando en vivo en [Twitch](https://www.twitch.tv/durancristhian).

La idea es usar Markdown para escribir el contenido en un sitio hecho con [Next.js](https://nextjs.org/) para aprender sobre como trabajar server side rendering y static site generation. Por otro lado, aprendemos a configurar y usar [Forestry.io](https://forestry.io/) para gestionar el contenido.

## Episodio 1, Martes 13/10/2020

- Maquetamos el `<Layout />`
- Ponemos algo de contenido en la página principal usando `getStaticProps`, haciendo que nuestro sitio sea 100% estático
- Vinculamos el repo con Forestry, lo configuramos y empezamos a editar el contenido de la home por medio de este servicio
- Commits:
    - [Episodio #1](https://github.com/durancristhian/cremoblog/commit/c91b2167c7a717a662f1ca3dcf3952ed8e2fe99a)
- [Deploy](https://cremoblog-gwnv02lc5.vercel.app/)

[![Episodio 1](https://img.youtube.com/vi/oUXMdoEFw5g/0.jpg)](https://www.youtube.com/watch?v=oUXMdoEFw5g)

## Episodio 2, Martes 20/10/2020

- Listamos los artículos para la página /blog
- Creamos templates y mejoramos la estructura del contenido en Forestry
- Commits:
    - [Episodio #2 - Articulos](https://github.com/durancristhian/cremoblog/commit/a2b48c722151306f0f987d268d1b4ef2cb43fa2a)
    - [Episodio #2 - Metadata](https://github.com/durancristhian/cremoblog/commit/9d74373b0b61bc678011acdc973222a9ad1c8a38)
- [Deploy](https://cremoblog-5im6vh7zs.vercel.app/)

[![Episodio 2](https://img.youtube.com/vi/c3YRVGesQow/0.jpg)](https://www.youtube.com/watch?v=c3YRVGesQow)

## Episodio 3, Sábado 25/10/2020

- Renderizamos los artículos del blog
- Creamos el menu desde un archivo json gestionado con Forestry usando un template custom
- Commits:
    - [Episodio #3 - Artículos](https://github.com/durancristhian/cremoblog/commit/2e5ab3876f05391d44cc5dfcfa1c35bd4e1da8da)
    - [Episodio #3 - Menú](https://github.com/durancristhian/cremoblog/commit/e69c467f9cc38cbd309089f8cd74360da67453b4)
- [Deploy](https://cremoblog-a2ovbji42.vercel.app/)

[![Episodio 3](https://img.youtube.com/vi/M1XN4WJ3McU/0.jpg)](https://www.youtube.com/watch?v=M1XN4WJ3McU)