<?php

class User {
  public static function get($id) {

try {
	$query = sprintf("SELECT username, name, email, text, organizations FROM users WHERE orgId='%d'", intval($id));	
	$result = mysql_query($query);
	while($row=mysql_fetch_assoc($result))
	{
		$org[] = $row;
	} 
	$struct = array("Org"=>$org);
	echo json_encode($struct);
    
  /*  $exampleUser = file_get_contents('./exampleOutput/user.json', FILE_USE_INCLUDE_PATH);
    echo $exampleUser;
  */
}
  public static function permissions($id) {
    echo "Changing permissions for: $id";
  }
}

?>
