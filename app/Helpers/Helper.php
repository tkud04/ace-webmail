<?php
namespace App\Helpers;

use App\Helpers\Contracts\HelperContract; 
use Crypt;
use Carbon\Carbon; 
use Mail;
use Auth;
use Illuminate\Http\Request;
use App\User;
use App\Senders;
use App\Settings;
use App\Plugins;
use Webklex\PHPIMAP\ClientManager;
use Webklex\PHPIMAP\Client;
use \Swift_Mailer;
use \Swift_SmtpTransport;
use \Cloudinary\Api;
use \Cloudinary\Api\Response;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;
use Codedge\Fpdf\Fpdf\Fpdf;



class Helper implements HelperContract
{

 public $signals = ['okays'=> ["login-status" => "Sign in successful",            
                     "signup-status" => "Account created successfully! You can now login to complete your profile.",
                     "add-product-status" => "Product added!",
                     "add-category-status" => "Category added!",
                     "update-product-status" => "Product updated!",
                     "remove-category-status" => "Category removed!",
                     "remove-product-status" => "Product removed!",
                     "update-category-status" => "Category updated!",
                     "update-status" => "Account updated!",
                     "update-user-status" => "User account updated!",
                     "config-status" => "Config added/updated!",
                     "add-ad-status" => "Ad added!",
                     "edit-ad-status" => "Ad updated!",
					 "ad-banner-status" => "Banner added!",
                     "edit-banner-status" => "Banner updated!",
                     "edit-review-status" => "Review info updated!",
                     "add-order-history-status" => "Order history updated!",
                     "edit-order-status" => "Order info updated!",
                     "contact-status" => "Message sent! Our customer service representatives will get back to you shortly.",
                     "create-tracking-status" => "Tracking info updated.",
                     "update-discount-status" => "Discount updated.",
                     "create-discount-status" => "Discount created.",
                     "delete-discount-status" => "Discount deleted.",
                     "no-sku-status" => "Please select a product for single discount.",
                     "set-cover-image-status" => "Product image updated",
                     "delete-image-status" => "Image deleted",
                     "delete-order-status" => "Order deleted",
                     "bulk-update-tracking-status" => "Trackings updated",
                     "bulk-confirm-payment-status" => "Payments confirmed",
                     "bulk-update-products-status" => "Products updated",
                     "bulk-upload-products-status" => "Products uploaded",
                     "no-validation-status" => "Please fill all required fields",
                     "add-plugin-status" => "Plugin added",
                     "update-plugin-status" => "Plugin updated",
                     "remove-plugin-status" => "Plugin removed",
					 "add-shipping-status" => "Shipping info added",
                     "update-shipping-status" => "Shipping info updated",
                     "remove-shipping-status" => "Shipping info removed",
                     "add-sender-status" => "Sender added",
                     "remove-sender-status" => "Sender removed",
                     "mark-sender-status" => "Sender updated",
					 "add-catalog-status" => "Item(s) added to catalog",
                     "remove-catalog-status" => "Item(s) removed from catalog",
                     "update-catalog-status" => "Catalog updated",
					 "add-manufacturer-status" => "Manufacturer added",
                     "remove-manufacturer-status" => "Manufacturer removed",
                     "update-manufacturer-status" => "Manufacturer updated",
                     "add-information-status" => "Information added",
                     "update-information-status" => "Information updated",
                     "remove-information-status" => "Information removed",
					 //ERRORS
					 "login-status-error" => "There was a problem signing in, please contact support.",
					 "signup-status-error" => "There was a problem signing in, please contact support.",
					 "duplicate-user-status-error" => "An account with this email already exists.",
					 "update-status-error" => "There was a problem updating the account, please contact support.",
					 "update-user-status-error" => "There was a problem updating the user account, please contact support.",
					 "validation-status-error" => "Please fill all required fields.",
					 "duplicate-status-error" => "Already exists.",
					 "contact-status-error" => "There was a problem sending your message, please contact support.",
					 "create-product-status-error" => "There was a problem adding the product, please try again.",
					 "add-category-status-error" => "There was a problem adding the category, please try again.",
					 "update-product-status-error" => "There was a problem updating product info, please try again.",
					 "update-category-status-error" => "There was a problem updating category, please try again.",
					 "create-ad-status-error" => "There was a problem adding new ad, please try again.",
					 "edit-ad-status-error" => "There was a problem updating the ad, please try again.",
					 "create-banner-status-error" => "There was a problem adding new banner, please try again.",
					 "edit-banner-status-error" => "There was a problem updating the banner, please try again.",
					 "edit-order-status-error" => "There was a problem updating the order, please try again.",
					 "create-tracking-status-error" => "There was a problem updating tracking information, please try again.",
					 "create-discount-status-error" => "There was a problem creating the discount, please try again.",
					 "update-discount-status-error" => "There was a problem updating the discount, please try again.",
					 "delete-image-status-error" => "There was a problem deleting the image, please try again.",
					 "set-cover-image-status-error" => "There was a problem updating the product image, please try again.",
					 "delete-discount-status-error" => "There was a problem deleting the discount, please try again.",
					"bulk-update-tracking-status-error" => "There was a problem updating trackings, please try again.",
					"bulk-confirm-payment-status-error" => "There was a problem confirming payments, please try again.",
					"bulk-update-products-status-error" => "There was a problem updating products, please try again.",
					"bulk-upload-products-status-error" => "There was a problem uploading products, please try again.",
					"add-manufacturer-status-error" => "There was a problem adding the manufacturer, please try again.",
                     "remove-manufacturer-status-error" => "There was a problem removing the manufacturer, please try again.",
                     "update-manufacturer-status-error" => "There was a problem updating the manufacturer, please try again.",
					 "add-information-status-error" => "There was a problem adding information, please try again.",
					 "update-information-status-error" => "There was a problem updating information, please try again.",
					 "add-shipping-status-error" => "There was a problem adding the shipping info, please try again.",
                     "update-shipping-status-error" => "There was a problem updating the shipping info, please try again.",
                     "remove-shipping-status-error" => "There was a problem removing the shipping info, please try again.",
                   ],
				   'errors' => []
				   ];
  
  
  public $smtpp = [
       'gmail' => [
       'ss' => "smtp.gmail.com",
       'sp' => "587",
       'sec' => "tls",
       ],
       'yahoo' => [
       'ss' => "smtp.mail.yahoo.com",
       'sp' => "587",
       'sec' => "ssl",
       ],
  ];

 
  
