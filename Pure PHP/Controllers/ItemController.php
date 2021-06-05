<?php

require_once(__DIR__ . '/../connection/connection.class.php');
require_once(__DIR__ . '/../Repository/ItemRepository.php');

require_once(__DIR__ . '/../utils/jwt.php');

class ItemController
{

    function __construct()
    {
    }

    function verifyMethod($method, $route)
    {
        $itemRepo = new ItemRepository();
        switch ($method) {
            case 'GET':
            $items = $itemRepo->getAll();
            echo json_encode($items);
            break;
            case 'DELETE':
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
