import axios from "axios";
import { addPhotos } from "./store";

export const getPhotos = async(dispatch) => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9');
            dispatch(addPhotos(response.data));
        } catch (error) {
            console.log(error);
        }
}