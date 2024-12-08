const camerasContainer = document.getElementById('cameras');

// Simula la recepción de streams desde el servidor
const socket = new WebSocket('ws://localhost:8080'); // Cambia por la URL de tu servidor
socket.onmessage = event => {
  const videoElement = document.createElement('video');
  videoElement.src = URL.createObjectURL(new Blob([event.data], { type: 'video/webm' }));
  videoElement.autoplay = true;
  videoElement.playsInline = true;
  camerasContainer.appendChild(videoElement);
};
