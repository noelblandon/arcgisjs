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
/*require([
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
});*/ //change map

//tutorial 4
//tutorial 5
/*require([
    "esri/config",
    "esri/Map", 
    "esri/views/MapView",
    "esri/layers/FeatureLayer"
],function (esriConfig,Map, MapView, FeatureLayer) {
    esriConfig.apiKey = "AAPK07c104ca1d9e423da27d05fa4f68ce58omCuIjvz_rXDeL2nlwXdgWn99p6sQrhLLg1hN00pSqrK6hKPbSWuuRS_galj0ejG";

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
      });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.80543,34.02700],
        zoom: 13
      });

      //Trailheads feature layer (points)
        const trailheadsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
        });

        map.add(trailheadsLayer);
        //Trails feature layer (lines)
        const trailsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
        });

        map.add(trailsLayer, 0);

        const parksLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
          });

          map.add(parksLayer, 0);

});*/ //change map

//tutorial 5
//tutorial 5

/*require([
          'esri/config' ,
          'esri/Map',
          'esri/views/MapView',
          'esri/layers/FeatureLayer'

],function(esriConfig,Map,MapView,FeatureLayer){

    esriConfig.apiKey = "AAPK07c104ca1d9e423da27d05fa4f68ce58omCuIjvz_rXDeL2nlwXdgWn99p6sQrhLLg1hN00pSqrK6hKPbSWuuRS_galj0ejG";

    const map = new Map({
        basemap: "arcgis-topographic"
    });

    

    const view = new MapView({
        container:"viewDiv",
        map:map,
        center:[-118.80543,34.02700],
        zoom: 13
    });

    const trailheadsRenderer = {
        "type": "simple",
        "symbol": {
          "type": "picture-marker",
          "url": "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
          "width": "18px",
          "height": "18px"
        }
      };

      const trailheadsLabels = {
        symbol: {
          type: "text",
          color: "#FFFFFF",
          haloColor: "#5E8D74",
          haloSize: "2px",
          font: {
            size: "12px",
            family: "Noto Sans",
            style: "italic",
            weight: "normal"
          }
        },

        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.TRL_NAME"
        }
      };

      // Create the layer and set the renderer
      const trailheads = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
        renderer: trailheadsRenderer,
        labelingInfo: [trailheadsLabels]
      });

      map.add(trailheads);

      // Define a unique value renderer and symbols
      const trailsRenderer = {
        type: "simple",
        symbol: {
          color: "#BA55D3",
          type: "simple-line",
          style: "solid"
        },

        visualVariables: [
          {
            type: "size",
            field: "ELEV_GAIN",
            minDataValue: 0,
            maxDataValue: 2300,
            minSize: "3px",
            maxSize: "7px"
          }
        ]
      };

        // Create the layer and set the renderer
        const trails = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
            renderer: trailsRenderer,
            opacity: .75
          });
    
          // Add the layer
          map.add(trails,0);

            // Add bikes only trails
      const bikeTrailsRenderer = {
        type: "simple",
        symbol: {
          type: "simple-line",
          style: "short-dot",
          color: "#FF91FF",
          width: "1px"
        }
      };

      const bikeTrails = new FeatureLayer({
        url:
          "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
        renderer: bikeTrailsRenderer,
        definitionExpression: "USE_BIKE = 'YES'"
      });

      map.add(bikeTrails, 1);

       // Add parks with a class breaks renderer and unique symbols
       function createFillSymbol(value, color) {
        return {
          "value": value,
          "symbol": {
            "color": color,
            "type": "simple-fill",
            "style": "solid",
            "outline": {
              "style": "none"
            }
          },
          "label": value
        };
      }

      const openSpacesRenderer = {
        type: "unique-value",
        field: "TYPE",
        uniqueValueInfos: [
          createFillSymbol("Natural Areas", "#9E559C"),
          createFillSymbol("Regional Open Space", "#A7C636"),
          createFillSymbol("Local Park", "#149ECE"),
          createFillSymbol("Regional Recreation Park", "#ED5151")
        ]
      };

        // Create the layer and set the renderer
        const openspaces = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
            renderer: openSpacesRenderer,
            opacity: 0.2
          });
    
          // Add the layer
          map.add(openspaces,0);


    
});*/ //mapa 6

//mapa 6
require([
    'esri/config' ,
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/FeatureLayer'

],function(esriConfig,Map,MapView,FeatureLayer){

esriConfig.apiKey = "AAPK07c104ca1d9e423da27d05fa4f68ce58omCuIjvz_rXDeL2nlwXdgWn99p6sQrhLLg1hN00pSqrK6hKPbSWuuRS_galj0ejG";

const map = new Map({
  basemap: "arcgis-topographic"
});



const view = new MapView({
  container:"viewDiv",
  map:map,
  center:[-118.80543,34.02700],
  zoom: 13
});

// Define a pop-up for Trailheads
const popupTrailheads = {
    "title": "Trailhead",
    "content": "<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft"
  }

  const trailheads = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
    outFields: ["TRL_NAME","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
    popupTemplate: popupTrailheads
  });

  map.add(trailheads);


      // Define a popup for Trails
      const popupTrails = {
        title: "Trail Information",
        content: [{
         type: "media",
          mediaInfos: [{
            type: "column-chart",
            caption: "",
            value: {
              fields: [ "ELEV_MIN","ELEV_MAX" ],
              normalizeField: null,
              tooltipField: "Min and max elevation values"
              }
            }]
        }]
      }


      const trails = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0",
        outFields: ["TRL_NAME","ELEV_GAIN"],
        popupTemplate: popupTrails
      });

      map.add(trails,0);



});