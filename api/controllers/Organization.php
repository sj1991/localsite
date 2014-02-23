<?php

class Organization {
  public static function get($id) {
      $exampleOrganization = file_get_contents('./exampleOutput/organization.json', FILE_USE_INCLUDE_PATH);
      echo $exampleOrganization;
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
