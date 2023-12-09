import '@/styles/globals.css'
import layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
  <layout>
    <Component {...pageProps} />
  </layout>
  );
};
