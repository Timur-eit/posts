import { CustomComment, Post, User } from "./types/types";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (): Promise<Post[]> => {
    return (await fetch(`${BASE_URL}/posts`)).json();
};
export const getComments = async (): Promise<CustomComment[]> => {
    return (await fetch(`${BASE_URL}/comments`)).json();
};
export const getUsers = async (): Promise<User[]> => {    
    return (await fetch(`${BASE_URL}/users`)).json();
};
