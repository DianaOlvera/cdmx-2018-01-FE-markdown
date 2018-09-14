//const exp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
//const string = /\[([^\]]*)\]/g
//let findUrl = ''
let urlArraysuccess= []
let urlArrayfail=[]
const fs = require('fs');
const fetch = require('node-fetch');

const Readme = (urlFile) => {
  return new Promise(function(resolve,reject){
    fs.readFile(urlFile, 'utf8', (err, data) => {
      if (err) {
        return reject (err)
      }
        resolve(data)     
        console.log(data)    
    })
  })
}

const findURL = (url,data)=>{
  return new Promise ((resolve,reject)=>{
const exp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
const string = /\[([^\]]*)\]/g;
const findUrl = data[i].match(exp)
const findStr = data[i].match(string)
const urlArray= []
findUrl.forEach(element => {
const request = findUrl[i] 
fetch(request).then((res)=> {
  let status = res.status;
  const extracttUrl = {
   Name: finds[i],
   Url: find[i],
   Status: status
  }
});
}

  
})
  }


  const validate =()=>{
    let find = findUrl.match(exp);// hace la busqueda de url
    //console.log(find)
    let finds = findUrl.match(string);// hace busqueda de titulo
    //console.log(finds)
    
    if(find){
     for(let i=0; i< find.length; i++){
       let request = find[i];
       fetch(request).then((res)=> {
         let status = res.status;
         const extracttUrl = {
          Name: finds[i],
          Url: find[i],
           Status: status
          }
          if(find){
          
         //console.log('Url exitosa: ' + ' ' + extracttUrl.Name +' '+ extracttUrl.Url + '  status: ' + extracttUrl.Status);
          urlArraysuccess.push(extracttUrl)
           console.log(urlArraysuccess)
       }else{
           //console.log('fail' + extracttUrl);
           urlArrayfail.push(extracttUrl)
           console.log(urlArrayfail)
          }         
        }).catch((err)=>{
          console.log(err.message);
        })
      }
    }

 }

Readme ('../README.md')
//.then(data)
// .catch

 module.exports={
   Readme,
   validate
 }

