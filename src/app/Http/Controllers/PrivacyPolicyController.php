<?php


namespace App\Http\Controllers;

/**
 * Class PrivacyPolicyController
 * @package App\Http\Controllers
 */
class PrivacyPolicyController extends Controller
{
    /**
     * View static page Terms of Use and Privacy Policy
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function __invoke()
    {
        return view('terms-of-use-and-privacy-policy');
    }
}
