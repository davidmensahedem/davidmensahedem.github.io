<?php
         $to = "davidmensahedem@gmail.com";

         $from = $_POST['email'];
        //  $subject = $_POST['subject'];
         $message = $_POST['message'];
         $name = $_POST['name'];
        //  $message .= "<h1>This is headline.</h1>";
         
         $header = "From:{$from} \r\n Name:{$name} \r\n";
        //  $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
            header('Location:index.html');
         }else {
            echo "Message could not be sent...";
         }
      ?>