    public $permissions = [
	   'view_users','edit_users',
	   'view_apartments','edit_apartments',
	   'view_reviews','edit_reviews',
	   'view_transactions','edit_transactions',
	   'view_tickets','edit_tickets',
	   'view_banners','edit_banners',
	   'view_plugins','edit_plugins',
	    'view_senders','edit_senders',
	    'view_posts','edit_posts'
	   ];

  public $suEmail = "kudayisitobi@gmail.com";

 
		   #{'msg':msg,'em':em,'subject':subject,'link':link,'sn':senderName,'se':senderEmail,'ss':SMTPServer,'sp':SMTPPort,'su':SMTPUser,'spp':SMTPPass,'sa':SMTPAuth};
           function sendEmailSMTP($data,$view,$type="view")
           {
           	    // Setup a new SmtpTransport instance for new SMTP
                $transport = "";
if($data['sec'] != "none") $transport = new Swift_SmtpTransport($data['ss'], $data['sp'], $data['sec']);

else $transport = new Swift_SmtpTransport($data['ss'], $data['sp']);

   if($data['sa'] != "no"){
                  $transport->setUsername($data['su']);
                  $transport->setPassword($data['spp']);
     }
// Assign a new SmtpTransport to SwiftMailer
$smtp = new Swift_Mailer($transport);

// Assign it to the Laravel Mailer
Mail::setSwiftMailer($smtp);

$se = $data['se'];
$sn = $data['sn'];
$to = $data['em'];
$from = isset($data['from']) ? $data['from'] : "";
$subject = $data['subject'];
                   if($type == "view")
                   {
                     Mail::send($view,$data,function($message) use($from,$to,$subject,$se,$sn){
                           $message->from($se,$sn);
                           $message->to($to);
                          if($from != "") $message->setReplyTo($from);
                           $message->subject($subject);
                          if(isset($data["has_attachments"]) && $data["has_attachments"] == "yes")
                          {
                          	foreach($data["attachments"] as $a) $message->attach($a);
                          } 
						  $message->getSwiftMessage()
						  ->getHeaders()
						  ->addTextHeader('x-mailgun-native-send', 'true');
                     });
                   }

                   elseif($type == "raw")
                   {
                     Mail::raw($view,$data,function($message) use($to,$subject,$se,$sn){
                            $message->from($se,$sn);
                           $message->to($to);
                           $message->subject($subject);
                           if(isset($data["has_attachments"]) && $data["has_attachments"] == "yes")
                          {
                          	foreach($data["attachments"] as $a) $message->attach($a);
                          } 
                     });
                   }
           }

