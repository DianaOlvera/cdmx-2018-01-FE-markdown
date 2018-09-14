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

// const findURL = (url,data)=>{
//   return new Promise ((resolve,reject)=>{
// const exp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
// const string = /\[([^\]]*)\]/g;
// const findUrl = data[i].match(exp)
// const findStr = data[i].match(string)
// const urlArray= []
// findUrl.forEach(element => {
// const request = findUrl[i] 
// fetch(request).then((res)=> {
//   let status = res.status;
//   const extracttUrl = {
//    Name: finds[i],
//    Url: find[i],
//    Status: status
//   }
// });
// }

  
// })
//   }


//   const validate =()=>{
//     let find = findUrl.match(exp);// hace la busqueda de url
//     //console.log(find)
//     let finds = findUrl.match(string);// hace busqueda de titulo
//     //console.log(finds)
    
//     if(find){
//      for(let i=0; i< find.length; i++){
//        let request = find[i];
//        fetch(request).then((res)=> {
//          let status = res.status;
//          const extracttUrl = {
//           Name: finds[i],
//           Url: find[i],
//           Status: status
//          }
//          if(find){
          
//         //console.log('Url exitosa: ' + ' ' + extracttUrl.Name +' '+ extracttUrl.Url + '  status: ' + extracttUrl.Status);
//          urlArraysuccess.push(extracttUrl)
//          console.log(urlArraysuccess)
//       }else{
//           //console.log('fail' + extracttUrl);
//           urlArrayfail.push(extracttUrl)
//           console.log(urlArrayfail)
//          }         
//        }).catch((err)=>{
//          console.log(err.message);
//        })
//      }
//    }

// }

Readme ('../README.md')
//.then(data)
// .catch


// module.exports={
//   Readme,
//   validate
// }

/////////////////////////////////

// const fs = require('fs')
// const fetch = require('node-fetch')
// const path = require('path')
// //const patron = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))/gim
// //const urlName = /\[([^\]]*)\]/gim
// // const urlArray = []
// // let dataIterada = ''
// // let findUrl = ' '
// // const urlFinder = ''
// // const readMarkDown = ''
// // let findName = ''

// function readMarkDown (filePath) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(filePath, 'utf8', function (err, data) {
//       if (err) {
//         return reject(err)
//       }
//       // console.log(data)
//       resolve(data)
//     })
//   })
// }
// function urlFinder (url, data) {
//   return new Promise(function (resolve, reject) {
//     fs.writeFile(url, data, function (err) {
//       if (err) {
//         return reject(err)
//       }else{

//       }
      
//       console.log(url)
//       resolve(url)
//     })
//   })
// }

// readMarkDown('./Readme.md')
//   .then(data => urlFinder('./cantidad.txt', data.length))
//   .catch(err => console.log('Hubo un error' + err))
////////////////////////////////////////////////////////////////////////////////////////////////////

// const exp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
// const string = /\[([^\]]*)\]/g
// let findUrl = ''
// let urlArraysuccess= []
// let urlArrayfail=[]
// const fs = require('fs');
// const fetch = require('node-fetch');

// const Readme = (callBack) => {
//   fs.readFile('../Readme.md', 'utf8', (err, data) => {
//     if (err) {
//       console.log('Tienes un error')
//     } else {
//       callBack(data)     
//     }
//   })
// }
// Readme(callBack = (data) => {
//   for (let i = 0; i < data.length; i++) {
//       let total = data[i];
//       findUrl += total;
      
//     }
//   validate();
//   });

//   const validate =()=>{
//     let find = findUrl.match(exp);// hace la busqueda de url
//     //console.log(find)
//     let finds = findUrl.match(string);// hace busqueda de titulo
//     //console.log(finds)
    
//     if(find){
//      for(let i=0; i< find.length; i++){
//        let request = find[i];
//        fetch(request).then((res)=> {
//          let status = res.status;
//          const extracttUrl = {
//           Name: finds[i],
//           Url: find[i],
//           Status: status
//          }
//          if(find){
          
//         //console.log('Url exitosa: ' + ' ' + extracttUrl.Name +' '+ extracttUrl.Url + '  status: ' + extracttUrl.Status);
//          urlArraysuccess.push(extracttUrl)
//          console.log(urlArraysuccess)
//       }else{
//           //console.log('fail' + extracttUrl);
//           urlArrayfail.push(extracttUrl)
//           console.log(urlArrayfail)
//          }         
//        }).catch((err)=>{
//          console.log(err.message);
//        })
//      }
//    }

// }


// module.exports={
//   Readme,
//   validate
// }