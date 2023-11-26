const calcAgeBtn = document.getElementById('calcBtn');
const birthDay = document.getElementById('ageInput');
const ageDisplay = document.getElementById('ageDisplay');
const birthDisplay = document.getElementById('dateOfBirth');
const currentDisplay = document.getElementById('currentDate');

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let currDate = `${year}-${month}-${day}`;

const calculateAge = () => {
  const birthDayValue = birthDay.value;

  if (birthDayValue === '') {
    alert('Enter a valid age');
  } else {
    let age = getAge(birthDayValue);
    ageDisplay.textContent = `Age is ${age} ${age > 1 ? 'years' : 'year'} old.`;
    birthDisplay.textContent = birthDayValue;
    currentDisplay.textContent = currDate;
  }
};

const getAge = (birthDayValue) => {
  const currentDate = new Date();
  const dateOfBirth = new Date(birthDayValue);
  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  const month = currentDate.getMonth() - dateOfBirth.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < dateOfBirth.getDate())
  ) {
    age--;
  }

  return age;
};

calcAgeBtn.addEventListener('click', calculateAge);
