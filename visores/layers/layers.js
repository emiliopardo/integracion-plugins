// definición raster layers capas bases

const ortofoto2016_color = new M.layer.WMS({
    url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
    name: 'ortofotografia_2016_rgb',
    legend: 'Ortofotografía Color 0,5 metros/pixel (Año 2016)',
    transparent: false,
    tiled: true
}, {
    styles: 'default'
})

ortofoto2016_color.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_color.png')

const ortofoto2016_pancromatica = new M.layer.WMS({
    url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
    name: 'ortofotografia_2016_pancromatico',
    legend: 'Ortofotografía Pancromática 0,5 metros/pixel (Año 2016)',
    transparent: false,
    tiled: true
}, {
    styles: 'default'
})

ortofoto2016_pancromatica.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_pancromatico.png');

const ortofoto2016_infrarrojo = new M.layer.WMS({
    url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
    name: 'ortofotografia_2016_infrarrojo',
    legend: 'Ortofotografía Infrarrojo 0,5 metros/pixel (Año 2016)',
    transparent: false,
    tiled: true
}, {
    styles: 'default'
})

ortofoto2016_infrarrojo.setLegendURL('https://www.ideandalucia.es/visor/leyendas/ortofoto2016_infrarrojo.png');


const mdt_siose2013 = new M.layer.WMS({
    url: 'https://www.ideandalucia.es/wms/siose_2013?',
    name: 'sombreado_siose_2013',
    legend: 'Siose + MDT 2013',
    transparent: false,
    tiled: true
}, {
    styles: 'default'
})

mdt_siose2013.setLegendURL('https://www.ideandalucia.es/visor/leyendas/siose_2013.png');

const mdt_2016 = new M.layer.WMS({
    url: 'https://www.ideandalucia.es/wms/mdt_2016?',
    name: 'sombreado_orografico_2016,modelo_digital_terreno_2016_color',
    legend: 'MDT 2016',
    transparent: false,
    tiled: true
}, {
    styles: 'default'
})

mdt_2016.setLegendURL('https://www.ideandalucia.es/visor/leyendas/mdt_2016_tintas_hipsometricas.png');

const CDAU_Base = new M.layer.WMS({
    url: 'https://www.callejerodeandalucia.es/servicios/base/wms?',
    name: 'CDAU_base',
    legend: 'Base Cartográfica Callejero Digital de Andalucía',
    transparent: false,
    tiled: true
})

CDAU_Base.setLegendURL('https://www.ideandalucia.es/visor/leyendas/cdau_base.png');

const MapaAndalucia = new M.layer.WMS({
    url: 'https://www.ideandalucia.es/services/andalucia/wms?',
    name: '00_Mapa_Andalucia',
    legend: 'Mapa Topográfico de Andalucía',
    transparent: false,
    tiled: true
})

// definición vector layers capas de overlay
const direst_transporte_2020 = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    name: 'direst_transporte_2020',
    legend: 'Sector Transporte y almacenamiento',
    transparent: true,
    tiled: true
  }, {
    styles: 'direst_transporte'
  })
  
  
  const direst_servicios_2020 = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    name: 'direst_servicios_2020',
    legend: 'Sector Servicios sanitarios, educativos y resto de servicios',
    transparent: true,
    tiled: true
  }, {
    styles: 'direst_servicios'
  })
  
  const direst_industria_2020 = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    name: 'direst_industria_2020',
    legend: 'Sector Industria',
    transparent: true,
    tiled: true
  }, {
    styles: 'direst_industria'
  })
  
  const direst_hosteleria_2020 = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    name: 'direst_hosteleria_2020',
    legend: 'Sector Hostelería',
    transparent: true,
    tiled: true
  }, {
    styles: 'direst_hosteleria'
  })
  
  const direst_energia_2020 = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    name: 'direst_energia_2020',
    legend: 'Sector Energía, agua y resíduos',
    transparent: true,
    tiled: true
  }, {
    styles: 'direst_energia'
  })
  
  const direst_construccion_2020 = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    name: 'direst_construccion_2020',
    legend: 'Sector Construcción',
    transparent: true,
    tiled: true
  }, {
    styles: 'direst_construccion'
  })
  
  const direst_comercio_2020 = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    name: 'direst_comercio_2020',
    legend: 'Sector Comercio',
    transparent: true,
    tiled: true
  }, {
    styles: 'direst_comercio'
  })

