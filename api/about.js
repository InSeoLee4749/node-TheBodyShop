const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('about.js라는 소스이며 난 주소창에 관련된 작업을 못해')
})

module.exports = router