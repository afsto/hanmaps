var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Raptor_nests_1 = new ol.format.GeoJSON();
var features_Raptor_nests_1 = format_Raptor_nests_1.readFeatures(json_Raptor_nests_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Raptor_nests_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Raptor_nests_1.addFeatures(features_Raptor_nests_1);var lyr_Raptor_nests_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Raptor_nests_1, 
                style: style_Raptor_nests_1,
                title: '<img src="styles/legend/Raptor_nests_1.png" /> Raptor_nests'
            });var format_GBH_rookeries_2 = new ol.format.GeoJSON();
var features_GBH_rookeries_2 = format_GBH_rookeries_2.readFeatures(json_GBH_rookeries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GBH_rookeries_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GBH_rookeries_2.addFeatures(features_GBH_rookeries_2);var lyr_GBH_rookeries_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GBH_rookeries_2, 
                style: style_GBH_rookeries_2,
                title: '<img src="styles/legend/GBH_rookeries_2.png" /> GBH_rookeries'
            });var format_bald_eagle_nests_3 = new ol.format.GeoJSON();
var features_bald_eagle_nests_3 = format_bald_eagle_nests_3.readFeatures(json_bald_eagle_nests_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bald_eagle_nests_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_bald_eagle_nests_3.addFeatures(features_bald_eagle_nests_3);var lyr_bald_eagle_nests_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bald_eagle_nests_3, 
                style: style_bald_eagle_nests_3,
                title: '<img src="styles/legend/bald_eagle_nests_3.png" /> bald_eagle_nests'
            });var format_buowl_habitat_4 = new ol.format.GeoJSON();
var features_buowl_habitat_4 = format_buowl_habitat_4.readFeatures(json_buowl_habitat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buowl_habitat_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_buowl_habitat_4.addFeatures(features_buowl_habitat_4);var lyr_buowl_habitat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buowl_habitat_4, 
                style: style_buowl_habitat_4,
                title: '<img src="styles/legend/buowl_habitat_4.png" /> buowl_habitat'
            });var format_linear_projects_5 = new ol.format.GeoJSON();
var features_linear_projects_5 = format_linear_projects_5.readFeatures(json_linear_projects_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linear_projects_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_linear_projects_5.addFeatures(features_linear_projects_5);var lyr_linear_projects_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linear_projects_5, 
                style: style_linear_projects_5,
                title: '<img src="styles/legend/linear_projects_5.png" /> linear_projects'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Raptor_nests_1.setVisible(true);lyr_GBH_rookeries_2.setVisible(true);lyr_bald_eagle_nests_3.setVisible(true);lyr_buowl_habitat_4.setVisible(true);lyr_linear_projects_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Raptor_nests_1,lyr_GBH_rookeries_2,lyr_bald_eagle_nests_3,lyr_buowl_habitat_4,lyr_linear_projects_5];
lyr_Raptor_nests_1.set('fieldAliases', {'fid': 'fid', 'postgis_fi': 'postgis_fi', 'lat_y_dd': 'lat_y_dd', 'long_x_dd': 'long_x_dd', 'lastsurvey': 'lastsurvey', 'recentspec': 'recentspec', 'recentstat': 'recentstat', 'Nest_ID': 'Nest_ID', });
lyr_GBH_rookeries_2.set('fieldAliases', {'fid': 'fid', 'postgis_fi': 'postgis_fi', 'species': 'species', 'activity': 'activity', });
lyr_bald_eagle_nests_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'postgis_fi': 'postgis_fi', 'lat_y_dd': 'lat_y_dd', 'long_x_dd': 'long_x_dd', 'status': 'status', 'nest_id': 'nest_id', });
lyr_buowl_habitat_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'postgis_fi': 'postgis_fi', 'habitat': 'habitat', 'hist_occup': 'hist_occup', 'recentstat': 'recentstat', 'habitat_id': 'habitat_id', });
lyr_linear_projects_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'postgis_fi': 'postgis_fi', 'type': 'type', 'row_width': 'row_width', 'project': 'project', });
lyr_Raptor_nests_1.set('fieldImages', {'fid': '', 'postgis_fi': '', 'lat_y_dd': '', 'long_x_dd': '', 'lastsurvey': '', 'recentspec': '', 'recentstat': '', 'Nest_ID': '', });
lyr_GBH_rookeries_2.set('fieldImages', {'fid': '', 'postgis_fi': '', 'species': '', 'activity': '', });
lyr_bald_eagle_nests_3.set('fieldImages', {'ogc_fid': '', 'postgis_fi': '', 'lat_y_dd': '', 'long_x_dd': '', 'status': '', 'nest_id': '', });
lyr_buowl_habitat_4.set('fieldImages', {'ogc_fid': '', 'postgis_fi': '', 'habitat': '', 'hist_occup': '', 'recentstat': '', 'habitat_id': '', });
lyr_linear_projects_5.set('fieldImages', {'ogc_fid': '', 'postgis_fi': '', 'type': '', 'row_width': '', 'project': '', });
lyr_Raptor_nests_1.set('fieldLabels', {'fid': 'no label', 'postgis_fi': 'no label', 'lat_y_dd': 'no label', 'long_x_dd': 'no label', 'lastsurvey': 'no label', 'recentspec': 'no label', 'recentstat': 'no label', 'Nest_ID': 'no label', });
lyr_GBH_rookeries_2.set('fieldLabels', {'fid': 'no label', 'postgis_fi': 'no label', 'species': 'no label', 'activity': 'no label', });
lyr_bald_eagle_nests_3.set('fieldLabels', {'ogc_fid': 'no label', 'postgis_fi': 'no label', 'lat_y_dd': 'no label', 'long_x_dd': 'no label', 'status': 'no label', 'nest_id': 'no label', });
lyr_buowl_habitat_4.set('fieldLabels', {'ogc_fid': 'no label', 'postgis_fi': 'no label', 'habitat': 'no label', 'hist_occup': 'no label', 'recentstat': 'no label', 'habitat_id': 'no label', });
lyr_linear_projects_5.set('fieldLabels', {'ogc_fid': 'no label', 'postgis_fi': 'no label', 'type': 'no label', 'row_width': 'no label', 'project': 'no label', });
lyr_linear_projects_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});