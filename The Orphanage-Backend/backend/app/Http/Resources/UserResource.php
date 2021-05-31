<?php

namespace App\Http\Resources;

use App\Address;
use App\CreditCard;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => (string) $this->name,
            'phone_number' => (string) $this->phone_number,
            'national_id' => (string) $this->national_id,
            'email' => (string) $this->email,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
            "credit_card" => CreditCard::find($this->id),
            "address" => Address::find($this->id)
        ];
    }
}
