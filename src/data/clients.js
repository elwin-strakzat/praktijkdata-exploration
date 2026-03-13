export const clients = [
  {
    id: '1',
    name: 'Jan de Vries',
    email: 'jan@voorbeeld.nl',
    phone: '06-12345678',
    status: 'Actief',
    dossiers: [
      { id: 'd1', name: 'Angststoornis', active: true },
      { id: 'd2', name: 'Intake 2024', active: false },
    ],
  },
  {
    id: '2',
    name: 'Maria Jansen',
    email: 'maria@voorbeeld.nl',
    phone: '06-23456789',
    status: 'Actief',
    dossiers: [
      { id: 'd3', name: 'Depressie', active: true },
    ],
  },
  {
    id: '3',
    name: 'Pieter Bakker',
    email: 'pieter@voorbeeld.nl',
    phone: '06-34567890',
    status: 'Inactief',
    dossiers: [
      { id: 'd4', name: 'Burnout', active: false },
      { id: 'd5', name: 'ADHD', active: true },
    ],
  },
  {
    id: '4',
    name: 'Sophie Visser',
    email: 'sophie@voorbeeld.nl',
    phone: '06-45678901',
    status: 'Actief',
    dossiers: [
      { id: 'd6', name: 'Relatietherapie', active: true },
    ],
  },
  {
    id: '5',
    name: 'Thomas Smit',
    email: 'thomas@voorbeeld.nl',
    phone: '06-56789012',
    status: 'Actief',
    dossiers: [
      { id: 'd7', name: 'PTSS', active: true },
      { id: 'd8', name: 'Intake 2023', active: false },
    ],
  },
  {
    id: '6',
    name: 'Laura Mulder',
    email: 'laura@voorbeeld.nl',
    phone: '06-67890123',
    status: 'Wachtlijst',
    dossiers: [
      { id: 'd9', name: 'Intake', active: true },
    ],
  },
]
