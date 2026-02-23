import express from 'express'
import jwt from 'jsonwebtoken'
const app=express()
const SECRET="lpu"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzMzg5MywiZXhwIjoxNzcxODM3NDkzfQ.Oi1A1yn5MqkQw_kf-aqauyE_BJCT4DAWgUjI6-rUDaQ"
const user=jwt.verify(token,SECRET)
console.log(user)