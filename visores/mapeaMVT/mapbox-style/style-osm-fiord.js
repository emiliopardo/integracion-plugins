let planet_osm_fiord = {
  "version": 8,
  "name": "Planet OSM Fiord Color",
  "metadata": {
    "mapbox:autocomposite": false,
    "mapbox:groups": {
      "101da9f13b64a08fa4b6ac1168e89e5f": {
        "collapsed": true,
        "name": "Places"
      },
      "a14c9607bc7954ba1df7205bf660433f": {
        "collapsed": true,
        "name": "Boundaries"
      },
      "b6371a3f2f5a9932464fa3867530a2e5": {
        "collapsed": true,
        "name": "Transportation"
      }
    },
    "mapbox:type": "template",
    "openmaptiles:version": "3.x"
  },
  "center": [
    -4.9498878,
    37.302438
  ],
  "zoom": 7,
  "bearing": 0,
  "pitch": 0,
  "sources": {
    "planet_osm": {
      "type": "vector",
      "url": "mbtiles://{planet_osm}"
    }
  },
  "sprite": "osm-fiord",
  "glyphs": "{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#45516E"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "water",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": false,
        "fill-color": "#38435C"
      }
    },
    {
      "id": "landcover_ice_shelf",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landcover",
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "subclass",
          "ice_shelf"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(232, 33%, 34%)",
        "fill-opacity": 0.4
      }
    },
    {
      "id": "landuse_residential",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landuse",
      "maxzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "subclass",
          "residential"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgb(234, 234, 230)",
        "fill-opacity": {
          "base": 0.6,
          "stops": [
            [
              8,
              0.8
            ],
            [
              9,
              0.6
            ]
          ]
        }
      }
    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landcover",
      "minzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "class",
          "wood"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsla(232, 18%, 30%, 0.57)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              9,
              0
            ],
            [
              12,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "park",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "park",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(204, 17%, 35%)",
        "fill-opacity": 0.3
      }
    },
    {
      "id": "park_outline",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "park",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {},
      "paint": {
        "line-color": "hsl(205, 49%, 31%)",
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "waterway",
      "filter": [
        "==",
        "$type",
        "LineString"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(232, 23%, 28%)",
        "line-opacity": 0.6
      }
    },
    {
      "id": "water_name",
      "type": "symbol",
      "source": "planet_osm",
      "source-layer": "water_name",
      "filter": [
        "==",
        "$type",
        "LineString"
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 500,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Medium Italic",
          "Noto Sans Italic"
        ],
        "text-rotation-alignment": "map",
        "text-size": 12,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(223, 21%, 52%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsl(232, 5%, 19%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "building",
      "minzoom": 12,
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "paint": {
        "fill-antialias": false,
        "fill-color": "hsla(232, 47%, 18%, 0.65)",
        "fill-opacity": 0.25
      }
    },
    {
      "id": "tunnel_motorway_casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#3C4357",
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              5.8,
              0
            ],
            [
              6,
              3
            ],
            [
              20,
              40
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_motorway_inner",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 18%, 21%)",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              4,
              2
            ],
            [
              6,
              1.3
            ],
            [
              20,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-taxiway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "planet_osm",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "in",
          "class",
          "taxiway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 22%, 45%)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.55,
          "stops": [
            [
              13,
              1.8
            ],
            [
              20,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-runway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "planet_osm",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "in",
          "class",
          "runway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 22%, 45%)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              6
            ],
            [
              17,
              55
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-area",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "planet_osm",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "in",
          "class",
          "runway",
          "taxiway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(224, 20%, 29%)",
        "fill-opacity": 1
      }
    },
    {
      "id": "aeroway-runway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "planet_osm",
      "source-layer": "aeroway",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "runway"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 20%, 29%)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              4
            ],
            [
              17,
              50
            ]
          ]
        }
      }
    },
    {
      "id": "road_area_pier",
      "type": "fill",
      "metadata": {},
      "source": "planet_osm",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "class",
          "pier"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": true,
        "fill-color": "#45516E"
      }
    },
    {
      "id": "road_pier",
      "type": "line",
      "metadata": {},
      "source": "planet_osm",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "pier"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#45516E",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              17,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "highway_path",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "class",
          "path"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(211, 29%, 38%)",
        "line-dasharray": [
          2,
          2
        ],
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.5
            ],
            [
              20,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "highway_minor",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "minor",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 22%, 45%)",
        "line-opacity": 0.9,
        "line-width": {
          "base": 1.55,
          "stops": [
            [
              13,
              1.8
            ],
            [
              20,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "highway_major_casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "primary",
          "secondary",
          "tertiary",
          "trunk"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 22%, 45%)",
        "line-dasharray": [
          12,
          0
        ],
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              10,
              3
            ],
            [
              20,
              23
            ]
          ]
        }
      }
    },
    {
      "id": "highway_major_inner",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "primary",
          "secondary",
          "tertiary",
          "trunk"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#3C4357",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              10,
              2
            ],
            [
              20,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "highway_major_subtle",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "primary",
          "secondary",
          "tertiary",
          "trunk"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#3D4355",
        "line-opacity": 0.6,
        "line-width": 2
      }
    },
    {
      "id": "highway_motorway_casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 22%, 45%)",
        "line-dasharray": [
          2,
          0
        ],
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              5.8,
              0
            ],
            [
              6,
              3
            ],
            [
              20,
              40
            ]
          ]
        }
      }
    },
    {
      "id": "highway_motorway_inner",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "base": 1,
          "stops": [
            [
              5.8,
              "hsla(0, 0%, 85%, 0.53)"
            ],
            [
              6,
              "hsl(224, 20%, 29%)"
            ]
          ]
        },
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              4,
              2
            ],
            [
              6,
              1.3
            ],
            [
              20,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "highway_motorway_subtle",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "maxzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsla(239, 45%, 69%, 0.2)",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              4,
              2
            ],
            [
              6,
              1.3
            ]
          ]
        }
      }
    },
    {
      "id": "railway_transit",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "transit"
          ],
          [
            "!in",
            "brunnel",
            "tunnel"
          ]
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(200, 65%, 11%)",
        "line-width": 3
      }
    },
    {
      "id": "railway_transit_dashline",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "transit"
          ],
          [
            "!in",
            "brunnel",
            "tunnel"
          ]
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(193, 63%, 26%)",
        "line-dasharray": [
          3,
          3
        ],
        "line-width": 2
      }
    },
    {
      "id": "railway_service",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "has",
            "service"
          ]
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(200, 65%, 11%)",
        "line-width": 3
      }
    },
    {
      "id": "railway_service_dashline",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "has",
            "service"
          ]
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(193, 63%, 26%)",
        "line-dasharray": [
          3,
          3
        ],
        "line-width": 2
      }
    },
    {
      "id": "railway",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!has",
            "service"
          ],
          [
            "==",
            "class",
            "rail"
          ]
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(200, 10%, 18%)",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              16,
              3
            ],
            [
              20,
              7
            ]
          ]
        }
      }
    },
    {
      "id": "railway_dashline",
      "type": "line",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!has",
            "service"
          ],
          [
            "==",
            "class",
            "rail"
          ]
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(224, 20%, 41%)",
        "line-dasharray": [
          3,
          3
        ],
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              16,
              1.5
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "highway_name_other",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation_name",
      "filter": [
        "all",
        [
          "!=",
          "class",
          "motorway"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{name:latin} {name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-max-angle": 30,
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "map",
        "text-size": 10,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(223, 31%, 61%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsl(232, 9%, 23%)",
        "text-halo-width": 2,
        "text-opacity": 1,
        "text-translate": [
          0,
          0
        ]
      }
    },
    {
      "id": "highway_ref",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "b6371a3f2f5a9932464fa3867530a2e5"
      },
      "source": "planet_osm",
      "source-layer": "transportation_name",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": "{ref}",
        "text-font": [
          "Metropolis Light",
          "Noto Sans Regular"
        ],
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "viewport",
        "text-size": 10,
        "visibility": "none"
      },
      "paint": {
        "text-color": "hsl(215, 57%, 77%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsl(209, 64%, 19%)",
        "text-halo-width": 1,
        "text-opacity": 1,
        "text-translate": [
          0,
          2
        ]
      }
    },
    {
      "id": "boundary_state",
      "type": "line",
      "metadata": {
        "mapbox:group": "a14c9607bc7954ba1df7205bf660433f"
      },
      "source": "planet_osm",
      "source-layer": "boundary",
      "filter": [
        "==",
        "admin_level",
        4
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-blur": 0.4,
        "line-color": "hsla(195, 47%, 62%, 0.26)",
        "line-dasharray": [
          2,
          2
        ],
        "line-opacity": 1,
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              3,
              1
            ],
            [
              22,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_country_z0-4",
      "type": "line",
      "metadata": {
        "mapbox:group": "a14c9607bc7954ba1df7205bf660433f"
      },
      "source": "planet_osm",
      "source-layer": "boundary",
      "maxzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ]
        ,
        [
          "!has",
          "claimed_by"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-blur": {
          "base": 1,
          "stops": [
            [
              0,
              0.4
            ],
            [
              22,
              4
            ]
          ]
        },
        "line-color": "hsl(214, 63%, 76%)",
        "line-opacity": 0.56,
        "line-width": {
          "base": 1.1,
          "stops": [
            [
              3,
              1
            ],
            [
              22,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_country_z5-",
      "type": "line",
      "metadata": {
        "mapbox:group": "a14c9607bc7954ba1df7205bf660433f"
      },
      "source": "planet_osm",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-blur": {
          "base": 1,
          "stops": [
            [
              0,
              0.4
            ],
            [
              22,
              4
            ]
          ]
        },
        "line-color": "hsl(214, 63%, 76%)",
        "line-opacity": 0.56,
        "line-width": {
          "base": 1.1,
          "stops": [
            [
              3,
              1
            ],
            [
              22,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "place_other",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "in",
          "class",
          "hamlet",
          "neighbourhood",
          "isolated_dwelling"
        ],
        [
          "==",
          "$type",
          "Point"
        ]
      ],
      "layout": {
        "text-anchor": "center",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-justify": "center",
        "text-offset": [
          0.5,
          0
        ],
        "text-size": 10,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(195, 37%, 73%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1,
        "text-opacity": 0.6
      }
    },
    {
      "id": "place_suburb",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "suburb"
        ]
      ],
      "layout": {
        "text-anchor": "center",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-justify": "center",
        "text-offset": [
          0.5,
          0
        ],
        "text-size": 10,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(195, 41%, 49%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_village",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "village"
        ]
      ],
      "layout": {
        "icon-size": 0.4,
        "text-anchor": "left",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-justify": "left",
        "text-offset": [
          0.5,
          0.2
        ],
        "text-size": 10,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "icon-opacity": 0.7,
        "text-color": "hsl(195, 41%, 49%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_town",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "town"
        ]
      ],
      "layout": {
        "icon-image": {
          "base": 1,
          "stops": [
            [
              0,
              "circle-11"
            ],
            [
              9,
              ""
            ]
          ]
        },
        "icon-size": 0.4,
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              0,
              "left"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-justify": "left",
        "text-offset": [
          0.5,
          0.2
        ],
        "text-size": 10,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "icon-opacity": 0.7,
        "text-color": "hsl(195, 25%, 76%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "all",
          [
            "==",
            "class",
            "city"
          ],
          [
            ">",
            "rank",
            3
          ]
        ]
      ],
      "layout": {
        "icon-size": 0.4,
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              0,
              "left"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-justify": "left",
        "text-offset": [
          0.5,
          0.2
        ],
        "text-size": 10,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "icon-opacity": 0.7,
        "text-color": "hsl(195, 25%, 76%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_large",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "all",
          [
            "<=",
            "rank",
            3
          ],
          [
            "==",
            "class",
            "city"
          ]
        ]
      ],
      "layout": {
        "icon-size": 0.4,
        "text-anchor": {
          "base": 1,
          "stops": [
            [
              0,
              "left"
            ],
            [
              8,
              "center"
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-justify": "left",
        "text-offset": [
          0.5,
          0.2
        ],
        "text-size": 14,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "icon-opacity": 0.7,
        "text-color": "hsl(195, 25%, 76%)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_state",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "state"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-size": 10,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgb(113, 129, 144)",
        "text-halo-blur": 1,
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_country_other",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "country"
        ],
        [
          "!has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Metropolis Light Italic",
          "Noto Sans Italic"
        ],
        "text-size": {
          "base": 1,
          "stops": [
            [
              0,
              9
            ],
            [
              6,
              11
            ]
          ]
        },
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": {
          "base": 1,
          "stops": [
            [
              3,
              "rgb(157,169,177)"
            ],
            [
              4,
              "rgb(153, 153, 153)"
            ]
          ]
        },
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1.4,
        "text-opacity": 1
      }
    },
    {
      "id": "place_country_minor",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "country"
        ],
        [
          ">=",
          "rank",
          2
        ],
        [
          "has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-size": {
          "base": 1,
          "stops": [
            [
              0,
              10
            ],
            [
              6,
              12
            ]
          ]
        },
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": {
          "base": 1,
          "stops": [
            [
              3,
              "rgb(157,169,177)"
            ],
            [
              4,
              "rgb(153, 153, 153)"
            ]
          ]
        },
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1.4,
        "text-opacity": 1
      }
    },
    {
      "id": "place_country_major",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "<=",
          "rank",
          1
        ],
        [
          "==",
          "class",
          "country"
        ],
        [
          "has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-anchor": "center",
        "text-field": "{name:latin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-size": {
          "base": 1.4,
          "stops": [
            [
              0,
              10
            ],
            [
              3,
              12
            ],
            [
              4,
              14
            ]
          ]
        },
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": {
          "base": 1,
          "stops": [
            [
              3,
              "rgb(157,169,177)"
            ],
            [
              4,
              "rgb(153, 153, 153)"
            ]
          ]
        },
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1.4,
        "text-opacity": 1
      }
    },
    {
      "id": "place_continent",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "101da9f13b64a08fa4b6ac1168e89e5f"
      },
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "continent"
        ]
      ],
      "layout": {
        "text-anchor": "center",
        "text-field": "{name:latin}",
        "text-font": [
          "Metropolis Regular",
          "Noto Sans Regular"
        ],
        "text-size": {
          "base": 1.4,
          "stops": [
            [
              0,
              10
            ],
            [
              3,
              12
            ],
            [
              4,
              14
            ]
          ]
        },
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 100%)",
        "text-halo-color": "hsla(228, 60%, 21%, 0.7)",
        "text-halo-width": 1.4,
        "text-opacity": {
          "base": 1,
          "stops": [
            [
              0,
              0.6
            ],
            [
              3,
              0
            ]
          ]
        }
      }
    }
  ],
  "id": "ciwlw4z7800092qmvzlut41tx"
}