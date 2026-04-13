declare const L: typeof import('leaflet');

export { };

// ! ------ Variables del DOM ------
const $d: Document = document;
const $listaMarcas: HTMLElement | null = $d.querySelector(".lista-marcas");

type Categoria = {
    id: string;
    nombre: string;
    color: string;
};

let listaCategorias: Categoria[] = [
    { id: "", nombre: "Categoría 1", color: "#aa0000" },
    { id: "", nombre: "Categoría 2", color: "#00aa00" }
];

// Crear el mapa centrado en una coordenada [lat, lng] con zoom inicial
const map: L.Map = L.map('map').setView(
    [40.4166327886885, -3.698178732449527],
    10
);

// Agregar capa de tiles (fondo del mapa)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© manuel_zhurong'
}).addTo(map);

// ! ------ FUNCIONES ------

// ! ------ CATEGORÍAS ------
function pintarListaCategorias(listaCategorias: Categoria[]): void {

    if (!$listaMarcas) return;

    $listaMarcas.innerHTML = listaCategorias.reduce((anterior, actual) => {
        return anterior + `<div class="elemento-lista-categorias p-2 d-flex justify-content-between align-items-center"
    style="border: 1px solid #eee; border-left: 3.5px solid ${actual.color}; border-radius: 5px;">
        <p class="mb-0">${actual.nombre}</p>
        <div>
            <button class="btn btn-primary btn-editar-apodo">✏️</button>
            <button class="btn btn-primary btn-borrar-marca">🗑️</button>
        </div>
    </div>`;
    }, "");
}

// ! ------ EVENTOS ------
$d.addEventListener("DOMContentLoaded", () => {

    pintarListaCategorias(listaCategorias);

    map.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        console.log('Coordenadas:', [lat, lng]);
    });

});