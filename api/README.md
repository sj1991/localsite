###Evitics - Localsite RESTful API###

The restful API requests are routed by the SLIM framework: http://docs.slimframework.com/

By design the RESTful API and front-end code are two seperate components.  Going to /api* will launch index.php->router.php-> the route specificode. 

All routes should be in router.php, with a controller in a seperate file in the controllers folder. 

If you need to send an error message, please give the JSON response a root property of "error" with just  :
```
{ "error" : "ERROR MESSAGE HERE"}
{ "error" : "Invalid ID", "id" : "2534ABQR234"}
```

