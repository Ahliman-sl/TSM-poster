import supabase from "./supabase.js";

// User Sign Up
export async function signUp(name, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  const user = data.user;

  // Kullanıcı kaydı başarılı olduktan sonra profil oluşturma
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert([{ user_id: user.id, email, full_name: name }]);

  if (profileError) throw profileError;

  // Return user and session data
  return { user, token: data.session.access_token, profile: profileData };
}

// User Log in
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return { user: data.user, token: data.session.access_token };
}

// User Sign Out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  console.log("User signed out");
}
