import express, { Router } from 'express'
import { signIn, signOut, signUp } from '../controllers/authController.js'

const authRoutes = Router()

authRoutes.route('/signin')
.post(signIn)

authRoutes.route('/signout')
.post(signOut)

authRoutes.route('/signup')
.post(signUp)

export default authRoutes