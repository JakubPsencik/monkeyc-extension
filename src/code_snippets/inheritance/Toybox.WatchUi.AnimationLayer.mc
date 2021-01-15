class AnimationLayer {

/**
 * getDc will always return <code>null</code>, as the dc buffer of animations
 * @param 
 * @returns  Object 
*/
public function getDc() { }


/**
 * Get the animation resource.
 * @param 
 * @returns  Toybox::WatchUi::AnimationResource 
*/
public function getResource() { }


/**
 * either an animation resource id or a <span class='object_link'><a href="AnimationResource.html" title="Toybox::WatchUi::AnimationResource (class)">WatchUi.AnimationResource</a></span>.
 * @param rez
 * @param  options
 * @returns  Toybox::WatchUi::Animation 
*/
public function initialize(rez, options) { }


/**
 * Play animation, animation must be added to and not abandoned by the view
 * @param options
 * @returns  Toybox::Lang::Boolean 
*/
public function play(options) { }


/**
 * Stop a playing animation.
 * @param 
 * @returns  Object 
*/
public function stop() { }


}

