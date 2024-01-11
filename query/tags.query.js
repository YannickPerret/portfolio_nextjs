import sqlite3 from 'sqlite3';
import path from 'path';

export async function getTags() {

    const db = new sqlite3.Database('/Users/tchoune/Documents/dev/js/portfolio/database/portfolio.db');

    const tags = await new Promise((resolve, reject) => {
        db.all("SELECT * FROM tags", (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
    db.close();
    return tags;
}