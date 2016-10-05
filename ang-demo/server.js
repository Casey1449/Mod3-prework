//IIFE
//uses the bound vars as arguments:

// ((word)=>{
//
// console.log(word);
//
// })
// (
//   "hello"
// );

((express, server, bodyParser, fs)=>{

  server.use(express.static('pub'));

  server.get('/', (req, res)=>{
    fs.readFile('./templates/home.html', (err, results)=>{
      res.send(results.toString());
    });
  });

  server.listen(8080, 'localhost', (err)=>{
    console.log(err || 'Server Online');
  });

})
(
  require('express'),
  require('express')(),
  require('body-parser'),
  require('fs')
);
