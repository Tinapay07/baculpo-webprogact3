const AUTH_KEY = "baculpo_auth_v1";

export const setAuth = (data) => {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Could not save auth to localStorage", e);
  }
};

export const clearAuth = () => {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (e) {
    console.warn("Could not clear auth from localStorage", e);
  }
};

export const getAuth = () => {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
  } catch (e) {
    return null;
  }
};

export const getToken = () => getAuth()?.token ?? null;

export const getUser = () => getAuth()?.user ?? null;

export const isAuthenticated = () => Boolean(getToken() || getUser());

export const normalizeRole = (role) => String(role || "").trim().toLowerCase();

export const getUserRole = () => {
  const user = getUser();
  return normalizeRole(user?.type || user?.role || user?.roleName || user?.roleType);
};

export const hasRole = (allowedRoles = []) => {
  if (!allowedRoles || allowedRoles.length === 0) return true;
  const role = getUserRole();
  return allowedRoles.map(normalizeRole).includes(role);
};

export default {
  setAuth,
  clearAuth,
  getAuth,
  getToken,
  getUser,
  getUserRole,
  isAuthenticated,
  hasRole,
  normalizeRole,
};
