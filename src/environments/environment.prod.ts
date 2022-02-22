// export const environment = {
//   production: true,
//   apiUrl: "http://localhost:3000"
  
// };

const Version = 'v1'
export const environment = {
  production: false,
  version: 'v1',
  apiUrl:'http://localhost:3000',
  versionedApiUrl: 'http://localhost:3000/' + `${Version}`,
};
