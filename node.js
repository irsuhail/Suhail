


console.log("Welcome to Node.js!");


const currentDate = new Date();


const formattedDate = currentDate.toISOString().replace('T', ' ').slice(0, 19);


console.log(formattedDate);
