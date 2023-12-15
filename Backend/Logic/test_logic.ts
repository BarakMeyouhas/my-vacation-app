
import dal_mysql from "../Utils/dal_mysql";
import Meeting from "../Models/meeting";
import { OkPacket } from "mysql";

const getAllMeetings = async () => {
        const SQLcmd = `
        SELECT * FROM meetings_table
        `;
        const data = await dal_mysql.execute(SQLcmd);
        return data;
};

const getAllTeams = async () => {
  //const SQLcmd = "SELECT * FROM teams";
    const SQLcmd = `
    SELECT teams.*, meetings_table.meeting_room
    FROM teams
    JOIN meetings_table
    ON teams.meeting = meetings_table.id`;
    const data = await dal_mysql.execute(SQLcmd);
    return data;
};

const getTeamById = async (id: number) => {
    //const SQLcmd = `SELECT * FROM songs WHERE id=${id}`;
    const SQLcmd = `
    SELECT teams.*, meetings_table.start_meeting, meetings_table.end_meeting, meetings_table.description_meeting, meetings_table.meeting_room
    FROM teams
    JOIN meetings_table ON teams.meeting = meetings_table.id
    WHERE teams.id = ${id};
    `;
    const data = await dal_mysql.execute(SQLcmd);
    console.log(data);
    return data;
};

const addMeeting = async (newMeeting: Meeting) => {
    const SQLcmd = `
        INSERT INTO meetings_table (start_meeting, end_meeting, description_meeting, meeting_room)
        VALUES ('${newMeeting.start_meeting}', '${newMeeting.end_meeting}', '${newMeeting.description_meeting}', '${newMeeting.meeting_room}');
    `;
    console.log(SQLcmd);
    const result: OkPacket = await dal_mysql.execute(SQLcmd);
    return result.insertId;
};




export {
    getAllTeams, getTeamById,addMeeting,getAllMeetings,
};