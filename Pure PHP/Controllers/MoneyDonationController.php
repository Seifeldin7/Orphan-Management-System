<?php

require_once(__DIR__ . '/../connection/connection.class.php');
require_once(__DIR__ . '/../Repository/MoneyDonationRepository.php');

class MoneyDonationController
{

    function __construct()
    {
    }

    function verifyMethod($method, $route)
    {
        $user_id = $_GET["user_id"];

        switch ($method) {
            case 'POST':
                $card_id = $_POST["card_id"];
                $org_id = $_POST["org_id"];
                $amount = $_POST["amount"];
                $moneyDonationsRepo = new MoneyDonationRepository();
                if ($user_id) {
                    $moneyDonationsRepo->createMoneyDonation($user_id, $card_id, $amount, $org_id);
                } 
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
