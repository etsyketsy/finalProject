# Laboratory Dashboard
## What is it?
Web app built for a team of research scientists at a biotech company to log, edit, and analyze data from each step of their experiments.


## Why?
With each stage of their experiments, different data needs to be logged and tracked. Also, each entry is broken out into multiple entries in the next stage resulting in a massive amount of data needing organization, tracking, and analysis.

This was the final project for my [Full Stack Web Development Bootcamp](https://propulsion.academy/full-stack) at Propulsion Academy built out for a Swiss biotech company.

## My contributions
I worked alongside 2 fellow students with the guidance of our instructors to build this app from scratch to the meet the company's needs. We assigned primary responsibilities to each team member, but also contributed to each other's sections (i.e. building out endpoints, writing actions for the frontend, etc.) as needed to complete the project in the 3 week timeline.

**I was primarily responsible for the following:**
- DevOps: Project setup(file structure, container setup, etc.), deployment, [admin features](https://github.com/etsyketsy/finalProject/blob/master/backend/project/project/api/admin.py)
- Backend: [Models](https://github.com/etsyketsy/finalProject/tree/master/backend/project/project/api/models), [serializers](https://github.com/etsyketsy/finalProject/tree/master/backend/project/project/api/Serializers), [endpoint requirements](https://github.com/etsyketsy/finalProject/blob/master/backend/README.md), and API/database maintenance
- Frontend: [Reporting options](https://github.com/etsyketsy/finalProject/tree/master/frontend/frontend/src/components/Plots) and [interface](https://github.com/etsyketsy/finalProject/tree/master/frontend/frontend/src/routes/PlotsPage), API calls


## How does it work?

After logging in, the user can view, edit, or create data entries with preloaded fields for each experiment step.

- Each column represents a stage of the experiment and different data collection requirements.
- In the columns, entries are referenced by their unique ids.
- Clicking on individual entries displays and allows editing of the full data of the entry.
- User can add new entries or edit existing data.

## Features
 - Search function for entries by ID
 - Filter function for all entries related to a parent entry
 - Data fields with automatic calculations based on entered data
 - Auto-generated unique ID based on lab reqiurements for new entries
 - Preloaded fields for data entries stemming off of existing data
 - Export function to download data in chosen format
 - Real-time filterable reporting interface showing key metrics
 - Comment field for data fields taht may require additional information
 - Full change history for compliance and reporting

 ## Next steps
 - Build out reporting page to include new report generation and advanced filtering
 - Refine export feature to export selected data
 - Implement tests for all endpoints
 - Fix datetime layout throughout

## Technology
- DevOps: Docker, Gitlab, CI/CD, Nginx
- Backend: Python, PostgreSQL Database, Django REST Framework [API](https://github.com/etsyketsy/finalProject/blob/master/backend/README.md)
- Frontend: HTML, CSS, JavaScript, React, Redux
- Plugins/Libraries: React-Plotly, React-Idle-Timer, Django-Import-Export, Django-Simple-History

## Database Schema/Models
![](assets/Models.png)

## Demo Screenshots
### Login page
![](assets/1Login.png)
### Dashboard for existing data
![](assets/2Dashboard.png)
### Creating a new entry
![](assets/3NewEntry.png)
### Filtering based on parent entry
![](assets/4Filtering.png)
### Viewing entry details
![](assets/5EntryDetail.png)
### Reporting Interface
![](assets/6Reporting.png)
