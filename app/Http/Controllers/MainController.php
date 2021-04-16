<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Helpers\Contracts\HelperContract;
use Auth;
use Session;
use Cookie;
use Validator;
use Carbon\Carbon;
use App\User;
//use Codedge\Fpdf\Fpdf\Fpdf;
use PDF;

class MainController extends Controller
{

    protected $helpers; //Helpers implementation
    public function __construct(HelperContract $h)
    {
        $this->helpers = $h;
    }

    /**
     * Show the application home page.
     *
     * @return Response
     */
    public function getIndex(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        $cm = $this->helpers->getIMAPClient();
		dd($cm);
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {
            $user = Auth::user();

        }
        $v = "index";
        return view($v, compact($cpt));

    }

	/**
     * Show the application home page.
     *
     * @return Response
     */
    public function getAbout(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        #$this->helpers->populateTips();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {
            $user = Auth::user();

        }
        $v = "about";
        return view($v, compact($cpt));

    }
	
	/**
     * Show the application home page.
     *
     * @return Response
     */
    public function getServices(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        #$this->helpers->populateTips();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {
            $user = Auth::user();

        }
        $v = "services";
        return view($v, compact($cpt));

    }
	
	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
    public function getTrack(Request $request)
    {
		$user = null;
        $nope = false;
        $v = ""; $ret = [];

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        #$this->helpers->populateTips();
        $cpt = ['user', 'signals', 'pe', 'plugins'];
		
    	if(Auth::check())
		{
			$user = Auth::user();
		}
		
        $v = "services";
        $req = $request->all();
		#dd($req);
       
         if(isset($req['xx']))
         {
             $ret = $this->helpers->track($req['xx']);
			 #dd($ret);
			// if(count($ret['tracking']) < 1) return redirect()->intended('/');
         }
         
		 array_push($cpt, 'ret');
		 return view('track',compact($cpt));
	  
    }

    /**
     * Handle send.
     *
     * @return Response
     */
    public function getSend(Request $request)
    {
        $user = null;
        if (Auth::check())
        {
            $user = Auth::user();
        }
        #dd($hasPermission);
        $req = $request->all();
        $ret = ['status' => "error", 'message' => "nope"];

        $validator = Validator::make($req, ['f' => 'required', 's' => 'required', 'm' => 'required', 'e' => 'required|email', ]);

        if ($validator->fails())
        {
            $ret['message'] = "validation";
        }
        else
        {
            $ret = $this
                ->helpers
                ->send($req);
        }
        return json_encode($ret);
    }

    /**
     * Show list of plugins.
     *
     * @return Response
     */
    public function getPlugins(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        #$this->helpers->populateTips();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {

            $user = Auth::user();

            if ($this
                ->helpers
                ->isAdmin($user))
            {
                $hasPermission = $this
                    ->helpers
                    ->hasPermission($user->id, ['view_plugins']);
                #dd($hasPermission);
                $req = $request->all();

                if ($hasPermission)
                {
                    $v = "plugins";
                }
                else
                {
                    session()->flash("permissions-status-error", "ok");
                    return redirect()
                        ->intended('/');
                }
            }
            else
            {
                Auth::logout();
                $u = url('/');
                return redirect()->intended($u);
            }
        }
        else
        {
            $v = "login";
        }
        return view($v, compact($cpt));
    }

    /**
     * Show the Add Plugin view.
     *
     * @return Response
     */
    public function getAddPlugin(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {
            $user = Auth::user();

            if ($this
                ->helpers
                ->isAdmin($user))
            {
                $hasPermission = $this
                    ->helpers
                    ->hasPermission($user->id, ['view_plugins', 'edit_plugins']);
                #dd($hasPermission);
                $req = $request->all();

                if ($hasPermission)
                {
                    $v = "add-plugin";
                }
                else
                {
                    session()->flash("permissions-status-error", "ok");
                    return redirect()
                        ->intended('/');
                }

            }
            else
            {
                Auth::logout();
                $u = url('/');
                return redirect()->intended($u);
            }
        }
        else
        {
            $v = "login";
        }
        return view($v, compact($cpt));
    }

    /**
     * Handle add plugin.
     *
     * @return Response
     */
    public function postAddPlugin(Request $request)
    {
        $user = null;
        if (Auth::check())
        {
            $user = Auth::user();

            if ($this
                ->helpers
                ->isAdmin($user))
            {
                $hasPermission = $this
                    ->helpers
                    ->hasPermission($user->id, ['view_plugins', 'edit_plugins']);
                #dd($hasPermission);
                $req = $request->all();

                if ($hasPermission)
                {

                    #dd($req);
                    $validator = Validator::make($req, ['status' => 'required|not_in:none', 'name' => 'required', 'value' => 'required']);

                    if ($validator->fails())
                    {
                        session()
                            ->flash("validation-status-error", "ok");
                        return redirect()
                            ->back()
                            ->withInput();
                    }
                    else
                    {
                        $ret = $this
                            ->helpers
                            ->createPlugin($req);
                        $ss = "add-plugin-status";
                        if ($ret == "error") $ss .= "-error";
                        session()->flash($ss, "ok");
                        return redirect()->intended("plugins");
                    }
                }
                else
                {
                    session()
                        ->flash("permissions-status-error", "ok");
                    return redirect()
                        ->intended("/");
                }
            }
            else
            {
                Auth::logout();
                $u = url('/');
                return redirect()->intended($u);
            }
        }
        else
        {
            return redirect()->intended('/');
        }
    }

    /**
     * Show the Edit Plugin view.
     *
     * @return Response
     */
    public function getPlugin(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        $permissions = $this
            ->helpers->permissions;
        #$this->helpers->populateTips();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {
            $user = Auth::user();

            if ($this
                ->helpers
                ->isAdmin($user))
            {
                $hasPermission = $this
                    ->helpers
                    ->hasPermission($user->id, ['view_plugins', 'edit_plugins']);
                #dd($hasPermission);
                $req = $request->all();

                if ($hasPermission)
                {

                    if (isset($req['s']))
                    {
                        $v = "plugin";
                        $p = $this
                            ->helpers
                            ->getPlugin($req['s']);

                        if (count($p) < 1)
                        {
                            session()->flash("validation-status-error", "ok");
                            return redirect()
                                ->intended('plugins');
                        }
                        else
                        {
                            array_push($cpt, 'p');
                        }

                    }
                    else
                    {
                        session()->flash("validation-status-error", "ok");
                        return redirect()
                            ->intended('plugins');
                    }
                }
                else
                {
                    session()
                        ->flash("permissions-status-error", "ok");
                    return redirect()
                        ->intended('/');
                }

            }
            else
            {
                Auth::logout();
                $u = url('/');
                return redirect()->intended($u);
            }
        }
        else
        {
            $v = "login";
        }
        return view($v, compact($cpt));
    }

    /**
     * Handle edit plugin.
     *
     * @return Response
     */
    public function postPlugin(Request $request)
    {
        $user = null;
        if (Auth::check())
        {
            $user = Auth::user();

            if ($this
                ->helpers
                ->isAdmin($user))
            {
                $hasPermission = $this
                    ->helpers
                    ->hasPermission($user->id, ['view_plugins', 'edit_plugins']);
                #dd($hasPermission);
                $req = $request->all();

                if ($hasPermission)
                {

                    #dd($req);
                    $validator = Validator::make($req, ['status' => 'required|not_in:none', 'xf' => 'required|numeric', 'name' => 'required', 'value' => 'required']);

                    if ($validator->fails())
                    {
                        session()
                            ->flash("validation-status-error", "ok");
                        return redirect()
                            ->back()
                            ->withInput();
                    }
                    else
                    {
                        $ret = $this
                            ->helpers
                            ->updatePlugin($req);
                        $ss = "update-plugin-status";
                        if ($ret == "error") $ss .= "-error";
                        session()->flash($ss, "ok");
                        return redirect()->intended("plugins");
                    }
                }
                else
                {
                    session()
                        ->flash("permissions-status-error", "ok");
                    return redirect()
                        ->intended("/");
                }
            }
            else
            {
                Auth::logout();
                $u = url('/');
                return redirect()->intended($u);
            }
        }
        else
        {
            return redirect()->intended('/');
        }
    }

    /**
     * Handle remove plugin.
     *
     * @return Response
     */
    public function getRemovePlugin(Request $request)
    {
        $user = null;
        if (Auth::check())
        {
            $user = Auth::user();

            if ($this
                ->helpers
                ->isAdmin($user))
            {
                $req = $request->all();
                #dd($req);
                $hasPermission = $this
                    ->helpers
                    ->hasPermission($user->id, ['view_plugins', 'edit_plugins']);
                #dd($hasPermission);
                if ($hasPermission)
                {

                    $validator = Validator::make($req, ['s' => 'required']);

                    if ($validator->fails())
                    {
                        session()
                            ->flash("validation-status-error", "ok");
                        return redirect()
                            ->back()
                            ->withInput();
                    }
                    else
                    {
                        $ret = $this
                            ->helpers
                            ->removePlugin($req['s']);
                        $ss = "remove-plugin-status";
                        if ($ret == "error") $ss .= "-error";
                        session()->flash($ss, "ok");
                        return redirect()->intended("plugins");
                    }
                }
                else
                {
                    session()
                        ->flash("permissions-status-error", "ok");
                    return redirect()
                        ->intended("/");
                }
            }
            else
            {
                Auth::logout();
                $u = url('/');
                return redirect()->intended($u);
            }
        }
        else
        {
            return redirect()->intended('/');
        }
    }

    /**
     * Show the Add Sender view.
     *
     * @return Response
     */
    public function getAddSender(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        if (Auth::check())
        {

            $user = Auth::user();
        }

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        $req = $request->all();

        $v = "add-sender";

        return view($v, compact($cpt));

    }

    /**
     * Handle add sender.
     *
     * @return Response
     */
    public function postAddSender(Request $request)
    {
        $user = null;
        if (Auth::check())
        {
            $user = Auth::user();
        }
        $req = $request->all();

        #dd($req);
        $validator = Validator::make($req, ['server' => 'required|not_in:none', 'name' => 'required', 'username' => 'required']);

        if ($validator->fails())
        {
            session()
                ->flash("validation-status-error", "ok");
            return redirect()
                ->back()
                ->withInput();
        }
        else
        {
            $dt = ['type' => $req['server'], 'sn' => $req['name'], 'su' => $req['username'], 'spp' => $req['password']];

            if ($req['server'] == "other")
            {
                $v = isset($req['ss']) && isset($req['sp']) && isset($req['sec']) && $req['sec'] != "nonee";
                if ($v)
                {
                    $dt['ss'] = $req['ss'];
                    $dt['sp'] = $req['sp'];
                    $dt['sec'] = $req['sec'];
                }
                else
                {
                    session()->flash("validation-status-error", "success");
                    return redirect()
                        ->back()
                        ->withInput();
                }
            }
            else
            {
                $smtp = $this
                    ->helpers
                    ->smtpp[$req['server']];
                $dt['ss'] = $smtp['ss'];
                $dt['sp'] = $smtp['sp'];
                $dt['sec'] = $smtp['sec'];
            }

            $dt['se'] = $dt['su'];
            $dt['sa'] = "yes";
            $dt['current'] = "no";
            $ret = $this
                ->helpers
                ->createSender($dt);
            $ss = "add-sender-status";
            if ($ret == "error") $ss .= "-error";
            session()->flash($ss, "ok");
            return redirect()->intended("senders");
        }

    }

    /**
     * Show the Senders view.
     *
     * @return Response
     */
    public function getSenders(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {

            $user = Auth::user();

        }
        $senders = $this
            ->helpers
            ->getSenders();
        array_push($cpt, 'senders');
        $v = "senders";

        return view($v, compact($cpt));

    }

    /**
     * Show the Sender view.
     *
     * @return Response
     */
    public function getSender(Request $request)
    {
        $user = null;
        $nope = false;
        $v = "";

        $signals = $this
            ->helpers->signals;
        $plugins = $this->helpers ->getPlugins(); $pe = $this->helpers->getPhoneAndEmail();
        $cpt = ['user', 'signals', 'pe', 'plugins'];

        if (Auth::check())
        {

            $user = Auth::user();
        }
        $req = $request->all();

        $validator = Validator::make($req, ['s' => 'required']);

        if ($validator->fails())
        {
            return redirect()
                ->intended('senders');
        }
        else
        {
            $s = $this
                ->helpers
                ->getSender($req['s']);
            array_push($cpt, 's');
            $v = "sender";
        }

        return view($v, compact($cpt));

    }

    /**
     * Handle update sender.
     *
     * @return Response
     */
    public function postSender(Request $request)
    {
        $user = null;
        if (Auth::check())
        {
            $user = Auth::user();
        }
        $req = $request->all();

        #dd($req);
        $validator = Validator::make($req, ['server' => 'required|not_in:none', 'name' => 'required', 'username' => 'required']);

        if ($validator->fails())
        {
            session()
                ->flash("validation-status-error", "ok");
            return redirect()
                ->back()
                ->withInput();
        }
        else
        {
            $dt = ['type' => $req['server'], 'sn' => $req['name'], 'su' => $req['username'], 'spp' => $req['password']];

            if ($req['server'] == "other")
            {
                $v = isset($req['ss']) && isset($req['sp']) && isset($req['sec']) && $req['sec'] != "nonee";
                if ($v)
                {
                    $dt['ss'] = $req['ss'];
                    $dt['sp'] = $req['sp'];
                    $dt['sec'] = $req['sec'];
                }
                else
                {
                    session()->flash("validation-status-error", "success");
                    return redirect()
                        ->back()
                        ->withInput();
                }
            }
            else
            {
                $smtp = $this
                    ->helpers
                    ->smtpp[$req['server']];
                $dt['ss'] = $smtp['ss'];
                $dt['sp'] = $smtp['sp'];
                $dt['sec'] = $smtp['sec'];
            }

            $dt['se'] = $dt['su'];
            $dt['sa'] = "yes";
            $dt['current'] = "no";
            $ret = $this
                ->helpers
                ->createSender($dt);
            $ss = "add-sender-status";
            if ($ret == "error") $ss .= "-error";
            session()->flash($ss, "ok");
            return redirect()->intended("senders");

        }
}

        /**
         * Handle Remove Sender.
         *
         * @return Response
         */
        public function getRemoveSender(Request $request)
        {
            $user = null;
            $nope = false;
            $v = "";

            $signals = $this
                ->helpers->signals;
            $plugins = $this
                ->helpers
                ->getPlugins();
            $cpt = ['user', 'signals', 'pe', 'plugins'];

            if (Auth::check())
            {

                $user = Auth::user();
            }

            $req = $request->all();

            $validator = Validator::make($req, ['s' => 'required']);

            if ($validator->fails())
            {
                return redirect()
                    ->intended('senders');
            }
            else
            {
                $this
                    ->helpers
                    ->removeSender($req['s']);
                $ss = "remove-sender-status";
                session()->flash($ss, "ok");
                return redirect()->intended("senders");
            }

        }

        /**
         * Handle Mark Sender.
         *
         * @return Response
         */
        public function getMarkSender(Request $request)
        {
            $user = null;
            $nope = false;
            $v = "";

            $signals = $this
                ->helpers->signals;
            $plugins = $this
                ->helpers
                ->getPlugins();
            $cpt = ['user', 'signals', 'pe', 'plugins'];

            if (Auth::check())
            {

                $user = Auth::user();
            }
            $req = $request->all();

            $validator = Validator::make($req, ['s' => 'required']);

            if ($validator->fails())
            {
                return redirect()
                    ->intended('senders');
            }
            else
            {
                $this
                    ->helpers
                    ->setAsCurrentSender($req['s']);
                $ss = "mark-sender-status";
                session()->flash($ss, "ok");
                return redirect()->intended("senders");
            }

        }

        /**
         * Switch user mode (host/guest).
         *
         * @return Response
         */
        public function getTestBomb(Request $request)
        {
            $user = null;
            $messages = [];
            $ret = ['status' => "error", 'message' => "nothing happened"];

            if (Auth::check())
            {
                $user = Auth::user();
                $messages = $this
                    ->helpers
                    ->getMessages(['user_id' => $user->id]);
            }
            else
            {
                $ret['message'] = "auth";
            }

            $req = $request->all();

            $validator = Validator::make($req, ['type' => 'required', 'method' => 'required', 'url' => 'required']);

            if ($validator->fails())
            {
                $ret['message'] = "validation";
            }
            else
            {
                $rr = ['data' => [], 'headers' => [], 'url' => $req['url'], 'method' => $req['method']];

                $dt = [];

                switch ($req['type'])
                {
                    case "bvn":
                        /**
                         $rr['data'] = [
                         'bvn' => $req['bvn'],
                         'account_number' => $req['account_number'],
                         'bank_code' => $req['bank_code'],
                         ];
                         *
                         */
                        //localhost:8000/tb?url=https://api.paystack.co/bank/resolve_bvn/:22181211888&method=get&type=bvn
                        $rr['headers'] = ['Authorization' => "Bearer " . env("PAYSTACK_SECRET_KEY") ];
                    break;
                }

                $ret = $this
                    ->helpers
                    ->bomb($rr);

            }

            dd($ret);
        }

        /**
         * Show the application welcome screen to the user.
         *
         * @return Response
         */
        public function getZoho()
        {
            $ret = "97916613";
            return $ret;
        }

    }
    
