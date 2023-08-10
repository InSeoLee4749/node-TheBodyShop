const express = require("express")
const path = require('path');
const nodeserver = express();
const PORT = process.env.PORT || 8003;   //8003 으로 연다.

nodeserver.get('/', (req,res)=>{
    res.send("나는 첫페이지의 응답에 따른 전달이다.")
})
nodeserver.get('/mypage', (req,res)=>{
    res.send("마이페이지")
})

nodeserver.use((req, res) =>{
    res.status(404).sendFile( path.join(__dirname, 'public/nopage.html'))   //페이지가 없을 경우, public의 nopage.html 로 연결해줘
})

nodeserver.listen(PORT, () =>{  //8003이 아닌 PORT로 변경
    console.log('8080으로 구동중')
})