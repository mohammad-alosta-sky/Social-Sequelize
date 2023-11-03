const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const users = require("./seed/users.json");
const likes = require("./seed/likes.json");
const comments = require("./seed/comments.json");
const posts = require("./seed/posts.json");
const profiles = require("./seed/profiles.json");


describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here
    
    test("Add users", async function() {
        await User.bulkCreate(users)
        const user = await User.findByPk(1)

        expect(user.username).toEqual("john_doe");
        expect(user.email).toBe("john_doe@example.com")
    })

    test("User can add Profile", async function() {
        const user = await User.findByPk(1)
        await user.createProfile(profiles[0])
        // await Profile.bulkCreate(profiles)
        const profile = await Profile.findByPk(1)

        expect(profile.bio).toBe("I'm a software engineer");
        expect(profile.profilePicture).toBe("https://example.com/profile1.jpg");
        expect(profile.birthday).toBe("1990-06-15");
    })

    test("Add Posts", async function() {
        const user = await User.findByPk(1)
        await user.addPost(posts[0])
        // await Post.bulkCreate(posts)
        const post = await Post.findByPk(1)

        expect(post.title).toBe("Hiking in Yosemite");
    })

    test("Add like", async function() {
        await Like.bulkCreate(likes)
        const like = await Like.findByPk(1)

        expect(like.reactionType).toBe("👍");
    })

    test("Add comments", async function() {
        await Comment.bulkCreate(comments)
        const comment = await Comment.findByPk(1)

        expect(comment.body).toBe("This is a great post!");
    })



})