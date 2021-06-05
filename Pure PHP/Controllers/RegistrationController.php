<?php

require_once(__DIR__ . '/../connection/connection.class.php');
require_once(__DIR__ . '/../Repository/UserRepository.php');

require_once(__DIR__ . '/../utils/jwt.php');

class RegistrationController
{

    function __construct()
    {
    }

    function verifyMethod($method, $route)
    {
        switch ($method) {
            case 'POST':
                $name = $_POST['name'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $password = password_hash($password, PASSWORD_DEFAULT);
                $nationalId = $_POST['national_id'];
                $phone = $_POST['phone'];
                $userRepo = new UserRepository();
                if (!empty($userRepo->findUserByEmail($email)))
                {
                    return array('status' => 405);
                }
                $userRepo->createUser($name, $email, $password, $nationalId, $phone);
                $userId = $userRepo->findUserIdByEmail($email);
                $jwt = new JwtUtils();
                $token = $jwt->generateToken($userId);
                $userRepo->setToken($userId, $token);
                $response = array('token' => $token, 'userId' => $userId);
                echo json_encode($response);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
