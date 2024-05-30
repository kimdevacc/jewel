<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchase;
use App\Models\Item;
use App\Http\Resources\PurchaseResource;

class PurchaseController extends Controller
{
    public function index()
    {
        $purchases = Purchase::all();
        return PurchaseResource::collection($purchases);
    }

    public function store(Request $request)
    {
        $item = Item::where('item_code', $request->item_code)->first();
        if($item['qty'] > 0) {
            $item['qty'] = $item['qty'] - $request->qty;
            $item->update([$item['qty']]);
            $purchase = Purchase::create($request->all());
            return new PurchaseResource($purchase);
        } else {
            return response()->json(['message' => 'Item Out of Stock'], 200);
        }
    }

    public function show($id)
    {
        $purchase = Purchase::find($id);
        if (!$purchase) {
            return response()->json(['message' => 'Purchase not found'], 404);
        }
        return new PurchaseResource($purchase);
    }

    public function update(Request $request, $id)
    {
        $purchase = Purchase::find($id);
        if (!$purchase) {
            return response()->json(['message' => 'Purchase not found'], 404);
        }

        // Validate and update purchase
        $purchase->update($request->all());
        return new PurchaseResource($purchase);
    }

    public function destroy($id)
    {
        $purchase = Purchase::find($id);
        if (!$purchase) {
            return response()->json(['message' => 'Purchase not found'], 404);
        }

        $purchase->delete();
        return response()->json(['message' => 'Purchase deleted successfully'], 200);
    }
}