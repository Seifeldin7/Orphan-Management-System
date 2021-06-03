<?php

require_once(__DIR__ . '/../connection/connection.class.php');		
require_once(__DIR__ . '/../Repository/OrganizationRepository.php');		

class OrganizationController {

      function __construct() {

      }
   
      function verifyMethod($method, $route) {
        switch ($method) {
            case 'GET':
                $organizationsRepo = new OrganizationRepository();
                $organizations = $organizationsRepo->getAll();
                echo json_encode($organizations);
                break;
            default:
                return array('status' => 405);
      		    break;
      }
    }
}
