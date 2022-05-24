

let mySelect = document.getElementById("select")
let myMap = document.getElementById("map")
let style = document.querySelector('#select');
let omvt

mySelect.addEventListener("change", () => {
  console.log("option seleccionado: " + style.value)
  olmvt = mvt.getImpl().getOLLayer();
  if (style.value == "color") {
    olms.applyStyle(olmvt, color, 'mapa_andalucia', 'fixtures/osm-liberty/').then(() => {
      console.log("se aplica estilo color")
      myMap.style.backgroundColor = "#FFFFFF"
      myMap.style.backgroundImage = "none"
    })
  } else if (style.value == "grises") {
    olms.applyStyle(olmvt, escala_grises, 'mapa_andalucia', 'fixtures/osm-liberty/').then(() => {
      console.log("se aplica estilo escala_grises")
      myMap.style.backgroundColor = "#000000"
      myMap.style.backgroundImage = "none"
    })
  } else if (style.value == "sepias") {
    olms.applyStyle(olmvt, escala_sepias, 'mapa_andalucia', 'fixtures/osm-liberty/').then(() => {
      console.log("se aplica estilo escala_sepias")
      myMap.style.backgroundColor = "#fffef0"
    })
  }
})


let mvt = new M.layer.MVT({
  url: 'https://ws205.juntadeandalucia.es/tileserver/data/mapa_andalucia/{z}/{x}/{y}.pbf',
  name: 'Mapa Base Andalucía',
  projection: 'EPSG:3857',
});

let geoJSON = new M.layer.GeoJSON({
  name: "Provincias",
  url: "https://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tematicos:Provincias&maxFeatures=50&outputFormat=application/json"
});

mvt.on(M.evt.LOAD, function () {
  //console.log("MVT Cargada");
  olmvt = mvt.getImpl().getOLLayer();
  // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
  olms.applyStyle(olmvt, color, 'mapa_andalucia', 'fixtures/osm-liberty/')
    .then(function () {
      console.log('SE CARGA ESTILO INICIAL');
      // Añado una capa GeoJSON y otra WMS
      // mapajs.addLayers(geoJSON);
      let capaWMS = new M.layer.WMS({
        url: 'https://www.ideandalucia.es/wms/mta400v_2008?',
        name: 'Redes_energeticas',
        legend: 'Redes',
        transparent: true,
        tiled: false
      })
      capaWMS.setOpacity(0.9)
      //	mapajs.addLayers(capaWMS)
      //	capaWMS.displayInLayerSwitcher= false;
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


