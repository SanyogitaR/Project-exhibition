require('dotenv').config();
const dotenv = require('dotenv');
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const mysql = require('mysql2');


const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bhavik@123',
  database: 'project1_database'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL Database!');
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Received upload request.');
  console.log('Request Body:', req.body);
  console.log('File:', req.file);

  const file = req.file;
  if (!file) {
    console.log('No file uploaded.');
    return res.status(400).send('No file uploaded.');
  }

  const stream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
    if (error) {
      console.error('Cloudinary Upload Error:', error);
      return res.status(500).send(`Error uploading image to Cloudinary: ${error.message}`);
    }

    const imageUrl = result.secure_url;
    const product_id = req.body.product_id;
    console.log('Image URL:', imageUrl, 'Product ID:', product_id);

    const query = 'INSERT INTO ProductImages (product_id, image_url) VALUES (?, ?)';

    db.query(query, [product_id, imageUrl], (err, result) => {
      if (err) {
        console.error('MySQL Error:', err);
        return res.status(500).send(`Error saving image URL to database: ${err.message}`);
      }
      res.send({ imageUrl: imageUrl });
    });
  });

  stream.end(file.buffer);
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
