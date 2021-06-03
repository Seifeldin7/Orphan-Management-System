<?php

namespace App\Http\Resources;

use App\Organization;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemDonationResource extends JsonResource
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
            'type' => $this->type,
            'delivery_method' => $this->delivery_method,
            'scheduled_date' => (string) $this->scheduled_date,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
            'organization' => Organization::find($this->org_id)->name
        ];
    }
}
