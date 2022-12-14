import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store';
import Nav from '../components/nav'
function MyApp({ Component, pageProps }) {
  return (<Provider store={store }><Nav/><Component {...pageProps} /></Provider>)
}

export default MyApp
