<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemDonation extends Model
{
    protected $fillable = ['user_id', 'type', 'delivery_method', 'scheduled_date', 'org_id'];
    
    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function organization()
    {
      return $this->belongsTo(Organization::class);
    }
}
