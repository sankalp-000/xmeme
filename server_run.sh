#!/bin/bash
cd xmeme
cd backend
sudo systemctl start mongod
npx kill-port 8081
nodemon app.js