<?php

//require "controllers/User.php";
$app->get('/user/:id', function($id) { User::get($id); });

$app->get('/organizations', function() { Organization::getAll(); });
$app->get('/organization/:id', function($id) { Organization::get($id); });
$app->post('/organization/join/:id', function($id) { Organization::join($id); });

$app->post('/organization/memberPermission/:id', function($id) { User::permissions($id); });

$app->notFound(function () use ($app) {
   echo '{ "error" : "invalid API call"}';
});
?>
