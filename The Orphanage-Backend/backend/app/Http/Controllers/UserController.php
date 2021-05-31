<?php

namespace App\Http\Controllers;

use App\Address;
use App\CreditCard;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = auth()->user()->id;
        return new UserResource(User::findOrFail($user_id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateInfo(Request $request)
    {
        $user = auth()->user();
        $user->update($request->all());
        return new UserResource($user); 
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCreditCard(Request $request)
    {
        $user_id = auth()->user()->id;
        $card = CreditCard::find($user_id);
        if ($card) {
            $card->update($request->all());
        } else {
            $new_card = CreditCard::create($request->all());
            $new_card->update(["user_id" => auth()->user()->id]);
        }
        return new UserResource(User::findOrFail($user_id)); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateAddress(Request $request)
    {
        $user_id = auth()->user()->id;
        $address = Address::find($user_id);
        if ($address) {
            $address->update($request->all());
        } else {
            $new_address = Address::create($request->all());
            $new_address->update(["user_id" => auth()->user()->id]);
        }
        return new UserResource(User::findOrFail($user_id)); 
    }

}
