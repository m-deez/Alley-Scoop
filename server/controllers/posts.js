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

const showComments = (req, res) => {
    db.Post.findById(req.params.id)
    .then(foundPost => {
        if (!foundPost) return console.log("Error in Comment#show")

        return res.status(200).json({
            message: "Success",
            data: foundPost.comments,
        });
    })
    .catch(err => console.log(err))
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

const createComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then(foundPost => {
            if (!foundPost) return console.log("Error in Comment")
            
            foundPost.comments.push(req.body);
            foundPost.save();

            return res.status(201).json({
                message: "Success",
                data: foundPost.comments,
            });
        })
        .catch(err => console.log(err))
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) console.log("Error in update:", err);

            return res.status(202).json({
                data: updatedPost,
            });
        }
    );
};

const updateComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then(foundPost => {
            if (!foundPost) return console.log("Error in Comment")

            const commentById = foundPost.comments.id(req.params.commentId)
            commentById.user = req.body.user;
            commentById.body = req.body.body;
            foundPost.save();

            return res.status(202).json({
                message: "Success",
                data: commentById,
            });
        })
};

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log("Error in destroy:", err);

        return res.status(200).json({
            data: deletedPost,
        });
    });
};

const destroyComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then(foundPost => {
            if (!foundPost) return console.log("Error in Comment")

            const commentById = foundPost.comments.id(req.params.commentId)
            // console.log (commentById)
            commentById.remove();
            foundPost.save();

            return res.status(200).json({
                message: "Success",
                data: commentById,
            });
        })
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    showComments,
    createComment,
    updateComment,
    destroyComment,
}