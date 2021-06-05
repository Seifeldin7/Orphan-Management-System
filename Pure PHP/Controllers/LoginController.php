<?php

require_once(__DIR__ . '/../connection/connection.class.php');
require_once(__DIR__ . '/../Repository/UserRepository.php');

require_once(__DIR__ . '/../utils/jwt.php');

class LoginController
{

    private $userRepo;
    function __construct()
    {
        $this->userRepo = new UserRepository();
    }

    function verifyMethod($method, $route)
    {
        switch ($method) {
            case 'POST':
                $email = $_POST['email'];
                $password = $_POST['password'];

                if (!$this->validateCredentials($email, $password))
                {
                    return array('status' => 405);
                }

                $userId = $this->userRepo->findUserIdByEmail($email);
                $jwt = new JwtUtils();
                $token = $jwt->generateToken($userId);
                $this->userRepo->setToken($userId, $token);
                echo array('token' => $token, 'userId' => $userId);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }

    function validateCredentials($email, $password)
    {

    }
}
