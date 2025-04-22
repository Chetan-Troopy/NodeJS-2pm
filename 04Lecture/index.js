console.log("We are Learning fs Module");




const { log } = require("console");
const fs = require("fs");




// Asynchronous  


// Create a File 

    // fs.writeFile("./data.txt", "We are Learning Node Js.", (err)=>{
    //     console.log(err);
    
    // });
    
 // Read a File 

    // fs.readFile("./data.txt", "utf8", (err, res) =>{
    //     if (err) {
    //         console.log("Error", err);
            
    //     }
    //     else{
    //         console.log(res);
            
    //     }
    // })


// Synchronous  

// Create a File 


    // const arr = ["roshan", "dashrath", "hiren", "dharmik" ]

    // for (let i = 0; i < arr.length; i++) {
    //     fs.writeFileSync(`./${arr[i]}.txt`, `File ${arr[i]}`);
        
    // }
  

    // fs.writeFileSync("./data.txt", "We are Learning Node Js.");
    // fs.writeFileSync("./data.txt", "We are Learning Node Js.");
    // fs.writeFileSync("./data.txt", "We are Learning Node Js.");
    

 // Read a File 


    // const res = fs.readFileSync("./data.txt", "utf-8");

    // console.log(res);
 
    
// Delete a file 

    // fs.unlinkSync("./dharmik.txt");



// Update/append a File

    fs.appendFileSync("./dashrath.txt", "We are Updating Our Existing File.\n");



    // https://nodejs.org/api/fs.html