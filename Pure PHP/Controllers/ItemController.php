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
                $itemRepo->deleteItemById($_GET["id"]);
                break;
            case 'POST':
                $name = $_POST['name'];
                $image = $_POST['image'];
                $itemRepo->createItem($name, $image);
                $id = $itemRepo->findItemIdByName($name);
                echo json_encode($id);
                break;
            case 'PUT':
                $putBody = file_get_contents( 'php://input', 'r' );
                $name = $putBody['name'];
                $image = $putBody['image'];
                $itemRepo->updateItem($_GET["id"], $name, $image);
                break;
            default:
                return array('status' => 405);
                break;
        }
    }
}
