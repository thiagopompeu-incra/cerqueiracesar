var size = 0;
var placement = 'point';

var style_Arruamento_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#454545";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("NM_LOG") !== null) {
        labelText = String(feature.get("NM_LOG"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(133,133,133,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.38}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
