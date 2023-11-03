const {db, DataTypes} = require("../db/connection")

const Comment = db.define("comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});


module.exports = Comment;