const http = require('http')
const port = 3001


users = [ {id: 1, name:'karan'}, {id:2, name: 'arjun'}]

const server = http.createServer(function(request, response){
    if(request.url == '/'){
        response.end('welcome to our website')
    }
    else  if(request.url == '/contact'){
        response.end('jayanagar 4th block, bangalore')
    }
    else if(request.url == '/about'){
        response.end('About Us Page')
    }
    else if(request.url =='/services'){
        response.setHeader('Content-Type', 'text/html')
        response.end(`
        <h2> Services we offer </h2>
            <ul>
                <li>Project Management</li>
                <li>Interior Design</li>
            </ul>
        `)
    }
    else if(request.url == '/users'){
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(users))
    }
    else {
        response.end('Page not found')
    }
})


server.listen(port, function(){
    console.log('server running... listening on port', port)
})