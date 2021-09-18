import connection from "./connection"

const getAll = () => {
    return connection.get("/posts");
};

const get = (id) => {
    return connection.get(`/posts/${id}`);
};

const getAllComments = (id) => {
    return connection.get(`/posts/${id}/comments`);
}

const create = (data) => {
    return connection.post("/posts", data);
};

const createComment = (id, data) => {
    return connection.post(`/posts/${id}/comment`, data);
}

const update = (id, data) => {
    return connection.put(`/posts/${id}`, data);
};

const updateComment = (id, commentId, data) => {
    return connection.put(`/posts/${id}/comment/${commentId}`, data);
}

const remove = (id) => {
    return connection.delete(`/posts/${id}`);
};

const removeComment = (id, commentId) => {
    return connection.delete(`/posts/${id}/comment/${commentId}`);
}

export {
    getAll,
    get,
    create,
    update,
    remove,
    getAllComments,
    createComment,
    updateComment,
    removeComment,

}