const viviendas_colectivas = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Viviendas colectivas. Urbano',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c011_viviendas_colectivas'
  })

  viviendas_colectivas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c011_viviendas_colectivas')

  
  const viviendas_unifamiliares = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Viviendas unifamiliares. Urbano',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c012_viviendas_unifamiliares'
  })

  viviendas_unifamiliares.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c012_viviendas_unifamiliares')
  
  const edificiacion_rural = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Edificación rural',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c013_edificiacion_rural'
  })

  edificiacion_rural.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c013_edificiacion_rural')
  
  const garages_viviendas = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Garajes viviendas',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c01G_garages_viviendas'
  })
  
  garages_viviendas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c01G_garages_viviendas')

  const otros_garajes = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Otros garajes y aparcamientos',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c022_otros_garajes'
  })
  
  otros_garajes.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c022_otros_garajes')

  const industrial = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Industrial',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c02_industrial'
  })

  industrial.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c02_industrial')
  
  const oficinas = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Oficinas',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c03_oficinas'
  })

  oficinas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c03_oficinas')
  
  const comercio = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Comercio',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c04_comercio'
  })

  comercio.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c04_comercio')
  
  const deporte = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Deportes',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c05_Deportes'
  })

  deporte.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c05_Deportes')
  
  const piscinas = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Piscinas',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c05P_piscinas'
  })

  piscinas.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c05P_piscinas')
  
  const espectaculos = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Espectáculos',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c06_espectaculos'
  })

  espectaculos.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c06_espectaculos')
  
  const hosteleria_ocio = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Hostelería y Ocio',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c07_hosteleria_ocio'
  })

  hosteleria_ocio.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c07_hosteleria_ocio')
  
  const sanitarios_beneficos = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Sanitarios, asistenciales y benéficos',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c08_sanitarios_beneficos'
  })

  sanitarios_beneficos.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c08_sanitarios_beneficos')
  
  const culturales = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Culturales',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c09_culturales'
  })

  culturales.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c09_culturales')
  
  const religiosos = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Religiosos',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c093_religioso'
  })

  religiosos.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c093_religioso')
  
  const singulares = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Singulares',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c10_singulares'
  })

  singulares.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c10_singulares')
  
  const campo_golf = new M.layer.WMS({
    url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    name: 'gridcattp_250',
    legend: 'Campos de Golf',
    transparent: true,
    tiled: true
  }, {
    styles: 'stl_c1034_golf'
  })

  campo_golf.setLegendURL('http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetLegendGraphic&LAYER=gridcattp_250&FORMAT=image%2Fpng&EXCEPTIONS=image%2Fpng&style=stl_c1034_golf')


    //Parámetros Opcionales Cluster
    const vendorParameters = {
    distanceSelectFeatures: 25,
    convexHullStyle: {
        fill: {
            color: '#0000FF',
            opacity: 1
        },
        stroke: {
            color: '#0000FF',
            width: 1
        }
    }
}


//Capa ise:Nuevas_Tecnologias

const tecnologia = new M.layer.WFS({
    name: "nuevas_tecnologias",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Nuevas tecnologías",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
        }
    }
});

//Asignación de Iconos

const tecnologiaRedAndaluzaDePosicionamiento = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Tecnologia/rap.png'
    }
});

const tecnologiaGuadalinfo = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Tecnologia/guadalinfo.png'
    }
});


//Simbología categorizada

const categoriaTecnologia = new M.style.Category("Nivel2", {

    "Red andaluza de posicionamiento": tecnologiaRedAndaluzaDePosicionamiento,
    "Centros Guadalinfo": tecnologiaGuadalinfo
});

//Simbología Cluster
const clusterOptionsTecnologia = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#37abc8',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

//Creación del estilo Cluster
const clusterStyconstecnologia = new M.style.Cluster(clusterOptionsTecnologia, vendorParameters);

//Creación del estilo composite
const compositeTecnologia = categoriaTecnologia.add(clusterStyconstecnologia);

//asignación del estilo final
tecnologia.setStyle(compositeTecnologia);



//Capa ise:Agricultura

const agricultura = new M.layer.WFS({
    name: "agricultura_ganaderia_pesca",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Agricultura, ganadería y pesca",
    geometry: 'MPOINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Tipo,Dependencia,Nivel1,Nivel2,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});

//Asignación de Iconos

const agriculturaOCA = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Agricultura/oca.png'
    }
});

