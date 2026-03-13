import Topbar from '../components/Topbar'

function Library() {
  return (
    <>
      <Topbar breadcrumbs={[{ label: 'Bibliotheek' }]} />
      <div className="canvas__content">
      </div>
    </>
  )
}

export default Library
