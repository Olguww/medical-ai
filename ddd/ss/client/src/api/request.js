import axios from 'axios'
const port = 8080;

const url = `http://localhost:${port}`;

export default async function request({path,method,body}) {
    return await axios.request({
        method,
        baseURL: `${url}/${path}`,
        responseType: 'json',
        data: body
    });
}