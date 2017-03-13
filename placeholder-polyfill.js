(function($) {
  $.fn.placeholderPolyfill = function() {


    ///////// Single line inputs

    // Run a function on all of the input elements, where the placeholder attribute is present
    $('input[placeholder]').each(function() {

      // Store current HTML5 placeholder attribute value
      var inputElementPlaceholderText = $(this).attr("placeholder");

      // Replace value attribute with the previously stored value
      $(this).attr("value", inputElementPlaceholderText);

      // Add css styling to replicate HTML5 placeholder styling
      $(this).addClass("inputPlaceholder");

      // Upon focusing the input, check if the placeholder is present
      $(this).focus(function() {
        if ($(this).attr("value") == inputElementPlaceholderText) {

          // If it is, delete the placeholder text and remove css styling
          $(this).attr("value", '');
          $(this).removeClass("inputPlaceholder");
        } else {
          return false;
        }
      });

      // On clicking away from the input, checks if the input is empty, if it is, insert placeholder text and add the placeholder styling
      $(this).blur(function() {
        if ($(this).val() == '') {
          $(this).attr("value", inputElementPlaceholderText);
          $(this).addClass("inputPlaceholder");
        } else {
          return false;
        }
      });

    });


    ///////// Text area inputs


    // Run a function on all of the textarea elements, where the placeholder attribute is present
    $('textarea[placeholder]').each(function() {

      // Store current HTML5 placeholder attribute value
      var textareaElementPlaceholderText = $(this).attr("placeholder");

      // Textarea content must be manipulated with via .html, because it has an ending tag
      $(this).html(textareaElementPlaceholderText);

      // Add css styling to replicate HTML5 placeholder styling
      $(this).addClass("inputPlaceholder");

      // Upon focusing the input, check if the placeholder is present
      $(this).focus(function() {
        if ($(this).html() == textareaElementPlaceholderText) {

          // If it is, delete the placeholder text and remove css styling
          $(this).html('');
          $(this).removeClass("inputPlaceholder");
        } else {
          return false;
        }
      });

      // On clicking away from the textarea, checks if the textarea is empty, if it is, insert placeholder text and add the placeholder styling
      $(this).blur(function() {
        if ($(this).html() == '') {
          $(this).html(textareaElementPlaceholderText);
          $(this).addClass("inputPlaceholder");
        } else {
          return false;
        }
      });

    });




  }
})(jQuery);