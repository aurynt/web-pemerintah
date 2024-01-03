import BlogLayout from "@/Layouts/BlogLayout";
import { Post } from "@/types";

export default function Detail({ blog }: { blog: Post }) {
    console.log(blog);

    return (
        <BlogLayout>
            <div className="flex justify-center">
                <div className="flex flex-col w-full rounded-xl items-center shadow-xl border p-5 gap-2 mb-10">
                    <div className="flex justify-between sm:flex-row flex-col sm:items-center w-full mb-3">
                        <h1 className="text-2xl font-bold">{blog.title}</h1>
                        <p className="text-gray-600">{blog.category}</p>
                    </div>
                    <div className="w-full] border shadow-lg rounded-xl">
                        <img
                            src={`/storage/post/${blog.photo}`}
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col w-full rounded-xl p-3">
                        <p className="indent-6">{blog.information}</p>
                    </div>
                </div>
            </div>
        </BlogLayout>
    );
}
