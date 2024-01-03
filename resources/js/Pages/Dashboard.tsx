import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

type Count = {
    users: number;
    posts: number;
    categories: number;
};
export default function Dashboard({
    auth,
    count,
}: PageProps<{ count: Count }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex sm:flex-row flex-col p-5 gap-2">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg w-full">
                        <div className="p-6 text-gray-900 text-center">
                            <h1>News</h1>
                            <p>{count.posts} post</p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full">
                        <div className="p-6 text-gray-900 text-center">
                            Category
                            <p className="text-center">
                                {count.categories} category
                            </p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full">
                        <div className="p-6 text-gray-900 text-center">
                            <h1>User</h1>
                            <p className="text-center">{count.users} user</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
