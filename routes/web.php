<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MainController@getIndex');
Route::get('temp', 'MainController@getTemp');
Route::get('track', 'MainController@getTrack');
Route::get('about', 'MainController@getAbout');
Route::get('services', 'MainController@getServices');

//Authentication
Route::get('signup', 'LoginController@getSignup');
Route::post('signup', 'LoginController@postSignup');
Route::get('forgot-password', 'LoginController@getForgotPassword');
Route::post('forgot-password', 'LoginController@postForgotPassword');
Route::get('reset', 'LoginController@getPasswordReset');
Route::post('reset', 'LoginController@postPasswordReset');
Route::get('hello', 'LoginController@getHello');
Route::post('hello', 'LoginController@postHello');
Route::get('bye', 'LoginController@getBye');
Route::get('oauth', 'LoginController@getOauth');
Route::get('{type}/oauth', 'LoginController@getOauthRedirect');
Route::get('oauth-sp', 'LoginController@getOAuthSP');
Route::post('oauth-sp', 'LoginController@postOAuthSP');

Route::post('send-message', 'MainController@postSendMessage');

//Plugins
Route::get('plugins', 'MainController@getPlugins');
Route::get('add-plugin', 'MainController@getAddPlugin');
Route::post('add-plugin', 'MainController@postAddPlugin');
Route::get('plugin', 'MainController@getPlugin');
Route::post('plugin', 'MainController@postPlugin');
Route::get('remove-plugin', 'MainController@getRemovePlugin');

//Banners
Route::get('banners', 'MainController@getBanners');
Route::get('add-banner', 'MainController@getAddBanner');
Route::post('add-banner', 'MainController@postAddBanner');
Route::get('update-banner', 'MainController@getUpdateBanner');
Route::get('remove-banner', 'MainController@getRemoveBanner');

//Senders
Route::get('send', 'MainController@getSend');
Route::get('senders', 'MainController@getSenders');
Route::get('add-sender', 'MainController@getAddSender');
Route::post('add-sender', 'MainController@postAddSender');
Route::get('sender', 'MainController@getSender');
Route::post('sender', 'MainController@postSender');
Route::get('remove-sender', 'MainController@getRemoveSender');
Route::get('mark-sender', 'MainController@getMarkSender');

Route::get('zohoverify/{nn}', 'MainController@getZoho');
Route::get('tb', 'MainController@getTestBomb');

