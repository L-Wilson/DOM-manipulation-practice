// Select element
const myHeading = document.getElementById('myHeading');

// Add event listener to selected element
myHeading.addEventListener('click', () => {
  // Tell the browser how to manipulate element
  myHeading.style.color = 'red';
});