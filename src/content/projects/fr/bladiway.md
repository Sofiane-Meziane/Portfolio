---
title: "Bladiway"
date: "2025-07-31"
summary: "Un écosystème de covoiturage complet comprenant une application mobile Flutter pour les utilisateurs et un tableau de bord admin React pour la gestion."
tags: ["Flutter", "Firebase", "Google Maps", "React", "Node.js", "Développement Mobile"]
repo: "https://github.com/Sofiane-Meziane/Bladiway"
featured: true
---

## Vue d'ensemble du Projet
Bladiway est une plateforme de covoiturage moderne conçue pour promouvoir une mobilité durable et intelligente. Elle connecte conducteurs et passagers via une expérience mobile fluide, tout en fournissant aux administrateurs des outils puissants pour gérer la plateforme.

## L'Écosystème
La solution se compose de deux éléments principaux :
1.  **Application Mobile (Flutter) :** Une application multiplateforme (iOS/Android) permettant aux utilisateurs de réserver des trajets et de communiquer.
2.  **Tableau de Bord Admin (React) :** Une interface web de contrôle pour la vérification des utilisateurs, la gestion des plaintes et l'analyse des données.

## Approche Technique

### 1. Application Mobile (Flutter)
-   **Gestion d'État :** Utilisation de **Provider** pour une gestion efficace de l'état de l'application.
-   **Backend & Auth :** Construit sur **Firebase** (Authentication, Firestore, Storage) pour la synchro temps réel et la sécurité.
-   **Cartes & Localisation :** Intégration du **SDK Google Maps** et **Geolocator** pour la sélection précise des points de rendez-vous.
-   **Communication :** Fonctionnalités de messagerie instantanée et notifications push via **Firebase Cloud Messaging**.
-   **Localisation :** Support multilingue complet (Français, Anglais, Arabe, Tamazight) via **Easy Localization**.

### 2. Tableau de Bord Admin (React)
-   **Framework :** Développé avec **React.js** pour une interface utilisateur réactive.
-   **Fonctionnalités de Gestion :** Interfaces dédiées pour valider les documents d'identité, traiter les signalements et visualiser les statistiques (recharts).

## Fonctionnalités Clés
-   🔐 **Authentification Sécurisée :** Vérification d'identité pour renforcer la confiance.
-   🚗 **Gestion des Trajets :** Flux intuitifs pour la publication, réservation et annulation.
-   💬 **Chat Intégré :** Communication directe entre conducteur et passager.
-   🔔 **Notifications Temps Réel :** Mises à jour instantanées sur les statuts de réservation.
-   ⭐ **Système d'Avis :** Feedback utilisateurs pour garantir la qualité du service.

## Visuels
![Bannière](https://github.com/Sofiane-Meziane/Bladiway/blob/main/assets/images/banniere%20readme%2001.png?raw=true)

### Interface Mobile
| Login / Inscription | Carte Interactive | Messagerie |
| :---: | :---: | :---: |
| ![Connexion](https://github.com/Sofiane-Meziane/Bladiway/blob/276df26704bd9350ee89477b731b26d119aff16e/assets/images/ecran%20inscription.png?raw=true) | ![Carte](https://github.com/Sofiane-Meziane/Bladiway/blob/23054e33c571047654dd7d3331bc6562825dcd2c/assets/images/carte01.png?raw=true) | ![Chat](https://github.com/Sofiane-Meziane/Bladiway/blob/23ad5a4dd6df459df89f77610ff0ae58b6febdd8/assets/images/messagerie.png?raw=true) |

| Accueil | Réservations | Paramètres |
| :---: | :---: | :---: |
| ![Accueil](https://github.com/Sofiane-Meziane/Bladiway/blob/8bf2a0c386b71506f19ee499303f23bcd561a851/assets/images/ecran%20d'accueil05.png?raw=true) | ![Réservations](https://github.com/Sofiane-Meziane/Bladiway/blob/1142e034f8c33dccf058925206fb511f18684df6/assets/images/reservations%20reademe.png?raw=true) | ![Paramètres](https://github.com/Sofiane-Meziane/Bladiway/blob/17ec91f586825f69398c471f7288f5c185f526ad/assets/images/parametres.png?raw=true) |