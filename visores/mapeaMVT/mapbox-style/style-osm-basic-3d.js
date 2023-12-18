let planet_osm_basic_3d = {
  "version": 8,
  "name": "Planet OSM 3D",
  "metadata": {
    "mapbox:autocomposite": false,
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x"
  },
  "center": [
    -4.9498878,
    37.302438
  ],
  "zoom": 7,
  "sources": {
    "planet_osm": {
      "type": "vector",
      "url": "mbtiles://{planet_osm}"
    }
  },
  "sprite": "",
  "glyphs": "{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "hsl(47, 26%, 88%)"
      }
    },
    {
      "id": "landuse-residential",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landuse",
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
          "residential"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(47, 13%, 86%)",
        "fill-opacity": 0.7
      }
    },
    {
      "id": "landcover_grass",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landcover",
      "filter": [
        "==",
        "class",
        "grass"
      ],
      "paint": {
        "fill-color": "hsl(82, 46%, 72%)",
        "fill-opacity": 0.45
      }
    },
    {
      "id": "park",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "park",
      "paint": {
        "fill-color": "rgba(192, 216, 151, 0.53)",
        "fill-opacity": 1
      }
    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landcover",
      "filter": [
        "==",
        "class",
        "wood"
      ],
      "paint": {
        "fill-color": "hsl(82, 46%, 72%)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              8,
              0.6
            ],
            [
              22,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "water",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "paint": {
        "fill-color": "hsl(205, 56%, 73%)"
      }
    },
    {
      "id": "landcover-ice-shelf",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landcover",
      "filter": [
        "==",
        "subclass",
        "ice_shelf"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(47, 26%, 88%)",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landcover-glacier",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landcover",
      "filter": [
        "==",
        "subclass",
        "glacier"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(47, 22%, 94%)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              0,
              1
            ],
            [
              8,
              0.5
            ]
          ]
        }
      }
    },
    {
      "id": "landuse",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "agriculture"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#eae0d0"
      }
    },
    {
      "id": "landuse_overlay_national_park",
      "type": "fill",
      "source": "planet_osm",
      "source-layer": "landcover",
      "filter": [
        "==",
        "class",
        "national_park"
      ],
      "paint": {
        "fill-color": "#E1EBB0",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              5,
              0
            ],
            [
              9,
              0.75
            ]
          ]
        }
      }
    },
    {
      "id": "park_outline",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "park",
      "layout": {},
      "paint": {
        "line-color": "rgba(159, 183, 118, 0.69)",
        "line-dasharray": [
          0.5,
          1
        ]
      }
    },
    {
      "id": "waterway_tunnel",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(205, 56%, 73%)",
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "stops": [
            [
              12,
              0
            ],
            [
              20,
              6
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              8,
              1
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!=",
          "intermittent",
          1
        ],
        [
          "!in",
          "brunnel",
          "tunnel",
          "bridge"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "line-color": "hsl(205, 56%, 73%)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              8,
              1
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "waterway_intermittent",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "intermittent",
          1
        ],
        [
          "!in",
          "brunnel",
          "tunnel",
          "bridge"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(205, 56%, 73%)",
        "line-dasharray": [
          2,
          1
        ],
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              8,
              1
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_railway_transit",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "transportation",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "transit"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "hsl(34, 12%, 66%)",
        "line-dasharray": [
          3,
          3
        ],
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              16,
              1
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
        "fill-color": "hsl(47, 26%, 88%)"
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
        "line-color": "hsl(47, 26%, 88%)",
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
      "id": "road_bridge_area",
      "type": "fill",
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
          "in",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {},
      "paint": {
        "fill-color": "hsl(47, 26%, 88%)",
        "fill-opacity": 0.5
      }
    },
    {
      "id": "road_path",
      "type": "line",
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
          "path",
          "track"
        ]
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "bevel"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 97%)",
        "line-dasharray": [
          1,
          1
        ],
        "line-width": {
          "base": 1.55,
          "stops": [
            [
              4,
              0.25
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "road_minor",
      "type": "line",
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
          "minor",
          "service"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 97%)",
        "line-width": {
          "base": 1.55,
          "stops": [
            [
              4,
              0.25
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
      "id": "tunnel_minor",
      "type": "line",
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
          "all",
          [
            "==",
            "brunnel",
            "tunnel"
          ],
          [
            "==",
            "class",
            "minor_road"
          ]
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#efefef",
        "line-dasharray": [
          0.36,
          0.18
        ],
        "line-width": {
          "base": 1.55,
          "stops": [
            [
              4,
              0.25
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
      "id": "tunnel_major",
      "type": "line",
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
          "all",
          [
            "==",
            "brunnel",
            "tunnel"
          ],
          [
            "in",
            "class",
            "primary",
            "secondary",
            "tertiary",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#fff",
        "line-dasharray": [
          0.28,
          0.14
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              6,
              0.5
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
      "id": "road_trunk_primary",
      "type": "line",
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
          "trunk",
          "primary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              6,
              0.5
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
      "id": "road_secondary_tertiary",
      "type": "line",
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
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              6,
              0.5
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
      "id": "road_major_motorway",
      "type": "line",
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
          "motorway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 100%)",
        "line-offset": 0,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              8,
              1
            ],
            [
              16,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "railway_transit",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "transit"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(34, 12%, 66%)",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              16,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "railway",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "transportation",
      "filter": [
        "==",
        "class",
        "rail"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(34, 12%, 66%)",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              16,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_minor case",
      "type": "line",
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
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "==",
            "class",
            "minor_road"
          ]
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#dedede",
        "line-gap-width": {
          "base": 1.55,
          "stops": [
            [
              4,
              0.25
            ],
            [
              20,
              30
            ]
          ]
        },
        "line-width": {
          "base": 1.6,
          "stops": [
            [
              12,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_major case",
      "type": "line",
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
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "in",
            "class",
            "primary",
            "secondary",
            "tertiary",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#dedede",
        "line-gap-width": {
          "base": 1.55,
          "stops": [
            [
              4,
              0.25
            ],
            [
              20,
              30
            ]
          ]
        },
        "line-width": {
          "base": 1.6,
          "stops": [
            [
              12,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_minor",
      "type": "line",
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
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "==",
            "class",
            "minor_road"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#efefef",
        "line-width": {
          "base": 1.55,
          "stops": [
            [
              4,
              0.25
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
      "id": "bridge_major",
      "type": "line",
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
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "in",
            "class",
            "primary",
            "secondary",
            "tertiary",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              6,
              0.5
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
      "id": "admin_sub",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "boundary",
      "filter": [
        "in",
        "admin_level",
        4,
        6,
        8
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 76%)",
        "line-dasharray": [
          2,
          1
        ]
      }
    },
    {
      "id": "admin_country_z0-4",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "boundary",
      "maxzoom": 5,
      "filter": [
        "all",
        [
          "<=",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ],
        [
          "==",
          "$type",
          "LineString"
        ],
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
        "line-color": "hsla(0, 8%, 22%, 0.51)",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              3,
              0.5
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
      "id": "admin_country_z5-",
      "type": "line",
      "source": "planet_osm",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "<=",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsla(0, 8%, 22%, 0.51)",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              3,
              0.5
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
      "id": "road_major_label",
      "type": "symbol",
      "source": "planet_osm",
      "source-layer": "transportation_name",
      "filter": [
        "==",
        "$type",
        "LineString"
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": [
          "Klokantech Noto Sans Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map",
        "text-size": {
          "base": 1.4,
          "stops": [
            [
              10,
              8
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#000",
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 2
      }
    },
    {
      "id": "building-3d",
      "type": "fill-extrusion",
      "source": "planet_osm",
      "source-layer": "building",
      "filter": [
        "all",
        [
          "!has",
          "hide_3d"
        ]
      ],
      "paint": {
        "fill-extrusion-base": {
          "property": "render_min_height",
          "type": "identity"
        },
        "fill-extrusion-color": [
          "case",
          [
            "has",
            "colour"
          ],
          [
            "get",
            "colour"
          ],
          "hsl(39, 41%, 86%)"
        ],
        "fill-extrusion-height": {
          "property": "render_height",
          "type": "identity"
        },
        "fill-extrusion-opacity": 0.6
      }
    },
    {
      "id": "place_label_other",
      "type": "symbol",
      "source": "planet_osm",
      "source-layer": "place",
      "minzoom": 8,
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
            "!=",
            "class",
            "city"
          ]
        ]
      ],
      "layout": {
        "text-anchor": "center",
        "text-field": "{name_en}",
        "text-font": [
          "Klokantech Noto Sans Regular"
        ],
        "text-max-width": 6,
        "text-size": {
          "stops": [
            [
              6,
              10
            ],
            [
              12,
              14
            ]
          ]
        },
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(0, 10%, 25%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 2
      }
    },
    {
      "id": "place_label_city",
      "type": "symbol",
      "source": "planet_osm",
      "source-layer": "place",
      "maxzoom": 16,
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
          "city"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Klokantech Noto Sans Regular"
        ],
        "text-max-width": 10,
        "text-size": {
          "stops": [
            [
              3,
              12
            ],
            [
              8,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-color": "hsl(0, 0%, 0%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
        "text-halo-width": 2
      }
    },
    {
      "id": "country_label",
      "type": "symbol",
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
          "country"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Klokantech Noto Sans Bold"
        ],
        "text-max-width": 10,
        "text-size": {
          "stops": [
            [
              3,
              12
            ],
            [
              8,
              22
            ]
          ]
        }
      },
      "paint": {
        "text-color": "hsl(0, 0%, 13%)",
        "text-halo-blur": 0,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 2
      }
    }
  ],
  "id": "klokantech-3d"
}