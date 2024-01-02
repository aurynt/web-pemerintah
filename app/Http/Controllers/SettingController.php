<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Setting $setting)
    {
        $request->validate([
            'email' => 'required|email',
            'desc' => 'required',
            'address' => 'required',
            'telp' => 'required',
        ]);


        $setting = $setting->find(1);
        $name = $setting->logo;

        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $name = date('YmdHis') . '.' . $file->getClientOriginalExtension();
            Storage::delete('public/logo/' . $setting->logo);
            Storage::putFileAs('public/logo', $file, $name);
        }

        $setting->desc = $request->desc;
        $setting->logo = $name;
        $setting->address = $request->address;
        $setting->telp = $request->telp;
        $setting->email = $request->email;
        $res = $setting->save();
        if ($res) {
            return \redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
