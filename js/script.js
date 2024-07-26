

document.addEventListener('DOMContentLoaded', () =>{
  let totalPrice = document.querySelector('#totalPrice');
  let basketPrice = document.querySelector('#basketPrice');
  let basketQuantity = document.querySelector('#basketQuantity');
  let socksPrice = document.querySelector('#socksPrice');
  let socksQuantity = document.querySelector('#socksQuantity');
  let bagPrice = document.querySelector('#bagPrice');
  let bagQuantity = document.querySelector('#bagQuantity');
  let minusBask = document.querySelector('#minusBask');
  let plusBask = document.querySelector('#plusBask');
  let minusSocks = document.querySelector('#minusSocks');
  let plusSocks = document.querySelector('#plusSocks');
  let minusBag = document.querySelector('#minusBag');
  let plusBag = document.querySelector('#plusBag');
  let hearts = document.querySelectorAll('.fa-heart');
  let trashes = document.querySelectorAll('.fa-trash-alt');
  let countB = 0;
  let countS = 0;
  let countG = 0;
  let unitBasketPrice = 100;
  let unitSocksPrice = 20;
  let unitBagPrice = 50;
  let price;
  let total = 0
  let totalB = 0;
  let totalS = 0;
  let totalG = 0;


let functionSpace = () => {
  plusBask.addEventListener('click', () => {
    countB += 1;
    price = unitBasketPrice*countB;
    basketQuantity.innerHTML = countB;
  basketPrice.innerHTML = `${price} $`;
  totalB = price;
  total = totalS + totalB + totalG;
  totalPrice.textContent = `${total} $`;
  });

  minusBask.addEventListener('click', () => {
    countB = (countB > 0) ? countB-=1 : 0;
    price = (countB == 0) ? 0 : unitBasketPrice*countB;
    basketQuantity.innerHTML = countB;
  basketPrice.innerHTML = `${price} $`;
  totalB = price;
  total = totalS + totalB + totalG;
  totalPrice.textContent = `${total} $`;
  });
  basketQuantity.innerHTML = countB;
 


// ********** socks ************
  plusSocks.addEventListener('click', () => {
    countS += 1;
    price = unitSocksPrice*countS;
    socksQuantity.innerHTML = countS;
    socksPrice.innerHTML = `${price} $`;
  totalS = price;
  total = totalS + totalB + totalG;
  totalPrice.textContent = `${total} $`
  });

  minusSocks.addEventListener('click', () => {
    countS = (countS > 0) ? countS-=1 : 0;
    price = (countS == 0) ? 0 : unitSocksPrice*countS;
    socksQuantity.innerHTML = countS;
    socksPrice.innerHTML = `${price} $`;
  totalS = price;
  total = totalS + totalB + totalG;
  totalPrice.textContent = `${total} $`
  });
  socksQuantity.innerHTML = countS;
  


  // ********** Bag ************
  plusBag.addEventListener('click', () => {
    countG += 1;
    price = unitBagPrice*countG;
    bagQuantity.innerHTML = countG;
    bagPrice.innerHTML = `${price} $`;
  totalG = price;
  total = totalS + totalB + totalG
  totalPrice.textContent = `${total} $`
  });

  minusBag.addEventListener('click', () => {
    countG = (countG > 0) ? countG-=1 : 0;
    price = (countG == 0) ? 0 : unitBagPrice*countG;
    bagQuantity.innerHTML = countG;
    bagPrice.innerHTML = `${price} $`;
  totalG = price;
  total = totalS + totalB + totalG;
  totalPrice.textContent = `${total} $`
  });
  bagQuantity.innerHTML = countG;


  [... hearts].map(heart => {
    console.log(heart);
    heart.addEventListener('click', () => {
      //heart.classList.add('bg-danger');
      heart.classList.add('text-danger');
    })
  });


  [... trashes].map((trash, index) => {
    console.log(trash, index);
    trash.addEventListener('click', () => {
    if(index == 0){
      countB = 0;
      totalB = 0;
        basketQuantity.innerHTML = countB;
        basketPrice.innerHTML = `${totalB} $`;
        totalPrice.textContent = `${totalS + totalG} $`;
      }else if(index == 1){
        countS = 0;
        totalS = 0;
        socksQuantity.innerHTML = countS;
        socksPrice.innerHTML = `${totalS} $`;
        totalPrice.textContent = `${totalB + totalG} $`;
      }else{
        countG = 0;
        totalG = 0;
        bagQuantity.innerHTML = countG;
        bagPrice.innerHTML = `${totalG} $`;
        totalPrice.textContent = `${totalS + totalB} $`;
      }
    })
  })
}
functionSpace();
})