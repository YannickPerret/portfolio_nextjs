# PortFolio

Le projet PortFolio est un projet de fin de formation, il a pour but de mettre en pratique les compétences acquises durant la formation.
Le projet à été réalisé en 8 semaines à raison de 4heures par semaines. Il utilises les technologies suivantes:
- NextJS 13
- SQlite
- SCSS
- GSap
- Gsap with ScrollTrigger
- Github
- icone par Lucid-react

## Installation
Pour installer le projet, il faut cloner le projet sur votre machine, puis lancer la commande suivante:
```bash
npm install

npm run db:create
```
## Lancement du projet
Pour lancer le projet, il faut lancer la commande suivante:
```bash
npm run dev
```

Code pour animation récupérer sur le web : 
[Source code ](https://codepen.io/robdimarzo/pen/VqjvqR)
```bash html
 <svg className={style.shape} viewBox="0 0 100 115" preserveAspectRatio="xMidYMin slice">
            <polygon
                points=""
                fill="none"
                stroke={color}
                strokeWidth="5">
                <animate
                    attributeName="points"
                    repeatCount="indefinite"
                    dur="4s"
                    begin={num + "s"}
                    from="50 57.5, 50 57.5, 50 57.5"
                    to="50 -75, 175 126, -75 126"
                />
            </polygon>
        </svg>
```

Code pour créer un nuage en svg : 
[Source code ](https://codepen.io/beauhaus/pen/pmMaWV)


## Auteur
Le projet à été réalisé par Perret Yannick sous licence MIT.