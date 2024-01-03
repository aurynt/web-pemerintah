import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, Post, Category } from "@/types";
import { Head, useForm, Link } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import Swal from "sweetalert2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryComp from "./partials/Category";
import NewsList from "./partials/NewsList";

export default function News({
    auth,
    posts,
    categories,
}: PageProps<{ posts: Post[]; categories: Category[] }>) {
    const {
        reset,
        data,
        setData,
        post,
        processing,
        progress,
        errors,
        delete: destroy,
        patch,
    } = useForm(
        {
            title: "",
            category: 0,
            photo: undefined,
            information: "",
        } || { name: "" }
    );

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("post.add"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Success",
                    text: "Succesfully added post",
                    icon: "success",
                });
                reset("title", "information", "category");
            },
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        News
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Tabs>
                        <TabList className="flex gap-2 border-collapse border p-2 rounded">
                            <Tab className="bg-slate-200 w-24 text-center py-2 px-3 rounded cursor-pointer">
                                Form
                            </Tab>
                            <Tab className="bg-slate-200 w-24 text-center py-2 px-3 rounded cursor-pointer">
                                List
                            </Tab>
                            <Tab className="bg-slate-200 w-24 text-center py-2 px-3 rounded cursor-pointer">
                                Category
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className="bg-white overflow-hidden mt-5 shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    {progress && (
                                        <progress
                                            value={progress.percentage}
                                            max="100"
                                            className="w-full"
                                        >
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    <form onSubmit={submit}>
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="title"
                                                value="title"
                                            />
                                            <TextInput
                                                id="title"
                                                type="text"
                                                name="title"
                                                value={data.title}
                                                className="mt-1 block w-full"
                                                autoComplete="current-title"
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={errors.title}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="category"
                                                value="category"
                                            />

                                            <Select
                                                id="category"
                                                name="category"
                                                className="mt-1 block w-full"
                                                autoComplete="current-category"
                                                value={data.category}
                                                onChange={(e) =>
                                                    setData(
                                                        "category",
                                                        e.target
                                                            .value as unknown as number
                                                    )
                                                }
                                                options={categories}
                                            />

                                            <InputError
                                                message={errors.category}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="photo"
                                                value="photo"
                                            />

                                            <TextInput
                                                accept="image/*"
                                                id="photo"
                                                type="file"
                                                name="photo"
                                                onChange={(e) =>
                                                    setData(
                                                        "photo",
                                                        e.target.files &&
                                                            (e.target
                                                                .files[0] as any)
                                                    )
                                                }
                                                className="mt-1 block w-full p-2 border border-1"
                                            />

                                            <InputError
                                                message={errors.photo}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="information"
                                                value="information"
                                            />

                                            <textarea
                                                onChange={(e) =>
                                                    setData(
                                                        "information",
                                                        e.target.value
                                                    )
                                                }
                                                value={data.information}
                                                name="information"
                                                id="information"
                                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                                rows={10}
                                            ></textarea>

                                            <InputError
                                                message={errors.information}
                                            />
                                        </div>

                                        <div className="flex mt-5 justify-end">
                                            <PrimaryButton
                                                disabled={processing}
                                            >
                                                save
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <NewsList posts={posts} categories={categories} />
                        </TabPanel>
                        <TabPanel>
                            <CategoryComp categories={categories} />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </Authenticated>
    );
}
