require(["esri/config", "esri/Map", "esri/views/MapView"], function (
    esriConfig,
    Map,
    MapView
) {
    esriConfig.apiKey = "";

    const map = new Map({
        // basemap: "arcgis-topographic",
        basemap: "hybrid",
    });

    const view = new MapView({
        map: map,
        center: [-118.805, 34.027],
        zoom: 5,
        container: "viewDiv",
    });
});