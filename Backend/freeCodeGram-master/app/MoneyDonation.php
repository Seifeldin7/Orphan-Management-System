<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MoneyDonation extends Model
{
    protected $fillable = ['user_id', 'amount', 'card_id'];

    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
