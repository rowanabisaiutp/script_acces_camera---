const videoElement = document.getElementById('client-video');

// Acceder a la cámara del cliente
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    videoElement.srcObject = stream;

    // Enviar el video al servidor (simulado aquí)
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = event => {
      const socket = new WebSocket('ws://localhost:8080'); // Cambia por la URL de tu servidor
      socket.onopen = () => socket.send(event.data);
    };
    mediaRecorder.start(1000); // Captura cada 1 segundo
  })
  .catch(error => console.error('Error al acceder a la cámara:', error));
