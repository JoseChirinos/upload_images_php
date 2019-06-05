var sendObject = {
  image: '',
}
var zoneCut = new Croppie(document.querySelector("#upload_zone"), {
	enableExif: true,
    viewport: {
        width: 300,
        height: 200
    },
    boundary: {
    	width: 300,
    	height: 300
    }
});
/* imagen inicial*/
zoneCut.bind({
    url: 'images/default.png',
    zoom: 0
});

document.querySelector("#getResult").addEventListener('click',function(){
	zoneCut.result({
		type:'base64',
		size:'original',
		quality:0.5,
		format:'jpeg'
	}).then(function(base64){
		console.log('entra al result');
		var img = document.createElement('img');
		img.src =  base64;
		document.querySelector('#zoneResult').append(img);
	});
});

document.querySelector('#getImage').addEventListener('change',function(){
	readFile(this);
})

function readFile(input){
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.readAsBinaryString(input.files[0]);
		//reader.readAsDataURL(input.files[0]);
		reader.onload = function(e) {
      console.log(reader);
		  if (reader.result) reader.content = reader.result;
      var base64Data = btoa(reader.content);
      sendObject.image = 'data:image/jpeg;base64,'+base64Data;
		  zoneCut.bind({
		  	url: 'data:image/jpeg;base64,'+base64Data
		  });
		}
	}
}


document.querySelector("#upload_btn").addEventListener('click', function(){
  if(sendObject.image != ''){
    sendServer(sendObject.image);
  }else{
    alert('no existe imagen');
  }
})
function sendServer(image){
  let data = {
    imageBase64: image
  }
  console.log(data);
  axios({
    method: 'post',
    url: 'server/upload.php',
    data
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}