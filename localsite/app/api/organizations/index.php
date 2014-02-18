<?php
 //sleep(3);
 $json = '
  [
    {
      "id" : 1, 
      "name" : "IEEE", 
      "img" : {
        "src" : "http://jacketpages.gatech.edu/img/28204/ieee.jpg"
      },
      "description" : "Founded in 1884, The Institute of Electrical and Electronics Engineers is the world\'s largest technical professional society. IEEE at Georgia Tech is a student branch of the international IEEE organization with over 800 members, including students, faculty and staff. GT-IEEE is the largest student branch in the U.S., and it has been recognized as Outstanding Student Branch of the year and Exemplary Student Branch 5 consecutive years.",
      "joined" : true
    } , 
    {
      "id" : 2, 
      "name" : "SGA", 
      "img" : {
          "src" : "http://jacketpages.gatech.edu/img/27752/sga.png"
      },
      "description" : "Georgia Tech\'s Student Government Association is responsible for - Voicing student opinions and concerns to the administration - Working to better our campus by changing administrative policies, collaborating with other student organizations, and sharing student needs with administrators - Allocating about $5.5 million dollars to student organizations and programs each year.",
      "joined" : false
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
