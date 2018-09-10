let exp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
let string = /\[([^\]]*)\]/g
let findUrl = ''
let findString = ''
let urlArray= []
const fs = require('fs');
const fetch = require('node-fetch');

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
  for (let i = 0; i < data.length; i++) {
      let total = data[i];
      findUrl += total;
      
    }
  validate();
  });

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
         if(status == 200){
          
        console.log('Url exitosa: ' + ' ' + extracttUrl.Name +' '+ extracttUrl.Url + '  status: ' + extracttUrl.Status);
         }else{
          //console.log('fail' + extracttUrl);
         }         
       }).catch((err)=>{
         console.log(err.message);
       })
     }
   }
//urlArray.push(find);
//console.log(urlArray)
}




// const urlFinder = () => {
//   findUrl = dataIterada.match(patron)
//   findName = dataIterada.match(urlName)
//   // console.log(findName)
//   if (findUrl) {
//     for (let i = 0; i < findUrl.length; i++) {
//       let request = findUrl[i]
//       fetch(request).then((response) => {
//         // console.log(response)
//         let status = response.status
//         if (status == 200) {
//           console.log('ok')
//         } else {
//           console.log('Failed')
//           const objectUrl = {
//             Name: findName,
//             Url: findUrl,
//             Status: status
//           }
//           console.log(objectUrl)
//         }
//       })

//         .catch((error) => {
//           console.log(error.message)
//         })
//     }
//   }
// }

module.exports={
  Readme,
  validate
}