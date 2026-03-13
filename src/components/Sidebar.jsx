import './Sidebar.css'
import Button from './Button'
import NavItem from './NavItem'
import SidebarSection from './SidebarSection'
import ConsultItem from './ConsultItem'
import {
  SearchIcon,
  PlusIcon,
  ChevronDownIcon,
  HomeIcon,
  MailIcon,
  MessageIcon,
  CalendarIcon,
  UsersIcon,
  BookIcon,
  WalletIcon,
} from './icons'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <button className="workspace-dropdown">
          <span className="workspace-dropdown__avatar">S</span>
          <span className="workspace-dropdown__name">Strakzat</span>
          <span className="workspace-dropdown__chevron">
            <ChevronDownIcon />
          </span>
        </button>
        <div className="sidebar__header-actions">
          <Button icon={<SearchIcon />} type="tertiary" ariaLabel="Zoeken" />
          <Button icon={<PlusIcon />} type="secondary" ariaLabel="Nieuw" />
        </div>
      </div>

      <div className="sidebar__body">
        <SidebarSection title="Consulten">
          <ConsultItem name="Jan de Vries" time="09:00" />
          <ConsultItem name="Maria Jansen" time="09:45" />
          <ConsultItem name="Pieter Bakker" time="10:30" />
          <ConsultItem name="Sophie Visser" time="11:15" />
        </SidebarSection>

        <SidebarSection>
          <NavItem icon={<HomeIcon />} label="Home" active />
          <NavItem icon={<MailIcon />} label="E-mail" />
          <NavItem icon={<MessageIcon />} label="Conversaties" />
          <NavItem icon={<CalendarIcon />} label="Agenda" />
          <NavItem icon={<UsersIcon />} label="Cliënten" />
          <NavItem icon={<BookIcon />} label="Bibliotheek" />
          <NavItem icon={<WalletIcon />} label="Financiën" />
        </SidebarSection>
      </div>
    </aside>
  )
}

export default Sidebar
