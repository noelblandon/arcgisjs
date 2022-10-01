/*require([
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
});*/ //tutorial 1 - basemap

/*require([
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
});*/ //tutorial 1 - basemap


/*require([
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
}); //tutorial 1 - basemap
//tutorial1

//tutorial 2
    require([
            "esri/config",
            "esri/Map", 
            "esri/views/SceneView"
        ],function (esriConfig,Map, SceneView) {
            esriConfig.apiKey = "AAPK07c104ca1d9e423da27d05fa4f68ce58omCuIjvz_rXDeL2nlwXdgWn99p6sQrhLLg1hN00pSqrK6hKPbSWuuRS_galj0ejG";

            const map = new Map({
                basemap: "arcgis-topographic", //Basemap layer service
                ground: "world-elevation", //Elevation servicebasemap: "arcgis-topographic" // Basemap layer service
              });

              const view = new SceneView({
                container: "viewDiv",
                map: map,
                camera: {
                  position: {
                    x: -118.808, //Longitude
                    y: 33.961, //Latitude
                    z: 2000 //Meters
                  },
                  tilt: 75
                }
                });
});*/ //tutorial 2 - basemap 3d

//tutorial 3
require([
    "esri/config",
    "esri/Map", 
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery"
],function (esriConfig, Map, MapView, BasemapToggle, BasemapGallery) {
    esriConfig.apiKey = "AAPK07c104ca1d9e423da27d05fa4f68ce58omCuIjvz_rXDeL2nlwXdgWn99p6sQrhLLg1hN00pSqrK6hKPbSWuuRS_galj0ejG";

    const map = new Map({
        basemap: "arcgis-topographic", //Basemap layer service
        ground: "world-elevation", //Elevation servicebasemap: "arcgis-topographic" // Basemap layer service
      });

      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.80543,34.02700],
        zoom: 13
      });

      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
      });

      view.ui.add(basemapToggle,"bottom-right");

      const basemapGallery = new BasemapGallery({
        view: view,
        source: {
          query: {
            title: '"World Basemaps for Developers" AND owner:esri'
          }
        }
      });

      view.ui.add(basemapGallery, "top-right"); 
});