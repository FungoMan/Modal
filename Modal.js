var btnOpen = document.querySelector('.open-modal-btn');
var btnClose = document.querySelector('.modal__footer button');
var iconClose = document.querySelector('.modal__header i')
var modal = document.querySelector('.modal')

function toggleModal(e) {
  console.log(e.target)
  modal.classList.toggle('hide')

}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
})