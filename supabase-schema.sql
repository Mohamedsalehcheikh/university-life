create table if not exists public.university_data (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique(user_id)
);
alter table public.university_data enable row level security;
create policy "personal data only" on public.university_data for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
