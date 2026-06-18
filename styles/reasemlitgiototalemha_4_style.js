var size = 0;
var placement = 'point';
function categories_reasemlitgiototalemha_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Área da extinta linha da E.F. Sorocabana ocupada pela Fazenda Sant\'anna da Barra Grande':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(190,186,218,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área da RFFSA ocupada pela Fazenda Florestal Tronco do Alto - Gleba C':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,179,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área da RFFSA ocupada pela Fazenda Sant\'anna da Barra Grande':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,180,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área da Fazenda Sant\'anna da Barra Grande ocupada por família sem terra':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,128,114,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_reasemlitgiototalemha_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("obs");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_reasemlitgiototalemha_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