           function bomb($data) 
           {
             $url = $data['url'];
               
			       $client = new GuzzleClient([
                 // Base URI is used with relative requests
                 'base_uri' => 'http://httpbin.org',
                 // You can set any number of default request options.
                 //'timeout'  => 2.0,
				 'headers' => $data['headers']
                 ]);
                  
				 
				 $dt = [
				    
				 ];
				 
				 if(isset($data['data']))
				 {
					if(isset($data['type']) && $data['type'] == "raw")
					{
					  $dt = ['body' => $data['data']];
					}
					else
					{
					  $dt['multipart'] = [];
					  foreach($data['data'] as $k => $v)
				      {
					    $temp = [
					      'name' => $k,
						  'contents' => $v
					     ];
						 
					     array_push($dt['multipart'],$temp);
				      }
					}
				   
				 }
				 
				 try
				 {
					if($data['method'] == "get") $res = $client->request('GET', $url);
					else if($data['method'] == "post") $res = $client->request('POST', $url,$dt);
			  
                   $ret = $res->getBody()->getContents(); 
			       //dd($ret);

				 }
				 catch(RequestException $e)
				 {
					 $mm = (is_null($e->getResponse())) ? null: Psr7\str($e->getResponse());
					 $ret = json_encode(["status" => "error","message" => $mm]);
				 }
			     $rett = json_decode($ret);
           return $ret; 
           }
		   
		   
		   function text($data) 
           {
           	//form query string
              // $qs = "sn=".$data['sn']."&sa=".$data['sa']."&subject=".$data['subject'];

               $lead = $data['to'];
			   
			   if($lead == null || $lead == "")
			   {
				    $ret = json_encode(["status" => "error","message" => "Invalid number"]);
			   }
			   else
			    { 
                  
			       $url = "https://smartsmssolutions.com/api/?";
			       $url .= "message=".urlencode($data['msg'])."&to=".$data['to'];
			       $url .= "&sender=Etuk+NG&type=0&routing=3&token=".env('SMARTSMS_API_X_KEY', '');
			      #dd($url);
				  
                  $dt = [
				       'headers' => [
					     'Content-Type' => "text/html"
					   ],
                       'method' => "get",
                       'url' => $url
                  ];
				
				 $ret = $this->bomb($dt);
				 #dd($ret);
				 $smsData = explode("||",$ret);
				 if(count($smsData) == 2)
				 {
					 $status = $smsData[0];
					 $dt = $smsData[1];
					 
					 if($status == "1000")
					 {
						$rett = json_decode($dt);
			            if($rett->code == "1000")
			            {
					      $ret = json_encode(["status" => "ok","message" => "Message sent!"]); 			
			             }
				         else
			             {
			         	   $ret = json_encode(["status" => "error","message" => "Error sending message."]); 
			             } 
					 }
					 else
					 {
						 $ret = json_encode(["status" => "error","message" => "Error sending message."]); 
					 }
				 }
				 else
				 {
					$ret = json_encode(["status" => "error","message" => "Malformed response from SMS API"]); 
				 }
			     
			    }
				
              return $ret; 
           }
		   
