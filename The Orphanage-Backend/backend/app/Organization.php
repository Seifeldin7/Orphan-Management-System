<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $fillable = [
        'type',
        'name',
        'description',
        'mission',
        'yearFouned',
        'yearsFundraising',
        'projectsFunded',
        'facebookPage',
        'website',
        'country',
        'phone',
        'image',
        'street',
        'governorate'
    ];

    public function moneyDonations()
    {
      return $this->hasMany(MoneyDonation::class);
    }

    public function itemDonations()
    {
      return $this->hasMany(ItemDonation::class);
    }
}
