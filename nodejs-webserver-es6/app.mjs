import fs from 'fs'
import http from 'http'



const renderHTLM = (path, res) => {
  fs.readFile(path, (err, data)=>{
    if(err){
      res.writeHead(404)
      res.write('Error: file not found')
    } else{
      res.write(data)
    } 
    res.end();
  })
}

http.createServer((req, res)=>{
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  const url = req.url;
  switch(url){
    case '/about':
      renderHTLM('./about.html',res)
      break
    case '/contact':
      renderHTLM('./contact.html',res)
      break
    default:
      renderHTLM('./index.html',res)
      break
  }


  // console.log(url)
  // if (url === '/about'){
  //   renderHTLM('./about',res)
  // } else if( url ==='/contact'){
  //   renderHTLM('./contact.html', res)
  // } else {
  //   renderHTLM('./index.html', res)
  // }

})
.listen(3000, ()=>{
  console.log('Server is listening on port 3000..')
})  