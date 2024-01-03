import PrimaryButton from "@/Components/PrimaryButton";
import BlogLayout from "@/Layouts/BlogLayout";
import type { Category, Post } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Blogs({
    category,
    blog,
}: {
    category: Category[];
    blog: Post[];
}) {
    const [data, setData] = useState(blog);
    const [id, setId] = useState(0);
    const filterBy = (param: number) => {
        setId(param);
        param == 0
            ? setData(blog)
            : setData(blog.filter((item) => item.categories_id == param));
    };
    return (
        <BlogLayout>
            <div className="flex gap-3 border-b-2 pb-2 px-4 sm:px-20 overflow-x-scroll">
                <button
                    onClick={() => filterBy(0)}
                    className={`hover:text-blue-700 capitalize ${
                        id == 0 ? "text-blue-700 bg-blue-200 rounded px-6" : ""
                    } transition-all duration-200 ease-in-out`}
                >
                    all
                </button>
                {category.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => filterBy(item.id)}
                        className={`hover:text-blue-700 capitalize ${
                            id == item.id
                                ? "text-blue-700 bg-blue-200 rounded px-6"
                                : ""
                        } transition-all duration-300 ease-in-out`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="flex flex-col"></div>
            {data.length !== 0 ? (
                data.map((item, i) => (
                    <div
                        key={i}
                        className="flex border mx-3 sm:mx-40 my-4 flex-col sm:flex-row shadow-lg rounded-xl"
                    >
                        <div className="h-44 w-full sm:w-[30rem] overflow-hidden border-r sm:rounded-l-xl">
                            <img
                                className="w-full h-full overflow-hidden"
                                src={`storage/post/${item.photo}`}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col border-r rounded-r-xl w-full border p-4 relative">
                            <Link
                                href={route("blog.detail", item.id)}
                                className="text-2xl font-bold hover:text-orange-600 line-clamp-1"
                            >
                                {item.title}
                            </Link>
                            <p className="text-sm text-gray-500 mb-3">
                                {item.category}
                            </p>
                            <p className="line-clamp-3">{item.information}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex gap-4 border m-10 justify-center shadow rounded-lg p-3">
                    <h1 className="text-2xl font-bold">Emty</h1>
                </div>
            )}
        </BlogLayout>
    );
}
