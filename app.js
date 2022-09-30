require([
            "esri/config",
            "esri/Map", 
            "esri/views/MapView"
        ],function (esriConfig,Map, MapView) {
            esriConfig.apiKey = "AAPK07c104ca1d9e423da27d05fa4f68ce58omCuIjvz_rXDeL2nlwXdgWn99p6sQrhLLg1hN00pSqrK6hKPbSWuuRS_galj0ejG";

            const map = new Map({
                basemap: "arcgis-topographic" // Basemap layer service
              });

              const view = new MapView({
                map: map,
                center: [-118.805, 34.027], // Longitude, latitude
                zoom: 13, // Zoom level
                container: "viewDiv" // Div element
              });
});
