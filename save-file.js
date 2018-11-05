const fs = require('fs')

// Nome do Arquivo, Conteúdo , Saída

fs.writeFile(proccess.argv[2],proccess.argv[3],(error)=>{

    if(error) throw error

    console.log(`Arquivo ${proccess.argv[2]} foi salvo com sucesso.`)

})