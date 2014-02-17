<?php
 $json = '[{"_id" : 1, "name" : "IEEE", "img" : { "src" : "http://jacketpages.gatech.edu/img/28204/ieee.jpg"}}, {"_id" : 2, "name" : "SGA", "img" : {"src" : "http://jacketpages.gatech.edu/img/27752/sga.png"} }]';
 
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
