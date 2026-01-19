import { client } from "../supabase/client";
import { handleApiError, handleApiSuccess } from "./api.service";

/**
 * Authentication Service
 * Handles all authentication-related operations
 */

/**
 * Sign in with Google OAuth
 */
export const signInWithGoogle = async () => {
  try {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) throw error;

    return handleApiSuccess(data);
  } catch (error) {
    return handleApiError(error, "Error connecting with Google");
  }
};

/**
 * Sign in with email and password
 * @param {string} email
 * @param {string} password
 */
export const signInWithEmail = async (email, password) => {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return handleApiSuccess(data);
  } catch (error) {
    return handleApiError(error, "Invalid credentials");
  }
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
  try {
    const { error } = await client.auth.signOut();

    if (error) throw error;

    return handleApiSuccess(null);
  } catch (error) {
    return handleApiError(error, "Error signing out");
  }
};

/**
 * Get the current session
 */
export const getSession = async () => {
  try {
    const {
      data: { session },
      error,
    } = await client.auth.getSession();

    if (error) throw error;

    return handleApiSuccess(session);
  } catch (error) {
    return handleApiError(error, "Error getting session");
  }
};

/**
 * Get the current user
 */
export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
      error,
    } = await client.auth.getUser();

    if (error) throw error;

    return handleApiSuccess(user);
  } catch (error) {
    return handleApiError(error, "Error getting user");
  }
};

/**
 * Subscribe to auth state changes
 * @param {Function} callback - Callback function to handle auth state changes
 */
export const onAuthStateChange = (callback) => {
  const {
    data: { subscription },
  } = client.auth.onAuthStateChange(callback);
  return subscription;
};

export default {
  signInWithGoogle,
  signInWithEmail,
  signOut,
  getSession,
  getCurrentUser,
  onAuthStateChange,
};
