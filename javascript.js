document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');
  
    keys.forEach(key => {
      key.addEventListener('click', () => {
        // Handle key click event (you can customize this based on your needs)
        console.log(`Key ${key.innerText} clicked`);
      });
    });
  });
  