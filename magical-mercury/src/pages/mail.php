<?php
  // Configuración del correo electrónico
  $to = 'antiagoperezdelfino@gmail.com';
  $subject = 'Formulario de contacto';

  // Recibir datos del formulario
  $upText1 = $_POST['up-text1'];
  $upText2 = $_POST['up-text2'];
  $textarea = $_POST['textarea'];

  // Crear cuerpo del correo electrónico
  $body = "Up Text 1: $upText1\n";
  $body.= "Up Text 2: $upText2\n";
  $body.= "Textarea: $textarea\n";

  // Enviar correo electrónico
  $headers = 'From: '. $upText2. "\r\n";
  mail($to, $subject, $body, $headers);

  // Mostrar mensaje de éxito
  echo 'Correo electrónico enviado con éxito!';
?>