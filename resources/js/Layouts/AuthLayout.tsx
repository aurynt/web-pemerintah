import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="shadow-lg p-5 rounded-lg sm:w-[25rem] w-[90%]">
                {children}
            </div>
        </div>
    );
}
