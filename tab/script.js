const tabList = ['home', 'about', 'portfolio', 'social', 'contact', 'blog'];

const initialize = () => {
  const list = document.createElement('ul');
  list.classList.add('tab');

  tabList.forEach((tab, i) => {
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.classList.add('tab--item');

    button.classList.add('tab--button');
    button.textContent = tab.toUpperCase();
    button.setAttribute('data-index', i);
    button.setAttribute('data-id', tab);

    li.appendChild(button);
    list.appendChild(li);
  });

  const indicator = document.createElement('li');
  indicator.classList.add('indicator');

  list.appendChild(indicator);

  const app = document.getElementById('app');
  app.appendChild(list);

  handleTab();
};

const handleTab = () => {
  const list = document.querySelector('.tab');
  let indi = 0;

  list.addEventListener('click', function(e) {
    e.preventDefault();
    const isTab = e.target.classList.contains('tab--button');
    if (!isTab) return;
    const indicator = document.querySelector('.indicator');
    indicator.style.marginLeft = indi + e.target.dataset.index * 150 + 'px';
  });
};

// const button = document.querySelectorAll('.btn--tab');
// const tab = document.querySelector('.btn--tab');
// const indicator = document.querySelector('.indicator');
// let idx = 0;

// indicator.style.marginLeft = indi + 'px';

// button.forEach(btn => {
//   btn.addEventListener('mouseDown', function(e) {
//     e.preventDefault();
//     console.log('??');
//   });
// });

window.addEventListener('load', initialize);
