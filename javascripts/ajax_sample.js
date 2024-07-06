let number = 0;
let data = []; // Variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = request.response; // Almacenar datos en la variable
      updateContent();
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function updateContent() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number = (number + 1) % data.length; // Avanzar al siguiente video y reiniciar si llega al final
}

function changeVideo() {
  if (data.length === 0) {
    getData(); // Llamar a getData sólo si no hay datos recuperados
  } else {
    updateContent(); // Actualizar contenido si ya se tienen datos
  }
}

button.addEventListener('click', changeVideo);

window.onload = changeVideo;