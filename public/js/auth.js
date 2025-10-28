// Authentication utilities - matches React implementation
const SESSION_KEY = "ticketapp_session";

export function signIn(username, password) {
  if (!username || !password) {
    return { success: false, message: "Invalid credentials" };
  }
  const token = btoa(`${username}:${Date.now()}`);
  localStorage.setItem(SESSION_KEY, token);
  return { success: true, token };
}

export function signUp(username, password) {
  return signIn(username, password);
}

export function signOut() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

export function isAuthenticated() {
  return Boolean(getSession());
}

