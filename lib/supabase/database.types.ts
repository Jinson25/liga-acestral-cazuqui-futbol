export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      teams: {
        Row: {
          id: string
          name: string
          president: string
          coach: string
          created_at: string
          logo_url: string | null
        }
        Insert: {
          id?: string
          name: string
          president: string
          coach: string
          created_at?: string
          logo_url?: string | null
        }
        Update: {
          id?: string
          name?: string
          president?: string
          coach?: string
          created_at?: string
          logo_url?: string | null
        }
      }
      players: {
        Row: {
          id: string
          team_id: string
          first_name: string
          last_name: string
          identification: string
          position: string
          number: number
          created_at: string
        }
        Insert: {
          id?: string
          team_id: string
          first_name: string
          last_name: string
          identification: string
          position: string
          number: number
          created_at?: string
        }
        Update: {
          id?: string
          team_id?: string
          first_name?: string
          last_name?: string
          identification?: string
          position?: string
          number?: number
          created_at?: string
        }
      }
      matches: {
        Row: {
          id: string
          home_team_id: string
          away_team_id: string
          home_score: number | null
          away_score: number | null
          date: string
          time: string
          venue: string
          status: 'scheduled' | 'in_progress' | 'finished'
          created_at: string
        }
        Insert: {
          id?: string
          home_team_id: string
          away_team_id: string
          home_score?: number | null
          away_score?: number | null
          date: string
          time: string
          venue: string
          status?: 'scheduled' | 'in_progress' | 'finished'
          created_at?: string
        }
        Update: {
          id?: string
          home_team_id?: string
          away_team_id?: string
          home_score?: number | null
          away_score?: number | null
          date?: string
          time?: string
          venue?: string
          status?: 'scheduled' | 'in_progress' | 'finished'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}