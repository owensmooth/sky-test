const main = () => {
  const jarva = document.querySelector('.jarva-inner');
  const fileSystem = document.querySelector('.file-system');
  const villains = document.querySelectorAll('.villain-image');

  document.addEventListener('keypress', event => {
    // If the 'M' key is pressed
    if (event.keyCode == 109 || event.keyCode == 77) {
      jarva.classList.toggle('active');
    }

    // If the 'F' key is pressed
    if (event.keyCode == 102 || event.keyCode == 70) {
      fileSystem.classList.toggle('active');
    }

    // If the 'A' key is pressed
    if (event.keyCode == 97 || event.keyCode == 65) {
      villains.forEach(villain => {
        villain.classList.toggle('active');
      });
    }
  });
};

document.addEventListener('DOMContentLoaded', main);
