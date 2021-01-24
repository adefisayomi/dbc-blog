// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from 'firebase-admin'

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: process.env.CONFIG })
}
