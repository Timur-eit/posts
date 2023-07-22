"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getComments = exports.getPosts = void 0;
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const getPosts = async () => {
    return (await fetch(`${BASE_URL}/posts`)).json();
};
exports.getPosts = getPosts;
const getComments = async () => {
    return (await fetch(`${BASE_URL}/comments`)).json();
};
exports.getComments = getComments;
const getUsers = async () => {
    return (await fetch(`${BASE_URL}/users`)).json();
};
exports.getUsers = getUsers;
