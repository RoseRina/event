import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // State formulir
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // 'berhasil' atau 'gagal'
  const [editingEvent, setEditingEvent] = useState(null); // State untuk event yang sedang diedit

  useEffect(() => {
    // Cek apakah pengguna sudah terautentikasi
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Gagal mengambil data event:', error);
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('https://freeimage.host/api/1/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setTitle(event.title);
    setDescription(event.description);
    setDate(new Date(event.date).toISOString().slice(0, 16)); // Format untuk input datetime-local
    setLocation(event.location);
    setUrl(event.url);
    setImage(event.image);
    setPreviewUrl(event.image);
    window.scrollTo(0, 0); // Scroll ke form di atas
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSubmitStatus('');
    
    try {
      let imageUrl = image;
      
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (!uploadResponse.ok) {
          throw new Error('Gagal mengupload gambar');
        }
        
        const uploadData = await uploadResponse.json();
        imageUrl = uploadData.url;
      }

      const response = await fetch(`/api/events/${editingEvent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          date,
          location,
          image: imageUrl,
          url
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Terjadi kesalahan saat memperbarui event');
      }

      // Reset form
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
      setImage('');
      setUrl('');
      setImageFile(null);
      setPreviewUrl('');
      setEditingEvent(null);
      // Refresh events list
      fetchEvents();
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error updating event:', error);
      setSubmitStatus('error');
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (editingEvent) {
      handleUpdate(e);
      return;
    }

    setSubmitStatus('');
    
    try {
      let imageUrl = image;
      
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        
        // Upload ke API endpoint kita sendiri
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (!uploadResponse.ok) {
          throw new Error('Gagal mengupload gambar');
        }
        
        const uploadData = await uploadResponse.json();
        imageUrl = uploadData.url;
      }

      if (!imageUrl && !imageFile) {
        throw new Error('Mohon masukkan URL gambar atau upload file gambar');
      }

      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          date,
          location,
          image: imageUrl,
          url
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Terjadi kesalahan saat menambahkan event');
      }

      // Reset form
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
      setImage('');
      setUrl('');
      setImageFile(null);
      setPreviewUrl('');
      // Refresh events list
      fetchEvents();
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error creating event:', error);
      setSubmitStatus('error');
      alert(error.message); // Menampilkan pesan error ke user
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchEvents();
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) {
    return <div>Memuat...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Dashboard Manajemen Event & Promo</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Formulir Tambah/Edit Event */}
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6">
          <h2 className="text-lg font-medium mb-4">
            {editingEvent ? 'Edit Event' : 'Tambah Event Baru'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Judul
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Deskripsi
              </label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal dan Waktu
              </label>
              <input
                type="datetime-local"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                lang="id-ID"
              />
              <p className="mt-1 text-sm text-gray-500">
                Format: DD/MM/YYYY JJ:MM (contoh: 16/04/2025 09:08)
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lokasi
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                URL Event
              </label>
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://contoh.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gambar Event
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full"
              />
              <p className="mt-2 text-sm text-gray-500">
                atau masukkan URL gambar:
              </p>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://contoh.com/gambar.jpg"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              {previewUrl && (
                <div className="mt-2">
                  <img src={previewUrl} alt="Pratinjau" className="max-h-40 rounded" />
                </div>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                {editingEvent ? 'Simpan Perubahan' : 'Tambah Event'}
              </button>
              {editingEvent && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingEvent(null);
                    setTitle('');
                    setDescription('');
                    setDate('');
                    setLocation('');
                    setImage('');
                    setUrl('');
                    setImageFile(null);
                    setPreviewUrl('');
                  }}
                  className="w-full mt-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Batal Edit
                </button>
              )}
            </div>
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {editingEvent ? 'Event berhasil diperbarui!' : 'Event berhasil ditambahkan!'}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {editingEvent ? 'Gagal memperbarui event.' : 'Gagal menambahkan event.'} Silakan coba lagi.
              </div>
            )}
          </form>
        </div>

        {/* Daftar Event */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-4">Daftar Event</h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event._id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.description}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleString('id-ID', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false
                        })}
                      </p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(event)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 