// Shared types used across the backend

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date | string;
  updated_at: Date | string;
}

export interface UserPublic {
  id: number;
  name: string;
  email: string;
  created_at: Date | string;
}

export interface JwtPayload {
  id: number;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}

export interface Pet {
  id: number;
  user_id: number;
  name: string;
  species: string;
  breed: string | null;
  gender: string | null;
  color: string | null;
  microchip: string | null;
  bio: string | null;
  image_url: string | null;
  weight_kg: number | null;
  birthday: string | null;
  health_score: number;
  status: string;
  emoji: string;
  created_at: Date | string;
  updated_at: Date | string;
}

export interface HealthRecord {
  id: number;
  pet_id: number;
  score: number;
  weight_kg: number | null;
  last_checkup: string | null;
  vaccinated: boolean; // Prisma uses boolean
  conditions: string; // JSON string array
  recorded_at: Date | string;
}

export interface Medication {
  id: number;
  pet_id: number;
  name: string;
  frequency: string;
  next_dose_date: string | null;
  created_at: Date | string;
}

export interface FeedingSchedule {
  id: number;
  pet_id: number;
  meal_type: string;
  time: string;
  food_name: string;
  amount_g: number;
  status: string;
  schedule_date: string;
}

export interface Vet {
  id: number;
  user_id: number;
  name: string;
  clinic: string | null;
  phone: string | null;
  address: string | null;
  specialty: string;
}

export interface VetRecord {
  id: number;
  pet_id: number;
  vet_id: number | null;
  vet_name: string | null;
  date: string;
  type: string;
  notes: string | null;
  status: string;
}

export interface CalendarEvent {
  id: number;
  pet_id: number | null;
  user_id: number;
  title: string;
  event_date: string;
  type: string;
  icon_type: string;
  created_at: Date | string;
}

export interface FoodAlert {
  id: number;
  pet_id: number;
  message: string;
  level: 'info' | 'warning';
  is_resolved: number;
  created_at: Date | string;
}

export interface UserSettings {
  id: number;
  user_id: number;
  notify_vet_visits: number;
  notify_feeding: number;
  notify_weekly_report: number;
  notify_medication: number;
}

// Express augmentation to add `user` to Request
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
