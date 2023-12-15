//add song, update song, delete song by id, getSongById, getAllSongs

import dal_mysql from "../Utils/dal_mysql";
import Song from "../Models/Song";
import Category from "../Models/Category";

import { OkPacket } from "mysql";

const getAllSongs = async () => {
  //const SQLcmd = "SELECT * FROM songs";
    const SQLcmd = `
        SELECT songs.*, category.name as categoryName
        FROM songs JOIN category
        ON songs.category = category.id`;
    const data = await dal_mysql.execute(SQLcmd);
    return data;
};

const getSongById = async (id: number) => {
    //const SQLcmd = `SELECT * FROM songs WHERE id=${id}`;
    const SQLcmd = `
        SELECT songs.*, category.name as categoryName
        FROM songs JOIN category
        ON songs.category = category.id
        WHERE id=${id}
    `;
    const data = await dal_mysql.execute(SQLcmd);
    console.log(data);
    return data;
};

const deleteSongById = async (id: number) => {
    console.log(`delete song id ${id}`);
    const SQLcmd = `DELETE FROM songs WHERE id=${id}`;
    await dal_mysql.execute(SQLcmd);
};

const addSong = async (newSong: Song) => {
    const SQLcmd = `
            INSERT INTO songs
            (description, img, title, url)
            VALUES
            ('${newSong.description}','${newSong.img}','${newSong.title}','${newSong.url}')
        `;
    console.log(SQLcmd);
    const result: OkPacket = await dal_mysql.execute(SQLcmd);
    return result.insertId;
};

const updateSong = async (song: Song) => {
    const SQLcmd = `
    UPDATE songs 
    SET description = '${song.description}', img = '${song.img}', title = '${song.title}', url = '${song.url}'
    WHERE id = ${song.id};
    `;
    await dal_mysql.execute(SQLcmd);
    return true;
};

const getCat = async () => {
    const SQLcmd = "SELECT * FROM category";
    const data = await dal_mysql.execute(SQLcmd);
    //console.log(data);
    return data;
};

const deleteCatById = async (id: number) => {
    console.log(`delete category id ${id}`);
    const SQLcmd = `DELETE FROM category WHERE id=${id}`;
    await dal_mysql.execute(SQLcmd);
};

const addCat = async (newCat: Category) => {
    const SQLcmd = `
    UPDATE category
    SET name = '${newCat.name}',
    WHERE category_id = '${newCat.id}';
    `;
    console.log(SQLcmd);
    const result: OkPacket = await dal_mysql.execute(SQLcmd);
    return result.insertId;
};

// const updateCat = async (category: Category) => {
//     const SQLcmd = `
//     UPDATE category
//     SET name = {'${category.name}'}
//     WHERE category_id = '${category.id}';
//     `;
//     await dal_mysql.execute(SQLcmd);
//     return true;
// };


export {
    getAllSongs,
    getSongById,
    deleteSongById,
    addSong,
    updateSong,
    getCat,
    deleteCatById,
    addCat,
};