const agriculturaAgroclimatica = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Agricultura/agroclimatica.png'
    }
});
const agriculturaGrupodr = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Agricultura/9_61_gdr.png'
    }
});

//Simbología categorizada

const categoriaAgricultura = new M.style.Category("Nivel2", {
    "Oficinas comarcales y locales agrarias": agriculturaOCA,
    "Información agroclimática": agriculturaAgroclimatica,
    "Grupos de Desarrollo Rural": agriculturaGrupodr
});

//Simbología Cluster
const clusterOptionsAgricultura = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: 'f28d4e',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

//Creación del estilo Cluster
const clusterStyleAgricultura = new M.style.Cluster(clusterOptionsAgricultura, vendorParameters);

//Creación del estilo composite
const compositeAgricultura = categoriaAgricultura.add(clusterStyleAgricultura);

//asignación del estilo final
agricultura.setStyle(compositeAgricultura);


//Capa ise:Cultura

const cultura = new M.layer.WFS({
    name: "cultura",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Cultura",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Tipo,Dependencia,Nivel1,Nivel2,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
        }
    }
});




//Asignación de Iconos

const culturaArtesEscenicas = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/artes.png'
    }
});

const culturaconstras = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/constras.png'
    }
});

const culturaOtrosCentros = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/otros_centros.png'
    }
});

const culturaPatrimonio = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/patrimonio_c.png'
    }
});

//Simbología categorizada

const categoriaCultura = new M.style.Category("Nivel2", {
    "Artes escénicas": culturaArtesEscenicas,
    "constras, bibliotecas y archivos": culturaconstras,
    "Otros centros": culturaOtrosCentros,
    "Patrimonio": culturaPatrimonio
});

//Simbología Cluster
const clusterOptionsCultura = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#1b325f',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

//Creación del estilo Cluster
const clusterStyleCultura = new M.style.Cluster(clusterOptionsCultura, vendorParameters);

//Creación del estilo composite
const compositeCultura = categoriaCultura.add(clusterStyleCultura);

//asignación del estilo final
cultura.setStyle(compositeCultura);


//Capa ise:EmpresasYprofesionales

const empresa = new M.layer.WFS({
    name: "empresas_profesionales",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Empresas y profesionales",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Dependencia,Nivel1,Nivel2,Tipo,Nombre,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
        }
    }
});

//Asignación de Iconos

const empresaEmprendimiento = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Empresa/emprendedores.png'

    }
});

//Simbología categorizada

const categoriaEmpresa = new M.style.Category("Nivel2", {

    "Emprendimiento": empresaEmprendimiento
});

//Simbología Cluster
const clusterOptionsEmpresa = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#9e3f99',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

//Creación del estilo Cluster
const clusterStyleEmpresa = new M.style.Cluster(clusterOptionsEmpresa, vendorParameters);

//Creación del estilo composite
const compositeEmpresa = categoriaEmpresa.add(clusterStyleEmpresa);

//asignación del estilo final
empresa.setStyle(compositeEmpresa);


//Capa ise:Educar 

const educacion = new M.layer.WFS({
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    name: "estudiar",
    legend: "Estudiar",
    geometry: 'POINT',
    extract: true,

}
    , {
        vendor: {
            getFeature: {
                'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
            }
        }
    }
);

const estiloEducacion = new M.style.Point({
    radius: 4,
    fill: {
        color: '#B84949',
        opacity: 1
    },
    stroke: {
        color: '#FFFFFF'
    }
});

const educacionCentrosEspecificos = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/centros_especificos.png'
    }
});

const educacionInfantil = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/educacion.png'
    }
});

const educacionDistancia = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/e_distancia.png'
    }
});

const educacionArtisticas = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/e_artisticas.png'
    }
});

const educacionIdiomas = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/escuela_oficial.png'
    }
});

const educacionPermanente = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/educacion_permanente.png'
    }
});

const educacionFP = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/formacion.png'
    }
});

const educacionUniversidades = new M.style.Point({
    icon: {
        src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/universidades.png'
    }
});

//Simbología categorizada

