var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ImveisCertificadosSIGEFParticularINCRA_1 = new ol.format.GeoJSON();
var features_ImveisCertificadosSIGEFParticularINCRA_1 = format_ImveisCertificadosSIGEFParticularINCRA_1.readFeatures(json_ImveisCertificadosSIGEFParticularINCRA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisCertificadosSIGEFParticularINCRA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisCertificadosSIGEFParticularINCRA_1.addFeatures(features_ImveisCertificadosSIGEFParticularINCRA_1);
var lyr_ImveisCertificadosSIGEFParticularINCRA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisCertificadosSIGEFParticularINCRA_1, 
                style: style_ImveisCertificadosSIGEFParticularINCRA_1,
                popuplayertitle: 'Imóveis Certificados SIGEF - Particular - INCRA',
                interactive: false,
                title: '<img src="styles/legend/ImveisCertificadosSIGEFParticularINCRA_1.png" /> Imóveis Certificados SIGEF - Particular - INCRA'
            });
var format_ImveisCertificadosSNCIPrivadoINCRA_2 = new ol.format.GeoJSON();
var features_ImveisCertificadosSNCIPrivadoINCRA_2 = format_ImveisCertificadosSNCIPrivadoINCRA_2.readFeatures(json_ImveisCertificadosSNCIPrivadoINCRA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisCertificadosSNCIPrivadoINCRA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisCertificadosSNCIPrivadoINCRA_2.addFeatures(features_ImveisCertificadosSNCIPrivadoINCRA_2);
var lyr_ImveisCertificadosSNCIPrivadoINCRA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisCertificadosSNCIPrivadoINCRA_2, 
                style: style_ImveisCertificadosSNCIPrivadoINCRA_2,
                popuplayertitle: 'Imóveis Certificados SNCI - Privado - INCRA',
                interactive: false,
                title: '<img src="styles/legend/ImveisCertificadosSNCIPrivadoINCRA_2.png" /> Imóveis Certificados SNCI - Privado - INCRA'
            });
var format_reasinventariadas_3 = new ol.format.GeoJSON();
var features_reasinventariadas_3 = format_reasinventariadas_3.readFeatures(json_reasinventariadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasinventariadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasinventariadas_3.addFeatures(features_reasinventariadas_3);
var lyr_reasinventariadas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasinventariadas_3, 
                style: style_reasinventariadas_3,
                popuplayertitle: 'Áreas inventariadas',
                interactive: true,
    title: 'Áreas inventariadas<br />\
    <img src="styles/legend/reasinventariadas_3_0.png" /> Área da extinta linha E.F. Sorocabana<br />\
    <img src="styles/legend/reasinventariadas_3_1.png" /> Área operacional e não operaciona dal RFFSA<br />\
    <img src="styles/legend/reasinventariadas_3_2.png" /> Fazenda Sant\'anna da Barra Grande<br />\
    <img src="styles/legend/reasinventariadas_3_3.png" /> Horto Florestal Oliveira Coutinho<br />' });
var format_reasemlitgiototalemha_4 = new ol.format.GeoJSON();
var features_reasemlitgiototalemha_4 = format_reasemlitgiototalemha_4.readFeatures(json_reasemlitgiototalemha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasemlitgiototalemha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasemlitgiototalemha_4.addFeatures(features_reasemlitgiototalemha_4);
var lyr_reasemlitgiototalemha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasemlitgiototalemha_4, 
                style: style_reasemlitgiototalemha_4,
                popuplayertitle: 'Áreas em litígio (total em ha)',
                interactive: true,
    title: 'Áreas em litígio (total em ha)<br />\
    <img src="styles/legend/reasemlitgiototalemha_4_0.png" /> (5,9558 ha) Área da extinta linha da E.F. Sorocabana ocupada pela Fazenda Sant\'anna da Barra Grande <br />\
    <img src="styles/legend/reasemlitgiototalemha_4_1.png" /> (2,6055 ha) Área da RFFSA ocupada pela Fazenda Florestal Tronco do Alto - Gleba C<br />\
    <img src="styles/legend/reasemlitgiototalemha_4_2.png" /> (5,0892 ha) Área da RFFSA ocupada pela Fazenda Sant\'anna da Barra Grande<br />\
    <img src="styles/legend/reasemlitgiototalemha_4_3.png" /> (15,0113 ha) Área da Fazenda Sant\'anna da Barra Grande ocupada por família sem terra<br />' });
