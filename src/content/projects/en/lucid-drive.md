---
title: "LucidDrive"
date: "2026-02-03"
summary: "Driver vigilance monitoring system using webcam vision and fuzzy logic to detect fatigue."
tags: ["Computer Vision", "Fuzzy Logic", "OpenCV", "MediaPipe", "Python"]
repo: "https://github.com/Sofiane-Meziane/LucidDrive"
featured: false
---

## Summary
Real-time driver vigilance monitoring with a webcam. The system measures eye openness and blink behavior, then uses fuzzy logic to assess fatigue and display recommendations.

## Problem
Reduce fatigue-related driving risk by detecting reduced vigilance and guiding the driver to take a break.

## Approach
- Captures video with OpenCV and detects facial landmarks via MediaPipe.
- Computes EAR (eye aspect ratio), blink frequency, and slow blinks.
- Applies fuzzy inference rules to output a 0-100 vigilance score with clear messages.

## Results
The system provides four vigilance states with recommended actions, from normal driving to immediate stop.

## Visuals
Add a short demo clip or a screenshot of the live dashboard.