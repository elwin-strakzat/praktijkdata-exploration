import Topbar from '../components/Topbar'

function Home() {
  return (
    <>
      <Topbar breadcrumbs={[{ label: 'Home' }]} />
      <div className="canvas__content">
      </div>
    </>
  )
}

export default Home
