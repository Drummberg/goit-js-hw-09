import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css'


const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', submitForm);


function submitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  let delay = parseInt(formElements.delay.value);
  const step = parseInt(formElements.step.value);
  const amount = parseInt(formElements.amount.value);


  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
