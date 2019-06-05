<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/croppie.css">
  <link rel="stylesheet" href="css/styles.css">
  <title>Upload Images</title>
</head>
<body>
  <h1>Upload Images</h1>

  <!-- Contenedor para subir -->
  <div id="upload_zone">
  </div>

  <div class="btn plus">
		<input type='file' id="getImage" class="inputfile">
		<label for="getImage">Agregar Imagen</label>
	</div>

	<button id="getResult" class="btn">Result</button>
  <br>
  
  <h1>Resultado</h1>
  
	<div id="zoneResult">
  </div>
  <br>
  <button id="upload_btn" class="btn">Subir Imagen</button>

  <script src="js/croppie.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
  <script src="js/upload_images.js"></script>
</body>
</html>