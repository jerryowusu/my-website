import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
  <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
    <div className="col-span-12 p-4 text-center dark:bg-dark-500 bg-white dark:bg-black lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
      <Sidebar/>
    </div>
    <div className="flex flex-col col-span-12 dark:bg-dark-500 bg-white lg:col-span-9 overflow:hidden rounded-2xl shadow-custom-light dark:shadow-custom-dark">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </div>
  </ThemeProvider>
  )
}

export default MyApp
