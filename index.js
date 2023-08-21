const express = require("express")
const path = require('path');
//path : 주소창을 읽어서 변수를 빼오기, join메서드 이용해서 페이지정보넘겨주기
const nodeserver = express(); //엔트리포인트만 실행
const PORT = process.env.PORT || 8003;   //8003 으로 연다.

//외부 라우터 호출하기
const about = require('./api/about')

nodeserver.get('/', (req,res)=>{
    res.send("나는 첫페이지의 응답에 따른 전달이다.")
})
nodeserver.get('/mypage', (req,res)=>{
    res.send("마이페이지")
})





// 404 페이지
nodeserver.use((req, res) =>{
    res.status(404).sendFile( path.join(__dirname, 'public/nopage.html'))   
    //주소에 오타대응 페이지전달
    //페이지가 없을 경우, public의 nopage.html 로 연결해줘, dirname=지정된값, 주소뒤에 다른경로 적으면 404연결
})

nodeserver.listen(PORT, () =>{  //8003이 아닌 PORT로 변경
    console.log(`localhost:${PORT}로 확인하세요.`)
}) 