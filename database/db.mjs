import sqlite3 from "sqlite3";
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

// Création des tables
db.serialize(() => {
    // Table projects
    db.run(`
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

    // Table tags
    db.run(`
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            color TEXT NOT NULL
        )
    `);

    // Table de relation project_tags
    db.run(`
        CREATE TABLE IF NOT EXISTS project_tags (
            project_id INTEGER NOT NULL,
            tag_id INTEGER NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id),
            FOREIGN KEY (tag_id) REFERENCES tags(id)
        )
    `);

    // Insertion des tags
    tags.forEach(tag => {
        db.run("INSERT INTO tags (id, name, color) VALUES (?, ?, ?)", [tag.id, tag.name, tag.color]);
    });

    // Insertion des projets et de leurs tags
    projects.forEach(project => {
        db.run("INSERT INTO projects (title, description, image, slug, github, liveLink) VALUES (?, ?, ?, ?, ?, ?)",
            [project.title, project.description, project.image, project.slug, project.github, project.liveLink], function (err) {
                if (err) {
                    console.error(err.message);
                    return;
                }
                console.log(`Projet inséré : ${project.title}`);

                // Insertion des relations projet-tag
                project.tags.forEach(tagId => {
                    db.run("INSERT INTO project_tags (project_id, tag_id) VALUES (?, ?)", [this.lastID, tagId]);
                });
            });
    });
});

// Fermeture de la connexion à la base de données
process.on('exit', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("Connexion à la base de données fermée.");
    });
});
