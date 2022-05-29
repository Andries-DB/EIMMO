const AuthRoutes = {
  Index: '/auth',
  Login: '/auth/login',
};

const BasicRoutes = { Index: '/', };

const ImmoRoutes = {
  Search: '/search',
  Detail: '/search/:id'
};

// replaces : values with values from object
// e.g. route('/projects/:id', { id : 9 }) -> /projects/9
export const route = (path, options = {}) => {
  Object.keys(options).forEach((key) => {
    path = path.replace(`:${key}`, options[key]);
  });
  return path;
};

export { AuthRoutes, BasicRoutes, ImmoRoutes };
