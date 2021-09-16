import connection from "./connection"

const getAll = () => {
    return connection.get("/posts");
};

const get = (id) => {
    return connection.get(`/posts/${id}`);
};

const create = (data) => {
    return connection.post("/posts", data);
};

const update = (id, data) => {
    return connection.put(`/posts/${id}`, data);
};

const remove = (id) => {
    return connection.delete(`/posts/${id}`);
};

export {
    getAll,
    get,
    create,
    update,
    remove,

}