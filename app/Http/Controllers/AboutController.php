<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
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
        $abouts = new About();

        $request->validate([
            'visi' => 'required',
            'misi' => 'required',
            'sejarah' => 'required',
            'desc' => 'required',
        ]);

        $abouts->visi = $request->visi;
        $abouts->misi = $request->misi;
        $abouts->sejarah = $request->sejarah;
        $abouts->desc = $request->desc;
        $abouts->save();
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(About $about)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(About $about)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, About $about)
    {
        $about = $about->find(1);

        $request->validate([
            'visi' => 'required',
            'misi' => 'required',
            'sejarah' => 'required',
            'desc' => 'required',
        ]);

        $about->visi = $request->visi;
        $about->misi = $request->misi;
        $about->sejarah = $request->sejarah;
        $about->desc = $request->desc;
        $about->save();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(About $about, $id)
    {
        $about = $about->find($id);
        $about->delete();
    }
}
