escala_grises = {
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgba(0, 0, 0, 1)"
            }
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Puerto",
            "maxzoom": 17,
            "type": "fill",
            "id": "Puerto"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "MAR"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MasasAgua",
            "maxzoom": 17,
            "type": "fill",
            "id": "MasasAgua - Mar"
        },
        {
            "paint": {
                "line-color": "rgba(122, 122, 122, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Categoria",
                    "NOR"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CurvaNivel",
            "maxzoom": 17,
            "type": "line",
            "id": "CurvaNivel - Normal"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(122, 122, 122, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Categoria",
                    "MAE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CurvaNivel",
            "maxzoom": 17,
            "type": "line",
            "id": "CurvaNivel - Maestra"
        },
        {
            "paint": {
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "RecintoIndustrial",
            "maxzoom": 17,
            "type": "fill",
            "id": "RecintoIndustrial - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "RecintoIndustrial",
            "maxzoom": 17,
            "type": "line",
            "id": "RecintoIndustrial - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all"
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "NucleoUrbano",
            "maxzoom": 17,
            "type": "line",
            "id": "NucleoUrbano"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all"
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "ParqueAtracciones",
            "maxzoom": 17,
            "type": "line",
            "id": "ParqueAtracciones"
        },
        {
            "paint": {
                "fill-color": "rgba(239, 239, 239, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CampoGolf",
            "maxzoom": 17,
            "type": "fill",
            "id": "CampoGolf"
        },
        {
            "paint": {
                "line-color": "rgba(88, 88, 88, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "ESC"
                ],
                [
                    "==",
                    "Seccion",
                    "PIE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaRuptura - Escarpado Pie"
        },
        {
            "paint": {
                "line-color": "rgba(88, 88, 88, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "ESC"
                ],
                [
                    "==",
                    "Seccion",
                    "CAB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaRuptura - Escarpado Cabeza"
        },
        {
            "layout": {
                "icon-size": 0.2,
                "icon-image": "lineaEscarpado",
                "icon-rotate": 90,
                "symbol-spacing": 10,
                "symbol-placement": "line"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "ESC"
                ],
                [
                    "==",
                    "Seccion",
                    "CAB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "symbol",
            "id": "LineaRuptura - Escarpado Cabeza - Simbolo"
        },
        {
            "paint": {
                "line-color": "rgba(208, 208, 208, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "BAN"
                ],
                [
                    "==",
                    "Seccion",
                    "PIE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaRuptura - Bancal Pie"
        },
        {
            "paint": {
                "line-color": "rgba(208, 208, 208, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "BAN"
                ],
                [
                    "==",
                    "Seccion",
                    "CAB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaRuptura - Bancal Cabeza"
        },
        {
            "paint": {
                "line-color": "rgba(88, 88, 88, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "TAL"
                ],
                [
                    "==",
                    "Seccion",
                    "PIE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaRuptura - Talud Pie"
        },
        {
            "paint": {
                "line-color": "rgba(88, 88, 88, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "TAL"
                ],
                [
                    "==",
                    "Seccion",
                    "CAB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaRuptura - Talud Cabeza"
        },
        {
            "layout": {
                "symbol-placement": "line",
                "icon-size": 0.2,
                "icon-padding": 0,
                "icon-rotate": 90,
                "icon-anchor": "center",
                "icon-image": "lineaTalud",
                "icon-offset": [
                    20,
                    -20
                ],
                "symbol-spacing": 1
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "TAL"
                ],
                [
                    "==",
                    "Seccion",
                    "CAB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 15,
            "source-layer": "LineaRuptura",
            "maxzoom": 17,
            "type": "symbol",
            "id": "LineaRuptura - Talud Cabeza - Simbolo"
        },
        {
            "paint": {
                "line-color": "rgba(94, 94, 94, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.5
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Rambla",
            "maxzoom": 17,
            "type": "line",
            "id": "Rambla"
        },
        {
            "paint": {
                "line-color": "rgba(143, 143, 143, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 14,
            "source-layer": "Lindes",
            "maxzoom": 17,
            "type": "line",
            "id": "Lindes"
        },
        {
            "paint": {
                "fill-color": "rgba(239, 239, 239, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "ParqueJardinS",
            "maxzoom": 17,
            "type": "fill",
            "id": "ParqueJardinS"
        },
        {
            "paint": {
                "line-color": "rgba(94, 94, 94, 1)",
                "line-width": 0.8
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaCosta",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaCosta"
        },
        {
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Regimen",
                    "PER"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CorrienteNaturalL",
            "maxzoom": 17,
            "type": "line",
            "id": "Corriente Natural Lineas - Permanentes"
        },
        {
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-dasharray": [
                    5,
                    2
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Regimen",
                    "PER"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CorrienteNaturalL",
            "maxzoom": 17,
            "type": "line",
            "id": "Corriente Natural Lineas - No Permanentes"
        },
        {
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CorrienteArtificialL",
            "maxzoom": 17,
            "type": "line",
            "id": "Corriente Artificial - Linea"
        },
        {
            "layout": {
                "icon-image": "flechaCorrienteArtificial",
                "icon-size": 0.5,
                "symbol-spacing": 60,
                "symbol-placement": "line"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CorrienteArtificialL",
            "maxzoom": 17,
            "type": "symbol",
            "id": "CorrienteArtificialL -Simbolo"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "LAG"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MasasAgua",
            "maxzoom": 17,
            "type": "fill",
            "id": "MasasAgua - Laguna"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EMB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MasasAgua",
            "maxzoom": 17,
            "type": "fill",
            "id": "MasasAgua - Embalse"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(194, 194, 194, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EST"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "SAL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MasasAgua",
            "maxzoom": 17,
            "type": "fill",
            "id": "MasasAgua-Estanque - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(165, 165, 165, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EST"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "SAL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MasasAgua",
            "maxzoom": 14,
            "type": "line",
            "id": "MasasAgua - Estanque - Linea 1"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EST"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "SAL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 14,
            "source-layer": "MasasAgua",
            "maxzoom": 17,
            "type": "line",
            "id": "MasasAgua - Estanque - Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(232, 232, 232, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EST"
                ],
                [
                    "==",
                    "Clasificacion",
                    "SAL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MasasAgua",
            "maxzoom": 17,
            "type": "fill",
            "id": "MasasAgua - Salina Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EST"
                ],
                [
                    "==",
                    "Clasificacion",
                    "SAL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MasasAgua",
            "maxzoom": 17,
            "type": "line",
            "id": "MasasAgua - Salina - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(94, 94, 94, 1)",
                "line-width": 0.5
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CurvaBatimetrica",
            "maxzoom": 17,
            "type": "line",
            "id": "CurvaBatimetrica"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CorrienteArtificialS",
            "maxzoom": 17,
            "type": "fill",
            "id": "CorrienteArtificialS - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.5
            },
            "source": "mapa_andalucia",
            "minzoom": 14,
            "source-layer": "CorrienteArtificialS",
            "maxzoom": 17,
            "type": "line",
            "id": "CorrienteArtificialS - Linea"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CorrienteNaturalS",
            "maxzoom": 17,
            "type": "fill",
            "id": "CorrienteNaturalS"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Isla",
            "maxzoom": 17,
            "type": "fill",
            "id": "Isla"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CentrosSanitarios",
            "maxzoom": 17,
            "type": "line",
            "id": "CentrosSanitarios"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CentrosEducativos",
            "maxzoom": 17,
            "type": "line",
            "id": "CentrosEducativos"
        },
        {
            "paint": {
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Tipo",
                    "PAE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Aerodromo",
            "maxzoom": 17,
            "type": "fill",
            "id": "Aerodromo"
        },
        {
            "paint": {
                "fill-color": "rgba(133, 133, 133, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PAE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Aerodromo",
            "maxzoom": 17,
            "type": "fill",
            "id": "Aerodromo - Pista"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Tipo",
                    "ESC"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MuelleEspigon",
            "maxzoom": 17,
            "type": "line",
            "id": "MuelleEspigon - Espigon"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "ESC"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MuelleEspigon",
            "maxzoom": 17,
            "type": "line",
            "id": "MuelleEspigon - Escollera "
        },
        {
            "paint": {
                "fill-color": "rgba(237, 237, 237, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EDI"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - En Uso"
        },
        {
            "paint": {
                "fill-color": "rgba(237, 237, 237, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EDI"
                ],
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - En Construccion"
        },
        {
            "paint": {
                "fill-color": "rgba(237, 237, 237, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EDI"
                ],
                [
                    "==",
                    "Estado",
                    "RUI"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - En  Ruinas"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PAT"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Patio"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "INV"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Invernadero"
        },
        {
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "IND"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Industrial - En Uso"
        },
        {
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "IND"
                ],
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Industrial - En Construccion"
        },
        {
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "IND"
                ],
                [
                    "==",
                    "Estado",
                    "RUI"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Industrial - En Ruinas"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "any",
                [
                    "==",
                    "Tipo",
                    "TVG"
                ],
                [
                    "==",
                    "Tipo",
                    "CHA"
                ],
                [
                    "==",
                    "Tipo",
                    "NAB"
                ],
                [
                    "==",
                    "Tipo",
                    "NIC"
                ],
                [
                    "==",
                    "Tipo",
                    "CAS"
                ],
                [
                    "==",
                    "Tipo",
                    "TRF"
                ],
                [
                    "==",
                    "Tipo",
                    "CHI"
                ],
                [
                    "==",
                    "Tipo",
                    "CGN"
                ],
                [
                    "==",
                    "Tipo",
                    "TGN"
                ],
                [
                    "==",
                    "Tipo",
                    "MAR"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Edificacion Ligera"
        },
        {
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "TEN"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Tentadero"
        },
        {
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "CHI"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "fill",
            "id": "Edificaciones - Poligono - Chimenea"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PAT"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Patio"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EDI"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - En Uso"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-dasharray": [
                    4,
                    2
                ],
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EDI"
                ],
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - En Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(130, 130, 130, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "EDI"
                ],
                [
                    "==",
                    "Estado",
                    "RUI"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - En Ruinas"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "INV"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Invernaderos"
        },
        {
            "paint": {
                "line-color": "rgba(88, 88, 88, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "IND"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Industrial - En Uso"
        },
        {
            "paint": {
                "line-color": "rgba(88, 88, 88, 1)",
                "line-dasharray": [
                    4,
                    2
                ],
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "IND"
                ],
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Industrial - En Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(88, 88, 88, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "IND"
                ],
                [
                    "==",
                    "Estado",
                    "RUI"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Industrial - En Ruinas"
        },
        {
            "paint": {
                "line-color": "rgba(126, 126, 126, 1)",
                "line-width": 0.4
            },
            "filter": [
                "any",
                [
                    "==",
                    "Tipo",
                    "TVG"
                ],
                [
                    "==",
                    "Tipo",
                    "CHA"
                ],
                [
                    "==",
                    "Tipo",
                    "NAB"
                ],
                [
                    "==",
                    "Tipo",
                    "NIC"
                ],
                [
                    "==",
                    "Tipo",
                    "CAS"
                ],
                [
                    "==",
                    "Tipo",
                    "TRF"
                ],
                [
                    "==",
                    "Tipo",
                    "CHI"
                ],
                [
                    "==",
                    "Tipo",
                    "CGN"
                ],
                [
                    "==",
                    "Tipo",
                    "TGN"
                ],
                [
                    "==",
                    "Tipo",
                    "MAR"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Edificacion Ligera"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "TEN"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Tentadero"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "CHI"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Edificaciones",
            "maxzoom": 17,
            "type": "line",
            "id": "Edificaciones - Lineas - Chimenea"
        },
        {
            "paint": {
                "fill-color": "rgba(201, 201, 201, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EdificacionSingularS",
            "maxzoom": 17,
            "type": "fill",
            "id": "EdificacionSingularS - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "filter": [
                "any",
                [
                    "==",
                    "Estado",
                    "USO"
                ],
                [
                    "==",
                    "Estado",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EdificacionSingularS",
            "maxzoom": 17,
            "type": "line",
            "id": "EdificacionSingularS - Lineas - En Uso"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-dasharray": [
                    4,
                    2
                ],
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EdificacionSingularS",
            "maxzoom": 17,
            "type": "line",
            "id": "EdificacionSingularS - Lineas - En Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(131, 131, 131, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "RUI"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EdificacionSingularS",
            "maxzoom": 17,
            "type": "line",
            "id": "EdificacionSingularS - Lineas - En Ruinas"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Tipo",
                    "GLF"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PistaDeportivaS",
            "maxzoom": 17,
            "type": "fill",
            "id": "PistaDeportivaS"
        },
        {
            "paint": {
                "fill-color": "rgba(239, 239, 239, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "GLF"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PistaDeportivaS",
            "maxzoom": 17,
            "type": "fill",
            "id": "PistaDeportivaS - Campo de Golf"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(109, 109, 109, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PistaDeportivaS",
            "maxzoom": 17,
            "type": "line",
            "id": "PistaDeportivaS - Linea"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(109, 109, 109, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PistaDeportivaL",
            "maxzoom": 17,
            "type": "line",
            "id": "PistaDeportivaL"
        },
        {
            "paint": {
                "fill-color": "rgba(194, 194, 194, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Piscina",
            "maxzoom": 17,
            "type": "fill",
            "id": "Piscina - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Piscina",
            "maxzoom": 17,
            "type": "line",
            "id": "Piscina - Linea"
        },
        {
            "paint": {
                "fill-color": "rgba(214, 214, 214, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "DepositoHidrocarburo",
            "maxzoom": 17,
            "type": "fill",
            "id": "DepositoHidrocarburo - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(109, 109, 109, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "DepositoHidrocarburo",
            "maxzoom": 17,
            "type": "line",
            "id": "DepositoHidrocarburo - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.3
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "ElementosConstruidos",
            "maxzoom": 17,
            "type": "line",
            "id": "ElementosConstruidos"
        },
        {
            "paint": {
                "line-color": "rgba(92, 92, 92, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "MUR"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Cerramientos",
            "maxzoom": 17,
            "type": "line",
            "id": "Cerramientos - Muralla"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "MUR"
                ],
                [
                    "==",
                    "Tipo",
                    "VAL"
                ],
                [
                    "==",
                    "Tipo",
                    "SET"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Cerramientos",
            "maxzoom": 17,
            "type": "line",
            "id": "Cerramientos - Muro Valla Seto"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "ESC"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Cerramientos",
            "maxzoom": 17,
            "type": "line",
            "id": "Cerramientos - Escollera"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "MCO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Cerramientos",
            "maxzoom": 17,
            "type": "line",
            "id": "Cerramientos - Muro Contencion"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "AGU"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "DepositoHidraulicos",
            "maxzoom": 17,
            "type": "fill",
            "id": "DepositoHidraulicos - Agua - Poligono"
        },
        {
            "paint": {
                "fill-color": "rgba(234, 234, 234, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "GEN"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "DepositoHidraulicos",
            "maxzoom": 17,
            "type": "fill",
            "id": "DepositoHidraulicos - Generico - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(109, 109, 109, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all"
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "DepositoHidraulicos",
            "maxzoom": 17,
            "type": "line",
            "id": "DepositoHidraulicos  - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AcumulacionResiduos",
            "maxzoom": 17,
            "type": "line",
            "id": "AcumulacionResiduos"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Silo",
            "maxzoom": 17,
            "type": "line",
            "id": "Silo - Linea"
        },
        {
            "paint": {
                "fill-color": "rgba(104, 104, 104, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PresaP",
            "maxzoom": 17,
            "type": "fill",
            "id": "Presa -  Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(136, 136, 136, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PresaL",
            "maxzoom": 17,
            "type": "line",
            "id": "Presa - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InstalacionGestionResiduos",
            "maxzoom": 17,
            "type": "line",
            "id": "InstalacionGestionResiduos"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InstalacionMilitar",
            "maxzoom": 17,
            "type": "line",
            "id": "InstalacionMilitar"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InstalacionesMineras",
            "maxzoom": 17,
            "type": "line",
            "id": "InstalacionesMineras"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InstalacionHidrocarburos",
            "maxzoom": 17,
            "type": "line",
            "id": "InstalacionHidrocarburos"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InstalacionDeportiva",
            "maxzoom": 17,
            "type": "line",
            "id": "InstalacionDeportiva"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "ExplotacionMinera",
            "maxzoom": 17,
            "type": "line",
            "id": "ExplotacionMinera"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Explanada",
            "maxzoom": 17,
            "type": "fill",
            "id": "Explanada - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(178, 178, 178, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Explanada",
            "maxzoom": 17,
            "type": "line",
            "id": "Explanada - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Camping",
            "maxzoom": 17,
            "type": "line",
            "id": "Camping"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AreaServicioDescanso",
            "maxzoom": 17,
            "type": "line",
            "id": "AreaServicioDescanso"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Cementerio",
            "maxzoom": 17,
            "type": "line",
            "id": "Cementerio"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "ObrasPublicasS",
            "maxzoom": 17,
            "type": "fill",
            "id": "ObrasPublicasS - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "ObrasPublicasS",
            "maxzoom": 17,
            "type": "line",
            "id": "ObraPublicaS - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PIS"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "CNX"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CaminoSendaPista",
            "maxzoom": 15,
            "type": "line",
            "id": "Pista - 1"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 1.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PIS"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "CNX"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 15,
            "source-layer": "CaminoSendaPista",
            "maxzoom": 17,
            "type": "line",
            "id": "Pista - 2"
        },
        {
            "paint": {
                "line-color": "rgba(255, 255, 255, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PIS"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "CNX"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 15,
            "source-layer": "CaminoSendaPista",
            "maxzoom": 17,
            "type": "line",
            "id": "Pista - 3"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-dasharray": [
                    10,
                    4
                ],
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "SEN"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "CNX"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 15,
            "source-layer": "CaminoSendaPista",
            "maxzoom": 17,
            "type": "line",
            "id": "Senda"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-dasharray": [
                    10,
                    4
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "CAM"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "CNX"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CaminoSendaPista",
            "maxzoom": 15,
            "type": "line",
            "id": "Camino - 1"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-dasharray": [
                    10,
                    4
                ],
                "line-width": 1.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "CAM"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "CNX"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 15,
            "source-layer": "CaminoSendaPista",
            "maxzoom": 17,
            "type": "line",
            "id": "Camino - 2"
        },
        {
            "paint": {
                "line-color": "rgba(247, 247, 247, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "CAM"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Clasificacion",
                    "CNX"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 15,
            "source-layer": "CaminoSendaPista",
            "maxzoom": 17,
            "type": "line",
            "id": "Camino - 3"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "ABN"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CarreteraS",
            "maxzoom": 17,
            "type": "fill",
            "id": "CarreterasS  - Poligono - Abandonada"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "CON"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CarreteraS",
            "maxzoom": 17,
            "type": "fill",
            "id": "CarreterasS  - Poligono - En Construccion"
        },
        {
            "paint": {
                "fill-color": "rgba(76, 76, 76, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "USO"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CarreteraS",
            "maxzoom": 17,
            "type": "fill",
            "id": "CarreterasS  - Poligono - En Uso"
        },
        {
            "paint": {
                "line-color": "rgba(135, 135, 135, 1)",
                "line-dasharray": [
                    4,
                    4
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "ABS"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CarreteraS",
            "maxzoom": 17,
            "type": "line",
            "id": "CarreterasS - Linea - Abandonada"
        },
        {
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    4,
                    4
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "CON"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CarreteraS",
            "maxzoom": 17,
            "type": "line",
            "id": "CarreterasS - Linea - Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "USO"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CarreteraS",
            "maxzoom": 17,
            "type": "line",
            "id": "CarreterasS - Linea - En uso"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "ABN"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EnlaceCarreteraS",
            "maxzoom": 17,
            "type": "fill",
            "id": "EnlaceCarreteraS  - Poligono - Abandonada"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "CON"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EnlaceCarreteraS",
            "maxzoom": 17,
            "type": "fill",
            "id": "EnlaceCarreteraS  - Poligono - En Construccion"
        },
        {
            "paint": {
                "fill-color": "rgba(76, 76, 76, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "USO"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EnlaceCarreteraS",
            "maxzoom": 17,
            "type": "fill",
            "id": "EnlaceCarreteraS  - Poligono - En Uso"
        },
        {
            "paint": {
                "line-color": "rgba(135, 135, 135, 1)",
                "line-dasharray": [
                    4,
                    4
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "ABS"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EnlaceCarreteraS",
            "maxzoom": 17,
            "type": "line",
            "id": "EnlaceCarreteraS - Linea - Abandonada"
        },
        {
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    4,
                    4
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "CON"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EnlaceCarreteraS",
            "maxzoom": 17,
            "type": "line",
            "id": "EnlaceCarreteraS - Linea - Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-width": 0.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "USO"
                ],
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EnlaceCarreteraS",
            "maxzoom": 17,
            "type": "line",
            "id": "EnlaceCarreteraS - Linea - En uso"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(76, 76, 76, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Peaje",
            "maxzoom": 17,
            "type": "fill",
            "id": "Peaje"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "IsletaVial",
            "maxzoom": 17,
            "type": "fill",
            "id": "IsletaVial - Poligono"
        },
        {
            "paint": {
                "fill-color": "rgba(178, 178, 178, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Puente",
            "maxzoom": 17,
            "type": "fill",
            "id": "Puente"
        },
        {
            "paint": {
                "line-color": "rgba(126, 126, 126, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "ViaUrbana",
            "maxzoom": 17,
            "type": "line",
            "id": "ViaUrbana"
        },
        {
            "paint": {
                "line-color": "rgba(51, 51, 51, 1)",
                "line-dasharray": [
                    4,
                    8
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "!=",
                    "Velocidad",
                    "ALT"
                ],
                [
                    "==",
                    "Estado",
                    "ABN"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Ferrocarril",
            "maxzoom": 17,
            "type": "line",
            "id": "Ferrocarril - Normal - Abandonado"
        },
        {
            "paint": {
                "line-color": "rgba(51, 51, 51, 1)",
                "line-dasharray": [
                    4,
                    4
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Velocidad",
                    "CON"
                ],
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Ferrocarril",
            "maxzoom": 17,
            "type": "line",
            "id": "Ferrocarril - Normal - En Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(51, 51, 51, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Velocidad",
                    "CON"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Ferrocarril",
            "maxzoom": 17,
            "type": "line",
            "id": "Ferrocarril - Normal - Uso"
        },
        {
            "paint": {
                "line-color": "rgba(51, 51, 51, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 1.4
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Velocidad",
                    "ALT"
                ],
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Ferrocarril",
            "maxzoom": 17,
            "type": "line",
            "id": "Ferrocarril - Alta Velocidad - Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(51, 51, 51, 1)",
                "line-width": 1.4
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Velocidad",
                    "ALT"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Ferrocarril",
            "maxzoom": 17,
            "type": "line",
            "id": "Ferrocarril - Alta Velocidad - Uso 1"
        },
        {
            "paint": {
                "line-color": "rgba(255, 255, 255, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Velocidad",
                    "ALT"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Ferrocarril",
            "maxzoom": 17,
            "type": "line",
            "id": "Ferrocarril - Alta Velocidad - Uso 2"
        },
        {
            "layout": {
                "icon-image": "cuadrado",
                "icon-size": 0.2
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EdificacionSingularP",
            "maxzoom": 17,
            "type": "symbol",
            "id": "EdificacionSingularP"
        },
        {
            "paint": {
                "line-color": "rgba(90, 90, 90, 1)",
                "line-dasharray": [
                    8,
                    8
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Estado",
                    "CON"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "OtrasViasferreas",
            "maxzoom": 17,
            "type": "line",
            "id": "OtrasViasferreas - Tranvia  Metro - En Construccion"
        },
        {
            "paint": {
                "line-color": "rgba(90, 90, 90, 1)",
                "line-dasharray": [
                    4,
                    4
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "OtrasViasferreas",
            "maxzoom": 17,
            "type": "line",
            "id": "OtrasViasferreas - Tranvia  Metro - Subterraneo - Uso"
        },
        {
            "paint": {
                "line-color": "rgba(90, 90, 90, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Estado",
                    "USO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "OtrasViasferreas",
            "maxzoom": 17,
            "type": "line",
            "id": "OtrasViasferreas - Tranvia  Metro - Superficie - Uso"
        },
        {
            "paint": {
                "line-color": "rgba(34, 34, 34, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "TUN"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaComplementaria",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaComplementaria - Tunel"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PUE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaComplementaria",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaComplementaria - Puente"
        },
        {
            "paint": {
                "line-color": "rgba(178, 178, 178, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "PAS"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaComplementaria",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaComplementaria - Pasarela"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "TAJ"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "LineaComplementaria",
            "maxzoom": 17,
            "type": "line",
            "id": "LineaComplementaria - Tajea"
        },
        {
            "paint": {
                "line-color": "rgba(115, 115, 115, 1)",
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CarrilBici",
            "maxzoom": 17,
            "type": "line",
            "id": "CarrilBici"
        },
        {
            "layout": {
                "icon-image": "cuadrado",
                "icon-size": 0.2
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Estacion",
            "maxzoom": 17,
            "type": "symbol",
            "id": "Estacion"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "MurallaS",
            "maxzoom": 17,
            "type": "fill",
            "id": "MurallaS - Poligono"
        },
        {
            "source": "mapa_andalucia",
            "source-layer": "MurallaS",
            "type": "line",
            "id": "MurallaS - Linea",
            "paint": {
                "line-color": "rgba(92, 92, 92, 1)",
                "line-width": 0.4
            }
        },
        {
            "source": "mapa_andalucia",
            "source-layer": "MurallaL",
            "type": "line",
            "id": "MurallaL",
            "paint": {
                "line-color": "rgba(92, 92, 92, 1)",
                "line-width": 0.4
            }
        },
        {
            "source": "mapa_andalucia",
            "source-layer": "InstalacionEnergiaElectrica",
            "type": "line",
            "id": "InstalacionEnergiaElectrica",
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.4
            }
        },
        {
            "source": "mapa_andalucia",
            "source-layer": "CortafuegosS",
            "type": "line",
            "id": "CortaFuegosS",
            "paint": {
                "line-color": "rgba(115, 115, 115, 1)",
                "line-dasharray": [
                    4,
                    2
                ],
                "line-width": 0.4
            }
        },
        {
            "paint": {
                "line-width": 0.4
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CintaTransportadora",
            "maxzoom": 17,
            "type": "line",
            "id": "CintaTransportadora"
        },
        {
            "layout": {
                "icon-image": "cuadrado",
                "symbol-spacing": 10,
                "icon-size": 0.14,
                "symbol-placement": "line"
            },
            "filter": [
                "any",
                [
                    "==",
                    "Tipo",
                    "TLS"
                ],
                [
                    "==",
                    "Tipo",
                    "TLC"
                ],
                [
                    "==",
                    "Tipo",
                    "TLE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "TransporteSuspendidoCable",
            "maxzoom": 17,
            "type": "symbol",
            "id": "TransporteSuspendidoCable - Punto"
        },
        {
            "paint": {
                "line-width": 0.4
            },
            "filter": [
                "any",
                [
                    "==",
                    "Tipo",
                    "TLS"
                ],
                [
                    "==",
                    "Tipo",
                    "TLC"
                ],
                [
                    "==",
                    "Tipo",
                    "TLE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "TransporteSuspendidoCable",
            "maxzoom": 17,
            "type": "line",
            "id": "TransporteSuspendidoCable - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    10,
                    4
                ],
                "line-width": 0.8
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Tendido",
            "maxzoom": 17,
            "type": "line",
            "id": "Tendido"
        },
        {
            "layout": {
                "icon-image": "torre",
                "icon-size": 0.3
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "TorreTendido",
            "maxzoom": 17,
            "type": "symbol",
            "id": "ToreTendido"
        },
        {
            "layout": {
                "icon-image": "torre",
                "icon-size": 0.3
            },
            "paint": {
                "icon-opacity": 1
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "TorreTransporte",
            "maxzoom": 17,
            "type": "symbol",
            "id": "TorreTransporte"
        },
        {
            "layout": {
                "icon-image": "central_otras",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central otras"
        },
        {
            "layout": {
                "icon-image": "central_biogas",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "BIG"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central biogas"
        },
        {
            "layout": {
                "icon-image": "central_cogeneracion",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "COG"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central cogeneracion"
        },
        {
            "layout": {
                "icon-image": "central_termica",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "TER"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central Termica"
        },
        {
            "layout": {
                "icon-image": "central_biomasa",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "BIO"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central Biomasa"
        },
        {
            "layout": {
                "icon-image": "central_hidroelectrica",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "HID"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central hidroelectrica"
        },
        {
            "layout": {
                "icon-image": "central_ciclo_combinado",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "COM"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central combinada"
        },
        {
            "layout": {
                "icon-image": "central_eolica",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "EOL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central eolica"
        },
        {
            "layout": {
                "icon-image": "central_solar",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "SOL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central Solar"
        },
        {
            "layout": {
                "icon-image": "subestacion",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Energia",
                    "NAP"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Subestacion"
        },
        {
            "layout": {
                "icon-image": "aerogenerador",
                "icon-size": 0.8
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Aerogenerador",
            "maxzoom": 17,
            "type": "symbol",
            "id": "Aerogenerador"
        },
        {
            "layout": {
                "icon-image": "antena",
                "icon-size": 0.6
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Antenas",
            "maxzoom": 17,
            "type": "symbol",
            "id": "Antenas"
        },
        {
            "layout": {
                "icon-image": "faro",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "FAR"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "SeñalNavegacion",
            "maxzoom": 17,
            "type": "symbol",
            "id": "SeñalNavegacion"
        },
        {
            "layout": {
                "icon-image": "cueva",
                "icon-rotate": 90,
                "icon-size": 0.6
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CuevasNaturales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "CuevasNaturales"
        },
        {
            "layout": {
                "icon-image": "cueva",
                "icon-rotate": 90,
                "icon-size": 0.6
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "CuevasArtificiales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "CuevasArtificiales"
        },
        {
            "layout": {
                "icon-image": "vertice_geodesico",
                "icon-size": 0.5
            },
            "filter": [
                "all",
                [
                    "!=",
                    "RedGeodesica",
                    "NAP"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PuntosGeodesicos",
            "maxzoom": 17,
            "type": "symbol",
            "id": "PuntosGeodesicos"
        },
        {
            "paint": {
                "circle-radius": 2
            },
            "filter": [
                "any",
                [
                    "==",
                    "Tipo",
                    "CON"
                ],
                [
                    "==",
                    "Tipo",
                    "TER"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PuntoCota",
            "maxzoom": 17,
            "type": "circle",
            "id": "PuntoCota"
        },
        {
            "layout": {
                "icon-image": "vertice_geodesico",
                "icon-size": 0.5
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PuntoGNSS",
            "maxzoom": 17,
            "type": "symbol",
            "id": "PuntoGNSS"
        },
        {
            "layout": {
                "icon-image": "sumidero",
                "icon-size": 0.6
            },
            "filter": [
                "any",
                [
                    "==",
                    "Tipo",
                    "SUM"
                ],
                [
                    "==",
                    "Tipo",
                    "BOC"
                ],
                [
                    "==",
                    "Tipo",
                    "SCL"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PuntoFluvial",
            "maxzoom": 17,
            "type": "symbol",
            "id": "PuntoFluvial - Sumidero  Boca Hidrográfica"
        },
        {
            "layout": {
                "icon-image": "cascada",
                "icon-size": 0.6
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "CAS"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PuntoFluvial",
            "maxzoom": 17,
            "type": "symbol",
            "id": "PuntoFluvial - Cascada"
        },
        {
            "layout": {
                "icon-image": "cuadradoSifon",
                "icon-size": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "SIF"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "PuntoFluvial",
            "maxzoom": 17,
            "type": "symbol",
            "id": "PuntoFluvial - Sifon"
        },
        {
            "paint": {
                "circle-stroke-width": 1,
                "circle-color": "rgba(194, 194, 194, 1)",
                "circle-stroke-color": "rgba(79, 79, 79, 1)",
                "circle-radius": 2
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Captacion",
            "maxzoom": 17,
            "type": "circle",
            "id": "Captacion"
        },
        {
            "layout": {
                "icon-image": "Surgencia",
                "icon-size": 0.4
            },
            "paint": {
                "icon-color": "rgba(79, 79, 79, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Surgencia",
            "maxzoom": 17,
            "type": "symbol",
            "id": "Surgencia"
        },
        {
            "paint": {
                "line-color": "rgba(115, 115, 115, 1)",
                "line-dasharray": [
                    10,
                    4
                ],
                "line-width": 0.8
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "EspacioNaturalProtegido",
            "maxzoom": 17,
            "type": "line",
            "id": "EspacioNaturalProtegido"
        },
        {
            "paint": {
                "line-width": 0.8
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Cuadricula10",
            "maxzoom": 17,
            "type": "line",
            "id": "Cuadricula10"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(125, 125, 125, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Tipo",
                    "GAS"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Conduccion",
            "maxzoom": 17,
            "type": "line",
            "id": "Conduccion - Gaseoducto - Superficie "
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(125, 125, 125, 1)",
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "!=",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Tipo",
                    "OLE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Conduccion",
            "maxzoom": 17,
            "type": "line",
            "id": "Conduccion - Oleoducto - Superficie"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(125, 125, 125, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Tipo",
                    "GAS"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Conduccion",
            "maxzoom": 17,
            "type": "line",
            "id": "Conduccion - Gaseoducto - Subterraneo "
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(125, 125, 125, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.8
            },
            "filter": [
                "all",
                [
                    "==",
                    "Situacion",
                    "SUB"
                ],
                [
                    "==",
                    "Tipo",
                    "OLE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Conduccion",
            "maxzoom": 17,
            "type": "line",
            "id": "Conduccion - Oleoducto - Subterraneo"
        },
        {
            "layout": {
                "icon-image": "gaseoducto",
                "symbol-spacing": 40,
                "icon-size": 0.16,
                "symbol-placement": "line"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "GAS"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Conduccion",
            "maxzoom": 17,
            "type": "symbol",
            "id": "Conduccion - Gaseoducto"
        },
        {
            "layout": {
                "icon-image": "oleoducto",
                "symbol-spacing": 40,
                "icon-size": 0.16,
                "symbol-placement": "line"
            },
            "filter": [
                "all",
                [
                    "==",
                    "Tipo",
                    "OLE"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "Conduccion",
            "maxzoom": 17,
            "type": "symbol",
            "id": "Conduccion - Oleoducto"
        },
        {
            "layout": {
                "icon-allow-overlap": true,
                "symbol-placement": "line",
                "icon-anchor": "right",
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-anchor": "right",
                "text-field": "{textstring}",
                "text-justify": "right",
                "text-size": 10,
                "symbol-spacing": 400
            },
            "paint": {
                "text-color": "rgba(122, 122, 122, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 14,
            "source-layer": "AnotacionesCurvasMaestras",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesCurvasMaestras"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            6
                        ],
                        [
                            17,
                            8
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 14,
            "source-layer": "AnotacionesPuntosAcotados",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesPuntosAcotados"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            17,
                            16
                        ]
                    ]
                },
                "text-max-width": 200
            },
            "paint": {
                "text-color": "rgba(115, 115, 115, 1)",
                "text-halo-width": 1.2,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEspaciosNaturalesProtegidos",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEspaciosNaturalesProtegidos"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            10
                        ],
                        [
                            17,
                            14
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Italic"
                ]
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 1.2,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ],
                [
                    "!=",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesMedioFicico",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesMedioFisico - Medio fisico"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            16
                        ],
                        [
                            17,
                            20
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Italic"
                ]
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 1.2,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ],
                [
                    "==",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesMedioFicico",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesMedioFisico - Terminos Municipales"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            6
                        ],
                        [
                            17,
                            8
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ]
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesCuevas",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesCuevas"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            17,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ]
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEmbalsesLagunaMar",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEmbalsesLagunaMar"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ]
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesFuentesManantiales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesFuentesManantiales"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            10
                        ],
                        [
                            17,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Italic"
                ],
                "symbol-spacing": 100,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesCorrientesArtificiales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesCorrientesArtificiales"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            10
                        ],
                        [
                            17,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Italic"
                ],
                "symbol-spacing": 100,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesRedHidrografica",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesRedHidrografica"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 14,
            "source-layer": "AnotacionesVerticesGeodesicos",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesVerticesGeodesicos"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            17,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-spacing": 100,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesCarreteras",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesCarreteras"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            17,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-spacing": 100,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesFerrocarril",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesFerrocarril"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            17,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ],
                [
                    "==",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEntidadesPoblacion",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEntidadesPoblacion - Cabecera Municipal"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            17,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ],
                [
                    "!=",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEntidadesPoblacion",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEntidadesPoblacion"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesParquesJardines",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesParquesJardines"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            10
                        ],
                        [
                            17,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEdificioSingularS",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEdificioSingularS"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            10
                        ],
                        [
                            17,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEdificioSingularP",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEdificioSingularP"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesInstalacionesSanitarias",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesInstalacionesSanitarias"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesInstalacionesEducativas",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesInstalacionesEducativas"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesInstalacionesDeportivas",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesInstalacionesDeportivas"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesInstalacionesMineras",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesInstalacionesMineras"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesInstalacionesMilitares",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesInstalacionesMilitares"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesInstalacionesHidrocarburo",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesInstalacionesHidrocarburo"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesInstalacionesEnergiaElectrica",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesInstalacionesEnergiaElectrica"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesParqueAtracciones",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesParqueAtracciones"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesCementerio",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesCementerio"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesCementerio",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesCamping"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesCampoGolf",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesCampoGolf"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEstacionServicio",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEstacionServicio"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesEstacionTransportes",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesEstacionTransportes"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesPuerto",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesPuerto"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesAeropuertoAerodromo",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesAeropuertoAerodromo"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesPiscifactoria",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesPiscifactoria"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesRecientosIndustriales",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesRecientosIndustriales"
        },
        {
            "layout": {
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            13,
                            9
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                },
                "text-font": [
                    "Noto Sans Regular"
                ],
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 13,
            "source-layer": "AnotacionesYacimientoArqueologico",
            "maxzoom": 17,
            "type": "symbol",
            "id": "AnotacionesYacimientoArqueologico"
        },
        {
            "paint": {
                "line-color": "rgba(203, 203, 203, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0201",
                    "01"
                ],
                [
                    "==",
                    "categ_0201",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cur_niv_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Curva Nivel - Maestra"
        },
        {
            "paint": {
                "line-color": "rgba(94, 94, 94, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0201",
                    "04"
                ],
                [
                    "==",
                    "categ_0201",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cur_niv_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Curva Nivel - Batimetrica Maestra"
        },
        {
            "paint": {
                "line-color": "rgba(94, 94, 94, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0201",
                    "04"
                ],
                [
                    "==",
                    "categ_0201",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cur_niv_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Curva Nivel - Batimetrica No Maestra"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.5
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "exp_min_s_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Explotación Minera"
        },
        {
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-color": "rgba(191, 191, 191, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "tipo_0502",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "ent_pob_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Entidad de Población"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "zon_ater_s_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Aeropuerto - Recinto"
        },
        {
            "paint": {
                "fill-color": "rgba(133, 133, 133, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "pis_ater_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Aeropuerto - Pista"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-outline-color": "rgba(104, 104, 104, 1)",
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0504",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "agr_edi_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Agregación de Edificios - Edificios en Uso"
        },
        {
            "paint": {
                "fill-outline-color": "rgba(104, 104, 104, 1)",
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0504",
                    "04"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "agr_edi_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Agregación de Edificios - Edificios en Ruinas"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "persi_0302",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "rio_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Corriente Natural - Poligono"
        },
        {
            "paint": {
                "fill-translate-anchor": "map",
                "fill-color": "rgba(224, 224, 224, 1)",
                "fill-pattern": "marismas"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "humeda_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Lamina de Agua - Humedal"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "embalse_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Lamina de Agua - Embalses"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "laguna_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Lamina de Agua -  Laguna"
        },
        {
            "paint": {
                "fill-color": "rgba(232, 232, 232, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "salina_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Lamina de Agua -  Salinas"
        },
        {
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-width": 0.5
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "rio_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Corriente Natural - Lineal"
        },
        {
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "situa_0305",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cau_art_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Corriente Artificial - Lineal"
        },
        {
            "layout": {
                "icon-image": "flechaCorrienteArtificial",
                "icon-size": 0.4,
                "symbol-spacing": 40,
                "symbol-placement": "line"
            },
            "filter": [
                "all",
                [
                    "==",
                    "situa_0305",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 12,
            "source-layer": "cau_art_line",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Corriente Artificial - Simbolo"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "situa_0305",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cau_art_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Corriente Artificial - Poligono"
        },
        {
            "paint": {
                "fill-color": "rgba(194, 194, 194, 1)",
                "fill-opacity": 1
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "alm_agu_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Almacenamiento de Agua"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.3
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "ins_rec_s_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Instalaciones Recreativas"
        },
        {
            "paint": {
                "fill-color": "rgba(239, 239, 239, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0561",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "zon_ver_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Zonas Verdes"
        },
        {
            "paint": {
                "fill-color": "rgba(237, 237, 237, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "estad_0507",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "edific_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Edificios - en Uso - Poligono"
        },
        {
            "paint": {
                "fill-color": "rgba(237, 237, 237, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "estad_0507",
                    "03"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "edific_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Edificios - en Ruinas - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(133, 133, 133, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "estad_0507",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "edific_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Edificios en Uso - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(130, 130, 130, 1)",
                "line-dasharray": [
                    1,
                    1
                ],
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "estad_0507",
                    "03"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "edific_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Edificios en Ruinas - Linea"
        },
        {
            "paint": {
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "est_fc_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Estación Ferrocarril"
        },
        {
            "paint": {
                "fill-color": "rgba(239, 239, 239, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0564",
                    "04"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "ins_dep_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Instalaciones Deportiva - Campos de Golf"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.1
            },
            "filter": [
                "all",
                [
                    "!=",
                    "tipo_0564",
                    "04"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "ins_dep_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Instalaciones Deportivas - Genericas"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "ins_ind_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Instalaciones Industriales - Poligonos"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(130, 130, 130, 1)",
                "line-width": 0.2
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "ins_ind_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Instalaciones Industriales - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cement_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Cementerios"
        },
        {
            "paint": {
                "fill-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0407",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cul_int_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Invernaderos - Poligono"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0407",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cul_int_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Invernaderos - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "alm_res_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Almacenamiento Residuos"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.1
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "con_hid_s_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Tratamiento Aguas"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "situa_0331",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "dep_agu_polygon",
            "maxzoom": 13,
            "type": "fill",
            "id": "Depósito de Agua - Polígono"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "situa_0331",
                    "03"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "dep_agu_polygon",
            "maxzoom": 13,
            "type": "line",
            "id": "Depósito de Agua - Linea"
        },
        {
            "paint": {
                "line-color": "rgba(135, 135, 135, 1)",
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "estad_0605",
                    "03"
                ],
                [
                    "!=",
                    "situa_0605",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "carretera_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Carreteras - Abandonadas"
        },
        {
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    5,
                    2
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "estad_0605",
                    "02"
                ],
                [
                    "!=",
                    "situa_0605",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "carretera_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Carreteras - En Construcción"
        },
        {
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "estad_0605",
                    "01"
                ],
                [
                    "!=",
                    "situa_0605",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "carretera_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Carreteras - En Uso"
        },
        {
            "paint": {
                "line-color": "rgba(135, 135, 135, 1)",
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "estadofis",
                    "03"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "urbana_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Carreteras  Urbanas - Abandonadas"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "estadofis",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "urbana_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Carreteras  Urbanas - En Construcción"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "estadofis",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "urbana_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Carreteras  Urbanas - En Uso"
        },
        {
            "paint": {
                "line-color": "rgba(155, 155, 155, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0528",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cerram_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Cerramientos - Muro de Contención"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "!=",
                    "tipo_0528",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "cerram_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Cerramientos - Tapia Muro Alambrada"
        },
        {
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0623",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 12,
            "source-layer": "camino_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Caminos"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.3
            },
            "source": "mapa_andalucia",
            "minzoom": 12,
            "source-layer": "senda_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Senda 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-offset": 0.5,
                "line-width": 0.3
            },
            "filter": [
                "all"
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "itiner_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Itinerario - Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(104, 104, 104, 1)",
                "line-offset": -0.5,
                "line-width": 0.3
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "itiner_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Itinerario - Linea 2"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-dasharray": [
                    10,
                    4
                ]
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0641",
                    "01"
                ],
                [
                    "==",
                    "estad_0641",
                    "03"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "fc_conv_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Ferrocarril - Abandonado"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-dasharray": [
                    10,
                    10
                ]
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0641",
                    "01"
                ],
                [
                    "==",
                    "estad_0641",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "fc_conv_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Ferrocarril - En  Construcción"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0641",
                    "01"
                ],
                [
                    "==",
                    "estad_0641",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "fc_conv_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Ferrocarril - En  Uso"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 1.5
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0638",
                    "01"
                ],
                [
                    "==",
                    "estad_0638",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "fc_alt_vel_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Ferrocarril - Alta Velocidad - En Uso Linea 1"
        },
        {
            "paint": {
                "line-color": "rgba(255, 255, 255, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0638",
                    "01"
                ],
                [
                    "==",
                    "estad_0638",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "fc_alt_vel_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Ferrocarril - Alta Velocidad - En Uso Linea 2"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 1.5
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0638",
                    "01"
                ],
                [
                    "==",
                    "estad_0638",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "fc_alt_vel_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Ferrocarril - Alta Velocidad - En Construcción Linea 1"
        },
        {
            "paint": {
                "line-color": "rgba(255, 255, 255, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "!=",
                    "situa_0638",
                    "01"
                ],
                [
                    "==",
                    "estad_0638",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "fc_alt_vel_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Ferrocarril - Alta Velocidad - En Construcción Linea 2"
        },
        {
            "paint": {
                "line-color": "rgba(52, 52, 52, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0701",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "con_comb_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Conducción Combustible - Oleoducto"
        },
        {
            "paint": {
                "line-color": "rgba(52, 52, 52, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0701",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "con_comb_line",
            "maxzoom": 13,
            "type": "line",
            "id": "Conducción Combustible - Gaseoducto"
        },
        {
            "layout": {
                "icon-image": "cuadrado",
                "icon-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    0.1,
                    13,
                    0.2
                ],
                "symbol-spacing": 10,
                "symbol-placement": "line"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0701",
                    "01"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "con_comb_line",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Conducción Combustible  - Oleoducto  Simbolo"
        },
        {
            "layout": {
                "icon-image": "circulo",
                "symbol-spacing": 10,
                "symbol-placement": "line",
                "icon-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    0.1,
                    13,
                    0.2
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0701",
                    "02"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "con_comb_line",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Conducción Combustible  - Gaseoducto Simbolo"
        },
        {
            "paint": {
                "line-color": "rgba(168, 168, 168, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tensi_0710",
                    "03"
                ]
            ],
            "source": "mapa_andalucia",
            "source-layer": "lin_elec_line",
            "type": "line",
            "id": "Linea Eléctrica - 220 Kv"
        },
        {
            "paint": {
                "line-color": "rgba(168, 168, 168, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tensi_0710",
                    "04"
                ]
            ],
            "source": "mapa_andalucia",
            "source-layer": "lin_elec_line",
            "type": "line",
            "id": "Linea Eléctrica - 400 Kv"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    12,
                    13,
                    16
                ],
                "text-field": "{etiqueta}",
                "text-max-width": 24,
                "symbol-spacing": 500
            },
            "paint": {
                "text-color": "rgba(38, 38, 38, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0801",
                    "080111"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_sin_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Comarcas Grandes y Medianas"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    10,
                    13,
                    14
                ],
                "text-field": "{etiqueta}",
                "text-max-width": 100,
                "symbol-spacing": 500
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0801",
                    "080116"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_sin_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Comarcas Menores y Grandes Parajes"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    12,
                    13,
                    16
                ],
                "text-field": "{etiqueta}",
                "text-max-width": 100,
                "symbol-spacing": 500
            },
            "paint": {
                "text-color": "rgba(80, 80, 80, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0801",
                    "080322"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_sin_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Mares y Ocenanos"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    10,
                    13,
                    14
                ],
                "text-field": "{etiqueta}",
                "text-max-width": 100,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(80, 80, 80, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0801",
                    "080325"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_sin_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Estrechos Golfos Bahias"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    8,
                    13,
                    10
                ],
                "text-field": "{etiqueta}",
                "text-max-width": 100,
                "symbol-spacing": 280
            },
            "paint": {
                "text-color": "rgba(80, 80, 80, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0801",
                    "080328"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_sin_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Salientes Costeros"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{etiqueta}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    12,
                    13,
                    16
                ],
                "text-max-width": 100,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(115, 115, 115, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0802",
                    "080205"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_pos_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Montañas Principales"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{etiqueta}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    10,
                    13,
                    14
                ],
                "text-max-width": 100,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(115, 115, 115, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0802",
                    "080206"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_pos_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Montañas  y  Picos Medianos"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{etiqueta}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    8,
                    13,
                    10
                ],
                "text-max-width": 100,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(115, 115, 115, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "tipo_0802",
                    "080209"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_pos_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Picos y Collados"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{etiqueta}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    12,
                    13,
                    16
                ],
                "text-max-width": 100,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "any",
                [
                    "==",
                    "tipo_0802",
                    "080501"
                ],
                [
                    "==",
                    "tipo_0802",
                    "080502"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_pos_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Capital de Provincia"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{etiqueta}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    10,
                    13,
                    14
                ],
                "text-max-width": 100,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "any",
                [
                    "==",
                    "tipo_0802",
                    "080504"
                ],
                [
                    "==",
                    "tipo_0802",
                    "080505"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_pos_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Municipos entre 10 y 50.000 hab"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{etiqueta}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    8,
                    13,
                    12
                ],
                "text-max-width": 100,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "any",
                [
                    "==",
                    "tipo_0802",
                    "080506"
                ],
                [
                    "==",
                    "tipo_0802",
                    "080507"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_pos_geo_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Municipos entre 05 y 10.000 hab"
        },
        {
            "layout": {
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    12,
                    13,
                    16
                ],
                "text-field": "{etiqueta}",
                "symbol-spacing": 300,
                "symbol-placement": "line",
                "text-allow-overlap": true
            },
            "paint": {
                "text-color": "rgba(115, 115, 115, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "source-layer": "lin_rot_line",
            "type": "symbol",
            "id": "Toponimia - Sierras"
        },
        {
            "layout": {
                "text-size": 10,
                "text-field": "{etiqueta}",
                "symbol-spacing": 200,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_playas",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Playas"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": 14,
                "text-field": "{textstring}",
                "symbol-spacing": 400,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ],
                [
                    "==",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_rios",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Rios Jerarquia 1"
        },
        {
            "layout": {
                "symbol-placement": "line",
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 12,
                "text-max-width": 100,
                "symbol-spacing": 400
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    0
                ],
                [
                    "!=",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "top_rios",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Rios Jerarquia 2"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": 10,
                "text-field": "{etiqueta}",
                "text-max-width": 5,
                "symbol-spacing": 1000
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "etiqueta",
                    "S/N"
                ],
                [
                    ">=",
                    "zmax_0325",
                    200
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "embalse_polygon",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Embalses"
        },
        {
            "layout": {
                "text-field": "{etiqueta}",
                "text-size": 10,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-max-width": 8,
                "symbol-spacing": 300
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 12,
            "source-layer": "humeda_polygon",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Humedales"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": 10,
                "text-field": "{etiqueta}",
                "symbol-spacing": 20
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "cabecera",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 12,
            "source-layer": "ent_pob_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Entidades Población 1"
        },
        {
            "layout": {
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": 12,
                "text-field": "{etiqueta}",
                "symbol-spacing": 20
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.8,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cabecera",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "ent_pob_point",
            "maxzoom": 13,
            "type": "symbol",
            "id": "Toponimia - Entidades Población"
        },
        {
            "paint": {
                "fill-color": "rgba(160, 160, 160, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P1"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Poblamiento - Cabecera Municipal"
        },
        {
            "paint": {
                "fill-outline-color": "rgba(160, 160, 160, 1)",
                "fill-color": "rgba(160, 160, 160, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P2"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Poblamiento-Núcleo Secundario"
        },
        {
            "paint": {
                "fill-color": "rgba(160, 160, 160, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P3"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Poblamiento - Diseminado, urbanización"
        },
        {
            "paint": {
                "fill-color": "rgba(239, 239, 239, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P4"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Poblamiento - Campo de Golf"
        },
        {
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P7"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Poblamiento - Aeropuerto Fill"
        },
        {
            "paint": {
                "line-color": "rgba(130, 130, 130, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P7"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Poblamiento - Aeropuerto Stroke"
        },
        {
            "paint": {
                "fill-color": "rgba(225, 225, 225, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P6"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Poblamiento - Zona Militar Fill"
        },
        {
            "paint": {
                "line-color": "rgba(130, 130, 130, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P6"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Poblamiento - Zona Militar Stroke"
        },
        {
            "paint": {
                "fill-color": "rgba(235, 235, 235, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I21"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "IT4_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Puertos"
        },
        {
            "paint": {
                "fill-color": "rgba(133, 133, 133, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I20"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "IT4_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Aeropuertos"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(224, 224, 224, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H9"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "HS2_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Lámina de Agua - Marismas 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-translate-anchor": "map",
                "fill-color": "rgba(224, 224, 224, 1)",
                "fill-pattern": "marismas"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H9"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "HS2_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Lámina de Agua - Marismas 2"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H8"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "HS2_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Lámina de Agua - Fluvial o Laguna"
        },
        {
            "paint": {
                "fill-color": "rgba(144, 144, 144, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H7"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "HS2_400",
            "maxzoom": 11,
            "type": "fill",
            "id": "Lámina de Agua - Embalses"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H1"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 6,
            "source-layer": "HS1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Hidrográfica- Río"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H2"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "HS1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Hidrográfica - Arroyo"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(144, 144, 144, 1)",
                "line-dasharray": [
                    10,
                    10
                ],
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H3"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "HS1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Hidrográfica - Caño, rambla"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(197, 197, 197, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H4"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "HS1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Hidrográfica - Acequia"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(167, 167, 167, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H5"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "HS1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Hidrográfica - Canal"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(197, 197, 197, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "H6"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "HS1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Hidrográfica - Canalización Salinas"
        },
        {
            "paint": {
                "line-dasharray": [
                    5,
                    5
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "D1"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "DA1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Divisiones Administrativas - Frontera internacional"
        },
        {
            "paint": {
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "D2"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "DA1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Divisiones Administrativas - Frontera autonómica"
        },
        {
            "paint": {
                "line-dasharray": [
                    2,
                    1
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "D3"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "DA1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Divisiones Administrativas - Límite provincial"
        },
        {
            "paint": {
                "line-color": "rgba(149, 149, 149, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "D4"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "DA1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Divisiones Administrativas - Línea de costa"
        },
        {
            "paint": {
                "line-color": "rgba(23, 23, 23, 1)",
                "line-dasharray": [
                    2,
                    1
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "D5"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "DA1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Divisiones Administrativas - Límite del mar territorial"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(67, 67, 67, 1)",
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "filter": [
                "any",
                [
                    "==",
                    "cod_ent",
                    "P7"
                ],
                [
                    "==",
                    "cod_ent",
                    "P8"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "PB2_400",
            "maxzoom": 10,
            "type": "line",
            "id": "Espacios Naturales Protegidos Zoom 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(67, 67, 67, 1)",
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "filter": [
                "any",
                [
                    "==",
                    "cod_ent",
                    "P7"
                ],
                [
                    "==",
                    "cod_ent",
                    "P8"
                ],
                [
                    "==",
                    "cod_ent",
                    "P11"
                ],
                [
                    "==",
                    "cod_ent",
                    "P12"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "PB2_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Espacios Naturales Protegidos Zoom 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(67, 67, 67, 1)",
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "PB2_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Espacios Naturales Protegidos Zoom 3"
        },
        {
            "paint": {
                "line-color": "rgba(79, 79, 79, 1)",
                "line-dasharray": [
                    10,
                    5
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I11"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "IT2_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red ferroviaria, maritima y telecomunicaciones - Línea marítima de pasajeros"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 1.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I5"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "IT2_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red ferroviaria, maritima y telecomunicaciones - Línea de alta velocidad"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-dasharray": [
                    10,
                    5
                ],
                "line-width": 1.4
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I6"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 10,
            "source-layer": "IT2_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red ferroviaria, maritima y telecomunicaciones - Línea de alta velocidad en Construcción"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I7"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT2_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red ferroviaria, maritima y telecomunicaciones - Vía Convencional"
        },
        {
            "paint": {
                "line-color": "rgba(0, 0, 0, 1)",
                "line-dasharray": [
                    10,
                    5
                ],
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I8"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 10,
            "source-layer": "IT2_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red ferroviaria, maritima y telecomunicaciones - Vía Convencional en Construcción"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-width": 1.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I1"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Autopista o autovía, En uso Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I1"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Autopista o autovía, En uso Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 1.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I1"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Autopista o autovía, En construccion Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I1"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Autopista o autovía, En construccion Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-width": 1
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I2"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 6,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de Red Básica, En uso Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I2"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 6,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de Red Básica, En uso Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 1
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I2"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de Red Básica, En construccion Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.3
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I2"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de Red Básica, En construccion Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I3"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Red Intercomarcal, En uso Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I3"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Red Intercomarcal, En uso Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I3"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Red Intercomarcal, En construccion Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I3"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Red Intercomarcal, En construccion Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I4"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de la Red, En uso Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I4"
                ],
                [
                    "==",
                    "estado",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de la Red, En uso Linea 2"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(76, 76, 76, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.7
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I4"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de la Red, En construccion Linea 1"
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(210, 210, 210, 1)",
                "line-dasharray": [
                    2,
                    2
                ],
                "line-width": 0.2
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I4"
                ],
                [
                    "==",
                    "estado",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Red Viaria - Resto de la Red, En construccion Linea 2"
        },
        {
            "paint": {
                "line-color": "rgba(168, 168, 168, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "IE1"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IE1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Redes Energéticas - Red eléctrica 220 Kv"
        },
        {
            "paint": {
                "line-color": "rgba(168, 168, 168, 1)",
                "line-width": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "IE2"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IE1_400",
            "maxzoom": 11,
            "type": "line",
            "id": "Redes Energéticas - Red eléctrica 400 Kv"
        },
        {
            "layout": {
                "icon-image": "mina",
                "icon-allow-overlap": true,
                "icon-rotation-alignment": "map",
                "icon-size": 0.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "IE8"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "IE2_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Infraestructuras Energéticas - Minas"
        },
        {
            "layout": {
                "icon-image": "faro",
                "icon-size": 0.6,
                "icon-allow-overlap": true,
                "icon-rotation-alignment": "map",
                "icon-pitch-alignment": "map"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I17"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT3_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Infraestructuras Transporte - Faro"
        },
        {
            "layout": {
                "icon-image": "aeropuerto",
                "icon-size": 0.6,
                "icon-allow-overlap": true,
                "icon-rotation-alignment": "map",
                "icon-pitch-alignment": "map"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I13"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "IT3_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Infraestructuras Transporte - Aeropuerto nacional o internacional"
        },
        {
            "layout": {
                "icon-image": "otros_aeropuerto",
                "icon-size": 0.4,
                "icon-allow-overlap": true,
                "icon-rotation-alignment": "map",
                "icon-pitch-alignment": "map"
            },
            "paint": {
                "icon-halo-width": 0.3,
                "icon-color": "rgba(144, 137, 137, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I14"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT3_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Infraestructuras Transporte - Otros Aeropuerto"
        },
        {
            "layout": {
                "icon-image": "puerto",
                "icon-size": 0.6,
                "icon-allow-overlap": true,
                "icon-rotation-alignment": "map",
                "icon-pitch-alignment": "map"
            },
            "paint": {
                "icon-halo-width": 0.3,
                "icon-color": "rgba(0, 0, 0, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I15"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "IT3_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Infraestructuras Transporte - Puerto de Interés General del Estado"
        },
        {
            "layout": {
                "icon-image": "otros_puerto",
                "icon-size": 0.4,
                "icon-allow-overlap": true,
                "icon-rotation-alignment": "map",
                "icon-pitch-alignment": "map"
            },
            "paint": {
                "icon-halo-width": 0.3,
                "icon-color": "rgba(144, 137, 137, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "I16"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "IT3_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Infraestructuras Transporte - Puerto de gestión autónoma"
        },
        {
            "layout": {
                "icon-image": "campo_golf",
                "icon-allow-overlap": true,
                "icon-size": 0.6
            },
            "paint": {
                "icon-halo-width": 0.3,
                "icon-color": "rgba(0, 0, 0, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P17"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 10,
            "source-layer": "PB3_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Campos de Golf"
        },
        {
            "layout": {
                "icon-image": "hitos_cultural",
                "icon-size": 0.4
            },
            "paint": {
                "icon-halo-width": 0.3,
                "icon-color": "rgba(0, 0, 0, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "cod_ent",
                    "P16"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "PB3_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Hitos Interes Cultura"
        },
        {
            "layout": {
                "icon-image": "triangulo",
                "icon-allow-overlap": true,
                "icon-size": 0.2
            },
            "paint": {
                "icon-halo-width": 0.3,
                "icon-color": "rgba(0, 0, 0, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "RL1_400",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Cotas Altimétricas"
        },
        {
            "layout": {
                "text-letter-spacing": 1,
                "symbol-avoid-edges": false,
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-ignore-placement": true,
                "text-line-height": 1,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "icon-allow-overlap": true,
                "text-field": "{textstring}",
                "text-justify": "center",
                "icon-ignore-placement": true,
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    6,
                    8,
                    10,
                    12
                ],
                "text-max-width": 1000,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(23, 23, 23, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 6,
            "source-layer": "TP9_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Litoral - Límite del mar territorial"
        },
        {
            "layout": {
                "text-letter-spacing": 0,
                "symbol-avoid-edges": false,
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-ignore-placement": true,
                "text-line-height": 1,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-justify": "center",
                "text-padding": 2,
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    8,
                    6,
                    12,
                    12
                ],
                "text-max-width": 1000,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(80, 80, 80, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "TP9_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Litoral - Mares y océanos"
        },
        {
            "layout": {
                "text-letter-spacing": 0,
                "symbol-avoid-edges": false,
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-justify": "center",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    8,
                    6,
                    12,
                    10
                ],
                "text-max-width": 500,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(80, 80, 80, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "TP9_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Litoral - Otros"
        },
        {
            "layout": {
                "text-letter-spacing": 0,
                "symbol-avoid-edges": false,
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-justify": "center",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    6,
                    12,
                    8
                ],
                "text-max-width": 500,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(80, 80, 80, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    4
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 10,
            "source-layer": "TP9_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Litoral - Bancos"
        },
        {
            "layout": {
                "text-letter-spacing": 0,
                "symbol-avoid-edges": false,
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-justify": "center",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    9,
                    7,
                    12,
                    9
                ],
                "text-max-width": 500,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "TP11_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Minas"
        },
        {
            "layout": {
                "text-letter-spacing": 0,
                "symbol-avoid-edges": false,
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-justify": "center",
                "text-size": {
                    "stops": [
                        [
                            9,
                            6
                        ],
                        [
                            12,
                            10
                        ]
                    ]
                },
                "text-max-width": 500,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "TP2_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Cotas Altimétricas"
        },
        {
            "layout": {
                "text-letter-spacing": 0,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-justify": "center",
                "text-size": {
                    "stops": [
                        [
                            9,
                            8
                        ],
                        [
                            12,
                            10
                        ]
                    ]
                },
                "text-max-width": 10,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "TP6_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Parque Nacional, Parque Natural"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            10,
                            7
                        ],
                        [
                            12,
                            9
                        ]
                    ]
                },
                "text-max-width": 500,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 10,
            "source-layer": "TP6_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Paraje Natural"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            11,
                            7
                        ],
                        [
                            12,
                            9
                        ]
                    ]
                },
                "text-max-width": 500,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "TP6_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Reserva natural, Monumento Natural, Parque Periurbano, otros"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    9,
                    6,
                    12,
                    10
                ],
                "text-max-width": 150,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(80, 80, 80, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "TP5_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Lámina de Agua"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": {
                    "stops": [
                        [
                            8,
                            8
                        ],
                        [
                            12,
                            12
                        ]
                    ]
                },
                "text-max-width": 20,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(38, 38, 38, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    0
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "TP3_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Comarcas"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 10,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    3
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "TP10_400_LINEAS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Infraestructuras - Red transporte marítimo"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 8,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "symbolid",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "TP10_400_LINEAS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Infraestructuras - Red logística"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 8,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-width": 0.3,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "any",
                [
                    "==",
                    "textstring",
                    "CTM de Sevilla"
                ],
                [
                    "==",
                    "textstring",
                    "CTM de Málaga"
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "TP10_400_LINEAS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Infraestructuras - Centro de Transportes"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 12,
                "symbol-spacing": 250
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "fontsize",
                    8
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 5,
            "source-layer": "TP4_400_LINEAS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Red Hidrográfica - Ríos principales"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 10,
                "symbol-spacing": 250
            },
            "paint": {
                "text-color": "rgba(79, 79, 79, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "fontsize",
                    5
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 7,
            "source-layer": "TP4_400_LINEAS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Red Hidrográfica - Ríos"
        },
        {
            "layout": {
                "text-allow-overlap": false,
                "symbol-placement": "line",
                "text-ignore-placement": false,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 14,
                "symbol-spacing": 4000
            },
            "paint": {
                "text-color": "rgba(115, 115, 115, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "fontsize",
                    11.98
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "TP1_400_LINEAS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Sierras Principales"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 12,
                "symbol-spacing": 200
            },
            "paint": {
                "text-color": "rgba(115, 115, 115, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "!=",
                    "fontsize",
                    11.98
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 8,
            "source-layer": "TP1_400_LINEAS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia Sierras"
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    6,
                    7,
                    12,
                    10
                ],
                "text-max-width": 150,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "annotation",
                    1
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "TP7_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Poblamiento - Entre 15000 - 50000 hab."
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    7,
                    7,
                    12,
                    9
                ],
                "text-max-width": 150,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "annotation",
                    2
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 9,
            "source-layer": "TP7_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Poblamiento - Entre 5000 - 15000 hab."
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 8,
                "text-max-width": 150,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "annotation",
                    5
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 11,
            "source-layer": "TP7_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Poblamiento - Entre 1000 - 5000 hab."
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": 7,
                "text-max-width": 150,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "annotation",
                    7
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 12,
            "source-layer": "TP7_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Poblamiento - Menores de 1000 hab."
        },
        {
            "layout": {
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-field": "{textstring}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    6,
                    6,
                    10,
                    12
                ],
                "text-max-width": 150,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "annotation",
                    3
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 6,
            "source-layer": "TP7_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Poblamiento - Entre 50000 - 100000 hab."
        },
        {
            "layout": {
                "text-letter-spacing": 0,
                "symbol-avoid-edges": false,
                "text-allow-overlap": true,
                "symbol-placement": "point",
                "text-ignore-placement": true,
                "text-font": [
                    "Noto Sans Bold"
                ],
                "text-field": "{textstring}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    7,
                    10,
                    12,
                    16
                ],
                "text-max-width": 150,
                "symbol-spacing": 2
            },
            "paint": {
                "text-color": "rgba(68, 68, 68, 1)",
                "text-halo-width": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "filter": [
                "all",
                [
                    "==",
                    "annotation",
                    4
                ]
            ],
            "source": "mapa_andalucia",
            "minzoom": 6,
            "source-layer": "TP7_400_PUNTOS",
            "maxzoom": 11,
            "type": "symbol",
            "id": "Toponimia - Poblamiento - Mas de 100.000"
        }
    ],
    "glyphs": "https://ws205.juntadeandalucia.es/tileserver/fonts/{fontstack}/{range}.pbf",
    "center": [
        -4.9498878,
        37.302438
    ],
    "sprite": "https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_gray_scale_fondo_negro/sprite",
    "zoom": 7,
    "sources": {
        "mapa_andalucia": {
            "url": "https://ws205.juntadeandalucia.es/tileserver/data/mapa_andalucia.json",
            "type": "vector"
        }
    },
    "version": 8,
    "owner": "Instituto de Estadísitca y Cartografía. Junta de Andalucia",
    "metadata": {
        "maputnik:renderer": "mbgljs",
        "maputnik:license": "https://github.com/maputnik/osm-liberty/blob/gh-pages/LICENSE.md",
        "openmaptiles:version": "3.x"
    },
    "id": "Mapa_Andalucia_GrayScale_Fondo_Negro",
    "name": "Mapa_Andalucia_GrayScale_Fondo_Negro"
}