<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\LiveSellingTrx;
use App\Http\Resources\LiveSellingTrxResource;

class LiveSellingTrxController extends Controller
{
    public function store(Request $request) {
        $user = Auth::user();
        $trx = LiveSellingTrx::create([
            'item_code' => $request->input('val'),
            'ordered_by' => $user->email
        ]);
        return new LiveSellingTrxResource($trx);
    }
}
