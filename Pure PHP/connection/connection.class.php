<?php
require_once(__DIR__ . '/../Config/app.php');

#This class is responsible for the connection with the Database.
class DBConnection {
   
      #Declare our attribute that will receive the instance of database.
      public static $instance;
      
      private function __construct() {
          //
      }
   
      #Create the method that will make the connection with the database and will set this connection in the attribute "instance".
      public static function getInstance() {
        global $dbServerName, $dbUserName, $dbPassword, $dbName;
          #Verify if the attribute already have a connection set in it.
          if (!isset(self::$instance)) {
              #Create a new PDO object and make the connection with database.
              self::$instance = new mysqli($dbServerName, $dbUserName, $dbPassword, $dbName);
              if (self::$instance->connect_error) {
                die("Connection failed: " . self::$instance->connect_error);
              }
          }
          #Return the attribute with the connection setted in it.
          return self::$instance;
      }
   
  }

?>