const categoriaEducacion = new M.style.Category("Nivel2", {
    "Centros específicos de educación especial": educacionCentrosEspecificos,
    "Educación infantil, primaria y/o secundaria": educacionInfantil,
    "EnseÃ±anza a distancia": educacionDistancia,
    "EnseÃ±anzas artísticas, deportivas": educacionArtisticas,
    "Escuela oficial de idiomas": educacionIdiomas,
    "Formación profesional": educacionFP,
    "Secciones y centros de educación permanente": educacionPermanente,
    "Universidades y facultades": educacionUniversidades
});

const clusterOptionsEducacion = {
    ranges: [{
        min: 2,
        max: 999,
        style: new M.style.Point({
            fill: {
                color: '#B84949',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 30,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleEducacion = new M.style.Cluster(clusterOptionsEducacion, vendorParameters);

const compositeEducacion = categoriaEducacion.add(clusterStyleEducacion);

educacion.setStyle(compositeEducacion);

const empleo = new M.layer.WFS({
    name: "empleo",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Empleo",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});

const estiloEmpleo = new M.style.Point({
    radius: 4,
    fill: {
        color: '#d06d81',
        opacity: 1
    },
    stroke: {
        color: '#FFFFFF'
    }
});

//Asignación de Iconos

const empleoRelacionesLaborales = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Empleo/relaciones.png'
    }
});


//Simbología categorizada

const categoriaEmpleo = new M.style.Category("Nivel2", {
    "Relaciones laborales": empleoRelacionesLaborales
});



const clusterOptionsEmpleo = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#d06d81',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleEmpleo = new M.style.Cluster(clusterOptionsEmpleo, vendorParameters);

const compositeEmpleo = categoriaEmpleo.add(clusterStyleEmpleo);

empleo.setStyle(compositeEmpleo);


const industria = new M.layer.WFS({
    name: "industria_minas",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Industria y minas",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
        }
    }
});

const estiloIndustria = new M.style.Point({
    radius: 4,
    fill: {
        color: '#0468ea',
        opacity: 1
    },
    stroke: {
        color: '#FFFFFF'
    }
});

//Asignación de Iconos

const industriaITV = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Industria/itv.png'
    }
});


//Simbología categorizada

const categoriaIndustria = new M.style.Category("Nivel2", {
    "ITV": industriaITV
});



const clusterOptionsIndustria = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#0468ea',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleIndustria = new M.style.Cluster(clusterOptionsIndustria, vendorParameters);

const compositeIndustria = categoriaIndustria.add(clusterStyleIndustria);

industria.setStyle(compositeIndustria);


//Capa ise:Investigación e Innovacion

const investigacion = new M.layer.WFS({
    name: "investigacion",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Investigación e innovación",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});


//Asignación de Iconos

const investigacionInvestigacion = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/investigacion.png'
    }
});

const investigacionLaboratorio = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/laboratorio.png'
    }
});

const investigacionInnovacion = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/innovacion.png'
    }
});

const investigacionConservacion = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/conservacion.png'
    }
});


//Simbología categorizada

const categoriaInvestigacion = new M.style.Category("Nivel2", {
    "Conservación e investigación medio ambiental": investigacionConservacion,
    "Investigación y desarrollo": investigacionInvestigacion,
    "Innovación": investigacionInnovacion,
    "Laboratorios y control de calidad": investigacionLaboratorio
});

//Simbología Cluster
const clusterOptionsInvestigacion = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#ff91f2',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

//Creación del estilo Cluster
const clusterStyleInvestigacion = new M.style.Cluster(clusterOptionsInvestigacion, vendorParameters);

//Creación del estilo composite
const compositeInvestigacion = categoriaInvestigacion.add(clusterStyleInvestigacion);

//asignación del estilo final
investigacion.setStyle(compositeInvestigacion);

const justicia = new M.layer.WFS({
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    name: "justicia_seguridad_emergencias",
    legend: "Justicia, seguridad y emergencias",
    cql: "Dependencia<>'Ayuntamiento' AND Dependencia<>'Ministerio del Interior' AND Tipo<>'Bomberos'",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});


const estiloJusticia = new M.style.Point({
    radius: 4,
    fill: {
        color: '#d6b25e',
        opacity: 1
    },
    stroke: {
        color: '#FFFFFF'
    }
});

//Asignación de Iconos
const justiciaIncendios = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Justicia/control.png'
    }
});

const justiciaJuzgadosTribunales = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Justicia/juzgados.png'
    }
});

