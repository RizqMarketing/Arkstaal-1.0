export type Lang = 'nl' | 'en'

export const translations = {
  nl: {
    // ── NAV ──────────────────────────────────────────────────
    nav: {
      products: 'Producten',
      services: 'Services',
      downloads: 'Downloads',
      decorative: 'Decoratief',
      about: 'Over ons',
      contact: 'Contact',
      myAccount: 'Mijn Arkstaal',
      requestQuote: 'Offerte aanvragen',
      searchPlaceholder: 'Zoek producten, materialen, afwerkingen…',
      // dropdown
      stainlessSteel: 'Roestvrij Staal',
      sheetsCoils: 'Platen & Rollen',
      pipesTubes: 'Buizen & Profielen',
      flangesFittings: 'Flenzen & Fittingen',
      barsFlatTypes: 'Staven & Platte Types',
      decorativeFinishes: 'Decoratieve Afwerkingen',
      aluminium: 'Aluminium',
      sheetsPlates: 'Platen & Sheets',
      tubesProfiles: 'Buizen & Profielen',
      barsRods: 'Staven & Ronden',
      anodized: 'Geanodiseerd',
      otherMetals: 'Andere Metalen',
      copper: 'Koper',
      brass: 'Messing',
      nonFerrous: 'Non-ferro',
      foilingDecoiling: 'Folieren & Decoilen',
      anodizing: 'Anodiseren',
      customCutting: 'Op maat zagen',
      materialCerts: 'Materiaalcertificaten',
    },

    // ── HERO ─────────────────────────────────────────────────
    hero: {
      eyebrow: 'Culemborg, Nederland — Sinds 2014',
      title: 'Uw specialist in\nroestvrij staal & aluminium',
      sub: 'Buizen, flenzen, fittingen en decoratief roestvrij staal. Breed assortiment, korte levertijden, materiaalcertificaten inbegrepen.',
      cta1: 'Bekijk assortiment',
      cta2: 'Offerte aanvragen',
    },

    // ── PRODUCTS ─────────────────────────────────────────────
    products: {
      label: 'Ons assortiment',
      title: 'Metalen voor elke toepassing',
      sub: 'Van basismateriaal tot op maat gesneden onderdelen. Kies een materiaal om ons volledige assortiment te verkennen.',
      notFound: 'Niet gevonden wat u zoekt? Neem contact op met onze specialisten.',
      requestQuote: 'Offerte aanvragen',
      viewProducts: 'Bekijk producten',
      tabLabels: {
        aluminium: 'Aluminium',
        steel: 'Staal',
        stainless: 'Roestvrij Staal',
        copper: 'Koper',
        brass: 'Messing',
        nonferrous: 'Non-ferro',
        fittings: 'Fittingen',
        plastics: 'Kunststof',
      },
      badges: { Popular: 'Populair', Specialty: 'Specialiteit' },
      items: {
        aluminium: [
          { title: 'Platen & Sheets', desc: 'Hoogwaardige, spanningsarme aluminium platen. Optimaal bewerkbaar in lasersnijmachines en andere machines zonder kwaliteitsverlies.', badge: 'Populair' },
          { title: 'Buizen & Profielen', desc: 'Ronde, vierkante en rechthoekige aluminium buizen. Geëxtrudeerde profielen in standaard en maatwerk afmetingen.' },
          { title: 'Staven & Ronden', desc: 'Massieve en holle staven voor verspaning, constructie en technische toepassingen.' },
          { title: 'Open Profielen', desc: 'Hoekstalen, U-profielen, I-balken en T-profielen in aluminiumlegeringen voor constructieve toepassingen.' },
        ],
        steel: [
          { title: 'Platen & Sheets', desc: 'Warmgewalste en koudgewalste staalplaten in diverse kwaliteiten en diktes voor constructieve en industriële toepassingen.', badge: 'Populair' },
          { title: 'Constructiestaal', desc: 'HEA, HEB, IPE, UNP balken en kolommen voor bouw- en civieltechnische projecten.' },
          { title: 'Staven & Ronden', desc: 'Ronde, vierkante en platte staven in diverse staalsoorten voor verspaning en constructie.' },
          { title: 'Stalen Buizen', desc: 'Naadloze en gelaste stalen buizen voor mechanische en constructieve toepassingen. Ronde, vierkante en rechthoekige secties.' },
          { title: 'Sendzimir Buizen', desc: 'Voorverzinkte buizen volgens Sendzimir-proces. Ronde, vierkante, ovale en rechthoekige profielen voor constructie en industrie.' },
          { title: 'Staalstrip', desc: 'Constructiestrip, dieptrekstrip, koudgewalst en verzinkt. Breed assortiment voor stempelen, buigen en rolvormen.' },
          { title: 'Speciale Profielen', desc: 'Raamkozijn-, leuning-, ovale en driehoekige profielen. Op maat leverbaar voor architecturale en industriële toepassingen.' },
        ],
        stainless: [
          { title: 'Platen & Rollen', desc: 'Standaard en decoratieve roestvrijstalen platen. Warmgewalst, koudgewalst en rol/strip in diverse kwaliteiten.', badge: 'Specialiteit' },
          { title: 'Ronde Buizen', desc: 'Naadloze en gelaste ronde roestvrijstalen buizen in diverse maten en wanddiktes. Geschikt voor constructie, industrie en sanitaire toepassingen.' },
          { title: 'Vierkante & Rechthoekige Buizen', desc: 'Vierkante en rechthoekige profielen in roestvrij staal voor mechanische en architecturale projecten.' },
          { title: 'Ovale Buizen', desc: 'Ovale roestvrijstalen buizen voor decoratieve en architecturale toepassingen zoals leuningen en interieurelementen.' },
          { title: 'Sanitaire Buizen', desc: 'Melkvee- en voedingskwaliteit roestvrijstalen buizen (AISI 304/316L). Gepolijst inwendig voor hygiënische toepassingen in voedsel- en zuivelindustrie.' },
          { title: 'Flenzen & Fittingen', desc: 'Buizen, flenzen en fittingen in roestvrij staal en speciale legeringen. Materiaalcertificaten inbegrepen.' },
          { title: 'Staven & Platte Types', desc: 'Hoekstaven, platte staven, ronden en profielen in roestvrij staal voor een breed scala aan industriële toepassingen.' },
        ],
        copper: [
          { title: 'Koperen Platen', desc: 'Hoogzuivere koperplaten voor elektrische en architectonische toepassingen.' },
          { title: 'Koperen Buizen', desc: 'Koperen buizen in rechte lengtes en rollen voor diverse toepassingen.' },
          { title: 'Koperen Staven', desc: 'Platte en ronde staven voor elektrisch en industrieel gebruik.' },
        ],
        brass: [
          { title: 'Messing Platen', desc: 'CuZn-legeringen voor decoratieve, architectonische en functionele toepassingen.' },
          { title: 'Messing Staven & Ronden', desc: 'Vrijdraaiend messing voor automatendraaibanken en precisieonderdelen.' },
          { title: 'Messing Buizen', desc: 'Getrokken messing buizen in ronde profielen voor hydraulische en decoratieve toepassingen.' },
        ],
        nonferrous: [
          { title: 'Titanium', desc: 'Graad 2 en graad 5 titanium voor lucht- en ruimtevaart, medische en chemische toepassingen.' },
          { title: 'Brons', desc: 'Brons in platen, staven en buizen. CuSn-legeringen voor lagers, tandwielen en corrosiebestendige constructies.' },
          { title: 'Zink', desc: 'Puur zink en legeringen voor spuitgieten, galvaniseren en corrosiebeschermingstoepassingen.' },
        ],
        fittings: [
          { title: 'Buisfittingen', desc: 'Bochten, T-stukken, verloopstukken en doppen in roestvrij staal en speciale legeringen. DIN/ANSI normen.' },
          { title: 'Flenzen', desc: 'Insteekflenzen, lashalsflenzen en blindflenzen conform DIN en ANSI normen.' },
        ],
        plastics: [
          { title: 'Delrin (POM)', desc: 'Hoge stijfheid, lage wrijving en uitstekende maatnauwkeurigheid. Ideaal voor precisieonderdelen in mechanische en elektrische toepassingen.' },
          { title: 'Polyethyleen (PE)', desc: 'Slagvast, chemisch bestendig en eenvoudig te bewerken. Beschikbaar als platen, staven en buizen voor uiteenlopende industriële toepassingen.' },
          { title: 'Polyamide / Kestamid (PA)', desc: 'Hoge slijtvastheid en mechanische sterkte. Gegoten polyamide voor lagers, glijlagers en constructieve kunststofonderdelen.' },
          { title: 'Teflon (PTFE)', desc: 'Uitstekende chemische bestendigheid en thermische stabiliteit. Geschikt voor afdichtingen, glij-elementen en toepassingen in agressieve omgevingen.' },
        ],
      },
    },

    // ── DECORATIVE ───────────────────────────────────────────
    decorative: {
      label: 'Specialiteit',
      title: 'Decoratief Roestvrij Staal',
      sub: 'Onze specialiteit — roestvrijstalen decoratieplaten in 20+ unieke afwerkingen. Van klassiek Spiegel en Satine tot Goud, Gekleurd, Reliëf en op maat gegraveerde patronen. Perfect voor architecturale, interieur en decoratieve projecten.',
      moreFinishes: '+ veel meer afwerkingen',
      downloadCatalogue: 'Download catalogus',
      cards: [
        { title: 'Spiegelplaten (Ayna)', desc: 'Hoogglans spiegelgepolijste roestvrijstalen platen voor interieur, liften, gevels en representatieve toepassingen.' },
        { title: 'Satine / HL Platen', desc: 'Haarlijngeborstelde afwerking in diverse richtingen. Strak en professioneel — populair in architectuur en keukenindustrie.' },
        { title: 'Patroon Spiegelplaten', desc: 'Spiegelplaten met decoratieve reliëfpatronen — geometrisch, bloem, ruit en meer. Verkrijgbaar in zilver en goud.' },
        { title: 'Gekleurde Platen', desc: 'Gekleurd en gepatroneerd in Goud, Roze, Zwart, Blauw, Brons en meer. Beschikbaar als spiegel en HL afwerking.' },
        { title: 'Reliëf / Embossed Platen', desc: 'Driedimensionaal geperste patronen op roestvrijstalen platen voor een unieke visuele en tactiele uitstraling.' },
      ],
    },

    // ── SERVICES ─────────────────────────────────────────────
    services: {
      label: 'Services',
      title: 'Meer dan alleen levering',
      sub: 'Wij ontzorgen u volledig — van productadvies en offertes tot levering en materiaalcertificaten.',
      items: [
        { title: 'Folieren & Decoilen', desc: 'Wij folieren aluminium platen en decoilen rollen geheel naar uw wensen. Verwerkt in ons moderne servicecentrum.', link: 'Dienst aanvragen' },
        { title: 'Anodiseren', desc: 'Anodiseren creëert een duurzame oxidelaag op aluminium — verkrijgbaar in diverse kleuren voor decoratieve en beschermende doeleinden.', link: 'Meer info' },
        { title: 'Op Maat Zagen', desc: 'Wij produceren platen en sheets op uw exacte afmetingen. Hoogwaardig, spanningsarm materiaal klaar voor lasersnijders en bewerkingsmachines.', link: 'Configureer' },
        { title: 'Materiaalcertificaten', desc: 'Materiaalcertificaten worden per e-mail verstuurd vóór elke levering. Volledige traceerbaarheid bij elke order.', link: 'Meer info' },
        { title: 'Mijn Arkstaal Portaal', desc: 'Log in op uw persoonlijke account om orders te beheren, facturen te bekijken en materiaalcertificaten te downloaden.', link: 'Inloggen', href: '/login' },
        { title: 'Direct Contact', desc: 'Dankzij korte lijnen binnen onze organisatie bedienen wij klanten efficiënt en snel. Bereik ons direct.', link: 'Neem contact op', href: '/contact' },
      ],
    },

    // ── ABOUT ────────────────────────────────────────────────
    about: {
      label: 'Over Arkstaal',
      headline: 'Uw specialist in roestvrij staal & aluminium',
      text: 'Sinds 2014 levert Arkstaal B.V. buizen, flenzen en fittingen in roestvrij staal vanuit ons servicecentrum in Culemborg. Duizenden artikelen op voorraad — leveringsklaar, met volledige materiaaltraceerbaarheid.',
      cta: 'Neem contact op',
      stats: [
        { label: 'Opgericht in' },
        { label: 'Artikelen op voorraad' },
        { label: 'Decoratieve afwerkingen' },
        { label: 'Certs per e-mail' },
      ],
    },

    // ── KNOWLEDGE ────────────────────────────────────────────
    knowledge: {
      label: 'Downloads',
      title: 'Alles wat u nodig heeft',
      cards: [
        { title: 'Decoratieve Catalogus', desc: 'Download onze volledige decoratieve roestvrijstalen catalogus — alle afwerkingen, patronen en specificaties.', link: 'Download PDF' },
        { title: 'Materiaalcertificaten', desc: 'Al onze producten worden geleverd met materiaalcertificaten, per e-mail verstuurd vóór levering. Volledige traceerbaarheid gegarandeerd.', link: 'Info aanvragen' },
        { title: 'Praat met een specialist', desc: 'Korte lijnen — bereik ons direct voor productadvies, offertes en maatwerkopdrachten.', link: 'Neem contact op' },
      ],
    },

    // ── QUOTE POPUP ──────────────────────────────────────────
    quote: {
      title: 'Offerte aanvragen',
      sub: 'Vul het formulier in en wij nemen zo snel mogelijk contact op.',
      name: 'Naam',
      company: 'Bedrijf',
      email: 'E-mail',
      phone: 'Telefoon',
      phoneOptional: '(optioneel)',
      material: 'Materiaal',
      selectMaterial: 'Selecteer materiaal',
      materials: ['Roestvrij Staal', 'Aluminium', 'Koper', 'Messing', 'Brons', 'Non-ferro', 'Kunststof', 'Anders'],
      message: 'Omschrijving',
      messagePlaceholder: 'Omschrijf uw aanvraag — materiaal, afmetingen, hoeveelheid, kwaliteit...',
      send: 'Verstuur aanvraag',
      sent: '✓ Aanvraag ontvangen — we nemen spoedig contact op.',
      dropdownCta: 'Offerte aanvragen',
      dropdownCtaSub: 'Vrijblijvend, binnen één werkdag reactie',
    },

    // ── FAQ ──────────────────────────────────────────────────
    faq: {
      label: 'FAQ',
      title: 'Veelgestelde vragen',
      items: [
        {
          q: 'Leveren jullie ook buiten Nederland?',
          a: 'Ja, we leveren ook in België, Duitsland en andere Europese landen. Neem contact op voor de mogelijkheden in uw regio.',
        },
        {
          q: 'Leveren jullie ook in kleine hoeveelheden?',
          a: 'Ja, we leveren zowel kleine als grote hoeveelheden. Neem contact op en we stellen een passende offerte op.',
        },
        {
          q: 'Zitten er materiaalcertificaten bij de levering?',
          a: 'Ja, bij elke levering sturen wij de bijbehorende materiaalcertificaten per e-mail. Volledige traceerbaarheid gegarandeerd.',
        },
        {
          q: 'Wat zijn de levertijden?',
          a: 'Levertijden variëren per materiaal, kwaliteit en afmeting. Neem contact op voor een actuele indicatie bij uw specifieke aanvraag.',
        },
        {
          q: 'Kunnen producten op maat worden geleverd?',
          a: 'Ja, producten kunnen op maat worden aangeleverd. Vermeld uw gewenste afmetingen in uw aanvraag en we zorgen voor de juiste levering.',
        },
        {
          q: 'In welke kwaliteiten en normen leveren jullie?',
          a: 'We leveren gangbare kwaliteiten zoals AISI 304, 316 en 316L in roestvrij staal, en diverse aluminiumlegeringen. Producten worden geleverd conform DIN, ANSI en EN-normen. Specifieke kwaliteitswensen? Neem contact op.',
        },
        {
          q: 'Is decoratief roestvrij staal ook leverbaar?',
          a: 'Ja, dit is een van onze specialiteiten. We leveren decoratieve roestvrijstalen platen in meer dan 20 afwerkingen — spiegel, satine, gekleurd, gepatroneerd en reliëf.',
        },
      ],
    },

    // ── FOOTER ───────────────────────────────────────────────
    footer: {
      tagline: 'Specialist in roestvrij staal & aluminium.\nGevestigd in Culemborg — sinds 2014.',
      colProducts: 'Producten',
      colServices: 'Diensten',
      colCompany: 'Bedrijf',
      stainlessSteel: 'Roestvrij Staal',
      aluminium: 'Aluminium',
      decorativeFinishes: 'Decoratieve Afwerkingen',
      pipesFlanges: 'Buizen & Flenzen',
      fittings: 'Fittingen',
      foilingDecoiling: 'Folieren & Decoilen',
      anodizing: 'Anodiseren',
      customCutting: 'Op maat zagen',
      materialCerts: 'Materiaalcertificaten',
      myArkstaal: 'Mijn Arkstaal',
      aboutArkstaal: 'Over Arkstaal',
      contact: 'Contact',
      downloadCatalogue: 'Download catalogus',
      copyright: '© 2025 Arkstaal B.V. — Alle rechten voorbehouden.',
      privacy: 'Privacybeleid',
      terms: 'Algemene voorwaarden',
    },

    // ── CONTACT PAGE ─────────────────────────────────────────
    contact: {
      label: 'Contact',
      title: 'Neem contact op',
      sub: 'Direct contact met onze specialisten — snelle reactie, persoonlijk advies.',
      address: 'Adres',
      phone: 'Telefoon',
      email: 'E-mail',
      responseTime: 'Reactietijd',
      responseValue: 'Vaak zelfde werkdag',
      formTitle: 'Stuur ons een bericht',
      name: 'Naam',
      company: 'Bedrijf',
      emailField: 'E-mail',
      phoneField: 'Telefoon',
      phoneOptional: '(optioneel)',
      subject: 'Onderwerp',
      selectTopic: 'Selecteer een onderwerp',
      topics: ['Offerte aanvragen', 'Productinformatie', 'Materiaalcertificaten', 'Bestellingstatus', 'Overig'],
      message: 'Bericht',
      messagePlaceholder: 'Waar bent u naar op zoek? Vermeld materiaal, afmetingen en hoeveelheid indien van toepassing.',
      send: 'Verstuur bericht',
      sent: '✓ Bericht verzonden — we nemen snel contact op',
    },

    // ── LOGIN ────────────────────────────────────────────────
    login: {
      label: 'Mijn Arkstaal',
      title: 'Inloggen op uw account',
      sub: 'Toegang tot uw orders, facturen en offertes.',
      email: 'E-mailadres',
      password: 'Wachtwoord',
      submit: 'Inloggen',
      forgot: 'Wachtwoord vergeten?',
      noAccount: 'Nog geen account?',
      getAccess: 'Neem contact op voor toegang',
    },
  },

  // ═══════════════════════════════════════════════════════════
  en: {
    nav: {
      products: 'Products',
      services: 'Services',
      downloads: 'Downloads',
      decorative: 'Decorative',
      about: 'About',
      contact: 'Contact',
      myAccount: 'My Arkstaal',
      requestQuote: 'Request quote',
      searchPlaceholder: 'Search products, materials, finishes…',
      stainlessSteel: 'Stainless Steel',
      sheetsCoils: 'Sheets & Coils',
      pipesTubes: 'Pipes & Tubes',
      flangesFittings: 'Flanges & Fittings',
      barsFlatTypes: 'Bars & Flat Types',
      decorativeFinishes: 'Decorative Finishes',
      aluminium: 'Aluminium',
      sheetsPlates: 'Sheets & Plates',
      tubesProfiles: 'Tubes & Profiles',
      barsRods: 'Bars & Rods',
      anodized: 'Anodized',
      otherMetals: 'Other Metals',
      copper: 'Copper',
      brass: 'Brass',
      nonFerrous: 'Non-ferrous',
      foilingDecoiling: 'Foiling & Decoiling',
      anodizing: 'Anodizing',
      customCutting: 'Custom cutting',
      materialCerts: 'Material certificates',
    },

    hero: {
      eyebrow: 'Culemborg, Netherlands — Since 2014',
      title: 'Your specialist in\nstainless steel & aluminium',
      sub: 'Pipes, flanges, fittings and decorative stainless steel. Wide range, short lead times, material certificates included.',
      cta1: 'View assortment',
      cta2: 'Request a quote',
    },

    products: {
      label: 'Our assortment',
      title: 'Metals for every application',
      sub: 'From base materials to precision-cut parts. Select a material to explore our full range.',
      notFound: "Can't find what you need? Contact our specialists.",
      requestQuote: 'Request a quote',
      viewProducts: 'View products',
      tabLabels: {
        aluminium: 'Aluminium',
        steel: 'Steel',
        stainless: 'Stainless Steel',
        copper: 'Copper',
        brass: 'Brass',
        nonferrous: 'Non-ferrous',
        fittings: 'Fittings',
        plastics: 'Plastics',
      },
      badges: { Popular: 'Popular', Specialty: 'Specialty' },
      items: {
        aluminium: [
          { title: 'Sheets & Plates', desc: 'High-quality, low-tension flat aluminium. Optimally processable in laser cutters and other machines without loss of quality.', badge: 'Popular' },
          { title: 'Tubes & Profiles', desc: 'Round, square and rectangular aluminium tubes. Extruded profiles in standard and custom dimensions.' },
          { title: 'Bars & Rods', desc: 'Solid and hollow bars for machining, construction and engineering applications.' },
          { title: 'Open Sections', desc: 'Angles, channels, I-beams and T-sections in aluminium alloys for structural applications.' },
        ],
        steel: [
          { title: 'Sheets & Plates', desc: 'Hot and cold rolled steel sheets in various grades and thicknesses for structural and industrial applications.', badge: 'Popular' },
          { title: 'Structural Steel', desc: 'HEA, HEB, IPE, UNP beams and columns for construction and civil engineering.' },
          { title: 'Bars & Rods', desc: 'Round, square and flat bars in various steel grades for machining and construction.' },
          { title: 'Steel Tubes', desc: 'Seamless and welded steel tubes for mechanical and structural applications. Round, square and rectangular sections.' },
          { title: 'Sendzimir Tubes', desc: 'Pre-galvanized tubes produced by the Sendzimir process. Round, square, oval and rectangular profiles for construction and industry.' },
          { title: 'Steel Strip', desc: 'Structural, deep drawing, cold rolled and galvanized strip. Wide range for stamping, bending and roll forming.' },
          { title: 'Special Profiles', desc: 'Window frame, handrail, oval and triangular profiles. Available to order for architectural and industrial applications.' },
        ],
        stainless: [
          { title: 'Sheets & Coils', desc: 'Standard and decorative stainless steel sheets. Hot rolled, cold rolled and coil/strip in various grades.', badge: 'Specialty' },
          { title: 'Round Tubes', desc: 'Seamless and welded round stainless steel tubes in various dimensions and wall thicknesses. Suitable for structural, industrial and sanitary applications.' },
          { title: 'Square & Rectangular Tubes', desc: 'Square and rectangular stainless steel profiles for mechanical and architectural projects.' },
          { title: 'Oval Tubes', desc: 'Oval stainless steel tubes for decorative and architectural applications such as handrails and interior elements.' },
          { title: 'Sanitary / Dairy Tubes', desc: 'Food-grade stainless steel tubes (AISI 304/316L) with polished bore. For hygienic applications in food processing and dairy industries.' },
          { title: 'Flanges & Fittings', desc: 'Pipes, flanges and fittings in stainless steel and special alloys. Material certificates provided.' },
          { title: 'Bars & Flat Types', desc: 'Stainless angle bars, flat bars, rods and profiles for a wide range of industrial applications.' },
        ],
        copper: [
          { title: 'Copper Sheets', desc: 'High-purity copper sheets for electrical and architectural applications.' },
          { title: 'Copper Tubes', desc: 'Copper tube in straight lengths and coils for various applications.' },
          { title: 'Copper Bars', desc: 'Flat and round bars for electrical and industrial use.' },
        ],
        brass: [
          { title: 'Brass Sheets', desc: 'CuZn alloys for decorative, architectural and functional applications.' },
          { title: 'Brass Bars & Rods', desc: 'Free-machining brass for automatic lathes and precision components.' },
          { title: 'Brass Tubes', desc: 'Drawn brass tubes in round profiles for hydraulic and decorative applications.' },
        ],
        nonferrous: [
          { title: 'Titanium', desc: 'Grade 2 and Grade 5 titanium for aerospace, medical and chemical applications.' },
          { title: 'Bronze', desc: 'Bronze in sheets, bars and tubes. CuSn alloys for bearings, gears and corrosion-resistant constructions.' },
          { title: 'Zinc', desc: 'Pure zinc and alloys for die casting, galvanising and corrosion protection applications.' },
        ],
        fittings: [
          { title: 'Pipe Fittings', desc: 'Elbows, tees, reducers and caps in stainless steel and special alloys. DIN/ANSI standards.' },
          { title: 'Flanges', desc: 'Slip-on, weld-neck and blind flanges to DIN and ANSI standards.' },
        ],
        plastics: [
          { title: 'Delrin (POM)', desc: 'High stiffness, low friction and excellent dimensional stability. Ideal for precision mechanical and electrical components.' },
          { title: 'Polyethylene (PE)', desc: 'Impact-resistant, chemically resistant and easy to machine. Available as sheets, rods and tubes for a wide range of industrial applications.' },
          { title: 'Polyamide / Kestamid (PA)', desc: 'High wear resistance and mechanical strength. Cast polyamide for bearings, slide bearings and structural plastic components.' },
          { title: 'Teflon (PTFE)', desc: 'Outstanding chemical resistance and thermal stability. Suitable for seals, sliding elements and applications in aggressive environments.' },
        ],
      },
    },

    decorative: {
      label: 'Specialty',
      title: 'Decorative Stainless Steel',
      sub: 'Our specialty — decorative stainless steel sheets in 20+ unique finishes. From classic Mirror and Satin to Gold, Coloured, Embossed and custom etched patterns. Perfect for architectural, interior and decorative projects.',
      moreFinishes: '+ many more finishes',
      downloadCatalogue: 'Download catalogue',
      cards: [
        { title: 'Mirror Sheets', desc: 'High-gloss mirror-polished stainless steel sheets for interiors, lifts, facades and prestigious applications.' },
        { title: 'Satin / HL Sheets', desc: 'Hairline-brushed finish in various directions. Clean and professional — popular in architecture and the kitchen industry.' },
        { title: 'Patterned Mirror Sheets', desc: 'Mirror sheets with decorative relief patterns — geometric, floral, diamond and more. Available in silver and gold.' },
        { title: 'Coloured Sheets', desc: 'Coloured and patterned in Gold, Rose, Black, Blue, Bronze and more. Available as mirror and HL finish.' },
        { title: 'Embossed Sheets', desc: 'Three-dimensionally pressed patterns on stainless steel sheets for a unique visual and tactile appearance.' },
      ],
    },

    services: {
      label: 'Services',
      title: 'More than just supply',
      sub: 'We take care of everything — from product advice and quotes to delivery and material certificates.',
      items: [
        { title: 'Foiling & Decoiling', desc: 'We foil aluminium sheets and decoil rolls according to your exact wishes. Processed in our modern service center.', link: 'Request service' },
        { title: 'Anodizing', desc: 'Anodizing creates a durable oxide layer on aluminium — available in all kinds of colors for decorative and protective purposes.', link: 'Learn more' },
        { title: 'Custom Cutting', desc: 'We produce plates and sheets to your exact dimensions. High-quality, low-tension flat material ready for laser cutters and processing machines.', link: 'Configure' },
        { title: 'Material Certificates', desc: 'Material certificates are sent by email before every delivery. Full traceability on every order.', link: 'More info' },
        { title: 'My Arkstaal Portal', desc: 'Log in to your personal account to manage orders, view invoices and download your material certificates anytime.', link: 'Log in', href: '/login' },
        { title: 'Direct Contact', desc: 'Thanks to short lines of communication in our organization, we serve clients efficiently and quickly. Reach us directly.', link: 'Contact us', href: '/contact' },
      ],
    },

    about: {
      label: 'About Arkstaal',
      headline: 'Your specialist in stainless steel & aluminium',
      text: 'Since 2014, Arkstaal B.V. supplies pipes, flanges and fittings in stainless steel from our service center in Culemborg. Thousands of articles in stock — ready to ship, with full material traceability.',
      cta: 'Get in touch',
      stats: [
        { label: 'Year founded' },
        { label: 'Articles in stock' },
        { label: 'Decorative finishes' },
        { label: 'Certs by email' },
      ],
    },

    knowledge: {
      label: 'Resources',
      title: 'Everything you need',
      cards: [
        { title: 'Decorative Catalogue', desc: 'Download our full decorative stainless steel catalogue — all finishes, patterns and specifications.', link: 'Download PDF' },
        { title: 'Material Certificates', desc: 'All our products come with material certificates, sent by email before delivery. Full traceability guaranteed.', link: 'Request info' },
        { title: 'Talk to a specialist', desc: 'Short lines of communication — reach us directly for product advice, quotes and custom orders.', link: 'Contact us' },
      ],
    },

    // ── QUOTE POPUP ──────────────────────────────────────────
    quote: {
      title: 'Request a quote',
      sub: 'Fill in the form and we will get back to you as soon as possible.',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      phoneOptional: '(optional)',
      material: 'Material',
      selectMaterial: 'Select material',
      materials: ['Stainless Steel', 'Aluminium', 'Copper', 'Brass', 'Bronze', 'Non-ferrous', 'Plastics', 'Other'],
      message: 'Description',
      messagePlaceholder: 'Describe your enquiry — material, dimensions, quantity, grade...',
      send: 'Send enquiry',
      sent: '✓ Enquiry received — we will be in touch shortly.',
      dropdownCta: 'Request a quote',
      dropdownCtaSub: 'No obligation, response within one working day',
    },

    // ── FAQ ──────────────────────────────────────────────────
    faq: {
      label: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Do you deliver outside the Netherlands?',
          a: 'Yes, we also deliver to Belgium, Germany and other European countries. Contact us for availability in your region.',
        },
        {
          q: 'Do you deliver in small quantities?',
          a: 'Yes, we supply both small and large quantities. Contact us and we will put together a suitable quote.',
        },
        {
          q: 'Are material certificates included with delivery?',
          a: 'Yes, we send the relevant material certificates by email with every delivery. Full traceability guaranteed.',
        },
        {
          q: 'What are the lead times?',
          a: 'Lead times vary by material, grade and dimension. Contact us for a current indication for your specific enquiry.',
        },
        {
          q: 'Can products be delivered to custom dimensions?',
          a: 'Yes, products can be delivered to your required dimensions. Include your measurements in your enquiry and we will arrange the right delivery.',
        },
        {
          q: 'Which grades and standards do you supply?',
          a: 'We supply common grades such as AISI 304, 316 and 316L in stainless steel, and various aluminium alloys. Products are supplied to DIN, ANSI and EN standards. Specific grade requirements? Get in touch.',
        },
        {
          q: 'Is decorative stainless steel available?',
          a: 'Yes, this is one of our specialities. We supply decorative stainless steel sheets in more than 20 finishes — mirror, satin, coloured, patterned and embossed.',
        },
      ],
    },

    footer: {
      tagline: 'Stainless steel & aluminium specialist.\nBased in Culemborg — since 2014.',
      colProducts: 'Products',
      colServices: 'Services',
      colCompany: 'Company',
      stainlessSteel: 'Stainless Steel',
      aluminium: 'Aluminium',
      decorativeFinishes: 'Decorative Finishes',
      pipesFlanges: 'Pipes & Flanges',
      fittings: 'Fittings',
      foilingDecoiling: 'Foiling & Decoiling',
      anodizing: 'Anodizing',
      customCutting: 'Custom cutting',
      materialCerts: 'Material certificates',
      myArkstaal: 'My Arkstaal',
      aboutArkstaal: 'About Arkstaal',
      contact: 'Contact',
      downloadCatalogue: 'Download catalogue',
      copyright: '© 2025 Arkstaal B.V. — All rights reserved.',
      privacy: 'Privacy policy',
      terms: 'Terms & conditions',
    },

    contact: {
      label: 'Contact',
      title: 'Get in touch',
      sub: 'Direct contact with our specialists — quick response, personal advice.',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      responseTime: 'Response time',
      responseValue: 'Often same business day',
      formTitle: 'Send us a message',
      name: 'Name',
      company: 'Company',
      emailField: 'Email',
      phoneField: 'Phone',
      phoneOptional: '(optional)',
      subject: 'Subject',
      selectTopic: 'Select a topic',
      topics: ['Request a quote', 'Product information', 'Material certificates', 'Order status', 'Other'],
      message: 'Message',
      messagePlaceholder: 'What are you looking for? Include material, dimensions, quantity if applicable.',
      send: 'Send message',
      sent: "✓ Message sent — we'll be in touch shortly",
    },

    login: {
      label: 'My Arkstaal',
      title: 'Log in to your account',
      sub: 'Access your orders, invoices and quotes.',
      email: 'Email address',
      password: 'Password',
      submit: 'Log in',
      forgot: 'Forgot your password?',
      noAccount: 'No account yet?',
      getAccess: 'Contact us to get access',
    },
  },
} as const

export type Translations = typeof translations.nl
