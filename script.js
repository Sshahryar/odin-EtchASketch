document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  const squares = [];

  createGrid(16);

   container.addEventListener('mouseenter', function(event) {
     if (event.target.classList.contains('square')) {
       darkenSquare(event.target);
        }
  });
      function darkenSquare(square) { 
          let currentColor = square.style.backgroundColor || 'rgb(255, 255, 255)';
    let rgb = currentColor.match(/\d+/g);
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    r = darkenColorValue(r);
    g = darkenColorValue(g);
    b = darkenColorValue(b);

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  function createInitialGrid() {
    container.innerHTML = '';
    container.style.gridTemplateColumns = 'repeat(16, 1fr)';
    for (let i = 0; i < 256; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
      square.addEventListener('mouseenter', function() {
        square.style.backgroundColor = getRandomColor();
      });
    }
  }
   function darkenColorValue(value) { 
    return Math.max(0, value - Math.round(value * 0.1));
  }    
  function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
      square.addEventListener('mouseenter', function() {
        square.style.backgroundColor = getRandomColor();
      });
    }
  }

   function resetGrid() {
    let newSize = prompt('Enter the number of squares per side for the new grid (maximum 100):');
    newSize = parseInt(newSize);
    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
      createGrid(newSize);
    } else {
      alert('Please enter a valid number between 1 and 100.');
    }
  }

  document.getElementById('resetButton').addEventListener('click', resetGrid);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
   createInitialGrid();
});

