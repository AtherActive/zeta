let posts = [
    {
        "id": 1,
        "reply_id": null,
        "content": "Test bit please ignore",
        "author": 2,
        "tags": null,
        "createdate": '20-02-2022',
        "reported": 0,
        "username": 'demo',
        'image': '../img/demo.png'
    },
    {
        "id": 1,
        "reply_id": null,
        "content": "haha benis",
        "author": 1,
        "tags": null,
        "createdate": '20-02-2022',
        "reported": 0,
        "username": 'Saltylelele',
        'image': '../img/demo.png'
    }
]

function renderPosts(posts) {
    let container = document.getElementById('postcontainer');

    posts.forEach(pst => {
        container.innerHTML += `
        <div class="bit">
            <div class="author">
                <img src="${pst.image}" alt="">
                <h6><a href="">${pst.username}</a></h6>
            </div>
            <div class="content">
                <span>${pst.content}</span>
            </div>
            <div class="meta">
                <span>${pst.createdate}</span>
            </div>
            <div class="actions">
                <a href="javascript:like(0)" id="0-like"><i class='bx bx-like' ></i></a>
                <a href=""><i class='bx bx-error-circle' ></i></a>
            </div>
        </div>
        `
    });
}

renderPosts(posts)