# Práctica 7 - App de Películas con React
## Integrantes
- Campos Ramirez María Guadalupe
- Garcia Razo Valeria Naomi
- Neri Saldivar Carlos Emmanuel
- Rojas Vega Leopoldo Alejandro
  
## Descripción
Aplicación web desarrollada con React y Vite que consume una API de
películas y muestra un listado y el detalle de cada película.

## Objetivo
Desarrollar una aplicación web tipo SPA (Single Page Application) utilizando React, que consuma una API externa para mostrar información de películas, implementando navegación entre vistas y componentes reutilizables.

## Tecnologías
- React
- Vite
- React Router DOM
- CSS
- GitHub
- Netlify

## Estructura  general del proyecto

1-peliculas/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── index.html
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContextMovieCard.jsx
│   │   ├── ContextMovieCard.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── MovieCard.jsx
│   │   └── MovieCard.module.css
│   │
│   ├── data/
│   │
│   ├── Img/
│   │
│   ├── Pages/
│   │   ├── MovieDetails.jsx
│   │   └── MovieDetails.css
│   │
│   ├── routers/
│   │   └── routes.jsx
│   │
│   ├── Utils/
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── node_modules/
├── package.json
├── package-lock.json
├── yarn.lock
├── vite.config.js
└── eslint.config.js1-peliculas/
│
├── public/
├── src/
│   ├── components/
│   ├── Pages/
│   ├── routers/
│   ├── data/
│   ├── Utils/
│   ├── Img/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js

  
## Instalación
1-Clonar el repositorio:
git clone https://github.com/valeriagarcia4653/Practica-7-Aplicaci-n-web-de-pel-culas.git
2-Acceder al proyecto:
cd 1-peliculas
3-Instalar dependencias:
npm install
4-Ejecutar la aplicación:
npm run dev

## Rutas
Ruta:	/	
Descripción:  Muestra el listado de películas
Ruta: /movies/:movieId	
Descripción: Muestra el detalle de una película específica

## Funcionalidades
Consumo de API externa (TMDB)
Renderizado dinámico de películas
Navegación entre vistas sin recargar la página
Visualización de detalles de cada película
Uso de componentes reutilizables
Manejo de rutas dinámicas

## Despliegue
La aplicación se encuentra desplegada en Netlify:
https://practica-7-peliculas.netlify.app/

## API utilizada
Se utilizó la API de The Movie Database (TMDB) para obtener la información de las películas.

Endpoint principal:
https://api.themoviedb.org/3/discover/movie

## Capturas o descripción de funcionamiento
La aplicación permite:

Visualizar un listado de películas populares
Ver la imagen, título y detalles básicos
Hacer clic en una película para ver su información detallada
Navegar entre páginas sin recargar el sitio

## Link del repositorio

https://github.com/valeriagarcia4653/Practica-7-Aplicaci-n-web-de-pel-culas

## Conclusiones

Durante el desarrollo de esta práctica se reforzaron conocimientos sobre React, especialmente en la creación de componentes, manejo de rutas y consumo de APIs externas.

Además, se trabajó con control de versiones utilizando Git y GitHub, lo que permitió una colaboración efectiva en equipo.

Se identificó la importancia de mantener una estructura organizada del proyecto y de gestionar correctamente las dependencias.



