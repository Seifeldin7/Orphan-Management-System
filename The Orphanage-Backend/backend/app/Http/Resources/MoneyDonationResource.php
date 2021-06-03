<?php

namespace App\Http\Resources;

use App\Organization;
use Illuminate\Http\Resources\Json\JsonResource;

class MoneyDonationResource extends JsonResource
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
            'amount' => $this->amount,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
            'organization' => Organization::find($this->org_id)->name
        ];
    }
}
