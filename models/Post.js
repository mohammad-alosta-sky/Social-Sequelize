const {db, DataTypes} = require("../db/connection");

let Post = db.define("past", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});


module.exports = Post;