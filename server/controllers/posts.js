const db = require("../models");

const index = (req, res) => {
    db.Post.find({}, (err, foundPosts) => {
        if (err) return console.log("Error in Posts", err);

        return res.status(200).json({
            message: "Success",
            data: foundPosts,
        });
    });
};
const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return console.log("Error in Posts#show:", err);

        return res.status(200).json({
            message: "Success",
            data: foundPost,
        });
    });
};
const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        if (err) return console.log("Error in Posts#create:", err);

        return res.status(201).json({
            message: "Success",
            data: savedPost,
        });
    });
};
const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) console.log("Error in Posts#update:", err);

            return res.status(202).json({
                data: updatedPost,
            });
        }
    );
};
const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log("Error in Posts#destroy:", err);

        return res.status(200).json({
            data: deletedPost,
        });
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
}