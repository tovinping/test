import mongoose from 'mongoose'
import './user'
import password from '../password.json'
mongoose.connect('mongodb://localhost/test')
// mongoose.connect(password.cloudMongo.url)