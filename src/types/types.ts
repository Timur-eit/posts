import { Company } from "./commonTypes";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type UserAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: Company;
}

export type CustomComment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export type AggPostModel = {
    /**
     * id поста
     */
    id: number;
    /**
     * title поста
     */
    title: string;
    userName: string;
    commentsCount: number;
};

export type UserNameMap = { [id: string]: string };
export type CommetCountMap = { [postId: string]: number };