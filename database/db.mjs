import sqlite3 from "sqlite3";
import { promisify } from "util";
import tags from "../dataset/tags.mjs";
import projects from "../dataset/projects.mjs";

// Connexion à la base de données SQLite
const db = new sqlite3.Database(
    "./portfolio.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("Connecté à la base de données SQLite.");
    }
);

// Promisify db.run pour utiliser async/await
const runAsync = promisify(db.run.bind(db));

// Fonction pour créer les tables
const createTables = async () => {
    await runAsync(`
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            color TEXT NOT NULL
        )
    `);

    await runAsync(`
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            image TEXT NOT NULL,
            slug TEXT NOT NULL UNIQUE,
            github TEXT NOT NULL,
            liveLink TEXT NOT NULL
        )
    `);

    await runAsync(`
        CREATE TABLE IF NOT EXISTS project_tags (
            project_id INTEGER NOT NULL,
            tag_id INTEGER NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id),
            FOREIGN KEY (tag_id) REFERENCES tags(id)
        )
    `);
};

// Fonction pour insérer les données
const insertData = async () => {
    for (const tag of tags) {
        await runAsync("INSERT INTO tags (id, name, color) VALUES (?, ?, ?)", [tag.id, tag.name, tag.color]);
    }

    for (const project of projects) {
        const projectId = await new Promise((resolve, reject) => {
            db.run("INSERT INTO projects (title, description, image, slug, github, liveLink) VALUES (?, ?, ?, ?, ?, ?)",
                [project.title, project.description, project.image, project.slug, project.github, project.liveLink
                ], function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(this.lastID);
                    }
                });
        });
        for (const tagId of project.tags) {
            await runAsync("INSERT INTO project_tags (project_id, tag_id) VALUES (?, ?)", [projectId, tagId]);
        }
    }
};

// Exécution principale
const main = async () => {
    try {
        await createTables();
        await insertData();
        console.log("Création des tables et insertion des données réussies.");
    } catch (err) {
        console.error("Erreur lors de la création des tables ou de l'insertion des données:", err.message);
    } finally {
        db.close((err) => {
            if (err) {
                console.error("Erreur lors de la fermeture de la base de données:", err.message);
            } else {
                console.log("Connexion à la base de données fermée.");
            }
        });
    }
};

main();