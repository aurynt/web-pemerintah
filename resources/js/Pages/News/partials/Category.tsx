import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Category } from "@/types";
import { useForm } from "@inertiajs/react";
import { useState, FormEventHandler } from "react";
import Swal from "sweetalert2";

export default function CategoryComp({
    categories,
}: {
    categories: Category[];
}) {
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);

    const {
        reset,
        data,
        setData,
        post,
        processing,
        progress,
        errors,
        delete: destroy,
    } = useForm({ name: "" });

    const dataCategory = categories.filter((item) =>
        Object.values(item).some(
            (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(search.toLowerCase())
        )
    );

    const Delete = (id: number) => {
        destroy(route("category.delete", id), {
            onSuccess: () => {
                Swal.fire({
                    title: "Deleted",
                    text: "Succesfully deleted post",
                    icon: "success",
                });
            },
        });
    };
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("category.add"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Success",
                    text: "Succesfully added category",
                    icon: "success",
                });
                reset();
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

    return (
        <>
            <div className="bg-white overflow-hidden mt-5 shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="flex justify-between gap-2 mb-5">
                        <TextInput
                            placeholder="Search"
                            type="search"
                            className="w-full"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <PrimaryButton
                            onClick={() => setShow(!show)}
                            className="py-0"
                        >
                            add category
                        </PrimaryButton>
                    </div>
                    <table className="table-auto w-full text-center">
                        <tr className="border-y-2 bg-gray-400">
                            <th className="py-2 capitalize font-bold">no</th>
                            <th className="py-2 capitalize font-bold">name</th>
                            <th className="py-2 capitalize font-bold">
                                author
                            </th>
                            <th></th>
                        </tr>
                        {dataCategory.length !== 0 ? (
                            dataCategory.map((item, i) => (
                                <>
                                    <tr className="border-y-2 hover:bg-gray-200">
                                        <td className="py-2">{i + 1}</td>
                                        <td className="py-2">{item.name}</td>
                                        <td className="py-2">{item.author}</td>
                                        <td className="py-2 flex gap-2">
                                            <DangerButton
                                                onClick={() => {
                                                    handleDelete(item.id);
                                                }}
                                            >
                                                delete
                                            </DangerButton>
                                        </td>
                                    </tr>
                                </>
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
                    </table>
                </div>
            </div>
            <Modal show={show} onClose={() => setShow(!show)}>
                <h1 className="text-2xl capitalize mb-2 mx-5 mt-5 font-bold">
                    add category
                </h1>
                <form onSubmit={submit} className="m-5">
                    <div className="mt-4">
                        <InputLabel htmlFor="title" value="title" />

                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="current-title"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="flex mt-5 justify-end">
                        <PrimaryButton disabled={processing}>
                            save
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}
