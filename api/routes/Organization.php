<?php
class Organization {
  public static function get($id) {
    try {
	$query = sprintf("SELECT orgId,name,description,logo_path FROM organizations WHERE orgId='%d'", intval($id));	
	$result = mysql_query($query);
	while($row=mysql_fetch_assoc($result))
	{
		$org[] = $row;
		$org[]->logo_path = "http://jacketpages.gatech.edu" . $org[]->logo_path; 		} 
	$struct = array("Org"=>$org);
	echo json_encode($struct);
    
      /*$organizations = json_decode(file_get_contents('./exampleOutput/organizations.json', FILE_USE_INCLUDE_PATH));
      foreach($organizations as $organization) {
        if($organization->id == $id) {
          echo json_encode($organization);
          return;
        } */
      }
      echo '{"error" : "no organization with id: '.$id.'"}';
    } catch(Exception $e) {
      echo '{"error" : "Something broke :("}';
    }
  }
  public static function getAll() {
	$result = mysql_query('SELECT orgId,name,description,logo_path FROM organizations ');
	while($row=mysql_fetch_assoc($result))
	{
		$org[] = $row;
		$org[]->logo_path = "http://jacketpages.gatech.edu" . $org[]->logo_path; 		} 
	$struct = array("Orgs"=>$org);
	echo json_encode($struct);
    
/* 
	$exampleOrganizationList = file_get_contents('./exampleOutput/organizations.json', FILE_USE_INCLUDE_PATH);
    echo $exampleOrganizationList;
    */
  }
  public static function join($id) {
    echo "Joining organization with Id: $id";
  }
  
}


?>
