import path from 'path';
const fs = require('fs');

const readImage = (req,res) => {
  const fileName = req.query.name;
  const filePath = path.join(process.cwd() + `/public/images/`, fileName);
  const image = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'image/png');
  res.end(image);
  // res.status(200).json({ message: 'success' });
}

const handler = async(req, res) => {
  if (req.method === 'GET') {
    readImage(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;