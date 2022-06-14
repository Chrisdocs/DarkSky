import {
  LayerGroup,
  LayersControl,
  Marker,
  Tooltip,
  TileLayer,
  Popup,
} from "react-leaflet";
import { L, Icon } from 'leaflet';
import clearsm from '../../assets/images/clearsm.png';
import './styles.css';


const Map = ({ zoom, coords }) => {

  return (
    <div>

        <TileLayer url="tiles/{z}/{x}/{y}.png" noWrap={true} />
      
      <Marker position={[-101, 65]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href='https://inkarnate.com/m/P5mGOp--rockholm/' target='_blank'>Rockholm</a>
        </Popup>
      </Marker>

      <Marker position={[-126.5, 77.7]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/lZQwNJ--midgraad-the-kings-city/" target='_blank'>Midgraad</a>
        </Popup>
      </Marker>

      <Marker position={[-159.8, 162.2]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/KlbGLV--talorial/" target='_blank'>Ta'Lorial</a>

        </Popup>
      </Marker>

      <Marker position={[-197.5, 134.8]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/L5b166--drathguul/" target='_blank'>Drathguul</a>
        </Popup>
      </Marker>

      <Marker position={[-87, 170]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/w9e00o--normarc/" target='_blank'>Normarc</a>
        </Popup>
      </Marker>

      <Marker position={[-159.5, 37.5]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/VX6JW3--faas-desert-oasis/" target='_blank'>Faas</a>
        </Popup>
      </Marker>

      <Marker position={[-81.2, 41.5]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/pZ31lv--torethia-city-of-towers/" target="_blank">Torethia</a>
        </Popup>
      </Marker>

      <Marker position={[-73, 61]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/kO5NRQ--farshire/" target="_blank">Farshire</a>
        </Popup>
      </Marker>

      <Marker position={[-97.5, 35]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/X0Lq6q--hillside/" target="_blank">Hillside</a>
        </Popup>
      </Marker>

      <Marker position={[-108, 74.6]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/W2vyor--dulmuun/" target="_blank">Dulmuun</a>
        </Popup>
      </Marker>

      <Marker position={[-58, 81]} icon={new Icon({
            iconUrl: clearsm,
          
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [1, 1]
      })}>
        <Popup>
          <a href="https://inkarnate.com/m/El21X3--norhill/" target="_blank">Norhill</a>
        </Popup>
      </Marker>
    </div>

  );
};
export default Map;