		   function isDuplicateUser($dt)
		   {
			   $ret = false;
			   $u = User::where($dt)->first();
			   if($u != null) $ret = true;
			   return $ret;
		   }
		   
		   function createUser($data)
           {
			   $avatar = isset($data['avatar']) ? $data['avatar'] : "";
			   $avatarType = isset($data['avatar_type']) ? $data['avatar_type'] : "cloudinary";
			   $pass = (isset($data['password']) && $data['password'] != "") ? bcrypt($data['password']) : "";
			   
           	   $ret = User::create(['fname' => $data['fname'], 
                                                      'lname' => $data['lname'], 
                                                      'email' => $data['email'], 
                                                      'phone' => "", 
                                                      'role' => $data['role'], 
                                                      'mode' => "", 
                                                      'mode_type' => "", 
                                                      'avatar' => $avatar, 
                                                      'avatar_type' => "", 
                                                      'currency' => "gbp", 
                                                      'host_upgraded' => "", 
                                                      'status' => $data['status'], 
                                                      'verified' => $data['verified'], 
                                                      'password' => $pass, 
                                                      ]);
                                                      
                return $ret;
           }
		   
		     function getUsers($all=false)
           {
           	$ret = [];
              $users = User::where('id','>',"0")->get();
             
              if($users != null)
               {
				  foreach($users as $u)
				  {
					  $uu = $this->getUser($u->id,$all);
					  array_push($ret,$uu);
				  }
               }                         
                                                      
                return $ret;
           }
		   
		   function getUser($id,$all=false)
           {
           	$ret = [];
               $u = User::where('email',$id)
			            ->orWhere('id',$id)->first();
 
              if($u != null)
               {
                   	$temp['fname'] = $u->fname; 
                       $temp['lname'] = $u->lname; 
                       //$temp['wallet'] = $this->getWallet($u);
                       $temp['phone'] = $u->phone; 
                       $temp['email'] = $u->email; 
                       $temp['role'] = $u->role;
                       if($all)
					   {
						   $sd =  $this->getShippingDetails($u);
						   $temp['sd'] = count($sd) > 0 ? $sd[0] : $sd;
					   }					   
                       $temp['status'] = $u->status; 
                       $temp['verified'] = $u->verified; 
                       $temp['id'] = $u->id; 
                       $temp['date'] = $u->created_at->format("jS F, Y h:i"); 
                       $ret = $temp; 
               }                          
                                                      
                return $ret;
           }
		   
		   
		
		   
		     function updateUser($data)
           {		

				$uu = User::where('id', $data['xf'])->first();
				
				if(!is_null($uu))				
				{
					$uu->update(['fname' => $data['fname'], 
                                                      'lname' => $data['lname'],
                                                     'email' => $data['email'],
                                                'phone' => $data['phone'],
                                              'status' => $data['status'] 
                                                      ]);	
				}
					
           }
		   
		   function isAdmin($user)
           {
           	$ret = false; 
               if($user->role === "admin" || $user->role === "su") $ret = true; 
           	return $ret;
           }
		   

		
		
		 function getPasswordResetCode($user)
           {
           	$u = $user; 
               
               if($u != null)
               {
               	//We have the user, create the code
                   $code = bcrypt(rand(125,999999)."rst".$u->id);
               	$u->update(['reset_code' => $code]);
               }
               
               return $code; 
           }
           
           function verifyPasswordResetCode($code)
           {
           	$u = User::where('reset_code',$code)->first();
               
               if($u != null)
               {
               	//We have the user, delete the code
               	$u->update(['reset_code' => '']);
               }
               
               return $u; 
           }

