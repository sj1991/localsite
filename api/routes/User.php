<?php
require_once("./library/DB.php");
require_once("./library/GTED.php");
require_once("./config.php");

class User {
  public static function get($id) 
  {
	$db = new DB("evitics");
	$dbo = new Db("jacketpages");
	$gted = new GTED();	
	try 
	{
		$resutl = array();
		
		//Getting the User info from GTED		
		$userinfo = $gted->queryGTUsername($id);
		$result["email"] = $userinfo["mail"][0];
		$result["firstname"]= $userinfo["givenname"][0];
		$result["lastnname"] = $userinfo["sn"][0];	
		
		$query = "SELECT `orgId`, `writePerm`, `isPending` FROM `user` WHERE `userId`=:userId";	
		$res = $db->fetchAll($query, array("userId"=>$id));
		$query2 = "SELECT `orgId`,`name`, `description`, `website`, `logo_path`, `org_email`, `phone_number` FROM `organizations` WHERE `orgId`=:orgId";	
		$i=0;
		foreach($res as $value)
			{

			$result["organizations"][$i]["orgId"] = $value["orgId"];			
			$result["organizations"][$i]["writePerm"] = $value["writePerm"];
			$result["organizations"][$i]["isPending"] = $value["isPending"];		
			$res2 = $dbo->fetchAll($query2, array("orgId"=>intval($value["orgId"])));
			$result["organizations"][$i]["name"] = $res2[0]["name"];
			$result["organizations"][$i]["website"] = $res2[0]["website"];
			$result["organizations"][$i]["description"] = $res2[0]["description"];	
			$result["organizations"][$i]["email"] = $res2[0]["org_email"];			
			$result["organizations"][$i]["phone"] = $res2[0]["phone_number"];
			$result["organizations"][$i]["logo"] = "http://jacketpages.gatech.edu". $res2[0]["logo_path"];							
			$i = $i+1;
		}
	echo json_encode($result);	
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
