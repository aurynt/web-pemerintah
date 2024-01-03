import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { About, PageProps } from "@/types";
import Swal from "sweetalert2";

export default function AboutUs({ className = "" }: { className?: string }) {
    const about = usePage<PageProps<{ about: About }>>().props.about;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            visi: about.visi,
            misi: about.misi,
            sejarah: about.sejarah,
            desc: about.desc,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("about.update"), {
            onSuccess: () => {
                Swal.fire({
                    title: "Success",
                    text: "Succesfully updated",
                    icon: "success",
                });
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">About Us</h2>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="visi" value="Visi" />

                    <textarea
                        value={data.visi}
                        onChange={(e) => setData("visi", e.target.value)}
                        name="information"
                        id="visi"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                        rows={3}
                    ></textarea>

                    <InputError className="mt-2" message={errors.visi} />
                </div>

                <div>
                    <InputLabel htmlFor="misi" value="Misi" />

                    <textarea
                        value={data.misi}
                        onChange={(e) => setData("misi", e.target.value)}
                        name="information"
                        id="misi"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                        rows={3}
                    ></textarea>

                    <InputError className="mt-2" message={errors.misi} />
                </div>
                <div>
                    <InputLabel htmlFor="sejarah" value="Sejarah" />

                    <textarea
                        value={data.sejarah}
                        onChange={(e) => setData("sejarah", e.target.value)}
                        name="information"
                        id="sejarah"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                        rows={5}
                    ></textarea>

                    <InputError className="mt-2" message={errors.sejarah} />
                </div>
                <div>
                    <InputLabel htmlFor="desc" value="Description" />

                    <textarea
                        value={data.desc}
                        onChange={(e) => setData("desc", e.target.value)}
                        name="information"
                        id="desc"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                        rows={7}
                    ></textarea>

                    <InputError className="mt-2" message={errors.desc} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
