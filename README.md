<p align="center">
  <img src="./src/assets/Logo.png" alt="SmartTent" />
</p>

A camping app built as a group project for the "Human‑Computer Interaction" course. This repository contains a React + TypeScript front end with UI components, pages for food ordering, maps, stakes setup, energy controls, weather, and more.

The concept behind this project is a Smart Tent that can be configured through an interactive UI.

This project is frontend-only for the course, so data is stored in the browser during development. Complementary documentation and PDFs are included in the repo.

The project as of 26/09/2025 will be submitted. In the future there will be updates to refactor and update rushed code.

## Table of contents
- Project overview
- Quick start
- Project structure
- Tech stack
- Styling & assets
- State management
- License
- Assets
- Special mentions

## Project overview
SmartTent is an interactive UI for campsite management and user services:

- Choose your tent's location on the map
- Configure your stakes
- Add protective covers for your tent
- Adjust tent lighting
- Order food from nearby services
- Manage the tent's energy consumption
- View the weather forecast
- Navigate the campsite with the map

All of this is presented with safety recommendations to improve the camping experience.

## Quick start

Prerequisites
- Node.js (LTS recommended)
- npm or yarn

Install
```bash
cd /path/to/smart-tent
npm install
# or
# yarn install
```

Run (development)
```bash
npm start
# or
# yarn start
```

Build
```bash
npm run build
```

## Project structure (high-level)
- src/
  - components/ — reusable UI components (Header, Modals, CoverMap, ReceiptModal, etc.)
  - Pages/ — feature pages and tabs (Food, Map, Stakes, Energy, Weather, etc.)
  - assets/ — images & icons
  - stores/ — MobX state management
  - App routing & entry files
- public/ — static files
- documentation/ - documentation of the project

## Tech stack
- **React + TypeScript**
- **Material UI (MUI)** components & icons
- **Less** for styles
- **MobX** for state management
- **Vite**

## State management
- MobX stores are used for global state (uiStore, dataStore).
- UIstore has all the data needed for the UI and dataStore contains all the user data.

## License
Code is available under the MIT License. 
Media assets are not covered by the MIT License — contact the asset authors for permission to reuse.

## Assets
- **Danai Charzaka(GitHub:nae64)**, Custom Pixel Art and Icons (Menu, Base background, Tents etc.)
- **ghostpixxells(itch.io)**, Food Pixel Art (Free Pixel Foods, Pixel Mart)
- **CyrexSTUDIOS(itch.io)**, UI sounds (Universal UI/Menu Soundpack)
- **sr.toasty(itch.io)**, Weather-Banner Pixel Art (UI assets pack)
- **Crusenho Agus Hennihuno(itch.io)**, Extra Icons Pixel Art (Icons Essential Pack)

## Special mentions
- Planning, Custom Pixel Art and Documentation: Danai Charzaka(GitHub: nae64)
- Code: Ioanna Andrianou(GitHub: TarmacLn)

If you plan to reuse any artwork, please contact the asset authors above for permission.