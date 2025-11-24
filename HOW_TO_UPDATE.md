# How to Update Website Content

This guide explains how to update the Team, Alumni, and Events sections of the BVC IIT Kanpur website using Google Sheets.

## Overview

The website is designed to fetch data dynamically from Google Sheets published as CSV files. This means you can update the website content simply by editing a Google Sheet, without needing to touch the code.

## Prerequisites

- A Google Account to create and manage Google Sheets.
- Access to the `js/config.js` file in the website's code (only if you change the Google Sheet URL).

## Step-by-Step Guide

### 1. Prepare Your Google Sheets

You need three separate sheets (or tabs) for:
1.  **Alumni**
2.  **Team**
3.  **Events**

You can use a single Google Sheet with multiple tabs, or separate sheets.

### 2. Format Your Data

Ensure your sheets have the following columns (headers) in the first row. The order doesn't strictly matter, but the **names must match exactly** (case-insensitive).

#### A. Alumni Data
| Column Name | Description | Example |
| :--- | :--- | :--- |
| `name` | Name of the alumni | Anil Krishna Yadav |
| `pic` | Image URL or relative path | images/Alumini/anil_prabhu.jpg |
| `who1` | Designation/Role | Machine Learning engineer |
| `who2` | Company/Organization | Finarb consulting, New Town, Kolkata |
| `who3` | Degree & Year | BS, CHM (2018-22) |
| `about` | Short bio/description | Anil Krishna Yadav did his Btech... |
| `gradyr` | Year of Graduation (YYYY) | 2022 |

#### B. Team Data
| Column Name | Description | Example |
| :--- | :--- | :--- |
| `name` | Name of the team member | Jivana Rama Das |
| `pic` | Image URL or relative path | team_img/Jivnesh Sandhan.jpeg |
| `role` | Role/Designation | Ph.D (EE), Y18 |
| `department` | Department (Optional) | Electrical Engineering |
| `year` | Year (Optional) | Y18 |
| `email` | Email Address | jivnesh@iitk.ac.in |
| `phone` | Phone Number (Optional) | 1234567890 |

#### C. Events Data
| Column Name | Description | Example |
| :--- | :--- | :--- |
| `title` | Title of the event | Janmashtami |
| `description` | Description of the event | Janmashtami is the Annual Flagship Event... |
| `icon` | FontAwesome icon class | fa-leaf (or just 'leaf') |

### 3. Publish to Web

For the website to read the data, the sheet must be published as a CSV.

1.  Open your Google Sheet.
2.  Go to **File > Share > Publish to web**.
3.  In the dialog:
    *   Select the specific sheet (tab) you want to publish (e.g., "Team").
    *   Select **Comma-separated values (.csv)** as the format.
4.  Click **Publish**.
5.  Copy the generated link.

### 4. Update Configuration

If you have created a *new* sheet and generated a *new* link, you need to update the website configuration.

1.  Open the file `js/config.js` in the website code.
2.  Paste the new CSV link into the corresponding field:

```javascript
const CONFIG = {
    // Replace with your actual Google Sheet CSV URLs
    alumniUrl: "YOUR_ALUMNI_CSV_LINK_HERE",
    teamUrl: "YOUR_TEAM_CSV_LINK_HERE",
    eventsUrl: "YOUR_EVENTS_CSV_LINK_HERE"
};
```

### 5. Using Google Forms (Recommended)

To make data entry even easier, you can create a Google Form that populates these sheets.

1.  Create a Google Form with questions matching the column headers (Name, Image URL, Role, etc.).
2.  Link the Form to a Google Sheet (Responses sheet).
3.  Use the "Responses" sheet as your data source.
4.  **Note:** You might need to rename the columns in the linked sheet to match the required header names exactly (e.g., change "What is your name?" to "name").

## Image Handling

- **External URLs:** You can use direct links to images hosted elsewhere (e.g., Imgur, Google Drive direct links).
- **Local Images:** If you upload images to the website's `images/` folder, use the relative path (e.g., `images/team/my_photo.jpg`).

## Troubleshooting

- **Data not showing?**
    - Check if the Google Sheet is published.
    - Check if the CSV link in `js/config.js` is correct.
    - Ensure column headers match exactly.
- **Changes not reflecting?**
    - Google Sheets 'Publish to Web' might have a delay (up to 5 minutes).
    - Clear your browser cache.
