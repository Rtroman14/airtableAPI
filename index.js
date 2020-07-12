require("dotenv").config();

const readRecord = require("./src/readRecord");
const createRecord = require("./src/createRecord");
const updateRecord = require("./src/updateRecord");
const deleteRecord = require("./src/deleteRecord");
const Airtable = require("airtable");

// const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base("appuT8iZkPUprzCaI");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base("appuT8iZkPUprzCaI");

// CREATE RECORD
const record = {
    Name: "Airtable API Test",
    Project: "Summa Media",
    "Due Date": "2020-07-14",
    Complete: true,
};

// createRecord(base, "Projects", record);

// READ RECORD
readRecord(base, "Projects", 3);

// UPDATE RECORD
const updatedRecord = {
    Name: "Airtable API Test",
    Project: "Summa Media",
    "Due Date": "2020-07-14",
    Complete: true,
};

// updateRecord(base, "recIKMKwJvQU6hS92", updatedRecord);

// DELETE RECORD
// deleteRecord(base, "recuEutFz7d3g2WkE");
