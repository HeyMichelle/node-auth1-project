const express = require('express');

const helmet = require("helmet")
const cors = require("cors")
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)

const userRouter = require("./users/user-router")
const db = require("../data/dbConfig"); // for storing

const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json());
server.use('/api/', userRouter);
server.use(session({
	resave: false, // avoid creating sessions that have no changed
	saveUninitialized: false, // to comply with GDPR laws
	secret: "Keep it secret, keep it safe", // ccryptographically sign the cookie
	store: new KnexSessionStore({ 
		knex: db,
		createtable: true,
	}) // stores cookie sessions to database to persist vs just being in memory
}))

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong, try again"
	})
})

module.exports = server;