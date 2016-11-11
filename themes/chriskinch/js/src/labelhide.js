var labelHide = (function(){  
    var init = function(selector) {
        var inputs = document.querySelectorAll(selector);

        console.log(domready)

        inputs.forEach(function(input){
            domready(changeHandler.bind(input)());
            input.addEventListener('change', changeHandler.bind(input), false);
        });
    };

    var changeHandler = function() {
        console.log(this.value);
        var drupalSelector = this.getAttribute('data-drupal-selector');
        var label = document.querySelector('label[for=' + drupalSelector + ']');
        label.style.visibility = (this.value !== "") ? 'hidden' : null;  
    };

    return {
        init: init
    };
})();

module.exports = labelHide;