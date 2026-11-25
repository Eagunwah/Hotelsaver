# HotelSaver — Automated End-to-End (E2E) Testing
Automated end-to-end UI test suite written with **Cypress** and **JavaScript** for the **HotelSaver** hotel booking prototype (`https://manzez.wixsite.com/hotelsaver-1`).

## Overview
This repository contains automated browser tests that verify core search and booking interactions on the HotelSaver web application.

### Test Coverage (`Webelements..cy.js`)
* **Page Load & Title Verification:** Navigates to the HotelSaver homepage and asserts that the page title renders correctly (`Home | Hotelsaver 1`).
* **Destination Search Autocomplete:** Enters `"London"` into the destination search field and selects `"London, UK"` from the autocomplete dropdown.
* **Check-In & Check-Out Date Selection:** Interacts with the custom date-picker widgets to select check-in and check-out dates.
* **Guest Selection Dropdown:** Handles dynamic DOM dropdown elements and keyboard/click triggers to select the number of guests (`4`) and asserts the selected state.

## Tech Stack
* **Test Framework:** Cypress
* **Language:** JavaScript (ES6)

## How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/<your-repo-name>.git
   cd <your-repo-name>
