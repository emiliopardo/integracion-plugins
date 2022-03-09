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

map.addControls(new M.control.GetFeatureInfo(
    'html', 
    {buffer: 10}));
   


// configuración plugin simpleBaseLayerSelector

const configSimpleBaseLayerSelector = { displayBaseLayersInLayerSwitcher: false }

// configuración plugin inputSelectAddLayer

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


// Configuracion MapFooter
const configFooterIECA = {
    open: true,
    htmlCode: '<div id="social"  title="Compartir"> <ul> <li class="no_imprimir"><a id="btnCompartir" href="#"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/compartir24g.png" border="0" alt="Compartir">&nbsp;<span>Compartir</span></a> <ul id="soc_compartir"> <li><a href="https://www.facebook.com/sharer.php?u='+window.location.href+'&amp;t=+Visualizador+IECA&amp;d=" title="Compartir en Facebook" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_facebook.png" border="0" alt="Compartir en Facebook">&nbsp;<span>Facebook</span></a></li><li><a href="https://twitter.com/home?status=Visualizador-'+ window.location.href+'%20v%C3%ADa%20@IECA_Andalucia" title="Compartir en Twitter" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_twitter.png" border="0" alt="Compartir en Twitter">&nbsp;<span>Twitter</span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url='+ window.location.href+'&amp;title=+Visualizador+IECA" title="Compartir en LinkedIn" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_linkedin.png" border="0" alt="Compartir en LinkedIn">&nbsp;<span>LinkedIn</span></a></li><li><a href="mailto:?subject=Compartiendo%20por%20correo%20electr%C3%B3nico&amp;body=%20Visualizador:%0D%0A'+ window.location.href+'" title="Compartir por correo electr&oacute;nico" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_mail.png" border="0" alt="Compartir por correo electr&oacute;nico">&nbsp;<span>e-mail</span></a></li></ul> </li></ul> </div><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/Logo_UE_FEDER.gif" class="feder" alt="Fondos"><div id="footer"> <div id="piea"> <div class="lineacolor fondocolor1">&nbsp;</div><div>&nbsp;</div><div> <div id="piea1"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/mapaWeb/index.htm" class="enlaces" accesskey="m">Mapa web</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm" class="enlaces" accesskey="l">Aviso legal</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/protecciondedatos/index.html" class="enlaces" accesskey="p">Protecci&oacute;n de datos</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/buzon_web/index.jsp" class="enlaces" accesskey="o">Tu opini&oacute;n</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/accesibilidad/index.htm" class="enlaces" accesskey="a">Accesibilidad</a> <img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/w3caa.jpg" alt="Logo de w3c" id="logow3caa"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm#cc" class="enlaceimg"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/cc-by.png" title="Publicado bajo Licencia Creative Commons - Reconocimiento 4.0" alt="CC-BY 4.0" id="logoccby"></a> </div><div id="piea2"> Pabell&oacute;n de Nueva Zelanda. <br>C/ Leonardo Da Vinci, n&deg; 21. Isla de La Cartuja. 41071-SEVILLA.<br>Tlf.: <strong>900 101 407/955 033 800</strong> | Fax: <strong>955 033 816</strong><br></div></div></div></div>',
    cssList: [
      'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
      'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
      'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
    ]
  }


// Configuracion MapHeader  
  const configHeaderIECA = {
    open: true,
    htmlCode: '<div id="cabecera"> <div id="cabecera_1"> <div id="logos"><a href="https://www.juntadeandalucia.es"><img alt="Junta de Andaluc&iacute;a" title="Junta de Andaluc&iacute;a" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoJuntaA.png"></a><a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/" accesskey="h"><img alt="Web del Instituto de Estad&iacute;stica y Cartograf&iacute;a de Andaluc&iacute;a" title="Web del Instituto de Estad&iacute;stica y Cartograf&iacute;a de Andaluc&iacute;a" src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/cabecera/LogoIECAA.png"></a> </div></div></div><div id="navigation"> <div class="lineacolor fondocolor1"> &nbsp;</div><div id="menu_horizontal"> <div id="menu_horizontal_1"> <div id="caminomigas"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/acciones/ico_aqui.png" alt="Ruta">Est&aacute; en: <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/">Inicio</a> - <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/temas/index-geo.htm">Georreferenciaci&oacute;n</a> - <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/index.htm">P&aacute;gina del producto</a> </div></div><div id="menu_horizontal_2"> <div id="botoneramenu"></div></div></div></div>',
    cssList: [
      'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
      'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
      'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
    ]
  }

const baseLayerSelector = new M.plugin.Simplebaselayerselector(configSimpleBaseLayerSelector);
const inputSelectAddLayer = new M.plugin.Inputselectaddlayer(configInventarioSedesEquipamientos);
const simpleLegend = new M.plugin.Simplelegend()
const mapheader = new M.plugin.Mapheader(configHeaderIECA);
const mapfooter = new M.plugin.Mapfooter(configFooterIECA);

map.addPlugin(baseLayerSelector);
map.addPlugin(inputSelectAddLayer);
map.addPlugin(simpleLegend);
map.addPlugin(mapfooter);
map.addPlugin(mapheader);

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

mapfooter.on(M.evt.ADDED_TO_MAP,()=>{
    console.log('se cargo el plugin Mapfooter')
})
