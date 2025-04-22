import dbConnect from '../../../lib/mongodb';
import Event from '../../../models/Event';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const event = await Event.findById(id);
        if (!event) {
          return res.status(404).json({ error: 'Event tidak ditemukan' });
        }
        res.status(200).json(event);
      } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data event' });
      }
      break;

    case 'PUT':
      try {
        const { title, description, date, location, image, url } = req.body;
        
        if (!title || !description || !date || !location || !image || !url) {
          return res.status(400).json({ 
            error: 'Semua field harus diisi',
            missing: Object.entries({ title, description, date, location, image, url })
              .filter(([_, value]) => !value)
              .map(([key]) => key)
          });
        }

        const updatedEvent = await Event.findByIdAndUpdate(
          id,
          { title, description, date, location, image, url },
          { new: true, runValidators: true }
        );

        if (!updatedEvent) {
          return res.status(404).json({ error: 'Event tidak ditemukan' });
        }

        res.status(200).json(updatedEvent);
      } catch (error) {
        if (error.name === 'ValidationError') {
          return res.status(400).json({ 
            error: 'Validation Error', 
            details: Object.values(error.errors).map(err => err.message)
          });
        }
        res.status(500).json({ error: 'Gagal memperbarui event' });
      }
      break;

    case 'DELETE':
      try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) {
          return res.status(404).json({ error: 'Event tidak ditemukan' });
        }
        res.status(200).json({ message: 'Event berhasil dihapus' });
      } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus event' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method tidak diizinkan' });
  }
} 