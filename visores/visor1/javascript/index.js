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


const configIECA = {
  open: true,
  htmlCode: '<div id="social"  title="Compartir"> <ul> <li class="no_imprimir"><a id="btnCompartir" href="#"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/compartir24g.png" border="0" alt="Compartir">&nbsp;<span>Compartir</span></a> <ul id="soc_compartir"> <li><a href="https://www.facebook.com/sharer.php?u='+window.location.href+'&amp;t=+Visualizador+IECA&amp;d=" title="Compartir en Facebook" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_facebook.png" border="0" alt="Compartir en Facebook">&nbsp;<span>Facebook</span></a></li><li><a href="https://twitter.com/home?status=Visualizador-'+ window.location.href+'%20v%C3%ADa%20@IECA_Andalucia" title="Compartir en Twitter" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_twitter.png" border="0" alt="Compartir en Twitter">&nbsp;<span>Twitter</span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url='+ window.location.href+'&amp;title=+Visualizador+IECA" title="Compartir en LinkedIn" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_linkedin.png" border="0" alt="Compartir en LinkedIn">&nbsp;<span>LinkedIn</span></a></li><li><a href="mailto:?subject=Compartiendo%20por%20correo%20electr%C3%B3nico&amp;body=%20Visualizador:%0D%0A'+ window.location.href+'" title="Compartir por correo electr&oacute;nico" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_mail.png" border="0" alt="Compartir por correo electr&oacute;nico">&nbsp;<span>e-mail</span></a></li></ul> </li></ul> </div><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/Logo_UE_FEDER.gif" class="feder" alt="Fondos"><div id="footer"> <div id="piea"> <div class="lineacolor fondocolor1">&nbsp;</div><div>&nbsp;</div><div> <div id="piea1"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/mapaWeb/index.htm" class="enlaces" accesskey="m">Mapa web</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm" class="enlaces" accesskey="l">Aviso legal</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/protecciondedatos/index.html" class="enlaces" accesskey="p">Protecci&oacute;n de datos</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/buzon_web/index.jsp" class="enlaces" accesskey="o">Tu opini&oacute;n</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/accesibilidad/index.htm" class="enlaces" accesskey="a">Accesibilidad</a> <img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/w3caa.jpg" alt="Logo de w3c" id="logow3caa"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm#cc" class="enlaceimg"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/cc-by.png" title="Publicado bajo Licencia Creative Commons - Reconocimiento 4.0" alt="CC-BY 4.0" id="logoccby"></a> </div><div id="piea2"> Pabell&oacute;n de Nueva Zelanda. <br>C/ Leonardo Da Vinci, n&deg; 21. Isla de La Cartuja. 41071-SEVILLA.<br>Tlf.: <strong>900 101 407/955 033 800</strong> | Fax: <strong>955 033 816</strong><br></div></div></div></div>',
  cssList: [
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
  ]
}

   
const baseLayerSelector = new M.plugin.Simplebaselayerselector(configSimpleBaseLayerSelector);
//const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configInventarioSedesEquipamientos);
//const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configTipologiasConstrucctivas);
const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configDirectorioEmpresas);
const simpleLegend = new M.plugin.Simplelegend(configSimpleLegend)
const mapfooter = new M.plugin.Mapfooter(configIECA);

map.addPlugin(baseLayerSelector);
map.addPlugin(inputSelectAddLayer);
map.addPlugin(simpleLegend);
map.addPlugin(mapfooter);

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
})
