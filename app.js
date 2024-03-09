// Basic Library Import
const express = require("express");
const router = require("/src/routes/api");
const app = new express();
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");


// MongoDB Database connection
const URI = "mongodb://localhost:27017/task-manager";