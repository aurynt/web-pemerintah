<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(1)->create();
        \App\Models\Category::factory(10)->create();
        DB::table('settings')->insert([
            'email' => 'auryncode@gmail.om',
            'logo' => 'liputan6.png',
            'desc' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem exercitationem ipsam eaque, recusandae perferendis maxime adipisci accusamus minima, debitis neque officiis. Dignissimos corporis fugiat consequatur eveniet sed quia eius.',
            'telp' => '081234567890',
            'desc' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem exercitationem ipsam eaque, recusandae perferendis maxime adipisci accusamus minima, debitis neque officiis. Dignissimos corporis fugiat consequatur eveniet sed quia eius.',
            'address' => 'debitis neque officiis. Dignissimos corporis fugiat consequatur eveniet sed quia eius.',
        ]);
    }
}
