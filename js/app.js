import { value, btns } from './dom';

// set initial count
let count = 0;

// logic

const buttonsFunctionality = (styles) => {
  if (styles.contains('decrease')) {
    count--;
  } else if (styles.contains('increase')) {
    count++;
  } else {
    count = 0;
  }
};

btns.forEach(function (button) {
  button.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;

    buttonsFunctionality(styles);

    valueColor();

    value.textContent = count;
  });
});

const valueColor = () => {
  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else {
    value.style.color = 'inherit';
  }
};