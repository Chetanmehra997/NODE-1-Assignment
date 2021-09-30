const  fs = require("fs")
const yargs = require("yargs")


yargs.command({
    command:"create",
    describe:"creating a new file",
    handler: function(argv){
        fs.writeFileSync("node.txt", `name:${argv.name}`)
    }
})



yargs.command({
    command:"append",
    describe:"append content to file",
    handler: function(argv){
        fs.appendFileSync('./node.txt',`desc:${argv.decs}`)
    }
})


yargs.command({
    command:"read",
    describe:"read file",
    handler:function(argv){

        fs.readFile('./node.txt','utf8',(err,data)=>{
            if(err){
                console.error(err)
                return
            }
            console.log(data)
        })
    }
})

yargs.parse()