var format_Lotesdosocupantes_5 = new ol.format.GeoJSON();
var features_Lotesdosocupantes_5 = format_Lotesdosocupantes_5.readFeatures(json_Lotesdosocupantes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotesdosocupantes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotesdosocupantes_5.addFeatures(features_Lotesdosocupantes_5);
var lyr_Lotesdosocupantes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotesdosocupantes_5, 
                style: style_Lotesdosocupantes_5,
                popuplayertitle: 'Lotes dos ocupantes',
                interactive: true,
                title: '<img src="styles/legend/Lotesdosocupantes_5.png" /> Lotes dos ocupantes'
            });
var format_Arruamento_6 = new ol.format.GeoJSON();
var features_Arruamento_6 = format_Arruamento_6.readFeatures(json_Arruamento_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arruamento_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arruamento_6.addFeatures(features_Arruamento_6);
var lyr_Arruamento_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arruamento_6, 
                style: style_Arruamento_6,
                popuplayertitle: 'Arruamento',
                interactive: false,
                title: '<img src="styles/legend/Arruamento_6.png" /> Arruamento'
            });
var format_Zonadesegurana15m_7 = new ol.format.GeoJSON();
var features_Zonadesegurana15m_7 = format_Zonadesegurana15m_7.readFeatures(json_Zonadesegurana15m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonadesegurana15m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonadesegurana15m_7.addFeatures(features_Zonadesegurana15m_7);
var lyr_Zonadesegurana15m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonadesegurana15m_7, 
                style: style_Zonadesegurana15m_7,
                popuplayertitle: 'Zona de segurança (15 m)',
                interactive: false,
                title: '<img src="styles/legend/Zonadesegurana15m_7.png" /> Zona de segurança (15 m)'
            });
var format_FerroviaRumoMalhaSulRMS_8 = new ol.format.GeoJSON();
var features_FerroviaRumoMalhaSulRMS_8 = format_FerroviaRumoMalhaSulRMS_8.readFeatures(json_FerroviaRumoMalhaSulRMS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FerroviaRumoMalhaSulRMS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FerroviaRumoMalhaSulRMS_8.addFeatures(features_FerroviaRumoMalhaSulRMS_8);
var lyr_FerroviaRumoMalhaSulRMS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FerroviaRumoMalhaSulRMS_8, 
                style: style_FerroviaRumoMalhaSulRMS_8,
                popuplayertitle: 'Ferrovia (Rumo Malha Sul - RMS)',
                interactive: false,
                title: '<img src="styles/legend/FerroviaRumoMalhaSulRMS_8.png" /> Ferrovia (Rumo Malha Sul - RMS)'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_ImveisCertificadosSIGEFParticularINCRA_1.setVisible(true);lyr_ImveisCertificadosSNCIPrivadoINCRA_2.setVisible(true);lyr_reasinventariadas_3.setVisible(true);lyr_reasemlitgiototalemha_4.setVisible(false);lyr_Lotesdosocupantes_5.setVisible(true);lyr_Arruamento_6.setVisible(true);lyr_Zonadesegurana15m_7.setVisible(true);lyr_FerroviaRumoMalhaSulRMS_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ImveisCertificadosSIGEFParticularINCRA_1,lyr_ImveisCertificadosSNCIPrivadoINCRA_2,lyr_reasinventariadas_3,lyr_reasemlitgiototalemha_4,lyr_Lotesdosocupantes_5,lyr_Arruamento_6,lyr_Zonadesegurana15m_7,lyr_FerroviaRumoMalhaSulRMS_8];
