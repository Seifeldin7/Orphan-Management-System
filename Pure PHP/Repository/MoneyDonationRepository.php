<?php

require_once(__DIR__ . '/../connection/connection.class.php');

class MoneyDonationRepository
{

    private $conn;

    function __construct()
    {
        $this->conn = DBConnection::getInstance();
    }

    function getAll()
    {
        $json_array = [];
        $sql = "SELECT * FROM money_donations";
        $result = mysqli_query($this->conn, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }
        return $json_array;
    }

    function createMoneyDonation(
        $user_id, 
        $card_id,
        $amount,
        $org_id
        )
    {
        $sql = "INSERT INTO money_donations (user_id, card_id ,amount, created_at, org_id) 
        VALUES (?, ?, ?, ?, ?)";
        if ($stmt = mysqli_prepare($this->conn, $sql)) {
            $created_at = date('Y/m/d H:i:s');
            mysqli_stmt_bind_param($stmt, "iiisi", $user_id, $card_id, $amount, $created_at, $org_id);
            $result = mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
        }
        return $result;
    }
}
