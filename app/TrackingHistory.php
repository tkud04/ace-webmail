<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TrackingHistory extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tnum', 'location', 'remarks', 'status'
    ];
}
