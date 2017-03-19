# jQuery-Plugin-Example
My first jQuery plugin, that auto initiates on all input and textarea elements, to provide placeholder functionality to browsers, which do not support it natively, for example - IE6-IE9 (http://caniuse.com/#feat=input-placeholder).

In order to use it, just import the .js file and provide the placeholder attribute as normally via the "placeholder=''" 
attribute tag and remember to initialize the plugin with **$("input, textarea").placeholderPolyfill();**.

Optionally you can provide a color to be used for the placeholder, but in the index.html you can see the default value which replicates
it the closest.
