const express = require('express');
const router = express.Router();

const HomeRouter = require('./index');

router.use('/Index', HomeRouter); // 특정 요청에 설정한 미들웨어

module.exports = router; // 이 파일을 모듈러로써 사용하기 위해 exports