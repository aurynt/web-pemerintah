<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json(['posts' => $posts]);
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
    public function store(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|unique:posts',
            'information' => 'required',
            'photo' => 'required',
            'category' => 'required',
        ]);

        $file = $request->file('photo');
        $name = date('YmdHis') . '.' . $file->getClientOriginalExtension();

        Storage::putFileAs('public/post', $file, $name);

        $post->title = $request->title;
        $post->information = $request->information;
        $post->photo = $name;
        $post->users_id = auth()->user()->id;
        $post->categories_id = $request->category;
        $res = $post->save();
        if ($res) {
            return \redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post, $id)
    {
        // return response()->json(['file' => $request->hasFile('photo'), 'request' => $request->all()]);
        $request->validate([
            'title' => ['required', Rule::unique('posts')->ignore($id),],
            'information' => 'required',
            'category' => 'required',
        ]);


        $post = $post->find($id);
        $name = $post->photo;

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $name = date('YmdHis') . '.' . $file->getClientOriginalExtension();
            Storage::delete('public/post/' . $post->photo);
            Storage::putFileAs('public/post', $file, $name);
        }

        $post->title = $request->title;
        $post->information = $request->information;
        $post->photo = $name;
        $post->users_id = auth()->user()->id;
        $post->categories_id = $request->category;
        $res = $post->save();
        if ($res) {
            return \redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post, $id)
    {
        $post = $post->find($id);
        if ($post->id == $id) {
            Storage::delete('public/post/' . $post->photo);
            $post->delete();
            return redirect()->back();
        }
        return false;
    }
}
