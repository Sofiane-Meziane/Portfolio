---
title: "Horizon Auto"
date: "2025-07-30"
summary: "Une application de bureau robuste pour la gestion d'auto-école avec des tableaux de bord dédiés aux Admin, Secrétaires et Moniteurs."
tags: ["Java", "JavaFX", "MySQL", "Pattern MVC", "Application Bureau"]
repo: "https://github.com/Sofiane-Meziane/Horizon-Auto"
featured: false
---

## Vue d'ensemble du Projet
Horizon Auto est un logiciel desktop complet conçu pour digitaliser et automatiser les processus internes d'une auto-école. Construit sur une architecture **MVC (Modèle-Vue-Contrôleur)** stricte, il offre des environnements sécurisés et spécifiques à chaque rôle pour gérer tous les aspects de l'activité, de l'inscription des élèves à l'entretien de la flotte.

## La Solution
L'application reproduit la structure réelle de l'entreprise à travers trois espaces distincts :
1.  **Espace Administrateur :** Pour le contrôle total des ressources (Personnel, Véhicules).
2.  **Espace Secrétaire :** Pour la gestion opérationnelle (Planning, Inscriptions).
3.  **Espace Moniteur :** Pour le suivi pédagogique (Progression des élèves, Notation).

## Approche Technique
-   **Moteur Principal :** Développé en **Java** avec **JavaFX** pour une interface utilisateur moderne et réactive.
-   **Architecture :** Implémente le **Pattern MVC** pour séparer la logique métier, les modèles de données et les vues, assurant la maintenabilité du code.
-   **Persistance :** Utilise **MySQL** pour un stockage des données robuste.
-   **Environnement :** Optimisé pour un déploiement via **NetBeans**.

## Fonctionnalités Clés par Rôle

### 👑 Administrateur
-   **Gestion Utilisateurs :** Création/Modification/Suppression des comptes personnel.
-   **Contrôle Flotte :** Gestion des véhicules (Ajouts, Suivi maintenance).
-   **Supervision :** Vue globale de l'activité de l'auto-école.

### 📅 Secrétaire
-   **Dossiers Élèves :** Gestion numérique des fiches candidats.
-   **Planning :** Planification des séances de code et de conduite.
-   **Examens :** Gestion des inscriptions aux épreuves officielles.

### 👨‍🏫 Moniteur
-   **Planning :** Consultation de l'emploi du temps personnel.
-   **Suivi Progression :** Monitoring détaillé des compétences de l'élève.
-   **Évaluation :** Saisie des notes et observations de cours.

## Visuels
![Bannière](https://raw.githubusercontent.com/Sofiane-Meziane/Horizon-Auto/main/src/images/Design%20sans%20titre%20(6).png)

### Galerie d'Interfaces
| Écran de Connexion | Tableau de Bord Admin |
| :---: | :---: |
| ![Login](https://raw.githubusercontent.com/Sofiane-Meziane/Horizon-Auto/main/src/images/Design%20sans%20titre%20(7).png) | ![Admin](https://raw.githubusercontent.com/Sofiane-Meziane/Horizon-Auto/main/src/images/ecran%20admin.png) |

| Interface Secrétaire | Vue Moniteur |
| :---: | :---: |
| ![Secrétaire](https://raw.githubusercontent.com/Sofiane-Meziane/Horizon-Auto/main/src/images/Design%20sans%20titre%20(5).png) | ![Moniteur](https://github.com/Sofiane-Meziane/Horizon-Auto/blob/a94a04181eae2332f561656615ade7dd5bd7e8d0/src/images/Design%20sans%20titre%20(6).png?raw=true) |