
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

let cartCollection = [];

class cartAddition {
  constructor(product, price, color, size, quantity) {
    this.product = product;
    this.price = price;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    cartCollection.push(this);
  }
}

let petChoice;
let colorChoice;
let sizeChoice;
let quantityChoice;

function checkCartOptionsSelected() {
    if(colorChoice == null || sizeChoice == null || quantityChoice < 1 || quantityChoice == null) {
      return false;
  } else {
    return true;
  }
}

function productSpecSelection(x) {
  let pet = document.getElementsByClassName('your-pets product-spec-row')[0];
  let color = document.getElementsByClassName('color product-spec-row')[0];
  let size = document.getElementsByClassName('size product-spec-row')[0];
  let quantity = document.getElementById('product-quantity');
  let productImage = document.getElementsByClassName('cat-card-harness product-detailed-image')[0];
  let cartButton = document.getElementById("add-to-cart-big");
  
  productName = "Cat Harness";
  price = "$19.99"
  // setting the cart selection for pet pre-saved templates
  if (x === 'boris') {
    petChoice = "boris";
    colorChoice = "strawberry";
    sizeChoice = "xs";
    quantityChoice = 1;
    
  } else if (x === "ted") {
    petChoice = "ted";
    colorChoice = "blackberry";
    sizeChoice = "s";
    quantityChoice = 1;
    
  } else if (x === "ernie") {
    petChoice = "ernie";
    colorChoice = "fire-orange";
    sizeChoice = "m";
    quantityChoice = 1;

  // setting color selections and saving them to cart selection
  } else if ( x === "strawberry" || 
              x == "blackberry" || 
              x == "crazyberry" || 
              x == "fire-orange") {
    colorChoice = x;

  // setting size selections and saving them to cart selection
  } else if ( x === "xs" || 
              x == "s" || 
              x == "m" || 
              x == "l") {
  sizeChoice = x;

  // setting quantity selections and saving them to cart selection
  } else if (x === "quantity") {
    let num = parseInt(quantity.value)
    
    quantityChoice = num;

  } else if (x == null) {
    petChoice = null;
    colorChoice = null;
    sizeChoice = null;
    quantityChoice = null;
    quantity.value = 0;
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
  
  

  cartFull = checkCartOptionsSelected();
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

let cartCount;

function addToCart() {
  if (cartFull === true) {
    console.log(cartCollection);
    new cartAddition(productName, price, colorChoice, sizeChoice, quantityChoice);
    cartCount = 0;
    for (i=0; i < cartCollection.length; i++) {
      cartCount = cartCount + cartCollection[i].quantity
    }
    let cartFeedback = document.getElementsByClassName("cart-nav")[0].children[1];
    cartFeedback.innerHTML = `Cart (${cartCount})`;
    productSpecSelection();
    sessionStorage.setItem("cartCollection",JSON.stringify(cartCollection))
  }
}


function checkCart() {
  console.log("hello");
  let getNum = sessionStorage.getItem("cartCollection")
  cartCollection = getNum ? JSON.parse(getNum) : [];
  console.log(cartCollection);
  cartCount = 0;
    for (i=0; i < cartCollection.length; i++) {
      cartCount = cartCount + cartCollection[i].quantity
    }
    let cartFeedback = document.getElementsByClassName("cart-nav")[0].children[1];
    cartFeedback.innerHTML = `Cart (${cartCount})`;
}

function displayCart() {
  console.log("hello");
  let getNum = sessionStorage.getItem("cartCollection")
  cartCollection = getNum ? JSON.parse(getNum) : [];
  console.log(cartCollection);
  cartCount = 0;
    for (i=0; i < cartCollection.length; i++) {
      cartCount = cartCount + cartCollection[i].quantity
    }
    let cartFeedback = document.getElementsByClassName("cart-nav")[0].children[1];
    cartFeedback.innerHTML = `Cart (${cartCount})`;

  let emptyCartBanner = document.getElementById("cart-empty");
  let cartItems = document.getElementById("cart-items");
  let totalSummary = document.getElementById("total-summary");
  let cartItemCard = document.getElementsByClassName("cart-item-card");

  if (cartCollection.length == 0) {
    console.log(true);
    return;
  } else {
    console.log(false);
    emptyCartBanner.style.display = "none";
    totalSummary.style.display = "block";
    cartItems.style.display = "block";
    duplicateCard(cartCollection);
    for (i=0; i < cartCollection.length; i++) {
      let productName = cartItemCard[i].getElementsByClassName("product-name no-margins dark-purple")[0];
      let image = cartItemCard[i].getElementsByClassName("cat-card-harness product-detailed-image")[0];
      let price = cartItemCard[i].getElementsByClassName("price no-margins dark-purple")[0];
      let size = cartItemCard[i].getElementsByClassName("cart-size")[0];
      let color = cartItemCard[i].getElementsByClassName("cart-color")[0];
      let quantity = cartItemCard[i].getElementsByClassName("cart-quantity")[0];

      productName.innerHTML = cartCollection[i].product;
      image.style.backgroundImage = `url(./Images/cat-harness-${cartCollection[i].color}.png)`;
      price.innerHTML = cartCollection[i].price;
      let colorFixed = cartCollection[i].color.charAt(0).toUpperCase() + cartCollection[i].color.slice(1);
      colorFixed = colorFixed.replace('-', " ");
      console.log(colorFixed);
      color.innerHTML = colorFixed
      size.innerHTML = cartCollection[i].size.toUpperCase();
      quantity.innerHTML = `Quantity: ${cartCollection[i].quantity}`
    }
  }
}

function duplicateCard(arr) {
  let cartItems = document.getElementById("cart-items");
  let cartItemCard = document.getElementsByClassName("cart-item-card")[0];
  for (i=0; i < arr.length-1; i++) {
    let clone = cartItemCard.cloneNode(true)
    cartItems.appendChild(clone)
  }
}
