import React, { SelectHTMLAttributes } from "react";

export default function Select({
    options,
    ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
    options: { id: number; name: string }[];
}) {
    return (
        <select
            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
            {...props}
        >
            <option value="0">
                Select Category
            </option>
            {options.map((item, i) => (
                <option key={i} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}
