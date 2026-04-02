export const CURRENT_USER = {
  name: 'Jan de Vries',
  company: 'Metaalbedrijf De Vries B.V.',
  email: 'j.devries@devries-metaal.nl',
  initials: 'JV',
}

// ── ADMIN ─────────────────────────────────────────────────────
export const ADMIN_USER = {
  name: 'Arkstaal B.V.',
  role: 'Eigenaar',
  initials: 'AS',
}

export interface Klant {
  id: string
  naam: string
  bedrijf: string
  email: string
  telefoon: string
  plaats: string
  sindsJaar: number
  aantalBestellingen: number
  omzetTotaal: string
  status: 'Actief' | 'Inactief'
}

export const KLANTEN: Klant[] = [
  { id: 'KL-001', naam: 'Jan de Vries', bedrijf: 'Metaalbedrijf De Vries B.V.', email: 'j.devries@devries-metaal.nl', telefoon: '+31 6 12 34 56 78', plaats: 'Utrecht', sindsJaar: 2021, aantalBestellingen: 8, omzetTotaal: '€ 16.030,–', status: 'Actief' },
  { id: 'KL-002', naam: 'Sophie Bakker', bedrijf: 'Constructiebedrijf Bakker', email: 's.bakker@bakker-constructie.nl', telefoon: '+31 6 87 65 43 21', plaats: 'Rotterdam', sindsJaar: 2019, aantalBestellingen: 24, omzetTotaal: '€ 48.720,–', status: 'Actief' },
  { id: 'KL-003', naam: 'Mark Hendriks', bedrijf: 'Hendriks Installatietechniek', email: 'm.hendriks@hendriks-it.nl', telefoon: '+31 6 55 44 33 22', plaats: 'Eindhoven', sindsJaar: 2023, aantalBestellingen: 3, omzetTotaal: '€ 4.890,–', status: 'Actief' },
]

export interface AdminOfferte extends Offerte {
  klantNaam: string
  klantBedrijf: string
  klantId: string
}

