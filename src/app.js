import { value, btns } from './dom';

// set initial count
let count = 0;

// logic

const buttonsFunctionality = (styles) => {
  if (styles.contains('decrease')) {
    count -= 1;
  } else if (styles.contains('increase')) {
    count += 1;
  } else {
    count = 0;
  }
};

const valueColor = () => {
  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else {
    value.style.color = 'inherit';
  }
};

btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    buttonsFunctionality(styles);

    valueColor();

    value.textContent = count;
  });
});