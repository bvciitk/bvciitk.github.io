document.addEventListener('DOMContentLoaded', function () {
    const teamSlider = document.querySelector('.team-slider');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
  
    let slideIndex = 0;
    const itemsPerPage = 3; // Number of items to display per slide
  
    leftArrow.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + teamSlider.children.length) % teamSlider.children.length;
      updateSlider();
    });
  
    rightArrow.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % teamSlider.children.length;
      updateSlider();
    });
  
    function updateSlider() {
      const translateX = -slideIndex * (100 / itemsPerPage);
      teamSlider.style.transform = `translateX(${translateX}%)`;
    }
  });
  