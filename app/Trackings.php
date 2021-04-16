<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trackings extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tnum', 'stype', 'weight', 'origin', 'bmode', 'freight', 'mode', 'dest', 'pickup_at', 'desc', 'status'
    ];
}
