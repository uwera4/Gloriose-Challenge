const card = document.getElementById('card');
let isDragging = false;
let prevX, prevY;

// Dragging functionality
card.addEventListener('mousedown', (e) => {
  isDragging = true;
  prevX = e.clientX;
  prevY = e.clientY;
  card.style.position = 'absolute';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - prevX;
    const deltaY = e.clientY - prevY;
    const rect = card.getBoundingClientRect();
    card.style.left = rect.left + deltaX + 'px';
    card.style.top = rect.top + deltaY + 'px';
    prevX = e.clientX;
    prevY = e.clientY;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Resizing functionality
card.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    card.style.width = card.offsetWidth * 0.9 + 'px';
    card.style.height = card.offsetHeight * 0.9 + 'px';
  } else {
    card.style.width = card.offsetWidth * 1.1 + 'px';
    card.style.height = card.offsetHeight * 1.1 + 'px';
  }
});

// Zoom in/out functionality
let zoomLevel = 1;

document.addEventListener('keydown', (e) => {
  if (e.key === '+' || e.key === '-') {
    if (e.key === '+') {
      zoomLevel += 0.1;
    } else if (e.key === '-') {
      zoomLevel -= 0.1;
    }
    card.style.transform = `scale(${zoomLevel})`;
  }
});