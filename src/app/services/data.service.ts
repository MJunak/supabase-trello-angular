import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Database } from 'types/supabase';

export const CATCH_TABLE = 'catches';

@Injectable({
  providedIn: 'root',
})
export class DataService {


  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient<Database>(environment.supabaseUrl, environment.supabaseKey);

  }
}
