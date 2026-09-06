# SARATHI Backend API

Base URL:

http://localhost:5000

## Companies

### Get all companies

GET /api/companies

### Create a company

POST /api/companies

Example body:

{
    "name": "TCS",
    "type": "service"
}

### Update a company

PUT /api/companies/:id

### Delete a company

DELETE /api/companies/:id