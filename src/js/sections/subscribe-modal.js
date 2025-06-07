const footerForm = document.querySelector('.footer_subscribe-box');
const modal = document.querySelector('.subscribe_modal-backdrop');
const closeModal = document.querySelector('.subscribe_modal-button');
const alreadySubModal = document.querySelector('.already-sub__modal');
const alreadySubClose = document.querySelector('.already-sub__logo-icon');

footerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = footerForm.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert('Please enter a valid email address.');
    return;
  }

  const stored = localStorage.getItem('subscribedEmails');
  const emails = stored ? JSON.parse(stored) : [];

  if (emails.includes(email)) {
    alreadySubModal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    footerForm.reset();
    return;
  }

  emails.push(email);
  localStorage.setItem('subscribedEmails', JSON.stringify(emails));

  footerForm.reset();
  modal.classList.remove('hidden');
  document.body.classList.add('no-scroll');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.classList.remove('no-scroll');
});

alreadySubClose.addEventListener('click', () => {
  alreadySubModal.classList.add('hidden');
  document.body.classList.remove('no-scroll');
});
