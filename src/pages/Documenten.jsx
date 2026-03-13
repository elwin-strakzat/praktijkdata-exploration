import { useParams } from 'react-router-dom'
import { FileTextIcon, StarIcon } from '../components/icons'
import { documents } from '../data/documents'
import './Documenten.css'

const months = [
  'januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december',
]

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function Documenten() {
  const { dossierId } = useParams()
  const allDocs = documents[dossierId] || []
  const favorited = allDocs.filter((d) => d.favorited)
  const others = allDocs.filter((d) => !d.favorited)

  return (
    <div className="documenten">
      {favorited.length > 0 && (
        <div className="documenten__section">
          <h3 className="documenten__section-title">
            <span className="documenten__star-icon"><StarIcon /></span>
            Favorieten
          </h3>
          <div className="documenten__favorites">
            {favorited.map((doc) => (
              <button key={doc.id} className="doc-card">
                <div className="doc-card__preview">
                  <FileTextIcon />
                </div>
                <div className="doc-card__info">
                  <span className="doc-card__name">{doc.name}</span>
                  <span className="doc-card__date">{formatDate(doc.updatedAt)}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {others.length > 0 && (
        <div className="documenten__section">
          <h3 className="documenten__section-title">Alle documenten</h3>
          <div className="doc-list">
            {others.map((doc) => (
              <button key={doc.id} className="doc-list-item">
                <div className="doc-list-item__left">
                  <span className="doc-list-item__name">{doc.name}</span>
                  <span className="doc-list-item__type">{doc.type === 'document' ? 'Document' : doc.type}</span>
                </div>
                <span className="doc-list-item__date">{formatDate(doc.updatedAt)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Documenten
