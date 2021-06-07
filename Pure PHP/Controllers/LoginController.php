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
                if (!$this->validateCredentials($email, $password)) {
                    return array('status' => 405);
                }
                $userId = $this->userRepo->findUserIdByEmail($email);
                $jwt = new JwtUtils();
                $token = $jwt->generateToken($userId);
                $this->userRepo->setToken($userId, $token);
                $response = array('token' => $token, 'userId' => $userId);
                echo json_encode($response);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }

    function validateCredentials($email, $password)
    {
        $user = $this->userRepo->findUserByEmail($email);
        if (!$user) {
            return false;
        }
        $result = password_verify($password, $user['password']);
        if (!$result) {
            return false;
        }
        return true;
    }
}
