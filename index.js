let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnhomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}


function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerHTML = bagItems.length;
  }
  else {
    bagItemCountElement.style.visibility = 'hidden';
  }

}

function displayItemsOnhomePage() {
  let itemContainerElement = document.querySelector('.items-container');

    
  if (!itemContainerElement) {
    return;
  }

  let item = {
    item_image: 'images/1.jpg',
    rating: {
      stars: 4.5,
      noOfReviews: 1400,
    },
    company_name: 'Carton-London',
    item_name: 'Rhodium-Plated- cz ',
    current_price: 999,
    original_price: 999,
    discount_percentage: 42,
  }

  let innerHtml = '';
  items.forEach(item => {
    innerHtml += ` <div class="item-container">
          <img class="item-image"  src="${item.image}" alt="earrings" />
          <div class="rating">${item.rating.stars} ⭐⭐⭐⭐ |${item.rating.count}</div>
          <div class="company-name">${item.company}</div>
          <div class="item-name>${item.item_name} </div>
          <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">${item.discount_percentage} % OFF</span>
          </div>
          <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
        </div>`
  })

  itemContainerElement.innerHTML = innerHtml;
}