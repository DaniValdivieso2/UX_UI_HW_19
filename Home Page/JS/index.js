$(document).ready(function() {
    $(".locContainer a").tabs({
        active: false,
        collapsible: false
    });
    $(".locContainer a").first().on("click");
});
  
var helloWorld = 'HelloWorld!'
console.log(helloWorld)