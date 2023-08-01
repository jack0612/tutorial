
export function mapFitBounds(element, google) {
    var ledbury = new google.maps.LatLng(52.0339, -2.42357);
    var malvern = new google.maps.LatLng(52.106834, -2.3305105);
    var bounds = new google.maps.LatLngBounds();

    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(element, mapOptions);

    var pin1 = new google.maps.Marker({
        position: ledbury,
        map: map,
        zIndex: 1,
        optimized: false
    });
    bounds.extend(pin1.getPosition());
    map.fitBounds(bounds);

    var pin2 = new google.maps.Marker({
        position: malvern,
        map: map,
        zIndex: 2,
        optimized: false
    });
    bounds.extend(pin2.getPosition());
    map.fitBounds(bounds);
    console.log(bounds);
}

