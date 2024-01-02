<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
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
    public function store(Request $request, Category $category)
    {
        // $category = new Category();
        $request->validate([
            'name' => 'required|unique:categories',
        ]);

        $category->name = $request->name;
        $category->users_id = auth()->user()->id;

        $category->save();

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'id' => 'required',
            'name' => 'required|unique',
            'author' => 'required',
        ]);

        $category->name = $request->name;
        $category->author = $request->author;

        $res = $category->save();

        return response(['data' => $res, 'message' => 'berhasil nambah']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category, $id)
    {
        $category = $category->find($id);
        $res = $category->delete();
        if ($res) {
            return redirect()->back();
        }
    }
}
