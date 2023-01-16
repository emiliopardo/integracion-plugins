let omvt

let mvt = new M.layer.MVT({
  url: 'https://www.ign.es/web/resources/mapa-base-xyz/vt/{z}/{x}/{y}.pbf',
  name: 'Mapa Base SCN',
  projection: 'EPSG:3857',
});


mvt.on(M.evt.LOAD, function () {
  //console.log("MVT Cargada");
  olmvt = mvt.getImpl().getOLLayer();
  // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
  olms.applyStyle(olmvt, mapBase, 'VTS_MapaBaseRioja_SCN', 'fixtures/osm-liberty/')
    .then(function () {
      console.log('SE CARGA ESTILO INICIAL');
    })
});

// definición Mapea
const mapajs = M.map({
  container: "map",
  projection: "EPSG:3857*m",
  controls: ["layerswitcher", "mouse"],
  layers: [mvt]
});
// Se añaden controles
mapajs.addControls(['scaleline', 'mouse', 'OverviewMap', 'panzoombar']);
mapajs.setCenter({ x: -533282.139059025, y: 4406594.517487739 });
mapajs.setZoom(6);


