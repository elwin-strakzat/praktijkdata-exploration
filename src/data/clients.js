export const clients = [
  {
    id: '1',
    name: 'Jan de Vries',
    email: 'jan@voorbeeld.nl',
    phone: '06-12345678',
    status: 'Actief',
    dossiers: [
      { id: 'd1', name: 'Angststoornis', active: true, status: 'Actief', startDate: '2025-09-15' },
      { id: 'd2', name: 'Intake 2024', active: false, status: 'Afgerond', startDate: '2024-03-01', endDate: '2024-06-12' },
    ],
  },
  {
    id: '2',
    name: 'Maria Jansen',
    email: 'maria@voorbeeld.nl',
    phone: '06-23456789',
    status: 'Actief',
    dossiers: [
      { id: 'd3', name: 'Depressie', active: true, status: 'Actief', startDate: '2025-11-03' },
    ],
  },
  {
    id: '3',
    name: 'Pieter Bakker',
    email: 'pieter@voorbeeld.nl',
    phone: '06-34567890',
    status: 'Inactief',
    dossiers: [
      { id: 'd4', name: 'Burnout', active: false, status: 'Afgerond', startDate: '2024-01-10', endDate: '2024-11-20' },
      { id: 'd5', name: 'ADHD', active: true, status: 'Actief', startDate: '2025-06-01' },
    ],
  },
  {
    id: '4',
    name: 'Sophie Visser',
    email: 'sophie@voorbeeld.nl',
    phone: '06-45678901',
    status: 'Actief',
    dossiers: [
      { id: 'd6', name: 'Relatietherapie', active: true, status: 'Actief', startDate: '2026-01-08' },
    ],
  },
  {
    id: '5',
    name: 'Thomas Smit',
    email: 'thomas@voorbeeld.nl',
    phone: '06-56789012',
    status: 'Actief',
    dossiers: [
      { id: 'd7', name: 'PTSS', active: true, status: 'Actief', startDate: '2025-08-20' },
      { id: 'd8', name: 'Intake 2023', active: false, status: 'Afgerond', startDate: '2023-09-05', endDate: '2023-12-18' },
    ],
  },
  {
    id: '6',
    name: 'Laura Mulder',
    email: 'laura@voorbeeld.nl',
    phone: '06-67890123',
    status: 'Wachtlijst',
    dossiers: [
      { id: 'd9', name: 'Intake', active: true, status: 'Wachtlijst', startDate: '2026-02-14' },
    ],
  },
]