const justiciaOrdenPublicoEmergencias = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Justicia/orden_publico.png'
    }
});

//Simbología categorizada

const categoriaJusticia = new M.style.Category("Nivel2", {
    "Control y vigilancia de incendios": justiciaIncendios,
    "Juzgados y tribunales": justiciaJuzgadosTribunales,
    "Orden público y emergencias": justiciaOrdenPublicoEmergencias
});

const clusterOptionsJusticia = {
    ranges: [{
        min: 2,
        max: 500,
        style: new M.style.Point({
            fill: {
                color: '#d6b25e',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 50,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleJusticia = new M.style.Cluster(clusterOptionsJusticia, vendorParameters);

const compositeJusticia = categoriaJusticia.add(clusterStyleJusticia);

justicia.setStyle(compositeJusticia);


const medioAmbiente = new M.layer.WFS({
    name: "medio_ambiente",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Medio ambiente",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
        }
    }
});

//Asignación de Iconos


const medioAmbienteEducacionAmbientalCentrosInterpretacion = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/educacion.png'
    }
});

const medioAmbienteMedioMarino = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/medio_marino.png'
    }
});

const medioAmbienteRutasSenderos = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/rutas.png'
    }
});
const medioAmbienteGestionResiduos = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/7_59_residuos.png'
    }
});

//Simbología categorizada

const categoriaMedioAmbiente = new M.style.Category("Nivel2", {
    "Educación ambiental y centro de interpretación": medioAmbienteEducacionAmbientalCentrosInterpretacion,
    "Medio marino": medioAmbienteMedioMarino,
    "Rutas y senderos": medioAmbienteRutasSenderos,
    "Gestión de residuos": medioAmbienteGestionResiduos
});



const clusterOptionsMedioAmbiente = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#3f9e7b',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleMedioAmbiente = new M.style.Cluster(clusterOptionsMedioAmbiente, vendorParameters);

const compositeMedioAmbiente = categoriaMedioAmbiente.add(clusterStyleMedioAmbiente);

medioAmbiente.setStyle(compositeMedioAmbiente);

const otros = new M.layer.WFS({
    name: "otros",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Otros",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
        }
    }
});

const estiloOtros = new M.style.Point({
    radius: 4,
    fill: {
        color: '#612408',
        opacity: 1
    },
    stroke: {
        color: '#FFFFFF'
    }
});

//Asignación de Iconos

const otrosInstalaciones = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Otros/instalaciones.png'
    }
});

const otrosOficinas = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Otros/oficinas.png'
    }
});

//Simbología categorizada

const categoriaOtros = new M.style.Category("Nivel2", {
    "Instalaciones auxiliares": otrosInstalaciones,
    "Oficinas ": otrosOficinas
});


const clusterOptionsOtros = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#612408',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleOtros = new M.style.Cluster(clusterOptionsOtros, vendorParameters);

const compositeOtros = categoriaOtros.add(clusterStyleOtros);

otros.setStyle(compositeOtros);

const salud = new M.layer.WFS({
    name: "salud",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Salud",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});

const estiloSalud = new M.style.Point({
    radius: 4,
    fill: {
        color: '#0b5404',
        opacity: 1
    },
    stroke: {
        color: '#FFFFFF'
    }
});

//Asignación de Iconos

const saludCentrosAntencionPrimaria = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/centros_primaria.png'
    }
});

const saludCentrosPerifericosEspecialidades = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/centros_especialidad.png'
    }
});
const saludDistritosSanitarios = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/distritos.png'
    }
});

const saludHospitales = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/hospital.png'
    }
});
const saludPrevencionRiesgos = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/prevencion.png'
    }
});

//Simbología categorizada

const categoriaSalud = new M.style.Category("Nivel2", {
    "Centros de atención primaria": saludCentrosAntencionPrimaria,
    "Centros periféricos de especialidades": saludCentrosPerifericosEspecialidades,
    "Distritos sanitarios": saludDistritosSanitarios,
    "Hospitales": saludHospitales,
    "Seguridad y salud": saludPrevencionRiesgos
});

