<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ItemDonation;
use App\Http\Resources\ItemDonationResource;

class ItemDonationController extends Controller
{
    // public function __construct()
    // {
    //   $this->middleware('auth:api');
    // }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ItemDonation::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

            $item_donation = ItemDonation::create([
                'user_id' => auth()->user()->id,
                'type' => $request->type,
                'delivery_method' => $request->delivery_method,
                'scheduled_date' => $request->scheduled_date
            ]);

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