          function manageUserStatus($dt)
		  {
			  $user = User::where('id',$dt['id'])
			              ->orWhere('email',$dt['id'])->first();
			  
			  if($user != null)
			  {
				  $val = $dt['action'] == "enable" ? "enabled" : "disabled";
				  $user->update(['status' => $val]);
			  }
			  
			  return "ok";
		  }
		




	
	function createSetting($data)
           {
			   #dd($data);
			 $ret = null;
			 
			 
				 $ret = Settings::create(['name' => $data['k'], 
                                                      'value' => $data['v'],                                                      
                                                      'status' => "enabled", 
                                                      ]);
			  return $ret;
           }
	
	function getSetting($id)
	{
		$temp = [];
		$s = Settings::where('id',$id)
		             ->orWhere('name',$id)->first();
 
              if($s != null)
               {
				      $temp['name'] = $s->name; 
                       $temp['value'] = $s->value;                  
                       $temp['id'] = $s->id; 
                       $temp['date'] = $s->created_at->format("jS F, Y"); 
                       $temp['updated'] = $s->updated_at->format("jS F, Y"); 
                   
               }      
       return $temp;            	   
   }
		
    function getSettings()
           {
           	$ret = [];
			  $settings = Settings::where('id','>',"0")->get();
 
              if($settings != null)
               {
				   foreach($settings as $s)
				   {
				      $temp = $this->getSetting($s->id);
                       array_push($ret,$temp); 
				   }
               }                         
                                                      
                return $ret;
           }
		   
	  function updateSetting($a,$b)
           {
			
				 $s = Settings::where('name',$a)
				              ->orWhere('id',$a)->first();
			 
			 
			 if(!is_null($s))
			 {
				 $s->update(['value' => $b]);
			  
			 }
           	
           }
		   
		
           
           
           function createSender($data)
           {
			   #dd($data);
			 $ret = null;
			 
			 
				 $ret = Senders::create(['ss' => $data['ss'], 
                                                      'type' => $data['type'], 
                                                      'sp' => $data['sp'], 
                                                      'sec' => $data['sec'], 
                                                      'sa' => $data['sa'], 
                                                      'su' => $data['su'], 
                                                      'current' => $data['current'], 
                                                      'spp' => $data['spp'], 
                                                      'sn' => $data['sn'], 
                                                      'se' => $data['se'], 
                                                      'status' => "enabled", 
                                                      ]);
			  return $ret;
           }

   function getSenders()
   {
	   $ret = [];
	   
	   $senders = Senders::where('id','>',"0")->get();
	   
	   if(!is_null($senders))
	   {
		   foreach($senders as $s)
		   {
		     $temp = $this->getSender($s->id);
		     array_push($ret,$temp);
	       }
	   }
	   
	   return $ret;
   }
   
   function getSender($id)
           {
           	$ret = [];
               $s = Senders::where('id',$id)->first();
 
              if($s != null)
               {
                   	$temp['ss'] = $s->ss; 
                       $temp['sp'] = $s->sp; 
                       $temp['se'] = $s->se;
                       $temp['sec'] = $s->sec; 
                       $temp['sa'] = $s->sa; 
                       $temp['su'] = $s->su; 
                       $temp['current'] = $s->current; 
                       $temp['spp'] = $s->spp; 
					   $temp['type'] = $s->type;
                       $sn = $s->sn;
                       $temp['sn'] = $sn;
                        $snn = explode(" ",$sn);					   
                       $temp['snf'] = $snn[0]; 
                       $temp['snl'] = ""; #count($snn) > 0 ? $snn[1] : ""; 
					   
                       $temp['status'] = $s->status; 
                       $temp['id'] = $s->id; 
                       $temp['date'] = $s->created_at->format("jS F, Y"); 
                       $ret = $temp; 
               }                          
                                                      
                return $ret;
           }
		   
		   
		  function updateSender($data,$user=null)
           {
			   #dd($data);
			 $ret = "error";
			 if($user == null)
			 {
				 $s = Senders::where('id',$data['xf'])->first();
			 }
			 else
			 {
				$s = Senders::where('id',$data['xf'])
			             ->where('user_id',$user->id)->first(); 
			 }
			 
			 
			 if(!is_null($s))
			 {
				 $s->update(['ss' => $data['ss'], 
                                                      'type' => $data['type'], 
                                                      'sp' => $data['sp'], 
                                                      'sec' => $data['sec'], 
                                                      'sa' => $data['sa'], 
                                                      'su' => $data['su'], 
                                                      'spp' => $data['spp'], 
                                                      'sn' => $data['sn'], 
                                                      'se' => $data['se'], 
                                                      'status' => "enabled", 
                                                      ]);
			   $ret = "ok";
			 }
           	
                                                      
                return $ret;
           }

