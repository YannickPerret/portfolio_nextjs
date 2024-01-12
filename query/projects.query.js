import sqlite3 from 'sqlite3';

export async function getProjects() {
    const db = new sqlite3.Database('/Users/tchoune/Documents/dev/js/portfolio/database/portfolio.db');
    let projects; // Déclarez projects ici pour assurer la visibilité dans toute la fonction

    try {
        projects = await new Promise((resolve, reject) => {
            db.all(`SELECT * FROM projects`, [], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(rows);
            });
        });

        for (const project of projects) {
            project.tags = await new Promise((resolve, reject) => {
                db.all(`
                    SELECT t.id, t.name, t.color 
                    FROM tags t 
                    JOIN project_tags pt ON t.id = pt.tag_id 
                    WHERE pt.project_id = ?`, [project.id], (err, rows) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(rows);
                });
            });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
        throw error;
    } finally {
        db.close();
    }

    return projects; // Maintenant projects est défini et peut être retourné
}

export async function getProject(id) {
    const db = new sqlite3.Database('/Users/tchoune/Documents/dev/js/portfolio/database/portfolio.db');
    let project; // Déclarez project ici pour assurer la visibilité dans toute la fonction

    try {
        project = await new Promise((resolve, reject) => {
            db.get(`SELECT * FROM projects WHERE slug = ?`, [id], (err, row) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(row);
            });
        });

        project.tags = await new Promise((resolve, reject) => {
            db.all(`
                SELECT t.id, t.name, t.color 
                FROM tags t 
                JOIN project_tags pt ON t.id = pt.tag_id 
                WHERE pt.project_id = ?`, [project.id], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(rows);
            });
        });
    } catch (error) {
        console.error("Erreur lors de la récupération du projet :", error);
        throw error;
    } finally {
        db.close();
    }

    return project; // Maintenant project est défini et peut être retourné
}
