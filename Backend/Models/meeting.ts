class Meeting {
    public id: number;
    public start_meeting: string;
    public end_meeting: string;
    public description_meeting: string;
    public meeting_room: string;



    constructor(
        id: number,
        start_meeting: string,
        end_meeting: string,
        description_meeting: string,
        meeting_room: string
    ) {
        this.id = id;
        this.start_meeting = start_meeting;
        this.end_meeting = end_meeting;
        this.description_meeting = description_meeting;
        this.meeting_room = meeting_room;
    }
}
    
    export default Meeting;