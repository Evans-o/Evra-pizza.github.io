var mag={name:"margarita", price:200};
var mush={name:"mushroom", price:150};
var sas={name:"sausage", price:250};
var verg={name:"verggie" ,price:300};
var custom={name:"custom", price:100};

var cheese={name:"cheese", price:200};
var pepperoni={name:"pepperoni", price:300};
var beef = {name:"beef", price:400};
var spinach={name:"spinach", price:350};
var peppers={name:"peppers", price:350};

var small={name:"small", price:200};
var medium={name:"medium", price:250};
var large={name:"large", price:300};
var extralarge={name:"extralarge", price:500};

var pizza={name:"pizza", type:[mag, mush, sas, verg,custom], topping:[cheese, pepperoni, beef,spinach, peppers], size:[small, medium, large, extralarge]};

pizza.type.topping.size.forEach(function(pizza){
  alert("you ordered" + pizza.name + "thank you")
});

$(document).ready(function(){
  $("form#form").submit(function() {
  var mag=$("#margarita").val();
   var mush=$("#mushroom").val();
   var sas=$("#sausage").val();
   var verg=$("#veggie").val();
   var custom=$("#custom").val();
   var cheese=$("#topping-cheese").val();
   var pepperoni=$("#topping-pepperoni").val();
   var beef=$("#topping-beef").val();
   var spinach=$("#topping-spinach").val();
   var peppers=$("#topping-peppers").val();



   if($(mag).val()) {
     console.log("thankyou");
   }

    

  })
  document.getElementById("#submit").value();
})








function myFunction() {
    var coffee = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < coffee.length; i++) {
      if (coffee[i].checked) {
        txt = txt + coffee[i].value + " ";
      }
    }
    document.getElementById("order").value = "You ordered : " + txt;
  }
