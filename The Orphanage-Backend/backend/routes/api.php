<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['api'])->group(function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me')->middleware('log.route');

    Route::post('register', 'RegistrationController@register');
    Route::get('email/verify/{id}', 'VerificationController@verify')->name('verification.verify');
    Route::get('email/resend', 'VerificationController@resend')->name('verification.resend');
    Route::post('password/email', 'ForgotPasswordController@forgot');
    Route::post('password/reset', 'ForgotPasswordController@reset');

    Route::apiResource('user', 'UserController');
    Route::post('user/address', 'UserController@updateAddress');
    Route::post('user/credit-card', 'UserController@updateCreditCard');
    Route::post('user/info', 'UserController@updateInfo');

    Route::apiResource('money-donation', 'MoneyDonationController');
    Route::apiResource('item-donation', 'ItemDonationController');

    Route::apiResource('organization', 'OrganizationController');
});
