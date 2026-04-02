export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: number
  content: BlogSection[]
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'tip'
  text?: string
  items?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'rvs-304-vs-316',
    title: 'Roestvrij staal 304 vs. 316: Wanneer kies je welke kwaliteit?',
    excerpt: 'Twee van de meest gebruikte RVS-kwaliteiten staan vaak naast elkaar in offertes. Maar wat is het verschil, en wanneer is 316 de betere keuze boven 304?',
    category: 'Roestvrij Staal',
    date: '2 april 2026',
    readTime: 5,
    content: [
      { type: 'paragraph', text: 'Bij het inkopen van roestvrij staal komt u vrijwel altijd twee soorten tegen: AISI 304 en AISI 316. Beide zijn uitstekende roestvaste staalsoorten, maar er zijn wezenlijke verschillen die bepalen welke geschikt is voor uw toepassing.' },
      { type: 'heading', text: 'De samenstelling maakt het verschil' },
      { type: 'paragraph', text: 'AISI 304 — ook wel 18/8-staal genoemd — bevat circa 18% chroom en 8% nikkel. Dit is de meest gangbare roestvrijstaalsoort en biedt uitstekende corrosiebestendigheid in de meeste omgevingen. AISI 316 voegt daar zo\'n 2 tot 3% molybdeen aan toe. Dat klinkt misschien klein, maar molybdeen verhoogt de weerstand tegen chloriden — zoals zout water, zuren en bepaalde chemicaliën — aanzienlijk.' },
      { type: 'heading', text: 'Wanneer kiest u voor 304?' },
      { type: 'list', items: [
        'Algemene constructieve toepassingen binnenshuis',
        'Keukens, horeca en voedselverwerkende omgevingen (lage chlorideblootstelling)',
        'Architecturale elementen zoals trapleuningen, gevelbekleding en interieurplaten',
        'Situaties waarbij kostenbesparing een rol speelt en de omgeving niet bijzonder agressief is',
      ]},
      { type: 'heading', text: 'Wanneer is 316 de betere keuze?' },
      { type: 'list', items: [
        'Buitentoepassingen nabij zee of in zout klimaat',
        'Chemische industrie, farmaceutische productie en laboratoria',
        'Sanitaire buizen in de voedsel- en zuivelindustrie (316L)',
        'Maritieme omgevingen en offshore-toepassingen',
        'Zwembaden en toepassingen met chloorbevattend water',
      ]},
      { type: 'tip', text: 'Let ook op de "L"-variant: 304L en 316L bevatten minder koolstof, wat ze beter lasbaar maakt zonder risico op interkristallijne corrosie na het lassen.' },
      { type: 'heading', text: 'Kostenoverweging' },
      { type: 'paragraph', text: 'AISI 316 kost doorgaans 20 tot 30% meer dan 304, vanwege het molybdeengehalte. Voor veel toepassingen is 304 meer dan voldoende. Pas voor agressieve omgevingen is de meerprijs van 316 gerechtvaardigd — en op de lange termijn vaak goedkoper door een langere levensduur en minder onderhoud.' },
      { type: 'paragraph', text: 'Twijfelt u welke kwaliteit het beste bij uw project past? Neem contact op met onze specialisten. Wij helpen u de juiste keuze maken op basis van de toepassing, omgeving en budget.' },
    ],
  },

  {
    slug: 'decoratieve-rvs-afwerkingen',
    title: 'Decoratief roestvrij staal: Van Spiegel tot Goud en alles daartussenin',
    excerpt: 'Roestvrij staal hoeft helemaal niet koud en industrieel te ogen. Ontdek de wereld van decoratieve afwerkingen — van hoogglans spiegel tot gebronsd en gekleurd.',
    category: 'Decoratief',
    date: '2 april 2026',
    readTime: 6,
    content: [
      { type: 'paragraph', text: 'Decoratief roestvrij staal wint terrein in architectuur, interieurdesign en gevelbekleding. De combinatie van duurzaamheid, reinigbaarheid en esthetische flexibiliteit maakt het een materiaal dat zowel door architecten als opdrachtgevers steeds vaker wordt gespecificeerd.' },
      { type: 'heading', text: 'De meest gevraagde afwerkingen' },
      { type: 'paragraph', text: 'Spiegelafwerking (ook wel "Ayna" of Mirror) is het meest herkenbaar: een hoogglans, reflecterend oppervlak dat ruimtes optisch vergroot. Populair in liften, horeca-interieurs en representatieve ruimten. HL (Hairline) biedt een strakke, gebürstete uitstraling met fijne, parallelle lijnen — standaard in de professionele keukenindustrie en moderne architectuur.' },
      { type: 'heading', text: 'Kleur en coating: goud, roze, zwart en meer' },
      { type: 'paragraph', text: 'Via PVD-coating (Physical Vapour Deposition) is roestvrij staal te voorzien van een duurzame kleurlaag. Populaire kleuren zijn Goud, Roze (ook wel Rosé Gold), Zwart, Brons en Blauw. De kleurlaag is niet slechts een verflaag, maar een moleculair gebonden coating die de levensduur en krasbestendigheid van het RVS behoudt.' },
      { type: 'list', items: [
        'Goud spiegel en Goud HL — klassiek en luxueus, ideaal voor horeca en retail',
        'Roze spiegel en Roze HL — modern en warm, populair in wellness en fashion retail',
        'Zwart spiegel en Zwart HL — strak en tijdloos, veelgevraagd in high-end interieurs',
        'Brons en Copper Antique — rustieke luxe uitstraling voor boutique-projecten',
        'Blauw — speels en opvallend, geschikt voor accent-elementen',
      ]},
      { type: 'heading', text: 'Reliëf- en patroonplaten' },
      { type: 'paragraph', text: 'Naast vlakke afwerkingen zijn er ook reliëfplaten: RVS-platen met ingedrukte, driedimensionale patronen. Denk aan geometrische patronen, bloemmotieven of ruitpatronen. Deze platen zijn bijzonder geschikt voor wand- en plafondtoepassingen waarbij structuur en textuur een rol spelen.' },
      { type: 'tip', text: 'Alle decoratieve platen van Arkstaal zijn beschikbaar met materiaalcertificaat. Vraag bij grotere projecten altijd een monster aan voordat u definitief bestelt — kleurnuances kunnen per charge licht verschillen.' },
      { type: 'heading', text: 'Toepassingen in de praktijk' },
      { type: 'list', items: [
        'Liften en hal-bekleding in kantoren en hotels',
        'Keukenachterwanden en fronten in de horeca',
        'Gevelbekleding en architecturale accenten',
        'Meubels, bars en toonbanken',
        'Deuren, kozijnen en trapleuningen',
      ]},
    ],
  },

  {
    slug: 'aluminium-in-de-industrie',
    title: 'Aluminium in de industrie: Licht, sterk en breed inzetbaar',
    excerpt: 'Aluminium is al decennia lang een van de meest gebruikte constructiemetalen. Maar waarom precies? En welke soorten passen bij welke toepassing?',
    category: 'Aluminium',
    date: '2 april 2026',
    readTime: 5,
    content: [
      { type: 'paragraph', text: 'Aluminium heeft een bijzondere positie in de metaalwereld: het is licht (circa een derde van het gewicht van staal), goed corrosiebestendig, uitstekend bewerkbaar en volledig recyclebaar. Die combinatie maakt het tot een van de meest gevraagde constructiemetalen in transport, bouw, machine-industrie en consumentengoederen.' },
      { type: 'heading', text: 'Waarom aluminium zo populair is' },
      { type: 'list', items: [
        'Gewichtsvoordeel: minder gewicht betekent lagere transportkosten en eenvoudiger montage',
        'Corrosiebestendigheid: aluminium vormt van nature een beschermende oxidelaag',
        'Goed bewerkbaar: uitstekend te frezen, draaien, zagen en lassen',
        'Thermisch en elektrisch geleidend — waardevol in elektronica en klimaatinstallaties',
        'Volledig recyclebaar zonder kwaliteitsverlies',
      ]},
      { type: 'heading', text: 'Aluminium platen: kwaliteit voor precisiebewerking' },
      { type: 'paragraph', text: 'Spanningsarme aluminium platen zijn optimaal voor CNC-frezen, lasersnijden en andere bewerkingsmachines. Door de gelijkmatige inwendige spanningsverdeling zijn maatafwijkingen na bewerking minimaal — een cruciale eigenschap in de precisie-industrie.' },
      { type: 'heading', text: 'Buizen, profielen en staven' },
      { type: 'paragraph', text: 'Geëxtrudeerde aluminium profielen zijn verkrijgbaar in een enorme variatie: ronde buizen, vierkante profielen, hoekstalen, U-profielen en I-balken. Standaard legeringen zoals 6060, 6061 en 6082 bieden een goede balans tussen sterkte en bewerkbaarheid. Voor toepassingen waarbij hogere sterkte vereist is, is legering 7075 een optie.' },
      { type: 'heading', text: 'Geanodiseerd aluminium' },
      { type: 'paragraph', text: 'Door anodiseren wordt de natuurlijke oxidelaag van aluminium verdikt en verhard. Het resultaat is een harder, slijtvaster oppervlak dat ook decoratief gekleurd kan worden. Geanodiseerd aluminium is populair in de bouw, elektronica en consumentenproducten.' },
      { type: 'tip', text: 'Let bij inkoop op de legeringsaanduiding. Voor de meeste constructietoepassingen volstaat 6082-T6. Voor plaat- en freerwerk is 5083 of 6061 populair. Bespreek uw toepassing met onze specialisten voor het beste advies.' },
    ],
  },

  {
    slug: 'materiaalcertificaten',
    title: 'Materiaalcertificaten: Waarom ze onmisbaar zijn bij professionele metaalinkoop',
    excerpt: 'Een materiaalcertificaat klinkt misschien als administratieve rompslomp, maar het is een essentieel document voor traceerbaarheid, kwaliteitsborging en veiligheid.',
    category: 'Inkoop & Kwaliteit',
    date: '2 april 2026',
    readTime: 4,
    content: [
      { type: 'paragraph', text: 'In de metaalindustrie zijn materiaalcertificaten (ook wel testcertificaten, inspectiecertificaten of mill certs genoemd) de standaard voor het aantonen van de materiaaleigenschappen van geleverd materiaal. Voor professionele inkopers, constructeurs en kwaliteitsmanagers zijn ze onmisbaar.' },
      { type: 'heading', text: 'Wat staat er in een materiaalcertificaat?' },
      { type: 'list', items: [
        'Materiaalsoort en legering (bijv. AISI 316L, EN 1.4404)',
        'Chemische samenstelling (percentages van de legeringselementen)',
        'Mechanische eigenschappen (treksterkte, vloeigrens, rek)',
        'Warmtenummer en chargennummer (voor traceerbaarheid)',
        'Producent en productiedatum',
        'Verwijzing naar de van toepassing zijnde norm (bijv. EN 10204 type 3.1)',
      ]},
      { type: 'heading', text: 'Type 2.1, 2.2 en 3.1: het verschil' },
      { type: 'paragraph', text: 'Materiaalcertificaten zijn genormeerd volgens EN 10204. Type 2.1 is een bevestiging dat het materiaal voldoet aan de bestelling — zonder specifieke testresultaten. Type 2.2 bevat testresultaten, maar gebaseerd op niet-specifieke inspectie. Type 3.1 is het zwaarste: specifieke inspectie op de bestelling, uitgevoerd door de producent zelf en getekend door een geautoriseerde inspecteur. Voor druktoestellen, ATEX-toepassingen en de petrochemie is 3.1 standaard vereist.' },
      { type: 'heading', text: 'Traceerbaarheid in de praktijk' },
      { type: 'paragraph', text: 'Met een materiaalcertificaat kunt u het materiaal altijd herleiden tot de smelt en het productieproces. Dit is cruciaal bij keuringen, bij garantieclaims en wanneer er vragen rijzen over afwijkend materiaalgedrag. In kritische toepassingen — denk aan drukvaten, voedselverwerking of medische apparatuur — is dit niet optioneel maar wettelijk verplicht.' },
      { type: 'tip', text: 'Bij Arkstaal worden materiaalcertificaten standaard per e-mail meegezonden vóór elke levering. Zo heeft u de documenten bij de hand op het moment van ontvangst en kunt u uw eigen administratie direct bijhouden.' },
    ],
  },

  {
    slug: 'anodiseren-aluminium',
    title: 'Anodiseren van aluminium: Wat het is, hoe het werkt en wanneer het loont',
    excerpt: 'Anodiseren is meer dan een coating — het is een elektrolytisch proces dat de aluminium oppervlaktestructuur zelf omzet. Het resultaat: harder, duurzamer en decoratief.',
    category: 'Aluminium',
    date: '2 april 2026',
    readTime: 5,
    content: [
      { type: 'paragraph', text: 'Aluminium is van nature al redelijk corrosiebestendig dankzij een dunne, spontaan gevormde oxidelaag. Maar voor hogere slijtvastheid, betere corrosiebestendigheid of een decoratief gekleurde afwerking, wordt aluminium anodiseren toegepast. Het is een van de meest gebruikte oppervlaktebehandelingen voor aluminium wereldwijd.' },
      { type: 'heading', text: 'Hoe werkt het anodiseerproces?' },
      { type: 'paragraph', text: 'Bij anodiseren wordt het aluminium als anode in een elektrolytbad geplaatst (doorgaans zwavelzuur). Door gelijkstroom door het bad te sturen, oxideren de buitenste aluminiummoleculen gecontroleerd. Er groeit een compacte, harde oxidelaag van aluminium-oxide (Al₂O₃), die integraal deel uitmaakt van het metaal — niet een laag die er overheen zit, maar onderdeel van het oppervlak zelf.' },
      { type: 'heading', text: 'Kleuren en typen' },
      { type: 'list', items: [
        'Helder / Naturel anodiseren — matte tot satijnen uitstraling, behoudt de metaalkleur',
        'Zwart anodiseren — populair in de elektronica en precisie-industrie',
        'Kleuranodiseren — via organische kleurstoffen in de poriën: goud, brons, rood, blauw e.v.a.',
        'Hard anodiseren — dikke laag (25–150 µm) voor extreme slijtvastheid in technische toepassingen',
      ]},
      { type: 'heading', text: 'Voordelen van geanodiseerd aluminium' },
      { type: 'list', items: [
        'Aanzienlijk hogere oppervlaktehardheid dan blank aluminium',
        'Verbeterde corrosiebestendigheid, ook in buitentoepassingen',
        'Permanente kleur die niet afschilfert of vervaagt',
        'Elektrisch isolerend oppervlak (voor elektronicatoepassingen)',
        'Milieuvriendelijker dan verven of bekleden',
      ]},
      { type: 'tip', text: 'Anodiseren vergt een homogene legering en een schone oppervlakteconditie. Niet alle aluminiumlegeringen anodiseren gelijkmatig. Legeringen uit de 5000- en 6000-serie zijn het meest geschikt voor een egaal resultaat.' },
      { type: 'heading', text: 'Toepassingen' },
      { type: 'paragraph', text: 'Geanodiseerd aluminium is overal: in smartphone-behuizingen, gevelplaten, raamkozijnen, interieurelementen, sportartikelen, militaire uitrusting en de luchtvaartindustrie. Het is een bewezen, duurzame oppervlaktebehandeling met een uitstekende prijs-kwaliteitverhouding.' },
    ],
  },

  {
    slug: 'koper-toepassingen',
    title: 'Koper in de bouw en industrie: Eigenschappen, legeringen en toepassingen',
    excerpt: 'Koper is een van de oudste constructiemetalen die de mens kent — en nog altijd onmisbaar. Van elektrische installaties tot architecturale gevels en industriële pijpen.',
    category: 'Koper',
    date: '2 april 2026',
    readTime: 5,
    content: [
      { type: 'paragraph', text: 'Koper (Cu) heeft een unieke combinatie van eigenschappen die het onvervangbaar maken in tal van industrieën. De uitstekende elektrische en thermische geleidbaarheid, gecombineerd met corrosiebestendigheid en antimicrobiële eigenschappen, maken het een materiaal met een breed toepassingsveld.' },
      { type: 'heading', text: 'Elektrische en thermische toepassingen' },
      { type: 'paragraph', text: 'Koper is de standaard voor elektrische geleiders, van huisinstallaties tot energietransport en elektronicaproductie. De elektrische geleidbaarheid van koper is 97% van dat van zilver — het beste niet-edele metaal voor dit doel. In warmtewisselaars, radiatoren, airco-systemen en koelinstallaties is koper de standaard vanwege de hoge thermische geleidbaarheid.' },
      { type: 'heading', text: 'Koperen buizen in de installatietechniek' },
      { type: 'paragraph', text: 'Koperen leidingbuizen zijn al decennia de standaard in sanitair- en verwarmingsinstallaties. Ze zijn corrosiebestendig, hygiënisch (koper heeft bacteriostatische eigenschappen), flexibel te buigen en eenvoudig te solderen. Beschikbaar in rechte lengtes en rollen voor CV, warmtapwater en klimaatinstallaties.' },
      { type: 'heading', text: 'Architecturaal koper' },
      { type: 'paragraph', text: 'In de bouw wordt koper gebruikt voor dakbedekkingen, gevelbeplating, dakgoten en aansluitingen. Koper patineert over tijd naar een karakteristiek groenachtig-grijs (verdigris), wat architecten vaak bewust inzetten als designelement. Bekende voorbeelden zijn de koepels van historische gebouwen en moderne museumfaçades.' },
      { type: 'list', items: [
        'Koperen platen voor dak en gevel: duurzaam, zelfherstellend door patinalaag',
        'Koperen buizen voor sanitair en HVAC',
        'Koperen staven voor elektrische componenten, connectors en schakelmateriaal',
        'Koper in warmtewisselaars en koelinstallaties',
      ]},
      { type: 'tip', text: 'Bij gebruik van koper samen met andere metalen in één constructie dient u galvanische corrosie te vermijden. Vermijd direct contact tussen koper en aluminium in een vochtige omgeving zonder isolerende tussenlaag.' },
    ],
  },

  {
    slug: 'messing-legering',
    title: 'Messing: De veelzijdige legering die al eeuwen zijn waarde bewijst',
    excerpt: 'Messing (CuZn) is een koper-zinklegering met uitstekende bewerkbaarheid, een warme uitstraling en brede toepassingen van precisieonderdelen tot architecturale accenten.',
    category: 'Messing',
    date: '2 april 2026',
    readTime: 4,
    content: [
      { type: 'paragraph', text: 'Messing is een legering van koper en zink, met een zinkgehalte dat doorgaans varieert tussen 5% en 45%. De verhouding bepaalt in hoge mate de eigenschappen: meer zink geeft een harder, sterker materiaal; meer koper geeft meer ductiliteit en betere geleidbaarheid. Messing staat bekend om zijn goudachtige kleur, uitstekende bewerkbaarheid en corrosiebestendigheid.' },
      { type: 'heading', text: 'Waarom messing zo goed verspanbaar is' },
      { type: 'paragraph', text: 'Vrijdraaiend messing (ook wel automatenmessing, bijv. CuZn39Pb3) bevat een kleine hoeveelheid lood die zorgt voor korte, gemakkelijk afbrekende spanen tijdens het draaien en frezen. Dit maakt het tot een ideaal materiaal voor serieproductie op automatendraaibanken — snel, nauwkeurig en met weinig slijtage aan gereedschap.' },
      { type: 'heading', text: 'Toepassingen in de industrie' },
      { type: 'list', items: [
        'Precisieonderdelen op automatendraaibanken: schroeven, moeren, kogelkranen, sanitaire fittingen',
        'Hydraulische koppelingen en pneumatische aansluitingen',
        'Elektrische connectors en schakelmateriaal',
        'Muziekinstrumenten (trompetten, trombones, saxofoons)',
        'Hangsloten, deurkrukken en architecturale hardware',
      ]},
      { type: 'heading', text: 'Decoratief messing' },
      { type: 'paragraph', text: 'In de interieurindustrie is messing — zowel blank als geborsteld — teruggekeerd als een populaire materiaalkeuze. Van kranen en handgrepen tot verlichting en meubels: de warme, goudachtige uitstraling van messing geeft interieurprojecten een karakter van tijdloze kwaliteit. Messingplaten zijn ook toepasbaar als wandbekleding of voor decoratieve meubeldelen.' },
      { type: 'tip', text: 'Messing oxideert bij blootstelling aan lucht en vocht, waardoor het een donkerdere patina ontwikkelt. Dit kan bewust worden ingezet als designelement, of worden voorkomen met een transparante laktlaag.' },
    ],
  },

  {
    slug: 'op-maat-zagen',
    title: 'Op maat zagen: Hoe prefab metaalbewerking uw project efficiënter maakt',
    excerpt: 'Steeds meer bedrijven laten metaal op maat aanleveren in plaats van zelf te zagen. Wat zijn de voordelen, en wanneer is het de juiste keuze?',
    category: 'Services',
    date: '2 april 2026',
    readTime: 4,
    content: [
      { type: 'paragraph', text: 'Het zagen van metaal klinkt eenvoudig, maar in de praktijk vergt het investering in apparatuur, personeel, afvalverwerking en tijd. Voor veel bedrijven is het slimmer om metaal al op maat aangeleverd te krijgen. Dat bespaart niet alleen geld, maar ook ruimte en handelingen in het eigen productieproces.' },
      { type: 'heading', text: 'Voordelen van op maat geleverd materiaal' },
      { type: 'list', items: [
        'Minder materiaalverlies: u betaalt voor wat u gebruikt, niet voor snijresten',
        'Minder bewerkingstijd in uw eigen productie',
        'Geen investering in zaagmachines, koelvloeistoffen en onderhoudskosten',
        'Minder afvalverwerking en betere materiaalbenutting',
        'Consistente nauwkeurigheid bij herhaaldelijke orders',
      ]},
      { type: 'heading', text: 'Platen en sheets: spanningsarm voor machinale bewerking' },
      { type: 'paragraph', text: 'Speciaal voor platen die verder worden bewerkt in CNC-frees- of lasersnijmachines, is de kwaliteit van het basismateriaal cruciaal. Spanningsarme platen vertonen geen krom- of terugveren na het zagen, waardoor maatnauwkeurigheid behouden blijft. Bij Arkstaal leveren wij platen op exacte klantafmetingen in staal, aluminium en roestvrij staal.' },
      { type: 'heading', text: 'Buizen en profielen op lengtemaat' },
      { type: 'paragraph', text: 'Buizen, staven en profielen worden standaard geleverd in handelsbare lengtes van 3, 6 of 12 meter. Door vooraf de gewenste stuklengte op te geven, worden de buizen in uw eigen werkplaats direct inzetbaar aangeleverd. Dit voorkomt tijdverspilling en verbetert de logistieke efficiency.' },
      { type: 'tip', text: 'Geef bij uw offerte-aanvraag altijd de exacte afmetingen en het gewenste aantal stuks op. Dan kunnen wij de optimale nesting berekenen om materiaalverspilling te minimaliseren.' },
      { type: 'heading', text: 'Voor wie is dit interessant?' },
      { type: 'list', items: [
        'Fabrikanten die met vaste seriematige productie werken',
        'Installatiebedrijven die buizen en profielen in vaste lengtes verwerken',
        'Machinebouwers en constructiebedrijven die platen op maat verwerken',
        'Bedrijven zonder eigen zaagcapaciteit of die deze willen uitfaseren',
      ]},
    ],
  },

  {
    slug: 'non-ferro-metalen',
    title: 'Non-ferro metalen: Titanium, brons en zink in de praktijk',
    excerpt: 'Non-ferro metalen zijn niet zo alomtegenwoordig als staal of aluminium, maar in hun specifieke toepassingen zijn ze onvervangbaar. Een overzicht van de praktijk.',
    category: 'Non-ferro',
    date: '2 april 2026',
    readTime: 5,
    content: [
      { type: 'paragraph', text: 'Non-ferro metalen zijn alle metalen die geen ijzer bevatten. Naast koper, messing en aluminium — die we elders behandelen — verdienen titanium, brons en zink een eigen bespreking. Elk heeft unieke eigenschappen die ze tot de juiste keuze maken in specifieke sectoren.' },
      { type: 'heading', text: 'Titanium: het lichtste constructiemetaal met staalsterkte' },
      { type: 'paragraph', text: 'Titanium heeft een verhouding sterkte/gewicht die geen enkel ander gangbaar constructiemetaal benadert. Het is licht als aluminium, maar sterk als staal — en bovendien uitstekend corrosiebestendig, zelfs in zeewateromgevingen en zuurmilieus. Graad 2-titanium (commercieel puur) is geschikt voor chemische industrie en medische toepassingen. Graad 5 (Ti-6Al-4V) is de lucht- en ruimtevaartlegering bij uitstek.' },
      { type: 'list', items: [
        'Lucht- en ruimtevaartcomponenten (frames, motoronderdelen)',
        'Medische implantaten (heupprothesen, tandimplantaten) — bioinert materiaal',
        'Chemische industrie: apparaten en opslagtanks voor agressieve media',
        'Offshore en mariene toepassingen',
        'Sportartikelen: fietsen, golfclubs, zeiljachten',
      ]},
      { type: 'heading', text: 'Brons: van lagers tot kunst' },
      { type: 'paragraph', text: 'Brons is een legering van koper en tin (CuSn). Het is harder dan koper, heeft lage wrijvingscoëfficiënten en is uitstekend bestand tegen corrosie en slijtage. In de machine-industrie wordt brons gebruikt voor lagers, glijlagers, tandwielen en pomponderdelen. In de kunst- en bouwsector wordt brons al eeuwenlang gebruikt voor beeldhouwwerken, kerkklokken en architecturale ornamenten.' },
      { type: 'heading', text: 'Zink: onzichtbaar maar overal' },
      { type: 'paragraph', text: 'Zink is het materiaal achter galvanisch verzinken — de meest toegepaste corrosiebescherming voor staal wereldwijd. Als basiszink (puur zink of legeringen) wordt het gebruikt voor spuitgietcomponenten, dakbedekkingsmateriaal (zinkplaat) en anodes voor kathodische bescherming. Zink is bovendien volledig recyclebaar en heeft een lage smeltemperatuur, ideaal voor giettoepassingen.' },
      { type: 'tip', text: 'De keuze voor het juiste non-ferro metaal hangt sterk af van de bedrijfstemperatuur, chemische omgeving en gewenste levensduur. Vraag onze specialisten om advies als u een specifieke toepassing in gedachten heeft.' },
    ],
  },

  {
    slug: 'buizen-flenzen-fittingen',
    title: 'Buizen, flenzen en fittingen: De juiste verbinding voor elk project',
    excerpt: 'Een leidingsysteem is zo sterk als zijn zwakste verbinding. Hoe kiest u de juiste buizen, flenzen en fittingen — en waar moet u op letten bij specificatie?',
    category: 'Buizen & Fittingen',
    date: '2 april 2026',
    readTime: 6,
    content: [
      { type: 'paragraph', text: 'Buissystemen zijn de aders van de industrie: ze transporteren water, stoom, gassen, chemicaliën en voedingsproducten door fabrieken, installaties en gebouwen. De keuze van het juiste materiaal en de juiste verbindingstechniek is bepalend voor veiligheid, levensduur en onderhoudsvriendelijkheid.' },
      { type: 'heading', text: 'Naadloze vs. gelaste buizen' },
      { type: 'paragraph', text: 'Naadloze buizen worden geproduceerd door een stalen blok te extruderen of te trekken, zonder lasnaad. Ze zijn homogener in structuur en geschikt voor hogere drukken en temperaturen. Gelaste buizen zijn goedkoper te produceren en beschikbaar in grotere diameters; voor veel toepassingen zijn ze technisch volledig gelijkwaardig. Voor druktoestellen en kritische leidingen wordt vaak naadloos voorgeschreven.' },
      { type: 'heading', text: 'Flenzen: de keuze bepaalt de montageflexibiliteit' },
      { type: 'list', items: [
        'Lashalsflens (Weld Neck) — direct gelast aan de buis, ideaal voor hoge druk en temperatuur',
        'Insteekflens (Slip-On) — over de buis geschoven en aan voor- en achterkant gelast; eenvoudig te monteren',
        'Blindflens — om een leidinguiteinde af te sluiten; ook bruikbaar voor inspectiedoeleinden',
        'Schroefdraadflens — geschikt voor lage druk, snelle montage zonder lassen',
        'Losse flens met pijpstuk — herbruikbaar bij onderhoud; populair bij kunststofleidingen',
      ]},
      { type: 'heading', text: 'Fittingen: de hoeken en vertakkingen' },
      { type: 'paragraph', text: 'Fittingen verbinden buizen met elkaar en zorgen voor richtingsveranderingen, vertakkingen en diameter-overgangen. Bochten (elbows) in 45° en 90°, T-stukken, kruisstukken en verloopstukken zijn de basiscomponenten van elk leidingsysteem. In roestvrij staal worden ze geleverd conform DIN EN en ANSI/ASME normen.' },
      { type: 'heading', text: 'Normen en materiaalcertificaten' },
      { type: 'paragraph', text: 'Bij professionele projecten is normering cruciaal. DIN EN 10217 en 10216 zijn de Europese normen voor gelaste resp. naadloze stalen buizen. ASME B16.5 en B16.9 zijn Amerikaanse normen voor flenzen en fittingen, gangbaar in de olie- en gasindustrie. Materiaalcertificaten (EN 10204 3.1) zijn bij drukvoerende onderdelen vaak wettelijk vereist.' },
      { type: 'tip', text: 'Vermeld bij offerte-aanvragen altijd: materiaalsoort (bijv. 316L), buitendiameter (OD) en wanddikte of schedule-nummer, drukklasse (PN of Class), normering (DIN of ANSI) en eventuele certificaatvereisten. Hiermee voorkomt u misverstanden en versnelt u het offerteproces.' },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}
