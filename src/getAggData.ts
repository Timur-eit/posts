import { getComments, getPosts, getUsers } from "./api";
import { AggPostModel, CommetCountMap, UserNameMap } from "./types";

(async () => {
    const [
        posts,
        comments,
        users,
    ] = await Promise.all([getPosts(), getComments(), getUsers()]);

    const usersNameMap = users.reduce((acc, { id, username }) => {
        acc[id] = username;
        return acc;
    }, {} as UserNameMap);

    const commentsCountMap = comments.reduce((acc, { postId }) => {
        if (postId in acc) {
            acc[postId] += 1;
        } else {
            acc[postId] = 1;
        }
        return acc;
    }, {} as CommetCountMap);

    const aggPostData: AggPostModel[] = posts.map(({ id, userId, title }) => {
        return { id, title, userName: usersNameMap[userId], commentsCount: commentsCountMap[id] };
    });

    console.log('Agg Data', aggPostData);
})();
