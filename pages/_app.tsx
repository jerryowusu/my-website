import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className="grid grid-cols-12 gap-6 my-14 lg:px-32">
    <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">Sidebar</div>
    <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
      <Component {...pageProps} />
    </div>
  </div>
  )
}

export default MyApp
