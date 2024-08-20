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
                'item_name' => 'Siomai King',
                'item_description' => 'Siomai King',
                'qty' => 100,
                'category' => 'Food',
            ],
            [
                'item_name' => 'Boy Bondat',
                'item_description' => 'Boy Bondat',
                'qty' => 100,
                'category' => 'Food',
            ],
            [
                'item_name' => 'Mang Boks',
                'item_description' => 'Mang Boks',
                'qty' => 100,
                'category' => 'Food',
            ],
            [
                'item_name' => 'Organic Barley',
                'item_description' => 'Organic Barley',
                'qty' => 100,
                'category' => 'Health and Wellness',
            ],
            [
                'item_name' => 'Calvit-C',
                'item_description' => 'Calvit-C',
                'qty' => 100,
                'category' => 'Health and Wellness',
            ],
            [
                'item_name' => 'Good Leaf',
                'item_description' => 'Good Leaf',
                'qty' => 100,
                'category' => 'Health and Wellness',
            ],
            [
                'item_name' => 'Ninja Ion',
                'item_description' => 'Ninja Ion',
                'qty' => 100,
                'category' => 'Pandemic Essential Products',
            ],
            [
                'item_name' => 'Copper Mask',
                'item_description' => 'Copper Mask',
                'qty' => 100,
                'category' => 'Pandemic Essential Products',
            ],
            [
                'item_name' => 'Copper UV',
                'item_description' => 'Copper UV',
                'qty' => 100,
                'category' => 'Pandemic Essential Products',
            ],
        ];

        foreach ($items as $itemData) {
            Item::create($itemData);
        }
    }
}
