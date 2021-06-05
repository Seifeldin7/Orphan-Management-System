<?php
require_once(__DIR__ . '/Controllers/OrganizationController.php');
require_once(__DIR__ . '/Controllers/ItemDonationController.php');
require_once(__DIR__ . '/Controllers/RegistrationController.php');

require_once(__DIR__ . '/connection/connection.class.php');

$route 	= $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];
if (isset($_SERVER['HTTP_ORIGIN'])) {
	// should do a check here to match $_SERVER['HTTP_ORIGIN'] to a
	// whitelist of safe domains
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}
$route = substr($route, 1);
$route = explode("?", $route);
$route = explode("/", $route[0]);

$route = array_diff($route, array('API_Restful', 'api'));
$route = array_values($route);

if (count($route) <= 2) {
	$conn = DBConnection::getInstance();

	switch ($route[0]) {
		case 'organization':
			$orgController = new OrganizationController();
			$orgController->verifyMethod($method, $route);
			break;
		case 'item-donation':
			$itemDonationController = new ItemDonationController();
			$itemDonationController->verifyMethod($method, $route);
			break;
		case 'register':
			$registerController = new RegistrationController();
			$registerController->verifyMethod($method, $route);
			break;
		case 'login':
			$loginController = new LoginController();
			$loginController->verifyMethod($method, $route);
			break;
		default:
			$arr_json = array('status' => 404);
			break;
	}
} else {
	$arr_json = array('status' => 404);
}