const clusterOptionsSalud = {
    ranges: [{
        min: 2,
        max: 200,
        style: new M.style.Point({
            fill: {
                color: '#0b5404',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 50,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleSalud = new M.style.Cluster(clusterOptionsSalud, vendorParameters);

const compositeSalud = categoriaSalud.add(clusterStyleSalud);

salud.setStyle(compositeSalud);

const social = new M.layer.WFS({
    name: "servicios_sociales",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Servicios sociales",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Tipo,Dependencia,Nivel1,Nivel2,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});

//Asignación de Iconos

const servSocialDiscapacidad = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/discapacidad.png'
    }
});

const servSocialAdicciones = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/drogodependencia.png'
    }
});

const servSocialPoblacion = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/poblacion.png'
    }
});

const servSocialMayores = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/mayores.png'
    }
});

const servSocialExclusion = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/exclusion.png'
    }
});

const servSocialSaludMental = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/saludmental.png'
    }
});

const servSocialMujeres = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/mujeres.png'
    }
});
const servSociaconstniaGitana = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/etniagitana.png'
    }
});

//Simbología categorizada

const categoriaSocial = new M.style.Category("Nivel2", {
    "Personas con discapacidad": servSocialDiscapacidad,
    "Personas con adicciones": servSocialAdicciones,
    "Población general": servSocialPoblacion,
    "Personas mayores": servSocialMayores,
    "Personas en situación o riesgo de exclusión social": servSocialExclusion,
    "Personas con enfermedad mental": servSocialSaludMental,
    "Mujeres": servSocialMujeres,
    "Personas De Etnia Gitana": servSociaconstniaGitana
});


const clusterOptionsSocial = {
    ranges: [{
        min: 2,
        max: 999,
        style: new M.style.Point({
            fill: {
                color: '#ac9393',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleSocial = new M.style.Cluster(clusterOptionsSocial, vendorParameters);

const compositeSocial = categoriaSocial.add(clusterStyleSocial);

social.setStyle(compositeSocial);


// ISE Transporte

const transporte = new M.layer.WFS({
    name: "trafico_transporte",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Tráfico y transporte",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});


//Asignación de Iconos

const transporteConservacionExplotacionCarreteras = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Transporte/conservacion.png'
    }
});

const transportePuertoRedLogisticaAeropuertos = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Transporte/puertos.png'
    }
});

//Simbología categorizada

const categoriaTransporte = new M.style.Category("Nivel2", {
    "Conservación y explotación de carreteras": transporteConservacionExplotacionCarreteras,
    "Puertos, red logística y aeropuertos": transportePuertoRedLogisticaAeropuertos
});


const clusterOptionsTransporte = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#e8a032',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyconstransporte = new M.style.Cluster(clusterOptionsTransporte, vendorParameters);

const compositeTransporte = categoriaTransporte.add(clusterStyconstransporte);

transporte.setStyle(compositeTransporte);

const turismo = new M.layer.WFS({
    name: "turismo_ocio",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Turismo y ocio",
    geometry: 'POINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'	
        }
    }
});


//Asignación de Iconos

const turismoActividadesRecreativasAlojamientos = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/actividades.png'
    }
});

const turismoEducacionPromocion = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/educacion1.png'
    }
});
const turismoResidencias = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/residencias.png'
    }
});

const turismoMenores = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/albergue.png'
    }
});

//Simbología categorizada

const categoriaTurismo = new M.style.Category("Nivel2", {
    "Actividades recreativas y alojamientos": turismoActividadesRecreativasAlojamientos,
    "Educación y promoción": turismoEducacionPromocion,
    "Residencias de tiempo libre": turismoResidencias,
    "Menores y juventud": turismoMenores
});

const clusterOptionsTurismo = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#f1396d',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyconsturismo = new M.style.Cluster(clusterOptionsTurismo, vendorParameters);

const compositeTurismo = categoriaTurismo.add(clusterStyconsturismo);

turismo.setStyle(compositeTurismo);

//registros

const registros = new M.layer.WFS({
    name: "registros",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    geometry: 'MPOINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Horario,Direccion,Foto,geom'	
        }
    }
});

const estiloRegistros = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo8.svg'
    }
});

const clusterOptionsRegistros = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#638c27',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleRegistros = new M.style.Cluster(clusterOptionsRegistros, vendorParameters);

registros.setStyle(estiloRegistros);
registros.setStyle(clusterStyleRegistros);




// delegaciones 
const delegaciones = new M.layer.WFS({
    name: "delegaciones",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    geometry: 'MPOINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Sede,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
        }
    }
});

