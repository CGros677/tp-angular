## Lancement du projet
 
- Cloner le projet : `https://XXXXXXX@tuleap.ambassadair.net/plugins/git/ambespmb/espaceMembre.git` en remplaçant XXXX par votre user name
- Se placer à la racine du projet : `cd espaceMembre/`
- Installer les dépendances / librairies du projet avec : `npm install`
- Lancer l'application : `ng serve -o`
- Un onglet s'ouvre sur l'url http://localhost:4200/ sur l'application
 
 
## Process mergeRequest
 
- Créer une branche &lt;F&gt; a partir du master  
    `git checkout -b <F>` <br>
    **PAS D'ACCENT DANS LE NOM DES BRANCHES**  
 
- Réaliser les dev + commits 
    `git add .` 
    `git commit -m "commentaire"` 
 
- Récupération et rebase de la master sur la feature 
    Arrêter le serveur Angular !! (`Ctrl + C` dans le terminal)   
    `git checkout master`  
    `git pull`   
    `git checkout <F>`  
    `git rebase master`  
 
- Vérifier que l'application compile toujours en --prod via `ng build --prod`. 
Ne pas commiter le répertoire build généré (nommé dist par défaut)  
- création de la merge request: 
    `git push -u origin <F>` 
(-u fait upstream pour lier la branche locale à la distante)
 
- On se connecte a l'interface git et on créé la merge request
 
- Si on reprend la branche pour des modifications, on fait juste un `git push.`
 
## Nommage des commits
 
- [FIX] ID_ANO Description : Correction d'une anomalie où ID_ANO correspond à l'identifiant Tuleap de l'anomalie
- [FIX] Description : Correction d'une fonctionnalité sans qu'une anomalie n'ai été remonté sur Tuleap
- [ADD] Description : Ajout d'une fonctionnalité
- [REFACT] Description : Refacto d'une fonctionnalité SANS changement de comportement ou évolution
- [UPD] Description : Mise à jour de librairies / dépendances / librairies
- [BUILD] Description : Modification / Correction du build de l'application
- [DEL] Description : Suppression de code / commentaires / logs
- [COM] Description : Ajout de commentaires dans l'application
- [VRS] Description : Mise à jour de la version de l'application
- [DOC] Description : Ajout de document md ou de commentaires de documentation

 
/!\ 1 tag par comit.

## Documenation
 
[Documenation fonctionnelle](additional-documentation/documenation-fonctionnelle.html)
 
 
## Versioning
 
[Processus de versioning de l'application](docs/VERSIONING.md)
 
## Livraison
 
[Processus pour livrer l'application sur les environnements CATS](docs/LIVRAISON.md)
 
## Action Nouveau Sprint
 
[Actions à réaliser à chaque début de sprint](docs/NOUVEAU_SPRINT.md)
