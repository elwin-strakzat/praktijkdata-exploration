import './Sidebar.css'
import Button from './Button'
import NavItem from './NavItem'
import SidebarSection from './SidebarSection'
import ConsultItem from './ConsultItem'
import Avatar from './Avatar'
import { ActionMenu, ActionMenuItem, ActionMenuDivider } from './ActionMenu'
import { getTodaysConsults } from '../data/consults'
import { clients } from '../data/clients'
import {
  SearchIcon,
  PlusIcon,
  XIcon,
  ChevronDownIcon,
  HomeIcon,
  MailIcon,
  MessageIcon,
  CalendarIcon,
  UsersIcon,
  BookIcon,
  WalletIcon,
  SettingsIcon,
  LogOutIcon,
  UserIcon,
  ClipboardIcon,
} from './icons'

function Sidebar() {
  const todaysConsults = getTodaysConsults()

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <ActionMenu
          trigger={
            <button className="workspace-dropdown">
              <span className="workspace-dropdown__avatar">S</span>
              <span className="workspace-dropdown__name">Strakzat</span>
              <span className="workspace-dropdown__chevron">
                <ChevronDownIcon />
              </span>
            </button>
          }
        >
          <ActionMenuItem icon={<SettingsIcon />} label="Beheer" />
          <ActionMenuDivider />
          <ActionMenuItem icon={<Avatar name="Elwin de Witte" size="sm" />} label="Account" />
          <ActionMenuItem icon={<LogOutIcon />} label="Uitloggen" variant="error" />
        </ActionMenu>
        <div className="sidebar__header-actions">
          <Button icon={<SearchIcon />} type="tertiary" ariaLabel="Zoeken" />
          <ActionMenu
            align="right"
            trigger={({ open }) => (
              <Button icon={open ? <XIcon /> : <PlusIcon />} type="secondary" ariaLabel={open ? 'Sluiten' : 'Nieuw'} />
            )}
          >
            <ActionMenuItem icon={<CalendarIcon />} label="Consult" />
            <ActionMenuItem icon={<UserIcon />} label="Cliënt" />
            <ActionMenuItem icon={<ClipboardIcon />} label="Dossier" />
          </ActionMenu>
        </div>
      </div>

      <div className="sidebar__body">
        <SidebarSection title="Consulten">
          {todaysConsults.map((c) => {
            const client = clients.find((cl) => cl.id === c.clientId)
            return (
              <ConsultItem
                key={c.id}
                name={client?.name || 'Onbekend'}
                time={c.time}
                to={`/clienten/${c.clientId}/${c.dossierId}/consulten/${c.id}`}
              />
            )
          })}
        </SidebarSection>

        <SidebarSection>
          <NavItem icon={<HomeIcon />} label="Home" to="/" />
          <NavItem icon={<MailIcon />} label="E-mail" to="/email" />
          <NavItem icon={<MessageIcon />} label="Conversaties" to="/conversaties" />
          <NavItem icon={<CalendarIcon />} label="Agenda" to="/agenda" />
          <NavItem icon={<UsersIcon />} label="Cliënten" to="/clienten" />
          <NavItem icon={<BookIcon />} label="Bibliotheek" to="/bibliotheek" />
          <NavItem icon={<WalletIcon />} label="Financiën" to="/financien" />
        </SidebarSection>
      </div>
    </aside>
  )
}

export default Sidebar
