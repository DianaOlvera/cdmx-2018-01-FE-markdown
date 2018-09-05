

//let urlArray = []
let exp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
let findUrl = ''
let urlArray= []

const fs = require('fs');

const Readme = (callBack) => {
  fs.readFile('../Readme.md', 'utf8', (err, data) => {
    if (err) {
      console.log('Tienes un error')
    } else {
      callBack(data)     
    }
  })
}
Readme(callBack = (data) => {
  console.log(data)
  for (let i = 0; i < data.length; i++) {
      let total = data[i];
      findUrl += total;
     // console.log(findUrl)
    }
    
  

  

  const validate =()=>{
    let find = findUrl.match(exp);// hace la busqueda
    //console.log(find)
    if (find){
    urlArray.push(find);
   console.log(urlArray)
    }else{
     // console.log('error, verifica');
    }
}
validate();
});