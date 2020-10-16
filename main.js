
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