const estiloDelegaciones = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo4.svg'
    }
});

const clusterOptionsDelegaciones = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#9ed898',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleDelegaciones = new M.style.Cluster(clusterOptionsDelegaciones, vendorParameters);

delegaciones.setStyle(estiloDelegaciones);
delegaciones.setStyle(clusterStyleDelegaciones);


//ArchivosCentrales 
const archivos = new M.layer.WFS({
    name: "archivos_centrales",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    geometry: 'MPOINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Horario,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
        }
    }
});

const estiloArchivos = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo7.svg'
    }
});

const clusterOptionsArchivos = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#95cd43',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleArchivos = new M.style.Cluster(clusterOptionsArchivos, vendorParameters);

archivos.setStyle(estiloArchivos);
archivos.setStyle(clusterStyleArchivos);

//Organizacion Institucional
const organizacionInstitucional = new M.layer.WFS({
    name: "organizaciones_institucionales",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    geometry: 'MPOINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
        }
    }
});



//AsignaciÃ³n de Iconos

const camaraCuentas = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo9.svg'
    }
});

const consejoAudioVisual = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo10.svg'
    }
});
const consejoConsultivo = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo13.svg'
    }
});

const consejoTransparecia = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo14.svg'
    }
});

const consejoEconomico = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo11.svg'
    }
});

const defensorPueblo = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo12.svg'
    }
});

const parlamentoAndalucia = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo5.svg'
    }
});

//Simbología categorizada

const categoriaOrganizacionInstitucional = new M.style.Category("Nombre", {
    "Cámara de Cuentas de Andalucía": camaraCuentas,
    "Consejo Audiovisual de Andalucía": consejoAudioVisual,
    "Consejo Consultivo de Andalucía": consejoConsultivo,
    "Consejo de Transparencia y Protección de Datos de Andalucía": consejoTransparecia,
    "Consejo Ecnómico y Social de Andalucía": consejoEconomico,
    "Defensor del Pueblo Andaluz": defensorPueblo,
    "Parlamento de Andalucía": parlamentoAndalucia
});



const clusterOptionsOrganizacionInstitucional = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#3e4730',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleOrganizacionInstitucional = new M.style.Cluster(clusterOptionsOrganizacionInstitucional, vendorParameters);

const compositeOrganizacionInstitucional = categoriaOrganizacionInstitucional.add(clusterStyleOrganizacionInstitucional);

organizacionInstitucional.setStyle(compositeOrganizacionInstitucional);

//consejerías
const consejerias = new M.layer.WFS({
    name: "consejerias",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    geometry: 'MPOINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Sede,Direccion,Telefono,Fax,Correo_electronico,web,Foto,Procedimientos_Servicios,Temas,geom'
        }
    }
});

const estiloConsejerias = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo1.svg'
    }
});


const clusterOptionsConsejerias = {
    ranges: [{
        min: 2,
        max: 100,
        style: new M.style.Point({
            fill: {
                color: '#1d8641',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleConsejerias = new M.style.Cluster(clusterOptionsConsejerias, vendorParameters);

consejerias.setStyle(estiloConsejerias);
consejerias.setStyle(clusterStyleConsejerias);


//organismos

const organismos = new M.layer.WFS({
    name: "organismos",
    url: "https://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    geometry: 'MPOINT',
    extract: true
}, {
    vendor: {
        getFeature: {
            'propertyName': 'Nombre,Sede,Tipo,Sigla,Consejeria,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
        }
    }
});

const estiloOrganismos = new M.style.Point({
    icon: {
        src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo2.svg'
    }
});

const clusterOptionsOrganismos = {
    ranges: [{
        min: 2,
        max: 500,
        style: new M.style.Point({
            fill: {
                color: '#456319',
                opacity: 1
            },
            stroke: {
                color: '#FFFFFF'
            },
            radius: 12
        })
    }
    ],
    animated: true,
    hoverInteraction: false,
    displayAmount: true,
    selectedInteraction: true,
    maxFeaturesToSelect: 2,
    distance: 100,
    label: {
        font: 'bold 12px Comic Sans MS',
        color: '#FFFFFF'
    }
};

const clusterStyleOrganismos = new M.style.Cluster(clusterOptionsOrganismos, vendorParameters);

organismos.setStyle(estiloOrganismos);
organismos.setStyle(clusterStyleOrganismos);