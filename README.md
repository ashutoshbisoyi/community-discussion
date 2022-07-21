# Community Room

This is a community room discussion panel where basically different users can add their comments and other users can react to their comments.

## Features

    1. Generates random users on click of refresh button in navigation bar or on page refresh
    2. Generated user can add a comments
        a. Comment get added on press of enter
        b. Comment get added on click of comment button
        c. User gets a notification when comment added
    3. Everytime user adds a comment, the comment will appear in comment seciton and get stored. Hence the comments do not get removed on page refersh.
    4. Each comment has some actions
        a. Upvote and Unvote
        b. See users who upvoted
        c. Reply to the comment (not implemented)
        d. Delete the comment
    5. The user who added the comment can
        a. Delete the comment
        b. Can see who upvoted the comment
        c. Can not upvote the comment. Upvote is disabled for the creator.
    6. Other users except the commentor can
        a. Upvote a comment
        b. Unvote their upvote
        c. See who have upvoted
        d. Reply to the comment (not implemented)
        e. Can not delete any other's comment
    7. Comments will get rendered according to the upvotes they have. The comment with more upvotes will get rendered first.
    8. The interface can also work in mobile screen

## Tools and Concepts Used

    1. React hooks
    2. CSS
    3. Material UI
    4. UUID
    5. Context API
