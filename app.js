const buttons = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of buttons) {
  btn.addEventListener("click", function (event) {
    //upper cart section 
    count += 1;
    setInnerText("cart-count", count);


    // cart section

    const placeName = event.target.parentNode.childNodes[1].innerText;
    const cost = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    
     event.target.disabled = true ;
    
    const selectedContainer = document.getElementById("selected-place-container");

    const li = document.createElement('li'); 

    const p = document.createElement('p');
    p.innerText = placeName ;
    const p2 = document.createElement('p') ;
    p2.innerText = cost ;

    li.appendChild(p);
    li.appendChild(p2);
    
    selectedContainer.appendChild(li) ;


    const budget = parseInt(document.getElementById('budget').innerText) ;

    if(budget - parseInt(cost) <0) {
        alert('low budget') ;
        return ;
    }

    document.getElementById('budget').innerText = budget - parseInt(cost) ;







    // total cost section 
    setTotalCost('total-cost', cost) ;


    // grand total section

    grandTotalCost('grand-total', cost) ;



});
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function setTotalCost(elementId, value) {
    const convertedCost = parseInt(document.getElementById(elementId).innerText);

    const sum = convertedCost + parseInt(value) ; 
    setInnerText(elementId, sum) ;
}

function grandTotalCost(category) {

   let convertedCost = parseInt(document.getElementById('total-cost').innerText);

   setInnerText('grand-total', convertedCost) ;

    if(category === 'bus'){
        setInnerText('grand-total', convertedCost + 100) ;
    }else if (category === 'train') {
        setInnerText('grand-total', convertedCost - 200)  ;
    }else if(category === 'flight'){
        setInnerText('grand-total', convertedCost + 500) ; 
    }
}