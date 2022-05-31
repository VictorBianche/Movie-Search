import axios from "axios";

class MovieRequestService {
    private apiLink = process.env.VUE_APP_OMDB_URL;
    private apiKey = process.env.VUE_APP_OMDB_KEY;
    public getMovie = async (movieName: string) => {
        return axios({
            method: "get",
            url: `${this.apiLink}?s=${movieName}&apikey=${this.apiKey}`
        })
    }
}

export default new MovieRequestService();