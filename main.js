
const listItems = document.querySelectorAll(".list__item");

const activeLink = function (item) {
  const childList = item.querySelector('.nested-list');
  const childImg = item.querySelector('.list__arrow');
  childList.classList.toggle("nested-list_active");
  if (childList.classList.contains('nested-list_active')) {
    childImg.src = './assets/icons/arrow-green.svg';
  } else {
    childImg.src = './assets/icons/arrow.svg';
  }
  
}

listItems.forEach((item) => {
  item.addEventListener("click", function(e) {
    activeLink(item);
  })
});
