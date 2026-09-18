import React from 'react';

const getPost = async()=>{
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
    return res.json()
}

// const PostPromiss = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }

const PostPage = async() => {

    const posts = await getPost();
    console.log(posts)

    return (
        <div>
            <h1>Wallcome to post {posts.length}</h1>
        </div>
    );
};

export default PostPage;