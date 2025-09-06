const ourWorkItems = document.querySelectorAll('.our-work ul li');
const workList = document.querySelector('.our-work ul');
workList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI' && !e.target.classList.contains('active')) {
    ourWorkItems.forEach(i => i.classList.remove('active', 'btn-main', 'rounded-pill'));
    e.target.classList.add('active', 'btn-main', 'rounded-pill');
  }
});