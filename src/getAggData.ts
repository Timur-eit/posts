import { getComments, getPosts, getUsers } from "./api";
import { AggPostModel, CommetCountMap, UserNameMap } from "./types";

(async () => {
    const [
        posts,
        comments,
        users,
    ] = await Promise.all([getPosts(), getComments(), getUsers()]);

    const usersNameMap = users.reduce((users, { id, username }) => {
        users[id] = username;
        return users;
    }, {} as UserNameMap);

    const commentsCountMap = comments.reduce((comments, { postId }) => {
        if (postId in comments) {
            comments[postId] += 1;
        } else {
            comments[postId] = 1;
        }
        return comments;
    }, {} as CommetCountMap);

    const aggPostData: AggPostModel[] = posts.map(({ id, userId, title }) => {
        return { id, title, userName: usersNameMap[userId], commentsCount: commentsCountMap[id] };
    });

    console.log('Agg Data', aggPostData);
})();
