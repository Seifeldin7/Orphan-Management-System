<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
  protected $fillable = [
    'user_id',
    'street',
    'governorate',
    'block_number',
    'additional_info',
    'lat',
    'long'
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
