const url = 'http://localhost:4000/api/images';

function request(method, url, data) {
    return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}

export const getImages = () => {
    return request('get', url);
};

export const updateImage = (id, data) => {
    return request('put', `${url}/${id}`, data);
};
