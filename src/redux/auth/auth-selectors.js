export const getUserInfo = state => state.auth.user;
export const getAuthStatus = state => state.auth.isAuthorized;
export const getLoadingStatus = state => state.auth.isLoading;
export const getAuthorizationType = state => state.auth.authorizationType;
