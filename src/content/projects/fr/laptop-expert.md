---
title: "Laptop Expert AI"
date: "2026-02-04"
summary: "Application Streamlit qui classe les ordinateurs portables par type et estime leur prix à partir des caractéristiques matérielles."
tags: ["Machine Learning", "Classification", "Régression", "Streamlit", "Scikit-learn"]
dataset: "Laptop Prices (Kaggle, 2017-2018)"
repo: "https://github.com/Sofiane-Meziane/LaptopExpert"
demo: "https://laptopexpert-hw7h2dv9gv9otssw7e74hn.streamlit.app/"
featured: true
---

## Résumé
Estimation du prix et classification du type d'ordinateur portable via une interface web Streamlit. Le système prédit la catégorie et le prix à partir des spécifications matérielles.

## Problème
À partir du CPU, GPU, RAM, stockage, écran et autres specs, prédire le type (Gaming, Ultrabook, Workstation, etc.) et estimer le prix en euros.

## Approche
- Entraînement d'un classifieur Random Forest pour la prédiction du TypeName avec SMOTE pour l'équilibrage des classes.
- Entraînement d'un modèle Ridge sur le log-prix avec validation croisée 5-fold.
- Interface Streamlit interactive qui charge les modèles et encodeurs entraînés.

## Résultats
- Précision de classification : 84,31 %.
- Régression des prix R2 : environ 0,86 sur le test.

## Visuels
Ajoutez des captures d'écran de l'application Streamlit et des graphiques d'évaluation.