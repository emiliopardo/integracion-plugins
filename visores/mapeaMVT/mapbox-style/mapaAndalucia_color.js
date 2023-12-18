let mapa_andalucia_color= {
  "version": 8,
  "name": "Mapa_Andalucia",
  "metadata": {
    "maputnik:license": "https://github.com/maputnik/osm-liberty/blob/gh-pages/LICENSE.md",
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x"
  },
  "center": [
    -4.9498878,
    37.302438
  ],
  "zoom": 7,
  "sources": {
    "mapa_andalucia": {
      "type": "vector",
      "url": "https://ws205.juntadeandalucia.es/tileserver/data/mapa_andalucia.json"
    }
  },
  "sprite": "https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia/sprite",
  "glyphs": "https://ws205.juntadeandalucia.es/tileserver/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "Puerto",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Puerto",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)"
      }
    },
    {
      "id": "MasasAgua - Mar",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "MAR"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "CurvaNivel - Normal",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CurvaNivel",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Categoria",
          "NOR"
        ]
      ],
      "paint": {
        "line-color": "rgba(158, 116, 61, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "CurvaNivel - Maestra",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CurvaNivel",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Categoria",
          "MAE"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(158, 116, 61, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "RecintoIndustrial - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "RecintoIndustrial",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)"
      }
    },
    {
      "id": "RecintoIndustrial - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "RecintoIndustrial",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "NucleoUrbano",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "NucleoUrbano",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all"
      ],
      "paint": {
        "line-color": "rgba(0,0,0, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "ParqueAtracciones",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ParqueAtracciones",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all"
      ],
      "paint": {
        "line-color": "rgba(0,0,0, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "CampoGolf",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "CampoGolf",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(230, 252, 199, 1)"
      }
    },
    {
      "id": "LineaRuptura - Escarpado Pie",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(137, 68, 68, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "LineaRuptura - Escarpado Cabeza",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(137, 68, 68, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "LineaRuptura - Escarpado Cabeza - Simbolo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 10,
        "icon-image": "lineaEscarpado",
        "icon-rotate": 90,
        "icon-size": 0.2
      }
    },
    {
      "id": "LineaRuptura - Bancal Pie",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(212, 208, 200, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "LineaRuptura - Bancal Cabeza",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(212, 208, 200, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "LineaRuptura - Talud Pie",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(137, 68, 68, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "LineaRuptura - Talud Cabeza",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(137, 68, 68, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "LineaRuptura - Talud Cabeza - Simbolo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "LineaRuptura",
      "minzoom": 15,
      "maxzoom": 17,
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
      "layout": {
        "icon-image": "lineaTalud",
        "symbol-placement": "line",
        "icon-size": 0.2,
        "icon-rotate": 90,
        "icon-anchor": "center",
        "icon-padding": 0,
        "symbol-spacing": 1,
        "icon-offset": [
          20,
          -20
        ]
      }
    },
    {
      "id": "Rambla",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Rambla",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(0, 112, 255, 1)",
        "line-dasharray": [
          10,
          10
        ],
        "line-width": 0.5
      }
    },
    {
      "id": "Lindes",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Lindes",
      "minzoom": 14,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(101, 181, 61, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "ParqueJardinS",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "ParqueJardinS",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(230, 252, 199, 1)"
      }
    },
    {
      "id": "LineaCosta",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaCosta",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(0, 112, 255, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Corriente Natural Lineas - Permanentes",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CorrienteNaturalL",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Regimen",
          "PER"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Corriente Natural Lineas - No Permanentes",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CorrienteNaturalL",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Regimen",
          "PER"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-dasharray": [
          5,
          2
        ],
        "line-width": 0.8
      }
    },
    {
      "id": "Corriente Artificial - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CorrienteArtificialL",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Situacion",
          "SUB"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "CorrienteArtificialL -Simbolo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "CorrienteArtificialL",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 60,
        "icon-image": "flechaCorrienteArtificial",
        "icon-size": 0.5
      }
    },
    {
      "id": "MasasAgua - Laguna",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "LAG"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "MasasAgua - Embalse",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "EMB"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "MasasAgua-Estanque - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(115, 223, 255, 1)"
      }
    },
    {
      "id": "MasasAgua - Estanque - Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 13,
      "maxzoom": 14,
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
      "paint": {
        "line-color": "rgba(255, 127, 127, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "MasasAgua - Estanque - Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 14,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "MasasAgua - Salina Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(201, 245, 255, 1)"
      }
    },
    {
      "id": "MasasAgua - Salina - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "MasasAgua",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "CurvaBatimetrica",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CurvaBatimetrica",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(0, 112, 255, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "CorrienteArtificialS - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "CorrienteArtificialS",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "CorrienteArtificialS - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CorrienteArtificialS",
      "minzoom": 14,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "CorrienteNaturalS",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "CorrienteNaturalS",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Isla",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Isla",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "CentrosSanitarios",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CentrosSanitarios",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "CentrosEducativos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CentrosEducativos",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Aerodromo",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Aerodromo",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Tipo",
          "PAE"
        ]
      ],
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)"
      }
    },
    {
      "id": "Aerodromo - Pista",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Aerodromo",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "PAE"
        ]
      ],
      "paint": {
        "fill-color": "rgba(242, 87, 87, 1)"
      }
    },
    {
      "id": "MuelleEspigon - Espigon",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "MuelleEspigon",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Tipo",
          "ESC"
        ]
      ],
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "MuelleEspigon - Escollera ",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "MuelleEspigon",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "ESC"
        ]
      ],
      "paint": {
        "line-width": 0.8,
        "line-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - En Uso",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 235, 207, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - En Construccion",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 235, 207, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - En  Ruinas",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 235, 207, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Patio",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Invernadero",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Industrial - En Uso",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Industrial - En Construccion",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Industrial - En Ruinas",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Edificacion Ligera",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Tentadero",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Edificaciones - Poligono - Chimenea",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Edificaciones - Lineas - Patio",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Edificaciones - Lineas - En Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Edificaciones - Lineas - En Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4,
        "line-dasharray": [
          4,
          2
        ]
      }
    },
    {
      "id": "Edificaciones - Lineas - En Ruinas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(130, 130, 130, 1)",
        "line-width": 0.4,
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Edificaciones - Lineas - Invernaderos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(0, 166, 57, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Edificaciones - Lineas - Industrial - En Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(137, 68, 68, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Edificaciones - Lineas - Industrial - En Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(137, 68, 68, 1)",
        "line-width": 0.4,
        "line-dasharray": [
          4,
          2
        ]
      }
    },
    {
      "id": "Edificaciones - Lineas - Industrial - En Ruinas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(137, 68, 68, 1)",
        "line-width": 0.4,
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Edificaciones - Lineas - Edificacion Ligera",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(255, 85, 0, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Edificaciones - Lineas - Tentadero",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Edificaciones - Lineas - Chimenea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Edificaciones",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "EdificacionSingularS - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "EdificacionSingularS",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(230, 183, 222, 1)"
      }
    },
    {
      "id": "EdificacionSingularS - Lineas - En Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "EdificacionSingularS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "EdificacionSingularS - Lineas - En Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "EdificacionSingularS",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Estado",
          "CON"
        ]
      ],
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4,
        "line-dasharray": [
          4,
          2
        ]
      }
    },
    {
      "id": "EdificacionSingularS - Lineas - En Ruinas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "EdificacionSingularS",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Estado",
          "RUI"
        ]
      ],
      "paint": {
        "line-color": "rgba(126, 134, 135, 1)",
        "line-width": 0.4,
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "PistaDeportivaS",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PistaDeportivaS",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Tipo",
          "GLF"
        ]
      ],
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "PistaDeportivaS - Campo de Golf",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PistaDeportivaS",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "GLF"
        ]
      ],
      "paint": {
        "fill-color": "rgba(230, 252, 199, 1)"
      }
    },
    {
      "id": "PistaDeportivaS - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PistaDeportivaS",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(110, 110, 110, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "PistaDeportivaL",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PistaDeportivaL",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 0.4,
        "line-color": "rgba(110, 110, 110, 1)"
      }
    },
    {
      "id": "Piscina - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Piscina",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(115, 223, 255, 1)"
      }
    },
    {
      "id": "Piscina - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Piscina",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "DepositoHidrocarburo - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "DepositoHidrocarburo",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Situacion",
          "SUB"
        ]
      ],
      "paint": {
        "fill-color": "rgba(255, 190, 232, 1)"
      }
    },
    {
      "id": "DepositoHidrocarburo - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "DepositoHidrocarburo",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Situacion",
          "SUB"
        ]
      ],
      "paint": {
        "line-color": "rgba(110, 110, 110, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "ElementosConstruidos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ElementosConstruidos",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-width": 0.3,
        "line-color": "rgba(247, 116, 116, 1)"
      }
    },
    {
      "id": "Cerramientos - Muralla",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Cerramientos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "MUR"
        ]
      ],
      "paint": {
        "line-width": 0.3,
        "line-color": "rgba(137, 68, 101, 1)"
      }
    },
    {
      "id": "Cerramientos - Muro Valla Seto",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Cerramientos",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.3,
        "line-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "Cerramientos - Escollera",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Cerramientos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "ESC"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 0.3,
        "line-color": "rgba(247, 116, 116, 1)"
      }
    },
    {
      "id": "Cerramientos - Muro Contencion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Cerramientos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "MCO"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 0.3,
        "line-color": "rgba(247, 116, 116, 1)"
      }
    },
    {
      "id": "DepositoHidraulicos - Agua - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "DepositoHidraulicos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "AGU"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "DepositoHidraulicos - Generico - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "DepositoHidraulicos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "GEN"
        ]
      ],
      "paint": {
        "fill-color": "rgba(255, 235, 175, 1)"
      }
    },
    {
      "id": "DepositoHidraulicos  - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "DepositoHidraulicos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all"
      ],
      "paint": {
        "line-color": "rgba(110, 110, 110, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "AcumulacionResiduos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "AcumulacionResiduos",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Silo - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Silo",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Presa -  Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PresaP",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "Presa - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PresaL",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(136, 136, 136, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "InstalacionGestionResiduos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "InstalacionGestionResiduos",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "InstalacionMilitar",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "InstalacionMilitar",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "InstalacionesMineras",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "InstalacionesMineras",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "InstalacionHidrocarburos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "InstalacionHidrocarburos",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "InstalacionDeportiva",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "InstalacionDeportiva",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "ExplotacionMinera",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ExplotacionMinera",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Explanada - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Explanada",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Explanada - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Explanada",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-width": 0.4,
        "line-color": "rgba(178, 178, 178, 1)"
      }
    },
    {
      "id": "Camping",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Camping",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-width": 0.4,
        "line-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "AreaServicioDescanso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "AreaServicioDescanso",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Cementerio",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Cementerio",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-width": 0.4,
        "line-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "ObrasPublicasS - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "ObrasPublicasS",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "ObraPublicaS - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ObrasPublicasS",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Pista - 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CaminoSendaPista",
      "minzoom": 13,
      "maxzoom": 15,
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
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Pista - 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CaminoSendaPista",
      "minzoom": 15,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 1.4
      }
    },
    {
      "id": "Pista - 3",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CaminoSendaPista",
      "minzoom": 15,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Senda",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CaminoSendaPista",
      "minzoom": 15,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 0.5,
        "line-dasharray": [
          10,
          4
        ]
      }
    },
    {
      "id": "Camino - 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CaminoSendaPista",
      "minzoom": 13,
      "maxzoom": 15,
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
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.8,
        "line-dasharray": [
          10,
          4
        ]
      }
    },
    {
      "id": "Camino - 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CaminoSendaPista",
      "minzoom": 15,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 1.4,
        "line-dasharray": [
          10,
          4
        ]
      }
    },
    {
      "id": "Camino - 3",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CaminoSendaPista",
      "minzoom": 15,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(247, 247, 247, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "CarreterasS  - Poligono - Abandonada",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "CarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "CarreterasS  - Poligono - En Construccion",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "CarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "CarreterasS  - Poligono - En Uso",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "CarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "id": "CarreterasS - Linea - Abandonada",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(135, 135, 135, 1)",
        "line-dasharray": [
          4,
          4
        ],
        "line-width": 0.8
      }
    },
    {
      "id": "CarreterasS - Linea - Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-dasharray": [
          4,
          4
        ],
        "line-width": 0.8
      }
    },
    {
      "id": "CarreterasS - Linea - En uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.4,
        "line-color": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "id": "EnlaceCarreteraS  - Poligono - Abandonada",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "EnlaceCarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "EnlaceCarreteraS  - Poligono - En Construccion",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "EnlaceCarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "EnlaceCarreteraS  - Poligono - En Uso",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "EnlaceCarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "fill-color": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "id": "EnlaceCarreteraS - Linea - Abandonada",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "EnlaceCarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(135, 135, 135, 1)",
        "line-dasharray": [
          4,
          4
        ],
        "line-width": 0.8
      }
    },
    {
      "id": "EnlaceCarreteraS - Linea - Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "EnlaceCarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-dasharray": [
          4,
          4
        ],
        "line-width": 0.8
      }
    },
    {
      "id": "EnlaceCarreteraS - Linea - En uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "EnlaceCarreteraS",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.4,
        "line-color": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "id": "Peaje",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Peaje",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "id": "IsletaVial - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "IsletaVial",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Puente",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "Puente",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(178, 178, 178, 1)"
      }
    },
    {
      "id": "ViaUrbana",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ViaUrbana",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "Situacion",
          "SUB"
        ]
      ],
      "paint": {
        "line-color": "rgba(255, 85, 0, 1)"
      }
    },
    {
      "id": "Ferrocarril - Normal - Abandonado",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Ferrocarril",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.8,
        "line-color": "rgba(51, 51, 51, 1)",
        "line-dasharray": [
          4,
          8
        ]
      }
    },
    {
      "id": "Ferrocarril - Normal - En Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Ferrocarril",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.8,
        "line-color": "rgba(51, 51, 51, 1)",
        "line-dasharray": [
          4,
          4
        ]
      }
    },
    {
      "id": "Ferrocarril - Normal - Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Ferrocarril",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.8,
        "line-color": "rgba(51, 51, 51, 1)"
      }
    },
    {
      "id": "Ferrocarril - Alta Velocidad - Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Ferrocarril",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 1.4,
        "line-color": "rgba(51, 51, 51, 1)",
        "line-dasharray": [
          10,
          10
        ]
      }
    },
    {
      "id": "Ferrocarril - Alta Velocidad - Uso 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Ferrocarril",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 1.4,
        "line-color": "rgba(51, 51, 51, 1)"
      }
    },
    {
      "id": "Ferrocarril - Alta Velocidad - Uso 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Ferrocarril",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.8,
        "line-color": "rgba(255, 255, 255, 1)",
        "line-dasharray": [
          10,
          10
        ]
      }
    },
    {
      "id": "EdificacionSingularP",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "EdificacionSingularP",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "cuadrado",
        "icon-size": 0.2
      }
    },
    {
      "id": "OtrasViasferreas - Tranvia  Metro - En Construccion",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "OtrasViasferreas",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Estado",
          "CON"
        ]
      ],
      "paint": {
        "line-color": "rgba(76, 115, 0, 1)",
        "line-width": 0.8,
        "line-dasharray": [
          8,
          8
        ]
      }
    },
    {
      "id": "OtrasViasferreas - Tranvia  Metro - Subterraneo - Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "OtrasViasferreas",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(76, 115, 0, 1)",
        "line-width": 0.8,
        "line-dasharray": [
          4,
          4
        ]
      }
    },
    {
      "id": "OtrasViasferreas - Tranvia  Metro - Superficie - Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "OtrasViasferreas",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-color": "rgba(76, 115, 0, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "LineaComplementaria - Tunel",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaComplementaria",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "TUN"
        ]
      ],
      "paint": {
        "line-color": "rgba(115, 0, 0, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "LineaComplementaria - Puente",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaComplementaria",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "PUE"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "LineaComplementaria - Pasarela",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaComplementaria",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "PAS"
        ]
      ],
      "paint": {
        "line-color": "rgba(178, 178, 178, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "LineaComplementaria - Tajea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "LineaComplementaria",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "TAJ"
        ]
      ],
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "CarrilBici",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CarrilBici",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(56, 168, 0, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "Estacion",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "Estacion",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "cuadrado",
        "icon-size": 0.2
      }
    },
    {
      "id": "MurallaS - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "MurallaS",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "MurallaS - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "MurallaS",
      "paint": {
        "line-color": "rgba(137, 68, 101, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "MurallaL",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "MurallaL",
      "paint": {
        "line-color": "rgba(137, 68, 101, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "InstalacionEnergiaElectrica",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "InstalacionEnergiaElectrica",
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.4
      }
    },
    {
      "id": "CortaFuegosS",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CortafuegosS",
      "paint": {
        "line-color": "rgba(56, 168, 0, 1)",
        "line-width": 0.4,
        "line-dasharray": [
          4,
          2
        ]
      }
    },
    {
      "id": "CintaTransportadora",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "CintaTransportadora",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-width": 0.4
      }
    },
    {
      "id": "TransporteSuspendidoCable - Punto",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TransporteSuspendidoCable",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "symbol-placement": "line",
        "icon-image": "cuadrado",
        "icon-size": 0.14,
        "symbol-spacing": 10
      }
    },
    {
      "id": "TransporteSuspendidoCable - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "TransporteSuspendidoCable",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "line-width": 0.4
      }
    },
    {
      "id": "Tendido",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Tendido",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-width": 0.8,
        "line-dasharray": [
          10,
          4
        ]
      }
    },
    {
      "id": "ToreTendido",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TorreTendido",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "torre",
        "icon-size": 0.3
      }
    },
    {
      "id": "TorreTransporte",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TorreTransporte",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "torre",
        "icon-size": 0.3
      },
      "paint": {
        "icon-opacity": 1
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central otras",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "SCL"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_otras"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central biogas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "BIG"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_biogas"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central cogeneracion",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "COG"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_cogeneracion"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central Termica",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "TER"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_termica"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central Biomasa",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "BIO"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_biomasa"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central hidroelectrica",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "HID"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_hidroelectrica"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central combinada",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "COM"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_ciclo_combinado"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central eolica",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "EOL"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_eolica"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Central Solar",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "SOL"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "central_solar"
      }
    },
    {
      "id": "InfraestructurasEnergeticasTelecomunicacionPuntuales - Subestacion",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "InfraestructurasEnergeticasTelecomunicacionPuntuales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Energia",
          "NAP"
        ]
      ],
      "layout": {
        "icon-image": "subestacion",
        "icon-size": 0.6
      }
    },
    {
      "id": "Aerogenerador",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "Aerogenerador",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "aerogenerador",
        "icon-size": 0.8
      }
    },
    {
      "id": "Antenas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "Antenas",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "antena",
        "icon-size": 0.6
      }
    },
    {
      "id": "SeñalNavegacion",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "SeñalNavegacion",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "FAR"
        ]
      ],
      "layout": {
        "icon-image": "faro",
        "icon-size": 0.6
      }
    },
    {
      "id": "CuevasNaturales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "CuevasNaturales",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "cueva",
        "icon-size": 0.6,
        "icon-rotate": 90
      }
    },
    {
      "id": "CuevasArtificiales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "CuevasArtificiales",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "cueva",
        "icon-size": 0.6,
        "icon-rotate": 90
      }
    },
    {
      "id": "PuntosGeodesicos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "PuntosGeodesicos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "!=",
          "RedGeodesica",
          "NAP"
        ]
      ],
      "layout": {
        "icon-image": "vertice_geodesico",
        "icon-size": 0.5
      }
    },
    {
      "id": "PuntoCota",
      "type": "circle",
      "source": "mapa_andalucia",
      "source-layer": "PuntoCota",
      "minzoom": 13,
      "maxzoom": 17,
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
      "paint": {
        "circle-radius": 2
      }
    },
    {
      "id": "PuntoGNSS",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "PuntoGNSS",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "vertice_geodesico",
        "icon-size": 0.5
      }
    },
    {
      "id": "PuntoFluvial - Sumidero  Boca Hidrográfica",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "PuntoFluvial",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "icon-image": "sumidero",
        "icon-size": 0.6
      }
    },
    {
      "id": "PuntoFluvial - Cascada",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "PuntoFluvial",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "CAS"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "cascada"
      }
    },
    {
      "id": "PuntoFluvial - Sifon",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "PuntoFluvial",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "SIF"
        ]
      ],
      "layout": {
        "icon-size": 0.3,
        "icon-image": "cuadradoSifon"
      }
    },
    {
      "id": "Captacion",
      "type": "circle",
      "source": "mapa_andalucia",
      "source-layer": "Captacion",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "circle-color": "rgba(115, 223, 255, 1)",
        "circle-stroke-color": "rgba(0, 92, 230, 1)",
        "circle-stroke-width": 1,
        "circle-radius": 2
      }
    },
    {
      "id": "Surgencia",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "Surgencia",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "icon-image": "Surgencia",
        "icon-size": 0.4
      },
      "paint": {
        "icon-color": "rgba(0, 92, 230, 1)"
      }
    },
    {
      "id": "EspacioNaturalProtegido",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "EspacioNaturalProtegido",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-dasharray": [
          10,
          4
        ],
        "line-color": "rgba(56, 168, 0, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Cuadricula10",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Cuadricula10",
      "minzoom": 13,
      "maxzoom": 17,
      "paint": {
        "line-width": 0.8
      }
    },
    {
      "id": "Conduccion - Gaseoducto - Superficie ",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Conduccion",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(125, 125, 125, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Conduccion - Oleoducto - Superficie",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Conduccion",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(125, 125, 125, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Conduccion - Gaseoducto - Subterraneo ",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Conduccion",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-dasharray": [
          10,
          10
        ],
        "line-color": "rgba(125, 125, 125, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Conduccion - Oleoducto - Subterraneo",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "Conduccion",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-dasharray": [
          10,
          10
        ],
        "line-color": "rgba(125, 125, 125, 1)",
        "line-width": 0.8
      }
    },
    {
      "id": "Conduccion - Gaseoducto",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "Conduccion",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "GAS"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": "gaseoducto",
        "icon-size": 0.16,
        "symbol-spacing": 40
      }
    },
    {
      "id": "Conduccion - Oleoducto",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "Conduccion",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "Tipo",
          "OLE"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": "oleoducto",
        "icon-size": 0.16,
        "symbol-spacing": 40
      }
    },
    {
      "id": "AnotacionesCurvasMaestras",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesCurvasMaestras",
      "minzoom": 14,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "text-field": "{textstring}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 10,
        "icon-allow-overlap": true,
        "icon-anchor": "right",
        "text-anchor": "right",
        "text-justify": "right"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(158, 116, 61, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesPuntosAcotados",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesPuntosAcotados",
      "minzoom": 14,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesEspaciosNaturalesProtegidos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEspaciosNaturalesProtegidos",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{textstring}",
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "text-allow-overlap": true,
        "text-max-width": 200
      },
      "paint": {
        "text-color": "rgba(56, 168, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "AnotacionesMedioFisico - Medio fisico",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesMedioFicico",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
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
        }
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1.2,
        "text-color": "rgba(68, 68, 68, 1)"
      }
    },
    {
      "id": "AnotacionesMedioFisico - Terminos Municipales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesMedioFicico",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
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
        }
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1.2,
        "text-color": "rgba(68, 68, 68, 1)"
      }
    },
    {
      "id": "AnotacionesCuevas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesCuevas",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        }
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesEmbalsesLagunaMar",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEmbalsesLagunaMar",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
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
        }
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
        "text-color": "rgba(0, 92, 230, 1)"
      }
    },
    {
      "id": "AnotacionesFuentesManantiales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesFuentesManantiales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        }
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
        "text-color": "rgba(0, 92, 230, 1)"
      }
    },
    {
      "id": "AnotacionesCorrientesArtificiales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesCorrientesArtificiales",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
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
        "symbol-placement": "line",
        "symbol-spacing": 100
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
        "text-color": "rgba(0, 92, 230, 1)"
      }
    },
    {
      "id": "AnotacionesRedHidrografica",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesRedHidrografica",
      "minzoom": 13,
      "maxzoom": 17,
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
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
        "symbol-placement": "line",
        "symbol-spacing": 100
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
        "text-color": "rgba(0, 92, 230, 1)"
      }
    },
    {
      "id": "AnotacionesVerticesGeodesicos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesVerticesGeodesicos",
      "minzoom": 14,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesCarreteras",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesCarreteras",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "line",
        "symbol-spacing": 100
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "AnotacionesFerrocarril",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesFerrocarril",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "line",
        "symbol-spacing": 100
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "AnotacionesEntidadesPoblacion - Cabecera Municipal",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEntidadesPoblacion",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesEntidadesPoblacion",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEntidadesPoblacion",
      "minzoom": 13,
      "maxzoom": 17,
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
      "layout": {
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesParquesJardines",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesParquesJardines",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesEdificioSingularS",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEdificioSingularS",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesEdificioSingularP",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEdificioSingularP",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesInstalacionesSanitarias",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesInstalacionesSanitarias",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesInstalacionesEducativas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesInstalacionesEducativas",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesInstalacionesDeportivas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesInstalacionesDeportivas",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesInstalacionesMineras",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesInstalacionesMineras",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesInstalacionesMilitares",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesInstalacionesMilitares",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesInstalacionesHidrocarburo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesInstalacionesHidrocarburo",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesInstalacionesEnergiaElectrica",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesInstalacionesEnergiaElectrica",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesParqueAtracciones",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesParqueAtracciones",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesCementerio",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesCementerio",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesCamping",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesCementerio",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesCampoGolf",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesCampoGolf",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesEstacionServicio",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEstacionServicio",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesEstacionTransportes",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesEstacionTransportes",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesPuerto",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesPuerto",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesAeropuertoAerodromo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesAeropuertoAerodromo",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesPiscifactoria",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesPiscifactoria",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesRecientosIndustriales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesRecientosIndustriales",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "AnotacionesYacimientoArqueologico",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "AnotacionesYacimientoArqueologico",
      "minzoom": 13,
      "maxzoom": 17,
      "filter": [
        "all",
        [
          "==",
          "status",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Curva Nivel - Maestra",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cur_niv_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-color": "rgba(217, 201, 179, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Curva Nivel - Batimetrica Maestra",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cur_niv_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-color": "rgba(0, 112, 255, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Curva Nivel - Batimetrica No Maestra",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cur_niv_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-color": "rgba(0, 112, 255, 1)",
        "line-width": 0.3
      }
    },
    {
      "id": "Explotación Minera",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "exp_min_s_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Entidad de Población",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "ent_pob_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "!=",
          "tipo_0502",
          "02"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "fill-color": "rgba(247, 168, 168, 1)"
      }
    },
    {
      "id": "Aeropuerto - Recinto",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "zon_ater_s_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)"
      }
    },
    {
      "id": "Aeropuerto - Pista",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "pis_ater_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "fill-color": "rgba(242, 87, 87, 1)"
      }
    },
    {
      "id": "Agregación de Edificios - Edificios en Uso",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "agr_edi_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0504",
          "02"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)",
        "fill-outline-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "Agregación de Edificios - Edificios en Ruinas",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "agr_edi_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0504",
          "04"
        ]
      ],
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)",
        "fill-outline-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "Corriente Natural - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "rio_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "persi_0302",
          "01"
        ]
      ],
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Lamina de Agua - Humedal",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "humeda_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "fill-color": "rgba(199, 232, 250, 1)",
        "fill-translate-anchor": "map",
        "fill-pattern": "marismas"
      }
    },
    {
      "id": "Lamina de Agua - Embalses",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "embalse_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Lamina de Agua -  Laguna",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "laguna_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Lamina de Agua -  Salinas",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "salina_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "fill-color": "rgba(201, 245, 255, 1)"
      }
    },
    {
      "id": "Corriente Natural - Lineal",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "rio_line",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Corriente Artificial - Lineal",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cau_art_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "situa_0305",
          "02"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Corriente Artificial - Simbolo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "cau_art_line",
      "minzoom": 12,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "situa_0305",
          "02"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 40,
        "icon-image": "flechaCorrienteArtificial",
        "icon-size": 0.4
      }
    },
    {
      "id": "Corriente Artificial - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "cau_art_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "situa_0305",
          "02"
        ]
      ],
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Almacenamiento de Agua",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "alm_agu_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "fill-color": "rgba(115, 223, 255, 1)",
        "fill-opacity": 1
      }
    },
    {
      "id": "Instalaciones Recreativas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ins_rec_s_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 0.3
      }
    },
    {
      "id": "Zonas Verdes",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "zon_ver_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0561",
          "01"
        ]
      ],
      "paint": {
        "fill-color": "rgba(230, 252, 199, 1)"
      }
    },
    {
      "id": "Edificios - en Uso - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "edific_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "estad_0507",
          "01"
        ]
      ],
      "paint": {
        "fill-color": "rgba(255, 235, 207, 1)"
      }
    },
    {
      "id": "Edificios - en Ruinas - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "edific_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "estad_0507",
          "03"
        ]
      ],
      "paint": {
        "fill-color": "rgba(255, 235, 207, 1)"
      }
    },
    {
      "id": "Edificios en Uso - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "edific_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "estad_0507",
          "01"
        ]
      ],
      "paint": {
        "line-width": 0.2,
        "line-color": "rgba(242, 87, 87, 1)"
      }
    },
    {
      "id": "Edificios en Ruinas - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "edific_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "estad_0507",
          "03"
        ]
      ],
      "paint": {
        "line-width": 0.2,
        "line-color": "rgba(130, 130, 130, 1)",
        "line-dasharray": [
          1,
          1
        ]
      }
    },
    {
      "id": "Estación Ferrocarril",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "est_fc_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)"
      }
    },
    {
      "id": "Instalaciones Deportiva - Campos de Golf",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "ins_dep_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0564",
          "04"
        ]
      ],
      "paint": {
        "fill-color": "rgba(230, 252, 199, 1)"
      }
    },
    {
      "id": "Instalaciones Deportivas - Genericas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ins_dep_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "!=",
          "tipo_0564",
          "04"
        ]
      ],
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.1
      }
    },
    {
      "id": "Instalaciones Industriales - Poligonos",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "ins_ind_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Instalaciones Industriales - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "ins_ind_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(130, 130, 130, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Cementerios",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cement_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "Invernaderos - Poligono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "cul_int_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0407",
          "01"
        ]
      ],
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Invernaderos - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cul_int_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0407",
          "01"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 166, 57, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Almacenamiento Residuos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "alm_res_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)"
      }
    },
    {
      "id": "Tratamiento Aguas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "con_hid_s_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.1
      }
    },
    {
      "id": "Depósito de Agua - Polígono",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "dep_agu_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "situa_0331",
          "01"
        ]
      ],
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Depósito de Agua - Linea",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "dep_agu_polygon",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "situa_0331",
          "03"
        ]
      ],
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Carreteras - Abandonadas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "carretera_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-color": "rgba(135, 135, 135, 1)",
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Carreteras - En Construcción",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "carretera_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-dasharray": [
          5,
          2
        ]
      }
    },
    {
      "id": "Carreteras - En Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "carretera_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "id": "Carreteras  Urbanas - Abandonadas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "urbana_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "estadofis",
          "03"
        ]
      ],
      "paint": {
        "line-color": "rgba(135, 135, 135, 1)",
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Carreteras  Urbanas - En Construcción",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "urbana_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "estadofis",
          "02"
        ]
      ],
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Carreteras  Urbanas - En Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "urbana_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "estadofis",
          "01"
        ]
      ],
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)"
      }
    },
    {
      "id": "Cerramientos - Muro de Contención",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cerram_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0528",
          "01"
        ]
      ],
      "paint": {
        "line-color": "rgba(247, 116, 116, 1)",
        "line-width": 0.3
      }
    },
    {
      "id": "Cerramientos - Tapia Muro Alambrada",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "cerram_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "!=",
          "tipo_0528",
          1
        ]
      ],
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.3
      }
    },
    {
      "id": "Caminos",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "camino_line",
      "minzoom": 12,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "!=",
          "situa_0623",
          "01"
        ]
      ],
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Senda 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "senda_line",
      "minzoom": 12,
      "maxzoom": 13,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 0.3,
        "line-color": "rgba(0, 0, 0, 1)",
        "line-dasharray": [
          10,
          10
        ]
      }
    },
    {
      "id": "Itinerario - Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "itiner_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.3,
        "line-offset": 0.5
      }
    },
    {
      "id": "Itinerario - Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "itiner_line",
      "minzoom": 11,
      "maxzoom": 13,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(104, 104, 104, 1)",
        "line-width": 0.3,
        "line-offset": -0.5
      }
    },
    {
      "id": "Ferrocarril - Abandonado",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "fc_conv_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-dasharray": [
          10,
          4
        ],
        "line-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Ferrocarril - En  Construcción",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "fc_conv_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-dasharray": [
          10,
          10
        ],
        "line-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Ferrocarril - En  Uso",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "fc_conv_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Ferrocarril - Alta Velocidad - En Uso Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "fc_alt_vel_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-width": 1.5,
        "line-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Ferrocarril - Alta Velocidad - En Uso Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "fc_alt_vel_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-width": 0.7,
        "line-color": "rgba(255, 255, 255, 1)",
        "line-dasharray": [
          10,
          10
        ]
      }
    },
    {
      "id": "Ferrocarril - Alta Velocidad - En Construcción Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "fc_alt_vel_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-width": 1.5,
        "line-color": "rgba(0, 0, 0, 1)",
        "line-dasharray": [
          10,
          10
        ]
      }
    },
    {
      "id": "Ferrocarril - Alta Velocidad - En Construcción Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "fc_alt_vel_line",
      "minzoom": 11,
      "maxzoom": 13,
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
      "paint": {
        "line-width": 0.7,
        "line-color": "rgba(255, 255, 255, 1)",
        "line-dasharray": [
          10,
          10
        ]
      }
    },
    {
      "id": "Conducción Combustible - Oleoducto",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "con_comb_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0701",
          "01"
        ]
      ],
      "paint": {
        "line-color": "rgba(52, 52, 52, 1)"
      }
    },
    {
      "id": "Conducción Combustible - Gaseoducto",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "con_comb_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0701",
          "02"
        ]
      ],
      "paint": {
        "line-color": "rgba(52, 52, 52, 1)"
      }
    },
    {
      "id": "Conducción Combustible  - Oleoducto  Simbolo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "con_comb_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0701",
          "01"
        ]
      ],
      "layout": {
        "icon-image": "cuadrado",
        "symbol-placement": "line",
        "symbol-spacing": 10,
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
      }
    },
    {
      "id": "Conducción Combustible  - Gaseoducto Simbolo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "con_comb_line",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0701",
          "02"
        ]
      ],
      "layout": {
        "icon-image": "circulo",
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
        "symbol-placement": "line",
        "symbol-spacing": 10
      }
    },
    {
      "id": "Linea Eléctrica - 220 Kv",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "lin_elec_line",
      "filter": [
        "all",
        [
          "==",
          "tensi_0710",
          "03"
        ]
      ],
      "paint": {
        "line-color": "rgba(204, 153, 153, 1)"
      }
    },
    {
      "id": "Linea Eléctrica - 400 Kv",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "lin_elec_line",
      "filter": [
        "all",
        [
          "==",
          "tensi_0710",
          "04"
        ]
      ],
      "paint": {
        "line-color": "rgba(204, 153, 153, 1)"
      }
    },
    {
      "id": "Toponimia - Comarcas Grandes y Medianas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_sin_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0801",
          "080111"
        ]
      ],
      "layout": {
        "text-field": "{etiqueta}",
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
        "symbol-spacing": 500,
        "text-max-width": 24
      },
      "paint": {
        "text-color": "rgba(77, 26, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Comarcas Menores y Grandes Parajes",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_sin_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0801",
          "080116"
        ]
      ],
      "layout": {
        "text-max-width": 100,
        "text-field": "{etiqueta}",
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
        "symbol-spacing": 500
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Mares y Ocenanos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_sin_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0801",
          "080322"
        ]
      ],
      "layout": {
        "text-max-width": 100,
        "text-field": "{etiqueta}",
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
        "symbol-spacing": 500
      },
      "paint": {
        "text-color": "rgba(0, 94, 224, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Estrechos Golfos Bahias",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_sin_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0801",
          "080325"
        ]
      ],
      "layout": {
        "text-max-width": 100,
        "text-field": "{etiqueta}",
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
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(0, 94, 224, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Salientes Costeros",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_sin_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0801",
          "080328"
        ]
      ],
      "layout": {
        "text-max-width": 100,
        "text-field": "{etiqueta}",
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
        "symbol-spacing": 280
      },
      "paint": {
        "text-color": "rgba(0, 94, 224, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Montañas Principales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_pos_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0802",
          "080205"
        ]
      ],
      "layout": {
        "text-max-width": 100,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{etiqueta}",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(138, 112, 69, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Montañas  y  Picos Medianos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_pos_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0802",
          "080206"
        ]
      ],
      "layout": {
        "text-max-width": 100,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{etiqueta}",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(138, 112, 69, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Picos y Collados",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_pos_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "tipo_0802",
          "080209"
        ]
      ],
      "layout": {
        "text-max-width": 100,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{etiqueta}",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(138, 112, 69, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Capital de Provincia",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_pos_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
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
      "layout": {
        "text-max-width": 100,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{etiqueta}",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Municipos entre 10 y 50.000 hab",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_pos_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
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
      "layout": {
        "text-max-width": 100,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{etiqueta}",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Municipos entre 05 y 10.000 hab",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_pos_geo_point",
      "minzoom": 11,
      "maxzoom": 13,
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
      "layout": {
        "text-max-width": 100,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{etiqueta}",
        "symbol-spacing": 300
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Sierras",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "lin_rot_line",
      "layout": {
        "text-field": "{etiqueta}",
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-allow-overlap": true,
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
        ]
      },
      "paint": {
        "text-color": "rgba(138, 112, 69, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Playas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_playas",
      "minzoom": 11,
      "maxzoom": 13,
      "layout": {
        "symbol-placement": "line",
        "text-field": "{etiqueta}",
        "text-size": 10,
        "symbol-spacing": 200
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)"
      }
    },
    {
      "id": "Toponimia - Rios Jerarquia 1",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_rios",
      "minzoom": 11,
      "maxzoom": 13,
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
      "layout": {
        "symbol-placement": "line",
        "text-field": "{textstring}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 14,
        "symbol-spacing": 400
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)",
        "text-halo-width": 0.8,
        "text-halo-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Toponimia - Rios Jerarquia 2",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "top_rios",
      "minzoom": 11,
      "maxzoom": 13,
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
      "layout": {
        "symbol-placement": "line",
        "text-field": "{textstring}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 12,
        "text-max-width": 100,
        "symbol-spacing": 400
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)",
        "text-halo-width": 0.8,
        "text-halo-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Toponimia - Embalses",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "embalse_polygon",
      "minzoom": 11,
      "maxzoom": 13,
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
      "layout": {
        "text-field": "{etiqueta}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 10,
        "symbol-spacing": 1000,
        "text-max-width": 5
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.8
      }
    },
    {
      "id": "Toponimia - Humedales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "humeda_polygon",
      "minzoom": 12,
      "maxzoom": 13,
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{etiqueta}",
        "symbol-spacing": 300,
        "text-size": 10,
        "text-max-width": 8
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)",
        "text-halo-width": 0.8,
        "text-halo-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Toponimia - Entidades Población 1",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "ent_pob_point",
      "minzoom": 12,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "!=",
          "cabecera",
          1
        ]
      ],
      "layout": {
        "text-field": "{etiqueta}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 10,
        "symbol-spacing": 20
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-width": 0.8,
        "text-halo-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Toponimia - Entidades Población",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "ent_pob_point",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "cabecera",
          1
        ]
      ],
      "layout": {
        "text-field": "{etiqueta}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 12,
        "symbol-spacing": 20
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-width": 0.8,
        "text-halo-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "Poblamiento - Cabecera Municipal",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P1"
        ]
      ],
      "paint": {
        "fill-color": "rgba(242, 125, 125, 1)"
      }
    },
    {
      "id": "Poblamiento-Núcleo Secundario",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P2"
        ]
      ],
      "paint": {
        "fill-color": "rgba(242, 125, 125, 1)",
        "fill-outline-color": "rgba(242, 125, 125, 1)"
      }
    },
    {
      "id": "Poblamiento - Diseminado, urbanización",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P3"
        ]
      ],
      "paint": {
        "fill-color": "rgba(242, 125, 125, 1)"
      }
    },
    {
      "id": "Poblamiento - Campo de Golf",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P4"
        ]
      ],
      "paint": {
        "fill-color": "rgba(230, 252, 199, 1)"
      }
    },
    {
      "id": "Poblamiento - Aeropuerto Fill",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P7"
        ]
      ],
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Poblamiento - Aeropuerto Stroke",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P7"
        ]
      ],
      "paint": {
        "line-color": "rgba(130, 130, 130, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Poblamiento - Zona Militar Fill",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P6"
        ]
      ],
      "paint": {
        "fill-color": "rgba(225, 225, 225, 1)"
      }
    },
    {
      "id": "Poblamiento - Zona Militar Stroke",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PB1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P6"
        ]
      ],
      "paint": {
        "line-color": "rgba(130, 130, 130, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Puertos",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "IT4_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I21"
        ]
      ],
      "paint": {
        "fill-color": "rgba(235, 235, 235, 1)"
      }
    },
    {
      "id": "Aeropuertos",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "IT4_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I20"
        ]
      ],
      "paint": {
        "fill-color": "rgba(242, 87, 87, 1)"
      }
    },
    {
      "id": "Lámina de Agua - Marismas 1",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "HS2_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H9"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(199, 232, 250, 1)"
      }
    },
    {
      "id": "Lámina de Agua - Marismas 2",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "HS2_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H9"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(199, 232, 250, 1)",
        "fill-translate-anchor": "map",
        "fill-pattern": "marismas"
      }
    },
    {
      "id": "Lámina de Agua - Fluvial o Laguna",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "HS2_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H8"
        ]
      ],
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Lámina de Agua - Embalses",
      "type": "fill",
      "source": "mapa_andalucia",
      "source-layer": "HS2_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H7"
        ]
      ],
      "paint": {
        "fill-color": "rgba(0, 197, 255, 1)"
      }
    },
    {
      "id": "Red Hidrográfica- Río",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "HS1_400",
      "minzoom": 6,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H1"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-width": 0.3
      }
    },
    {
      "id": "Red Hidrográfica - Arroyo",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "HS1_400",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H2"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Red Hidrográfica - Caño, rambla",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "HS1_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H3"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 197, 255, 1)",
        "line-width": 0.2,
        "line-dasharray": [
          10,
          10
        ]
      }
    },
    {
      "id": "Red Hidrográfica - Acequia",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "HS1_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H4"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(128, 222, 255, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Red Hidrográfica - Canal",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "HS1_400",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H5"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(115, 178, 255, 1)",
        "line-width": 0.3
      }
    },
    {
      "id": "Red Hidrográfica - Canalización Salinas",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "HS1_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "H6"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(128, 222, 255, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Divisiones Administrativas - Frontera internacional",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "DA1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "D1"
        ]
      ],
      "paint": {
        "line-dasharray": [
          5,
          5
        ]
      }
    },
    {
      "id": "Divisiones Administrativas - Frontera autonómica",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "DA1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "D2"
        ]
      ],
      "paint": {
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Divisiones Administrativas - Límite provincial",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "DA1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "D3"
        ]
      ],
      "paint": {
        "line-dasharray": [
          2,
          1
        ]
      }
    },
    {
      "id": "Divisiones Administrativas - Línea de costa",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "DA1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "D4"
        ]
      ],
      "paint": {
        "line-color": "rgba(172, 144, 119, 1)"
      }
    },
    {
      "id": "Divisiones Administrativas - Límite del mar territorial",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "DA1_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "D5"
        ]
      ],
      "paint": {
        "line-color": "rgba(28, 0, 135, 1)",
        "line-dasharray": [
          2,
          1
        ]
      }
    },
    {
      "id": "Espacios Naturales Protegidos Zoom 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PB2_400",
      "minzoom": 5,
      "maxzoom": 10,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(25, 102, 0, 1)",
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Espacios Naturales Protegidos Zoom 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PB2_400",
      "minzoom": 9,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(25, 102, 0, 1)",
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Espacios Naturales Protegidos Zoom 3",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "PB2_400",
      "minzoom": 11,
      "maxzoom": 11,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(25, 102, 0, 1)",
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "Red ferroviaria, maritima y telecomunicaciones - Línea marítima de pasajeros",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT2_400",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I11"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 92, 230, 1)",
        "line-dasharray": [
          10,
          5
        ]
      }
    },
    {
      "id": "Red ferroviaria, maritima y telecomunicaciones - Línea de alta velocidad",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT2_400",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I5"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 1.4
      }
    },
    {
      "id": "Red ferroviaria, maritima y telecomunicaciones - Línea de alta velocidad en Construcción",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT2_400",
      "minzoom": 10,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I6"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-dasharray": [
          10,
          5
        ],
        "line-width": 1.4
      }
    },
    {
      "id": "Red ferroviaria, maritima y telecomunicaciones - Vía Convencional",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT2_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I7"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Red ferroviaria, maritima y telecomunicaciones - Vía Convencional en Construcción",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT2_400",
      "minzoom": 10,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I8"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-dasharray": [
          10,
          5
        ],
        "line-width": 0.5
      }
    },
    {
      "id": "Red Viaria - Autopista o autovía, En uso Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 5,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-width": 1.5
      }
    },
    {
      "id": "Red Viaria - Autopista o autovía, En uso Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 5,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-width": 0.7
      }
    },
    {
      "id": "Red Viaria - Autopista o autovía, En construccion Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 1.5
      }
    },
    {
      "id": "Red Viaria - Autopista o autovía, En construccion Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 0.7
      }
    },
    {
      "id": "Red Viaria - Resto de Red Básica, En uso Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 6,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-width": 1
      }
    },
    {
      "id": "Red Viaria - Resto de Red Básica, En uso Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 6,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-width": 0.3
      }
    },
    {
      "id": "Red Viaria - Resto de Red Básica, En construccion Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 1
      }
    },
    {
      "id": "Red Viaria - Resto de Red Básica, En construccion Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 0.3
      }
    },
    {
      "id": "Red Viaria - Red Intercomarcal, En uso Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 7,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-width": 0.7
      }
    },
    {
      "id": "Red Viaria - Red Intercomarcal, En uso Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 7,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Red Viaria - Red Intercomarcal, En construccion Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 0.7
      }
    },
    {
      "id": "Red Viaria - Red Intercomarcal, En construccion Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 0.2
      }
    },
    {
      "id": "Red Viaria - Resto de la Red, En uso Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-width": 0.7
      }
    },
    {
      "id": "Red Viaria - Resto de la Red, En uso Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-width": 0.2
      }
    },
    {
      "id": "Red Viaria - Resto de la Red, En construccion Linea 1",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 0, 0, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 0.7
      }
    },
    {
      "id": "Red Viaria - Resto de la Red, En construccion Linea 2",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IT1_400",
      "minzoom": 8,
      "maxzoom": 11,
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
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 209, 209, 1)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 0.2
      }
    },
    {
      "id": "Redes Energéticas - Red eléctrica 220 Kv",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IE1_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "IE1"
        ]
      ],
      "paint": {
        "line-color": "rgba(204, 153, 153, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Redes Energéticas - Red eléctrica 400 Kv",
      "type": "line",
      "source": "mapa_andalucia",
      "source-layer": "IE1_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "IE2"
        ]
      ],
      "paint": {
        "line-color": "rgba(204, 153, 153, 1)",
        "line-width": 0.5
      }
    },
    {
      "id": "Infraestructuras Energéticas - Minas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "IE2_400",
      "minzoom": 9,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "IE8"
        ]
      ],
      "layout": {
        "icon-image": "mina",
        "icon-rotation-alignment": "map",
        "icon-size": 0.5,
        "icon-allow-overlap": true
      }
    },
    {
      "id": "Infraestructuras Transporte - Faro",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "IT3_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I17"
        ]
      ],
      "layout": {
        "icon-image": "faro",
        "icon-rotation-alignment": "map",
        "icon-pitch-alignment": "map",
        "icon-size": 0.6,
        "icon-allow-overlap": true
      }
    },
    {
      "id": "Infraestructuras Transporte - Aeropuerto nacional o internacional",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "IT3_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I13"
        ]
      ],
      "layout": {
        "icon-rotation-alignment": "map",
        "icon-pitch-alignment": "map",
        "icon-image": "aeropuerto",
        "icon-size": 0.6,
        "icon-allow-overlap": true
      }
    },
    {
      "id": "Infraestructuras Transporte - Otros Aeropuerto",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "IT3_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I14"
        ]
      ],
      "layout": {
        "icon-rotation-alignment": "map",
        "icon-pitch-alignment": "map",
        "icon-image": "otros_aeropuerto",
        "icon-size": 0.4,
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-halo-width": 0.3,
        "icon-halo-color": "rgba(255, 255, 255, 1)",
        "icon-color": "rgba(144, 137, 137, 1)"
      }
    },
    {
      "id": "Infraestructuras Transporte - Puerto de Interés General del Estado",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "IT3_400",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I15"
        ]
      ],
      "layout": {
        "icon-rotation-alignment": "map",
        "icon-pitch-alignment": "map",
        "icon-image": "puerto",
        "icon-size": 0.6,
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-halo-width": 0.3,
        "icon-halo-color": "rgba(255, 255, 255, 1)",
        "icon-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Infraestructuras Transporte - Puerto de gestión autónoma",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "IT3_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "I16"
        ]
      ],
      "layout": {
        "icon-rotation-alignment": "map",
        "icon-pitch-alignment": "map",
        "icon-image": "otros_puerto",
        "icon-size": 0.4,
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-halo-width": 0.3,
        "icon-halo-color": "rgba(255, 255, 255, 1)",
        "icon-color": "rgba(144, 137, 137, 1)"
      }
    },
    {
      "id": "Campos de Golf",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "PB3_400",
      "minzoom": 10,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P17"
        ]
      ],
      "layout": {
        "icon-size": 0.6,
        "icon-image": "campo_golf",
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-halo-width": 0.3,
        "icon-halo-color": "rgba(255, 255, 255, 1)",
        "icon-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Hitos Interes Cultura",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "PB3_400",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "cod_ent",
          "P16"
        ]
      ],
      "layout": {
        "icon-image": "hitos_cultural",
        "icon-size": 0.4
      },
      "paint": {
        "icon-halo-width": 0.3,
        "icon-halo-color": "rgba(255, 255, 255, 1)",
        "icon-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Cotas Altimétricas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "RL1_400",
      "minzoom": 9,
      "maxzoom": 11,
      "layout": {
        "icon-image": "triangulo",
        "icon-size": 0.2,
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-halo-width": 0.3,
        "icon-halo-color": "rgba(255, 255, 255, 1)",
        "icon-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "Toponimia Litoral - Límite del mar territorial",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP9_400_PUNTOS",
      "minzoom": 6,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{textstring}",
        "symbol-placement": "point",
        "symbol-avoid-edges": false,
        "text-allow-overlap": true,
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
        "text-ignore-placement": true,
        "text-justify": "center",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "symbol-spacing": 2,
        "text-line-height": 1,
        "text-max-width": 1000,
        "text-letter-spacing": 1
      },
      "paint": {
        "text-color": "rgba(28, 0, 135, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia Litoral - Mares y océanos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP9_400_PUNTOS",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          1
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "point",
        "symbol-avoid-edges": false,
        "text-allow-overlap": true,
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
        "text-ignore-placement": true,
        "text-justify": "center",
        "text-line-height": 1,
        "text-padding": 2,
        "text-max-width": 1000,
        "text-letter-spacing": 0
      },
      "paint": {
        "text-color": "rgba(0, 94, 224, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia Litoral - Otros",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP9_400_PUNTOS",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          2
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "point",
        "symbol-avoid-edges": false,
        "text-allow-overlap": true,
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
        "text-ignore-placement": true,
        "text-justify": "center",
        "text-letter-spacing": 0,
        "text-max-width": 500
      },
      "paint": {
        "text-color": "rgba(0, 94, 224, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia Litoral - Bancos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP9_400_PUNTOS",
      "minzoom": 10,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          4
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "point",
        "symbol-avoid-edges": false,
        "text-allow-overlap": true,
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
        "text-ignore-placement": true,
        "text-justify": "center",
        "text-max-width": 500,
        "text-letter-spacing": 0
      },
      "paint": {
        "text-color": "rgba(0, 94, 224, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia Minas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP11_400_PUNTOS",
      "minzoom": 9,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          0
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "point",
        "symbol-avoid-edges": false,
        "text-allow-overlap": true,
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
        "text-ignore-placement": true,
        "text-justify": "center",
        "text-max-width": 500,
        "text-letter-spacing": 0
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia Cotas Altimétricas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP2_400_PUNTOS",
      "minzoom": 9,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          2
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "point",
        "symbol-avoid-edges": false,
        "text-allow-overlap": true,
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
        "text-ignore-placement": true,
        "text-justify": "center",
        "text-max-width": 500,
        "text-letter-spacing": 0
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia - Parque Nacional, Parque Natural",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP6_400_PUNTOS",
      "minzoom": 9,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          0
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-justify": "center",
        "text-max-width": 10,
        "text-letter-spacing": 0,
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
        }
      },
      "paint": {
        "text-color": "rgba(38, 115, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Paraje Natural",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP6_400_PUNTOS",
      "minzoom": 10,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          1
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
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
        "text-max-width": 500
      },
      "paint": {
        "text-color": "rgba(38, 115, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Reserva natural, Monumento Natural, Parque Periurbano, otros",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP6_400_PUNTOS",
      "minzoom": 11,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          2
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-max-width": 500
      },
      "paint": {
        "text-color": "rgba(38, 115, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Lámina de Agua",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP5_400_PUNTOS",
      "minzoom": 9,
      "maxzoom": 11,
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
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
        "text-max-width": 150
      },
      "paint": {
        "text-color": "rgba(0, 94, 224, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Comarcas",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP3_400_PUNTOS",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          0
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-max-width": 20
      },
      "paint": {
        "text-color": "rgba(77, 26, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia Infraestructuras - Red transporte marítimo",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP10_400_LINEAS",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          3
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 10,
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "line"
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)",
        "text-halo-color": "rgba(255,255,255,1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia Infraestructuras - Red logística",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP10_400_LINEAS",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "symbolid",
          1
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 8,
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "line"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255,255,255,1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia Infraestructuras - Centro de Transportes",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP10_400_LINEAS",
      "minzoom": 5,
      "maxzoom": 11,
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
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 8,
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "symbol-placement": "line"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255,255,255,1)",
        "text-halo-width": 0.3
      }
    },
    {
      "id": "Toponimia - Red Hidrográfica - Ríos principales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP4_400_LINEAS",
      "minzoom": 5,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "fontsize",
          8
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 12,
        "text-ignore-placement": true,
        "text-allow-overlap": true,
        "text-field": "{textstring}"
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)",
        "text-halo-width": 0.5,
        "text-halo-color": "rgba(255,255,255,1)"
      }
    },
    {
      "id": "Toponimia - Red Hidrográfica - Ríos",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP4_400_LINEAS",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "fontsize",
          5
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 10,
        "text-ignore-placement": true,
        "text-allow-overlap": true,
        "text-field": "{textstring}"
      },
      "paint": {
        "text-color": "rgba(0, 92, 230, 1)",
        "text-halo-width": 0.5,
        "text-halo-color": "rgba(255,255,255,1)"
      }
    },
    {
      "id": "Toponimia Sierras Principales",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP1_400_LINEAS",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "fontsize",
          11.98
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{textstring}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 14,
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "symbol-spacing": 4000
      },
      "paint": {
        "text-color": "rgba(138, 112, 69, 1)",
        "text-halo-color": "rgba(255,255,255,1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia Sierras",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP1_400_LINEAS",
      "minzoom": 8,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "!=",
          "fontsize",
          11.98
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{textstring}",
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": 12,
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "symbol-spacing": 200
      },
      "paint": {
        "text-color": "rgba(138, 112, 69, 1)",
        "text-halo-color": "rgba(255,255,255,1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Poblamiento - Entre 15000 - 50000 hab.",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP7_400_PUNTOS",
      "minzoom": 9,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "annotation",
          1
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
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
        "text-max-width": 150
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Poblamiento - Entre 5000 - 15000 hab.",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP7_400_PUNTOS",
      "minzoom": 9,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "annotation",
          2
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-max-width": 150
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Poblamiento - Entre 1000 - 5000 hab.",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP7_400_PUNTOS",
      "minzoom": 11,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "annotation",
          5
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "text-size": 8,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-max-width": 150
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Poblamiento - Menores de 1000 hab.",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP7_400_PUNTOS",
      "minzoom": 12,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "annotation",
          7
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "text-size": 7,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-max-width": 150
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Poblamiento - Entre 50000 - 100000 hab.",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP7_400_PUNTOS",
      "minzoom": 6,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "annotation",
          3
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
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
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "text-max-width": 150
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "Toponimia - Poblamiento - Mas de 100.000",
      "type": "symbol",
      "source": "mapa_andalucia",
      "source-layer": "TP7_400_PUNTOS",
      "minzoom": 6,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "annotation",
          4
        ]
      ],
      "layout": {
        "text-field": "{textstring}",
        "symbol-spacing": 2,
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "symbol-avoid-edges": false,
        "text-max-width": 150,
        "text-letter-spacing": 0,
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
        "symbol-placement": "point"
      },
      "paint": {
        "text-color": "rgba(68, 68, 68, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5
      }
    }
  ],
  "id": "Mapa_Andalucia",
  "owner": "Instituto de Estadísitca y Cartografía. Junta de Andalucia"
}