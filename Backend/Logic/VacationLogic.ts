import User from "../Models/User";
import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import Like from "../Models/Like";
import Vacation from "../Models/vacation";

const getAllVacations = async () => {
  const SQLcmd = `
    SELECT * FROM vacations
    `;
  const data = await dal_mysql.execute(SQLcmd);
  return data;
};

const getAllUsers = async () => {
  const SQLcmd = `
    SELECT * FROM siteusers
    `;
  const data = await dal_mysql.execute(SQLcmd);
  return data;
};

const addUser = async (newUser: User) => {
  const SQLcmd = `
        INSERT INTO siteusers (user_name, user_email, password)
        VALUES ('${newUser.user_name}', '${newUser.user_email}', '${newUser.password}');
    `;
  console.log(SQLcmd);
  const result: OkPacket = await dal_mysql.execute(SQLcmd);
  return result.insertId;
};

const checkUserEmail = async (useremail: any) => {
  const sqlCommand = `SELECT COUNT(*) AS userExists FROM siteusers WHERE user_email='${useremail}'`;
  const result = await dal_mysql.execute(sqlCommand);
  return result[0].userExists === 1;
};

const checkLogin = async (user: any) => {
  console.log("CHECKLOGIN:", user);
  const sqlCommand = `SELECT id, user_email, user_name, count(*) as userok FROM siteusers WHERE user_email='${user.user_email}' AND password='${user.password}'`;
  const result = await dal_mysql.execute(sqlCommand);
  console.log("LOGIN RESULT FROM SQL" + result[0]);
  const userExists = result[0].userok === 1;
  const user_id = userExists ? result[0].id : null;
  const user_email = userExists ? result[0].user_email : null;
  const user_name = userExists ? result[0].user_name : null;
  return { userExists, user_id, user_email, user_name };
};

const addLike = async (newLike: Like) => {
  const SQLcmd = `
        INSERT INTO vacation_followers (user_id, vacation_id)
        VALUES ('${newLike.user_id}', '${newLike.vacation_id}');
    `;
  console.log(SQLcmd);
  const result: OkPacket = await dal_mysql.execute(SQLcmd);
  return result.insertId;
};

const getAllLikes = async () => {
  const SQLcmd = `
    SELECT * FROM vacation_followers
    `;
  const data = await dal_mysql.execute(SQLcmd);
  return data;
};

const removeLikeById = async (vacation_id: number) => {
  console.log(`delete followers vacation_id ${vacation_id}`);
  const SQLcmd = `DELETE FROM vacation_followers WHERE vacation_id=${vacation_id}`;
  await dal_mysql.execute(SQLcmd);
};

const getUserLikes = async (user_id: number) => {
  console.log(`get user likes user_id ${user_id}`);
  const SQLcmd = `SELECT * FROM vacation_followers WHERE user_id=${user_id}`;
  const result = await dal_mysql.execute(SQLcmd);
  return result;
};

const checkLikeExists = async (user_id: number, vacation_id: number) => {
  const sqlCommand = `SELECT COUNT(*) as likeExist FROM vacation_followers WHERE user_id='${user_id}' AND vacation_id='${vacation_id}'`;
  const result = await dal_mysql.execute(sqlCommand);
  return result[0].likeExist === 1;
};

const addVacation = async (newVacation: Vacation) => {
  const SQLcmd = `
        INSERT INTO vacations (destination, description, start, end, price, img)
        VALUES ('${newVacation.destination}', '${newVacation.description}', '${newVacation.start}',
        '${newVacation.end}', '${newVacation.price}', '${newVacation.img}');
    `;
  console.log(SQLcmd);
  const result: OkPacket = await dal_mysql.execute(SQLcmd);
  return result.insertId;
};

const deleteVacationById = async (id: number) => {
  console.log(`delete vacation id ${id}`);
  const SQLcmd = `DELETE FROM vacations WHERE id=${id}`;
  await dal_mysql.execute(SQLcmd);
};

const getVacationById = async (id: number) => {
  const SQLcmd = `SELECT * FROM vacations WHERE id=${id}`;
  const data = await dal_mysql.execute(SQLcmd);
  console.log(data);
  return data;
};

const updateVacation = async (vacation: Vacation) => {
  const SQLcmd = `
        UPDATE vacations 
        SET destination = '${vacation.destination}', 
        description = '${vacation.description}', 
        start = '${vacation.start}', 
        end = '${vacation.end}', 
        price = '${vacation.price}', 
        img = '${vacation.img}'
        WHERE id = ${vacation.id};
    `;
  await dal_mysql.execute(SQLcmd);
  return true;
};

export {
  getAllVacations,
  getAllUsers,
  addUser,
  checkUserEmail,
  checkLogin,
  addLike,
  removeLikeById,
  checkLikeExists,
  addVacation,
  deleteVacationById,
  updateVacation,
  getVacationById,
  getUserLikes,
  getAllLikes,
};
