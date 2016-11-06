var labelHide = (function(){  
    var init = function(selector) {
        var inputs = document.querySelectorAll(selector);

        inputs.forEach(function(input){
            input.addEventListener('change', changeHandler, false);
        });
    };

    var changeHandler = function(event){
        var drupalSelector = this.getAttribute('data-drupal-selector');
        var label = document.querySelector('label[for=' + drupalSelector + ']');
        label.style.visibility = (this.value !== "") ? 'hidden' : null;  
    };

    return {
        init: init
    };
})();

module.exports = labelHide;