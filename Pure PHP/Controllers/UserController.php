<?php

require_once(__DIR__ . '/../connection/connection.class.php');
require_once(__DIR__ . '/../Repository/UserRepository.php');

require_once(__DIR__ . '/../utils/jwt.php');

class UserController
{

    function __construct()
    {
    }

    function verifyMethod($method, $route)
    {
        $usersRepo = new UserRepository();
        switch ($method) {
            case 'GET':
                $users = $usersRepo->getAll();
                echo json_encode($users);
                break;
            case 'DELETE':
                $usersRepo->deleteUserById($_GET["id"]);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
