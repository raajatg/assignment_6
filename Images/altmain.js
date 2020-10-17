function removeCard(x) {
    let newId = 0;
    let card = x.parentNode.parentNode.parentNode.parentNode
    let id = card.id;
    id = parseInt(id.substring(id.length-1));
    newId = id + 1;
  
    console.log(id);
    console.log(cartCollection);
    if(document.getElementById("order0").style.display == "none") {
      console.log("yes");
      cartCollection.splice(id-1,1);
    } else {
      cartCollection.splice(id,1);
    }
  
  
    if (id == 0) {
      card.style.display = "none";
    } else {
      if(document.getElementById("order0").style.display == "none") {
        for(i=newId;i<cartCollection.length+2;i++) {
          let impactedCard = document.getElementById(`order${i}`);
          impactedCard.id = `order${i-1}`;
          console.log(impactedCard.id)
      } 
    }
    else {
        for(i=newId;i<cartCollection.length+1;i++) {
          let impactedCard = document.getElementById(`order${i}`);
          impactedCard.id = `order${i-1}`;
          console.log(impactedCard.id)
      }
      }
      card.parentNode.removeChild(x.parentNode.parentNode.parentNode.parentNode)
    } 
  
    console.log(cartCollection);
    sessionStorage.setItem("cartCollection",JSON.stringify(cartCollection))
    checkCart();
    totalSummaryUpdate();
    if(cartCollection.length == 0) {
      let emptyCartBanner = document.getElementById("cart-empty");
      let totalSummary = document.getElementById("total-summary");
      emptyCartBanner.style.display = "grid";
      totalSummary.style.display = "none";
    }
  }