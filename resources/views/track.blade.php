<?php
$title = "Track";
$subtitle = "Track your order";
?>

@extends('layout')

@section('title',$title)



@section('page-header')
  @include('page-header',['title' => $title, 'subtitle' => $subtitle,])
@stop

@section('content')
 <div class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="custom-heading">
                            <h2>TRACK YOUR ORDER</h2>
                        </div><!-- .custom-heading end -->
                        <form action="{{url('track')}}">
						  <div class="form-group">
						   <h5 class="">Tracking Number</h5>
						   <input type="text" name="xx" class="form-control" placeholder="Tracking number">
						  </div>
						  <button type="submit" class="btn btn-primary btn-lg text-white" style="padding: 10px; color: #fff;">TRACK</button>
						</form>
                    </div><!-- .col-md-12 end -->


                </div><!-- .row end -->
            </div><!-- .container end -->
        </div><!-- .page-content end -->

        
@stop