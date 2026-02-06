---
title: "Laptop Expert"
date: "2026-02-04"
summary: "Système de Machine Learning avancé capable de classifier les ordinateurs portables et d'estimer leur prix de marché avec précision via Random Forest et Ridge."
tags: ["Machine Learning", "Random Forest", "Régression Ridge", "Streamlit", "Feature Engineering", "Python"]
dataset: "Laptop Prices (Kaggle)"
repo: "https://github.com/Sofiane-Meziane/LaptopExpert"
demo: "https://laptopexpert-hw7h2dv9gv9otssw7e74hn.streamlit.app/"
featured: true
---

## Vue d'ensemble
Laptop Expert est une application de Machine Learning à double fonction conçue pour aider les utilisateurs à identifier la gamme et la valeur des ordinateurs portables. Elle combine un moteur de classification pour déterminer la catégorie (Gaming, Ultrabook, Workstation, etc.) et un moteur de régression pour estimer le prix du marché.

## Le Défi
Face à la diversité des configurations sur le marché, il est difficile d'évaluer le juste prix ou la catégorie exacte d'un appareil. L'objectif était de construire un système capable de :
1.  **Classifier** un laptop dans son segment de marché correct.
2.  **Estimer** son prix équitable (€) en fonction de ses composants.

## Approche Technique

### 1. Analyse et Ingénierie des Données
-   **Exploration (EDA) :** Analyse des distributions (Log-Normale pour le prix) et corrélations avec **Seaborn** et **Matplotlib**.
-   **Feature Engineering :** Création de variables comme le **PPI (Pixels Per Inch)** pour mieux capturer la valeur des écrans.
-   **Prétraitement :** Utilisation de **OneHotEncoder** pour les variables catégorielles et **StandardScaler** pour la normalisation.

### 2. Modèles de Machine Learning
-   **Classification (Type d'ordinateur) :**
    -   Gestion du déséquilibre des classes via **SMOTE (Synthetic Minority Over-sampling Technique)**.
    -   Utilisation d'un **Random Forest Classifier** qui a surpassé KNN pour capturer les relations hardware complexes.
    -   **Performance :** Précision (Accuracy) de **84,31 %**.

-   **Régression (Estimation du Prix) :**
    -   Transformation logarithmique de la variable cible (Prix) pour normaliser la distribution.
    -   Application d'une **Régression Ridge (Régularisation L2)** pour gérer la multicollinéarité entre les composants.
    -   Optimisation des hyperparamètres via **GridSearchCV** (Validation croisée à 5 plis).
    -   **Performance :** Score **R² de ~0,86** avec une Erreur Absolue Moyenne (MAE) d'environ 199 €.

### 3. Déploiement
-   Développement d'une interface web interactive avec **Streamlit**.
-   Intégration des pipelines de prédiction pour une inférence en temps réel.

## Résultats Clés
-   **Précision de 84,31 %** en classification, distinguant efficacement les catégories niches comme les Workstations.
-   **Score R² de 0,86** en prédiction de prix, offrant une estimation fiable.