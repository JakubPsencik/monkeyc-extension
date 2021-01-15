class MapView {

/**
 * Clear all the objects from the map.
 * @param 
 * @returns  Object 
*/
public function clear() { }


/**
 * Get the current mode for the map in this MapView.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getMapMode() { }


/**
 * A new instance of MapView.
 * @param 
 * @returns  MapView 
*/
public function initialize() { }


/**
 * Add a <span class='object_link'><a href="MapMarker.html" title="Toybox::WatchUi::MapMarker (class)">MapMarker</a></span> object or an
 * @param markers
 * @returns  Object 
*/
public function setMapMarker(markers) { }


/**
 * Set the mode for the map in this MapView.
 * @param mode
 * @returns  Object 
*/
public function setMapMode(mode) { }


/**
 * Select the area of the map to render on the screen with a bounding box.
 * @param topLeft
 * @param  bottomRight
 * @returns  Object 
*/
public function setMapVisibleArea(topLeft, bottomRight) { }


/**
 * Add <span class='object_link'><a href="MapPolyline.html" title="Toybox::WatchUi::MapPolyline (class)">MapPolyline</a></span> object to be rendered on the
 * @param polyline
 * @returns  Object 
*/
public function setPolyline(polyline) { }


/**
 * Set the area on the screen to focus the map.
 * @param topLeftX
 * @param  topLeftY
 * @param  bottomRightX
 * @param  bottomRightY
 * @returns  Object 
*/
public function setScreenVisibleArea(topLeftX, topLeftY, bottomRightX, bottomRightY) { }


}

