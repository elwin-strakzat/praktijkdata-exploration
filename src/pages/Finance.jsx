import Topbar from '../components/Topbar'

function Finance() {
  return (
    <>
      <Topbar breadcrumbs={[{ label: 'Financiën' }]} />
      <div className="canvas__content">
      </div>
    </>
  )
}

export default Finance
