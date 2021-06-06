<?php

require_once(__DIR__ . '/../connection/connection.class.php');

class ItemRepository
{

    private $conn;

    function __construct()
    {
        $this->conn = DBConnection::getInstance();
    }

    function getAll()
    {
        $json_array = [];
        $sql = "SELECT * FROM items";
        $result = mysqli_query($this->conn, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }
        return $json_array;
    }

    function deleteItemById($id)
    {
        $sql = "DELETE FROM items WHERE id= '$id'";
        $result = mysqli_query($this->conn, $sql);
        if (!$result) {
            return false;
        }
        return true;
    }
    
    function createItem($name, $image)
    {
        $sql = "INSERT INTO items (name, image) VALUES (?, ?)";
        if ($stmt = mysqli_prepare($this->conn, $sql)) {
            mysqli_stmt_bind_param($stmt, "ss", $name, $image);
            $result = mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
        }
        return $result;
    }

    function updateItem($id, $name, $image)
    {
        $sql = "UPDATE items SET name= '$name', image='$image' WHERE id= '$id'";
        $result = mysqli_query($this->conn, $sql);
        if (!$result) {
            return false;
        }
        return true;
    }

    function findItemIdByName($name) {
        $sql = "SELECT id FROM items WHERE name='$name'";
        $result = mysqli_query($this->conn, $sql);
        $id = mysqli_fetch_assoc($result)["id"];
        return $id;
    }
}
