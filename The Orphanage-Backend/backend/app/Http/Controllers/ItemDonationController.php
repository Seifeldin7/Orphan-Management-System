<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItemDonationResource;
use App\ItemDonation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemDonationController extends Controller
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
        $item_donations = ItemDonation::find($user_id);
        return $item_donations;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $item_donation = new ItemDonation;
        $item_donation->type = $request->get('type');
        $item_donation->user_id = auth()->user()->id;
        $item_donation->delivery_method = (int) $request->get('delivery_method');
        $item_donation->scheduled_date = date('l jS \of F Y h:i:s A');
        $item_donation->save();
        return new ItemDonationResource($item_donation);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
