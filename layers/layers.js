ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([10.238395, -4.490088, 19.562124, 2.904181]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DISTRICT_SANITAIRE52_1 = new ol.format.GeoJSON();
var features_DISTRICT_SANITAIRE52_1 = format_DISTRICT_SANITAIRE52_1.readFeatures(json_DISTRICT_SANITAIRE52_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DISTRICT_SANITAIRE52_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRICT_SANITAIRE52_1.addFeatures(features_DISTRICT_SANITAIRE52_1);
var lyr_DISTRICT_SANITAIRE52_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRICT_SANITAIRE52_1, 
                style: style_DISTRICT_SANITAIRE52_1,
                interactive: true,
                title: '<img src="styles/legend/DISTRICT_SANITAIRE52_1.png" /> DISTRICT_SANITAIRE52'
            });
var format_Cartographiedespersonnestouchesparlesinnondations_2 = new ol.format.GeoJSON();
var features_Cartographiedespersonnestouchesparlesinnondations_2 = format_Cartographiedespersonnestouchesparlesinnondations_2.readFeatures(json_Cartographiedespersonnestouchesparlesinnondations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cartographiedespersonnestouchesparlesinnondations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cartographiedespersonnestouchesparlesinnondations_2.addFeatures(features_Cartographiedespersonnestouchesparlesinnondations_2);
var lyr_Cartographiedespersonnestouchesparlesinnondations_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cartographiedespersonnestouchesparlesinnondations_2, 
                style: style_Cartographiedespersonnestouchesparlesinnondations_2,
                interactive: true,
                title: '<img src="styles/legend/Cartographiedespersonnestouchesparlesinnondations_2.png" /> Cartographie des personnes touchées par les innondations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DISTRICT_SANITAIRE52_1.setVisible(true);lyr_Cartographiedespersonnestouchesparlesinnondations_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DISTRICT_SANITAIRE52_1,lyr_Cartographiedespersonnestouchesparlesinnondations_2];
lyr_DISTRICT_SANITAIRE52_1.set('fieldAliases', {'ID': 'ID', 'NOM_DIST': 'Distric Sanitaire', });
lyr_Cartographiedespersonnestouchesparlesinnondations_2.set('fieldAliases', {'Cartographie des personnes touch�es par les innondations': 'Cartographie des personnes touch�es par les innondations', 'selectionner le d�partement': 'Département', 'Selectionner le district sanitaire': 'District', 'Selectionner le l\'aire de sant�': 'Aire de santé', 'Capturez les coordonn�es GPS': 'Capturez les coordonn�es GPS', '_Capturez les coordonn�es GPS_latitude': '_Capturez les coordonn�es GPS_latitude', '_Capturez les coordonn�es GPS_longitude': '_Capturez les coordonn�es GPS_longitude', '_Capturez les coordonn�es GPS_altitude': '_Capturez les coordonn�es GPS_altitude', '_Capturez les coordonn�es GPS_precision': '_Capturez les coordonn�es GPS_precision', 'Selectionner la date de la collecte': 'Date de la collecte', 'Votre aire de sant� couvre une population de combien d\'habitants?': 'Population', 'Des personnes ont-elles �t� victimes des inondations dans votre aire de sant� ?': 'Des personnes ont-elles �t� victimes des inondations dans votre aire de sant� ?', 'Savez-vous o� sont les personnes  victimes des  inondations dans votre aire de sant� qui se sont d�plac�es ?': 'Savez-vous o� sont les personnes  victimes des  inondations dans votre aire de sant� qui se sont d�plac�es ?', 'Pouvons nous obtenir le nombre des victimes d�plac�es  ?': 'Victimes déplacées', 'Parmi ces victimes  d�plac�es, y a-t-il des femmes enceintes ?': 'Parmi ces victimes  d�plac�es, y a-t-il des femmes enceintes ?', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?': 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Marine/Fluviale': 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Marine/Fluviale', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Routiere': 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Routiere', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Aerienne': 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Aerienne', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Ferrovi�re': 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Ferrovi�re', 'Quels sont les r�els besoins de la population par rapport � ces inondations ?': 'Quels sont les r�els besoins de la population par rapport � ces inondations ?', 'Nom et pr�noms du membre de l\'�quipe surge': 'Nom et pr�noms du membre de l\'�quipe surge', 'Combien dans la tranche d\'age de  0 � 9 ans?': 'Combien dans la tranche d\'age de  0 � 9 ans?', 'Combien dans la tranche d\'age 10 � 49 ans?': 'Combien dans la tranche d\'age 10 � 49 ans?', 'Combien dans la tranche d\'age 50 � 99 ans?': 'Combien dans la tranche d\'age 50 � 99 ans?', 'Combien entre 100 ans  et plus?': 'Combien entre 100 ans  et plus?', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_validation_status': '_validation_status', '_notes': '_notes', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_DISTRICT_SANITAIRE52_1.set('fieldImages', {'ID': 'Hidden', 'NOM_DIST': 'TextEdit', });
lyr_Cartographiedespersonnestouchesparlesinnondations_2.set('fieldImages', {'Cartographie des personnes touch�es par les innondations': 'Hidden', 'selectionner le d�partement': 'TextEdit', 'Selectionner le district sanitaire': 'TextEdit', 'Selectionner le l\'aire de sant�': 'TextEdit', 'Capturez les coordonn�es GPS': 'Hidden', '_Capturez les coordonn�es GPS_latitude': 'Hidden', '_Capturez les coordonn�es GPS_longitude': 'Hidden', '_Capturez les coordonn�es GPS_altitude': 'Hidden', '_Capturez les coordonn�es GPS_precision': 'Hidden', 'Selectionner la date de la collecte': 'TextEdit', 'Votre aire de sant� couvre une population de combien d\'habitants?': 'Range', 'Des personnes ont-elles �t� victimes des inondations dans votre aire de sant� ?': 'Hidden', 'Savez-vous o� sont les personnes  victimes des  inondations dans votre aire de sant� qui se sont d�plac�es ?': 'Hidden', 'Pouvons nous obtenir le nombre des victimes d�plac�es  ?': 'Range', 'Parmi ces victimes  d�plac�es, y a-t-il des femmes enceintes ?': 'Hidden', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?': 'Hidden', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Marine/Fluviale': 'Hidden', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Routiere': 'Hidden', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Aerienne': 'Hidden', 'Quelle voie de transport est utilis�e pour atteindre ces personnes d�plac�es ?/Ferrovi�re': 'Hidden', 'Quels sont les r�els besoins de la population par rapport � ces inondations ?': 'Hidden', 'Nom et pr�noms du membre de l\'�quipe surge': 'Hidden', 'Combien dans la tranche d\'age de  0 � 9 ans?': 'Hidden', 'Combien dans la tranche d\'age 10 � 49 ans?': 'Hidden', 'Combien dans la tranche d\'age 50 � 99 ans?': 'Hidden', 'Combien entre 100 ans  et plus?': 'Hidden', '_id': 'Hidden', '_uuid': 'Hidden', '_submission_time': 'Hidden', '_validation_status': 'Hidden', '_notes': 'Hidden', '_status': 'Hidden', '_submitted_by': 'Hidden', '__version__': 'Hidden', '_tags': 'Hidden', '_index': 'Hidden', });
lyr_DISTRICT_SANITAIRE52_1.set('fieldLabels', {'NOM_DIST': 'header label', });
lyr_Cartographiedespersonnestouchesparlesinnondations_2.set('fieldLabels', {'selectionner le d�partement': 'header label', 'Selectionner le district sanitaire': 'header label', 'Selectionner le l\'aire de sant�': 'header label', 'Selectionner la date de la collecte': 'header label', 'Votre aire de sant� couvre une population de combien d\'habitants?': 'header label', 'Pouvons nous obtenir le nombre des victimes d�plac�es  ?': 'header label', });
lyr_Cartographiedespersonnestouchesparlesinnondations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});