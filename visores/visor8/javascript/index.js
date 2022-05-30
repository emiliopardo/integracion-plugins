

const mapjs = M.map({
  container: 'map',
  projection: 'EPSG:3857*m',
  projection: 'EPSG:3857*m',
  center: {
    x: -575849.044,
    y: 4497865.157,
    draw: false
  },  
  zoom: 6,
  controls: ['layerswitcher'],
  layers: [new M.layer.OSM(),new M.layer.WMS({
    url: 'https://ideandalucia.es/wms/ortofoto2016?',
    name: 'ortofotografia_2016_rgb',
    legend: 'Ortofoto 2016',
    version: '1.1.1',
    transparent: false,
    tiled: true
  })],
});
// Capa MVT 1
let mapa_andalucia_color = new M.layer.MapboxStyle({
  url: 'https://ws205.juntadeandalucia.es/tileserver/data/mapa_andalucia/{z}/{x}/{y}.pbf',
  style: 'https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia/style.json',
  name: 'Mapa de Andalucia',
  sourceName: 'mapa_andalucia',
  projection: 'EPSG:3857',
});
// Capa MVT 2
let mapa_andalucia_fondo_negro = new M.layer.MapboxStyle({
  url: 'https://ws205.juntadeandalucia.es/tileserver/data/mapa_andalucia/{z}/{x}/{y}.pbf',
  style: 'https://factorylab02.ieca.junta-andalucia.es/tileserver/styles/mapa_andalucia_gray_scale_fondo_negro/style.json',
  name: 'Mapa de Andalucia fondo negro',
  sourceName: 'mapa_andalucia',
  projection: 'EPSG:3857',
});
// Capa MVT 3
let osm_andalucia_color = new M.layer.MapboxStyle({
  url: 'https://factorylab02.ieca.junta-andalucia.es/tileserver/data/mapa_andalucia_osm/{z}/{x}/{y}.pbf',
  style: 'https://factorylab02.ieca.junta-andalucia.es/tileserver/styles/style-osm-bright/style.json',
  name: 'Open Street Maps',
  sourceName: 'mapa_andalucia_osm',
  projection: 'EPSG:3857',
});

mapjs.addLayers([mapa_andalucia_color, osm_andalucia_color, mapa_andalucia_fondo_negro]);     
