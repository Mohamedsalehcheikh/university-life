import { createClient } from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL as string|undefined;
const key=import.meta.env.VITE_SUPABASE_ANON_KEY as string|undefined;
export const supabase=url&&key?createClient(url,key):null;
export async function signIn(email:string,password:string){if(!supabase)throw new Error('Supabase غير مهيأ');return supabase.auth.signInWithPassword({email,password})}
export async function signOut(){return supabase?.auth.signOut()}
