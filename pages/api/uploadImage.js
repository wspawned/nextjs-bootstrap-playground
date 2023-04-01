import path from 'path';
const fs = require('fs');
const fsPromise = require('fs/promises');

const uploadImage = (req,res) => {
  // const formData = req.body;
  // const img = req.data.get("myImage");
  console.log(req)

}

const handler = async(req, res) => {
  if (req.method === 'POST') {
    // try {
    //   fsPromise.readdir(path.join(process.cwd() +  "/public", "/uploads" ));
    // } catch (error) {
    //   fsPromise.mkdir(path.join(process.cwd() +  "/public", "/uploads" ));
    // }
    uploadImage(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;