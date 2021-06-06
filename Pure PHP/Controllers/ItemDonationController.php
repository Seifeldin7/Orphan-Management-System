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
        $itemDonationsRepo = new ItemDonationRepository();
        switch ($method) {
            case 'GET':
                if ($user_id) {
                    $itemDonations = $itemDonationsRepo->getByUserId($user_id);
                } else {
                    $itemDonations = $itemDonationsRepo->getAll();
                }
                echo json_encode($itemDonations);
                break;
            case 'POST':
                $delivery_method = $_POST["delivery_method"];
                $scheduled_date = $_POST["scheduled_date"];
                $items =  $_POST["items"];
                $org_id =  $_POST["org_id"];
                if ($user_id) {
                    $itemDonationsRepo->createItemDonation(
                        $user_id,
                        $org_id,
                        $delivery_method,
                        $scheduled_date,
                        $items
                    );
                }
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
