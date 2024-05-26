<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\Category::create(['category_name' => 'Smart Phome']);
        \App\Models\Category::create(['category_name' => 'Apple Products']);
        \App\Models\Category::create(['category_name' => 'Hair Care']);
        \App\Models\Category::create(['category_name' => 'Cosmetics']);
    }
}
