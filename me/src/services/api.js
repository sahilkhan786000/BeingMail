import axios from 'axios';

//const API_URI = 'http://mail-api.onrender.com'
// const API_URI = 'http://localhost:8080'
const API_URI = ''
const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: requestData
    })
}

export default API_GMAIL;