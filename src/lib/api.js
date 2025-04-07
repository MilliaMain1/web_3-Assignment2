//const API_URL = "http://localhost:3000/api"
const API_URL = "https://web-3-assignment1.onrender.com/api"


const get = async (url) => {
    let res = await fetch(url)
    //TODO add error handling here for non 400 
    let json = await res.json();
    return json; //Make this return a status in an object
}

const getAll =  async(endpoint) => {
    return await get(`${API_URL}/${endpoint}`)
}

const getById = async (endpoint, id) => {
    return await get(`${API_URL}/${endpoint}/${id}`)
}

const getByField = async (endpoint, field, id) => {
    return await get(`${API_URL}/${endpoint}/${field}/${id}`);
}

export const galleries = {
    getAll: async () => {
        let data = await getAll("galleries")
        return data;
    },
    getId: async (id) => await getById("galleries", id), 
}

const paintings = {
    getAll: async () => await getAll("paintings"),
    getId: async (id) => await getById("paintings", id), 
    getFull: async(id) => await getById("paintings/full", id),
    getByGallery: async (galleryId) => await getByField("paintings", "galleries", galleryId),
    getByArtist: async (artistId) => await getByField("paintings", "artist", artistId),
    getByGenre: async (genreId) => await getByField("paintings", "genre", genreId)
}
const artists = {
    getAll: async () => await getAll("artists"),
    getId: async (id) => await getById("artists", id), 
}
const genres = {
    getAll: async () => await getAll("genres"),
    getId: async (id) => await getById("genres", id), 
}

export default {
    galleries,
    paintings,
    artists,
    genres,
}


