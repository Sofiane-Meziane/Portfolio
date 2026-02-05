---
title: "LucidDrive"
date: "2026-02-03"
summary: "Système de surveillance de vigilance conducteur via webcam et logique floue pour détecter la fatigue."
tags: ["Vision par ordinateur", "Logique floue", "OpenCV", "MediaPipe", "Python"]
repo: "https://github.com/Sofiane-Meziane/LucidDrive"
featured: false
---

## Résumé
Surveillance en temps réel de la vigilance du conducteur via webcam. Le système mesure l'ouverture des yeux et le comportement de clignement, puis utilise la logique floue pour évaluer la fatigue et afficher des recommandations.

## Problème
Réduire le risque d'accidents liés à la fatigue en détectant une baisse de vigilance et en incitant à la pause.

## Approche
- Capture vidéo avec OpenCV et détection des points faciaux via MediaPipe.
- Calcul de l'EAR (eye aspect ratio), de la fréquence de clignement et des clignements lents.
- Application de règles d'inférence floue pour produire un score de vigilance (0-100) et un message clair.

## Résultats
Le système propose quatre états de vigilance avec actions recommandées, de conduite normale à arrêt immédiat.

## Visuels
Ajoutez une courte démo vidéo ou une capture d'écran du tableau de bord.