const isBrowser = typeof window !== 'undefined';

const getUser = () => (window.localStorage.sonosUser
  ? JSON.parse(window.localStorage.sonosUser)
  : {});

// const setUser = user => (window.localStorage.sonosUser = JSON.stringify(user));

// export const isLoggedIn = () => {
//   if (!isBrowser) return false;
//   const user = getUser();
//   return !!user.accessToken;
// };
