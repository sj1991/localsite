<?php
 //sleep(3);
 $json = '
  [
    {
      "id" : 3, 
      "name" : "French Club", 
      "img" : {
        "src" : "http://jacketpages.gatech.edu/img/default_logo.gif"
      },
      "description" : "French Club Yo"
    } , 
    {
      "id" : 2, 
      "name" : "SGA", 
      "img" : {
          "src" : "http://jacketpages.gatech.edu/img/27752/sga.png"
      },
      "description" : "Georgia Tech\'s Student Government Association is responsible for - Voicing student opinions and concerns to the administration - Working to better our campus by changing administrative policies, collaborating with other student organizations, and sharing student needs with administrators - Allocating about $5.5 million dollars to student organizations and programs each year."
    }
  ]';
 
 $out = json_decode($json);
 echo "\n\n\n";
 if($_GET['id']) {
   foreach($out as $obj) {
    if($obj->id == $_GET['id']) {
      echo json_encode($obj);
    }
   }
 } else {
  echo json_encode($out);
 }

?>
