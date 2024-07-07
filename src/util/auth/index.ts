export const isAuthenticated = () => {
    const userId = localStorage.getItem('userId');
    return !!userId; // Return true if userId exists, false otherwise
  };