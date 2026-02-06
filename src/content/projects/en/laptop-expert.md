---
title: "Laptop Expert"
date: "2026-02-04"
summary: "Advanced Machine Learning system capable of classifying laptops and estimating market prices with high precision using Random Forest and Ridge Regression."
tags: ["Machine Learning", "Random Forest", "Ridge Regression", "Streamlit", "Feature Engineering", "Python"]
dataset: "Laptop Prices (Kaggle)"
repo: "https://github.com/Sofiane-Meziane/LaptopExpert"
demo: "https://laptopexpert-hw7h2dv9gv9otssw7e74hn.streamlit.app/"
featured: true
---

## Project Overview
Laptop Expert is a dual-purpose Machine Learning application designed to assist users in understanding laptop tiers and market value. It combines a classification engine to identify laptop categories (e.g., Gaming, Ultrabook, Workstation) and a regression engine to predict market prices based on hardware specifications.

## The Challenge
The laptop market is saturated with varying configurations, making it difficult for consumers to assess fair value or identify the right category for their needs. The goal was to build a system that could:
1.  **Classify** a laptop into its correct market segment based on specs.
2.  **Estimate** the fair market price ($) given a set of features.

## Technical Approach

### 1. Data Engineering & Analysis
-   **Exploratory Data Analysis (EDA):** Analyzed distributions (Log-Normal price distribution) and correlations using **Seaborn** and **Matplotlib**.
-   **Feature Engineering:** Created new features like **PPI (Pixels Per Inch)** from screen resolution and size to better capture display quality value.
-   **Preprocessing:** Implemented **OneHotEncoding** for categorical variables and **StandardScaler** for numerical normalization.

### 2. Machine Learning Models
-   **Classification (Laptop Type):**
    -   Handled significant class imbalance using **SMOTE (Synthetic Minority Over-sampling Technique)**.
    -   Trained a **Random Forest Classifier** which outperformed KNN, demonstrating superior ability to handle non-linear relationships between hardware specs and categories.
    -   **Performance:** Achieved an **Accuracy of 84.31%**.

-   **Regression (Price Estimation):**
    -   Modeled the target variable using **Log-transformation** to normalize price distribution.
    -   Utilized **Ridge Regression (L2 Regularization)** to handle multicollinearity among hardware features.
    -   Optimized hyperparameters (Alpha) via **GridSearchCV** with 5-fold cross-validation.
    -   **Performance:** Achieved an **R² Score of ~0.86** and a Mean Absolute Error (MAE) of ~199€.

### 3. Deployment
-   Developed an interactive web interface using **Streamlit**.
-   Integrated the trained models and preprocessors for real-time inference.

## Key Results
-   **84.3% Classification Accuracy**: Effectively distinguishes between specialized categories like Workstations and standard Notebooks.
-   **0.86 R² Score**: providing reliable price estimates within a competitive error margin.