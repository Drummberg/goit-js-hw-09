

const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', submitForm);


function submitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
