import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    setting: Setting;
    category: Category[];
    ziggy: Config & { location: string };
};

export type Post = {
    id: number;
    title: string;
    category: string;
    photo: string;
    information: string;
    author: string;
    users_id: number | undefined;
    categories_id: number | undefined;
};

export type Category = {
    id: number;
    name: string;
    author: string;
    users_id: number | undefined;
};

export type About = {
    id: number;
    misi: string;
    visi: string;
    sejarah: string;
    desc: string;
};
export type Setting = {
    id: number;
    logo: string;
    email: string;
    telp: string;
    desc: string;
    address: string;
};
