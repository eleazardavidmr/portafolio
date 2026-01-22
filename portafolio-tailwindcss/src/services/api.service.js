import { client } from "@/supabase/client";
import toast from "react-hot-toast";

/**
 * Base API Service
 * Provides centralized error handling and common API utilities
 */

/**
 * Handle API errors consistently across the application
 * @param {Error} error - The error object
 * @param {string} defaultMessage - Default message to show if error message is not available
 */
export const handleApiError = (error, defaultMessage = "An error occurred") => {
  console.error("API Error:", error);

  const errorMessage = error?.message || defaultMessage;
  toast.error(errorMessage);

  return {
    success: false,
    error: errorMessage,
    data: null,
  };
};

/**
 * Handle API success responses
 * @param {*} data - The response data
 * @param {string} successMessage - Optional success message to display
 */
export const handleApiSuccess = (data, successMessage = null) => {
  if (successMessage) {
    toast.success(successMessage);
  }

  return {
    success: true,
    error: null,
    data,
  };
};

/**
 * Execute a Supabase query with error handling
 * @param {Function} queryFn - Function that returns a Supabase query
 * @param {string} errorMessage - Error message to display on failure
 */
export const executeQuery = async (queryFn, errorMessage = "Query failed") => {
  try {
    const { data, error } = await queryFn();

    if (error) throw error;

    return handleApiSuccess(data);
  } catch (error) {
    return handleApiError(error, errorMessage);
  }
};

/**
 * Get the Supabase client instance
 */
export const getClient = () => client;

export default {
  handleApiError,
  handleApiSuccess,
  executeQuery,
  getClient,
};
