// console.log(abcd);
// let abcd;

// const {4:b} = [1, 2, 3, 4, 5, 6];
// console.log(b);


document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
      // Toggle the active class to style the opened headers
      header.classList.toggle('active');

      // Get the associated content div
      const content = header.nextElementSibling;

      // Toggle the display of the content
      if (content.style.display === "block") {
          content.style.display = "none";
      } else {
          content.style.display = "block";
      }
  });
});
