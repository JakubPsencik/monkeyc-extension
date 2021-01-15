class View {

/**
 * Add a <span class='object_link'><a href="Layer.html" title="Toybox::WatchUi::Layer (class)">WatchUi.Layer</a></span> on the top of view&#39;s layer
 * @param layer
 * @returns  Object 
*/
public function addLayer(layer) { }


/**
 * Clear all layers that are added to the view.
 * @param 
 * @returns  Object 
*/
public function clearLayers() { }


/**
 * Find a Drawable by its ID.
 * @param identifier
 * @returns  Toybox::WatchUi::Drawable 
*/
public function findDrawableById(identifier) { }


/**
 * Return the index of the layer from the bottom of the view layer stack.
 * @param layer
 * @returns  Toybox::Lang::Number 
*/
public function getLayerIndex(layer) { }


/**
 * Get a copy of the layer stack currently added to the view, sorted by the
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getLayers() { }


/**
 * A new instance of View.
 * @param 
 * @returns  View 
*/
public function initialize() { }


/**
 * Insert the layer at the given index in the layer stack, this will stop
 * @param layer
 * @param  idx
 * @returns  Object 
*/
public function insertLayer(layer, idx) { }


/**
 * Hide the View.
 * @param 
 * @returns  Object 
*/
public function onHide() { }


/**
 * The entry point for the View.
 * @param dc
 * @returns  Toybox::Lang::Boolean 
*/
public function onLayout(dc) { }


/**
 * Show the View.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function onShow() { }


/**
 * Update the View.
 * @param dc
 * @returns  Toybox::Lang::Boolean 
*/
public function onUpdate(dc) { }


/**
 * Remove a layer from the view layer stack, this will stop animation
 * @param layer
 * @returns  Toybox::Lang::Boolean 
*/
public function removeLayer(layer) { }


/**
 * Enter Selectable interaction mode.
 * @param enable
 * @returns  Object 
*/
public function setKeyToSelectableInteraction(enable) { }


/**
 * Set the layout for the View.
 * @param layout
 * @returns  Object 
*/
public function setLayout(layout) { }


}

