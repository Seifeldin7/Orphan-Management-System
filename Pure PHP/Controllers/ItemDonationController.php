<?php

require_once(__DIR__ . '/../connection/connection.class.php');
require_once(__DIR__ . '/../Repository/ItemDonationRepository.php');

class ItemDonationController
{

    function __construct()
    {
    }

    function verifyMethod($method, $route)
    {
        $user_id = $_GET["user_id"];

        switch ($method) {
            case 'GET':
                $itemDonationsRepo = new ItemDonationRepository();
                if ($user_id) {
                    $itemDonations = $itemDonationsRepo->getByUserId($user_id);
                } else {
                    $itemDonations = $itemDonationsRepo->getAll();
                }
                echo json_encode($itemDonations);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
