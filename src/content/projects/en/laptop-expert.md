---
title: "Laptop Expert AI"
date: "2026-02-04"
summary: "Streamlit app that classifies laptops by type and estimates market price from hardware specs."
tags: ["Machine Learning", "Classification", "Regression", "Streamlit", "Scikit-learn"]
dataset: "Laptop Prices (Kaggle, 2017-2018)"
repo: "https://github.com/Sofiane-Meziane/LaptopExpert"
demo: "https://laptopexpert-hw7h2dv9gv9otssw7e74hn.streamlit.app/"
featured: true
---

## Summary
Laptop price estimation and laptop type classification with a Streamlit web interface. The system predicts the laptop category and its market price from hardware specifications.

## Problem
Given CPU, GPU, RAM, storage, screen size, and other specs, predict the laptop type (Gaming, Ultrabook, Workstation, etc.) and estimate its price in euros.

## Approach
- Trained a Random Forest classifier for the TypeName prediction with SMOTE for class imbalance.
- Trained a Ridge regression model on log-price with 5-fold cross validation.
- Built an interactive Streamlit UI that loads the trained models and encoders.

## Results
- Classification accuracy: 84.31%.
- Price regression R2: about 0.86 on the test set.

## Visuals
Add screenshots of the Streamlit UI and model evaluation charts.