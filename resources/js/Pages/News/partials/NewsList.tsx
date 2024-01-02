import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import TextInput from "@/Components/TextInput";
import { Post, Category } from "@/types";
import { useForm } from "@inertiajs/react";
import { useState, FormEventHandler } from "react";
import Swal from "sweetalert2";

export default function NewsList({
    posts,
    categories,
}: {
    posts: Post[];
    categories: Category[];
}) {
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
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
            category: 1,
            photo: undefined,
            information: "",
        } || { name: "" }
    );
    const dataPosts = posts.filter((item) =>
        Object.values(item).some(
            (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(search.toLowerCase())
        )
    );
    const Delete = (id: number) => {
        destroy(route("post.delete", id), {
            onSuccess: () => {
                Swal.fire({
                    title: "Deleted",
                    text: "Succesfully deleted post",
                    icon: "success",
                });
            },
        });
    };
    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Delete(id);
            }
        });
    };

    const update: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);

        patch(route("post.update", id), {
            onSuccess: (res) => {
                Swal.fire({
                    title: "Updteed",
                    text: "Succesfully updated post" + res,
                    icon: "success",
                });
                console.log(res);

                // reset();
            },
        });
    };

    const handleEdit = (data: Post) => {
        setId(data.id);
        setData({
            title: data.title,
            category: data.categories_id as unknown as number,
            information: data.information,
            photo: undefined,
        });
        setShow(!show);
    };
    return (
        <div className="bg-white overflow-hidden mt-5 shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
                <TextInput
                    placeholder="Search"
                    type="search"
                    className="w-full mb-5"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="table-auto w-full text-center">
                    <thead>
                        <tr className="border-y-2 bg-gray-400">
                            <th className="py-2 capitalize font-bold">no</th>
                            <th className="py-2 capitalize font-bold">title</th>
                            <th className="py-2 capitalize font-bold">
                                category
                            </th>
                            <th className="py-2 capitalize font-bold">
                                information
                            </th>
                            <th className="py-2 capitalize font-bold">photo</th>
                            <th className="py-2 capitalize font-bold">
                                author
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPosts.length !== 0 ? (
                            dataPosts.map((item, i) => (
                                <tr
                                    key={i}
                                    className="border-y-2 hover:bg-gray-200"
                                >
                                    <td className="py-2">{i + 1}</td>
                                    <td className="py-2">{item.title}</td>
                                    <td className="py-2">{item.category}</td>
                                    <td className="py-2">{item.information}</td>
                                    <td className="py-2">
                                        <button
                                            className="text-blue-600 capitalize underline"
                                            onClick={() => {
                                                Swal.fire({
                                                    imageUrl: `storage/post/${item.photo}`,
                                                    imageWidth: "90%",
                                                    showConfirmButton: false,
                                                });
                                            }}
                                        >
                                            show photo
                                        </button>
                                    </td>
                                    <td className="https://laravel.com/docs/10.x/vite#reactpy-2">
                                        {item.author}
                                    </td>
                                    <td className="py-2 flex gap-2">
                                        <PrimaryButton
                                            onClick={() => handleEdit(item)}
                                        >
                                            edit
                                        </PrimaryButton>
                                        <DangerButton
                                            onClick={() => {
                                                handleDelete(item.id);
                                            }}
                                        >
                                            delete
                                        </DangerButton>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="capitalize py-2 bg-gray-100"
                                >
                                    not found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal show={show} onClose={() => setShow(!show)}>
                <h1 className="text-2xl capitalize mb-2 mx-5 mt-5 font-bold">
                    edit form
                </h1>
                <form onSubmit={update} className="m-5">
                    <div className="mt-4">
                        <InputLabel htmlFor="title" value="title" />

                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            autoComplete="current-title"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <InputError message={errors.title} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="category" value="category" />

                        <Select
                            id="category"
                            name="category"
                            className="mt-1 block w-full"
                            autoComplete="current-category"
                            value={data.category}
                            onChange={(e) =>
                                setData(
                                    "category",
                                    e.target.value as unknown as number
                                )
                            }
                            options={categories}
                        />

                        <InputError message={errors.category} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="photo" value="photo" />

                        <TextInput
                            accept="image/*"
                            id="photo"
                            type="file"
                            name="photo"
                            onChange={(e) => {
                                setData(
                                    "photo",
                                    e.target.files && (e.target.files[0] as any)
                                );
                            }}
                            className="mt-1 block w-full p-2 border border-1"
                        />

                        <InputError message={errors.photo} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="information" value="information" />

                        <textarea
                            onChange={(e) =>
                                setData("information", e.target.value)
                            }
                            value={data.information}
                            name="information"
                            id="information"
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                            rows={10}
                        ></textarea>

                        <InputError message={errors.information} />
                    </div>

                    <div className="flex mt-5 justify-end">
                        <PrimaryButton disabled={processing}>
                            save
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
