<?php

require_once(__DIR__ . '/../connection/connection.class.php');
require_once(__DIR__ . '/../Repository/UserRepository.php');

require_once(__DIR__ . '/../utils/jwt.php');

class RoleController
{

    function __construct()
    {
    }

    function verifyMethod($method, $route)
    {
        $usersRepo = new UserRepository();
        switch ($method) {
            case 'GET':
                $role = $usersRepo->getRole($_GET["id"]);
                echo json_encode($role);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
