export const consults = {
  d1: [
    { id: 'c1', clientId: '1', dossierId: 'd1', date: '2026-03-18', time: '10:00', duration: 50, type: 'Sessie', notes: '' },
    { id: 'c2', clientId: '1', dossierId: 'd1', date: '2026-03-04', time: '10:00', duration: 50, type: 'Sessie', notes: 'Cliënt geeft aan dat de angstklachten zijn afgenomen. Exposure-oefeningen worden als helpend ervaren.' },
    { id: 'c3', clientId: '1', dossierId: 'd1', date: '2026-02-18', time: '10:00', duration: 50, type: 'Sessie', notes: 'Start met exposure-oefeningen. Hiërarchie opgesteld samen met cliënt.' },
    { id: 'c4', clientId: '1', dossierId: 'd1', date: '2026-02-04', time: '10:00', duration: 50, type: 'Intake', notes: 'Eerste kennismaking. Klachten in kaart gebracht. CGT als behandelplan voorgesteld.' },
  ],
  d3: [
    { id: 'c5', clientId: '2', dossierId: 'd3', date: '2026-03-13', time: '14:00', duration: 50, type: 'Sessie', notes: '' },
    { id: 'c6', clientId: '2', dossierId: 'd3', date: '2026-03-06', time: '14:00', duration: 50, type: 'Sessie', notes: 'Gedragsactivatie besproken. Cliënt heeft afgelopen week meer activiteiten ondernomen.' },
  ],
  d5: [
    { id: 'c7', clientId: '3', dossierId: 'd5', date: '2026-03-13', time: '11:00', duration: 50, type: 'Sessie', notes: '' },
    { id: 'c8', clientId: '3', dossierId: 'd5', date: '2026-03-11', time: '11:00', duration: 50, type: 'Sessie', notes: 'Structuur en planningstools besproken. Cliënt gaat werken met een dagplanner.' },
  ],
  d6: [
    { id: 'c9', clientId: '4', dossierId: 'd6', date: '2026-03-13', time: '16:00', duration: 75, type: 'Sessie', notes: '' },
    { id: 'c10', clientId: '4', dossierId: 'd6', date: '2026-03-05', time: '16:00', duration: 75, type: 'Sessie', notes: 'Communicatiepatronen besproken. Beide partners oefenen met actief luisteren.' },
  ],
  d7: [
    { id: 'c11', clientId: '5', dossierId: 'd7', date: '2026-03-13', time: '09:00', duration: 50, type: 'Sessie', notes: '' },
    { id: 'c12', clientId: '5', dossierId: 'd7', date: '2026-03-07', time: '09:00', duration: 50, type: 'EMDR', notes: 'Eerste EMDR-sessie afgerond. Cliënt ervaart minder spanning bij het doelwit.' },
  ],
}

export function getTodaysConsults() {
  const today = '2026-03-13'
  const all = []
  for (const dossierConsults of Object.values(consults)) {
    for (const c of dossierConsults) {
      if (c.date === today) {
        all.push(c)
      }
    }
  }
  return all.sort((a, b) => a.time.localeCompare(b.time))
}
