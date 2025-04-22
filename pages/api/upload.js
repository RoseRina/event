import multer from 'multer';
import { join } from 'path';
import { promises as fs } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: async function (req, file, cb) {
      const uploadDir = join(process.cwd(), 'public', 'uploads');
      try {
        await fs.access(uploadDir);
      } catch (error) {
        console.log('Creating uploads directory...');
        await fs.mkdir(uploadDir, { recursive: true });
      }
      console.log('Upload directory:', uploadDir);
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const filename = uniqueSuffix + '-' + file.originalname;
      console.log('Generated filename:', filename);
      cb(null, filename);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    console.log('Received file:', file.originalname, 'type:', file.mimetype);
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Hanya file gambar yang diperbolehkan!'), false);
    }
    cb(null, true);
  }
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        console.error('Middleware error:', result);
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Starting file upload...');
    await runMiddleware(req, res, upload.single('image'));
    
    if (!req.file) {
      console.error('No file received in request');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('File uploaded successfully:', req.file);
    
    // Return the URL of the uploaded file
    const fileUrl = `/uploads/${req.file.filename}`;
    console.log('Generated file URL:', fileUrl);
    
    res.status(200).json({ url: fileUrl });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      error: error.message,
      details: error.stack
    });
  }
} 