// definición Mapea
const map = M.map({
    container: 'map',
    layers: [ortofoto2016_color,
        ortofoto2016_pancromatica,
        ortofoto2016_infrarrojo,
        mdt_siose2013,
        mdt_2016,
        CDAU_Base,
        MapaAndalucia],
    maxExtent: [100401, 3987100, 621273, 4288700],
    projection: 'EPSG:25830*m',
});
// Se añaden controles
map.addControls(['ScaleLine', 'Mouse', 'panzoombar']);


// configuración plugin simpleLegend

const configSimpleLegend = {
    title: 'Leyenda',
    draggable: true,
    layers: []
}

// configuración plugin simpleBaseLayerSelector

const configSimpleBaseLayerSelector = { displayBaseLayersInLayerSwitcher: false }

// configuración plugin inputSelectAddLayer
const configTipologiasConstrucctivas = {
    title: 'Tipologías constructivas de catastro en malla estadística',
    label: 'Tipologías constructivas de catastro en malla estadística',
    group: false,
    data: {
      name: 'Tipologias Construcctivas',
      layers: [
        viviendas_colectivas,
        viviendas_unifamiliares,
        edificiacion_rural,
        garages_viviendas,
        otros_garajes,
        industrial,
        oficinas,
        comercio,
        deporte,
        piscinas,
        espectaculos,
        hosteleria_ocio,
        sanitarios_beneficos,
        culturales,
        religiosos,
        singulares,
        campo_golf
      ]
    }
  }


  const configDirectorioEmpresas = {
    title: 'Geolocalización de Establecimientos de 50 o más Asalariados. Directorio de Empresas y Establecimientos',
    label: 'Directorio de Empresas',
    group: false,
    data: {
      name: 'Directorio de Empresas',
      layers: [
        direst_comercio_2018,
        direst_construccion_2018,
        direst_energia_2018,
        direst_hosteleria_2018,
        direst_industria_2018,
        direst_servicios_2018,
        direst_transporte_2018
      ]
    }
  }


const configInventarioSedesEquipamientos = {
    title: 'Inventario de Sedes y Eqipamientos',
    label: 'ISE',
    group: true,
    data: [
        {
            name: 'Sedes Administrativas',
            layerGroups: [
                {
                    group: 'Sedes',
                    layers: [
                        registros,
                        buzones,
                        delegaciones,
                        archivos,
                        organizacionInstitucional,
                        consejerias,
                        organismos
                    ]
                }
            ]
        },
        {
            name: 'Equipamientos',
            layerGroups: [
                {
                    group: 'Centros y equipamientos',
                    layers: [
                        agricultura,
                        cultura,
                        empresa,
                        educacion,
                        empleo,
                        industria,
                        investigacion,
                        justicia,
                        medioAmbiente,
                        otros,
                        salud,
                        social,
                        tecnologia,
                        transporte,
                        turismo
                    ]
                }
            ]
        }
    ]
}



const baseLayerSelector = new M.plugin.Simplebaselayerselector(configSimpleBaseLayerSelector);
//const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configInventarioSedesEquipamientos);
const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configTipologiasConstrucctivas);
//const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configDirectorioEmpresas);
const simpleLegend = new M.plugin.Simplelegend(configSimpleLegend)

map.addPlugin(baseLayerSelector);
map.addPlugin(inputSelectAddLayer);
map.addPlugin(simpleLegend);

// Control carga Plugins
baseLayerSelector.on(M.evt.ADDED_TO_MAP, () => {
    console.log('se cargo el plugin Simplebaselayerselector');
})

inputSelectAddLayer.on(M.evt.ADDED_TO_MAP, () => {
    console.log('se cargo el plugin Inputselectaddlayer');
})

simpleLegend.on(M.evt.ADDED_TO_MAP, () => {
    console.log('se cargo el plugin Simplelegend');
})

inputSelectAddLayer.on(M.evt.LOAD,()=>{
    console.log('cargo nueva capa')
    console.log('genero leyenda')
    simpleLegend.updateLegend(inputSelectAddLayer.getLayer());
})
