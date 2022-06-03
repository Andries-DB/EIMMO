const AuthRoutes = { Login: '/login', };

const BasicRoutes = { Index: '/', };

const MakelaarRoutes = { Dash: '/immo/dashboard' };
const AdminRoutes = {
  Dash: '/admin/dashboard',
  HouseOverview: '/admin/immo/overview',
  AddClient: '/admin/dashboard/add',
  SettingsClient: 'admin/dashboard/client/:id',
  AddHouse: 'admin/immo/add',
  SettingsHouse: 'admin/immo/:id'
};
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

export {
  AuthRoutes, BasicRoutes, ImmoRoutes, AdminRoutes, MakelaarRoutes
};
