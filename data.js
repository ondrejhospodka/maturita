const GameData = {
  config: {
    modulesRequiredForCore: 13,
    bypassCost: 30,
    startingXP: 0
  },

  // Trvale viditelné zdi (vnější ohrada + MATURITA komnata)
  permanentWalls: [
    "M 50 50 H 950 V 750 H 50 Z",           // Vnější ohrada
    "M 295 165 H 695 V 435 H 295 Z"          // Centrální komnata MATURITA
  ],

  // Moduly — gate = červený bod, revealWalls = zdi, které se odhalí po vyřešení
  regions: [
    {
      id: "ciselne_obory", moduleNum: 0, name: "00: Číselné obory",
      gate: {x: 55, y: 420},
      revealWalls: ["M 175 165 V 435"]
    },
    {
      id: "algebra", moduleNum: 1, name: "01: Algebra",
      gate: {x: 235, y: 340},
      revealWalls: ["M 175 435 H 295"]
    },
    {
      id: "rovnice", moduleNum: 2, name: "02: Rovnice",
      gate: {x: 235, y: 575},
      revealWalls: ["M 175 435 V 615", "M 175 615 H 295"]
    },
    {
      id: "planimetrie", moduleNum: 3, name: "03: Planimetrie",
      gate: {x: 370, y: 105},
      revealWalls: ["M 355 50 V 165"]
    },
    {
      id: "stereometrie", moduleNum: 4, name: "04: Stereometrie",
      gate: {x: 540, y: 135},
      revealWalls: ["M 600 165 V 230 H 695"]
    },
    {
      id: "funkce", moduleNum: 5, name: "05: Funkce",
      gate: {x: 760, y: 250},
      revealWalls: ["M 830 165 V 435", "M 695 435 H 830"]
    },
    {
      id: "analytika", moduleNum: 6, name: "06: Analytika",
      gate: {x: 930, y: 370},
      revealWalls: ["M 830 435 V 620"]
    },
    {
      id: "statistika", moduleNum: 7, name: "07: Statistika",
      gate: {x: 150, y: 670},
      revealWalls: ["M 115 625 V 715 H 175"]
    },
    {
      id: "pravdepodobnost", moduleNum: 8, name: "08: Pravděpodobnost",
      gate: {x: 395, y: 640},
      revealWalls: ["M 440 750 V 625 H 560 V 750"]
    },
    {
      id: "logaritmy", moduleNum: 9, name: "09: Logaritmy",
      gate: {x: 500, y: 715},
      revealWalls: ["M 695 620 V 750", "M 695 620 H 830"]
    },
    {
      id: "goniometrie", moduleNum: 10, name: "10: Goniometrie",
      gate: {x: 830, y: 680},
      revealWalls: ["M 770 625 V 720 H 830", "M 830 620 V 750"]
    },
    {
      id: "posloupnosti", moduleNum: 11, name: "11: Posloupnosti",
      gate: {x: 680, y: 715},
      revealWalls: []
    },
    {
      id: "slovni_ulohy", moduleNum: 12, name: "12: Slovní úlohy",
      gate: {x: 930, y: 560},
      revealWalls: []
    },
    {
      id: "maturita", name: "JÁDRO: CVIČNÁ MATURITA",
      gate: {x: 500, y: 300},
      revealWalls: []
    }
  ],

  questions: [
    // ==========================================
    // 00. ČÍSELNÉ OBORY
    // ==========================================
    // ==========================================
    // 01. ALGEBRA
    // ==========================================

    // ==========================================
    // 02. ROVNICE
    // ==========================================
    {
      id: "q_rov_01", regionId: "rovnice", type: "closed", monsterName: "FW_02A: Lomené rovnice",
      visual_color: "#f7b84f", visual_symbol: "x=", points: 7, trainingTasks: ["t_rov_01"],
      question: "V oboru \\(\\mathbb{R}\\) řešte:",
      formula: "$$ \\frac{x-2}{x+2} \\cdot \\frac{3}{x} + \\frac{16}{x^2+2x} = \\frac{x}{x+2} $$",
      instruction: "Zvolte správnou množinu řešení.",
      choices: [
        { label: "\\(x = 5\\)", value: "A", feedback: "Přístup povolen. Falešný kořen -2 byl úspěšně odfiltrován." },
        { label: "\\(x \\in \\{-2; 5\\}\\)", value: "B", feedback: "Chyba. Kořen \\(-2\\) vynuluje jmenovatele původní rovnice." },
        { label: "\\(x = -2\\)", value: "C", feedback: "Kritická chyba. Výsledek vede na dělení nulou." },
        { label: "Rovnice nemá řešení", value: "D", feedback: "Chyba výpočtu. Jeden z kořenů je platný." }
      ],
      hints: [
        `Lomený výraz nemá smysl, když je jmenovatel nulový. Pro která x to nastane?`,
        `Rozmysli, jestli se nedá některý jmenovatel upravit. Vynásob celou rovnici společným jmenovatelem. Nezapomeň pak ověřit podmínky.`,
      ],
      correctAnswer: "A", reward: { xp: 30 }
    },
    {
      id: "t_rov_01", regionId: "rovnice", type: "closed", monsterName: "SIM_02A: Podmínky",
      isTraining: true, firewallId: "q_rov_01", visual_color: "#2ecc8a", visual_symbol: "≠", points: 0,
      question: "Jaké jsou omezující podmínky pro tento algebraický výraz?",
      formula: "$$ \\frac{16}{x^2+2x} $$",
      instruction: "Vyberte správné podmínky řešitelnosti.",
      steps: [
        { trigger: "> Krok 1: Rozklad", content: "Rozlož jmenovatel na součin. Určitě se dá něco vytknout." },
        { trigger: "> Krok 2: Pravidlo nulového bodu", content: "Pro která \\(x\\) se hodnota jmenovatele rovná nule?" }
      ],
      choices: [
        { label: "\\(x \\neq 0 \\land x \\neq -2\\)", value: "A", feedback: "Logika potvrzena. U rovnice vždy zkontroluj tyto podmínky." },
        { label: "\\(x \\neq -2\\)", value: "B", feedback: "Nekompletní. Chybí kontrola samotného 'x'." },
        { label: "\\(x > 0\\)", value: "C", feedback: "Chyba. Jmenovatel nesmí být roven nule, ale může být záporný." }
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    // ==========================================
    // 05. FUNKCE
    // ==========================================
    {
      id: "q_funk_01", regionId: "funkce", type: "closed", monsterName: `FW_05A: Defini\u010dn\u00ed obor kombinovan\u00e9 funkce`,
      visual_color: "#4fc3f7", visual_symbol: `D(f)`, points: 3, trainingTasks: ["t_funk_01"],
      question: `Funkce \\(f\\) je definov\u00e1na p\u0159edpisem:`,
      formula: `$$f(x) = \\sqrt{3-x} + \\dfrac{1}{x+1}$$`,
      instruction: `Ur\u010dete defini\u010dn\u00ed obor funkce \\(f\\).`,
      choices: [
        {
          label: `\\((-\\infty;\\, 3\\rangle\\)`,
          value: "A",
          feedback: `Chyba. Odmocnina d\u00e1v\u00e1 \\(x \\leq 3\\), ale jmenovatel mus\u00ed b\u00fdt nenulov\u00fd: \\(x + 1 \\neq 0\\), tedy \\(x \\neq -1\\). Bod \\(x = -1\\) je t\u0159eba vylou\u010dit.`
        },
        {
          label: `\\((-\\infty;\\, -1) \\cup (-1;\\, 3)\\)`,
          value: "B",
          feedback: `Chyba. Bod \\(x = 3\\) do defini\u010dn\u00edho oboru pat\u0159\u00ed: \\(\\sqrt{3-3} = \\sqrt{0} = 0\\) je definov\u00e1no. Interval u hodnoty 3 mus\u00ed b\u00fdt uzav\u0159en\u00fd.`
        },
        {
          label: `\\((-\\infty;\\, -1) \\cup (-1;\\, 3\\rangle\\)`,
          value: "C",
          feedback: `P\u0159\u00edstup povolen. Odmocnina: \\(3-x \\geq 0\\) \u2192 \\(x \\leq 3\\). Jmenovatel: \\(x \\neq -1\\). V\u00fdsledek: \\((-\\infty;\\, -1) \\cup (-1;\\, 3\\rangle\\).`
        },
        {
          label: `\\((-1;\\, 3\\rangle\\)`,
          value: "D",
          feedback: `Kritick\u00e1 chyba. Lev\u00e1 v\u011btev chyb\u00ed \u2014 hodnoty \\(x < -1\\) jsou p\u0159\u00edpustn\u00e9 (nap\u0159. \\(x = -2\\): \\(\\sqrt{5} - 1\\) je v \\(\\mathbb{R}\\) definov\u00e1no).`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 },
      hints: [
        `Kombinovaná funkce má více podmínek definičního oboru — každá část funkce přidává svou vlastní.`,
        `Co podmínka odmocniny říká o přípustných hodnotách \\(x\\)? A co musí platit pro jmenovatel?`
      ]
    },
    {
      id: "t_funk_01", regionId: "funkce", type: "closed", monsterName: `SIM_05A: Podm\u00ednky defini\u010dn\u00edho oboru`,
      isTraining: true, firewallId: "q_funk_01", visual_color: "#2ecc8a", visual_symbol: `\u221a`, points: 0,
      question: `Funkce \\(f(x) = \\sqrt{3-x} + \\frac{1}{x+1}\\) m\u00e1 dv\u011b podm\u00ednky defini\u010dn\u00edho oboru. Jak\u00e1 je podm\u00ednka pro odmocninu?`,
      formula: null,
      instruction: `Vyberte spr\u00e1vnou nerovnost.`,
      steps: [
        { trigger: `> Krok 1: Odmocnina`, content: `Výraz pod odmocninou musí být nezáporný. Jakou nerovnici pro \\(x\\) to dává?` },
        { trigger: `> Krok 2: Jmenovatel`, content: `Jmenovatel nesmí být nula. Která hodnota \\(x\\) to porušuje? Jak ji zahrneš do výsledku?` }
      ],
      choices: [
        { label: `\\(x \\leq 3\\)`, value: "A", feedback: `Logika potvrzena. \\(3-x \\geq 0\\) d\u00e1v\u00e1 \\(x \\leq 3\\).` },
        { label: `\\(x < 3\\)`, value: "B", feedback: `Chyba. Krajn\u00ed bod \\(x = 3\\) je p\u0159\u00edpustn\u00fd: \\(\\sqrt{3-3} = \\sqrt{0} = 0\\) je definov\u00e1no.` },
        { label: `\\(x \\geq 3\\)`, value: "C", feedback: `Kritick\u00e1 chyba. Pro \\(x > 3\\) je \\(3-x < 0\\) \u2014 odmocnina z\u00e1porn\u00e9ho \u010d\u00edsla nen\u00ed v \\(\\mathbb{R}\\) definov\u00e1na.` }
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },


    // ==========================================
    // LOGARITMY — NOVÉ PŘÍKLADY
    // ==========================================


    // ==========================================
    // LOGARITMY — NOVÉ PŘÍKLADY
    // ==========================================


    // ==========================================
    // CISELNE_OBORY — NOVÉ PŘÍKLADY
    // ==========================================


    // ==========================================
    // 00. ČÍSELNÉ OBORY — REVIZE
    // ==========================================

    {
      id: "q_co_02", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00A: Průnik se ℤ`,
      visual_color: "#00d2ff", visual_symbol: `ℤ`, points: 3, trainingTasks: ["t_co_02"],
      question: `Je dán interval \\(A = (-2;\\, 3)\\).`,
      formula: `$$A = (-2;\\, 3)$$`,
      instruction: `Určete všechny prvky množiny \\(A \\cap \\mathbb{Z}\\).`,
      choices: [
        {
          label: `\\(\\{ - 2, - 1,0,1,2,3\\}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Otevřený interval nezahrnuje krajní body \\(-2\\) ani \\(3\\).`
        },
        {
          label: `\\(\\{ - 1,0,1,2\\}\\)`,
          value: "B",
          feedback: `Přístup povolen. Správně určený otevřený interval — krajní body nepatří.`
        },
        {
          label: `\\(\\{ 0,1,2\\}\\)`,
          value: "C",
          feedback: `Nekompletní. Zkontroluj, zda jsi vypsala všechna celá čísla ležící v otevřeném intervalu.`
        },
        {
          label: `\\(\\{ - 1,0,1,2,3\\}\\)`,
          value: "D",
          feedback: `Chyba na pravé hranici. Kulatá závorka u \\(3\\) znamená, že \\(3 \\notin A\\).`
        },
      ],
      hints: [
        `\\(\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}\\) — celá čísla (záporná, nula, kladná).`,
        `Průnik \\(A \\cap \\mathbb{Z}\\) = čísla, která patří ZÁROVEŇ do A i do \\(\\mathbb{Z}\\).`,
        `Interval \\((-2; 3)\\) je otevřený — čísla \\(-2\\) a \\(3\\) do A <b>nepatří</b>.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_co_02", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00A: Intervaly`,
      isTraining: true, firewallId: "q_co_02", visual_color: "#2ecc8a", visual_symbol: `( )`, points: 0,
      question: `Než zkusíš těžší interval, pojďme si ujasnit zápis. Je dán otevřený interval:`,
      formula: `$$A = ( - 1;\\, 2)$$`,
      instruction: `Která z následujících množin obsahuje VŠECHNA celá čísla ležící v intervalu A?`,
      steps: [
        {
          trigger: `> Krok 1: Kulatá závorka`,
          content: `Kulatá závorka znamená, že hraniční číslo do intervalu <b>nepatří</b>. Která čísla tedy do intervalu nepatří?`
        },
        {
          trigger: `> Krok 2: Výpis čísel`,
          content: `Hledáme celá čísla ostře větší než \\(-1\\) a ostře menší než \\(2\\). Zkus je vyjmenovat.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ - 1,0,1,2\\}\\)`,
          value: "A",
          feedback: `Chyba. Hraniční body \\(-1\\) a \\(2\\) do otevřeného intervalu nepatří.`
        },
        {
          label: `\\(\\{ 0,1\\}\\)`,
          value: "B",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(\\{ 0,1,2\\}\\)`,
          value: "C",
          feedback: `Chyba na pravé hranici. Pravá závorka je také kulatá — \\(2 \\notin A\\).`
        },
        {
          label: `\\(\\{ 0\\}\\)`,
          value: "D",
          feedback: `Nekompletní. Zkontroluj všechna celá čísla v intervalu — nechybí ti nějaké?`
        },
      ],
      hints: [
        `Kulatá závorka \\(\\left(\\right.\\) nebo \\(\\left.\\right)\\) → hraniční bod do intervalu <b>nepatří</b>.`,
        `Hranatá závorka \\(\\langle\\) nebo \\(\\rangle\\) → hraniční bod do intervalu <b>patří</b>.`,
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_co_04", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00B: Vennův diagram`,
      visual_color: "#00d2ff", visual_symbol: `∪`, points: 3, trainingTasks: ["t_co_04"],
      question: `Na obrázku jsou tři množiny A, B, C znázorněné kružnicemi. Čísla v diagramu udávají prvky příslušných oblastí.`,
      diagram: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;margin:12px auto;display:block;background:var(--surface2);border:1px solid var(--border);border-radius:8px;"><circle cx="150" cy="84" r="72" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="107.5" cy="157.5" r="72" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="192.5" cy="157.5" r="72" fill="none" stroke="currentColor" stroke-width="2"/><text x="105" y="22" fill="currentColor" font-size="15" font-weight="bold">A</text><text x="35" y="192" fill="currentColor" font-size="15" font-weight="bold">B</text><text x="252" y="192" fill="currentColor" font-size="15" font-weight="bold">C</text><text x="128" y="52" fill="currentColor" font-size="17" font-weight="bold">3</text><text x="158" y="52" fill="currentColor" font-size="17" font-weight="bold">7</text><text x="108" y="117" fill="currentColor" font-size="17" font-weight="bold">5</text><text x="58" y="184" fill="currentColor" font-size="17" font-weight="bold">6</text><text x="83" y="200" fill="currentColor" font-size="17" font-weight="bold">9</text><text x="140" y="187" fill="currentColor" font-size="17" font-weight="bold">12</text></svg>`,
      instruction: `Které z následujících tvrzení <b>NENÍ</b> pravdivé?`,
      choices: [
        {
          label: `\\(A \\cap B = \\{5\\}\\)`,
          value: "A",
          feedback: `Toto tvrzení je pravdivé. Průnik \\(A \\cap B\\) odpovídá diagramu — hledej chybu jinde.`
        },
        {
          label: `\\(C \\cup A = \\{3,\\, 5,\\, 7,\\, 12\\}\\)`,
          value: "B",
          feedback: `Toto tvrzení je pravdivé. Sjednocení \\(C \\cup A\\) odpovídá diagramu — zkus jiné tvrzení.`
        },
        {
          label: `\\((A \\cup B) \\setminus C = \\{3,\\, 5,\\, 6,\\, 7,\\, 9\\}\\)`,
          value: "C",
          feedback: `Toto tvrzení je pravdivé. Zkontroluj si raději množinu \\(B\\) — nezapomněl/a jsi na některý prvek?`
        },
        {
          label: `\\(B \\setminus A = \\{6,\\, 9\\}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(B = \\{5, 6, 9, 12\\}\\), takže \\(B \\setminus A = \\{6, 9, 12\\}\\). Číslo \\(12\\) leží v \\(B \\cap C\\), tedy patří do B, ale ne do A.`
        },
      ],
      hints: [
        `Nejdřív si vypiš, co přesně obsahuje každá množina: A = ?, B = ?, C = ?`,
        `Pozor na prvky v průnicích — patří do <b>obou</b> množin, i když jsou v diagramu na okraji.`,
        `Prvek ležící v průniku dvou množin patří do obou — nezapomeň na to při vypisování každé množiny.`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_co_04", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00B: Průniky`,
      isTraining: true, firewallId: "q_co_04", visual_color: "#2ecc8a", visual_symbol: `∩`, points: 0, showDiagramImmediately: true,
      question: `Zkusíme si jednodušší diagram se dvěma kružnicemi A a B.`,
      instruction: `Která čísla leží v průniku množin A a B (značíme \\(A \\cap B\\))?`,
      steps: [
        {
          trigger: `> Krok 1: Co je to průnik?`,
          content: `Průnik dvou množin obsahuje prvky, které patří do obou množin <b>současně</b>.`
        },
        {
          trigger: `> Krok 2: Analýza obrázku`,
          content: `Hledej oblast, kde se obě kružnice překrývají. Která čísla leží v tomto překryvu?`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 5,8\\}\\)`,
          value: "A",
          feedback: `Číslo 5 leží pouze v kružnici A, ne v B.`
        },
        {
          label: `\\(\\varnothing\\) (prázdná)`,
          value: "B",
          feedback: `Kružnice se překrývají — průnik není prázdný, obsahuje 8.`
        },
        {
          label: `\\(\\{ 3,8\\}\\)`,
          value: "C",
          feedback: `Číslo 3 leží pouze v kružnici B, ne v A.`
        },
        {
          label: `\\(\\{ 8\\}\\)`,
          value: "D",
          feedback: `Logika potvrzena.`
        },
      ],
      hints: [
        `Průnik = prvky patřící do OBOU množin najednou.`,
        `Hledej oblast, kde se obě kružnice navzájem překrývají — to je průnik.`,
      ],
      diagram: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:260px;margin:12px auto;display:block;background:var(--surface2);border:1px solid var(--border);border-radius:8px;"><circle cx="70" cy="60" r="46" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="60" r="46" fill="none" stroke="currentColor" stroke-width="2"/><text x="20" y="25" fill="currentColor" font-size="15" font-weight="bold">A</text><text x="164" y="25" fill="currentColor" font-size="15" font-weight="bold">B</text><text x="33" y="65" fill="currentColor" font-size="16" font-weight="bold">5</text><text x="93" y="65" fill="currentColor" font-size="16" font-weight="bold">8</text><text x="148" y="65" fill="currentColor" font-size="16" font-weight="bold">3</text></svg>`,
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_co_05", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00C: Sjednocení intervalů`,
      visual_color: "#00d2ff", visual_symbol: `∪`, points: 2, trainingTasks: ["t_co_05a", "t_co_05b"],
      question: `Je dán interval \\(A = \\langle - 3;\\, 7\\rangle\\) a množina \\(B = \\{ x \\in \\mathbb{R};\\  - 5 \\leq x < 4\\}\\).`,
      formula: `$$A \\cup B = \\,?$$`,
      instruction: `Zapište sjednocení \\(A \\cup B\\) intervalem.`,
      choices: [
        {
          label: `\\(\\langle - 3;\\, 4)\\)`,
          value: "A",
          feedback: `Kritická chyba. To je průnik \\(A \\cap B\\), ne sjednocení. Sjednocení zahrnuje <b>vše</b> z obou množin.`
        },
        {
          label: `\\(\\langle - 5;\\, 7\\rangle\\)`,
          value: "B",
          feedback: `Přístup povolen. Sjednocení zahrnuje všechny krajní body obou intervalů.`
        },
        {
          label: `\\(( - 5;\\, 7)\\)`,
          value: "C",
          feedback: `Chyba závorek. \\(B\\) obsahuje \\(-5\\) (podmínka \\(-5 \\leq x\\)) → levá závorka uzavřená. \\(A\\) obsahuje \\(7\\) → pravá závorka uzavřená.`
        },
        {
          label: `\\(\\langle - 5;\\, 4)\\)`,
          value: "D",
          feedback: `Chyba na pravé straně. Sjednocení sahá až tam, kde alespoň jedna množina ještě pokračuje. Množina A pokračuje až do \\(7\\).`
        },
      ],
      hints: [
        `Sjednocení \\(A \\cup B\\) = vše, co patří do A <b>nebo</b> do B (nebo do obou).`,
        `Pokud se intervaly překrývají, výsledek je <b>jeden</b> souvislý interval.`,
        `Pozor na to, jestli krajní body patří nebo nepatří do intervalu.`,
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_co_05a", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00C: Závorky sjednocení`,
      isTraining: true, firewallId: "q_co_05", visual_color: "#2ecc8a", visual_symbol: `∪`, points: 0,
      question: `Je dán interval \\(A = \\langle 2;\\, 8\\rangle\\) a interval \\(B = \\langle 0;\\, 5\\rangle\\). Jaká je levá mez sjednocení \\(A \\cup B\\) a je uzavřená nebo otevřená?`,
      instruction: `Určete typ levé závorky v \\(A \\cup B\\).`,
      steps: [
        {
          trigger: `> Krok 1: Levá mez sjednocení`,
          content: `Levá mez sjednocení = <b>minimum</b> z levých mezí obou množin. \\(A\\) začíná v \\(2\\), \\(B\\) začíná v \\(0\\).`
        },
        {
          trigger: `> Krok 2: Typ závorky`,
          content: `U sjednocení je závorka uzavřená, pokud <b>alespoň jedna</b> z množin je v tom bodě uzavřená. Zkontroluj, jak vypadá interval \\(B\\) v bodě \\(0\\).`
        },
      ],
      choices: [
        {
          label: `Levá mez je 2, uzavřená závorka`,
          value: "A",
          feedback: `Chyba. Levá mez sjednocení = \\(\\min(2, 0) = 0\\), ne \\(2\\). Sjednocení zahrnuje vše z obou intervalů.`
        },
        {
          label: `Levá mez je 0, uzavřená závorka`,
          value: "B",
          feedback: `Logika potvrzena.`
        },
        {
          label: `Levá mez je 0, otevřená závorka`,
          value: "C",
          feedback: `Chyba závorky. \\(B\\) říká \\(0 \\leq x\\) — číslo \\(0\\) do \\(B\\) patří, závorka musí být uzavřená.`
        },
        {
          label: `Levá mez je 8, uzavřená závorka`,
          value: "D",
          feedback: `Chyba. \\(8\\) je pravá mez \\(A\\), ne levá. Levá mez sjednocení = \\(\\min\\)(levých mezí).`
        },
      ],
      hints: [
        `Levá mez sjednocení = <b>minimum</b> levých mezí obou intervalů.`,
        `Závorka: alespoň jedna z množin je v daném bodě uzavřená → výsledná závorka je uzavřená.`,
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "t_co_05b", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00C-2: Celkové sjednocení`,
      isTraining: true, firewallId: "q_co_05", visual_color: "#2ecc8a", visual_symbol: `∪`, points: 0,
      question: `Zapište sjednocení \\(A \\cup B\\), kde \\(A = \\langle 1;\\, 8\\rangle\\) a \\(B = \\langle 0;\\, 5\\rangle\\).`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Nakresli si osy`,
          content: `Nakresli číselnou osu a vyznač oba intervaly: \\(A = \\langle 1;\\, 8\\rangle\\) a \\(B = \\langle 0;\\, 5\\rangle\\). Oba jsou uzavřené.`
        },
        {
          trigger: `> Krok 2: Meze sjednocení`,
          content: `Sjednocení sahá od nejlevějšího po nejpravější bod. Najdi levou mez a pravou mez včetně kontroly závorek.`
        },
        {
          trigger: `> Krok 3: Finální interval`,
          content: `Intervaly se překrývají \\((1 \\leq 5)\\), proto je výsledek jediný spojitý interval. Jaký je to interval?`
        },
      ],
      choices: [
        {
          label: `\\(\\langle 1;\\, 8\\rangle\\)`,
          value: "A",
          feedback: `Chyba. To je jen interval \\(A\\). Sjednocení musí zahrnovat i \\(B\\), které sahá od \\(0\\).`
        },
        {
          label: `\\(\\langle 0;\\, 8\\rangle\\)`,
          value: "B",
          feedback: `Přístup povolen.`
        },
        {
          label: `\\(\\langle 0;\\, 5\\rangle\\)`,
          value: "C",
          feedback: `Chyba. To je jen interval \\(B\\). Sjednocení musí zahrnovat i \\(A\\), které sahá do \\(8\\).`
        },
        {
          label: `\\(\\langle 1;\\, 5\\rangle\\)`,
          value: "D",
          feedback: `Kritická chyba. To je průnik \\(A \\cap B\\), ne sjednocení. Sjednocení bere vše z obou intervalů.`
        },
      ],
      hints: [
        `Sjednocení: od nejlevějšího po nejpravější bod pokrytý alespoň jedním intervalem.`,
        `Pravá mez = <b>maximum</b> pravých mezí. Levá mez = <b>minimum</b> levých mezí.`,
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 188" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker></defs><text x="210" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">Sjednocení A ∪ B</text><line x1="35" y1="118" x2="385" y2="118" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr2)"/><line x1="78" y1="112" x2="78" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="78" y="135" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text><line x1="111" y1="112" x2="111" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="111" y="135" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text><line x1="177" y1="112" x2="177" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="177" y="135" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text><line x1="243" y1="112" x2="243" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="243" y="135" text-anchor="middle" font-size="11" fill="#e2e8f0">5</text><line x1="309" y1="112" x2="309" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="309" y="135" text-anchor="middle" font-size="11" fill="#e2e8f0">7</text><line x1="342" y1="112" x2="342" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="342" y="135" text-anchor="middle" font-size="11" fill="#e2e8f0">8</text><line x1="111" y1="42" x2="111" y2="118" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="342" y1="42" x2="342" y2="118" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="111" y1="42" x2="342" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/><circle cx="111" cy="42" r="5" fill="#0077bb"/><circle cx="342" cy="42" r="5" fill="#0077bb"/><line x1="78" y1="66" x2="78" y2="118" stroke="#228833" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="243" y1="66" x2="243" y2="118" stroke="#228833" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="78" y1="66" x2="243" y2="66" stroke="#228833" stroke-width="4" stroke-linecap="round"/><circle cx="78" cy="66" r="5" fill="#228833"/><circle cx="243" cy="66" r="5" fill="#228833"/><line x1="78" y1="90" x2="78" y2="118" stroke="#cc4400" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="342" y1="90" x2="342" y2="118" stroke="#cc4400" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="78" y1="90" x2="342" y2="90" stroke="#cc4400" stroke-width="4" stroke-linecap="round"/><circle cx="78" cy="90" r="5" fill="#cc4400"/><circle cx="342" cy="90" r="5" fill="#cc4400"/><rect x="45" y="154" width="16" height="8" rx="2" fill="#0077bb"/><text x="66" y="162" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">A = ⟨1; 8⟩</text><rect x="154" y="154" width="16" height="8" rx="2" fill="#228833"/><text x="175" y="162" text-anchor="start" font-size="11" font-weight="bold" fill="#228833">B = ⟨0; 5⟩</text><rect x="263" y="154" width="16" height="8" rx="2" fill="#cc4400"/><text x="284" y="162" text-anchor="start" font-size="11" font-weight="bold" fill="#cc4400">A ∪ B = ⟨0; 8⟩</text></svg>`,
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_co_06", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00D: Přirozená čísla v intervalu`,
      visual_color: "#00d2ff", visual_symbol: `ℕ`, points: 2, trainingTasks: ["t_co_06a", "t_co_06b"],
      question: `\\(\\mathbb{N}\\) je množina přirozených čísel (kladných celých čísel). Je dán interval \\(A = ( - 3;\\, 5\\rangle\\).`,
      formula: `$$A \\cap \\mathbb{N} = \\,?$$`,
      instruction: `Určete všechny prvky množiny \\(A \\cap \\mathbb{N}\\).`,
      choices: [
        {
          label: `\\(\\{ 1,\\, 2,\\, 3,\\, 4,\\, 5\\}\\)`,
          value: "A",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(\\{ 1,\\, 2,\\, 3,\\, 4\\}\\)`,
          value: "B",
          feedback: `Chyba. Pravá závorka \\(\\rangle\\) je uzavřená — číslo \\(5\\) do \\(A\\) patří, tedy \\(5 \\in A \\cap \\mathbb{N}\\).`
        },
        {
          label: `\\(\\{ 0,\\, 1,\\, 2,\\, 3,\\, 4,\\, 5\\}\\)`,
          value: "C",
          feedback: `Chyba. \\(0 \\notin \\mathbb{N}\\). Přirozená čísla začínají od 1: \\(\\mathbb{N} = \\{1, 2, 3, \\ldots\\}\\).`
        },
        {
          label: `\\(\\{ - 2,\\, - 1,\\, 0,\\, 1,\\, 2,\\, 3,\\, 4,\\, 5\\}\\)`,
          value: "D",
          feedback: `Kritická chyba. To jsou celá čísla (\\(\\mathbb{Z}\\)), ne přirozená. \\(\\mathbb{N} = \\{1, 2, 3, \\ldots\\}\\) — záporná čísla a nula do \\(\\mathbb{N}\\) nepatří.`
        },
      ],
      hints: [
        `V češtině: \\(\\mathbb{N} = \\{1, 2, 3, \\ldots\\}\\) — přirozená čísla <b>nezahrnují 0</b>.`,
        `Průnik \\(A \\cap \\mathbb{N}\\) = přirozená čísla, která zároveň leží v intervalu A.`,
        `Zkontroluj typ závorky u pravé meze — je uzavřená nebo otevřená?`,
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_co_06a", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00D: Závorky a přirozená čísla`,
      isTraining: true, firewallId: "q_co_06", visual_color: "#2ecc8a", visual_symbol: `ℕ`, points: 0,
      question: `Je dán interval \\(A = \\langle 1;\\, 4)\\). Patří číslo \\(4\\) do množiny \\(A \\cap \\mathbb{N}\\)?`,
      instruction: `Rozhodněte, zda \\(4\\) patří do \\(A \\cap \\mathbb{N}\\).`,
      steps: [
        {
          trigger: `> Krok 1: Je 4 v intervalu A?`,
          content: `Podívej se na typ závorky u čísla \\(4\\) v intervalu \\(\\langle 1;\\, 4)\\).`
        },
        {
          trigger: `> Krok 2: Závěr`,
          content: `I když \\(4 \\in \\mathbb{N}\\), co plyne z toho, že \\(4 \\notin A\\) pro průnik?`
        },
      ],
      choices: [
        {
          label: `Ne, \\(4 \\notin A \\cap \\mathbb{N}\\)`,
          value: "A",
          feedback: `Logika potvrzena. Otevřená závorka u \\(4\\) → \\(4 \\notin A\\).`
        },
        {
          label: `Ano, \\(4 \\in A \\cap \\mathbb{N}\\)`,
          value: "B",
          feedback: `Chyba. Závorka \\()\\) je otevřená — pravá mez do intervalu <b>nepatří</b>. \\(4 \\notin A\\).`
        },
        {
          label: `4 není přirozené číslo`,
          value: "C",
          feedback: `Kritická chyba. \\(4 \\in \\mathbb{N}\\). Ale protože \\(4 \\notin A\\) (otevřená závorka), \\(4 \\notin A \\cap \\mathbb{N}\\).`
        },
        {
          label: `Záleží na závorce vlevo`,
          value: "D",
          feedback: `Chybný směr. Rozhoduje <b>pravá</b> závorka u \\(4\\). Je kulatá = otevřená → \\(4 \\notin A\\).`
        },
      ],
      hints: [
        `Kulatá závorka ) → hraniční bod do intervalu <b>nepatří</b>.`,
        `Pro průnik A ∩ ℕ musí číslo splňovat obě podmínky zároveň: být v A i v ℕ.`,
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "t_co_06b", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00D-2: Přirozená čísla v intervalu`,
      isTraining: true, firewallId: "q_co_06", visual_color: "#2ecc8a", visual_symbol: `ℕ`, points: 0,
      question: `Vypište všechna přirozená čísla z intervalu \\(A = \\langle - 1;\\, 3\\rangle\\).`,
      instruction: `Vyberte správnou množinu \\(A \\cap \\mathbb{N}\\).`,
      steps: [
        {
          trigger: `> Krok 1: Co je ℕ?`,
          content: `\\(\\mathbb{N} = \\{1, 2, 3, \\ldots\\}\\). Nula ani záporná čísla do \\(\\mathbb{N}\\) <b>nepatří</b>. Přirozená čísla začínají od \\(1\\).`
        },
        {
          trigger: `> Krok 2: Závorky a výpis`,
          content: `Procházej přirozená čísla \\(1\\), \\(2\\), \\(3\\), … — která z nich leží v intervalu \\(\\langle -1;\\, 3\\rangle\\)?`
        },
        {
          trigger: `> Krok 3: Obrázek`,
          content: `Na číselné ose vidíš uzavřený interval \\(\\langle -1;\\, 3\\rangle\\) s plnými kolečky. Která přirozená čísla jsou v tomto intervalu?`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 0,\\, 1,\\, 2,\\, 3\\}\\)`,
          value: "A",
          feedback: `Chyba. \\(0 \\notin \\mathbb{N}\\). Přirozená čísla začínají od \\(1\\).`
        },
        {
          label: `\\(\\{ 1,\\, 2\\}\\)`,
          value: "B",
          feedback: `Chybí číslo \\(3\\). Pravá závorka \\(\\rangle\\) je uzavřená — \\(3 \\in A\\) a \\(3 \\in \\mathbb{N}\\), tedy \\(3 \\in A \\cap \\mathbb{N}\\).`
        },
        {
          label: `\\(\\{ 1,\\, 2,\\, 3\\}\\)`,
          value: "C",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(\\{ - 1,\\, 0,\\, 1,\\, 2,\\, 3\\}\\)`,
          value: "D",
          feedback: `Chyba. To jsou celá čísla (\\(\\mathbb{Z}\\)) z intervalu, ne přirozená. \\(\\mathbb{N}\\) neobsahuje záporná čísla ani nulu.`
        },
      ],
      hints: [
        `\\(\\mathbb{N} = \\{1, 2, 3, \\ldots\\}\\) — nula a záporná čísla sem <b>nepatří</b>.`,
        `Procházej přirozená čísla \\(1\\), \\(2\\), \\(3\\), … a kontroluj, zda leží v intervalu.`,
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_co_07", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00E: Procenta z mocniny`,
      visual_color: "#00d2ff", visual_symbol: `2ⁿ`, points: 3, trainingTasks: ["t_co_07a", "t_co_07b", "t_co_07c"],
      question: `Vypočtěte 25 % z čísla \\(2^{800}\\). Výsledek vyjádřete ve tvaru mocniny.`,
      instruction: `Vyberte správný výsledek ve tvaru mocniny čísla 2.`,
      choices: [
        {
          label: `\\(2^{200}\\)`,
          value: "A",
          feedback: `Kritická chyba. Vynásobil/a jsi exponent \\((800 \\times 0{,}25 = 200)\\). Násobit musíš mocninu, ne exponent: \\(2^{-2} \\cdot 2^{800} = 2^{798}\\).`
        },
        {
          label: `\\(2^{798}\\)`,
          value: "B",
          feedback: `Přístup povolen.`
        },
        {
          label: `\\(2^{775}\\)`,
          value: "C",
          feedback: `Chyba. Odečetl/a jsi \\(25\\) od exponentu. Správně: \\(25\,\\% = 2^{-2}\\), odečítat je správný směr, ale o \\(2\\), ne o \\(25\\).`
        },
        {
          label: `\\(2^{400}\\)`,
          value: "D",
          feedback: `Chyba. Dělil/a jsi exponent dvěma \\((800/2=400)\\). To odpovídá 50 % z \\(2^{800}\\) — ale špatně. \\(50\,\\% = 2^{-1}\\), výsledek \\(2^{799}\\).`
        },
      ],
      hints: [
        `\\(25\,\\% = \\frac{1}{4} = 2^{-2}\\).`,
        `\\(a^m \\cdot a^n = a^{m+n}\\) — exponenty se <b>sčítají</b>.`,
        `Dosaď do pravidla a sečti exponenty.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_co_07a", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00E: Procenta jako mocnina`,
      isTraining: true, firewallId: "q_co_07", visual_color: "#2ecc8a", visual_symbol: `2ⁿ`, points: 0,
      question: `Vyjádřete 50 % jako mocninu čísla 2.`,
      formula: `$$50\\% = 2^{\\,?}$$`,
      instruction: `Doplňte exponent.`,
      steps: [
        {
          trigger: `> Krok 1: 50 % jako zlomek`,
          content: `\\(50\\% = \\frac{1}{2}\\). Teď stačí vyjádřit \\(\\frac{1}{2}\\) jako mocninu \\(2\\).`
        },
        {
          trigger: `> Krok 2: Záporný exponent`,
          content: `Jak zapíšeš zlomek \\(\\frac{1}{2}\\) jako mocninu základu 2 se záporným exponentem?`
        },
      ],
      choices: [
        {
          label: `\\(2^{50}\\)`,
          value: "A",
          feedback: `Chyba. \\(2^{50}\\) je obrovské číslo, ne \\(\\tfrac{1}{2}\\).`
        },
        {
          label: `\\(2^{0{,}5}\\)`,
          value: "B",
          feedback: `Chyba. \\(2^{0{,}5} = \\sqrt{2} \\approx 1{,}414\\), to není \\(50\\% = 0{,}5\\).`
        },
        {
          label: `\\(2^{- 1}\\)`,
          value: "C",
          feedback: `Přístup povolen.`
        },
        {
          label: `\\(2^{1}\\)`,
          value: "D",
          feedback: `Chyba. \\(2^1 = 2\\), to není polovina.`
        },
      ],
      hints: [
        `\\(50\\% = \\tfrac{1}{2}\\). Jak zapíšeš zlomek \\(\\frac{1}{2}\\) pomocí záporného exponentu?`,
        `Záporný exponent = převrácená hodnota: \\(2^{-n} = \\frac{1}{2^n}\\).`,
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "t_co_07b", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00E-2: Sčítání exponentů`,
      isTraining: true, firewallId: "q_co_07", visual_color: "#2ecc8a", visual_symbol: `2ⁿ`, points: 0,
      question: `Vypočtěte \\(2^{- 2} \\cdot 2^{20}\\).`,
      formula: `$$2^{- 2} \\cdot 2^{20} = \\,?$$`,
      instruction: `Vyjádřete výsledek jako jednu mocninu čísla 2.`,
      steps: [
        {
          trigger: `> Krok 1: Pravidlo pro násobení mocnin`,
          content: `Při násobení mocnin se <b>stejným základem</b> se exponenty <b>sčítají</b>: \\(a^m \\cdot a^n = a^{m+n}\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `Pravidlo z Kroku 1: exponenty se sčítají. Dosaď \\(m = -2\\) a \\(n = 20\\) — jaký je výsledný exponent?`
        },
      ],
      choices: [
        {
          label: `\\(2^{18}\\)`,
          value: "A",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(2^{22}\\)`,
          value: "B",
          feedback: `Chyba. Sečetl/a jsi absolutní hodnoty \\((2 + 20 = 22)\\), ale exponent je \\(-2\\), ne \\(+2\\).`
        },
        {
          label: `\\(2^{- 40}\\)`,
          value: "C",
          feedback: `Chyba. Násobil/a jsi exponenty \\((-2 \\cdot 20 = -40)\\). Při násobení mocnin se exponenty sčítají, ne násobí.`
        },
        {
          label: `\\(4^{18}\\)`,
          value: "D",
          feedback: `Chyba. Základ zůstává \\(2\\), nemění se. \\(2^{-2} \\cdot 2^{20} = 2^{18}\\), ne \\(4^{18}\\).`
        },
      ],
      hints: [
        `\\(a^m \\cdot a^n = a^{m+n}\\) — exponenty se sčítají.`,
        `Při sčítání exponentů dávej pozor na znaménko — \\(-2\\) je záporné číslo.`,
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "t_co_07c", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00E-3: Součin mocnin`,
      isTraining: true, firewallId: "q_co_07", visual_color: "#2ecc8a", visual_symbol: `2ⁿ`, points: 0,
      question: `Vypočtěte \\(2^3 \\cdot 2^6\\).`,
      formula: `$$2^3 \\cdot 2^6 = \\,?$$`,
      instruction: `Vyjádřete výsledek jako jednu mocninu nebo číslo.`,
      steps: [
        {
          trigger: `> Krok 1: Pravidlo pro násobení mocnin`,
          content: `Při násobení mocnin se <b>stejným základem</b> se exponenty <b>sčítají</b>: \\(a^m \\cdot a^n = a^{m+n}\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `Pravidlo z Kroku 1: exponenty se sčítají. Dosaď \\(m = 3\\) a \\(n = 6\\) — jaký je výsledný exponent?`
        },
      ],
      choices: [
        {
          label: `\\(2^{18}\\)`,
          value: "A",
          feedback: `Chyba. Exponenty jsi vynásobil/a \\((3 \\cdot 6 = 18)\\). Při násobení mocnin se exponenty sčítají, ne násobí.`
        },
        {
          label: `\\(2^{9}\\)`,
          value: "B",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(4^{9}\\)`,
          value: "C",
          feedback: `Chyba. Základ zůstává \\(2\\), nemění se na \\(4\\). Sčítáme exponenty, ne základy.`
        },
        {
          label: `\\(2^{3}\\)`,
          value: "D",
          feedback: `Chyba. Exponenty jsi odečetl/a \\((6 - 3 = 3)\\). Pro násobení platí sčítání exponentů.`
        },
      ],
      hints: [
        `\\(a^m \\cdot a^n = a^{m+n}\\).`,
        `Sečti exponenty podle pravidla z kroku 1.`,
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_co_09", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00F: Absolutní hodnota — podmínky`,
      visual_color: "#00d2ff", visual_symbol: ``, points: 3, trainingTasks: ["t_co_09"],
      question: `Množina M splňuje současně dvě podmínky:`,
      formula: `$$M = \\{ x \\in \\mathbb{R};\\ x \\geq -2 \\land |x| < 5\\}$$`,
      instruction: `Zapište množinu M intervalem.`,
      choices: [
        {
          label: `\\(( - 2;\\, 5)\\)`,
          value: "A",
          feedback: `Chyba závorky. Podmínka říká \\(x \\geq -2\\) — číslo \\(-2\\) do množiny patří, závorka musí být uzavřená.`
        },
        {
          label: `\\(( - 5;\\, 5)\\)`,
          value: "B",
          feedback: `Kritická chyba. Ignoroval/a jsi druhou podmínku \\(x \\geq -2\\). Obě podmínky musí platit současně.`
        },
        {
          label: `\\(\\langle - 2;\\, 5)\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(|x|<5\\) dává \\((-5;5)\\), průnik s \\(\\langle -2;+\\infty)\\) je \\(\\langle -2;5)\\).`
        },
        {
          label: `\\(\\langle - 2;\\, 5\\rangle\\)`,
          value: "D",
          feedback: `Chyba závorky u 5. Podmínka \\(|x| < 5\\) je ostrá — číslo \\(5\\) do \\(M\\) nepatří.`
        },
      ],
      hints: [
        `\\(|x| < 5\\) → \\(-5 < x < 5\\) → interval \\((-5;\\, 5)\\).`,
        `Máš dvě podmínky: \\(|x| < 5\\) a \\(x \\geq -2\\). Hledáš jejich průnik.`,
        `Zkontroluj typ nerovnosti u každé podmínky — ostrá nebo neostrá? To určuje závorky.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_co_09", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00F: Absolutní hodnota jako interval`,
      isTraining: true, firewallId: "q_co_09", visual_color: "#2ecc8a", visual_symbol: ``, points: 0,
      question: `Pro která reálná čísla platí \\(|x| < 4\\)? Zapište intervalem.`,
      formula: `$$|x| < 4$$`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Rozepsání absolutní hodnoty`,
          content: `\\(|x| < 4\\) znamená vzdálenost \\(x\\) od nuly je menší než \\(4\\). Jaké hodnoty to splňují?`
        },
        {
          trigger: `> Krok 2: Zápis intervalem`,
          content: `Obě závorky otevřené (ostrá nerovnost). Jak zapíšeš tuto podmínku jako interval?`
        },
        {
          trigger: `> Krok 3: Obrázek`,
          content: `Na číselné ose vidíš otevřený interval \\((-4; 4)\\) — prázdná kolečka na obou koncích.`
        },
      ],
      choices: [
        {
          label: `\\(\\langle - 4;\\, 4\\rangle\\)`,
          value: "A",
          feedback: `Chyba závorek. Nerovnost je ostrá \\((<)\\), ne \\(\\leq\\). Závorky musí být otevřené.`
        },
        {
          label: `\\((0;\\, 4)\\)`,
          value: "B",
          feedback: `Kritická chyba. Absolutní hodnota zahrnuje i záporná čísla. \\(|-3| = 3 < 4\\).`
        },
        {
          label: `\\(( - 4;\\, 0) \\cup (0;\\, 4)\\)`,
          value: "C",
          feedback: `Chyba. Číslo \\(0\\) splňuje \\(|0| = 0 < 4\\), tedy \\(0\\) patří do řešení. Interval není rozdělen.`
        },
        {
          label: `\\(( - 4;\\, 4)\\)`,
          value: "D",
          feedback: `Přístup povolen.`
        },
      ],
      hints: [
        `\\(|x| < a\\) \\(\\Leftrightarrow\\) \\(-a < x < a\\) (otevřené závorky pro ostrou nerovnost).`,
        `\\(|x| \\leq a\\) \\(\\Leftrightarrow\\) \\(-a \\leq x \\leq a\\) (uzavřené závorky pro neostrou).`,
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker><marker id="iv_arr_r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="context-stroke"/></marker><marker id="iv_arr_l" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="context-stroke"/></marker><marker id="tick" markerWidth="4" markerHeight="8" refX="2" refY="4" orient="auto"><line x1="2" y1="0" x2="2" y2="8" stroke="#64748b" stroke-width="1.5"/></marker></defs><text x="210" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">|x| &lt; 4</text>
<line x1="35" y1="70" x2="385" y2="70" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr)"/>
<line x1="45.0" y1="64" x2="45.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="45.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-6</text>
<line x1="72.5" y1="64" x2="72.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="72.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-5</text>
<line x1="100.0" y1="64" x2="100.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="100.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-4</text>
<line x1="127.5" y1="64" x2="127.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="127.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-3</text>
<line x1="155.0" y1="64" x2="155.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="155.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-2</text>
<line x1="182.5" y1="64" x2="182.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="182.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-1</text>
<line x1="210.0" y1="64" x2="210.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="210.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text>
<line x1="237.5" y1="64" x2="237.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="237.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text>
<line x1="265.0" y1="64" x2="265.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="265.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text>
<line x1="292.5" y1="64" x2="292.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="292.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text>
<line x1="320.0" y1="64" x2="320.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="320.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text>
<line x1="347.5" y1="64" x2="347.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="347.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">5</text>
<line x1="375.0" y1="64" x2="375.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="375.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">6</text>
<line x1="100.0" y1="42" x2="100.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="320.0" y1="42" x2="320.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="100.0" y1="42" x2="320.0" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/>
<circle cx="100.0" cy="42" r="5" fill="#111827" stroke="#0077bb" stroke-width="2"/>
<circle cx="320.0" cy="42" r="5" fill="#111827" stroke="#0077bb" stroke-width="2"/>
<rect x="162.1" y="106.0" width="16" height="8" rx="2" fill="#0077bb"/>
<text x="183.1" y="114" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">x ∈ (−4; 4)</text></svg>`,
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_co_10", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00G: Prvky mimo průnik`,
      visual_color: "#00d2ff", visual_symbol: `∖`, points: 2, trainingTasks: ["t_co_10"],
      question: `Je dán interval \\(A = (1;\\, 6)\\) a množina \\(B = \\{ 1,\\, 2,\\, 3,\\, 4,\\, 5,\\, 6,\\, 7\\}\\).`,
      instruction: `Uveďte všechny prvky množiny B, které nepatří do průniku \\(A \\cap B\\).`,
      choices: [
        {
          label: `\\(\\{ 7\\}\\)`,
          value: "A",
          feedback: `Chyba. Chybí, že interval \\((1;6)\\) je otevřený — čísla \\(1\\) ani \\(6\\) do A nepatří.`
        },
        {
          label: `\\(\\{ 1,\\, 6,\\, 7\\}\\)`,
          value: "B",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(\\{ 1,\\, 2,\\, 3,\\, 4,\\, 5,\\, 6,\\, 7\\}\\)`,
          value: "C",
          feedback: `Kritická chyba. Průnik \\(A \\cap B\\) není prázdný — celá čísla \\(2,3,4,5\\) leží v otevřeném intervalu \\((1;6)\\).`
        },
        {
          label: `\\(\\{ 6,\\, 7\\}\\)`,
          value: "D",
          feedback: `Chyba. Číslo \\(1\\) také nepatří do průniku — interval je otevřený vlevo: \\(1 \\notin (1;6)\\).`
        },
      ],
      hints: [
        `Zkontroluj typ závorek intervalu \\((1; 6)\\) — které krajní body do intervalu patří a které ne?`,
        `Průnik \\(A \\cap B\\) = prvky B, které zároveň leží v otevřeném intervalu \\((1; 6)\\).`,
        `Hledáme prvky B, které do průniku <b>nepatří</b> — tzn. mimo interval nebo na krajích.`,
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_co_10", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00G: Otevřený interval a jeho prvky`,
      isTraining: true, firewallId: "q_co_10", visual_color: "#2ecc8a", visual_symbol: `∖`, points: 0,
      question: `Patří číslo \\(3\\) do intervalu \\((3;\\, 7)\\)?`,
      instruction: `Rozhodněte, zda \\(3 \\in (3;7)\\).`,
      steps: [
        {
          trigger: `> Krok 1: Otevřená závorka`,
          content: `Interval \\((3;7)\\) má na levé straně <b>kulatou závorku</b> — levá mez \\(3\\) do intervalu <b>nepatří</b>.`
        },
        {
          trigger: `> Krok 2: Závěr`,
          content: `Pokud číslo neleží v intervalu \\(A\\), může ležet v doplňku \\(A'\\)?`
        },
      ],
      choices: [
        {
          label: `Ne, \\(3 \\notin (3;\\, 7)\\)`,
          value: "A",
          feedback: `Logika potvrzena. Otevřená závorka = hraniční bod nepatří.`
        },
        {
          label: `Ano, \\(3 \\in (3;\\, 7)\\)`,
          value: "B",
          feedback: `Chyba. Kulatá závorka u 3 znamená ostrou nerovnost: x > 3, ne x ≥ 3.`
        },
        {
          label: `Záleží na typu intervalu`,
          value: "C",
          feedback: `Typ je jasný z notace: kulatá závorka = otevřený → 3 ∉ (3;7).`
        },
        {
          label: `3 ∈ (3;7) pouze pokud je závorka hranatá`,
          value: "D",
          feedback: `Správná úvaha! Ale závorka JE kulatá (otevřená), tedy 3 ∉ (3;7).`
        },
      ],
      hints: [
        `Kulatá závorka → hraniční bod nepatří (ostrá nerovnost \\(x > a\\) nebo \\(x < a\\)).`,
        `Hranatá závorka → hraniční bod patří (neostré \\(x \\geq a\\) nebo \\(x \\leq a\\)).`,
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_co_16", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00H: Klasifikace čísel`,
      visual_color: "#00d2ff", visual_symbol: `ℚ`, points: 2, trainingTasks: ["t_co_16"],
      question: `Která z následujících čísel patří do množiny \\(\\mathbb{Q}\\) (racionálních čísel), ale NEPATŘÍ do množiny \\(\\mathbb{Z}\\) (celých čísel)?`,
      instruction: `Vyberte číslo z \\(\\mathbb{Q} \\setminus \\mathbb{Z}\\).`,
      choices: [
        {
          label: `\\(- 5\\)`,
          value: "A",
          feedback: `Chyba. \\(-5 \\in \\mathbb{Z}\\), tedy i \\(-5 \\in \\mathbb{Q}\\), ale hledáme číslo, které v \\(\\mathbb{Z}\\) NENÍ.`
        },
        {
          label: `\\(\\sqrt{2}\\)`,
          value: "B",
          feedback: `Kritická chyba. \\(\\sqrt{2} \\notin \\mathbb{Q}\\) — je iracionální. Hledáme číslo racionální, ale ne celé.`
        },
        {
          label: `\\(0\\)`,
          value: "C",
          feedback: `Chyba. \\(0 \\in \\mathbb{Z} \\subset \\mathbb{Q}\\). Hledáme číslo, které je v \\(\\mathbb{Q}\\), ale NE v \\(\\mathbb{Z}\\).`
        },
        {
          label: `\\(\\frac{3}{7}\\)`,
          value: "D",
          feedback: `Logika potvrzena.`
        },
      ],
      hints: [
        `\\(\\mathbb{Q}\\) = racionální čísla = zlomky \\(\\left(\\frac{p}{q}\\right)\\), kde \\(p, q \\in \\mathbb{Z}\\), \\(q \\neq 0\\). Celá čísla jsou podmnožina \\(\\mathbb{Q}\\).`,
        `Hledáme číslo v \\(\\mathbb{Q}\\), ale <b>ne</b> v \\(\\mathbb{Z}\\) → tzn. zlomek nebo číslo s desetinnou částí, které nelze celé zapsat.`,
        `Iracionální čísla \\((\\sqrt{2}, \\pi)\\) do \\(\\mathbb{Q}\\) nepatří vůbec.`,
      ],
      correctAnswer: "D", reward: { xp: 10 }
    },
    {
      id: "t_co_16", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00H: Číselné obory — hierarchie`,
      isTraining: true, firewallId: "q_co_16", visual_color: "#2ecc8a", visual_symbol: `ℚ`, points: 0,
      question: `Platí \\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\)? Patří číslo \\(4\\) do \\(\\mathbb{Q}\\)?`,
      instruction: `Rozhodněte, zda \\(4 \\in \\mathbb{Q}\\).`,
      steps: [
        {
          trigger: `> Krok 1: Hierarchie oborů`,
          content: `\\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\). Každé přirozené číslo je i celé, každé celé je i racionální, každé racionální je i reálné.`
        },
        {
          trigger: `> Krok 2: Kde leží 4?`,
          content: `\\(4 \\in \\mathbb{N}\\). Protože \\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}\\), co z toho plyne? Lze zapsat 4 jako \\(\\tfrac{p}{q}\\)?`
        },
        {
          trigger: `> Krok 3: Diagram hierarchie`,
          content: `Na obrázku vidíš vnořené obdélníky — každý vnitřní obor je podmnožinou vnějšího:<br><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 210" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><text x="210" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">Hierarchie číselných oborů</text><rect x="10" y="25" width="400" height="175" rx="6" fill="none" stroke="#ff3b6a" stroke-width="2"/><text x="20" y="42" font-size="13" font-weight="bold" fill="#ff3b6a">ℝ</text><text x="20" y="190" font-size="10" fill="#ff3b6a">√2, π, e</text><rect x="45" y="50" width="330" height="135" rx="5" fill="none" stroke="#f7b84f" stroke-width="2"/><text x="55" y="66" font-size="13" font-weight="bold" fill="#f7b84f">ℚ</text><text x="55" y="175" font-size="10" fill="#f7b84f">½, ¾, −⅔</text><rect x="90" y="75" width="240" height="95" rx="4" fill="none" stroke="#00d2ff" stroke-width="2"/><text x="100" y="90" font-size="13" font-weight="bold" fill="#00d2ff">ℤ</text><text x="100" y="160" font-size="10" fill="#00d2ff">−3, −1, 0</text><rect x="140" y="98" width="140" height="58" rx="3" fill="rgba(46,204,138,0.08)" stroke="#2ecc8a" stroke-width="2"/><text x="152" y="114" font-size="13" font-weight="bold" fill="#2ecc8a">ℕ</text><text x="152" y="148" font-size="11" fill="#2ecc8a">1, 2, 3, …</text></svg>`
        },
      ],
      choices: [
        {
          label: `Ne, \\(4 \\notin \\mathbb{Q}\\)`,
          value: "A",
          feedback: `Chyba. \\(\\mathbb{Q}\\) zahrnuje i celá a přirozená čísla. \\(4 = \\tfrac{4}{1}\\) je racionální.`
        },
        {
          label: `Ano, \\(4 \\in \\mathbb{Q}\\)`,
          value: "B",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(4 \\in \\mathbb{Q}\\) jen pokud \\(4 \\notin \\mathbb{Z}\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(\\mathbb{Q}\\) je nadmnožina \\(\\mathbb{Z}\\) — celá čísla jsou automaticky i racionální.`
        },
        {
          label: `\\(4 \\in \\mathbb{Q}\\), ale ne vždy`,
          value: "D",
          feedback: `Chyba. Příslušnost k číselným oborům je stálá — \\(4 \\in \\mathbb{Q}\\) platí vždy.`
        },
      ],
      hints: [
        `\\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\) — každý vnitřní obor je podmnožinou vnějšího.`,
        `Každé přirozené číslo je zároveň celé, racionální i reálné.`,
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_co_17", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00I: Doplněk množiny`,
      visual_color: "#00d2ff", visual_symbol: `Aᶜ`, points: 3, trainingTasks: ["t_co_17"],
      question: `Je dána množina \\(A = \\langle - 3;\\, 5)\\) jako podmnožina \\(\\mathbb{R}\\).`,
      instruction: `Zapište doplněk \\(A' = \\mathbb{R} \\setminus A\\) intervalem.`,
      choices: [
        {
          label: `\\(( - \\infty;\\, - 3) \\cup \\langle 5;\\, + \\infty)\\)`,
          value: "A",
          feedback: `Přístup povolen.`
        },
        {
          label: `\\(( - \\infty;\\, - 3\\rangle \\cup (5;\\, + \\infty)\\)`,
          value: "B",
          feedback: `Chyba závorek. \\(-3 \\in A\\) (uzavřená závorka), v doplňku nesmí být. \\(5 \\notin A\\) (otevřená závorka), v doplňku musí být.`
        },
        {
          label: `\\(( - 3;\\, 5)\\)`,
          value: "C",
          feedback: `Kritická chyba. To je vnitřek A, ne doplněk. Doplněk jsou čísla, která do A nepatří.`
        },
        {
          label: `\\(( - \\infty;\\, - 3) \\cup (5;\\, + \\infty)\\)`,
          value: "D",
          feedback: `Chyba u pravé části. \\(5 \\notin A\\) (otevřená závorka u \\(5\\)), takže \\(5 \\in A'\\). Závorka u \\(5\\) musí být uzavřená.`
        },
      ],
      hints: [
        `Doplněk \\(A' = \\mathbb{R} \\setminus A\\) = vše, co do A <b>nepatří</b>.`,
        `Závorky v doplňku se 'obrátí': pokud byl bod v A uzavřeně → v \\(A'\\) je otevřeně (a naopak).`,
        `Kontroluj krajní body: Je levý bod v A uzavřeně či otevřeně? Pak ho v doplňku zapiš opačně.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_co_17", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00I: Doplněk — co chybí`,
      isTraining: true, firewallId: "q_co_17", visual_color: "#2ecc8a", visual_symbol: `Aᶜ`, points: 0,
      question: `Je dána množina \\(A = (2;\\, 8)\\) v základní množině \\(\\mathbb{R}\\). Patří číslo \\(2\\) do doplňku \\(A'\\)?`,
      instruction: `Rozhodněte, zda \\(2 \\in A'\\).`,
      steps: [
        {
          trigger: `> Krok 1: Co je doplněk?`,
          content: `V doplňku \\(A'\\) je <b>vše, co není v původní množině \\(A\\)</b>. Tedy \\(A' = \\mathbb{R} \\setminus A\\).`
        },
        {
          trigger: `> Krok 2: Je 2 v A?`,
          content: `Zkontroluj, jaký typ závorky má interval \\(A = (2;8)\\) u čísla \\(2\\).`
        },
        {
          trigger: `> Krok 3: Závěr s obrázkem`,
          content: `Protože \\(2 \\notin A\\) a \\(2 \\in \\mathbb{R}\\), co z toho plyne? Na ose vidíš prázdné kolečko u \\(2\\) — to potvrzuje, že \\(2 \\notin A\\):<br><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr17" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker></defs><text x="210" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">2 ∉ A = (2; 8)  →  2 ∈ A'?</text><line x1="35" y1="70" x2="385" y2="70" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr17)"/><line x1="45" y1="64" x2="45" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="45" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text><line x1="78" y1="64" x2="78" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="78" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text><line x1="111" y1="64" x2="111" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="111" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text><line x1="144" y1="64" x2="144" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="144" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text><line x1="177" y1="64" x2="177" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="177" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text><line x1="210" y1="64" x2="210" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="210" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">5</text><line x1="243" y1="64" x2="243" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="243" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">6</text><line x1="276" y1="64" x2="276" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="276" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">7</text><line x1="309" y1="64" x2="309" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="309" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">8</text><line x1="342" y1="64" x2="342" y2="76" stroke="#e2e8f0" stroke-width="1"/><text x="342" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">9</text><line x1="111" y1="42" x2="309" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/><circle cx="111" cy="42" r="5" fill="#111827" stroke="#0077bb" stroke-width="2"/><circle cx="309" cy="42" r="5" fill="#111827" stroke="#0077bb" stroke-width="2"/><rect x="165" y="106" width="16" height="8" rx="2" fill="#0077bb"/><text x="186" y="114" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">A = (2; 8)</text></svg>`
        },
      ],
      choices: [
        {
          label: `Ne, \\(2 \\notin A'\\)`,
          value: "A",
          feedback: `Chyba. \\(2\\) není v A (otevřená závorka), takže patří do doplňku.`
        },
        {
          label: `Záleží na základní množině`,
          value: "B",
          feedback: `Základní množina je \\(\\mathbb{R}\\) — to je dáno zadáním. \\(2 \\in \\mathbb{R}\\) a \\(2 \\notin A\\) → \\(2 \\in A'\\).`
        },
        {
          label: `Ano, \\(2 \\in A'\\)`,
          value: "C",
          feedback: `Logika potvrzena.`
        },
        {
          label: `\\(2\\) leží na hranici, nelze určit`,
          value: "D",
          feedback: `Lze určit jednoznačně. Kulatá závorka → \\(2 \\notin A\\) → \\(2 \\in A'\\).`
        },
      ],
      hints: [
        `Doplněk \\(A'\\) obsahuje vše z \\(\\mathbb{R}\\), co <b>není</b> v A.`,
        `Kulatá závorka u \\(2\\) v \\((2; 8)\\) → \\(2 \\notin A\\) → \\(2 \\in A'\\).`,
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_co_19", regionId: "ciselne_obory", type: "closed", monsterName: `FW_00J: Absolutní hodnota — nerovnice`,
      visual_color: "#00d2ff", visual_symbol: ``, points: 3, trainingTasks: ["t_co_19"],
      question: `Určete množinu všech reálných čísel \\(x\\), pro která platí nerovnice:`,
      formula: `$$|x - 2| \\leq 5$$`,
      instruction: `Zapište řešení intervalem.`,
      choices: [
        {
          label: `\\(\\langle - 7;\\, 3\\rangle\\)`,
          value: "A",
          feedback: `Chyba. Zřejmě jsi dosadil/a špatně — výsledek odpovídá \\(|x+2| \\leq 5\\). Zkontroluj si dosazení hodnot \\(a = 2\\) a \\(k = 5\\) do vzorce.`
        },
        {
          label: `\\(( - \\infty;\\, - 3\\rangle \\cup \\langle 7;\\, + \\infty)\\)`,
          value: "B",
          feedback: `Kritická chyba. Toto je řešení \\(|x-2| \\geq 5\\), ne \\(\\leq 5\\). Oba výsledky jsou vzájemně doplňkové.`
        },
        {
          label: `\\(\\langle - 3;\\, 7\\rangle\\)`,
          value: "C",
          feedback: `Přístup povolen.`
        },
        {
          label: `\\(( - 3;\\, 7)\\)`,
          value: "D",
          feedback: `Chyba závorek. Nerovnost je neostá \\((\\leq)\\), ne ostrá \\((<)\\). Závorky musí být uzavřené.`
        },
      ],
      hints: [
        `Geometricky: \\(|x - 2| \\leq 5\\) znamená, že \\(x\\) je od \\(2\\) vzdáleno <b>maximálně</b> \\(5\\) jednotek.`,
        `\\(|\\text{výraz}| \\leq k\\) se přepíše na \\(-k \\leq \\text{výraz} \\leq k\\). Dosaď a dopočítej.`,
        `Neostré \\(\\leq\\) → uzavřené závorky ⟨ ⟩.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_co_19", regionId: "ciselne_obory", type: "closed", monsterName: `SIM_00J: Rozepsání absolutní hodnoty`,
      isTraining: true, firewallId: "q_co_19", visual_color: "#2ecc8a", visual_symbol: ``, points: 0,
      question: `Rozepište nerovnici \\(|x - 3| \\leq 4\\) bez absolutní hodnoty.`,
      formula: `$$|x - 3| \\leq 4$$`,
      instruction: `Vyberte správný zápis bez absolutní hodnoty.`,
      steps: [
        {
          trigger: `> Krok 1: Geometrický význam`,
          content: `Hledáme \\(x\\) vzdálené od \\(3\\) <b>méně než 4</b> (nebo rovno 4). Na číselné ose: čísla v okolí bodu \\(3\\) o poloměru \\(4\\).`
        },
        {
          trigger: `> Krok 2: Pravidlo pro \\(|x−a| \\leq k\\)`,
          content: `Pokud \\(|x - a| \\leq k\\), pak <b>\\(-k \\leq x - a \\leq k\\)</b>. Dosadíme: \\(a = 3\\), \\(k = 4\\).`
        },
        {
          trigger: `> Krok 3: Výpočet a obrázek`,
          content: `Po dosazení máš dvojitou nerovnici. Jak izoluješ \\(x\\)? Na ose vidíš uzavřený interval s plnými kolečky.`
        },
      ],
      choices: [
        {
          label: `\\(- 4 \\leq x \\leq 4\\)`,
          value: "A",
          feedback: `Chyba. Nezapočítal/a jsi posunutí o \\(a=3\\). Správně přičti \\(3\\) ke všem stranám.`
        },
        {
          label: `\\(- 1 \\leq x \\leq 7\\)`,
          value: "B",
          feedback: `Přístup povolen.`
        },
        {
          label: `\\(x \\leq 7\\text{ nebo\\ }x \\geq - 1\\)`,
          value: "C",
          feedback: `Chyba logiky. Musí platit OBĚ podmínky současně (spojka \\(\\land\\)), ne \\(\\lor\\).`
        },
        {
          label: `\\(x \\leq - 1\\text{ nebo\\ }x \\geq 7\\)`,
          value: "D",
          feedback: `Kritická chyba. To je řešení \\(|x-3| \\geq 4\\). Obrátil/a jsi nerovnost.`
        },
      ],
      hints: [
        `\\(|x - a| \\leq k\\) \\(\\Rightarrow\\) \\(-k \\leq x - a \\leq k\\).`,
        `Přičti \\(a\\) ke všem stranám, abys dostal/a přímo \\(x\\).`,
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker><marker id="iv_arr_r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="context-stroke"/></marker><marker id="iv_arr_l" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="context-stroke"/></marker><marker id="tick" markerWidth="4" markerHeight="8" refX="2" refY="4" orient="auto"><line x1="2" y1="0" x2="2" y2="8" stroke="#64748b" stroke-width="1.5"/></marker></defs><text x="210" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">|x − 3| ≤ 4</text>
<line x1="35" y1="70" x2="385" y2="70" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr)"/>
<line x1="45.0" y1="64" x2="45.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="45.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-3</text>
<line x1="72.5" y1="64" x2="72.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="72.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-2</text>
<line x1="100.0" y1="64" x2="100.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="100.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-1</text>
<line x1="127.5" y1="64" x2="127.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="127.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text>
<line x1="155.0" y1="64" x2="155.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="155.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text>
<line x1="182.5" y1="64" x2="182.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="182.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text>
<line x1="210.0" y1="64" x2="210.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="210.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text>
<line x1="237.5" y1="64" x2="237.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="237.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text>
<line x1="265.0" y1="64" x2="265.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="265.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">5</text>
<line x1="292.5" y1="64" x2="292.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="292.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">6</text>
<line x1="320.0" y1="64" x2="320.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="320.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">7</text>
<line x1="347.5" y1="64" x2="347.5" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="347.5" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">8</text>
<line x1="375.0" y1="64" x2="375.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="375.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">9</text>
<line x1="100.0" y1="42" x2="100.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="320.0" y1="42" x2="320.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="100.0" y1="42" x2="320.0" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/>
<circle cx="100.0" cy="42" r="5" fill="#0077bb"/>
<circle cx="320.0" cy="42" r="5" fill="#0077bb"/>
<rect x="162.1" y="106.0" width="16" height="8" rx="2" fill="#0077bb"/>
<text x="183.1" y="114" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">x ∈ ⟨−1; 7⟩</text></svg>`,
      correctAnswer: "B", reward: { xp: 5 }
    },

    // ==========================================
    // ROVNICE — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_rov_02", regionId: "rovnice", type: "closed", monsterName: `FW_02B: Lomená rovnice I`,
      visual_color: "#f7b84f", visual_symbol: `x=`, points: 6, trainingTasks: ["t_rov_02"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{x + 3}{x - 1} + \\frac{4}{x + 1} = \\frac{8}{x^{2} - 1}$$`,
      instruction: `Zvolte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(\\{ 1\\}\\)`,
          value: "A",
          feedback: `Kritická chyba. \\(x=1\\) je zakázaná hodnota — vynuluje jmenovatele \\((x-1)\\).`
        },
        {
          label: `\\(\\{ - 9\\}\\)`,
          value: "B",
          feedback: `Přístup povolen. Po vynásobení \\((x-1)(x+1)\\) vychází \\(x^2+8x-9=0\\), kořen \\(x=-9\\) prošel podmínkou.`
        },
        {
          label: `\\(\\{ - 9;\\, 1\\}\\)`,
          value: "C",
          feedback: `Chyba. Kořen \\(x=1\\) sice algebraicky vychází, ale nesplňuje definiční podmínku.`
        },
        {
          label: `Rovnice nemá řešení`,
          value: "D",
          feedback: `Chyba výpočtu. Po správném vynásobení jmenovatelem vznikne kvadratická rovnice — jeden kořen podmínku splňuje.`
        },
      ],
      hints: [
        `Jmenovatel třetího zlomku lze rozložit na součin. Co to prozradí o společném jmenovateli?`,
        `Kvadratická rovnice může mít dva kořeny. Oba je třeba ověřit vůči podmínkám.`,
      ],
      correctAnswer: "B", reward: { xp: 30 }
    },
    {
      id: "t_rov_02", regionId: "rovnice", type: "closed", monsterName: `SIM_02B: Podmínky lomeného výrazu`,
      isTraining: true, firewallId: "q_rov_02", visual_color: "#2ecc8a", visual_symbol: `x=`, points: 0,
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{3}{x - 1} + \\frac{1}{x + 1} = 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Podmínky`,
          content: `Jaké hodnoty \\(x\\) vynulují jmenovatele? Tyto hodnoty jsou zakázané.`
        },
        {
          trigger: `> Krok 2: Násobení společným jmenovatelem`,
          content: `Po vynásobení společným jmenovatelem obě strany zjednoduš. Vznikne jednoduchá lineární rovnice.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 1;\\, - 1\\}\\)`,
          value: "A",
          feedback: `Kritická chyba. Toto jsou zakázané hodnoty, ne řešení.`
        },
        {
          label: `Rovnice nemá řešení`,
          value: "B",
          feedback: `Chyba. Po vynásobení jmenovatelem dostaneme lineární rovnici s řešením.`
        },
        {
          label: `\\(\\left\\{ - \\frac{1}{2} \\right\\}\\)`,
          value: "C",
          feedback: `Přístup povolen. Splňuje podmínky \\(x\\neq\\pm1\\). Teď zkus rovnici se třemi zlomky.`
        },
        {
          label: `\\(\\left\\{ \\frac{1}{2} \\right\\}\\)`,
          value: "D",
          feedback: `Chyba znaménka. \\(4x+2=0\\) → \\(x=-1/2\\), ne \\(+1/2\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_rov_03", regionId: "rovnice", type: "closed", monsterName: `FW_02C: Lomená rovnice II`,
      visual_color: "#f7b84f", visual_symbol: `x=`, points: 5, trainingTasks: ["t_rov_03"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{x + 6}{x - 2} + \\frac{x}{x + 2} = \\frac{20}{x^{2} - 4}$$`,
      instruction: `Zvolte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(\\{ - 4\\}\\)`,
          value: "A",
          feedback: `Nekompletní. Toto je jen jeden z kořenů.`
        },
        {
          label: `\\(\\{ 2;\\, 4\\}\\)`,
          value: "B",
          feedback: `Kritická chyba. \\(x=2\\) vynuluje jmenovatele \\((x-2)\\). A \\(x=4\\) není kořen.`
        },
        {
          label: `\\(\\{ - 4;\\, 1\\}\\)`,
          value: "C",
          feedback: `Přístup povolen. Po vynásobení \\((x-2)(x+2)\\): \\(2x^2+6x-8=0\\) → \\((x+4)(x-1)=0\\). Obě řešení prošla podmínkou.`
        },
        {
          label: `\\(\\{ 1\\}\\)`,
          value: "D",
          feedback: `Nekompletní. Toto je jen jeden z kořenů.`
        },
      ],
      hints: [
        `Jmenovatel posledního zlomku se dá rozložit pomocí vzorce \\(a^2 - b^2\\). Jaké podmínky to přinese?`,
        `Po převedení na společného jmenovatele vznikne kvadratická rovnice. Oba kořeny ověř vůči podmínkám.`,
      ],
      correctAnswer: "C", reward: { xp: 25 }
    },
    {
      id: "t_rov_03", regionId: "rovnice", type: "closed", monsterName: `SIM_02C: Lomená rovnice se třemi zlomky`,
      isTraining: true, firewallId: "q_rov_03", visual_color: "#2ecc8a", visual_symbol: `x=`, points: 0,
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{x + 2}{x - 1} - \\frac{x}{x + 1} = \\frac{2}{x^{2} - 1}$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Rozklad a podmínky`,
          content: `Rozlož \\(x^2 - 1\\) na součin podle vzorce \\(a^2 - b^2 = (a-b)(a+b)\\). Jaké podmínky z toho vyplývají?`
        },
        {
          trigger: `> Krok 2: Násobení (x-1)(x+1)`,
          content: `Po vynásobení společným jmenovatelem rozevři závorky a zjednoduš. Co vyjde?`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 0\\}\\)`,
          value: "A",
          feedback: `Přístup povolen. Zjednodušení čitatele dalo lineární rovnici. Teď zkus rovnici s dvěma různými řešeními.`
        },
        {
          label: `\\(\\{ 1;\\, - 1\\}\\)`,
          value: "B",
          feedback: `Kritická chyba. Toto jsou zakázané hodnoty — nikdy nejsou řešením.`
        },
        {
          label: `\\(\\{ - \\frac{1}{2}\\}\\)`,
          value: "C",
          feedback: `Chyba výpočtu. \\(4x+2=2\\) → \\(4x=0\\) → \\(x=0\\), ne \\(-1/2\\).`
        },
        {
          label: `Rovnice nemá řešení`,
          value: "D",
          feedback: `Chyba. \\(x=0\\) podmínky splňuje a rovnici řeší.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_rov_04", regionId: "rovnice", type: "closed", monsterName: `FW_02D: Racionální nerovnice I`,
      visual_color: "#f7b84f", visual_symbol: `<`, points: 4, trainingTasks: ["t_rov_04"],
      question: `V oboru reálných čísel určete množinu řešení nerovnice:`,
      formula: `$$\\frac{4x}{x + 2} - 4 < 0$$`,
      instruction: `Vyberte správný interval řešení.`,
      choices: [
        {
          label: `\\(( - 2;\\, + \\infty)\\)`,
          value: "A",
          feedback: `Přístup povolen. Zjednodušením dostaneme \\(-8/(x+2)<0\\), což platí pro \\(x>-2\\).`
        },
        {
          label: `\\(( - \\infty;\\, - 2)\\)`,
          value: "B",
          feedback: `Obrácená orientace. \\(-8/(x+2)<0\\) platí, když \\((x+2)>0\\), tedy \\(x>-2\\).`
        },
        {
          label: `\\(( - \\infty;\\, + \\infty)\\)`,
          value: "C",
          feedback: `Chyba. Nerovnice není splněna pro \\(x<-2\\). Zkus dosadit \\(x=-3\\).`
        },
        {
          label: `\\(\\langle - 2;\\, + \\infty)\\)`,
          value: "D",
          feedback: `Závorka špatně — \\(x=-2\\) vynuluje jmenovatele, do řešení nepatří.`
        },
      ],
      hints: [
        `Převeď levou stranu na společný jmenovatel. V žádném případě nesmíš násobit (x+2). Nevíš, jestli násobíš kladným nebo záporným číslem.`,
        `Znaménko zlomku závisí na znaménku čitatele a jmenovatele. Rozhodni, kdy je celý zlomek záporný.`,
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_rov_04", regionId: "rovnice", type: "closed", monsterName: `SIM_02D: Znaménko zlomku`,
      isTraining: true, firewallId: "q_rov_04", visual_color: "#2ecc8a", visual_symbol: `<`, points: 0,
      question: `Určete množinu řešení nerovnice v oboru reálných čísel:`,
      formula: `$$\\frac{2}{x - 1} > 0$$`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Čitatel je kladný`,
          content: `Jaké znaménko má čitatel? Je konstantní, nebo závisí na \\(x\\)?`
        },
        {
          trigger: `> Krok 2: Kdy je jmenovatel kladný?`,
          content: `\\(x - 1 > 0\\) → co z toho vyplývá? Jaký interval to představuje?`
        },
      ],
      choices: [
        {
          label: `\\(x > 0\\)`,
          value: "A",
          feedback: `Chyba. Podmínka závisí na jmenovateli \\((x-1)\\), ne jen na \\(x\\).`
        },
        {
          label: `\\(( - \\infty;\\, 1)\\)`,
          value: "B",
          feedback: `Obrácená orientace. Pro \\(x<1\\) je jmenovatel záporný → zlomek záporný.`
        },
        {
          label: `\\(x \\in \\mathbb{R}\\)`,
          value: "C",
          feedback: `Chyba. Pro \\(x < 1\\) je \\(2/(x-1) < 0\\). Nerovnice neplatí všude.`
        },
        {
          label: `\\((1;\\, + \\infty)\\)`,
          value: "D",
          feedback: `Logika potvrzena. Teď zkus složitější nerovnici, kde se čitatel také mění.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_rov_05", regionId: "rovnice", type: "closed", monsterName: `FW_02E: Racionální nerovnice II`,
      visual_color: "#f7b84f", visual_symbol: `≤0`, points: 6, trainingTasks: ["t_rov_05"],
      question: `V oboru reálných čísel určete množinu řešení nerovnice:`,
      formula: `$$\\frac{2x^{2} - 6x}{(x - 3)^{2}} \\leq 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(( - \\infty;\\, 0\\rangle\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(x<0\\): \\(2x/(x-3)\\) je záporné/záporné = kladné > 0. Podmínka nesplněna.`
        },
        {
          label: `\\(\\langle 0;\\, 3\\rangle\\)`,
          value: "B",
          feedback: `Chyba. \\(x=3\\) vynuluje jmenovatele, do řešení nepatří.`
        },
        {
          label: `\\(( - \\infty;\\, 0\\rangle \\cup (3;\\, + \\infty)\\)`,
          value: "C",
          feedback: `Kritická chyba. Znaménkový rozbor máš obrácený.`
        },
        {
          label: `\\(\\langle 0;\\, 3)\\)`,
          value: "D",
          feedback: `Přístup povolen. Zlomek se zjednoduší na \\(2x/(x-3)\\). Záporný je jen pro \\(0 < x < 3\\), nula pro \\(x=0\\).`
        },
      ],
      hints: [
        `Rozlož čitatele i jmenovatele na součin. Dá se zlomek zkrátit?`,
        `Po zjednodušení proveď znaménkový rozbor. Bod, kde jmenovatel původně nulový, zůstává vyloučený.`,
      ],
      correctAnswer: "D", reward: { xp: 30 }
    },
    {
      id: "t_rov_05", regionId: "rovnice", type: "closed", monsterName: `SIM_02E: Zjednodušení racionální nerovnice`,
      isTraining: true, firewallId: "q_rov_05", visual_color: "#2ecc8a", visual_symbol: `≤0`, points: 0,
      question: `Určete množinu řešení nerovnice v oboru reálných čísel:`,
      formula: `$$\\frac{x(x - 4)}{(x - 4)^{2}} \\leq 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Zkrácení zlomku`,
          content: `Čitatel i jmenovatel obsahují činitel \\((x-4)\\). Dá se zkrátit? Za jaké podmínky?`
        },
        {
          trigger: `> Krok 2: Znaménkový rozbor`,
          content: `\\(x/(x-4) \\leq 0\\): nulový bod \\(x=0\\). Pro která \\(x\\) je zlomek záporný nebo nula? Pamatuj: \\(x=4\\) je vyloučena.`
        },
      ],
      choices: [
        {
          label: `\\(( - \\infty;\\, 0\\rangle\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(x<0\\): záporné/záporné = kladné > 0. Podmínka nesplněna.`
        },
        {
          label: `\\(\\langle 0;\\, 4)\\)`,
          value: "B",
          feedback: `Přístup povolen. Teď zkus firewall — stejná logika, jiné číslo.`
        },
        {
          label: `\\(\\langle 0;\\, 4\\rangle\\)`,
          value: "C",
          feedback: `Závorka špatně — \\(x=4\\) vynuluje jmenovatele.`
        },
        {
          label: `\\((0;\\, 4)\\)`,
          value: "D",
          feedback: `Závorka špatně u nuly — \\(x=0\\) dává hodnotu \\(0 \\leq 0\\) ✓, patří do řešení.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_rov_06", regionId: "rovnice", type: "closed", monsterName: `FW_02F: Soustava bez řešení`,
      visual_color: "#f7b84f", visual_symbol: `∅`, points: 3, trainingTasks: ["t_rov_06"],
      question: `Která z následujících soustav dvou rovnic nemá v oboru reálných čísel žádné řešení?`,
      instruction: `Vyberte správnou soustavu.`,
      choices: [
        {
          label: `\\(x - y = 1,\\quad 2x - 2y = 2\\)`,
          value: "A",
          feedback: `Chyba. Druhá rovnice je dvojnásobkem první — jde o tutéž přímku. Soustava má nekonečně mnoho řešení.`
        },
        {
          label: `\\(x + y = 3,\\quad 2x - y = 0\\)`,
          value: "B",
          feedback: `Chyba. Tato soustava má právě jedno řešení: \\(x=1\\), \\(y=2\\).`
        },
        {
          label: `\\(x + y = 3,\\quad 2x + 2y = 5\\)`,
          value: "C",
          feedback: `Přístup povolen. Z první rovnice plyne \\(2x+2y=6\\), ale druhá říká \\(2x+2y=5\\) — spor \\(6 = 5\\). Soustava nemá žádné řešení.`
        },
        {
          label: `\\(x + y = 2,\\quad x - y = 4\\)`,
          value: "D",
          feedback: `Chyba. Tato soustava má právě jedno řešení: \\(x=3\\), \\(y=-1\\).`
        },
      ],
      hints: [
        `Uprav rovnice tak, aby levé strany měly stejné koeficienty. Porovnej pravé strany.`,
        `Soustava nemá řešení, pokud po úpravě vznikne spor — dva různé výsledky pro stejný výraz.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_rov_06", regionId: "rovnice", type: "closed", monsterName: `SIM_02F: Spor v soustavě`,
      isTraining: true, firewallId: "q_rov_06", visual_color: "#2ecc8a", visual_symbol: `∅`, points: 0,
      question: `Má soustava rovnic v oboru reálných čísel řešení?`,
      formula: `$$\\left\\{ \\begin{matrix}
x + 2y = 4 \\\\
2x + 4y = 9 \\\\
\\end{matrix} \\right.\\ $$`,
      instruction: `Vyberte správnou odpověď.`,
      steps: [
        {
          trigger: `> Krok 1: Vynásobení první rovnice`,
          content: `Čím musíš vynásobit první rovnici, aby levé strany obou rovnic byly stejné?`
        },
        {
          trigger: `> Krok 2: Porovnání s druhou rovnicí`,
          content: `Druhá rovnice říká \\(2x + 4y = 9\\). Ale právě jsme odvodili \\(2x + 4y = 8\\). Co to znamená?`
        },
      ],
      choices: [
        {
          label: `Ano, má právě jedno řešení`,
          value: "A",
          feedback: `Chyba. Rovnice jsou rovnoběžné přímky — nikde se neprotínají.`
        },
        {
          label: `Ano, má nekonečně mnoho řešení`,
          value: "B",
          feedback: `Chyba. Nekonečně mnoho řešení by nastalo, kdyby druhá rovnice byla násobkem první — ale \\(8 \\neq 9\\).`
        },
        {
          label: `Ne, soustava nemá žádné řešení`,
          value: "C",
          feedback: `Přístup povolen. Teď zkus poznat soustavu bez řešení mezi čtyřmi možnostmi.`
        },
        {
          label: `Záleží na volbě \\(x\\) a \\(y\\)`,
          value: "D",
          feedback: `Kritická chyba. Řešení soustavy lineárních rovnic existuje, nebo neexistuje — nezáleží na volbě proměnných.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_rov_07", regionId: "rovnice", type: "closed", monsterName: `FW_02G: Rovnice s parametrem`,
      visual_color: "#f7b84f", visual_symbol: `k=?`, points: 4, trainingTasks: ["t_rov_07"],
      question: `V oboru reálných čísel určete, pro která \\(k \\in \\mathbb{R}\\) nemá rovnice žádné řešení:`,
      formula: `$$kx + k = 2x + 1$$`,
      instruction: `Vyberte správnou hodnotu parametru \\(k\\).`,
      choices: [
        {
          label: `\\(k = 1\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(k=1\\): rovnice dá \\((1-2)x = 1-1\\) → \\(-x = 0\\) → \\(x=0\\). Jedno řešení existuje.`
        },
        {
          label: `\\(k = 2\\)`,
          value: "B",
          feedback: `Přístup povolen. Pro \\(k=2\\): \\((2-2)x = 1-2\\) → \\(0 = -1\\) — spor. Rovnice nemá žádné řešení.`
        },
        {
          label: `\\(k \\in \\mathbb{R} \\setminus \\{2\\}\\)`,
          value: "C",
          feedback: `Chyba. Pro \\(k \\neq 2\\) je koeficient u \\(x\\) nenulový → rovnice má právě jedno řešení \\(x = \\frac{1-k}{k-2}\\).`
        },
        {
          label: `Taková hodnota \\(k\\) neexistuje`,
          value: "D",
          feedback: `Kritická chyba. Existuje hodnota \\(k\\), pro kterou koeficient u \\(x\\) vyjde nulový — a přesto pravá strana nenulová. Uprav rovnici do tvaru \\((k-?)x = ?\\) a porovnej obě strany.`
        },
      ],
      hints: [
        `Přesuň členy s \\(x\\) na jednu stranu. Kdy bude koeficient u \\(x\\) nulový?`,
        `Rovnice tvaru \\(0 \\cdot x = c\\) — záleží na tom, jestli \\(c = 0\\) nebo \\(c \\neq 0\\).`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_rov_07", regionId: "rovnice", type: "closed", monsterName: `SIM_02G: Parametr a spor`,
      isTraining: true, firewallId: "q_rov_07", visual_color: "#2ecc8a", visual_symbol: `k=?`, points: 0,
      question: `Pro která \\(k \\in \\mathbb{R}\\) nemá rovnice v oboru reálných čísel žádné řešení?`,
      formula: `$$kx = 6$$`,
      instruction: `Vyberte správnou hodnotu parametru \\(k\\).`,
      steps: [
        {
          trigger: `> Krok 1: Kdy lze rovnici vyřešit?`,
          content: `Rovnici \\(kx = 6\\) řešíš dělením — ale kdy to nejde? Jaká hodnota \\(k\\) znemožní dělení?`
        },
        {
          trigger: `> Krok 2: Dosaď tu problematickou hodnotu k`,
          content: `Dosaď tu problematickou hodnotu \\(k\\). Je výsledná rovnost pravdivá? Co to znamená pro existenci řešení?`
        },
      ],
      choices: [
        {
          label: `\\(k = 6\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(k=6\\): \\(6x=6\\) → \\(x=1\\). Rovnice má jedno řešení.`
        },
        {
          label: `\\(k = 0\\)`,
          value: "B",
          feedback: `Přístup povolen. Pro \\(k=0\\) vychází \\(0=6\\) — spor. Rovnice nemá žádné řešení.`
        },
        {
          label: `\\(k = -6\\)`,
          value: "C",
          feedback: `Chyba. Pro \\(k=-6\\): \\(-6x=6\\) → \\(x=-1\\). Rovnice má jedno řešení.`
        },
        {
          label: `Taková hodnota neexistuje`,
          value: "D",
          feedback: `Kritická chyba. Pro \\(k=0\\) dostaneme \\(0=6\\) — spor, který znamená, že rovnice nemá žádné řešení.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_rov_08", regionId: "rovnice", type: "closed", monsterName: `FW_02H: Prázdná množina řešení`,
      visual_color: "#f7b84f", visual_symbol: `∅`, points: 2, trainingTasks: ["t_rov_08"],
      question: `Která z následujících nerovnic nemá v oboru reálných čísel žádné řešení?`,
      instruction: `Vyberte nerovnici s prázdnou množinou řešení.`,
      choices: [
        {
          label: `\\(x^{2} + 4 < 0\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(x^2 \\geq 0\\), tedy \\(x^2+4 \\geq 4 > 0\\) vždy. Nerovnice nikdy neplatí.`
        },
        {
          label: `\\((x + 3)^{2} \\geq 0\\)`,
          value: "B",
          feedback: `Tato nerovnice platí pro všechna reálná \\(x\\) — čtverec je vždy nezáporný.`
        },
        {
          label: `\\((x - 2)(2 - x) \\geq 0\\)`,
          value: "C",
          feedback: `Chyba. \\((x-2)(2-x) = -(x-2)^2 \\geq 0\\) platí právě pro \\(x=2\\). Má jedno řešení.`
        },
        {
          label: `\\(3x - 1 > 3x - 5\\)`,
          value: "D",
          feedback: `Chyba. Zjednodušením: \\(-1 > -5\\), což je vždy pravda. Řešení je celé \\(\\mathbb{R}\\).`
        },
      ],
      hints: [
        `Druhá mocnina reálného čísla je vždy nezáporná: \\(A^2 \\geq 0\\). Co to říká o hodnotách výrazu \\(x^2 + 4\\)?`,
        `Nerovnice nemá řešení, pokud podmínka nemůže být nikdy splněna. Projdi každou volbu a rozmysli, jakých hodnot výraz nabývá.`,
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_rov_08", regionId: "rovnice", type: "closed", monsterName: `SIM_02H: Nerovnice vždy splněná`,
      isTraining: true, firewallId: "q_rov_08", visual_color: "#2ecc8a", visual_symbol: `∅`, points: 0,
      question: `Pro která reálná čísla \\(x\\) platí nerovnice \\((x + 2)^{2} \\geq 0\\)?`,
      formula: `$$(x + 2)^{2} \\geq 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Co víš o druhé mocnině`,
          content: `Co víš o znaménku druhé mocniny libovolného reálného čísla?`
        },
        {
          trigger: `> Krok 2: Závěr`,
          content: `Může existovat \\(x\\), pro které by \\((x+2)^2\\) bylo záporné?`
        },
      ],
      choices: [
        {
          label: `\\(x \\geq - 2\\)`,
          value: "A",
          feedback: `Chyba. Nerovnice platí i pro \\(x < -2\\), např. \\(x=-5\\): \\((-3)^2=9\\geq0\\) ✓.`
        },
        {
          label: `Celé \\(\\mathbb{R}\\)`,
          value: "B",
          feedback: `Přístup povolen. Teď zkus rozlišit, která nerovnice naopak nemá žádné řešení.`
        },
        {
          label: `\\(x = - 2\\)`,
          value: "C",
          feedback: `Toto je jen nulový bod — hodnota \\(0\\). Ale nerovnice \\(\\geq 0\\) platí pro všechna \\(x\\).`
        },
        {
          label: `Prázdná množina`,
          value: "D",
          feedback: `Kritická chyba. Čtverec je vždy \\(\\geq 0\\) — nerovnice nemůže nemít řešení.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_rov_09", regionId: "rovnice", type: "closed", monsterName: `FW_02I: Kvadratická nerovnice`,
      visual_color: "#f7b84f", visual_symbol: `<0`, points: 3, trainingTasks: ["t_rov_09"],
      question: `Která z následujících nerovnic má v oboru reálných čísel množinu řešení \\(( - 2;\\, 3)\\)?`,
      instruction: `Vyberte správnou nerovnici.`,
      choices: [
        {
          label: `\\((x + 2)(x - 3) > 0\\)`,
          value: "A",
          feedback: `Chyba. Tato nerovnice je kladná vně kořenů: \\(x < -2\\) nebo \\(x > 3\\).`
        },
        {
          label: `\\((x - 2)(x + 3) < 0\\)`,
          value: "B",
          feedback: `Chyba. Kořeny jsou \\(2\\) a \\(-3\\) — řešením je \\((-3;\\, 2)\\), ne \\((-2;\\, 3)\\).`
        },
        {
          label: `\\((x - 2)(x + 3) > 0\\)`,
          value: "C",
          feedback: `Chyba. Záporná část je \\((-3;\\, 2)\\), kladná vně. Záměna kořenů i orientace.`
        },
        {
          label: `\\((x + 2)(x - 3) < 0\\)`,
          value: "D",
          feedback: `Přístup povolen. Kořeny \\(-2\\) a \\(3\\), parabola ∪ — záporná mezi kořeny, tedy \\((-2;\\, 3)\\).`
        },
      ],
      hints: [
        `Interval \\((-2;\\, 3)\\) říká, že výraz je záporný mezi hodnotami \\(-2\\) a \\(3\\). Jaké kořeny musí mít závorky?`,
        `Parabola s kladným koeficientem (∪-tvar) leží pod osou \\(x\\) <b>mezi</b> kořeny. Výraz musí být záporný — jaká nerovnice to vyjadřuje?`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_rov_09", regionId: "rovnice", type: "closed", monsterName: `SIM_02I: Kvadratická nerovnice — znaménkový rozbor`,
      isTraining: true, firewallId: "q_rov_09", visual_color: "#2ecc8a", visual_symbol: `<0`, points: 0,
      question: `Určete množinu řešení nerovnice v oboru reálných čísel:`,
      formula: `$$(x - 1)(x + 2) < 0$$`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Kořeny a tvar paraboly`,
          content: `Jaké jsou nulové body výrazu \\((x-1)(x+2)\\)? Jaký tvar má parabola s kladným vedoucím koeficientem?`
        },
        {
          trigger: `> Krok 2: Kde je výraz záporný?`,
          content: `Parabola ∪ leží pod osou x <b>mezi</b> kořeny. Jaký interval to představuje?`
        },
      ],
      choices: [
        {
          label: `\\(( - \\infty;\\, - 2) \\cup (1;\\, + \\infty)\\)`,
          value: "A",
          feedback: `Chyba orientace. Parabola ∪ je záporná mezi kořeny, ne vně.`
        },
        {
          label: `\\(\\langle - 2;\\, 1\\rangle\\)`,
          value: "B",
          feedback: `Závorky špatně — nerovnice je ostrá, kořeny do řešení nepatří.`
        },
        {
          label: `\\(( - 2;\\, 1)\\)`,
          value: "C",
          feedback: `Logika potvrzena. Teď zkus rozlišit, která ze čtyř nerovnic má jiný interval.`
        },
        {
          label: `\\(( - 1;\\, 2)\\)`,
          value: "D",
          feedback: `Chyba. Záměna kořenů — kořeny jsou \\(-2\\) a \\(1\\), ne \\(-1\\) a \\(2\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_rov_10", regionId: "rovnice", type: "closed", monsterName: `FW_02J: Pravdivost tvrzení`,
      visual_color: "#f7b84f", visual_symbol: `A/N`, points: 3, trainingTasks: ["t_rov_10"],
      question: `Která z následujících tvrzení o nerovnicích je pravdivá?`,
      instruction: `Vyberte správné tvrzení.`,
      choices: [
        {
          label: `Množina řešení nerovnice \\((x + 3)^{2} \\geq 0\\) v oboru \\(\\mathbb{R}\\) je celé \\(\\mathbb{R}\\).`,
          value: "A",
          feedback: `Přístup povolen. Čtverec libovolného reálného čísla je vždy nezáporný.`
        },
        {
          label: `Nerovnice \\((x - 1)(1 - x) \\geq 0\\) nemá v \\(\\mathbb{R}\\) žádné řešení.`,
          value: "B",
          feedback: `Chyba. \\((x-1)(1-x) = -(x-1)^2 \\geq 0\\) platí pro \\(x=1\\). Jedno řešení existuje.`
        },
        {
          label: `Nerovnice \\(x^{2} + 2x + 1 < 0\\) má v \\(\\mathbb{R}\\) nekonečně mnoho řešení.`,
          value: "C",
          feedback: `Chyba. \\(x^2+2x+1 = (x+1)^2 \\geq 0\\) vždy — nerovnice nemá žádné řešení.`
        },
        {
          label: `Nerovnice \\(\\frac{1}{x - 4} > 0\\) je splněna pro všechna \\(x \\in \\mathbb{R}\\).`,
          value: "D",
          feedback: `Chyba. Pro \\(x < 4\\) je zlomek záporný. Platí jen pro \\(x > 4\\).`
        },
      ],
      hints: [
        `U každého tvrzení rozmysli: jaký obor hodnot má daný výraz? Co to znamená pro nerovnost?`,
        `Výraz tvaru \\(-(A)^2\\) je vždy nekladný. Může být zároveň \\(\\geq 0\\)?`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_rov_10", regionId: "rovnice", type: "closed", monsterName: `SIM_02J: Čtverec a jeho znaménko`,
      isTraining: true, firewallId: "q_rov_10", visual_color: "#2ecc8a", visual_symbol: `A/N`, points: 0,
      question: `Je nerovnice \\(x^{2} \\geq 0\\) splněna pro všechna reálná čísla?`,
      formula: `$$x^{2} \\geq 0$$`,
      instruction: `Vyberte správnou odpověď.`,
      steps: [
        {
          trigger: `> Krok 1: Co je x²?`,
          content: `Co víš o znaménku druhé mocniny libovolného reálného čísla?`
        },
        {
          trigger: `> Krok 2: Závěr`,
          content: `Existuje reálné číslo, jehož druhá mocnina by byla záporná?`
        },
      ],
      choices: [
        {
          label: `Ano, pro všechna \\(x \\in \\mathbb{R}\\)`,
          value: "A",
          feedback: `Přístup povolen. Teď zkus identifikovat universálně pravdivá tvrzení i pro složitější výrazy.`
        },
        {
          label: `Ne, jen pro \\(x \\geq 0\\)`,
          value: "B",
          feedback: `Chyba. Pro \\(x=-3\\): \\((-3)^2=9>0\\) ✓. Záporná čísla v druhé mocnině jsou kladná.`
        },
        {
          label: `Ne, jen pro \\(x = 0\\)`,
          value: "C",
          feedback: `Chyba. \\(x=0\\) je sice nulový bod, ale nerovnice \\(\\geq 0\\) platí pro všechna reálná \\(x\\).`
        },
        {
          label: `Záleží na hodnotě \\(x\\)`,
          value: "D",
          feedback: `Chyba. \\(x^2\\) je vždy nezáporné — nezáleží na znaménku \\(x\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_rov_11", regionId: "rovnice", type: "closed", monsterName: `FW_02K: Nerovnice bez řešení`,
      visual_color: "#f7b84f", visual_symbol: `x=`, points: 5, trainingTasks: ["t_rov_11"],
      question: `Která z následujících nerovnic nemá v oboru \\(\\mathbb{R}\\) žádné řešení?`,
      formula: ``,
      instruction: `Vyberte správnou nerovnici.`,
      choices: [
        {
          label: `\\(x^2 - 6x + 9 \\leq 0\\)`,
          value: "A",
          feedback: `Chyba. \\((x-3)^2 = 0\\) pro \\(x = 3\\) — nerovnost \\(\\leq\\) zahrnuje rovnost, takže řešení existuje.`
        },
        {
          label: `\\(x^2 - 4 < 0\\)`,
          value: "B",
          feedback: `Nekompletní. Pro \\(|x| < 2\\) je \\(x^2 < 4\\), tedy \\(x^2 - 4 < 0\\). Interval \\((-2,\\, 2)\\) je neprázdný.`
        },
        {
          label: `\\(x^2 - 4x + 3 < 0\\)`,
          value: "C",
          feedback: `Nekompletní. Trojčlen \\((x-1)(x-3) < 0\\) pro \\(x \\in (1,\\, 3)\\). Kvadratik může být záporný mezi svými kořeny.`
        },
        {
          label: `\\(x^2 + 2x + 5 < 0\\)`,
          value: "D",
          feedback: `Logika potvrzena. Výraz \\((x+1)^2 + 4 \\geq 4\\) pro všechna \\(x\\), proto nemůže být záporný.`
        },
      ],
      hints: [
        `Rozlišuj ostrou nerovnost (\\(<\\)) od neostré (\\(\\leq\\)). Čtverec může být roven nule.`,
        `Zkus doplnit trojčlen na čtverec plus konstanta. Může být součet čtverce a kladného čísla záporný?`,
      ],
      correctAnswer: "D", reward: { xp: 25 }
    },
    {
      id: "t_rov_11", regionId: "rovnice", type: "closed", monsterName: `SIM_02K: Znaménko kvadratického výrazu`,
      isTraining: true, firewallId: "q_rov_11", visual_color: "#2ecc8a", visual_symbol: `x=`, points: 0,
      question: `Může být výraz \\(x^2 + 4x + 8\\) záporný pro nějaké \\(x \\in \\mathbb{R}\\)?`,
      formula: `$$x^2 + 4x + 8$$`,
      instruction: `Vyberte správnou odpověď.`,
      steps: [
        {
          trigger: `> Krok 1: Doplnění na čtverec`,
          content: `Zapiš \\(x^2 + 4x + 8\\) ve tvaru \\((x + a)^2 + b\\). Jaká čísla \\(a\\) a \\(b\\) vyjdou?`
        },
        {
          trigger: `> Krok 2: Nejmenší hodnota`,
          content: `Čtverec je vždy \\(\\geq 0\\). Jaká je tedy nejmenší možná hodnota celého výrazu?`
        },
      ],
      choices: [
        {
          label: `Ne, výraz je vždy kladný`,
          value: "A",
          feedback: `Přístup povolen. \\((x+2)^2 + 4 \\geq 4 > 0\\) pro všechna \\(x\\).`
        },
        {
          label: `Ano, pro \\(x = -2\\)`,
          value: "B",
          feedback: `Chyba. Dosaď: \\((-2)^2 + 4 \\cdot (-2) + 8 = 4\\). Kladné, ne záporné.`
        },
        {
          label: `Ano, pro \\(x = -4\\)`,
          value: "C",
          feedback: `Chyba. Dosaď: \\((-4)^2 + 4 \\cdot (-4) + 8 = 8\\). Kladné, ne záporné.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    // ==========================================
    // LOGARITMY — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_log_01", regionId: "logaritmy", type: "closed", monsterName: `FW_09A: Spojená rovnice`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 3, trainingTasks: ["t_log_01"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\text{log}_{4}(x + 3) + \\text{log}_{4}(x - 3) = 2$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(x \\in \\{ - 5;\\, 5\\}\\)`,
          value: "A",
          feedback: `Chyba podmínek. Záporné řešení \\(x = -5\\) nesplňuje podmínku \\(x > 3\\) — argument logaritmu by byl záporný.`
        },
        {
          label: `\\(x = 5\\)`,
          value: "B",
          feedback: `Přístup povolen. Logaritmy sloučeny správně, podmínka \\(x > 3\\) splněna.`
        },
        {
          label: `\\(x = - 5\\)`,
          value: "C",
          feedback: `Chyba podmínek. Pro \\(x = -5\\) jsou oba argumenty záporné — logaritmy nejsou definovány.`
        },
        {
          label: `\\(x = 4\\)`,
          value: "D",
          feedback: `Kritická chyba. Ověř: \\(\\log_4(7) + \\log_4(1) = \\log_4(7) \\neq 2\\). Substituce nevychází.`
        },
      ],
      hints: [
        `Jak se sloučí součet dvou logaritmů se stejným základem do jednoho?`,
        `Nezapomeňte: každé řešení musí splňovat definiční podmínky obou logaritmů.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_log_01", regionId: "logaritmy", type: "closed", monsterName: `SIM_09A: Základní logaritmická rovnice`,
      isTraining: true, firewallId: "q_log_01", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Nejdříve si procvičíme jednodušší verzi — rovnici s jediným logaritmem \\(\\log_a(x) = c\\):`,
      formula: `$$\\text{log}_{2}(x + 1) = 3$$`,
      instruction: `Vyberte správnou hodnotu \\(x\\).`,
      steps: [
        {
          trigger: `> Krok 1: Odlogaritmovat rovnici`,
          content: `Rovnice \\(\\log_a(M) = b\\) je ekvivalentní s \\(M = a^b\\). Zde: \\(x + 1 = 2^3\\). Kolik je \\(2^3\\)?`
        },
        {
          trigger: `> Krok 2: Dopočítat x`,
          content: `Z \\(x + 1 = 8\\) vyřeš pro \\(x\\). Ověř, že podmínka pro logaritmus je splněna.`
        },
      ],
      choices: [
        {
          label: `\\(x = 9\\)`,
          value: "A",
          feedback: `Chyba. Zkontroluj, kolik je \\(2^3\\) — to není 9.`
        },
        {
          label: `\\(x = 8\\)`,
          value: "B",
          feedback: `Chyba. Odlogaritmování ti dá hodnotu výrazu \\(x + 1\\), ne samotného \\(x\\).`
        },
        {
          label: `\\(x = 7\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(x + 1 = 2^3 = 8\\), tedy \\(x = 7\\). Zkus rovnici se dvěma logaritmy.`
        },
        {
          label: `\\(x = 3\\)`,
          value: "D",
          feedback: `Chyba. Výsledkem rovnice není exponent ze zadání. Nejdřív odlogaritmuj, pak dořeš.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_log_02", regionId: "logaritmy", type: "closed", monsterName: `FW_09B: Eliminace logaritmu`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 3, trainingTasks: ["t_log_02"],
      question: `Pro všechna \\(x,y \\in (0;\\, + \\infty)\\) platí:`,
      formula: `$$\\text{log}y = 3\\text{log}x - 1$$`,
      instruction: `Vyjádřete proměnnou \\(y\\) tak, aby zápis neobsahoval logaritmy.`,
      choices: [
        {
          label: `\\(y = x^{3} - 10\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Číslo 1 nelze odečíst jako konstantu — v log zápisu \\(1 = \\log 10\\), takže odečítáme \\(\\log 10\\), ne číslo 10.`
        },
        {
          label: `\\(y = 10\\, x^{3}\\)`,
          value: "B",
          feedback: `Chyba znaménka. Výsledek by byl správný pro \\(\\log y = 3\\log x + 1\\), ale rovnice odečítá — výsledkem je dělení, ne násobení.`
        },
        {
          label: `\\(y = \\frac{x^{3}}{10}\\)`,
          value: "C",
          feedback: `Protokol ověřen. \\(\\log y = \\log x^3 - \\log 10 = \\log\\!\\left(\\dfrac{x^3}{10}\\right)\\).`
        },
        {
          label: `\\(y = \\frac{x^{3}}{100}\\)`,
          value: "D",
          feedback: `Chyba konstanty. Kolik je \\(\\log 10\\)? Tím se řídí, čím se dělí.`
        },
      ],
      hints: [
        `Jaké pravidlo umožní přepsat násobek logaritmu jako logaritmus mocniny?`,
        `Připomeňte si: \\(\\log 10 = 1\\). Jak tedy přepíšete konstantu 1 jako logaritmus?`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_log_02", regionId: "logaritmy", type: "closed", monsterName: `SIM_09B: Logaritmus mocniny`,
      isTraining: true, firewallId: "q_log_02", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Zopakujme klíčovou vlastnost. Pro \\(a \\in (0;\\, + \\infty),\\mspace{6mu} a \\neq 1\\):`,
      formula: `$$\\text{log}_{a}(a^{5}) - \\text{log}_{a}(a^{2}) = \\,?$$`,
      instruction: `Vypočítejte hodnotu výrazu.`,
      steps: [
        {
          trigger: `> Krok 1: Logaritmus mocniny`,
          content: `Platí: \\(\\log_a(a^n) = n\\). Tedy \\(\\log_a(a^5) = 5\\) a \\(\\log_a(a^2) = 2\\). Teď odečti.`
        },
        {
          trigger: `> Krok 2: Dokončení`,
          content: `Odečti výsledky obou členů. Závisí výsledek na hodnotě základu \\(a\\)?`
        },
      ],
      choices: [
        {
          label: `\\(a^{3}\\)`,
          value: "A",
          feedback: `Chyba. Výsledek logaritmu \\(\\log_a b\\) je číslo (exponent), ne mocnina základu.`
        },
        {
          label: `\\(7\\)`,
          value: "B",
          feedback: `Chyba znaménka. Mezi logaritmy je mínus, ne plus. Přepočítej.`
        },
        {
          label: `\\(2\\)`,
          value: "C",
          feedback: `Chyba. Nezapomeň na první člen — \\(\\log_a(a^5)\\) není nula.`
        },
        {
          label: `\\(3\\)`,
          value: "D",
          feedback: `Přístup povolen. Vlastnost logaritmu mocniny: \\(5 - 2 = 3\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_log_03", regionId: "logaritmy", type: "closed", monsterName: `FW_09C: Definiční obor — trojčlen`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 4, trainingTasks: ["t_log_03"],
      question: `Je dána logaritmická funkce:`,
      formula: `$$f:\\, y = \\log_5(-x^2 - 2x + 8)$$`,
      instruction: `Určete definiční obor funkce \\(f\\).`,
      choices: [
        {
          label: `\\((-4;\\, 2)\\)`,
          value: "A",
          feedback: `Přístup povolen. Podmínka \\(-x^2-2x+8>0\\): rozložíme na \\(-(x+4)(x-2)>0\\), tedy \\((x+4)(x-2)<0\\). Kořeny \\(x=-4\\) a \\(x=2\\), parabola otvírá dolů — trojčlen je kladný právě na \\((-4;\\,2)\\).`
        },
        {
          label: `\\((-\\infty;\\,-4)\\cup(2;\\,+\\infty)\\)`,
          value: "B",
          feedback: `Chyba. Zapomněl(a) sis na záporný vedoucí koeficient \\(-x^2\\). Parabola otvírá dolů, takže trojčlen je kladný uvnitř kořenů, ne vně.`
        },
        {
          label: `\\(\\langle-4;\\, 2\\rangle\\)`,
          value: "C",
          feedback: `Chyba. Uzavřený interval zahrnuje \\(x=-4\\) a \\(x=2\\), kde je trojčlen nula — \\(\\log_5 0\\) není definován.`
        },
        {
          label: `\\((-2;\\, 4)\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Kořeny trojčlenu \\(-x^2-2x+8=0\\) jsou \\(x=-4\\) a \\(x=2\\), ne \\(-2\\) a \\(4\\). Zkontroluj výpočet diskriminantu.`
        },
      ],
      hints: [
        `Argument logaritmu musí být kladný. Zapište podmínku \\(-x^2-2x+8>0\\) a najděte kořeny trojčlenu (např. přes diskriminant nebo rozklad).`,
        `Koeficient u \\(x^2\\) je záporný — parabola otvírá dolů. Kde je tedy trojčlen kladný — uvnitř kořenů, nebo vně?`,
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_log_03", regionId: "logaritmy", type: "closed", monsterName: `SIM_09C: Definiční podmínka`,
      isTraining: true, firewallId: "q_log_03", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Než určíš definiční obor složitější funkce, procvičme základní případ:`,
      formula: `$$f:\\, y = \\text{log}_{5}(x + 2)$$`,
      instruction: `Vyberte správný definiční obor funkce \\(f\\).`,
      steps: [
        {
          trigger: `> Krok 1: Proč má logaritmus podmínku?`,
          content: `Logaritmus je definovaný <b>pouze pro kladné argumenty</b>. Výraz \\(x + 2\\) musí být ostře větší než nula.`
        },
        {
          trigger: `> Krok 2: Vyřeš nerovnici`,
          content: `\\(x + 2 > 0\\). Jak tuto nerovnici vyřešíš? Jaký interval to vytváří?`
        },
      ],
      choices: [
        {
          label: `\\(( - 2;\\, + \\infty)\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(x + 2 > 0 \\Rightarrow x > -2\\). Teď zkus variantu s \\((2-x)\\) v argumentu.`
        },
        {
          label: `\\(\\langle - 2;\\, + \\infty)\\)`,
          value: "B",
          feedback: `Chyba závorky. Pro \\(x = -2\\) je argument nula — logaritmus z nuly neexistuje.`
        },
        {
          label: `\\(( - \\infty;\\, - 2)\\)`,
          value: "C",
          feedback: `Chyba směru. Nerovnost \\(x + 2 > 0\\) ukazuje opačným směrem, než jsi zvolil(a).`
        },
        {
          label: `\\(( - \\infty;\\, + \\infty)\\)`,
          value: "D",
          feedback: `Kritická chyba. Logaritmus není definovaný pro všechna reálná čísla — argument musí být kladný.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_log_04", regionId: "logaritmy", type: "closed", monsterName: `FW_09D: Základ z grafu`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 2, trainingTasks: ["t_log_04"],
      question: `V kartézské soustavě souřadnic Oxy je sestrojen graf logaritmické funkce h: y = log_a(x) s definičním oborem (0; +∞). Graf prochází vyznačeným bodem A.`,
      diagram: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="90" y1="20" x2="90" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="120" y1="20" x2="120" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="150" y1="20" x2="150" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="180" y1="20" x2="180" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="210" y1="20" x2="210" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="240" y1="20" x2="240" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="270" y1="20" x2="270" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="300" y1="20" x2="300" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="155" x2="310" y2="155" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="115" x2="310" y2="115" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="75" x2="310" y2="75" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="55" y1="195" x2="312" y2="195" stroke="#e2e8f0" stroke-width="2"/> <polygon points="312,191 319,195 312,199" fill="#e2e8f0"/> <text x="316" y="199" font-size="12" fill="#e2e8f0">x</text> <line x1="60" y1="235" x2="60" y2="8" stroke="#e2e8f0" stroke-width="2"/> <polygon points="56,12 60,5 64,12" fill="#e2e8f0"/> <text x="52" y="8" font-size="12" fill="#e2e8f0">y</text> <text x="90" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">1</text> <text x="120" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">2</text> <text x="150" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">3</text> <text x="180" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">4</text> <text x="210" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">5</text> <text x="240" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">6</text> <text x="270" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">7</text> <text x="300" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">8</text> <text x="54" y="159" font-size="11" text-anchor="end" fill="#e2e8f0">1</text> <text x="54" y="119" font-size="11" text-anchor="end" fill="#e2e8f0">2</text> <text x="54" y="79" font-size="11" text-anchor="end" fill="#e2e8f0">3</text> <text x="54" y="199" font-size="11" text-anchor="end" fill="#e2e8f0">0</text> <line x1="180" y1="115" x2="180" y2="195" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="60" y1="115" x2="180" y2="115" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/> <polyline points="86.6,201.9 87.9,199.1 89.2,196.5 90.6,193.9 91.9,191.5 93.2,189.2 94.5,186.9 95.8,184.8 97.1,182.7 98.4,180.7 99.7,178.8 101.1,176.9 102.4,175.1 103.7,173.3 105.0,171.6 106.3,170.0 107.6,168.4 108.9,166.8 110.2,165.3 111.5,163.8 112.9,162.3 114.2,160.9 115.5,159.5 116.8,158.2 118.1,156.9 119.4,155.6 120.7,154.3 122.0,153.1 123.3,151.9 124.7,150.7 126.0,149.5 127.3,148.4 128.6,147.3 129.9,146.2 131.2,145.1 132.5,144.1 133.8,143.0 135.2,142.0 136.5,141.0 137.8,140.0 139.1,139.1 140.4,138.1 141.7,137.2 143.0,136.3 144.3,135.4 145.6,134.5 147.0,133.6 148.3,132.7 149.6,131.9 150.9,131.0 152.2,130.2 153.5,129.4 154.8,128.6 156.1,127.8 157.4,127.0 158.8,126.2 160.1,125.5 161.4,124.7 162.7,124.0 164.0,123.3 165.3,122.5 166.6,121.8 167.9,121.1 169.3,120.4 170.6,119.7 171.9,119.0 173.2,118.4 174.5,117.7 175.8,117.1 177.1,116.4 178.4,115.8 179.7,115.1 181.1,114.5 182.4,113.9 183.7,113.3 185.0,112.6 186.3,112.0 187.6,111.5 188.9,110.9 190.2,110.3 191.5,109.7 192.9,109.1 194.2,108.6 195.5,108.0 196.8,107.4 198.1,106.9 199.4,106.3 200.7,105.8 202.0,105.3 203.4,104.7 204.7,104.2 206.0,103.7 207.3,103.2 208.6,102.7 209.9,102.2 211.2,101.7 212.5,101.2 213.8,100.7 215.2,100.2 216.5,99.7 217.8,99.2 219.1,98.7 220.4,98.3 221.7,97.8 223.0,97.3 224.3,96.9 225.6,96.4 227.0,95.9 228.3,95.5 229.6,95.0 230.9,94.6 232.2,94.2 233.5,93.7 234.8,93.3 236.1,92.9 237.5,92.4 238.8,92.0 240.1,91.6 241.4,91.2 242.7,90.7 244.0,90.3 245.3,89.9 246.6,89.5 247.9,89.1 249.3,88.7 250.6,88.3 251.9,87.9 253.2,87.5 254.5,87.1 255.8,86.7 257.1,86.4 258.4,86.0 259.7,85.6 261.1,85.2 262.4,84.8 263.7,84.5 265.0,84.1 266.3,83.7 267.6,83.4 268.9,83.0 270.2,82.6 271.6,82.3 272.9,81.9 274.2,81.6 275.5,81.2 276.8,80.9 278.1,80.5 279.4,80.2 280.7,79.8 282.0,79.5 283.4,79.1 284.7,78.8 286.0,78.5 287.3,78.1 288.6,77.8 289.9,77.5 291.2,77.1 292.5,76.8 293.8,76.5 295.2,76.2 296.5,75.9 297.8,75.5 299.1,75.2 300.4,74.9 301.7,74.6 303.0,74.3 304.3,74.0 305.7,73.7 307.0,73.3 308.3,73.0 309.6,72.7" fill="none" stroke="#0077bb" stroke-width="2.5" stroke-linejoin="round"/> <text x="276" y="69" font-size="12" fill="#0077bb" font-style="italic">h</text> <circle cx="180" cy="115" r="5" fill="#cc4400" stroke="#e2e8f0" stroke-width="1.5"/> <text x="190" y="119" font-size="11" fill="#cc4400" font-weight="bold">A[4; 2]</text> </svg>`,
      instruction: `Určete základ a logaritmické funkce h.`,
      choices: [
        {
          label: `\\(a = 2\\)`,
          value: "A",
          feedback: `Přístup povolen. Z bodu A[4; 2]: \\(a^2 = 4 \\Rightarrow a = 2\\).`
        },
        {
          label: `\\(a = \\sqrt{2}\\)`,
          value: "B",
          feedback: `Chyba. Zkontroluj: jakou \\(y\\)-ovou souřadnici má bod A? Základ musí splňovat podmínku z tohoto bodu.`
        },
        {
          label: `\\(a = 4\\)`,
          value: "C",
          feedback: `Chyba. Dosaď \\(a = 4\\) do podmínky z bodu A — souhlasí \\(y\\)-ová souřadnice?`
        },
        {
          label: `\\(a = 8\\)`,
          value: "D",
          feedback: `Kritická chyba. Dosaď \\(a = 8\\) — je výsledek konzistentní s bodem A na grafu?`
        },
      ],
      hints: [
        `Z grafu odečtěte souřadnice bodu A: \\([x_0;\\, y_0]\\). Tyto hodnoty splňují rovnici \\(y_0 = \\log_a x_0\\).`,
        `Z definice logaritmu: \\(a^{y_0} = x_0\\). Dosaďte odečtené souřadnice a vypočítejte základ \\(a\\).`,
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_log_04", regionId: "logaritmy", type: "closed", monsterName: `SIM_09D: Základ z bodu`,
      isTraining: true, firewallId: "q_log_04", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Logaritmická funkce h prochází bodem [8; 3]. Jaký je základ a?`,
      formula: `$$h:\\, y = \\text{log}_{a}x,\\quad h(8) = 3$$`,
      instruction: `Vyberte správnou hodnotu základu a.`,
      steps: [
        {
          trigger: `> Krok 1: Z bodu na rovnici`,
          content: `Bod [8; 3] leží na grafu — dosadíme: \\(\\log_a 8 = 3\\), tedy \\(a^3 = 8\\). Jaký je základ \\(a\\)?`
        },
        {
          trigger: `> Krok 2: Určení základu`,
          content: `\\(a^3 = 8\\). Jaké je třetí odmocniny z 8? Pamatuj: základ musí být kladný a různý od 1.`
        },
      ],
      choices: [
        {
          label: `\\(a = 3\\)`,
          value: "A",
          feedback: `Chyba. Dosaď \\(a = 3\\): je \\(3^3 = 8\\)? Spočítej správně.`
        },
        {
          label: `\\(a = 2\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\sqrt[3]{8} = 2\\), tedy \\(a = 2\\).`
        },
        {
          label: `\\(a = 8\\)`,
          value: "C",
          feedback: `Chyba. \\(\\log_8(8) = 1\\), nikoliv 3. Správně: \\(a^3 = 8\\).`
        },
        {
          label: `\\(a = \\sqrt[3]{3}\\)`,
          value: "D",
          feedback: `Chyba. \\((\\sqrt[3]{3})^3 = 3 \\neq 8\\). Potřebujeme \\(a^3 = 8\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_log_05", regionId: "logaritmy", type: "closed", monsterName: `FW_09E: Odvozená rovnost — klesající`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 2, trainingTasks: ["t_log_05"],
      question: `V kartézské soustavě souřadnic Oxy je sestrojen graf funkce g: y = log_a(x) s definičním oborem (0; +∞). Z grafu je patrné, že funkce prochází vyznačeným bodem B.`,
      diagram: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="90" y1="25" x2="90" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="120" y1="25" x2="120" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="150" y1="25" x2="150" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="180" y1="25" x2="180" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="210" y1="25" x2="210" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="240" y1="25" x2="240" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="270" y1="25" x2="270" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="300" y1="25" x2="300" y2="222" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="65" y1="210" x2="310" y2="210" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="65" y1="170" x2="310" y2="170" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="65" y1="130" x2="310" y2="130" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="65" y1="50" x2="310" y2="50" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="55" y1="90" x2="313" y2="90" stroke="#e2e8f0" stroke-width="2"/> <polygon points="313,86 320,90 313,94" fill="#e2e8f0"/> <text x="317" y="94" font-size="12" fill="#e2e8f0">x</text> <line x1="60" y1="225" x2="60" y2="10" stroke="#e2e8f0" stroke-width="2"/> <polygon points="56,14 60,7 64,14" fill="#e2e8f0"/> <text x="52" y="10" font-size="12" fill="#e2e8f0">y</text> <text x="90" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">1</text> <text x="120" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">2</text> <text x="150" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">3</text> <text x="180" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">4</text> <text x="210" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">5</text> <text x="240" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">6</text> <text x="270" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">7</text> <text x="300" y="106" font-size="11" text-anchor="middle" fill="#e2e8f0">8</text> <text x="53" y="54" font-size="11" text-anchor="end" fill="#e2e8f0">1</text> <text x="53" y="134" font-size="11" text-anchor="end" fill="#e2e8f0">&#x2212;1</text> <text x="53" y="174" font-size="11" text-anchor="end" fill="#e2e8f0">&#x2212;2</text> <text x="53" y="214" font-size="11" text-anchor="end" fill="#e2e8f0">&#x2212;3</text> <text x="53" y="94" font-size="11" text-anchor="end" fill="#e2e8f0">0</text> <line x1="180" y1="90" x2="180" y2="170" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/> <line x1="60" y1="170" x2="180" y2="170" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/> <polyline points="70.2,27.7 71.1,32.6 72.0,37.1 72.9,41.3 73.8,45.2 74.7,48.8 75.6,52.3 78.6,62.4 81.6,71.0 84.6,78.5 87.6,85.2 90.6,91.1 93.6,96.5 96.6,101.5 99.6,106.0 102.6,110.2 105.6,114.2 108.6,117.8 111.6,121.3 114.6,124.6 117.6,127.6 120.6,130.6 126.6,136.0 132.6,141.0 138.6,145.6 144.6,149.8 150.6,153.8 156.6,157.5 162.6,161.0 168.6,164.2 174.6,167.3 180.6,170.3 186.6,173.1 192.6,175.8 198.6,178.3 204.6,180.8 210.6,183.1 216.6,185.4 222.6,187.5 228.6,189.6 234.6,191.6 240.6,193.6 246.6,195.5 252.6,197.3 258.6,199.1 264.6,200.8 270.6,202.5 276.6,204.1 282.6,205.7 288.6,207.2 294.6,208.7 300.6,210.1" fill="none" stroke="#0077bb" stroke-width="2.5" stroke-linejoin="round"/> <text x="296" y="222" font-size="12" fill="#0077bb" font-style="italic">g</text> <circle cx="180" cy="170" r="5" fill="#cc4400" stroke="#e2e8f0" stroke-width="1.5"/> <text x="190" y="164" font-size="11" fill="#cc4400" font-weight="bold">B[4; &#x2212;2]</text> </svg>`,
      instruction: `Která z následujících rovností platí pro funkci g?`,
      choices: [
        {
          label: `\\(\\text{log}_{a}16 = 4\\)`,
          value: "A",
          feedback: `Chyba. Z bodu B víme \\(\\log_a 4 = -2\\). Platí \\(\\log_a 16 = \\log_a 4^2 = 2 \\cdot (-2) = -4\\). Záporné znaménko nelze ignorovat — funkce je klesající.`
        },
        {
          label: `\\(\\text{log}_{a}16 = -2\\)`,
          value: "B",
          feedback: `Chyba. Pravidlo logaritmu mocniny: \\(\\log_a 16 = \\log_a 4^2 = 2 \\cdot \\log_a 4 = 2 \\cdot (-2) = -4\\). Nestačí jen přečíst hodnotu z bodu B.`
        },
        {
          label: `\\(\\text{log}_{a}16 = -4\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(16 = 4^2\\), tedy \\(\\log_a 16 = 2 \\cdot \\log_a 4 = 2 \\cdot (-2) = -4\\). Správně jsi zachoval(a) záporné znaménko.`
        },
        {
          label: `\\(\\text{log}_{a}\\!\\sqrt{4} = -4\\)`,
          value: "D",
          feedback: `Chyba. \\(\\sqrt{4} = 4^{1/2}\\), takže \\(\\log_a \\sqrt{4} = \\tfrac{1}{2} \\cdot (-2) = -1\\), nikoliv \\(-4\\). Odmocnina exponent dělí, nemásobí.`
        },
      ],
      hints: [
        `Z grafu odečtěte souřadnice bodu B — dostanete dvojici \\([x_0;\\, y_0]\\), kde \\(\\log_a x_0 = y_0\\). Pozor: funkce je klesající, takže \\(y_0\\) je záporné.`,
        `Vyjádřete argument každé možnosti jako mocninu \\(x_0^n\\) a použijte pravidlo \\(\\log_a x_0^n = n \\cdot \\log_a x_0\\). Zápornou hodnotu \\(\\log_a x_0\\) nezapomeňte dosadit se znaménkem.`,
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_log_05", regionId: "logaritmy", type: "closed", monsterName: `SIM_09E: Vlastnost logaritmu mocniny`,
      isTraining: true, firewallId: "q_log_05", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Víme, že \\(\\text{log}_{a}5 = -3\\). Vypočítej \\(\\text{log}_{a}25\\).`,
      formula: `$$\\text{log}_{a}5 = -3\\quad \\Rightarrow \\quad\\text{log}_{a}25 = \\,?$$`,
      instruction: `Vyberte správnou hodnotu.`,
      steps: [
        {
          trigger: `> Krok 1: Rozložit 25 na mocninu`,
          content: `\\(25 = 5^2\\), tedy \\(\\log_a 25 = \\log_a 5^2\\). Jak upravíš mocninu v argumentu?`
        },
        {
          trigger: `> Krok 2: Použít logaritmus mocniny`,
          content: `Pravidlo: \\(\\log_a b^n = n \\cdot \\log_a b\\). Víš, že \\(\\log_a 5 = -3\\). Dosaď a dopočítej.`
        },
      ],
      choices: [
        {
          label: `\\(-6\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(\\log_a 5^2 = 2 \\cdot (-3) = -6\\). Zkus nyní plný firewall.`
        },
        {
          label: `\\(6\\)`,
          value: "B",
          feedback: `Chyba znaménka. Funkce je klesající — neztrať záporné znaménko při násobení.`
        },
        {
          label: `\\(-3\\)`,
          value: "C",
          feedback: `Chyba. To je \\(\\log_a 5\\), ne \\(\\log_a 25\\). Ještě jsi nepoužil(a) pravidlo mocniny.`
        },
        {
          label: `\\(-9\\)`,
          value: "D",
          feedback: `Chyba. \\(25 = 5^2\\), takže exponent je 2, ne 3. Přepočítej s tím.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_log_06", regionId: "logaritmy", type: "closed", monsterName: `FW_09F: Porovnání základů`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 2, trainingTasks: ["t_log_06"],
      question: `V kartézské soustavě souřadnic Oxy jsou sestrojeny grafy čtyř logaritmických funkcí f₁–f₄ tvaru y = log_a(x) se vzájemně různými základy.`,
      diagram: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="95" y1="20" x2="95" y2="185" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="130" y1="20" x2="130" y2="185" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="165" y1="20" x2="165" y2="185" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="200" y1="20" x2="200" y2="185" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="235" y1="20" x2="235" y2="185" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="200" x2="310" y2="200" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="130" x2="310" y2="130" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="95" x2="310" y2="95" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="60" x2="310" y2="60" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="55" y1="165" x2="312" y2="165" stroke="#e2e8f0" stroke-width="2"/> <polygon points="312,161 319,165 312,169" fill="#e2e8f0"/> <text x="316" y="169" font-size="12" fill="#e2e8f0">x</text> <line x1="60" y1="225" x2="60" y2="8" stroke="#e2e8f0" stroke-width="2"/> <polygon points="56,12 60,5 64,12" fill="#e2e8f0"/> <text x="52" y="8" font-size="12" fill="#e2e8f0">y</text> <text x="95" y="181" font-size="11" text-anchor="middle" fill="#e2e8f0">1</text> <text x="130" y="181" font-size="11" text-anchor="middle" fill="#e2e8f0">2</text> <text x="165" y="181" font-size="11" text-anchor="middle" fill="#e2e8f0">3</text> <text x="200" y="181" font-size="11" text-anchor="middle" fill="#e2e8f0">4</text> <text x="235" y="181" font-size="11" text-anchor="middle" fill="#e2e8f0">5</text> <text x="54" y="204" font-size="11" text-anchor="end" fill="#e2e8f0">-1</text> <text x="54" y="134" font-size="11" text-anchor="end" fill="#e2e8f0">1</text> <text x="54" y="99" font-size="11" text-anchor="end" fill="#e2e8f0">2</text> <text x="54" y="64" font-size="11" text-anchor="end" fill="#e2e8f0">3</text> <text x="54" y="169" font-size="11" text-anchor="end" fill="#e2e8f0">0</text> <polyline points="70.5,119.0 71.1,121.3 71.8,123.4 72.4,125.5 73.1,127.4 73.7,129.2 74.4,131.0 75.0,132.7 75.7,134.3 76.3,135.8 76.9,137.3 77.6,138.7 78.2,140.1 78.9,141.4 79.5,142.7 80.2,143.9 80.8,145.1 81.4,146.3 82.1,147.4 82.7,148.5 83.4,149.6 84.0,150.6 84.7,151.6 85.3,152.6 86.0,153.6 86.6,154.5 87.2,155.4 87.9,156.3 88.5,157.2 89.2,158.0 89.8,158.9 90.5,159.7 91.1,160.5 91.7,161.3 92.4,162.0 93.0,162.8 93.7,163.5 94.3,164.3 95.0,165.0 95.6,165.7 96.3,166.3 96.9,167.0 97.5,167.7 98.2,168.3 98.8,169.0 99.5,169.6 100.1,170.2 100.8,170.8 101.4,171.4 102.0,172.0 102.7,172.6 103.3,173.2 104.0,173.7 104.6,174.3 105.3,174.8 105.9,175.4 106.6,175.9 107.2,176.4 107.8,176.9 108.5,177.4 109.1,178.0 109.8,178.4 110.4,178.9 111.1,179.4 111.7,179.9 112.3,180.4 113.0,180.8 113.6,181.3 114.3,181.8 114.9,182.2 115.6,182.7 116.2,183.1 116.9,183.5 117.5,184.0 118.1,184.4 118.8,184.8 119.4,185.2 120.1,185.6 120.7,186.0 121.4,186.4 122.0,186.8 122.6,187.2 123.3,187.6 123.9,188.0 124.6,188.4 125.2,188.8 125.9,189.2 126.5,189.5 127.2,189.9 127.8,190.3 128.4,190.6 129.1,191.0 129.7,191.3 130.4,191.7 131.0,192.0 131.7,192.4 132.3,192.7 132.9,193.1 133.6,193.4 134.2,193.7 134.9,194.1 135.5,194.4 136.2,194.7 136.8,195.0 137.5,195.3 138.1,195.7 138.7,196.0 139.4,196.3 140.0,196.6 140.7,196.9 141.3,197.2 142.0,197.5 142.6,197.8 143.3,198.1 143.9,198.4 144.5,198.7 145.2,199.0 145.8,199.3 146.5,199.5 147.1,199.8 147.8,200.1 148.4,200.4 149.0,200.7 149.7,200.9 150.3,201.2 151.0,201.5 151.6,201.8 152.3,202.0 152.9,202.3 153.6,202.6 154.2,202.8 154.8,203.1 155.5,203.3 156.1,203.6 156.8,203.8 157.4,204.1 158.1,204.4 158.7,204.6 159.3,204.8" fill="none" stroke="#cc4400" stroke-width="2.2" stroke-linejoin="round"/> <text x="76" y="129" font-size="11" fill="#cc4400" font-weight="bold">f₁</text> <polyline points="70.5,191.2 71.1,189.9 71.8,188.7 72.4,187.5 73.1,186.4 73.7,185.4 74.4,184.4 75.0,183.4 75.7,182.5 76.3,181.6 76.9,180.8 77.6,180.0 78.2,179.2 78.9,178.4 79.5,177.7 80.2,177.0 80.8,176.3 81.4,175.7 82.1,175.0 82.7,174.4 83.4,173.8 84.0,173.2 84.7,172.6 85.3,172.1 86.0,171.5 86.6,171.0 87.2,170.5 87.9,169.9 88.5,169.4 89.2,169.0 89.8,168.5 90.5,168.0 91.1,167.6 91.7,167.1 92.4,166.7 93.0,166.3 93.7,165.8 94.3,165.4 95.0,165.0 95.6,164.6 96.3,164.2 96.9,163.9 97.5,163.5 98.2,163.1 98.8,162.7 99.5,162.4 100.1,162.0 100.8,161.7 101.4,161.3 102.0,161.0 102.7,160.7 103.3,160.4 104.0,160.0 104.6,159.7 105.3,159.4 105.9,159.1 106.6,158.8 107.2,158.5 107.8,158.2 108.5,157.9 109.1,157.6 109.8,157.3 110.4,157.1 111.1,156.8 111.7,156.5 112.3,156.2 113.0,156.0 113.6,155.7 114.3,155.5 114.9,155.2 115.6,154.9 116.2,154.7 116.9,154.4 117.5,154.2 118.1,154.0 118.8,153.7 119.4,153.5 120.1,153.3 120.7,153.0 121.4,152.8 122.0,152.6 122.6,152.3 123.3,152.1 123.9,151.9 124.6,151.7 125.2,151.5 125.9,151.2 126.5,151.0 127.2,150.8 127.8,150.6 128.4,150.4 129.1,150.2 129.7,150.0 130.4,149.8 131.0,149.6 131.7,149.4 132.3,149.2 132.9,149.0 133.6,148.8 134.2,148.6 134.9,148.5 135.5,148.3 136.2,148.1 136.8,147.9 137.5,147.7 138.1,147.5 138.7,147.4 139.4,147.2 140.0,147.0 140.7,146.8 141.3,146.7 142.0,146.5 142.6,146.3 143.3,146.2 143.9,146.0 144.5,145.8 145.2,145.7 145.8,145.5 146.5,145.3 147.1,145.2 147.8,145.0 148.4,144.9 149.0,144.7 149.7,144.5 150.3,144.4 151.0,144.2 151.6,144.1 152.3,143.9 152.9,143.8 153.6,143.6 154.2,143.5 154.8,143.3 155.5,143.2 156.1,143.0 156.8,142.9 157.4,142.7 158.1,142.6 158.7,142.5 159.3,142.3 160.0,142.2 160.6,142.0 161.3,141.9 161.9,141.8 162.6,141.6 163.2,141.5 163.9,141.3 164.5,141.2 165.1,141.1 165.8,140.9 166.4,140.8 167.1,140.7 167.7,140.6 168.4,140.4 169.0,140.3 169.6,140.2 170.3,140.0 170.9,139.9 171.6,139.8 172.2,139.7 172.9,139.5 173.5,139.4 174.2,139.3 174.8,139.2 175.4,139.0 176.1,138.9 176.7,138.8 177.4,138.7 178.0,138.6 178.7,138.4 179.3,138.3 179.9,138.2 180.6,138.1 181.2,138.0 181.9,137.9 182.5,137.8 183.2,137.6 183.8,137.5 184.5,137.4 185.1,137.3 185.7,137.2 186.4,137.1 187.0,137.0 187.7,136.9 188.3,136.7 189.0,136.6 189.6,136.5 190.2,136.4 190.9,136.3 191.5,136.2 192.2,136.1 192.8,136.0 193.5,135.9 194.1,135.8 194.8,135.7 195.4,135.6 196.0,135.5 196.7,135.4 197.3,135.3 198.0,135.2 198.6,135.1 199.3,135.0 199.9,134.9 200.6,134.8 201.2,134.7 201.8,134.6 202.5,134.5 203.1,134.4 203.8,134.3 204.4,134.2 205.1,134.1 205.7,134.0 206.3,133.9 207.0,133.8 207.6,133.7 208.3,133.6 208.9,133.5 209.6,133.4 210.2,133.3 210.9,133.2 211.5,133.1 212.1,133.0 212.8,133.0 213.4,132.9 214.1,132.8 214.7,132.7 215.4,132.6 216.0,132.5 216.6,132.4 217.3,132.3 217.9,132.2 218.6,132.1 219.2,132.1 219.9,132.0 220.5,131.9 221.2,131.8 221.8,131.7 222.4,131.6 223.1,131.5 223.7,131.4 224.4,131.4 225.0,131.3 225.7,131.2 226.3,131.1 226.9,131.0 227.6,130.9 228.2,130.9 228.9,130.8 229.5,130.7 230.2,130.6 230.8,130.5 231.5,130.4 232.1,130.4 232.7,130.3 233.4,130.2 234.0,130.1 234.7,130.0 235.3,130.0 236.0,129.9 236.6,129.8 237.2,129.7 237.9,129.6 238.5,129.6 239.2,129.5 239.8,129.4 240.5,129.3 241.1,129.3 241.8,129.2 242.4,129.1 243.0,129.0 243.7,128.9 244.3,128.9 245.0,128.8 245.6,128.7 246.3,128.6 246.9,128.6 247.5,128.5 248.2,128.4 248.8,128.3 249.5,128.3 250.1,128.2 250.8,128.1 251.4,128.1 252.1,128.0 252.7,127.9 253.3,127.8 254.0,127.8 254.6,127.7 255.3,127.6 255.9,127.5 256.6,127.5 257.2,127.4 257.8,127.3 258.5,127.3 259.1,127.2 259.8,127.1 260.4,127.0 261.1,127.0 261.7,126.9 262.4,126.8 263.0,126.8" fill="none" stroke="#e6881a" stroke-width="2.2" stroke-linejoin="round"/> <text x="239" y="122" font-size="11" fill="#e6881a" font-weight="bold">f₂</text> <polyline points="76.3,203.6 76.9,201.6 77.6,199.8 78.2,197.9 78.9,196.2 79.5,194.5 80.2,192.9 80.8,191.3 81.4,189.7 82.1,188.2 82.7,186.8 83.4,185.4 84.0,184.0 84.7,182.7 85.3,181.4 86.0,180.1 86.6,178.9 87.2,177.7 87.9,176.5 88.5,175.3 89.2,174.2 89.8,173.1 90.5,172.0 91.1,171.0 91.7,169.9 92.4,168.9 93.0,167.9 93.7,166.9 94.3,166.0 95.0,165.1 95.6,164.1 96.3,163.2 96.9,162.3 97.5,161.5 98.2,160.6 98.8,159.8 99.5,158.9 100.1,158.1 100.8,157.3 101.4,156.5 102.0,155.7 102.7,155.0 103.3,154.2 104.0,153.5 104.6,152.7 105.3,152.0 105.9,151.3 106.6,150.6 107.2,149.9 107.8,149.2 108.5,148.5 109.1,147.9 109.8,147.2 110.4,146.6 111.1,145.9 111.7,145.3 112.3,144.7 113.0,144.1 113.6,143.4 114.3,142.8 114.9,142.2 115.6,141.7 116.2,141.1 116.9,140.5 117.5,139.9 118.1,139.4 118.8,138.8 119.4,138.3 120.1,137.7 120.7,137.2 121.4,136.7 122.0,136.1 122.6,135.6 123.3,135.1 123.9,134.6 124.6,134.1 125.2,133.6 125.9,133.1 126.5,132.6 127.2,132.1 127.8,131.6 128.4,131.1 129.1,130.7 129.7,130.2 130.4,129.7 131.0,129.3 131.7,128.8 132.3,128.4 132.9,127.9 133.6,127.5 134.2,127.0 134.9,126.6 135.5,126.2 136.2,125.7 136.8,125.3 137.5,124.9 138.1,124.5 138.7,124.1 139.4,123.6 140.0,123.2 140.7,122.8 141.3,122.4 142.0,122.0 142.6,121.6 143.3,121.2 143.9,120.9 144.5,120.5 145.2,120.1 145.8,119.7 146.5,119.3 147.1,119.0 147.8,118.6 148.4,118.2 149.0,117.8 149.7,117.5 150.3,117.1 151.0,116.8 151.6,116.4 152.3,116.1 152.9,115.7 153.6,115.4 154.2,115.0 154.8,114.7 155.5,114.3 156.1,114.0 156.8,113.6 157.4,113.3 158.1,113.0 158.7,112.6 159.3,112.3 160.0,112.0 160.6,111.7 161.3,111.3 161.9,111.0 162.6,110.7 163.2,110.4 163.9,110.1 164.5,109.8 165.1,109.5 165.8,109.2 166.4,108.8 167.1,108.5 167.7,108.2 168.4,107.9 169.0,107.6 169.6,107.3 170.3,107.0 170.9,106.8 171.6,106.5 172.2,106.2 172.9,105.9 173.5,105.6 174.2,105.3 174.8,105.0 175.4,104.7 176.1,104.5 176.7,104.2 177.4,103.9 178.0,103.6 178.7,103.4 179.3,103.1 179.9,102.8 180.6,102.5 181.2,102.3 181.9,102.0 182.5,101.7 183.2,101.5 183.8,101.2 184.5,100.9 185.1,100.7 185.7,100.4 186.4,100.2 187.0,99.9 187.7,99.7 188.3,99.4 189.0,99.1 189.6,98.9 190.2,98.6 190.9,98.4 191.5,98.1 192.2,97.9 192.8,97.7 193.5,97.4 194.1,97.2 194.8,96.9 195.4,96.7 196.0,96.4 196.7,96.2 197.3,96.0 198.0,95.7 198.6,95.5 199.3,95.3 199.9,95.0 200.6,94.8 201.2,94.6 201.8,94.3 202.5,94.1 203.1,93.9 203.8,93.7 204.4,93.4 205.1,93.2 205.7,93.0 206.3,92.8 207.0,92.5 207.6,92.3 208.3,92.1 208.9,91.9 209.6,91.7 210.2,91.4 210.9,91.2 211.5,91.0 212.1,90.8 212.8,90.6 213.4,90.4 214.1,90.2 214.7,90.0 215.4,89.7 216.0,89.5 216.6,89.3 217.3,89.1 217.9,88.9 218.6,88.7 219.2,88.5 219.9,88.3 220.5,88.1 221.2,87.9 221.8,87.7 222.4,87.5 223.1,87.3 223.7,87.1 224.4,86.9 225.0,86.7 225.7,86.5 226.3,86.3 226.9,86.1 227.6,85.9 228.2,85.7 228.9,85.5 229.5,85.3 230.2,85.1 230.8,85.0 231.5,84.8 232.1,84.6 232.7,84.4 233.4,84.2 234.0,84.0 234.7,83.8 235.3,83.6 236.0,83.5 236.6,83.3 237.2,83.1 237.9,82.9 238.5,82.7 239.2,82.5 239.8,82.4 240.5,82.2 241.1,82.0 241.8,81.8 242.4,81.6 243.0,81.5 243.7,81.3 244.3,81.1 245.0,80.9 245.6,80.8 246.3,80.6 246.9,80.4 247.5,80.2 248.2,80.1 248.8,79.9 249.5,79.7 250.1,79.5 250.8,79.4 251.4,79.2 252.1,79.0 252.7,78.9 253.3,78.7 254.0,78.5 254.6,78.4 255.3,78.2 255.9,78.0 256.6,77.9 257.2,77.7 257.8,77.5 258.5,77.4 259.1,77.2 259.8,77.0 260.4,76.9 261.1,76.7 261.7,76.6 262.4,76.4 263.0,76.2" fill="none" stroke="#0077bb" stroke-width="2.2" stroke-linejoin="round"/> <text x="239" y="76" font-size="11" fill="#0077bb" font-weight="bold">f₃</text> <polyline points="84.0,204.2 84.7,201.4 85.3,198.7 86.0,196.1 86.6,193.6 87.2,191.1 87.9,188.6 88.5,186.3 89.2,184.0 89.8,181.7 90.5,179.5 91.1,177.3 91.7,175.2 92.4,173.1 93.0,171.0 93.7,169.0 94.3,167.0 95.0,165.1 95.6,163.2 96.3,161.3 96.9,159.5 97.5,157.7 98.2,155.9 98.8,154.2 99.5,152.5 100.1,150.8 100.8,149.2 101.4,147.5 102.0,145.9 102.7,144.3 103.3,142.8 104.0,141.2 104.6,139.7 105.3,138.2 105.9,136.8 106.6,135.3 107.2,133.9 107.8,132.5 108.5,131.1 109.1,129.7 109.8,128.4 110.4,127.0 111.1,125.7 111.7,124.4 112.3,123.1 113.0,121.9 113.6,120.6 114.3,119.4 114.9,118.1 115.6,116.9 116.2,115.7 116.9,114.5 117.5,113.4 118.1,112.2 118.8,111.1 119.4,109.9 120.1,108.8 120.7,107.7 121.4,106.6 122.0,105.5 122.6,104.4 123.3,103.4 123.9,102.3 124.6,101.3 125.2,100.2 125.9,99.2 126.5,98.2 127.2,97.2 127.8,96.2 128.4,95.2 129.1,94.3 129.7,93.3 130.4,92.3 131.0,91.4 131.7,90.5 132.3,89.5 132.9,88.6 133.6,87.7 134.2,86.8 134.9,85.9 135.5,85.0 136.2,84.1 136.8,83.2 137.5,82.4 138.1,81.5 138.7,80.7 139.4,79.8 140.0,79.0 140.7,78.1 141.3,77.3 142.0,76.5 142.6,75.7 143.3,74.9 143.9,74.1 144.5,73.3 145.2,72.5 145.8,71.7 146.5,70.9 147.1,70.1 147.8,69.4 148.4,68.6 149.0,67.9 149.7,67.1 150.3,66.4 151.0,65.6 151.6,64.9 152.3,64.2 152.9,63.4 153.6,62.7 154.2,62.0 154.8,61.3 155.5,60.6 156.1,59.9 156.8,59.2 157.4,58.5 158.1,57.8 158.7,57.2 159.3,56.5 160.0,55.8 160.6,55.1 161.3,54.5 161.9,53.8 162.6,53.2 163.2,52.5 163.9,51.9 164.5,51.2 165.1,50.6 165.8,49.9 166.4,49.3 167.1,48.7 167.7,48.1 168.4,47.4 169.0,46.8 169.6,46.2 170.3,45.6 170.9,45.0 171.6,44.4 172.2,43.8 172.9,43.2 173.5,42.6 174.2,42.0 174.8,41.4 175.4,40.9 176.1,40.3 176.7,39.7 177.4,39.1 178.0,38.6 178.7,38.0 179.3,37.4 179.9,36.9 180.6,36.3 181.2,35.8 181.9,35.2 182.5,34.7 183.2,34.1 183.8,33.6 184.5,33.0 185.1,32.5 185.7,32.0 186.4,31.4 187.0,30.9 187.7,30.4 188.3,29.9 189.0,29.3 189.6,28.8 190.2,28.3 190.9,27.8 191.5,27.3 192.2,26.8 192.8,26.3 193.5,25.8 194.1,25.3 194.8,24.8 195.4,24.3 196.0,23.8 196.7,23.3 197.3,22.8 198.0,22.3 198.6,21.8 199.3,21.3 199.9,20.9 200.6,20.4 201.2,19.9 201.8,19.4 202.5,19.0 203.1,18.5 203.8,18.0 204.4,17.6 205.1,17.1 205.7,16.6 206.3,16.2 207.0,15.7 207.6,15.3" fill="none" stroke="#228833" stroke-width="2.2" stroke-linejoin="round"/> </svg>`,
      instruction: `Kolik z funkcí f₁–f₄ má základ a menší než 1?`,
      choices: [
        {
          label: `\\(0\\)`,
          value: "A",
          feedback: `Chyba. Červená křivka f₁ je klesající — její základ je menší než 1. Logaritmická funkce s \\(0 < a < 1\\) je vždy klesající.`
        },
        {
          label: `\\(2\\)`,
          value: "B",
          feedback: `Chyba. Klesající jsou pouze ty s \\(0 < a < 1\\). Z grafu klesá právě jedna — ostatní jsou rostoucí.`
        },
        {
          label: `\\(1\\)`,
          value: "C",
          feedback: `Přístup povolen. Klesající je právě f₁ (červená) — základ \\(a < 1\\). Ostatní tři jsou rostoucí.`
        },
        {
          label: `\\(3\\)`,
          value: "D",
          feedback: `Chyba. Z grafu klesá pouze jedna křivka (f₁). Ostatní tři mají základ větší než 1 a jsou rostoucí.`
        },
      ],
      hints: [
        `Logaritmická funkce \\(y = \\log_a x\\) je klesající, pokud \\(0 < a < 1\\). V grafu ji poznáte tak, že se zvětšujícím se \\(x\\) hodnota funkce klesá.`,
        `Spočítejte, kolik z nakreslených grafů je klesajících (jde „dolů" zprava). Zbývající jsou rostoucí a mají základ \\(a > 1\\).`,
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_log_06", regionId: "logaritmy", type: "closed", monsterName: `SIM_09F: Rostoucí vs. klesající`,
      isTraining: true, firewallId: "q_log_06", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Jsou dány dvě logaritmické funkce tvaru \\(y = \\log_a x\\). Určete, která z nich je klesající.`,
      formula: `$$f_{1}:\\, y = \\text{log}_{0,3}x\\text{\\quad\\quad}f_{2}:\\, y = \\text{log}_{5}x$$`,
      instruction: `Vyberte správné tvrzení.`,
      steps: [
        {
          trigger: `> Krok 1: Kdy je log funkce klesající?`,
          content: `Logaritmická funkce \\(y = \\log_a x\\) je <b>klesající</b>, právě když \\(0 < a < 1\\).`
        },
        {
          trigger: `> Krok 2: Identifikace`,
          content: `\\(f_1\\) má základ \\(0{,}3 < 1\\) — je <b>klesající</b>. \\(f_2\\) má základ \\(5 > 1\\) — je rostoucí.`
        },
      ],
      choices: [
        {
          label: `\\(f_{2}\\) je klesající`,
          value: "A",
          feedback: `Chyba. Základ \\(f_2\\) je 5 > 1 — taková funkce je rostoucí, ne klesající.`
        },
        {
          label: `Obě jsou klesající`,
          value: "B",
          feedback: `Chyba. \\(f_2\\) má základ 5 > 1, je tedy rostoucí. Klesající je pouze \\(f_1\\).`
        },
        {
          label: `\\(f_{1}\\) je klesající`,
          value: "C",
          feedback: `Logika potvrzena. Základ 0,3 je menší než 1 → klesající funkce.`
        },
        {
          label: `Ani jedna není klesající`,
          value: "D",
          feedback: `Chyba. \\(f_1\\) má základ \\(0{,}3 \\in (0;1)\\) — taková funkce je vždy klesající.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_log_07", regionId: "logaritmy", type: "closed", monsterName: `FW_09G: Průsečík s osou x`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 3, trainingTasks: ["t_log_07"],
      question: `Je dána funkce:`,
      formula: `$$f:\\, y = 6 - 2 \\cdot \\log_3 x$$`,
      instruction: `Určete souřadnice průsečíku \\(P\\) grafu funkce \\(f\\) se souřadnicovou osou \\(x\\).`,
      choices: [
        {
          label: `\\(P[729;\\, 0]\\)`,
          value: "A",
          feedback: `Chyba. Hodnota \\(729=3^6\\) vznikne, pokud se zapomene dělit 2: \\(\\log_3 x=6\\) místo \\(\\log_3 x=3\\).`
        },
        {
          label: `\\(P[27;\\, 0]\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(y=0:\\; 2\\cdot\\log_3 x=6\\;\\Rightarrow\\;\\log_3 x=3\\;\\Rightarrow\\;x=3^3=27\\). Průsečík \\(P[27;\\,0]\\) ✓.`
        },
        {
          label: `\\(P\\!\\left[\\tfrac{1}{27};\\, 0\\right]\\)`,
          value: "C",
          feedback: `Chyba. Hodnota \\(\\tfrac{1}{27}=3^{-3}\\) vznikne záměnou znaménka: \\(\\log_3 x=-3\\) místo \\(+3\\).`
        },
        {
          label: `\\(P[9;\\, 0]\\)`,
          value: "D",
          feedback: `Chyba. Hodnota \\(9=3^2\\) vznikne, pokud je výsledkem \\(\\log_3 x=2\\) — špatná aritmetika při úpravě \\(6-2x=0\\) (záměna \\(\\log_3 x\\) za \\(x\\)).`
        },
      ],
      hints: [
        `Průsečík s osou \\(x\\) nastane pro \\(y = 0\\). Dosaďte do funkčního předpisu.`,
        `Připomeňte si definici: \\(\\log_a b = c \\Leftrightarrow a^c = b\\). Jak ji použijete po izolování logaritmu?`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_log_07", regionId: "logaritmy", type: "closed", monsterName: `SIM_09G: Průsečík s osou x (jednodušší)`,
      isTraining: true, firewallId: "q_log_07", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Je dána funkce \\(f:\\, y = 4 - \\log_2 x\\).`,
      instruction: `Určete průsečík \\(P\\) grafu funkce \\(f\\) se souřadnicovou osou \\(x\\).`,
      steps: [
        {
          trigger: `> Krok 1: Podmínka průsečíku`,
          content: `Průsečík s osou \\(x\\) nastane pro \\(y = 0\\). Dosadíme: \\(4 - \\log_2 x = 0\\). Izoluj logaritmus.`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `\\(\\log_2 x = 4\\). Definice logaritmu: \\(b = a^c\\). Jaké \\(x\\) vyjde?`
        },
      ],
      choices: [
        {
          label: `\\(P[2;\\, 0]\\)`,
          value: "A",
          feedback: `Chyba. Záměna směru: z definice logaritmu nedostaneš \\(x\\) jako logaritmus, ale jako mocninu základu.`
        },
        {
          label: `\\(P[16;\\, 0]\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(\\log_2 x=4\\;\\Rightarrow\\;x=2^4=16\\). Průsečík \\(P[16;\\,0]\\) ✓.`
        },
        {
          label: `\\(P[4;\\, 0]\\)`,
          value: "C",
          feedback: `Chyba. Záměna — nastavení \\(x=4\\) (jako by \\(y=4\\) místo \\(y=0\\)) nebo \\(\\log_2 x=1\\).`
        },
        {
          label: `\\(P\\!\\left[\\tfrac{1}{16};\\, 0\\right]\\)`,
          value: "D",
          feedback: `Chyba. Záporný exponent — zkontroluj, s jakým znaménkem ti vyšel logaritmus z rovnice.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_log_08", regionId: "logaritmy", type: "closed", monsterName: `FW_09H: Zjednodušení výrazu`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 4, trainingTasks: ["t_log_08"],
      question: `Pro \\(a \\in (0;\\, +\\infty) \\setminus \\{1\\}\\) vypočtěte:`,
      formula: `$$\\log_a(4a^3) - \\log_a(4\\sqrt{a})$$`,
      instruction: `Vyberte správný výsledek.`,
      choices: [
        {
          label: `\\(3\\)`,
          value: "A",
          feedback: `Nekompletní. Zapomněl(a) jsi odečíst příspěvek od \\(\\sqrt{a}\\) ve jmenovateli.`
        },
        {
          label: `\\(\\dfrac{5}{2}\\)`,
          value: "B",
          feedback: `Přístup povolen. Čtverky se zkrátily: \\(\\log_a\\!\\tfrac{4a^3}{4\\sqrt{a}} = \\log_a a^{5/2} = \\tfrac{5}{2}\\).`
        },
        {
          label: `\\(\\dfrac{7}{2}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Při odčítání logaritmů se exponenty odečítají, ne sčítají. Přepočítej.`
        },
        {
          label: `\\(2\\)`,
          value: "D",
          feedback: `Přetečení. \\(\\sqrt{a} = a^{1/2}\\), ne \\(a^1\\). Oprav exponent a přepočítej.`
        },
      ],
      hints: [
        `Použijte pravidlo \\(\\log_a M - \\log_a N = \\log_a\\tfrac{M}{N}\\). Co zbude po zkrácení ve zlomku?`,
        `Přepište \\(\\sqrt{a} = a^{1/2}\\) a pracujte s exponenty základu \\(a\\).`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_log_08", regionId: "logaritmy", type: "closed", monsterName: `SIM_09H: Mocniny v logaritmu`,
      isTraining: true, firewallId: "q_log_08", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Pro \\(a \\in (0;\\, +\\infty) \\setminus \\{1\\}\\) zjednodušte:`,
      formula: `$$\\log_a\\!\\left(a^2 \\cdot \\sqrt{a}\\right)$$`,
      instruction: `Vyberte správný výsledek.`,
      steps: [
        {
          trigger: `> Krok 1: √a jako mocnina`,
          content: `\\(\\sqrt{a} = a^{1/2}\\). Jak teď zapíšeš celý výraz \\(a^2 \\cdot \\sqrt{a}\\) pomocí jedné mocniny?`
        },
        {
          trigger: `> Krok 2: Sečti exponenty`,
          content: `\\(a^2 \\cdot a^{1/2} = a^{?}\\). Jaký exponent vyjde? Pak použij \\(\\log_a a^n = n\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\dfrac{5}{2}\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(a^2 \\cdot a^{1/2} = a^{5/2}\\), tedy \\(\\log_a a^{5/2} = \\tfrac{5}{2}\\).`
        },
        {
          label: `\\(2\\)`,
          value: "B",
          feedback: `Chyba. Zapomněl(a) jsi na \\(\\sqrt{a}\\) — přidej její příspěvek k exponentu.`
        },
        {
          label: `\\(3\\)`,
          value: "C",
          feedback: `Chyba. \\(\\sqrt{a} = a^{1/2}\\), ne \\(a^1\\). Oprav exponent a sečti znovu.`
        },
        {
          label: `\\(1\\)`,
          value: "D",
          feedback: `Kritická chyba. Výsledek \\(\\log_a a^n = n\\), ne 1. Spočítej správný exponent.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_log_09", regionId: "logaritmy", type: "closed", monsterName: `FW_09I: Zjednodušení výrazu s logaritmy`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 5, trainingTasks: ["t_log_09"],
      question: `Je dán výraz pro \\(a \\in (1;\\, +\\infty)\\):`,
      formula: `$$\\frac{8 \\cdot \\log_a a^{15}}{\\log_2 32^{4}}$$`,
      instruction: `Který z následujících výrazů je s daným výrazem ekvivalentní pro každé \\(a\\in(1;\\,+\\infty)\\)?`,
      choices: [
        {
          label: `\\(30\\)`,
          value: "A",
          feedback: `Chyba. Hodnota 30 vznikne, pokud jmenovatel vypočítáte jako \\(\\log_2 32=5\\), ale zapomenete použít pravidlo mocniny: správně \\(\\log_2 32^4=4\\cdot5=20\\), ne 4.`
        },
        {
          label: `\\(6\\)`,
          value: "B",
          feedback: `Přístup povolen. Čitatel: \\(8\\cdot\\log_a a^{15}=8\\cdot15=120\\). Jmenovatel: \\(\\log_2 32^4=4\\cdot\\log_2 32=4\\cdot5=20\\). Výsledek: \\(120/20=6\\).`
        },
        {
          label: `\\(0{,}8\\,a\\)`,
          value: "C",
          feedback: `Chyba. Výsledek nezávisí na \\(a\\) — \\(\\log_a a^{15}=15\\) je číselná konstanta.`
        },
        {
          label: `\\(1{,}5\\,a^{15}\\)`,
          value: "D",
          feedback: `Chyba. Výsledek nezávisí na \\(a\\). Platí \\(\\log_a a^{15}=15\\) (číslo, ne výraz s \\(a\\)).`
        },
        {
          label: `Žádný z uvedených výrazů není s daným výrazem ekvivalentní.`,
          value: "E",
          feedback: `Chyba. Výsledek je ověřitelná číselná konstanta — použij pravidla a dopočítej.`
        },
      ],
      hints: [
        `Použijte pravidlo \\(\\log_a a^n=n\\). Čitatel se okamžitě zjednoduší na číslo.`,
        `Pro jmenovatel: \\(\\log_2 32^4=4\\cdot\\log_2 32\\). Kolik je \\(\\log_2 32\\)? (Kolikátá mocnina 2 dává 32?)`,
      ],
      correctAnswer: "B", reward: { xp: 25 }
    },
    {
      id: "t_log_09", regionId: "logaritmy", type: "closed", monsterName: `SIM_09I: Zjednodušení výrazu (jednodušší)`,
      isTraining: true, firewallId: "q_log_09", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Zjednodušte výraz:`,
      formula: `$$\\frac{\\log_a a^6 \\cdot 2}{\\log_2 8}$$`,
      instruction: `Vyberte správnou hodnotu výrazu.`,
      steps: [
        {
          trigger: `> Krok 1: Čitatel`,
          content: `\\(\\log_a a^6 = 6\\). Čitatel je tedy \\(6 \\cdot 2 = 12\\). Teď spočítej jmenovatel.`
        },
        {
          trigger: `> Krok 2: Jmenovatel a výsledek`,
          content: `\\(8 = 2^3\\), takže \\(\\log_2 8 = 3\\). Jmenovatel je 3. Vyděl čitatel jmenovatelem.`
        },
      ],
      choices: [
        {
          label: `\\(4\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(12/3=4\\) ✓.`
        },
        {
          label: `\\(6\\)`,
          value: "B",
          feedback: `Chyba. Hodnota 6 je \\(\\log_a a^6\\) — zapomněli jste vynásobit 2 nebo špatně spočítali jmenovatel.`
        },
        {
          label: `\\(3\\)`,
          value: "C",
          feedback: `Chyba. Hodnota 3 je jmenovatel (\\(\\log_2 8=3\\)), ne výsledek podílu.`
        },
        {
          label: `\\(2\\)`,
          value: "D",
          feedback: `Chyba. Zkontroluj jmenovatel — kolikátá mocnina 2 dává 8?`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_log_10", regionId: "logaritmy", type: "closed", monsterName: `FW_09J: Rovnice s exponenciálou a logaritmem`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 3, trainingTasks: ["t_log_10"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$4^{3x} = \\log_2 4$$`,
      instruction: `Vyberte správné řešení rovnice.`,
      choices: [
        {
          label: `\\(x = \\dfrac{1}{6}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\log_2 4=2\\). Převod základu: \\((2^2)^{3x}=2^{6x}\\). Rovnice: \\(2^{6x}=2^1\\;\\Rightarrow\\;6x=1\\;\\Rightarrow\\;x=\\tfrac{1}{6}\\).`
        },
        {
          label: `\\(x = \\dfrac{1}{3}\\)`,
          value: "B",
          feedback: `Chyba. Hodnota \\(\\tfrac{1}{3}\\) vznikne, pokud se základy nepřevedou: \\(4^{3x}=4^1\\;\\Rightarrow\\;3x=1\\). Správně \\(4^{3x}=2^1\\), tedy \\((2^2)^{3x}=2^1\\).`
        },
        {
          label: `\\(x = 2\\)`,
          value: "C",
          feedback: `Chyba. Číslo 2 je hodnota \\(\\log_2 4\\) — záměna logaritmu za výsledek rovnice.`
        },
        {
          label: `\\(x = \\dfrac{1}{12}\\)`,
          value: "D",
          feedback: `Chyba. Tato hodnota vznikne záměnou \\(\\log_2 4\\) za \\(\\log_4 2=\\tfrac{1}{2}\\): \\(2^{6x}=2^{1/2}\\;\\Rightarrow\\;x=\\tfrac{1}{12}\\). Zkontrolujte výpočet \\(\\log_2 4\\).`
        },
      ],
      hints: [
        `Nejdříve vypočítejte \\(\\log_2 4\\) a rovnici přepište jako \\(4^{3x}=c\\).`,
        `Převeďte obě strany na stejný základ (mocninu 2) a porovnejte exponenty.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_log_10", regionId: "logaritmy", type: "closed", monsterName: `SIM_09J: Rovnice s exponenciálou (jednodušší)`,
      isTraining: true, firewallId: "q_log_10", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$4^x - \\log_4 16 = 0$$`,
      instruction: `Vyberte správné řešení rovnice.`,
      steps: [
        {
          trigger: `> Krok 1: Hodnota logaritmu`,
          content: `\\(\\log_4 16 = \\log_4 4^2 = 2\\). Rovnice se zjednoduší na \\(4^x = 2\\). Jak dál?`
        },
        {
          trigger: `> Krok 2: Převod základu`,
          content: `\\((2^2)^x = 2^{2x}\\). Rovnice: \\(2^{2x} = 2^1\\). Porovnej exponenty a vyřeš pro \\(x\\).`
        },
      ],
      choices: [
        {
          label: `\\(x = \\dfrac{1}{2}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(2x=1\\;\\Rightarrow\\;x=\\tfrac{1}{2}\\). Ověření: \\(4^{1/2}=2=\\log_4 16\\) ✓.`
        },
        {
          label: `\\(x = 2\\)`,
          value: "B",
          feedback: `Chyba. \\(x=2\\) je hodnota \\(\\log_4 16\\) — záměna logaritmu za výsledek rovnice.`
        },
        {
          label: `\\(x = 1\\)`,
          value: "C",
          feedback: `Chyba. \\(4^1=4\\neq2\\).`
        },
        {
          label: `\\(x = \\dfrac{1}{4}\\)`,
          value: "D",
          feedback: `Chyba. Tato hodnota by vznikla ze \\(4x=1\\) — chybný exponent při převodu základu.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    // ==========================================
    // FUNKCE — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_funk_02", regionId: "funkce", type: "closed", monsterName: `FW_05B: Vlastnosti hyperboly`,
      visual_color: "#4fc3f7", visual_symbol: `f(x)`, points: 3, trainingTasks: ["t_funk_02"],
      question: `Je d\u00e1na funkce \\(f\\) s defini\u010dn\u00edm oborem \\(\\mathbb{R} \\setminus \\{1\\}\\):`,
      formula: `$$f(x) = \\dfrac{3x - 6}{x - 1}$$`,
      diagram: null,
      instruction: `Kter\u00e9 z n\u00e1sleduj\u00edc\u00edch tvrzen\u00ed je nepravdiv\u00e9?`,
      choices: [
        {
          label: `Svislá asymptota funkce \\(f\\) m\u00e1 rovnici \\(x = 1\\).`,
          value: "A",
          feedback: `Chyba. Tvrzen\u00ed A je pravdiv\u00e9: jmenovatel \\(x - 1 = 0\\) pro \\(x = 1\\), to je svislá asymptota.`
        },
        {
          label: `Graf funkce \\(f\\) prot\u00edn\u00e1 osu \\(y\\) v bod\u011b \\((0;\;6)\\).`,
          value: "B",
          feedback: `Chyba. Tvrzen\u00ed B je pravdiv\u00e9: \\(f(0) = \\dfrac{3 \\cdot 0 - 6}{0 - 1} = \\dfrac{-6}{-1} = 6\\).`
        },
        {
          label: `Obor hodnot funkce \\(f\\) je \\(H_f = \\mathbb{R} \\setminus \\{3\\}\\).`,
          value: "C",
          feedback: `Chyba. Tvrzen\u00ed C je pravdiv\u00e9: vyd\u011blen\u00edm \\(f(x) = -\\tfrac{3}{x-1} + 3\\), vodorovná asymptota \\(y = 3\\) chyb\u00ed z oboru hodnot.`
        },
        {
          label: `Funkce \\(f\\) nem\u00e1 pr\u016fse\u010dn\u00edk s osou \\(x\\).`,
          value: "D",
          feedback: `P\u0159\u00edstup povolen. Tvrzen\u00ed D je nepravdiv\u00e9: \\(3x - 6 = 0 \\Rightarrow x = 2\\), pr\u016fse\u010dn\u00edk s osou \\(x\\) v bod\u011b \\((2;\;0)\\) existuje.`
        },
      ],
      correctAnswer: "D", reward: { xp: 15 },
      hints: [
        `U lomen\u00e9 funkce se pr\u016fse\u010dn\u00edky s osami hledaj\u00ed dosazen\u00edm \u2014 \\(y = 0\\) pro osu \\(x\\), \\(x = 0\\) pro osu \\(y\\).`,
        `Vyd\u011blen\u00edm \u010ditatele jmenovatelem dosta\u0148 tvar \\(k/(x-a) + b\\) \u2014 z n\u011bj snadno p\u0159e\u010dte\u0161 obor hodnot i asymptoty.`
      ]
    },
    {
      id: "t_funk_02", regionId: "funkce", type: "closed", monsterName: `SIM_05B: Vlastnosti lomen\u00e9 funkce`,
      isTraining: true, firewallId: "q_funk_02", visual_color: "#2ecc8a", visual_symbol: `f(x)`, points: 0,
      question: `Funkce \\(g\\) je zad\u00e1na p\u0159edpisem \\(g(x) = \\dfrac{2}{x + 1}\\). Kter\u00e9 z n\u00e1sleduj\u00edc\u00edch tvrzen\u00ed je nepravdiv\u00e9?`,
      formula: null,
      diagram: null,
      instruction: `Vyberte nepravdiv\u00e9 tvrzen\u00ed.`,
      steps: [
        {
          trigger: `> Krok 1: Svislá asymptota`,
          content: `Kde se jmenovatel \\(x + 1\\) rovn\u00e1 nule? Jak\u00e1 hodnota \\(x\\) je z defini\u010dn\u00edho oboru vylou\u010dena \u2014 a jakou svislou asymptotu to ur\u010duje?`
        },
        {
          trigger: `> Krok 2: Pr\u016fse\u010dn\u00edky s osami`,
          content: `Dosa\u010f \\(x = 0\\) pro pr\u016fse\u010dn\u00edk s osou \\(y\\). Pak zkus vy\u0159e\u0161it \\(g(x) = 0\\) \u2014 m\u016f\u017ee b\u00fdt \u010ditatel \\(2\\) roven nule?`
        },
        {
          trigger: `> Krok 3: Obor hodnot`,
          content: `M\u016f\u017ee v\u00fdraz \\(\\tfrac{2}{x+1}\\) nab\u00fdt hodnoty \\(0\\)? Co to \u0159\u00edk\u00e1 o oboru hodnot funkce \\(g\\)?`
        },
      ],
      choices: [
        {
          label: `Obor hodnot funkce \\(g\\) je \\(H_g = \\mathbb{R} \\setminus \\{0\\}\\).`,
          value: "A",
          feedback: `Chyba. Tvrzen\u00ed A je pravdiv\u00e9: \\(\\tfrac{2}{x+1} = 0\\) nem\u00e1 \u0159e\u0161en\u00ed \u2014 hodnota \\(0\\) chyb\u00ed z oboru hodnot.`
        },
        {
          label: `Graf funkce \\(g\\) prot\u00edn\u00e1 osu \\(y\\) v bod\u011b \\((0;\;2)\\).`,
          value: "B",
          feedback: `Chyba. Tvrzen\u00ed B je pravdiv\u00e9: \\(g(0) = \\tfrac{2}{0+1} = 2\\).`
        },
        {
          label: `Svislá asymptota funkce \\(g\\) m\u00e1 rovnici \\(x = 1\\).`,
          value: "C",
          feedback: `P\u0159\u00edstup povolen. Asymptota je \\(x = -1\\) (kde \\(x + 1 = 0\\)), ne \\(x = 1\\). Z\u00e1m\u011bna znam\u00e9nka.`
        },
        {
          label: `Funkce \\(g\\) nem\u00e1 pr\u016fse\u010dn\u00edk s osou \\(x\\).`,
          value: "D",
          feedback: `Chyba. Tvrzen\u00ed D je pravdiv\u00e9: \\(\\tfrac{2}{x+1} = 0\\) nem\u00e1 \u0159e\u0161en\u00ed \u2014 \u010ditatel \\(2\\) je nenulov\u00fd.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_funk_03", regionId: "funkce", type: "closed", monsterName: `FW_05C: Identifikace predpisu hyperboly`,
      visual_color: "#4fc3f7", visual_symbol: `1/x`, points: 3, trainingTasks: ["t_funk_03"],
      question: `V kartezske soustave souradnic je zobrazen graf funkce f s definicnim oborem \\(\\mathbb{R}\\backslash\\{ 1\\}\\).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="0" y1="0" x2="0" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="40" y1="0" x2="40" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="80" y1="0" x2="80" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="120" y1="0" x2="120" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="160" y1="0" x2="160" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="200" y1="0" x2="200" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="240" y1="0" x2="240" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="280" y1="0" x2="280" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="320" y1="0" x2="320" y2="240" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="226" x2="320" y2="226" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="202" x2="320" y2="202" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="178" x2="320" y2="178" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="154" x2="320" y2="154" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="130" x2="320" y2="130" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="106" x2="320" y2="106" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="82" x2="320" y2="82" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="58" x2="320" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="34" x2="320" y2="34" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="10" x2="320" y2="10" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="130" x2="320" y2="130" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="320,130 313,126 313,134" fill="#e2e8f0"/> <text x="315" y="122" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="120" y1="240" x2="120" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="120,0 116,10 124,10" fill="#e2e8f0"/> <text x="126" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="106" y="144" fill="#e2e8f0" font-size="11">O</text> <line x1="40" y1="127" x2="40" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">-2</text> <line x1="80" y1="127" x2="80" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="80" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="160" y1="127" x2="160" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="160" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="200" y1="127" x2="200" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="200" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="240" y1="127" x2="240" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="240" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="280" y1="127" x2="280" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="280" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="117" y1="226" x2="123" y2="226" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="230" fill="#e2e8f0" font-size="10" text-anchor="end">-4</text> <line x1="117" y1="202" x2="123" y2="202" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="206" fill="#e2e8f0" font-size="10" text-anchor="end">-3</text> <line x1="117" y1="178" x2="123" y2="178" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="182" fill="#e2e8f0" font-size="10" text-anchor="end">-2</text> <line x1="117" y1="154" x2="123" y2="154" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="158" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="117" y1="106" x2="123" y2="106" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="110" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="117" y1="82" x2="123" y2="82" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="86" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="117" y1="58" x2="123" y2="58" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="62" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="117" y1="34" x2="123" y2="34" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="38" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="117" y1="10" x2="123" y2="10" stroke="#e2e8f0" stroke-width="1"/> <text x="112" y="14" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <line x1="160" y1="0" x2="160" y2="240" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.85"/> <line x1="0" y1="178" x2="320" y2="178" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.85"/> <rect x="164" y="5" width="28" height="15" rx="2" fill="#111827" opacity="0.75"/> <text x="165" y="17" fill="#fbbf24" font-size="9" text-anchor="start">x=1</text> <rect x="272" y="162" width="44" height="14" rx="2" fill="#111827" opacity="0.75"/> <text x="274" y="173" fill="#fbbf24" font-size="9" text-anchor="start">y = -2</text> <polyline points="2.6,190.2 3.2,190.2 3.8,190.3 4.5,190.3 5.1,190.4 5.8,190.4 6.4,190.5 7.1,190.6 7.7,190.6 8.3,190.7 9.0,190.7 9.6,190.8 10.3,190.8 10.9,190.9 11.5,190.9 12.2,191.0 12.8,191.0 13.5,191.1 14.1,191.2 14.7,191.2 15.4,191.3 16.0,191.3 16.7,191.4 17.3,191.5 18.0,191.5 18.6,191.6 19.2,191.6 19.9,191.7 20.5,191.8 21.2,191.8 21.8,191.9 22.4,192.0 23.1,192.0 23.7,192.1 24.4,192.2 25.0,192.2 25.7,192.3 26.3,192.4 26.9,192.4 27.6,192.5 28.2,192.6 28.9,192.6 29.5,192.7 30.1,192.8 30.8,192.9 31.4,192.9 32.1,193.0 32.7,193.1 33.3,193.2 34.0,193.2 34.6,193.3 35.3,193.4 35.9,193.5 36.6,193.6 37.2,193.6 37.8,193.7 38.5,193.8 39.1,193.9 39.8,194.0 40.4,194.1 41.0,194.1 41.7,194.2 42.3,194.3 43.0,194.4 43.6,194.5 44.2,194.6 44.9,194.7 45.5,194.8 46.2,194.9 46.8,195.0 47.5,195.1 48.1,195.2 48.7,195.3 49.4,195.4 50.0,195.5 50.7,195.6 51.3,195.7 51.9,195.8 52.6,195.9 53.2,196.0 53.9,196.1 54.5,196.2 55.2,196.3 55.8,196.4 56.4,196.5 57.1,196.7 57.7,196.8 58.4,196.9 59.0,197.0 59.6,197.1 60.3,197.3 60.9,197.4 61.6,197.5 62.2,197.6 62.8,197.8 63.5,197.9 64.1,198.0 64.8,198.2 65.4,198.3 66.1,198.4 66.7,198.6 67.3,198.7 68.0,198.9 68.6,199.0 69.3,199.2 69.9,199.3 70.5,199.5 71.2,199.6 71.8,199.8 72.5,199.9 73.1,200.1 73.7,200.3 74.4,200.4 75.0,200.6 75.7,200.8 76.3,200.9 77.0,201.1 77.6,201.3 78.2,201.5 78.9,201.7 79.5,201.9 80.2,202.0 80.8,202.2 81.4,202.4 82.1,202.6 82.7,202.8 83.4,203.1 84.0,203.3 84.6,203.5 85.3,203.7 85.9,203.9 86.6,204.1 87.2,204.4 87.9,204.6 88.5,204.9 89.1,205.1 89.8,205.3 90.4,205.6 91.1,205.9 91.7,206.1 92.3,206.4 93.0,206.7 93.6,206.9 94.3,207.2 94.9,207.5 95.6,207.8 96.2,208.1 96.8,208.4 97.5,208.7 98.1,209.0 98.8,209.4 99.4,209.7 100.0,210.0 100.7,210.4 101.3,210.7 102.0,211.1 102.6,211.5 103.2,211.8 103.9,212.2 104.5,212.6 105.2,213.0 105.8,213.4 106.5,213.9 107.1,214.3 107.7,214.7 108.4,215.2 109.0,215.7 109.7,216.1 110.3,216.6 110.9,217.1 111.6,217.7 112.2,218.2 112.9,218.7 113.5,219.3 114.1,219.9 114.8,220.5 115.4,221.1 116.1,221.7 116.7,222.4 117.4,223.0 118.0,223.7 118.6,224.4 119.3,225.1 119.9,225.9 120.6,226.7 121.2,227.5 121.8,228.3 122.5,229.2 123.1,230.1 123.8,231.0 124.4,231.9 125.1,232.9 125.7,234.0 126.3,235.0 127.0,236.1 127.6,237.3" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <polyline points="171.2,6.9 171.9,16.2 172.5,24.5 173.1,32.0 173.8,38.7 174.4,44.9 175.1,50.6 175.7,55.8 176.4,60.6 177.0,65.0 177.6,69.1 178.3,72.9 178.9,76.5 179.6,79.8 180.2,83.0 180.8,85.9 181.5,88.6 182.1,91.2 182.8,93.7 183.4,96.0 184.0,98.2 184.7,100.2 185.3,102.2 186.0,104.1 186.6,105.9 187.3,107.6 187.9,109.2 188.5,110.7 189.2,112.2 189.8,113.6 190.5,115.0 191.1,116.3 191.7,117.5 192.4,118.7 193.0,119.9 193.7,121.0 194.3,122.0 194.9,123.1 195.6,124.1 196.2,125.0 196.9,125.9 197.5,126.8 198.2,127.7 198.8,128.5 199.4,129.3 200.1,130.1 200.7,130.9 201.4,131.6 202.0,132.3 202.6,133.0 203.3,133.6 203.9,134.3 204.6,134.9 205.2,135.5 205.9,136.1 206.5,136.7 207.1,137.3 207.8,137.8 208.4,138.3 209.1,138.9 209.7,139.4 210.3,139.9 211.0,140.3 211.6,140.8 212.3,141.3 212.9,141.7 213.5,142.1 214.2,142.6 214.8,143.0 215.5,143.4 216.1,143.8 216.8,144.2 217.4,144.5 218.0,144.9 218.7,145.3 219.3,145.6 220.0,146.0 220.6,146.3 221.2,146.6 221.9,147.0 222.5,147.3 223.2,147.6 223.8,147.9 224.4,148.2 225.1,148.5 225.7,148.8 226.4,149.1 227.0,149.3 227.7,149.6 228.3,149.9 228.9,150.1 229.6,150.4 230.2,150.7 230.9,150.9 231.5,151.1 232.1,151.4 232.8,151.6 233.4,151.9 234.1,152.1 234.7,152.3 235.4,152.5 236.0,152.7 236.6,152.9 237.3,153.2 237.9,153.4 238.6,153.6 239.2,153.8 239.8,154.0 240.5,154.1 241.1,154.3 241.8,154.5 242.4,154.7 243.0,154.9 243.7,155.1 244.3,155.2 245.0,155.4 245.6,155.6 246.3,155.7 246.9,155.9 247.5,156.1 248.2,156.2 248.8,156.4 249.5,156.5 250.1,156.7 250.7,156.8 251.4,157.0 252.0,157.1 252.7,157.3 253.3,157.4 253.9,157.6 254.6,157.7 255.2,157.8 255.9,158.0 256.5,158.1 257.2,158.2 257.8,158.4 258.4,158.5 259.1,158.6 259.7,158.7 260.4,158.9 261.0,159.0 261.6,159.1 262.3,159.2 262.9,159.3 263.6,159.5 264.2,159.6 264.8,159.7 265.5,159.8 266.1,159.9 266.8,160.0 267.4,160.1 268.1,160.2 268.7,160.3 269.3,160.4 270.0,160.5 270.6,160.6 271.3,160.7 271.9,160.8 272.5,160.9 273.2,161.0 273.8,161.1 274.5,161.2 275.1,161.3 275.8,161.4 276.4,161.5 277.0,161.6 277.7,161.7 278.3,161.8 279.0,161.9 279.6,161.9 280.2,162.0 280.9,162.1 281.5,162.2 282.2,162.3 282.8,162.4 283.4,162.4 284.1,162.5 284.7,162.6 285.4,162.7 286.0,162.8 286.7,162.8 287.3,162.9 287.9,163.0 288.6,163.1 289.2,163.1 289.9,163.2 290.5,163.3 291.1,163.4 291.8,163.4 292.4,163.5 293.1,163.6 293.7,163.6 294.3,163.7 295.0,163.8 295.6,163.8 296.3,163.9 296.9,164.0 297.6,164.0 298.2,164.1 298.8,164.2 299.5,164.2 300.1,164.3 300.8,164.4 301.4,164.4 302.0,164.5 302.7,164.5 303.3,164.6 304.0,164.7 304.6,164.7 305.3,164.8 305.9,164.8 306.5,164.9 307.2,165.0 307.8,165.0 308.5,165.1 309.1,165.1 309.7,165.2 310.4,165.2 311.0,165.3 311.7,165.3 312.3,165.4 312.9,165.4 313.6,165.5 314.2,165.6 314.9,165.6 315.5,165.7 316.2,165.7 316.8,165.8 317.4,165.8" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <circle cx="200.0" cy="130.0" r="4" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="200" y="122" fill="#cc4400" font-size="9" text-anchor="middle">(2; 0)</text> <text x="312" y="236" fill="#e2e8f0" font-size="10" text-anchor="end">f(x) = ?</text> </svg>`,
      instruction: `Vyberte predpis funkce f odpovidajici zobrazeneho grafu.`,
      choices: [
        {
          label: `\\(y = \\frac{2}{x + 1} - 2\\)`,
          value: "A",
          feedback: `Kritická chyba. Svislá asymptota by ležela na \\(x = -1\\), ale z grafu jasně vidíme asymptotu v \\(x = 1\\).`
        },
        {
          label: `\\(y = \\frac{4 - 2x}{x - 1}\\)`,
          value: "B",
          feedback: `Přístup povolen. Obecný tvar ekvivalentní s \\(\\frac{2}{x-1}-2\\). Asymptoty \\(x=1\\), \\(y=-2\\), průsečík s osou \\(x\\) v \\((2;\, 0)\\) — vše sedí.`
        },
        {
          label: `\\(y = \\frac{2}{x - 1} + 2\\)`,
          value: "C",
          feedback: `Chyba. Tvar správný, ale konstantní člen je \\(+2\\), ne \\(-2\\). Vodorovná asymptota by ležela na \\(y = +2\\), zatímco graf ukazuje \\(y = -2\\).`
        },
        {
          label: `\\(y = \\frac{2x + 4}{x - 1}\\)`,
          value: "D",
          feedback: `Kritická chyba. Limita pro \\(x \\to +\\infty\\) je \\(2x/x = 2\\), nikoli \\(-2\\). Graf má vodorovnou asymptotu \\(y = -2\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 },
      hints: [
        `Svislá asymptota plyne ze jmenovatele, vodorovná z chování funkce pro \\(x \\to \\pm\\infty\\). Jak je z grafu odečteš?`,
        `Znáš-li asymptoty, víš i tvar předpisu. Zbývá určit parametr z jednoho bodu na grafu.`
      ]
    },
    {
      id: "t_funk_03", regionId: "funkce", type: "closed", monsterName: `SIM_05C: Asymptoty hyperboly`,
      isTraining: true, firewallId: "q_funk_03", visual_color: "#2ecc8a", visual_symbol: `1/x`, points: 0, showDiagramImmediately: true,
      question: `Hyperbola \\(f\\) je zobrazena na grafu. Jaké jsou její asymptoty?`,
      formula: null,
      instruction: `Vyberte spravnou dvojici asymptot.`,
      steps: [
        {
          trigger: `> Krok 1: Svisle asymptota`,
          content: `Svislá asymptota nastává tam, kde jmenovatel = 0. Pro jakou hodnotu \\(x\\) to nastane?`
        },
        {
          trigger: `> Krok 2: Vodorovna asymptota`,
          content: `Vodorovná asymptota: urči, k čemu se \\(\\frac{2}{x-1}\\) blíží pro \\(x \\to \\infty\\). Dosaď tuto limitu do celého předpisu a vypočítej \\(y\\).`
        },
      ],
      choices: [
        {
          label: `\\(x = 1,\\mspace{6mu} y = - 2\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(x-1=0\\) dává svislou asymptotu \\(x=1\\). Pro \\(x\\to\\infty\\) funkce tíhne k \\(y=-2\\).`
        },
        {
          label: `\\(x = - 1,\\mspace{6mu} y = 2\\)`,
          value: "B",
          feedback: `Kritická chyba. Záměna znamének — jmenovatel je \\((x-1)\\), ne \\((x+1)\\). Vodorovná asymptota je \\(-2\\), ne \\(+2\\).`
        },
        {
          label: `\\(x = 2,\\mspace{6mu} y = - 1\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Záměna čitatele a posunutí. Parametry jsou přehozeny.`
        },
        {
          label: `\\(x = 1,\\mspace{6mu} y = 2\\)`,
          value: "D",
          feedback: `Napůl správně. Svislá asymptota \\(x=1\\) je správně. Ale vodorovná je \\(y = -2\\), ne \\(y = +2\\).`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="34" y1="0" x2="34" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="72" y1="0" x2="72" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="110" y1="0" x2="110" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="148" y1="0" x2="148" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="186" y1="0" x2="186" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="224" y1="0" x2="224" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="262" y1="0" x2="262" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="300" y1="0" x2="300" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="208" x2="300" y2="208" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="186" x2="300" y2="186" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="164" x2="300" y2="164" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="142" x2="300" y2="142" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="120" x2="300" y2="120" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="98" x2="300" y2="98" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="76" x2="300" y2="76" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="54" x2="300" y2="54" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="32" x2="300" y2="32" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="10" x2="300" y2="10" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="120" x2="300" y2="120" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="300,120 293,116 293,124" fill="#e2e8f0"/> <text x="295" y="112" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="110" y1="220" x2="110" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="110,0 106,10 114,10" fill="#e2e8f0"/> <text x="116" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="96" y="134" fill="#e2e8f0" font-size="11">O</text> <line x1="34" y1="117" x2="34" y2="123" stroke="#e2e8f0" stroke-width="1"/> <text x="34" y="135" fill="#e2e8f0" font-size="10" text-anchor="middle">-2</text> <line x1="72" y1="117" x2="72" y2="123" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="135" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="148" y1="117" x2="148" y2="123" stroke="#e2e8f0" stroke-width="1"/> <text x="148" y="135" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="186" y1="117" x2="186" y2="123" stroke="#e2e8f0" stroke-width="1"/> <text x="186" y="135" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="224" y1="117" x2="224" y2="123" stroke="#e2e8f0" stroke-width="1"/> <text x="224" y="135" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="262" y1="117" x2="262" y2="123" stroke="#e2e8f0" stroke-width="1"/> <text x="262" y="135" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="107" y1="208" x2="113" y2="208" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="212" fill="#e2e8f0" font-size="10" text-anchor="end">-4</text> <line x1="107" y1="186" x2="113" y2="186" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="190" fill="#e2e8f0" font-size="10" text-anchor="end">-3</text> <line x1="107" y1="164" x2="113" y2="164" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="168" fill="#e2e8f0" font-size="10" text-anchor="end">-2</text> <line x1="107" y1="142" x2="113" y2="142" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="146" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="107" y1="98" x2="113" y2="98" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="102" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="107" y1="76" x2="113" y2="76" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="80" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="107" y1="54" x2="113" y2="54" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="58" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="107" y1="32" x2="113" y2="32" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="36" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="107" y1="10" x2="113" y2="10" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="14" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <line x1="148" y1="0" x2="148" y2="220" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,4"/> <line x1="0" y1="164" x2="300" y2="164" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,4"/> <rect x="152" y="5" width="30" height="15" rx="2" fill="#111827" opacity="0.8"/> <text x="153" y="17" fill="#fbbf24" font-size="9" text-anchor="start">x = 1</text> <rect x="4" y="148" width="38" height="15" rx="2" fill="#111827" opacity="0.8"/> <text x="6" y="159" fill="#fbbf24" font-size="9" text-anchor="start">y = -2</text> <polyline points="2.2,175.5 2.8,175.5 3.4,175.6 4.0,175.6 4.6,175.7 5.1,175.7 5.7,175.8 6.3,175.8 6.9,175.9 7.5,175.9 8.1,176.0 8.7,176.0 9.3,176.1 9.9,176.1 10.5,176.2 11.1,176.2 11.7,176.3 12.3,176.3 12.9,176.4 13.5,176.4 14.1,176.5 14.6,176.5 15.2,176.6 15.8,176.7 16.4,176.7 17.0,176.8 17.6,176.8 18.2,176.9 18.8,176.9 19.4,177.0 20.0,177.1 20.6,177.1 21.2,177.2 21.8,177.2 22.4,177.3 23.0,177.4 23.6,177.4 24.2,177.5 24.7,177.6 25.3,177.6 25.9,177.7 26.5,177.8 27.1,177.8 27.7,177.9 28.3,178.0 28.9,178.0 29.5,178.1 30.1,178.2 30.7,178.3 31.3,178.3 31.9,178.4 32.5,178.5 33.1,178.5 33.7,178.6 34.3,178.7 34.8,178.8 35.4,178.9 36.0,178.9 36.6,179.0 37.2,179.1 37.8,179.2 38.4,179.3 39.0,179.3 39.6,179.4 40.2,179.5 40.8,179.6 41.4,179.7 42.0,179.8 42.6,179.9 43.2,179.9 43.8,180.0 44.3,180.1 44.9,180.2 45.5,180.3 46.1,180.4 46.7,180.5 47.3,180.6 47.9,180.7 48.5,180.8 49.1,180.9 49.7,181.0 50.3,181.1 50.9,181.2 51.5,181.3 52.1,181.4 52.7,181.5 53.3,181.6 53.9,181.8 54.4,181.9 55.0,182.0 55.6,182.1 56.2,182.2 56.8,182.3 57.4,182.5 58.0,182.6 58.6,182.7 59.2,182.8 59.8,183.0 60.4,183.1 61.0,183.2 61.6,183.3 62.2,183.5 62.8,183.6 63.4,183.8 64.0,183.9 64.5,184.0 65.1,184.2 65.7,184.3 66.3,184.5 66.9,184.6 67.5,184.8 68.1,184.9 68.7,185.1 69.3,185.2 69.9,185.4 70.5,185.6 71.1,185.7 71.7,185.9 72.3,186.1 72.9,186.3 73.5,186.4 74.0,186.6 74.6,186.8 75.2,187.0 75.8,187.2 76.4,187.4 77.0,187.6 77.6,187.8 78.2,188.0 78.8,188.2 79.4,188.4 80.0,188.6 80.6,188.8 81.2,189.0 81.8,189.2 82.4,189.5 83.0,189.7 83.6,189.9 84.1,190.2 84.7,190.4 85.3,190.7 85.9,190.9 86.5,191.2 87.1,191.5 87.7,191.7 88.3,192.0 88.9,192.3 89.5,192.6 90.1,192.9 90.7,193.2 91.3,193.5 91.9,193.8 92.5,194.1 93.1,194.4 93.7,194.8 94.2,195.1 94.8,195.5 95.4,195.8 96.0,196.2 96.6,196.5 97.2,196.9 97.8,197.3 98.4,197.7 99.0,198.1 99.6,198.5 100.2,199.0 100.8,199.4 101.4,199.9 102.0,200.3 102.6,200.8 103.2,201.3 103.7,201.8 104.3,202.3 104.9,202.8 105.5,203.4 106.1,203.9 106.7,204.5 107.3,205.1 107.9,205.7 108.5,206.3 109.1,207.0 109.7,207.6 110.3,208.3 110.9,209.0 111.5,209.8 112.1,210.5 112.7,211.3 113.3,212.1 113.8,213.0 114.4,213.8 115.0,214.7 115.6,215.6 116.2,216.6 116.8,217.6" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <polyline points="158.4,3.2 159.0,11.8 159.6,19.6 160.2,26.7 160.8,33.1 161.4,38.9 162.0,44.2 162.6,49.1 163.1,53.6 163.7,57.8 164.3,61.6 164.9,65.2 165.5,68.6 166.1,71.7 166.7,74.6 167.3,77.4 167.9,80.0 168.5,82.4 169.1,84.7 169.7,86.9 170.3,88.9 170.9,90.9 171.5,92.7 172.1,94.5 172.7,96.2 173.2,97.8 173.8,99.3 174.4,100.7 175.0,102.1 175.6,103.5 176.2,104.7 176.8,106.0 177.4,107.1 178.0,108.3 178.6,109.3 179.2,110.4 179.8,111.4 180.4,112.4 181.0,113.3 181.6,114.2 182.2,115.0 182.7,115.9 183.3,116.7 183.9,117.5 184.5,118.2 185.1,119.0 185.7,119.7 186.3,120.4 186.9,121.0 187.5,121.7 188.1,122.3 188.7,122.9 189.3,123.5 189.9,124.1 190.5,124.6 191.1,125.2 191.7,125.7 192.3,126.2 192.8,126.7 193.4,127.2 194.0,127.7 194.6,128.1 195.2,128.6 195.8,129.0 196.4,129.5 197.0,129.9 197.6,130.3 198.2,130.7 198.8,131.1 199.4,131.5 200.0,131.8 200.6,132.2 201.2,132.5 201.8,132.9 202.3,133.2 202.9,133.6 203.5,133.9 204.1,134.2 204.7,134.5 205.3,134.8 205.9,135.1 206.5,135.4 207.1,135.7 207.7,136.0 208.3,136.3 208.9,136.5 209.5,136.8 210.1,137.1 210.7,137.3 211.3,137.6 211.9,137.8 212.4,138.1 213.0,138.3 213.6,138.5 214.2,138.8 214.8,139.0 215.4,139.2 216.0,139.4 216.6,139.6 217.2,139.8 217.8,140.0 218.4,140.2 219.0,140.4 219.6,140.6 220.2,140.8 220.8,141.0 221.4,141.2 222.0,141.4 222.5,141.6 223.1,141.7 223.7,141.9 224.3,142.1 224.9,142.3 225.5,142.4 226.1,142.6 226.7,142.8 227.3,142.9 227.9,143.1 228.5,143.2 229.1,143.4 229.7,143.5 230.3,143.7 230.9,143.8 231.5,144.0 232.0,144.1 232.6,144.2 233.2,144.4 233.8,144.5 234.4,144.7 235.0,144.8 235.6,144.9 236.2,145.0 236.8,145.2 237.4,145.3 238.0,145.4 238.6,145.5 239.2,145.7 239.8,145.8 240.4,145.9 241.0,146.0 241.6,146.1 242.1,146.2 242.7,146.4 243.3,146.5 243.9,146.6 244.5,146.7 245.1,146.8 245.7,146.9 246.3,147.0 246.9,147.1 247.5,147.2 248.1,147.3 248.7,147.4 249.3,147.5 249.9,147.6 250.5,147.7 251.1,147.8 251.7,147.9 252.2,148.0 252.8,148.1 253.4,148.1 254.0,148.2 254.6,148.3 255.2,148.4 255.8,148.5 256.4,148.6 257.0,148.7 257.6,148.7 258.2,148.8 258.8,148.9 259.4,149.0 260.0,149.1 260.6,149.1 261.2,149.2 261.7,149.3 262.3,149.4 262.9,149.5 263.5,149.5 264.1,149.6 264.7,149.7 265.3,149.7 265.9,149.8 266.5,149.9 267.1,150.0 267.7,150.0 268.3,150.1 268.9,150.2 269.5,150.2 270.1,150.3 270.7,150.4 271.3,150.4 271.8,150.5 272.4,150.6 273.0,150.6 273.6,150.7 274.2,150.8 274.8,150.8 275.4,150.9 276.0,150.9 276.6,151.0 277.2,151.1 277.8,151.1 278.4,151.2 279.0,151.2 279.6,151.3 280.2,151.3 280.8,151.4 281.4,151.5 281.9,151.5 282.5,151.6 283.1,151.6 283.7,151.7 284.3,151.7 284.9,151.8 285.5,151.8 286.1,151.9 286.7,151.9 287.3,152.0 287.9,152.0 288.5,152.1 289.1,152.1 289.7,152.2 290.3,152.2 290.9,152.3 291.4,152.3 292.0,152.4 292.6,152.4 293.2,152.5 293.8,152.5 294.4,152.6 295.0,152.6 295.6,152.7 296.2,152.7" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <circle cx="186.0" cy="120.0" r="4" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="186" y="134" fill="#cc4400" font-size="9" text-anchor="middle">(2; 0)</text> </svg>`,
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_funk_04", regionId: "funkce", type: "closed", monsterName: `FW_05D: Pr\u016fse\u010d\u00edk dvou p\u0159\u00edmek`,
      visual_color: "#4fc3f7", visual_symbol: `y=kx+q`, points: 2, trainingTasks: ["t_funk_04"],
      question: `Grafem funkc\u00ed \\(f\\) a \\(g\\) jsou p\u0159\u00edmky zobrazen\u00e9 v obr\u00e1zku. Pr\u016fse\u010dn\u00edky p\u0159\u00edmek s osami sou\u0159adnic jsou vyzna\u010deny.`,
      formula: null,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 210" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="20" y1="0" x2="20" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="50" y1="0" x2="50" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="110" y1="0" x2="110" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="140" y1="0" x2="140" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="170" y1="0" x2="170" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="200" y1="0" x2="200" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="65" x2="300" y2="65" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="95" x2="300" y2="95" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="125" x2="300" y2="125" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="155" x2="300" y2="155" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="185" x2="293" y2="185" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="293,185 286,181 286,189" fill="#e2e8f0"/> <text x="288" y="178" fill="#e2e8f0" font-size="11" font-style="italic">x</text> <line x1="80" y1="210" x2="80" y2="7" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="80,7 76,17 84,17" fill="#e2e8f0"/> <text x="87" y="16" fill="#e2e8f0" font-size="11" font-style="italic">y</text> <text x="67" y="199" fill="#e2e8f0" font-size="11">O</text> <line x1="20" y1="182" x2="20" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="20" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">-2</text> <line x1="50" y1="182" x2="50" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="50" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="110" y1="182" x2="110" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="110" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="140" y1="182" x2="140" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="140" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="170" y1="182" x2="170" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="170" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="200" y1="182" x2="200" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="200" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="77" y1="155" x2="83" y2="155" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="159" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="77" y1="125" x2="83" y2="125" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="129" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="77" y1="95" x2="83" y2="95" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="99" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="77" y1="65" x2="83" y2="65" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="69" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="17" y1="191" x2="86" y2="53" stroke="#4fc3f7" stroke-width="2.5"/> <text x="89" y="49" fill="#4fc3f7" font-size="13" font-style="italic">f</text> <line x1="20" y1="65" x2="155" y2="200" stroke="#f97316" stroke-width="2.5"/> <text x="16" y="57" fill="#f97316" font-size="13" font-style="italic">g</text> <circle cx="80" cy="125" r="4" fill="#fbbf24" stroke="#111827" stroke-width="1.5"/> <circle cx="140" cy="185" r="4" fill="#fbbf24" stroke="#111827" stroke-width="1.5"/> <circle cx="20" cy="185" r="4" fill="#4fc3f7" stroke="#111827" stroke-width="1.5"/> <circle cx="80" cy="65" r="4" fill="#4fc3f7" stroke="#111827" stroke-width="1.5"/></svg>`,
      instruction: `Ur\u010dete sou\u0159adnice pr\u016fse\u010dn\u00edku funkc\u00ed \\(f\\) a \\(g\\).`,
      choices: [
        {
          label: `\\(\\left(-\\tfrac{2}{3};\;\\tfrac{8}{3}\\right)\\)`,
          value: "A",
          feedback: `P\u0159\u00edstup povolen. Soustava \\(-x+2 = 2x+4\\) d\u00e1 \\(-3x = 2\\), tedy \\(x = -\\tfrac{2}{3}\\) a \\(y = \\tfrac{8}{3}\\).`
        },
        {
          label: `\\(\\left(\\tfrac{2}{3};\;\\tfrac{4}{3}\\right)\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Znam\u00e9nko: \\(-x+2 = 2x+4 \\Rightarrow -3x = 2 \\Rightarrow x = -\\tfrac{2}{3}\\) (z\u00e1porn\u00e9), ne kladn\u00e9.`
        },
        {
          label: `\\(\\left(-2;\;0\\right)\\)`,
          value: "C",
          feedback: `Nekompletní. Bod \\((-2;\\,0)\\) je pr\u016fse\u010dn\u00edk p\u0159\u00edmky \\(f\\) s osou \\(x\\) \u2014 nikoliv pr\u016fse\u010dn\u00edk obou p\u0159\u00edmek.`
        },
        {
          label: `\\(\\left(-1;\;3\\right)\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Sm\u011brnice \\(f\\): body \\((-2;\\,0)\\) a \\((0;\\,4)\\) daj\u00ed \\(k = \\tfrac{4-0}{0-(-2)} = \\tfrac{4}{2} = 2\\), ne \\(1\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 10 },
      hints: [
        `Průsečíky přímky s osami souřadnic plně určují lineární funkci — jak?`,
        `Pr\u016fse\u010dn\u00edk p\u0159\u00edmek nastane, kdy\u017e ob\u011b funkce daj\u00ed stejnou hodnotu \\(y\\) \u2014 nastav rovnici a vy\u0159e\u0161.`
      ]
    },
    {
      id: "t_funk_04", regionId: "funkce", type: "closed", monsterName: `SIM_05D: Pr\u016fse\u010d\u00edk p\u0159\u00edmek algebraicky`,
      isTraining: true, firewallId: "q_funk_04", visual_color: "#2ecc8a", visual_symbol: `y=kx+q`, points: 0,
      question: `Funkce \\(p\\) a \\(r\\) jsou zad\u00e1ny p\u0159edpisy \\(p\\colon y = -x + 3\\) a \\(r\\colon y = 2x\\). Ur\u010dete sou\u0159adnice jejich pr\u016fse\u010dn\u00edku.`,
      formula: null,
      instruction: `Vyberte spr\u00e1vn\u00e9 sou\u0159adnice pr\u016fse\u010dn\u00edku.`,
      steps: [
        {
          trigger: `> Krok 1: Kdy se p\u0159\u00edmky prot\u00edn\u00e1j\u00ed?`,
          content: `Pr\u016fse\u010dn\u00edk nastane, kdy\u017e ob\u011b funkce daj\u00ed stejnou hodnotu \\(y\\). Jak zap\u00ed\u0161e\u0161 rovnici z p\u0159edpis\u016f \\(p\\) a \\(r\\)?`
        },
        {
          trigger: `> Krok 2: Vy\u0159e\u0161 rovnici`,
          content: `Napiš rovnici pro průsečík a vyřeš ji. Jaká vyjde hodnota \\(x\\)?`
        },
        {
          trigger: `> Krok 3: Dosa\u010f a ov\u011b\u0159`,
          content: `Pro nalezen\u00e9 \\(x\\) dosa\u010f do p\u0159edpisu \\(r\\) i \\(p\\) \u2014 ob\u011b mus\u00ed d\u00e1t stejn\u00e9 \\(y\\). Jak\u00e9 jsou v\u00fdsledn\u00e9 sou\u0159adnice pr\u016fse\u010dn\u00edku?`
        },
      ],
      choices: [
        { label: `\\((1;\;2)\\)`, value: "A", feedback: `Logika potvrzena. \\(-x+3 = 2x \\Rightarrow 3 = 3x \\Rightarrow x = 1,\; y = 2\\cdot 1 = 2\\).` },
        { label: `\\((3;\;6)\\)`, value: "B", feedback: `Chyba. \\(x = 3\\) je pr\u016fse\u010dn\u00edk p\u0159\u00edmky \\(p\\) s osou \\(x\\). Pr\u016fse\u010dn\u00edk p\u0159\u00edmek se hled\u00e1 rovnic\u00ed \\(-x+3 = 2x\\).` },
        { label: `\\((3;\;0)\\)`, value: "C", feedback: `Nekompletní. Bod \\((3;\\,0)\\) le\u017e\u00ed na p\u0159\u00edmce \\(p\\), ale nikoliv na \\(r\\) \u2014 nejedn\u00e1 se o pr\u016fse\u010dn\u00edk obou p\u0159\u00edmek.` },
        { label: `\\((-1;\;-2)\\)`, value: "D", feedback: `Chyba syntaxe. \\(-x+3 = 2x \\Rightarrow 3 = 3x \\Rightarrow x = +1\\) (kladn\u00e9), ne \\(-1\\).` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_funk_05", regionId: "funkce", type: "closed", monsterName: `FW_05E: Definicni obor odmocniny`,
      visual_color: "#4fc3f7", visual_symbol: `D(f)`, points: 3, trainingTasks: ["t_funk_05"],
      question: `Funkce \\(f\\) je definována předpisem:`,
      formula: `$$f(x) = \\sqrt{x^{2} - 9}$$`,
      instruction: `Vyberte definiční obor funkce f.`,
      choices: [
        {
          label: `\\(( - 3\\,;\\, 3)\\)`,
          value: "A",
          feedback: `Kritická chyba. Na intervalu \\((-3;\, 3)\\) je \\(x^2-9 < 0\\) — odmocnina záporného čísla není v \\(\\mathbb{R}\\) definována.`
        },
        {
          label: `\\(\\langle - 3\\,;\\, 3\\rangle\\)`,
          value: "B",
          feedback: `Kritická chyba. Interval \\(\\langle -3;\, 3\\rangle\\) je nesprávný — podmínka \\(x^2-9 \\geq 0\\) platí VNĚ tohoto intervalu.`
        },
        {
          label: `\\(( - \\infty\\,;\\, - 3\\rangle \\cup \\langle 3\\,;\\, + \\infty)\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(x^2-9 \\geq 0\\) právě tehdy, když \\(|x| \\geq 3\\). Krajní body \\(-3\\) a \\(3\\) patří do \\(D(f)\\), protože odmocnina z \\(0\\) je definována.`
        },
        {
          label: `\\(\\mathbb{R}\\backslash\\{ - 3\\,;\\, 3\\}\\)`,
          value: "D",
          feedback: `Chyba. Vynechání pouze krajních bodů je nedostatečné — celý interval \\((-3;\, 3)\\) musí být vyloučen.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 },
      hints: [
        `Odmocnina je definována, když výraz pod ní je nezáporný. Jakou nerovnici pro \\(x\\) to dává?`,
        `Výsledná nerovnice má tvar \\(|x| \\geq c\\). Kdy platí absolutní hodnota \\(\\geq\\) konstanta?`
      ]
    },
    {
      id: "t_funk_05", regionId: "funkce", type: "closed", monsterName: `SIM_05E: Podminka odmocniny`,
      isTraining: true, firewallId: "q_funk_05", visual_color: "#2ecc8a", visual_symbol: `D(f)`, points: 0,
      question: `Pro jaké hodnoty \\(x\\) je výraz \\(\\sqrt{x + 5}\\) definovaný?`,
      formula: null,
      instruction: `Vyberte spravnou podminu definovanosti.`,
      steps: [
        {
          trigger: `> Krok 1: Podminka pod odmocninou`,
          content: `Sudá odmocnina je definována tehdy, když výraz pod ní je <b>nezáporný</b> \\((\\geq 0)\\). Záporné číslo nemá reálnou odmocninu.`
        },
        {
          trigger: `> Krok 2: Reseni nerovnice`,
          content: `Vyřeš nerovnici \\(x + 5 \\geq 0\\). Dosaď a urči, od které hodnoty \\(x\\) je výraz definovaný. Patří krajní bod do \\(D(f)\\)?`
        },
      ],
      choices: [
        {
          label: `\\(x \\geq - 5\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(x+5 \\geq 0 \\Rightarrow x \\geq -5\\). Bod \\(x=-5\\) patří do \\(D(f)\\), protože \\(\\sqrt{0} = 0\\) je definováno.`
        },
        {
          label: `\\(x > - 5\\)`,
          value: "B",
          feedback: `Téměř správně, ale ostrá nerovnost vylučuje \\(x=-5\\). Přitom \\(f(-5) = \\sqrt{0} = 0\\) — funkce je definována. Podmínka je \\(\\geq\\), ne \\(>\\).`
        },
        {
          label: `\\(x \\leq 5\\)`,
          value: "C",
          feedback: `Kritická chyba. Záměna znamének nebo čísel. Podmínka se týká \\(x+5 \\geq 0\\), ne \\(x-5 \\geq 0\\).`
        },
        {
          label: `\\(x \\neq - 5\\)`,
          value: "D",
          feedback: `Chyba. Podmínka \\(x \\neq -5\\) by platila pro výraz ve jmenovateli. Odmocnina vyžaduje nezápornost.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_funk_06", regionId: "funkce", type: "closed", monsterName: `FW_05F: Soucet souradnic vrcholu paraboly`,
      visual_color: "#4fc3f7", visual_symbol: `V(x,y)`, points: 3, trainingTasks: ["t_funk_06"],
      question: `Kvadratická funkce \\(f\\) je definována předpisem:`,
      formula: `$$f(x) = x^{2} - 10x + 16$$`,
      instruction: `Určete součet souřadnic vrcholu V funkce f.`,
      choices: [
        {
          label: `\\(- 9\\)`,
          value: "A",
          feedback: `Chyba. Toto je pouze \\(y\\)-souřadnice vrcholu \\((y_v = -9)\\). Hledáme SOUČET souřadnic: \\(x_v + y_v = 5 + (-9) = -4\\).`
        },
        {
          label: `\\(- 45\\)`,
          value: "B",
          feedback: `Kritická chyba. Toto je SOUČIN souřadnic: \\(x_v \\cdot y_v = 5 \\cdot (-9) = -45\\). Zadání požaduje součet.`
        },
        {
          label: `\\(14\\)`,
          value: "C",
          feedback: `Chyba. Toto je součet absolutních hodnot: \\(|5|+|-9|=14\\). Znaménko \\(y\\)-souřadnice je záporné.`
        },
        {
          label: `\\(- 4\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(x_v = -(-10)/(2 \\cdot 1) = 5\\), \\(y_v = 25-50+16 = -9\\). Součet: \\(5+(-9) = -4\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 15 },
      hints: [
        `Pro parabolu \\(y = ax^2+bx+c\\) platí vzorec pro x-souřadnici vrcholu. Znáš ho?`,
        `Máš-li \\(x_v\\), dosaď ho do předpisu funkce a spočítej \\(y_v\\). Pak urči, co zadání žádá.`
      ]
    },
    {
      id: "t_funk_06", regionId: "funkce", type: "closed", monsterName: `SIM_05F: Y-souradnice vrcholu paraboly`,
      isTraining: true, firewallId: "q_funk_06", visual_color: "#2ecc8a", visual_symbol: `V(x,y)`, points: 0,
      question: `Kvadratická funkce \\(f\\colon y = x^2 - 6x + 5\\). Jaká je \\(y\\)-souřadnice vrcholu \\(V\\)?`,
      formula: null,
      instruction: `Vyberte y-souradnici vrcholu.`,
      steps: [
        {
          trigger: `> Krok 1: Najdi x-souradnici vrcholu`,
          content: `Pro parabolu \\(y = ax^2+bx+c\\) platí \\(x_v = -b/(2a)\\). Jaká je hodnota \\(x_v\\) pro tuto funkci?`
        },
        {
          trigger: `> Krok 2: Dosaď do predpisu`,
          content: `\\(y_v = f(3) = 3^2 - 6 \\cdot 3 + 5\\). Dosaď a vypočítej.`
        },
      ],
      choices: [
        {
          label: `\\(5\\)`,
          value: "A",
          feedback: `Chyba. \\(5\\) je absolutní člen \\(c\\) funkce \\(f\\), ne \\(y\\)-souřadnice vrcholu.`
        },
        {
          label: `\\(- 9\\)`,
          value: "B",
          feedback: `Chyba. \\(-9\\) dostaneme, pokud zapomeneme přičíst absolutní člen: \\(9-18=-9\\). Správně: \\(9-18+5=-4\\).`
        },
        {
          label: `\\(- 4\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(x_v=3\\), \\(y_v=9-18+5=-4\\). Vrchol \\(V[3;\, -4]\\).`
        },
        {
          label: `\\(- 5\\)`,
          value: "D",
          feedback: `Chyba. Záměna znamének absolutního členu nebo aritmetická chyba. Ověř: \\(9-18+5=-4\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_funk_07", regionId: "funkce", type: "closed", monsterName: `FW_05G: Tvrzeni o parabole`,
      visual_color: "#4fc3f7", visual_symbol: `f(x)`, points: 3, trainingTasks: ["t_funk_07"],
      question: `Funkce f je definována předpisem:`,
      formula: `$$f(x) = x^{2} + 2x + 1$$`,
      diagram: null,
      instruction: `Ktere z nasledujicich tvrzeni o funkci f je pravdive?`,
      choices: [
        {
          label: `Osa souměrnosti grafu funkce \\(f\\) je přímka \\(x = 1\\).`,
          value: "A",
          feedback: `Chyba. Doplň na čtverec: \\(x^2+2x+1 = (x+1)^2\\). Vrchol je \\(V(-1;\,0)\\), osa souměrnosti je \\(x = -1\\).`
        },
        {
          label: `Obor hodnot funkce \\(f\\) je \\(H_{f} = \\langle 0;\\mspace{6mu} +\\infty)\\).`,
          value: "B",
          feedback: `Přístup povolen. \\(f(x) = (x+1)^2 \\geq 0\\) pro všechna \\(x\\), minimum \\(0\\) nastává ve vrcholu \\(V(-1;\,0)\\). ✓`
        },
        {
          label: `Funkce \\(f\\) klesá v intervalu \\((0;\\mspace{6mu} +\\infty)\\).`,
          value: "C",
          feedback: `Chyba. Kladná parabola s vrcholem v \\(x=-1\\) roste na \\((-1;\,+\\infty)\\). Na \\((0;\,+\\infty)\\) funkce roste, neklesá.`
        },
        {
          label: `Graf funkce \\(f\\) nemá průsečík s osou \\(x\\).`,
          value: "D",
          feedback: `Chyba. \\(f(x) = 0 \\Rightarrow (x+1)^2 = 0 \\Rightarrow x = -1\\). Graf se osy \\(x\\) dotýká v bodě \\((-1;\,0)\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 },
      hints: [
        `Doplň na čtverec: \\(x^2 + 2x + 1 = (x + ?)^2\\). Co to říká o vrcholu paraboly a jeho souřadnicích?`,
        `Kladná parabola má minimum ve vrcholu. Kde leží minimum \\(f(x) = x^2+2x+1\\)? Z toho plyne obor hodnot.`
      ]
    },
    {
      id: "t_funk_07", regionId: "funkce", type: "closed", monsterName: `SIM_05G: Doplneni na ctverec`,
      isTraining: true, firewallId: "q_funk_07", visual_color: "#2ecc8a", visual_symbol: `f(x)`, points: 0,
      question: `Funkce \\(g: y = x^{2} - 4x + 4\\). Doplňte na čtverec a určete souřadnice vrcholu.`,
      instruction: `Vyberte správný vrchol paraboly \\(g\\).`,
      steps: [
        {
          trigger: `> Krok 1: Doplnění na čtverec`,
          content: `Hledáme tvar \\((x - p)^2 + q\\). Porovnej \\(x^2 - 4x + 4\\) se vzorem \\((x-p)^2 = x^2 - 2px + p^2\\). Kolik je \\(2p\\)?`
        },
        {
          trigger: `> Krok 2: Zapis vrchol`,
          content: `Z \\(2p = 4\\) plyne \\(p = ?\\). Ověř: \\(p^2 = 4\\). Zbytek \\(q = 4 - p^2 = ?\\). Zapiš \\(V(p;\,q)\\).`
        },
      ],
      choices: [
        {
          label: `\\(V(-2;\\mspace{6mu} 0)\\)`,
          value: "A",
          feedback: `Záměna znaménka. \\(x^2-4x+4 = (x-2)^2\\), takže \\(p = +2\\), ne \\(-2\\).`
        },
        {
          label: `\\(V(2;\\mspace{6mu} 0)\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(x^2-4x+4 = (x-2)^2+0\\): \\(p=2\\), \\(q=0\\). Vrchol \\(V(2;\\,0)\\). ✓`
        },
        {
          label: `\\(V( - 2;\\mspace{6mu} 0)\\)`,
          value: "C",
          feedback: `Chyba znaménka. Z tvaru \\((x-2)^2\\) plyne \\(p = +2\\), ne \\(-2\\).`
        },
        {
          label: `\\(V(2;\\mspace{6mu} 4)\\)`,
          value: "D",
          feedback: `Chyba. \\(f(0) = (0-2)^2 = 4\\) je hodnota v \\(x=0\\), ne souřadnice vrcholu.`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" style="width:100%;max-width:260px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="30" y1="0" x2="30" y2="200" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="70" y1="0" x2="70" y2="200" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="110" y1="0" x2="110" y2="200" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="150" y1="0" x2="150" y2="200" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="190" y1="0" x2="190" y2="200" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="230" y1="0" x2="230" y2="200" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="183" x2="260" y2="183" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="155" x2="260" y2="155" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="127" x2="260" y2="127" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="99" x2="260" y2="99" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="71" x2="260" y2="71" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="43" x2="260" y2="43" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="15" x2="260" y2="15" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="155" x2="260" y2="155" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="260,155 253,151 253,159" fill="#e2e8f0"/> <text x="255" y="147" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="70" y1="200" x2="70" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="70,0 66,10 74,10" fill="#e2e8f0"/> <text x="76" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="56" y="169" fill="#e2e8f0" font-size="11">O</text> <line x1="30" y1="152" x2="30" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="30" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="110" y1="152" x2="110" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="110" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="150" y1="152" x2="150" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="150" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="190" y1="152" x2="190" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="190" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="230" y1="152" x2="230" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="230" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="67" y1="183" x2="73" y2="183" stroke="#e2e8f0" stroke-width="1"/> <text x="62" y="187" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="67" y1="127" x2="73" y2="127" stroke="#e2e8f0" stroke-width="1"/> <text x="62" y="131" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="67" y1="99" x2="73" y2="99" stroke="#e2e8f0" stroke-width="1"/> <text x="62" y="103" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="67" y1="71" x2="73" y2="71" stroke="#e2e8f0" stroke-width="1"/> <text x="62" y="75" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="67" y1="43" x2="73" y2="43" stroke="#e2e8f0" stroke-width="1"/> <text x="62" y="47" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="67" y1="15" x2="73" y2="15" stroke="#e2e8f0" stroke-width="1"/> <text x="62" y="19" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <polyline points="57.0,3.8 58.2,7.7 59.4,11.5 60.7,15.3 61.9,19.0 63.1,22.7 64.3,26.4 65.5,30.0 66.7,33.5 67.9,37.0 69.1,40.5 70.3,43.8 71.5,47.2 72.7,50.5 73.9,53.7 75.1,56.9 76.3,60.0 77.5,63.1 78.7,66.1 79.9,69.1 81.2,72.1 82.4,74.9 83.6,77.8 84.8,80.5 86.0,83.3 87.2,86.0 88.4,88.6 89.6,91.2 90.8,93.7 92.0,96.2 93.2,98.6 94.4,100.9 95.6,103.3 96.8,105.5 98.0,107.8 99.2,109.9 100.5,112.0 101.7,114.1 102.9,116.1 104.1,118.1 105.3,120.0 106.5,121.9 107.7,123.7 108.9,125.4 110.1,127.1 111.3,128.8 112.5,130.4 113.7,132.0 114.9,133.5 116.1,134.9 117.3,136.3 118.5,137.7 119.7,139.0 121.0,140.2 122.2,141.4 123.4,142.6 124.6,143.7 125.8,144.7 127.0,145.7 128.2,146.7 129.4,147.6 130.6,148.4 131.8,149.2 133.0,150.0 134.2,150.6 135.4,151.3 136.6,151.9 137.8,152.4 139.0,152.9 140.3,153.3 141.5,153.7 142.7,154.1 143.9,154.3 145.1,154.6 146.3,154.8 147.5,154.9 148.7,155.0 149.9,155.0 151.1,155.0 152.3,154.9 153.5,154.8 154.7,154.6 155.9,154.4 157.1,154.1 158.3,153.8 159.5,153.4 160.8,153.0 162.0,152.5 163.2,152.0 164.4,151.4 165.6,150.8 166.8,150.1 168.0,149.3 169.2,148.6 170.4,147.7 171.6,146.8 172.8,145.9 174.0,144.9 175.2,143.9 176.4,142.8 177.6,141.6 178.8,140.4 180.1,139.2 181.3,137.9 182.5,136.6 183.7,135.2 184.9,133.7 186.1,132.2 187.3,130.7 188.5,129.1 189.7,127.4 190.9,125.7 192.1,124.0 193.3,122.2 194.5,120.3 195.7,118.4 196.9,116.4 198.1,114.4 199.3,112.4 200.6,110.3 201.8,108.1 203.0,105.9 204.2,103.6 205.4,101.3 206.6,99.0 207.8,96.6 209.0,94.1 210.2,91.6 211.4,89.0 212.6,86.4 213.8,83.7 215.0,81.0 216.2,78.2 217.4,75.4 218.6,72.5 219.8,69.6 221.1,66.6 222.3,63.6 223.5,60.5 224.7,57.4 225.9,54.2 227.1,51.0 228.3,47.7 229.5,44.4 230.7,41.0 231.9,37.6 233.1,34.1 234.3,30.6 235.5,27.0 236.7,23.4 237.9,19.7 239.1,15.9 240.4,12.1 241.6,8.3 242.8,4.4" fill="none" stroke="#2ecc8a" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <circle cx="150.0" cy="155.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="150" y="143" fill="#cc4400" font-size="9" text-anchor="middle">V(2; 0)</text> <text x="130" y="196" fill="#e2e8f0" font-size="10" text-anchor="middle">y = (x-2)^2</text> </svg>`,
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_funk_08", regionId: "funkce", type: "closed", monsterName: `FW_05H: Predpis paraboly z vrcholu a bodu`,
      visual_color: "#4fc3f7", visual_symbol: `V+B`, points: 3, trainingTasks: ["t_funk_08"],
      question: `V kartézské soustavě souřadnic jsou vyznačeny dva mřížové body \\(A\\), \\(B\\). Grafem funkce \\(h\\) je parabola s vrcholem \\(A\\) procházející bodem \\(B\\).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 290" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="25" y1="0" x2="25" y2="290" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="65" y1="0" x2="65" y2="290" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="105" y1="0" x2="105" y2="290" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="145" y1="0" x2="145" y2="290" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="185" y1="0" x2="185" y2="290" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="225" y1="0" x2="225" y2="290" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="265" y1="0" x2="265" y2="290" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="285" x2="300" y2="285" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="265" x2="300" y2="265" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="245" x2="300" y2="245" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="225" x2="300" y2="225" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="205" x2="300" y2="205" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="185" x2="300" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="165" x2="300" y2="165" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="145" x2="300" y2="145" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="125" x2="300" y2="125" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="105" x2="300" y2="105" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="85" x2="300" y2="85" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="65" x2="300" y2="65" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="45" x2="300" y2="45" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="25" x2="300" y2="25" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="5" x2="300" y2="5" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="185" x2="300" y2="185" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="300,185 293,181 293,189" fill="#e2e8f0"/> <text x="295" y="177" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="65" y1="290" x2="65" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="65,0 61,10 69,10" fill="#e2e8f0"/> <text x="71" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="51" y="199" fill="#e2e8f0" font-size="11">O</text> <line x1="25" y1="182" x2="25" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="25" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="105" y1="182" x2="105" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="105" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="145" y1="182" x2="145" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="145" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="185" y1="182" x2="185" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="185" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="225" y1="182" x2="225" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="225" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="265" y1="182" x2="265" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="265" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">5</text> <line x1="62" y1="265" x2="68" y2="265" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="269" fill="#e2e8f0" font-size="10" text-anchor="end">-4</text> <line x1="62" y1="245" x2="68" y2="245" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="249" fill="#e2e8f0" font-size="10" text-anchor="end">-3</text> <line x1="62" y1="225" x2="68" y2="225" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="229" fill="#e2e8f0" font-size="10" text-anchor="end">-2</text> <line x1="62" y1="205" x2="68" y2="205" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="209" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="62" y1="165" x2="68" y2="165" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="169" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="62" y1="145" x2="68" y2="145" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="149" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="62" y1="125" x2="68" y2="125" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="129" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="62" y1="105" x2="68" y2="105" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="109" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="62" y1="85" x2="68" y2="85" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="89" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <line x1="62" y1="65" x2="68" y2="65" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="69" fill="#e2e8f0" font-size="10" text-anchor="end">6</text> <line x1="62" y1="45" x2="68" y2="45" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="49" fill="#e2e8f0" font-size="10" text-anchor="end">7</text> <line x1="62" y1="25" x2="68" y2="25" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="29" fill="#e2e8f0" font-size="10" text-anchor="end">8</text> <polyline points="40.1,2.4 41.1,6.0 42.1,9.6 43.1,13.2 44.1,16.7 45.1,20.2 46.1,23.7 47.1,27.2 48.1,30.7 49.1,34.1 50.1,37.5 51.1,40.8 52.1,44.2 53.1,47.5 54.1,50.8 55.1,54.1 56.1,57.3 57.1,60.5 58.1,63.7 59.1,66.9 60.1,70.1 61.1,73.2 62.1,76.3 63.1,79.3 64.1,82.4 65.1,85.4 66.1,88.4 67.1,91.4 68.1,94.3 69.1,97.2 70.2,100.1 71.2,103.0 72.2,105.8 73.2,108.6 74.2,111.4 75.2,114.2 76.2,117.0 77.2,119.7 78.2,122.4 79.2,125.0 80.2,127.7 81.2,130.3 82.2,132.9 83.2,135.4 84.2,138.0 85.2,140.5 86.2,143.0 87.2,145.5 88.2,147.9 89.2,150.3 90.2,152.7 91.2,155.1 92.2,157.4 93.2,159.7 94.2,162.0 95.2,164.3 96.2,166.5 97.2,168.7 98.2,170.9 99.2,173.1 100.3,175.2 101.3,177.3 102.3,179.4 103.3,181.5 104.3,183.5 105.3,185.5 106.3,187.5 107.3,189.5 108.3,191.4 109.3,193.3 110.3,195.2 111.3,197.1 112.3,198.9 113.3,200.7 114.3,202.5 115.3,204.3 116.3,206.0 117.3,207.7 118.3,209.4 119.3,211.1 120.3,212.7 121.3,214.3 122.3,215.9 123.3,217.5 124.3,219.0 125.3,220.5 126.3,222.0 127.3,223.4 128.3,224.9 129.3,226.3 130.4,227.7 131.4,229.0 132.4,230.4 133.4,231.7 134.4,233.0 135.4,234.2 136.4,235.4 137.4,236.6 138.4,237.8 139.4,239.0 140.4,240.1 141.4,241.2 142.4,242.3 143.4,243.4 144.4,244.4 145.4,245.4 146.4,246.4 147.4,247.3 148.4,248.3 149.4,249.2 150.4,250.1 151.4,250.9 152.4,251.7 153.4,252.5 154.4,253.3 155.4,254.1 156.4,254.8 157.4,255.5 158.4,256.2 159.4,256.8 160.5,257.5 161.5,258.1 162.5,258.6 163.5,259.2 164.5,259.7 165.5,260.2 166.5,260.7 167.5,261.2 168.5,261.6 169.5,262.0 170.5,262.4 171.5,262.7 172.5,263.0 173.5,263.3 174.5,263.6 175.5,263.9 176.5,264.1 177.5,264.3 178.5,264.5 179.5,264.6 180.5,264.7 181.5,264.8 182.5,264.9 183.5,265.0 184.5,265.0 185.5,265.0 186.5,265.0 187.5,264.9 188.5,264.8 189.5,264.7 190.6,264.6 191.6,264.5 192.6,264.3 193.6,264.1 194.6,263.9 195.6,263.6 196.6,263.3 197.6,263.0 198.6,262.7 199.6,262.3 200.6,262.0 201.6,261.6 202.6,261.1 203.6,260.7 204.6,260.2 205.6,259.7 206.6,259.2 207.6,258.6 208.6,258.0 209.6,257.4 210.6,256.8 211.6,256.1 212.6,255.5 213.6,254.8 214.6,254.0 215.6,253.3 216.6,252.5 217.6,251.7 218.6,250.8 219.6,250.0 220.7,249.1 221.7,248.2 222.7,247.3 223.7,246.3 224.7,245.3 225.7,244.3 226.7,243.3 227.7,242.2 228.7,241.2 229.7,240.0 230.7,238.9 231.7,237.8 232.7,236.6 233.7,235.4 234.7,234.1 235.7,232.9 236.7,231.6 237.7,230.3 238.7,228.9 239.7,227.6 240.7,226.2 241.7,224.8 242.7,223.3 243.7,221.9 244.7,220.4 245.7,218.9 246.7,217.4 247.7,215.8 248.7,214.2 249.7,212.6 250.8,211.0 251.8,209.3 252.8,207.6 253.8,205.9 254.8,204.2 255.8,202.4 256.8,200.6 257.8,198.8 258.8,197.0 259.8,195.1 260.8,193.2 261.8,191.3 262.8,189.4 263.8,187.4 264.8,185.4 265.8,183.4 266.8,181.3 267.8,179.3 268.8,177.2 269.8,175.1 270.8,172.9 271.8,170.8 272.8,168.6 273.8,166.4 274.8,164.1 275.8,161.9 276.8,159.6 277.8,157.3 278.8,154.9 279.8,152.5 280.9,150.2 281.9,147.7 282.9,145.3 283.9,142.8 284.9,140.3 285.9,137.8 286.9,135.3 287.9,132.7 288.9,130.1 289.9,127.5 290.9,124.9 291.9,122.2 292.9,119.5 293.9,116.8 294.9,114.0 295.9,111.3 296.9,108.5 297.9,105.6" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <circle cx="185.0" cy="265.0" r="6" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="193" y="269" fill="#cc4400" font-size="10" text-anchor="start">A(3; -4)</text> <text x="101" y="175" fill="#fbbf24" font-size="10" text-anchor="middle">B</text> <circle cx="105.0" cy="185.0" r="5" fill="#fbbf24" stroke="#111827" stroke-width="1.5"/> <line x1="185" y1="185" x2="185" y2="265" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/> <text x="150" y="286" fill="#e2e8f0" font-size="10" text-anchor="middle">h(x) = ?</text> </svg>`,
      instruction: `Jaky je predpis funkce h?`,
      choices: [
        {
          label: `\\(y = x^{2} - 6x + 5\\)`,
          value: "A",
          feedback: `Přístup povolen. Vrcholový tvar: \\((x-3)^2-4 = x^2-6x+9-4 = x^2-6x+5\\). Dosaď \\(B(1,0)\\): \\(1-6+5=0\\). Sedí.`
        },
        {
          label: `\\(y = x^{2} + 6x + 5\\)`,
          value: "B",
          feedback: `Kritická chyba. Vrcholový tvar \\((x+3)^2-4\\) má vrchol v \\(A(-3;\, -4)\\), ne \\(A(3;\, -4)\\).`
        },
        {
          label: `\\(y = - x^{2} + 6x - 5\\)`,
          value: "C",
          feedback: `Chyba. Záporná parabola má ramena dolů — z grafu vidíme, že parabola je kladná (ramena nahoru).`
        },
        {
          label: `\\(y = x^{2} - 6x + 13\\)`,
          value: "D",
          feedback: `Chyba. Vrcholový tvar \\((x-3)^2+4\\) má vrchol v \\(A(3;\, 4)\\), ne \\(A(3;\, -4)\\). Konstanta je špatná.`
        },
      ],
      correctAnswer: "A", reward: { xp: 15 },
      hints: [
        `Vrcholový tvar paraboly: \\(y = a(x - x_v)^2 + y_v\\). Dosaď souřadnice vrcholu.`,
        `Parametr \\(a\\) určíš dosazením bodu, kterým parabola prochází. Co z toho vyjde?`
      ]
    },
    {
      id: "t_funk_08", regionId: "funkce", type: "closed", monsterName: `SIM_05H: Koeficient a z bodu paraboly`,
      isTraining: true, firewallId: "q_funk_08", visual_color: "#2ecc8a", visual_symbol: `V+B`, points: 0,
      question: `Parabola ma vrchol \\(V(2;\\mspace{6mu} - 1)\\) a prochazi bodem \\((0;\\mspace{6mu} 3)\\). Predpis: \\(y = a(x - 2)^{2} - 1\\).`,
      instruction: `Urcete koeficient a dosazenim bodu (0; 3).`,
      steps: [
        {
          trigger: `> Krok 1: Dosadte bod (0; 3)`,
          content: `Dosaď bod \\((0; 3)\\) do vrcholového tvaru \\(y = a(x-2)^2 - 1\\) a sestav rovnici pro \\(a\\).`
        },
        {
          trigger: `> Krok 2: Resen rovnice`,
          content: `Vyřeš rovnici pro \\(a\\). Jaká je výsledná hodnota?`
        },
      ],
      choices: [
        {
          label: `\\(a = - 1\\)`,
          value: "A",
          feedback: `Chyba. Dosaď: \\(3 = (-1)(4) - 1 = -5 \\neq 3\\). Záporná parabola by měla ramena dolů, ne nahoru.`
        },
        {
          label: `\\(a = 2\\)`,
          value: "B",
          feedback: `Chyba. Dosaď: \\(3 = 2(4) - 1 = 7 \\neq 3\\).`
        },
        {
          label: `\\(a = 1\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(3 = 1 \\cdot (0-2)^2 - 1 = 4 - 1 = 3\\). Správně.`
        },
        {
          label: `\\(a = 4\\)`,
          value: "D",
          feedback: `Chyba. Dosaď: \\(3 = 4(4) - 1 = 15 \\neq 3\\).`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" style="width:100%;max-width:280px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="0" y1="0" x2="0" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="40" y1="0" x2="40" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="80" y1="0" x2="80" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="120" y1="0" x2="120" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="160" y1="0" x2="160" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="200" y1="0" x2="200" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="240" y1="0" x2="240" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="280" y1="0" x2="280" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="216" x2="280" y2="216" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="188" x2="280" y2="188" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="160" x2="280" y2="160" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="132" x2="280" y2="132" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="104" x2="280" y2="104" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="76" x2="280" y2="76" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="48" x2="280" y2="48" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="20" x2="280" y2="20" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="160" x2="280" y2="160" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="280,160 273,156 273,164" fill="#e2e8f0"/> <text x="275" y="152" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="80" y1="220" x2="80" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="80,0 76,10 84,10" fill="#e2e8f0"/> <text x="86" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="66" y="174" fill="#e2e8f0" font-size="11">O</text> <line x1="40" y1="157" x2="40" y2="163" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="120" y1="157" x2="120" y2="163" stroke="#e2e8f0" stroke-width="1"/> <text x="120" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="160" y1="157" x2="160" y2="163" stroke="#e2e8f0" stroke-width="1"/> <text x="160" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="200" y1="157" x2="200" y2="163" stroke="#e2e8f0" stroke-width="1"/> <text x="200" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="240" y1="157" x2="240" y2="163" stroke="#e2e8f0" stroke-width="1"/> <text x="240" y="175" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="77" y1="188" x2="83" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="192" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="77" y1="132" x2="83" y2="132" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="136" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="77" y1="104" x2="83" y2="104" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="108" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="77" y1="76" x2="83" y2="76" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="80" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="77" y1="48" x2="83" y2="48" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="52" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="77" y1="20" x2="83" y2="20" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="24" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <polyline points="57.6,4.5 58.6,8.2 59.7,11.9 60.7,15.5 61.8,19.1 62.8,22.7 63.9,26.2 64.9,29.7 65.9,33.2 67.0,36.6 68.0,40.0 69.1,43.3 70.1,46.6 71.2,49.9 72.2,53.1 73.3,56.3 74.3,59.5 75.3,62.6 76.4,65.7 77.4,68.7 78.5,71.7 79.5,74.6 80.6,77.6 81.6,80.5 82.7,83.3 83.7,86.1 84.7,88.9 85.8,91.6 86.8,94.3 87.9,97.0 88.9,99.6 90.0,102.2 91.0,104.7 92.0,107.2 93.1,109.7 94.1,112.1 95.2,114.5 96.2,116.8 97.3,119.1 98.3,121.4 99.4,123.6 100.4,125.8 101.4,128.0 102.5,130.1 103.5,132.2 104.6,134.2 105.6,136.3 106.7,138.2 107.7,140.2 108.8,142.0 109.8,143.9 110.8,145.7 111.9,147.5 112.9,149.2 114.0,150.9 115.0,152.6 116.1,154.2 117.1,155.8 118.2,157.4 119.2,158.9 120.2,160.3 121.3,161.8 122.3,163.2 123.4,164.5 124.4,165.8 125.5,167.1 126.5,168.4 127.6,169.6 128.6,170.7 129.6,171.9 130.7,173.0 131.7,174.0 132.8,175.0 133.8,176.0 134.9,176.9 135.9,177.8 136.9,178.7 138.0,179.5 139.0,180.3 140.1,181.1 141.1,181.8 142.2,182.4 143.2,183.1 144.3,183.7 145.3,184.2 146.3,184.7 147.4,185.2 148.4,185.7 149.5,186.1 150.5,186.4 151.6,186.8 152.6,187.0 153.7,187.3 154.7,187.5 155.7,187.7 156.8,187.8 157.8,187.9 158.9,188.0 159.9,188.0 161.0,188.0 162.0,187.9 163.1,187.8 164.1,187.7 165.1,187.5 166.2,187.3 167.2,187.1 168.3,186.8 169.3,186.5 170.4,186.1 171.4,185.7 172.4,185.3 173.5,184.8 174.5,184.3 175.6,183.8 176.6,183.2 177.7,182.5 178.7,181.9 179.8,181.2 180.8,180.4 181.8,179.6 182.9,178.8 183.9,178.0 185.0,177.1 186.0,176.1 187.1,175.2 188.1,174.2 189.2,173.1 190.2,172.0 191.2,170.9 192.3,169.8 193.3,168.6 194.4,167.3 195.4,166.0 196.5,164.7 197.5,163.4 198.6,162.0 199.6,160.6 200.6,159.1 201.7,157.6 202.7,156.0 203.8,154.5 204.8,152.8 205.9,151.2 206.9,149.5 208.0,147.8 209.0,146.0 210.0,144.2 211.1,142.3 212.1,140.4 213.2,138.5 214.2,136.6 215.3,134.6 216.3,132.5 217.3,130.4 218.4,128.3 219.4,126.2 220.5,124.0 221.5,121.8 222.6,119.5 223.6,117.2 224.7,114.8 225.7,112.5 226.7,110.0 227.8,107.6 228.8,105.1 229.9,102.5 230.9,100.0 232.0,97.4 233.0,94.7 234.1,92.0 235.1,89.3 236.1,86.5 237.2,83.7 238.2,80.9 239.3,78.0 240.3,75.1 241.4,72.1 242.4,69.2 243.5,66.1 244.5,63.1 245.5,59.9 246.6,56.8 247.6,53.6 248.7,50.4 249.7,47.1 250.8,43.8 251.8,40.5 252.9,37.1 253.9,33.7 254.9,30.3 256.0,26.8 257.0,23.2 258.1,19.7 259.1,16.1 260.2,12.4 261.2,8.8 262.2,5.0" fill="none" stroke="#2ecc8a" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <circle cx="160.0" cy="188.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="170" y="192" fill="#cc4400" font-size="9" text-anchor="start">V(2; -1)</text> <circle cx="80.0" cy="76.0" r="4" fill="#fbbf24" stroke="#111827" stroke-width="1.5"/> <text x="88" y="70" fill="#fbbf24" font-size="9" text-anchor="start">(0; 3)</text> <text x="140" y="216" fill="#e2e8f0" font-size="10" text-anchor="middle">y = ?</text> </svg>`,
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_funk_09", regionId: "funkce", type: "closed", monsterName: `FW_05I: Nepravdive tvrzeni o parabole`,
      visual_color: "#4fc3f7", visual_symbol: `A/N`, points: 3, trainingTasks: ["t_funk_09"],
      question: `Je dana funkce \\(f:y = 4 - x^{2}\\) pro \\(x \\in \\mathbb{R}\\).`,
      instruction: `Ktere z nasledujicich tvrzeni o funkci f je NEPRAVDIVE?`,
      choices: [
        {
          label: `Vrchol paraboly je \\(V(0;\\mspace{6mu} 4)\\).`,
          value: "A",
          feedback: `Toto tvrzení je pravdivé: \\(y = 4-x^2 = -(x-0)^2+4\\), vrchol \\(V(0;4)\\). Hledáme nepravdivé.`
        },
        {
          label: `\\(f(2) = 0\\)`,
          value: "B",
          feedback: `Toto tvrzení je pravdivé: \\(f(2) = 4-4 = 0\\). Hledáme nepravdivé.`
        },
        {
          label: `Funkce \\(f\\) je rostoucí v intervalu \\(( - \\infty;\\mspace{6mu} 0)\\).`,
          value: "C",
          feedback: `Toto tvrzení je pravdivé: záporná parabola roste na \\((-\\infty;\, 0)\\) a klesá na \\((0;\, +\\infty)\\). Hledáme nepravdivé.`
        },
        {
          label: `Obor hodnot funkce \\(f\\) je \\(H_{f} = (4;\\mspace{6mu} + \\infty)\\).`,
          value: "D",
          feedback: `Přístup povolen — toto je nepravdivé. Záporná parabola má MAXIMUM ve vrcholu \\(y=4\\), takže \\(H_f = (-\\infty;\, 4\\rangle\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 15 },
      hints: [
        `Záporná parabola má maximum, ne minimum — kde leží a co to říká o oboru hodnot?`,
        `Obor hodnot sahá od \\(-\\infty\\) do maxima paraboly. Dosahuje parabola vrcholu, nebo se k němu jen blíží? Od toho závisí, zda interval bude otevřený nebo uzavřený.`
      ]
    },
    {
      id: "t_funk_09", regionId: "funkce", type: "closed", monsterName: `SIM_05I: Obor hodnot zaporne paraboly`,
      isTraining: true, firewallId: "q_funk_09", visual_color: "#2ecc8a", visual_symbol: `A/N`, points: 0,
      question: `Funkce \\(f:y = 9 - x^{2}\\) je zaporna parabola s vrcholem \\(V(0;\\mspace{6mu} 9)\\).`,
      instruction: `Jaky je obor hodnot funkce f?`,
      steps: [
        {
          trigger: `> Krok 1: Typ paraboly`,
          content: `Koeficient u \\(x^2\\) je \\(-1 < 0\\) → záporná parabola má <b>maximum</b> ve vrcholu. Ramena jdou dolů.`
        },
        {
          trigger: `> Krok 2: Obor hodnot`,
          content: `Dosaď \\(x_v = 0\\) do funkce: \\(f(0) = ?\\). To je maximum. Je tato hodnota skutečně dosažena, nebo jen limitou? Zapiš obor hodnot.`
        },
      ],
      choices: [
        {
          label: `\\(H_{f} = ( - \\infty;\\mspace{6mu} 9)\\)`,
          value: "A",
          feedback: `Skoro správně, ale interval je otevřený. Hodnota \\(9\\) je dosažena ve vrcholu \\(V(0;9)\\), takže \\(9\\) do \\(H_f\\) PATŘÍ.`
        },
        {
          label: `\\(H_{f} = (9;\\mspace{6mu} + \\infty)\\)`,
          value: "B",
          feedback: `Kritická chyba. Záporná parabola má MAXIMUM, ne minimum. Hodnoty jdou od \\(9\\) dolů, ne nahoru.`
        },
        {
          label: `\\(H_{f} = ( - \\infty;\\mspace{6mu} 9\\rangle\\)`,
          value: "C",
          feedback: `Přístup povolen. Maximum \\(9\\) je dosaženo, interval je uzavřený zprava.`
        },
        {
          label: `\\(H_{f} = \\langle - 9;\\mspace{6mu} 9\\rangle\\)`,
          value: "D",
          feedback: `Chyba. Funkce nemá zdola omezený obor hodnot — záporná parabola klesá do \\(-\\infty\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_funk_10", regionId: "funkce", type: "closed", monsterName: `FW_05J: Obor hodnot exponencialni funkce`,
      visual_color: "#4fc3f7", visual_symbol: `a^x`, points: 3, trainingTasks: ["t_funk_10"],
      question: `Funkce \\(f:y = \\left( \\frac{3}{2} \\right)^{x}\\) je definována pro všechna \\(x \\in \\mathbb{R}\\).`,
      instruction: `Ze souboru \\(\\left\\{\\,\\dfrac{2}{3};\\quad 0;\\quad \\dfrac{3}{2};\\quad \\dfrac{4}{9};\\quad \\dfrac{9}{4}\\,\\right\\}\\) vyberte číslo, které NEPATŘÍ do oboru hodnot funkce \\(f\\).`,
      choices: [
        {
          label: `\\(\\dfrac{2}{3}\\)`,
          value: "A",
          feedback: `Toto číslo PATŘÍ do \\(H_f\\): pro \\(x = -1\\) platí \\(\\left(\\tfrac{3}{2}\\right)^{-1} = \\tfrac{2}{3}\\). Exponenciální funkce může mít hodnoty mezi 0 a 1 (pro záporná \\(x\\)).`
        },
        {
          label: `\\(0\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(\\left(\\tfrac{3}{2}\\right)^x > 0\\) pro všechna \\(x \\in \\mathbb{R}\\). Hodnota \\(0\\) je pouze limitou pro \\(x \\to -\\infty\\), nikdy ji funkce nedosáhne.`
        },
        {
          label: `\\(\\frac{9}{4}\\)`,
          value: "C",
          feedback: `Toto číslo PATŘÍ do \\(H_f\\): \\(\\left(\\tfrac{3}{2}\\right)^2 = \\tfrac{9}{4}\\). Hledáme číslo, které nepatří.`
        },
        {
          label: `\\(\\frac{3}{2}\\)`,
          value: "D",
          feedback: `Toto číslo PATŘÍ do \\(H_f\\): \\(\\left(\\tfrac{3}{2}\\right)^1 = \\tfrac{3}{2}\\). Hledáme číslo, které nepatří.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 },
      hints: [
        `Exponenciální funkce \\(\\left(\\tfrac{3}{2}\\right)^x > 0\\) pro všechna \\(x \\in \\mathbb{R}\\). Záporná čísla a nula nemohou být hodnotami.`,
        `Exponenciální funkce \\(a^x\\) pro \\(a > 0,\\, a \\neq 1\\) je vždy kladná. Co to říká o číslech, která do oboru hodnot nepatří?`
      ]
    },
    {
      id: "t_funk_10", regionId: "funkce", type: "closed", monsterName: `SIM_05J: Pati 0 do oboru hodnot (3/2)^x?`,
      isTraining: true, firewallId: "q_funk_10", visual_color: "#2ecc8a", visual_symbol: `a^x`, points: 0,
      question: `Funkce \\(f:y = \\left( \\frac{3}{2} \\right)^{x}\\) je definovana pro vsechna \\(x \\in \\mathbb{R}\\).`,
      instruction: `Pati cislo 0 do oboru hodnot funkce f?`,
      steps: [
        {
          trigger: `> Krok 1: Obor hodnot`,
          content: `\\(\\left(\\tfrac{3}{2}\\right)^x > 0\\) pro všechna \\(x \\in \\mathbb{R}\\). Exponenciální funkce je vždy kladná — nikdy nemůže být nulová ani záporná.`
        },
        {
          trigger: `> Krok 2: Co se deje pro x → -∞?`,
          content: `Pro \\(x \\to -\\infty\\) se \\(\\left(\\tfrac{3}{2}\\right)^x\\) blíží k 0. Dosahuje funkce hodnoty 0 v nějakém konkrétním bodě, nebo se k ní jen blíží?`
        },
      ],
      choices: [
        {
          label: `Ano, pro \\(x = 0\\) je \\(f(0) = 0\\).`,
          value: "A",
          feedback: `Kritická chyba. \\(f(0) = \\left(\\tfrac{3}{2}\\right)^0 = 1\\), ne \\(0\\). Každé číslo na nultou je \\(1\\).`
        },
        {
          label: `Ne, \\(\\left( \\frac{3}{2} \\right)^{x} > 0\\) vzdy, hodnota 0 neni dosazena.`,
          value: "B",
          feedback: `Přístup povolen. Exponenciální funkce je vždy kladná. \\(0\\) je pouze limita pro \\(x \\to -\\infty\\).`
        },
        {
          label: `Ano, pro \\(x \\rightarrow - \\infty\\) funkce konverguje k 0.`,
          value: "C",
          feedback: `Chyba. Konvergovat k \\(0\\) neznamená dosáhnout \\(0\\). Limita \\(\\neq\\) hodnota funkce.`
        },
        {
          label: `Zalezi na definicnim oboru.`,
          value: "D",
          feedback: `Chyba. \\(D_f = \\mathbb{R}\\) je zadán. Na tomto \\(D_f\\) platí \\(\\left(\\tfrac{3}{2}\\right)^x > 0\\) vždy.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_funk_11", regionId: "funkce", type: "closed", monsterName: `FW_05K: Rozpoznani sude funkce`,
      visual_color: "#4fc3f7", visual_symbol: `f(-x)`, points: 3, trainingTasks: ["t_funk_11"],
      question: `Jsou dany ctyri funkce s definicnim oborem \\(\\mathbb{R}\\).`,
      instruction: `Která z následujících funkcí je sudá?`,
      choices: [
        {
          label: `\\(f:y = x - 3\\)`,
          value: "A",
          feedback: `Kritická chyba. \\(f(-x) = -x-3 \\neq x-3 = f(x)\\). Tato funkce není sudá ani lichá (je to posunutá lichá funkce).`
        },
        {
          label: `\\(f:y = x^{2} - 2x\\)`,
          value: "B",
          feedback: `Chyba. \\(f(-x) = x^2+2x\\), zatímco \\(f(x) = x^2-2x\\). Platí \\(f(-x) \\neq f(x)\\), takže funkce není sudá.`
        },
        {
          label: `\\(f:y = x^{2} - 4\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(f(-x) = (-x)^2-4 = x^2-4 = f(x)\\). Funkce je sudá, graf souměrný podle osy \\(y\\).`
        },
        {
          label: `\\(f:y = \\frac{2}{x}\\)`,
          value: "D",
          feedback: `Chyba. \\(f(-x) = \\tfrac{2}{-x} = -\\tfrac{2}{x} = -f(x)\\). Tato funkce je LICHÁ (souměrnost podle počátku), ne sudá.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 },
      hints: [
        `Funkce \\(f\\) je sudá, pokud \\(f(-x) = f(x)\\) pro všechna \\(x \\in D_f\\).`,
        `Prověř každý předpis: dosaď \\(-x\\) za \\(x\\) a porovnej s \\(f(x)\\). U sudé funkce se nic nezmění.`
      ]
    },
    {
      id: "t_funk_11", regionId: "funkce", type: "closed", monsterName: `SIM_05K: Je f(x) = x^2 + 3 suda?`,
      isTraining: true, firewallId: "q_funk_11", visual_color: "#2ecc8a", visual_symbol: `f(-x)`, points: 0,
      question: `Funkce \\(f:y = x^{2} + 3\\) definovana pro vsechna \\(x \\in \\mathbb{R}\\).`,
      instruction: `Je tato funkce suda? Vypocti f(-x) a porovnej s f(x).`,
      steps: [
        {
          trigger: `> Krok 1: Vypocti f(-x)`,
          content: `Dosaď \\(-x\\) místo \\(x\\) do předpisu. Co vyjde?`
        },
        {
          trigger: `> Krok 2: Porovnej s f(x)`,
          content: `Porovnej \\(f(-x)\\) s \\(f(x)\\). Jsou výrazy totožné? Pokud \\(f(-x) = f(x)\\) pro všechna \\(x\\), jaká je funkce?`
        },
      ],
      choices: [
        {
          label: `Ne, \\(f( - x) = - x^{2} - 3 \\neq f(x)\\).`,
          value: "A",
          feedback: `Chyba. \\((-x)^2 = +x^2\\), ne \\(-x^2\\). Umocnění eliminuje minus.`
        },
        {
          label: `Ano, \\(f( - x) = x^{2} + 3 = f(x)\\) pro vsechna \\(x \\in \\mathbb{R}\\).`,
          value: "B",
          feedback: `Přístup povolen. \\((-x)^2 = x^2\\), takže \\(f(-x) = f(x)\\). Sudá funkce.`
        },
        {
          label: `Ne, suda je jen \\(y = x^{2}\\), ne \\(y = x^{2} + 3\\).`,
          value: "C",
          feedback: `Chyba. Přičítání konstanty souměrnosti neruší. \\(f(-x) = x^2 + 3 = f(x)\\).`
        },
        {
          label: `Ano, ale jen pro \\(x \\geq 0\\).`,
          value: "D",
          feedback: `Chyba. Sudost musí platit pro VŠECHNA \\(x \\in D_f\\), ne jen kladná.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },


    {
      id: "q_funk_12", regionId: "funkce", type: "closed", monsterName: `FW_05L: Analyza linearnich funkci`,
      visual_color: "#4fc3f7", visual_symbol: `f(x)`, points: 2, trainingTasks: ["t_funk_12"],
      question: `Jsou dány funkce \\(f\\), \\(g\\) s definičním oborem \\(\\mathbb{R}\\).`,
      formula: `$$f\\colon\\ y = -2 - x \\qquad g\\colon\\ y = x - 2$$`,
      diagram: null,
      instruction: `Které z následujících tvrzení je pravdivé?`,
      choices: [
        {
          label: `\\(f(1) > g(1)\\)`,
          value: "A",
          feedback: `Chyba. \\(f(1) = -2-1 = -3\\), \\(g(1) = 1-2 = -1\\). Platí \\(-3 < -1\\), tedy \\(f(1) < g(1)\\).`
        },
        {
          label: `Funkce \\(f\\) je rostoucí.`,
          value: "B",
          feedback: `Chyba. Směrnice funkce \\(f\\) je \\(-1 < 0\\) — funkce klesá, není rostoucí.`
        },
        {
          label: `Funkce \\(g\\) je konstantní.`,
          value: "C",
          feedback: `Chyba. Funkce \\(g: y = x - 2\\) má směrnici \\(1 \\neq 0\\) — není konstantní, je rostoucí.`
        },
        {
          label: `Grafy funkcí \\(f\\) a \\(g\\) mají společný bod \\(P(0;\\mspace{6mu} -2)\\).`,
          value: "D",
          feedback: `Přístup povolen. \\(f(0) = -2-0 = -2\\), \\(g(0) = 0-2 = -2\\). Obě funkce procházejí bodem \\(P(0;\\,-2)\\). ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 10 },
      hints: [
        `Dosaď konkrétní hodnoty \\(x\\) do obou předpisů a porovnej výsledky. Směrnice (koeficient u \\(x\\)) určuje, zda funkce roste nebo klesá.`,
        `Společný bod nastane, když \\(f(x_0) = g(x_0)\\). Jak takový bod najdeš?`
      ]
    },
    {
      id: "t_funk_12", regionId: "funkce", type: "closed", monsterName: `SIM_05L: Prusecik dvou primek`,
      isTraining: true, firewallId: "q_funk_12", visual_color: "#2ecc8a", visual_symbol: `f(x)`, points: 0,
      question: `Funkce \\(f: y = x + 1\\) a \\(g: y = 3 - x\\). Nalezněte jejich společný bod (průsečík grafů).`,
      instruction: `Vyberte správný průsečík.`,
      steps: [
        {
          trigger: `> Krok 1: Sestav rovnici`,
          content: `Společný bod nastane, když \\(f(x) = g(x)\\). Napiš rovnici a vyřeš ji.`
        },
        {
          trigger: `> Krok 2: Vyres a dosaď`,
          content: `Máš hodnotu \\(x\\). Dosaď do jednoho z předpisů a zjisti \\(y\\).`
        },
      ],
      choices: [
        {
          label: `\\(P(2;\\mspace{6mu} 1)\\)`,
          value: "A",
          feedback: `Chyba. \\(f(2) = 3\\), ne \\(1\\). Dosaď \\(x=1\\) místo \\(x=2\\).`
        },
        {
          label: `\\(P(1;\\mspace{6mu} 2)\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(x+1=3-x \\Rightarrow 2x=2 \\Rightarrow x=1\\), \\(y = 1+1 = 2\\). Bod \\(P(1;\\,2)\\). ✓`
        },
        {
          label: `\\(P(0;\\mspace{6mu} 3)\\)`,
          value: "C",
          feedback: `Chyba. \\(f(0)=1 \\neq g(0)=3\\). Bod \\((0;3)\\) leží jen na grafu \\(g\\).`
        },
        {
          label: `\\(P(-1;\\mspace{6mu} 0)\\)`,
          value: "D",
          feedback: `Chyba. \\(f(-1)=0\\), ale \\(g(-1)=4\\). Hodnoty se neshodují.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },

    // ==========================================
    // GONIOMETRIE — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_gon_01", regionId: "goniometrie", type: "closed", monsterName: `FW_10A: Cotangens ze sinu`,
      visual_color: "#e040fb", visual_symbol: `cotg`, points: 2, trainingTasks: ["t_gon_01"],
      question: `Pro \\(x \\in (\\pi;\\, \\tfrac{3\\pi}{2})\\) platí:`,
      formula: `$$\\text{sin}x = - \\frac{\\sqrt{3}}{2}$$`,
      instruction: `Vyberte správnou hodnotu cotg x.`,
      choices: [
        {
          label: `\\(\\sqrt{3}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Výsledek odpovídá \\(\\operatorname{tg} x\\), ne cotangensu.`
        },
        {
          label: `\\(- \\frac{\\sqrt{3}}{3}\\)`,
          value: "B",
          feedback: `Chyba znaménka. Ve 3. kvadrantu mají \\(\\sin x\\) i \\(\\cos x\\) stejné znaménko — jejich podíl vychází kladný.`
        },
        {
          label: `\\(\\frac{\\sqrt{3}}{3}\\)`,
          value: "C",
          feedback: `Přístup povolen. Obě souřadnice ve 3. kvadrantu záporné → podíl kladný. ✓`
        },
        {
          label: `hodnota neexistuje`,
          value: "D",
          feedback: `Chyba. \\(\\operatorname{cotg} x\\) neexistuje jen pro \\(\\sin x = 0\\). Zde \\(\\sin x = -\\tfrac{\\sqrt{3}}{2} \\neq 0\\).`
        },
      ],
      hints: [
        `Jaká je definice cotangensu pomocí sinu a kosinu? Na jednotkové kružnici odpovídají \\(\\sin x\\) a \\(\\cos x\\) konkrétním souřadnicím bodu — určete je pro bod ve 3. kvadrantu.`,
        `Obě souřadnice bodu ve 3. kvadrantu mají stejné znaménko. Co to říká o znaménku jejich podílu?`,
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_gon_01", regionId: "goniometrie", type: "closed", monsterName: `SIM_10A: Znaménka ve 3. kvadrantu`,
      isTraining: true, firewallId: "q_gon_01", visual_color: "#2ecc8a", visual_symbol: `cotg`, points: 0,
      question: `Číslo \\(x\\) leží ve 3. kvadrantu: \\(x \\in (\\pi;\\, \\tfrac{3\\pi}{2})\\). Jaká jsou znaménka \\(\\sin x\\) a \\(\\cos x\\)?`,
      formula: `$$x \\in \\left( \\pi;\\mspace{6mu}\\frac{3\\pi}{2} \\right)$$`,
      instruction: `Vyberte správnou kombinaci znamének.`,
      steps: [
        {
          trigger: `> Krok 1: Jednotková kružnice`,
          content: `Na jednotkové kružnici je \\(\\cos x\\) x-souřadnice a \\(\\sin x\\) y-souřadnice bodu. Pravá polokružnice: \\(\\cos > 0\\). Levá: \\(\\cos < 0\\). Horní: \\(\\sin > 0\\). Dolní: \\(\\sin < 0\\).`
        },
        {
          trigger: `> Krok 2: Lokalizace ve 3. kvadrantu`,
          content: `3. kvadrant = bod <b>vlevo dole</b> na kružnici. Určete znaménka obou souřadnic pro tuto polohu.`
        },
      ],
      choices: [
        {
          label: `\\(\\text{sin}x > 0,\\mspace{6mu}\\text{cos}x < 0\\)`,
          value: "A",
          feedback: `Chyba. \\(\\sin x > 0,\\; \\cos x < 0\\) odpovídá 2. kvadrantu.`
        },
        {
          label: `\\(\\text{sin}x > 0,\\mspace{6mu}\\text{cos}x > 0\\)`,
          value: "B",
          feedback: `Chyba. \\(\\sin x > 0,\\; \\cos x > 0\\) odpovídá 1. kvadrantu.`
        },
        {
          label: `\\(\\text{sin}x < 0,\\mspace{6mu}\\text{cos}x < 0\\)`,
          value: "C",
          feedback: `Logika potvrzena. Obě záporné ve 3. kvadrantu: \\(\\sin x < 0,\\; \\cos x < 0\\). ✓`
        },
        {
          label: `\\(\\text{sin}x < 0,\\mspace{6mu}\\text{cos}x > 0\\)`,
          value: "D",
          feedback: `Chyba. \\(\\sin x < 0,\\; \\cos x > 0\\) odpovídá 4. kvadrantu.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_gon_02", regionId: "goniometrie", type: "closed", monsterName: `FW_10B: Rovnice cotangens`,
      visual_color: "#e040fb", visual_symbol: `cotg`, points: 2, trainingTasks: ["t_gon_02"],
      question: `V intervalu \\((0;\\, 2\\pi)\\) je řešena rovnice:`,
      formula: `$$\\frac{1}{\\operatorname{tg}x} - \\sqrt{3} = 0$$`,
      instruction: `Která z množin obsahuje všechna řešení dané rovnice?`,
      choices: [
        {
          label: `\\(\\left\\{ \\frac{\\pi}{6};\\,\\frac{7\\pi}{6} \\right\\}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\operatorname{cotg} x = \\sqrt{3}\\) → \\(\\operatorname{tg} x = \\tfrac{1}{\\sqrt{3}}\\). Ref. úhel \\(\\tfrac{\\pi}{6}\\), 1. a 3. kvadrant. ✓`
        },
        {
          label: `\\(\\left\\{ \\frac{\\pi}{3};\\,\\frac{4\\pi}{3} \\right\\}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Záměna \\(\\operatorname{tg} x\\) a \\(\\operatorname{cotg} x\\) — jsou to převrácené hodnoty, ne totéž.`
        },
        {
          label: `\\(\\left\\{ \\frac{5\\pi}{6};\\,\\frac{11\\pi}{6} \\right\\}\\)`,
          value: "C",
          feedback: `Chyba znaménka. \\(\\sqrt{3}\\) je kladné — cotangens je kladný ve stejných kvadrantech jako tangens.`
        },
        {
          label: `\\(\\left\\{ \\frac{\\pi}{6} \\right\\}\\)`,
          value: "D",
          feedback: `Nekompletní. Perioda \\(\\operatorname{tg} x\\) je \\(\\pi\\) — v intervalu \\((0;\\, 2\\pi)\\) jsou vždy dvě řešení.`
        },
      ],
      hints: [
        `Jaký vztah platí mezi \\(\\operatorname{cotg} x\\) a \\(\\operatorname{tg} x\\)? V jakých kvadrantech je cotangens kladný?`,
        `Jaká je perioda \\(\\operatorname{tg} x\\) a kolik řešení to dává v intervalu \\((0;\\, 2\\pi)\\)?`,
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_gon_02", regionId: "goniometrie", type: "closed", monsterName: `SIM_10B: Referenční úhel pro cotg`,
      isTraining: true, firewallId: "q_gon_02", visual_color: "#2ecc8a", visual_symbol: `cotg`, points: 0,
      question: `Jaký je referenční (ostrý) úhel pro rovnici \\(\\operatorname{cotg} x = \\sqrt{3}\\)?`,
      formula: `$$\\operatorname{cotg}x = \\sqrt{3}$$`,
      instruction: `Vyberte správný referenční úhel.`,
      steps: [
        {
          trigger: `> Krok 1: Přepis na tg`,
          content: `\\(\\operatorname{cotg} x = \\sqrt{3}\\) znamená \\(\\operatorname{tg} x = \\tfrac{1}{\\sqrt{3}}\\). Ptáme se: jaký ostrý úhel \\(\\alpha\\) splňuje \\(\\operatorname{tg}\\alpha = \\tfrac{1}{\\sqrt{3}}\\)?`
        },
        {
          trigger: `> Krok 2: Základní hodnoty tg`,
          content: `Vzpomeňte si na základní hodnoty \\(\\operatorname{tg}\\) pro ostrý úhel \\(\\tfrac{\\pi}{6}\\), \\(\\tfrac{\\pi}{4}\\) a \\(\\tfrac{\\pi}{3}\\). Která z nich odpovídá hodnotě \\(\\tfrac{1}{\\sqrt{3}}\\)?`
        },
      ],
      choices: [
        {
          label: `\\(\\frac{\\pi}{6}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\operatorname{tg}(\\tfrac{\\pi}{6}) = \\tfrac{1}{\\sqrt{3}}\\). ✓`
        },
        {
          label: `\\(\\frac{\\pi}{3}\\)`,
          value: "B",
          feedback: `Chyba. \\(\\operatorname{tg}(\\tfrac{\\pi}{3}) = \\sqrt{3}\\) — to by byl referenční úhel pro \\(\\operatorname{cotg} x = \\tfrac{1}{\\sqrt{3}}\\), ne \\(\\sqrt{3}\\).`
        },
        {
          label: `\\(\\frac{\\pi}{4}\\)`,
          value: "C",
          feedback: `Chyba. \\(\\operatorname{tg}(\\tfrac{\\pi}{4}) = 1 \\neq \\tfrac{1}{\\sqrt{3}}\\).`
        },
        {
          label: `\\(\\frac{\\pi}{2}\\)`,
          value: "D",
          feedback: `Chyba. \\(\\operatorname{tg}(\\tfrac{\\pi}{2})\\) neexistuje.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_gon_03", regionId: "goniometrie", type: "closed", monsterName: `FW_10C: Tangens rovnice`,
      visual_color: "#e040fb", visual_symbol: `tg`, points: 3, trainingTasks: ["t_gon_03"],
      question: `V intervalu \\((0°;\\, 360°)\\) řešte rovnici:`,
      formula: `$$\\sqrt{3} \\cdot \\text{sin}x - \\text{cos}x = 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(\\{ 30{^\\circ};\\mspace{6mu} 210{^\\circ}\\}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\tan x = \\tfrac{1}{\\sqrt{3}} = \\tfrac{\\sqrt{3}}{3}\\), základní úhel \\(30°\\), perioda \\(180°\\). ✓`
        },
        {
          label: `\\(\\{ 60{^\\circ};\\mspace{6mu} 240{^\\circ}\\}\\)`,
          value: "B",
          feedback: `Chyba. Záměna: \\(\\tan 60° = \\sqrt{3}\\), ale rovnice dává \\(\\tan x = \\tfrac{1}{\\sqrt{3}}\\). Přehodil(a) jsi koeficienty.`
        },
        {
          label: `\\(\\{ 30{^\\circ}\\}\\)`,
          value: "C",
          feedback: `Kritická chyba. Tangens má periodu \\(180°\\) — v \\((0°;\\, 360°)\\) jsou vždy dvě řešení.`
        },
        {
          label: `\\(\\{ 150{^\\circ};\\mspace{6mu} 330{^\\circ}\\}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. \\(\\tan 150° = -\\tfrac{\\sqrt{3}}{3} \\neq \\tfrac{1}{\\sqrt{3}}\\). Špatný kvadrant.`
        },
      ],
      hints: [
        `Na jednotkové kružnici je \\(\\operatorname{tg} x\\) poměr y-souřadnice k x-souřadnici bodu. V jakých kvadrantech leží body, kde je tento poměr roven \\(\\tfrac{1}{\\sqrt{3}}\\)?`,
        `Jaká je perioda tangensu a kolik řešení to dává v intervalu \\((0°;\\, 360°)\\)?`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_gon_03", regionId: "goniometrie", type: "closed", monsterName: `SIM_10C: Počet řešení tangens`,
      isTraining: true, firewallId: "q_gon_03", visual_color: "#2ecc8a", visual_symbol: `tg`, points: 0,
      question: `Kolik řešení má rovnice \\(\\operatorname{tg} x = k\\) (\\(k \\in \\mathbb{R}\\) libovolné) v intervalu \\((0°;\\, 360°)\\)?`,
      formula: `$$\\text{tg}x = k,\\quad k \\in \\mathbb{R}$$`,
      instruction: `Vyberte správný počet.`,
      steps: [
        {
          trigger: `> Krok 1: Tg jako sklon na kružnici`,
          content: `Na jednotkové kružnici je \\(\\operatorname{tg} x = \\tfrac{y}{x}\\) — sklon přímky vedené z počátku k bodu. Každý sklon odpovídá <b>dvěma protilehlým bodům</b> na kružnici (1. a 3. nebo 2. a 4. kvadrant).`
        },
        {
          trigger: `> Krok 2: Kolik oběhů kružnicí na periodu`,
          content: `Protilehlé body jsou od sebe o \\(180°\\). Stejná hodnota \\(\\operatorname{tg}\\) se tedy opakuje každých \\(180°\\). Kolik protilehlých párů tak v intervalu \\((0°;\\, 360°)\\) získáte?`
        },
      ],
      choices: [
        {
          label: `jedno`,
          value: "A",
          feedback: `Chyba. Tangens má periodu \\(180°\\), v \\((0°;\\, 360°)\\) jsou tedy \\(2\\) řešení.`
        },
        {
          label: `dvě`,
          value: "B",
          feedback: `Logika potvrzena. Perioda \\(180°\\), interval \\(360°\\) → \\(2\\) řešení. ✓`
        },
        {
          label: `tři`,
          value: "C",
          feedback: `Chyba. Tři by nastaly pro funkci s periodou \\(120°\\).`
        },
        {
          label: `čtyři`,
          value: "D",
          feedback: `Chyba. Čtyři by nastaly pro \\(\\sin\\) nebo \\(\\cos\\) s argumentem \\(2x\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_gon_06", regionId: "goniometrie", type: "closed", monsterName: `FW_10F: Amplituda a posun z grafu`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 2, trainingTasks: ["t_gon_06"],
      question: `Na obrázku je znázorněn graf funkce \\(f\\colon y = a\\cdot\\sin(x) + b\\). Z vyznačených souřadnic maxima a minima určete parametry \\(a\\) a \\(b\\).`,
      diagram: `<svg viewBox="0 0 400 235" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="128.2" y1="25" x2="128.2" y2="217" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="25" x2="204.5" y2="217" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="25" x2="280.8" y2="217" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="25" x2="357.0" y2="217" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="39.0" x2="357" y2="39.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="81.0" x2="357" y2="81.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="123.0" x2="357" y2="123.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="207.0" x2="357" y2="207.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="165" x2="369" y2="165" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,161 376,165 369,169" fill="#e2e8f0"/><text x="379" y="169" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="222" x2="52" y2="17" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,17 52,10 56,17" fill="#e2e8f0"/><text x="52" y="8" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="128.2" y1="162" x2="128.2" y2="168" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="181" font-size="9" fill="#e2e8f0" text-anchor="middle">π/2</text><line x1="204.5" y1="162" x2="204.5" y2="168" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="181" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="280.8" y1="162" x2="280.8" y2="168" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="181" font-size="9" fill="#e2e8f0" text-anchor="middle">3π/2</text><line x1="357.0" y1="162" x2="357.0" y2="168" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="181" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="49" y1="39.0" x2="55" y2="39.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="43.0" font-size="9" fill="#e2e8f0" text-anchor="end">3</text><line x1="49" y1="81.0" x2="55" y2="81.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="85.0" font-size="9" fill="#e2e8f0" text-anchor="end">2</text><line x1="49" y1="123.0" x2="55" y2="123.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="127.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="207.0" x2="55" y2="207.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="211.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><polyline points="52.0,123.0 52.8,121.7 53.5,120.4 54.3,119.0 55.0,117.7 55.8,116.4 56.6,115.1 57.3,113.8 58.1,112.5 58.9,111.2 59.6,109.9 60.4,108.6 61.1,107.3 61.9,106.0 62.7,104.7 63.4,103.4 64.2,102.1 65.0,100.8 65.7,99.6 66.5,98.3 67.2,97.0 68.0,95.8 68.8,94.5 69.5,93.3 70.3,92.1 71.1,90.9 71.8,89.6 72.6,88.4 73.3,87.2 74.1,86.0 74.9,84.9 75.6,83.7 76.4,82.5 77.2,81.4 77.9,80.2 78.7,79.1 79.5,78.0 80.2,76.9 81.0,75.8 81.7,74.7 82.5,73.6 83.3,72.6 84.0,71.5 84.8,70.5 85.5,69.5 86.3,68.4 87.1,67.4 87.8,66.5 88.6,65.5 89.4,64.5 90.1,63.6 90.9,62.7 91.7,61.8 92.4,60.9 93.2,60.0 93.9,59.1 94.7,58.3 95.5,57.4 96.2,56.6 97.0,55.8 97.8,55.0 98.5,54.3 99.3,53.5 100.0,52.8 100.8,52.1 101.6,51.4 102.3,50.7 103.1,50.0 103.9,49.4 104.6,48.8 105.4,48.2 106.1,47.6 106.9,47.0 107.7,46.4 108.4,45.9 109.2,45.4 109.9,44.9 110.7,44.4 111.5,44.0 112.2,43.5 113.0,43.1 113.8,42.7 114.5,42.3 115.3,42.0 116.1,41.6 116.8,41.3 117.6,41.0 118.3,40.7 119.1,40.5 119.9,40.3 120.6,40.0 121.4,39.8 122.1,39.7 122.9,39.5 123.7,39.4 124.4,39.3 125.2,39.2 126.0,39.1 126.7,39.0 127.5,39.0 128.2,39.0 129.0,39.0 129.8,39.0 130.5,39.1 131.3,39.2 132.1,39.3 132.8,39.4 133.6,39.5 134.3,39.7 135.1,39.8 135.9,40.0 136.6,40.3 137.4,40.5 138.2,40.7 138.9,41.0 139.7,41.3 140.4,41.6 141.2,42.0 142.0,42.3 142.7,42.7 143.5,43.1 144.3,43.5 145.0,44.0 145.8,44.4 146.6,44.9 147.3,45.4 148.1,45.9 148.8,46.4 149.6,47.0 150.4,47.6 151.1,48.2 151.9,48.8 152.7,49.4 153.4,50.0 154.2,50.7 154.9,51.4 155.7,52.1 156.5,52.8 157.2,53.5 158.0,54.3 158.8,55.0 159.5,55.8 160.3,56.6 161.0,57.4 161.8,58.3 162.6,59.1 163.3,60.0 164.1,60.9 164.9,61.8 165.6,62.7 166.4,63.6 167.1,64.5 167.9,65.5 168.7,66.5 169.4,67.4 170.2,68.4 170.9,69.5 171.7,70.5 172.5,71.5 173.2,72.6 174.0,73.6 174.8,74.7 175.5,75.8 176.3,76.9 177.0,78.0 177.8,79.1 178.6,80.2 179.3,81.4 180.1,82.5 180.9,83.7 181.6,84.9 182.4,86.0 183.2,87.2 183.9,88.4 184.7,89.6 185.4,90.9 186.2,92.1 187.0,93.3 187.7,94.5 188.5,95.8 189.2,97.0 190.0,98.3 190.8,99.6 191.5,100.8 192.3,102.1 193.1,103.4 193.8,104.7 194.6,106.0 195.4,107.3 196.1,108.6 196.9,109.9 197.6,111.2 198.4,112.5 199.2,113.8 199.9,115.1 200.7,116.4 201.4,117.7 202.2,119.0 203.0,120.4 203.7,121.7 204.5,123.0 205.3,124.3 206.0,125.6 206.8,127.0 207.6,128.3 208.3,129.6 209.1,130.9 209.8,132.2 210.6,133.5 211.4,134.8 212.1,136.1 212.9,137.4 213.7,138.7 214.4,140.0 215.2,141.3 215.9,142.6 216.7,143.9 217.5,145.2 218.2,146.4 219.0,147.7 219.8,149.0 220.5,150.2 221.3,151.5 222.0,152.7 222.8,153.9 223.6,155.1 224.3,156.4 225.1,157.6 225.8,158.8 226.6,160.0 227.4,161.1 228.1,162.3 228.9,163.5 229.7,164.6 230.4,165.8 231.2,166.9 231.9,168.0 232.7,169.1 233.5,170.2 234.2,171.3 235.0,172.4 235.8,173.4 236.5,174.5 237.3,175.5 238.1,176.5 238.8,177.6 239.6,178.6 240.3,179.5 241.1,180.5 241.9,181.5 242.6,182.4 243.4,183.3 244.2,184.2 244.9,185.1 245.7,186.0 246.4,186.9 247.2,187.7 248.0,188.6 248.7,189.4 249.5,190.2 250.2,191.0 251.0,191.7 251.8,192.5 252.5,193.2 253.3,193.9 254.1,194.6 254.8,195.3 255.6,196.0 256.4,196.6 257.1,197.2 257.9,197.8 258.6,198.4 259.4,199.0 260.2,199.6 260.9,200.1 261.7,200.6 262.5,201.1 263.2,201.6 264.0,202.0 264.7,202.5 265.5,202.9 266.3,203.3 267.0,203.7 267.8,204.0 268.6,204.4 269.3,204.7 270.1,205.0 270.8,205.3 271.6,205.5 272.4,205.7 273.1,206.0 273.9,206.2 274.6,206.3 275.4,206.5 276.2,206.6 276.9,206.7 277.7,206.8 278.5,206.9 279.2,207.0 280.0,207.0 280.8,207.0 281.5,207.0 282.3,207.0 283.0,206.9 283.8,206.8 284.6,206.7 285.3,206.6 286.1,206.5 286.9,206.3 287.6,206.2 288.4,206.0 289.1,205.7 289.9,205.5 290.7,205.3 291.4,205.0 292.2,204.7 293.0,204.4 293.7,204.0 294.5,203.7 295.2,203.3 296.0,202.9 296.8,202.5 297.5,202.0 298.3,201.6 299.0,201.1 299.8,200.6 300.6,200.1 301.3,199.6 302.1,199.0 302.9,198.4 303.6,197.8 304.4,197.2 305.2,196.6 305.9,196.0 306.7,195.3 307.4,194.6 308.2,193.9 309.0,193.2 309.7,192.5 310.5,191.7 311.2,191.0 312.0,190.2 312.8,189.4 313.5,188.6 314.3,187.7 315.1,186.9 315.8,186.0 316.6,185.1 317.3,184.2 318.1,183.3 318.9,182.4 319.6,181.5 320.4,180.5 321.2,179.5 321.9,178.6 322.7,177.6 323.5,176.5 324.2,175.5 325.0,174.5 325.7,173.4 326.5,172.4 327.3,171.3 328.0,170.2 328.8,169.1 329.6,168.0 330.3,166.9 331.1,165.8 331.8,164.6 332.6,163.5 333.4,162.3 334.1,161.1 334.9,160.0 335.6,158.8 336.4,157.6 337.2,156.4 337.9,155.1 338.7,153.9 339.5,152.7 340.2,151.5 341.0,150.2 341.8,149.0 342.5,147.7 343.3,146.4 344.0,145.2 344.8,143.9 345.6,142.6 346.3,141.3 347.1,140.0 347.9,138.7 348.6,137.4 349.4,136.1 350.1,134.8 350.9,133.5 351.7,132.2 352.4,130.9 353.2,129.6 354.0,128.3 354.7,127.0 355.5,125.6 356.2,124.3 357.0,123.0" fill="none" stroke="#0077bb" stroke-width="2.5"/><circle cx="128.2" cy="39.0" r="4" fill="#cc4400"/><line x1="128.2" y1="165" x2="128.2" y2="39.0" stroke="#cc4400" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/><text x="134.2" y="35.0" font-size="10" fill="#cc4400">(π/2 ; 3)</text><circle cx="280.8" cy="207.0" r="4" fill="#cc4400"/><line x1="280.8" y1="165" x2="280.8" y2="207.0" stroke="#cc4400" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/><text x="286.8" y="219.0" font-size="10" fill="#cc4400">(3π/2 ; −1)</text><text x="97.8" y="41.0" font-size="13" fill="#0077bb" font-style="italic">f</text></svg>`,
      instruction: `Vyberte správné hodnoty a a b.`,
      choices: [
        {
          label: `\\(a = 2,\\mspace{6mu} b = 1\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(a = \\tfrac{3-(-1)}{2} = 2\\), \\(b = \\tfrac{3+(-1)}{2} = 1\\). ✓`
        },
        {
          label: `\\(a = 2,\\mspace{6mu} b = 0\\)`,
          value: "B",
          feedback: `Chyba. Střed oscilace \\(b = 0\\) by znamenal symetrické kmitání kolem osy \\(x\\) — z grafu vidíš, že střed leží jinde.`
        },
        {
          label: `\\(a = 3,\\mspace{6mu} b = 1\\)`,
          value: "C",
          feedback: `Chyba. Amplituda není hodnota maxima — je to vzdálenost od střední hodnoty k maximu.`
        },
        {
          label: `\\(a = 1,\\mspace{6mu} b = 2\\)`,
          value: "D",
          feedback: `Kritická chyba. Záměna \\(a\\) a \\(b\\) — který parametr udává amplitudu a který vertikální posun?`
        },
      ],
      hints: [
        `Amplituda (koeficient \\(a\\)) udává vzdálenost maxima od střední hodnoty. Střední hodnota (\\(b\\)) leží přesně uprostřed mezi maximem a minimem.`,
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_gon_06", regionId: "goniometrie", type: "closed", monsterName: `SIM_10F: Amplituda z grafu`,
      isTraining: true, firewallId: "q_gon_06", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `Graf funkce \\(y = a\\cdot\\sin(x) + b\\) má maximum \\(5\\) a minimum \\(-1\\). Jaká je amplituda \\(a\\) (koeficient před \\(\\sin\\))?`,
      formula: `$$\\text{max} = 5,\\quad\\text{min} = - 1$$`,
      instruction: `Vyberte správnou hodnotu amplitudy a.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro amplitudu`,
          content: `Amplituda \\(= \\dfrac{\\max - \\min}{2}\\). Půlíme celkový rozsah kmitu — <b>ne jen maximum</b>.`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `Máte \\(\\max = 5\\), \\(\\min = -1\\). Dosaďte do vzorce z Kroku 1. Kolik vyjde \\(a\\)?`
        },
      ],
      choices: [
        {
          label: `\\(a = 5\\)`,
          value: "A",
          feedback: `Chyba. \\(a = 5\\) je hodnota maxima, ne amplituda. Amplituda \\(= \\tfrac{\\max - \\min}{2}\\).`
        },
        {
          label: `\\(a = 6\\)`,
          value: "B",
          feedback: `Chyba. \\(a = 6\\) je celý rozsah \\((\\max - \\min)\\), bez dělení \\(2\\).`
        },
        {
          label: `\\(a = 2\\)`,
          value: "C",
          feedback: `Chyba. \\(a = 2\\) je vertikální posun \\(b\\), nikoli amplituda.`
        },
        {
          label: `\\(a = 3\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(\\tfrac{5 - (-1)}{2} = 3\\). ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_gon_07", regionId: "goniometrie", type: "closed", monsterName: `FW_10G: Identifikace funkce z grafu`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 3, trainingTasks: ["t_gon_07"],
      question: `Na obrázku je znázorněn graf funkce \\(f\\) pro \\(x \\in (0;\\, 2\\pi)\\). Určete předpis funkce \\(f\\).`,
      diagram: `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="90.1" y1="18" x2="90.1" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="128.2" y1="18" x2="128.2" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="18" x2="204.5" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="18" x2="280.8" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="18" x2="357.0" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="27.0" x2="357" y2="27.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="71.0" x2="357" y2="71.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="159.0" x2="357" y2="159.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="203.0" x2="357" y2="203.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="115" x2="369" y2="115" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,111 376,115 369,119" fill="#e2e8f0"/><text x="379" y="119" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="217" x2="52" y2="10" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,10 52,3 56,10" fill="#e2e8f0"/><text x="52" y="1" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="90.1" y1="112" x2="90.1" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="90.1" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">π/4</text><line x1="128.2" y1="112" x2="128.2" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">π/2</text><line x1="204.5" y1="112" x2="204.5" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="280.8" y1="112" x2="280.8" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">3π/2</text><line x1="357.0" y1="112" x2="357.0" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="49" y1="27.0" x2="55" y2="27.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="31.0" font-size="9" fill="#e2e8f0" text-anchor="end">2</text><line x1="49" y1="71.0" x2="55" y2="71.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="75.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="159.0" x2="55" y2="159.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="163.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><line x1="49" y1="203.0" x2="55" y2="203.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="207.0" font-size="9" fill="#e2e8f0" text-anchor="end">-2</text><polyline points="52.0,115.0 52.8,112.2 53.5,109.5 54.3,106.7 55.0,104.0 55.8,101.2 56.6,98.5 57.3,95.8 58.1,93.1 58.9,90.4 59.6,87.8 60.4,85.2 61.1,82.6 61.9,80.1 62.7,77.5 63.4,75.0 64.2,72.6 65.0,70.2 65.7,67.8 66.5,65.5 67.2,63.3 68.0,61.1 68.8,58.9 69.5,56.8 70.3,54.8 71.1,52.8 71.8,50.9 72.6,49.0 73.3,47.2 74.1,45.5 74.9,43.8 75.6,42.2 76.4,40.7 77.2,39.3 77.9,37.9 78.7,36.6 79.5,35.4 80.2,34.2 81.0,33.2 81.7,32.2 82.5,31.3 83.3,30.5 84.0,29.8 84.8,29.1 85.5,28.6 86.3,28.1 87.1,27.7 87.8,27.4 88.6,27.2 89.4,27.0 90.1,27.0 90.9,27.0 91.7,27.2 92.4,27.4 93.2,27.7 93.9,28.1 94.7,28.6 95.5,29.1 96.2,29.8 97.0,30.5 97.8,31.3 98.5,32.2 99.3,33.2 100.0,34.2 100.8,35.4 101.6,36.6 102.3,37.9 103.1,39.3 103.9,40.7 104.6,42.2 105.4,43.8 106.1,45.5 106.9,47.2 107.7,49.0 108.4,50.9 109.2,52.8 109.9,54.8 110.7,56.8 111.5,58.9 112.2,61.1 113.0,63.3 113.8,65.5 114.5,67.8 115.3,70.2 116.1,72.6 116.8,75.0 117.6,77.5 118.3,80.1 119.1,82.6 119.9,85.2 120.6,87.8 121.4,90.4 122.1,93.1 122.9,95.8 123.7,98.5 124.4,101.2 125.2,104.0 126.0,106.7 126.7,109.5 127.5,112.2 128.2,115.0 129.0,117.8 129.8,120.5 130.5,123.3 131.3,126.0 132.1,128.8 132.8,131.5 133.6,134.2 134.3,136.9 135.1,139.6 135.9,142.2 136.6,144.8 137.4,147.4 138.2,149.9 138.9,152.5 139.7,155.0 140.4,157.4 141.2,159.8 142.0,162.2 142.7,164.5 143.5,166.7 144.3,168.9 145.0,171.1 145.8,173.2 146.6,175.2 147.3,177.2 148.1,179.1 148.8,181.0 149.6,182.8 150.4,184.5 151.1,186.2 151.9,187.8 152.7,189.3 153.4,190.7 154.2,192.1 154.9,193.4 155.7,194.6 156.5,195.8 157.2,196.8 158.0,197.8 158.8,198.7 159.5,199.5 160.3,200.2 161.0,200.9 161.8,201.4 162.6,201.9 163.3,202.3 164.1,202.6 164.9,202.8 165.6,203.0 166.4,203.0 167.1,203.0 167.9,202.8 168.7,202.6 169.4,202.3 170.2,201.9 170.9,201.4 171.7,200.9 172.5,200.2 173.2,199.5 174.0,198.7 174.8,197.8 175.5,196.8 176.3,195.8 177.0,194.6 177.8,193.4 178.6,192.1 179.3,190.7 180.1,189.3 180.9,187.8 181.6,186.2 182.4,184.5 183.2,182.8 183.9,181.0 184.7,179.1 185.4,177.2 186.2,175.2 187.0,173.2 187.7,171.1 188.5,168.9 189.2,166.7 190.0,164.5 190.8,162.2 191.5,159.8 192.3,157.4 193.1,155.0 193.8,152.5 194.6,149.9 195.4,147.4 196.1,144.8 196.9,142.2 197.6,139.6 198.4,136.9 199.2,134.2 199.9,131.5 200.7,128.8 201.4,126.0 202.2,123.3 203.0,120.5 203.7,117.8 204.5,115.0 205.3,112.2 206.0,109.5 206.8,106.7 207.6,104.0 208.3,101.2 209.1,98.5 209.8,95.8 210.6,93.1 211.4,90.4 212.1,87.8 212.9,85.2 213.7,82.6 214.4,80.1 215.2,77.5 215.9,75.0 216.7,72.6 217.5,70.2 218.2,67.8 219.0,65.5 219.8,63.3 220.5,61.1 221.3,58.9 222.0,56.8 222.8,54.8 223.6,52.8 224.3,50.9 225.1,49.0 225.8,47.2 226.6,45.5 227.4,43.8 228.1,42.2 228.9,40.7 229.7,39.3 230.4,37.9 231.2,36.6 231.9,35.4 232.7,34.2 233.5,33.2 234.2,32.2 235.0,31.3 235.8,30.5 236.5,29.8 237.3,29.1 238.1,28.6 238.8,28.1 239.6,27.7 240.3,27.4 241.1,27.2 241.9,27.0 242.6,27.0 243.4,27.0 244.2,27.2 244.9,27.4 245.7,27.7 246.4,28.1 247.2,28.6 248.0,29.1 248.7,29.8 249.5,30.5 250.2,31.3 251.0,32.2 251.8,33.2 252.5,34.2 253.3,35.4 254.1,36.6 254.8,37.9 255.6,39.3 256.4,40.7 257.1,42.2 257.9,43.8 258.6,45.5 259.4,47.2 260.2,49.0 260.9,50.9 261.7,52.8 262.5,54.8 263.2,56.8 264.0,58.9 264.7,61.1 265.5,63.3 266.3,65.5 267.0,67.8 267.8,70.2 268.6,72.6 269.3,75.0 270.1,77.5 270.8,80.1 271.6,82.6 272.4,85.2 273.1,87.8 273.9,90.4 274.6,93.1 275.4,95.8 276.2,98.5 276.9,101.2 277.7,104.0 278.5,106.7 279.2,109.5 280.0,112.2 280.8,115.0 281.5,117.8 282.3,120.5 283.0,123.3 283.8,126.0 284.6,128.8 285.3,131.5 286.1,134.2 286.9,136.9 287.6,139.6 288.4,142.2 289.1,144.8 289.9,147.4 290.7,149.9 291.4,152.5 292.2,155.0 293.0,157.4 293.7,159.8 294.5,162.2 295.2,164.5 296.0,166.7 296.8,168.9 297.5,171.1 298.3,173.2 299.0,175.2 299.8,177.2 300.6,179.1 301.3,181.0 302.1,182.8 302.9,184.5 303.6,186.2 304.4,187.8 305.2,189.3 305.9,190.7 306.7,192.1 307.4,193.4 308.2,194.6 309.0,195.8 309.7,196.8 310.5,197.8 311.2,198.7 312.0,199.5 312.8,200.2 313.5,200.9 314.3,201.4 315.1,201.9 315.8,202.3 316.6,202.6 317.3,202.8 318.1,203.0 318.9,203.0 319.6,203.0 320.4,202.8 321.2,202.6 321.9,202.3 322.7,201.9 323.5,201.4 324.2,200.9 325.0,200.2 325.7,199.5 326.5,198.7 327.3,197.8 328.0,196.8 328.8,195.8 329.6,194.6 330.3,193.4 331.1,192.1 331.8,190.7 332.6,189.3 333.4,187.8 334.1,186.2 334.9,184.5 335.6,182.8 336.4,181.0 337.2,179.1 337.9,177.2 338.7,175.2 339.5,173.2 340.2,171.1 341.0,168.9 341.8,166.7 342.5,164.5 343.3,162.2 344.0,159.8 344.8,157.4 345.6,155.0 346.3,152.5 347.1,149.9 347.9,147.4 348.6,144.8 349.4,142.2 350.1,139.6 350.9,136.9 351.7,134.2 352.4,131.5 353.2,128.8 354.0,126.0 354.7,123.3 355.5,120.5 356.2,117.8 357.0,115.0" fill="none" stroke="#0077bb" stroke-width="2.5"/><circle cx="90.1" cy="27.0" r="3" fill="#cc4400" opacity="0.9"/><circle cx="242.6" cy="27.0" r="3" fill="#cc4400" opacity="0.9"/><text x="337" y="22" font-size="13" fill="#0077bb" font-style="italic" text-anchor="middle">f</text></svg>`,
      instruction: `Vyberte správný předpis funkce.`,
      choices: [
        {
          label: `\\(y = \\text{sin}(2x)\\)`,
          value: "A",
          feedback: `Chyba. Zkontrolujte amplitudu — kolik měří graf od středu k maximu?`
        },
        {
          label: `\\(y = 2 \\cdot \\text{sin}x\\)`,
          value: "B",
          feedback: `Chyba. Zkontrolujte periodu — kolik celých kmitů vidíte v intervalu \\((0;\\, 2\\pi)\\)?`
        },
        {
          label: `\\(y = 2 \\cdot \\text{cos}(2x)\\)`,
          value: "C",
          feedback: `Chyba. Porovnejte chování v \\(x = 0\\): kde začíná graf — v maximu nebo v nule?`
        },
        {
          label: `\\(y = 2 \\cdot \\text{sin}(2x)\\)`,
          value: "D",
          feedback: `Přístup povolen. Amplituda \\(2\\) ✓, perioda \\(\\pi\\) ✓, začíná v \\(0\\) (sinus) ✓. ✓`
        },
      ],
      hints: [
        `Určete z grafu tři věci: amplitudu (výška kmitu od středu), periodu (délka jednoho cyklu) a zda tvar odpovídá sinu nebo kosinu.`,
        `Z periody \\(T\\) odvoďte koeficient \\(b\\) ve vzorci \\(y = A \\cdot \\sin(bx)\\) pomocí vztahu \\(T = \\tfrac{2\\pi}{b}\\). Amplituda odpovídá koeficientu \\(A\\).`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_gon_07", regionId: "goniometrie", type: "closed", monsterName: `SIM_10G: Perioda y = sin(2x)`,
      isTraining: true, firewallId: "q_gon_07", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `Jaká je perioda funkce \\(y = \\sin(2x)\\)?`,
      formula: `$$y = \\text{sin}(2x)$$`,
      instruction: `Vyberte správnou periodu.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro periodu`,
          content: `Perioda funkce \\(y = \\sin(kx)\\) se spočítá jako \\(T = \\dfrac{2\\pi}{|k|}\\).`
        },
        {
          trigger: `> Krok 2: Dosazení k = 2`,
          content: `Zde \\(k = 2\\). Dosaďte do vzorce \\(T = \\tfrac{2\\pi}{|k|}\\) — kolik vyjde perioda?`
        },
      ],
      choices: [
        {
          label: `\\(4\\pi\\)`,
          value: "A",
          feedback: `Chyba. \\(4\\pi\\) odpovídá \\(y = \\sin(\\tfrac{x}{2})\\) — pomalejší kmitání.`
        },
        {
          label: `\\(2\\pi\\)`,
          value: "B",
          feedback: `Chyba. \\(2\\pi\\) je perioda \\(y = \\sin x\\) bez změny argumentu.`
        },
        {
          label: `\\(\\pi\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(T = \\tfrac{2\\pi}{2} = \\pi\\). ✓`
        },
        {
          label: `\\(\\frac{\\pi}{2}\\)`,
          value: "D",
          feedback: `Chyba. \\(\\tfrac{\\pi}{2}\\) odpovídá \\(y = \\sin(4x)\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_gon_08", regionId: "goniometrie", type: "closed", monsterName: `FW_10H: Fázový posun z grafu`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 2, trainingTasks: ["t_gon_08"],
      question: `Tučná křivka odpovídá funkci \\(g\\colon y = \\sin(x + \\varphi)\\), \\(\\varphi > 0\\). Šedá přerušovaná je referenční \\(\\sin x\\). Určete nejmenší kladné \\(\\varphi\\).`,
      diagram: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="77.4" y1="25" x2="77.4" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="128.2" y1="25" x2="128.2" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="25" x2="204.5" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="25" x2="280.8" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="25" x2="357.0" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="37.0" x2="357" y2="37.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="177.0" x2="357" y2="177.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="107" x2="369" y2="107" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,103 376,107 369,111" fill="#e2e8f0"/><text x="379" y="111" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="197" x2="52" y2="17" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,17 52,10 56,17" fill="#e2e8f0"/><text x="52" y="8" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="77.4" y1="104" x2="77.4" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="77.4" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π/6</text><line x1="128.2" y1="104" x2="128.2" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π/2</text><line x1="204.5" y1="104" x2="204.5" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="280.8" y1="104" x2="280.8" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">3π/2</text><line x1="357.0" y1="104" x2="357.0" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="49" y1="37.0" x2="55" y2="37.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="41.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="177.0" x2="55" y2="177.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="181.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><polyline points="52.0,107.0 52.8,105.9 53.5,104.8 54.3,103.7 55.0,102.6 55.8,101.5 56.6,100.4 57.3,99.3 58.1,98.2 58.9,97.1 59.6,96.0 60.4,95.0 61.1,93.9 61.9,92.8 62.7,91.7 63.4,90.7 64.2,89.6 65.0,88.5 65.7,87.5 66.5,86.4 67.2,85.4 68.0,84.3 68.8,83.3 69.5,82.3 70.3,81.2 71.1,80.2 71.8,79.2 72.6,78.2 73.3,77.2 74.1,76.2 74.9,75.2 75.6,74.2 76.4,73.3 77.2,72.3 77.9,71.4 78.7,70.4 79.5,69.5 80.2,68.6 81.0,67.7 81.7,66.7 82.5,65.9 83.3,65.0 84.0,64.1 84.8,63.2 85.5,62.4 86.3,61.5 87.1,60.7 87.8,59.9 88.6,59.1 89.4,58.3 90.1,57.5 90.9,56.7 91.7,56.0 92.4,55.2 93.2,54.5 93.9,53.8 94.7,53.1 95.5,52.4 96.2,51.7 97.0,51.0 97.8,50.4 98.5,49.7 99.3,49.1 100.0,48.5 100.8,47.9 101.6,47.3 102.3,46.7 103.1,46.2 103.9,45.7 104.6,45.1 105.4,44.6 106.1,44.1 106.9,43.7 107.7,43.2 108.4,42.8 109.2,42.3 109.9,41.9 110.7,41.5 111.5,41.1 112.2,40.8 113.0,40.4 113.8,40.1 114.5,39.8 115.3,39.5 116.1,39.2 116.8,38.9 117.6,38.7 118.3,38.5 119.1,38.2 119.9,38.0 120.6,37.9 121.4,37.7 122.1,37.6 122.9,37.4 123.7,37.3 124.4,37.2 125.2,37.1 126.0,37.1 126.7,37.0 127.5,37.0 128.2,37.0 129.0,37.0 129.8,37.0 130.5,37.1 131.3,37.1 132.1,37.2 132.8,37.3 133.6,37.4 134.3,37.6 135.1,37.7 135.9,37.9 136.6,38.0 137.4,38.2 138.2,38.5 138.9,38.7 139.7,38.9 140.4,39.2 141.2,39.5 142.0,39.8 142.7,40.1 143.5,40.4 144.3,40.8 145.0,41.1 145.8,41.5 146.6,41.9 147.3,42.3 148.1,42.8 148.8,43.2 149.6,43.7 150.4,44.1 151.1,44.6 151.9,45.1 152.7,45.7 153.4,46.2 154.2,46.7 154.9,47.3 155.7,47.9 156.5,48.5 157.2,49.1 158.0,49.7 158.8,50.4 159.5,51.0 160.3,51.7 161.0,52.4 161.8,53.1 162.6,53.8 163.3,54.5 164.1,55.2 164.9,56.0 165.6,56.7 166.4,57.5 167.1,58.3 167.9,59.1 168.7,59.9 169.4,60.7 170.2,61.5 170.9,62.4 171.7,63.2 172.5,64.1 173.2,65.0 174.0,65.9 174.8,66.7 175.5,67.7 176.3,68.6 177.0,69.5 177.8,70.4 178.6,71.4 179.3,72.3 180.1,73.3 180.9,74.2 181.6,75.2 182.4,76.2 183.2,77.2 183.9,78.2 184.7,79.2 185.4,80.2 186.2,81.2 187.0,82.3 187.7,83.3 188.5,84.3 189.2,85.4 190.0,86.4 190.8,87.5 191.5,88.5 192.3,89.6 193.1,90.7 193.8,91.7 194.6,92.8 195.4,93.9 196.1,95.0 196.9,96.0 197.6,97.1 198.4,98.2 199.2,99.3 199.9,100.4 200.7,101.5 201.4,102.6 202.2,103.7 203.0,104.8 203.7,105.9 204.5,107.0 205.3,108.1 206.0,109.2 206.8,110.3 207.6,111.4 208.3,112.5 209.1,113.6 209.8,114.7 210.6,115.8 211.4,116.9 212.1,118.0 212.9,119.0 213.7,120.1 214.4,121.2 215.2,122.3 215.9,123.3 216.7,124.4 217.5,125.5 218.2,126.5 219.0,127.6 219.8,128.6 220.5,129.7 221.3,130.7 222.0,131.7 222.8,132.8 223.6,133.8 224.3,134.8 225.1,135.8 225.8,136.8 226.6,137.8 227.4,138.8 228.1,139.8 228.9,140.7 229.7,141.7 230.4,142.6 231.2,143.6 231.9,144.5 232.7,145.4 233.5,146.3 234.2,147.3 235.0,148.1 235.8,149.0 236.5,149.9 237.3,150.8 238.1,151.6 238.8,152.5 239.6,153.3 240.3,154.1 241.1,154.9 241.9,155.7 242.6,156.5 243.4,157.3 244.2,158.0 244.9,158.8 245.7,159.5 246.4,160.2 247.2,160.9 248.0,161.6 248.7,162.3 249.5,163.0 250.2,163.6 251.0,164.3 251.8,164.9 252.5,165.5 253.3,166.1 254.1,166.7 254.8,167.3 255.6,167.8 256.4,168.3 257.1,168.9 257.9,169.4 258.6,169.9 259.4,170.3 260.2,170.8 260.9,171.2 261.7,171.7 262.5,172.1 263.2,172.5 264.0,172.9 264.7,173.2 265.5,173.6 266.3,173.9 267.0,174.2 267.8,174.5 268.6,174.8 269.3,175.1 270.1,175.3 270.8,175.5 271.6,175.8 272.4,176.0 273.1,176.1 273.9,176.3 274.6,176.4 275.4,176.6 276.2,176.7 276.9,176.8 277.7,176.9 278.5,176.9 279.2,177.0 280.0,177.0 280.8,177.0 281.5,177.0 282.3,177.0 283.0,176.9 283.8,176.9 284.6,176.8 285.3,176.7 286.1,176.6 286.9,176.4 287.6,176.3 288.4,176.1 289.1,176.0 289.9,175.8 290.7,175.5 291.4,175.3 292.2,175.1 293.0,174.8 293.7,174.5 294.5,174.2 295.2,173.9 296.0,173.6 296.8,173.2 297.5,172.9 298.3,172.5 299.0,172.1 299.8,171.7 300.6,171.2 301.3,170.8 302.1,170.3 302.9,169.9 303.6,169.4 304.4,168.9 305.2,168.3 305.9,167.8 306.7,167.3 307.4,166.7 308.2,166.1 309.0,165.5 309.7,164.9 310.5,164.3 311.2,163.6 312.0,163.0 312.8,162.3 313.5,161.6 314.3,160.9 315.1,160.2 315.8,159.5 316.6,158.8 317.3,158.0 318.1,157.3 318.9,156.5 319.6,155.7 320.4,154.9 321.2,154.1 321.9,153.3 322.7,152.5 323.5,151.6 324.2,150.8 325.0,149.9 325.7,149.0 326.5,148.1 327.3,147.3 328.0,146.3 328.8,145.4 329.6,144.5 330.3,143.6 331.1,142.6 331.8,141.7 332.6,140.7 333.4,139.8 334.1,138.8 334.9,137.8 335.6,136.8 336.4,135.8 337.2,134.8 337.9,133.8 338.7,132.8 339.5,131.7 340.2,130.7 341.0,129.7 341.8,128.6 342.5,127.6 343.3,126.5 344.0,125.5 344.8,124.4 345.6,123.3 346.3,122.3 347.1,121.2 347.9,120.1 348.6,119.0 349.4,118.0 350.1,116.9 350.9,115.8 351.7,114.7 352.4,113.6 353.2,112.5 354.0,111.4 354.7,110.3 355.5,109.2 356.2,108.1 357.0,107.0" fill="none" stroke="#4a5568" stroke-width="1.5" stroke-dasharray="7,5" opacity="0.6"/><text x="265.5" y="189.6" font-size="10" fill="#4a5568" opacity="0.7" font-style="italic">sin x</text><polyline points="52.0,46.4 52.8,45.8 53.5,45.3 54.3,44.8 55.0,44.3 55.8,43.8 56.6,43.4 57.3,42.9 58.1,42.5 58.9,42.1 59.6,41.6 60.4,41.3 61.1,40.9 61.9,40.5 62.7,40.2 63.4,39.9 64.2,39.6 65.0,39.3 65.7,39.0 66.5,38.8 67.2,38.5 68.0,38.3 68.8,38.1 69.5,37.9 70.3,37.8 71.1,37.6 71.8,37.5 72.6,37.3 73.3,37.2 74.1,37.2 74.9,37.1 75.6,37.0 76.4,37.0 77.2,37.0 77.9,37.0 78.7,37.0 79.5,37.1 80.2,37.1 81.0,37.2 81.7,37.3 82.5,37.4 83.3,37.5 84.0,37.6 84.8,37.8 85.5,38.0 86.3,38.2 87.1,38.4 87.8,38.6 88.6,38.8 89.4,39.1 90.1,39.4 90.9,39.7 91.7,40.0 92.4,40.3 93.2,40.7 93.9,41.0 94.7,41.4 95.5,41.8 96.2,42.2 97.0,42.6 97.8,43.1 98.5,43.5 99.3,44.0 100.0,44.5 100.8,45.0 101.6,45.5 102.3,46.0 103.1,46.6 103.9,47.1 104.6,47.7 105.4,48.3 106.1,48.9 106.9,49.5 107.7,50.2 108.4,50.8 109.2,51.5 109.9,52.1 110.7,52.8 111.5,53.5 112.2,54.3 113.0,55.0 113.8,55.7 114.5,56.5 115.3,57.2 116.1,58.0 116.8,58.8 117.6,59.6 118.3,60.4 119.1,61.3 119.9,62.1 120.6,62.9 121.4,63.8 122.1,64.7 122.9,65.6 123.7,66.5 124.4,67.4 125.2,68.3 126.0,69.2 126.7,70.1 127.5,71.1 128.2,72.0 129.0,73.0 129.8,73.9 130.5,74.9 131.3,75.9 132.1,76.9 132.8,77.9 133.6,78.9 134.3,79.9 135.1,80.9 135.9,81.9 136.6,82.9 137.4,84.0 138.2,85.0 138.9,86.1 139.7,87.1 140.4,88.2 141.2,89.2 142.0,90.3 142.7,91.4 143.5,92.4 144.3,93.5 145.0,94.6 145.8,95.7 146.6,96.8 147.3,97.9 148.1,99.0 148.8,100.0 149.6,101.1 150.4,102.2 151.1,103.3 151.9,104.4 152.7,105.5 153.4,106.6 154.2,107.7 154.9,108.8 155.7,109.9 156.5,111.0 157.2,112.1 158.0,113.2 158.8,114.3 159.5,115.4 160.3,116.5 161.0,117.6 161.8,118.7 162.6,119.8 163.3,120.8 164.1,121.9 164.9,123.0 165.6,124.1 166.4,125.1 167.1,126.2 167.9,127.2 168.7,128.3 169.4,129.3 170.2,130.4 170.9,131.4 171.7,132.4 172.5,133.4 173.2,134.5 174.0,135.5 174.8,136.5 175.5,137.5 176.3,138.5 177.0,139.4 177.8,140.4 178.6,141.4 179.3,142.3 180.1,143.3 180.9,144.2 181.6,145.1 182.4,146.0 183.2,146.9 183.9,147.8 184.7,148.7 185.4,149.6 186.2,150.5 187.0,151.3 187.7,152.2 188.5,153.0 189.2,153.8 190.0,154.7 190.8,155.5 191.5,156.2 192.3,157.0 193.1,157.8 193.8,158.5 194.6,159.3 195.4,160.0 196.1,160.7 196.9,161.4 197.6,162.1 198.4,162.8 199.2,163.4 199.9,164.1 200.7,164.7 201.4,165.3 202.2,165.9 203.0,166.5 203.7,167.1 204.5,167.6 205.3,168.2 206.0,168.7 206.8,169.2 207.6,169.7 208.3,170.2 209.1,170.6 209.8,171.1 210.6,171.5 211.4,171.9 212.1,172.4 212.9,172.7 213.7,173.1 214.4,173.5 215.2,173.8 215.9,174.1 216.7,174.4 217.5,174.7 218.2,175.0 219.0,175.2 219.8,175.5 220.5,175.7 221.3,175.9 222.0,176.1 222.8,176.2 223.6,176.4 224.3,176.5 225.1,176.7 225.8,176.8 226.6,176.8 227.4,176.9 228.1,177.0 228.9,177.0 229.7,177.0 230.4,177.0 231.2,177.0 231.9,176.9 232.7,176.9 233.5,176.8 234.2,176.7 235.0,176.6 235.8,176.5 236.5,176.4 237.3,176.2 238.1,176.0 238.8,175.8 239.6,175.6 240.3,175.4 241.1,175.2 241.9,174.9 242.6,174.6 243.4,174.3 244.2,174.0 244.9,173.7 245.7,173.3 246.4,173.0 247.2,172.6 248.0,172.2 248.7,171.8 249.5,171.4 250.2,170.9 251.0,170.5 251.8,170.0 252.5,169.5 253.3,169.0 254.1,168.5 254.8,168.0 255.6,167.4 256.4,166.9 257.1,166.3 257.9,165.7 258.6,165.1 259.4,164.5 260.2,163.8 260.9,163.2 261.7,162.5 262.5,161.9 263.2,161.2 264.0,160.5 264.7,159.7 265.5,159.0 266.3,158.3 267.0,157.5 267.8,156.8 268.6,156.0 269.3,155.2 270.1,154.4 270.8,153.6 271.6,152.7 272.4,151.9 273.1,151.1 273.9,150.2 274.6,149.3 275.4,148.4 276.2,147.5 276.9,146.6 277.7,145.7 278.5,144.8 279.2,143.9 280.0,142.9 280.8,142.0 281.5,141.0 282.3,140.1 283.0,139.1 283.8,138.1 284.6,137.1 285.3,136.1 286.1,135.1 286.9,134.1 287.6,133.1 288.4,132.1 289.1,131.1 289.9,130.0 290.7,129.0 291.4,127.9 292.2,126.9 293.0,125.8 293.7,124.8 294.5,123.7 295.2,122.6 296.0,121.6 296.8,120.5 297.5,119.4 298.3,118.3 299.0,117.2 299.8,116.1 300.6,115.0 301.3,114.0 302.1,112.9 302.9,111.8 303.6,110.7 304.4,109.6 305.2,108.5 305.9,107.4 306.7,106.3 307.4,105.2 308.2,104.1 309.0,103.0 309.7,101.9 310.5,100.8 311.2,99.7 312.0,98.6 312.8,97.5 313.5,96.4 314.3,95.3 315.1,94.2 315.8,93.2 316.6,92.1 317.3,91.0 318.1,89.9 318.9,88.9 319.6,87.8 320.4,86.8 321.2,85.7 321.9,84.7 322.7,83.6 323.5,82.6 324.2,81.6 325.0,80.6 325.7,79.5 326.5,78.5 327.3,77.5 328.0,76.5 328.8,75.5 329.6,74.6 330.3,73.6 331.1,72.6 331.8,71.7 332.6,70.7 333.4,69.8 334.1,68.9 334.9,68.0 335.6,67.1 336.4,66.2 337.2,65.3 337.9,64.4 338.7,63.5 339.5,62.7 340.2,61.8 341.0,61.0 341.8,60.2 342.5,59.3 343.3,58.5 344.0,57.8 344.8,57.0 345.6,56.2 346.3,55.5 347.1,54.7 347.9,54.0 348.6,53.3 349.4,52.6 350.1,51.9 350.9,51.2 351.7,50.6 352.4,49.9 353.2,49.3 354.0,48.7 354.7,48.1 355.5,47.5 356.2,46.9 357.0,46.4" fill="none" stroke="#0077bb" stroke-width="2.5"/><circle cx="52" cy="46.4" r="4" fill="#cc4400"/><line x1="49" y1="46.4" x2="55" y2="46.4" stroke="#cc4400" stroke-width="1.5"/><text x="58" y="43" font-size="9" fill="#cc4400">P</text><text x="70.3" y="23.8" font-size="13" fill="#0077bb" font-style="italic">g</text></svg>`,
      instruction: `Pomocí průsečíku P grafu g s osou y určete nejmenší kladné φ.`,
      choices: [
        {
          label: `\\(\\frac{\\pi}{6}\\)`,
          value: "A",
          feedback: `Chyba. \\(\\tfrac{\\pi}{6}\\) je poloha maxima na ose \\(x\\), ne hodnota \\(\\varphi\\). Jaký je vztah mezi polohou maxima a fázovým posunem?`
        },
        {
          label: `\\(\\frac{\\pi}{2}\\)`,
          value: "B",
          feedback: `Chyba. \\(\\varphi = \\tfrac{\\pi}{2}\\) by posouvalo maximum do \\(x = 0\\), ale v grafu je maximum v \\(x = \\tfrac{\\pi}{6}\\).`
        },
        {
          label: `\\(\\frac{\\pi}{3}\\)`,
          value: "C",
          feedback: `Logika potvrzena. Maximum v \\(x = \\tfrac{\\pi}{6}\\): \\(\\tfrac{\\pi}{6} + \\varphi = \\tfrac{\\pi}{2}\\) → \\(\\varphi = \\tfrac{\\pi}{3}\\). ✓`
        },
        {
          label: `\\(\\frac{2\\pi}{3}\\)`,
          value: "D",
          feedback: `Chyba. Záměna operace — sčítáte místo odčítáte. Zkuste znovu: kde leží maximum \\(\\sin x\\) a kam se posunulo?`
        },
      ],
      hints: [
        `Průsečík P grafu g s osou y je při \\(x = 0\\). Dosaďte \\(x = 0\\) do vzorce \\(y = \\sin(x + \\varphi)\\) — co z toho plyne pro y-souřadnici bodu P?`,
        `Porovnejte odečtenou y-souřadnici P s hodnotami \\(\\sin(\\tfrac{\\pi}{6})\\), \\(\\sin(\\tfrac{\\pi}{3})\\), \\(\\sin(\\tfrac{\\pi}{2})\\), \\(\\sin(\\tfrac{2\\pi}{3})\\). Která odpovídá?`,
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_gon_08", regionId: "goniometrie", type: "closed", monsterName: `SIM_10H: Směr fázového posunu`,
      isTraining: true, firewallId: "q_gon_08", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `Funkce \\(y = \\sin\\!\\left(x + \\tfrac{\\pi}{3}\\right)\\) je oproti \\(y = \\sin x\\) posunuta:`,
      formula: `$$y = \\text{sin}\\left( x + \\frac{\\pi}{3} \\right)$$`,
      instruction: `Vyberte správný popis posunu.`,
      steps: [
        {
          trigger: `> Krok 1: Pravidlo posunu`,
          content: `Na jednotkové kružnici: \\(\\sin(x + \\tfrac{\\pi}{3})\\) = bod, který je o \\(\\tfrac{\\pi}{3}\\) napřed oproti standardnímu sinusu. „Napřed" znamená, že maxima nastávají při menší hodnotě \\(x\\). Jakým směrem se graf posouvá?`
        },
        {
          trigger: `> Krok 2: Aplikace`,
          content: `\\(\\varphi = \\tfrac{\\pi}{3} > 0\\) → posun <b>doleva o \\(\\tfrac{\\pi}{3}\\)</b>. Maximum, které bylo v \\(\\tfrac{\\pi}{2}\\), se přesune do \\(\\tfrac{\\pi}{2} - \\tfrac{\\pi}{3} = \\tfrac{\\pi}{6}\\).`
        },
      ],
      choices: [
        {
          label: `o π/3 doprava`,
          value: "A",
          feedback: `Chyba. Kladné \\(\\varphi\\) v argumentu posouvá graf doleva, ne doprava.`
        },
        {
          label: `o π/3 doleva`,
          value: "B",
          feedback: `Přístup povolen. \\(y = \\sin(x + \\tfrac{\\pi}{3})\\): \\(\\varphi > 0\\) → posun doleva. ✓`
        },
        {
          label: `o π/3 nahoru`,
          value: "C",
          feedback: `Chyba. Vertikální posun by byl \\(y = \\sin x + \\tfrac{\\pi}{3}\\) — přičítáme k výsledné hodnotě, ne do argumentu.`
        },
        {
          label: `o 3 doleva`,
          value: "D",
          feedback: `Chyba syntaxe. Posun je o \\(\\tfrac{\\pi}{3}\\) radiánů, ne o celé číslo \\(3\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_gon_09", regionId: "goniometrie", type: "closed", monsterName: `FW_10I: Koeficient k z grafu`,
      visual_color: "#e040fb", visual_symbol: `cos`, points: 3, trainingTasks: ["t_gon_09"],
      question: `Na obrázku je znázorněn graf funkce \\(h\\colon y = \\cos(kx)\\) pro \\(k > 0\\). Určete hodnotu koeficientu \\(k\\).`,
      diagram: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="128.2" y1="25" x2="128.2" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="25" x2="204.5" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="25" x2="280.8" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="25" x2="357.0" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="37.0" x2="357" y2="37.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="177.0" x2="357" y2="177.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="107" x2="369" y2="107" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,103 376,107 369,111" fill="#e2e8f0"/><text x="379" y="111" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="197" x2="52" y2="17" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,17 52,10 56,17" fill="#e2e8f0"/><text x="52" y="8" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="128.2" y1="104" x2="128.2" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="204.5" y1="104" x2="204.5" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="280.8" y1="104" x2="280.8" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">3π</text><line x1="357.0" y1="104" x2="357.0" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">4π</text><line x1="49" y1="37.0" x2="55" y2="37.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="41.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="177.0" x2="55" y2="177.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="181.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><polyline points="52.0,37.0 52.8,37.0 53.5,37.0 54.3,37.1 55.0,37.1 55.8,37.2 56.6,37.3 57.3,37.4 58.1,37.6 58.9,37.7 59.6,37.9 60.4,38.0 61.1,38.2 61.9,38.5 62.7,38.7 63.4,38.9 64.2,39.2 65.0,39.5 65.7,39.8 66.5,40.1 67.2,40.4 68.0,40.8 68.8,41.1 69.5,41.5 70.3,41.9 71.1,42.3 71.8,42.8 72.6,43.2 73.3,43.7 74.1,44.1 74.9,44.6 75.6,45.1 76.4,45.7 77.2,46.2 77.9,46.7 78.7,47.3 79.5,47.9 80.2,48.5 81.0,49.1 81.7,49.7 82.5,50.4 83.3,51.0 84.0,51.7 84.8,52.4 85.5,53.1 86.3,53.8 87.1,54.5 87.8,55.2 88.6,56.0 89.4,56.7 90.1,57.5 90.9,58.3 91.7,59.1 92.4,59.9 93.2,60.7 93.9,61.5 94.7,62.4 95.5,63.2 96.2,64.1 97.0,65.0 97.8,65.9 98.5,66.7 99.3,67.7 100.0,68.6 100.8,69.5 101.6,70.4 102.3,71.4 103.1,72.3 103.9,73.3 104.6,74.2 105.4,75.2 106.1,76.2 106.9,77.2 107.7,78.2 108.4,79.2 109.2,80.2 109.9,81.2 110.7,82.3 111.5,83.3 112.2,84.3 113.0,85.4 113.8,86.4 114.5,87.5 115.3,88.5 116.1,89.6 116.8,90.7 117.6,91.7 118.3,92.8 119.1,93.9 119.9,95.0 120.6,96.0 121.4,97.1 122.1,98.2 122.9,99.3 123.7,100.4 124.4,101.5 125.2,102.6 126.0,103.7 126.7,104.8 127.5,105.9 128.2,107.0 129.0,108.1 129.8,109.2 130.5,110.3 131.3,111.4 132.1,112.5 132.8,113.6 133.6,114.7 134.3,115.8 135.1,116.9 135.9,118.0 136.6,119.0 137.4,120.1 138.2,121.2 138.9,122.3 139.7,123.3 140.4,124.4 141.2,125.5 142.0,126.5 142.7,127.6 143.5,128.6 144.3,129.7 145.0,130.7 145.8,131.7 146.6,132.8 147.3,133.8 148.1,134.8 148.8,135.8 149.6,136.8 150.4,137.8 151.1,138.8 151.9,139.8 152.7,140.7 153.4,141.7 154.2,142.6 154.9,143.6 155.7,144.5 156.5,145.4 157.2,146.3 158.0,147.3 158.8,148.1 159.5,149.0 160.3,149.9 161.0,150.8 161.8,151.6 162.6,152.5 163.3,153.3 164.1,154.1 164.9,154.9 165.6,155.7 166.4,156.5 167.1,157.3 167.9,158.0 168.7,158.8 169.4,159.5 170.2,160.2 170.9,160.9 171.7,161.6 172.5,162.3 173.2,163.0 174.0,163.6 174.8,164.3 175.5,164.9 176.3,165.5 177.0,166.1 177.8,166.7 178.6,167.3 179.3,167.8 180.1,168.3 180.9,168.9 181.6,169.4 182.4,169.9 183.2,170.3 183.9,170.8 184.7,171.2 185.4,171.7 186.2,172.1 187.0,172.5 187.7,172.9 188.5,173.2 189.2,173.6 190.0,173.9 190.8,174.2 191.5,174.5 192.3,174.8 193.1,175.1 193.8,175.3 194.6,175.5 195.4,175.8 196.1,176.0 196.9,176.1 197.6,176.3 198.4,176.4 199.2,176.6 199.9,176.7 200.7,176.8 201.4,176.9 202.2,176.9 203.0,177.0 203.7,177.0 204.5,177.0 205.3,177.0 206.0,177.0 206.8,176.9 207.6,176.9 208.3,176.8 209.1,176.7 209.8,176.6 210.6,176.4 211.4,176.3 212.1,176.1 212.9,176.0 213.7,175.8 214.4,175.5 215.2,175.3 215.9,175.1 216.7,174.8 217.5,174.5 218.2,174.2 219.0,173.9 219.8,173.6 220.5,173.2 221.3,172.9 222.0,172.5 222.8,172.1 223.6,171.7 224.3,171.2 225.1,170.8 225.8,170.3 226.6,169.9 227.4,169.4 228.1,168.9 228.9,168.3 229.7,167.8 230.4,167.3 231.2,166.7 231.9,166.1 232.7,165.5 233.5,164.9 234.2,164.3 235.0,163.6 235.8,163.0 236.5,162.3 237.3,161.6 238.1,160.9 238.8,160.2 239.6,159.5 240.3,158.8 241.1,158.0 241.9,157.3 242.6,156.5 243.4,155.7 244.2,154.9 244.9,154.1 245.7,153.3 246.4,152.5 247.2,151.6 248.0,150.8 248.7,149.9 249.5,149.0 250.2,148.1 251.0,147.3 251.8,146.3 252.5,145.4 253.3,144.5 254.1,143.6 254.8,142.6 255.6,141.7 256.4,140.7 257.1,139.8 257.9,138.8 258.6,137.8 259.4,136.8 260.2,135.8 260.9,134.8 261.7,133.8 262.5,132.8 263.2,131.7 264.0,130.7 264.7,129.7 265.5,128.6 266.3,127.6 267.0,126.5 267.8,125.5 268.6,124.4 269.3,123.3 270.1,122.3 270.8,121.2 271.6,120.1 272.4,119.0 273.1,118.0 273.9,116.9 274.6,115.8 275.4,114.7 276.2,113.6 276.9,112.5 277.7,111.4 278.5,110.3 279.2,109.2 280.0,108.1 280.8,107.0 281.5,105.9 282.3,104.8 283.0,103.7 283.8,102.6 284.6,101.5 285.3,100.4 286.1,99.3 286.9,98.2 287.6,97.1 288.4,96.0 289.1,95.0 289.9,93.9 290.7,92.8 291.4,91.7 292.2,90.7 293.0,89.6 293.7,88.5 294.5,87.5 295.2,86.4 296.0,85.4 296.8,84.3 297.5,83.3 298.3,82.3 299.0,81.2 299.8,80.2 300.6,79.2 301.3,78.2 302.1,77.2 302.9,76.2 303.6,75.2 304.4,74.2 305.2,73.3 305.9,72.3 306.7,71.4 307.4,70.4 308.2,69.5 309.0,68.6 309.7,67.7 310.5,66.7 311.2,65.9 312.0,65.0 312.8,64.1 313.5,63.2 314.3,62.4 315.1,61.5 315.8,60.7 316.6,59.9 317.3,59.1 318.1,58.3 318.9,57.5 319.6,56.7 320.4,56.0 321.2,55.2 321.9,54.5 322.7,53.8 323.5,53.1 324.2,52.4 325.0,51.7 325.7,51.0 326.5,50.4 327.3,49.7 328.0,49.1 328.8,48.5 329.6,47.9 330.3,47.3 331.1,46.7 331.8,46.2 332.6,45.7 333.4,45.1 334.1,44.6 334.9,44.1 335.6,43.7 336.4,43.2 337.2,42.8 337.9,42.3 338.7,41.9 339.5,41.5 340.2,41.1 341.0,40.8 341.8,40.4 342.5,40.1 343.3,39.8 344.0,39.5 344.8,39.2 345.6,38.9 346.3,38.7 347.1,38.5 347.9,38.2 348.6,38.0 349.4,37.9 350.1,37.7 350.9,37.6 351.7,37.4 352.4,37.3 353.2,37.2 354.0,37.1 354.7,37.1 355.5,37.0 356.2,37.0 357.0,37.0" fill="none" stroke="#0077bb" stroke-width="2.5"/><circle cx="204.5" cy="177.0" r="3" fill="#cc4400" opacity="0.9"/><text x="128.2" y="35.5" font-size="13" fill="#0077bb" font-style="italic">h</text></svg>`,
      instruction: `Vyberte správnou hodnotu koeficientu k.`,
      choices: [
        {
          label: `\\(k = \\dfrac{1}{2}\\)`,
          value: "A",
          feedback: `Přístup povolen. Z grafu \\(T = 4\\pi\\), proto \\(k = \\tfrac{2\\pi}{T} = \\tfrac{2\\pi}{4\\pi} = \\tfrac{1}{2}\\). ✓`
        },
        {
          label: `\\(k = 2\\)`,
          value: "B",
          feedback: `Kritická chyba. Obrácený vzorec — spočítali jste \\(\\tfrac{T}{2\\pi}\\) místo \\(\\tfrac{2\\pi}{T}\\). Větší \\(k\\) znamená kratší periodu, ne delší.`
        },
        {
          label: `\\(k = 1\\)`,
          value: "C",
          feedback: `Chyba. \\(k = 1\\) dává výchozí periodu \\(2\\pi\\) — z grafu však vidíte, že jeden kmit trvá \\(4\\pi\\).`
        },
        {
          label: `\\(k = 4\\)`,
          value: "D",
          feedback: `Chyba. Zaměnili jste periodu za koeficient. Perioda a \\(k\\) nejsou totéž — jaký je mezi nimi vztah?`
        },
      ],
      hints: [
        `Perioda \\(T\\) a koeficient \\(k\\) jsou svázány vztahem \\(T = \\tfrac{2\\pi}{k}\\). Nejprve z grafu odečtěte, kde funkce dokončí první celý kmit (začíná v maximu na ose y).`,
        `Máte-li periodu \\(T\\), vyjádřete \\(k\\): z \\(T = \\tfrac{2\\pi}{k}\\) dostanete \\(k = \\tfrac{2\\pi}{T}\\). Dosaďte odečtenou periodu.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_gon_09", regionId: "goniometrie", type: "closed", monsterName: `SIM_10I: Perioda y = cos(x/2)`,
      isTraining: true, firewallId: "q_gon_09", visual_color: "#2ecc8a", visual_symbol: `cos`, points: 0,
      question: `Jaká je perioda funkce \\(y = \\cos\\!\\left(\\tfrac{x}{2}\\right)\\)?`,
      formula: `$$y = \\text{cos}\\left( \\frac{x}{2} \\right)$$`,
      instruction: `Vyberte správnou periodu.`,
      steps: [
        {
          trigger: `> Krok 1: Identifikace k`,
          content: `\\(y = \\cos(\\tfrac{x}{2}) = \\cos({\\tfrac{1}{2}} \\cdot x)\\) → koeficient \\(k = \\tfrac{1}{2}\\).`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `Na jednotkové kružnici: \\(k = \\tfrac{1}{2}\\) znamená, že bod obíhá <b>poloviční rychlostí</b>. Kolik radiánů potřebuje na celý oběh? Dosaďte \\(k\\) do vzorce \\(T = \\tfrac{2\\pi}{|k|}\\).`
        },
      ],
      choices: [
        {
          label: `\\(4\\pi\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(T = \\tfrac{2\\pi}{1/2} = 4\\pi\\). ✓`
        },
        {
          label: `\\(2\\pi\\)`,
          value: "B",
          feedback: `Chyba. \\(2\\pi\\) je výchozí perioda — nezohledněn koeficient \\(\\tfrac{1}{2}\\).`
        },
        {
          label: `\\(\\pi\\)`,
          value: "C",
          feedback: `Chyba. Perioda \\(\\pi\\) odpovídá \\(y = \\cos(2x)\\), tedy \\(k = 2\\).`
        },
        {
          label: `\\(8\\pi\\)`,
          value: "D",
          feedback: `Chyba. \\(8\\pi\\) by bylo pro \\(y = \\cos(\\tfrac{x}{4})\\), \\(k = \\tfrac{1}{4}\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_gon_10", regionId: "goniometrie", type: "closed", monsterName: `FW_10J: Porovnání sin a cos`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 3, trainingTasks: ["t_gon_10"],
      question: `Na obrázku jsou grafy \\(f\\colon y = \\sin x\\) (modrá) a \\(g\\colon y = \\cos x\\) (zelená) pro \\(x \\in (0;\\, 2\\pi)\\). Pro která \\(x \\in (0;\\, 2\\pi)\\) leží graf \\(f\\) nad grafem \\(g\\)?`,
      diagram: `<svg viewBox="0 0 400 215" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="90.1" y1="28" x2="90.1" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="128.2" y1="28" x2="128.2" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="28" x2="204.5" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="242.6" y1="28" x2="242.6" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="28" x2="280.8" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="28" x2="357.0" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="40.0" x2="357" y2="40.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="180.0" x2="357" y2="180.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="110" x2="369" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,106 376,110 369,114" fill="#e2e8f0"/><text x="379" y="114" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="202" x2="52" y2="20" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,20 52,13 56,20" fill="#e2e8f0"/><text x="52" y="11" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="49" y1="40.0" x2="55" y2="40.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="44.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="180.0" x2="55" y2="180.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="184.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><polyline points="52.0,40.0 52.8,40.0 53.5,40.0 54.3,40.1 55.0,40.1 55.8,40.2 56.6,40.3 57.3,40.4 58.1,40.6 58.9,40.7 59.6,40.9 60.4,41.0 61.1,41.2 61.9,41.5 62.7,41.7 63.4,41.9 64.2,42.2 65.0,42.5 65.7,42.8 66.5,43.1 67.2,43.4 68.0,43.8 68.8,44.1 69.5,44.5 70.3,44.9 71.1,45.3 71.8,45.8 72.6,46.2 73.3,46.7 74.1,47.1 74.9,47.6 75.6,48.1 76.4,48.7 77.2,49.2 77.9,49.7 78.7,50.3 79.5,50.9 80.2,51.5 81.0,52.1 81.7,52.7 82.5,53.4 83.3,54.0 84.0,54.7 84.8,55.4 85.5,56.1 86.3,56.8 87.1,57.5 87.8,58.2 88.6,59.0 89.4,59.7 90.1,60.5 90.9,61.3 91.7,62.1 92.4,62.9 93.2,63.7 93.9,64.5 94.7,65.4 95.5,66.2 96.2,67.1 97.0,68.0 97.8,68.9 98.5,69.7 99.3,70.7 100.0,71.6 100.8,72.5 101.6,73.4 102.3,74.4 103.1,75.3 103.9,76.3 104.6,77.2 105.4,78.2 106.1,79.2 106.9,80.2 107.7,81.2 108.4,82.2 109.2,83.2 109.9,84.2 110.7,85.3 111.5,86.3 112.2,87.3 113.0,88.4 113.8,89.4 114.5,90.5 115.3,91.5 116.1,92.6 116.8,93.7 117.6,94.7 118.3,95.8 119.1,96.9 119.9,98.0 120.6,99.0 121.4,100.1 122.1,101.2 122.9,102.3 123.7,103.4 124.4,104.5 125.2,105.6 126.0,106.7 126.7,107.8 127.5,108.9 128.2,110.0 129.0,111.1 129.8,112.2 130.5,113.3 131.3,114.4 132.1,115.5 132.8,116.6 133.6,117.7 134.3,118.8 135.1,119.9 135.9,121.0 136.6,122.0 137.4,123.1 138.2,124.2 138.9,125.3 139.7,126.3 140.4,127.4 141.2,128.5 142.0,129.5 142.7,130.6 143.5,131.6 144.3,132.7 145.0,133.7 145.8,134.7 146.6,135.8 147.3,136.8 148.1,137.8 148.8,138.8 149.6,139.8 150.4,140.8 151.1,141.8 151.9,142.8 152.7,143.7 153.4,144.7 154.2,145.6 154.9,146.6 155.7,147.5 156.5,148.4 157.2,149.3 158.0,150.3 158.8,151.1 159.5,152.0 160.3,152.9 161.0,153.8 161.8,154.6 162.6,155.5 163.3,156.3 164.1,157.1 164.9,157.9 165.6,158.7 166.4,159.5 167.1,160.3 167.9,161.0 168.7,161.8 169.4,162.5 170.2,163.2 170.9,163.9 171.7,164.6 172.5,165.3 173.2,166.0 174.0,166.6 174.8,167.3 175.5,167.9 176.3,168.5 177.0,169.1 177.8,169.7 178.6,170.3 179.3,170.8 180.1,171.3 180.9,171.9 181.6,172.4 182.4,172.9 183.2,173.3 183.9,173.8 184.7,174.2 185.4,174.7 186.2,175.1 187.0,175.5 187.7,175.9 188.5,176.2 189.2,176.6 190.0,176.9 190.8,177.2 191.5,177.5 192.3,177.8 193.1,178.1 193.8,178.3 194.6,178.5 195.4,178.8 196.1,179.0 196.9,179.1 197.6,179.3 198.4,179.4 199.2,179.6 199.9,179.7 200.7,179.8 201.4,179.9 202.2,179.9 203.0,180.0 203.7,180.0 204.5,180.0 205.3,180.0 206.0,180.0 206.8,179.9 207.6,179.9 208.3,179.8 209.1,179.7 209.8,179.6 210.6,179.4 211.4,179.3 212.1,179.1 212.9,179.0 213.7,178.8 214.4,178.5 215.2,178.3 215.9,178.1 216.7,177.8 217.5,177.5 218.2,177.2 219.0,176.9 219.8,176.6 220.5,176.2 221.3,175.9 222.0,175.5 222.8,175.1 223.6,174.7 224.3,174.2 225.1,173.8 225.8,173.3 226.6,172.9 227.4,172.4 228.1,171.9 228.9,171.3 229.7,170.8 230.4,170.3 231.2,169.7 231.9,169.1 232.7,168.5 233.5,167.9 234.2,167.3 235.0,166.6 235.8,166.0 236.5,165.3 237.3,164.6 238.1,163.9 238.8,163.2 239.6,162.5 240.3,161.8 241.1,161.0 241.9,160.3 242.6,159.5 243.4,158.7 244.2,157.9 244.9,157.1 245.7,156.3 246.4,155.5 247.2,154.6 248.0,153.8 248.7,152.9 249.5,152.0 250.2,151.1 251.0,150.3 251.8,149.3 252.5,148.4 253.3,147.5 254.1,146.6 254.8,145.6 255.6,144.7 256.4,143.7 257.1,142.8 257.9,141.8 258.6,140.8 259.4,139.8 260.2,138.8 260.9,137.8 261.7,136.8 262.5,135.8 263.2,134.7 264.0,133.7 264.7,132.7 265.5,131.6 266.3,130.6 267.0,129.5 267.8,128.5 268.6,127.4 269.3,126.3 270.1,125.3 270.8,124.2 271.6,123.1 272.4,122.0 273.1,121.0 273.9,119.9 274.6,118.8 275.4,117.7 276.2,116.6 276.9,115.5 277.7,114.4 278.5,113.3 279.2,112.2 280.0,111.1 280.8,110.0 281.5,108.9 282.3,107.8 283.0,106.7 283.8,105.6 284.6,104.5 285.3,103.4 286.1,102.3 286.9,101.2 287.6,100.1 288.4,99.0 289.1,98.0 289.9,96.9 290.7,95.8 291.4,94.7 292.2,93.7 293.0,92.6 293.7,91.5 294.5,90.5 295.2,89.4 296.0,88.4 296.8,87.3 297.5,86.3 298.3,85.3 299.0,84.2 299.8,83.2 300.6,82.2 301.3,81.2 302.1,80.2 302.9,79.2 303.6,78.2 304.4,77.2 305.2,76.3 305.9,75.3 306.7,74.4 307.4,73.4 308.2,72.5 309.0,71.6 309.7,70.7 310.5,69.7 311.2,68.9 312.0,68.0 312.8,67.1 313.5,66.2 314.3,65.4 315.1,64.5 315.8,63.7 316.6,62.9 317.3,62.1 318.1,61.3 318.9,60.5 319.6,59.7 320.4,59.0 321.2,58.2 321.9,57.5 322.7,56.8 323.5,56.1 324.2,55.4 325.0,54.7 325.7,54.0 326.5,53.4 327.3,52.7 328.0,52.1 328.8,51.5 329.6,50.9 330.3,50.3 331.1,49.7 331.8,49.2 332.6,48.7 333.4,48.1 334.1,47.6 334.9,47.1 335.6,46.7 336.4,46.2 337.2,45.8 337.9,45.3 338.7,44.9 339.5,44.5 340.2,44.1 341.0,43.8 341.8,43.4 342.5,43.1 343.3,42.8 344.0,42.5 344.8,42.2 345.6,41.9 346.3,41.7 347.1,41.5 347.9,41.2 348.6,41.0 349.4,40.9 350.1,40.7 350.9,40.6 351.7,40.4 352.4,40.3 353.2,40.2 354.0,40.1 354.7,40.1 355.5,40.0 356.2,40.0 357.0,40.0" fill="none" stroke="#228833" stroke-width="2.5"/><text x="66" y="30.1" font-size="12" fill="#228833" font-style="italic">g</text><polyline points="52.0,110.0 52.8,108.9 53.5,107.8 54.3,106.7 55.0,105.6 55.8,104.5 56.6,103.4 57.3,102.3 58.1,101.2 58.9,100.1 59.6,99.0 60.4,98.0 61.1,96.9 61.9,95.8 62.7,94.7 63.4,93.7 64.2,92.6 65.0,91.5 65.7,90.5 66.5,89.4 67.2,88.4 68.0,87.3 68.8,86.3 69.5,85.3 70.3,84.2 71.1,83.2 71.8,82.2 72.6,81.2 73.3,80.2 74.1,79.2 74.9,78.2 75.6,77.2 76.4,76.3 77.2,75.3 77.9,74.4 78.7,73.4 79.5,72.5 80.2,71.6 81.0,70.7 81.7,69.7 82.5,68.9 83.3,68.0 84.0,67.1 84.8,66.2 85.5,65.4 86.3,64.5 87.1,63.7 87.8,62.9 88.6,62.1 89.4,61.3 90.1,60.5 90.9,59.7 91.7,59.0 92.4,58.2 93.2,57.5 93.9,56.8 94.7,56.1 95.5,55.4 96.2,54.7 97.0,54.0 97.8,53.4 98.5,52.7 99.3,52.1 100.0,51.5 100.8,50.9 101.6,50.3 102.3,49.7 103.1,49.2 103.9,48.7 104.6,48.1 105.4,47.6 106.1,47.1 106.9,46.7 107.7,46.2 108.4,45.8 109.2,45.3 109.9,44.9 110.7,44.5 111.5,44.1 112.2,43.8 113.0,43.4 113.8,43.1 114.5,42.8 115.3,42.5 116.1,42.2 116.8,41.9 117.6,41.7 118.3,41.5 119.1,41.2 119.9,41.0 120.6,40.9 121.4,40.7 122.1,40.6 122.9,40.4 123.7,40.3 124.4,40.2 125.2,40.1 126.0,40.1 126.7,40.0 127.5,40.0 128.2,40.0 129.0,40.0 129.8,40.0 130.5,40.1 131.3,40.1 132.1,40.2 132.8,40.3 133.6,40.4 134.3,40.6 135.1,40.7 135.9,40.9 136.6,41.0 137.4,41.2 138.2,41.5 138.9,41.7 139.7,41.9 140.4,42.2 141.2,42.5 142.0,42.8 142.7,43.1 143.5,43.4 144.3,43.8 145.0,44.1 145.8,44.5 146.6,44.9 147.3,45.3 148.1,45.8 148.8,46.2 149.6,46.7 150.4,47.1 151.1,47.6 151.9,48.1 152.7,48.7 153.4,49.2 154.2,49.7 154.9,50.3 155.7,50.9 156.5,51.5 157.2,52.1 158.0,52.7 158.8,53.4 159.5,54.0 160.3,54.7 161.0,55.4 161.8,56.1 162.6,56.8 163.3,57.5 164.1,58.2 164.9,59.0 165.6,59.7 166.4,60.5 167.1,61.3 167.9,62.1 168.7,62.9 169.4,63.7 170.2,64.5 170.9,65.4 171.7,66.2 172.5,67.1 173.2,68.0 174.0,68.9 174.8,69.7 175.5,70.7 176.3,71.6 177.0,72.5 177.8,73.4 178.6,74.4 179.3,75.3 180.1,76.3 180.9,77.2 181.6,78.2 182.4,79.2 183.2,80.2 183.9,81.2 184.7,82.2 185.4,83.2 186.2,84.2 187.0,85.3 187.7,86.3 188.5,87.3 189.2,88.4 190.0,89.4 190.8,90.5 191.5,91.5 192.3,92.6 193.1,93.7 193.8,94.7 194.6,95.8 195.4,96.9 196.1,98.0 196.9,99.0 197.6,100.1 198.4,101.2 199.2,102.3 199.9,103.4 200.7,104.5 201.4,105.6 202.2,106.7 203.0,107.8 203.7,108.9 204.5,110.0 205.3,111.1 206.0,112.2 206.8,113.3 207.6,114.4 208.3,115.5 209.1,116.6 209.8,117.7 210.6,118.8 211.4,119.9 212.1,121.0 212.9,122.0 213.7,123.1 214.4,124.2 215.2,125.3 215.9,126.3 216.7,127.4 217.5,128.5 218.2,129.5 219.0,130.6 219.8,131.6 220.5,132.7 221.3,133.7 222.0,134.7 222.8,135.8 223.6,136.8 224.3,137.8 225.1,138.8 225.8,139.8 226.6,140.8 227.4,141.8 228.1,142.8 228.9,143.7 229.7,144.7 230.4,145.6 231.2,146.6 231.9,147.5 232.7,148.4 233.5,149.3 234.2,150.3 235.0,151.1 235.8,152.0 236.5,152.9 237.3,153.8 238.1,154.6 238.8,155.5 239.6,156.3 240.3,157.1 241.1,157.9 241.9,158.7 242.6,159.5 243.4,160.3 244.2,161.0 244.9,161.8 245.7,162.5 246.4,163.2 247.2,163.9 248.0,164.6 248.7,165.3 249.5,166.0 250.2,166.6 251.0,167.3 251.8,167.9 252.5,168.5 253.3,169.1 254.1,169.7 254.8,170.3 255.6,170.8 256.4,171.3 257.1,171.9 257.9,172.4 258.6,172.9 259.4,173.3 260.2,173.8 260.9,174.2 261.7,174.7 262.5,175.1 263.2,175.5 264.0,175.9 264.7,176.2 265.5,176.6 266.3,176.9 267.0,177.2 267.8,177.5 268.6,177.8 269.3,178.1 270.1,178.3 270.8,178.5 271.6,178.8 272.4,179.0 273.1,179.1 273.9,179.3 274.6,179.4 275.4,179.6 276.2,179.7 276.9,179.8 277.7,179.9 278.5,179.9 279.2,180.0 280.0,180.0 280.8,180.0 281.5,180.0 282.3,180.0 283.0,179.9 283.8,179.9 284.6,179.8 285.3,179.7 286.1,179.6 286.9,179.4 287.6,179.3 288.4,179.1 289.1,179.0 289.9,178.8 290.7,178.5 291.4,178.3 292.2,178.1 293.0,177.8 293.7,177.5 294.5,177.2 295.2,176.9 296.0,176.6 296.8,176.2 297.5,175.9 298.3,175.5 299.0,175.1 299.8,174.7 300.6,174.2 301.3,173.8 302.1,173.3 302.9,172.9 303.6,172.4 304.4,171.9 305.2,171.3 305.9,170.8 306.7,170.3 307.4,169.7 308.2,169.1 309.0,168.5 309.7,167.9 310.5,167.3 311.2,166.6 312.0,166.0 312.8,165.3 313.5,164.6 314.3,163.9 315.1,163.2 315.8,162.5 316.6,161.8 317.3,161.0 318.1,160.3 318.9,159.5 319.6,158.7 320.4,157.9 321.2,157.1 321.9,156.3 322.7,155.5 323.5,154.6 324.2,153.8 325.0,152.9 325.7,152.0 326.5,151.1 327.3,150.3 328.0,149.3 328.8,148.4 329.6,147.5 330.3,146.6 331.1,145.6 331.8,144.7 332.6,143.7 333.4,142.8 334.1,141.8 334.9,140.8 335.6,139.8 336.4,138.8 337.2,137.8 337.9,136.8 338.7,135.8 339.5,134.7 340.2,133.7 341.0,132.7 341.8,131.6 342.5,130.6 343.3,129.5 344.0,128.5 344.8,127.4 345.6,126.3 346.3,125.3 347.1,124.2 347.9,123.1 348.6,122.0 349.4,121.0 350.1,119.9 350.9,118.8 351.7,117.7 352.4,116.6 353.2,115.5 354.0,114.4 354.7,113.3 355.5,112.2 356.2,111.1 357.0,110.0" fill="none" stroke="#0077bb" stroke-width="2.5"/><text x="146.6" y="34.9" font-size="12" fill="#0077bb" font-style="italic">f</text><circle cx="90.1" cy="60.5" r="4" fill="#cc4400"/><circle cx="242.6" cy="159.5" r="4" fill="#cc4400"/><rect x="295" y="10" width="10" height="10" fill="#0077bb"/><text x="309" y="19" font-size="9" fill="#e2e8f0">f: sin x</text><rect x="295" y="24" width="10" height="10" fill="#228833"/><text x="309" y="33" font-size="9" fill="#e2e8f0">g: cos x</text></svg>`,
      instruction: `Vyberte správný interval.`,
      choices: [
        {
          label: `\\(\\left( \\frac{\\pi}{4};\\mspace{6mu}\\frac{5\\pi}{4} \\right)\\)`,
          value: "A",
          feedback: `Přístup povolen. Oba průsečíky grafů správně identifikovány — \\(\\sin x > \\cos x\\) přesně na tomto intervalu. ✓`
        },
        {
          label: `\\(\\left( 0;\\mspace{6mu}\\frac{\\pi}{4} \\right) \\cup \\left( \\frac{5\\pi}{4};\\mspace{6mu} 2\\pi \\right)\\)`,
          value: "B",
          feedback: `Chyba. Toto je opačný interval — kde \\(\\cos x > \\sin x\\), nikoli \\(\\sin x > \\cos x\\).`
        },
        {
          label: `\\(\\left( \\frac{\\pi}{4};\\mspace{6mu}\\frac{3\\pi}{4} \\right)\\)`,
          value: "C",
          feedback: `Chyba. Interval je neúplný. Pro \\(x \\in (\\tfrac{3\\pi}{4};\\, \\tfrac{5\\pi}{4})\\) platí \\(\\sin x > \\cos x\\) také — ověř třeba v \\(x = \\pi\\): \\(\\sin \\pi = 0 > \\cos \\pi = -1\\).`
        },
        {
          label: `\\(\\left( 0;\\mspace{6mu}\\frac{\\pi}{2} \\right)\\)`,
          value: "D",
          feedback: `Kritická chyba. Pro \\(x \\in (0;\\, \\tfrac{\\pi}{4})\\) platí \\(\\sin x < \\cos x\\) — analýza musí začít od průsečíku v \\(\\tfrac{\\pi}{4}\\).`
        },
      ],
      hints: [
        `Oba grafy se v \\((0;\\, 2\\pi)\\) protínají ve dvou bodech — kde platí \\(\\sin x = \\cos x\\)? Z průsečíků odvoďte, na jakých intervalech leží \\(f\\) nad \\(g\\).`,
        `Na jednotkové kružnici: \\(\\sin x = \\cos x\\) odpovídá bodům na přímce \\(y = x\\). Kde tato přímka protíná kružnici? A ve které části kružnice je y-souřadnice větší než x-souřadnice?`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_gon_10", regionId: "goniometrie", type: "closed", monsterName: `SIM_10J: Průsečík sin a cos`,
      isTraining: true, firewallId: "q_gon_10", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `V bodě \\(x = \\tfrac{\\pi}{4}\\) platí \\(\\sin\\tfrac{\\pi}{4} = \\cos\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{2}}{2}\\). Jak se porovnání změní pro \\(x\\) těsně větší než \\(\\tfrac{\\pi}{4}\\) (např. \\(x = \\tfrac{\\pi}{3}\\))?`,
      formula: `$$\\text{sin}\\frac{\\pi}{4} = \\text{cos}\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$$`,
      instruction: `Vyberte správné tvrzení pro x = π/3.`,
      steps: [
        {
          trigger: `> Krok 0: Průsečík na kružnici`,
          content: `Na jednotkové kružnici: \\(\\sin x = \\cos x\\) nastane, když y-souřadnice = x-souřadnice bodu. To odpovídá přímce \\(y = x\\) — diagonála 45°. Tato přímka protíná kružnici v úhlech \\(\\tfrac{\\pi}{4}\\) a \\(\\tfrac{5\\pi}{4}\\).`
        },
        {
          trigger: `> Krok 1: Výpočet v π/3`,
          content: `Pro úhel \\(\\tfrac{\\pi}{3}\\) platí, že jeden z hodnot \\(\\sin\\) a \\(\\cos\\) je \\(\\tfrac{\\sqrt{3}}{2}\\) a druhý \\(\\tfrac{1}{2}\\). Který je který?`
        },
        {
          trigger: `> Krok 2: Porovnání`,
          content: `\\(\\tfrac{\\sqrt{3}}{2} > \\tfrac{1}{2}\\), tedy \\(\\sin(\\tfrac{\\pi}{3}) > \\cos(\\tfrac{\\pi}{3})\\). Po překročení průsečíku v \\(\\tfrac{\\pi}{4}\\) je \\(\\sin\\) <b>větší než \\(\\cos\\)</b>.`
        },
      ],
      choices: [
        {
          label: `\\(\\text{sin}\\frac{\\pi}{3} < \\text{cos}\\frac{\\pi}{3}\\)`,
          value: "A",
          feedback: `Chyba. \\(\\sin(\\tfrac{\\pi}{3}) = \\tfrac{\\sqrt{3}}{2} \\approx 0{,}87 > \\cos(\\tfrac{\\pi}{3}) = \\tfrac{1}{2}\\).`
        },
        {
          label: `\\(\\text{sin}\\frac{\\pi}{3} = \\text{cos}\\frac{\\pi}{3}\\)`,
          value: "B",
          feedback: `Chyba. Rovnost nastane jen v \\(\\tfrac{\\pi}{4}\\) (a \\(\\tfrac{5\\pi}{4}\\)) — ne v \\(\\tfrac{\\pi}{3}\\).`
        },
        {
          label: `nelze porovnat`,
          value: "C",
          feedback: `Chyba. Obě hodnoty jsou přesně definovaná čísla.`
        },
        {
          label: `\\(\\text{sin}\\frac{\\pi}{3} > \\text{cos}\\frac{\\pi}{3}\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(\\tfrac{\\sqrt{3}}{2} > \\tfrac{1}{2}\\). Po průsečíku v \\(\\tfrac{\\pi}{4}\\) platí \\(\\sin x > \\cos x\\). ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },

    // ==========================================
    // ANALYTIKA — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_ana_01", regionId: "analytika", type: "closed", monsterName: `FW_06A: Rovnice z bodu a vektoru`,
      visual_color: "#e74c3c", visual_symbol: `→n`, points: 2, trainingTasks: ["t_ana_01"],
      question: `Přímka p prochází bodem \\(B[3;\\ -1]\\) a má směrový vektor \\(\\overrightarrow{u} = (2;1)\\).`,
      instruction: `Vyberte obecnou rovnici přímky p.`,
      choices: [
        {
          label: `\\(x + 2y + 1 = 0\\)`,
          value: "A",
          feedback: `Kritická chyba. Tento výraz neplatí pro bod \\(B\\): \\(3 + 2 \\cdot (-1) + 1 = 2 \\neq 0\\).`
        },
        {
          label: `\\(2x - y - 7 = 0\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Normálový vektor přímky musí být kolmý ke směrovému vektoru, nikoli totožný s ním.`
        },
        {
          label: `\\(x - 2y - 5 = 0\\)`,
          value: "C",
          feedback: `Přístup povolen. Normálový vektor \\(\\overrightarrow{n} = (1;\\ -2)\\) je kolmý k \\(\\overrightarrow{u} = (2;\\ 1)\\): skalární součin = 0. Dosazení bodu \\(B\\) ověří konstantu.`
        },
        {
          label: `\\(x - 2y + 5 = 0\\)`,
          value: "D",
          feedback: `Logická chyba. Správný normálový vektor, ale chyba ve znaménku konstanty při dosazení bodu B.`
        },
      ],
      hints: [
        `Pro získání obecného tvaru přímky potřebuješ normálový vektor. Ten je kolmý na směrový vektor. Složky tohoto vektoru získáš šikovným otočením jeho složek. Ověř skalárním součinem \\(\\overrightarrow{n} \\cdot \\overrightarrow{u} = 0\\) (kritérium kolmosti).`,
        `Jak vypadá obecný tvar rovnice přímky? Známe nějaký bod na přímce p? Co musí takový bod splňovat vzhledem k rovnici přímky?`,
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_ana_01", regionId: "analytika", type: "closed", monsterName: `SIM_06A: Normálový vektor`,
      isTraining: true, firewallId: "q_ana_01", visual_color: "#2ecc8a", visual_symbol: `→n`, points: 0,
      question: `Přímka p má směrový vektor \\(\\overrightarrow{u} = (1;\\ 2)\\). Který z vektorů je normálový vektor přímky p?`,
      instruction: `Vyberte správný normálový vektor.`,
      steps: [
        {
          trigger: `> Krok 1: Co je normálový vektor?`,
          content: `Normálový vektor přímky je kolmý ke směrovému vektoru. Podmínka kolmosti: skalární součin \\(\\overrightarrow{n} \\cdot \\overrightarrow{u} = 0\\). Ze směrového vektoru \\(\\overrightarrow{u} = (a;\\ b)\\) tedy dostaneme normálový vektor otočením: \\(\\overrightarrow{n} = (b;\\ -a)\\) nebo \\(\\overrightarrow{n} = (-b;\\ a)\\).`
        },
        {
          trigger: `> Krok 2: Ověření kolmosti`,
          content: `Jak pomocí skalárního součinu ověříte, zda je konkrétní vektor kolmý na \\(\\vec{u}\\)?`
        },
      ],
      choices: [
        {
          label: `\\((1;\\  - 2)\\)`,
          value: "A",
          feedback: `Chyba: \\(1 \\cdot 1 + 2 \\cdot (-2) = -3 \\neq 0\\). Zkuste jiný vektor.`
        },
        {
          label: `\\((2;\\ 1)\\)`,
          value: "B",
          feedback: `Chyba: \\(1 \\cdot 2 + 2 \\cdot 1 = 4 \\neq 0\\). Součin musí být nula.`
        },
        {
          label: `\\((2;\\  - 1)\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(1 \\cdot 2 + 2 \\cdot (-1) = 0\\) ✓`
        },
        {
          label: `\\((1;\\ 2)\\)`,
          value: "D",
          feedback: `Kritická chyba. Tento vektor je totožný se směrovým vektorem — normálový musí být kolmý.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_ana_02", regionId: "analytika", type: "closed", monsterName: `FW_06B: Průsečík přímek`,
      visual_color: "#e74c3c", visual_symbol: `∩`, points: 3, trainingTasks: ["t_ana_02"],
      question: `V rovině jsou dány přímky \\(p:x + y - 5 = 0\\) a \\(q:2x - y - 1 = 0\\).`,
      instruction: `Vypočtěte souřadnice průsečíku P přímek p a q.`,
      choices: [
        {
          label: `\\(P\\lbrack 3;\\ 2\\rbrack\\)`,
          value: "A",
          feedback: `Chyba v eliminaci. Zkontrolujte sčítání rovnic — výsledné x vychází jinak.`
        },
        {
          label: `\\(P\\lbrack 2;\\ 3\\rbrack\\)`,
          value: "B",
          feedback: `Přístup povolen. Sečtením rovnic: 3x = 6 → x = 2; y = 3. Obě přímky ověřeny.`
        },
        {
          label: `\\(P\\lbrack 1;\\ 4\\rbrack\\)`,
          value: "C",
          feedback: `Protokol zamítnut. Přímka q: \\(2 \\cdot 1 - 4 - 1 = -3 \\neq 0\\). Bod \\([1;\\ 4]\\) neleží na q.`
        },
        {
          label: `\\(P\\lbrack 4;\\ 1\\rbrack\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Přehozené souřadnice — zkontrolujte, která hodnota je x a která y.`
        },
      ],
      hints: [
        `Průsečík přímek splňuje obě rovnice najednou. Napiš soustavu dvou rovnic se dvěma neznámými \\(x\\) a \\(y\\) a vyřeš ji.`,
        `Soustavu dvou rovnic se dvěma neznámými lze řešit sčítací nebo dosazovací metodou. Podívejte se na koeficienty u \\(y\\) — napoví vám, která metoda je výhodnější.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_ana_02", regionId: "analytika", type: "closed", monsterName: `SIM_06B: Průsečík substitucí`,
      isTraining: true, firewallId: "q_ana_02", visual_color: "#2ecc8a", visual_symbol: `∩`, points: 0,
      question: `Přímky \\(r:2x + y = 7\\) a \\(s:x - y = 2\\) se protínají v bodě P. Vyjádřete x ze přímky s a dosaďte do r.`,
      instruction: `Jaké jsou souřadnice průsečíku P?`,
      steps: [
        {
          trigger: `> Krok 1: Dosazovací metoda`,
          content: `Z jedné rovnice vyjádřete jednu neznámou a dosaďte do druhé. Která rovnice se k tomu hodí lépe?`
        },
        {
          trigger: `> Krok 2: Zpětné dosazení`,
          content: `Po vyřešení jedné neznámé ji dosaďte zpět a dopočítejte druhou. Ověřte výsledek v obou rovnicích.`
        },
      ],
      choices: [
        {
          label: `\\(P\\lbrack 4;\\ 1\\rbrack\\)`,
          value: "A",
          feedback: `Chyba při dosazení. Zkontrolujte výpočet 2(y+2)+y = 7.`
        },
        {
          label: `\\(P\\lbrack 3;\\  - 1\\rbrack\\)`,
          value: "B",
          feedback: `Chyba v znaménku. y vychází kladné — přehledněte výpočet 3y = 3.`
        },
        {
          label: `\\(P\\lbrack 1;\\ 3\\rbrack\\)`,
          value: "C",
          feedback: `Přehozené souřadnice. Zkontrolujte, která hodnota odpovídá \\(x\\) a která \\(y\\).`
        },
        {
          label: `\\(P\\lbrack 3;\\ 1\\rbrack\\)`,
          value: "D",
          feedback: `Logika potvrzena. Ověření: r: 6+1=7 ✓, s: 3−1=2 ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
            {
      id: "q_ana_03", regionId: "analytika", type: "closed", monsterName: `FW_06C: Vektory v trojúhelníku`,
      visual_color: "#e74c3c", visual_symbol: `½(ū+v̄)`, points: 3, trainingTasks: ["t_ana_03"],
    diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="160,45 75,195 245,195" fill="none" stroke="#334155" stroke-width="1.5"/> <line x1="75" y1="195" x2="245" y2="195" stroke="#334155" stroke-width="1.5"/> <circle cx="160" cy="195" r="3" fill="#64748b"/> <text x="154" y="213" fill="#94a3b8" font-size="12">S</text> <text x="156" y="38" fill="#e2e8f0" font-size="13" font-weight="bold">A</text> <text x="57" y="200" fill="#e2e8f0" font-size="13" font-weight="bold">B</text> <text x="249" y="200" fill="#e2e8f0" font-size="13" font-weight="bold">C</text> <defs><marker id="mu" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0077bb"/></marker><marker id="mv" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#7733aa"/></marker><marker id="mas" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#e74c3c"/></marker></defs> <line x1="160" y1="45" x2="84" y2="182" stroke="#0077bb" stroke-width="2.5" marker-end="url(#mu)"/> <text x="100" y="118" fill="#0077bb" font-size="13">ū</text> <line x1="160" y1="45" x2="236" y2="182" stroke="#7733aa" stroke-width="2.5" marker-end="url(#mv)"/> <text x="212" y="118" fill="#7733aa" font-size="13">v̄</text> <line x1="160" y1="45" x2="160" y2="181" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="6,3" marker-end="url(#mas)"/> <text x="165" y="125" fill="#e74c3c" font-size="12" font-weight="bold">AS</text> </svg>`,
      question: `Je dán rovnostranný trojúhelník ABC. Bod S je střed strany BC. Označme \\(\\overrightarrow{u} = \\overrightarrow{AB}\\), \\(\\overrightarrow{v} = \\overrightarrow{AC}\\).`,
      instruction: `Vyberte výraz, který vyjadřuje vektor \\(\\overrightarrow{AS}\\).`,
      choices: [
      {
        label: `\\(\\overrightarrow{u} + \\overrightarrow{v}\\)`,
        value: "A",
        feedback: `Přetečení. \\(\\overrightarrow{u} + \\overrightarrow{v}\\) odpovídá bodu D takovému, že ABDC je rovnoběžník — překročili jste střed strany o celou polovinu.`
      },
      {
        label: `\\(\\tfrac{1}{2}(\\overrightarrow{u} + \\overrightarrow{v})\\)`,
        value: "B",
        feedback: `Přístup povolen. \\(\\overrightarrow{AS} = \\overrightarrow{AB} + \\overrightarrow{BS} = \\overrightarrow{u} + \\tfrac{1}{2}(\\overrightarrow{v} - \\overrightarrow{u}) = \\tfrac{1}{2}(\\overrightarrow{u} + \\overrightarrow{v})\\) ✓`
      },
      {
        label: `\\(\\overrightarrow{v} - \\overrightarrow{u}\\)`,
        value: "C",
        feedback: `Chyba syntaxe. \\(\\overrightarrow{v} - \\overrightarrow{u} = \\overrightarrow{AC} - \\overrightarrow{AB} = \\overrightarrow{BC}\\) — dostali jste vektor podél strany, ne těžnici k jejímu středu.`
      },
      {
        label: `\\(\\tfrac{1}{2}(\\overrightarrow{v} - \\overrightarrow{u})\\)`,
        value: "D",
        feedback: `Nekompletní. \\(\\tfrac{1}{2}(\\overrightarrow{v} - \\overrightarrow{u}) = \\overrightarrow{BS}\\) — dorazili jste do S, ale startovali z B, nikoli z A.`
      },
      ],
      hints: [
      `S leží uprostřed BC. Jak vyjádříte vektor \\(\\overrightarrow{BS}\\) pomocí vektoru \\(\\overrightarrow{BC}\\)?`,
      `Zkuste cestu A → B → S. Vektor \\(\\overrightarrow{BC}\\) vyjádřete z ū a v̄, pak využijte, že \\(\\overrightarrow{BS} = \\tfrac{1}{2}\\overrightarrow{BC}\\).`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
            {
      id: "t_ana_03", regionId: "analytika", type: "closed", monsterName: `SIM_06C: Rozklad v trojúhelníku`,
      isTraining: true, firewallId: "q_ana_03", visual_color: "#2ecc8a", visual_symbol: `v̄−ū`, points: 0,
      question: `Je dán rovnostranný trojúhelník ABC, \\(\\overrightarrow{u} = \\overrightarrow{AB}\\), \\(\\overrightarrow{v} = \\overrightarrow{AC}\\).`,
      instruction: `Vyjádřete vektor \\(\\overrightarrow{BC}\\) pomocí ū a v̄.`,
      steps: [
      {
        trigger: `> Krok 1: Cesta přes A`,
        content: `Z bodu B se chcete dostat do C. Přes který společný bod vede cesta pomocí vektorů ū a v̄? Zkuste B → A → C.`
      },
      {
        trigger: `> Krok 2: Složení vektorů`,
        content: `\\(\\overrightarrow{BC} = \\overrightarrow{BA} + \\overrightarrow{AC}\\). Jak zapíšete \\(\\overrightarrow{BA}\\) pomocí ū? Nezapomeňte na směr.`
      },
      ],
      choices: [
      {
        label: `\\(\\overrightarrow{v} - \\overrightarrow{u}\\)`,
        value: "A",
        feedback: `Logika potvrzena. \\(\\overrightarrow{BC} = \\overrightarrow{BA} + \\overrightarrow{AC} = -\\overrightarrow{u} + \\overrightarrow{v} = \\overrightarrow{v} - \\overrightarrow{u}\\) ✓`
      },
      {
        label: `\\(\\overrightarrow{u} - \\overrightarrow{v}\\)`,
        value: "B",
        feedback: `Chyba ve směru. \\(\\overrightarrow{u} - \\overrightarrow{v} = \\overrightarrow{CB}\\) — otočili jste vektor, míříte z C do B, ne z B do C.`
      },
      {
        label: `\\(\\overrightarrow{u} + \\overrightarrow{v}\\)`,
        value: "C",
        feedback: `Chyba v operaci. \\(\\overrightarrow{u} + \\overrightarrow{v} = \\overrightarrow{AB} + \\overrightarrow{AC}\\) — to by vedlo do bodu D rovnoběžníku, nikoli do C z B.`
      },
      {
        label: `\\(\\tfrac{1}{2}(\\overrightarrow{u} + \\overrightarrow{v})\\)`,
        value: "D",
        feedback: `Chyba kontextu. \\(\\tfrac{1}{2}(\\overrightarrow{u} + \\overrightarrow{v}) = \\overrightarrow{AS}\\) — to je těžnice z A ke středu BC, ne vektor podél celé strany.`
      },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
            {
      id: "q_ana_04", regionId: "analytika", type: "closed", monsterName: `FW_06D: Umístění vektoru`,
      visual_color: "#e74c3c", visual_symbol: `AC̄`, points: 3, trainingTasks: ["t_ana_04"],
      question: `Jsou dány body \\(A[2;\\ 1]\\) a \\(B[8;\\ -3]\\). Orientovaná úsečka \\(\\overrightarrow{AC}\\) je umístěním vektoru \\(\\overrightarrow{u} = (6;\\ -2)\\).`,
      instruction: `Které z níže uvedených tvrzení je pravdivé?`,
      choices: [
      {
        label: `Bod C má souřadnice \\([8;\\ 1]\\).`,
        value: "A",
        feedback: `Chyba syntaxe. \\(C_y = A_y + u_y = 1 + (-2) = -1\\), nikoli \\(1\\). Zapomněli jste odečíst druhou složku vektoru.`
      },
      {
        label: `Vzdálenost bodů A, C je \\(\\sqrt{52}\\).`,
        value: "B",
        feedback: `Chyba syntaxe. \\(|\\overrightarrow{AC}| = |\\overrightarrow{u}| = \\sqrt{36+4} = \\sqrt{40}\\). Vzdálenost \\(\\sqrt{52}\\) je \\(|AB|\\) — záměna délky AC s délkou AB.`
      },
      {
        label: `Střed úsečky AC má souřadnice \\([5;\\ 0]\\).`,
        value: "C",
        feedback: `Přístup povolen. \\(\\text{Střed} = \\tfrac{A+C}{2} = \\tfrac{[2;1]+[8;-1]}{2} = [5;\\ 0]\\) ✓`
      },
      {
        label: `Vektor \\(\\overrightarrow{u}\\) je normálovým vektorem přímky AC.`,
        value: "D",
        feedback: `Kritická chyba. \\(\\overrightarrow{u} = \\overrightarrow{AC}\\) je přímce AC rovnoběžný — je to její SMĚROVÝ vektor. Normálový by byl kolmý: \\((2;\\ 6)\\) nebo \\((1;\\ 3)\\).`
      },
      ],
      hints: [
      `Jak souvisí souřadnice koncového bodu orientované úsečky se souřadnicemi počátečního bodu a vektoru?`,
      `Zkontrolujte každé tvrzení samostatně: (B) délka AC vs. AB, (C) střed AC vs. střed AB, (D) směrový vs. normálový vektor.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
            {
      id: "t_ana_04", regionId: "analytika", type: "closed", monsterName: `SIM_06D: Umístění vektoru — souřadnice C`,
      isTraining: true, firewallId: "q_ana_04", visual_color: "#2ecc8a", visual_symbol: `C`, points: 0,
    formula: `$$C = A + \\overrightarrow{u}$$`,
      question: `Bod \\(A[1;\\ 0]\\). Orientovaná úsečka \\(\\overrightarrow{AC}\\) je umístěním vektoru \\(\\overrightarrow{u} = (3;\\ 2)\\).`,
      instruction: `Jaké jsou souřadnice bodu C?`,
      steps: [
      {
        trigger: `> Krok 1: Umístění vektoru`,
        content: `Orientovaná úsečka \\(\\overrightarrow{AC}\\) je umístěním vektoru \\(\\overrightarrow{u}\\). Jak ze souřadnic bodu A a vektoru \\(\\overrightarrow{u}\\) získáte souřadnice bodu C?`
      },
      {
        trigger: `> Krok 2: Výpočet po složkách`,
        content: `Sečtěte odpovídající souřadnice. Pozor na znaménka jednotlivých složek.`
      },
      ],
      choices: [
      {
        label: `\\([3;\\ 2]\\)`,
        value: "A",
        feedback: `Chyba: dali jste souřadnice vektoru ū místo součtu A+ū. Bodu C je A posunutý o ū.`
      },
      {
        label: `\\([4;\\ 2]\\)`,
        value: "B",
        feedback: `Přístup povolen. \\(C = [1+3;\\ 0+2] = [4;\\ 2]\\) ✓`
      },
      {
        label: `\\([-2;\\ -2]\\)`,
        value: "C",
        feedback: `Chyba: odečetli jste místo sečetli. C = A + ū, nikoli A − ū.`
      },
      {
        label: `\\([4;\\ 0]\\)`,
        value: "D",
        feedback: `Chyba: přičetli jste pouze x-složku vektoru, y-složka 2 se přičíst musí také.`
      },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
            {
      id: "q_ana_05", regionId: "analytika", type: "closed", monsterName: `FW_06E: Směrový vektor z normálového`,
      visual_color: "#e74c3c", visual_symbol: `s⃗`, points: 4, trainingTasks: ["t_ana_05"],
    diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="70" y1="20" x2="70" y2="200" stroke="#334155" stroke-width="0.5"/> <line x1="100" y1="20" x2="100" y2="200" stroke="#334155" stroke-width="0.5"/> <line x1="130" y1="20" x2="130" y2="200" stroke="#334155" stroke-width="0.5"/> <line x1="160" y1="20" x2="160" y2="200" stroke="#334155" stroke-width="0.5"/> <line x1="190" y1="20" x2="190" y2="200" stroke="#334155" stroke-width="0.5"/> <line x1="220" y1="20" x2="220" y2="200" stroke="#334155" stroke-width="0.5"/> <line x1="250" y1="20" x2="250" y2="200" stroke="#334155" stroke-width="0.5"/> <line x1="40" y1="170" x2="270" y2="170" stroke="#334155" stroke-width="0.5"/> <line x1="40" y1="140" x2="270" y2="140" stroke="#334155" stroke-width="0.5"/> <line x1="40" y1="110" x2="270" y2="110" stroke="#334155" stroke-width="0.5"/> <line x1="40" y1="80" x2="270" y2="80" stroke="#334155" stroke-width="0.5"/> <line x1="40" y1="50" x2="270" y2="50" stroke="#334155" stroke-width="0.5"/> <line x1="40" y1="200" x2="275" y2="200" stroke="#94a3b8" stroke-width="1.5"/> <polygon points="277,200 269,196 269,204" fill="#94a3b8"/> <line x1="40" y1="200" x2="40" y2="18" stroke="#94a3b8" stroke-width="1.5"/> <polygon points="40,16 36,24 44,24" fill="#94a3b8"/> <text x="280" y="204" fill="#94a3b8" font-size="11">x</text> <text x="44" y="14" fill="#94a3b8" font-size="11">y</text> <line x1="70" y1="197" x2="70" y2="203" stroke="#94a3b8" stroke-width="1"/> <text x="67" y="214" fill="#64748b" font-size="10">1</text> <line x1="100" y1="197" x2="100" y2="203" stroke="#94a3b8" stroke-width="1"/> <text x="97" y="214" fill="#64748b" font-size="10">2</text> <line x1="130" y1="197" x2="130" y2="203" stroke="#94a3b8" stroke-width="1"/> <text x="127" y="214" fill="#64748b" font-size="10">3</text> <line x1="160" y1="197" x2="160" y2="203" stroke="#94a3b8" stroke-width="1"/> <text x="157" y="214" fill="#64748b" font-size="10">4</text> <line x1="190" y1="197" x2="190" y2="203" stroke="#94a3b8" stroke-width="1"/> <text x="187" y="214" fill="#64748b" font-size="10">5</text> <line x1="220" y1="197" x2="220" y2="203" stroke="#94a3b8" stroke-width="1"/> <text x="217" y="214" fill="#64748b" font-size="10">6</text> <line x1="37" y1="170" x2="43" y2="170" stroke="#94a3b8" stroke-width="1"/> <text x="28" y="173" fill="#64748b" font-size="10">1</text> <line x1="37" y1="140" x2="43" y2="140" stroke="#94a3b8" stroke-width="1"/> <text x="28" y="143" fill="#64748b" font-size="10">2</text> <line x1="37" y1="110" x2="43" y2="110" stroke="#94a3b8" stroke-width="1"/> <text x="28" y="113" fill="#64748b" font-size="10">3</text> <line x1="37" y1="80" x2="43" y2="80" stroke="#94a3b8" stroke-width="1"/> <text x="28" y="83" fill="#64748b" font-size="10">4</text> <line x1="37" y1="50" x2="43" y2="50" stroke="#94a3b8" stroke-width="1"/> <text x="28" y="53" fill="#64748b" font-size="10">5</text> <defs><marker id="eu05" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0077bb"/></marker><marker id="ev05" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#7733aa"/></marker></defs> <circle cx="70" cy="170" r="3" fill="#64748b"/> <circle cx="160" cy="140" r="3" fill="#64748b"/> <line x1="70" y1="170" x2="125" y2="88" stroke="#0077bb" stroke-width="2.5" marker-end="url(#eu05)"/> <text x="75" y="128" fill="#0077bb" font-size="13" font-weight="bold">ū</text> <line x1="160" y1="140" x2="186" y2="88" stroke="#7733aa" stroke-width="2.5" marker-end="url(#ev05)"/> <text x="178" y="115" fill="#7733aa" font-size="13" font-weight="bold">v̄</text> </svg>`,
      question: `V kartézské soustavě souřadnic jsou umístěny vektory \\(\\overrightarrow{u}\\) a \\(\\overrightarrow{v}\\) (počáteční i koncové body leží v mřížových bodech, viz diagram). Normálovým vektorem přímky p je rozdíl \\(2\\overrightarrow{u} - \\overrightarrow{v}\\).`,
      instruction: `Který z následujících vektorů je směrovým vektorem přímky p?`,
      choices: [
      {
        label: `\\((3;\\ 4)\\)`,
        value: "A",
        feedback: `Kritická chyba. \\((3;\\ 4)\\) je samotný normálový vektor přímky — tedy \\(2\\overrightarrow{u} - \\overrightarrow{v}\\). Směrový vektor musí být na normálový kolmý.`
      },
      {
        label: `\\((4;\\ {-3})\\)`,
        value: "B",
        feedback: `Přístup povolen. \\((3;\\ 4) \\cdot (4;\\ -3) = 12 - 12 = 0\\) — vektory jsou kolmé. ✓`
      },
      {
        label: `\\(({-3};\\ 4)\\)`,
        value: "C",
        feedback: `Chyba v rotaci. \\((3;\\ 4) \\cdot (-3;\\ 4) = -9 + 16 = 7 \\neq 0\\). Negovali jste první složku, ale kolmost vyžaduje prohození a negaci jedné ze složek.`
      },
      {
        label: `\\((4;\\ 3)\\)`,
        value: "D",
        feedback: `Nekompletní. \\((3;\\ 4) \\cdot (4;\\ 3) = 12 + 12 = 24 \\neq 0\\). Složky jste prohodili, ale nezměnili znaménko — rotace o 90° vyžaduje obojí.`
      },
      ],
      hints: [
      `Odečtěte z grafu složky vektorů ū a v̄ — pozor, ani jeden nezačíná v počátku. Pak vypočítejte \\(2\\overrightarrow{u} - \\overrightarrow{v}\\).`,
      `Směrový vektor musí splnit \\(\\overrightarrow{n} \\cdot \\overrightarrow{s} = 0\\). Ze souřadnic \\(\\overrightarrow{n} = (a;\\ b)\\) dostanete směrový otočením: \\((-b;\\ a)\\) nebo \\((b;\\ -a)\\).`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
            {
      id: "t_ana_05", regionId: "analytika", type: "closed", monsterName: `SIM_06E: Směrový ze normálového`,
      isTraining: true, firewallId: "q_ana_05", visual_color: "#2ecc8a", visual_symbol: `s⃗`, points: 0,
    formula: `$$\\overrightarrow{n} \\cdot \\overrightarrow{s} = 0$$`,
      question: `Přímka p má normálový vektor \\(\\overrightarrow{n} = (3;\\ 4)\\).`,
      instruction: `Který vektor je směrovým vektorem přímky p?`,
      steps: [
      {
        trigger: `> Krok 1: Podmínka kolmosti`,
        content: `Směrový vektor \\(\\overrightarrow{s} = (s_1;\\ s_2)\\) musí splnit \\(\\overrightarrow{n} \\cdot \\overrightarrow{s} = 0\\). Co to znamená pro složky \\(s_1\\) a \\(s_2\\)?`
      },
      {
        trigger: `> Krok 2: Rotace složek`,
        content: `Ze souřadnic normálového vektoru \\((a;\\ b)\\) dostanete směrový otočením o 90°: \\((-b;\\ a)\\) nebo \\((b;\\ -a)\\). Aplikujte na \\((3;\\ 4)\\) a ověřte skalárním součinem.`
      },
      ],
      choices: [
      {
        label: `\\((4;\\ {-3})\\)`,
        value: "A",
        feedback: `Logika potvrzena. \\((3;\\ 4) \\cdot (4;\\ -3) = 12 - 12 = 0\\) ✓`
      },
      {
        label: `\\((3;\\ 4)\\)`,
        value: "B",
        feedback: `Chyba: to je normálový vektor p. Směrový musí být na něj kolmý.`
      },
      {
        label: `\\(({-3};\\ 4)\\)`,
        value: "C",
        feedback: `Chyba v rotaci. \\((3;\\ 4) \\cdot (-3;\\ 4) = -9 + 16 = 7 \\neq 0\\). Negovali jste první složku, ale pro rotaci musíte prohodit a negovat jednu ze složek.`
      },
      {
        label: `\\((4;\\ 3)\\)`,
        value: "D",
        feedback: `Nekompletní. \\((3;\\ 4) \\cdot (4;\\ 3) = 12 + 12 = 24 \\neq 0\\). Složky jste prohodili, ale nezměnili znaménko.`
      },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_ana_06", regionId: "analytika", type: "closed", monsterName: `FW_06F: Rovnice z grafu`,
      visual_color: "#e74c3c", visual_symbol: `p`, points: 2, trainingTasks: ["t_ana_06"],
      question: `V souřadnicové soustavě Oxy je umístěna přímka p.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="34" y1="86" x2="34" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="86" x2="62" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="86" x2="90" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="118" y1="86" x2="118" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="146" y1="86" x2="146" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="174" y1="86" x2="174" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="202" y1="86" x2="202" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="230" y1="86" x2="230" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="86" x2="258" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="286" y1="86" x2="286" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="254" x2="286" y2="254" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="226" x2="286" y2="226" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="198" x2="286" y2="198" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="170" x2="286" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="142" x2="286" y2="142" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="114" x2="286" y2="114" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="86" x2="286" y2="86" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="58" x2="286" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="170" x2="286" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="86" x2="90" y2="282" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="286,170 280,166 280,174" fill="#e2e8f0"/><polygon points="90,282 86,288 94,288" fill="#e2e8f0"/><text x="294" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="278" fill="#e2e8f0" font-size="13">y</text><line x1="118" y1="167" x2="118" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="114" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="142" x2="93" y2="142" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="146" fill="#e2e8f0" font-size="11">1</text><line x1="76.0" y1="58.0" x2="174.0" y2="254.0" stroke="#0077bb" stroke-width="2.5"/><text x="67" y="24" fill="#0077bb" font-size="13" font-style="italic">p</text><circle cx="90" cy="86" r="4" fill="#cc4400"/><circle cx="146" cy="198" r="4" fill="#cc4400"/></svg>`,
      instruction: `Vyberte rovnici přímky p.`,
      choices: [
        {
          label: `\\(y = - 2x - 3\\)`,
          value: "A",
          feedback: `Chyba v absolutním členu. Přímka přechází osou y ve 3, nikoli −3. Zkontrolujte y-průsečík.`
        },
        {
          label: `\\(2x + y - 3 = 0\\)`,
          value: "B",
          feedback: `Přístup povolen. Sklon \\(-2\\) (body \\([0;3]\\) a \\([2;-1]\\)) a y-průsečík \\(3\\). Odpovídá \\(y = -2x+3\\).`
        },
        {
          label: `\\(x + 2y - 6 = 0\\)`,
          value: "C",
          feedback: `Chyba ve sklonu. Tato přímka má sklon \\(-1/2\\), nikoli \\(-2\\). Sklon čtěte jako \\(\\Delta y / \\Delta x\\).`
        },
        {
          label: `\\(y = 2x + 3\\)`,
          value: "D",
          feedback: `Chyba v orientaci. Přímka klesá zleva doprava — sklon musí být záporný.`
        },
      ],
      hints: [
        `Přímka v rovině je jednoznačně určena sklonem a jedním bodem. Co můžete z grafu vyčíst?`,
        `Obecná rovnice \\(ax + by + c = 0\\) odpovídá \\(y = -\\frac{a}{b}x - \\frac{c}{b}\\). Porovnej se sklonem a y-průsečíkem z grafu.`,
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_ana_06", regionId: "analytika", type: "closed", monsterName: `SIM_06F: Směrový vektor z bodů`,
      isTraining: true, firewallId: "q_ana_06", visual_color: "#2ecc8a", visual_symbol: `v̄`, points: 0,
      question: `Přímka p prochází body \\(K[-1;\\ 3]\\) a \\(L[2;\\ -3]\\).`,
      formula: `$$\\overrightarrow{KL} = (x_L - x_K;\\ y_L - y_K)$$`,
      instruction: `Určete směrový vektor přímky p.`,
      steps: [
        {
          trigger: `> Krok 1: Složky směrového vektoru`,
          content: `Směrový vektor přímky procházející body K a L má složky \\((x_L - x_K;\\ y_L - y_K)\\). Pozor na pořadí odčítání a na záporné souřadnice.`
        },
        {
          trigger: `> Krok 2: Znaménka`,
          content: `Odčítáte-li zápornou souřadnici, znaménko se mění. Zkontrolujte obě složky zvlášť.`
        },
      ],
      choices: [
        {
          label: `\\(\\overrightarrow{v} = (3;\\ -6)\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\Delta x = 3,\\ \\Delta y = -6\\) ✓`
        },
        {
          label: `\\(\\overrightarrow{v} = (3;\\ 6)\\)`,
          value: "B",
          feedback: `Chyba v znaménku. \\(\\Delta y = y_L - y_K = -3 - 3 = -6\\), nikoli \\(+6\\). Záměna pořadí: \\(y_K - y_L\\).`
        },
        {
          label: `\\(\\overrightarrow{v} = (-1;\\ 3)\\)`,
          value: "C",
          feedback: `Kritická chyba. Směrový vektor se nevyčte ze souřadnic jednoho bodu — je to rozdíl souřadnic: \\(L - K\\).`
        },
        {
          label: `\\(\\overrightarrow{v} = (-3;\\ -6)\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Obě složky mají špatné znaménko — jste použili \\(K - L\\) místo \\(L - K\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_ana_07", regionId: "analytika", type: "closed", monsterName: `FW_06G: Kolmá přímka z grafu`,
      visual_color: "#e74c3c", visual_symbol: `⊥`, points: 2, trainingTasks: ["t_ana_07"],
      question: `V souřadnicové soustavě Oxy je umístěna přímka p.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="34" y1="86" x2="34" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="86" x2="62" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="86" x2="90" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="118" y1="86" x2="118" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="146" y1="86" x2="146" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="174" y1="86" x2="174" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="202" y1="86" x2="202" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="230" y1="86" x2="230" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="86" x2="258" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="286" y1="86" x2="286" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="254" x2="286" y2="254" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="226" x2="286" y2="226" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="198" x2="286" y2="198" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="170" x2="286" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="142" x2="286" y2="142" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="114" x2="286" y2="114" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="86" x2="286" y2="86" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="58" x2="286" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="170" x2="286" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="86" x2="90" y2="282" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="286,170 280,166 280,174" fill="#e2e8f0"/><polygon points="90,282 86,288 94,288" fill="#e2e8f0"/><text x="294" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="278" fill="#e2e8f0" font-size="13">y</text><line x1="118" y1="167" x2="118" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="114" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="142" x2="93" y2="142" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="146" fill="#e2e8f0" font-size="11">1</text><line x1="34.0" y1="170.0" x2="258.0" y2="58.0" stroke="#0077bb" stroke-width="2.5"/><text x="235" y="72.0" fill="#0077bb" font-size="13" font-style="italic">p</text></svg>`,
      instruction: `Která z přímek a, b, c, d je kolmá k přímce p?`,
      choices: [
        {
          label: `\\(a:\\ x - 2y + 6 = 0\\)`,
          value: "A",
          feedback: `Kritická chyba. Tato přímka je rovnoběžná s p, nikoli kolmá.`
        },
        {
          label: `\\(b:\\ x + y - 4 = 0\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Normálový vektor této přímky má souřadnice (1; 1).`
        },
        {
          label: `\\(c:\\ 2x - y - 3 = 0\\)`,
          value: "C",
          feedback: `Chyba v orientaci. Normálový vektor této přímky má souřadnice (2; -1).`
        },
        {
          label: `\\(d:\\ 2x + y - 5 = 0\\)`,
          value: "D",
          feedback: `Přístup povolen.`
        },
      ],
      hints: [
        `Z grafu můžeš určit souřadnice směrového vektoru přímky p.`,
        `Dokážeš určit i souřadnice normálového vektoru?`,
      ],
      correctAnswer: "D", reward: { xp: 10 }
    },
    {
      id: "t_ana_07", regionId: "analytika", type: "closed", monsterName: `SIM_06G: Podmínka kolmosti`,
      isTraining: true, firewallId: "q_ana_07", visual_color: "#2ecc8a", visual_symbol: `⊥`, points: 0,
      question: `Vektor \\(\\overrightarrow{u} = (4;\\ u_{2})\\) je kolmý k vektoru \\(\\overrightarrow{v} = ( - 3;\\ 2)\\).`,
      formula: `$$\\overrightarrow{u} \\cdot \\overrightarrow{v} = 0$$`,
      instruction: `Vypočtěte chybějící souřadnici u₂.`,
      steps: [
        {
          trigger: `> Krok 1: Podmínka kolmosti`,
          content: `Dva vektory jsou kolmé, když je jejich skalární součin nulový. Zapište podmínku \\(\\vec{u} \\cdot \\vec{v} = 0\\) pro dané složky.`
        },
        {
          trigger: `> Krok 2: Lineární rovnice`,
          content: `Dostanete rovnici s jednou neznámou \\(u_2\\). Pozor na znaménko součinu u první dvojice složek.`
        },
      ],
      choices: [
        {
          label: `\\(u_{2} = 6\\)`,
          value: "A",
          feedback: `Přístup povolen. −12+2·6 = 0 ✓`
        },
        {
          label: `\\(u_{2} = 3\\)`,
          value: "B",
          feedback: `Chyba: 2·3 = 6, ale potřebujeme 2u₂ = 12, ne 6.`
        },
        {
          label: `\\(u_{2} = - 6\\)`,
          value: "C",
          feedback: `Chyba v znaménku. 4·(−3) = −12, takže 2u₂ = +12, nikoli −12.`
        },
        {
          label: `\\(u_{2} = 2\\)`,
          value: "D",
          feedback: `Kritická chyba. 2·2 = 4 ≠ 12. Dosazení neověří podmínku kolmosti.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_ana_08", regionId: "analytika", type: "closed", monsterName: `FW_06H: Kolmost a velikost vektoru`,
      visual_color: "#e74c3c", visual_symbol: `|ā|`, points: 3, trainingTasks: ["t_ana_08"],
      question: `Vektor \\(\\overrightarrow{a} = (a_1;\\ {-2})\\) je kolmý k vektoru \\(\\overrightarrow{b} = (1;\\ 3)\\).`,
      instruction: `Jaká je velikost vektoru \\(\\overrightarrow{a}\\)?`,
      choices: [
      {
        label: `\\(2\\sqrt{10}\\)`,
        value: "A",
        feedback: `Přístup povolen. \\(a_1 = 6\\) z podmínky kolmosti, \\(|\\overrightarrow{a}| = \\sqrt{36+4} = 2\\sqrt{10}\\). ✓`
      },
      {
        label: `\\(\\sqrt{10}\\)`,
        value: "B",
        feedback: `Chyba v rozkladu. \\(\\sqrt{10}\\) je velikost vektoru b̄, nikoli ā. Zkontrolujte, zda jste správně určili \\(a_1\\) a dosadili do vzorce pro velikost.`
      },
      {
        label: `\\(40\\)`,
        value: "C",
        feedback: `Nekompletní. \\(40 = a_1^2 + a_2^2\\) — to je druhá mocnina velikosti, nikoli velikost sama. Chybí odmocnina.`
      },
      {
        label: `\\(8\\)`,
        value: "D",
        feedback: `Kritická chyba. Velikost vektoru není součet absolutních hodnot složek. Vzorec je \\(|\\overrightarrow{a}| = \\sqrt{a_1^2 + a_2^2}\\).`
      },
      ],
      hints: [
      `Kolmé vektory mají nulový skalární součin. Jakou podmínku musí splnit \\(a_1\\)?`,
      `Velikost vektoru se počítá z jeho složek — nezapomeňte na odmocninu.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_ana_08", regionId: "analytika", type: "closed", monsterName: `SIM_06H: Podmínka kolmosti`,
      isTraining: true, firewallId: "q_ana_08", visual_color: "#2ecc8a", visual_symbol: `a₁`, points: 0,
      formula: `$$\\overrightarrow{a} \\cdot \\overrightarrow{b} = a_1 b_1 + a_2 b_2 = 0$$`,
      question: `Vektor \\(\\overrightarrow{a} = (a_1;\\ {-2})\\) je kolmý k vektoru \\(\\overrightarrow{b} = (1;\\ 3)\\).`,
      instruction: `Určete hodnotu \\(a_1\\).`,
      steps: [
      {
        trigger: `> Krok 1: Podmínka kolmosti`,
        content: `Dva vektory jsou kolmé, když jejich skalární součin je nulový. Zapište podmínku \\(\\overrightarrow{a} \\cdot \\overrightarrow{b} = 0\\) pro dané složky.`
      },
      {
        trigger: `> Krok 2: Řešení rovnice`,
        content: `Z rovnice \\(a_1 \\cdot 1 + (-2) \\cdot 3 = 0\\) vyjádřete \\(a_1\\). Pozor na znaménko druhého členu.`
      },
      ],
      choices: [
      {
        label: `\\(6\\)`,
        value: "A",
        feedback: `Logika potvrzena. \\(a_1 - 6 = 0 \\Rightarrow a_1 = 6\\). ✓`
      },
      {
        label: `\\(-6\\)`,
        value: "B",
        feedback: `Chyba v znaménku. \\((-2) \\cdot 3 = -6\\), takže rovnice je \\(a_1 - 6 = 0\\), ne \\(a_1 + 6 = 0\\).`
      },
      {
        label: `\\(3\\)`,
        value: "C",
        feedback: `Chyba v dělení. Rovnice \\(a_1 - 6 = 0\\) dává přímo \\(a_1 = 6\\), nikoli 3.`
      },
      {
        label: `\\(2\\)`,
        value: "D",
        feedback: `Chyba: záměna složek. Neznámá je první složka vektoru ā, ne druhá.`
      },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_ana_09", regionId: "analytika", type: "closed", monsterName: `FW_06I: Odchylka přímky`,
      visual_color: "#e74c3c", visual_symbol: `φ`, points: 2, trainingTasks: ["t_ana_09"],
      question: `V souřadnicové soustavě Oxy je umístěna přímka p.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="62" y1="114" x2="62" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="114" x2="90" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="118" y1="114" x2="118" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="146" y1="114" x2="146" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="174" y1="114" x2="174" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="202" y1="114" x2="202" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="230" y1="114" x2="230" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="114" x2="258" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="286" y1="114" x2="286" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="226" x2="286" y2="226" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="198" x2="286" y2="198" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="170" x2="286" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="142" x2="286" y2="142" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="114" x2="286" y2="114" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="86" x2="286" y2="86" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="58" x2="286" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="170" x2="286" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="114" x2="90" y2="282" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="286,170 280,166 280,174" fill="#e2e8f0"/><polygon points="90,282 86,288 94,288" fill="#e2e8f0"/><text x="294" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="278" fill="#e2e8f0" font-size="13">y</text><line x1="118" y1="167" x2="118" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="114" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="142" x2="93" y2="142" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="146" fill="#e2e8f0" font-size="11">1</text><line x1="62.0" y1="132.7" x2="174.0" y2="58.0" stroke="#0077bb" stroke-width="2.5"/><circle cx="90" cy="114" r="4" fill="#cc4400"/><text x="96" y="110" fill="#e2e8f0" font-size="11">[0; 2]</text><circle cx="174" cy="58" r="4" fill="#cc4400"/><text x="180" y="54" fill="#e2e8f0" font-size="11">[3; 4]</text><text x="258" y="-6.0" fill="#0077bb" font-size="13" font-style="italic">p</text></svg>`,
      instruction: `Jaká je odchylka přímky p od souřadnicové osy x? (Výsledek zaokrouhlete na celé minuty.)`,
      choices: [
        {
          label: `\\(26{^\\circ}34\\prime\\)`,
          value: "A",
          feedback: `Chyba ve čtení vektoru. Složky \\(\\overrightarrow{u}\\) neodpovídají vyznačeným bodům.`
        },
        {
          label: `\\(45{^\\circ}00\\prime\\)`,
          value: "B",
          feedback: `Chyba syntaxe. \\(45°\\) odpovídá směrovému vektoru \\((1;\\ 1)\\).`
        },
        {
          label: `\\(33{^\\circ}41\\prime\\)`,
          value: "C",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(56{^\\circ}19\\prime\\)`,
          value: "D",
          feedback: `Kritická chyba. Složky směrového vektoru \\(\\overrightarrow{u}\\) jsou prohozeny.`
        },
      ],
      hints: [
        `Z grafu můžeš určit směrový vektor přímky p a zároveň směrový vektor osy x. Uvědom si, jak vznikají souřadnice vektoru.`,
        `Jaký je vzorec pro výpočet odchylky dvou přímek?`,
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_ana_09", regionId: "analytika", type: "closed", monsterName: `SIM_06I: Odchylka — vektorový přístup`,
      isTraining: true, firewallId: "q_ana_09", visual_color: "#2ecc8a", visual_symbol: `φ`, points: 0,
      question: `Přímka r má rovnici \\(x - 2y + 4 = 0\\). Určete odchylku přímky r od osy x.`,
      formula: `$$\\cos\\varphi = \\frac{|\\overrightarrow{u} \\cdot \\overrightarrow{v}|}{|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|}$$`,
      instruction: `Vyberte správnou odchylku přímky r od osy x. (Zaokrouhlete na celé minuty.)`,
      steps: [
        {
          trigger: `> Krok 1: Směrový vektor`,
          content: `Jak získáš směrový vektor přímky zadané obecnou rovnicí \\(ax + by + c = 0\\)? Jak ho odvodíš z koeficientů \\(a\\) a \\(b\\)?`
        },
        {
          trigger: `> Krok 2: Odchylka od osy x`,
          content: `Osu x popisuje směrový vektor \\((1;\\ 0)\\). Jaký vzorec použiješ pro odchylku dvou přímek ze směrových vektorů?`
        },
      ],
      choices: [
        {
          label: `\\(63{^\\circ}26\\prime\\)`,
          value: "A",
          feedback: `Kritická chyba. Použil jsi normálový vektor \\(\\overrightarrow{n}\\) místo směrového \\(\\overrightarrow{u}\\).`
        },
        {
          label: `\\(45{^\\circ}00\\prime\\)`,
          value: "B",
          feedback: `Chyba syntaxe. \\(45°\\) odpovídá směrovému vektoru \\((1;\\ 1)\\).`
        },
        {
          label: `\\(18{^\\circ}26\\prime\\)`,
          value: "C",
          feedback: `Chyba ve čtení vektoru. Ze složek rovnice \\(ax + by + c = 0\\) dostaneš \\(\\overrightarrow{u} = (-b;\\ a)\\).`
        },
        {
          label: `\\(26{^\\circ}34\\prime\\)`,
          value: "D",
          feedback: `Přístup povolen. ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_ana_10", regionId: "analytika", type: "closed", monsterName: `FW_06J: Délka úsečky ze středu`,
      visual_color: "#e74c3c", visual_symbol: `S`, points: 3, trainingTasks: ["t_ana_10"],
      question: `Bod \\(S[3;\\ 2]\\) je středem úsečky AB. Souřadnice bodu A jsou \\(A[-1;\\ -1]\\).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="18" y1="98" x2="18" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="42" y1="98" x2="42" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="66" y1="98" x2="66" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="98" x2="90" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="114" y1="98" x2="114" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="138" y1="98" x2="138" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="162" y1="98" x2="162" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="186" y1="98" x2="186" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="98" x2="210" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="234" y1="98" x2="234" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="98" x2="258" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="282" y1="98" x2="282" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="306" y1="98" x2="306" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="242" x2="306" y2="242" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="218" x2="306" y2="218" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="194" x2="306" y2="194" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="170" x2="306" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="146" x2="306" y2="146" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="122" x2="306" y2="122" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="98" x2="306" y2="98" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="74" x2="306" y2="74" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="50" x2="306" y2="50" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="26" x2="306" y2="26" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="170" x2="306" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="98" x2="90" y2="314" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="306,170 300,166 300,174" fill="#e2e8f0"/><polygon points="90,314 86,320 94,320" fill="#e2e8f0"/><text x="314" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="310" fill="#e2e8f0" font-size="13">y</text><line x1="114" y1="167" x2="114" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="110" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="146" x2="93" y2="146" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="150" fill="#e2e8f0" font-size="11">1</text><line x1="66" y1="194" x2="258" y2="50" stroke="#0077bb" stroke-width="2" stroke-dasharray="6,3"/><circle cx="66" cy="194" r="5" fill="#cc4400"/><circle cx="162" cy="122" r="5" fill="#f7b84f"/><circle cx="258" cy="50" r="5" fill="#cc4400"/><text x="46" y="198" fill="#cc4400" font-size="12" font-weight="bold">A</text><text x="168" y="116" fill="#f7b84f" font-size="12" font-weight="bold">S</text><text x="264" y="54" fill="#cc4400" font-size="12" font-weight="bold">B</text><text x="46" y="211" fill="#e2e8f0" font-size="10">[−1; −1]</text><text x="168" y="134" fill="#e2e8f0" font-size="10">[3; 2]</text></svg>`,
      instruction: `Jaká je délka úsečky AB?`,
      choices: [
        {
          label: `\\(4\\sqrt{5}\\)`,
          value: "A",
          feedback: `Chyba v násobení. Vzdálenost od koncového bodu ke středu není totéž co délka celé úsečky. Jaký je mezi nimi vztah?`
        },
        {
          label: `\\(10\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(B = [7;\\ 5]\\). \\(|AS| = \\sqrt{16+9} = 5\\). \\(|AB| = 2 \\cdot 5 = 10\\). ✓`
        },
        {
          label: `\\(5\\)`,
          value: "C",
          feedback: `Nekompletní. Toto je vzdálenost od jednoho z krajních bodů ke středu, ne délka celé úsečky.`
        },
        {
          label: `\\(8\\)`,
          value: "D",
          feedback: `Kritická chyba. Vzdálenost nelze spočítat jen z rozdílu x-souřadnic — použijte Pythagorovu větu.`
        },
      ],
      hints: [
        `Ze vzorce pro střed úsečky \\(S = \\left[\\frac{x_A + x_B}{2};\\ \\frac{y_A + y_B}{2}\\right]\\) vyjádři souřadnice bodu \\(B\\).`,
        `Jaký je vztah mezi délkou úsečky a vzdáleností od koncového bodu ke středu?`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_ana_10", regionId: "analytika", type: "closed", monsterName: `SIM_06J: Střed úsečky`,
      isTraining: true, firewallId: "q_ana_10", visual_color: "#2ecc8a", visual_symbol: `S`, points: 0,
      question: `Jsou dány body \\(A\\lbrack - 3;\\ 2\\rbrack\\) a \\(B\\lbrack 5;\\  - 4\\rbrack\\).`,
      formula: `$$S = \\left\\lbrack \\frac{x_{A} + x_{B}}{2};\\ \\frac{y_{A} + y_{B}}{2} \\right\\rbrack$$`,
      instruction: `Vypočtěte souřadnice středu S úsečky AB.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro střed`,
          content: `Střed úsečky je aritmetický průměr souřadnic koncových bodů — zvlášť pro \\(x\\), zvlášť pro \\(y\\).`
        },
        {
          trigger: `> Krok 2: Záporné souřadnice`,
          content: `Při sčítání kladné a záporné souřadnice dávejte pozor na znaménko výsledku.`
        },
      ],
      choices: [
        {
          label: `\\(S\\lbrack 1;\\  - 1\\rbrack\\)`,
          value: "A",
          feedback: `Logika potvrzena. (−3+5)/2=1, (2−4)/2=−1. ✓`
        },
        {
          label: `\\(S\\lbrack - 1;\\ 1\\rbrack\\)`,
          value: "B",
          feedback: `Přehozené souřadnice. Vypočtěte zvlášť x-složku a y-složku středu.`
        },
        {
          label: `\\(S\\lbrack 4;\\  - 3\\rbrack\\)`,
          value: "C",
          feedback: `Kritická chyba. Střed se počítá průměrem souřadnic, nikoli rozdílem.`
        },
        {
          label: `\\(S\\lbrack 2;\\  - 2\\rbrack\\)`,
          value: "D",
          feedback: `Chyba: zapomněli jste dělit dvěma. Součet: x=2, y=−2, ale střed je jejich polovina.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_ana_11", regionId: "analytika", type: "closed", monsterName: `FW_06K: Parametrická přímka — vlastnosti`,
      visual_color: "#e74c3c", visual_symbol: `p(t)`, points: 4, trainingTasks: ["t_ana_11"],
    formula: `$$p:\\ x = 1 + 3t,\\quad y = 2 - t,\\quad t \\in \\mathbb{R}$$`,
      question: `V kartézské soustavě souřadnic Oxy je dána přímka`,
      instruction: `Které z níže uvedených tvrzení je pravdivé?`,
      choices: [
      {
        label: `Přímka p prochází bodem \\(M[4;\\ 1]\\).`,
        value: "A",
        feedback: `Přístup povolen. Pro \\(t=1\\): \\(x = 1+3 = 4\\) ✓, \\(y = 2-1 = 1\\) ✓. Bod M leží na p.`
      },
      {
        label: `Vektor \\(\\overrightarrow{u} = (3;\\ 1)\\)  je normálovým vektorem p.`,
        value: "B",
        feedback: `Chyba syntaxe. Směrový vektor p je \\((3;\\ -1)\\). Normálový je k němu kolmý: \\((1;\\ 3)\\). Vektor \\((3;\\ 1)\\) není kolmý na \\((3;\\ -1)\\) — jejich skalární součin je \\(9-1=8 \\neq 0\\).`
      },
      {
        label: `Obecná rovnice přímky p je \\(x - 3y + 5 = 0\\).`,
        value: "C",
        feedback: `Záludná chyba. Tato rovnice prochází bodem \\(A[1;\\ 2]\\) (dosazení: \\(1-6+5=0\\) ✓), ale normálový vektor \\((1;\\ -3)\\) není rovnoběžný se správným normálovým \\((1;\\ 3)\\). Správná rovnice je \\(x + 3y - 7 = 0\\).`
      },
      {
        label: `Přímka p je rovnoběžná s přímkou \\(q:\\ x - 3y + 5 = 0\\).`,
        value: "D",
        feedback: `Kritická chyba. Normálový p: \\((1;\\ 3)\\), normálový q: \\((1;\\ -3)\\). Tyto vektory nejsou rovnoběžné (\\(1 \\cdot(-3) - 3 \\cdot 1 = -6 \\neq 0\\)), přímky se protínají.`
      },
      ],
      hints: [
      `Bod leží na parametrické přímce, pokud existuje hodnota parametru \\(t\\), která splní obě rovnice současně.`,
      `V parametrické rovnici se směrový vektor čte z koeficientů u parametru \\(t\\). Normálový vektor je k němu kolmý.`,
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_ana_11", regionId: "analytika", type: "closed", monsterName: `SIM_06K: Bod na parametrické přímce`,
      isTraining: true, firewallId: "q_ana_11", visual_color: "#2ecc8a", visual_symbol: `t`, points: 0,
    formula: null,
      question: `Přímka p: \\(x = 2 + t,\\ y = 3 - 2t\\). Leží bod \\(M[4;\\ -1]\\) na přímce p?`,
      instruction: `Zjistěte, zda existuje t, pro které M ∈ p.`,
      steps: [
      {
        trigger: `> Krok 1: Najít parametr`,
        content: `Dosaďte \\(x\\)-souřadnici bodu M do první parametrické rovnice. Jaká hodnota \\(t\\) z ní vyjde?`
      },
      {
        trigger: `> Krok 2: Ověření v druhé rovnici`,
        content: `Nalezené \\(t\\) dosaďte do druhé rovnice. Souhlasí výsledek s \\(y\\)-souřadnicí bodu M?`
      },
      ],
      choices: [
      {
        label: `Ne, M neleží na p.`,
        value: "A",
        feedback: `Kritická chyba. Pro t=2: x=4 ✓ a y=3−4=−1 ✓. Obě rovnice jsou splněny.`
      },
      {
        label: `Ano, pro \\(t = 3\\).`,
        value: "B",
        feedback: `Chyba: pro t=3 → x=5≠4. Zkontroluj výpočet t z x-souřadnice.`
      },
      {
        label: `Ano, pro \\(t = 2\\).`,
        value: "C",
        feedback: `Logika potvrzena. t=2 → x=4 ✓, y=−1 ✓. `
      },
      {
        label: `Ano, pro \\(t = -1\\).`,
        value: "D",
        feedback: `Chyba: pro t=−1 → x=1≠4. Nesprávná hodnota t.`
      },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },

    // ==========================================
    // POSLOUPNOSTI — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_posl_01", regionId: "posloupnosti", type: "closed", monsterName: `FW_11A: Vlastnosti aritmetické posloupnosti`,
      visual_color: "#a78bfa", visual_symbol: `Σ`, points: 3, trainingTasks: ["t_posl_01"],
      question: `Pro \\(n \\in \\mathbb{N}\\) je dána posloupnost vzorcem pro \\(n\\)-tý člen:`,
      formula: `$$a_{n} = 5n - 13$$`,
      instruction: `Jsou dána tato tvrzení:<br><br>
        <b>15.1</b> První tři členy posloupnosti jsou \\(a_1 = -8;\\; a_2 = -3;\\; a_3 = 2\\).<br>
        <b>15.2</b> Pro danou posloupnost platí \\(a_{n+8} - a_n = 8\\).<br>
        <b>15.3</b> Součet prvních 20 členů dané posloupnosti je 790 \\((s_{20} = 790)\\).<br><br>
        Vyberte, které tvrzení <b>není pravdivé</b>.`,
      hints: [
        `Hodnotu libovolného členu \\(a_n\\) získáš dosazením jeho pořadového čísla do vzorce.`,
        `Součet prvních \\(n\\) členů aritmetické posloupnosti: $$S_n = \\frac{n}{2}(a_1 + a_n)$$`,
        `Rozdíl dvou členů vzdálených o \\(k\\) pozic závisí na diferenci \\(d\\): platí \\(a_{n+k} - a_n = k \\cdot d\\).`
      ],
      choices: [
        {
          label: `Tvrzení 15.1 není pravdivé`,
          value: "A",
          feedback: `Chyba syntaxe. Dosaď \\(n = 1\\): \\(a_1 = 5 \\cdot 1 - 13 = -8\\). Tvrzení 15.1 sedí.`
        },
        {
          label: `Tvrzení 15.2 není pravdivé`,
          value: "B",
          feedback: `Přístup povolen. Diference je \\(d = 5\\), skok o 8 pozic dává \\(8 \\cdot 5 = 40 \\neq 8\\).`
        },
        {
          label: `Tvrzení 15.3 není pravdivé`,
          value: "C",
          feedback: `Nekompletní. Ověř vzorcem \\(S_n = \\frac{n}{2}(a_1 + a_n)\\) — součet 790 sedí.`
        },
        {
          label: `Všechna tvrzení jsou pravdivá`,
          value: "D",
          feedback: `Toto tvrzení platí. Hledej chybu v jiném vztahu.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_posl_01", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11A: Dosazení do vzorce`,
      isTraining: true, firewallId: "q_posl_01", visual_color: "#2ecc8a", visual_symbol: `Σ`, points: 0,
      question: `V aritmetické posloupnosti platí vzorec \\(a_{n} = 5n - 13\\). Jaká je hodnota pátého členu \\(a_{5}\\)?`,
      formula: `$$a_{n} = 5n - 13$$`,
      instruction: `Dosaď \\(n = 5\\) do vzorce.`,
      steps: [
        {
          trigger: `> Krok 1: Co vzorec říká?`,
          content: `Vzorec \\(a_n = 5n - 13\\) přiřazuje každému pořadovému číslu \\(n\\) hodnotu členu. Co dosadíš za \\(n\\)?`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `Dosaď \\(n = 5\\): \\(a_5 = 5 \\cdot 5 - 13\\). Kolik vyjde?`
        },
      ],
      choices: [
        {
          label: `\\(a_{5} = 25\\)`,
          value: "A",
          feedback: `Nekompletní. Výraz má dva členy — co s tou třináctkou?`
        },
        {
          label: `\\(a_{5} = 12\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(5 \\cdot 5 - 13 = 12\\).`
        },
        {
          label: `\\(a_{5} = 2\\)`,
          value: "C",
          feedback: `Chyba indexu. Tohle je \\(a_3\\), ne \\(a_5\\).`
        },
        {
          label: `\\(a_{5} = 17\\)`,
          value: "D",
          feedback: `Přetečení. Dosadil(a) jsi \\(n = 6\\) místo \\(n = 5\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_posl_02", regionId: "posloupnosti", type: "closed", monsterName: `FW_11B: AP a GP se společnými členy`,
      visual_color: "#a78bfa", visual_symbol: `q^n`, points: 3, trainingTasks: ["t_posl_02"],
      question: `První dva členy aritmetické posloupnosti jsou zároveň prvními dvěma členy geometrické posloupnosti. Přitom první člen je o 9 menší než druhý a druhý člen je čtyřikrát větší než první.`,
      instruction: `Kolikátý člen aritmetické posloupnosti je roven třetímu členu geometrické posloupnosti?`,
      hints: [
        `Z podmínek zadání urči první člen a diferenci AP i kvocient GP.`,
        `Třetí člen GP: \\(a_1 \\cdot q^2\\). Pak hledej \\(n\\), pro které \\(a_1 + d(n-1)\\) dá stejnou hodnotu.`
      ],
      choices: [
        {
          label: `Žádný člen`,
          value: "A",
          feedback: `Chyba logiky. Obě posloupnosti sdílejí start — průsečík existuje.`
        },
        {
          label: `Pátý člen`,
          value: "B",
          feedback: `Chyba indexu. Zkontroluj, zda řešíš \\(n\\), nebo \\(n-1\\).`
        },
        {
          label: `Šestý člen`,
          value: "C",
          feedback: `Přístup povolen. \\(a_6 = \\text{GP}_3 = 48\\).`
        },
        {
          label: `Sedmý člen`,
          value: "D",
          feedback: `Přetečení. Ověř dosazení — výsledek je o pozici nižší.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_posl_02", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11B: Třetí člen geometrické posloupnosti`,
      isTraining: true, firewallId: "q_posl_02", visual_color: "#2ecc8a", visual_symbol: `q^n`, points: 0,
      question: `V geometrické posloupnosti je \\(a_1 = 3\\) a \\(q = 4\\). Jaká je hodnota třetího členu \\(a_3\\)?`,
      formula: `$$a_n = a_1 \\cdot q^{n-1}$$`,
      instruction: `Dosaď \\(n = 3\\) do vzorce.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro n-tý člen GP`,
          content: `Obecný vzorec: \\(a_n = a_1 \\cdot q^{n-1}\\). Jaký exponent dosadíš pro třetí člen?`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `\\(a_3 = 3 \\cdot 4^{2}\\). Kolik vyjde?`
        },
      ],
      choices: [
        {
          label: `\\(a_3 = 16\\)`,
          value: "A",
          feedback: `Nekompletní. Nezapomeň vynásobit prvním členem.`
        },
        {
          label: `\\(a_3 = 48\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(3 \\cdot 16 = 48\\).`
        },
        {
          label: `\\(a_3 = 36\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Vzorec je \\(a_1 \\cdot q^{n-1}\\), ne \\(a_1 \\cdot q \\cdot n\\).`
        },
        {
          label: `\\(a_3 = 192\\)`,
          value: "D",
          feedback: `Přetečení. Exponent pro třetí člen je 2, ne 3.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_posl_03", regionId: "posloupnosti", type: "closed", monsterName: `FW_11C: Diference aritmetické posloupnosti`,
      visual_color: "#a78bfa", visual_symbol: `d`, points: 3, trainingTasks: ["t_posl_03"],
      question: `V aritmetické posloupnosti je \\(a_{4} = 7\\) a \\(a_{8} = 19\\).`,
      instruction: `Jaká je diference \\(d\\) této posloupnosti?`,
      hints: [
        `Mezi \\(a_4\\) a \\(a_8\\) je určitý počet „kroků" o velikosti \\(d\\). Kolik?`,
        `Platí \\(a_m - a_n = (m - n) \\cdot d\\). Vyjádři \\(d\\).`
      ],
      choices: [
        {
          label: `\\(d = 2\\)`,
          value: "A",
          feedback: `Chyba protokolu. Zkontroluj, kolik kroků je mezi indexy 1 a 5. Není jich 6.`
        },
        {
          label: `\\(d = 3\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(d = (a_8 - a_4)/(8-4) = 12/4 = 3\\).`
        },
        {
          label: `\\(d = 4\\)`,
          value: "C",
          feedback: `Kritická chyba. Dělil(a) jsi 12 třemi místo čtyřmi.`
        },
        {
          label: `\\(d = 6\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Dělil(a) jsi 12 dvěma — zapomněl(a) jsi odečíst indexy.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_posl_03", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11C: N-tý člen ze vzorce`,
      isTraining: true, firewallId: "q_posl_03", visual_color: "#2ecc8a", visual_symbol: `d`, points: 0,
      question: `Aritmetická posloupnost má první člen \\(a_{1} = 1\\) a diferenci \\(d = 3\\). Jaká je hodnota pátého členu \\(a_{5}\\)?`,
      formula: `$$a_{n} = a_{1} + (n - 1) \\cdot d$$`,
      instruction: `Použij vzorec pro \\(n\\)-tý člen.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro n-tý člen`,
          content: `\\(a_n = a_1 + (n-1) \\cdot d\\). Pro \\(n = 5\\): \\(a_5 = 1 + 4 \\cdot 3\\).`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `\\(a_5 = 1 + 4 \\cdot 3 = ?\\). Dopočítej a vyber správnou volbu.`
        },
      ],
      choices: [
        {
          label: `\\(a_{5} = 9\\)`,
          value: "A",
          feedback: `Chyba indexu. Hodnota 9 neodpovídá žádnému členu této posloupnosti. Zkontroluj dosazení do vzorce.`
        },
        {
          label: `\\(a_{5} = 11\\)`,
          value: "B",
          feedback: `Chyba protokolu. Použil(a) jsi \\(n-1 = 4\\), ale vynásobil(a) nesprávně.`
        },
        {
          label: `\\(a_{5} = 13\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(a_5 = 1 + 4 \\cdot 3 = 13\\).`
        },
        {
          label: `\\(a_{5} = 15\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Použil(a) jsi \\(n = 5\\) místo \\(n-1 = 4\\) jako násobitel.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_posl_04", regionId: "posloupnosti", type: "closed", monsterName: `FW_11D: Součet členů GP se záporným kvocientem`,
      visual_color: "#a78bfa", visual_symbol: `q²`, points: 4, trainingTasks: ["t_posl_04"],
      question: `V geometrické posloupnosti je třetí člen \\(a_3 = 9\\) a čtvrtý člen je o 12 menší než třetí člen.`,
      instruction: `Jaký je součet prvních tří členů uvedené geometrické posloupnosti \\((a_1 + a_2 + a_3)\\)?`,
      hints: [
        `Kvocient GP najdeš jako podíl \\(q = \\frac{a_4}{a_3}\\). Jaké je znaménko?`,
        `Předchozí členy získáš dělením: \\(a_2 = \\frac{a_3}{q}\\), \\(a_1 = \\frac{a_2}{q}\\).`
      ],
      choices: [
        {
          label: `7`,
          value: "A",
          feedback: `Chyba syntaxe. Kvocient je \\(q = a_4/a_3\\), ne naopak.`
        },
        {
          label: `63`,
          value: "B",
          feedback: `Přístup povolen. \\(q = -\\frac{1}{3}\\), členy: 81, −27, 9.`
        },
        {
          label: `117`,
          value: "C",
          feedback: `Přetečení. Kvocient musí být záporný — proč?`
        },
        {
          label: `Jiný součet`,
          value: "D",
          feedback: `Nekompletní. Z podmínek zadání jde kvocient jednoznačně určit.`
        },
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_posl_04", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11D: Kvocient ze dvou sousedních členů`,
      isTraining: true, firewallId: "q_posl_04", visual_color: "#2ecc8a", visual_symbol: `q²`, points: 0,
      question: `V geometrické posloupnosti je \\(a_3 = 9\\) a \\(a_4 = -3\\). Jaká je hodnota kvocientu \\(q\\)?`,
      formula: `$$q = \\frac{a_{n+1}}{a_n}$$`,
      instruction: `Vyjádři \\(q\\) z podílu dvou po sobě jdoucích členů.`,
      steps: [
        {
          trigger: `> Krok 1: Vztah mezi sousedními členy`,
          content: `V GP platí \\(a_{n+1} = a_n \\cdot q\\). Jak z toho vyjádříš \\(q\\)?`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `\\(q = \\frac{a_4}{a_3} = \\frac{-3}{9}\\). Zkrať zlomek.`
        },
      ],
      choices: [
        {
          label: `\\(q = -3\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Dělíš \\(a_4\\) číslem \\(a_3\\), ne naopak.`
        },
        {
          label: `\\(q = -\\frac{1}{3}\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\frac{-3}{9} = -\\frac{1}{3}\\).`
        },
        {
          label: `\\(q = \\frac{1}{3}\\)`,
          value: "C",
          feedback: `Přetečení. Podíl záporného a kladného čísla je záporný.`
        },
        {
          label: `\\(q = 3\\)`,
          value: "D",
          feedback: `Kritická chyba. Dělíš špatně a ignoruješ znaménko.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_posl_05", regionId: "posloupnosti", type: "closed", monsterName: `FW_11E: Interval pro diferenci`,
      visual_color: "#a78bfa", visual_symbol: `d∈?`, points: 4, trainingTasks: ["t_posl_05"],
      question: `V aritmetické posloupnosti s prvním členem \\(a_{1} = 9\\) platí: trojnásobek druhého členu se rovná součtu třetího a pátého členu.`,
      formula: null,
      instruction: `Do kterého intervalu patří diference \\(d\\) této posloupnosti?`,
      hints: [
        `Každý člen AP jde zapsat jako \\(a_n = a_1 + (n-1) \\cdot d\\). Rozpiš všechny členy z podmínky.`,
        `Po dosazení dostaneš rovnici s jedinou neznámou \\(d\\). Vyřeš ji.`
      ],
      choices: [
        {
          label: `\\((2,5;\\ 3,5)\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(3(9+d) = (9+2d)+(9+4d)\\) → \\(d = 3\\).`
        },
        {
          label: `\\(( - 0,5;\\ 0,5)\\)`,
          value: "B",
          feedback: `Kritická chyba. Diference rozhodně není blízko nuly. Zkus rozepsat rovnici znovu.`
        },
        {
          label: `\\((0,5;\\ 1,5)\\)`,
          value: "C",
          feedback: `Chyba protokolu. Pravděpodobně jsi chybně rozepsal(a) členy.`
        },
        {
          label: `\\((1,5;\\ 2,5)\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Zkontroluj rozepsání: \\(a_3 = a_1+2d\\), \\(a_5 = a_1+4d\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_posl_05", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11E: Diference z podmínky`,
      isTraining: true, firewallId: "q_posl_05", visual_color: "#2ecc8a", visual_symbol: `d∈?`, points: 0,
      question: `Aritmetická posloupnost má \\(a_{1} = 2\\). Platí: \\(a_{2} + a_{4} = 20\\). Jaká je diference \\(d\\)?`,
      formula: null,
      instruction: `Rozpiš oba členy pomocí \\(a_1\\) a \\(d\\).`,
      steps: [
        {
          trigger: `> Krok 1: Rozpiš členy`,
          content: `\\(a_2 = a_1 + d = 2+d\\) a \\(a_4 = a_1 + 3d = 2+3d\\).`
        },
        {
          trigger: `> Krok 2: Řeš rovnici`,
          content: `Sestav rovnici: \\((2+d)+(2+3d) = 20\\). Zjednodušíš na \\(4 + 4d = 20\\). Kolik vyjde \\(d\\)?`
        },
      ],
      choices: [
        {
          label: `\\(d = 2\\)`,
          value: "A",
          feedback: `Chyba: ověř \\(a_2+a_4 = 4+8 = 12 \\neq 20\\).`
        },
        {
          label: `\\(d = 4\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(4+4d=20 \\Rightarrow d=4\\).`
        },
        {
          label: `\\(d = 6\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(6\\) by dalo \\(a_2+a_4 = 8+20=28 \\neq 20\\).`
        },
        {
          label: `\\(d = 8\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Zapomněl(a) jsi na \\(+a_1\\) při rozepsání členů.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_posl_06", regionId: "posloupnosti", type: "closed", monsterName: `FW_11F: Nepravdivé tvrzení`,
      visual_color: "#a78bfa", visual_symbol: `¬`, points: 3, trainingTasks: ["t_posl_06"],
      question: `V aritmetické posloupnosti \\((a_{n})\\) platí: \\(a_{1} = 3\\) a \\(a_{4} = 12\\).`,
      instruction: `Které z následujících tvrzení je <b>nepravdivé</b>?`,
      hints: [
        `Diferenci zjistíš z libovolných dvou členů, jejichž indexy znáš. Jak se obecně vyjádří \\(d\\) z \\(a_n\\) a \\(a_m\\)?`,
        `S diferenci spočítej konkrétní členy a ověř každé tvrzení zvlášť.`
      ],
      choices: [
        {
          label: `\\(a_{2} = 6\\)`,
          value: "A",
          feedback: `Toto je pravdivé. \\(d = 3\\), tedy \\(a_2 = 3+3 = 6\\). Hledáš nepravdivé tvrzení.`
        },
        {
          label: `\\(S_{5} = 45\\)`,
          value: "B",
          feedback: `Toto je pravdivé. \\(S_5 = \\frac{5}{2}(3+15) = 45\\). Hledáš nepravdivé tvrzení.`
        },
        {
          label: `\\(a_{5} = 16\\)`,
          value: "C",
          feedback: `Přístup povolen. Skutečně \\(a_5 = 3+4 \\cdot 3 = 15 \\neq 16\\). Toto je nepravdivé.`
        },
        {
          label: `\\(a_{2} + a_{4} = 2a_{3}\\)`,
          value: "D",
          feedback: `Toto je pravdivé — platí pro každou aritmetickou posloupnost. Hledáš nepravdivé tvrzení.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_posl_06", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11F: Pátý člen aritmetické posloupnosti`,
      isTraining: true, firewallId: "q_posl_06", visual_color: "#2ecc8a", visual_symbol: `¬`, points: 0,
      question: `Aritmetická posloupnost má \\(a_{1} = 2\\) a diferenci \\(d = 5\\). Jaká je hodnota pátého členu \\(a_{5}\\)?`,
      formula: `$$a_{5} = a_{1} + 4d$$`,
      instruction: `Použij vzorec \\(a_n = a_1 + (n-1)d\\) pro \\(n = 5\\).`,
      steps: [
        {
          trigger: `> Krok 1: Dosaď do vzorce`,
          content: `\\(a_5 = 2 + (5-1) \\cdot 5 = 2 + 4 \\cdot 5\\).`
        },
        {
          trigger: `> Krok 2: Výsledek`,
          content: `\\(a_5 = 2 + 4 \\cdot 5\\). Kolik to je? Vyber správnou volbu.`
        },
      ],
      choices: [
        {
          label: `\\(a_{5} = 22\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(2 + 4 \\cdot 5 = 22\\).`
        },
        {
          label: `\\(a_{5} = 25\\)`,
          value: "B",
          feedback: `Chyba protokolu. Sečítal(a) jsi \\(5 \\cdot 5 = 25\\) bez \\(a_1\\).`
        },
        {
          label: `\\(a_{5} = 27\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Použil(a) jsi \\(n = 5\\) místo \\(n-1 = 4\\).`
        },
        {
          label: `\\(a_{5} = 30\\)`,
          value: "D",
          feedback: `Kritická chyba. Pravděpodobně jsi použil(a) \\(d = 6\\) nebo \\(n = 6\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_posl_07", regionId: "posloupnosti", type: "closed", monsterName: `FW_11G: Schodiště ze čtverečků`,
      visual_color: "#a78bfa", visual_symbol: `⬛`, points: 4, trainingTasks: ["t_posl_07"],
      question: `Schodišťový obrazec je tvořen sloupci čtverečků (1 cm × 1 cm). Sloupec s pořadovým číslem \\(k\\) obsahuje \\((2k - 1)\\) čtverečků.`,
      formula: null,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 230" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="46" y1="215" x2="300" y2="215" stroke="#e2e8f0" stroke-width="1.5"/><rect x="50" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="72" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="72" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="72" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="147" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="130" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="147" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="130" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="113" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="96" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="147" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="130" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="113" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="96" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="79" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="62" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><text x="170" y="164" fill="#e2e8f0" font-size="18">…</text></svg>`,
      instruction: `Kolik čtverečků celkem obsahuje schodiště s 20 sloupci?`,
      hints: [
        `Počty čtverečků ve sloupcích tvoří posloupnost lichých čísel: \\(1, 3, 5, \\ldots\\)`,
        `Jaký je vzorec pro součet prvních \\(n\\) členů aritmetické posloupnosti?`
      ],
      choices: [
        {
          label: `380 čtverečků`,
          value: "A",
          feedback: `Chyba protokolu. Výsledek odpovídá \\(n(n-1)\\) — zkontroluj vzorec pro součet.`
        },
        {
          label: `400 čtverečků`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\sum_{k=1}^{20}(2k-1) = 20^2 = 400\\).`
        },
        {
          label: `420 čtverečků`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek odpovídá \\(n(n+1)\\) — plete se s jiným součtem.`
        },
        {
          label: `441 čtverečků`,
          value: "D",
          feedback: `Přetečení. \\(441 = 21^2\\) — počítal(a) jsi 21 sloupců místo 20.`
        },
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_posl_07", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11G: Trojúhelníkové schodiště`,
      isTraining: true, firewallId: "q_posl_07", visual_color: "#2ecc8a", visual_symbol: `⬛`, points: 0,
      question: `Schodiště je tvořeno sloupci čtverečků. Sloupec \\(k\\) obsahuje \\(k\\) čtverečků (sloupec 1 má 1, sloupec 2 má 2, atd.). Kolik čtverečků má schodiště se 4 sloupci?`,
      formula: `$$S = 1 + 2 + 3 + \\ldots + n = \\frac{n(n + 1)}{2}$$`,
      instruction: `Sečti nebo použij vzorec pro součet přirozených čísel.`,
      steps: [
        {
          trigger: `> Krok 1: Rozpiš součet`,
          content: `Čtverce ve sloupcích: \\(1 + 2 + 3 + 4\\).`
        },
        {
          trigger: `> Krok 2: Sečti`,
          content: `Sečti: \\(1+2+3+4 = ?\\). Nebo použij vzorec \\(\\frac{n(n+1)}{2}\\) pro \\(n = 4\\).`
        },
      ],
      choices: [
        {
          label: `8 čtverečků`,
          value: "A",
          feedback: `Chyba: počítal(a) jsi \\(1+2+3+2\\) nebo podobně.`
        },
        {
          label: `9 čtverečků`,
          value: "B",
          feedback: `Chyba protokolu. Pravděpodobně jsi přeskočil(a) jeden sloupec.`
        },
        {
          label: `10 čtverečků`,
          value: "C",
          feedback: `Přístup povolen. \\(1+2+3+4 = 10\\).`
        },
        {
          label: `12 čtverečků`,
          value: "D",
          feedback: `Chyba syntaxe. Výsledek neodpovídá čtyřem sloupcům.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_posl_08", regionId: "posloupnosti", type: "closed", monsterName: `FW_11H: Pyramida lichoběžníků`,
      visual_color: "#a78bfa", visual_symbol: `▬`, points: 5, trainingTasks: ["t_posl_08"],
      question: `Obrazec je sestaven z podobných lichoběžníků seřazených nad sebou. Nejmenší (horní) lichoběžník má základny 3 cm a 1 cm a výšku 2 cm. Každý další lichoběžník má všechny rozměry dvakrát větší než předchozí. Obrazec celkem obsahuje 6 lichoběžníků.`,
      formula: null,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;"><polygon points="155,18 165,18 170,28 150,28" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><circle cx="160" cy="40" r="1.8" fill="#e2e8f0"/><circle cx="160" cy="48" r="1.8" fill="#e2e8f0"/><circle cx="160" cy="56" r="1.8" fill="#e2e8f0"/><polygon points="125,72 195,72 220,106 100,106" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><polygon points="90,116 230,116 278,182 42,182" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/></svg>`,
      instruction: `Vypočtěte v cm² obsah největšího lichoběžníku.`,
      hints: [
        `Obsah lichoběžníku: \\(S = \\frac{a+c}{2} \\cdot v\\). Nejdřív urči rozměry šestého lichoběžníku.`,
        `Rozměry rostou geometricky s kvocientem \\(q = 2\\). Kolikrát jsou rozměry šestého lichoběžníku větší než prvního?`
      ],
      choices: [
        {
          label: `1024 cm²`,
          value: "A",
          feedback: `Chyba indexu. Ověř, zda počítáš šestý, ne pátý lichoběžník.`
        },
        {
          label: `3072 cm²`,
          value: "B",
          feedback: `Chyba syntaxe. Lichoběžník má dvě základny — použij vzorec \\(\\frac{a+c}{2} \\cdot v\\), ne \\(\\frac{a \\cdot v}{2}\\).`
        },
        {
          label: `4096 cm²`,
          value: "C",
          feedback: `Přístup povolen. \\(\\frac{96+32}{2} \\cdot 64 = 4096\\) cm².`
        },
        {
          label: `8192 cm²`,
          value: "D",
          feedback: `Přetečení. Ve vzorci pro obsah lichoběžníku se průměruje — dělíš dvěma.`
        },
      ],
      correctAnswer: "C", reward: { xp: 25 }
    },
    {
      id: "t_posl_08", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11H: Obsah lichoběžníku`,
      isTraining: true, firewallId: "q_posl_08", visual_color: "#2ecc8a", visual_symbol: `▬`, points: 0,
      question: `Lichoběžník má základny \\(a = 6\\) cm, \\(c = 2\\) cm a výšku \\(v = 4\\) cm. Jaký je jeho obsah?`,
      formula: `$$S = \\frac{a + c}{2} \\cdot v$$`,
      instruction: `Dosaď do vzorce pro obsah lichoběžníku.`,
      steps: [
        {
          trigger: `> Krok 1: Dosazení do vzorce`,
          content: `Dosadíme \\(a = 6\\), \\(c = 2\\), \\(v = 4\\) do vzorce: \\(S = \\frac{a+c}{2} \\cdot v = \\frac{6+2}{2} \\cdot 4 = \\frac{8}{2} \\cdot 4 = 4 \\cdot 4\\). Kolik cm² vyjde?`
        },
        {
          trigger: `> Krok 2: Šestý lichoběžník je kolikrát větší?`,
          content: `V boss příkladu má každý lichoběžník rozměry dvakrát větší než předchozí (kvocient \\(q = 2\\)). Šestý je proto \\(2^{6-1} = 2^5 = 32\\)× větší než první.<br>Rozměry prvního: \\(a_1 = 3\\) cm, \\(c_1 = 1\\) cm, \\(v_1 = 2\\) cm.<br>Rozměry šestého: \\(a_6 = 96\\) cm, \\(c_6 = 32\\) cm, \\(v_6 = 64\\) cm.<br>Dosaď do vzorce pro obsah a vypočítej.`
        },
      ],
      choices: [
        {
          label: `12 cm²`,
          value: "A",
          feedback: `Nekompletní. Lichoběžník má dvě základny — obě patří do vzorce.`
        },
        {
          label: `16 cm²`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\frac{8}{2} \\cdot 4 = 16\\) cm².`
        },
        {
          label: `24 cm²`,
          value: "C",
          feedback: `Chyba syntaxe. Zapomněl(a) jsi na kratší základnu i na dělení.`
        },
        {
          label: `32 cm²`,
          value: "D",
          feedback: `Přetečení. Ve vzorci pro obsah lichoběžníku se průměruje.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_posl_09", regionId: "posloupnosti", type: "closed", monsterName: `FW_11I: Obrazec ze čtverců`,
      visual_color: "#a78bfa", visual_symbol: `∑q`, points: 5, trainingTasks: ["t_posl_09"],
      question: `Obrazec tvoří 7 čtverců seřazených nad sebou. Největší (spodní) čtverec má obsah \\(4096\\) cm², každý další čtverec má obsah čtyřikrát menší. Celkový obsah všech čtverců je \\(5461\\) cm².`,
      formula: null,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;"><rect x="156" y="18" width="8" height="8" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.9"/><circle cx="160" cy="38" r="1.8" fill="#e2e8f0"/><circle cx="160" cy="46" r="1.8" fill="#e2e8f0"/><circle cx="160" cy="54" r="1.8" fill="#e2e8f0"/><rect x="140" y="66" width="40" height="40" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.3"/><rect x="120" y="114" width="80" height="80" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.5"/><line x1="108" y1="18" x2="108" y2="194" stroke="#f7b84f" stroke-width="1" stroke-dasharray="3,2"/><line x1="102" y1="18" x2="114" y2="18" stroke="#f7b84f" stroke-width="1"/><line x1="102" y1="194" x2="114" y2="194" stroke="#f7b84f" stroke-width="1"/><text x="90" y="110" fill="#f7b84f" font-size="11" text-anchor="middle" font-weight="bold">h?</text></svg>`,
      instruction: `Jaká je celková výška \\(h\\) obrazce (v cm)?`,
      hints: [
        `Obsah čtverce a délka jeho strany jsou různé veličiny. Jak z obsahu vypočítáš stranu?`,
        `Strany čtverců tvoří také geometrickou posloupnost. Urči stranu každého čtverce a sečti.`
      ],
      choices: [
        {
          label: `\\(h = 64\\) cm`,
          value: "A",
          feedback: `Neúplný přístup. \\(\\sqrt{4096} = 64\\) je strana jen největšího čtverce — obrazec jich má sedm.`
        },
        {
          label: `\\(h = 126\\) cm`,
          value: "B",
          feedback: `Chyba indexu. Zapomněl(a) jsi na nejmenší čtverec se stranou \\(\\sqrt{1} = 1\\) cm.`
        },
        {
          label: `\\(h = 127\\) cm`,
          value: "C",
          feedback: `Přístup povolen. \\(64+32+16+8+4+2+1 = 127\\) cm.`
        },
        {
          label: `\\(h = 5461\\) cm`,
          value: "D",
          feedback: `Kritická chyba. 5461 cm² je celkový obsah, ne výška. Z obsahu nejdřív urči stranu: \\(a = \\sqrt{S}\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 25 }
    },
    {
      id: "t_posl_09", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11I: Obsah čtverců na součet stran`,
      isTraining: true, firewallId: "q_posl_09", visual_color: "#2ecc8a", visual_symbol: `∑q`, points: 0,
      question: `Obrazec tvoří 3 čtverce seřazené nad sebou. Největší čtverec má obsah \\(64\\) cm², každý další má obsah čtyřikrát menší. Jaký je součet délek stran všech tří čtverců?`,
      formula: null,
      instruction: `Urči délku strany každého čtverce a sečti je.`,
      steps: [
        {
          trigger: `> Krok 1: Z obsahu na délku strany`,
          content: `Délka strany čtverce = odmocnina z jeho obsahu: \\(a = \\sqrt{S}\\). Obsah 64 dá \\(\\sqrt{64} = 8\\) cm. Jaké strany dají obsah 16 cm² a obsah 4 cm²?`
        },
        {
          trigger: `> Krok 2: Sečti délky stran`,
          content: `Strany jsou \\(8, 4, 2\\) cm. Sečti: \\(8 + 4 + 2 = ?\\)`
        },
      ],
      choices: [
        {
          label: `\\(14\\) cm`,
          value: "A",
          feedback: `Přístup povolen. \\(\\sqrt{64}+\\sqrt{16}+\\sqrt{4} = 8+4+2 = 14\\) cm.`
        },
        {
          label: `\\(8\\) cm`,
          value: "B",
          feedback: `Neúplný přístup. Vypočítal(a) jsi hranu jen největšího čtverce.`
        },
        {
          label: `\\(84\\) cm`,
          value: "C",
          feedback: `Kritická chyba. Sčítal(a) jsi obsah místo délky strany: \\(64+16+4 = 84\\) cm² — to jsou cm², ne cm.`
        },
        {
          label: `\\(12\\) cm`,
          value: "D",
          feedback: `Chyba indexu. Sečítal(a) jsi jen první dva čtverce: \\(8+4 = 12\\). Chybí třetí.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_posl_10", regionId: "posloupnosti", type: "closed", monsterName: `FW_11J: Šachovnicová mozaika`,
      visual_color: "#a78bfa", visual_symbol: `◇`, points: 5, trainingTasks: ["t_posl_10"],
      question: `Mozaika ze čtvercových dlaždic má tvar kosočtverce. V každé řadě se střídají tmavé a bílé dlaždice; každá řada začíná tmavou. Řady (odshora) mají 1, 3, 5, …, 21, …, 5, 3, 1 dlaždic. Nejdelší (střední) řada obsahuje 21 dlaždic.`,
      formula: null,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;"><rect x="155" y="10" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="143" y="22" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="155" y="22" width="10" height="10" rx="1" fill="#94a3b8" stroke="#cbd5e1" stroke-width="0.8"/><rect x="167" y="22" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="131" y="34" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="143" y="34" width="10" height="10" rx="1" fill="#94a3b8" stroke="#cbd5e1" stroke-width="0.8"/><rect x="155" y="34" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="167" y="34" width="10" height="10" rx="1" fill="#94a3b8" stroke="#cbd5e1" stroke-width="0.8"/><rect x="179" y="34" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="143" y="46" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="155" y="46" width="10" height="10" rx="1" fill="#94a3b8" stroke="#cbd5e1" stroke-width="0.8"/><rect x="167" y="46" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><rect x="155" y="58" width="10" height="10" rx="1" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.8"/><text x="203" y="42" fill="#e2e8f0" font-size="11" font-family="'Segoe UI',Arial,sans-serif">→ …</text><text x="117" y="42" fill="#e2e8f0" font-size="11" text-anchor="end" font-family="'Segoe UI',Arial,sans-serif">… ←</text><text x="160" y="90" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif">Nejdelší řada: 21 dlaždic</text></svg>`,
      instruction: `Kolik tmavých dlaždic obsahuje celá mozaika?`,
      hints: [
        `V řadě o \\(n\\) dlaždicích (\\(n\\) liché, začíná tmavou) je tmavých \\(\\frac{n+1}{2}\\). Vypiš počty tmavých pro každou řadu.`,
        `Počty tmavých v řadách tvoří symetrickou posloupnost. Jaký součet dává taková „pyramida" čísel?`
      ],
      choices: [
        {
          label: `100`,
          value: "A",
          feedback: `Záměna barev. 100 je počet bílých dlaždic (\\(10^2\\)). Tmavých je v každé řadě o jednu víc.`
        },
        {
          label: `121`,
          value: "B",
          feedback: `Přístup povolen. Tmavých: \\(1+2+\\ldots+11+\\ldots+2+1 = 11^2 = 121\\).`
        },
        {
          label: `132`,
          value: "C",
          feedback: `Chyba indexu. Započítal(a) jsi střední řadu dvakrát: \\(2 \\times 66 = 132\\). Střed patří jen do jedné poloviny.`
        },
        {
          label: `221`,
          value: "D",
          feedback: `Kritická chyba. 221 je celkový počet dlaždic (tmavých i bílých). Otázka je jen na tmavé.`
        },
      ],
      correctAnswer: "B", reward: { xp: 25 }
    },
    {
      id: "t_posl_10", regionId: "posloupnosti", type: "closed", monsterName: `SIM_11J: Šachovnicový kosočtverec`,
      isTraining: true, firewallId: "q_posl_10", visual_color: "#2ecc8a", visual_symbol: `◇`, points: 0,
      question: `Mozaika ve tvaru kosočtverce má řady: 1, 3, 5, 7, 5, 3, 1 dlaždic. V každé řadě se střídají tmavé a bílé; řada začíná tmavou. Kolik tmavých dlaždic je v celé mozaice?`,
      formula: null,
      instruction: `Urči počet tmavých v každé řadě a sečti.`,
      steps: [
        {
          trigger: `> Krok 1: Tmavé v každé řadě`,
          content: `Řada o \\(n\\) dlaždicích začíná tmavou → tmavých je \\(\\frac{n+1}{2}\\). Pro řady 1, 3, 5, 7, 5, 3, 1 vychází: 1, 2, 3, 4, 3, 2, 1 tmavých.`
        },
        {
          trigger: `> Krok 2: Sečti`,
          content: `\\(1+2+3+4+3+2+1 = ?\\). Horní polovina: \\(1+2+3+4 = 10\\). Dolní: \\(3+2+1 = 6\\).`
        },
      ],
      choices: [
        {
          label: `9`,
          value: "A",
          feedback: `Záměna barev. 9 je počet bílých dlaždic. Tmavých je v každé řadě o jednu víc.`
        },
        {
          label: `16`,
          value: "B",
          feedback: `Přístup povolen. \\(1+2+3+4+3+2+1 = 16\\).`
        },
        {
          label: `20`,
          value: "C",
          feedback: `Chyba indexu. Zdvojil(a) jsi horní polovinu: \\(2 \\times 10 = 20\\), ale střed se nepočítá dvakrát.`
        },
        {
          label: `25`,
          value: "D",
          feedback: `Nefiltrováno. 25 je celkový počet dlaždic (tmavých i bílých). Otázka je jen na tmavé.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },

    // ==========================================
    // PRAVDĚPODOBNOST — CERMAT ANALOGIE (11–20)
    // ==========================================

    {
      id: "q_prav_11", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08A: Výběr z číselného pásu`,
      visual_color: "#e84393", visual_symbol: `C(n,k)`, points: 3,
      trainingTasks: ["t_prav_11"],
      question: `Na štítku výrobku je páska s osmi číslicemi v řadě: \\(1, 2, 3, 4, 5, 6, 7, 8\\). Přelepením tří číslic neprůhlednou páskou vznikne z&nbsp;pěti zbývajících (v&nbsp;původním pořadí) pětimístný kód výrobku.`,
      instruction: `Kolik různých pětimístných čísel lze takto vytvořit?`,
      choices: [
        {
          label: `\\(40\\)`,
          value: "A",
          feedback: `Chyba protokolu. Výsledek \\(40 = 8 \\times 5\\) — ale nesestavujeme čísla kombinací pozic a číslic. Stačí vybrat, které 3 číslice zakryjeme, zbytek je dán pořadím na pásu.`
        },
        {
          label: `\\(120\\)`,
          value: "B",
          feedback: `Chyba syntaxe. \\(120 = P(5) = 5!\\) — to by platilo, kdyby se zbylých 5 číslic přeuspořádávalo. Ale pořadí je pevně dáno pásem.`
        },
        {
          label: `\\(56\\)`,
          value: "C",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(336\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(336 = V(8,3) = 8 \\times 7 \\times 6\\) — to by platilo, kdyby záleželo na pořadí zakrytých číslic. Zakrytí \\(\\{1,2,3\\}\\) a \\(\\{2,1,3\\}\\) ale dává totéž číslo — použijte kombinace, ne variace.`
        },
      ],
      hints: [
        `Každé pětimístné číslo jednoznačně odpovídá výběru tří číslic, které zakryjeme. Záleží na pořadí výběru?`,
        `Kolik trojic číslic lze z pásu vybrat k zakrytí?`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_prav_11", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08A: Kratší pás`,
      isTraining: true, firewallId: "q_prav_11",
      visual_color: "#2ecc8a", visual_symbol: `C(n,k)`, points: 0,
      question: `Na štítku je páska se šesti číslicemi v řadě: \\(1, 2, 3, 4, 5, 6\\). Přelepením dvou číslic neprůhlednou páskou vznikne čtyřmístný kód výrobku.`,
      instruction: `Kolik různých čtyřmístných čísel lze takto vytvořit?`,
      steps: [
        {
          trigger: `> Krok 1: Co volíme?`,
          content: `Zakrýváme 2 číslice z 6. Na pořadí výběru nezáleží — zakrytí \\(\\{1,2\\}\\) a \\(\\{2,1\\}\\) dává totéž číslo. Jde tedy o kombinace. Zbylé číslice zůstávají v pořadí pásu.`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `Kombinace: \\(C(n, k) = \\dfrac{n!}{k! \\cdot (n-k)!}\\). Jaké jsou hodnoty \\(n\\) a \\(k\\) v tomto příkladu?`
        },
      ],
      choices: [
        {
          label: `\\(30\\)`,
          value: "A",
          feedback: `Chyba. \\(30 = V(6,2)\\) — variace, ne kombinace. Na pořadí zakrytých číslic nezáleží.`
        },
        {
          label: `\\(15\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(C(6,2) = 15\\).`
        },
        {
          label: `\\(24\\)`,
          value: "C",
          feedback: `Chyba. \\(24 = 4!\\) je počet permutací 4 číslic, ale pořadí je pevné.`
        },
        {
          label: `\\(12\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Výsledek 12 neodpovídá žádnému správnému výpočtu.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },

    {
      id: "q_prav_12", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08B: Smíšená dvojice z různých týmů`,
      visual_color: "#e84393", visual_symbol: `×`, points: 3,
      trainingTasks: ["t_prav_12"],
      question: `V týmu A pracuje \\(6\\) mužů a \\(4\\) ženy. V týmu B pracují \\(3\\) muži a \\(5\\) žen.`,
      instruction: `Kolika způsoby lze sestavit jednu smíšenou dvojici (muž a žena) tak, aby nebyli ze stejného týmu?`,
      choices: [
        {
          label: `\\(42\\)`,
          value: "A",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(30\\)`,
          value: "B",
          feedback: `Chyba protokolu. \\(30 = 6 \\times 5\\) pokrývá jen případ „chlapec z A + dívka z B". Existuje i opačný případ — dívka z A + chlapec z B.`
        },
        {
          label: `\\(54\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek 54 nevznikne součtem dvou korektních dílčích případů.`
        },
        {
          label: `\\(44\\)`,
          value: "D",
          feedback: `Kritická chyba. Přidaný člen nemá opodstatnění — zkontrolujte, kolik případů skutečně existuje.`
        },
      ],
      hints: [
        `Podmínka „z různých týmů" — jaké dva případy připadají v úvahu? Mohou nastat současně?`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_prav_12", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08B: Smíšená dvojice — menší skupiny`,
      isTraining: true, firewallId: "q_prav_12",
      visual_color: "#2ecc8a", visual_symbol: `×`, points: 0,
      question: `V týmu A jsou \\(3\\) muži a \\(2\\) ženy. V týmu B jsou \\(2\\) muži a \\(4\\) ženy.`,
      instruction: `Kolika způsoby sestavíme smíšenou dvojici (muž a žena) z různých týmů?`,
      steps: [
        {
          trigger: `> Krok 1: Rozpad na dva případy`,
          content: `Existují dva vzájemně se vylučující případy: muž z A + žena z B, nebo žena z A + muž z B. Pro každý případ násobíme počty (pravidlo součinu).`
        },
        {
          trigger: `> Krok 2: Celkem`,
          content: `Výsledky obou případů sečtěte — vylučují se. Dosaďte správné počty mužů a žen z každého týmu.`
        },
      ],
      choices: [
        {
          label: `\\(12\\)`,
          value: "A",
          feedback: `Chyba. 12 je jen případ „chlapec z A + dívka z B". Nezapomněli jste na opačný případ?`
        },
        {
          label: `\\(14\\)`,
          value: "B",
          feedback: `Chyba syntaxe. \\(14\\) neodpovídá žádnému správnému výpočtu.`
        },
        {
          label: `\\(24\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(24 = (3+2) \\times (2+4)\\) — násobíte celkové počty obou tříd bez ohledu na pohlaví.`
        },
        {
          label: `\\(16\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(3 \\times 4 + 2 \\times 2 = 12 + 4 = 16\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },

    {
      id: "q_prav_13", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08C: PIN s bezpečnostní podmínkou`,
      visual_color: "#e84393", visual_symbol: `≠≠≠`, points: 5,
      trainingTasks: ["t_prav_13"],
      question: `Čtyřmístný PIN lze sestavit z číslic \\(0, 1, 2, 3, 4, 5\\). Bezpečnostní podmínka: v&nbsp;každé trojici po sobě jdoucích číslic PINu musí být tři různé číslice. PIN nezačíná číslicí 0.
Např. PIN \\(1302\\) podmínku splňuje: trojice \\(1, 3, 0\\) i trojice \\(3, 0, 2\\) jsou tvořeny třemi různými číslicemi.`,
      instruction: `Kolik čtyřmístných čísel splňujících uvedené podmínky lze vytvořit?`,
      choices: [
        {
          label: `\\(240\\)`,
          value: "A",
          feedback: `Chyba protokolu. \\(240 = 5 \\times 4 \\times 4 \\times 3\\) — na čtvrté pozici uvažujete jen 3 možnosti, ale \\(d_4\\) musí být různé od \\(d_2\\) a \\(d_3\\) (ne od \\(d_1\\)). Ze 6 číslic minus 2 zakázané = 4 platné.`
        },
        {
          label: `\\(300\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Podmínka se týká trojic sousedních číslic, ne všech číslic v čísle.`
        },
        {
          label: `\\(500\\)`,
          value: "C",
          feedback: `Kritická chyba. Výsledek \\(500\\) vznikne špatnou úvahou o podmínkách na jednotlivých pozicích.`
        },
        {
          label: `\\(400\\)`,
          value: "D",
          feedback: `Přístup povolen. ✓`
        },
      ],
      hints: [
        `Podmínka: trojice \\((d_1, d_2, d_3)\\) i trojice \\((d_2, d_3, d_4)\\) musí mít tři různé prvky. To neznamená, že všechny 4 číslice musí být různé — \\(d_1\\) může být rovno \\(d_4\\). Nejde o klasické kombinace ani variace — číslice se mohou opakovat na nesousedních pozicích.`,
        `Kolik číslic je zakázaných na každé pozici? Závisí omezení jen na sousedech, nebo na všech předchozích?`,
      ],
      correctAnswer: "D", reward: { xp: 25 }
    },
    {
      id: "t_prav_13", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08C: Sousední dvojice různé`,
      isTraining: true, firewallId: "q_prav_13",
      visual_color: "#2ecc8a", visual_symbol: `≠`, points: 0,
      question: `Z číslic \\(\\{1, 2, 3, 4\\}\\) vytváříme trojmístná čísla, ve kterých je každá dvojice sousedních číslic různá. (Číslice se mohou opakovat, jen ne vedle sebe.)`,
      instruction: `Kolik takových trojmístných čísel existuje?`,
      steps: [
        {
          trigger: `> Krok 1: Podmínky`,
          content: `\\(d_1 \\neq d_2\\) a \\(d_2 \\neq d_3\\). Ale \\(d_1\\) může být rovno \\(d_3\\) (např. číslo 121 je OK). Záleží na pořadí — tvoříme uspořádanou posloupnost číslic.`
        },
        {
          trigger: `> Krok 2: Počítání pozic`,
          content: `Pro každou pozici spočítejte počet povolených číslic: \\(d_1\\) — kolik? \\(d_2\\) — od koho se musí lišit? \\(d_3\\) — od koho? Výsledky vynásobte.`
        },
      ],
      choices: [
        {
          label: `\\(36\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(4 \\times 3 \\times 3 = 36\\).`
        },
        {
          label: `\\(24\\)`,
          value: "B",
          feedback: `Chyba. \\(24 = 4 \\times 3 \\times 2\\) — na třetí pozici jste omezili 2 místo 3 (\\(d_3\\) musí být \\(\\neq d_2\\), ale může být \\(= d_1\\)).`
        },
        {
          label: `\\(48\\)`,
          value: "C",
          feedback: `Chyba. \\(48 = 4 \\times 4 \\times 3\\) — na druhé pozici jste zapomněli odečíst \\(d_1\\).`
        },
        {
          label: `\\(64\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(64 = 4^3\\) je celkový počet trojmístných čísel z \\(\\{1,2,3,4\\}\\) bez jakýchkoli omezení.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    {
      id: "q_prav_14", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08D: Pravděpodobnost sudého čísla`,
      visual_color: "#e84393", visual_symbol: `P(2|)`, points: 4,
      trainingTasks: ["t_prav_14"],
      question: `Generátor sestaví všechna trojmístná čísla z číslic \\(0, 1, 2, 3, 4\\), ve&nbsp;kterých se žádná číslice neopakuje. (Číslo nezačíná číslicí 0.) Jedno z těchto čísel je náhodně vybráno.`,
      instruction: `Jaká je pravděpodobnost, že náhodně vybrané číslo z&nbsp;tohoto souboru je sudé?`,
      choices: [
        {
          label: `\\(\\dfrac{3}{5}\\)`,
          value: "A",
          feedback: `Chyba protokolu. \\(3/5\\) předpokládá, že 3 z 5 číslic jsou sudé (0, 2, 4), takže \\(P = 3/5\\). Pravděpodobnost ale závisí na pozici poslední číslice a podmínce nezačínat nulou — nestačí poměr sudých číslic.`
        },
        {
          label: `\\(\\dfrac{5}{8}\\)`,
          value: "B",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(\\dfrac{1}{2}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(1/2\\) by platilo při symetrickém rozložení. Podmínka „nezačíná 0" narušuje symetrii — sudých je více díky koncové nule.`
        },
        {
          label: `\\(\\dfrac{7}{12}\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(7/12\\) nevznikne korektním rozkladem na případy podle koncové číslice.`
        },
      ],
      hints: [
        `Číslo je sudé, právě když poslední číslice je 0, 2 nebo 4. Chovají se všechny tři případy stejně vzhledem k podmínce na první číslici?`,
        `Proč se případ „koncová 0" liší od „koncová 2" nebo „koncová 4"?`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_prav_14", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08D: Sudá dvojmístná čísla`,
      isTraining: true, firewallId: "q_prav_14",
      visual_color: "#2ecc8a", visual_symbol: `P(2|)`, points: 0,
      question: `Z číslic \\(\\{1, 2, 3, 4\\}\\) jsou sestavena všechna dvojmístná čísla bez opakování.`,
      instruction: `Jaká je pravděpodobnost, že náhodně vybrané číslo je sudé?`,
      steps: [
        {
          trigger: `> Krok 1: Celkový počet`,
          content: `Záleží na pořadí číslic — variace bez opakování. Celkový počet dvojmístných čísel: \\(d_1\\) má 4 možnosti, \\(d_2\\) má 3 zbývající.`
        },
        {
          trigger: `> Krok 2: Sudá čísla`,
          content: `Sudé číslo musí končit sudou číslicí. Sudé číslice z množiny \\(\\{1,2,3,4\\}\\) jsou 2 a 4. Pro každou zvlášť spočítejte, kolik prvních číslic připadá v úvahu, a výsledky sečtěte.`
        },
      ],
      choices: [
        {
          label: `\\(\\dfrac{1}{4}\\)`,
          value: "A",
          feedback: `Chyba. \\(1/4 = 3/12\\) — to by bylo, kdyby sudé číslo vyžadovalo jen jednu konkrétní poslední číslici.`
        },
        {
          label: `\\(\\dfrac{1}{3}\\)`,
          value: "B",
          feedback: `Chyba. \\(1/3 = 4/12\\) — neodpovídá výpočtu.`
        },
        {
          label: `\\(\\dfrac{1}{2}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(6\\) sudých z \\(12\\) celkem → \\(1/2\\).`
        },
        {
          label: `\\(\\dfrac{2}{3}\\)`,
          value: "D",
          feedback: `Chyba. \\(2/3 = 8/12\\) — příliš mnoho sudých. Poslední číslice musí být 2 nebo 4, což dává 6, ne 8.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },

    {
      id: "q_prav_15", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08E: Přístupový kód systému`,
      visual_color: "#e84393", visual_symbol: `A1B2C`, points: 4,
      trainingTasks: ["t_prav_15"],
      question: `Přístupový kód systému má \\(5\\) znaků. Obsahuje právě \\(2\\) různá písmena z množiny \\(\\{P, Q, R, S\\}\\) a právě \\(3\\) různé číslice z množiny \\(\\{1, 2, 3, 4, 5\\}\\). Podmínkám vyhovují např. kódy 1P3Q5, Q2P41, 53PQ1.`,
      instruction: `Kolik různých hesel lze sestavit uvedeným způsobem?`,
      choices: [
        {
          label: `\\(7\\,200\\)`,
          value: "A",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(720\\)`,
          value: "B",
          feedback: `Chyba protokolu. \\(720 = 6!\\) — uspořádáváte 6 znaků místo 5, nebo jste za 5! dosadili 6! omylem.`
        },
        {
          label: `\\(1\\,200\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(1\\,200 = 10 \\times 120\\) — zapomněli jste na výběr písmen \\(C(4,2) = 6\\).`
        },
        {
          label: `\\(14\\,400\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(14\\,400 = 2 \\times 7\\,200\\) — výsledek byl zdvojen, pravděpodobně uvažováním pořadí výběru písmen.`
        },
      ],
      hints: [
        `Úloha má tři fáze: výběr písmen, výběr číslic a uspořádání. Záleží na pořadí při výběru, nebo až při sestavení hesla?`,
        `Kolik způsoby lze vybrat 2 písmena z dané množiny? Kolik způsoby 3 číslice? Kolik různých pořadí má 5 různých znaků?`,
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_prav_15", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08E: Krátký kód`,
      isTraining: true, firewallId: "q_prav_15",
      visual_color: "#2ecc8a", visual_symbol: `A1B`, points: 0,
      question: `Kód má \\(3\\) znaky: právě \\(2\\) různá písmena z \\(\\{X, Y, Z\\}\\) a právě \\(1\\) číslice z \\(\\{1, 2\\}\\). Např. X1Y, 2ZX, Y1Z.`,
      instruction: `Kolik různých kódů lze sestavit?`,
      steps: [
        {
          trigger: `> Krok 1: Výběr znaků`,
          content: `Nejprve vybereme znaky — na pořadí výběru nezáleží, kombinace: \\(C(3,2) = 3\\) dvojice písmen, 2 volby číslice.`
        },
        {
          trigger: `> Krok 2: Uspořádání`,
          content: `Vybrané 3 znaky uspořádáme na pozice kódu — teď na pořadí záleží. Kolik uspořádání mají 3 různé znaky?`
        },
      ],
      choices: [
        {
          label: `\\(12\\)`,
          value: "A",
          feedback: `Chyba. \\(12 = 3 \\times 2 \\times 2\\) — na uspořádání dáváte jen 2 místo \\(3! = 6\\).`
        },
        {
          label: `\\(36\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(3 \\times 2 \\times 6 = 36\\).`
        },
        {
          label: `\\(18\\)`,
          value: "C",
          feedback: `Chyba. \\(18 = 3 \\times 6\\) — zapomněli jste na výběr číslice (2 možnosti).`
        },
        {
          label: `\\(72\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(72 = 36 \\times 2\\) — zdvojení výpočtu.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },

    {
      id: "q_prav_16", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08F: Losování cen`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 4,
      trainingTasks: ["t_prav_16"],
      question: `Na školním výletě obdržel každý účastník (\\(3\\) průvodci a \\(22\\) žáků) jeden los. Ze všech \\(25\\) losů budou náhodně vylosovány tři výherní.`,
      instruction: `Jaká je pravděpodobnost, že všechny tři ceny získají sportovci? (Zaokrouhlete na setiny.)`,
      choices: [
        {
          label: `\\(0{,}59\\)`,
          value: "A",
          feedback: `Chyba protokolu. \\(0{,}59\\) nevznikne korektním poměrem kombinací.`
        },
        {
          label: `\\(0{,}73\\)`,
          value: "B",
          feedback: `Chyba syntaxe. \\(0{,}73\\) také neodpovídá správnému poměru kombinací.`
        },
        {
          label: `\\(0{,}79\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(0{,}79 = \\dfrac{22 \\times 21}{25 \\times 24}\\) — to je pravděpodobnost pro losování jen 2 cen, ne 3.`
        },
        {
          label: `\\(0{,}67\\)`,
          value: "D",
          feedback: `Přístup povolen. ✓`
        },
      ],
      hints: [
        `Losujeme bez vrácení. Záleží na pořadí, ve kterém jsou výherci vylosováni?`,
        `Alternativně: jaká je pravděpodobnost, že první vylosovaný je žák? A jak se mění situace po každém tahu?`,
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_prav_16", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08F: Losování — menší skupina`,
      isTraining: true, firewallId: "q_prav_16",
      visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Ze skupiny \\(10\\) účastníků výletu (\\(2\\) průvodci a \\(8\\) žáků) losujeme \\(2\\) výherce.`,
      instruction: `Jaká je pravděpodobnost, že oba výherci jsou žáci?`,
      steps: [
        {
          trigger: `> Krok 1: Celkový počet výběrů`,
          content: `Losujeme bez vrácení, na pořadí výherců nezáleží — kombinace. Celkový počet výběrů 2 z 10: \\(C(10,2)\\).`
        },
        {
          trigger: `> Krok 2: Příznivé výběry a pravděpodobnost`,
          content: `Příznivé výběry: oba výherci jsou žáci. Kolik způsoby lze vybrat 2 žáky z 8? Sestavte zlomek \\(P = \\frac{\\text{příznivé}}{\\text{celkem}}\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\dfrac{28}{45}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(C(8,2)/C(10,2) = 28/45\\).`
        },
        {
          label: `\\(\\dfrac{16}{25}\\)`,
          value: "B",
          feedback: `Chyba. \\(\\dfrac{16}{25} = \\left(\\dfrac{8}{10}\\right)^2\\) — to by platilo pro losování s vrácením. Zde bez vrácení.`
        },
        {
          label: `\\(\\dfrac{4}{5}\\)`,
          value: "C",
          feedback: `Chyba. \\(4/5 = 8/10\\) je pravděpodobnost, že první výherce je účastník — ale potřebujeme oba.`
        },
        {
          label: `\\(\\dfrac{28}{90}\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(90 = 2 \\times C(10,2)\\) — jmenovatel byl zdvojen.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    {
      id: "q_prav_17", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08G: Žetony stejné barvy`,
      visual_color: "#e84393", visual_symbol: `●●●`, points: 4,
      trainingTasks: ["t_prav_17"],
      question: `V látkovém vaku je \\(5\\) červených a \\(7\\) modrých žetonů. Hráč vytáhne náhodně tři žetony najednou.`,
      instruction: `Jaká je pravděpodobnost, že všechny tři vytažené kuličky budou mít stejnou barvu?`,
      choices: [
        {
          label: `\\(\\dfrac{7}{44}\\)`,
          value: "A",
          feedback: `Chyba protokolu. \\(7/44 = 35/220\\) pokrývá jen případ „3 modré": \\(C(7,3)/C(12,3)\\). „Stejná barva" zahrnuje i „3 červené".`
        },
        {
          label: `\\(\\dfrac{9}{44}\\)`,
          value: "B",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(\\dfrac{1}{22}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(1/22 = 10/220\\) — to je jen \\(P(\\text{3 červené})\\). Zapomněli jste přičíst \\(P(\\text{3 modré})\\).`
        },
        {
          label: `\\(\\dfrac{35}{44}\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(35/44 = 175/220\\) — to je pravděpodobnost, že kuličky NEBUDOU všechny stejné barvy (komplement).`
        },
      ],
      hints: [
        `„Všechny stejné barvy" — kolik barevných variant připadá v úvahu? Mohou nastat současně?`,
        `Kolik příznivých trojic existuje pro každou barvu? Kolik trojic celkem lze z vaku vybrat?`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_prav_17", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08G: Dva žetony stejné barvy`,
      isTraining: true, firewallId: "q_prav_17",
      visual_color: "#2ecc8a", visual_symbol: `●●`, points: 0,
      question: `V pytlíku je \\(4\\) červených a \\(6\\) modrých žetonů. Vytáhneme \\(2\\) žetony najednou.`,
      instruction: `Jaká je pravděpodobnost, že obě budou mít stejnou barvu?`,
      steps: [
        {
          trigger: `> Krok 1: Celkový počet dvojic`,
          content: `Tahání najednou — na pořadí nezáleží, kombinace. Celkový počet dvojic: \\(C(10,2)\\).`
        },
        {
          trigger: `> Krok 2: Příznivé dvojice a pravděpodobnost`,
          content: `Příznivé: obě červené nebo obě modré — vzájemně se vylučují, sčítáme. Spočítejte \\(C(4,2)\\) a \\(C(6,2)\\) zvlášť a sestavte zlomek.`
        },
      ],
      choices: [
        {
          label: `\\(\\dfrac{1}{3}\\)`,
          value: "A",
          feedback: `Chyba. \\(15/45 = 1/3\\) je jen P(obě modré). Přičtěte P(obě červené).`
        },
        {
          label: `\\(\\dfrac{2}{15}\\)`,
          value: "B",
          feedback: `Chyba. \\(6/45 = 2/15\\) je jen P(obě červené). Přičtěte P(obě modré).`
        },
        {
          label: `\\(\\dfrac{8}{15}\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(8/15 = 24/45\\) — zkontrolujte dílčí výpočty pro každou barvu.`
        },
        {
          label: `\\(\\dfrac{7}{15}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\((C(4,2) + C(6,2))/C(10,2) = 21/45 = 7/15\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },

    {
      id: "q_prav_18", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08H: Obsazení rolí v komisi`,
      visual_color: "#e84393", visual_symbol: `V(n,k)`, points: 4,
      trainingTasks: ["t_prav_18"],
      question: `Organizační komise má \\(12\\) členů. Tři z nich obsadí role koordinátora, zapisovatele a&nbsp;pokladníka. Roli koordinátora a zapisovatele může zastávat kterýkoli ze \\(12\\) členů, roli pokladníka však pouze \\(5\\) z&nbsp;nich.`,
      instruction: `Kolika způsoby lze všechny tři funkce obsadit?`,
      choices: [
        {
          label: `\\(660\\)`,
          value: "A",
          feedback: `Chyba syntaxe. \\(660 = 12 \\times 11 \\times 5\\) — při tomto výpočtu nezohledňujete, že pokladník nemůže zastávat zároveň funkci předsedy nebo tajemníka.`
        },
        {
          label: `\\(1\\,320\\)`,
          value: "B",
          feedback: `Kritická chyba. \\(1\\,320 = 12 \\times 11 \\times 10\\) — ignorujete podmínku, že na pokladníka kandiduje jen 5 členů z 12.`
        },
        {
          label: `\\(550\\)`,
          value: "C",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(440\\)`,
          value: "D",
          feedback: `Chyba protokolu. \\(440 = 5 \\times 11 \\times 8\\) — po volbě pokladníka a předsedy zbývá 10 kandidátů na tajemníka, ne 8.`
        },
      ],
      hints: [
        `Záleží na pořadí — koordinátor, zapisovatel a pokladník jsou různé role. Kterou funkci je výhodné obsadit jako první?`,
        `Kolik kandidátů zbývá na každou další roli po obsazení předchozí?`,
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_prav_18", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08H: Obsazení rolí — menší komise`,
      isTraining: true, firewallId: "q_prav_18",
      visual_color: "#2ecc8a", visual_symbol: `V(n,k)`, points: 0,
      question: `Komise má 8 členů. Obsazuje role vedoucího, zástupce a&nbsp;pokladníka. Vedoucím a zástupcem může být kdokoli, pokladníkem pouze 3 z&nbsp;nich.`,
      instruction: `Kolika způsoby lze funkce obsadit?`,
      steps: [
        {
          trigger: `> Krok 1: Začni pokladníkem`,
          content: `Role jsou různé — záleží na pořadí, variace. Začněte pokladníkem (jen 3 kandidáti). Po jeho obsazení pokladník nemůže zastávat jinou roli.`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `Kolik kandidátů zbývá na vedoucího a kolik na zástupce? Výsledky tří rolí vynásobte.`
        },
      ],
      choices: [
        {
          label: `\\(168\\)`,
          value: "A",
          feedback: `Chyba. \\(168 = 3 \\times 8 \\times 7\\) — pokladníka jste neodečetli z kandidátů na předsedu.`
        },
        {
          label: `\\(126\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(3 \\times 7 \\times 6 = 126\\).`
        },
        {
          label: `\\(336\\)`,
          value: "C",
          feedback: `Chyba. \\(336 = 8 \\times 7 \\times 6\\) — ignorujete podmínku na pokladníka (jen 3 kandidáti).`
        },
        {
          label: `\\(90\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(90 = 3 \\times 6 \\times 5\\) — od předsedy jste odečetli příliš mnoho.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },

    {
      id: "q_prav_19", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08I: Šifrovaný klíč`,
      visual_color: "#e84393", visual_symbol: `🔑`, points: 4,
      trainingTasks: ["t_prav_19"],
      question: `Šifrovaný klíč systému se řídí třemi pravidly:
– klíč obsahuje pouze číslice \\(2, 3, 4, 5, 6, 7, 8\\);
– žádná číslice se neopakuje;
– počet číslic klíče udává jeho první číslice.
Podmínkám vyhovují např. klíče \\(32\\), \\(437\\), \\(5324\\) a další.`,
      instruction: `Kolik kódů začíná číslicí \\(4\\)?`,
      choices: [
        {
          label: `\\(120\\)`,
          value: "A",
          feedback: `Přístup povolen. ✓`
        },
        {
          label: `\\(20\\)`,
          value: "B",
          feedback: `Chyba protokolu. \\(20 = C(6,3)\\) — kombinace místo variací. Kódy \\(4135\\) a \\(4153\\) jsou různé, záleží na pořadí.`
        },
        {
          label: `\\(210\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(210 = V(7,3)\\) — do výběru jste zahrnuli i číslici \\(4\\), která je ale fixně na prvním místě.`
        },
        {
          label: `\\(24\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(24 = 4!\\) — to by platilo, kdybychom měli jen \\(4\\) číslice na \\(3\\) pozice. K dispozici je \\(6\\) číslic.`
        },
      ],
      hints: [
        `Co říká třetí pravidlo o délce kódu, když první číslice je \\(4\\)?`,
        `Jsou kódy \\(4135\\) a \\(4153\\) stejné, nebo různé? Co to říká o tom, zda záleží na pořadí?`,
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_prav_19", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08I: Šifrovaný klíč — začíná 2`,
      isTraining: true, firewallId: "q_prav_19",
      visual_color: "#2ecc8a", visual_symbol: `🔑`, points: 0,
      question: `Šifrovaný klíč z číslic \\(\\{1, 2, 3, 4, 5\\}\\) bez opakování, délka = první číslice.`,
      instruction: `Kolik kódů začíná číslicí 2?`,
      steps: [
        {
          trigger: `> Krok 1: Délka kódu`,
          content: `První číslice je 2 → kód má 2 číslice (délka = první číslice). Zbývá obsadit jednu pozici ze zbývajících číslic.`
        },
        {
          trigger: `> Krok 2: Výběr`,
          content: `Číslici 2 jsme použili na první místo — nemůže se opakovat. Které číslice z \\(\\{1,2,3,4,5\\}\\) zbývají a kolik jich je?`
        },
      ],
      choices: [
        {
          label: `\\(10\\)`,
          value: "A",
          feedback: `Chyba. \\(10 = V(5,2)\\) — zahrnuli jste i kódy nezačínající 2.`
        },
        {
          label: `\\(8\\)`,
          value: "B",
          feedback: `Chyba. Zdvojení — výběr je ze 4 číslic, ne 8.`
        },
        {
          label: `\\(4\\)`,
          value: "C",
          feedback: `Přístup povolen. Kódy: 21, 23, 24, 25 → 4 kódy.`
        },
        {
          label: `\\(20\\)`,
          value: "D",
          feedback: `Kritická chyba. Kód začíná fixně 2, zbývá jen 1 pozice ze 4 zbývajících číslic.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },

    {
      id: "q_prav_20", regionId: "pravdepodobnost", type: "closed",
      monsterName: `FW_08J: Sedadla v divadle`,
      visual_color: "#e84393", visual_symbol: `🪑🪑🪑`, points: 4,
      trainingTasks: ["t_prav_20"],
      question: `V divadle je řada s \\(8\\) sedadly (č. \\(1\\) až \\(8\\)). Tři přátelé si koupili lístky s&nbsp;náhodně přidělenými sedadly z&nbsp;této řady (každý jiné sedadlo).`,
      instruction: `Jaká je pravděpodobnost, že všichni tři kamarádi budou sedět vedle sebe?`,
      choices: [
        {
          label: `\\(\\dfrac{1}{56}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. \\(1/56\\) odpovídá jedné konkrétní trojici sedadel (např. \\(\\{1,2,3\\}\\)). Skupin tří sousedních sedadel je ale více.`
        },
        {
          label: `\\(\\dfrac{1}{8}\\)`,
          value: "B",
          feedback: `Chyba protokolu. \\(1/8\\) — jmenovatelem není počet sedadel, ale počet všech možných trojic.`
        },
        {
          label: `\\(\\dfrac{1}{28}\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(1/28 = 2/56\\) — vyjmenujte si všechny sousední trojice, je jich víc než 2.`
        },
        {
          label: `\\(\\dfrac{3}{28}\\)`,
          value: "D",
          feedback: `Přístup povolen. ✓`
        },
      ],
      hints: [
        `Přidělování sedadel — na pořadí nezáleží (záleží jen na tom, která sedadla dostanou), jde o <strong>kombinace</strong>. Sousední trojice má tvar \\(\\{k, k+1, k+2\\}\\). Kolik takových trojic existuje v&nbsp;řadě 1 až 8?`,
        `Kolik existuje sousedních trojic tvaru \\(\\{k, k+1, k+2\\}\\) v řadě 1 až 8?`,
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_prav_20", regionId: "pravdepodobnost", type: "closed",
      monsterName: `SIM_08J: Sousední sedadla v divadle`,
      isTraining: true, firewallId: "q_prav_20",
      visual_color: "#2ecc8a", visual_symbol: `🪑🪑`, points: 0,
      question: `V divadle je řada s \\(5\\) sedadly (č. \\(1\\) až \\(5\\)). Dva přátelé si koupili lístky s náhodně přidělenými sedadly.`,
      instruction: `Jaká je pravděpodobnost, že budou sedět vedle sebe?`,
      steps: [
        {
          trigger: `> Krok 1: Celkový počet`,
          content: `Na pořadí sedadel nezáleží — kombinace. Celkový počet dvojic sedadel z 5: \\(C(5,2) = 10\\).`
        },
        {
          trigger: `> Krok 2: Sousední dvojice`,
          content: `Sousední dvojice mají tvar \\(\\{k, k+1\\}\\). Vyjmenujte je systematicky pro řadu 1 až 5 a sestavte pravděpodobnost.`
        },
      ],
      choices: [
        {
          label: `\\(\\dfrac{2}{5}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(4\\) sousední dvojice z \\(10\\) celkem → \\(2/5\\).`
        },
        {
          label: `\\(\\dfrac{1}{5}\\)`,
          value: "B",
          feedback: `Chyba. \\(1/5 = 2/10\\) — sousedních dvojic je 4, ne 2.`
        },
        {
          label: `\\(\\dfrac{1}{10}\\)`,
          value: "C",
          feedback: `Chyba. \\(1/10\\) odpovídá jedné konkrétní dvojici, ne všem sousedním.`
        },
        {
          label: `\\(\\dfrac{4}{25}\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(25 = 5^2\\) — jmenovatel není \\(C(5,2) = 10\\), ale součin \\(5 \\times 5\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    // ==========================================
    // STATISTIKA — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_stat_01", regionId: "statistika", type: "closed", monsterName: `FW_07A: Vážený průměr`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 3, trainingTasks: ["t_stat_01"],
      question: `Šachového turnaje se zúčastnilo 50 hráčů. Junioři (20 hráčů) a senioři (30 hráčů). Průměrný výsledek celého turnaje byl \\(3{,}6\\) bodu za partii. Senioři dosáhli průměrně \\(4\\) body za partii.`,
      instruction: `Kolik bodů dosáhli junioři průměrně?`,
      choices: [
        {
          label: `\\(2\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Tento výsledek vznikne dělením zbývající sumy počtem seniorů místo počtem juniorů.`
        },
        {
          label: `\\(3{,}6\\)`,
          value: "B",
          feedback: `Chyba. \\(3{,}6\\) je průměr celého turnaje — přečetli jste výsledek přímo ze zadání, ale junioři mají průměr nižší než celek.`
        },
        {
          label: `\\(3\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(20 \\cdot x_J + 120 = 180 \\Rightarrow x_J = 60/20 = 3\\). Ověření: \\((20 \\cdot 3 + 30 \\cdot 4)/50 = 3{,}6\\) ✓`
        },
        {
          label: `\\(3{,}8\\)`,
          value: "D",
          feedback: `Chyba. \\((3{,}6 + 4)/2 = 3{,}8\\) — prostý průměr dvou skupinových průměrů bez ohledu na jejich velikost.`
        },
      ],
      hints: [
        `Jaký je vztah mezi průměrem, počtem prvků a celkovou sumou?`,
        `Celková suma se skládá z příspěvku seniorů a příspěvku juniorů. Pozor — dělte počtem juniorů, ne celkovým počtem.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_stat_01", regionId: "statistika", type: "closed", monsterName: `SIM_07A: Vážený průměr — hledání skupiny`,
      isTraining: true, firewallId: "q_stat_01", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Ve třídě je 10 dívek a 15 chlapců. Průměrný výsledek celé třídy byl \\(3{,}4\\) bodu. Chlapci dosáhli průměrně \\(4\\) body.`,
      formula: `$$10 \\cdot \\bar{x}_D + 15 \\cdot 4 = 25 \\cdot 3{,}4$$`,
      instruction: `Kolik bodů dosáhly dívky průměrně?`,
      steps: [
        {
          trigger: `> Krok 1: Celková suma`,
          content: `Jakou celkovou sumu bodů získala celá třída? Využijte vztah: celková suma = průměr × počet.`
        },
        {
          trigger: `> Krok 2: Příspěvek chlapců`,
          content: `Kolik z celkové sumy připadá na chlapce? Zbytek patří dívkám.`
        },
        {
          trigger: `> Krok 3: Průměr dívek`,
          content: `Vydělte zbývající sumu počtem dívek (10) a vyberte výsledek z nabídky.`
        },
      ],
      choices: [
        {
          label: `\\(1\\)`,
          value: "A",
          feedback: `Chyba. Výsledek 1 vznikne, pokud vydělíte \\(25\\) celkovým počtem \\(25\\) místo počtem dívek \\(10\\).`
        },
        {
          label: `\\(2{,}5\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(25 / 10 = 2{,}5\\). Ověření: \\((10 \\cdot 2{,}5 + 15 \\cdot 4)/25 = 85/25 = 3{,}4\\) ✓`
        },
        {
          label: `\\(3{,}4\\)`,
          value: "C",
          feedback: `Chyba. \\(3{,}4\\) je průměr celé třídy — dívky mají průměr nižší, protože chlapci táhnou průměr nahoru.`
        },
        {
          label: `\\(3{,}7\\)`,
          value: "D",
          feedback: `Chyba. \\((3{,}4 + 4)/2 = 3{,}7\\) — prostý průměr skupinových průměrů bez vah.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_stat_02", regionId: "statistika", type: "closed", monsterName: `FW_07B: Dvě chybějící četnosti (medián)`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 4, trainingTasks: ["t_stat_02"],
      question: `V testu (body 1–5) dostalo 30 žáků výsledky zobrazené v tabulce. Medián počtu bodů je \\(2{,}5\\).`,
      formula: `$$\\begin{array}{c|c|c|c|c|c} x_i & 1 & 2 & 3 & 4 & 5 \\\\ \\hline n_i & 3 & {?} & {?} & 6 & 1 \\end{array}$$`,
      instruction: `Kolik žáků dostalo 2 body?`,
      choices: [
        {
          label: `\\(12\\)`,
          value: "A",
          feedback: `Přístup povolen. Ze součtu: \\(n_2+n_3=20\\). Medián=2,5 → 15. hodnota=2, 16. hodnota=3. Kumulativní ≤2 musí být ≥15 a <16: \\(3+n_2=15\\), tedy \\(n_2=12\\), \\(n_3=8\\).`
        },
        {
          label: `\\(8\\)`,
          value: "B",
          feedback: `Chyba. Číslo 8 je četnost skupiny 3 bodů — záměna obou neznámých.`
        },
        {
          label: `\\(10\\)`,
          value: "C",
          feedback: `Chyba. Hodnota 10 vznikne rozdělením \\(n_2+n_3=20\\) na půl bez použití mediánové podmínky. Medián ale přesně určuje polohu hranice.`
        },
        {
          label: `\\(20\\)`,
          value: "D",
          feedback: `Chyba. Číslo 20 je celkový počet chybějících žáků \\((n_2+n_3)\\), nikoliv hodnota \\(n_2\\) samotné.`
        },
      ],
            hints: [
        `Dvě neznámé → dvě rovnice. Jedna plyne ze součtu četností, druhá z podmínky na medián.`,
        `Medián \\(2{,}5\\) znamená, že dvě prostřední hodnoty leží v různých skupinách. Kde musí ležet hranice kumulativních četností — tedy součtů, kolik hodnot leží ve skupinách až dosud?`,
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_stat_02", regionId: "statistika", type: "closed", monsterName: `SIM_07B: Medián z frekvenční tabulky`,
      isTraining: true, firewallId: "q_stat_02", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Ve třídě 20 žáků (body 1–4):`,
      formula: `$$\\begin{array}{c|c|c|c|c} x_i & 1 & 2 & 3 & 4 \\\\ \\hline n_i & 3 & 5 & 8 & 4 \\end{array}$$`,
      instruction: `Určete medián.`,
      steps: [
        {
          trigger: `> Krok 1: Kumulativní četnosti`,
          content: `Kumulativní četnost skupiny říká, kolik hodnot souboru leží v dané skupině a ve všech nižších dohromady. Sestavte ji: začněte od nejnižší skupiny a postupně přičítejte četnosti.`
        },
        {
          trigger: `> Krok 2: Poloha mediánu`,
          content: `Pro \\(n=20\\) hledáte průměr 10. a 11. hodnoty. V které skupině leží tyto pozice? Porovnejte s kumulativními četnostmi — průběžnými součty hodnot od nejnižší skupiny.`
        },
        {
          trigger: `> Krok 3: Výsledek`,
          content: `Obě prostřední hodnoty patří stejné skupině. Vypočítejte jejich průměr a vyberte výsledek z nabídky.`
        },
      ],
      choices: [
        {
          label: `\\(2\\)`,
          value: "A",
          feedback: `Chyba. Průběžný součet četností do skupiny 2 je jen 8 — 10. hodnota leží až výše.`
        },
        {
          label: `\\(2,5\\)`,
          value: "B",
          feedback: `Chyba. \\((2+3)/2=2{,}5\\) by platilo, kdyby 10. hodnota byla 2 — ale průběžný součet do skupiny 2 je 8, takže 10. hodnota tam neleží.`
        },
        {
          label: `\\(3\\)`,
          value: "C",
          feedback: `Přístup povolen. 10. i 11. hodnota leží ve skupině 3. Medián = 3.`
        },
        {
          label: `\\(8\\)`,
          value: "D",
          feedback: `Kritická chyba. 8 je četnost skupiny 3 — záměna četnosti s hodnotou.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_stat_03", regionId: "statistika", type: "closed", monsterName: `FW_07C: Průměr z histogramu`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 4, trainingTasks: ["t_stat_03"],
      question: `Histogram zobrazuje počty kroků za den (v tisících) pro 20 žáků třídy. Odečtěte data z grafu a vypočítejte průměrný počet kroků (v tisících).`,
      diagram: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="45" y1="139.6" x2="300" y2="139.6" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="109.2" x2="300" y2="109.2" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="78.8" x2="300" y2="78.8" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="48.4" x2="300" y2="48.4" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="18.0" x2="300" y2="18.0" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <rect x="54.6" y="94.0" width="44.6" height="76.0" fill="#0077bb" opacity="0.85" rx="2"/> <text x="76.9" y="90.0" text-anchor="middle" font-size="10" fill="#e2e8f0">5</text> <rect x="118.3" y="48.4" width="44.6" height="121.6" fill="#0077bb" opacity="0.85" rx="2"/> <text x="140.6" y="44.4" text-anchor="middle" font-size="10" fill="#e2e8f0">8</text> <rect x="182.1" y="78.8" width="44.6" height="91.2" fill="#0077bb" opacity="0.85" rx="2"/> <text x="204.4" y="74.8" text-anchor="middle" font-size="10" fill="#e2e8f0">6</text> <rect x="245.8" y="154.8" width="44.6" height="15.2" fill="#0077bb" opacity="0.85" rx="2"/> <text x="268.1" y="150.8" text-anchor="middle" font-size="10" fill="#e2e8f0">1</text> <line x1="45" y1="170" x2="300" y2="170" stroke="#e2e8f0" stroke-width="1.2"/> <line x1="45" y1="18" x2="45" y2="170" stroke="#e2e8f0" stroke-width="1.2"/> <text x="76.9" y="184" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text> <text x="140.6" y="184" text-anchor="middle" font-size="11" fill="#e2e8f0">6</text> <text x="204.4" y="184" text-anchor="middle" font-size="11" fill="#e2e8f0">8</text> <text x="268.1" y="184" text-anchor="middle" font-size="11" fill="#e2e8f0">10</text> <text x="40" y="174.0" text-anchor="end" font-size="10" fill="#e2e8f0">0</text> <line x1="42" y1="170.0" x2="45" y2="170.0" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="143.6" text-anchor="end" font-size="10" fill="#e2e8f0">2</text> <line x1="42" y1="139.6" x2="45" y2="139.6" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="113.2" text-anchor="end" font-size="10" fill="#e2e8f0">4</text> <line x1="42" y1="109.2" x2="45" y2="109.2" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="82.8" text-anchor="end" font-size="10" fill="#e2e8f0">6</text> <line x1="42" y1="78.8" x2="45" y2="78.8" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="52.4" text-anchor="end" font-size="10" fill="#e2e8f0">8</text> <line x1="42" y1="48.4" x2="45" y2="48.4" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="22.0" text-anchor="end" font-size="10" fill="#e2e8f0">10</text> <line x1="42" y1="18.0" x2="45" y2="18.0" stroke="#e2e8f0" stroke-width="1"/> <text x="172.5" y="214" text-anchor="middle" font-size="10" fill="#94a3b8">Počet kroků za den (v tisících)</text> <text x="10" y="94.0" text-anchor="middle" font-size="10" fill="#94a3b8" transform="rotate(-90 10 94.0)">Četnost</text> </svg>`,
      instruction: `Vyberte správný průměr.`,
      choices: [
        {
          label: `\\(6,0\\)`,
          value: "A",
          feedback: `Chyba. Toto je modus (nejčastější kategorie: 6 tis. kroků, 8 žáků). Průměr zohledňuje všechny skupiny.`
        },
        {
          label: `\\(7,0\\)`,
          value: "B",
          feedback: `Chyba syntaxe. \\((4+6+8+10)/4=7\\) — průměr hodnot bez vah. Každou hodnotu musíš vynásobit četností.`
        },
        {
          label: `\\(6,5\\)`,
          value: "C",
          feedback: `Chyba. Tato hodnota vznikne záměnou četností pro 6 a 8 tisíc kroků. Zkontroluj odečtení z grafu.`
        },
        {
          label: `\\(6,3\\)`,
          value: "D",
          feedback: `Přístup povolen. \\((5\\cdot4+8\\cdot6+6\\cdot8+1\\cdot10)/20=126/20=6{,}3\\).`
        },
      ],
            hints: [
        `Z histogramu odečtěte četnosti pro každou kategorii. Zkontrolujte, že jejich součet dává 20.`,
        `Vážený průměr = součet součinů (hodnota × četnost), děleno celkovým počtem.`,
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_stat_03", regionId: "statistika", type: "closed", monsterName: `SIM_07C: Průměr z tabulky četností`,
      isTraining: true, firewallId: "q_stat_03", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Výsledky soutěže — 10 žáků (body 2, 4, 6, 8):`,
      formula: `$$\\begin{array}{c|c|c|c|c} x_i & 2 & 4 & 6 & 8 \\\\ \\hline n_i & 1 & 2 & 4 & 3 \\end{array}$$`,
      instruction: `Určete průměr.`,
      steps: [
        {
          trigger: `> Krok 1: Součiny`,
          content: `Vynásobte každou hodnotu \\(x_i\\) příslušnou četností \\(n_i\\).`
        },
        {
          trigger: `> Krok 2: Součet`,
          content: `Sečtěte všechny součiny z předchozího kroku.`
        },
        {
          trigger: `> Krok 3: Průměr`,
          content: `Celkovou sumu vydělte počtem žáků a vyberte výsledek z nabídky.`
        },
      ],
      choices: [
        {
          label: `\\(5,8\\)`,
          value: "A",
          feedback: `Přístup povolen. \\((1\\cdot2+2\\cdot4+4\\cdot6+3\\cdot8)/10=58/10=5{,}8\\).`
        },
        {
          label: `\\(6\\)`,
          value: "B",
          feedback: `Chyba. 6 je modus (4 žáci dostali 6 bodů).`
        },
        {
          label: `\\(5\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\((2+4+6+8)/4=5\\) — průměr bez vah.`
        },
        {
          label: `\\(4,2\\)`,
          value: "D",
          feedback: `Chyba. Záměna vah a hodnot v součtu.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_stat_04", regionId: "statistika", type: "closed", monsterName: `FW_07D: Medián z tabulky četností`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 3, trainingTasks: ["t_stat_04"],
      question: `Ve čtvrtletním testu (body 1–5) dostalo 40 žáků výsledky zobrazené v tabulce.`,
      formula: `$$\\begin{array}{c|c|c|c|c|c} x_i & 1 & 2 & 3 & 4 & 5 \\\\ \\hline n_i & 8 & 12 & 10 & 7 & 3 \\end{array}$$`,
      instruction: `Určete medián počtu dosažených bodů.`,
      choices: [
        {
          label: `\\(2\\)`,
          value: "A",
          feedback: `Chyba. Hodnota 2 je pouze 20. hodnota seřazeného souboru. Medián je průměr 20. a 21. — a 21. hodnota leží ve skupině 3.`
        },
        {
          label: `\\(2,5\\)`,
          value: "B",
          feedback: `Přístup povolen. Kumulativní: 8, 20, 30, 37, 40. Kumulativní ≤2 = 20 → 20. hodnota je poslední ve skupině 2. Kumulativní ≤2 < 21 → 21. hodnota je první ve skupině 3. Medián = \\((2+3)/2=2{,}5\\).`
        },
        {
          label: `\\(3\\)`,
          value: "C",
          feedback: `Chyba. Tato odpověď by platila, kdyby obě prostřední hodnoty ležely ve skupině 3. Kumulativní ≤2 = 20, takže 20. hodnota je ještě ve skupině 2, nikoliv 3.`
        },
        {
          label: `\\(3,5\\)`,
          value: "D",
          feedback: `Chyba. Hodnota 3,5 = (3+4)/2 — průměr skupin 3 a 4. Prostřední hodnoty ale leží ve skupinách 2 a 3.`
        },
      ],
            hints: [
        `Pro \\(n=40\\) je medián průměr 20. a 21. hodnoty seřazeného souboru.`,
        `Sestavte kumulativní četnosti — průběžné součty, kolik hodnot leží v dané skupině a nižších celkem — a najděte, ve kterých skupinách leží 20. a 21. hodnota.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_stat_04", regionId: "statistika", type: "closed", monsterName: `SIM_07D: Medián z malé tabulky`,
      isTraining: true, firewallId: "q_stat_04", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Výsledky 4 žáků (body 2–4):`,
      formula: `$$\\begin{array}{c|c|c|c} x_i & 2 & 3 & 4 \\\\ \\hline n_i & 1 & 2 & 1 \\end{array}$$`,
      instruction: `Určete medián.`,
      steps: [
        {
          trigger: `> Krok 1: Seřazené hodnoty`,
          content: `Rozepište tabulku do seznamu jednotlivých hodnot — každou zapište tolikrát, kolik udává její četnost.`
        },
        {
          trigger: `> Krok 2: Prostřední hodnoty`,
          content: `Pro sudé \\(n\\) je medián průměrem dvou prostředních hodnot. Která je 2. a která 3. hodnota seřazeného souboru?`
        },
        {
          trigger: `> Krok 3: Medián`,
          content: `Vypočítejte průměr 2. a 3. hodnoty ze seřazeného souboru a vyberte správný výsledek.`
        },
      ],
      choices: [
        {
          label: `\\(2\\)`,
          value: "A",
          feedback: `Chyba. 2 je minimum, ne medián.`
        },
        {
          label: `\\(2,5\\)`,
          value: "B",
          feedback: `Chyba. \\((2+3)/2=2{,}5\\) by platilo pro 1. a 2. hodnotu — hledáme 2. a 3.`
        },
        {
          label: `\\(4\\)`,
          value: "C",
          feedback: `Chyba. 4 je maximum.`
        },
        {
          label: `\\(3\\)`,
          value: "D",
          feedback: `Přístup povolen. Seřazeno: 2,3,3,4. Prostřední (2. a 3.) jsou obě 3. Medián=3.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_stat_05", regionId: "statistika", type: "closed", monsterName: `FW_07E: Chybějící četnost (průměr)`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 4, trainingTasks: ["t_stat_05"],
      question: `Ve třídě 25 žáků získalo v testu (body 1–5) výsledky zobrazené v tabulce. Aritmetický průměr bodů je \\(3{,}2\\).`,
      formula: `$$\\begin{array}{c|c|c|c|c|c} x_i & 1 & 2 & 3 & 4 & 5 \\\\ \\hline n_i & 2 & 5 & {?} & 8 & 3 \\end{array}$$`,
      instruction: `Kolik žáků dostalo 3 body?`,
      choices: [
        {
          label: `\\(5\\)`,
          value: "A",
          feedback: `Chyba. Tento výsledek vznikne zaokrouhlením průměru na 3 místo přesné hodnoty \\(3{,}2\\). Zaokrouhlení mění cílovou sumu.`
        },
        {
          label: `\\(8\\)`,
          value: "B",
          feedback: `Chyba. Číslo 8 je četnost pro 4 body — záměna sousedních hodnot v tabulce.`
        },
        {
          label: `\\(7\\)`,
          value: "C",
          feedback: `Přístup povolen. Suma=80, součet ostatních: \\(2+10+32+15=59\\). Chybějící: \\((80-59)/3=7\\). Kontrola: \\(25-2-5-8-3=7\\) ✓.`
        },
        {
          label: `\\(10\\)`,
          value: "D",
          feedback: `Chyba. Tato hodnota vznikne, pokud zapomeneš odečíst četnost pro 5 bodů: \\(25-(2+5+8)=10\\).`
        },
      ],
            hints: [
        `Z průměru a celkového počtu žáků lze určit celkovou sumu bodů.`,
        `Sečtěte příspěvky ostatních skupin. Chybějící skupině 3 připadne zbytek — vyřešte rovnici pro \\(n_3\\).`,
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_stat_05", regionId: "statistika", type: "closed", monsterName: `SIM_07E: Průměr z tabulky (jednoduché)`,
      isTraining: true, firewallId: "q_stat_05", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Výsledky 10 žáků (body 1–3):`,
      formula: `$$\\begin{array}{c|c|c|c} x_i & 1 & 2 & 3 \\\\ \\hline n_i & 4 & 3 & 3 \\end{array}$$`,
      instruction: `Určete průměr.`,
      steps: [
        {
          trigger: `> Krok 1: Součiny`,
          content: `Vynásobte každou hodnotu \\(x_i\\) příslušnou četností \\(n_i\\).`
        },
        {
          trigger: `> Krok 2: Suma`,
          content: `Sečtěte všechny součiny z předchozího kroku.`
        },
        {
          trigger: `> Krok 3: Průměr`,
          content: `Celkovou sumu vydělte počtem žáků a vyberte výsledek z nabídky.`
        },
      ],
      choices: [
        {
          label: `\\(2,0\\)`,
          value: "A",
          feedback: `Chyba. \\((1+2+3)/3=2\\) — průměr hodnot bez vah.`
        },
        {
          label: `\\(1,9\\)`,
          value: "B",
          feedback: `Přístup povolen. \\((4\\cdot1+3\\cdot2+3\\cdot3)/10=19/10=1{,}9\\).`
        },
        {
          label: `\\(3\\)`,
          value: "C",
          feedback: `Chyba. 3 jsou četnosti různých skupin — záměna s hodnotami.`
        },
        {
          label: `\\(1,5\\)`,
          value: "D",
          feedback: `Chyba. Zaokrouhlení nebo špatný výpočet součtu.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_stat_06", regionId: "statistika", type: "closed", monsterName: `FW_07F: Průměr s neznámou → medián`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 5, trainingTasks: ["t_stat_06"],
      question: `Aritmetický průměr šesti čísel \\(3;\\mspace{6mu} 5;\\mspace{6mu} 2x + 1;\\mspace{6mu} 4x - 3;\\mspace{6mu} 7;\\mspace{6mu} 11\\) je \\(7\\).`,
      instruction: `Jaký je medián těchto šesti čísel?`,
      choices: [
        {
          label: `\\(7\\)`,
          value: "A",
          feedback: `Přístup povolen. Z průměru: \\(24+6x=42\\), \\(x=3\\). Hodnoty: 3,5,7,9,7,11. Seřazené: 3,5,7,7,9,11. Medián=\\((7+7)/2=7\\).`
        },
        {
          label: `\\(6\\)`,
          value: "B",
          feedback: `Chyba. Hodnota 6 = (5+7)/2 — průměr 2. a 3. hodnoty ze seřazeného souboru. Pro n=6 hledáme průměr 3. a 4. hodnoty.`
        },
        {
          label: `\\(8\\)`,
          value: "C",
          feedback: `Chyba. Hodnota 8 = (7+9)/2 — průměr 4. a 5. hodnoty. Prostřední pro n=6 jsou 3. a 4. hodnota.`
        },
        {
          label: `\\(9\\)`,
          value: "D",
          feedback: `Chyba. Číslo 9 = \\(4x-3\\) pro \\(x=3\\), ale seřazené hodnoty jsou 3,5,7,7,9,11 — medián není 4. prvek nezařazeného souboru.`
        },
      ],
            hints: [
        `Nejdříve najděte \\(x\\): z průměru a počtu prvků určete celkový součet. Sestavte rovnici a vyřešte.`,
        `Po nalezení \\(x\\) doplňte všechna čísla a seřaďte je. Medián pro \\(n=6\\) je průměr 3. a 4. hodnoty seřazeného souboru.`,
      ],
      correctAnswer: "A", reward: { xp: 25 }
    },
    {
      id: "t_stat_06", regionId: "statistika", type: "closed", monsterName: `SIM_07F: Nalezení neznámé z průměru`,
      isTraining: true, firewallId: "q_stat_06", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Aritmetický průměr čísel \\(2;\\mspace{6mu} x + 1;\\mspace{6mu} 8;\\mspace{6mu} 3x - 1\\) je \\(6\\).`,
      formula: `$$\\frac{2 + (x + 1) + 8 + (3x - 1)}{4} = 6$$`,
      instruction: `Jaká je hodnota \\(x\\)?`,
      steps: [
        {
          trigger: `> Krok 1: Součet = průměr × počet`,
          content: `\\(2+(x+1)+8+(3x-1)=6\\cdot4=24\\).`
        },
        {
          trigger: `> Krok 2: Zjednodušení`,
          content: `Sečtěte známé členy na levé straně a vyřešte lineární rovnici pro \\(x\\).`
        },
        {
          trigger: `> Krok 3: Ověření`,
          content: `Dosaďte nalezené \\(x\\) do obou výrazů a ověřte, zda součet čísel dává \\(24\\). Pak vyberte hodnotu \\(x\\) z nabídky.`
        },
      ],
      choices: [
        {
          label: `\\(3\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(x=3\\): součet = \\(10+12=22\\neq24\\).`
        },
        {
          label: `\\(4\\)`,
          value: "B",
          feedback: `Chyba. Pro \\(x=4\\): součet = \\(10+16=26\\neq24\\).`
        },
        {
          label: `\\(3,5\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(4x=14\\), \\(x=3{,}5\\). Součet \\(24\\), průměr \\(24/4=6\\) ✓.`
        },
        {
          label: `\\(2,5\\)`,
          value: "D",
          feedback: `Chyba. Pro \\(x=2{,}5\\): součet = \\(10+10=20\\neq24\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_stat_07", regionId: "statistika", type: "closed", monsterName: `FW_07G: Histogram + chybějící sloupec`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 4, trainingTasks: ["t_stat_07"],
      question: `Graf zobrazuje počty medailí, které získalo 30 žáků na sportovní soutěži. Sloupec pro 0 medailí chybí. Modus počtu medailí je 0.`,
      diagram: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="45" y1="140.5" x2="300" y2="140.5" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="116.0" x2="300" y2="116.0" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="91.5" x2="300" y2="91.5" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="67.0" x2="300" y2="67.0" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="42.5" x2="300" y2="42.5" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <line x1="45" y1="18.0" x2="300" y2="18.0" stroke="#64748b" stroke-width="0.5" opacity="0.4"/> <rect x="54.6" y="42.5" width="44.6" height="122.5" fill="none" stroke="#e67e22" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7" rx="2"/> <text x="76.9" y="103.8" text-anchor="middle" font-size="18" fill="#e67e22" font-weight="bold">?</text> <rect x="118.3" y="99.7" width="44.6" height="65.3" fill="#0077bb" opacity="0.85" rx="2"/> <text x="140.6" y="95.7" text-anchor="middle" font-size="10" fill="#e2e8f0">8</text> <rect x="182.1" y="124.2" width="44.6" height="40.8" fill="#0077bb" opacity="0.85" rx="2"/> <text x="204.4" y="120.2" text-anchor="middle" font-size="10" fill="#e2e8f0">5</text> <rect x="245.8" y="148.7" width="44.6" height="16.3" fill="#0077bb" opacity="0.85" rx="2"/> <text x="268.1" y="144.7" text-anchor="middle" font-size="10" fill="#e2e8f0">2</text> <line x1="45" y1="165" x2="300" y2="165" stroke="#e2e8f0" stroke-width="1.2"/> <line x1="45" y1="18" x2="45" y2="165" stroke="#e2e8f0" stroke-width="1.2"/> <text x="76.9" y="179" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text> <text x="140.6" y="179" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text> <text x="204.4" y="179" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text> <text x="268.1" y="179" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text> <text x="40" y="169.0" text-anchor="end" font-size="10" fill="#e2e8f0">0</text> <line x1="42" y1="165.0" x2="45" y2="165.0" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="144.5" text-anchor="end" font-size="10" fill="#e2e8f0">3</text> <line x1="42" y1="140.5" x2="45" y2="140.5" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="120.0" text-anchor="end" font-size="10" fill="#e2e8f0">6</text> <line x1="42" y1="116.0" x2="45" y2="116.0" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="95.5" text-anchor="end" font-size="10" fill="#e2e8f0">9</text> <line x1="42" y1="91.5" x2="45" y2="91.5" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="71.0" text-anchor="end" font-size="10" fill="#e2e8f0">12</text> <line x1="42" y1="67.0" x2="45" y2="67.0" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="46.5" text-anchor="end" font-size="10" fill="#e2e8f0">15</text> <line x1="42" y1="42.5" x2="45" y2="42.5" stroke="#e2e8f0" stroke-width="1"/> <text x="40" y="22.0" text-anchor="end" font-size="10" fill="#e2e8f0">18</text> <line x1="42" y1="18.0" x2="45" y2="18.0" stroke="#e2e8f0" stroke-width="1"/> <text x="172.5" y="212" text-anchor="middle" font-size="10" fill="#94a3b8">Počet medailí</text> <text x="10" y="91.5" text-anchor="middle" font-size="10" fill="#94a3b8" transform="rotate(-90 10 91.5)">Četnost</text> <text x="172.5" y="14" text-anchor="middle" font-size="9" fill="#e67e22">Sloupec pro 0 medailí chybí · celkem 30 žáků</text> </svg>`,
      instruction: `Určete medián počtu medailí.`,
      choices: [
        {
          label: `\\(0\\)`,
          value: "A",
          feedback: `Chyba. Číslo 0 je modus — nejčastější hodnota. Medián se hledá jinak: seřaď všechny hodnoty a najdi prostřední.`
        },
        {
          label: `\\(1\\)`,
          value: "B",
          feedback: `Chyba. Hodnota 1 je 16. hodnota ze seřazeného souboru. Medián pro n=30 je průměr 15. a 16. hodnoty.`
        },
        {
          label: `\\(8\\)`,
          value: "C",
          feedback: `Kritická chyba. Číslo 8 je četnost pro 1 medaili — záměna četnosti s hodnotou.`
        },
        {
          label: `\\(0,5\\)`,
          value: "D",
          feedback: `Přístup povolen. Chybějící \\(n_0=15\\). Seřazeno: 15× nula, 8× jedničky... 15. hodnota=0, 16. hodnota=1. Medián=\\((0+1)/2=0{,}5\\).`
        },
      ],
            hints: [
        `Doplňte chybějící sloupec ze součtu všech četností. Podmínka modu kontroluje, zda je výsledek konzistentní.`,
        `Po doplnění sestavte kumulativní četnosti — průběžné součty od nejnižší skupiny — a hledejte 15. a 16. hodnotu.`,
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_stat_07", regionId: "statistika", type: "closed", monsterName: `SIM_07G: Medián s modem (úplná tabulka)`,
      isTraining: true, firewallId: "q_stat_07", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Výsledky 20 žáků (počet medailí 0–3):`,
      formula: `$$\\begin{array}{c|c|c|c|c} x_i & 0 & 1 & 2 & 3 \\\\ \\hline n_i & 10 & 6 & 3 & 1 \\end{array}$$`,
      instruction: `Určete medián počtu medailí.`,
      steps: [
        {
          trigger: `> Krok 1: Kumulativní`,
          content: `Kumulativní četnost skupiny říká, kolik hodnot souboru leží v dané skupině a ve všech nižších dohromady. Sestavte ji: začněte od nejnižší skupiny a postupně přičítejte četnosti.`
        },
        {
          trigger: `> Krok 2: Prostřední hodnoty`,
          content: `Pro \\(n=20\\) hledáte průměr 10. a 11. hodnoty. V které skupině leží tyto pozice? Porovnejte s kumulativními četnostmi — průběžnými součty hodnot od nejnižší skupiny.`
        },
        {
          trigger: `> Krok 3: Medián`,
          content: `Vypočítejte průměr 10. a 11. hodnoty seřazeného souboru a vyberte výsledek z nabídky.`
        },
      ],
      choices: [
        {
          label: `\\(0,5\\)`,
          value: "A",
          feedback: `Přístup povolen. 10. hodnota=0, 11. hodnota=1. Medián=\\((0+1)/2=0{,}5\\).`
        },
        {
          label: `\\(0\\)`,
          value: "B",
          feedback: `Chyba. 0 je modus (nejčastější), ne medián.`
        },
        {
          label: `\\(1\\)`,
          value: "C",
          feedback: `Chyba. Hodnota 1 je pouze 11. hodnota — medián je průměr 10. a 11.`
        },
        {
          label: `\\(10\\)`,
          value: "D",
          feedback: `Kritická chyba. 10 je četnost skupiny 0 — záměna četnosti s hodnotou.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_stat_09", regionId: "statistika", type: "closed", monsterName: `FW_07I: Průměrný plat skupiny`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 4, trainingTasks: ["t_stat_09"],
      question: `V firmě pracuje 10 zaměstnanců rozdělených do dvou skupin. Skupina A má 4 zaměstnance s průměrným platem 20 000 Kč. Průměrný plat celé firmy je 26 000 Kč. Skupina B má 6 zaměstnanců.`,
      instruction: `Jaký je průměrný plat zaměstnance skupiny B?`,
      choices: [
        {
          label: `\\(22\\, 500\\) Kč`,
          value: "A",
          feedback: `Chyba. Zkontrolujte jmenovatel — dělíte celkovým počtem zaměstnanců místo počtem zaměstnanců skupiny B.`
        },
        {
          label: `\\(32\\, 000\\) Kč`,
          value: "B",
          feedback: `Chyba. Hodnota 32 000 Kč = \\(2\\cdot26\\,000-20\\,000\\) — symetrická chyba kolem průměru firmy. Skupiny nejsou stejně velké.`
        },
        {
          label: `\\(30\\, 000\\) Kč`,
          value: "C",
          feedback: `Přístup povolen. \\(26\\,000\\cdot10=260\\,000\\). Skupina A: \\(4\\cdot20\\,000=80\\,000\\). Skupina B: \\((260\\,000-80\\,000)/6=30\\,000\\) Kč.`
        },
        {
          label: `\\(26\\, 000\\) Kč`,
          value: "D",
          feedback: `Chyba. Toto je průměr celé firmy — skupina B má průměr vyšší, aby kompenzovala nižší průměr skupiny A.`
        },
      ],
            hints: [
        `Z průměrného platu a celkového počtu zaměstnanců lze určit celkový mzdový fond firmy.`,
        `Celkový fond = fond skupiny A + fond skupiny B. Kolik z celku připadá na skupinu B?`,
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_stat_09", regionId: "statistika", type: "closed", monsterName: `SIM_07I: Celkový průměr ze dvou skupin`,
      isTraining: true, firewallId: "q_stat_09", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Oddělení A má 5 zaměstnanců s průměrným platem 24 000 Kč. Oddělení B má 3 zaměstnance s průměrným platem 32 000 Kč.`,
      formula: `$$\\bar{x} = \\frac{5 \\cdot 24\\, 000 + 3 \\cdot 32\\, 000}{5 + 3}$$`,
      instruction: `Jaký je průměrný plat celé firmy?`,
      steps: [
        {
          trigger: `> Krok 1: Celkový fond mezd`,
          content: `Spočítejte celkový mzdový fond obou oddělení dohromady (počet zaměstnanců × průměrný plat v každém).`
        },
        {
          trigger: `> Krok 2: Průměr`,
          content: `Celkový fond vydělte celkovým počtem zaměstnanců a vyberte výsledek z nabídky.`
        },
      ],
      choices: [
        {
          label: `\\(28\\, 000\\) Kč`,
          value: "A",
          feedback: `Chyba. \\((24\\,000+32\\,000)/2=28\\,000\\) — průměr bez vah (skupiny nejsou stejně velké).`
        },
        {
          label: `\\(27\\, 000\\) Kč`,
          value: "B",
          feedback: `Přístup povolen. \\((5\\cdot24\\,000+3\\cdot32\\,000)/8=216\\,000/8=27\\,000\\) Kč.`
        },
        {
          label: `\\(32\\, 000\\) Kč`,
          value: "C",
          feedback: `Chyba. Toto je průměr oddělení B.`
        },
        {
          label: `\\(24\\, 000\\) Kč`,
          value: "D",
          feedback: `Chyba. Toto je průměr oddělení A.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_stat_10", regionId: "statistika", type: "closed", monsterName: `FW_07J: Dvě chybějící četnosti`,
      visual_color: "#e67e22", visual_symbol: `x̄`, points: 5, trainingTasks: ["t_stat_10"],
      question: `V tabulce výsledků třídy (20 žáků, body 1–5) chybí dvě hodnoty. Aritmetický průměr bodů je \\(2{,}8\\).`,
      formula: `$$\\begin{array}{c|c|c|c|c|c} x_i & 1 & 2 & 3 & 4 & 5 \\\\ \\hline n_i & 2 & {?} & 6 & 3 & {?} \\end{array}$$`,
      instruction: `Kolik žáků dostalo 2 body?`,
      choices: [
        {
          label: `\\(7\\)`,
          value: "A",
          feedback: `Přístup povolen. Soustava: \\(a+b=9\\) a \\(2a+5b=24\\). Řešení: \\(a=7\\), \\(b=2\\). Ověření: průměr = \\((2+14+18+12+10)/20=56/20=2{,}8\\) ✓.`
        },
        {
          label: `\\(2\\)`,
          value: "B",
          feedback: `Chyba. Číslo 2 je počet žáků s 5 body (\\(b=2\\)) — záměna obou neznámých.`
        },
        {
          label: `\\(9\\)`,
          value: "C",
          feedback: `Chyba. Číslo 9 je celkový počet žáků s chybějícím ohodnocením (\\(a+b=9\\)) — to není hodnota \\(a\\) samotného.`
        },
        {
          label: `\\(5\\)`,
          value: "D",
          feedback: `Chyba. Tato hodnota vznikne nesprávným řešením soustavy — nejčastěji záměnou koeficientů v rovnici.`
        },
      ],
            hints: [
        `Označte chybějící četnosti \\(a\\) (pro 2 body) a \\(b\\) (pro 5 bodů). Zapište dvě rovnice: ze součtu četností a z podmínky průměru.`,
        `Ze součtu četností vyjádřete jednu neznámou pomocí druhé a dosaďte do rovnice z průměru.`,
      ],
      correctAnswer: "A", reward: { xp: 25 }
    },
    {
      id: "t_stat_10", regionId: "statistika", type: "closed", monsterName: `SIM_07J: Chybějící četnost z průměru`,
      isTraining: true, firewallId: "q_stat_10", visual_color: "#2ecc8a", visual_symbol: `x̄`, points: 0,
      question: `Ve třídě 20 žáků (body 1–4), průměr = 2:`,
      formula: `$$1 \\cdot n_1 + 2 \\cdot 6 + 3 \\cdot 4 + 4 \\cdot 2 = 2 \\cdot 20$$`,
      instruction: `Kolik žáků dostalo 1 bod?`,
      steps: [
        {
          trigger: `> Krok 1: Cílová suma`,
          content: `Z průměru a počtu žáků určete celkovou sumu bodů.`
        },
        {
          trigger: `> Krok 2: Součet z tabulky`,
          content: `Sečtěte příspěvky skupin, kde znáte četnosti. Kolik z celkové sumy zbývá na chybějící skupinu?`
        },
        {
          trigger: `> Krok 3: Nalezení četnosti`,
          content: `Zbývající příspěvek vydělte hodnotou \\(x_i\\) dané skupiny. Ověřte, zda součet všech četností dává \\(n\\).`
        },
      ],
      choices: [
        {
          label: `\\(4\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(n_1=4\\): příspěvek = 4, celková suma = \\(4+32=36 \\neq 40\\).`
        },
        {
          label: `\\(6\\)`,
          value: "B",
          feedback: `Chyba. Pro \\(n_1=6\\): příspěvek = 6, celková suma = \\(6+32=38 \\neq 40\\).`
        },
        {
          label: `\\(8\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(1 \\cdot 8 = 8\\), celková suma = \\(8+32=40\\), průměr = \\(40/20=2\\) ✓. Součet žáků: \\(8+6+4+2=20\\) ✓.`
        },
        {
          label: `\\(10\\)`,
          value: "D",
          feedback: `Chyba. Pro \\(n_1=10\\): příspěvek = 10, celková suma = \\(10+32=42 \\neq 40\\). Navíc \\(10+6+4+2=22 \\neq 20\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },

    // ==========================================
    // ALGEBRA — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_alg_01", regionId: "algebra", type: "closed", monsterName: `FW_01A: Zkrácení algebraického zlomku`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 3, trainingTasks: ["t_alg_01"],
      question: `Je dán algebraický výraz. Zjednodušte (pro příslušný definiční obor):`,
      formula: `$$\\frac{x^{2} - x - 12}{x^{2} - 16}$$`,
      instruction: `Vyberte správný zjednodušený tvar.`,
      choices: [
        {
          label: `\\(\\frac{x - 3}{x + 4}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Čitatel \\(x^2 - x - 12 = (x-4)(x+3)\\), ne \\((x-4)(x-3)\\). Zkontroluj znaménka při rozkladu.`
        },
        {
          label: `\\(\\frac{x + 3}{x + 4}\\)`,
          value: "B",
          feedback: `Přístup povolen. Čitatel \\((x-4)(x+3)\\), jmenovatel \\((x-4)(x+4)\\) — po zkrácení \\((x-4)\\) zůstane \\(\\frac{x+3}{x+4}\\).`
        },
        {
          label: `\\(\\frac{x + 3}{x - 4}\\)`,
          value: "C",
          feedback: `Kritická chyba. Jmenovatel \\(x^2 - 16 = (x-4)(x+4)\\) — výraz \\((x+4)\\) nelze zaměnit za \\((x-4)\\).`
        },
        {
          label: `\\(\\frac{(x - 4)(x + 3)}{x^{2} - 16}\\)`,
          value: "D",
          feedback: `Chyba. Rozklad čitatele je správný, ale \\((x-4)\\) lze zkrátit se stejným výrazem ve jmenovateli. Zkrácení jsi ještě neprovedl.`
        },
      ],
      hints: [
        `Čitatel je kvadratický trojčlen — rozlož ho na součin dvou závorek. Jmenovatel je rozdíl dvou čtverců, také ho rozlož na závorky.`,
        `Po rozkladu obou hledej to, co můžeš zkrátit.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_alg_01", regionId: "algebra", type: "closed", monsterName: `SIM_01A: Rozklad kvadratického trojčlenu`,
      isTraining: true, firewallId: "q_alg_01", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Rozložte kvadratický trojčlen na součin dvou binomů:`,
      formula: `$$x^{2} - x - 12$$`,
      instruction: `Vyberte správný rozklad.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec rozkladu`,
          content: `Hledáme čísla \\(a, b\\) taková, aby \\(x^2 - x - 12 = (x+a)(x+b)\\). Podmínky: \\(a + b = -1\\) (koeficient u x) a \\(a \\cdot b = -12\\) (absolutní člen).`
        },
        {
          trigger: `> Krok 2: Hledáme správný pár`,
          content: `Hledej dvojici celých čísel, jejichž součin je \\(-12\\) a součet je \\(-1\\). Zkus systematicky projít dělitele čísla 12.`
        },
        {
          trigger: `> Krok 3: Ověření`,
          content: `Ověř svůj výsledek roznásobením — musíš dostat původní trojčlen \\(x^2 - x - 12\\).`
        },
      ],
      choices: [
        {
          label: `\\((x + 4)(x - 3)\\)`,
          value: "A",
          feedback: `Chyba. \\((x+4)(x-3) = x^2 + x - 12\\) — součet \\(+4+(-3) = +1\\), ale potřebuješ \\(-1\\). Záměna znamének.`
        },
        {
          label: `\\((x + 4)(x + 3)\\)`,
          value: "B",
          feedback: `Kritická chyba. Součin \\((x+4)(x+3) = x^2 + 7x + 12\\) — ani součet ani součin čísel nesedí.`
        },
        {
          label: `\\((x - 4)(x + 3)\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\((-4)+(+3) = -1\\) ✓, \\((-4)\\cdot(+3) = -12\\) ✓. Přístup povolen.`
        },
        {
          label: `\\((x - 4)(x - 3)\\)`,
          value: "D",
          feedback: `Chyba syntaxe. \\((x-4)(x-3) = x^2 - 7x + 12\\) — součin je \\(+12\\) (správně), ale součet \\(-4+(-3) = -7 \\neq -1\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_alg_02", regionId: "algebra", type: "closed", monsterName: `FW_01B: Nulové body algebraického zlomku`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 3, trainingTasks: ["t_alg_02"],
      question: `Je dán algebraický výraz:`,
      formula: `$$\\frac{a^{2} - 9}{3a^{2} + a - 2}$$`,
      instruction: `Nalezněte všechna \\(a \\in \\mathbb{R}\\), pro která je hodnota výrazu rovna nule.`,
      choices: [
        {
          label: `\\(\\{ - 3;\\, - 1;\\,\\frac{2}{3};\\, 3\\}\\)`,
          value: "A",
          feedback: `Kritická chyba. Nulové body výrazu jsou hodnoty, kde čitatel \\(= 0\\) (a jmenovatel \\(\\neq 0\\)) — ne kde jmenovatel \\(= 0\\). Hodnoty \\(-1\\) a \\(\\tfrac{2}{3}\\) výraz vůbec neobsahuje.`
        },
        {
          label: `\\(\\{ - 1;\\,\\frac{2}{3}\\}\\)`,
          value: "B",
          feedback: `Chyba. Nalezl jsi nuly jmenovatele (kde výraz nemá smysl), ne nuly čitatele.`
        },
        {
          label: `\\(\\{ 3\\}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Čitatel \\(a^2 - 9 = (a-3)(a+3)\\) má dvě nuly: \\(a = 3\\) i \\(a = -3\\). Obě je třeba ověřit vůči jmenovateli.`
        },
        {
          label: `\\(\\{ - 3;\\, 3\\}\\)`,
          value: "D",
          feedback: `Protokol ověřen. Čitatel \\(a^2 - 9 = 0\\) pro \\(a = \\pm 3\\). Jmenovatel \\(3a^2 + a - 2 = (3a-2)(a+1)\\) — ani \\(a=3\\) ani \\(a=-3\\) ho nevynuluje. Obě hodnoty platí.`
        },
      ],
      hints: [
        `Nulový bod zlomku nastane právě tehdy, když <b>čitatel = 0</b> a zároveň jmenovatel ≠ 0. Nuly jmenovatele jsou z výsledku vyloučeny.`,
        `Čitatel \\(a^2 - 9\\) je rozdíl čtverců. Rozlož ho na součin a najdi, kdy se každá závorka rovná nule.`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_alg_02", regionId: "algebra", type: "closed", monsterName: `SIM_01B: Definiční obor racionálního výrazu`,
      isTraining: true, firewallId: "q_alg_02", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Určete definiční obor výrazu — tedy všechna \\(a \\in \\mathbb{R}\\), pro která má výraz smysl:`,
      formula: `$$\\frac{a^{2} - 9}{3a^{2} + a - 2}$$`,
      instruction: `Vyberte správný definiční obor.`,
      steps: [
        {
          trigger: `> Krok 1: Co výraz vylučuje?`,
          content: `Výraz nemá smysl, když jmenovatel = 0. Čitatel může být cokoli — i nula (pak je výraz nulový, ale definovaný).`
        },
        {
          trigger: `> Krok 2: Nuly jmenovatele`,
          content: `Rozlož jmenovatel \\(3a^2 + a - 2\\) na součin a najdi jeho nulové body. Hledej závorku ve tvaru \\((3a - c)(a - d)\\), nebo použij diskriminant a výsledek napiš ve tvaru \\(k(x - a_1)(x - a_2)\\).`
        },
        {
          trigger: `> Krok 3: Definiční obor`,
          content: `Definiční obor = \\(\\mathbb{R}\\) bez hodnot, kde jmenovatel = 0. Zapiš ho sám.`
        },
      ],
      choices: [
        {
          label: `\\(\\mathbb{R}\\backslash\\left\\{ - 1;\\,\\frac{2}{3} \\right\\}\\)`,
          value: "A",
          feedback: `Protokol ověřen. Jmenovatel \\((3a-2)(a+1) = 0\\) pro \\(a = \\tfrac{2}{3}\\) nebo \\(a = -1\\). Tyto hodnoty jsou vyloučeny.`
        },
        {
          label: `\\(\\mathbb{R}\\backslash\\{ - 3;\\, 3\\}\\)`,
          value: "B",
          feedback: `Chyba. Hodnoty \\(-3\\) a \\(3\\) jsou nuly čitatele — tam je výraz definovaný (roven nule). Vylučuješ nuly jmenovatele.`
        },
        {
          label: `\\(\\mathbb{R}\\)`,
          value: "C",
          feedback: `Kritická chyba. Jmenovatel \\(3a^2 + a - 2\\) má reálné kořeny — výraz nemá smysl pro \\(a = \\tfrac{2}{3}\\) a \\(a = -1\\).`
        },
        {
          label: `\\(\\mathbb{R}\\backslash\\{ - 3;\\, - 1;\\,\\frac{2}{3};\\, 3\\}\\)`,
          value: "D",
          feedback: `Přístup odepřen. Hodnoty \\(-3\\) a \\(3\\) jsou nuly čitatele, ne jmenovatele — nevylučují se.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_alg_03", regionId: "algebra", type: "closed", monsterName: `FW_01C: Záporné hodnoty výrazu`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 3, trainingTasks: ["t_alg_03"],
      question: `Je dán výraz:`,
      formula: `$$\\frac{- 12}{3x - 6}$$`,
      instruction: `Určete všechna \\(x \\in \\mathbb{R}\\), pro která je daný výraz záporný.`,
      choices: [
        {
          label: `\\(x \\in (2;\\, + \\infty)\\)`,
          value: "A",
          feedback: `Logika potvrzena. Výraz \\(= \\frac{-4}{x-2}\\). Čitatel \\(-4 < 0\\), proto celý výraz \\(< 0\\) právě tehdy, když \\(x-2 > 0\\), tedy \\(x > 2\\).`
        },
        {
          label: `\\(x \\in ( - \\infty;\\, 2)\\)`,
          value: "B",
          feedback: `Chyba. Záporný čitatel \\(-4\\) obrací nerovnost: \\(\\frac{-4}{x-2} < 0 \\Leftrightarrow x-2 > 0 \\Leftrightarrow x > 2\\), ne \\(x < 2\\).`
        },
        {
          label: `\\(x \\in \\mathbb{R}\\backslash\\{ 2\\}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výraz mění znaménko v závislosti na \\(x\\). Pro \\(x < 2\\) je jmenovatel záporný, výraz je kladný. Pro \\(x > 2\\) je záporný. Nejde tedy o celé \\(\\mathbb{R} \\setminus \\{2\\}\\).`
        },
        {
          label: `\\(x \\in ( - \\infty;\\, 2) \\cup (2;\\, + \\infty)\\)`,
          value: "D",
          feedback: `Záporné hodnoty výrazu platí jen pro \\(x > 2\\). Tato odpověď popisuje celý definiční obor, ne oblast zápornosti.`
        },
      ],
      hints: [
        `Čitatel je konstanta — jaké má znaménko? Znaménko celého výrazu závisí na jmenovateli.`,
        `Záporné děleno kladným je záporné. Urči, kdy je jmenovatel kladný a kdy záporný.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_alg_03", regionId: "algebra", type: "closed", monsterName: `SIM_01C: Znaménko racionálního výrazu`,
      isTraining: true, firewallId: "q_alg_03", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Je dán výraz. Pro která \\(x \\in \\mathbb{R}\\) je výraz záporný?`,
      formula: `$$\\frac{4}{x - 3}$$`,
      instruction: `Vyberte správnou množinu.`,
      steps: [
        {
          trigger: `> Krok 1: Znaménko čitatele`,
          content: `Čitatel je 4 — stále <b>kladný</b>. Znaménko výrazu tedy závisí pouze na jmenovateli.`
        },
        {
          trigger: `> Krok 2: Podmínka zápornosti`,
          content: `Kladné / záporné = záporné. Výraz \\(< 0\\) právě tehdy, když \\(x - 3 < 0\\). Vyřeš tuto nerovnici sám.`
        },
      ],
      choices: [
        {
          label: `\\(x \\in (3;\\, + \\infty)\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(x > 3\\) je jmenovatel kladný, výraz \\(\\frac{4}{x-3}\\) je tedy kladný, ne záporný.`
        },
        {
          label: `\\(x \\in \\mathbb{R}\\backslash\\{ 3\\}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Toto je celý definiční obor, ne oblast zápornosti. Výraz mění znaménko v \\(x = 3\\).`
        },
        {
          label: `\\(\\varnothing\\)`,
          value: "C",
          feedback: `Přístup odepřen. Pro \\(x < 3\\) je jmenovatel záporný a čitatel kladný → výraz je záporný. Prázdná množina je chybná.`
        },
        {
          label: `\\(x \\in ( - \\infty;\\, 3)\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(4 > 0\\), jmenovatel \\(x-3 < 0\\) pro \\(x < 3\\). Součin/podíl kladného a záporného je záporný.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_alg_04", regionId: "algebra", type: "closed", monsterName: `FW_01D: Operace s algebraickými zlomky`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 4, trainingTasks: ["t_alg_04"],
      question: `Pro \\(a \\in \\mathbb{R} \\setminus \\{-2;\\, 2\\}\\) zjednodušte výraz:`,
      formula: `$$\\frac{4a}{a + 2} - \\frac{8a^{2}}{a^{2} - 4}$$`,
      instruction: `Vyberte správně zjednodušený výsledek.`,
      choices: [
        {
          label: `\\(\\frac{- 4a^{2} - 8a}{a^{2} - 4}\\)`,
          value: "A",
          feedback: `Chyba. Toto je mezivýsledek před zkrácením. Čitatel \\(-4a^2 - 8a = -4a(a+2)\\) a jmenovatel \\(a^2 - 4 = (a+2)(a-2)\\) — faktor \\((a+2)\\) lze zkrátit.`
        },
        {
          label: `\\(\\frac{4a}{a - 2}\\)`,
          value: "B",
          feedback: `Přístup odepřen. Záporné znaménko v čitateli zmizelo. Správný čitatel po rozkladu je \\(-4a(a+2)\\), výsledek po zkrácení musí být záporný.`
        },
        {
          label: `\\(\\frac{- 4a}{a - 2}\\)`,
          value: "C",
          feedback: `Protokol ověřen. Společný jmenovatel \\((a+2)(a-2)\\): čitatel \\(4a(a-2) - 8a^2 = 4a^2 - 8a - 8a^2 = -4a^2 - 8a = -4a(a+2)\\). Po zkrácení \\((a+2)\\): \\(\\frac{-4a}{a-2}\\).`
        },
        {
          label: `\\(\\frac{- 4a}{a + 2}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Po zkrácení faktoru \\((a+2)\\) ve jmenovateli zbyde \\((a-2)\\), ne \\((a+2)\\). Zkontroluj, který faktor krátíš.`
        },
      ],
      hints: [
        `Jmenovatel druhého zlomku je rozdíl čtverců — rozlož ho. To ti ukáže společného jmenovatele.`,
        `Po odečtení čitatelů vytknout z výsledku a zkrátit — výsledek je kratší, než by se zdálo.`,
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_alg_04", regionId: "algebra", type: "closed", monsterName: `SIM_01D: Odčítání algebraických zlomků`,
      isTraining: true, firewallId: "q_alg_04", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Pro \\(x \\in \\mathbb{R} \\setminus \\{-2; 2\\}\\) zjednodušte výraz na jeden zlomek:`,
      formula: `$$\\frac{3}{x + 2} - \\frac{3x}{x^{2} - 4}$$`,
      instruction: `Vyberte správný výsledek.`,
      steps: [
        {
          trigger: `> Krok 1: Rozložíme jmenovatele`,
          content: `\\(x^2 - 4 = (x+2)(x-2)\\). Druhý zlomek má v jmenovateli oba faktory, první jen (x+2). Společný jmenovatel je \\((x+2)(x-2)\\).`
        },
        {
          trigger: `> Krok 2: Převedeme na společného jmenovatele`,
          content: `První zlomek násobíme (x−2): \\(\\frac{3(x-2)}{(x+2)(x-2)}\\). Druhý zlomek zůstane: \\(\\frac{3x}{(x+2)(x-2)}\\).`
        },
        {
          trigger: `> Krok 3: Odečteme čitatele`,
          content: `Teď už stačí jen odečíst oba zlomky, upravit čitatele a podívat se, jestli nejde něco zkrátit.`
        },
      ],
      choices: [
        {
          label: `\\(\\frac{6}{x^{2} - 4}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Záporné znaménko: \\(3(x-2) - 3x = -6\\), ne \\(+6\\). Zkontroluj odčítání.`
        },
        {
          label: `\\(\\frac{- 6}{x^{2} - 4}\\)`,
          value: "B",
          feedback: `Protokol ověřen. Společný jmenovatel \\((x^2-4)\\), čitatel: \\(3(x-2) - 3x = 3x - 6 - 3x = -6\\). Čistý výsledek.`
        },
        {
          label: `\\(\\frac{- 6x}{x^{2} - 4}\\)`,
          value: "C",
          feedback: `Přístup odepřen. Čitatel po odečtení vychází \\(-6\\) (konstanta), ne \\(-6x\\). Roznásob \\(3(x-2)\\) pečlivě.`
        },
        {
          label: `\\(\\frac{- 6}{x + 2}\\)`,
          value: "D",
          feedback: `Chyba. Jmenovatel \\((x+2)(x-2) = x^2 - 4\\), ne jen \\((x+2)\\). Nesmíš vynechat faktor \\((x-2)\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_alg_05", regionId: "algebra", type: "closed", monsterName: `FW_01E: Převod na mocninu jiného základu`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 2, trainingTasks: ["t_alg_05"],
      question: `Pro \\(n \\in \\mathbb{N}\\) upravte výraz na mocninu o základu 4:`,
      formula: `$$2^{2n + 4} =$$`,
      instruction: `Vyberte správný tvar mocniny o základu 4.`,
      choices: [
        {
          label: `\\(4^{2n + 4}\\)`,
          value: "A",
          feedback: `Kritická chyba. Základ \\(4 = 2^2\\) — při přechodu z 2 na 4 se exponent dělí dvěma, ne ponechává stejný.`
        },
        {
          label: `\\(4^{n + 2}\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(2^{2n+4} = 2^{2(n+2)} = (2^2)^{n+2} = 4^{n+2}\\). Ověření \\(n=1\\): \\(2^6 = 64\\), \\(4^3 = 64\\) ✓`
        },
        {
          label: `\\(4^{2n}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(2^{2n+4} = 2^{2n} \\cdot 2^4\\), tedy exponent po přechodu na základ 4 je \\(n+2\\), ne \\(2n\\).`
        },
        {
          label: `\\(4^{n + 4}\\)`,
          value: "D",
          feedback: `Přístup odepřen. \\(2n+4 = 2(n+2)\\) — exponent se dělí dvěma celý. Výsledek je \\(n+2\\), ne \\(n+4\\).`
        },
      ],
      hints: [
        `Jaký je vztah mezi základy 2 a 4? Můžeš použít pravidlo: \\((a^m)^k = a^{m \\cdot k}\\).`,
        `Z exponentu se dá určitě něco vytknout.`,
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_alg_05", regionId: "algebra", type: "closed", monsterName: `SIM_01E: Převod mocniny na jiný základ`,
      isTraining: true, firewallId: "q_alg_05", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Pro \\(n \\in \\mathbb{N}\\) napište výraz \\(4^{n+1}\\) jako mocninu o základu 2:`,
      formula: `$$4^{n + 1} =$$`,
      instruction: `Vyberte správný tvar mocniny o základu 2.`,
      steps: [
        {
          trigger: `> Krok 1: Základ 4 jako mocnina 2`,
          content: `\\(4 = 2^2\\). Proto \\(4^{n+1} = (2^2)^{n+1}\\).`
        },
        {
          trigger: `> Krok 2: Pravidlo mocnin`,
          content: `Pravidlo mocniny mocniny: \\((a^m)^k = a^{m \\cdot k}\\). Dosaď \\(m=2\\), \\(k=n+1\\) a urči výsledný exponent.`
        },
      ],
      choices: [
        {
          label: `\\(2^{n + 2}\\)`,
          value: "A",
          feedback: `Chyba. Exponent se násobí: \\(2 \\cdot (n+1) = 2n+2\\), ne \\(n+2\\).`
        },
        {
          label: `\\(2^{n + 1}\\)`,
          value: "B",
          feedback: `Kritická chyba. Přechod \\(4 \\to 2\\) znamená zdvojení exponentu. Výsledek musí být \\(2^{2n+2}\\).`
        },
        {
          label: `\\(2^{2n + 2}\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(4^{n+1} = (2^2)^{n+1} = 2^{2 \\cdot (n+1)} = 2^{2n+2}\\). Ověření \\(n=1\\): \\(4^2 = 16\\), \\(2^4 = 16\\) ✓`
        },
        {
          label: `\\(2^{4n + 4}\\)`,
          value: "D",
          feedback: `Přístup odepřen. Exponent \\(4 \\cdot (n+1)\\) by platil pro základ \\(4 \\to\\) základ \\(16\\) (\\(2^4\\)). Pro \\(4 = 2^2\\) se násobí dvěma.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_alg_06", regionId: "algebra", type: "closed", monsterName: `FW_01F: Definiční obor výrazu s odmocninami`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 3, trainingTasks: ["t_alg_06"],
      question: `Určete množinu všech \\(x \\in \\mathbb{R}\\), pro která má smysl výraz:`,
      formula: `$$\\frac{\\sqrt{8 - 2x}}{\\sqrt{x - 1}}$$`,
      instruction: `Vyberte správný definiční obor.`,
      choices: [
        {
          label: `\\(x \\in \\lbrack 1;\\, 4\\rbrack\\)`,
          value: "A",
          feedback: `Chyba. Výraz \\(\\sqrt{x-1}\\) je ve jmenovateli — nesmí být nulový. Proto \\(x-1 > 0\\) (ostré), tedy \\(x > 1\\), ne \\(x \\geq 1\\).`
        },
        {
          label: `\\(x \\in ( - \\infty;\\, 4\\rbrack\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Zapomněl na podmínku z jmenovatele: \\(x-1 > 0\\), tedy \\(x > 1\\). Samotná podmínka čitatele nestačí.`
        },
        {
          label: `\\(x \\in (1;\\, 4)\\)`,
          value: "C",
          feedback: `Přístup odepřen. Pravá mez je chybná: \\(8 - 2x \\geq 0\\) dává \\(x \\leq 4\\) (uzavřené), tedy \\(x = 4\\) je přípustné.`
        },
        {
          label: `\\(x \\in (1;\\, 4\\rbrack\\)`,
          value: "D",
          feedback: `Protokol ověřen. Čitatel: \\(8 - 2x \\geq 0 \\Rightarrow x \\leq 4\\). Jmenovatel (\\(\\neq 0\\)): \\(x - 1 > 0 \\Rightarrow x > 1\\). Průnik: \\((1; 4]\\).`
        },
      ],
      hints: [
        `Výraz pod každou odmocninou musí být <b>nezáporný</b> (≥ 0). Odmocnina ve jmenovateli přidává ještě jednu podmínku — jakou?`,
        `Zapiš podmínku pro čitatel i jmenovatel jako nerovnice. Hledáš jejich průnik.`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_alg_06", regionId: "algebra", type: "closed", monsterName: `SIM_01F: Podmínka existence odmocniny`,
      isTraining: true, firewallId: "q_alg_06", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Pro která x ∈ ℝ je výraz definovaný (má smysl)?`,
      formula: `$$\\sqrt{4 - x}$$`,
      instruction: `Vyberte správnou podmínku.`,
      steps: [
        {
          trigger: `> Krok 1: Podmínka odmocniny`,
          content: `Odmocnina je definovaná jen pro <b>nezáporná čísla</b>. Musí platit: výraz pod odmocninou ≥ 0.`
        },
        {
          trigger: `> Krok 2: Řešení nerovnice`,
          content: `Zapiš podmínku jako nerovnici: \\(4 - x \\geq 0\\). Vyřeš ji sám.`
        },
      ],
      choices: [
        {
          label: `\\(x \\leq 4\\)`,
          value: "A",
          feedback: `Protokol ověřen. \\(4 - x \\geq 0 \\Rightarrow x \\leq 4\\). Odmocnina z nuly (\\(x=4\\)) je definovaná — interval je zprava uzavřený.`
        },
        {
          label: `\\(x < 4\\)`,
          value: "B",
          feedback: `Chyba. Odmocnina je definovaná i pro nulu: \\(\\sqrt{0} = 0\\). Pro \\(x=4\\): \\(4 - 4 = 0\\), \\(\\sqrt{0} = 0\\) ✓ — interval je zprava uzavřený.`
        },
        {
          label: `\\(x \\geq 4\\)`,
          value: "C",
          feedback: `Kritická chyba. Pro \\(x > 4\\) je \\(4 - x\\) záporné — odmocnina z záporného čísla v \\(\\mathbb{R}\\) neexistuje.`
        },
        {
          label: `\\(x \\in \\mathbb{R}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Odmocnina má definiční podmínku. Pro \\(x = 5\\): \\(4 - 5 = -1 < 0\\) → \\(\\sqrt{-1}\\) není reálné číslo.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_alg_07", regionId: "algebra", type: "closed", monsterName: `FW_01G: Nulové body součinového výrazu`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 3, trainingTasks: ["t_alg_07"],
      question: `Je dán algebraický výraz:`,
      formula: `$$\\frac{(y^{2} + 4)(3y - 6)}{y + 5}$$`,
      instruction: `Určete množinu všech nulových bodů tohoto výrazu.`,
      choices: [
        {
          label: `\\(\\{ 2\\}\\)`,
          value: "A",
          feedback: `Protokol ověřen. \\(y^2 + 4 > 0\\) pro všechna \\(y \\in \\mathbb{R}\\) (žádné reálné nulové body). Nula přichází jen z \\(3y - 6 = 0 \\Rightarrow y = 2\\). Ověření: \\(y+5 = 7 \\neq 0\\) ✓`
        },
        {
          label: `\\(\\{ - 5;\\, 2\\}\\)`,
          value: "B",
          feedback: `Chyba. \\(y = -5\\) je místo, kde výraz nemá smysl (jmenovatel \\(= 0\\)), ne nulový bod.`
        },
        {
          label: `\\(\\varnothing\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výraz \\(y^2 + 4\\) nemá reálné nulové body, to však nevylučuje nuly celého výrazu — ty pochází z faktoru \\(3y - 6 = 0 \\Rightarrow y = 2\\).`
        },
        {
          label: `\\(\\{ - 5\\}\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(y = -5\\) vynuluje jmenovatel, nikoli čitatel. Nulový bod výrazu nastává, když čitatel \\(= 0\\) (a jmenovatel \\(\\neq 0\\)).`
        },
      ],
      hints: [
        `Nulový bod výrazu nastane, když <b>čitatel \\(= 0\\)</b> a jmenovatel \\(\\neq 0\\). Čitatel je součin dvou výrazů — součin je nulový, když alespoň jeden z faktorů je nulový.`,
        `Jeden z faktorů čitatele je "součet druhých mocnin". Může být někdy nulový?`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_alg_07", regionId: "algebra", type: "closed", monsterName: `SIM_01G: Nulové body součinu`,
      isTraining: true, firewallId: "q_alg_07", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Nalezněte všechny nulové body výrazu:`,
      formula: `$$\\frac{(x - 5)(x + 2)}{x - 3}$$`,
      instruction: `Vyberte správnou množinu nulových bodů.`,
      steps: [
        {
          trigger: `> Krok 1: Kdy je zlomek nulový?`,
          content: `Zlomek = 0, když <b>čitatel = 0</b> (a jmenovatel ≠ 0). Jmenovatel nesmíme vynulovat — to by výraz neměl smysl.`
        },
        {
          trigger: `> Krok 2: Nuly čitatele`,
          content: `Čitatel je součin dvou binomů — kdy je každý z nich nulový?`
        },
        {
          trigger: `> Krok 3: Ověření podmínek`,
          content: `Pro každou nulu čitatele ověř, že jmenovatel není nulový — jinak by výraz neměl smysl.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 5\\}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Čitatel \\((x-5)(x+2) = 0\\) má dvě řešení: \\(x=5\\) i \\(x=-2\\). Obě jsou platné nulové body.`
        },
        {
          label: `\\(\\{ - 2;\\, 3;\\, 5\\}\\)`,
          value: "B",
          feedback: `Kritická chyba. \\(x = 3\\) je nulový bod jmenovatele — výraz tam nemá smysl. Nesmí být zahrnutý.`
        },
        {
          label: `\\(\\{ 3\\}\\)`,
          value: "C",
          feedback: `Chyba. \\(x = 3\\) vynuluje jmenovatel — výraz tam nemá smysl. Hledáš nuly čitatele.`
        },
        {
          label: `\\(\\{ - 2;\\, 5\\}\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\((x-5)(x+2) = 0\\) pro \\(x = 5\\) a \\(x = -2\\). Jmenovatel v obou bodech nenulový ✓.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_alg_08", regionId: "algebra", type: "closed", monsterName: `FW_01H: Tvrzení o algebraickém výrazu`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 4, trainingTasks: ["t_alg_08"],
      question: `Je dán algebraický výraz. Které tvrzení je pravdivé?`,
      formula: `$$\\frac{(2a - 6)^{2}}{4a - 12}$$`,
      instruction: `Vyberte správné tvrzení.`,
      choices: [
        {
          label: `Výraz je definovaný pro všechna \\(a \\in \\mathbb{R}\\).`,
          value: "A",
          feedback: `Chyba. Pro \\(a = 3\\) je jmenovatel \\(4 \\cdot 3 - 12 = 0\\). Výraz v bodě \\(a = 3\\) nemá smysl.`
        },
        {
          label: `Pro \\(a = 0\\) je hodnota výrazu rovna \\(-9\\).`,
          value: "B",
          feedback: `Chyba. Výraz \\(= (a-3)\\) pro \\(a \\neq 3\\). Pro \\(a = 0\\): \\(0 - 3 = -3\\), ne \\(-9\\).`
        },
        {
          label: `Pro \\(a = 4\\) je hodnota výrazu rovna \\(1\\).`,
          value: "C",
          feedback: `Logika potvrzena. Výraz \\(= \\frac{(2a-6)^2}{4(a-3)} = \\frac{4(a-3)^2}{4(a-3)} = a-3\\). Pro \\(a = 4\\): \\(4 - 3 = 1\\) ✓`
        },
        {
          label: `Pro \\(a = 5\\) je hodnota výrazu rovna \\(4\\).`,
          value: "D",
          feedback: `Chyba. Výraz \\(= a - 3\\). Pro \\(a = 5\\): \\(5 - 3 = 2\\), ne \\(4\\).`
        },
      ],
      hints: [
        `Výraz jde výrazně zjednodušit — hledej společný faktor v čitateli a jmenovateli.`,
        `Po zjednodušení ověř každé tvrzení dosazením. Nezapomeň zkontrolovat, pro která \\(a\\) výraz vůbec nemá smysl.`,
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_alg_08", regionId: "algebra", type: "closed", monsterName: `SIM_01H: Zjednodušení výrazu vytknout-zkrátit`,
      isTraining: true, firewallId: "q_alg_08", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Pro \\(a \\neq 2\\) zjednodušte výraz:`,
      formula: `$$\\frac{(a - 2)^{2}}{2a - 4}$$`,
      instruction: `Vyberte správně zjednodušený tvar.`,
      steps: [
        {
          trigger: `> Krok 1: Rozložíme jmenovatel`,
          content: `\\(2a - 4 = 2(a-2)\\). Jmenovatel obsahuje faktor (a−2).`
        },
        {
          trigger: `> Krok 2: Zkrátíme`,
          content: `Kolik faktorů \\((a-2)\\) je v čitateli a kolik ve jmenovateli? Zkrať společné a zapiš výsledek.`
        },
      ],
      choices: [
        {
          label: `\\(a - 2\\)`,
          value: "A",
          feedback: `Chyba. Zapomněl na konstantu 2 v jmenovateli: \\(2a - 4 = 2(a-2)\\), po zkrácení zůstane \\(\\frac{a-2}{2}\\).`
        },
        {
          label: `\\(\\frac{a - 2}{2}\\)`,
          value: "B",
          feedback: `Protokol ověřen. \\(\\frac{(a-2)^2}{2(a-2)} = \\frac{a-2}{2}\\). Ověření \\(a=4\\): \\(\\frac{(4-2)^2}{2 \\cdot 4 - 4} = \\frac{4}{4} = 1\\), a \\(\\frac{4-2}{2} = 1\\) ✓`
        },
        {
          label: `\\(\\frac{1}{2}\\)`,
          value: "C",
          feedback: `Přístup odepřen. Zkrátil dvakrát, ale v čitateli jsou dva faktory \\((a-2)\\) a ve jmenovateli jen jeden. Jeden \\((a-2)\\) zůstane.`
        },
        {
          label: `\\(2(a - 2)\\)`,
          value: "D",
          feedback: `Kritická chyba. Výsledek jde opačným směrem — jmenovatel nestoupá, ale klesá. Zkrácení se provádí, ne násobení.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_alg_09", regionId: "algebra", type: "closed", monsterName: `FW_01I: Složená operace se zlomky`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 5, trainingTasks: ["t_alg_09"],
      question: `Pro \\(a \\in \\mathbb{R} \\setminus \\{-2;\\, 2\\}\\) zjednodušte výraz:`,
      formula: `$$\\left( \\frac{a}{a - 2} - \\frac{a}{a + 2} \\right) \\cdot \\frac{a^{2} - 4}{a}$$`,
      instruction: `Vyberte správný výsledek.`,
      choices: [
        {
          label: `\\(\\frac{4a}{a^{2} - 4}\\)`,
          value: "A",
          feedback: `Chyba. Toto je výsledek jen vnitřní závorky — ještě jsi nenásobil výrazem \\(\\frac{a^2-4}{a}\\).`
        },
        {
          label: `\\(4\\)`,
          value: "B",
          feedback: `Protokol ověřen. Závorka: \\(\\frac{a(a+2) - a(a-2)}{a^2-4} = \\frac{4a}{a^2-4}\\). Po násobení \\(\\frac{a^2-4}{a}\\): \\(\\frac{4a}{a^2-4} \\cdot \\frac{a^2-4}{a} = 4\\).`
        },
        {
          label: `\\(4a^{2}\\)`,
          value: "C",
          feedback: `Kritická chyba. Závorka dává \\(\\frac{4a}{a^2-4}\\). Po vynásobení: \\(\\frac{4a}{a^2-4} \\cdot \\frac{a^2-4}{a} = \\frac{4 \\cdot a \\cdot (a^2-4)}{(a^2-4) \\cdot a} = 4\\). Faktor \\((a^2-4)\\) i faktor \\(a\\) se zkrátí — výsledek je číslo, ne výraz s proměnnou.`
        },
        {
          label: `\\(\\frac{4}{a}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Faktor \\(\\frac{a}{a} = 1\\) (ne \\(\\frac{1}{a}\\)). Pozorně sleduj, co je v čitateli a co ve jmenovateli při násobení.`
        },
      ],
      hints: [
        `Začni výrazem v závorce — převeď zlomky na společného jmenovatele a odečti čitatele.`,
        `Výraz za závorkou obsahuje \\(a^2 - 4\\) — rozlož a hledej, co se po vynásobení zkrátí.`,
      ],
      correctAnswer: "B", reward: { xp: 25 }
    },
    {
      id: "t_alg_09", regionId: "algebra", type: "closed", monsterName: `SIM_01I: Složená operace — závorka a násobení`,
      isTraining: true, firewallId: "q_alg_09", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Pro \\(x \\neq 0\\) a \\(x \\neq 1\\) zjednodušte výraz:`,
      formula: `$$\\left( 1 - \\frac{1}{x} \\right) \\cdot \\frac{x}{x - 1}$$`,
      instruction: `Vyberte správný výsledek.`,
      steps: [
        {
          trigger: `> Krok 1: Zjednodušíme závorku`,
          content: `Převeď výraz v závorce na jeden zlomek — společný jmenovatel je \\(x\\).`
        },
        {
          trigger: `> Krok 2: Vynásobíme`,
          content: `Zapiš součin obou zlomků jako jeden zlomek — co vidíš v čitateli a jmenovateli?`
        },
        {
          trigger: `> Krok 3: Zkrátíme`,
          content: `Hledej společné faktory v čitateli a jmenovateli a zkrať. Jaký je výsledek?`
        },
      ],
      choices: [
        {
          label: `\\(x - 1\\)`,
          value: "A",
          feedback: `Chyba. Faktor \\(x\\) ve jmenovateli závorky a faktor \\(x\\) v druhém zlomku se zkrátí. Pak se zkrátí i \\((x-1)\\). Výsledek je \\(1\\).`
        },
        {
          label: `\\(\\frac{x - 1}{x}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Toto je jen zjednodušená závorka — nezapočítal druhý faktor \\(\\frac{x}{x-1}\\).`
        },
        {
          label: `\\(1\\)`,
          value: "C",
          feedback: `Protokol ověřen. \\(\\frac{x-1}{x} \\cdot \\frac{x}{x-1} = \\frac{x(x-1)}{x(x-1)} = 1\\). Elegantní zkrácení.`
        },
        {
          label: `\\(\\frac{x}{x - 1}\\)`,
          value: "D",
          feedback: `Přístup odepřen. Závorka \\(\\left(1 - \\frac{1}{x}\\right)\\) se nezjednodušila správně, nebo jsi opomněl pronásobit. Výsledek je \\(1\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_alg_10", regionId: "algebra", type: "closed", monsterName: `FW_01J: Zjednodušení výrazu s odmocninami`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 4, trainingTasks: ["t_alg_10"],
      question: `Pro \\(a \\in (0;\\, +\\infty)\\) zjednodušte výraz:`,
      formula: `$$\\frac{\\sqrt{a^{3}} \\cdot \\sqrt[4]{a}}{a}$$`,
      instruction: `Vyberte správně zjednodušený tvar.`,
      choices: [
        {
          label: `\\(a^{\\frac{7}{4}}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Zapomněl odečíst exponent z dělení.`
        },
        {
          label: `\\(\\sqrt{a^{3}}\\)`,
          value: "B",
          feedback: `Chyba. Nezohlednil \\(\\sqrt[4]{a}\\) a dělení \\(a\\).`
        },
        {
          label: `\\(\\sqrt[3]{a^{4}}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Exponent výsledku je \\(\\frac{3}{4}\\). Jmenovatel odpovídá stupni odmocniny, čitatel stupni mocniny.`
        },
        {
          label: `\\(\\sqrt[4]{a^{3}}\\)`,
          value: "D",
          feedback: `Protokol ověřen. \\(\\sqrt{a^3} = a^{3/2}\\), \\(\\sqrt[4]{a} = a^{1/4}\\), děleno \\(a = a^1\\). Exponent: \\(\\frac{3}{2} + \\frac{1}{4} - 1 = \\frac{3}{4}\\). Tedy \\(\\sqrt[4]{a^3}\\).`
        },
      ],
      hints: [
        `Přepiš každou odmocninu jako mocninu s racionálním exponentem — to sjednotí tvar pro další úpravy.`,
        `Při násobení mocnin se stejným základem se exponenty <b>sčítají</b>, při dělení <b>odčítají</b>. Výsledný exponent si spočítej sám.`,
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_alg_10", regionId: "algebra", type: "closed", monsterName: `SIM_01J: Sčítání exponentů odmocnin`,
      isTraining: true, firewallId: "q_alg_10", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Pro \\(a > 0\\) zapište výraz jako jednu mocninu základu \\(a\\):`,
      formula: `$$\\sqrt{a} \\cdot \\sqrt[4]{a}$$`,
      instruction: `Vyberte správný výsledek.`,
      steps: [
        {
          trigger: `> Krok 1: Odmocniny jako mocniny`,
          content: `\\(\\sqrt{a} = a^{1/2}\\), \\(\\sqrt[4]{a} = a^{1/4}\\). Součin mocnin se stejným základem: exponent se sčítá.`
        },
        {
          trigger: `> Krok 2: Sečteme exponenty`,
          content: `Sečti exponenty: \\(\\frac{1}{2} + \\frac{1}{4} = ?\\) Převeď na společného jmenovatele.`
        },
        {
          trigger: `> Krok 3: Zapíšeme odmocninou`,
          content: `Máš výsledný exponent ve tvaru zlomku. Jmenovatel zlomku udává stupeň odmocniny, čitatel mocninu základu. Zkus to zapsat sám.`
        },
      ],
      choices: [
        {
          label: `\\(\\sqrt[4]{a^{3}}\\)`,
          value: "A",
          feedback: `Protokol ověřen. \\(a^{1/2 + 1/4} = a^{3/4} = \\sqrt[4]{a^3}\\). Ověření \\(a=16\\): \\(\\sqrt{16} \\cdot \\sqrt[4]{16} = 4 \\cdot 2 = 8\\), \\(\\sqrt[4]{16^3} = \\sqrt[4]{4096} = 8\\) ✓`
        },
        {
          label: `\\(\\sqrt[8]{a^{3}}\\)`,
          value: "B",
          feedback: `Chyba. \\(a^{3/4} = \\sqrt[4]{a^3}\\), ne \\(\\sqrt[8]{a^3}\\). Jmenovatel exponentu \\(\\frac{3}{4}\\) je \\(4\\), ne \\(8\\).`
        },
        {
          label: `\\(\\sqrt[4]{a}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(\\sqrt[4]{a} = a^{1/4}\\), ale výsledek je \\(a^{3/4}\\). Součet exponentů se nepromítl do výsledku.`
        },
        {
          label: `\\(a^{\\frac{1}{8}}\\)`,
          value: "D",
          feedback: `Kritická chyba. Exponent se sčítá, ne násobí: \\(\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}\\), ne \\(\\frac{1}{2} \\cdot \\frac{1}{4} = \\frac{1}{8}\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    // ==========================================
    // PLANIMETRIE — NOVÉ PŘÍKLADY
    // ==========================================

        {
      id: "q_plan_02", regionId: "planimetrie", type: "closed", monsterName: `FW_03A: Lichoběžník — poměr základen`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 3, trainingTasks: ["t_plan_02"],
      question: `Rovnoramenný lichoběžník ABCD má obvod 68 cm, délku ramene 10 cm a výšku 6 cm. V jakém poměru (delší : kratší) jsou délky základen?`,
      formula: null,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="35,215 285,215 225,90 95,90" fill="#1e3a5f" fill-opacity="0.3" stroke="#00b4d8" stroke-width="2.5"/> <line x1="160" y1="90" x2="160" y2="215" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/> <polyline points="165,215 165,210 160,210" fill="none" stroke="#e2e8f0" stroke-width="1.5"/> <text x="20" y="220" fill="#e2e8f0" font-size="13" font-weight="bold">A</text> <text x="289" y="220" fill="#e2e8f0" font-size="13" font-weight="bold">B</text> <text x="228" y="86" fill="#e2e8f0" font-size="13" font-weight="bold">C</text> <text x="78" y="86" fill="#e2e8f0" font-size="13" font-weight="bold">D</text> <text x="160" y="234" text-anchor="middle" fill="#94a3b8" font-size="11">a = ?</text> <text x="160" y="78" text-anchor="middle" fill="#94a3b8" font-size="11">c = ?</text> <text x="120" y="158" fill="#94a3b8" font-size="11">v = 6 cm</text> <text x="256" y="158" fill="#94a3b8" font-size="11">l = 10 cm</text> <text x="90" y="175" text-anchor="middle" fill="#fbbf24" font-size="12">Poměr a : c = ?</text> <text x="160" y="16" text-anchor="middle" fill="#94a3b8" font-size="10">Rovnoramenný lichoběžník, obvod = 68 cm</text></svg>`,
      instruction: `Vyberte správný poměr základen.`,
      choices: [
        {
          label: `\\(3:1\\)`,
          value: "A",
          feedback: `Chyba. Nejdřív vypočítej přesah p z Pythagorovy věty: \\(p = \\sqrt{l^2 - v^2}\\). Pak z obvodu urči součet základen a odvoď jejich poměr.`
        },
        {
          label: `\\(4:3\\)`,
          value: "B",
          feedback: `Kritická chyba. Poměr nelze odhadnout bez výpočtu přesahu p. Použij Pythagorovu větu a rovnici pro obvod lichoběžníku.`
        },
        {
          label: `\\(2:1\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(p = \\sqrt{100-36} = 8\\) cm; \\(a+c = 48\\); \\(a = c+16 \\Rightarrow c = 16, a = 32\\). Poměr \\(32:16 = 2:1\\). Protokol ověřen.`
        },
        {
          label: `\\(5:3\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Nesprávný výpočet přesahu. Zkontroluj dosazení do Pythagorovy věty: \\(p = \\sqrt{l^2 - v^2}\\).`
        },
      ],
      hints: [
        `V rovnoramenném lichoběžníku označme \\(p\\) délku, o kterou delší základna přesahuje kratší na každé straně. Rameno \\(l\\), výška \\(v\\) a \\(p\\) tvoří pravoúhlý trojúhelník — zjisti \\(p\\) z Pythagorovy věty.`,
        `Ze znalosti přesahu a obvodu můžeš vyjádřit obě základny. Jak spolu souvisí \\(a\\), \\(c\\) a \\(p\\)?`,
        `Vzorce pro výpočet: \\(l^2 = v^2 + p^2\\) (Pythagorova věta) a \\(o = a + c + 2l\\) (obvod lichoběžníku).`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_plan_02", regionId: "planimetrie", type: "closed", monsterName: `SIM_03A: Přesah ramene lichoběžníku`,
      isTraining: true, firewallId: "q_plan_02", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0,
      question: `Rovnoramenný lichoběžník má rameno délky 5 cm a výšku 4 cm. Jaký je přesah delší základny oproti kratší na každé straně (délka p)?`,
      formula: `$$p = \\sqrt{l^{2} - v^{2}}$$`,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="40,205 280,205 235,80 85,80" fill="#1a2a3a" fill-opacity="0.35" stroke="#2ecc8a" stroke-width="2.5"/> <polygon points="280,205 235,80 235,205" fill="#fbbf24" fill-opacity="0.08" stroke="none"/> <line x1="235" y1="80" x2="235" y2="205" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/> <polyline points="235,196 244,196 244,205" fill="none" stroke="#fbbf24" stroke-width="1.5"/> <line x1="160" y1="80" x2="160" y2="205" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/> <polyline points="160,196 169,196 169,205" fill="none" stroke="#94a3b8" stroke-width="1.2"/> <line x1="235" y1="223" x2="280" y2="223" stroke="#f87171" stroke-width="2.5"/> <line x1="235" y1="216" x2="235" y2="230" stroke="#f87171" stroke-width="2.5"/> <line x1="280" y1="216" x2="280" y2="230" stroke="#f87171" stroke-width="2.5"/> <text x="24" y="212" fill="#e2e8f0" font-size="12" font-weight="bold">A</text> <text x="284" y="212" fill="#e2e8f0" font-size="12" font-weight="bold">B</text> <text x="238" y="76" fill="#e2e8f0" font-size="12" font-weight="bold">C</text> <text x="70" y="76" fill="#e2e8f0" font-size="12" font-weight="bold">D</text> <text x="136" y="148" fill="#94a3b8" font-size="11">v = 4 cm</text> <text x="262" y="146" fill="#fbbf24" font-size="11">l = 5 cm</text> <text x="248" y="240" fill="#f87171" font-size="12" font-weight="bold">p = ?</text> <text x="160" y="16" text-anchor="middle" fill="#94a3b8" font-size="10">Přesah p tvoří s ramenem l a výškou v pravoúhlý trojúhelník</text></svg>`,
      instruction: `Vyberte správnou délku přesahu p.`,
      steps: [
        {
          trigger: `> Krok 1: Co je přesah?`,
          content: `Přesah p je vodorovná vzdálenost mezi koncem kratší základny a koncem delší základny. Rameno, výška a přesah tvoří pravouhlý trojúhelník.`
        },
        {
          trigger: `> Krok 2: Pythagorova věta`,
          content: `Dosaď do Pythagorovy věty: \\(p = \\sqrt{l^2 - v^2} = \\sqrt{25 - 16}\\). Kolik je výsledek?`
        },
      ],
      choices: [
        {
          label: `\\(p = 4\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. 4 cm je výška, ne přesah. Přesah se počítá z Pythagorovy věty: \\(p = \\sqrt{l^2 - v^2}\\).`
        },
        {
          label: `\\(p = 6\\text{ cm}\\)`,
          value: "B",
          feedback: `Kritická chyba. Záměna ve výpočtu. Zkontroluj dosazení do Pythagorovy věty: \\(p = \\sqrt{l^2 - v^2}\\).`
        },
        {
          label: `\\(p = 5\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. 5 cm je rameno \\(l\\), ne přesah \\(p\\). Pythagorova věta: \\(p = \\sqrt{l^2-v^2}\\).`
        },
        {
          label: `\\(p = 3\\text{ cm}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(p = \\sqrt{5^2-4^2} = \\sqrt{25-16} = \\sqrt{9} = 3\\) cm.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_plan_03", regionId: "planimetrie", type: "closed", monsterName: `FW_03B: Lichoběžníky — nezakrytá plocha`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 4, trainingTasks: ["t_plan_03"],
      question: `Část šrafovaného pravoúhlého lichoběžníku je překryta celým bílým pravoúhlým lichoběžníkem. Bílý lichoběžník má základny délky 2x a 3x a výšku 2x. Ve šrafovaném lichoběžníku jsou obě základny o polovinu delší než v bílém a výška je dvakrát větší. Jaký je obsah nezakryté části šrafovaného lichoběžníku?`,
      formula: null,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="54,230 290,230 290,20 132,20" fill="#1e3a5f" fill-opacity="0.4" stroke="#00b4d8" stroke-width="2"/> <polygon points="132,230 290,230 290,125 185,125" fill="#111827" stroke="#e2e8f0" stroke-width="2"/> <polyline points="282,230 282,222 290,222" fill="none" stroke="#e2e8f0" stroke-width="1.5"/> <polyline points="282,125 282,133 290,133" fill="none" stroke="#e2e8f0" stroke-width="1.5"/> <text x="172" y="248" text-anchor="middle" fill="#00b4d8" font-size="12">4,5x</text> <text x="211" y="248" text-anchor="middle" fill="#e2e8f0" font-size="11">3x</text> <text x="211" y="16" text-anchor="middle" fill="#00b4d8" font-size="12">3x</text> <text x="38" y="130" fill="#00b4d8" font-size="12">4x</text> <text x="237" y="120" text-anchor="middle" fill="#e2e8f0" font-size="11">2x</text> <text x="295" y="180" fill="#e2e8f0" font-size="11">2x</text> <text x="110" y="120" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">S = ?</text></svg>`,
      instruction: `Vyberte správný výraz pro obsah nezakryté části.`,
      choices: [
        {
          label: `\\(8x^{2}\\)`,
          value: "A",
          feedback: `Chyba. Přepočítej obsah obou lichoběžníků zvlášť: nejdřív urči jejich základny a výšky ze zadání a dosaď do vzorce \\(S = \\frac{a+c}{2} \\cdot v\\).`
        },
        {
          label: `\\(9x^{2}\\)`,
          value: "B",
          feedback: `Kritická chyba. Chyba ve výpočtu obsahu jednoho nebo obou lichoběžníků. Rozpiš základny šrafovaného: jsou o polovinu delší než bílého. Výška je dvakrát větší.`
        },
        {
          label: `\\(7x^{2}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Zkontroluj součet základen šrafovaného lichoběžníku. Základny jsou \\(1,5 \\cdot 2x\\) a \\(1,5 \\cdot 3x\\) — kolik dohromady?`
        },
        {
          label: `\\(10x^{2}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(S_{\\text{bílý}} = \\frac{2x+3x}{2} \\cdot 2x = 5x^2\\); \\(S_{\\text{šraf.}} = \\frac{3x+4{,}5x}{2} \\cdot 4x = 15x^2\\). Rozdíl \\(= 10x^2\\). Protokol ověřen.`
        },
      ],
      hints: [
        `Vzorec pro obsah lichoběžníku: \\(S = \\frac{a+c}{2} \\cdot v\\). Jaké jsou rozměry šrafovaného lichoběžníku?`,
        `Nezakrytá plocha = obsah šrafovaného − obsah bílého.`,
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_plan_03", regionId: "planimetrie", type: "closed", monsterName: `SIM_03B: Obsah lichoběžníku vzorec`,
      isTraining: true, firewallId: "q_plan_03", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0,
      question: `Lichoběžník má základny délky a = 4x a c = 6x a výšku h = 3x. Vyjádřete jeho obsah v závislosti na x.`,
      formula: `$$S = \\frac{a + c}{2} \\cdot h$$`,
      instruction: `Vyberte správný obsah lichoběžníku.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro obsah lichoběžníku?`,
          content: `\\(S = \\frac{a + c}{2} \\cdot h\\).`
        },
      ],
      choices: [
        {
          label: `\\(15x^{2}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\frac{4x+6x}{2} \\cdot 3x = 5x \\cdot 3x = 15x^2\\). Protokol ověřen.`
        },
        {
          label: `\\(12x^{2}\\)`,
          value: "B",
          feedback: `Chyba. Pravděpodobně jsi spočítal jen \\(\\frac{a+c}{2} \\cdot 2x = 5x \\cdot 2x = 10x^2\\). Výška je \\(3x\\), ne \\(2x\\).`
        },
        {
          label: `\\(18x^{2}\\)`,
          value: "C",
          feedback: `Kritická chyba. Chybí dělení 2 ve vzorci nebo nesprávný součet základen. Zkontroluj: \\(\\frac{a+c}{2} \\cdot h = \\frac{10x}{2} \\cdot 3x = 5x \\cdot 3x\\).`
        },
        {
          label: `\\(36x^{2}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. \\(36x^2 = (a+c) \\cdot h = 10x \\cdot 3x\\) bez dělení 2. Vzorec lichoběžníku vyžaduje dělení 2.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_plan_04", regionId: "planimetrie", type: "closed", monsterName: `FW_03C: Pětiúhelník — obsah trojúhelníku ABE`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 3, trainingTasks: ["t_plan_04"],
      question: `Pětiúhelník ABCED je složen ze čtverce ABCD s obsahem 64 cm² a trojúhelníku CED s obsahem 20 cm². Bod E leží nad stranou CD. Jaký je obsah trojúhelníku ABE?`,
      formula: null,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="100,230 220,230 220,110 160,35 100,110" fill="#1e3a5f" fill-opacity="0.2" stroke="#00b4d8" stroke-width="2.5"/> <polygon points="100,230 220,230 160,35" fill="#fbbf24" fill-opacity="0.10" stroke="none"/> <line x1="100" y1="110" x2="220" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/> <line x1="100" y1="230" x2="160" y2="35" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="6,3"/> <line x1="220" y1="230" x2="160" y2="35" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="6,3"/> <text x="86" y="247" fill="#e2e8f0" font-size="13" font-weight="bold">A</text> <text x="223" y="247" fill="#e2e8f0" font-size="13" font-weight="bold">B</text> <text x="223" y="107" fill="#e2e8f0" font-size="13" font-weight="bold">C</text> <text x="153" y="29" fill="#e2e8f0" font-size="13" font-weight="bold">E</text> <text x="82" y="107" fill="#e2e8f0" font-size="13" font-weight="bold">D</text> <text x="160" y="178" text-anchor="middle" fill="#94a3b8" font-size="12">64 cm²</text> <text x="160" y="88" text-anchor="middle" fill="#94a3b8" font-size="12">20 cm²</text> <text x="120" y="205" text-anchor="middle" fill="#fbbf24" font-size="12">S(ABE) = ?</text> <text x="160" y="14" text-anchor="middle" fill="#94a3b8" font-size="10">Pětiúhelník = čtverec + trojúhelník</text></svg>`,
      instruction: `Vyberte správný obsah trojúhelníku ABE.`,
      choices: [
        {
          label: `\\(42\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Chyba. Výšku E nad CD počítáš z \\(S_{CED} = \\frac{1}{2} \\cdot |CD| \\cdot h_E\\). Při vyjadřování \\(h_E\\) nesmíš zapomenout na násobení dvěma v čitateli.`
        },
        {
          label: `\\(52\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(a = \\sqrt{64} = 8\\) cm; \\(h_E = \\frac{2 \\cdot 20}{8} = 5\\) cm; výška ABE \\(= 8 + 5 = 13\\) cm; \\(S = \\frac{1}{2} \\cdot 8 \\cdot 13 = 52\\) cm². Protokol ověřen.`
        },
        {
          label: `\\(84\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Chyba. 84 cm² je obsah celého pětiúhelníku ABCED (64 + 20), ne samotného trojúhelníku ABE.`
        },
        {
          label: `\\(64\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. 64 cm² je obsah čtverce ABCD. Trojúhelník ABE přesahuje čtverec o výšku vrcholu E nad stranou CD.`
        },
      ],
      hints: [
        `Jak zjistíš stranu čtverce z jeho obsahu? A jak z obsahu trojúhelníku CED zjistíš výšku bodu E nad stranou CD?`,
        `Výška trojúhelníku ABE nad stranou AB se skládá ze strany čtverce a výšky bodu E nad CD.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },

    {
      id: "t_plan_04", regionId: "planimetrie", type: "closed", monsterName: `SIM_03C: Výška z obsahu trojúhelníku`,
      isTraining: true, firewallId: "q_plan_04", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0,
      question: `Trojúhelník má základnu délky 8 cm a obsah 20 cm². Jaká je výška na tuto základnu?`,
      formula: `$$h = \\frac{2S}{a}$$`,
      instruction: `Vyberte správnou délku výšky h.`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro obsah`,
          content: `Obsah trojúhelníku: \\(S = \\frac{1}{2} \\cdot a \\cdot h\\). Odtud vyjádříme výšku: \\(h = \\frac{2S}{a}\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `Dosaď do vzorce z Kroku 1: \\(h = \\frac{2 \\cdot 20}{8}\\). Kolik vyjde?`
        },
      ],
      choices: [
        {
          label: `\\(h = 2{,}5\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. \\(h = 20/8 = 2{,}5\\) — chybí násobení 2 v čitateli. Vzorec: \\(h = \\frac{2S}{a}\\). Dosaď znovu.`
        },
        {
          label: `\\(h = 5\\text{ cm}\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(h = \\frac{2 \\cdot 20}{8} = 5\\) cm. Teď zkus firewall — tam výšku E nad CD spočítáš stejně!`
        },
        {
          label: `\\(h = 8\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. 8 cm je délka základny, ne výška. Výšku vyjádříš z \\(h = \\frac{2S}{a}\\).`
        },
        {
          label: `\\(h = 10\\text{ cm}\\)`,
          value: "D",
          feedback: `Chyba. \\(h = 20/2 = 10\\) — vydělil jsi obsah dvěma, ale zapomněl jsi dělit ještě základnou. Vzorec: \\(h = \\frac{2S}{a}\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },

    {
      id: "q_plan_05", regionId: "planimetrie", type: "closed", monsterName: `FW_03D: Lichoběžník — úhlopříčka`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 3, trainingTasks: ["t_plan_05"],
      question: `Lichoběžník ABCD má obsah 32 cm², výšku v = 4 cm a kratší základnu CD = 6 cm. Úhlopříčka BD dělí lichoběžník na trojúhelníky ABD a BCD. O kolik cm² se liší jejich obsahy?`,
      formula: null,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="40,205 280,205 232,55 88,55" fill="#1e3a5f" fill-opacity="0.25" stroke="#00b4d8" stroke-width="2.5"/> <line x1="280" y1="205" x2="88" y2="55" stroke="#fbbf24" stroke-width="2" stroke-dasharray="7,3"/> <polygon points="40,205 280,205 88,55" fill="#0a1a2e" fill-opacity="0.5" stroke="none"/> <polygon points="280,205 232,55 88,55" fill="#1a2a0a" fill-opacity="0.5" stroke="none"/> <line x1="88" y1="55" x2="88" y2="205" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/> <polyline points="88,197 96,197 96,205" fill="none" stroke="#e2e8f0" stroke-width="1.5"/> <text x="26" y="209" fill="#e2e8f0" font-size="13" font-weight="bold">A</text> <text x="284" y="209" fill="#e2e8f0" font-size="13" font-weight="bold">B</text> <text x="235" y="51" fill="#e2e8f0" font-size="13" font-weight="bold">C</text> <text x="72" y="51" fill="#e2e8f0" font-size="13" font-weight="bold">D</text> <text x="160" y="49" text-anchor="middle" fill="#94a3b8" font-size="11">CD = 6 cm</text> <text x="73" y="138" fill="#94a3b8" font-size="11">v = 4 cm</text> <text x="192" y="127" fill="#fbbf24" font-size="12">BD</text> <text x="160" y="20" text-anchor="middle" fill="#94a3b8" font-size="10">S(ABCD) = 32 cm² — rozdíl trojúhelníků?</text></svg>`,
      instruction: `Vyberte správný rozdíl obsahů trojúhelníků ABD a BCD.`,
      choices: [
        {
          label: `\\(4\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Chyba. Znáš obě základny a výšku? Zkontroluj, jestli jsi správně vyjádřil delší základnu ze vzorce pro obsah lichoběžníku.`
        },
        {
          label: `\\(16\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Kritická chyba. Zkontroluj výpočet delší základny AB z obsahu lichoběžníku. Pak spočítej oba obsahy a odečti.`
        },
        {
          label: `\\(8\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(AB = \\frac{2 \\cdot 32}{4} - 6 = 10\\) cm. \\(S_{ABD} = 20\\) cm², \\(S_{BCD} = 12\\) cm². Rozdíl = 8 cm². Protokol ověřen.`
        },
        {
          label: `\\(12\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. 12 cm² je obsah trojúhelníku BCD, ne jejich rozdíl.`
        },
      ],
      hints: [
        `Ze vzorce pro obsah lichoběžníku a známé výšky lze vyjádřit neznámou základnu.`,
        `Úhlopříčka BD rozdělí lichoběžník na dva trojúhelníky se společnou výškou.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_plan_05", regionId: "planimetrie", type: "closed", monsterName: `SIM_03D: Strana z obsahu lichoběžníku`,
      isTraining: true, firewallId: "q_plan_05", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0,
      question: `Lichoběžník má obsah S = 32 cm², výšku v = 4 cm a kratší základnu c = 6 cm. Jaká je délka delší základny a?`,
      formula: `$$S = \\frac{a + c}{2} \\cdot v$$`,
      instruction: `Vyberte správnou délku delší základny a.`,
      steps: [
        {
          trigger: `> Krok 1: Vyjádři a ze vzorce`,
          content: `Ze vzorce \\(S = \\frac{a+c}{2} \\cdot v\\) vyjádříme \\(a\\): nejdřív \\(a + c = \\frac{2S}{v}\\), pak \\(a = \\frac{2S}{v} - c\\).`
        },
        {
          trigger: `> Krok 2: Dosaď čísla`,
          content: `Dosaď do vzorce z Kroku 1: \\(a = \\frac{2 \\cdot 32}{4} - 6\\). Kolik vyjde?`
        },
      ],
      choices: [
        {
          label: `\\(8\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. \\(S/v = 8\\) je průměr základen \\((a+c)/2\\), ne délka \\(a\\). Jak z průměru základen vyjádříš samotné \\(a\\)?`
        },
        {
          label: `\\(10\\text{ cm}\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(a = 2S/v - c = 16 - 6 = 10\\) cm. Teď zkus firewall!`
        },
        {
          label: `\\(12\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Od součtu základen se odečítá kratší základna \\(c\\), ne výška. Zkontroluj, co odečítáš.`
        },
        {
          label: `\\(16\\text{ cm}\\)`,
          value: "D",
          feedback: `Chyba. \\(2S/v\\) je součet obou základen \\(a + c\\), ne samotné \\(a\\). Jak z \\(a + c\\) vyjádříš \\(a\\)?`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_plan_06", regionId: "planimetrie", type: "closed", monsterName: `FW_03E: Dva čtverce — obsah trojúhelníku`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 3, trainingTasks: ["t_plan_06"],
      question: `Dva čtverce sdílejí společný vrchol T a vymezují trojúhelník ABT. Obsahy čtverců jsou 144 cm² a 196 cm². Úhel trojúhelníku ABT ve vrcholu T je pravý, přičemž A a B jsou vnější vrcholy čtverců. Jaký je obsah trojúhelníku ABT?`,
      formula: null,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="47,210 155,210 155,102 47,102" fill="#1a2a3a" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/> <polygon points="155,210 281,210 281,84 155,84" fill="#2a1a3a" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/> <polygon points="47,210 155,84 155,210" fill="#1e3a5f" fill-opacity="0.4" stroke="#00b4d8" stroke-width="2.5"/> <polyline points="147,210 147,202 155,202" fill="none" stroke="#e2e8f0" stroke-width="1.5"/> <text x="33" y="214" fill="#e2e8f0" font-size="13" font-weight="bold">A</text> <text x="140" y="80" fill="#e2e8f0" font-size="13" font-weight="bold">B</text> <text x="159" y="224" fill="#e2e8f0" font-size="13" font-weight="bold">T</text> <text x="101" y="160" text-anchor="middle" fill="#94a3b8" font-size="11">144 cm²</text> <text x="218" y="150" text-anchor="middle" fill="#94a3b8" font-size="11">196 cm²</text> <text x="108" y="195" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">S = ?</text></svg>`,
      instruction: `Vyberte správný obsah trojúhelníku ABT.`,
      choices: [
        {
          label: `\\(S = 84\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Přístup povolen. Strany: \\(a = \\sqrt{144} = 12\\) cm, \\(b = \\sqrt{196} = 14\\) cm; pravý úhel \\(\\Rightarrow S = \\frac{1}{2} \\cdot 12 \\cdot 14 = 84\\) cm².`
        },
        {
          label: `\\(S = 168\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Kritická chyba. \\(168 = 12 \\cdot 14\\) — chybí vydělit 2 ve vzorci \\(S = \\frac{1}{2} \\cdot a \\cdot b\\).`
        },
        {
          label: `\\(S = 48\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Chyba. Strany jsou \\(\\sqrt{144} = 12\\) a \\(\\sqrt{196} = 14\\), ne 12 a 8. Zkontroluj druhé odmocniny.`
        },
        {
          label: `\\(S = 96\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. \\(\\sqrt{196} \\neq 16\\). \\(\\sqrt{196} = 14\\).`
        },
      ],
      hints: [
        `Obsah čtverce se rovná straně na druhou. Jaká je strana čtverce s obsahem 144 cm²? A čtverce s obsahem 196 cm²?`,
        `Pravý úhel v T znamená, že strany čtverců tvoří dvě odvěsny pravouhlého trojúhelníku.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_plan_06", regionId: "planimetrie", type: "closed", monsterName: `SIM_03E: Pravouhlý trojúhelník — obsah`,
      isTraining: true, firewallId: "q_plan_06", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0,
      question: `Pravouhlý trojúhelník má odvěsny a = 12 cm a b = 14 cm. Jaký je obsah trojúhelníku?`,
      formula: `$$S = \\frac{1}{2} \\cdot a \\cdot b$$`,
      instruction: `Vyberte správný obsah pravouhlého trojúhelníku.`,
      steps: [
        {
          trigger: `> Krok 1: Výška pravouhlého trojúhelníku`,
          content: `V pravouhlém trojúhelníku jsou obě <b>odvěsny na sebe kolmé</b>. Jedna odvěsna = základna, druhá = výška.`
        },
        {
          trigger: `> Krok 2: Obsah`,
          content: `\\(S = \\frac{1}{2} \\cdot a \\cdot b = \\frac{1}{2} \\cdot 12 \\cdot 14\\). Vynásob a vyber správnou odpověď.`
        },
      ],
      choices: [
        {
          label: `\\(168\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Kritická chyba. \\(168 = 12 \\cdot 14\\) — chybí \\(\\frac{1}{2}\\) ve vzorci pro obsah trojúhelníku.`
        },
        {
          label: `\\(42\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Chyba. Obsah trojúhelníku se dělí dvěma, ne čtyřmi. Dosaď znovu do \\(S = \\frac{1}{2} \\cdot a \\cdot b\\).`
        },
        {
          label: `\\(96\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Zkontroluj násobení: \\(\\frac{1}{2} \\cdot 12 \\cdot 14\\). Výsledek není 96.`
        },
        {
          label: `\\(84\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(S = \\frac{1}{2} \\cdot 12 \\cdot 14 = 84\\) cm². Protokol ověřen.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_plan_07", regionId: "planimetrie", type: "closed", monsterName: `FW_03F: Složený pětiúhelník`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 3, trainingTasks: ["t_plan_07"],
      question: `Pětiúhelník KLMNO je složen z rovnoběžníku LMNO (\\(|LM| = |NO| = 22\\) cm, \\(|MN| = |OL| = 15\\) cm, \\(|\\sphericalangle LMN| = 115°\\)) a rovnoramenného trojúhelníku KLO se základnou KL, kde ramena \\(|OK| = |OL| = 15\\) cm. Platí \\(|\\sphericalangle KLM| = 130°\\). Jaký je obvod pětiúhelníku KLMNO? Výsledek zaokrouhlete na celé cm.`,
      formula: null,
      diagram: `<svg viewBox="0 0 380 200" style="width:100%;max-width:380px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="17,73 90,160 288,160 345,38 147,38" fill="none" stroke="#00b4d8" stroke-width="2.5"/> <line x1="90" y1="160" x2="147" y2="38" stroke="#00b4d8" stroke-width="1.5" stroke-dasharray="6,4"/> <text x="4" y="70" fill="#e2e8f0" font-size="13" font-weight="bold">K</text> <text x="77" y="178" fill="#e2e8f0" font-size="13" font-weight="bold">L</text> <text x="290" y="178" fill="#e2e8f0" font-size="13" font-weight="bold">M</text> <text x="349" y="35" fill="#e2e8f0" font-size="13" font-weight="bold">N</text> <text x="136" y="28" fill="#e2e8f0" font-size="13" font-weight="bold">O</text> <text x="103" y="149" fill="#fbbf24" font-size="10">130°</text> <text x="252" y="149" fill="#fbbf24" font-size="10">115°</text> <text x="185" y="178" text-anchor="middle" fill="#94a3b8" font-size="10">22 cm</text> <text x="323" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">15 cm</text> <text x="100" y="93" fill="#94a3b8" font-size="10">15 cm</text> </svg>`,
      instruction: `Vyberte správný obvod pětiúhelníku.`,
      choices: [
        {
          label: `\\(80\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. Ve vzorci \\(KL = 2 \\cdot |OL| \\cdot \\sin(25°)\\) nesmíš zapomenout na faktor 2 — jinak dostaneš jen polovinu základny.`
        },
        {
          label: `\\(87\\text{ cm}\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(KL = 2 \\cdot 15 \\cdot \\sin(25°) \\approx 12{,}7\\) cm; obvod \\(= 2 \\cdot 22 + 2 \\cdot 15 + 12{,}7 \\approx 87\\) cm.`
        },
        {
          label: `\\(89\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba. Základna KL není rovna ramenu trojúhelníku — musíš ji dopočítat z úhlů, nestačí dosadit 15 cm.`
        },
        {
          label: `\\(90\\text{ cm}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Půlíš úhel u vrcholu \\(\\angle KOL = 50°\\), ne úhel u základny \\(\\angle KLO = 65°\\). Správně: \\(\\sin(50°/2) = \\sin(25°)\\).`
        },
      ],
      hints: [
        `Rovnoběžník má protější strany stejně dlouhé a vedlejší úhly se doplňují do 180°. Které strany pětiúhelníku jsou zároveň stranami rovnoběžníku?`,
        `Úhel \\(\\angle KLM\\) je složen ze dvou dílčích úhlů. Jeden z nich leží v rovnoběžníku — a vedlejší úhly v rovnoběžníku se doplňují do 180°.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_plan_07", regionId: "planimetrie", type: "closed", monsterName: `SIM_03F: Základna rovnoramenného trojúhelníku`,
      isTraining: true, firewallId: "q_plan_07", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0, showDiagramImmediately: true,
      question: `Rovnoramenný trojúhelník PQR má ramena \\(|PQ| = |PR| = 10\\) cm a úhel u vrcholu \\(|\\sphericalangle QPR| = 80°\\). Jaká je délka základny \\(|QR|\\)? Výsledek zaokrouhli na celé cm.`,
      formula: null,
      diagram: `<svg viewBox="0 0 290 165" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><polygon points="145,22 68,122 222,122" fill="#1e3a5f" fill-opacity="0.35" stroke="#00b4d8" stroke-width="2"/><line x1="145" y1="22" x2="145" y2="122" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 126,49 A 30,30 0 0,1 164,49" fill="none" stroke="#fbbf24" stroke-width="1.5"/><text x="145" y="63" text-anchor="middle" fill="#fbbf24" font-size="10">80°</text><text x="138" y="18" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">P</text><text x="55" y="138" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Q</text><text x="235" y="138" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">R</text><text x="97" y="73" text-anchor="middle" fill="#94a3b8" font-size="11">10 cm</text><text x="193" y="73" text-anchor="middle" fill="#94a3b8" font-size="11">10 cm</text><text x="145" y="150" text-anchor="middle" fill="#fbbf24" font-size="11">|QR| = ?</text></svg>`,
      instruction: `Vyberte správnou délku základny.`,
      steps: [
        {
          trigger: `> Krok 1: Výška na základnu`,
          content: `Spusť výšku z vrcholu P na základnu QR. Rozdělí trojúhelník na dva shodné pravoúhlé trojúhelníky a zároveň rozpůlí úhel u vrcholu. Jaký je poloviční úhel?`
        },
        {
          trigger: `> Krok 2: Polovina základny`,
          content: `Polovina základny \\(= |PQ| \\cdot \\sin(40°) = 10 \\cdot 0{,}643 \\approx ?\\) cm. Celá základna \\(|QR| = 2 \\cdot ?\\) Zaokrouhli na celé cm.`
        },
      ],
      choices: [
        {
          label: `\\(|QR| = 13\\text{ cm}\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(|QR| = 2 \\cdot 10 \\cdot \\sin(40°) \\approx 12{,}9 \\doteq 13\\) cm. Firewall odemčen.`
        },
        {
          label: `\\(|QR| = 10\\text{ cm}\\)`,
          value: "B",
          feedback: `Chyba. Základna rovnoramenného trojúhelníku se nerovná rameni — záleží na úhlu u vrcholu. Spusť výšku a dopočítej.`
        },
        {
          label: `\\(|QR| = 15\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Použil jsi \\(\\sin(50°)\\) místo \\(\\sin(40°)\\) — výška půlí úhel u vrcholu (80° → 40°), ne úhel u základny.`
        },
        {
          label: `\\(|QR| = 6\\text{ cm}\\)`,
          value: "D",
          feedback: `Kritická chyba. Spočítal jsi pouze polovinu základny (\\(\\approx 6{,}4\\) cm). Výsledek ještě zdvoj — výška rozdělí základnu na dvě stejné části.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_plan_08", regionId: "planimetrie", type: "closed", monsterName: `FW_03G: Čtverec a dva půlkruhy — obsah`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 3, trainingTasks: ["t_plan_08"],
      question: `Čtverec o straně 6 cm má na dvou protilehlých stranách sestrojeny půlkruhy o poloměru 3 cm směrem dovnitř čtverce. Oba půlkruhy se dotýkají ve středu čtverce. Jaký je obsah šedé oblasti (část čtverce mimo oba půlkruhy)?`,
      formula: null,
      diagram: `<svg viewBox="0 0 290 255" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><path fill-rule="evenodd" fill="#1e4a80" d="M 55,25 L 235,25 L 235,205 L 55,205 Z M 55,25 A 90,90 0 0,0 235,25 Z M 55,205 A 90,90 0 0,1 235,205 Z"/><rect x="55" y="25" width="180" height="180" fill="none" stroke="#00b4d8" stroke-width="2"/><path d="M 55,25 A 90,90 0 0,0 235,25" fill="none" stroke="#00b4d8" stroke-width="2"/><path d="M 55,205 A 90,90 0 0,1 235,205" fill="none" stroke="#00b4d8" stroke-width="2"/><text x="145" y="220" text-anchor="middle" fill="#94a3b8" font-size="11">6 cm</text><text x="249" y="120" fill="#94a3b8" font-size="11">6 cm</text><line x1="145" y1="25" x2="145" y2="115" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/><text x="152" y="78" fill="#fbbf24" font-size="10">r = 3 cm</text><line x1="145" y1="205" x2="145" y2="115" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/><text x="152" y="168" fill="#fbbf24" font-size="10">r = 3 cm</text><circle cx="145" cy="115" r="3" fill="#fbbf24"/><text x="145" y="247" text-anchor="middle" fill="#94a3b8" font-size="9">Čtverec + dva protilehlé půlkruhy</text></svg>`,
      instruction: `Vyberte správný obsah šedé oblasti.`,
      choices: [
        {
          label: `\\((36 - 9\\pi)\\) cm²`,
          value: "A",
          feedback: `Přístup povolen. \\(S = 36 - 2 \\cdot \\frac{1}{2}\\pi \\cdot 9 = 36 - 9\\pi \\approx 7{,}7\\) cm². Protokol ověřen.`
        },
        {
          label: `\\(9\\pi\\) cm²`,
          value: "B",
          feedback: `Kritická chyba. \\(9\\pi\\) je obsah obou půlkruhů — šedá oblast je to, co ve čtverci ZBYDE po jejich odebrání: \\(36 - 9\\pi\\).`
        },
        {
          label: `\\(\\left(36 - \\dfrac{9}{2}\\pi\\right)\\) cm²`,
          value: "C",
          feedback: `Nekompletní. Odečetl jsi jen jeden půlkruh \\(\\left(\\frac{9}{2}\\pi\\right)\\), ale v obrázku jsou dva. Obsah obou: \\(2 \\cdot \\frac{1}{2}\\pi \\cdot 9 = 9\\pi\\).`
        },
        {
          label: `\\(27\\) cm²`,
          value: "D",
          feedback: `Chyba syntaxe. \\(36 - 9 = 27\\) ignoruje \\(\\pi\\). Obsah půlkruhu je \\(\\frac{1}{2}\\pi r^2 = \\frac{9\\pi}{2}\\), ne \\(r^2 = 9\\).`
        },
      ],
      hints: [
        `Obsah půlkruhu: \\(\\frac{1}{2}\\pi r^2\\). Kolik půlkruhů vidíš na obrázku?`,
        `Šedá oblast = obsah čtverce − obsah všech půlkruhů uvnitř.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },

    {
      id: "t_plan_08", regionId: "planimetrie", type: "closed", monsterName: `SIM_03G: Čtverec a půlkruh — obsah`,
      isTraining: true, firewallId: "q_plan_08", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0, showDiagramImmediately: true,
      question: `Čtverec o straně 4 cm. Na jedné straně je sestrojen půlkruh o poloměru 2 cm směrem dovnitř čtverce. Vypočtěte obsah oblasti čtverce mimo půlkruh.`,
      formula: null,
      diagram: `<svg viewBox="0 0 260 220" style="width:100%;max-width:280px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><path fill-rule="evenodd" fill="#1e4a80" d="M 50,30 L 210,30 L 210,190 L 50,190 Z M 50,30 A 80,80 0 0,0 210,30 Z"/><rect x="50" y="30" width="160" height="160" fill="none" stroke="#00b4d8" stroke-width="2"/><path d="M 50,30 A 80,80 0 0,0 210,30" fill="none" stroke="#00b4d8" stroke-width="2"/><line x1="130" y1="30" x2="130" y2="110" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/><circle cx="130" cy="30" r="2.5" fill="#fbbf24"/><text x="138" y="75" fill="#fbbf24" font-size="11">r = 2 cm</text><text x="130" y="210" text-anchor="middle" fill="#94a3b8" font-size="11">4 cm</text><text x="228" y="113" fill="#94a3b8" font-size="11">4 cm</text><text x="130" y="158" text-anchor="middle" fill="#fbbf24" font-size="12">S = ?</text></svg>`,
      instruction: `Vyberte správný obsah šedé oblasti.`,
      steps: [
        {
          trigger: `> Krok 1: Jaký je obsah půlkruhu?`,
          content: `Průměr půlkruhu je roven straně čtverce. Urči poloměr a dosaď do vzorce \\(\\frac{1}{2}\\pi r^2\\).`
        },
        {
          trigger: `> Krok 2: Co odečteš od čtverce?`,
          content: `Šedá oblast = obsah čtverce minus obsah půlkruhu.`
        },
      ],
      choices: [
        {
          label: `\\((16 - 2\\pi)\\) cm²`,
          value: "A",
          feedback: `Logika potvrzena. \\(16 - 2\\pi \\approx 9{,}7\\) cm². Teď zkus firewall — tam jsou dva půlkruhy.`
        },
        {
          label: `\\((16 - 4\\pi)\\) cm²`,
          value: "B",
          feedback: `Chyba. \\(4\\pi\\) je obsah celého kruhu. Máme jen PŮLkruh — obsah je \\(\\frac{1}{2}\\pi r^2 = 2\\pi\\).`
        },
        {
          label: `\\(2\\pi\\) cm²`,
          value: "C",
          feedback: `Přehozen výstup. \\(2\\pi\\) je obsah půlkruhu — šedá oblast je to, co po něm ve čtverci zbyde: \\(16 - 2\\pi\\).`
        },
        {
          label: `\\(12\\) cm²`,
          value: "D",
          feedback: `Chyba syntaxe. \\(16 - 4 = 12\\) ignoruje \\(\\pi\\). Obsah půlkruhu je \\(\\frac{1}{2}\\pi r^2 = 2\\pi \\approx 6{,}3\\), ne \\(r^2 = 4\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    {
      id: "q_plan_09", regionId: "planimetrie", type: "closed", monsterName: `FW_03H: Čtverec dělen na lichoběžníky`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 3, trainingTasks: ["t_plan_09"],
      question: `Čtverec ABCD o straně 12 cm je úsečkou XY rozdělen na dva lichoběžníky — modrý AXYD a fialový XBCY. Bod X leží na straně AB tak, že |AX| : |XB| = 2 : 1. Bod Y leží na straně DC tak, že |DY| : |YC| = 1 : 3. V jakém poměru jsou délky základen lichoběžníku AXYD?`,
      formula: null,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="203,240 290,240 290,25 95,25" fill="#4c1d6e" fill-opacity="0.55" stroke="#00b4d8" stroke-width="2"/> <polygon points="30,240 203,240 95,25 30,25" fill="#0e3a5c" fill-opacity="0.7" stroke="#00b4d8" stroke-width="2"/> <line x1="203" y1="240" x2="95" y2="25" stroke="#fbbf24" stroke-width="2.5"/> <text x="16" y="244" fill="#e2e8f0" font-size="13" font-weight="bold">A</text> <text x="293" y="244" fill="#e2e8f0" font-size="13" font-weight="bold">B</text> <text x="293" y="22" fill="#e2e8f0" font-size="13" font-weight="bold">C</text> <text x="16" y="22" fill="#e2e8f0" font-size="13" font-weight="bold">D</text> <text x="203" y="257" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">X</text> <text x="81" y="22" fill="#e2e8f0" font-size="13" font-weight="bold">Y</text> <text x="116" y="252" text-anchor="middle" fill="#94a3b8" font-size="10">2 : 1</text> <text x="62" y="18" text-anchor="middle" fill="#94a3b8" font-size="10">1 : 3</text> <text x="8" y="136" fill="#94a3b8" font-size="10">12 cm</text> <text x="160" y="258" text-anchor="middle" fill="#94a3b8" font-size="10">12 cm</text> <text x="82" y="148" text-anchor="middle" fill="#60c8e8" font-size="12">AXYD</text> <text x="242" y="140" text-anchor="middle" fill="#c084fc" font-size="12">XBCY</text> <text x="160" y="14" text-anchor="middle" fill="#94a3b8" font-size="10">Poměr základen lichoběžníku AXYD = ?</text></svg>`,
      instruction: `Vyberte správný poměr základen lichoběžníku AXYD.`,
      choices: [
        {
          label: `\\(2:1\\)`,
          value: "A",
          feedback: `Chyba. To je poměr |AX|:|XB| ze zadání, ne poměr základen lichoběžníku AXYD. Základny jsou úsečky AX (na AB) a DY (na DC) — spočítej jejich délky z dané strany 12 cm.`
        },
        {
          label: `\\(4:1\\)`,
          value: "B",
          feedback: `Kritická chyba. Zkontroluj výpočet |DY|. Poměr |DY|:|YC| = 1:3, takže |DY| = 12 · \\(\\frac{1}{1+3}\\). Kolik vyjde?`
        },
        {
          label: `\\(8:3\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(|AX| = 12 \\cdot \\frac{2}{3} = 8\\) cm; \\(|DY| = 12 \\cdot \\frac{1}{4} = 3\\) cm. Poměr základen \\(AXYD = 8:3\\).`
        },
        {
          label: `\\(3:1\\)`,
          value: "D",
          feedback: `Chyba syntaxe. To je poměr |DY|:|YC| = 1:3 převrácený. Spočítej délky AX a DY z daných poměrů a strany 12 cm.`
        },
      ],
      hints: [
        `Poměr \\(|AX| : |XB| = 2:1\\) říká, kolik dílů z celkové strany AB připadá na úsečku AX. Stejně postupuj pro DY.`,
        `Základny lichoběžníku AXYD jsou úsečky AX a DY. Vyjádři jejich délky a urči poměr \\(|AX|:|DY|\\).`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_plan_09", regionId: "planimetrie", type: "closed", monsterName: `SIM_03H: Dělení úsečky v poměru`,
      isTraining: true, firewallId: "q_plan_09", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0, showDiagramImmediately: true,
      question: `Bod X dělí úsečku AB délky 18 cm v poměru |AX| : |XB| = 2 : 1. Jaká je délka |AX|?`,
      formula: null,
      diagram: `<svg viewBox="0 0 290 100" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="30" y1="50" x2="260" y2="50" stroke="#00b4d8" stroke-width="2.5"/><circle cx="30" cy="50" r="4" fill="#00b4d8"/><circle cx="183" cy="50" r="4" fill="#fbbf24"/><circle cx="260" cy="50" r="4" fill="#00b4d8"/><text x="27" y="74" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">A</text><text x="183" y="74" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">X</text><text x="263" y="74" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">B</text><text x="106" y="38" text-anchor="middle" fill="#94a3b8" font-size="11">2 díly (= |AX|?)</text><text x="221" y="38" text-anchor="middle" fill="#94a3b8" font-size="11">1 díl</text><line x1="30" y1="32" x2="183" y2="32" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr)"/><line x1="183" y1="32" x2="260" y2="32" stroke="#94a3b8" stroke-width="1"/><text x="145" y="93" text-anchor="middle" fill="#94a3b8" font-size="10">|AB| = 18 cm, poměr 2:1</text></svg>`,
      instruction: `Vyberte správnou délku AX.`,
      steps: [
        {
          trigger: `> Krok 1: Kolik dílů celkem?`,
          content: `Poměr 2:1 znamená \\(2+1 = 3\\) díly celkem. Jaká je délka jednoho dílu?`
        },
        {
          trigger: `> Krok 2: Délka AX`,
          content: `AX zabírá 2 díly. Jaká je délka \\(|AX|\\)?`
        },
      ],
      choices: [
        {
          label: `\\(|AX| = 9\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. 9 cm by platilo pro poměr 1:1 (střed). Poměr 2:1 znamená, že AX zabírá dvě třetiny celé úsečky.`
        },
        {
          label: `\\(|AX| = 12\\text{ cm}\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(|AX| = 18 \\cdot \\frac{2}{2+1} = 18 \\cdot \\frac{2}{3} = 12\\) cm.`
        },
        {
          label: `\\(|AX| = 6\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. 6 cm je délka jednoho dílu, ale AX zabírá dva díly. Kolik je \\(2 \\cdot 6\\)?`
        },
        {
          label: `\\(|AX| = 3\\text{ cm}\\)`,
          value: "D",
          feedback: `Kritická chyba. Špatný výpočet délky dílu. Celá úsečka AB = 18 cm se dělí na 3 díly — kolik měří jeden díl?`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_plan_10", regionId: "planimetrie", type: "closed", monsterName: `FW_03I: Sinová věta — délka strany`,
      visual_color: "#00b4d8", visual_symbol: `△`, points: 4, trainingTasks: ["t_plan_10"],
      question: `V trojúhelníku ABC platí \\(|BC| = 4\\sqrt{2}\\) cm, \\(|\\angle BAC| = 45°\\), \\(|\\angle ACB| = 30°\\). Jaká je délka strany \\(|AB|\\)?`,
      formula: null,
      diagram: `<svg viewBox="0 0 320 260" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <polygon points="40,225 160,225 225,58" fill="#1e3a5f" fill-opacity="0.35" stroke="#00b4d8" stroke-width="2.5"/> <path d="M 54,225 A 13,13 0 0 0 50,216" fill="none" stroke="#fbbf24" stroke-width="1.5"/> <path d="M 216,76 A 18,18 0 0 1 207,65" fill="none" stroke="#fbbf24" stroke-width="1.5"/> <text x="24" y="240" fill="#e2e8f0" font-size="13" font-weight="bold">A</text> <text x="163" y="240" fill="#e2e8f0" font-size="13" font-weight="bold">B</text> <text x="228" y="54" fill="#e2e8f0" font-size="13" font-weight="bold">C</text> <text x="55" y="215" fill="#fbbf24" font-size="11">45°</text> <text x="196" y="78" fill="#fbbf24" font-size="11">30°</text> <text x="200" y="155" fill="#94a3b8" font-size="11">BC = 4\\(\\sqrt{2}\\) cm</text> <text x="100" y="243" text-anchor="middle" fill="#fbbf24" font-size="12">AB = ?</text> <text x="160" y="14" text-anchor="middle" fill="#94a3b8" font-size="10">Sinová věta: \\(a/\\sin A = b/\\sin B = c/\\sin C\\)</text></svg>`,
      instruction: `Vyberte správnou délku strany AB.`,
      choices: [
        {
          label: `\\(2\\sqrt{2}\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. \\(2\\sqrt{2} = |BC| \\cdot \\sin(\\angle ACB) = 4\\sqrt{2} \\cdot \\frac{1}{2}\\) — chybí ti dělení \\(\\sin(\\angle BAC)\\). Správně: \\(|AB| = |BC| \\cdot \\frac{\\sin(\\angle ACB)}{\\sin(\\angle BAC)}\\).`
        },
        {
          label: `\\(4\\text{ cm}\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(\\frac{|AB|}{\\sin 30°} = \\frac{4\\sqrt{2}}{\\sin 45°} = \\frac{4\\sqrt{2}}{\\frac{\\sqrt{2}}{2}} = 8\\); \\(|AB| = 8 \\cdot \\frac{1}{2} = 4\\) cm. Protokol ověřen.`
        },
        {
          label: `\\(4\\sqrt{2}\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(4\\sqrt{2}\\) cm je délka strany BC, ne AB. Sinová věta dává různé délky pro různé strany: \\(|AB|/\\sin(\\angle ACB) = |BC|/\\sin(\\angle BAC)\\).`
        },
        {
          label: `\\(8\\text{ cm}\\)`,
          value: "D",
          feedback: `Chyba. Spočítal jsi poměr \\(\\frac{|BC|}{\\sin(\\angle BAC)} = 8\\), ale to je hodnota \\(\\frac{|AB|}{\\sin(\\angle ACB)}\\). Ještě vynásob \\(\\sin(30°) = \\frac{1}{2}\\): \\(|AB| = 4\\) cm.`
        },
      ],
      hints: [
        `Sinová věta: \\(\\frac{|AB|}{\\sin(\\angle ACB)} = \\frac{|BC|}{\\sin(\\angle BAC)}\\). Jakou hodnotu mají \\(\\sin(45°)\\) a \\(\\sin(30°)\\)?`,
        `Zjisti hodnoty \\(\\sin(45°)\\) a \\(\\sin(30°)\\) a dosaď do sinové věty.`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },

    {
      id: "t_plan_10", regionId: "planimetrie", type: "closed", monsterName: `SIM_03I: Sinová věta — základní použití`,
      isTraining: true, firewallId: "q_plan_10", visual_color: "#2ecc8a", visual_symbol: `△`, points: 0,
      question: `V trojúhelníku ABC platí \\(|BC| = 5\\) cm, \\(|\\angle BAC| = 30°\\), \\(|\\angle ACB| = 90°\\). Jaká je délka strany \\(|AB|\\)?`,
      formula: `$$\\frac{|AB|}{\\sin(\\angle ACB)} = \\frac{|BC|}{\\sin(\\angle BAC)}$$`,
      instruction: `Vyberte správnou délku strany AB.`,
      steps: [
        {
          trigger: `> Krok 1: Identifikuj strany a protilehlé úhly`,
          content: `Strana AB leží naproti úhlu ACB (= 90°). Strana BC leží naproti úhlu BAC (= 30°). Dosaď do sinové věty.`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `Ze sinové věty plyne \\(\\frac{|AB|}{\\sin 90°} = \\frac{5}{\\sin 30°}\\). Dosaď hodnoty sinů a vyřeš pro \\(|AB|\\).`
        },
      ],
      choices: [
        {
          label: `\\(|AB| = 2{,}5\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. \\(2{,}5 = 5 \\cdot \\sin(30°)\\) — násobíš sinusem místo dělení. V sinové větě stranu dělíš sinusem protilehlého úhlu, ne násobíš.`
        },
        {
          label: `\\(|AB| = 5\\text{ cm}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. 5 cm je délka BC, ne AB. Strany naproti různým úhlům mají různé délky — dosaď do sinové věty.`
        },
        {
          label: `\\(|AB| = 5\\sqrt{3}\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba. \\(5\\sqrt{3}\\) by nastalo při záměně stran. Zkontroluj: která strana leží naproti kterému úhlu? AB je naproti úhlu ACB.`
        },
        {
          label: `\\(|AB| = 10\\text{ cm}\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(\\frac{|AB|}{1} = \\frac{5}{1/2} = 10\\) \\(\\Rightarrow\\) \\(|AB| = 10\\) cm. Teď zvládneš i firewall s úhlem 45° a 30°!`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },


    // ==========================================
    // STEREOMETRIE — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_ster_01", regionId: "stereometrie", type: "closed", monsterName: `FW_04A: Koule - objem a průřez`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_01"],
      question: `Objem kulové nádrže (v dm³) je numericky 12× větší než obsah průřezu, který prochází středem koule (v dm²). Určete poloměr koule.`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 220" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <circle cx="155" cy="115" r="82" fill="#1a2040" stroke="#a78bfa" stroke-width="2"/> <ellipse cx="155" cy="115" rx="82" ry="20" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.8"/> <line x1="155" y1="115" x2="237" y2="115" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,3"/> <circle cx="155" cy="115" r="3" fill="#e2e8f0"/> <text x="199" y="108" fill="#94a3b8" font-size="13" font-style="italic">r</text> <text x="155" y="205" text-anchor="middle" fill="#94a3b8" font-size="11">V = 12 · S_průřezu středem</text> </svg>`,
      instruction: `Vyberte správný poloměr.`,
      choices: [
        {
          label: `\\(r = 9\\text{ dm}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\frac{4}{3}r = 12 \\Rightarrow r = 9\\) dm.`
        },
        {
          label: `\\(r = 4\\text{ dm}\\)`,
          value: "B",
          feedback: `Chyba. Při krácení rovnice jsi pravděpodobně ztratil faktor — zkontroluj, co zůstane po vydělení \\(\\pi r^2\\).`
        },
        {
          label: `\\(r = 6\\text{ dm}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Rovnici je potřeba zjednodušit — hledej společný faktor na obou stranách.`
        },
        {
          label: `\\(r = 12\\text{ dm}\\)`,
          value: "D",
          feedback: `Kritická chyba. Zapomněl jsi na faktor \\(\\frac{4}{3}\\) u objemu koule.`
        },
      ],
      hints: [
        `Jaký je vzorec pro objem koule a jaký pro obsah kruhu? Sestav z nich rovnici.`,
        `Obě strany rovnice obsahují \\(\\pi r^2\\). Co se stane, když tím vydělíš?`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_ster_01", regionId: "stereometrie", type: "closed", monsterName: `SIM_04A: Vzorce pro kouli`,
      isTraining: true, firewallId: "q_ster_01", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Objem koule (v cm³) je numericky 4× větší než obsah průřezu středem (v cm²). Urči poloměr koule.`,
      formula: `$$\\frac{4}{3}\\pi r^3 = 4\\pi r^2$$`,
      instruction: `Vyberte správný vzorec.`,
      steps: [
        {
          trigger: `> Krok 1: Sestav rovnici`,
          content: `Objem koule: \\(V = \\frac{4}{3}\\pi r^3\\). Průřez středem je kruh: \\(S = \\pi r^2\\). Sestav rovnici z podmínky \\(V = 4S\\).`
        },
        {
          trigger: `> Krok 2: Vyřeš r`,
          content: `Vydělíme \\(\\pi r^2\\) (kde \\(r \\neq 0\\)): \\(\\frac{4}{3}r = 4\\). Vyřeš tuto rovnici pro \\(r\\).`
        },
      ],
      choices: [
        {
          label: `\\(r = 1\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba. Dosadil jsi nesprávnou hodnotu — ověř: \\(\\frac{4}{3}\\cdot1 = \\frac{4}{3} \\neq 4\\).`
        },
        {
          label: `\\(r = 2\\text{ cm}\\)`,
          value: "B",
          feedback: `Chyba. \\(\\frac{4}{3}\\cdot2 = \\frac{8}{3} \\neq 4\\). Zkus dosazení znovu — jaké \\(r\\) splní podmínku?`
        },
        {
          label: `\\(r = 3\\text{ cm}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(\\frac{4}{3}\\pi r^3 = 4\\pi r^2 \\Rightarrow \\frac{4}{3}r = 4 \\Rightarrow r = 3\\) cm.`
        },
        {
          label: `\\(r = 4\\text{ cm}\\)`,
          value: "D",
          feedback: `Chyba. Vytkl jsi \\(\\pi r^2\\), ale zapomněl na faktor \\(\\frac{4}{3}\\) — výsledkem je \\(\\frac{4}{3}r = 4\\), ne \\(r = 4\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_ster_02", regionId: "stereometrie", type: "closed", monsterName: `FW_04B: Válec vepsaný do krychle — povrch`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_02"],
      question: `Do krychle je vložen válec. Válec se dotýká každé stěny krychle. Objem válce je \\(250\\pi\\) cm³. Jaký je povrch krychle?`,
      formula: null,
      diagram: null,
      instruction: `Vyberte správný povrch krychle.`,
      choices: [
        {
          label: `\\(150\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Do vzorce pro povrch krychle patří strana \\(a\\), ne poloměr válce.`
        },
        {
          label: `\\(400\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Chyba. Krychle má 6 stejných stěn — nejen 4 boční. Vzorec pro povrch je \\(S = 6a^2\\).`
        },
        {
          label: `\\(500\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Nekompletní. Přepočítej stěny — krychle jich má 6, ne 5.`
        },
        {
          label: `\\(600\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(V = \\frac{\\pi a^3}{4} = 250\\pi \\Rightarrow a^3 = 1\\,000 \\Rightarrow a = 10\\) cm; \\(S = 6 \\cdot 100 = 600\\) cm².`
        },
      ],
      hints: [
        `Jak spolu souvisí poloměr válce a strana krychle, když se válec dotýká všech stěn?`,
        `Kolik neznámých vlastně máš? Poloměr i výška válce závisí na straně \\(a\\).`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_ster_02", regionId: "stereometrie", type: "closed", monsterName: `SIM_04B: Válec vepsaný do krychle — objem`,
      isTraining: true, firewallId: "q_ster_02", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      showDiagramImmediately: true,
      question: `Válec je vepsán do krychle (dotýká se všech stěn). Strana krychle je \\(a = 4\\) cm. Jaký je objem válce?`,
      formula: null,
      diagram: `<svg viewBox="0 0 220 195" style="width:100%;max-width:230px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><rect x="30" y="20" width="160" height="160" fill="#0d1f3c" stroke="#a78bfa" stroke-width="2"/><circle cx="110" cy="100" r="80" fill="#162d55" stroke="#00b4d8" stroke-width="1.5"/><line x1="110" y1="100" x2="190" y2="100" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,2"/><circle cx="110" cy="100" r="2.5" fill="#fbbf24"/><text x="150" y="93" fill="#fbbf24" font-size="11">r = ?</text><text x="110" y="190" text-anchor="middle" fill="#94a3b8" font-size="11">a = 4 cm</text><text x="14" y="104" fill="#94a3b8" font-size="11">a</text><text x="110" y="14" text-anchor="middle" fill="#94a3b8" font-size="9">Pohled shora — kruh vepsán do čtverce</text></svg>`,
      instruction: `Vyberte správný objem válce.`,
      steps: [
        {
          trigger: `> Krok 1: Poloměr a výška válce`,
          content: `Válec se dotýká všech 6 stěn krychle. Jak se poloměr \\(r\\) a výška \\(h\\) vztahují ke straně \\(a\\)?`
        },
        {
          trigger: `> Krok 2: Dosaď do vzorce`,
          content: `\\(V = \\pi r^2 h\\). Vyjádři \\(r\\) a \\(h\\) pomocí \\(a\\) z kroku 1 a dosaď.`
        },
      ],
      choices: [
        {
          label: `\\(8\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Chyba. Zkontroluj, co je výška válce a co poloměr — zaměnil jsi je.`
        },
        {
          label: `\\(16\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(r = 2\\) cm, \\(h = 4\\) cm; \\(V = \\pi \\cdot 4 \\cdot 4 = 16\\pi\\) cm³. Teď zkus firewall — tam je objem dán a ty hledáš povrch.`
        },
        {
          label: `\\(32\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Rozmysli si, jak se válec dotýká krychle — který rozměr odpovídá poloměru a který výšce?`
        },
        {
          label: `\\(64\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Kritická chyba. Válec se dotýká stěn — jeho průměr odpovídá straně krychle, ne poloměr.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_ster_03", regionId: "stereometrie", type: "closed", monsterName: `FW_04C: Kvádr rozříznutý na hranol`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_03"],
      question: `Kvádr s rozměry podstavy 6 cm × 8 cm a výškou 5 cm byl jedním diagonálním řezem rozříznut na dva shodné trojboké hranoly. Jaký je povrch jednoho trojbokého hranolu?`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 215" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <!-- Hypotenuse rectangle B,C,C',B' (diagonal face) --> <polygon points="186,180 50,78 105,46 241,148" fill="#16213a" fill-opacity="0.5" stroke="#a78bfa" stroke-width="1.5"/> <!-- Front right triangle A,B,C --> <polygon points="50,180 186,180 50,78" fill="#1a2545" fill-opacity="0.7" stroke="#a78bfa" stroke-width="2"/> <!-- Hidden depth edges (dashed) --> <line x1="50" y1="180" x2="105" y2="148" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="4,3"/> <line x1="105" y1="148" x2="241" y2="148" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="4,3"/> <line x1="105" y1="46" x2="105" y2="148" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="4,3"/> <!-- Visible depth edges --> <line x1="186" y1="180" x2="241" y2="148" stroke="#a78bfa" stroke-width="1.8"/> <line x1="50" y1="78" x2="105" y2="46" stroke="#a78bfa" stroke-width="1.8"/> <!-- Right angle marker at A --> <polyline points="58,180 58,172 50,172" fill="none" stroke="#94a3b8" stroke-width="1.2"/> <!-- Labels --> <text x="118" y="198" text-anchor="middle" fill="#94a3b8" font-size="11">8 cm</text> <text x="33" y="132" fill="#94a3b8" font-size="11">6 cm</text> <text x="248" y="168" fill="#94a3b8" font-size="11">5 cm</text> <text x="145" y="113" text-anchor="middle" fill="#94a3b8" font-size="11">10 cm</text> <!-- Vertex labels --> <text x="34" y="194" fill="#e2e8f0" font-size="12" font-weight="bold">A</text> <text x="188" y="194" fill="#e2e8f0" font-size="12" font-weight="bold">B</text> <text x="34" y="75" fill="#e2e8f0" font-size="12" font-weight="bold">C</text> <!-- Question --> <text x="155" y="210" text-anchor="middle" fill="#e2e8f0" font-size="11">Povrch trojbokého hranolu = ?</text> <text x="155" y="14" text-anchor="middle" fill="#94a3b8" font-size="10">Trojboký hranol — 5 stěn</text> </svg>`,
      instruction: `Vyberte správný povrch.`,
      choices: [
        {
          label: `\\(144\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Chyba. Zapomněl jsi na jednu boční stěnu — řez kvádrem vytvoří obdélník s přeponou trojúhelníku.`
        },
        {
          label: `\\(168\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Přístup povolen. \\(2\\cdot24 + 30 + 40 + 50 = 168\\) cm².`
        },
        {
          label: `\\(152\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Zkontroluj délku přepony pravoúhlého trojúhelníku — Pythagorova věta.`
        },
        {
          label: `\\(196\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Kritická chyba. Nepočítej celý povrch kvádru - hranol má jen 5 stěn, ne 6.`
        },
      ],
      hints: [
        `Kolik stěn má trojboký hranol a jaký tvar mají? Jednu délku budeš muset dopočítat.`,
        `Podstava je pravoúhlý trojúhelník — jakou má přeponu? Tu potřebuješ pro třetí boční stěnu.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_ster_03", regionId: "stereometrie", type: "closed", monsterName: `SIM_04C: Povrch trojbokého hranolu`,
      isTraining: true, firewallId: "q_ster_03", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Pravý trojúhelník má odvěsny 6 cm a 8 cm. Trojboký hranol z tohoto trojúhelníku má délku 5 cm. Jaká je plocha jedné trojúhelníkové podstavy?`,
      formula: null,
      instruction: `Vyberte správnou plochu.`,
      steps: [
        {
          trigger: `> Krok 1: Pythagorova věta`,
          content: `Přepona pravého trojúhelníku s odvěsnami 6 a 8: \\(c = \\sqrt{6^2+8^2} = \\sqrt{100} = 10\\) cm.`
        },
        {
          trigger: `> Krok 2: Obsah trojúhelníku`,
          content: `Obsah pravoúhlého trojúhelníku: \\(S = \\frac{1}{2} \\cdot a \\cdot b\\). Dosaď odvěsny a vypočítej.`
        },
      ],
      choices: [
        {
          label: `\\(24\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(S = \\frac{1}{2}\\cdot6\\cdot8 = 24\\) cm².`
        },
        {
          label: `\\(48\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Chyba - 48 cm² je plocha obou podstav dohromady, ne jedné.`
        },
        {
          label: `\\(30\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Chyba - pravděpodobně jsi použil přeponu místo odvěsny.`
        },
        {
          label: `\\(60\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Kritická chyba - to je plocha jedné boční stěny (10×6=60), ne podstavy.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_ster_04", regionId: "stereometrie", type: "closed", monsterName: `FW_04D: Kužel z kružnicové výseče`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 4, trainingTasks: ["t_ster_04"],
      question: `Rozvinutý plášť rotačního kužele tvoří kružnicová výseč s poloměrem 5 cm a středovým úhlem 288°. Vypočtěte objem tohoto kužele.`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 215" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <defs><marker id="arr4" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"> <path d="M0,0 L7,3.5 L0,7 Z" fill="#e2e8f0"/> </marker></defs> <!-- Circular sector 288° --> <path d="M 85,110 L 123,57 A 65,65 0 1,0 147,130 Z" fill="#1a2040" stroke="#a78bfa" stroke-width="2"/> <text x="36" y="126" text-anchor="middle" fill="#94a3b8" font-size="11">s = 5 cm</text> <text x="85" y="128" fill="#94a3b8" font-size="10" text-anchor="middle">α = 288°</text> <!-- Arrow --> <line x1="162" y1="110" x2="182" y2="110" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr4)"/> <!-- Cone --> <ellipse cx="240" cy="150" rx="36" ry="10" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <line x1="204" y1="150" x2="240" y2="65" stroke="#a78bfa" stroke-width="1.5"/> <line x1="276" y1="150" x2="240" y2="65" stroke="#a78bfa" stroke-width="1.5"/> <text x="240" y="172" text-anchor="middle" fill="#94a3b8" font-size="11">r = 4 cm</text> <text x="284" y="111" fill="#94a3b8" font-size="11">v = 3 cm</text> <text x="155" y="200" text-anchor="middle" fill="#e2e8f0" font-size="11">V_kužele = ?</text> </svg>`,
      instruction: `Vyberte správný objem.`,
      choices: [
        {
          label: `\\(16\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(r = 4\\) cm, \\(v = 3\\) cm \\(\\Rightarrow V = \\frac{1}{3}\\pi\\cdot16\\cdot3 = 16\\pi\\) cm³.`
        },
        {
          label: `\\(12\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Chyba. Spletl jsi poloměr základny s výškou (nebo naopak).`
        },
        {
          label: `\\(48\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Zapomněl jsi na faktor 1/3 u objemu kužele.`
        },
        {
          label: `\\(20\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Kritická chyba. Zkontroluj výpočet délky oblouku a odvození poloměru.`
        },
      ],
      hints: [
        `Co se stane s obloukem výseče, když plášť svinete do kužele? Čemu se rovná délka toho oblouku?`,
        `Poloměr výseče = strana kužele. Máš poloměr podstavy i stranu — jak z nich získáš výšku?`,
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_ster_04", regionId: "stereometrie", type: "closed", monsterName: `SIM_04D: Délka oblouku výseče`,
      isTraining: true, firewallId: "q_ster_04", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Kružnicová výseč má poloměr 5 cm a středový úhel 144°. Jaká je délka jejího oblouku?`,
      formula: null,
      instruction: `Vyberte správnou délku.`,
      steps: [
        {
          trigger: `> Krok 1: Oblouk jako část celé kružnice`,
          content: `Celá kružnice má obvod \\(2\\pi r\\). Výseč je jen jejím zlomkem: \\(\\frac{144}{360} = \\frac{2}{5}\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `\\(l = \\frac{144}{360} \\cdot 2\\pi r = \\frac{2}{5} \\cdot 2\\pi \\cdot 5\\). Dosaď a vypočítej.`
        },
      ],
      choices: [
        {
          label: `\\(5\\pi\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba - to je délka poloměru × π, bez zohlednění úhlu.`
        },
        {
          label: `\\(3\\pi\\text{ cm}\\)`,
          value: "B",
          feedback: `Chyba - zkontroluj zlomek: 144/360 = 2/5, ne 3/10.`
        },
        {
          label: `\\(2\\pi\\text{ cm}\\)`,
          value: "C",
          feedback: `Chyba - spletl jsi r = 5 s celkovým výsledkem.`
        },
        {
          label: `\\(4\\pi\\text{ cm}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(l = \\frac{144}{360}\\cdot 2\\pi \\cdot 5 = 4\\pi\\) cm.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_ster_05", regionId: "stereometrie", type: "closed", monsterName: `FW_04E: Složené těleso - kužel a válec`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_05"],
      question: `Rotační těleso se skládá z kužele (r = 6 cm, v₁ = 8 cm) a válce (r = 6 cm, v₂ = 4 cm), jejichž podstavy splývají. Jakou část celkového objemu tělesa tvoří kužel?`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 225" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <!-- Cylinder --> <ellipse cx="155" cy="192" rx="52" ry="13" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <ellipse cx="155" cy="130" rx="52" ry="13" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <line x1="103" y1="130" x2="103" y2="192" stroke="#a78bfa" stroke-width="1.5"/> <line x1="207" y1="130" x2="207" y2="192" stroke="#a78bfa" stroke-width="1.5"/> <text x="215" y="165" fill="#94a3b8" font-size="10">v₂=4 cm</text> <!-- Cone on top --> <ellipse cx="155" cy="130" rx="52" ry="13" fill="#1a2235" stroke="#a78bfa" stroke-width="1.5"/> <line x1="103" y1="130" x2="155" y2="55" stroke="#a78bfa" stroke-width="1.5"/> <line x1="207" y1="130" x2="155" y2="55" stroke="#a78bfa" stroke-width="1.5"/> <text x="215" y="96" fill="#94a3b8" font-size="10">v₁=8 cm</text> <text x="218" y="145" fill="#94a3b8" font-size="10">r = 6 cm</text> <text x="155" y="220" text-anchor="middle" fill="#e2e8f0" font-size="11">V_kužel / V_celkem = ?</text> </svg>`,
      instruction: `Vyberte správný zlomek.`,
      choices: [
        {
          label: `\\(\\frac{1}{3}\\)`,
          value: "A",
          feedback: `Chyba. To je faktor ve vzorci pro objem kužele - ne zlomek celkového objemu.`
        },
        {
          label: `\\(\\frac{1}{2}\\)`,
          value: "B",
          feedback: `Chyba. Kužel a válec nemají stejný objem — kužel je třetina válce se stejnou základnou a výškou, ale pozor: výšky se tu liší.`
        },
        {
          label: `\\(\\frac{2}{5}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(V_{\\text{kužel}} = 96\\pi\\), \\(V_{\\text{celkem}} = 240\\pi\\) \\(\\Rightarrow \\frac{96}{240} = \\frac{2}{5}\\).`
        },
        {
          label: `\\(\\frac{3}{5}\\)`,
          value: "D",
          feedback: `Chyba. To je zlomek válce - spletl jsi kužel a válec.`
        },
      ],
      hints: [
        `Spočítej objem kužele a objem válce zvlášť. Jaké vzorce pro ně platí?`,
        `Celkový objem je součet obou. Podíl kužele = \\(\\frac{V_{\\text{kužel}}}{V_{\\text{celkem}}}\\). Nezapomeň zlomek zkrátit.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_ster_05", regionId: "stereometrie", type: "closed", monsterName: `SIM_04E: Objem kužele`,
      isTraining: true, firewallId: "q_ster_05", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Kužel má poloměr podstavy 6 cm a výšku 8 cm. Jaký je jeho objem?`,
      formula: null,
      instruction: `Vyberte správný objem.`,
      steps: [
        {
          trigger: `> Krok 1: Proč třetina?`,
          content: `Kužel je přesně třetina válce se stejnou základnou a výškou. Tedy \\(V_{\\text{kužel}} = \\frac{1}{3} V_{\\text{válec}}\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `\\(V = \\frac{1}{3}\\pi r^2 v = \\frac{1}{3}\\pi \\cdot 36 \\cdot 8\\). Dosaď a vypočítej.`
        },
      ],
      choices: [
        {
          label: `\\(144\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Chyba - to je objem válce se stejnými rozměry, ne kužele.`
        },
        {
          label: `\\(96\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(V = \\frac{1}{3}\\pi\\cdot36\\cdot8 = 96\\pi\\) cm³.`
        },
        {
          label: `\\(48\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Chyba - pravděpodobně jsi vzal 1/6 místo 1/3.`
        },
        {
          label: `\\(288\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Kritická chyba - zapomněl jsi na faktor 1/3.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_ster_06", regionId: "stereometrie", type: "closed", monsterName: `FW_04F: Válec s výškou v = 2r`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_06"],
      question: `Výška rotačního válce se rovná průměru jeho podstavy. Celkový povrch válce je 54π cm². Vypočtěte objem válce.`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 230" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <ellipse cx="155" cy="185" rx="58" ry="14" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <ellipse cx="155" cy="65" rx="58" ry="14" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <line x1="97" y1="65" x2="97" y2="185" stroke="#a78bfa" stroke-width="1.5"/> <line x1="213" y1="65" x2="213" y2="185" stroke="#a78bfa" stroke-width="1.5"/> <!-- Radius on top --> <line x1="155" y1="65" x2="213" y2="65" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,3"/> <circle cx="155" cy="65" r="3" fill="#e2e8f0"/> <text x="186" y="58" text-anchor="middle" fill="#94a3b8" font-size="12" font-style="italic">r</text> <!-- Height annotation --> <line x1="235" y1="65" x2="235" y2="185" stroke="#e2e8f0" stroke-width="1.5"/> <line x1="228" y1="65" x2="242" y2="65" stroke="#e2e8f0" stroke-width="1"/> <line x1="228" y1="185" x2="242" y2="185" stroke="#e2e8f0" stroke-width="1"/> <text x="245" y="129" fill="#94a3b8" font-size="12" font-style="italic">v=2r</text> <text x="155" y="217" text-anchor="middle" fill="#e2e8f0" font-size="12">S = 54π cm² → V = ?</text> </svg>`,
      instruction: `Vyberte správný objem.`,
      choices: [
        {
          label: `\\(27\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Chyba. Výška válce se rovná průměru, ne poloměru — máš správně \\(r\\), ale \\(v \\neq r\\).`
        },
        {
          label: `\\(36\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Zkontroluj, jestli jsi správně nahradil \\(v\\) výrazem \\(2r\\) ve vzorci pro objem.`
        },
        {
          label: `\\(81\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Kritická chyba. Zkontroluj dosazení do \\(V = \\pi r^2 v\\) — ověř, že \\(r\\) i \\(v\\) odpovídají podmínce.`
        },
        {
          label: `\\(54\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(S = 6\\pi r^2 = 54\\pi \\Rightarrow r = 3\\) cm, \\(v = 6\\) cm, \\(V = 54\\pi\\) cm³.`
        },
      ],
      hints: [
        `Povrch válce má dvě části — podstavy a plášť. Co se stane se vzorcem, když za \\(v\\) dosadíš \\(2r\\)?`,
        `Po zjednodušení dostaneš rovnici s jednou neznámou \\(r\\). Pak nezapomeň, že \\(v = 2r\\).`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_ster_06", regionId: "stereometrie", type: "closed", monsterName: `SIM_04F: Povrch válce`,
      isTraining: true, firewallId: "q_ster_06", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Válec má poloměr r = 3 cm a výšku v = 6 cm. Jaký je jeho celkový povrch?`,
      formula: null,
      instruction: `Vyberte správný povrch.`,
      steps: [
        {
          trigger: `> Krok 1: Ze čeho se povrch skládá?`,
          content: `Povrch válce = <b>dvě podstavy</b> (kruhy) + <b>plášť</b> (obdélník po rozvinutí). \\(S = 2\\pi r^2 + 2\\pi r v\\).`
        },
        {
          trigger: `> Krok 2: Dosazení r=3, v=6`,
          content: `Dosaď \\(r=3\\), \\(v=6\\) do vzorce z Kroku 1: \\(S = 2\\pi \\cdot 9 + 2\\pi \\cdot 3 \\cdot 6 = ?\\)`
        },
      ],
      choices: [
        {
          label: `\\(36\\pi\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Chyba - zapomněl jsi přičíst podstavy.`
        },
        {
          label: `\\(45\\pi\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Chyba syntaxe - zkontroluj dosazení.`
        },
        {
          label: `\\(54\\pi\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(18\\pi + 36\\pi = 54\\pi\\) cm².`
        },
        {
          label: `\\(72\\pi\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Chyba - zdvojil jsi plášť nebo zaměnil vzorec.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_ster_08", regionId: "stereometrie", type: "closed", monsterName: `FW_04G: Polokoule - povrch a objem`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_08"],
      question: `Obsah zakřivené plochy (pláště) polokoule je 72π cm². Vypočtěte objem polokoule.`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 220" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <!-- Half-sphere --> <path d="M 65,148 A 90,90 0 0,1 245,148" fill="#1a2040" stroke="#a78bfa" stroke-width="2"/> <!-- Base ellipse --> <ellipse cx="155" cy="148" rx="90" ry="24" fill="#1a2235" stroke="#a78bfa" stroke-width="1.5"/> <!-- Radius line --> <line x1="155" y1="148" x2="245" y2="148" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="5,3"/> <circle cx="155" cy="148" r="3" fill="#e2e8f0"/> <text x="203" y="140" fill="#94a3b8" font-size="13" font-style="italic">r</text> <text x="155" y="208" text-anchor="middle" fill="#e2e8f0" font-size="12">S_pláště = 2πr² = 72π cm²</text> </svg>`,
      instruction: `Vyberte správný objem.`,
      choices: [
        {
          label: `\\(72\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Chyba. Záměna povrchu a objemu - 72π je povrch, ne objem.`
        },
        {
          label: `\\(108\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Pravděpodobně jsi použil faktor 1/2 místo 2/3.`
        },
        {
          label: `\\(144\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(2\\pi r^2 = 72\\pi \\Rightarrow r = 6\\) cm \\(\\Rightarrow V = \\frac{2}{3}\\pi\\cdot216 = 144\\pi\\) cm³.`
        },
        {
          label: `\\(216\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Kritická chyba. Vypočítal jsi objem celé koule - polokoule je polovina.`
        },
      ],
      hints: [
        `Plášť polokoule je polovina povrchu koule. Jaký je vzorec pro povrch celé koule?`,
        `Z plochy pláště vyjádři \\(r\\). Objem polokoule je polovina objemu koule.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_ster_08", regionId: "stereometrie", type: "closed", monsterName: `SIM_04G: Objem polokoule`,
      isTraining: true, firewallId: "q_ster_08", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Polokoule má poloměr r = 3 cm. Jaký je její objem?`,
      formula: null,
      instruction: `Vyberte správný objem.`,
      steps: [
        {
          trigger: `> Krok 1: Polokoule = polovina koule`,
          content: `Objem koule je \\(\\frac{4}{3}\\pi r^3\\). Polokoule je přesně polovina: \\(V = \\frac{2}{3}\\pi r^3\\).`
        },
        {
          trigger: `> Krok 2: Dosazení r = 3`,
          content: `\\(V = \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi \\cdot 27\\). Dosaď a vypočítej.`
        },
      ],
      choices: [
        {
          label: `\\(36\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Chyba - to je objem celé koule (r = 3), ne polokoule.`
        },
        {
          label: `\\(9\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Chyba - pravděpodobně jsi použil r² místo r³.`
        },
        {
          label: `\\(27\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Chyba syntaxe - zapomněl jsi na faktor 2/3.`
        },
        {
          label: `\\(18\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(V = \\frac{2}{3}\\pi\\cdot27 = 18\\pi\\) cm³.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_ster_09", regionId: "stereometrie", type: "closed", monsterName: `FW_04H: Dutý válec - objem materiálu`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_09"],
      question: `Dutý válec (roura) má vnější poloměr R = 5 cm, vnitřní poloměr r = 3 cm a výšku v = 10 cm. Vypočtěte objem materiálu, ze kterého je roura vyrobena.`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 225" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <!-- Bottom annulus --> <ellipse cx="155" cy="180" rx="68" ry="17" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <ellipse cx="155" cy="180" rx="26" ry="10" fill="#111827" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="4,3"/> <!-- Outer side walls --> <line x1="87" y1="65" x2="87" y2="180" stroke="#a78bfa" stroke-width="1.5"/> <line x1="223" y1="65" x2="223" y2="180" stroke="#a78bfa" stroke-width="1.5"/> <!-- Inner tunnel walls --> <line x1="129" y1="65" x2="129" y2="180" stroke="#a78bfa" stroke-width="1.1" stroke-dasharray="5,3"/> <line x1="181" y1="65" x2="181" y2="180" stroke="#a78bfa" stroke-width="1.1" stroke-dasharray="5,3"/> <!-- Top annulus --> <ellipse cx="155" cy="65" rx="68" ry="17" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <ellipse cx="155" cy="65" rx="26" ry="10" fill="#111827" stroke="#a78bfa" stroke-width="1.5"/> <!-- Labels --> <text x="155" y="57" text-anchor="middle" fill="#94a3b8" font-size="10">R = 5 cm, r = 3 cm</text> <line x1="245" y1="65" x2="245" y2="180" stroke="#e2e8f0" stroke-width="1.5"/> <line x1="238" y1="65" x2="252" y2="65" stroke="#e2e8f0" stroke-width="1"/> <line x1="238" y1="180" x2="252" y2="180" stroke="#e2e8f0" stroke-width="1"/> <text x="255" y="126" fill="#94a3b8" font-size="11">v=10 cm</text> <text x="155" y="213" text-anchor="middle" fill="#e2e8f0" font-size="11">V = π(R²−r²)·v = ?</text> </svg>`,
      instruction: `Vyberte správný objem.`,
      choices: [
        {
          label: `\\(160\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\pi(25-9)\\cdot10 = 160\\pi\\) cm³.`
        },
        {
          label: `\\(80\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Chyba. Mezikruží počítáš správně, ale nezapomněl jsi vynásobit výškou?`
        },
        {
          label: `\\(250\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. To je objem plného vnějšího válce (bez dutiny).`
        },
        {
          label: `\\(320\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Kritická chyba. Sčítal jsi místo odčítání — \\(V = \\pi(R^2-r^2)v\\), ne \\(\\pi(R^2+r^2)v\\).`
        },
      ],
      hints: [
        `Objem materiálu = velký válec minus dutina: \\(V = \\pi R^2 v - \\pi r^2 v = \\pi(R^2 - r^2)\\cdot v\\).`,
        `Pozor na rozdíl \\(R^2 - r^2\\) — to není \\((R-r)^2\\).`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_ster_09", regionId: "stereometrie", type: "closed", monsterName: `SIM_04H: Průřez mezikruží`,
      isTraining: true, firewallId: "q_ster_09", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Průřez dutého válce (roury) tvoří mezikruží. Vnější poloměr R = 5 cm, vnitřní poloměr r = 3 cm. Jaký je obsah průřezu?`,
      formula: null,
      instruction: `Vyberte správný obsah.`,
      steps: [
        {
          trigger: `> Krok 1: Co je mezikruží?`,
          content: `Mezikruží = velký kruh minus malý kruh. \\(S = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `Dosaď \\(R=5\\), \\(r=3\\) do vzorce z Kroku 1: \\(S = \\pi(R^2 - r^2) = ?\\)`
        },
      ],
      choices: [
        {
          label: `\\(4\\pi\\text{ cm}^{2}\\)`,
          value: "A",
          feedback: `Chyba — spočítal jsi \\(\\pi(R-r)^2\\) místo \\(\\pi(R^2 - r^2)\\). Pozor: \\((R-r)^2 \\neq R^2 - r^2\\).`
        },
        {
          label: `\\(16\\pi\\text{ cm}^{2}\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\pi(25−9) = 16\\pi\\) cm².`
        },
        {
          label: `\\(25\\pi\\text{ cm}^{2}\\)`,
          value: "C",
          feedback: `Chyba - to je obsah celého vnějšího kruhu bez odečtení dutiny.`
        },
        {
          label: `\\(34\\pi\\text{ cm}^{2}\\)`,
          value: "D",
          feedback: `Kritická chyba - sčítal jsi místo odčítání.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_ster_10", regionId: "stereometrie", type: "closed", monsterName: `FW_04I: Válec z průměru a plochy pláště`,
      visual_color: "#a78bfa", visual_symbol: `●`, points: 3, trainingTasks: ["t_ster_10"],
      question: `Průměr podstavy rotačního válce je 16 cm. Obsah pláště (boční plochy) tohoto válce je 96π cm². Vypočtěte objem válce.`,
      formula: null,
      diagram: `<svg viewBox="0 0 310 222" style="width:100%;max-width:310px;display:block;margin:12px auto; background:#111827;border:1px solid #1a2544;border-radius:8px; font-family:'Segoe UI',Arial,sans-serif;"> <ellipse cx="155" cy="175" rx="65" ry="16" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <ellipse cx="155" cy="65" rx="65" ry="16" fill="#1a2040" stroke="#a78bfa" stroke-width="1.5"/> <line x1="90" y1="65" x2="90" y2="175" stroke="#a78bfa" stroke-width="1.5"/> <line x1="220" y1="65" x2="220" y2="175" stroke="#a78bfa" stroke-width="1.5"/> <!-- Diameter line on top --> <line x1="90" y1="65" x2="220" y2="65" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="5,3"/> <text x="155" y="57" text-anchor="middle" fill="#94a3b8" font-size="12">d = 16 cm</text> <!-- Height annotation --> <line x1="244" y1="65" x2="244" y2="175" stroke="#e2e8f0" stroke-width="1.5"/> <line x1="237" y1="65" x2="251" y2="65" stroke="#e2e8f0" stroke-width="1"/> <line x1="237" y1="175" x2="251" y2="175" stroke="#e2e8f0" stroke-width="1"/> <text x="254" y="124" fill="#94a3b8" font-size="12" font-style="italic">v = ?</text> <text x="155" y="210" text-anchor="middle" fill="#e2e8f0" font-size="12">S_plášť = 96π cm² → V = ?</text> </svg>`,
      instruction: `Vyberte správný objem.`,
      choices: [
        {
          label: `\\(192\\pi\\text{ cm}^{3}\\)`,
          value: "A",
          feedback: `Chyba. Spletl jsi poloměr a průměr - r = 8 cm, ne 16 cm.`
        },
        {
          label: `\\(256\\pi\\text{ cm}^{3}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Zkontroluj výpočet výšky z plochy pláště.`
        },
        {
          label: `\\(512\\pi\\text{ cm}^{3}\\)`,
          value: "C",
          feedback: `Kritická chyba. Objem je příliš velký — zkontroluj, jestli jsi výšku z plochy pláště odvodil správně.`
        },
        {
          label: `\\(384\\pi\\text{ cm}^{3}\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(r = 8\\) cm, \\(S_{\\text{plášť}} = 2\\pi\\cdot8\\cdot v = 96\\pi \\Rightarrow v = 6\\) cm, \\(V = 384\\pi\\) cm³.`
        },
      ],
      hints: [
        `Jaký je vztah mezi průměrem a poloměrem? Plášť válce po rozvinutí je obdélník — jaké má rozměry?`,
        `Z plochy pláště \\(S = 2\\pi r v\\) vyjádři neznámou výšku. Pak dosaď do objemu.`,
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_ster_10", regionId: "stereometrie", type: "closed", monsterName: `SIM_04I: Výška válce z pláště`,
      isTraining: true, firewallId: "q_ster_10", visual_color: "#2ecc8a", visual_symbol: `●`, points: 0,
      question: `Plášť válce s průměrem 12 cm má obsah 60π cm². Jaká je výška válce?`,
      formula: null,
      instruction: `Vyberte správnou výšku.`,
      steps: [
        {
          trigger: `> Krok 1: Poloměr z průměru`,
          content: `Průměr = 12 cm → poloměr r = 6 cm.`
        },
        {
          trigger: `> Krok 2: Výška z plochy pláště`,
          content: `\\(S_{\\text{plášť}} = 2\\pi r v \\Rightarrow 60\\pi = 2\\pi\\cdot6\\cdot v = 12\\pi v\\). Vyřeš pro \\(v\\).`
        },
      ],
      choices: [
        {
          label: `\\(v = 2,5\\text{ cm}\\)`,
          value: "A",
          feedback: `Chyba - použil jsi průměr (12) místo poloměru (6) ve jmenovateli.`
        },
        {
          label: `\\(v = 10\\text{ cm}\\)`,
          value: "B",
          feedback: `Chyba - pravděpodobně jsi zapomněl na faktor 2 v 2πr.`
        },
        {
          label: `\\(v = 5\\text{ cm}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(v = 60\\pi/(2\\pi\\cdot6) = 5\\) cm.`
        },
        {
          label: `\\(v = 8\\text{ cm}\\)`,
          value: "D",
          feedback: `Kritická chyba - zkontroluj výpočet: 2π·6·v = 12πv = 60π → v = 5.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },

    // ==========================================
    // 12. SLOVNÍ ÚLOHY
    // ==========================================
    {
      id: "q_slov_01", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12A: YouTube kanál — změna sledujících`,
      visual_color: "#e17055", visual_symbol: `%`, points: 3, trainingTasks: ["t_slov_01"],
      question: `Počet sledujících YouTube kanálu vzrostl v lednu o \\(15\\,\\%\\) a v únoru klesl o \\(20\\,\\%\\). Na začátku ledna měl kanál \\(4\\,000\\) sledujících.`,
      instruction: `Kolik sledujících měl kanál na konci února?`,
      choices: [
        { label: `\\(3\\,680\\)`, value: "A", feedback: `Přístup povolen. \\(4000 \\cdot 1{,}15 \\cdot 0{,}80 = 3\\,680\\)` },
        { label: `\\(3\\,800\\)`, value: "B", feedback: `Chyba protokolu. Nelze sčítat procenta: \\(+15\\,\\% - 20\\,\\% \\neq -5\\,\\%\\) z původní hodnoty.` },
        { label: `\\(4\\,200\\)`, value: "C", feedback: `Kritická chyba. Zaměnil(a) jsi znaménka — výsledek je vyšší než start, přitom celkově klesáš.` },
        { label: `\\(3\\,600\\)`, value: "D", feedback: `Chyba syntaxe. Odhad není výpočet — zkus přesný postup krok po kroku.` },
      ],
      hints: [
        `Procenta se počítají vždy z aktuální hodnoty, ne z původní. Jaký je stav po lednu?`,
        `Po lednu: \\(4000 \\cdot 1{,}15 = ?\\). Z tohoto nového počtu teprve počítej únorový pokles.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_slov_01", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12A: Cena grafické karty`,
      isTraining: true, firewallId: "q_slov_01", visual_color: "#2ecc8a", visual_symbol: `%`, points: 0,
      question: `Cena grafické karty byla v listopadu \\(8\\,000\\) Kč. V prosinci klesla o \\(10\\,\\%\\) a v lednu vzrostla o \\(30\\,\\%\\).`,
      instruction: `Jaká je cena grafické karty v lednu?`,
      steps: [
        { trigger: `> Krok 1: Prosinec`, content: `Po poklesu o \\(10\\,\\%\\): \\(8000 \\cdot 0{,}90 = 7\\,200\\) Kč.` },
        { trigger: `> Krok 2: Leden`, content: `Z prosincové ceny \\(7\\,200\\) Kč počítej růst o \\(30\\,\\%\\): \\(7200 \\cdot 1{,}30 = ?\\)` },
      ],
      choices: [
        { label: `\\(9\\,360\\)`, value: "A", feedback: `Logika potvrzena. \\(8000 \\cdot 0{,}90 \\cdot 1{,}30 = 9\\,360\\) Kč.` },
        { label: `\\(9\\,600\\)`, value: "B", feedback: `Chyba protokolu. Sečetl(a) jsi procenta: \\(+20\\,\\%\\) z původní ceny není správně.` },
        { label: `\\(8\\,400\\)`, value: "C", feedback: `Kritická chyba. Počítal(a) jsi \\(+30\\,\\%\\) z původních \\(8\\,000\\) místo z prosincové ceny.` },
        { label: `\\(7\\,200\\)`, value: "D", feedback: `Chyba syntaxe. Zapomněl(a) jsi na druhý krok — lednovýrůst.` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_02", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12B: E-shop Black Friday`,
      visual_color: "#e17055", visual_symbol: `%%`, points: 4, trainingTasks: ["t_slov_02"],
      question: `E-shop nabízí na Black Friday slevu \\(25\\,\\%\\). Držitelé věrnostní karty dostanou navíc slevu \\(10\\,\\%\\) z již snížené ceny. Herní konzole stojí původně \\(12\\,000\\) Kč.`,
      instruction: `Kolik zaplatí držitel věrnostní karty?`,
      choices: [
        { label: `\\(7\\,800\\) Kč`, value: "A", feedback: `Chyba protokolu. Sečetl(a) jsi slevy: \\(25\\,\\% + 10\\,\\% = 35\\,\\%\\) z původní ceny není správně.` },
        { label: `\\(8\\,100\\) Kč`, value: "B", feedback: `Přístup povolen. \\(12000 \\cdot 0{,}75 \\cdot 0{,}90 = 8\\,100\\) Kč.` },
        { label: `\\(9\\,000\\) Kč`, value: "C", feedback: `Chyba syntaxe. Aplikoval(a) jsi jen první slevu — věrnostní sleva chybí.` },
        { label: `\\(7\\,200\\) Kč`, value: "D", feedback: `Kritická chyba. Obě slevy jsi odečetl(a) od původní ceny zvlášť a výsledky sečetl(a).` },
      ],
      hints: [
        `Druhá sleva se nepočítá z původní ceny, ale ze snížené. Jaká je cena po první slevě?`,
        `Po první slevě: \\(12000 \\cdot 0{,}75 = ?\\) Kč. Z této snížené ceny odečti dalších \\(10\\,\\%\\).`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_slov_02", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12B: Skipas pro studenta`,
      isTraining: true, firewallId: "q_slov_02", visual_color: "#2ecc8a", visual_symbol: `%%`, points: 0,
      question: `Lyžařské středisko nabízí slevu \\(20\\,\\%\\) na skipas při online nákupu. Studenti dostanou navíc slevu \\(15\\,\\%\\) ze snížené ceny. Plná cena skipasu je \\(2\\,000\\) Kč.`,
      instruction: `Kolik zaplatí student při online nákupu?`,
      steps: [
        { trigger: `> Krok 1: Online sleva`, content: `\\(2000 \\cdot 0{,}80 = 1\\,600\\) Kč.` },
        { trigger: `> Krok 2: Studentská sleva`, content: `Ze snížené ceny \\(1\\,600\\) Kč odečti studentskou slevu \\(15\\,\\%\\): \\(1600 \\cdot 0{,}85 = ?\\)` },
      ],
      choices: [
        { label: `\\(1\\,360\\) Kč`, value: "A", feedback: `Logika potvrzena. \\(2000 \\cdot 0{,}80 \\cdot 0{,}85 = 1\\,360\\) Kč.` },
        { label: `\\(1\\,300\\) Kč`, value: "B", feedback: `Chyba protokolu. \\(20\\,\\% + 15\\,\\% = 35\\,\\%\\) — slevy se nesčítají.` },
        { label: `\\(1\\,600\\) Kč`, value: "C", feedback: `Chyba syntaxe. Aplikoval(a) jsi jen online slevu, studentská chybí.` },
        { label: `\\(1\\,400\\) Kč`, value: "D", feedback: `Kritická chyba. Studentskou slevu jsi počítal(a) z původní ceny místo ze snížené.` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_03", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12C: Instagram influencer`,
      visual_color: "#e17055", visual_symbol: `1.25ⁿ`, points: 5, trainingTasks: ["t_slov_03"],
      question: `Influencer má na Instagramu \\(8\\,000\\) sledujících. Díky virálnímu videu jeho sledovanost roste každý týden o \\(25\\,\\%\\).`,
      instruction: `Po kolika celých týdnech překročí poprvé \\(15\\,000\\) sledujících?`,
      choices: [
        { label: `Po \\(2\\) týdnech`, value: "A", feedback: `Chyba syntaxe. Po 2 týdnech: \\(8000 \\cdot 1{,}25^2 = 12\\,500 < 15\\,000\\). Nestačí.` },
        { label: `Po \\(4\\) týdnech`, value: "B", feedback: `Chyba protokolu. Po 3 týdnech už hranici překročí — \\(4\\) jsou příliš.` },
        { label: `Po \\(3\\) týdnech`, value: "C", feedback: `Přístup povolen. \\(8000 \\cdot 1{,}25^3 = 15\\,625 > 15\\,000\\). První překročení!` },
        { label: `Po \\(1\\) týdnu`, value: "D", feedback: `Kritická chyba. Po 1 týdnu: \\(8000 \\cdot 1{,}25 = 10\\,000 < 15\\,000\\).` },
      ],
      hints: [
        `Kolik sledujících je po prvním týdnu? Po druhém? Kdy poprvé přesáhneš \\(15\\,000\\)?`,
        `Týden 1: \\(8000 \\cdot 1{,}25 = 10\\,000\\). Pokračuj stejným postupem — po kterém týdnu hodnota poprvé překročí \\(15\\,000\\)?`,
      ],
      correctAnswer: "C", reward: { xp: 25 }
    },
    {
      id: "t_slov_03", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12C: Startup uživatelé`,
      isTraining: true, firewallId: "q_slov_03", visual_color: "#2ecc8a", visual_symbol: `1.5ⁿ`, points: 0,
      question: `Startup měl v lednu \\(200\\) uživatelů. Každý měsíc počet uživatelů vzroste o \\(50\\,\\%\\). Po kolika celých měsících překročí poprvé \\(1\\,000\\) uživatelů?`,
      instruction: `Postupuj měsíc po měsíci.`,
      steps: [
        { trigger: `> Krok 1: Výpočet po měsících`, content: `\\(200 \\to 300 \\to 450 \\to 675 \\to 1\\,012\\). Po \\(4\\) měsících: \\(200 \\cdot 1{,}5^4 \\approx 1\\,013\\).` },
        { trigger: `> Krok 2: První překročení`, content: `Po \\(3\\) měsících je \\(675 < 1\\,000\\). Kolik bude po \\(4\\) měsících? Překročí to hranici \\(1\\,000\\)?` },
      ],
      choices: [
        { label: `Po \\(4\\) měsících`, value: "A", feedback: `Logika potvrzena. \\(200 \\cdot 1{,}5^4 \\approx 1\\,013 > 1\\,000\\).` },
        { label: `Po \\(3\\) měsících`, value: "B", feedback: `Chyba protokolu. Po 3 měsících: \\(200 \\cdot 1{,}5^3 = 675 < 1\\,000\\).` },
        { label: `Po \\(5\\) měsících`, value: "C", feedback: `Chyba syntaxe. Hranici překročíš dříve — zkontroluj krok 4.` },
        { label: `Po \\(2\\) měsících`, value: "D", feedback: `Kritická chyba. Po 2 měsících: \\(200 \\cdot 1{,}5^2 = 450 < 1\\,000\\).` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_04", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12D: Baterie tabletu`,
      visual_color: "#e17055", visual_symbol: `½·⅗`, points: 4, trainingTasks: ["t_slov_04"],
      question: `Baterie tabletu měla na začátku dne plnou kapacitu. Dopoledne se spotřebovaly \\(\\frac{2}{5}\\) kapacity. Odpoledne se spotřebovaly \\(\\frac{3}{4}\\) zbývající kapacity.`,
      instruction: `Jaká část celkové kapacity baterie zbyla na večer?`,
      choices: [
        { label: `\\(\\frac{1}{5}\\)`, value: "A", feedback: `Chyba protokolu. Spočítal(a) jsi \\(1 - \\frac{2}{5} - \\frac{3}{4}\\) bez zohlednění „zbývající".` },
        { label: `\\(\\frac{3}{20}\\)`, value: "B", feedback: `Přístup povolen. Po dopoledni zbývá \\(\\frac{3}{5}\\), odpoledne se spotřebuje \\(\\frac{3}{4} \\cdot \\frac{3}{5} = \\frac{9}{20}\\), zbývá \\(\\frac{3}{20}\\).` },
        { label: `\\(\\frac{7}{20}\\)`, value: "C", feedback: `Chyba syntaxe. Odečetl(a) jsi \\(\\frac{1}{4}\\) zbytku místo \\(\\frac{3}{4}\\) — přepočítej odpolední spotřebu.` },
        { label: `\\(\\frac{1}{10}\\)`, value: "D", feedback: `Kritická chyba. Chybný zlomkový výpočet — zkontroluj, z čeho počítáš \\(\\frac{3}{4}\\).` },
      ],
      hints: [
        `Klíčové slovo: „zbývající kapacity". Odpoledne se nespotřebuje \\(\\frac{3}{4}\\) z celku, ale \\(\\frac{3}{4}\\) z toho, co po ránu zbyde.`,
        `Po dopoledni zbývá \\(1 - \\frac{2}{5} = \\frac{3}{5}\\) celkové kapacity. Odpoledne se spotřebuje \\(\\frac{3}{4} \\cdot \\frac{3}{5} = ?\\)`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_slov_04", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12D: Nádrž automobilu`,
      isTraining: true, firewallId: "q_slov_04", visual_color: "#2ecc8a", visual_symbol: `½·¾`, points: 0,
      question: `Nádrž automobilu byla plná. Při cestě do práce se spotřebovala \\(\\frac{1}{4}\\) nádrže. Při odpolední cestě se spotřebovaly \\(\\frac{2}{3}\\) zbývajícího paliva.`,
      instruction: `Jaká část plné nádrže zbyla?`,
      steps: [
        { trigger: `> Krok 1: Po ránu`, content: `Zbývá \\(1 - \\frac{1}{4} = \\frac{3}{4}\\) nádrže.` },
        { trigger: `> Krok 2: Odpoledne`, content: `Odpolední spotřeba: \\(\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{1}{2}\\). Kolik ze \\(\\frac{3}{4}\\) zbude po odečtení této spotřeby?` },
      ],
      choices: [
        { label: `\\(\\frac{1}{4}\\)`, value: "A", feedback: `Logika potvrzena. \\(\\frac{3}{4} - \\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{1}{4}\\).` },
        { label: `\\(\\frac{1}{12}\\)`, value: "B", feedback: `Chyba protokolu. Odečetl(a) jsi \\(\\frac{2}{3}\\) z celku místo ze zbytku.` },
        { label: `\\(\\frac{1}{3}\\)`, value: "C", feedback: `Chyba syntaxe. Zkontroluj odpolední spotřebu — \\(\\frac{2}{3}\\) z \\(\\frac{3}{4}\\) není \\(\\frac{5}{12}\\).` },
        { label: `\\(\\frac{5}{12}\\)`, value: "D", feedback: `Kritická chyba. Spočítal(a) jsi zbývající podíl, ne zbytek po obou cestách.` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_05", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12E: Škola v přírodě`,
      visual_color: "#e17055", visual_symbol: `x=?`, points: 5, trainingTasks: ["t_slov_05"],
      question: `Na školu v přírodě jelo několik dětí. \\(\\frac{2}{5}\\) z nich šly na výlet do lesa. Z těch, co zůstaly, šla polovina na koupaliště. Na základně zůstalo \\(15\\) dětí.`,
      instruction: `Kolik dětí jelo na školu v přírodě celkem?`,
      choices: [
        { label: `\\(45\\)`, value: "A", feedback: `Chyba protokolu. Zkontroluj práci se zlomky — zkus dosadit \\(45\\) a ověř, zda ti vyjde \\(15\\).` },
        { label: `\\(60\\)`, value: "B", feedback: `Chyba syntaxe. Polovina zbytku není polovina celku — při \\(x = 60\\): výlet \\(24\\), zbytek \\(36\\), koupaliště \\(18\\), základ \\(18 \\neq 15\\).` },
        { label: `\\(75\\)`, value: "C", feedback: `Kritická chyba. Násobil(a) jsi \\(15 \\cdot 5\\) bez zohlednění struktury úlohy.` },
        { label: `\\(50\\)`, value: "D", feedback: `Přístup povolen. \\(\\frac{3}{10} \\cdot 50 = 15\\). Verifikace: výlet \\(20\\), zbytek \\(30\\), koupaliště \\(15\\), základ \\(15\\). ✓` },
      ],
      hints: [
        `Po odchodu na výlet zbývá \\(\\frac{3}{5}\\) dětí. Z tohoto zbytku jde polovina na koupaliště. Jaká část celku tedy zůstala na základně?`,
        `Zbytek na základně je určitý zlomek celku \\(x\\). Tento zlomek krát \\(x\\) se musí rovnat \\(15\\). Jaké je \\(x\\)?`,
      ],
      correctAnswer: "D", reward: { xp: 25 }
    },
    {
      id: "t_slov_05", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12E: Studenti ve třídě`,
      isTraining: true, firewallId: "q_slov_05", visual_color: "#2ecc8a", visual_symbol: `x=?`, points: 0,
      question: `Ve třídě je několik studentů. \\(\\frac{1}{3}\\) z nich odjelo na soutěž. Z těch, co zůstali, odešla \\(\\frac{3}{4}\\) na oběd. Ve třídě zůstalo \\(8\\) studentů.`,
      instruction: `Kolik studentů je ve třídě celkem?`,
      steps: [
        { trigger: `> Krok 1: Zbytek po soutěži`, content: `Po odjezdu zbývá \\(1 - \\frac{1}{3} = \\frac{2}{3}\\) třídy. Na oběd odejdou \\(\\frac{3}{4}\\) z tohoto zbytku — zůstane \\(\\frac{1}{4} \\cdot \\frac{2}{3} = \\frac{1}{6}\\) třídy.` },
        { trigger: `> Krok 2: Rovnice`, content: `\\(\\frac{1}{6} \\cdot x = 8\\). Kolik je \\(x\\)?` },
      ],
      choices: [
        { label: `\\(48\\)`, value: "A", feedback: `Logika potvrzena. \\(\\frac{1}{6} \\cdot 48 = 8\\). ✓` },
        { label: `\\(32\\)`, value: "B", feedback: `Chyba protokolu. Počítal(a) jsi \\(\\frac{1}{4}\\) z celku místo \\(\\frac{1}{4}\\) ze zbytku po soutěži.` },
        { label: `\\(24\\)`, value: "C", feedback: `Chyba syntaxe. Přeskočil(a) jsi jeden krok — výsledek je příliš nízký.` },
        { label: `\\(64\\)`, value: "D", feedback: `Kritická chyba. Pracoval(a) jsi s chybným zlomkem zbytku.` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_06", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12F: Dvě 3D tiskárny`,
      visual_color: "#e17055", visual_symbol: `1/t`, points: 5, trainingTasks: ["t_slov_06"],
      question: `Dvě 3D tiskárny tisknou zakázku prototypů. Tiskárna A by zakázku zvládla sama za \\(6\\) hodin, tiskárna B za \\(10\\) hodin.`,
      instruction: `Za jak dlouho zvládnou zakázku společně?`,
      choices: [
        { label: `\\(3\\) h \\(45\\) min`, value: "A", feedback: `Přístup povolen. \\(\\frac{1}{6} + \\frac{1}{10} = \\frac{4}{15}\\) zakázky/h \\(\\Rightarrow\\) čas \\(= \\frac{15}{4} = 3{,}75\\) h \\(= 3\\) h \\(45\\) min.` },
        { label: `\\(4\\) h`, value: "B", feedback: `Chyba protokolu. Zaokrouhlil(a) jsi — ale výsledek není celé číslo. Spočítej zlomek přesně.` },
        { label: `\\(3\\) h \\(20\\) min`, value: "C", feedback: `Chyba syntaxe. Průměr časů \\(\\frac{6+10}{2} = 8\\) h nevyjde. Sčítáš výkony, ne časy.` },
        { label: `\\(8\\) h`, value: "D", feedback: `Kritická chyba. Průměr časů — ale při spolupráci je to vždy kratší, ne průměr.` },
      ],
      hints: [
        `Výkon každé tiskárny vyjádři jako zlomek zakázky za hodinu: A udělá \\(\\frac{1}{6}\\) za hodinu, B udělá \\(\\frac{1}{10}\\) za hodinu.`,
        `Společný výkon: \\(\\frac{1}{6} + \\frac{1}{10}\\). Najdi společného jmenovatele, sečti, pak převrať na čas.`,
      ],
      correctAnswer: "A", reward: { xp: 25 }
    },
    {
      id: "t_slov_06", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12F: Dva roboti`,
      isTraining: true, firewallId: "q_slov_06", visual_color: "#2ecc8a", visual_symbol: `1/t`, points: 0,
      question: `Robot A vyčistí sklad za \\(4\\) hodiny, robot B za \\(12\\) hodin.`,
      instruction: `Za jak dlouho vyčistí sklad společně?`,
      steps: [
        { trigger: `> Krok 1: Výkony`, content: `Výkon A: \\(\\frac{1}{4}\\) skladu/h. Výkon B: \\(\\frac{1}{12}\\) skladu/h. Součet: \\(\\frac{3}{12} + \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}\\) skladu/h.` },
        { trigger: `> Krok 2: Čas`, content: `Čas \\(= \\frac{1}{\\text{výkon}} = \\frac{1}{\\frac{1}{3}}\\). Kolik hodin to je?` },
      ],
      choices: [
        { label: `\\(3\\) hodiny`, value: "A", feedback: `Logika potvrzena. Společný výkon \\(\\frac{1}{3}\\) skladu/h → čas \\(3\\) h.` },
        { label: `\\(8\\) hodin`, value: "B", feedback: `Chyba protokolu. Průměr časů \\(\\frac{4+12}{2} = 8\\) — ale spolupráce je vždy rychlejší než průměr.` },
        { label: `\\(4\\) hodiny`, value: "C", feedback: `Chyba syntaxe. To je čas robota A samostatně — robot B také přispívá.` },
        { label: `\\(2\\) hodiny`, value: "D", feedback: `Kritická chyba. Příliš optimistické — zkontroluj součet výkonů.` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_07", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12G: Model železnice H0`,
      visual_color: "#e17055", visual_symbol: `1:87`, points: 3, trainingTasks: ["t_slov_07"],
      question: `Na modelu železnice v měřítku \\(1:87\\) (standard H0) měří lokomotiva \\(25\\) cm.`,
      instruction: `Jaká je skutečná délka lokomotivy v metrech?`,
      choices: [
        { label: `\\(3{,}48\\) m`, value: "A", feedback: `Chyba protokolu. Výsledek dělení \\(\\frac{87}{25}\\) — ale skutečná délka je naopak větší, ne menší.` },
        { label: `\\(217{,}5\\) m`, value: "B", feedback: `Chyba syntaxe. Výsledek správný v centimetrech, ale zapomněl(a) jsi převést na metry.` },
        { label: `\\(21{,}75\\) m`, value: "C", feedback: `Přístup povolen. \\(25 \\cdot 87 = 2\\,175\\) cm \\(= 21{,}75\\) m.` },
        { label: `\\(2{,}175\\) m`, value: "D", feedback: `Chyba syntaxe. Dělil(a) jsi \\(1\\,000\\) místo \\(100\\) při převodu cm → m.` },
      ],
      hints: [
        `Měřítko \\(1:87\\) znamená: model je \\(87\\times\\) zmenšený. Skutečná délka \\(=\\) délka modelu \\(\\times\\, 87\\).`,
        `\\(25 \\cdot 87 = ?\\) cm. Výsledek převeď na metry — \\(1\\) m \\(= 100\\) cm.`,
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_slov_07", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12G: Turistická mapa`,
      isTraining: true, firewallId: "q_slov_07", visual_color: "#2ecc8a", visual_symbol: `1:k`, points: 0,
      question: `Na turistické mapě v měřítku \\(1:50\\,000\\) je vzdálenost mezi dvěma chatami \\(6{,}4\\) cm.`,
      instruction: `Jaká je skutečná vzdálenost v kilometrech?`,
      steps: [
        { trigger: `> Krok 1: Skutečná vzdálenost v cm`, content: `\\(6{,}4 \\cdot 50\\,000 = 320\\,000\\) cm.` },
        { trigger: `> Krok 2: Převod na km`, content: `Máš \\(320\\,000\\) cm. Kolik je to kilometrů? (\\(1\\) km \\(= 100\\,000\\) cm)` },
      ],
      choices: [
        { label: `\\(3{,}2\\) km`, value: "A", feedback: `Logika potvrzena. \\(6{,}4 \\cdot 50\\,000 = 320\\,000\\) cm \\(= 3{,}2\\) km.` },
        { label: `\\(32\\) km`, value: "B", feedback: `Chyba protokolu. Dělil(a) jsi \\(10\\,000\\) místo \\(100\\,000\\) při převodu cm → km.` },
        { label: `\\(0{,}32\\) km`, value: "C", feedback: `Chyba syntaxe. Přehlédl(a) jsi jeden řád — výsledek je desetkrát menší.` },
        { label: `\\(320\\) km`, value: "D", feedback: `Kritická chyba. Zapomněl(a) jsi převést centimetry na kilometry.` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_08", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12H: Herní měna RPG`,
      visual_color: "#e17055", visual_symbol: `0.85³`, points: 4, trainingTasks: ["t_slov_08"],
      question: `Hodnota herní měny v online RPG klesá kvůli inflaci každý měsíc o \\(15\\,\\%\\). Hráč má zásobu v hodnotě \\(10\\,000\\) goldů.`,
      instruction: `Jaká bude přibližná hodnota zásoby po \\(3\\) měsících? (zaokrouhlete na celé goldy)`,
      choices: [
        { label: `\\(5\\,500\\)`, value: "A", feedback: `Chyba protokolu. Sečetl(a) jsi \\(3 \\times 15\\,\\% = 45\\,\\%\\) a odečetl(a) od originálu — procenta se nesčítají.` },
        { label: `\\(6\\,141\\)`, value: "B", feedback: `Přístup povolen. \\(10000 \\cdot 0{,}85^3 = 10000 \\cdot 0{,}614125 \\doteq 6\\,141\\).` },
        { label: `\\(7\\,225\\)`, value: "C", feedback: `Chyba syntaxe. Počítal(a) jsi jen \\(2\\) měsíce: \\(10000 \\cdot 0{,}85^2 = 7\\,225\\).` },
        { label: `\\(5\\,000\\)`, value: "D", feedback: `Kritická chyba. Odhad „zhruba polovina" není přesný výpočet.` },
      ],
      hints: [
        `Každý měsíc zbývá \\(85\\,\\%\\) aktuální hodnoty. Po \\(3\\) měsících: \\(10000 \\cdot 0{,}85 \\cdot 0{,}85 \\cdot 0{,}85\\).`,
        `\\(10000 \\cdot 0{,}85^3 = ?\\) Zaokrouhli na celé goldy.`,
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_slov_08", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12H: Rybník v suchu`,
      isTraining: true, firewallId: "q_slov_08", visual_color: "#2ecc8a", visual_symbol: `0.8ⁿ`, points: 0,
      question: `Rybník ztrácí kvůli suchu každý měsíc \\(20\\,\\%\\) objemu vody. Na začátku léta měl \\(5\\,000\\) m³.`,
      instruction: `Kolik m³ zbyde po \\(2\\) měsících?`,
      steps: [
        { trigger: `> Krok 1: Po 1. měsíci`, content: `\\(5000 \\cdot 0{,}80 = 4\\,000\\) m³.` },
        { trigger: `> Krok 2: Po 2. měsíci`, content: `Z \\(4\\,000\\) m³ ubyde dalších \\(20\\,\\%\\): \\(4000 \\cdot 0{,}80 = ?\\)` },
      ],
      choices: [
        { label: `\\(3\\,200\\) m³`, value: "A", feedback: `Logika potvrzena. \\(5000 \\cdot 0{,}8^2 = 3\\,200\\) m³.` },
        { label: `\\(3\\,000\\) m³`, value: "B", feedback: `Chyba protokolu. \\(2 \\times 20\\,\\% = 40\\,\\%\\) z \\(5\\,000\\) — procenta se nesčítají.` },
        { label: `\\(4\\,000\\) m³`, value: "C", feedback: `Chyba syntaxe. To je stav po \\(1\\) měsíci, ne po dvou.` },
        { label: `\\(2\\,560\\) m³`, value: "D", feedback: `Chyba protokolu. Počítal(a) jsi \\(3\\) měsíce místo \\(2\\).` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_09", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12I: Kavárna — zdražení a sleva`,
      visual_color: "#e17055", visual_symbol: `×1.2×0.8`, points: 3, trainingTasks: ["t_slov_09"],
      question: `Kavárna zvýšila cenu cappuccina o \\(20\\,\\%\\). Po stížnostech zákazníků snížila novou cenu o \\(20\\,\\%\\). Původní cena cappuccina byla \\(75\\) Kč.`,
      instruction: `Jaká je výsledná cena cappuccina?`,
      choices: [
        { label: `\\(72\\) Kč`, value: "A", feedback: `Přístup povolen. \\(75 \\cdot 1{,}20 \\cdot 0{,}80 = 72\\) Kč. Stejné procento z různé základny — výsledek je nižší.` },
        { label: `\\(75\\) Kč`, value: "B", feedback: `Chyba protokolu. Zdánlivě logické — \\(+20\\,\\%\\) a \\(-20\\,\\%\\) se ale nevynulují.` },
        { label: `\\(70\\) Kč`, value: "C", feedback: `Chyba syntaxe. Chybný výpočet — zkontroluj oba kroky postupně.` },
        { label: `\\(78\\) Kč`, value: "D", feedback: `Kritická chyba. Přičetl(a) jsi \\(+20\\,\\%\\) a odečetl(a) \\(-20\\,\\%\\) obojí z původní ceny \\(75\\) Kč.` },
      ],
      hints: [
        `\\(+20\\,\\%\\) a \\(-20\\,\\%\\) se nevynulují! Zdražení zvýší základ, ze kterého se pak sleva počítá.`,
        `Nejdřív: \\(75 \\cdot 1{,}20 = 90\\) Kč (po zdražení). Pak: \\(90 \\cdot 0{,}80 = ?\\) (po slevě z vyšší ceny).`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_slov_09", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12I: Streamovací předplatné`,
      isTraining: true, firewallId: "q_slov_09", visual_color: "#2ecc8a", visual_symbol: `×1.25×0.75`, points: 0,
      question: `Cena předplatného streamovací služby vzrostla o \\(25\\,\\%\\) a poté byla snížena o \\(25\\,\\%\\). Původní cena byla \\(200\\) Kč.`,
      instruction: `Jaká je výsledná cena? Je stejná jako původní?`,
      steps: [
        { trigger: `> Krok 1: Po zdražení`, content: `\\(200 \\cdot 1{,}25 = 250\\) Kč.` },
        { trigger: `> Krok 2: Po slevě`, content: `Z ceny \\(250\\) Kč odečti slevu \\(25\\,\\%\\): \\(250 \\cdot 0{,}75 = ?\\) Je výsledek stejný jako původní cena?` },
      ],
      choices: [
        { label: `\\(187{,}50\\) Kč (nižší)`, value: "A", feedback: `Logika potvrzena. \\(200 \\cdot 1{,}25 \\cdot 0{,}75 = 187{,}50\\) Kč.` },
        { label: `\\(200\\) Kč (stejná)`, value: "B", feedback: `Chyba protokolu. \\(+25\\,\\%\\) a \\(-25\\,\\%\\) se nevynulují — proč ne, vysvětlí postup.` },
        { label: `\\(212{,}50\\) Kč (vyšší)`, value: "C", feedback: `Kritická chyba. Přehodil(a) jsi pořadí operací nebo spočítal(a) špatně druhý krok.` },
        { label: `\\(190\\) Kč (nižší)`, value: "D", feedback: `Chyba syntaxe. Výsledek je blízko, ale výpočet někde mírně chybí.` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_slov_10", regionId: "slovni_ulohy", type: "closed", monsterName: `FW_12J: Esportový turnaj`,
      visual_color: "#e17055", visual_symbol: `2/5+1/3`, points: 4, trainingTasks: ["t_slov_10"],
      question: `Tři členové esportového týmu si rozdělují výhru \\(54\\,000\\) Kč. Kapitán dostane \\(\\frac{2}{5}\\) výhry, střelec \\(\\frac{1}{3}\\) výhry a zbytek podpora.`,
      instruction: `Kolik korun dostane podpora?`,
      choices: [
        { label: `\\(21\\,600\\) Kč`, value: "A", feedback: `Chyba protokolu. To je podíl kapitána: \\(\\frac{2}{5} \\cdot 54\\,000 = 21\\,600\\) Kč.` },
        { label: `\\(18\\,000\\) Kč`, value: "B", feedback: `Chyba syntaxe. To je podíl střelce: \\(\\frac{1}{3} \\cdot 54\\,000 = 18\\,000\\) Kč.` },
        { label: `\\(12\\,000\\) Kč`, value: "C", feedback: `Kritická chyba. Chybný zlomkový výpočet zbytku — zkontroluj součet \\(\\frac{2}{5} + \\frac{1}{3}\\).` },
        { label: `\\(14\\,400\\) Kč`, value: "D", feedback: `Přístup povolen. Zbytek \\(= 1 - \\frac{2}{5} - \\frac{1}{3} = \\frac{4}{15}\\). \\(\\frac{4}{15} \\cdot 54\\,000 = 14\\,400\\) Kč.` },
      ],
      hints: [
        `Jakou část výhry dostanou kapitán a střelec dohromady? (\\(\\frac{2}{5} + \\frac{1}{3} = ?\\))`,
        `Společný jmenovatel pro \\(\\frac{2}{5}\\) a \\(\\frac{1}{3}\\) je \\(15\\). Kolik z celku zbude pro podporu?`,
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_slov_10", regionId: "slovni_ulohy", type: "closed", monsterName: `SIM_12J: Účet za elektřinu`,
      isTraining: true, firewallId: "q_slov_10", visual_color: "#2ecc8a", visual_symbol: `½+⅓`, points: 0,
      question: `Tři spolubydlící si rozdělili účet za elektřinu \\(6\\,000\\) Kč. Adam zaplatí \\(\\frac{1}{2}\\), Bára \\(\\frac{1}{3}\\) a zbytek Cyril.`,
      instruction: `Kolik zaplatí Cyril?`,
      steps: [
        { trigger: `> Krok 1: Součet Adama a Báry`, content: `\\(\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}\\).` },
        { trigger: `> Krok 2: Cyrilův podíl`, content: `Zbývá \\(1 - \\frac{5}{6} = \\frac{1}{6}\\). Kolik je \\(\\frac{1}{6}\\) z \\(6\\,000\\) Kč?` },
      ],
      choices: [
        { label: `\\(1\\,000\\) Kč`, value: "A", feedback: `Logika potvrzena. \\(\\frac{1}{6} \\cdot 6\\,000 = 1\\,000\\) Kč.` },
        { label: `\\(2\\,000\\) Kč`, value: "B", feedback: `Chyba protokolu. Zaměnil(a) jsi Cyrila a Báru — \\(\\frac{1}{3} \\cdot 6\\,000 = 2\\,000\\) je Bářin podíl.` },
        { label: `\\(500\\) Kč`, value: "C", feedback: `Chyba syntaxe. Chybný výpočet podílu \\(\\frac{1}{6}\\) z \\(6\\,000\\).` },
        { label: `\\(1\\,500\\) Kč`, value: "D", feedback: `Kritická chyba. Pracoval(a) jsi se zlomkem \\(\\frac{1}{4}\\) místo \\(\\frac{1}{6}\\).` },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_alg_11", regionId: "algebra", type: "closed", monsterName: `FW_01K: Vlastnosti racionálního výrazu`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 3, trainingTasks: ["t_alg_11"],
      question: `Je dán výraz W s reálnou proměnnou x:`,
      formula: `$$W(x) = \\frac{x^{2} + x}{x^{2} - x} + \\frac{1}{x} - \\frac{2}{x - 1}$$`,
      instruction: `Které tvrzení o hodnotách výrazu W je pravdivé?`,
      choices: [
        {
          label: `W(1) = 2`,
          value: "A",
          feedback: `Kritická chyba. Pro x = 1 je výraz nedefinovaný — jmenovatele \\(x^2 - x\\) i \\(x - 1\\) jsou nulové.`
        },
        {
          label: `Hodnota výrazu W nemůže být rovna 1`,
          value: "B",
          feedback: `Přístup povolen. Po zjednodušení \\(W(x) = \\frac{x+1}{x} = 1 + \\frac{1}{x}\\). Rovnice \\(\\frac{1}{x} = 0\\) nemá řešení.`
        },
        {
          label: `Hodnota W je pro x = −1 záporná`,
          value: "C",
          feedback: `Chyba syntaxe. \\(W(-1) = \\frac{-1+1}{-1} = 0\\). Nulová, ne záporná.`
        },
        {
          label: `Hodnota W je kladná pro všechna x v definičním oboru`,
          value: "D",
          feedback: `Nekompletní. Zkus dosadit zápornou hodnotu blízkou nule — například \\(W\\!\\left(-\\tfrac{1}{2}\\right) = -1 < 0\\).`
        },
      ],
      hints: [
        `Tvrzení o hodnotě v konkrétním bodě (A, C) ověříš dosazením — ale nejdřív zkontroluj, zda bod patří do definičního oboru.`,
        `Tvrzení o hodnotě, které výraz nemůže nabývat (B), ověříš rovnicí W(x) = daná hodnota. Tvrzení o znaménku na celém oboru (D) vyvrátíš jediným protipříkladem.`,
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_alg_11", regionId: "algebra", type: "closed", monsterName: `SIM_01K: Hodnota výrazu a definiční obor`,
      isTraining: true, firewallId: "q_alg_11", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Je dán výraz \\(V\\) pro \\(x \\neq 0\\):`,
      formula: `$$V(x) = 1 + \\frac{1}{x}$$`,
      instruction: `Může být \\(V(x) = 1\\) pro nějaké reálné \\(x\\)?`,
      steps: [
        {
          trigger: `> Krok 1: Co je hodnota výrazu?`,
          content: `Hodnota výrazu \\(V(x)\\) je číslo, které dostaneš po dosazení konkrétního \\(x\\). Jaká je \\(V(2)\\)? Dosad sám a zkontroluj.`
        },
        {
          trigger: `> Krok 2: Kdy výraz hodnotu nemá?`,
          content: `Výraz \\(\\frac{1}{x}\\) nemá hodnotu, když je jmenovatel nulový — tedy pro \\(x = 0\\). Pro všechna ostatní \\(x\\) je \\(\\frac{1}{x}\\) nenulové. Co to říká o možné hodnotě \\(V(x) = 1\\)?`
        },
      ],
      choices: [
        {
          label: `Ne, \\(V(x) = 1\\) nemá řešení`,
          value: "A",
          feedback: `Přístup povolen. \\(1 + \\frac{1}{x} = 1\\) by znamenalo \\(\\frac{1}{x} = 0\\) — to pro žádné reálné \\(x\\) neplatí.`
        },
        {
          label: `Ano, pro \\(x = 1\\)`,
          value: "B",
          feedback: `Chyba. \\(V(1) = 1 + \\frac{1}{1} = 2\\), ne 1. Dosaď přesně.`
        },
        {
          label: `Ano, pro velmi velká \\(x\\)`,
          value: "C",
          feedback: `Nekompletní. Pro velká \\(x\\) se \\(V(x)\\) blíží 1, ale nikdy se 1 nerovná — \\(\\frac{1}{x}\\) je malé, ale nenulové.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_alg_13", regionId: "algebra", type: "closed", monsterName: `FW_01M: Mocniny a třetí odmocnina`,
      visual_color: "#7c5cfc", visual_symbol: `x²`, points: 3, trainingTasks: ["t_alg_13"],
      question: `Pro \\(b \\in (0;\\, {+}\\infty)\\) zjednodušte výraz:`,
      formula: `$$\\frac{(b^{2})^{60}}{b^{40} \\cdot \\sqrt[3]{b^{-60}}}$$`,
      instruction: `Vyberte správný výsledek.`,
      choices: [
        {
          label: `\\(b^{100}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\((b^2)^{60} = b^{120}\\), \\(\\sqrt[3]{b^{-60}} = b^{-20}\\), jmenovatel \\(b^{40} \\cdot b^{-20} = b^{20}\\). Výsledek: \\(b^{120-20} = b^{100}\\).`
        },
        {
          label: `\\(b^{60}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Záporný exponent zůstává záporný i po odmocnění — \\(\\sqrt[3]{b^{-60}} = b^{-20}\\), ne \\(b^{+20}\\).`
        },
        {
          label: `\\(b^{140}\\)`,
          value: "C",
          feedback: `Kritická chyba. Třetí odmocnina dělí exponent třemi — nelze ji přeskočit. \\(\\sqrt[3]{b^{-60}} = b^{-20}\\), ne \\(b^{-60}\\).`
        },
        {
          label: `\\(b^{110}\\)`,
          value: "D",
          feedback: `Nekompletní. Pod odmocninou je třetí odmocnina (\\(\\sqrt[3]{\\cdot}\\)), ne druhá. Exponent se dělí 3, ne 2.`
        },
      ],
      hints: [
        `Pravidla pro mocniny: \\((b^m)^n = b^{m \\cdot n}\\), \\(\\; b^m \\cdot b^n = b^{m+n}\\), \\(\\; \\dfrac{b^m}{b^n} = b^{m-n}\\).`,
        `Třetí odmocnina jako mocnina: \\(\\sqrt[3]{b^k} = b^{k/3}\\). Záporný exponent pod odmocninou zůstává záporný.`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_alg_13", regionId: "algebra", type: "closed", monsterName: `SIM_01M: Zjednodušení výrazu s třetí odmocninou`,
      isTraining: true, firewallId: "q_alg_13", visual_color: "#2ecc8a", visual_symbol: `x²`, points: 0,
      question: `Pro \\(x \\in (0;\\, {+}\\infty)\\) zjednodušte výraz:`,
      formula: `$$\\frac{(x^{3})^{4}}{x^{6} \\cdot \\sqrt[3]{x^{-9}}}$$`,
      instruction: `Vyberte správný výsledek.`,
      steps: [
        {
          trigger: `> Krok 1: Mocnina mocniny`,
          content: `Jaké pravidlo platí pro \\((a^m)^n\\)? Aplikuj ho na čitatele.`
        },
        {
          trigger: `> Krok 2: Odmocnina jako mocnina`,
          content: `Přepiš \\(\\sqrt[3]{x^{-9}}\\) jako \\(x\\) na racionální exponent. Čím se dělí exponent u třetí odmocniny?`
        },
        {
          trigger: `> Krok 3: Dělení mocnin`,
          content: `Sečti exponenty ve jmenovateli a odečti od exponentu v čitateli.`
        },
      ],
      choices: [
        {
          label: `\\(x^{9}\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(x^{12} / (x^{6} \\cdot x^{-3}) = x^{12} / x^{3} = x^{9}\\).`
        },
        {
          label: `\\(x^{3}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. \\(\\sqrt[3]{x^{-9}} = x^{-3}\\), ne \\(x^{+3}\\). Znaménko exponentu se odmocněním nemění.`
        },
        {
          label: `\\(x^{15}\\)`,
          value: "C",
          feedback: `Kritická chyba. Třetí odmocnina dělí exponent třemi: \\(-9 / 3 = -3\\), ne \\(-9\\).`
        },
        {
          label: `\\(x^{6}\\)`,
          value: "D",
          feedback: `Nekompletní. Ve jmenovateli je ještě \\(\\sqrt[3]{x^{-9}}\\) — ten člen nelze ignorovat.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_rov_12", regionId: "rovnice", type: "closed", monsterName: `FW_02L: Soustava lineárních nerovnic`,
      visual_color: "#f7b84f", visual_symbol: `x=`, points: 5, trainingTasks: ["t_rov_12"],
      question: `V oboru \\(\\mathbb{R}\\) řešte soustavu nerovnic. Výsledek zapište intervalem.`,
      formula: `$$\\frac{2x + 3}{5} > \\frac{x - 1}{2}$$\n$$4x - 3 \\geq x$$`,
      instruction: `Vyberte správný interval.`,
      choices: [
        {
          label: `\\((1;\\, 11)\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Druhá nerovnice má \\(\\geq\\), takže hranice 1 do intervalu patří — závorka musí být uzavřená.`
        },
        {
          label: `\\(\\langle 1;\\, 11)\\)`,
          value: "B",
          feedback: `Logika potvrzena. Průnik: \\(x \\geq 1\\) a současně \\(x < 11\\).`
        },
        {
          label: `\\(\\langle 1;\\, 11\\rangle\\)`,
          value: "C",
          feedback: `Nekompletní. První nerovnice má \\(>\\), tedy \\(x < 11\\) ostře — hranice 11 do intervalu nepatří.`
        },
        {
          label: `\\((1;\\, 11\\rangle\\)`,
          value: "D",
          feedback: `Kritická chyba. Závorky jsou prohozené — zkontroluj, která nerovnice je ostrá a která ne.`
        },
      ],
      hints: [
        `Ostrá nerovnost (\\(>\\) nebo \\(<\\)) → otevřená závorka. Neostrá (\\(\\geq\\) nebo \\(\\leq\\)) → uzavřená závorka.`,
        `Řeš každou nerovnici zvlášť. Průnik znamená, že obě podmínky musí platit současně.`,
      ],
      correctAnswer: "B", reward: { xp: 25 }
    },
    {
      id: "t_rov_12", regionId: "rovnice", type: "closed", monsterName: `SIM_02L: Průnik dvou nerovností`,
      isTraining: true, firewallId: "q_rov_12", visual_color: "#2ecc8a", visual_symbol: `x=`, points: 0,
      question: `V oboru \\(\\mathbb{R}\\) řešte soustavu nerovnic. Výsledek zapište intervalem.`,
      formula: `$$2x + 1 > 5 \\qquad x \\leq 6$$`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Řešení každé nerovnice`,
          content: `Izoluj \\(x\\) v každé nerovnici zvlášť. Jaké nerovnosti vyjdou? Jsou ostré nebo neostré?`
        },
        {
          trigger: `> Krok 2: Průnik`,
          content: `Obě podmínky musí platit současně. Zakresli si obě řešení na číselnou osu — kde se překrývají?`
        },
      ],
      choices: [
        {
          label: `\\((2;\\, 6\\rangle\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(x > 2\\) (otevřená) a \\(x \\leq 6\\) (uzavřená).`
        },
        {
          label: `\\(\\langle 2;\\, 6\\rangle\\)`,
          value: "B",
          feedback: `Chyba. Nerovnost \\(2x + 1 > 5\\) dává \\(x > 2\\) ostře — 2 do intervalu nepatří.`
        },
        {
          label: `\\((2;\\, 6)\\)`,
          value: "C",
          feedback: `Nekompletní. Nerovnost \\(x \\leq 6\\) zahrnuje rovnost — 6 do intervalu patří.`
        },
        {
          label: `\\(\\langle 2;\\, 6)\\)`,
          value: "D",
          feedback: `Kritická chyba. Závorky jsou prohozené — 2 nepatří (ostrá), 6 patří (neostrá).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    // --- ZÁSTUPNÍ UZLY ---

    {
      id: "q_gon_11", regionId: "goniometrie", type: "closed",
      monsterName: `FW_10K: Průsečíky s osou x`,
      visual_color: "#e040fb", visual_symbol: `y=0`, points: 3, trainingTasks: ["t_gon_11"],
      question: `Pro \\(x \\in \\mathbb{R}\\) je dána funkce:`,
      formula: `$$f\\colon y = \\sin\\!\\left(x - \\frac{\\pi}{6}\\right)$$`,
      instruction: `Nalezněte všechny průsečíky grafu funkce f se souřadnicovou osou x v intervalu \\(\\langle 0;\\, 2\\pi \\rangle\\).`,
      choices: [
        {
          label: `\\(x_1 = \\dfrac{\\pi}{6},\\quad x_2 = \\dfrac{7\\pi}{6}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\sin\\!\\left(x - \\tfrac{\\pi}{6}\\right) = 0 \\Rightarrow x - \\tfrac{\\pi}{6} = n\\pi \\Rightarrow x = \\tfrac{\\pi}{6} + n\\pi\\). V \\(\\langle 0; 2\\pi \\rangle\\): \\(x_1 = \\tfrac{\\pi}{6}\\), \\(x_2 = \\tfrac{7\\pi}{6}\\). ✓`
        },
        {
          label: `\\(x_1 = 0,\\quad x_2 = \\pi\\)`,
          value: "B",
          feedback: `Chyba. Opomenuli jste fázový posun — tato řešení platí pro \\(\\sin(x) = 0\\), ne pro \\(\\sin\\!\\left(x - \\tfrac{\\pi}{6}\\right) = 0\\).`
        },
        {
          label: `\\(x_1 = \\dfrac{\\pi}{6},\\quad x_2 = \\dfrac{5\\pi}{6}\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(x_2 = \\tfrac{5\\pi}{6}\\) by nastalo pro \\(\\sin(x) = 0\\) s posunem \\(+\\tfrac{\\pi}{6}\\), zde je posun opačný. Obecné řešení je \\(x = \\tfrac{\\pi}{6} + n\\pi\\).`
        },
        {
          label: `\\(x_1 = -\\dfrac{\\pi}{6},\\quad x_2 = \\dfrac{5\\pi}{6}\\)`,
          value: "D",
          feedback: `Chyba. Tato řešení jsou mimo interval \\(\\langle 0; 2\\pi \\rangle\\) nebo nevznikají ze správného obecného řešení. Ověřte dosazením: \\(\\sin\\!\\left(\\tfrac{5\\pi}{6} - \\tfrac{\\pi}{6}\\right) = \\sin\\tfrac{2\\pi}{3} \\neq 0\\).`
        },
      ],
      hints: [
        `Na jednotkové kružnici: \\(\\sin\\theta = 0\\) odpovídá bodům, kde se kružnice protíná s vodorovnou osou. Kolik takových bodů je v jednom oběhu a jaké jsou odpovídající úhly?`,
        `Máte-li obecné řešení pro \\(\\theta\\), zaveďte substituci \\(\\theta = x - \\tfrac{\\pi}{6}\\). Která \\(x\\) pak leží v intervalu \\(\\langle 0; 2\\pi \\rangle\\)?`,
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_gon_11", regionId: "goniometrie", type: "closed", monsterName: `SIM_10K: Průsečíky posunutého sinu`,
      isTraining: true, firewallId: "q_gon_11", visual_color: "#2ecc8a", visual_symbol: `y=0`, points: 0,
      formula: null,
      question: `Je dána funkce \\(f\\colon y = \\sin\\!\\left(x - \\dfrac{\\pi}{3}\\right)\\).`,
      instruction: `Najděte všechny průsečíky grafu funkce f se souřadnicovou osou x v intervalu \\(\\langle 0;\\, 2\\pi \\rangle\\).`,
      steps: [
        {
          trigger: `> Krok 1: Podmínka průsečíku s osou x`,
          content: `Průsečík s osou \\(x\\) nastane, když \\(y = 0\\), tedy \\(\\sin\\!\\left(x - \\tfrac{\\pi}{3}\\right) = 0\\).<br>
Zaveďte substituci \\(\\theta = x - \\tfrac{\\pi}{3}\\). Kdy platí \\(\\sin\\theta = 0\\)?`
        },
        {
          trigger: `> Krok 2: Obecné řešení a zpětná substituce`,
          content: `\\(\\sin\\theta = 0\\) nastane pro \\(\\theta = n\\pi\\) (celé násobky \\(\\pi\\)).<br>
Zpět: \\(x - \\tfrac{\\pi}{3} = n\\pi\\), tedy \\(x = \\tfrac{\\pi}{3} + n\\pi\\).<br>
Pro \\(n = 0\\): \\(x_1 = \\tfrac{\\pi}{3}\\). Pro \\(n = 1\\): \\(x_2 = \\tfrac{\\pi}{3} + \\pi = \\tfrac{4\\pi}{3}\\). Obě hodnoty leží v \\(\\langle 0; 2\\pi \\rangle\\). Vyber správnou volbu.`
        },
      ],
      choices: [
        {
          label: `\\(x_1 = \\dfrac{\\pi}{3},\\quad x_2 = \\dfrac{4\\pi}{3}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(x = \\tfrac{\\pi}{3} + n\\pi\\) → \\(x_1 = \\tfrac{\\pi}{3}\\), \\(x_2 = \\tfrac{4\\pi}{3}\\). ✓`
        },
        {
          label: `\\(x_1 = 0,\\quad x_2 = \\pi\\)`,
          value: "B",
          feedback: `Chyba fázového posunu. Tato řešení platí pro \\(\\sin(x) = 0\\), ale funkce je \\(\\sin(x - \\tfrac{\\pi}{3})\\). Fázový posun musíš zahrnout do obecného řešení.`
        },
        {
          label: `\\(x_1 = \\dfrac{\\pi}{3},\\quad x_2 = \\dfrac{2\\pi}{3}\\)`,
          value: "C",
          feedback: `Kritická chyba. \\(\\tfrac{2\\pi}{3}\\) není řešení — ověř: \\(\\sin\\!\\left(\\tfrac{2\\pi}{3} - \\tfrac{\\pi}{3}\\right) = \\sin\\tfrac{\\pi}{3} = \\tfrac{\\sqrt{3}}{2} \\neq 0\\). Druhé řešení se liší o celé \\(\\pi\\), ne o \\(\\tfrac{\\pi}{3}\\).`
        },
        {
          label: `\\(x_1 = \\dfrac{2\\pi}{3},\\quad x_2 = \\dfrac{5\\pi}{3}\\)`,
          value: "D",
          feedback: `Chyba ve směru posunu. Tato řešení vzniknou, pokud posun přičteš místo odečteš. Funkce je \\(\\sin(x - \\tfrac{\\pi}{3})\\), tedy \\(x = \\tfrac{\\pi}{3} + n\\pi\\), ne \\(x = -\\tfrac{\\pi}{3} + n\\pi\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    }
  ]
};
