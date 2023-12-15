class Team {
    public id: number;
    public name: string;
    public meeting_room: string;

    constructor(
        id: number,
        name: string,
        meeting_room: string,
    ) {
        this.id = id;
        this.name = name;
        this.meeting_room = meeting_room;
    }
}
    
    export default Team;