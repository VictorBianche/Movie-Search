export default class Movie {
    public title: string;

    public year: string;

    public poster: string;

    public type: string;

    public imdbID: string;

    constructor(data: any = {}) {
        this.title = data.Title || '';
        this.year = data.Year || '';
        this.poster = data.Poster || '';
        this.type = data.Type || '';
        this.imdbID = data.imdbID || '';
    }
}