		   function removeSender($xf,$user=null)
           {
			   #dd($data);
			 $ret = "error";
			 if($user == null)
			 {
				 $s = Senders::where('id',$xf)->first();
			 }
			 else
			 {
				$s = Senders::where('id',$xf)
			             ->where('user_id',$user->id)->first(); 
			 }
			 
			 
			 if(!is_null($s))
			 {
				 $s->delete();
			   $ret = "ok";
			 }
           
           }
		   
		   function setAsCurrentSender($id)
		   {
			   $s = Senders::where('id',$id)->first();
			   
			   if($s != null)
			   {
				   $prev = Senders::where('current',"yes")->first();
				   if($prev != null) $prev->update(['current' => "no"]);
				   $s->update(['current' => "yes"]);
			   }
		   }
		   
		   function getCurrentSender()
		   {
			   $ret = [];
			   $s = Senders::where('current',"yes")->first();
			   
			   if($s != null)
			   {
				   $ret = $this->getSender($s['id']);
			   }
			   
			   return $ret;
		   }
		   
		 
		   
		 function createPlugin($data)
           {
			   #dd($data);
			 $ret = null;
			 
			 
				 $ret = Plugins::create(['name' => $data['name'], 
                                                      'value' => $data['value'], 
                                                      'status' => $data['status'], 
                                                      ]);
			  return $ret;
           }

   function getPlugins()
   {
	   $ret = [];
	   
	   $plugins = Plugins::where('id','>',"0")->get();
	   
	   if(!is_null($plugins))
	   {
		   foreach($plugins as $p)
		   {
		     $temp = $this->getPlugin($p->id);
		     array_push($ret,$temp);
	       }
	   }
	   
	   return $ret;
   }
   
   function getPlugin($id)
           {
           	$ret = [];
               $p = Plugins::where('id',$id)->first();
 
              if($p != null)
               {
                   	$temp['name'] = $p->name; 
                       $temp['value'] = $p->value; 	   
                       $temp['status'] = $p->status; 
                       $temp['id'] = $p->id; 
                       $temp['date'] = $p->created_at->format("jS F, Y"); 
                       $temp['updated'] = $p->updated_at->format("jS F, Y"); 
                       $ret = $temp; 
               }                          
                                                      
                return $ret;
           }
		   
		   
		  function updatePlugin($data,$user=null)
           {
			   #dd($data);
			 $ret = "error";
			  $p = Plugins::where('id',$data['xf'])->first();
			 
			 
			 if(!is_null($p))
			 {
				 $p->update(['name' => $data['name'], 
                                                      'value' => $data['value'], 
                                                      'status' => $data['status']
                                                      ]);
			   $ret = "ok";
			 }
           	
                                                      
                return $ret;
           }

		   function removePlugin($xf,$user=null)
           {
			   #dd($data);
			 $ret = "error";
			 $p = Plugins::where('id',$xf)->first();

			 
			 if(!is_null($p))
			 {
				 $p->delete();
			   $ret = "ok";
			 }
           
           }
		   
		   
		   function hasPermission($user_id,$ps)
		   {
			   return true;
		   }
		
		 function send($dt)
         {
         	$ret = ['status' => "error", 'message' => "nope"];
         	 $smtp = $this->getCurrentSender();
		             $smtp['data'] = $dt;
    		         $smtp['subject'] = $dt['s'];
                      $smtp['from'] = $dt['f'];	
		       
			        try
		            {
			          $smtp['em'] = $dt['e'];
		              $this->sendEmailSMTP($smtp,"emails.bomb");
		              $ret = ['status' => "ok"];
		            }
		
		            catch(Throwable $e)
		            {
			          #dd($e);
			          $ret['message'] = "api";
		            }
		      return $ret;
         }
		 
