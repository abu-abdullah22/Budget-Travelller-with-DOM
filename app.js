const buttons = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of buttons) {
  btn.addEventListener("click", function (event) {
    count += 1;
    setInnerText("cart-count", count);

    const placeName = event.target.parentNode.childNodes[1].innerText;
    const cost = event.target.parentNode.childNodes[3].childNodes[1].innerText;

    const selectedContainer = document.getElementById("selected-place-container");

    const li = document.createElement('li'); 

    const p = document.createElement('p');
    p.innerText = placeName ;
    const p2 = document.createElement('p') ;
    p2.innerText = cost ;

    li.appendChild(p);
    li.appendChild(p2);
    
    selectedContainer.appendChild(li) ;

    // const totalCost = document.getElementById('total-cost').innerText ;
    // const convertedCost = parseInt(totalCost) ;
    const convertedCost = parseInt(document.getElementById('total-cost').innerText);

    document.getElementById('total-cost').innerText = convertedCost + parseInt(cost) ;
   
    
    


});
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
