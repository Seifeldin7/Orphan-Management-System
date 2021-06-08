<?php

require_once(__DIR__ . '/../connection/connection.class.php');

class UserRepository
{

    private $conn;

    function __construct()
    {
        $this->conn = DBConnection::getInstance();
    }

    function getAll()
    {
        $json_array = [];
        $sql = "SELECT id, name, phone_number, national_id, email FROM users";
        $result = mysqli_query($this->conn, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }
        return $json_array;
    }

    function createUser($name, $email, $password, $nationalId, $phone)
    {
        $sql = "INSERT INTO users (name, email, password, national_id, phone_number) VALUES (?, ?, ?, ?, ?)";
        if ($stmt = mysqli_prepare($this->conn, $sql)) {
            mysqli_stmt_bind_param($stmt, "sssss", $name, $email, $password, $nationalId, $phone);
            $result = mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
        }
        $last_id = mysqli_insert_id($this->conn);
        $role = 'donor';
        $sql = "INSERT INTO user_roles (role, user_id) VALUES (?, ?)";
        if ($stmt = mysqli_prepare($this->conn, $sql)) {
            mysqli_stmt_bind_param($stmt, "si", $role, $last_id);
            $result = mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
        }
        return $result;
    }

    function findUserIdByEmail($email)
    {
        $sql = "SELECT id FROM users WHERE email='$email'";
        $result = mysqli_query($this->conn, $sql);
        $id = mysqli_fetch_assoc($result)["id"];
        return $id;
    }

    function findUserByEmail($email)
    {
        $sql = "SELECT * FROM users 
        WHERE email= '$email'";
        $result = mysqli_query($this->conn, $sql);
        if (!$result) {
            return false;
        }
        $user = mysqli_fetch_assoc($result);
        return $user;
    }

    function setToken($userId, $token)
    {
        $sql = "UPDATE users SET token= '$token' WHERE id= '$userId'";
        $result = mysqli_query($this->conn, $sql);
        if (!$result) {
            return false;
        }
        return true;
    }

    function deleteUserById($id)
    {
        $sql = "DELETE FROM users WHERE id= '$id'";
        $result = mysqli_query($this->conn, $sql);
        if (!$result) {
            return false;
        }
        return true;
    }

    function getRole($id) 
    {
        $sql = "SELECT role FROM user_roles 
        WHERE user_id= '$id'";
        $result = mysqli_query($this->conn, $sql);
        if (!$result) {
            return false;
        }
        $role = mysqli_fetch_assoc($result)["role"];
        return $role;
    }
}
