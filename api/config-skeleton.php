<?php
return [
    "dbs" => [
      "jacketpages" => [
        "host" =>  "localhost",
        "username"=> "evitics",
        "password"=> "**********",
        "type"=> "mysql"
      ],
      "localsite" => [
        "host" =>  "localhost",
        "username"=> "evitics",
        "password"=> "**********",
        "type"=> "mysql"
      ] 
    ],
    /*
      Configuration for the local site's ldap directory
    */
    "ldap" => [
      "host" => "ldaps://r.gted.gatech.edu",
      "port" => 636,
      "rdn"=>"uid=evitics_dev,ou=local accounts,dc=gted,dc=gatech,dc=edu",
      "tree"=> "ou=people,dc=gted,dc=gatech,dc=edu",
      "password" => "**********",
      "rfidCardLength" => 9
    ]
];
?>
