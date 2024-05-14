export function changeMini(event){
    const selectedSrc = event.target.src;
    const bigSelector = document.getElementById("big-img");
    bigSelector.src = selectedSrc;
  }