lyr_ImveisCertificadosSIGEFParticularINCRA_1.set('fieldAliases', {'id': 'id', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'codigo_mun': 'codigo_mun', 'base_INCRA': 'base_INCRA', });
lyr_ImveisCertificadosSNCIPrivadoINCRA_2.set('fieldAliases', {'id1': 'id1', 'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'base_INCRA': 'base_INCRA', });
lyr_reasinventariadas_3.set('fieldAliases', {'Type': 'Type', 'Level': 'Level', 'ColorIndex': 'ColorIndex', 'Weight': 'Weight', 'Style': 'Style', 'Text': 'Text', });
lyr_reasemlitgiototalemha_4.set('fieldAliases', {'area': 'area', 'obs': 'obs', 'Ocupante': 'Ocupante', 'Area Total': 'Area Total', });
lyr_Lotesdosocupantes_5.set('fieldAliases', {'id': 'id', 'area': 'area', 'nome': 'nome', 'data_hora': 'data_hora', 'obs': 'obs', });
lyr_Arruamento_6.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'CD_QUADRA': 'CD_QUADRA', 'CD_FACE': 'CD_FACE', 'NM_TIP_LOG': 'NM_TIP_LOG', 'NM_TIT_LOG': 'NM_TIT_LOG', 'NM_LOG': 'NM_LOG', 'TOT_RES': 'TOT_RES', 'TOT_GERAL': 'TOT_GERAL', });
lyr_Zonadesegurana15m_7.set('fieldAliases', {'objectid_1': 'objectid_1', 'tip_situac': 'tip_situac', 'bitola': 'bitola', 'sigla': 'sigla', 'municipio': 'municipio', 'id': 'id', 'uf': 'uf', 'label': 'label', 'nome': 'nome', 'extensao': 'extensao', 'sigla_coin': 'sigla_coin', 'extensao_c': 'extensao_c', 'extensao_e': 'extensao_e', 'st_length_': 'st_length_', });
lyr_FerroviaRumoMalhaSulRMS_8.set('fieldAliases', {'objectid_1': 'objectid_1', 'tip_situac': 'tip_situac', 'bitola': 'bitola', 'sigla': 'sigla', 'municipio': 'municipio', 'id': 'id', 'uf': 'uf', 'label': 'label', 'nome': 'nome', 'extensao': 'extensao', 'sigla_coin': 'sigla_coin', 'extensao_c': 'extensao_c', 'extensao_e': 'extensao_e', 'st_length_': 'st_length_', });
lyr_ImveisCertificadosSIGEFParticularINCRA_1.set('fieldImages', {'id': 'TextEdit', 'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'TextEdit', 'data_aprov': 'TextEdit', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'TextEdit', 'codigo_mun': 'TextEdit', 'base_INCRA': 'TextEdit', });
lyr_ImveisCertificadosSNCIPrivadoINCRA_2.set('fieldImages', {'id1': 'TextEdit', 'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'TextEdit', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'base_INCRA': 'TextEdit', });
lyr_reasinventariadas_3.set('fieldImages', {'Type': 'Range', 'Level': 'Range', 'ColorIndex': 'Range', 'Weight': 'Range', 'Style': 'Range', 'Text': 'TextEdit', });
lyr_reasemlitgiototalemha_4.set('fieldImages', {'area': 'TextEdit', 'obs': 'TextEdit', 'Ocupante': 'TextEdit', 'Area Total': 'TextEdit', });
lyr_Lotesdosocupantes_5.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'nome': 'TextEdit', 'data_hora': 'TextEdit', 'obs': 'TextEdit', });
lyr_Arruamento_6.set('fieldImages', {'CD_SETOR': 'TextEdit', 'CD_QUADRA': 'TextEdit', 'CD_FACE': 'TextEdit', 'NM_TIP_LOG': 'TextEdit', 'NM_TIT_LOG': 'TextEdit', 'NM_LOG': 'TextEdit', 'TOT_RES': 'TextEdit', 'TOT_GERAL': 'TextEdit', });
lyr_Zonadesegurana15m_7.set('fieldImages', {'objectid_1': 'TextEdit', 'tip_situac': 'TextEdit', 'bitola': 'TextEdit', 'sigla': 'TextEdit', 'municipio': 'TextEdit', 'id': 'TextEdit', 'uf': 'TextEdit', 'label': 'TextEdit', 'nome': 'TextEdit', 'extensao': 'TextEdit', 'sigla_coin': 'TextEdit', 'extensao_c': 'TextEdit', 'extensao_e': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_FerroviaRumoMalhaSulRMS_8.set('fieldImages', {'objectid_1': 'TextEdit', 'tip_situac': 'TextEdit', 'bitola': 'TextEdit', 'sigla': 'TextEdit', 'municipio': 'TextEdit', 'id': 'TextEdit', 'uf': 'TextEdit', 'label': 'TextEdit', 'nome': 'TextEdit', 'extensao': 'TextEdit', 'sigla_coin': 'TextEdit', 'extensao_c': 'TextEdit', 'extensao_e': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_ImveisCertificadosSIGEFParticularINCRA_1.set('fieldLabels', {'id': 'no label', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'codigo_mun': 'no label', 'base_INCRA': 'inline label - always visible', });
lyr_ImveisCertificadosSNCIPrivadoINCRA_2.set('fieldLabels', {'id1': 'no label', 'num_proces': 'inline label - always visible', 'sr': 'no label', 'num_certif': 'inline label - always visible', 'data_certi': 'inline label - always visible', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'inline label - always visible', 'nome_imove': 'inline label - always visible', 'base_INCRA': 'inline label - always visible', });
lyr_reasinventariadas_3.set('fieldLabels', {'Type': 'hidden field', 'Level': 'hidden field', 'ColorIndex': 'header label - visible with data', 'Weight': 'hidden field', 'Style': 'hidden field', 'Text': 'no label', });
lyr_reasemlitgiototalemha_4.set('fieldLabels', {'area': 'inline label - always visible', 'obs': 'inline label - always visible', 'Ocupante': 'inline label - always visible', 'Area Total': 'hidden field', });
lyr_Lotesdosocupantes_5.set('fieldLabels', {'id': 'inline label - always visible', 'area': 'inline label - always visible', 'nome': 'inline label - always visible', 'data_hora': 'hidden field', 'obs': 'inline label - always visible', });
lyr_Arruamento_6.set('fieldLabels', {'CD_SETOR': 'no label', 'CD_QUADRA': 'no label', 'CD_FACE': 'no label', 'NM_TIP_LOG': 'no label', 'NM_TIT_LOG': 'no label', 'NM_LOG': 'no label', 'TOT_RES': 'no label', 'TOT_GERAL': 'no label', });
lyr_Zonadesegurana15m_7.set('fieldLabels', {'objectid_1': 'no label', 'tip_situac': 'no label', 'bitola': 'no label', 'sigla': 'no label', 'municipio': 'no label', 'id': 'no label', 'uf': 'no label', 'label': 'no label', 'nome': 'no label', 'extensao': 'no label', 'sigla_coin': 'no label', 'extensao_c': 'no label', 'extensao_e': 'no label', 'st_length_': 'no label', });
lyr_FerroviaRumoMalhaSulRMS_8.set('fieldLabels', {'objectid_1': 'no label', 'tip_situac': 'no label', 'bitola': 'no label', 'sigla': 'no label', 'municipio': 'no label', 'id': 'no label', 'uf': 'no label', 'label': 'no label', 'nome': 'no label', 'extensao': 'no label', 'sigla_coin': 'no label', 'extensao_c': 'no label', 'extensao_e': 'no label', 'st_length_': 'no label', });
lyr_FerroviaRumoMalhaSulRMS_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});