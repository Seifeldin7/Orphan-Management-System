<?php

require_once(__DIR__ . '/../connection/connection.class.php');

class ItemDonationRepository
{

    private $conn;

    function __construct()
    {
        $this->conn = DBConnection::getInstance();
    }

    function getAll()
    {
        $json_array = [];
        $sql = " SELECT donation.id, org.name, item.name, donation.created_at, 
        donation.updated_at, donation_details.amount,
        donation_details.scheduled_date, donation_details.delivery_method
        FROM organizations AS org
        INNER JOIN item_donations AS donation 
        ON org.id = donation.org_id
        INNER JOIN item_donations_details AS donation_details
        ON donation_details.item_donation_id = donation.id
        INNER JOIN items AS item
        ON item.id = donation.item_id";

        $result = mysqli_query($this->conn, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }
        return $json_array;
    }

    function getByUserId($userId)
    {
        $json_array = [];
        $sql = " SELECT donation.id, org.name, item.name, donation.created_at, 
        donation.updated_at, donation_details.amount,
        donation_details.scheduled_date, donation_details.delivery_method
        FROM organizations AS org
        INNER JOIN item_donations AS donation 
        ON org.id = donation.org_id
        INNER JOIN item_donations_details AS donation_details
        ON donation_details.item_donation_id = donation.id
        INNER JOIN items AS item
        ON item.id = donation.item_id
        WHERE donation.user_id = $userId";

        $result = mysqli_query($this->conn, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }
        return $json_array;
    }

    function createItemDonation(
        $userId,
        $org_id,
        $delivery_method,
        $scheduled_date,
        $items
    ) {

        foreach ($items as $item) {
            $sql = "INSERT INTO item_donations (user_id, item_id, org_id, created_at) 
            VALUES (?, ?, ?, ?)";
            if ($stmt = mysqli_prepare($this->conn, $sql)) {
                $created_at = date('Y/m/d H:i:s');
                mysqli_stmt_bind_param($stmt, "iiis", $userId, $item->id, $org_id, $created_at);
                $result= mysqli_stmt_execute($stmt);
                mysqli_stmt_close($stmt);
            }
            $last_id = mysqli_insert_id($this->conn);
            $sql = "INSERT INTO item_donations_details 
                (amount, scheduled_date, delivery_method, item_donation_id) 
                VALUES (?, ?, ?, ?)";
            if ($stmt = mysqli_prepare($this->conn, $sql)) {
                mysqli_stmt_bind_param($stmt, "isii", $item->amount, $scheduled_date, $delivery_method, $last_id);
                mysqli_stmt_execute($stmt);
                mysqli_stmt_close($stmt);
            }
        }
    }
}
