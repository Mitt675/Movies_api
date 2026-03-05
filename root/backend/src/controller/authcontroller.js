const { PrismaClient } = require('../../../generated/prisma')
const jsonwebToken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { data } = require('react-router-dom')
const db = new PrismaClient()



exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json('eamil and password both are required')

    }
    const existinguser = await db.user.findUnique({
      where: { email }
    })

    if (existinguser) {
      return res.status(400).json('user already exist')
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    const user = await db.user.create({
      data: {
        email, password: hashedPwd,
      }
    })

    return req.status(201).json({
      message: 'user created successfully',
      Userid: user.id
    })
  }
  catch (err) {
    return res.status(500).json(err)
  }

}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json('eamil and password both are required')

    }

    const isExistUser = await db.user.findUnique({
      where: { email }
    })
    if (!isExistUser) {
      return res.status(404).json("user doesnot  exist")
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(404).json('invalid password')
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "30d" })

    res.status(200).json({
      token, message: "login is successfull"
    })
  }


  catch (err) {
    return res.status(500).json(err.message)
  }
}
