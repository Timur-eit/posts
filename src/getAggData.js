"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
(async () => {
    const [posts, comments, users,] = await Promise.all([(0, api_1.getPosts)(), (0, api_1.getComments)(), (0, api_1.getUsers)()]);
    const usersNameMap = users.reduce((acc, { id, username }) => {
        acc[id] = username;
        return acc;
    }, {});
    const commentsCountMap = comments.reduce((acc, { postId }) => {
        if (postId in acc) {
            acc[postId] += 1;
        }
        else {
            acc[postId] = 1;
        }
        return acc;
    }, {});
    const aggPostData = posts.map(({ id, userId, title }) => {
        return { id, title, userName: usersNameMap[userId], commentsCount: commentsCountMap[id] };
    });
    console.log('Agg Data', aggPostData);
})();
