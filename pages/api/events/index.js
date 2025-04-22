import dbConnect from '../../../lib/mongodb';
import Event from '../../../models/Event';

export default async function handler(req, res) {
  try {
    await dbConnect();

    switch (req.method) {
      case 'GET':
        try {
          const events = await Event.find({}).sort({ date: -1 });
          res.status(200).json(events);
        } catch (error) {
          console.error('Error fetching events:', error);
          res.status(500).json({ error: 'Error fetching events: ' + error.message });
        }
        break;

      case 'POST':
        try {
          // Validasi input
          const { title, description, date, location, image, url } = req.body;
          
          if (!title || !description || !date || !location || !image || !url) {
            return res.status(400).json({ 
              error: 'Semua field harus diisi',
              missing: Object.entries({ title, description, date, location, image, url })
                .filter(([_, value]) => !value)
                .map(([key]) => key)
            });
          }

          const event = await Event.create(req.body);
          res.status(201).json(event);
        } catch (error) {
          console.error('Error creating event:', error);
          if (error.name === 'ValidationError') {
            return res.status(400).json({ 
              error: 'Validation Error', 
              details: Object.values(error.errors).map(err => err.message)
            });
          }
          res.status(500).json({ error: 'Error creating event: ' + error.message });
        }
        break;

      default:
        res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Handler Error:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
} 