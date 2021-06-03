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

}
