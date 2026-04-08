import Database, { type Database as DatabaseType } from 'better-sqlite3';
import path from 'node:path';
import fs from 'node:fs';

const dbPath = process.env.DB_PATH || './petstation.db';

// Ensure directory exists
const dbDir = path.dirname(path.resolve(dbPath));
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db: DatabaseType = new Database(dbPath);

// Enable WAL mode for better concurrency and performance
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

export function initializeDatabase(): void {
  // 1. Initial table creation
  db.exec(`
    -- Users table
    CREATE TABLE IF NOT EXISTS users (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      name        TEXT    NOT NULL,
      email       TEXT    NOT NULL UNIQUE,
      password    TEXT    NOT NULL,
      created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- User notification settings
    CREATE TABLE IF NOT EXISTS user_settings (
      id                    INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id               INTEGER NOT NULL UNIQUE,
      notify_vet_visits     INTEGER DEFAULT 1,
      notify_feeding        INTEGER DEFAULT 1,
      notify_weekly_report  INTEGER DEFAULT 0,
      notify_medication     INTEGER DEFAULT 1,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    -- Pets table
    CREATE TABLE IF NOT EXISTS pets (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id      INTEGER NOT NULL,
      name         TEXT    NOT NULL,
      species      TEXT    NOT NULL,
      breed        TEXT,
      gender       TEXT,
      color        TEXT,
      microchip    TEXT,
      bio          TEXT,
      image_url    TEXT,
      weight_kg    REAL,
      birthday     TEXT,
      health_score INTEGER DEFAULT 100,
      status       TEXT    DEFAULT 'Healthy',
      emoji        TEXT    DEFAULT '🐾',
      created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    -- Health records table
    CREATE TABLE IF NOT EXISTS health_records (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      pet_id       INTEGER NOT NULL,
      score        INTEGER NOT NULL,
      weight_kg    REAL,
      last_checkup TEXT,
      vaccinated   INTEGER DEFAULT 0,
      conditions   TEXT    DEFAULT '[]',
      recorded_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
    );

    -- Medications table
    CREATE TABLE IF NOT EXISTS medications (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      pet_id         INTEGER NOT NULL,
      name           TEXT    NOT NULL,
      frequency      TEXT    NOT NULL,
      next_dose_date TEXT,
      created_at     DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
    );

    -- Feeding schedules table
    CREATE TABLE IF NOT EXISTS feeding_schedules (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      pet_id        INTEGER NOT NULL,
      meal_type     TEXT    NOT NULL,
      time          TEXT    NOT NULL,
      food_name     TEXT    NOT NULL,
      amount_g      REAL    NOT NULL,
      status        TEXT    DEFAULT 'Upcoming',
      schedule_date TEXT    DEFAULT (date('now')),
      FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
    );

    -- Vets table
    CREATE TABLE IF NOT EXISTS vets (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id   INTEGER NOT NULL,
      name      TEXT    NOT NULL,
      clinic    TEXT,
      phone     TEXT,
      address   TEXT,
      specialty TEXT    DEFAULT 'General',
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    -- Vet records table
    CREATE TABLE IF NOT EXISTS vet_records (
      id       INTEGER PRIMARY KEY AUTOINCREMENT,
      pet_id   INTEGER NOT NULL,
      vet_id   INTEGER,
      vet_name TEXT,
      date     TEXT    NOT NULL,
      type     TEXT    NOT NULL,
      notes    TEXT,
      status   TEXT    DEFAULT 'Scheduled',
      FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE,
      FOREIGN KEY (vet_id) REFERENCES vets(id) ON DELETE SET NULL
    );

    -- Calendar events table
    CREATE TABLE IF NOT EXISTS calendar_events (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      pet_id     INTEGER,
      user_id    INTEGER NOT NULL,
      title      TEXT    NOT NULL,
      event_date TEXT    NOT NULL,
      type       TEXT    NOT NULL,
      icon_type  TEXT    DEFAULT 'calendar',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    -- Food alerts table
    CREATE TABLE IF NOT EXISTS food_alerts (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      pet_id      INTEGER NOT NULL,
      message     TEXT    NOT NULL,
      level       TEXT    DEFAULT 'info',
      is_resolved INTEGER DEFAULT 0,
      created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
    );
  `);

  // 2. Safe migrations for existing databases
  const migrations = [
    'ALTER TABLE pets ADD COLUMN gender TEXT',
    'ALTER TABLE pets ADD COLUMN color TEXT',
    'ALTER TABLE pets ADD COLUMN microchip TEXT',
    'ALTER TABLE pets ADD COLUMN bio TEXT',
    'ALTER TABLE pets ADD COLUMN image_url TEXT'
  ];

  for (const sql of migrations) {
    try {
      db.exec(sql);
    } catch (e: any) {
      // Ignore "duplicate column name" errors
      if (!e.message.includes('duplicate column name')) {
        console.warn(`⚠️ Migration failed: ${e.message}`);
      }
    }
  }

  console.log('✅ Database initialized successfully');
}

export default db;
