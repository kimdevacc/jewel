<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use App\Http\Resources\ItemResource;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::all();
        return ItemResource::collection($items);
    }

    public function store(Request $request)
    {
        $item = Item::create([
            'item_name' => $request->input('item_name'),
            'item_description' => $request->input('item_description'),
            'category' => $request->input('category'),
            'qty' => $request->input('qty'),
        ]);

        return new ItemResource($item);
    }

    public function show($id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        return new ItemResource($item);
    }

    public function update(Request $request, $id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        // Validate and update category
        $item->update($request->all());
        return new ItemResource($item);
    }

    public function destroy(Item $item)
    {
        $item->delete();

        return response()->json(null, 204);
    }
}