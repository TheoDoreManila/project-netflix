const tabitems = document.querySelectorAll('.tab-item');
const tabContentitems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    // Add border to current tab
    this.classlist.add('tab-border');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Listen for tab click
tabItems.foreach(item => item.addEventListener('click', selectItem));
