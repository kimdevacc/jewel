<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Item;
use App\Models\Category;

class ItemSeeder extends Seeder
{
    public function run()
    {
        $categories = Category::all();

        $items = [
            [
                'item_name' => 'Sample Item 1',
                'item_description' => 'This is a sample item description.',
                'qty' => 1,
                'category' => $categories->random()->category_name,
            ],
        ];

        foreach ($items as $itemData) {
            Item::create($itemData);
        }
    }
}
