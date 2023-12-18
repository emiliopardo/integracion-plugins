
M.config.ZOOM_LEVELS = 18

let mvt_mapa_andalucia = new M.layer.MVT({
  url: 'https://ws205.juntadeandalucia.es/tileserver/data/mapa_andalucia/{z}/{x}/{y}.pbf',
  name: 'Mapa Base Andalucía',
  projection: 'EPSG:3857',
  transparent: false,
});

let mvt_planet_osm = new M.layer.MVT({
  url: 'https://ws205.juntadeandalucia.es/tileserver/data/planet_osm/{z}/{x}/{y}.pbf',
  name: 'OpenStreetMaps',
  projection: 'EPSG:3857',
  transparent: false,
});

// mvt_mapa_andalucia.setVisible(true);
// mvt_planet_osm.setVisible(false);

mvt_mapa_andalucia.on(M.evt.LAYER_VISIBILITY_CHANGE, function () {
  console.log("mvt_mapa_andalucia cambia visibilidad");
  console.log(mvt_mapa_andalucia.isVisible())
  // let olmvt = mvt.getImpl().getOLLayer();
  // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
  // olms.applyStyle(olmvt, color, 'mapa_andalucia', 'fixtures/osm-liberty/')
  //   .then(function () {
  //     console.log('SE CARGA ESTILO INICIAL');
  //   })
});

mvt_planet_osm.on(M.evt.LAYER_VISIBILITY_CHANGE, function () {
  console.log("mvt_planet_osm cambia visibilidad");
  console.log(mvt_planet_osm.isVisible())
  // let olmvt = mvt.getImpl().getOLLayer();
  // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
  // olms.applyStyle(olmvt, color, 'mapa_andalucia', 'fixtures/osm-liberty/')
  //   .then(function () {
  //     console.log('SE CARGA ESTILO INICIAL');
  //   })
});

// mvt.on(M.evt.LOAD, function () {
//   //console.log("MVT Cargada");
//   let olmvt = mvt.getImpl().getOLLayer();
//   // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
//   olms.applyStyle(olmvt, color, 'mapa_andalucia', 'fixtures/osm-liberty/')
//     .then(function () {
//       console.log('SE CARGA ESTILO INICIAL');
//     })
// });

// definición Mapea
const mapajs = M.map({
  container: "map",
  projection: "EPSG:3857*m",
  controls: ["layerswitcher", "mouse"],
  layers: [mvt_mapa_andalucia, mvt_planet_osm]
});
// Se añaden controles
mapajs.addControls(['scaleline', 'mouse', 'panzoombar']);
mapajs.setCenter({ x: -533282.139059025, y: 4406594.517487739 });
mapajs.setZoom(6);