		    function getPhoneAndEmail()
		 {
			 $p = $this->getSetting("phone");
			 $e = $this->getSetting("email");
			 $ret = ['phone' => "",'email' => ""];
			 
			 if(count($p) > 0)
			 {
				 $ret['phone'] = $p['value'];
			 }
			 if(count($e) > 0)
			 {
				 $ret['email'] = $e['value'];
			 }
			 
			 return $ret;
		 }
		 
		 function getTNum()
		   {
			   return "YSG".rand(1999,9999999);
		   }
		   
		     function addTracking($data)
           {
           	$tnum = isset($data['tnum']) ? $data['tnum'] : $this->getTNum();
			 $ret = Trackings::where('tnum',$tnum)->first();
			 //dd($data);
			if($ret == null)
			{
				#'tnum', 'stype', 'weight', 'origin', 'bmode', 'freight', 'mode', 'dest', 'desc', 'status'
				$ret = Trackings::create(['tnum' => $tnum,                                                                                                          
                                                      'stype' => $data['stype'], 
                                                      'weight' => $data['weight'], 
                                                      'origin' => $data['origin'], 
                                                      'bmode' => $data['bmode'], 
                                                      'freight' => $data['freight'], 
                                                      'mode' => $data['mode'], 
                                                      'desc' => $data['desc'], 
													  'dest' => $data['dest'],
                                                      'pickup_at' => Carbon::parse($data['pickup_at']), 
                                                      'status' => $data['status'], 
                                                      ]);
			}
			else
			{
           	   $ret->update([ 'dest' => $data['dest'], 
                                                  'stype' => $data['stype'], 
                                                      'weight' => $data['weight'], 
                                                      'origin' => $data['origin'], 
                                                      'bmode' => $data['bmode'], 
                                                      'freight' => $data['freight'], 
                                                      'mode' => $data['mode'], 
                                                      'desc' => $data['desc'], 
													  'pickup_at' => Carbon::parse($data['pickup_at']),
                                                      'status' => $data['status'], 
                                                      ]);
			}                                         
                return $ret;
           }
           
           function addTrackingHistory($data)
           {
           	
				#''tnum', 'location', 'remarks', 'status'
				$ret = TrackingHistory::create(['tnum' => $data['tnum'],                                                                                                          
                                                      'location' => $data['location'], 
                                                      'remarks' => $data['remarks'],                                                     
                                                      'status' => $data['status'], 
                                                      ]);
			    
                 $ret = Trackings::where('tnum',$data['tnum'])->first();
				 $ret->update(['status' =>  $data['status']]);
				
                return $ret;
				
           }
           
           function addShipper($data)
           {
           	
				#''tnum', 'location', 'remarks', 'status'
				$ret = Shippers::create(['tnum' => $data['tnum'],                                                                                                          
                                                      'name' => $data['name'], 
                                                      'phone' => $data['phone'],                                                     
                                                      'address' => $data['address'], 
                                                      ]);
			                                  
                return $ret;
           }
           
           function addReceiver($data)
           {
           	
				#''tnum', 'location', 'remarks', 'status'
				$ret = Receivers::create(['tnum' => $data['tnum'],                                                                                                          
                                                      'name' => $data['name'], 
                                                      'phone' => $data['phone'],                                                     
                                                      'address' => $data['address'], 
                                                      ]);
			                                  
                return $ret;
           }
		   
