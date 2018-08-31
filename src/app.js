// const fs = require('fs')
// const readReadme = (callBack) => {
//   fs.readFile('../README.md', 'utf8', (err, data) => {
//     if (err) {
//       console.log('Tienes un error')
//     } else {
//       callBack(data)
//     }
//   })
// }
// readReadme(callBack = (data) => {
//   console.log(data)
// })

// /*  const data = fs.readFileSync('./Readme.md', 'utf8')
// fs.watch('./', (eventType, fileName) => {
//   console.log('Tipo de evento ' + eventType)
//   if (fileName) {
//     console.log('En el archivo ' + fileName)
//   } else {
//     console.log('No tienes cambio en los archivos.')
//   }
// }) */

// const countLine = (err, data) => {
//   if (err) {
//     console.log('No tienes Readme.md')
//   } else {
//     let lines = data.split('\n').length
//     console.log('El archivo tiene:' + lines + ' lineas')
//   }
// }
// fs.readFile('../README.md', 'utf8', countLine)
// module.exports = {
//   countLine
// }

//let urlArray = []
let patron = new RegExp('^http[s]?://\w[\.\w]+$', 'i')
let findUrl = ''

const fs = require('fs')
const readReadme = (callBack) => {
  fs.readFile('../Readme.md', 'utf8', (err, data) => {
    if (err) {
      console.log('Tienes un error')
    } else {
      callBack(data)     
    }
    // console.log(urlArray)
  })
}
readReadme(callBack = (data) => {
   
  for (let i = 0; i < data.length; i++) {
    
      let total = data[i];
      findUrl += total;
      console.log(findUrl)
    }
    const validate =()=>{
      //console.log()
        let find = findUrl.match(patron);
        if (find){
        let req = find;
        }else{
          console.log('error no entra al arreglo');
        }
    }
    validate();
  })



