import api from './api';

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/client/login', { email, password });
    const { token, result } = response.data;
    localStorage.setItem('token', token);
    return { success: true, role: result.role }; // Access role from result object
  } catch (error) {
    console.error('Login failed', error);
    return { success: false, role: null };
  }
};


export const register = async (user: any) => {
  try {
    const response = await api.post('/register', user);
    return true;
  } catch (error) {
    console.error('Registration failed', error);
    return false;
  }
};
