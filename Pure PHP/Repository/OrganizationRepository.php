<?php

require_once(__DIR__ . '/../connection/connection.class.php');

class OrganizationRepository
{

    private $conn;

    function __construct()
    {
        $this->conn = DBConnection::getInstance();
    }

    function getAll()
    {
        $json_array = [];
        $sql = "SELECT * FROM organizations";
        $result = mysqli_query($this->conn, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }
        return $json_array;
    }
}
