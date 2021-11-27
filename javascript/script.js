function wsh() {
  let bdsh = content.document.querySelector(".bcsc");
  bdsh.style.visibility = "visible";
  bdsh.style.opacity = "1";
}
function bevisible() {
  let bdsh = content.document.querySelector(".bcsc");
  bdsh.style.visibility = "hidden";
  bdsh.style.opacity = "0";
}

let carts = document.querySelectorAll("#wsh");
for (i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
      localStor();
      alert('you added the product to the cart .');
    });
}

function rememberNumber(){
    let productNumber = localStorage.getItem("NumberItem");
   if(productNumber){
   document.querySelector('#productsnbr').textContent=productNumber;
   document.querySelector('#total > span').textContent=productNumber;
};
};
rememberNumber();

function localStor() {
    let productNumber = localStorage.getItem("NumberItem");
    localStorage.setItem("NumberItem", 1);
    productNumber = parseInt(productNumber);
    if(productNumber){
        localStorage.setItem("NumberItem", productNumber + 1);
        document.querySelector('#productsnbr').textContent=productNumber + 1;
        document.querySelector('#total > span').textContent=productNumber + 1;
    }else{
        localStorage.setItem("NumberItem",1);
        document.querySelector('#productsnbr').textContent=1;
        document.querySelector('#total > span').textContent=1;

  };
}