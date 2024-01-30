document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseenter', function() {
      square.style.backgroundColor = getRandomColor();
    });
  });
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
