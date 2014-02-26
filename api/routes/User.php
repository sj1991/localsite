<?php

class User {
  public static function get($id) {
    $exampleUser = file_get_contents('./exampleOutput/user.json', FILE_USE_INCLUDE_PATH);
    echo $exampleUser;
  }
  public static function permissions($id) {
    echo "Changing permissions for: $id";
  }
}

?>
