var jsonData = {
    "posts": [
        {
            "id": 1,
            "user": {
                "id": 1,
                "username": "user1",
                "profile_pic": "https://w7.pngwing.com/pngs/933/97/png-transparent-computer-icons-avatar-heroes-public-relations-necktie-thumbnail.png"
            },
            "image": "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
            "caption": "This is the caption for post 1. It can be long or short.",
            "likes": 123,
            "comments": [
                {
                    "id": 1,
                    "user": {
                        "id": 2,
                        "username": "user2"
                    },
                    "content": "Comment 1 for post 1"
                },
                {
                    "id": 2,
                    "user": {
                        "id": 3,
                        "username": "user3"
                    },
                    "content": "Comment 2 for post 1"
                }
            ]
        },
        {
            "id": 2,
            "user": {
                "id": 4,
                "username": "user4",
                "profile_pic": "https://w7.pngwing.com/pngs/933/97/png-transparent-computer-icons-avatar-heroes-public-relations-necktie-thumbnail.png"
            },
            "image": "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
            "caption": "This is the caption for post 2.",
            "likes": 45,
            "comments": []
        }
    ]
};

function displayPosts() {
    console.log("Displaying posts...");
    var postsContainer = document.getElementById('posts-container');
    var posts = jsonData.posts;

    posts.forEach(function(post) {
        var postElement = document.createElement('div');
        postElement.classList.add('post'); // Add post class to the post element

        postElement.innerHTML = `
        <div class="post-header">
            <img src="${post.user.profile_pic}" alt="User Profile" class="user-profile">
            <div class="username">${post.user.username}</div>
        </div>
        <img src="${post.image}" alt="Post Image" class="post-image">
        <div class="post-content">
            <p>${post.caption}</p>
        </div>
        <div class="post-actions">
            <span class="like-count">${post.likes}</span> 
            <button class="like-button"><img src="https://static.thenounproject.com/png/1312183-200.png" alt="Like"></button>
            <span class="comment-count">${post.comments.length}</span> 
            <button class="comment-button"><img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="Comment"></button>  
        </div>
        `;

        // Get the like and comment buttons for the current post
        var likeButton = postElement.querySelector('.like-button');
        var commentButton = postElement.querySelector('.comment-button');

        // Add event listeners for like and comment buttons
        likeButton.addEventListener('click', function() {
            if (!likeButton.classList.contains('liked')) {
                // Increment like count if the button is not already liked
                post.likes++;
                likeButton.classList.add('liked'); // Add 'liked' class to indicate that the button is liked
            } else {
                post.likes--;
                likeButton.classList.remove('liked'); // Remove 'liked' class to indicate that the button is unliked
            }
            postElement.querySelector('.like-count').textContent = post.likes; // Update like count in the HTML
        });

        commentButton.addEventListener('click', function() {
            // Implement comment functionality if needed
            // This example assumes the comment button only increments the comment count
            post.comments.push({}); // Add an empty comment object to the comments array
            postElement.querySelector('.comment-count').textContent = post.comments.length; // Update comment count in the HTML
        });

        postsContainer.appendChild(postElement);
    });
}

displayPosts();
