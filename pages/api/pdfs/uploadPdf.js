import path from 'path';
const fs = require('fs');
const formidable = require('formidable');

export const config = {
  api: {
    bodyParser: false
  }
};

const uploadPdf = (req, saveLocally) => {
  const options = {};
  if(saveLocally){
    options.uploadDir = path.join(process.cwd(),"/public/pdf");
    options.filename = (name, ext, path, form) => {
      return path.originalFilename;
    }
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if(err) reject(err);
      resolve({fields, files});
    });
  });
}


const handler = async (req, res) => {
  try {
    fs.readdir(path.join(process.cwd(), "/public/pdf" ));
  } catch (error) {
    fs.mkdir(path.join(process.cwd(), "/public/pdf" ))
  }
  if (req.method === 'POST') {
    await uploadPdf(req, true);
    res.json({done: "pdf added"});
  }
};

export default handler;