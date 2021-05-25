<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CreditCard extends Model
{
    protected $fillable = ['user_id', 'number', 'cvv', 'expiration_date'];

    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
