
const mongoose = require('mongoose');

const connection = async () =>
{
  try
  {
    const result =  await mongoose.connect(process.env.db_url)
    console.log("Connection successfull ")
    
  }
  catch(error)
  {
    console.log("Some error occured");
  }
  
}
module.exports = connection;