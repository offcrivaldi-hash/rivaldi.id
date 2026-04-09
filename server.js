const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Setup multer untuk upload file
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB max
});

// Create uploads directory if not exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Initialize SQLite Database
const db = new sqlite3.Database('stories.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeDB();
  }
});

function initializeDB() {
  db.run(`CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS series (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    cover_image TEXT,
    status TEXT DEFAULT 'ongoing',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(author_id) REFERENCES authors(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    series_id INTEGER NOT NULL,
    chapter_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    views INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(series_id) REFERENCES series(id)
  )`);
}

// ============== AUTH ROUTES ==============
app.post('/api/auth/register', (req, res) => {
  const { username, password, email } = req.body;
  
  db.run(
    'INSERT INTO authors (username, password, email) VALUES (?, ?, ?)',
    [username, password, email],
    function(err) {
      if (err) {
        return res.status(400).json({ error: 'Username sudah terdaftar' });
      }
      res.json({ message: 'Registrasi berhasil', authorId: this.lastID });
    }
  );
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  db.get(
    'SELECT * FROM authors WHERE username = ? AND password = ?',
    [username, password],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(401).json({ error: 'Username atau password salah' });
      }
      res.json({ message: 'Login berhasil', author: row });
    }
  );
});

// ============== SERIES ROUTES ==============
app.post('/api/series', (req, res) => {
  const { author_id, title, description, category } = req.body;
  
  db.run(
    'INSERT INTO series (author_id, title, description, category) VALUES (?, ?, ?, ?)',
    [author_id, title, description, category],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: 'Series dibuat', seriesId: this.lastID });
    }
  );
});

app.get('/api/series/:author_id', (req, res) => {
  const { author_id } = req.params;
  
  db.all(
    'SELECT * FROM series WHERE author_id = ? ORDER BY created_at DESC',
    [author_id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
});

app.get('/api/series-detail/:id', (req, res) => {
  const { id } = req.params;
  
  db.get(
    'SELECT * FROM series WHERE id = ?',
    [id],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(row);
    }
  );
});

// ============== CHAPTERS ROUTES ==============
app.post('/api/chapters', (req, res) => {
  const { series_id, chapter_number, title, content } = req.body;
  
  db.run(
    'INSERT INTO chapters (series_id, chapter_number, title, content) VALUES (?, ?, ?, ?)',
    [series_id, chapter_number, title, content],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: 'Chapter ditambahkan', chapterId: this.lastID });
    }
  );
});

app.get('/api/chapters/:series_id', (req, res) => {
  const { series_id } = req.params;
  
  db.all(
    'SELECT * FROM chapters WHERE series_id = ? ORDER BY chapter_number ASC',
    [series_id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
});

app.get('/api/chapter/:id', (req, res) => {
  const { id } = req.params;
  
  db.get(
    'SELECT c.*, s.title as series_title FROM chapters c JOIN series s ON c.series_id = s.id WHERE c.id = ?',
    [id],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Increment views
      db.run('UPDATE chapters SET views = views + 1 WHERE id = ?', [id]);
      res.json(row);
    }
  );
});

app.put('/api/chapters/:id', (req, res) => {
  const { id } = req.params;
  const { chapter_number, title, content } = req.body;
  
  db.run(
    'UPDATE chapters SET chapter_number = ?, title = ?, content = ? WHERE id = ?',
    [chapter_number, title, content, id],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: 'Chapter diperbarui' });
    }
  );
});

app.delete('/api/chapters/:id', (req, res) => {
  const { id } = req.params;
  
  db.run(
    'DELETE FROM chapters WHERE id = ?',
    [id],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: 'Chapter dihapus' });
    }
  );
});

// ============== PUBLIC ROUTES ==============
app.get('/api/public/all-series', (req, res) => {
  db.all(
    'SELECT * FROM series ORDER BY created_at DESC LIMIT 100',
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
});

app.get('/api/public/series/:id/chapters', (req, res) => {
  const { id } = req.params;
  
  db.all(
    'SELECT * FROM chapters WHERE series_id = ? ORDER BY chapter_number ASC',
    [id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Dashboard di http://localhost:${PORT}/admin.html`);
});
