import express from 'express'
import mongoose from "mongoose";
import UserModel from '../db/UserSchema'

mongoose.connect('mongodb+srv://Sarah:1234@cluster0.3rph3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const router = express.Router()

router.get('/', async (req, res, error) => {
    const user = await UserModel.find({})

    try {
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/user', async (req, res, err) => {

    const newUser = new UserModel(req.body)
    newUser.Name = req.body.Name
    newUser.Age = req.body.Age
    newUser.Email = req.body.Email

    try {
       await newUser.save()
       res.send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

router.put('/user/:id', async (req, res, data) => {

    try {
        await UserModel.findByIdAndUpdate(req.params.id, req.body)
        res.sendStatus(200).send()
    } catch (error) {
        res.status(500).send(error)
    }

})

router.delete('/user/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)

        if (!user) res.status(404).send('No item found')
        res.status(200).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router