export const ADMIN_OFFERTES: AdminOfferte[] = [
  { id: 'OFF-2025-041', datum: '24 mrt 2025', materiaal: 'RVS 316L plaat 3mm', hoeveelheid: '450 kg', bedrag: '€ 2.340,–', status: 'Geaccepteerd', referentie: 'PO-8821', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', klantId: 'KL-001' },
  { id: 'OFF-2025-040', datum: '23 mrt 2025', materiaal: 'RVS 304 strip 50x5mm', hoeveelheid: '200 m', bedrag: '€ 1.640,–', status: 'In behandeling', referentie: 'PO-8820', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', klantId: 'KL-002' },
  { id: 'OFF-2025-038', datum: '19 mrt 2025', materiaal: 'Aluminium 6082 T6 buis ø60', hoeveelheid: '80 stk', bedrag: '€ 1.180,–', status: 'Verstuurd', referentie: 'PO-8809', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', klantId: 'KL-001' },
  { id: 'OFF-2025-036', datum: '17 mrt 2025', materiaal: 'RVS 316 lasnaad buis ø168,3', hoeveelheid: '12 m', bedrag: '€ 3.100,–', status: 'Geaccepteerd', referentie: 'PO-8801', klantNaam: 'Mark Hendriks', klantBedrijf: 'Hendriks Installatietechniek', klantId: 'KL-003' },
  { id: 'OFF-2025-035', datum: '11 mrt 2025', materiaal: 'RVS 304 coil 1,5mm', hoeveelheid: '1200 kg', bedrag: '€ 5.760,–', status: 'In behandeling', referentie: 'PO-8790', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', klantId: 'KL-001' },
  { id: 'OFF-2025-034', datum: '10 mrt 2025', materiaal: 'Aluminium plaat 5754 H22 4mm', hoeveelheid: '600 kg', bedrag: '€ 2.880,–', status: 'Verstuurd', referentie: 'PO-8787', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', klantId: 'KL-002' },
  { id: 'OFF-2025-031', datum: '28 feb 2025', materiaal: 'Messing staaf ø25', hoeveelheid: '30 stk', bedrag: '€ 640,–', status: 'In behandeling', referentie: 'PO-8774', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', klantId: 'KL-001' },
  { id: 'OFF-2025-028', datum: '14 feb 2025', materiaal: 'RVS 316 flens DN50 PN16', hoeveelheid: '12 stk', bedrag: '€ 890,–', status: 'Nieuw', referentie: 'PO-8761', klantNaam: 'Mark Hendriks', klantBedrijf: 'Hendriks Installatietechniek', klantId: 'KL-003' },
]

export interface AdminBestelling extends Bestelling {
  klantNaam: string
  klantBedrijf: string
  klantId: string
}

export const ADMIN_BESTELLINGEN: AdminBestelling[] = [
  { id: 'ORD-2025-112', datum: '22 mrt 2025', artikelen: 'RVS 316L plaat 3mm, RVS 316 flens DN50', aantalArtikelen: 2, totaal: '€ 3.230,–', status: 'Verzonden', track: '3SXYZ881234NL', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', klantId: 'KL-001' },
  { id: 'ORD-2025-111', datum: '21 mrt 2025', artikelen: 'RVS 304 strip 50x5mm', aantalArtikelen: 1, totaal: '€ 1.640,–', status: 'In verwerking', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', klantId: 'KL-002' },
  { id: 'ORD-2025-109', datum: '18 mrt 2025', artikelen: 'RVS 316 lasnaad buis ø168,3', aantalArtikelen: 1, totaal: '€ 3.100,–', status: 'Verzonden', track: '3SABC771190NL', klantNaam: 'Mark Hendriks', klantBedrijf: 'Hendriks Installatietechniek', klantId: 'KL-003' },
  { id: 'ORD-2025-108', datum: '15 mrt 2025', artikelen: 'Aluminium 6082 T6 buis ø60', aantalArtikelen: 1, totaal: '€ 1.180,–', status: 'Geleverd', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', klantId: 'KL-001' },
  { id: 'ORD-2025-107', datum: '14 mrt 2025', artikelen: 'Aluminium plaat 5754 H22 4mm', aantalArtikelen: 1, totaal: '€ 2.880,–', status: 'Geleverd', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', klantId: 'KL-002' },
  { id: 'ORD-2025-101', datum: '7 mrt 2025', artikelen: 'RVS 304 coil 1,5mm', aantalArtikelen: 1, totaal: '€ 5.760,–', status: 'Geleverd', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', klantId: 'KL-001' },
  { id: 'ORD-2025-094', datum: '21 feb 2025', artikelen: 'Koper plaat 2mm, Koper strip 25x3', aantalArtikelen: 2, totaal: '€ 980,–', status: 'Geleverd', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', klantId: 'KL-002' },
  { id: 'ORD-2025-089', datum: '10 feb 2025', artikelen: 'RVS 304 buis ø88,9x3,2', aantalArtikelen: 1, totaal: '€ 2.100,–', status: 'Geleverd', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', klantId: 'KL-002' },
]

// ── VOORRAAD ──────────────────────────────────────────────────
export type VoorraadStatus = 'Op voorraad' | 'Beperkt' | 'Niet op voorraad'

export interface VoorraadItem {
  id: string
  artikel: string
  kwaliteit: string
  afmeting: string
  eenheid: string
  voorraad: number
  minVoorraad: number
  status: VoorraadStatus
}

export const VOORRAAD: VoorraadItem[] = [
  { id: 'V-001', artikel: 'RVS plaat', kwaliteit: '316L / 1.4404', afmeting: '3mm · 2000×1000', eenheid: 'platen', voorraad: 48, minVoorraad: 10, status: 'Op voorraad' },
  { id: 'V-002', artikel: 'RVS plaat', kwaliteit: '304 / 1.4301', afmeting: '2mm · 2000×1000', eenheid: 'platen', voorraad: 7, minVoorraad: 10, status: 'Beperkt' },
  { id: 'V-003', artikel: 'RVS coil', kwaliteit: '304 / 1.4301', afmeting: '1,5mm · 1000mm breed', eenheid: 'kg', voorraad: 2400, minVoorraad: 500, status: 'Op voorraad' },
  { id: 'V-004', artikel: 'RVS buis', kwaliteit: '316L / 1.4404', afmeting: 'ø88,9×3,2mm', eenheid: 'stuks', voorraad: 0, minVoorraad: 6, status: 'Niet op voorraad' },
  { id: 'V-005', artikel: 'RVS flens', kwaliteit: '316 / 1.4401', afmeting: 'DN50 PN16 ANSI', eenheid: 'stuks', voorraad: 34, minVoorraad: 10, status: 'Op voorraad' },
  { id: 'V-006', artikel: 'Aluminium plaat', kwaliteit: '5754 H22', afmeting: '4mm · 2000×1000', eenheid: 'platen', voorraad: 3, minVoorraad: 8, status: 'Beperkt' },
  { id: 'V-007', artikel: 'Aluminium buis', kwaliteit: '6082 T6', afmeting: 'ø60×3mm · L=6m', eenheid: 'stuks', voorraad: 120, minVoorraad: 20, status: 'Op voorraad' },
  { id: 'V-008', artikel: 'Aluminium hoekprofiel', kwaliteit: '6060 T6', afmeting: '50×50×5mm', eenheid: 'stuks', voorraad: 0, minVoorraad: 15, status: 'Niet op voorraad' },
  { id: 'V-009', artikel: 'Koper plaat', kwaliteit: 'Cu-DHP / CW024A', afmeting: '2mm · 2000×1000', eenheid: 'platen', voorraad: 18, minVoorraad: 5, status: 'Op voorraad' },
  { id: 'V-010', artikel: 'Messing staaf', kwaliteit: 'CuZn39Pb3', afmeting: 'ø25mm · L=3m', eenheid: 'stuks', voorraad: 9, minVoorraad: 10, status: 'Beperkt' },
]

// ── NOTIFICATIES ───────────────────────────────────────────────
export type NotificatieType = 'offerte' | 'bestelling' | 'voorraad' | 'klant'

export interface Notificatie {
  id: string
  type: NotificatieType
  titel: string
  omschrijving: string
  tijdGeleden: string
  gelezen: boolean
}

export const NOTIFICATIES: Notificatie[] = [
  { id: 'N-001', type: 'offerte', titel: 'Nieuwe offerte aanvraag', omschrijving: 'Mark Hendriks (Hendriks Installatietechniek) heeft een offerte aangevraagd voor RVS 316 flens DN50 PN16.', tijdGeleden: '14 min geleden', gelezen: false },
  { id: 'N-002', type: 'bestelling', titel: 'Bestelling ORD-2025-111 bevestigd', omschrijving: 'Sophie Bakker heeft bestelling ORD-2025-111 geplaatst — RVS 304 strip 50×5mm.', tijdGeleden: '2 uur geleden', gelezen: false },
  { id: 'N-003', type: 'voorraad', titel: 'Lage voorraad: RVS plaat 304 2mm', omschrijving: 'Nog 7 platen op voorraad — onder de minimumdrempel van 10.', tijdGeleden: '3 uur geleden', gelezen: false },
  { id: 'N-004', type: 'offerte', titel: 'Offerte OFF-2025-038 geaccepteerd', omschrijving: 'Jan de Vries heeft offerte OFF-2025-038 geaccepteerd (€ 1.180,–).', tijdGeleden: 'Gisteren 16:42', gelezen: true },
  { id: 'N-005', type: 'voorraad', titel: 'Lage voorraad: Aluminium plaat 5754', omschrijving: 'Nog 3 platen op voorraad — onder de minimumdrempel van 8.', tijdGeleden: 'Gisteren 09:15', gelezen: true },
  { id: 'N-006', type: 'klant', titel: 'Nieuwe klant aangemeld', omschrijving: 'Mark Hendriks (Hendriks Installatietechniek) heeft een account aangevraagd.', tijdGeleden: '2 dagen geleden', gelezen: true },
  { id: 'N-007', type: 'bestelling', titel: 'Bestelling ORD-2025-109 verzonden', omschrijving: 'Bestelling van Mark Hendriks is verzonden — track: 3SABC771190NL.', tijdGeleden: '3 dagen geleden', gelezen: true },
]

// ── FACTUREN ───────────────────────────────────────────────────
export type FactuurStatus = 'Openstaand' | 'Betaald' | 'Verlopen'

export interface Factuur {
  id: string
  datum: string
  vervalDatum: string
  klantNaam: string
  klantBedrijf: string
  orderRef: string
  bedrag: string
  status: FactuurStatus
}

export const FACTUREN: Factuur[] = [
  { id: 'INV-2025-031', datum: '22 mrt 2025', vervalDatum: '21 apr 2025', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', orderRef: 'ORD-2025-112', bedrag: '€ 3.230,–', status: 'Openstaand' },
  { id: 'INV-2025-030', datum: '21 mrt 2025', vervalDatum: '20 apr 2025', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', orderRef: 'ORD-2025-111', bedrag: '€ 1.640,–', status: 'Openstaand' },
  { id: 'INV-2025-028', datum: '18 mrt 2025', vervalDatum: '17 apr 2025', klantNaam: 'Mark Hendriks', klantBedrijf: 'Hendriks Installatietechniek', orderRef: 'ORD-2025-109', bedrag: '€ 3.100,–', status: 'Openstaand' },
  { id: 'INV-2025-026', datum: '15 mrt 2025', vervalDatum: '14 apr 2025', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', orderRef: 'ORD-2025-108', bedrag: '€ 1.180,–', status: 'Betaald' },
  { id: 'INV-2025-025', datum: '14 mrt 2025', vervalDatum: '13 apr 2025', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', orderRef: 'ORD-2025-107', bedrag: '€ 2.880,–', status: 'Betaald' },
  { id: 'INV-2025-019', datum: '7 mrt 2025', vervalDatum: '6 apr 2025', klantNaam: 'Jan de Vries', klantBedrijf: 'Metaalbedrijf De Vries B.V.', orderRef: 'ORD-2025-101', bedrag: '€ 5.760,–', status: 'Betaald' },
  { id: 'INV-2025-010', datum: '10 feb 2025', vervalDatum: '12 mrt 2025', klantNaam: 'Sophie Bakker', klantBedrijf: 'Constructiebedrijf Bakker', orderRef: 'ORD-2025-089', bedrag: '€ 2.100,–', status: 'Verlopen' },
]

// ── RAPPORTAGES DATA ───────────────────────────────────────────
export const RAPPORT_TOP_PRODUCTEN = [
  { naam: 'RVS 304 coil 1,5mm', omzet: '€ 14.200,–', pct: 100 },
  { naam: 'RVS 316L plaat 3mm', omzet: '€ 9.840,–', pct: 69 },
  { naam: 'RVS 316 lasnaad buis', omzet: '€ 7.600,–', pct: 54 },
  { naam: 'Aluminium plaat 5754', omzet: '€ 5.320,–', pct: 37 },
  { naam: 'Aluminium buis 6082 T6', omzet: '€ 4.180,–', pct: 29 },
]

export const RAPPORT_TOP_KLANTEN = [
  { naam: 'Constructiebedrijf Bakker', omzet: '€ 48.720,–', bestellingen: 24, pct: 100 },
  { naam: 'Metaalbedrijf De Vries B.V.', omzet: '€ 16.030,–', bestellingen: 8, pct: 33 },
  { naam: 'Hendriks Installatietechniek', omzet: '€ 4.890,–', bestellingen: 3, pct: 10 },
]

export const ADMIN_STATS = {
  omzetDezeMaand: '€ 18.890,–',
  omzetVorigeMaand: '€ 14.320,–',
  openOffertes: 4,
  lopendeBestellingen: 3,
  actieveKlanten: 3,
  maandOmzet: [
    { maand: 'okt', waarde: 9200 },
    { maand: 'nov', waarde: 11400 },
    { maand: 'dec', waarde: 8700 },
    { maand: 'jan', waarde: 12300 },
    { maand: 'feb', waarde: 14320 },
    { maand: 'mrt', waarde: 18890 },
  ],
}

export type OffertStatus = 'Nieuw' | 'In behandeling' | 'Verstuurd' | 'Geaccepteerd'

export interface Offerte {
  id: string
  datum: string
  materiaal: string
  hoeveelheid: string
  bedrag: string
  status: OffertStatus
  referentie: string
}

export const OFFERTES: Offerte[] = [
  { id: 'OFF-2025-041', datum: '24 mrt 2025', materiaal: 'RVS 316L plaat 3mm', hoeveelheid: '450 kg', bedrag: '€ 2.340,–', status: 'Geaccepteerd', referentie: 'PO-8821' },
  { id: 'OFF-2025-038', datum: '19 mrt 2025', materiaal: 'Aluminium 6082 T6 buis ø60', hoeveelheid: '80 stk', bedrag: '€ 1.180,–', status: 'Verstuurd', referentie: 'PO-8809' },
  { id: 'OFF-2025-035', datum: '11 mrt 2025', materiaal: 'RVS 304 coil 1,5mm', hoeveelheid: '1200 kg', bedrag: '€ 5.760,–', status: 'In behandeling', referentie: 'PO-8790' },
  { id: 'OFF-2025-031', datum: '28 feb 2025', materiaal: 'Messing staaf ø25', hoeveelheid: '30 stk', bedrag: '€ 640,–', status: 'In behandeling', referentie: 'PO-8774' },
  { id: 'OFF-2025-028', datum: '14 feb 2025', materiaal: 'RVS 316 flens DN50 PN16', hoeveelheid: '12 stk', bedrag: '€ 890,–', status: 'Nieuw', referentie: 'PO-8761' },
]

export type BestellingStatus = 'In verwerking' | 'Verzonden' | 'Geleverd'

export interface Bestelling {
  id: string
  datum: string
  artikelen: string
  aantalArtikelen: number
  totaal: string
  status: BestellingStatus
  track?: string
}

export const BESTELLINGEN: Bestelling[] = [
  { id: 'ORD-2025-112', datum: '22 mrt 2025', artikelen: 'RVS 316L plaat 3mm, RVS 316 flens DN50', aantalArtikelen: 2, totaal: '€ 3.230,–', status: 'Verzonden', track: '3SXYZ881234NL' },
  { id: 'ORD-2025-108', datum: '15 mrt 2025', artikelen: 'Aluminium 6082 T6 buis ø60', aantalArtikelen: 1, totaal: '€ 1.180,–', status: 'Geleverd' },
  { id: 'ORD-2025-101', datum: '7 mrt 2025',  artikelen: 'RVS 304 coil 1,5mm', aantalArtikelen: 1, totaal: '€ 5.760,–', status: 'Geleverd' },
  { id: 'ORD-2025-094', datum: '21 feb 2025', artikelen: 'Koper plaat 2mm, Koper strip 25x3', aantalArtikelen: 2, totaal: '€ 980,–', status: 'Geleverd' },
  { id: 'ORD-2025-089', datum: '10 feb 2025', artikelen: 'RVS 304 buis ø88,9x3,2', aantalArtikelen: 1, totaal: '€ 2.100,–', status: 'Geleverd' },
  { id: 'ORD-2025-083', datum: '28 jan 2025', artikelen: 'Aluminium 5754 plaat 4mm', aantalArtikelen: 1, totaal: '€ 1.540,–', status: 'Geleverd' },
  { id: 'ORD-2025-077', datum: '14 jan 2025', artikelen: 'RVS 316L strip 40x4, RVS draadstang M12', aantalArtikelen: 2, totaal: '€ 760,–', status: 'Geleverd' },
  { id: 'ORD-2025-070', datum: '3 jan 2025',  artikelen: 'Messing plaat 3mm', aantalArtikelen: 1, totaal: '€ 480,–', status: 'Geleverd' },
]

export interface Certificaat {
  id: string
  materiaal: string
  kwaliteit: string
  smeltNummer: string
  norm: string
  datum: string
  orderRef: string
}

export const CERTIFICATEN: Certificaat[] = [
  { id: 'CERT-2025-031', materiaal: 'RVS plaat', kwaliteit: '316L / 1.4404', smeltNummer: 'HT-44821', norm: 'EN 10204 3.1', datum: '22 mrt 2025', orderRef: 'ORD-2025-112' },
  { id: 'CERT-2025-028', materiaal: 'RVS flens', kwaliteit: '316 / 1.4401', smeltNummer: 'HT-44790', norm: 'EN 10204 3.1', datum: '22 mrt 2025', orderRef: 'ORD-2025-112' },
  { id: 'CERT-2025-021', materiaal: 'Aluminium buis', kwaliteit: '6082 T6', smeltNummer: 'AL-29341', norm: 'EN 10204 2.2', datum: '15 mrt 2025', orderRef: 'ORD-2025-108' },
  { id: 'CERT-2025-014', materiaal: 'RVS coil', kwaliteit: '304 / 1.4301', smeltNummer: 'HT-44512', norm: 'EN 10204 3.1', datum: '7 mrt 2025', orderRef: 'ORD-2025-101' },
  { id: 'CERT-2025-009', materiaal: 'Koper plaat', kwaliteit: 'Cu-DHP / CW024A', smeltNummer: 'CU-11203', norm: 'EN 10204 2.1', datum: '21 feb 2025', orderRef: 'ORD-2025-094' },
  { id: 'CERT-2025-005', materiaal: 'RVS buis', kwaliteit: '304 / 1.4301', smeltNummer: 'HT-44301', norm: 'EN 10204 3.1', datum: '10 feb 2025', orderRef: 'ORD-2025-089' },
]

export interface LijstItem {
  artikel: string
  specificatie: string
  hoeveelheid: string
}

export interface Lijst {
  id: string
  naam: string
  aangemaakt: string
  items: LijstItem[]
}

export const LIJSTEN: Lijst[] = [
  {
    id: 'LIST-001',
    naam: 'Standaard RVS bestelling Q2',
    aangemaakt: '18 mrt 2025',
    items: [
      { artikel: 'RVS 316L plaat', specificatie: '3mm, 2000x1000', hoeveelheid: '10 platen' },
      { artikel: 'RVS 316L plaat', specificatie: '5mm, 2000x1000', hoeveelheid: '5 platen' },
      { artikel: 'RVS 316 flens', specificatie: 'DN50 PN16 ANSI', hoeveelheid: '12 stuks' },
      { artikel: 'RVS 316 buis', specificatie: 'ø88,9x3,2mm, L=6m', hoeveelheid: '6 stuks' },
    ],
  },
  {
    id: 'LIST-002',
    naam: 'Aluminium profielen project Leiden',
    aangemaakt: '5 feb 2025',
    items: [
      { artikel: 'Aluminium buis', specificatie: '6082 T6, ø60x3mm, L=6m', hoeveelheid: '40 stuks' },
      { artikel: 'Aluminium plaat', specificatie: '5754 H22, 4mm, 2000x1000', hoeveelheid: '8 platen' },
      { artikel: 'Aluminium hoekprofiel', specificatie: '6060 T6, 50x50x5mm', hoeveelheid: '20 stuks' },
    ],
  },
]
