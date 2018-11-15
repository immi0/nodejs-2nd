// 모듈을 추출합니다.
var http = require('http');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    // 쿠키를 추출하고 분해합니다.
    if(request.headers.cookie) {
    	var cookie = request.headers.cookie;
    	    cookie = cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {
                key: element[0],
                value: element[1]
            };
    	});

        // Request 헤더의 쿠키 정보만 출력
        var content = '<h1>Cookies</h1>';
        content += '<h2>'+JSON.stringify(cookie)+'</h2>';
        // Request 헤더 전체 
        content += '<h1>Request headers</h1>';
        content += '<h2>'+JSON.stringify(request.headers)+'</h2>';
 
        response.end(content);
    // Request 헤더에 쿠키 정보가 없으면 쿠키 생성
    }
    else {		
    // 쿠키를 생성합니다.
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['name=RintIanTta', 'region=Seoul']
        });

        // GET 요청
        response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
