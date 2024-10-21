export const apiURL = import.meta.env.VITE_API_URL || '/api';

const currentURI = window.location.origin;
export const verficationPath = (currentURI as string) + '/verify-email';
export const resetPasswordPath = (currentURI as string) + '/reset-password';