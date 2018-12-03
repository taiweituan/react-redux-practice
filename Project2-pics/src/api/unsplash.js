import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 44134036bf3778b4952e37ec620ab12ecf58ca88f8bd6e80f99cf13000ef1f33"
    }
});
