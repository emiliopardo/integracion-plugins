
let base = new M.layer.WMS({
  url: 'https://www.ideandalucia.es/wms/mta400v_2008?',
  name: 'Redes_energeticas',
  legend: 'Redes',
  transparent: false,
  tiled: false
})

base.displayInLayerSwitcher = false;
base.setOpacity(0);


const map = M.map({
  container: 'map',
  projection: 'EPSG:3857*m',
  layers: [base],
  controls: ['panzoom', 'layerswitcher', 'mouse'],
});


// const config = 'http://localhost/tileserver/styles/mapa_andalucia_sepia_scale/style.json'
// const config = 'http://localhost/tileserver/styles/mapa_andalucia/style.json'
// const config = 'http://localhost/tileserver/styles/osm-liberty/style.json'
// const config = 'http://localhost/tileserver/styles/style-basic/style.json'
// const config = 'http://localhost/tileserver/styles/mapa_andalucia_gray_scale_fondo_negro/style.json'
// const config = 'http://localhost/tileserver/styles/style-dark-matter/style.json'
const config = 'https://api.maptiler.com/maps/openstreetmap/style.json?key=NxfrAN8VvDV2T3sw3L6z'

const mvtStyles = new M.plugin.Mvtstyles(config);

map.addPlugin(mvtStyles);


