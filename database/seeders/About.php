<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class About extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('abouts')->insert([
            'visi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem exercitationem ipsam eaque, recusandae perferendis maxime adipisci accusamus minima, debitis neque officiis. Dignissimos corporis fugiat consequatur eveniet sed quia eius.',
            'misi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem exercitationem ipsam eaque, recusandae perferendis maxime adipisci accusamus minima, debitis neque officiis. Dignissimos corporis fugiat consequatur eveniet sed quia eius.',
            'sejarah' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem exercitationem ipsam eaque, recusandae perferendis maxime adipisci accusamus minima, debitis neque officiis. Dignissimos corporis fugiat consequatur eveniet sed quia eius.',
            'desc' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem exercitationem ipsam eaque, recusandae perferendis maxime adipisci accusamus minima, debitis neque officiis. Dignissimos corporis fugiat consequatur eveniet sed quia eius.',
        ]);
    }
}
