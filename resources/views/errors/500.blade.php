<?php
$user = null;
$c = [];
$cart = [];
$plugins = [];
$pe = ['phone' => "",'email' => ""];
?>
@extends('layout')

@section('title',"Server Error")

@section('content')
   <!--start of middle sec-->
<div class="middle-sec wow fadeIn animated animated" data-wow-offset="10" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s;">
    <div id="particles"><canvas class="pg-canvas" width="1349" height="450" style="display: block;"></canvas>
      <div id="not-found" class="wow fadeInDown text-center container animated animated" style="visibility: visible;">
        <div class="update">
          <h2 class="text-primary text-uppercase"><strong>Oops!</strong> The server encountered a teeny tiny error.</h2>
          <p>We are really sorry, these things happen. We are looking into it as you read this.</p>
        </div>
        <div class="not-found text-info"> <strong>5<span class="ion-flash-off"></span><span class="ion-flash-off"></span></strong> </div>
        <a href="{{url('/')}}" class="btn btn-primary hvr-underline-from-center-primary">Go to home</a> </div>
    </div>
  </div>
  <!--end of middle sec--> 
    
@stop