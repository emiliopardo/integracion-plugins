# Integración Plugins
En este repositorio se muestra como se integran los diversos plugins de mapea6 en un único visor.

El listado de plugins que se ha usado para el desarrollo de los visores de ejemplo se listan a continuación.

- [InputSelectAddLayer](https://github.com/emiliopardo/inputselectaddlayer)
- [SimpleLegend](https://github.com/emiliopardo/simplelegend)
- [SimpleBaseLayerSelector](https://github.com/emiliopardo/simplebaselayerselector)


## visores de ejemplo

### 1. Visor con varias capas raster de Overlay ###  

#### Descripción ####
Este visor permite cargar distintas capas raster con sus correspondientes estilos mediante un input select. Refrescandose directamente la leyenda.

La gestión de capas base se hace a traves de un plugin.

[Enlace al visor](./visores/visor1/index.html)

#### Plugins: ####
- [InputSelectAddLayer](https://github.com/emiliopardo/inputselectaddlayer)
- [SimpleLegend](https://github.com/emiliopardo/simplelegend)
- [SimpleBaseLayerSelector](https://github.com/emiliopardo/simplebaselayerselector)

### 2. Visor con varias capas vectoriales de Overlay ###
#### Descripción ####
Este visor permite cargar distintas capas vectoriales con sus correspondientes estilos mediante unos select input anidados. Refrescandose directamente la leyenda.

La gestión de capas base se hace a traves de un plugin.

[Enlace al visor](./visores/visor2/index.html)
#### Plugins: ####
- [InputSelectAddLayer](https://github.com/emiliopardo/inputselectaddlayer)
- [SimpleLegend](https://github.com/emiliopardo/simplelegend)
- [SimpleBaseLayerSelector](https://github.com/emiliopardo/simplebaselayerselector)

### 3. Visor con una capa raster de overlay y multiples estilo  ###
#### Descripción ####
Este visor permite cargar una única capa raster pero asociandole diferentes estilos estilos mediante un input select. Refrescandose directamente la leyenda.

La gestión de capas base se hace a traves de un plugin.

[Enlace al visor](./visores/visor3/index.html)
#### Plugins: ####
- [InputSelectAddLayer](https://github.com/emiliopardo/inputselectaddlayer)
- [SimpleLegend](https://github.com/emiliopardo/simplelegend)
- [SimpleBaseLayerSelector](https://github.com/emiliopardo/simplebaselayerselector)