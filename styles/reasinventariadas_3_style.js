var size = 0;
var placement = 'point';
function categories_reasinventariadas_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Área da extinta linha E.F. Sorocabana':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,177,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área operacional e não operaciona dal RFFSA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,205,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Fazenda Sant\'anna da Barra Grande':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(179,222,105,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Horto Florestal Oliveira Coutinho':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(180,208,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_reasinventariadas_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Text");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#454545";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Text") !== null) {
        labelText = String(feature.get("Text"));
    }
    
    var style = categories_reasinventariadas_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
