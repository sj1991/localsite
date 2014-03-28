<?php

//TEST GTED
function testGTED() {
    require("./library/GTED.php");
    $gted = new GTED();
echo var_dump($gted->queryGTUsername("cbookman3"));
echo "HI";
}
?>
