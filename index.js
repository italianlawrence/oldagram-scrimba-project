
const bodyElement = document.querySelector('body')

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


for(let i = 0; i < posts.length; i++) {

    let htmlStructure = `

    <section>
        <div class = "section-header">
            <img src = "${posts[i].avatar}">

            <div class = "section-info">
                <h2 class = "desc-h2"> ${posts[i].name}</h2>
                <p class = "desc-paragraph"> ${posts[i].location} </p>
            </div>
        </div>

        <img class = "small" src = "${posts[i].post}">

        <div class = "logos">
             <img src = "images/icon-heart.png" alt = 'Leave a like icon'>
             <img src = "images/icon-comment.png" alt = 'Leave a comment icon'>
             <img src = "images/icon-dm.png" alt = 'Leave a DM icon'>
        </div>

        <p class = "likes"> <b> ${posts[i].likes} likes </b> </p>

        <p class = 'img-desc'><b>${posts[i].username}</b> ${posts[i].comment} </p>
    </section>   
    
    `


    bodyElement.innerHTML += htmlStructure








}