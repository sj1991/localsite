<?php

class Organization {
  public static function get($id) {
    try {
      $organizations = json_decode(file_get_contents('./exampleOutput/organizations.json', FILE_USE_INCLUDE_PATH));
      foreach($organizations as $organization) {
        if($organization->id == $id) {
          echo json_encode($organization);
          return;
        }
      }
      echo '{"error" : "no organization with id: '.$id.'"}';
    } catch(Exception $e) {
      echo '{"error" : "Something broke :("}';
    }
  }
  public static function getAll() {
    $exampleOrganizationList = file_get_contents('./exampleOutput/organizations.json', FILE_USE_INCLUDE_PATH);
    echo $exampleOrganizationList;
  }
  public static function join($id) {
    echo "Joining organization with Id: $id";
  }
}


?>
