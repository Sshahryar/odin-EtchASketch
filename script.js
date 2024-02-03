document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  const resetButton = document.getElementById('resetButton');

  createGrid(16);

  resetButton.addEventListener('click', resetGrid);

  function resetGrid() {
    let newSize = prompt('Enter the number of squares per side for the new grid (maximum 100):');
    newSize = parseInt(newSize);
    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
      createGrid(newSize);
    } else {
      alert('Please enter a valid number between 1 and 100.');
    }
  }

  function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }
});
