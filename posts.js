
const posts = [
    {
        post_time: Date.now(),
        user: "xbag",
        likes:75,
        comments:12
    },
    {
        post_time: Date.now(),
        user: "xdag",
        likes:13,
        comments:1
    },
    {
        post_time: Date.now(),
        user: "xcag",
        likes:700,
        comments:122
    }    
]

console.log(posts)

posts.push( {
    post_time: Date.now(),
    user: "xfag",
    likes:122,
    comments:4
})

console.log(posts)

