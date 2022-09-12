// Capa MVT
let mvt = new M.layer.MVT({
  url: 'https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=Bnfc4cWrRMT8V3mRgTLr',
  name: 'MVT Maptiler',
  projection: 'EPSG:3857',
  transparent: false
});

let mvt2 = new M.layer.MVT({
  url: 'https://ws205.juntadeandalucia.es/tileserver/data/mapa_andalucia/{z}/{x}/{y}.pbf',
  name: 'Andalucia MVT',
  projection: 'EPSG:3857',
  transparent: false
});


// mvt2.on(M.evt.LOAD, function() {
//   //console.log("MVT Cargada");
//   let olmvt = mvt.getImpl().getOLLayer();
//   // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
//   olms.applyStyle(olmvt, andalucia_color_style, 'mapa_andalucia')
// });


mvt.on(M.evt.LOAD, function() {
  //console.log("MVT Cargada");
  let olmvt = mvt.getImpl().getOLLayer();
  // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
  olms.applyStyle(olmvt, maptiler_style, 'openmaptiles')
    // .then(function() {
    //   console.log('ESTILO APLICADO');
    //   // Añado una capa GeoJSON y otra WMS
    //   mapajs.addWMS(new M.layer.WMS({
    //     url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridpob/wms?',
    //     name: 'gridpob_250',
    //     legend: 'Población total',
    //     transparent: true,
    //     tiled: true,
    //     styles: 'gridpob:stl_poblacion_total'
    //   }));
      /*mapajs.addWMS(new M.layer.WMS({
        url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/grid/wms?',
        name: 'gridp_250',
        legend: 'Seg social total',
        transparent: true,
        tiled: false,
        styles: 'grid:stl_grid_segsoc_total'
      }));*/
    // })
});


var mapajs = M.map({
  container: "map",
  projection: "EPSG:3857*d",
  controls: ['mouse', 'panzoombar'],
  layers: [mvt,mvt2],
  layerswitcher: 'emptylayer',
  center: [-522123, 4574935],
  zoom: 6,
 
});