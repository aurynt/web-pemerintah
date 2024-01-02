import DangerButton from "@/Components/DangerButton";
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
        put,
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
        <div className="bg-white overflow-hidden mt-5 shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
                <TextInput
                    placeholder="Search"
                    type="search"
                    className="w-full mb-5"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="table-auto w-full text-center">
                    <tr className="border-y-2 bg-gray-400">
                        <th className="py-2 capitalize font-bold">no</th>
                        <th className="py-2 capitalize font-bold">name</th>
                        <th className="py-2 capitalize font-bold">author</th>
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
    );
}
