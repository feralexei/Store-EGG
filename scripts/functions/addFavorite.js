export const cartProducts = JSON.parse(localStorage.getItem("cart"));

export function addFavorite(event) { 
  const icon = event.target;
  icon.classList.toggle('fa-regular');
  icon.classList.toggle('fa-solid');
    
  const productid = event.target.dataset.productid;
  const found = cartProducts.find(product => product.id === productid);
  let favorites = [];
  if (localStorage.getItem("favs")) {  
    favorites = JSON.parse(localStorage.getItem("favs"));

    const index = favorites.findIndex(product => product.id === productid);    
    if (index !== -1) {
        favorites.splice(index,1)
      } else {
        favorites.push(found);
    }
  } else {
    favorites.push(found);
    }

  localStorage.setItem('favs', JSON.stringify(favorites));
}