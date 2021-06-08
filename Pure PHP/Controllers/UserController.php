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
            case 'POST':
                $name = $_POST['name'];
                $phone = $_POST['phone'];
                $nationalId = $_POST['national_id'];
                if ($_GET["id"]) {
                    $usersRepo->updateUserInfo($_GET["id"], $name, $phone, $nationalId);
                }
                break;
            case 'PUT':
                $putBody = file_get_contents('php://input', 'r');
                $name = $putBody['name'];
                $phone = $putBody['phone'];
                $nationalId = $putBody['national_id'];
                $usersRepo->updateUserInfo($_GET["id"], $name, $phone, $nationalId);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
