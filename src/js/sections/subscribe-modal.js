const footerForm = document.querySelector('.footer_subscribe-box');
const modal = document.querySelector('.subscribe_modal-backdrop');
const closeModal = document.querySelector('.subscribe_modal-button');
const alreadySubModal = document.querySelector('.already-sub__modal');
const alreadySubClose = document.querySelector('.already-sub__logo-icon');
const api = 'http://localhost:3000/email';

footerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = footerForm.querySelector('input[type="email"]').value;

  if (!email) {
    alert('Please enter a valid email address.');
    return;
  }

  try {
    const getResponse = await fetch(api);
    const emails = await getResponse.json();

    const maxId = emails.reduce((max, item) => Math.max(max, item.id), 0);
    if (emails.some(item => item.email === email)) {
      alreadySubModal.classList.remove('hidden');
      document.body.classList.add('no-scroll');
      footerForm.reset();
      return;
    }
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, id: maxId + 1 }),
    });

    const data = await response.json();
    footerForm.reset();
    modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error subscribing. Please try again later.');
  }
});
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.classList.remove('no-scroll');
});
alreadySubClose.addEventListener('click', () => {
  alreadySubModal.classList.add('hidden');
  document.body.classList.remove('no-scroll');
});