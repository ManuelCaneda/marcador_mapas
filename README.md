<div align="center">

![Electron](https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

# Marcar Mapa

Aplicación de escritorio para guardar y organizar lugares en un mapa por categorías.

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior

## Instalación

1. Clona el repositorio:
```bash
   git clone https://github.com/tu-usuario/marcar_mapa.git
   cd marcar_mapa
```

2. Instala las dependencias:
```bash
   npm install
```

## Uso

Arranca la aplicación en modo desarrollo:
```bash
npm start
```

## Generar instalador

Para generar el ejecutable distribuible:
```bash
npm run dist
```

El instalador se generará en la carpeta `dist/`.

## Tecnologías

- [Electron](https://www.electronjs.org/) - Para crear la aplicación de escritorio
- [Leaflet](https://leafletjs.com/) — mapas interactivos
- [Bootstrap 5](https://getbootstrap.com/) — estilos
- IndexedDB — almacenamiento local de datos

## Estructura del proyecto

```
marcar_mapa/
├── assets/          # Iconos de la aplicación
├── scripts/         # Lógica de la app (db.js, script.js)
├── styles/          # Estilos CSS
├── index.html       # Interfaz principal
├── main.js          # Proceso principal de Electron
└── package.json
```
