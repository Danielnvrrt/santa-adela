import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [37.23243, -3.62829];

// Icono personalizado para el marcador
const customIcon = new L.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export const Location = () => {
  return (
    <div
      id="location"
      className="flex flex-col h-auto lg:flex-row justify-center p-16 bg-white"
    >
      <div className="w-full lg:w-1/2">
        <MapContainer
          center={position}
          zoom={18}
          className="h-96 w-full rounded-xl shadow-lg"
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            minZoom={14}
            maxZoom={20}
            ext="png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Calle Santa Adela, Peligros, Granada</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="w-full lg:w-[30%] lg:pl-10 mt-6 lg:mt-0 lg:h-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">DONDE ESTAMOS</h2>
        <p className="text-gray-600 leading-relaxed">
          Los garajes de nueva construcción se encuentran en la{' '}
          <b>Calle Santa Adela 28</b>, en el municipio de <b>Peligros</b>, dentro
          de la provincia de <b>Granada</b>.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          La zona es tranquila, bien comunicada y cuenta con fácil acceso a la
          autovía, además de estar cerca de zonas comerciales y transporte
          público.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          ¡Ven a visitarnos y descubre todas las ventajas de nuestros garajes de
          obra nueva!
        </p>
        <button
          onClick={() =>
            window.open('https://maps.app.goo.gl/WT1Y2u7iHbmwRGix6', '_blank')
          }
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          Como llegar
        </button>
      </div>
    </div>
  );
};
