import axios from "axios";
const URL = ' http://localhost:3000/notes';


export const get = async () => {
    try {
        const response = await axios.get(URL);
        
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const saveNote = async (note) => {
    try {
        const response = await axios.post(URL, note);

        return response.data;
    } catch (err) {
        throw err;
    }
}



export const deleteNote = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);

        return id;
    } catch (err) {
        throw err;
    }
}



export const updateNote = async (id, updateNote) => {
    try {
        const response = await axios.patch(`${URL}/${id}`, updateNote);

        return response.data;
    } catch (err) {
        throw err;
    }
}