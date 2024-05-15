async function getData(){

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            reslove(455)
        },3500);
    })
}

async function main(){
    console.log("Loading Modules")

    console.log("Do SomeThing else")

    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("Process data")

    console.log("task 2")

}

main()