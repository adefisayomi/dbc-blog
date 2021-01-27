import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import StateProvider from '../src/context/stateprovider'
import AppWrapper from '../src/layout/AppWrapper'
import axios from 'axios'

const App = ({ Component, pageProps }) => {

  axios.defaults.baseURL = (process.env.NODE_ENV).toLowerCase() === 'development' ? 'http://localhost:3000/api' : 'https://devbyclace.com/api'
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  //axios.defaults.headers['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });
 

  return (
    <StateProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </StateProvider>
  ) 
}

export default App
