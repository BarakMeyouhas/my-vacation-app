class Vacation {
    public id: number;
    public destination: string;
    public description: string;
    public start: string;
    public end: string;
    public price: number;
    public img: string;

    constructor(
        id: number,
        destination: string,
        description: string,
        start: string,
        end: string,
        price: number,
        img: string
    ) {
        this.id = id;
        this.destination = destination;
        this.description = description;
        this.start = start;
        this.end = end;
        this.price = price;
        this.img = img;
    }
}
    

export default Vacation;