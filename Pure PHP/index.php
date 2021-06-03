<?php
	require_once(__DIR__ . '/Controllers/OrganizationController.php');
	require_once(__DIR__ . '/connection/connection.class.php');		

	$route 	= $_SERVER['REQUEST_URI'];
	$method = $_SERVER['REQUEST_METHOD'];

	$route = substr($route, 1);
	$route = explode("?", $route);
	$route = explode("/", $route[0]);
	$route = array_diff($route, array('API_Restful', 'api'));
	$route = array_values($route);

	$arr_json = null;

	if (count($route) <= 2) {
		$conn = DBConnection::getInstance();

		switch ($route[0]) {
			case 'organization':
				$orgController = new OrganizationController();
				$orgController->verifyMethod($method, $route);
				break;
			
			default:
				$arr_json = array('status' => 404);
				break;
		}

	}else{
		$arr_json = array('status' => 404);
	}

	echo json_encode($arr_json);