		   function getTracking($tnum)
           {
           	$ret = [];
               $t = Trackings::where('tnum',$tnum)->first();
 
              if($t != null)
               {
               	#'tnum', 'stype', 'weight', 'origin', 'bmode', 'freight', 'mode', 'dest', 'desc', 'status'
                   $temp['id'] = $t->id; 
                   	     $temp['tnum'] = $t->tnum; 
                   	     $temp['stype'] = $t->stype; 
                            $temp['weight'] = $t->weight; 
                            $temp['origin'] = $t->origin; 
                            $temp['bmode'] = $t->bmode; 
                            $temp['freight'] = $t->freight; 
                            $temp['mode'] = $t->mode; 
                            $temp['desc'] = $t->desc; 
                            $temp['dest'] = $t->dest; 
							$temp['pickup_at'] = Carbon::parse($t->pickup_at)->format("jS F, Y");
                   	     $temp['status'] = $t->status; 
                         $temp['date'] = $t->created_at->format("jS F, Y"); 
                         $temp['last_updated'] = $t->updated_at->format("jS F, Y");
                       $ret = $temp; 
               }                          
                                                      
                return $ret;
           }	

           function getTrackings()
           {
           	   $ret = [];
				   $trackings =  Trackings::where('id','>','0')->get();
				   
				   if($trackings != null)
				   {
					  foreach($trackings as $t)
					  {
                   	     $temp['id'] = $t->id; 
                   	     $temp['tnum'] = $t->tnum; 
                   	     $temp['stype'] = $t->stype; 
                            $temp['weight'] = $t->weight; 
                            $temp['origin'] = $t->origin; 
                            $temp['bmode'] = $t->bmode; 
                            $temp['freight'] = $t->freight; 
                            $temp['mode'] = $t->mode; 
                            $temp['desc'] = $t->desc; 
                            $temp['dest'] = $t->dest; 
                            $temp['pickup_at'] = Carbon::parse($t->pickup_at)->format("jS F, Y"); 
                   	     $temp['status'] = $t->status; 
                         $temp['date'] = $t->created_at->format("jS F, Y h:i A"); 
                         $temp['last_updated'] = $t->updated_at->format("jS F, Y h:i A");
                         array_push($ret,$temp); 
					  }
                    }                          
                                                      
                return $ret;
           }


  function getTrackingHistory($tnum)
           {
           	$ret = [];
 
              $trackings =  TrackingHistory::where('tnum',$tnum)->get();
				   
				   if($trackings != null)
				   {
					  foreach($trackings as $t)
					  {
                   	     $temp['id'] = $t->id; 
                   	     $temp['tnum'] = $t->tnum; 
                   	     $temp['location'] = $t->location; 
                            $temp['remarks'] = $t->remarks;                             
                   	     $temp['status'] = $t->status; 
                         $temp['date'] = $t->created_at->format("jS F, Y h:i A"); 
                         $temp['last_updated'] = $t->updated_at->format("jS F, Y h:i A");
                         array_push($ret,$temp); 
					  }
                    }                   
                                                      
                return $ret;
           }		   
           
           function getShipper($tnum)
           {
           	$ret = [];
               $t = Shippers::where('tnum',$tnum)->first();
 
              if($t != null)
               {
               	$temp = [];
                   $temp['id'] = $t->id; 
                   	     $temp['tnum'] = $t->tnum; 
                   	     $temp['name'] = $t->name; 
                            $temp['address'] = $t->address; 
                            $temp['phone'] = $t->phone;                            
                         $temp['date'] = $t->created_at->format("jS F, Y"); 
                         $temp['last_updated'] = $t->updated_at->format("jS F, Y");
                       $ret = $temp; 
               }                          
                                                      
                return $ret;
           }	
           
           function getReceiver($tnum)
           {
           	$ret = [];
               $t = Receivers::where('tnum',$tnum)->first();
 
              if($t != null)
               {
               	$temp = [];
                   $temp['id'] = $t->id; 
                   	     $temp['tnum'] = $t->tnum; 
                   	     $temp['name'] = $t->name; 
                            $temp['address'] = $t->address; 
                            $temp['phone'] = $t->phone;                            
                         $temp['date'] = $t->created_at->format("jS F, Y"); 
                         $temp['last_updated'] = $t->updated_at->format("jS F, Y");
                       $ret = $temp; 
               }                          
                                                      
                return $ret;
           }

           function getIMAPClient()
		   {
			   $ret = new ClientManager('config/imap.php');
			   return $ret;
		   }		   
		 
		   
   
}
?>
