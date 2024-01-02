import { FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import type { Setting } from "@/types";

export default function WebSetting({
    className = "",
    setting,
}: {
    className?: string;
    setting: Setting;
}) {
    const {
        data,
        setData,
        errors,
        patch,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        logo: setting.logo,
        email: setting.email,
        desc: setting.desc,
        address: setting.address,
        telp: setting.telp,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("setting.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            // onError: (errors) => {
            //     if (errors.password) {
            //         reset("password", "password_confirmation");
            //         passwordInput.current?.focus();
            //     }

            //     if (errors.current_password) {
            //         reset("current_password");
            //         currentPasswordInput.current?.focus();
            //     }
            // },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Web Setting
                </h2>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        type="email"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="logo" value="Logo" />

                    <TextInput
                        id="logo"
                        onChange={(e) => setData("logo", e.target.value)}
                        type="file"
                        className="mt-1 block w-full border-collapse border p-2"
                        autoComplete="new-logo"
                    />

                    <InputError message={errors.logo} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="address" value="Address" />

                    <TextInput
                        id="address"
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="new-address"
                    />

                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="telp" value="No Telp" />

                    <TextInput
                        id="telp"
                        value={data.telp}
                        onChange={(e) => setData("telp", e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="new-telp"
                    />

                    <InputError message={errors.telp} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="desc" value="Description" />

                    <textarea
                        onChange={(e) => setData("desc", e.target.value)}
                        value={data.desc}
                        name="desc"
                        id="desc"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                        rows={10}
                    ></textarea>

                    <InputError message={errors.desc} className="mt-2" />
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
