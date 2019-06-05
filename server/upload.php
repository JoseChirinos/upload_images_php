<?php
  include "image_resizer.php";
  /* subir la imagen */
  $image = json_decode(file_get_contents("php://input"));
  $imageNormal = base64_decode(str_replace('data:image/jpeg;base64,', '', $image->imageBase64));
  $nameImage = uniqid().'.jpg';
  $formImage = imagecreatefromstring($imageNormal);
  imagejpeg( $formImage, 'upload/'.$nameImage, 100 );

  /* recortar la imagen */
  $thumb = new ImageResizer();
  $thumb->smart_resize_image(null,$imageNormal,75,75,false,'upload/'.'thumb_'.$nameImage,true,false,50);
  imagedestroy( $formImage );

?>