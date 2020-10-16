
function collapsibleInteraction(x) {
    let coll = document.getElementsByClassName("collapsible");
        let arrow = document.getElementById('arrow'+x);
        let content = coll[x].nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          arrow.style.transform ='rotate(0deg)';
        } else {
          content.style.display = "block";
          arrow.style.transform ='rotate(180deg)';
        };
      };

let cartItems = {
  let productSpecs = {productName: "cat-harness", color:"", size:"", quantity:"", itemAdded: false}
}
let petChoice;
let colorChoice;
let sizeChoice;
let quantityChoice;

function checkCartOptionsSelected(obj) {
  for (let key in obj) {
    if(obj[key] === "" || obj[key] === 0)
      return false;
  }
  return true;
}

function productSpecSelection(x) {
  console.log(productSpecs);
  let pet = document.getElementsByClassName('your-pets product-spec-row')[0];
  let color = document.getElementsByClassName('color product-spec-row')[0];
  let size = document.getElementsByClassName('size product-spec-row')[0];
  let quantity = document.getElementById('product-quantity');
  let productImage = document.getElementsByClassName('cat-card-harness product-detailed-image')[0];
  let cartButton = document.getElementById("add-to-cart-big");
  
  // setting the cart selection for pet pre-saved templates
  if (x === 'boris') {
    petChoice = "boris";
    colorChoice = "strawberry";
    sizeChoice = "xs";
    quantityChoice = 1;

    productSpecs.color = "strawberry",
    productSpecs.size = "xs",
    productSpecs.quantity = 1
    
  } else if (x === "ted") {
    petChoice = "ted";
    colorChoice = "blackberry";
    sizeChoice = "s";
    quantityChoice = 1;

    productSpecs.color = "blackberry",
    productSpecs.size = "s",
    productSpecs.quantity = 1
    
  } else if (x === "ernie") {
    petChoice = "ernie";
    colorChoice = "fire-orange";
    sizeChoice = "m";
    quantityChoice = 1;

    productSpecs.color = "fire-orange",
    productSpecs.size = "m",
    productSpecs.quantity = 1
     

  // setting color selections and saving them to cart selection
  } else if ( x === "strawberry" || 
              x == "blackberry" || 
              x == "crazyberry" || 
              x == "fire-orange") {
    colorChoice = x;

    productSpecs.color = x;

  // setting size selections and saving them to cart selection
  } else if ( x === "xs" || 
              x == "s" || 
              x == "m" || 
              x == "l") {
  sizeChoice = x;

  productSpecs.size = x;

  // setting quantity selections and saving them to cart selection
  } else if (x === "quantity") {
    let num = parseInt(quantity.value)
    
    quantityChoice = num;

    productSpecs.quantity = num;
  }



// Reflect the selection decision on the options
  let petC = pet.children;
  let colorC = color.children;
  let sizeC = size.children;

  // Add border to selected pet template
  for (i = 1; i < petC.length; i++) {
    if (petC[i].className == `${petChoice} product-detail-icon`) {
      petC[i].style.border = "3px solid black";
      petC[i].style.boxShadow = "inset 0px 0px 0px 1.5px white";
      petC[i].style.boxSizing = "border-box";
    }
    else {
      petC[i].style.border = "";

    }
  }

  // Add border to selected color template
  for (i = 1; i < colorC.length; i++) {
    if (colorC[i].className == `${colorChoice} product-detail-icon`) {
      colorC[i].style.border = "3px solid black";
      colorC[i].style.boxShadow = "inset 0px 0px 0px 1.5px white";
      colorC[i].style.boxSizing = "border-box";
    }
    else {
      colorC[i].style.border = "";

    }
  }

  // Change image coloring based off color selection
  if (colorChoice == "blackberry") {
    productImage.style.backgroundImage = "url('./Images/cat-harness-blackberry.png')";
  } else if (colorChoice == "crazyberry") {
    productImage.style.backgroundImage = "url('./Images/cat-harness-crazyberry.png')";
  } else if (colorChoice == "fire-orange") {
    productImage.style.backgroundImage = "url('./Images/cat-harness-fire-orange.png')";
  } else {
    productImage.style.backgroundImage = "url('./Images/cat-harness.jpeg')";
  }


  // Add size color background to selected size template
  for (i = 1; i < sizeC.length; i++) {
    if (sizeC[i].className == `${sizeChoice} product-size-icon`) {
      sizeC[i].style.background = "#8D4AC2";
      sizeC[i].children[0].style.color = "white";
    }
    else {
      sizeC[i].style.background = "";
      sizeC[i].children[0].style.color = "";
    }
  }

  if (quantityChoice > 0) {
    quantity.value = quantityChoice;
  } 
  
  console.log(productSpecs);

  cartFull = checkCartOptionsSelected(productSpecs);
  console.log(cartFull);

  if (cartFull === true) {
    cartButton.style.background = "#5DADA3";
    cartButton.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px #B7ECEA";
    cartButton.style.color = "white";
  } else {
    cartButton.style.background = "";
    cartButton.style.boxShadow = "";
    cartButton.style.color = "";
  }
}



function addToCart() {
  if (cartFull === true) {
    productSpecs.itemAdded = true;
    let cartCount = document.getElementsByClassName("cart-nav")[0].children[1];
    cartCount.innerHTML = `Cart (${productSpecs.quantity})`;
  }
}