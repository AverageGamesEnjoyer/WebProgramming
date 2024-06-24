'use strict';

function createTabs(node) {
  const tabs = node.querySelectorAll('[data-tabname]');
  const contentContainers = node.querySelectorAll('.tabsInfo');

  tabs.forEach(tab => {
    tab.addEventListener('click', toggleTab);
  });

  function toggleTab(event) {
    const clickedTab = event.target;
    const tabName = clickedTab.dataset.tabname;

    contentContainers.forEach(container => {
      if (container.dataset.tabname === tabName) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    clickedTab.classList.add('active');
  }
}

const tabsContainer = document.querySelector('.tabs-container');
createTabs(tabsContainer);