const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
  /**
   * HTTP 헤더 전송
   * HTTP Status: 200
   * Content Type: text/plain
   */
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    /**
     * response body 설정
     */
    response.end('Hello World\n');

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');


const data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('blocking example');


/**
 * Node 어플리케이션 비동기식 함수에서 첫번째 매개변수 error, 마지막 매개변수로는 callback
 * callback 함수를 사용하여 프로그램 흐름 끊키지 않고, nonBlocking 코드 사용하는 서버가 더 많은 양의 요청을 빠르게 처리 가능
 */
fs.readFile('input.txt', function (err, data) {
  if (err) { return console.error(err); }

  console.log(data.toString());
});

console.log('nonBlocking example')