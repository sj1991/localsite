<?php

class User {
  public static function get($id) {
    echo "Getting User: $id"; 
  }
  public static function permissions($id) {
    echo "Changing permissions for: $id";
  }
}

?>
