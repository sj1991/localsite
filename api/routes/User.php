<?php
require_once("./library/DB.php");
require_once("./library/GTED.php");
require_once("./config.php");

class User {
  public static function get($id) 
  {
	$db = new DB("evitics");
	$gted = new GTED();	
	try 
	{
		$query = "SELECT `orgId`, `writePerm`, `isPending` FROM `user` WHERE `userId`=:userId";	
		$result = $db->fetchAll($query, array("userId"=>$id));
		//echo var_dump($result);
		echo var_dump($gted->queryGTUsername($id));		
		//echo json_encode($result);
    	}
  	catch(Exception $e) 
	{
      		echo '{"error" : "Something broke :("}';
    	}
  }
  public static function permissions($id) 
  {
    echo "Changing permissions for: $id";
  }
}
?>
