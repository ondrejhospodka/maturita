const GameData = {
  config: {
    modulesRequiredForCore: 9,
    bypassCost: 50,
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
    {
      id: "q_alg_01", regionId: "algebra", type: "closed", monsterName: "FW-01A: Nulové body",
      visual_color: "#7c5cfc", visual_symbol: "x", points: 2, trainingTasks: ["t_alg_01"],
      question: "Je dán algebraický výraz:",
      formula: "$$ \\frac{x^2 - x - 6}{x^2 - 9} $$",
      instruction: "Nalezněte všechna \\(x\\), pro která je hodnota výrazu rovna nule.",
      choices: [
        { label: "\\(-2; 3\\)", value: "A", feedback: "Zahrnul jsi kořen jmenovatele. Pro \\(x=3\\) výraz nemá smysl." },
        { label: "\\(-3; 3\\)", value: "B", feedback: "Toto jsou omezující podmínky jmenovatele, čitatel jsi neřešil." },
        { label: "\\(-2\\)", value: "D", feedback: "Přístup povolen. Čitatel je nula pro 3 a -2. Kořen 3 vyloučíme kvůli jmenovateli." }
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_alg_01", regionId: "algebra", type: "closed", monsterName: "SIM: Iluze",
      isTraining: true, bossId: "q_alg_01", visual_color: "#2ecc8a", visual_symbol: "0", points: 0,
      question: "Pojďme si ukázat, jak funguje nula ve zlomku.",
      formula: "$$ \\frac{x - 5}{x - 2} = 0 $$",
      instruction: "Pro jaké \\(x\\) se tento zlomek rovná nule?",
      steps: [
        { trigger: "> Krok 1: Kdy je zlomek nula?", content: "Zlomek má hodnotu 0 <b>pouze tehdy</b>, když je jeho čitatel (horní část) roven nule. Položíme tedy \\(x - 5 = 0\\), z čehož vyjde \\(x = 5\\)." },
        { trigger: "> Krok 2: Ověření podmínek", content: "Musíme zkontrolovat, zda pro \\(x = 5\\) není jmenovatel náhodou nula. \\(5 - 2 = 3\\). Jmenovatel nula není, takže řešení \\(x = 5\\) je platné." }
      ],
      choices: [
        { label: "\\(x = 5\\)", value: "A", feedback: "Správně! Čitatel je nula a jmenovatel je nenulový. Zvládneš i těžší výraz." },
        { label: "\\(x = 2\\)", value: "B", feedback: "Pro x=2 je jmenovatel nula. Nulou dělit nelze!" },
        { label: "\\(x = 5\\) i \\(x = 2\\)", value: "C", feedback: "Viz předchozí možnost. Jmenovatel nesmí být nula." }
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_alg_02", regionId: "algebra", type: "closed", monsterName: "FW-01B: Složené výrazy",
      visual_color: "#7c5cfc", visual_symbol: "a", points: 4, trainingTasks: ["t_alg_02"],
      question: "Pro \\(a \\in \\mathbb{R} \\setminus \\{0; 5\\}\\) zjednodušte:",
      formula: "$$ \\frac{\\frac{1}{a} - \\frac{5}{a^2}}{3a - 15} $$",
      instruction: "Vyberte správný výsledek.",
      choices: [
        { label: "\\(\\dfrac{1}{3a^2}\\)", value: "A", feedback: "Přístup povolen. Závorky (a-5) úspěšně zkráceny." },
        { label: "\\(\\dfrac{1}{3a}\\)", value: "B", feedback: "Chyba v krácení. Ve jmenovateli má zůstat a^2." },
        { label: "\\(-\\dfrac{4}{a(3a-15)}\\)", value: "C", feedback: "Nelze odečítat čitatele bez převedení na společného jmenovatele." }
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_alg_02", regionId: "algebra", type: "closed", monsterName: "SIM: Společný jmenovatel",
      isTraining: true, bossId: "q_alg_02", visual_color: "#2ecc8a", visual_symbol: "1/a", points: 0,
      question: "Zjednodušte pouze čitatel složeného zlomku:",
      formula: "$$ \\frac{1}{a} - \\frac{5}{a^2} $$",
      instruction: "Odečtěte zlomky převedením na společného jmenovatele.",
      steps: [
        { trigger: "> Krok 1: Společný jmenovatel", content: "Společný násobek pro 'a' a 'a^2' je 'a^2'." },
        { trigger: "> Krok 2: Rozšíření zlomku", content: "První zlomek vynásob nahoře i dole hodnotou 'a'. Vznikne \\(a/a^2\\)." },
        { trigger: "> Krok 3: Odečtení", content: "Nyní odečteme čitatele: \\((a - 5) / a^2\\)." }
      ],
      choices: [
        { label: "\\(\\dfrac{a-5}{a^2}\\)", value: "A", feedback: "Správně. Nyní použij tento čitatel proti hlavnímu firewallu." },
        { label: "\\(\\dfrac{-4}{a^2}\\)", value: "B", feedback: "Chyba. Od jedničky nelze odečíst pět, zlomky nemají stejný základ." },
        { label: "\\(\\dfrac{a-5}{a^3}\\)", value: "C", feedback: "Jmenovatele jsi vynásobil, ale zbytečně. Společný jmenovatel je a^2." }
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_alg_03", regionId: "algebra", type: "closed", monsterName: "FW-01C: Mocniny",
      visual_color: "#7c5cfc", visual_symbol: "4^n", points: 4, trainingTasks: ["t_alg_03"],
      question: "Pro \\(n \\in \\mathbb{N}\\) upravte na mocninu o základu 4:",
      formula: "$$ 4 \\cdot \\frac{16^{3n}}{4^{2n+1}} $$",
      instruction: "Zvolte správný tvar.",
      choices: [
        { label: "\\(4^{4n}\\)", value: "A", feedback: "Přístup povolen. Úspěšné odečtení exponentů: (6n+1) - (2n+1) = 4n." },
        { label: "\\(4^n\\)", value: "B", feedback: "Chyba. Zapomněl jsi umocnit základ 16 na 4^2." },
        { label: "\\(4^{4n+2}\\)", value: "D", feedback: "Znaménková chyba. Při dělení se exponent jmenovatele odčítá celý: -(2n+1) je -2n-1." }
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_alg_03", regionId: "algebra", type: "closed", monsterName: "SIM: Změna základu",
      isTraining: true, bossId: "q_alg_03", visual_color: "#2ecc8a", visual_symbol: "16", points: 0,
      question: "Než začneš dělit a sčítat exponenty, musíš mít všechny mocniny o stejném základu.",
      formula: "Jak správně přepíšeš výraz \\( 16^{3n} \\) na mocninu o základu 4?",
      instruction: "Vyber správnou úpravu.",
      steps: [
        { trigger: "> Krok 1: Převod základu", content: "Víme, že \\(16 = 4^2\\). Přepíšeme \\(16^{3n}\\) jako \\((4^2)^{3n}\\)." },
        { trigger: "> Krok 2: Umocnění mocniny", content: "Pravidlo říká: \\((x^a)^b = x^{a \\cdot b}\\). Musíme tedy vynásobit \\(2 \\cdot 3n\\)." }
      ],
      choices: [
        { label: "\\(4^{6n}\\)", value: "A", feedback: "Logika potvrzena! Zbytek příkladu už je jen sčítání a odčítání exponentů." },
        { label: "\\(4^{3n+2}\\)", value: "B", feedback: "Při umocňování mocniny se exponenty násobí, ne sčítají." },
        { label: "\\(4^{9n}\\)", value: "C", feedback: "Exponent 3n jsi umocnil na druhou (3×3), ale měl jsi ho jen vynásobit dvěma." }
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    // ==========================================
    // 02. ROVNICE
    // ==========================================
    {
      id: "q_rov_01", regionId: "rovnice", type: "closed", monsterName: "FW-02: Lomené rovnice",
      visual_color: "#f7b84f", visual_symbol: "x=", points: 7, trainingTasks: ["t_rov_01"],
      question: "V oboru \\(\\mathbb{R}\\) řešte:",
      formula: "$$ \\frac{x-2}{x+2} \\cdot \\frac{3}{x} + \\frac{16}{x^2+2x} = \\frac{x}{x+2} $$",
      instruction: "Zvolte správnou množinu řešení.",
      choices: [
        { label: "\\(x = 5\\)", value: "A", feedback: "Přístup povolen. Falešný kořen -2 byl úspěšně odfiltrován." },
        { label: "\\(x \\in \\{-2; 5\\}\\)", value: "B", feedback: "Chyba. Kořen -2 anuluje jmenovatele původní rovnice." },
        { label: "\\(x = -2\\)", value: "C", feedback: "Kritická chyba. Výsledek vede na dělení nulou." },
        { label: "Rovnice nemá řešení", value: "D", feedback: "Chyba výpočtu. Jeden z kořenů je platný." }
      ],
      correctAnswer: "A", reward: { xp: 30 }
    },
    {
      id: "t_rov_01", regionId: "rovnice", type: "closed", monsterName: "SIM: Podmínky",
      isTraining: true, bossId: "q_rov_01", visual_color: "#2ecc8a", visual_symbol: "≠", points: 0,
      question: "Jaké jsou omezující podmínky pro tento algebraický výraz?",
      formula: "$$ \\frac{16}{x^2+2x} $$",
      instruction: "Vyberte správné podmínky řešitelnosti.",
      steps: [
        { trigger: "> Krok 1: Rozklad", content: "Jmenovatel rozlož na součin: x(x + 2)." },
        { trigger: "> Krok 2: Pravidlo nulového bodu", content: "Žádný z činitelů nesmí být nula. Tedy x ≠ 0 a x+2 ≠ 0." }
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
      id: "q_funkce_01", regionId: "funkce", type: "closed", monsterName: "FW-05: Definiční obor",
      visual_color: "#2ecc8a", visual_symbol: "D(f)", points: 2, trainingTasks: ["t_funkce_01"],
      question: "Určete definiční obor funkce:",
      formula: "$$ f(x) = \\frac{\\sqrt{10-2x}}{\\sqrt{x-10}} $$",
      instruction: "Zvolte správný interval.",
      choices: [
        { label: "\\(x \\leq 5\\)", value: "A", feedback: "Zohledněn pouze čitatel. Jmenovatel vychází pro tato čísla záporně." },
        { label: "\\(x > 10\\)", value: "B", feedback: "Zohledněn pouze jmenovatel. Čitatel je pro x>10 záporný." },
        { label: "\\(\\emptyset\\) (prázdná množina)", value: "C", feedback: "Přístup povolen. Průnik podmínek neexistuje." }
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_funkce_01", regionId: "funkce", type: "closed", monsterName: "SIM: Odmocniny",
      isTraining: true, bossId: "q_funkce_01", visual_color: "#2ecc8a", visual_symbol: "√", points: 0,
      question: "Jaká podmínka platí pro výraz nacházející se pod odmocninou, která je navíc ve jmenovateli zlomku?",
      formula: "$$ \\frac{1}{\\sqrt{x-10}} $$",
      instruction: "Zvolte správnou nerovnost.",
      steps: [
        { trigger: "> Krok 1: Odmocnina", content: "Výraz pod sudou odmocninou musí být nezáporný (≥ 0)." },
        { trigger: "> Krok 2: Jmenovatel", content: "Jmenovatel nesmí být nula (≠ 0). Tyto dvě podmínky splynou v ostrou nerovnost." }
      ],
      choices: [
        { label: "\\(x > 10\\)", value: "A", feedback: "Logika potvrzena. Výraz musí být striktně větší než nula." },
        { label: "\\(x \\geq 10\\)", value: "B", feedback: "Chyba. Pro x=10 by ve jmenovateli vznikla nula." },
        { label: "\\(x \\neq 10\\)", value: "C", feedback: "Nekompletní. Odmocnina ze záporného čísla není v R definována." }
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
      id: "q_co_02", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00: Množiny`,
      visual_color: "#00d2ff", visual_symbol: `ℤ`, points: 3, trainingTasks: ["t_co_02"],
      question: `\\(\\mathbb{Z}\\) je množina všech celých čísel, \\(A = (-2;\, 3)\\).`,
      formula: `$$A = ( - 2;\\, 3),\\quad\\mathbb{Z} = \\{\\ldots,\\, - 2,\\, - 1,\\, 0,\\, 1,\\, 2,\\,\\ldots\\}$$`,
      instruction: `Určete všechny prvky množiny A ∩ ℤ.`,
      choices: [
        {
          label: `\\(\\{ - 2, - 1,0,1,2,3\\}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Otevřený interval nezahrnuje krajní body −2 ani 3.`
        },
        {
          label: `\\(\\{ - 1,0,1,2\\}\\)`,
          value: "B",
          feedback: `Přístup povolen. Správně určený otevřený interval — krajní body nepatří.`
        },
        {
          label: `\\(\\{ 0,1,2\\}\\)`,
          value: "C",
          feedback: `Nekompletní. Chybí číslo −1, které leží v intervalu (−2; 3).`
        },
        {
          label: `\\(\\{ - 1,0,1,2,3\\}\\)`,
          value: "D",
          feedback: `Chyba na pravé hranici. Kulatá závorka u 3 znamená, že 3 ∉ A.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_co_02", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Intervaly`,
      isTraining: true, bossId: "q_co_02", visual_color: "#2ecc8a", visual_symbol: `( )`, points: 0,
      question: `Než zkusíš těžší interval, pojďme si ujasnit zápis. Je dán otevřený interval:`,
      formula: `$$A = ( - 1;\\, 2)$$`,
      instruction: `Která z následujících množin obsahuje VŠECHNA celá čísla ležící v intervalu A?`,
      steps: [
        {
          trigger: `> Zobrazit log 1: Kulatá závorka`,
          content: `Kulatá závorka znamená, že hraniční číslo do intervalu <b>nepatří</b>. Čísla \\(-1\\) a \\(2\\) tedy musíme vyřadit.`
        },
        {
          trigger: `> Zobrazit log 2: Výpis čísel`,
          content: `Hledáme celá čísla ostře větší než −1 a ostře menší než 2. Jsou to pouze čísla 0 a 1.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ - 1,0,1,2\\}\\)`,
          value: "A",
          feedback: `Chyba. Hraniční body −1 a 2 do otevřeného intervalu nepatří.`
        },
        {
          label: `\\(\\{ 0,1\\}\\)`,
          value: "B",
          feedback: `Logika potvrzena. Můžeme jít na ostrou verzi.`
        },
        {
          label: `\\(\\{ 0,1,2\\}\\)`,
          value: "C",
          feedback: `Chyba na pravé hranici. Pravá závorka je také kulatá — 2 ∉ A.`
        },
        {
          label: `\\(\\{ 0\\}\\)`,
          value: "D",
          feedback: `Nekompletní. Číslo \\(1\\) je ostře menší než \\(2\\), tedy \\(1 \\in A\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_co_04", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00B: Vennův Stín`,
      visual_color: "#00d2ff", visual_symbol: `∪`, points: 3, trainingTasks: ["t_co_04"],
      question: `Na obrázku jsou množiny A (kruh), B (obdélník) a C (trojúhelník). Čísla v diagramu udávají prvky příslušných oblastí.`,
      diagram: `<svg viewBox="0 0 300 228" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:350px;margin:12px auto;display:block;background:var(--surface2);border:1px solid var(--border);border-radius:8px;">
        <circle cx="100" cy="96" r="82" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="145" y="38" width="92" height="152" fill="none" stroke="currentColor" stroke-width="2"/>
        <polygon points="84,52 84,218 292,218" fill="none" stroke="currentColor" stroke-width="2"/>
        <text x="16" y="60" fill="currentColor" font-size="15" font-weight="bold">A</text>
        <text x="244" y="52" fill="currentColor" font-size="15" font-weight="bold">B</text>
        <text x="60" y="217" fill="currentColor" font-size="15" font-weight="bold">C</text>
        <text x="100" y="50" fill="currentColor" font-size="16" font-weight="bold">5</text>
        <text x="106" y="118" fill="currentColor" font-size="16" font-weight="bold">8</text>
        <text x="163" y="82" fill="currentColor" font-size="16" font-weight="bold">3</text>
        <text x="112" y="148" fill="currentColor" font-size="16" font-weight="bold">6</text>
        <text x="104" y="202" fill="currentColor" font-size="16" font-weight="bold">9</text>
      </svg>`,
      instruction: `Které z následujících tvrzení je pravdivé?`,
      choices: [
        {
          label: `\\(A \\cap B = \\varnothing\\)`,
          value: "A",
          feedback: `Chyba. A a B se překrývají — v průniku leží číslo 8.`
        },
        {
          label: `Všechny prvky patří do alespoň dvou množin`,
          value: "B",
          feedback: `Chyba. Čísla 5, 3 a 9 leží každé jen v jedné množině.`
        },
        {
          label: `\\(B \\cap C = \\varnothing\\)`,
          value: "C",
          feedback: `Přístup povolen. Obdélník B a trojúhelník C se nepřekrývají v žádném prvku.`
        },
        {
          label: `\\(A \\cap C\\) obsahuje právě dva prvky`,
          value: "D",
          feedback: `Chyba. V oblasti \\(A \\cap C\\) leží pouze číslo \\(6\\) — tedy jen jeden prvek.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_co_04", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Průniky`,
      isTraining: true, bossId: "q_co_04", visual_color: "#2ecc8a", visual_symbol: `∩`, points: 0,
      question: `Zkusíme si jednodušší diagram pouze se dvěma množinami A (kruh) a B (obdélník).`,
      instruction: `Která čísla leží v průniku množin A a B (značíme \\(A \\cap B\\))?`,
      steps: [
        {
          trigger: `> Log 1: Co je to průnik?`,
          content: `Průnik dvou množin obsahuje prvky, které patří do obou množin <b>současně</b>.`
        },
        {
          trigger: `> Log 2: Analýza obrázku`,
          content: `Hledej oblast, kde se kruh a obdélník překrývají. Uvnitř tohoto překryvu leží pouze číslo 7.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 4,7\\}\\)`,
          value: "A",
          feedback: `Číslo 4 leží pouze v kruhu A, ne v obdélníku B.`
        },
        {
          label: `\\(\\varnothing\\) (prázdná)`,
          value: "B",
          feedback: `Tvary se překrývají — průnik není prázdný, obsahuje 7.`
        },
        {
          label: `\\(\\{ 2,7\\}\\)`,
          value: "C",
          feedback: `Číslo 2 leží pouze v obdélníku B, ne v kruhu A.`
        },
        {
          label: `\\(\\{ 7\\}\\)`,
          value: "D",
          feedback: `Přesně tak! Číslo 7 je jediné, které leží v obou tvarech.`
        },
      ],
      diagram: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:250px;margin:12px auto;display:block;background:var(--surface2);border:1px solid var(--border);border-radius:8px;"> <circle cx="70" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="2"/> <rect x="90" y="20" width="80" height="80" fill="none" stroke="currentColor" stroke-width="2"/> <text x="10" y="30" fill="currentColor" font-size="15" font-weight="bold">A</text> <text x="180" y="30" fill="currentColor" font-size="15" font-weight="bold">B</text> <text x="50" y="65" fill="currentColor" font-size="16" font-weight="bold">4</text> <text x="105" y="65" fill="currentColor" font-size="16" font-weight="bold">7</text> <text x="145" y="65" fill="currentColor" font-size="16" font-weight="bold">2</text> </svg>`,
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_co_05", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00C: Průnik intervalů`,
      visual_color: "#00d2ff", visual_symbol: `∩`, points: 2, trainingTasks: ["t_co_05a", "t_co_05b"],
      question: `Je dán interval \\(A = \\langle - 3;\\, 7\\rangle\\) a množina \\(B = \\{ x \\in \\mathbb{R};\\  - 5 \\leq x < 4\\}\\).`,
      formula: `$$A \\cap B = \\,?$$`,
      instruction: `Zapište průnik A ∩ B intervalem.`,
      choices: [
        {
          label: `\\(\\langle - 5;\\, 7\\rangle\\)`,
          value: "A",
          feedback: `Kritická chyba. Vzal/a jsi sjednocení, ne průnik. Průnik bere jen to, co sdílejí obě množiny.`
        },
        {
          label: `\\(\\langle - 3;\\, 4\\rangle\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Závorka u \\(4\\) musí být otevřená — \\(B\\) číslo \\(4\\) neobsahuje (podmínka \\(x < 4\\)).`
        },
        {
          label: `\\(( - 3;\\, 4)\\)`,
          value: "C",
          feedback: `Chyba na levé straně. \\(A\\) i \\(B\\) jsou v bodě \\(-3\\) uzavřené (\\(A\\colon \\langle\\), \\(B\\colon -5 \\leq x\\)), závorka musí být uzavřená.`
        },
        {
          label: `\\(\\langle - 3;\\, 4)\\)`,
          value: "D",
          feedback: `Přístup povolen. Levá mez z A (−3, uzavřeno), pravá mez z B (4, otevřeno). Protokol aktualizován.`
        },
      ],
      correctAnswer: "D", reward: { xp: 10 }
    },
    {
      id: "t_co_05a", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Závorky průniku`,
      isTraining: true, bossId: "q_co_05", visual_color: "#2ecc8a", visual_symbol: `∩`, points: 0,
      question: `Je dán interval \\(A = \\langle 1;\\, 8\\rangle\\) a množina \\(B = \\{ x \\in \\mathbb{R};\\ 0 \\leq x < 5\\}\\). Jaká je pravá mez průniku \\(A \\cap B\\) a je uzavřená nebo otevřená?`,
      instruction: `Určete typ pravé závorky v A ∩ B.`,
      steps: [
        {
          trigger: `> Krok 1: Pravá mez`,
          content: `Pravá mez průniku = <b>minimum</b> z pravých mezí obou množin. \\(A\\) končí v \\(8\\), \\(B\\) končí v \\(5\\). \\(\\min(8, 5) = 5\\).`
        },
        {
          trigger: `> Krok 2: Typ závorky`,
          content: `Závorka je uzavřená, pokud <b>obě</b> množiny v tom bodě uzavřené. \\(A\\) je uzavřená v \\(8\\) (ale \\(8 \\neq 5\\)). \\(B\\) je u \\(5\\) <b>otevřená</b> (podmínka říká \\(x < 5\\)). Výsledná závorka je tedy <b>otevřená</b>.`
        },
      ],
      choices: [
        {
          label: `Pravá mez je 8, uzavřená závorka`,
          value: "A",
          feedback: `Chyba. Pravá mez průniku je minimum pravých mezí: \\(\\min(8,5) = 5\\), ne \\(8\\).`
        },
        {
          label: `Pravá mez je 5, uzavřená závorka`,
          value: "B",
          feedback: `Chyba závorky. \\(B\\) říká \\(x < 5\\) — číslo \\(5\\) do \\(B\\) nepatří, závorka musí být otevřená.`
        },
        {
          label: `Pravá mez je 5, otevřená závorka`,
          value: "C",
          feedback: `Logika potvrzena. \\(\\min(8,5)=5\\), \\(B\\) je u \\(5\\) otevřená → závorka otevřená.`
        },
        {
          label: `Pravá mez je 1, uzavřená závorka`,
          value: "D",
          feedback: `Chyba. \\(1\\) je levá mez \\(A\\), ne pravá. Pravá mez průniku = \\(\\min\\)(pravých mezí).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "t_co_05b", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Celkový průnik`,
      isTraining: true, bossId: "q_co_05", visual_color: "#2ecc8a", visual_symbol: `∩`, points: 0,
      question: `Zapište průnik \\(A \\cap B\\), kde \\(A = \\langle 1;\\, 8\\rangle\\) a \\(B = \\langle 0;\\, 5)\\).`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Nakresli si osy`,
          content: `Nakresli číselnou osu a vyznač oba intervaly: \\(A = \\langle 1;\, 8\\rangle\\) (uzavřeno-uzavřeno) a \\(B = \\langle 0;\, 5)\\) (uzavřeno-otevřeno).`
        },
        {
          trigger: `> Krok 2: Vyznač průnik`,
          content: `Průnik je tam, kde se oba intervaly překrývají. Levá mez: \\(\\max(1, 0) = 1\\) (obě uzavřené → uzavřená). Pravá mez: \\(\\min(8, 5) = 5\\) (\\(B\\) otevřená → otevřená).`
        },
        {
          trigger: `> Krok 3: Finální obrázek`,
          content: `\\(A \\cap B = \\langle 1;\, 5)\\). Na obrázku vidíš tři řádky — \\(A\\) nahoře (modrá), \\(B\\) uprostřed (zelená), průnik dole (oranžový).`
        },
      ],
      choices: [
        {
          label: `\\(\\langle 1;\\, 5)\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\max(1,0)=1\\) uzavřeně, \\(\\min(8,5)=5\\) otevřeně.`
        },
        {
          label: `\\(\\langle 0;\\, 8\\rangle\\)`,
          value: "B",
          feedback: `Kritická chyba. To je sjednocení \\(A \\cup B\\), ne průnik.`
        },
        {
          label: `\\(\\langle 1;\\, 5\\rangle\\)`,
          value: "C",
          feedback: `Chyba závorky u \\(5\\). Množina \\(B\\) číslo \\(5\\) neobsahuje \\((x < 5)\\).`
        },
        {
          label: `\\((1;\\, 5)\\)`,
          value: "D",
          feedback: `Chyba závorky u 1. Obě množiny obsahují 1 (uzavřené), závorka musí být uzavřená.`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 188" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker><marker id="iv_arr_r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="context-stroke"/></marker><marker id="iv_arr_l" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="context-stroke"/></marker><marker id="tick" markerWidth="4" markerHeight="8" refX="2" refY="4" orient="auto"><line x1="2" y1="0" x2="2" y2="8" stroke="#64748b" stroke-width="1.5"/></marker></defs><text x="210" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">Průnik A ∩ B</text>
<line x1="35" y1="118" x2="385" y2="118" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr)"/>
<line x1="45.0" y1="112" x2="45.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="45.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">-1</text>
<line x1="78.0" y1="112" x2="78.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="78.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text>
<line x1="111.0" y1="112" x2="111.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="111.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text>
<line x1="144.0" y1="112" x2="144.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="144.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text>
<line x1="177.0" y1="112" x2="177.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="177.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text>
<line x1="210.0" y1="112" x2="210.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="210.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text>
<line x1="243.0" y1="112" x2="243.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="243.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">5</text>
<line x1="276.0" y1="112" x2="276.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="276.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">6</text>
<line x1="309.0" y1="112" x2="309.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="309.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">7</text>
<line x1="342.0" y1="112" x2="342.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="342.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">8</text>
<line x1="375.0" y1="112" x2="375.0" y2="124" stroke="#e2e8f0" stroke-width="1"/>
<text x="375.0" y="138" text-anchor="middle" font-size="11" fill="#e2e8f0">9</text>
<line x1="111.0" y1="42" x2="111.0" y2="118" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="342.0" y1="42" x2="342.0" y2="118" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="111.0" y1="42" x2="342.0" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/>
<circle cx="111.0" cy="42" r="5" fill="#0077bb"/>
<circle cx="342.0" cy="42" r="5" fill="#0077bb"/>
<line x1="78.0" y1="66" x2="78.0" y2="118" stroke="#228833" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="243.0" y1="66" x2="243.0" y2="118" stroke="#228833" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="78.0" y1="66" x2="243.0" y2="66" stroke="#228833" stroke-width="4" stroke-linecap="round"/>
<circle cx="78.0" cy="66" r="5" fill="#228833"/>
<circle cx="243.0" cy="66" r="5" fill="#111827" stroke="#228833" stroke-width="2"/>
<line x1="111.0" y1="90" x2="111.0" y2="118" stroke="#cc4400" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="243.0" y1="90" x2="243.0" y2="118" stroke="#cc4400" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="111.0" y1="90" x2="243.0" y2="90" stroke="#cc4400" stroke-width="4" stroke-linecap="round"/>
<circle cx="111.0" cy="90" r="5" fill="#cc4400"/>
<circle cx="243.0" cy="90" r="5" fill="#111827" stroke="#cc4400" stroke-width="2"/>
<rect x="45.0" y="154.0" width="16" height="8" rx="2" fill="#0077bb"/>
<text x="66.0" y="162" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">A = ⟨1; 8⟩</text>
<rect x="154.0" y="154.0" width="16" height="8" rx="2" fill="#228833"/>
<text x="175.0" y="162" text-anchor="start" font-size="11" font-weight="bold" fill="#228833">B = ⟨0; 5)</text>
<rect x="263.0" y="154.0" width="16" height="8" rx="2" fill="#cc4400"/>
<text x="284.0" y="162" text-anchor="start" font-size="11" font-weight="bold" fill="#cc4400">A ∩ B = ⟨1; 5)</text></svg>`,
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_co_06", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00D: Celá čísla v intervalu`,
      visual_color: "#00d2ff", visual_symbol: `ℤ`, points: 2, trainingTasks: ["t_co_06a", "t_co_06b"],
      question: `\\(\\mathbb{Z}\\) je množina všech celých čísel. Je dán interval \\(A = ( - 3;\\, 5\\rangle\\).`,
      formula: `$$A \\cap \\mathbb{Z} = \\,?$$`,
      instruction: `Určete všechny prvky množiny A ∩ ℤ.`,
      choices: [
        {
          label: `\\(\\{ - 2,\\, - 1,\\, 0,\\, 1,\\, 2,\\, 3,\\, 4,\\, 5\\}\\)`,
          value: "A",
          feedback: `Logika potvrzena. Interval je otevřený vlevo (\\(-3 \\notin A\\)), uzavřený vpravo (\\(5 \\in A\\)).`
        },
        {
          label: `\\(\\{ - 3,\\, - 2,\\, - 1,\\, 0,\\, 1,\\, 2,\\, 3,\\, 4,\\, 5\\}\\)`,
          value: "B",
          feedback: `Chyba. Interval \\((-3;\, 5\\rangle\\) je otevřený vlevo. Číslo \\(-3\\) není prvkem intervalu.`
        },
        {
          label: `\\(\\{ - 2,\\, - 1,\\, 0,\\, 1,\\, 2,\\, 3,\\, 4\\}\\)`,
          value: "C",
          feedback: `Chyba. Pravá závorka \\(\\rangle\\) je uzavřená — číslo \\(5\\) do intervalu patří.`
        },
        {
          label: `\\(\\{ - 3,\\, - 2,\\, - 1,\\, 0,\\, 1,\\, 2,\\, 3,\\, 4\\}\\)`,
          value: "D",
          feedback: `Dvojitá chyba. \\(-3 \\notin A\\) (otevřená závorka) a \\(5 \\in A\\) (uzavřená závorka).`
        },
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_co_06a", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Závorky a celá čísla`,
      isTraining: true, bossId: "q_co_06", visual_color: "#2ecc8a", visual_symbol: `ℤ`, points: 0,
      question: `Je dán interval \\(A = \\langle - 2;\\, 3)\\). Patří číslo \\(- 2\\) do množiny \\(A \\cap \\mathbb{Z}\\)?`,
      instruction: `Rozhodněte, zda −2 patří do A ∩ ℤ.`,
      steps: [
        {
          trigger: `> Krok 1: Je −2 v intervalu A?`,
          content: `Interval \\(\\langle -2; 3 )\\) má <b>uzavřenou</b> levou závorku — číslo −2 do intervalu <b>patří</b>.`
        },
        {
          trigger: `> Krok 2: Je −2 celé číslo?`,
          content: `\\(-2 \\in \\mathbb{Z}\\)? Ano, \\(-2\\) je celé číslo. Tedy \\(-2 \\in A\\) i \\(-2 \\in \\mathbb{Z}\\) → \\(-2 \\in A \\cap \\mathbb{Z}\\).`
        },
      ],
      choices: [
        {
          label: `Ne, \\(- 2 \\notin A \\cap \\mathbb{Z}\\)`,
          value: "A",
          feedback: `Chyba. Závorka \\(\\langle\\) je uzavřená — levá mez patří do intervalu.`
        },
        {
          label: `Ano, \\(- 2 \\in A \\cap \\mathbb{Z}\\)`,
          value: "B",
          feedback: `Správně. \\(\\langle -2;3)\\) je uzavřený vlevo → \\(-2 \\in A\\). \\(-2 \\in \\mathbb{Z}\\). Průnik obsahuje \\(-2\\).`
        },
        {
          label: `−2 není celé číslo`,
          value: "C",
          feedback: `Kritická chyba. \\(-2\\) je celé číslo. \\(\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, \\ldots\\}\\)`
        },
        {
          label: `Záleží na tom, zda je závorka kulatá nebo hranatá`,
          value: "D",
          feedback: `Správná úvaha, ale nedotažená. Závorka \\(\\langle\\) je hranatá = uzavřená → \\(-2 \\in A\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "t_co_06b", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Kompletní průnik se ℤ`,
      isTraining: true, bossId: "q_co_06", visual_color: "#2ecc8a", visual_symbol: `ℤ`, points: 0,
      question: `Vypište všechna celá čísla z intervalu \\(A = \\langle - 1;\\, 3\\rangle\\).`,
      instruction: `Vyberte správnou množinu A ∩ ℤ.`,
      steps: [
        {
          trigger: `> Krok 1: Závorky`,
          content: `Interval \\(\\langle -1;\, 3\\rangle\\) má <b>obě závorky uzavřené</b> — obě krajní hodnoty do intervalu patří.`
        },
        {
          trigger: `> Krok 2: Výpis`,
          content: `Celá čísla od −1 do 3 (včetně): −1, 0, 1, 2, 3. Tedy 5 prvků.`
        },
        {
          trigger: `> Krok 3: Obrázek`,
          content: `Na číselné ose vidíš uzavřený interval \\(\\langle -1;\, 3\\rangle\\) s plnými kolečky na obou koncích.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 0,1,2\\}\\)`,
          value: "A",
          feedback: `Nekompletní. Krajní body −1 a 3 do intervalu patří (obě závorky uzavřené).`
        },
        {
          label: `\\(\\{ - 1,0,1,2\\}\\)`,
          value: "B",
          feedback: `Chybí číslo \\(3\\). Pravá závorka \\(\\rangle\\) je uzavřená — \\(3 \\in A\\).`
        },
        {
          label: `\\(\\{ - 1,0,1,2,3\\}\\)`,
          value: "C",
          feedback: `Logika potvrzena. Obě závorky uzavřené, všech 5 celých čísel patří.`
        },
        {
          label: `\\(\\{ - 1,0,1,2,3,4\\}\\)`,
          value: "D",
          feedback: `Chyba. \\(4 > 3\\) — leží mimo pravou mez intervalu.`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker><marker id="iv_arr_r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="context-stroke"/></marker><marker id="iv_arr_l" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="context-stroke"/></marker><marker id="tick" markerWidth="4" markerHeight="8" refX="2" refY="4" orient="auto"><line x1="2" y1="0" x2="2" y2="8" stroke="#64748b" stroke-width="1.5"/></marker></defs><text x="210" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">A = ⟨−1; 3⟩ a jeho doplněk v ℝ</text>
<line x1="35" y1="70" x2="385" y2="70" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr)"/>
<line x1="45.0" y1="64" x2="45.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="45.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-4</text>
<line x1="78.0" y1="64" x2="78.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="78.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-3</text>
<line x1="111.0" y1="64" x2="111.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="111.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-2</text>
<line x1="144.0" y1="64" x2="144.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="144.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-1</text>
<line x1="177.0" y1="64" x2="177.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="177.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text>
<line x1="210.0" y1="64" x2="210.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="210.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text>
<line x1="243.0" y1="64" x2="243.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="243.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text>
<line x1="276.0" y1="64" x2="276.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="276.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text>
<line x1="309.0" y1="64" x2="309.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="309.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text>
<line x1="342.0" y1="64" x2="342.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="342.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">5</text>
<line x1="375.0" y1="64" x2="375.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="375.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">6</text>
<line x1="144.0" y1="42" x2="144.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="276.0" y1="42" x2="276.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="144.0" y1="42" x2="276.0" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/>
<circle cx="144.0" cy="42" r="5" fill="#0077bb"/>
<circle cx="276.0" cy="42" r="5" fill="#0077bb"/>
<rect x="162.1" y="106.0" width="16" height="8" rx="2" fill="#0077bb"/>
<text x="183.1" y="114" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">A = ⟨−1; 3⟩</text></svg>`,
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_co_07", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00E: Procenta z mocniny`,
      visual_color: "#00d2ff", visual_symbol: `2ⁿ`, points: 3, trainingTasks: ["t_co_07a", "t_co_07b"],
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
          feedback: `Přístup povolen. \\(25\,\\% = \\tfrac{1}{4} = 2^{-2}\\), výsledek \\(2^{-2} \\cdot 2^{800} = 2^{798}\\). Protokol ověřen.`
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
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_co_07a", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Procenta jako mocnina`,
      isTraining: true, bossId: "q_co_07", visual_color: "#2ecc8a", visual_symbol: `2ⁿ`, points: 0,
      question: `Vyjádřete 50 % jako mocninu čísla 2.`,
      formula: `$$50\\% = 2^{\\,?}$$`,
      instruction: `Doplňte exponent.`,
      steps: [
        {
          trigger: `> Krok 1: 50 % jako zlomek`,
          content: `50 % = \\(\\frac{1}{2}\\). Teď stačí vyjádřit \\(\\frac{1}{2}\\) jako mocninu 2.`
        },
        {
          trigger: `> Krok 2: Záporný exponent`,
          content: `\\(2^{-1} = \\frac{1}{2^1} = \\frac{1}{2}\\). Tedy <b>50 % = 2⁻¹</b>.`
        },
      ],
      choices: [
        {
          label: `\\(2^{50}\\)`,
          value: "A",
          feedback: `Chyba. \\(2^{50}\\) je obrovské číslo, ne \\(\\tfrac{1}{2}\\).`
        },
        {
          label: `\\(2^{0,5}\\)`,
          value: "B",
          feedback: `Chyba. \\(2^{0{,}5} = \\sqrt{2} \\approx 1{,}414\\), to není \\(50\,\\% = 0{,}5\\).`
        },
        {
          label: `\\(2^{- 1}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(50\,\\% = \\tfrac{1}{2} = 2^{-1}\\). Teď v hlavní úloze použiješ \\(25\,\\% = 2^{-2}\\).`
        },
        {
          label: `\\(2^{1}\\)`,
          value: "D",
          feedback: `Chyba. \\(2^1 = 2\\), to není polovina.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "t_co_07b", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Sčítání exponentů`,
      isTraining: true, bossId: "q_co_07", visual_color: "#2ecc8a", visual_symbol: `2ⁿ`, points: 0,
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
          content: `\\(2^{-2} \\cdot 2^{20} = 2^{-2+20} = 2^{18}\\). Výsledek je <b>2¹⁸</b>.`
        },
      ],
      choices: [
        {
          label: `\\(2^{18}\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(-2 + 20 = 18\\). V hlavní úloze použij stejný princip s \\(2^{-2} \\cdot 2^{800}\\).`
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
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_co_09", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00G: Absolutní hodnota — podmínky`,
      visual_color: "#00d2ff", visual_symbol: ``, points: 3, trainingTasks: ["t_co_09"],
      question: `Množina M obsahuje všechna reálná čísla splňující současně dvě podmínky: – číslo je větší nebo rovno \\(- 2\\), – absolutní hodnota čísla je menší než \\(5\\).`,
      formula: `$$M = \\{ x \\in \\mathbb{R};\\ x \\geq - 2\\text{\\ a\\ zároveň\\ }|x| < 5\\}$$`,
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
          feedback: `Kritická chyba. Ignoroval/a jsi podmínku \\(x \\geq -2\\). Výsledek je průnik \\((-5;5)\\) a \\(\\langle -2;+\\infty)\\), tedy \\(\\langle -2;5)\\).`
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
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_co_09", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Absolutní hodnota jako interval`,
      isTraining: true, bossId: "q_co_09", visual_color: "#2ecc8a", visual_symbol: ``, points: 0,
      question: `Pro která reálná čísla platí \\(|x| < 4\\)? Zapište intervalem.`,
      formula: `$$|x| < 4$$`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Rozepsání absolutní hodnoty`,
          content: `\\(|x| < 4\\) znamená vzdálenost \\(x\\) od nuly je menší než 4. Jinými slovy: \\(-4 < x < 4\\).`
        },
        {
          trigger: `> Krok 2: Zápis intervalem`,
          content: `Obě závorky otevřené (ostrá nerovnost). Výsledek: \\((-4;\\, 4)\\).`
        },
        {
          trigger: `> Krok 3: Obrázek`,
          content: `Na číselné ose vidíš otevřený interval (−4; 4) — prázdná kolečka na obou koncích.`
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
          feedback: `Přístup povolen. \\(|x|<4 \\Rightarrow -4<x<4\\) → interval \\((-4;4)\\).`
        },
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
      id: "q_co_10", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00H: Prvky mimo průnik`,
      visual_color: "#00d2ff", visual_symbol: `∖`, points: 2, trainingTasks: ["t_co_10"],
      question: `Je dán interval \\(A = (1;\\, 6)\\) a množina \\(B = \\{ 1,\\, 2,\\, 3,\\, 4,\\, 5,\\, 6,\\, 7\\}\\).`,
      instruction: `Uveďte všechny prvky množiny B, které nepatří do průniku A ∩ B.`,
      choices: [
        {
          label: `\\(\\{ 7\\}\\)`,
          value: "A",
          feedback: `Chyba. Zapomněl/a jsi, že interval (1;6) je otevřený — čísla 1 ani 6 do A nepatří.`
        },
        {
          label: `\\(\\{ 1,\\, 6,\\, 7\\}\\)`,
          value: "B",
          feedback: `Logika potvrzena. Průnik \\(A \\cap B = \\{2,3,4,5\\}\\). Prvky \\(B\\) mimo průnik: \\(\\{1,6,7\\}\\).`
        },
        {
          label: `\\(\\{ 1,\\, 2,\\, 3,\\, 4,\\, 5,\\, 6,\\, 7\\}\\)`,
          value: "C",
          feedback: `Kritická chyba. Průnik \\(A \\cap B\\) není prázdný — celá čísla \\(2,3,4,5\\) leží v otevřeném intervalu \\((1;6)\\).`
        },
        {
          label: `\\(\\{ 6,\\, 7\\}\\)`,
          value: "D",
          feedback: `Chyba. Číslo 1 také nepatří do průniku — interval je otevřený vlevo: 1 ∉ (1;6).`
        },
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_co_10", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Otevřený interval a jeho prvky`,
      isTraining: true, bossId: "q_co_10", visual_color: "#2ecc8a", visual_symbol: `∖`, points: 0,
      question: `Patří číslo \\(3\\) do intervalu \\((3;\\, 7)\\)?`,
      instruction: `Rozhodněte, zda 3 ∈ (3;7).`,
      steps: [
        {
          trigger: `> Krok 1: Otevřená závorka`,
          content: `Interval (3;7) má na levé straně <b>kulatou závorku</b> — levá mez 3 do intervalu <b>nepatří</b>.`
        },
        {
          trigger: `> Krok 2: Závěr`,
          content: `Protože 3 ∉ (3;7), číslo 3 také nepatří do žádného průniku (3;7) s jinou množinou.`
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
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_co_16", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00N: Klasifikace čísel`,
      visual_color: "#00d2ff", visual_symbol: `ℚ`, points: 2, trainingTasks: ["t_co_16"],
      question: `Která z následujících čísel patří do množiny \\(\\mathbb{Q}\\) (racionálních čísel), ale NEPATŘÍ do množiny \\(\\mathbb{Z}\\) (celých čísel)?`,
      instruction: `Vyberte číslo z ℚ \\ ℤ.`,
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
          feedback: `Logika potvrzena. \\(\\tfrac{3}{7} \\in \\mathbb{Q}\\) (zlomek dvou celých čísel). \\(\\tfrac{3}{7} \\notin \\mathbb{Z}\\). Správná volba.`
        },
      ],
      correctAnswer: "D", reward: { xp: 10 }
    },
    {
      id: "t_co_16", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Číselné obory — hierarchie`,
      isTraining: true, bossId: "q_co_16", visual_color: "#2ecc8a", visual_symbol: `ℚ`, points: 0,
      question: `Platí \\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\)? Patří číslo \\(4\\) do \\(\\mathbb{Q}\\)?`,
      instruction: `Rozhodněte, zda 4 ∈ ℚ.`,
      steps: [
        {
          trigger: `> Krok 1: Hierarchie oborů`,
          content: `\\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\). Každé přirozené číslo je i celé, každé celé je i racionální, každé racionální je i reálné.`
        },
        {
          trigger: `> Krok 2: Kde leží 4?`,
          content: `\\(4 \\in \\mathbb{N}\\). Protože \\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}\\), platí \\(4 \\in \\mathbb{Q}\\). Lze zapsat jako \\(\\tfrac{4}{1}\\).`
        },
        {
          trigger: `> Krok 3: Diagram hierarchie`,
          content: `Na obrázku vidíš vnořené obdélníky: ℕ uvnitř ℤ, ℤ uvnitř ℚ, ℚ uvnitř ℝ.`
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
          feedback: `Správně. \\(4 \\in \\mathbb{N} \\subset \\mathbb{Q}\\). Každé přirozené číslo je racionální.`
        },
        {
          label: `4 ∈ ℚ jen pokud 4 ∉ ℤ`,
          value: "C",
          feedback: `Kritická chyba. ℚ je nadmnožina ℤ — celá čísla jsou automaticky i racionální.`
        },
        {
          label: `4 ∈ ℚ, ale ne vždy`,
          value: "D",
          feedback: `Chyba. Příslušnost k číselným oborům je stálá — \\(4 \\in \\mathbb{Q}\\) platí vždy.`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker><marker id="iv_arr_r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="context-stroke"/></marker><marker id="iv_arr_l" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="context-stroke"/></marker><marker id="tick" markerWidth="4" markerHeight="8" refX="2" refY="4" orient="auto"><line x1="2" y1="0" x2="2" y2="8" stroke="#64748b" stroke-width="1.5"/></marker></defs><text x="210" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">Délka intervalu ⟨−4; 2⟩</text>
<line x1="35" y1="70" x2="385" y2="70" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr)"/>
<line x1="45.0" y1="64" x2="45.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="45.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-6</text>
<line x1="78.0" y1="64" x2="78.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="78.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-5</text>
<line x1="111.0" y1="64" x2="111.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="111.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-4</text>
<line x1="144.0" y1="64" x2="144.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="144.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-3</text>
<line x1="177.0" y1="64" x2="177.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="177.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-2</text>
<line x1="210.0" y1="64" x2="210.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="210.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">-1</text>
<line x1="243.0" y1="64" x2="243.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="243.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text>
<line x1="276.0" y1="64" x2="276.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="276.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text>
<line x1="309.0" y1="64" x2="309.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="309.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text>
<line x1="342.0" y1="64" x2="342.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="342.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text>
<line x1="375.0" y1="64" x2="375.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="375.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text>
<line x1="111.0" y1="42" x2="111.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="309.0" y1="42" x2="309.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="111.0" y1="42" x2="309.0" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/>
<circle cx="111.0" cy="42" r="5" fill="#0077bb"/>
<circle cx="309.0" cy="42" r="5" fill="#0077bb"/>
<rect x="175.7" y="106.0" width="16" height="8" rx="2" fill="#0077bb"/>
<text x="196.7" y="114" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">⟨−4; 2⟩</text></svg>`,
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_co_17", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00O: Doplněk množiny`,
      visual_color: "#00d2ff", visual_symbol: `Aᶜ`, points: 3, trainingTasks: ["t_co_17"],
      question: `Je dána množina \\(A = \\langle - 3;\\, 5)\\) jako podmnožina \\(\\mathbb{R}\\).`,
      instruction: `Zapište doplněk A' = ℝ \\ A intervalem.`,
      choices: [
        {
          label: `\\(( - \\infty;\\, - 3) \\cup \\langle 5;\\, + \\infty)\\)`,
          value: "A",
          feedback: `Přístup povolen. Doplněk vylučuje ⟨−3;5). Levá část: (−∞;−3) otevřeně (−3 ∈ A). Pravá část: ⟨5;+∞) uzavřeně (5 ∉ A).`
        },
        {
          label: `\\(( - \\infty;\\, - 3\\rangle \\cup (5;\\, + \\infty)\\)`,
          value: "B",
          feedback: `Chyba závorek. −3 ∈ A (uzavřená závorka), v doplňku nesmí být. 5 ∉ A (otevřená závorka), v doplňku musí být.`
        },
        {
          label: `\\(( - 3;\\, 5)\\)`,
          value: "C",
          feedback: `Kritická chyba. To je vnitřek A, ne doplněk. Doplněk jsou čísla, která do A nepatří.`
        },
        {
          label: `\\(( - \\infty;\\, - 3) \\cup (5;\\, + \\infty)\\)`,
          value: "D",
          feedback: `Chyba u pravé části. 5 ∉ A (otevřená závorka u 5), takže 5 ∈ A'. Závorka u 5 musí být uzavřená.`
        },
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_co_17", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Doplněk — co chybí`,
      isTraining: true, bossId: "q_co_17", visual_color: "#2ecc8a", visual_symbol: `Aᶜ`, points: 0,
      question: `Je dána množina \\(A = (2;\\, 8)\\) v základní množině \\(\\mathbb{R}\\). Patří číslo \\(2\\) do doplňku \\(A'\\)?`,
      instruction: `Rozhodněte, zda 2 ∈ A'.`,
      steps: [
        {
          trigger: `> Krok 1: Co je doplněk?`,
          content: `V doplňku \\(A'\\) je <b>vše, co není v původní množině \\(A\\)</b>. Tedy \\(A' = \\mathbb{R} \\setminus A\\).`
        },
        {
          trigger: `> Krok 2: Je 2 v A?`,
          content: `\\(A = (2;8)\\) je <b>otevřený</b> interval. Číslo \\(2\\) do \\(A\\) <b>nepatří</b> (kulatá závorka).`
        },
        {
          trigger: `> Krok 3: Závěr s obrázkem`,
          content: `Protože \\(2 \\notin A\\) a \\(2 \\in \\mathbb{R}\\), platí \\(2 \\in A'\\). Na ose vidíš prázdné kolečko u \\(2\\) — to potvrzuje, že \\(2 \\notin A\\).`
        },
      ],
      choices: [
        {
          label: `Ne, \\(2 \\notin A'\\)`,
          value: "A",
          feedback: `Chyba. 2 není v A (otevřená závorka), takže patří do doplňku.`
        },
        {
          label: `Záleží na základní množině`,
          value: "B",
          feedback: `Základní množina je \\(\\mathbb{R}\\) — to je dáno zadáním. \\(2 \\in \\mathbb{R}\\) a \\(2 \\notin A\\) → \\(2 \\in A'\\).`
        },
        {
          label: `Ano, \\(2 \\in A'\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(2 \\notin (2;8)\\), tedy \\(2 \\in A'\\).`
        },
        {
          label: `2 leží na hranici, nelze určit`,
          value: "D",
          feedback: `Lze určit jednoznačně. Kulatá závorka → \\(2 \\notin A\\) → \\(2 \\in A'\\).`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" style="width:100%;max-width:420px;display:block;margin:12px auto;background:#111827;border:1px solid var(--panel-border,#1a2544);border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e2e8f0"/></marker><marker id="iv_arr_r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="context-stroke"/></marker><marker id="iv_arr_l" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="context-stroke"/></marker><marker id="tick" markerWidth="4" markerHeight="8" refX="2" refY="4" orient="auto"><line x1="2" y1="0" x2="2" y2="8" stroke="#64748b" stroke-width="1.5"/></marker></defs><text x="210" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#e2e8f0">2 ∉ A = (2; 8)  →  2 ∈ A'</text>
<line x1="35" y1="70" x2="385" y2="70" stroke="#e2e8f0" stroke-width="1.5" marker-end="url(#arr)"/>
<line x1="45.0" y1="64" x2="45.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="45.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">0</text>
<line x1="78.0" y1="64" x2="78.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="78.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">1</text>
<line x1="111.0" y1="64" x2="111.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="111.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">2</text>
<line x1="144.0" y1="64" x2="144.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="144.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">3</text>
<line x1="177.0" y1="64" x2="177.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="177.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">4</text>
<line x1="210.0" y1="64" x2="210.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="210.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">5</text>
<line x1="243.0" y1="64" x2="243.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="243.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">6</text>
<line x1="276.0" y1="64" x2="276.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="276.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">7</text>
<line x1="309.0" y1="64" x2="309.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="309.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">8</text>
<line x1="342.0" y1="64" x2="342.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="342.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">9</text>
<line x1="375.0" y1="64" x2="375.0" y2="76" stroke="#e2e8f0" stroke-width="1"/>
<text x="375.0" y="90" text-anchor="middle" font-size="11" fill="#e2e8f0">10</text>
<line x1="111.0" y1="42" x2="111.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="309.0" y1="42" x2="309.0" y2="70" stroke="#0077bb" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
<line x1="111.0" y1="42" x2="309.0" y2="42" stroke="#0077bb" stroke-width="4" stroke-linecap="round"/>
<circle cx="111.0" cy="42" r="5" fill="#111827" stroke="#0077bb" stroke-width="2"/>
<circle cx="309.0" cy="42" r="5" fill="#111827" stroke="#0077bb" stroke-width="2"/>
<rect x="165.5" y="106.0" width="16" height="8" rx="2" fill="#0077bb"/>
<text x="186.5" y="114" text-anchor="start" font-size="11" font-weight="bold" fill="#0077bb">A = (2; 8)</text></svg>`,
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_co_19", regionId: "ciselne_obory", type: "closed", monsterName: `FW-00Q: Absolutní hodnota — nerovnice`,
      visual_color: "#00d2ff", visual_symbol: ``, points: 3, trainingTasks: ["t_co_19"],
      question: `Určete množinu všech reálných čísel \\(x\\), pro která platí nerovnice:`,
      formula: `$$|x - 2| \\leq 5$$`,
      instruction: `Zapište řešení intervalem.`,
      choices: [
        {
          label: `\\(\\langle - 7;\\, 3\\rangle\\)`,
          value: "A",
          feedback: `Chyba. Zřejmě jsi dosadil/a špatně — výsledek odpovídá \\(|x+2| \\leq 5\\). U \\(|x-2|\\) dostaneš \\(-3\\) a \\(7\\).`
        },
        {
          label: `\\(( - \\infty;\\, - 3\\rangle \\cup \\langle 7;\\, + \\infty)\\)`,
          value: "B",
          feedback: `Kritická chyba. Toto je řešení \\(|x-2| \\geq 5\\), ne \\(\\leq 5\\). Oba výsledky jsou vzájemně doplňkové.`
        },
        {
          label: `\\(\\langle - 3;\\, 7\\rangle\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(|x-2| \\leq 5 \\Rightarrow -5 \\leq x-2 \\leq 5 \\Rightarrow -3 \\leq x \\leq 7\\). Obě závorky uzavřené \\((\\leq)\\).`
        },
        {
          label: `\\(( - 3;\\, 7)\\)`,
          value: "D",
          feedback: `Chyba závorek. Nerovnost je neostá \\((\\leq)\\), ne ostrá \\((<)\\). Závorky musí být uzavřené.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_co_19", regionId: "ciselne_obory", type: "closed", monsterName: `SIM: Rozepsání absolutní hodnoty`,
      isTraining: true, bossId: "q_co_19", visual_color: "#2ecc8a", visual_symbol: ``, points: 0,
      question: `Rozepište nerovnici \\(|x - 3| \\leq 4\\) bez absolutní hodnoty.`,
      formula: `$$|x - 3| \\leq 4$$`,
      instruction: `Vyberte správný zápis bez absolutní hodnoty.`,
      steps: [
        {
          trigger: `> Krok 1: Geometrický význam`,
          content: `Hledáme \\(x\\) vzdálené od \\(3\\) <b>méně než 4</b> (nebo rovno 4). Na číselné ose: čísla v okolí bodu \\(3\\) o poloměru \\(4\\).`
        },
        {
          trigger: `> Krok 2: Pravidlo pro |x−a| ≤ k`,
          content: `Pokud \\(|x - a| \\leq k\\), pak <b>−k ≤ x − a ≤ k</b>. Dosadíme: a = 3, k = 4.`
        },
        {
          trigger: `> Krok 3: Výpočet a obrázek`,
          content: `\\(-4 \\leq x - 3 \\leq 4\\). Přičteme \\(3\\): \\(-1 \\leq x \\leq 7\\). Na ose: uzavřený interval \\(\\langle -1;\, 7\\rangle\\).`
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
          feedback: `Přístup povolen. \\(-4 \\leq x-3 \\leq 4 \\Rightarrow -1 \\leq x \\leq 7\\).`
        },
        {
          label: `\\(x \\leq 7\\text{\\ nebo\\ }x \\geq - 1\\)`,
          value: "C",
          feedback: `Chyba logiky. Musí platit OBĚ podmínky současně (spojka \\(\\wedge\\)), ne \\(\\vee\\).`
        },
        {
          label: `\\(x \\leq - 1\\text{\\ nebo\\ }x \\geq 7\\)`,
          value: "D",
          feedback: `Kritická chyba. To je řešení \\(|x-3| \\geq 4\\). Obrátil/a jsi nerovnost.`
        },
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
      id: "q_rov_02", regionId: "rovnice", type: "closed", monsterName: `FW-02B: Lomená rovnice I`,
      visual_color: "#f7b84f", visual_symbol: `x=`, points: 6, trainingTasks: ["t_rov_02"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{x + 3}{x - 1} + \\frac{4}{x + 1} = \\frac{8}{x^{2} - 1}$$`,
      instruction: `Zvolte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(\\{ 1\\}\\)`,
          value: "A",
          feedback: `Kritická chyba. \\(x=1\\) je zakázaná hodnota — anuluje jmenovatele \\((x-1)\\).`
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
          feedback: `Chyba výpočtu. Rovnice má jedno platné řešení \\(x=-9\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 30 }
    },
    {
      id: "t_rov_02", regionId: "rovnice", type: "closed", monsterName: `SIM: Podmínky lomeného výrazu`,
      isTraining: true, bossId: "q_rov_02", visual_color: "#2ecc8a", visual_symbol: `x=`, points: 0,
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{3}{x - 1} + \\frac{1}{x + 1} = 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Podmínky`,
          content: `Jmenovatelé nesmí být nula: \\(x \\neq 1\\) a \\(x \\neq -1\\).`
        },
        {
          trigger: `> Krok 2: Násobení společným jmenovatelem`,
          content: `Násobíme \\((x-1)(x+1)\\): \\(3(x+1) + 1(x-1) = 0\\) → \\(3x+3+x-1=0\\) → \\(4x+2=0\\) → \\(x = -\\frac{1}{2}\\).`
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
      id: "q_rov_03", regionId: "rovnice", type: "closed", monsterName: `FW-02C: Lomená rovnice II`,
      visual_color: "#f7b84f", visual_symbol: `x=`, points: 5, trainingTasks: ["t_rov_03"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{x + 6}{x - 2} + \\frac{x}{x + 2} = \\frac{20}{x^{2} - 4}$$`,
      instruction: `Zvolte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(\\{ - 4\\}\\)`,
          value: "A",
          feedback: `Jedno ze dvou platných řešení. Rovnice má ještě druhý kořen.`
        },
        {
          label: `\\(\\{ 2;\\, 4\\}\\)`,
          value: "B",
          feedback: `Kritická chyba. \\(x=2\\) anuluje jmenovatele \\((x-2)\\). A \\(x=4\\) není kořen.`
        },
        {
          label: `\\(\\{ - 4;\\, 1\\}\\)`,
          value: "C",
          feedback: `Přístup povolen. Po vynásobení \\((x-2)(x+2)\\): \\(2x^2+6x-8=0\\) → \\((x+4)(x-1)=0\\). Obě řešení prošla podmínkou.`
        },
        {
          label: `\\(\\{ 1\\}\\)`,
          value: "D",
          feedback: `Jedno ze dvou platných řešení. Rovnice má ještě druhý kořen.`
        },
      ],
      correctAnswer: "C", reward: { xp: 25 }
    },
    {
      id: "t_rov_03", regionId: "rovnice", type: "closed", monsterName: `SIM: Lomená rovnice se třemi zlomky`,
      isTraining: true, bossId: "q_rov_03", visual_color: "#2ecc8a", visual_symbol: `x=`, points: 0,
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{x + 2}{x - 1} - \\frac{x}{x + 1} = \\frac{2}{x^{2} - 1}$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Rozklad a podmínky`,
          content: `Jmenovatel \\(x^2-1=(x-1)(x+1)\\). Podmínky: \\(x\\neq1\\) a \\(x\\neq-1\\).`
        },
        {
          trigger: `> Krok 2: Násobení (x-1)(x+1)`,
          content: `\\((x+2)(x+1) - x(x-1) = 2\\) → \\(x^2+3x+2 - x^2+x = 2\\) → \\(4x+2=2\\) → \\(x=0\\).`
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
      id: "q_rov_04", regionId: "rovnice", type: "closed", monsterName: `FW-02D: Racionální nerovnice I`,
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
          feedback: `Závorka špatně — \\(x=-2\\) anuluje jmenovatele, do řešení nepatří.`
        },
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_rov_04", regionId: "rovnice", type: "closed", monsterName: `SIM: Znaménko zlomku`,
      isTraining: true, bossId: "q_rov_04", visual_color: "#2ecc8a", visual_symbol: `<`, points: 0,
      question: `Určete množinu řešení nerovnice v oboru reálných čísel:`,
      formula: `$$\\frac{2}{x - 1} > 0$$`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Čitatel je kladný`,
          content: `Čitatel \\(2 > 0\\) vždy. Znaménko zlomku závisí pouze na jmenovateli.`
        },
        {
          trigger: `> Krok 2: Kdy je jmenovatel kladný?`,
          content: `\\(x - 1 > 0\\) → \\(x > 1\\). Řešení: \\((1;\\, +\\infty)\\).`
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
      id: "q_rov_05", regionId: "rovnice", type: "closed", monsterName: `FW-02E: Racionální nerovnice II`,
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
          feedback: `Chyba. \\(x=3\\) anuluje jmenovatele, do řešení nepatří.`
        },
        {
          label: `\\(( - \\infty;\\, 0\\rangle \\cup (3;\\, + \\infty)\\)`,
          value: "C",
          feedback: `Kritická chyba. Znaménkový rozbor máš obrácený.`
        },
        {
          label: `\\(\\langle 0;\\, 3)\\)`,
          value: "D",
          feedback: `Přístup povolen. Zlomek se zjednodušší na \\(2x/(x-3)\\). Záporný je jen pro \\(0 < x < 3\\), nula pro \\(x=0\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 30 }
    },
    {
      id: "t_rov_05", regionId: "rovnice", type: "closed", monsterName: `SIM: Zjednodušení racionální nerovnice`,
      isTraining: true, bossId: "q_rov_05", visual_color: "#2ecc8a", visual_symbol: `≤0`, points: 0,
      question: `Určete množinu řešení nerovnice v oboru reálných čísel:`,
      formula: `$$\\frac{x(x - 4)}{(x - 4)^{2}} \\leq 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Zkrácení zlomku`,
          content: `Pro \\(x \\neq 4\\): \\(\\frac{x(x-4)}{(x-4)^2} = \\frac{x}{x-4}\\). Podmínka \\(x\\neq4\\) zůstává.`
        },
        {
          trigger: `> Krok 2: Znaménkový rozbor`,
          content: `\\(x/(x-4) \\leq 0\\): nulový bod \\(x=0\\), záporný pro \\(0 < x < 4\\). Tedy řešení: \\(\\langle 0;\\, 4)\\).`
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
          feedback: `Přístup povolen. Teď zkus boss příklad — stejná logika, jiné číslo.`
        },
        {
          label: `\\(\\langle 0;\\, 4\\rangle\\)`,
          value: "C",
          feedback: `Závorka špatně — \\(x=4\\) anuluje jmenovatele.`
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
      id: "q_rov_06", regionId: "rovnice", type: "closed", monsterName: `FW-02F: Soustava bez řešení`,
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
          feedback: `Přístup povolen. Z první rovnice plyne \\(2x+2y=6\\), ale druhá říká \\(2x+2y=5\\) — spor. Rovnoběžné přímky se neprotínají.`
        },
        {
          label: `\\(x + y = 2,\\quad x - y = 4\\)`,
          value: "D",
          feedback: `Chyba. Tato soustava má právě jedno řešení: \\(x=3\\), \\(y=-1\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_rov_06", regionId: "rovnice", type: "closed", monsterName: `SIM: Spor v soustavě`,
      isTraining: true, bossId: "q_rov_06", visual_color: "#2ecc8a", visual_symbol: `∅`, points: 0,
      question: `Má soustava rovnic v oboru reálných čísel řešení?`,
      formula: `$$\\left\\{ \\begin{matrix}
x + 2y = 4 \\\\
2x + 4y = 9 \\\\
\\end{matrix} \\right.\\ $$`,
      instruction: `Vyberte správnou odpověď.`,
      steps: [
        {
          trigger: `> Krok 1: Vynásobení první rovnice`,
          content: `Vynásobíme první rovnici číslem 2: \\(2x + 4y = 8\\).`
        },
        {
          trigger: `> Krok 2: Porovnání s druhou rovnicí`,
          content: `Druhá rovnice říká \\(2x + 4y = 9\\). Ale právě jsme odvodili \\(2x + 4y = 8\\). Spor: \\(8 \\neq 9\\). Soustava <b>nemá řešení</b>.`
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
      id: "q_rov_07", regionId: "rovnice", type: "closed", monsterName: `FW-02G: Párování rovnic`,
      visual_color: "#f7b84f", visual_symbol: `{}`, points: 3, trainingTasks: ["t_rov_07"],
      question: `Která z následujících rovnic má v oboru reálných čísel množinu řešení \\(\\{ - 2\\}\\)?`,
      instruction: `Vyberte správnou rovnici.`,
      choices: [
        {
          label: `\\(x^{2} = 5x\\)`,
          value: "A",
          feedback: `Chyba. \\(x^2-5x=0\\) → \\(x(x-5)=0\\) → řešení \\(\\{0;\\,5\\}\\).`
        },
        {
          label: `\\(\\frac{4}{x} = x\\)`,
          value: "B",
          feedback: `Chyba. \\(x^2=4\\) (pro \\(x\\neq0\\)) → řešení \\(\\{-2;\\,2\\}\\), ne jen \\(\\{-2\\}\\).`
        },
        {
          label: `\\(\\frac{4 - x^{2}}{x - 2} = 0\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(4-x^2=0\\) dává \\(x=\\pm2\\), ale \\(x=2\\) je zakázaná → zůstane jen \\(\\{-2\\}\\).`
        },
        {
          label: `\\(x^{2} + 4 = 0\\)`,
          value: "D",
          feedback: `Chyba. \\(x^2=-4\\) nemá v reálných číslech řešení — množina řešení je prázdná.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_rov_07", regionId: "rovnice", type: "closed", monsterName: `SIM: Falešný kořen z podmínky`,
      isTraining: true, bossId: "q_rov_07", visual_color: "#2ecc8a", visual_symbol: `{}`, points: 0,
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{x^{2} - 9}{x - 3} = 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Podmínka a rozklad`,
          content: `Podmínka: \\(x \\neq 3\\). Čitatel rozložíme: \\(x^2-9 = (x-3)(x+3)\\).`
        },
        {
          trigger: `> Krok 2: Zkrácení a řešení`,
          content: `Pro \\(x\\neq3\\): zlomek \\(= (x+3)\\). Rovnice \\(x+3=0\\) → \\(x=-3\\). Podmínku splňuje.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 3;\\, - 3\\}\\)`,
          value: "A",
          feedback: `Chyba. \\(x=3\\) anuluje jmenovatel — je zakázaná hodnota.`
        },
        {
          label: `Rovnice nemá řešení`,
          value: "B",
          feedback: `Chyba. \\(x=-3\\) rovnici splňuje: \\((9-9)/(- 6)=0\\) ✓.`
        },
        {
          label: `\\(\\{ - 3\\}\\)`,
          value: "C",
          feedback: `Přístup povolen. Hodnota \\(x=3\\) algebraicky vychází, ale porušuje podmínku.`
        },
        {
          label: `\\(\\{ 3\\}\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(x=3\\) je právě ta hodnota, pro kterou výraz nemá smysl.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_rov_08", regionId: "rovnice", type: "closed", monsterName: `FW-02H: Prázdná množina řešení`,
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
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_rov_08", regionId: "rovnice", type: "closed", monsterName: `SIM: Nerovnice vždy splněná`,
      isTraining: true, bossId: "q_rov_08", visual_color: "#2ecc8a", visual_symbol: `∅`, points: 0,
      question: `Pro která reálná čísla \\(x\\) platí nerovnice \\((x + 2)^{2} \\geq 0\\)?`,
      formula: `$$(x + 2)^{2} \\geq 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Vlastnost druhé mocniny`,
          content: `Čtverec libovolného reálného čísla je vždy nezáporný: \\(A^2 \\geq 0\\) pro každé \\(A \\in \\mathbb{R}\\).`
        },
        {
          trigger: `> Krok 2: Závěr`,
          content: `\\((x+2)^2 \\geq 0\\) platí pro <b>všechna reálná \\(x\\)</b>. Množina řešení je \\(\\mathbb{R}\\).`
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
      id: "q_rov_09", regionId: "rovnice", type: "closed", monsterName: `FW-02I: Kvadratická nerovnice`,
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
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_rov_09", regionId: "rovnice", type: "closed", monsterName: `SIM: Kvadratická nerovnice — znaménkový rozbor`,
      isTraining: true, bossId: "q_rov_09", visual_color: "#2ecc8a", visual_symbol: `<0`, points: 0,
      question: `Určete množinu řešení nerovnice v oboru reálných čísel:`,
      formula: `$$(x - 1)(x + 2) < 0$$`,
      instruction: `Vyberte správný interval.`,
      steps: [
        {
          trigger: `> Krok 1: Kořeny a tvar paraboly`,
          content: `Kořeny jsou \\(x=1\\) a \\(x=-2\\). Koeficient \\(a=1>0\\) — parabola otevřená nahoru (∪-tvar).`
        },
        {
          trigger: `> Krok 2: Kde je výraz záporný?`,
          content: `Parabola ∪ leží pod osou x <b>mezi</b> kořeny: řešení je \\((-2;\\, 1)\\).`
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
      id: "q_rov_10", regionId: "rovnice", type: "closed", monsterName: `FW-02J: Pravdivost tvrzení`,
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
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_rov_10", regionId: "rovnice", type: "closed", monsterName: `SIM: Čtverec a jeho znaménko`,
      isTraining: true, bossId: "q_rov_10", visual_color: "#2ecc8a", visual_symbol: `A/N`, points: 0,
      question: `Je nerovnice \\(x^{2} \\geq 0\\) splněna pro všechna reálná čísla?`,
      formula: `$$x^{2} \\geq 0$$`,
      instruction: `Vyberte správnou odpověď.`,
      steps: [
        {
          trigger: `> Krok 1: Co je x²?`,
          content: `\\(x^2 = x \\cdot x\\). Součin dvou čísel se stejným znaménkem je vždy kladný (nebo nula pro \\(x=0\\)).`
        },
        {
          trigger: `> Krok 2: Závěr`,
          content: `\\(x^2 \\geq 0\\) pro každé \\(x \\in \\mathbb{R}\\). Tato nerovnice je splněna <b>vždy</b> — říkáme ji <b>universálně pravdivá</b>.`
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
      id: "q_rov_11", regionId: "rovnice", type: "closed", monsterName: `FW-02K: Lomená rovnice III`,
      visual_color: "#f7b84f", visual_symbol: `x=`, points: 5, trainingTasks: ["t_rov_11"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{4}{x - 1} + \\frac{x + 1}{2x - 2} = \\frac{3}{2}$$`,
      instruction: `Zvolte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(\\{ 1\\}\\)`,
          value: "A",
          feedback: `Kritická chyba. \\(x=1\\) anuluje oba jmenovatele na levé straně.`
        },
        {
          label: `\\(\\{ 6\\}\\)`,
          value: "B",
          feedback: `Přístup povolen. Jmenovatel \\(2x-2=2(x-1)\\). Po vynásobení \\(2(x-1)\\): \\(8+(x+1)=3(x-1)\\) → \\(x=6\\).`
        },
        {
          label: `\\(\\{ - 6\\}\\)`,
          value: "C",
          feedback: `Chyba znaménka. Zkontroluj dosazení: \\(4/(-7)+(-5)/(-14)=-4/7+5/14=-3/14 \\neq 3/2\\).`
        },
        {
          label: `\\(\\{ 3\\}\\)`,
          value: "D",
          feedback: `Chyba výpočtu. Dosaď: \\(4/2 + 4/4 = 2+1=3 \\neq 3/2\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 25 }
    },
    {
      id: "t_rov_11", regionId: "rovnice", type: "closed", monsterName: `SIM: Lomená rovnice bez čitatele`,
      isTraining: true, bossId: "q_rov_11", visual_color: "#2ecc8a", visual_symbol: `x=`, points: 0,
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$\\frac{3}{x - 2} - \\frac{1}{x + 2} = 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Podmínky a násobení`,
          content: `Podmínky: \\(x\\neq2\\), \\(x\\neq-2\\). Násobím \\((x-2)(x+2)\\): \\(3(x+2) - (x-2) = 0\\).`
        },
        {
          trigger: `> Krok 2: Lineární rovnice`,
          content: `\\(3x+6-x+2=0\\) → \\(2x+8=0\\) → \\(x=-4\\). Podmínky splněny ✓.`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 4\\}\\)`,
          value: "A",
          feedback: `Chyba znaménka. \\(2x+8=0\\) → \\(x=-4\\), ne \\(+4\\).`
        },
        {
          label: `\\(\\{ 2;\\, - 2\\}\\)`,
          value: "B",
          feedback: `Kritická chyba. Toto jsou zakázané hodnoty jmenovatelů.`
        },
        {
          label: `\\(\\{ - 4\\}\\)`,
          value: "C",
          feedback: `Přístup povolen. Teď zkus boss příklad se třemi jmenovateli a pravou stranou \\(3/2\\).`
        },
        {
          label: `Rovnice nemá řešení`,
          value: "D",
          feedback: `Chyba. \\(x=-4\\) splňuje podmínky i rovnici: \\(3/(-6) - 1/(-2) = -1/2+1/2=0\\) ✓.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },

    // ==========================================
    // LOGARITMY — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_log_01", regionId: "logaritmy", type: "closed", monsterName: `FW-09A: Spojená rovnice`,
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
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_log_01", regionId: "logaritmy", type: "closed", monsterName: `SIM: Základní logaritmická rovnice`,
      isTraining: true, bossId: "q_log_01", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Nejdříve si procvičíme jednodušší verzi — rovnici s jediným logaritmem \\(\\log_a(x) = c\\):`,
      formula: `$$\\text{log}_{2}(x + 1) = 3$$`,
      instruction: `Vyberte správnou hodnotu \\(x\\).`,
      steps: [
        {
          trigger: `> Krok 1: Odlogaritmovat rovnici`,
          content: `Rovnice \\(\\log_a(M) = b\\) je ekvivalentní s \\(M = a^b\\). Zde: \\(x + 1 = 2^3 = 8\\).`
        },
        {
          trigger: `> Krok 2: Dopočítat x`,
          content: `Z \\(x + 1 = 8\\) dostaneme \\(x = 7\\). Ověření: \\(7 + 1 = 8 > 0\\) ✓.`
        },
      ],
      choices: [
        {
          label: `\\(x = 9\\)`,
          value: "A",
          feedback: `Chyba. \\(2^3 = 8\\), ne 9. Odlogaritmování dává \\(x + 1 = 8\\), tedy \\(x = 7\\).`
        },
        {
          label: `\\(x = 8\\)`,
          value: "B",
          feedback: `Chyba. Zapomněl(a) jsi odečíst 1: z \\(x + 1 = 8\\) plyne \\(x = 7\\).`
        },
        {
          label: `\\(x = 7\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(x + 1 = 2^3 = 8\\), tedy \\(x = 7\\). Zkus rovnici se dvěma logaritmy.`
        },
        {
          label: `\\(x = 3\\)`,
          value: "D",
          feedback: `Chyba. Výsledkem není exponent, ale hodnota \\(x\\). Odlogaritmuj: \\(2^3 = 8\\), pak \\(x = 7\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_log_02", regionId: "logaritmy", type: "closed", monsterName: `FW-09B: Eliminace logaritmu`,
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
          feedback: `Chyba konstanty. Z \\(1 = \\log 10\\) plyne dělení číslem 10, nikoliv 100.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_log_02", regionId: "logaritmy", type: "closed", monsterName: `SIM: Logaritmus mocniny`,
      isTraining: true, bossId: "q_log_02", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Zopakujme klíčovou vlastnost. Pro \\(a \\in (0;\\, + \\infty),\\mspace{6mu} a \\neq 1\\):`,
      formula: `$$\\text{log}_{a}(a^{5}) - \\text{log}_{a}(a^{2}) = \\,?$$`,
      instruction: `Vypočítejte hodnotu výrazu.`,
      steps: [
        {
          trigger: `> Krok 1: Logaritmus mocniny`,
          content: `Platí: \\(\\log_a(a^n) = n\\). Tedy \\(\\log_a(a^5) = 5\\) a \\(\\log_a(a^2) = 2\\).`
        },
        {
          trigger: `> Krok 2: Dokončení`,
          content: `\\(5 - 2 = 3\\). Výsledek nezávisí na konkrétní hodnotě základu \\(a\\).`
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
          feedback: `Chyba znaménka. Sčítáš místo odčítáš: \\(\\log_a(a^5) = 5\\), \\(\\log_a(a^2) = 2\\), výsledek je \\(5 - 2 = 3\\).`
        },
        {
          label: `\\(2\\)`,
          value: "C",
          feedback: `Chyba. Nezapomeň na první člen: \\(\\log_a(a^5) = 5\\), ne 0. Výsledek: \\(5 - 2 = 3\\).`
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
      id: "q_log_03", regionId: "logaritmy", type: "closed", monsterName: `FW-09C: Definiční obor a hodnota`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 4, trainingTasks: ["t_log_03"],
      question: `Je dána logaritmická funkce \\(f\\colon y = \\log_a x\\):`,
      formula: `$$f:\\, y = \\text{log}_{3}(2 - x)$$`,
      instruction: `Které tvrzení obsahuje správný definiční obor \\(D(f)\\) i správnou hodnotu \\(f(-7)\\)?`,
      choices: [
        {
          label: `\\(D(f) = (2;\\, + \\infty),\\mspace{6mu} f( - 7) = 2\\)`,
          value: "A",
          feedback: `Chyba oboru. Nerovnost \\(2-x > 0\\) dává \\(x < 2\\), nikoliv \\(x > 2\\) — znaménko se při převodu otočí.`
        },
        {
          label: `\\(D(f) = ( - \\infty;\\, 2),\\mspace{6mu} f( - 7) = 3\\)`,
          value: "B",
          feedback: `Chyba hodnoty. \\(f(-7) = \\log_3(2+7) = \\log_3 9 = 2\\), nikoliv 3. Číslo 27 by dalo 3, ale \\(2-(-7) = 9\\).`
        },
        {
          label: `\\(D(f) = (2;\\, + \\infty),\\mspace{6mu} f( - 7) = 3\\)`,
          value: "C",
          feedback: `Obě chyby. Definiční obor je \\((-\\infty;\\,2)\\) a \\(f(-7) = \\log_3 9 = 2\\).`
        },
        {
          label: `\\(D(f) = ( - \\infty;\\, 2),\\mspace{6mu} f( - 7) = 2\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(2-x > 0 \\Rightarrow x < 2\\); \\(f(-7) = \\log_3 9 = 2\\). Obě hodnoty správně.`
        },
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_log_03", regionId: "logaritmy", type: "closed", monsterName: `SIM: Definiční podmínka`,
      isTraining: true, bossId: "q_log_03", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
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
          content: `\\(x + 2 > 0 \\Rightarrow x > -2\\). Definiční obor: interval \\((-2;\\, +\\infty)\\) s kulatou závorkou.`
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
          feedback: `Chyba směru. Potřebujeme \\(x + 2 > 0\\), tedy \\(x > -2\\), ne \\(x < -2\\).`
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
      id: "q_log_04", regionId: "logaritmy", type: "closed", monsterName: `FW-09D: Základ z grafu`,
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
          feedback: `Chyba. \\((\\sqrt{2})^4 = 4\\) by znamenalo \\(h(4) = 4\\), ale bod A má \\(y = 2\\). Základ musí splňovat \\(a^2 = 4\\).`
        },
        {
          label: `\\(a = 4\\)`,
          value: "C",
          feedback: `Chyba. \\(\\log_4(4) = 1\\), nikoliv 2. Základ musí splňovat \\(a^2 = 4\\).`
        },
        {
          label: `\\(a = 8\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(\\log_8(4) < 1\\). Vycházej z podmínky \\(a^2 = 4\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_log_04", regionId: "logaritmy", type: "closed", monsterName: `SIM: Základ z bodu`,
      isTraining: true, bossId: "q_log_04", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Logaritmická funkce h prochází bodem [8; 3]. Jaký je základ a?`,
      formula: `$$h:\\, y = \\text{log}_{a}x,\\quad h(8) = 3$$`,
      instruction: `Vyberte správnou hodnotu základu a.`,
      steps: [
        {
          trigger: `> Krok 1: Z bodu na rovnici`,
          content: `Bod [8; 3] leží na grafu — dosadíme: \\(\\log_a 8 = 3\\), tedy \\(a^3 = 8\\).`
        },
        {
          trigger: `> Krok 2: Určení základu`,
          content: `\\(a^3 = 8 \\Rightarrow a = \\sqrt[3]{8} = 2\\) (základ kladný, různý od 1).`
        },
      ],
      choices: [
        {
          label: `\\(a = 3\\)`,
          value: "A",
          feedback: `Chyba. Z podmínky \\(a^3 = 8\\) plyne \\(a = \\sqrt[3]{8} = 2\\), ne 3.`
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
      id: "q_log_05", regionId: "logaritmy", type: "closed", monsterName: `FW-09E: Odvozená rovnost`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 2, trainingTasks: ["t_log_05"],
      question: `V kartézské soustavě souřadnic Oxy je sestrojen graf funkce g: y = log_a(x) s definičním oborem (0; +∞). Z grafu je patrné, že funkce prochází vyznačeným bodem B.`,
      diagram: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="90" y1="20" x2="90" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="120" y1="20" x2="120" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="150" y1="20" x2="150" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="180" y1="20" x2="180" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="210" y1="20" x2="210" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="240" y1="20" x2="240" y2="215" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="155" x2="310" y2="155" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="115" x2="310" y2="115" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="75" x2="310" y2="75" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="55" y1="195" x2="312" y2="195" stroke="#e2e8f0" stroke-width="2"/> <polygon points="312,191 319,195 312,199" fill="#e2e8f0"/> <text x="316" y="199" font-size="12" fill="#e2e8f0">x</text> <line x1="60" y1="235" x2="60" y2="8" stroke="#e2e8f0" stroke-width="2"/> <polygon points="56,12 60,5 64,12" fill="#e2e8f0"/> <text x="52" y="8" font-size="12" fill="#e2e8f0">y</text> <text x="90" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">1</text> <text x="120" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">2</text> <text x="150" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">3</text> <text x="180" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">4</text> <text x="210" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">5</text> <text x="240" y="211" font-size="11" text-anchor="middle" fill="#e2e8f0">6</text> <text x="54" y="159" font-size="11" text-anchor="end" fill="#e2e8f0">1</text> <text x="54" y="119" font-size="11" text-anchor="end" fill="#e2e8f0">2</text> <text x="54" y="79" font-size="11" text-anchor="end" fill="#e2e8f0">3</text> <text x="54" y="199" font-size="11" text-anchor="end" fill="#e2e8f0">0</text> <line x1="150" y1="75" x2="150" y2="195" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="60" y1="75" x2="150" y2="75" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/> <polyline points="88.4,200.8 89.0,198.6 89.6,196.5 90.2,194.4 90.7,192.3 91.3,190.3 91.9,188.3 92.5,186.4 93.0,184.5 93.6,182.6 94.2,180.8 94.7,178.9 95.3,177.2 95.9,175.4 96.5,173.7 97.0,172.0 97.6,170.3 98.2,168.6 98.8,167.0 99.3,165.4 99.9,163.8 100.5,162.3 101.1,160.7 101.6,159.2 102.2,157.7 102.8,156.3 103.3,154.8 103.9,153.4 104.5,152.0 105.1,150.6 105.6,149.2 106.2,147.8 106.8,146.5 107.4,145.1 107.9,143.8 108.5,142.5 109.1,141.3 109.6,140.0 110.2,138.7 110.8,137.5 111.4,136.3 111.9,135.1 112.5,133.9 113.1,132.7 113.7,131.5 114.2,130.3 114.8,129.2 115.4,128.1 115.9,126.9 116.5,125.8 117.1,124.7 117.7,123.6 118.2,122.5 118.8,121.5 119.4,120.4 120.0,119.4 120.5,118.3 121.1,117.3 121.7,116.3 122.2,115.3 122.8,114.3 123.4,113.3 124.0,112.3 124.5,111.3 125.1,110.4 125.7,109.4 126.3,108.5 126.8,107.5 127.4,106.6 128.0,105.7 128.5,104.7 129.1,103.8 129.7,102.9 130.3,102.0 130.8,101.1 131.4,100.3 132.0,99.4 132.6,98.5 133.1,97.7 133.7,96.8 134.3,96.0 134.8,95.1 135.4,94.3 136.0,93.5 136.6,92.7 137.1,91.8 137.7,91.0 138.3,90.2 138.9,89.4 139.4,88.6 140.0,87.9 140.6,87.1 141.2,86.3 141.7,85.5 142.3,84.8 142.9,84.0 143.4,83.3 144.0,82.5 144.6,81.8 145.2,81.0 145.7,80.3 146.3,79.6 146.9,78.9 147.5,78.1 148.0,77.4 148.6,76.7 149.2,76.0 149.7,75.3 150.3,74.6 150.9,73.9 151.5,73.2 152.0,72.6 152.6,71.9 153.2,71.2 153.8,70.5 154.3,69.9 154.9,69.2 155.5,68.6 156.0,67.9 156.6,67.2 157.2,66.6 157.8,66.0 158.3,65.3 158.9,64.7 159.5,64.1 160.1,63.4 160.6,62.8 161.2,62.2 161.8,61.6 162.3,61.0 162.9,60.3 163.5,59.7 164.1,59.1 164.6,58.5 165.2,57.9 165.8,57.3 166.4,56.8 166.9,56.2 167.5,55.6 168.1,55.0 168.6,54.4 169.2,53.9 169.8,53.3 170.4,52.7 170.9,52.2 171.5,51.6 172.1,51.0 172.7,50.5 173.2,49.9 173.8,49.4 174.4,48.8 174.9,48.3 175.5,47.7 176.1,47.2 176.7,46.7 177.2,46.1 177.8,45.6 178.4,45.1 179.0,44.5 179.5,44.0 180.1,43.5 180.7,43.0 181.3,42.4 181.8,41.9 182.4,41.4 183.0,40.9 183.5,40.4 184.1,39.9 184.7,39.4 185.3,38.9 185.8,38.4 186.4,37.9 187.0,37.4 187.6,36.9 188.1,36.4 188.7,35.9 189.3,35.4 189.8,35.0 190.4,34.5 191.0,34.0 191.6,33.5 192.1,33.1 192.7,32.6 193.3,32.1 193.9,31.6 194.4,31.2 195.0,30.7" fill="none" stroke="#7733aa" stroke-width="2.5" stroke-linejoin="round"/> <text x="193" y="31" font-size="12" fill="#7733aa" font-style="italic">g</text> <circle cx="150" cy="75" r="5" fill="#cc4400" stroke="#e2e8f0" stroke-width="1.5"/> <text x="138" y="65" font-size="11" fill="#cc4400" font-weight="bold" text-anchor="end">B[3; 3]</text> </svg>`,
      instruction: `Která z následujících rovností platí pro funkci g?`,
      choices: [
        {
          label: `\\(\\text{log}_{a}9 = 9\\)`,
          value: "A",
          feedback: `Chyba. \\(\\log_a 9 = \\log_a 3^2 = 2 \\cdot \\log_a 3 = 2 \\cdot 3 = 6\\), nikoliv 9.`
        },
        {
          label: `\\(\\text{log}_{a}9 = 6\\)`,
          value: "B",
          feedback: `Přístup povolen. Protože \\(\\log_a 3 = 3\\): \\(\\log_a 9 = \\log_a 3^2 = 2 \\cdot 3 = 6\\).`
        },
        {
          label: `\\(\\text{log}_{a}\\sqrt{3} = 3\\)`,
          value: "C",
          feedback: `Chyba. \\(\\log_a \\sqrt{3} = \\tfrac{1}{2} \\cdot \\log_a 3 = \\tfrac{3}{2}\\), nikoliv 3.`
        },
        {
          label: `\\(\\text{log}_{a}27 = 6\\)`,
          value: "D",
          feedback: `Chyba. \\(\\log_a 27 = \\log_a 3^3 = 3 \\cdot \\log_a 3 = 9\\), nikoliv 6.`
        },
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_log_05", regionId: "logaritmy", type: "closed", monsterName: `SIM: Vlastnost logaritmu mocniny`,
      isTraining: true, bossId: "q_log_05", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Víme, že \\(\\text{log}_{a}5 = 2\\). Vypočítej \\(\\text{log}_{a}25\\).`,
      formula: `$$\\text{log}_{a}5 = 2\\quad \\Rightarrow \\quad\\text{log}_{a}25 = \\,?$$`,
      instruction: `Vyberte správnou hodnotu.`,
      steps: [
        {
          trigger: `> Krok 1: Rozložit 25 na mocninu`,
          content: `\\(25 = 5^2\\), tedy \\(\\log_a 25 = \\log_a 5^2\\).`
        },
        {
          trigger: `> Krok 2: Použít logaritmus mocniny`,
          content: `\\(\\log_a 5^2 = 2 \\cdot \\log_a 5 = 2 \\cdot 2 = 4\\).`
        },
      ],
      choices: [
        {
          label: `\\(10\\)`,
          value: "A",
          feedback: `Chyba. Logaritmus se nesčítá: \\(\\log_a 25 = \\log_a 5^2 = 2 \\cdot 2 = 4\\).`
        },
        {
          label: `\\(2\\)`,
          value: "B",
          feedback: `Chyba. To je \\(\\log_a 5\\), ale my hledáme \\(\\log_a 25 = \\log_a 5^2 = 2 \\cdot 2 = 4\\).`
        },
        {
          label: `\\(5\\)`,
          value: "C",
          feedback: `Chyba. Výsledek není základ. \\(\\log_a 25 = 2 \\cdot \\log_a 5 = 4\\).`
        },
        {
          label: `\\(4\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(\\log_a 5^2 = 2 \\cdot 2 = 4\\). Zkus nyní plný boss příklad.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_log_06", regionId: "logaritmy", type: "closed", monsterName: `FW-09F: Porovnání základů`,
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
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_log_06", regionId: "logaritmy", type: "closed", monsterName: `SIM: Rostoucí vs. klesající`,
      isTraining: true, bossId: "q_log_06", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
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
      id: "q_log_07", regionId: "logaritmy", type: "closed", monsterName: `FW-09G: Logaritmická nerovnice`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 3, trainingTasks: ["t_log_07"],
      question: `V oboru reálných čísel řešte nerovnici:`,
      formula: `$$\\text{log}_{3}(x - 1) < 2$$`,
      instruction: `Vyberte správné řešení nerovnice.`,
      choices: [
        {
          label: `\\(x \\in ( - \\infty;\\, 10)\\)`,
          value: "A",
          feedback: `Chyba domény. Argument logaritmu musí být kladný: \\(x - 1 > 0\\), tedy \\(x > 1\\).`
        },
        {
          label: `\\(x \\in (1;\\, 10\\rangle\\)`,
          value: "B",
          feedback: `Chyba závorky. Nerovnost je ostrá: \\(\\log_3(10-1) = \\log_3 9 = 2\\), takže 10 není součástí řešení.`
        },
        {
          label: `\\(x \\in (10;\\, + \\infty)\\)`,
          value: "C",
          feedback: `Chyba směru. Pro základ \\(3 > 1\\) zachováváme směr nerovnosti: \\(\\log_3(x-1) < 2 \\Leftrightarrow x-1 < 3^2 = 9\\).`
        },
        {
          label: `\\(x \\in (1;\\, 10)\\)`,
          value: "D",
          feedback: `Přístup povolen. Doménová podmínka \\(x > 1\\) a horní mez \\(x < 3^2 + 1 = 10\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_log_07", regionId: "logaritmy", type: "closed", monsterName: `SIM: Nerovnice s logaritmem`,
      isTraining: true, bossId: "q_log_07", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Než vyřešíš obtížnější nerovnici, procvičme základní případ:`,
      formula: `$$\\text{log}_{2}(x) < 3$$`,
      instruction: `Vyberte správné řešení nerovnice.`,
      steps: [
        {
          trigger: `> Krok 1: Definiční podmínka`,
          content: `Argument logaritmu musí být kladný: \\(x > 0\\).`
        },
        {
          trigger: `> Krok 2: Řešení nerovnice`,
          content: `Základ \\(2 > 1\\) → zachováme směr: \\(x < 2^3 = 8\\). Kombinací: \\(x \\in (0;\\, 8)\\).`
        },
      ],
      choices: [
        {
          label: `\\(x \\in ( - \\infty;\\, 8)\\)`,
          value: "A",
          feedback: `Chyba domény. Logaritmus vyžaduje kladný argument: \\(x > 0\\).`
        },
        {
          label: `\\(x \\in (0;\\, 8)\\)`,
          value: "B",
          feedback: `Logika potvrzena. Doménová podmínka \\(x > 0\\) a \\(x < 2^3 = 8\\).`
        },
        {
          label: `\\(x \\in (0;\\, 8\\rangle\\)`,
          value: "C",
          feedback: `Chyba závorky. \\(\\log_2(8) = 3\\), ale nerovnost je ostrá, takže 8 nepatří do řešení.`
        },
        {
          label: `\\(x \\in (8;\\, + \\infty)\\)`,
          value: "D",
          feedback: `Chyba směru. Pro základ > 1 platí: \\(\\log_2 x < 3 \\Leftrightarrow x < 2^3 = 8\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_log_08", regionId: "logaritmy", type: "closed", monsterName: `FW-09H: Výpočet výrazu`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 2, trainingTasks: ["t_log_08"],
      question: `Vypočítejte hodnotu výrazu:`,
      formula: `$$\\text{log}_{3}81 - \\text{log}_{3}27$$`,
      instruction: `Vyberte správný výsledek.`,
      choices: [
        {
          label: `\\(1\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\log_3 81 = 4\\) a \\(\\log_3 27 = 3\\). Rozdíl je \\(4 - 3 = 1\\).`
        },
        {
          label: `\\(3\\)`,
          value: "B",
          feedback: `Chyba. Výsledek \\(3\\) by platil, pokud by sis spočítal \\(81/27 = 3\\) bez logaritmu. Správně: \\(\\log_3(81/27) = \\log_3 3 = 1\\).`
        },
        {
          label: `\\(7\\)`,
          value: "C",
          feedback: `Chyba znaménka. \\(\\log_3(81 \\cdot 27) = \\log_3(3^7) = 7\\). Rovnice má minus, ne plus.`
        },
        {
          label: `\\(\\frac{4}{3}\\)`,
          value: "D",
          feedback: `Chyba metody. Logaritmy se neodečítají jako zlomky exponentů. Správně: \\(\\log_3 81 = 4\\), \\(\\log_3 27 = 3\\), výsledek \\(4 - 3 = 1\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_log_08", regionId: "logaritmy", type: "closed", monsterName: `SIM: Záporná hodnota logaritmu`,
      isTraining: true, bossId: "q_log_08", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Vypočítejte hodnotu logaritmu \\(\\log_a b\\):`,
      formula: `$$\\text{log}_{3}\\left( \\frac{1}{9} \\right) = \\,?$$`,
      instruction: `Vyberte správný výsledek.`,
      steps: [
        {
          trigger: `> Krok 1: Vyjádřit zlomek jako mocninu`,
          content: `\\(\\frac{1}{9} = \\frac{1}{3^2} = 3^{-2}\\).`
        },
        {
          trigger: `> Krok 2: Použít definici logaritmu`,
          content: `\\(\\log_3(3^{-2}) = -2\\). Záporný výsledek říká, že argument je menší než 1.`
        },
      ],
      choices: [
        {
          label: `\\(- 2\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(\\tfrac{1}{9} = 3^{-2}\\), tedy \\(\\log_3(3^{-2}) = -2\\).`
        },
        {
          label: `\\(2\\)`,
          value: "B",
          feedback: `Chyba znaménka. Zapomněl(a) jsi na znaménko: \\(\\tfrac{1}{9} = 3^{-2}\\), nikoliv \\(3^2\\).`
        },
        {
          label: `\\(\\frac{1}{9}\\)`,
          value: "C",
          feedback: `Chyba typu. Výsledkem logaritmu \\(\\log_a b = c\\) je číslo \\(c\\) (exponent), ne argument.`
        },
        {
          label: `\\(- 9\\)`,
          value: "D",
          feedback: `Kritická chyba. Základ 3 nesouvisí s hodnotou −9. Vycházej z \\(\\tfrac{1}{9} = 3^n\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_log_09", regionId: "logaritmy", type: "closed", monsterName: `FW-09I: Rovnice se substitucí`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 5, trainingTasks: ["t_log_09"],
      question: `V oboru reálných čísel řešte rovnici:`,
      formula: `$$(\\text{log}_{3}x)^{2} - \\text{log}_{3}(x^{4}) + 3 = 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      choices: [
        {
          label: `\\(\\{ 3;\\, 9\\}\\)`,
          value: "A",
          feedback: `Chyba. Správně \\(t = 1 \\Rightarrow x = 3\\), ale \\(t = 3 \\Rightarrow x = 3^3 = 27\\), nikoliv 9.`
        },
        {
          label: `\\(\\{ 3;\\, 27\\}\\)`,
          value: "B",
          feedback: `Přístup povolen. Substituce \\(t = \\log_3 x\\): \\((t-1)(t-3) = 0\\), tedy \\(x = 3^1 = 3\\) a \\(x = 3^3 = 27\\).`
        },
        {
          label: `\\(\\{ 1;\\, 3\\}\\)`,
          value: "C",
          feedback: `Chyba. Hodnoty \\(t = 1\\) a \\(t = 3\\) jsou výsledky substituce, ne samotné \\(x\\). Dosaď zpět: \\(x = 3^t\\).`
        },
        {
          label: `\\(\\{ 9;\\, 81\\}\\)`,
          value: "D",
          feedback: `Kritická chyba. Ani 9 ani 81 neřeší rovnici. Ověř: \\(\\log_3 9 = 2 \\neq 1\\) ani \\(3\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 25 }
    },
    {
      id: "t_log_09", regionId: "logaritmy", type: "closed", monsterName: `SIM: Substituce v log rovnici`,
      isTraining: true, bossId: "q_log_09", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Procvičme metodu substituce na jednodušší rovnici:`,
      formula: `$$(\\text{log}_{2}x)^{2} - 3\\text{log}_{2}x + 2 = 0$$`,
      instruction: `Vyberte správnou množinu řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Substituce`,
          content: `Zaveďme \\(t = \\log_2 x\\). Rovnice: \\(t^2 - 3t + 2 = 0\\).`
        },
        {
          trigger: `> Krok 2: Rozložení a zpětná substituce`,
          content: `\\((t-1)(t-2) = 0 \\Rightarrow t = 1\\) nebo \\(t = 2\\). Zpět: \\(t=1 \\Rightarrow x = 2^1 = 2\\); \\(t=2 \\Rightarrow x = 2^2 = 4\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\{ 1;\\, 2\\}\\)`,
          value: "A",
          feedback: `Chyba. Hodnoty \\(t = 1\\) a \\(t = 2\\) jsou výsledky substituce, ne samotné \\(x\\). Dosaď zpět: \\(x = 2^t\\).`
        },
        {
          label: `\\(\\{ 2;\\, 8\\}\\)`,
          value: "B",
          feedback: `Chyba. \\(x = 2\\) je správně, ale druhá hodnota: \\(t = 2 \\Rightarrow x = 2^2 = 4\\), ne 8.`
        },
        {
          label: `\\(\\{ 2;\\, 4\\}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(t=1 \\Rightarrow x=2\\), \\(t=2 \\Rightarrow x=4\\). Obě \\(x > 0\\) ✓.`
        },
        {
          label: `\\(\\{ 4;\\, 8\\}\\)`,
          value: "D",
          feedback: `Chyba. \\(x = 4\\) je správně (pro \\(t=2\\)), ale \\(t = 3\\) neřeší rovnici: \\(9-9+2=2 \\neq 0\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_log_10", regionId: "logaritmy", type: "closed", monsterName: `FW-09J: Základ klesající funkce`,
      visual_color: "#f7b84f", visual_symbol: `log`, points: 2, trainingTasks: ["t_log_10"],
      question: `V kartézské soustavě souřadnic Oxy je sestrojen graf logaritmické funkce f: y = log_a(x) s definičním oborem (0; +∞). Funkce prochází vyznačeným bodem A.`,
      diagram: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="95" y1="20" x2="95" y2="190" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="130" y1="20" x2="130" y2="190" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="165" y1="20" x2="165" y2="190" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="200" y1="20" x2="200" y2="190" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="235" y1="20" x2="235" y2="190" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="220" x2="310" y2="220" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="120" x2="310" y2="120" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="50" y1="70" x2="310" y2="70" stroke="#64748b" stroke-width="1" opacity="0.5"/> <line x1="55" y1="170" x2="312" y2="170" stroke="#e2e8f0" stroke-width="2"/> <polygon points="312,166 319,170 312,174" fill="#e2e8f0"/> <text x="316" y="174" font-size="12" fill="#e2e8f0">x</text> <line x1="60" y1="235" x2="60" y2="8" stroke="#e2e8f0" stroke-width="2"/> <polygon points="56,12 60,5 64,12" fill="#e2e8f0"/> <text x="52" y="8" font-size="12" fill="#e2e8f0">y</text> <text x="95" y="186" font-size="11" text-anchor="middle" fill="#e2e8f0">1</text> <text x="130" y="186" font-size="11" text-anchor="middle" fill="#e2e8f0">2</text> <text x="165" y="186" font-size="11" text-anchor="middle" fill="#e2e8f0">3</text> <text x="200" y="186" font-size="11" text-anchor="middle" fill="#e2e8f0">4</text> <text x="235" y="186" font-size="11" text-anchor="middle" fill="#e2e8f0">5</text> <text x="54" y="224" font-size="11" text-anchor="end" fill="#e2e8f0">-1</text> <text x="54" y="124" font-size="11" text-anchor="end" fill="#e2e8f0">1</text> <text x="54" y="74" font-size="11" text-anchor="end" fill="#e2e8f0">2</text> <text x="54" y="174" font-size="11" text-anchor="end" fill="#e2e8f0">0</text> <line x1="200" y1="220" x2="200" y2="170" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="60" y1="220" x2="200" y2="220" stroke="#cc4400" stroke-width="1.5" stroke-dasharray="5,3"/> <polyline points="65.2,101.6 65.9,105.6 66.5,109.3 67.1,112.6 67.8,115.6 68.4,118.4 69.0,121.0 69.6,123.5 70.3,125.7 70.9,127.9 71.5,129.9 72.1,131.8 72.8,133.6 73.4,135.3 74.0,137.0 74.6,138.6 75.3,140.1 75.9,141.5 76.5,142.9 77.1,144.3 77.8,145.6 78.4,146.8 79.0,148.0 79.7,149.2 80.3,150.3 80.9,151.4 81.5,152.5 82.2,153.5 82.8,154.5 83.4,155.5 84.0,156.4 84.7,157.4 85.3,158.3 85.9,159.2 86.5,160.0 87.2,160.9 87.8,161.7 88.4,162.5 89.0,163.3 89.7,164.0 90.3,164.8 90.9,165.5 91.6,166.3 92.2,167.0 92.8,167.7 93.4,168.3 94.1,169.0 94.7,169.7 95.3,170.3 95.9,171.0 96.6,171.6 97.2,172.2 97.8,172.8 98.4,173.4 99.1,174.0 99.7,174.5 100.3,175.1 100.9,175.7 101.6,176.2 102.2,176.7 102.8,177.3 103.5,177.8 104.1,178.3 104.7,178.8 105.3,179.3 106.0,179.8 106.6,180.3 107.2,180.8 107.8,181.3 108.5,181.7 109.1,182.2 109.7,182.7 110.3,183.1 111.0,183.6 111.6,184.0 112.2,184.4 112.8,184.9 113.5,185.3 114.1,185.7 114.7,186.1 115.4,186.5 116.0,186.9 116.6,187.3 117.2,187.7 117.9,188.1 118.5,188.5 119.1,188.9 119.7,189.3 120.4,189.7 121.0,190.0 121.6,190.4 122.2,190.8 122.9,191.1 123.5,191.5 124.1,191.8 124.7,192.2 125.4,192.5 126.0,192.9 126.6,193.2 127.2,193.6 127.9,193.9 128.5,194.2 129.1,194.5 129.8,194.9 130.4,195.2 131.0,195.5 131.6,195.8 132.3,196.1 132.9,196.5 133.5,196.8 134.1,197.1 134.8,197.4 135.4,197.7 136.0,198.0 136.6,198.3 137.3,198.6 137.9,198.9 138.5,199.1 139.1,199.4 139.8,199.7 140.4,200.0 141.0,200.3 141.7,200.6 142.3,200.8 142.9,201.1 143.5,201.4 144.2,201.6 144.8,201.9 145.4,202.2 146.0,202.4 146.7,202.7 147.3,203.0 147.9,203.2 148.5,203.5 149.2,203.7 149.8,204.0 150.4,204.2 151.0,204.5 151.7,204.7 152.3,205.0 152.9,205.2 153.6,205.5 154.2,205.7 154.8,205.9 155.4,206.2 156.1,206.4 156.7,206.6 157.3,206.9 157.9,207.1 158.6,207.3 159.2,207.6 159.8,207.8 160.4,208.0 161.1,208.2 161.7,208.5 162.3,208.7 162.9,208.9 163.6,209.1 164.2,209.3 164.8,209.6 165.5,209.8 166.1,210.0 166.7,210.2 167.3,210.4 168.0,210.6 168.6,210.8 169.2,211.0 169.8,211.2 170.5,211.5 171.1,211.7 171.7,211.9 172.3,212.1 173.0,212.3 173.6,212.5 174.2,212.7 174.8,212.9 175.5,213.1 176.1,213.2 176.7,213.4 177.3,213.6 178.0,213.8 178.6,214.0 179.2,214.2 179.9,214.4 180.5,214.6 181.1,214.8 181.7,215.0 182.4,215.1 183.0,215.3 183.6,215.5 184.2,215.7 184.9,215.9 185.5,216.1 186.1,216.2 186.7,216.4 187.4,216.6 188.0,216.8 188.6,216.9 189.2,217.1 189.9,217.3 190.5,217.5 191.1,217.6 191.8,217.8 192.4,218.0 193.0,218.2 193.6,218.3 194.3,218.5 194.9,218.7 195.5,218.8 196.1,219.0 196.8,219.2 197.4,219.3 198.0,219.5 198.6,219.6 199.3,219.8 199.9,220.0 200.5,220.1 201.1,220.3 201.8,220.5 202.4,220.6 203.0,220.8 203.7,220.9 204.3,221.1 204.9,221.2 205.5,221.4 206.2,221.6 206.8,221.7 207.4,221.9 208.0,222.0 208.7,222.2 209.3,222.3 209.9,222.5 210.5,222.6 211.2,222.8 211.8,222.9 212.4,223.1 213.0,223.2 213.7,223.4 214.3,223.5 214.9,223.7 215.6,223.8 216.2,223.9 216.8,224.1 217.4,224.2 218.1,224.4 218.7,224.5 219.3,224.7 219.9,224.8 220.6,224.9 221.2,225.1 221.8,225.2 222.4,225.4 223.1,225.5 223.7,225.6 224.3,225.8 224.9,225.9 225.6,226.1 226.2,226.2 226.8,226.3 227.4,226.5 228.1,226.6 228.7,226.7 229.3,226.9 230.0,227.0 230.6,227.1 231.2,227.3 231.8,227.4 232.5,227.5 233.1,227.7 233.7,227.8 234.3,227.9 235.0,228.0 235.6,228.2 236.2,228.3 236.8,228.4 237.5,228.6 238.1,228.7 238.7,228.8 239.3,228.9 240.0,229.1 240.6,229.2 241.2,229.3 241.9,229.4 242.5,229.6 243.1,229.7 243.7,229.8 244.4,229.9 245.0,230.0 245.6,230.2 246.2,230.3 246.9,230.4 247.5,230.5 248.1,230.7 248.7,230.8 249.4,230.9 250.0,231.0 250.6,231.1 251.2,231.3 251.9,231.4 252.5,231.5" fill="none" stroke="#cc4400" stroke-width="2.5" stroke-linejoin="round"/> <text x="76" y="126" font-size="12" fill="#cc4400" font-style="italic">f</text> <circle cx="200" cy="220" r="5" fill="#cc4400" stroke="#e2e8f0" stroke-width="1.5"/> <text x="208" y="224" font-size="11" fill="#cc4400" font-weight="bold">A[4; −1]</text> </svg>`,
      instruction: `Určete základ a logaritmické funkce f.`,
      choices: [
        {
          label: `\\(a = 4\\)`,
          value: "A",
          feedback: `Chyba. \\(\\log_4(4) = 1\\), nikoliv \\(-1\\). Záporná \\(y\\)-hodnota říká, že základ musí být mezi 0 a 1.`
        },
        {
          label: `\\(a = - 4\\)`,
          value: "B",
          feedback: `Kritická chyba. Základ logaritmu musí být kladné číslo různé od \\(1\\). Záporný základ je nepřípustný.`
        },
        {
          label: `\\(a = \\frac{1}{4}\\)`,
          value: "C",
          feedback: `Přístup povolen. Z bodu A[4; −1]: \\(a^{-1} = 4 \\Rightarrow a = \\tfrac{1}{4}\\). Funkce je klesající ✓.`
        },
        {
          label: `\\(a = 2\\)`,
          value: "D",
          feedback: `Chyba. \\(\\log_2(4) = 2\\), nikoliv \\(-1\\). Pro zápornou hodnotu musí být základ menší než 1.`
        },
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_log_10", regionId: "logaritmy", type: "closed", monsterName: `SIM: Základ z bodu (klesající)`,
      isTraining: true, bossId: "q_log_10", visual_color: "#2ecc8a", visual_symbol: `log`, points: 0,
      question: `Logaritmická funkce f prochází bodem \\(\\left\\lbrack \\frac{1}{9};\\, 2 \\right\\rbrack\\). Jaký je základ a?`,
      formula: `$$f:\\, y = \\text{log}_{a}x,\\quad f\\left( \\frac{1}{9} \\right) = 2$$`,
      instruction: `Vyberte správnou hodnotu základu a.`,
      steps: [
        {
          trigger: `> Krok 1: Z bodu na rovnici`,
          content: `Bod \\([\\tfrac{1}{9};\\, 2]\\) leží na grafu: \\(\\log_a \\tfrac{1}{9} = 2\\), tedy \\(a^2 = \\tfrac{1}{9}\\).`
        },
        {
          trigger: `> Krok 2: Výpočet základu`,
          content: `\\(a = \\sqrt{\\tfrac{1}{9}} = \\tfrac{1}{3}\\) (základ musí být kladný a různý od 1).`
        },
      ],
      choices: [
        {
          label: `\\(a = 3\\)`,
          value: "A",
          feedback: `Chyba. \\(\\log_3\\!\\left(\\tfrac{1}{9}\\right) = -2\\), ne 2. Správně: \\(a^2 = \\tfrac{1}{9} \\Rightarrow a = \\tfrac{1}{3}\\).`
        },
        {
          label: `\\(a = 9\\)`,
          value: "B",
          feedback: `Chyba. \\(\\log_9\\!\\left(\\tfrac{1}{9}\\right) = -1\\), ne 2. Správně: \\(a^2 = \\tfrac{1}{9}\\).`
        },
        {
          label: `\\(a = - \\frac{1}{3}\\)`,
          value: "C",
          feedback: `Kritická chyba. Základ musí být kladné číslo různé od 1.`
        },
        {
          label: `\\(a = \\frac{1}{3}\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(\\left(\\tfrac{1}{3}\\right)^2 = \\tfrac{1}{9}\\) ✓. Funkce je klesající (základ < 1).`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },

    // ==========================================
    // FUNKCE — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_funkce_02", regionId: "funkce", type: "closed", monsterName: `FW-05B: Identifikace predpisu z grafu`,
      visual_color: "#4fc3f7", visual_symbol: `f(x)`, points: 3, trainingTasks: ["t_funkce_02"],
      question: `V kartézské soustavě souřadnic je zobrazen graf funkce f s definičním oborem \\(\\mathbb{R}\\).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="35" y1="0" x2="35" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="75" y1="0" x2="75" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="115" y1="0" x2="115" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="155" y1="0" x2="155" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="195" y1="0" x2="195" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="235" y1="0" x2="235" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="275" y1="0" x2="275" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="211" x2="300" y2="211" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="183" x2="300" y2="183" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="155" x2="300" y2="155" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="127" x2="300" y2="127" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="99" x2="300" y2="99" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="71" x2="300" y2="71" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="43" x2="300" y2="43" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="15" x2="300" y2="15" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="155" x2="300" y2="155" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="300,155 293,151 293,159" fill="#e2e8f0"/> <text x="295" y="147" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="75" y1="220" x2="75" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="75,0 71,10 79,10" fill="#e2e8f0"/> <text x="81" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="61" y="169" fill="#e2e8f0" font-size="11">O</text> <line x1="35" y1="152" x2="35" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="35" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="115" y1="152" x2="115" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="115" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="155" y1="152" x2="155" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="155" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="195" y1="152" x2="195" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="195" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="235" y1="152" x2="235" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="235" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="275" y1="152" x2="275" y2="158" stroke="#e2e8f0" stroke-width="1"/> <text x="275" y="170" fill="#e2e8f0" font-size="10" text-anchor="middle">5</text> <line x1="72" y1="211" x2="78" y2="211" stroke="#e2e8f0" stroke-width="1"/> <text x="67" y="215" fill="#e2e8f0" font-size="10" text-anchor="end">-2</text> <line x1="72" y1="183" x2="78" y2="183" stroke="#e2e8f0" stroke-width="1"/> <text x="67" y="187" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="72" y1="127" x2="78" y2="127" stroke="#e2e8f0" stroke-width="1"/> <text x="67" y="131" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="72" y1="99" x2="78" y2="99" stroke="#e2e8f0" stroke-width="1"/> <text x="67" y="103" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="72" y1="71" x2="78" y2="71" stroke="#e2e8f0" stroke-width="1"/> <text x="67" y="75" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="72" y1="43" x2="78" y2="43" stroke="#e2e8f0" stroke-width="1"/> <text x="67" y="47" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="72" y1="15" x2="78" y2="15" stroke="#e2e8f0" stroke-width="1"/> <text x="67" y="19" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <polyline points="14.6,219.4 15.9,214.8 17.2,210.3 18.5,205.9 19.8,201.5 21.1,197.2 22.4,192.9 23.7,188.7 25.1,184.6 26.4,180.5 27.7,176.5 29.0,172.5 30.3,168.6 31.6,164.8 32.9,161.0 34.2,157.3 35.5,153.6 36.8,150.0 38.1,146.4 39.4,143.0 40.7,139.5 42.0,136.2 43.3,132.9 44.6,129.6 46.0,126.4 47.3,123.3 48.6,120.2 49.9,117.2 51.2,114.3 52.5,111.4 53.8,108.6 55.1,105.8 56.4,103.1 57.7,100.4 59.0,97.8 60.3,95.3 61.6,92.8 62.9,90.4 64.2,88.1 65.6,85.8 66.9,83.6 68.2,81.4 69.5,79.3 70.8,77.2 72.1,75.2 73.4,73.3 74.7,71.4 76.0,69.6 77.3,67.9 78.6,66.2 79.9,64.5 81.2,63.0 82.5,61.4 83.8,60.0 85.2,58.6 86.5,57.3 87.8,56.0 89.1,54.8 90.4,53.6 91.7,52.5 93.0,51.5 94.3,50.5 95.6,49.6 96.9,48.7 98.2,47.9 99.5,47.2 100.8,46.5 102.1,45.9 103.4,45.3 104.7,44.8 106.1,44.4 107.4,44.0 108.7,43.7 110.0,43.4 111.3,43.2 112.6,43.1 113.9,43.0 115.2,43.0 116.5,43.0 117.8,43.1 119.1,43.3 120.4,43.5 121.7,43.8 123.0,44.1 124.3,44.5 125.7,45.0 127.0,45.5 128.3,46.1 129.6,46.7 130.9,47.4 132.2,48.2 133.5,49.0 134.8,49.9 136.1,50.8 137.4,51.8 138.7,52.8 140.0,54.0 141.3,55.1 142.6,56.4 143.9,57.7 145.3,59.0 146.6,60.4 147.9,61.9 149.2,63.4 150.5,65.0 151.8,66.7 153.1,68.4 154.4,70.2 155.7,72.0 157.0,73.9 158.3,75.8 159.6,77.8 160.9,79.9 162.2,82.0 163.5,84.2 164.8,86.5 166.2,88.8 167.5,91.2 168.8,93.6 170.1,96.1 171.4,98.6 172.7,101.2 174.0,103.9 175.3,106.6 176.6,109.4 177.9,112.3 179.2,115.2 180.5,118.1 181.8,121.2 183.1,124.3 184.4,127.4 185.8,130.6 187.1,133.9 188.4,137.2 189.7,140.6 191.0,144.0 192.3,147.5 193.6,151.1 194.9,154.7 196.2,158.4 197.5,162.1 198.8,165.9 200.1,169.8 201.4,173.7 202.7,177.7 204.0,181.8 205.4,185.9 206.7,190.0 208.0,194.2 209.3,198.5 210.6,202.9 211.9,207.3 213.2,211.7 214.5,216.2" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <circle cx="35.0" cy="155.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <circle cx="195.0" cy="155.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="35" y="173" fill="#cc4400" font-size="11" text-anchor="middle">-1</text> <text x="195" y="173" fill="#cc4400" font-size="11" text-anchor="middle">3</text> <circle cx="115.0" cy="43.0" r="4" fill="#fbbf24" stroke="#111827" stroke-width="1.5"/> <line x1="115" y1="43" x2="115" y2="155" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2" opacity="0.6"/> <line x1="75" y1="43" x2="115" y2="43" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2" opacity="0.6"/> <text x="123" y="38" fill="#fbbf24" font-size="10" text-anchor="start">V(1; 4)</text> <text x="150" y="216" fill="#e2e8f0" font-size="10" text-anchor="middle">f(x) = ?</text> </svg>`,
      instruction: `Vyberte predpis funkce f, jehoz graf odpovida zobrazene parabole.`,
      choices: [
        {
          label: `\\(y = (x + 1)(x - 3)\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Kladná parabola by byla otevřena nahoru, ne dolů. Záporný koeficient u \\(x^2\\) je podmínkou pro obrácenou parabolu.`
        },
        {
          label: `\\(y = - (x + 1)(x - 3)\\)`,
          value: "B",
          feedback: `Přístup povolen. Záporná parabola s kořeny \\(-1\\) a \\(3\\), vrcholem \\(V(1;\, 4)\\). Identifikace potvrzena.`
        },
        {
          label: `\\(y = - (x - 1)(x + 3)\\)`,
          value: "C",
          feedback: `Kritická chyba. Tento předpis má kořeny \\(x=1\\) a \\(x=-3\\) — neshoda s grafem, který protíná osu \\(x\\) v \\(x=-1\\) a \\(x=3\\).`
        },
        {
          label: `\\(y = x^{2} + 2x - 3\\)`,
          value: "D",
          feedback: `Kritická chyba. Kladná parabola — graf by byl otevřený nahoru. Kořeny jsou \\(-3\\) a \\(1\\), ne \\(-1\\) a \\(3\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_funkce_02", regionId: "funkce", type: "closed", monsterName: `SIM: Osa soumernosti paraboly`,
      isTraining: true, bossId: "q_funkce_02", visual_color: "#2ecc8a", visual_symbol: `f(x)`, points: 0,
      question: `Záporná parabola má kořeny \\(x_1 = -1\\) a \\(x_2 = 3\\) (viz graf). Jaká je \\(x\\)-souřadnice vrcholu?`,
      instruction: `Vyberte spravnou x-souradnici vrcholu.`,
      steps: [
        {
          trigger: `> Krok 1: Kde lezi vrchol?`,
          content: `Vrchol paraboly leží na ose souměrnosti. Osa souměrnosti prochází středem mezi kořeny: \\(x_v = (x_1 + x_2)/2\\).`
        },
        {
          trigger: `> Krok 2: Vypocet`,
          content: `\\(x_1 = -1,\; x_2 = 3\\) → \\(x_v = (-1+3)/2 = 2/2 = \\mathbf{1}\\). Logika potvrzena.`
        },
      ],
      choices: [
        {
          label: `\\(x_{v} = 2\\)`,
          value: "A",
          feedback: `Chyba. Osa souměrnosti je průměr kořenů: \\((-1+3)/2 = 1\\), ne \\(2\\). Zkontroluj aritmetiku.`
        },
        {
          label: `\\(x_{v} = 1\\)`,
          value: "B",
          feedback: `Přístup povolen. Průměr kořenů: \\((-1+3)/2 = 1\\). Teď zkus identifikovat celý předpis v boss příkladu.`
        },
        {
          label: `\\(x_{v} = 0\\)`,
          value: "C",
          feedback: `Chyba. Nula by byla osa souměrnosti pro parabolu s kořeny \\(-a\\) a \\(+a\\). Zde kořeny nejsou souměrné kolem \\(0\\).`
        },
        {
          label: `\\(x_{v} = - 1\\)`,
          value: "D",
          feedback: `Záměna. \\(-1\\) je kořen \\(x_1\\), ne souřadnice vrcholu. Vrchol leží mezi kořeny.`
        },
      ],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 185" style="width:100%;max-width:260px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="29" y1="0" x2="29" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="65" y1="0" x2="65" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="101" y1="0" x2="101" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="137" y1="0" x2="137" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="173" y1="0" x2="173" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="209" y1="0" x2="209" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="245" y1="0" x2="245" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="178" x2="260" y2="178" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="154" x2="260" y2="154" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="130" x2="260" y2="130" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="106" x2="260" y2="106" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="82" x2="260" y2="82" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="58" x2="260" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="34" x2="260" y2="34" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="10" x2="260" y2="10" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="130" x2="260" y2="130" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="260,130 253,126 253,134" fill="#e2e8f0"/> <text x="255" y="122" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="65" y1="185" x2="65" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="65,0 61,10 69,10" fill="#e2e8f0"/> <text x="71" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="51" y="144" fill="#e2e8f0" font-size="11">O</text> <line x1="29" y1="127" x2="29" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="29" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="101" y1="127" x2="101" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="101" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="137" y1="127" x2="137" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="137" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="173" y1="127" x2="173" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="173" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="209" y1="127" x2="209" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="209" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="245" y1="127" x2="245" y2="133" stroke="#e2e8f0" stroke-width="1"/> <text x="245" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">5</text> <line x1="62" y1="154" x2="68" y2="154" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="158" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="62" y1="106" x2="68" y2="106" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="110" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="62" y1="82" x2="68" y2="82" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="86" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="62" y1="58" x2="68" y2="58" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="62" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="62" y1="34" x2="68" y2="34" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="38" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="62" y1="10" x2="68" y2="10" stroke="#e2e8f0" stroke-width="1"/> <text x="57" y="14" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <polyline points="11.5,182.5 12.5,178.9 13.6,175.4 14.7,171.9 15.8,168.4 16.9,165.0 18.0,161.7 19.1,158.4 20.1,155.1 21.2,151.9 22.3,148.7 23.4,145.5 24.5,142.4 25.6,139.4 26.6,136.4 27.7,133.4 28.8,130.5 29.9,127.6 31.0,124.8 32.1,122.0 33.2,119.2 34.2,116.5 35.3,113.9 36.4,111.2 37.5,108.7 38.6,106.1 39.7,103.6 40.8,101.2 41.8,98.8 42.9,96.4 44.0,94.1 45.1,91.9 46.2,89.6 47.3,87.5 48.4,85.3 49.4,83.2 50.5,81.2 51.6,79.2 52.7,77.2 53.8,75.3 54.9,73.4 56.0,71.6 57.0,69.8 58.1,68.0 59.2,66.3 60.3,64.7 61.4,63.1 62.5,61.5 63.6,60.0 64.6,58.5 65.7,57.0 66.8,55.6 67.9,54.3 69.0,53.0 70.1,51.7 71.2,50.5 72.2,49.3 73.3,48.2 74.4,47.1 75.5,46.0 76.6,45.0 77.7,44.1 78.7,43.2 79.8,42.3 80.9,41.5 82.0,40.7 83.1,39.9 84.2,39.2 85.3,38.6 86.3,38.0 87.4,37.4 88.5,36.9 89.6,36.4 90.7,36.0 91.8,35.6 92.9,35.2 93.9,34.9 95.0,34.7 96.1,34.4 97.2,34.3 98.3,34.1 99.4,34.0 100.5,34.0 101.5,34.0 102.6,34.0 103.7,34.1 104.8,34.3 105.9,34.4 107.0,34.7 108.1,34.9 109.1,35.2 110.2,35.6 111.3,36.0 112.4,36.4 113.5,36.9 114.6,37.4 115.7,38.0 116.7,38.6 117.8,39.2 118.9,39.9 120.0,40.7 121.1,41.5 122.2,42.3 123.3,43.2 124.3,44.1 125.4,45.0 126.5,46.0 127.6,47.1 128.7,48.2 129.8,49.3 130.8,50.5 131.9,51.7 133.0,53.0 134.1,54.3 135.2,55.6 136.3,57.0 137.4,58.5 138.4,60.0 139.5,61.5 140.6,63.1 141.7,64.7 142.8,66.3 143.9,68.0 145.0,69.8 146.0,71.6 147.1,73.4 148.2,75.3 149.3,77.2 150.4,79.2 151.5,81.2 152.6,83.2 153.6,85.3 154.7,87.5 155.8,89.6 156.9,91.9 158.0,94.1 159.1,96.4 160.2,98.8 161.2,101.2 162.3,103.6 163.4,106.1 164.5,108.7 165.6,111.2 166.7,113.9 167.8,116.5 168.8,119.2 169.9,122.0 171.0,124.8 172.1,127.6 173.2,130.5 174.3,133.4 175.4,136.4 176.4,139.4 177.5,142.4 178.6,145.5 179.7,148.7 180.8,151.9 181.9,155.1 182.9,158.4 184.0,161.7 185.1,165.0 186.2,168.4 187.3,171.9 188.4,175.4 189.5,178.9 190.5,182.5" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <circle cx="29.0" cy="130.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <circle cx="173.0" cy="130.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="29" y="145" fill="#cc4400" font-size="10" text-anchor="middle">x1=-1</text> <text x="173" y="145" fill="#cc4400" font-size="10" text-anchor="middle">x2=3</text> <circle cx="101.0" cy="34.0" r="5" fill="#fbbf24" stroke="#111827" stroke-width="1.5"/> <text x="109" y="38" fill="#fbbf24" font-size="14" font-weight="bold">?</text> <text x="101" y="21" fill="#fbbf24" font-size="10" text-anchor="middle">V(xv; ?)</text> </svg>`,
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_funkce_03", regionId: "funkce", type: "closed", monsterName: `FW-05C: Identifikace predpisu hyperboly`,
      visual_color: "#4fc3f7", visual_symbol: `1/x`, points: 3, trainingTasks: ["t_funkce_03"],
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
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_funkce_03", regionId: "funkce", type: "closed", monsterName: `SIM: Asymptoty hyperboly`,
      isTraining: true, bossId: "q_funkce_03", visual_color: "#2ecc8a", visual_symbol: `1/x`, points: 0,
      question: `Hyperbola \\(f\\) je zobrazena na grafu. Jaké jsou její asymptoty?`,
      formula: `$$f(x) = \\frac{2}{x - 1} - 2$$`,
      instruction: `Vyberte spravnou dvojici asymptot.`,
      steps: [
        {
          trigger: `> Krok 1: Svisle asymptota`,
          content: `Svislá asymptota nastává tam, kde <b>jmenovatel = 0</b>. Zde \\(x - 1 = 0 \\Rightarrow x = 1\\).`
        },
        {
          trigger: `> Krok 2: Vodorovna asymptota`,
          content: `Vodorovná asymptota je hodnota, ke které se funkce <b>blíží pro \\(x \\to \\infty\\)</b>. Výraz \\(\\frac{2}{x-1} \\to 0\\), takže \\(y \\to 0 - 2 = -2\\). Logika potvrzena.`
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
      id: "q_funkce_04", regionId: "funkce", type: "closed", monsterName: `FW-05D: Vzdalenost pruseciku paraboly`,
      visual_color: "#4fc3f7", visual_symbol: `AB`, points: 4, trainingTasks: ["t_funkce_04"],
      question: `V kartézské soustavě souřadnic jsou zobrazeny grafy funkcí \\(f\\) a \\(g\\). Průsečíky grafů jsou body \\(A\\) a \\(B\\).`,
      formula: `$$f:y = - x^{2} + 2x + 8\\text{\\quad\\quad}g:y = 5$$`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 210" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="20" y1="0" x2="20" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="50" y1="0" x2="50" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="80" y1="0" x2="80" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="110" y1="0" x2="110" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="140" y1="0" x2="140" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="170" y1="0" x2="170" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="200" y1="0" x2="200" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="230" y1="0" x2="230" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="260" y1="0" x2="260" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="290" y1="0" x2="290" y2="210" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="202" x2="300" y2="202" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="185" x2="300" y2="185" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="168" x2="300" y2="168" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="151" x2="300" y2="151" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="134" x2="300" y2="134" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="117" x2="300" y2="117" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="100" x2="300" y2="100" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="83" x2="300" y2="83" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="66" x2="300" y2="66" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="49" x2="300" y2="49" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="32" x2="300" y2="32" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="15" x2="300" y2="15" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="185" x2="300" y2="185" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="300,185 293,181 293,189" fill="#e2e8f0"/> <text x="295" y="177" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="80" y1="210" x2="80" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="80,0 76,10 84,10" fill="#e2e8f0"/> <text x="86" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="66" y="199" fill="#e2e8f0" font-size="11">O</text> <line x1="20" y1="182" x2="20" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="20" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">-2</text> <line x1="50" y1="182" x2="50" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="50" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="110" y1="182" x2="110" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="110" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="140" y1="182" x2="140" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="140" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="170" y1="182" x2="170" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="170" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="200" y1="182" x2="200" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="200" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="230" y1="182" x2="230" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="230" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">5</text> <line x1="260" y1="182" x2="260" y2="188" stroke="#e2e8f0" stroke-width="1"/> <text x="260" y="200" fill="#e2e8f0" font-size="10" text-anchor="middle">6</text> <line x1="77" y1="202" x2="83" y2="202" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="206" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="77" y1="168" x2="83" y2="168" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="172" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="77" y1="151" x2="83" y2="151" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="155" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="77" y1="134" x2="83" y2="134" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="138" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="77" y1="117" x2="83" y2="117" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="121" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="77" y1="100" x2="83" y2="100" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="104" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <line x1="77" y1="83" x2="83" y2="83" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="87" fill="#e2e8f0" font-size="10" text-anchor="end">6</text> <line x1="77" y1="66" x2="83" y2="66" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="70" fill="#e2e8f0" font-size="10" text-anchor="end">7</text> <line x1="77" y1="49" x2="83" y2="49" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="53" fill="#e2e8f0" font-size="10" text-anchor="end">8</text> <line x1="77" y1="32" x2="83" y2="32" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="36" fill="#e2e8f0" font-size="10" text-anchor="end">9</text> <line x1="77" y1="15" x2="83" y2="15" stroke="#e2e8f0" stroke-width="1"/> <text x="72" y="19" fill="#e2e8f0" font-size="10" text-anchor="end">10</text> <polyline points="14.1,205.8 14.9,202.9 15.7,200.0 16.5,197.2 17.3,194.3 18.1,191.6 18.9,188.8 19.7,186.0 20.5,183.3 21.3,180.6 22.1,177.9 22.9,175.3 23.7,172.6 24.5,170.0 25.3,167.5 26.1,164.9 26.9,162.4 27.7,159.9 28.5,157.4 29.3,154.9 30.1,152.5 30.9,150.1 31.7,147.7 32.5,145.3 33.3,143.0 34.1,140.7 34.9,138.4 35.8,136.1 36.6,133.9 37.4,131.7 38.2,129.5 39.0,127.3 39.8,125.2 40.6,123.1 41.4,121.0 42.2,118.9 43.0,116.9 43.8,114.8 44.6,112.8 45.4,110.9 46.2,108.9 47.0,107.0 47.8,105.1 48.6,103.2 49.4,101.4 50.2,99.5 51.0,97.7 51.8,96.0 52.6,94.2 53.4,92.5 54.2,90.8 55.0,89.1 55.8,87.4 56.6,85.8 57.4,84.2 58.2,82.6 59.0,81.1 59.8,79.5 60.6,78.0 61.4,76.5 62.2,75.1 63.0,73.6 63.8,72.2 64.6,70.8 65.5,69.5 66.3,68.1 67.1,66.8 67.9,65.5 68.7,64.3 69.5,63.0 70.3,61.8 71.1,60.6 71.9,59.5 72.7,58.3 73.5,57.2 74.3,56.1 75.1,55.0 75.9,54.0 76.7,53.0 77.5,52.0 78.3,51.0 79.1,50.0 79.9,49.1 80.7,48.2 81.5,47.3 82.3,46.5 83.1,45.7 83.9,44.9 84.7,44.1 85.5,43.3 86.3,42.6 87.1,41.9 87.9,41.2 88.7,40.5 89.5,39.9 90.3,39.3 91.1,38.7 91.9,38.2 92.7,37.6 93.5,37.1 94.3,36.6 95.2,36.2 96.0,35.7 96.8,35.3 97.6,34.9 98.4,34.6 99.2,34.2 100.0,33.9 100.8,33.6 101.6,33.3 102.4,33.1 103.2,32.9 104.0,32.7 104.8,32.5 105.6,32.4 106.4,32.2 107.2,32.1 108.0,32.1 108.8,32.0 109.6,32.0 110.4,32.0 111.2,32.0 112.0,32.1 112.8,32.1 113.6,32.2 114.4,32.4 115.2,32.5 116.0,32.7 116.8,32.9 117.6,33.1 118.4,33.3 119.2,33.6 120.0,33.9 120.8,34.2 121.6,34.6 122.4,34.9 123.2,35.3 124.0,35.7 124.8,36.2 125.7,36.6 126.5,37.1 127.3,37.6 128.1,38.2 128.9,38.7 129.7,39.3 130.5,39.9 131.3,40.5 132.1,41.2 132.9,41.9 133.7,42.6 134.5,43.3 135.3,44.1 136.1,44.9 136.9,45.7 137.7,46.5 138.5,47.3 139.3,48.2 140.1,49.1 140.9,50.0 141.7,51.0 142.5,52.0 143.3,53.0 144.1,54.0 144.9,55.0 145.7,56.1 146.5,57.2 147.3,58.3 148.1,59.5 148.9,60.6 149.7,61.8 150.5,63.0 151.3,64.3 152.1,65.5 152.9,66.8 153.7,68.1 154.5,69.5 155.4,70.8 156.2,72.2 157.0,73.6 157.8,75.1 158.6,76.5 159.4,78.0 160.2,79.5 161.0,81.1 161.8,82.6 162.6,84.2 163.4,85.8 164.2,87.4 165.0,89.1 165.8,90.8 166.6,92.5 167.4,94.2 168.2,96.0 169.0,97.7 169.8,99.5 170.6,101.4 171.4,103.2 172.2,105.1 173.0,107.0 173.8,108.9 174.6,110.9 175.4,112.8 176.2,114.8 177.0,116.9 177.8,118.9 178.6,121.0 179.4,123.1 180.2,125.2 181.0,127.3 181.8,129.5 182.6,131.7 183.4,133.9 184.2,136.1 185.1,138.4 185.9,140.7 186.7,143.0 187.5,145.3 188.3,147.7 189.1,150.1 189.9,152.5 190.7,154.9 191.5,157.4 192.3,159.9 193.1,162.4 193.9,164.9 194.7,167.5 195.5,170.0 196.3,172.6 197.1,175.3 197.9,177.9 198.7,180.6 199.5,183.3 200.3,186.0 201.1,188.8 201.9,191.6 202.7,194.3 203.5,197.2 204.3,200.0 205.1,202.9 205.9,205.8" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <line x1="5" y1="100" x2="295" y2="100" stroke="#f97316" stroke-width="2"/> <text x="288" y="92" fill="#f97316" font-size="12" text-anchor="end">g</text> <text x="10" y="112" fill="#f97316" font-size="9" text-anchor="start">y=5</text> <circle cx="50.0" cy="100.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <circle cx="170.0" cy="100.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="50" y="88" fill="#cc4400" font-size="12" text-anchor="middle">A</text> <text x="170" y="88" fill="#cc4400" font-size="12" text-anchor="middle">B</text> <text x="36" y="104" fill="#cc4400" font-size="8" text-anchor="end">(-1;5)</text> <text x="174" y="104" fill="#cc4400" font-size="8" text-anchor="start">(3;5)</text> <circle cx="110.0" cy="32.0" r="3" fill="#fbbf24" stroke="#111827" stroke-width="1"/> <text x="205" y="175" fill="#4fc3f7" font-size="12" text-anchor="start">f</text> </svg>`,
      instruction: `Vypoctete vzdalenost bodu A a B.`,
      choices: [
        {
          label: `\\(|AB| = 4\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(A = (-1;\, 5)\\), \\(B = (3;\, 5)\\). Vzdálenost \\(|AB| = |3-(-1)| = 4\\).`
        },
        {
          label: `\\(|AB| = 2\\)`,
          value: "B",
          feedback: `Chyba. Vzdálenost \\(2\\) odpovídá vzdálenosti vrcholu od jednoho průsečíku: \\(|x_v - x_B| = |1-3| = 2\\). Hledáme však vzdálenost \\(A\\) od \\(B\\).`
        },
        {
          label: `\\(|AB| = 2\\sqrt{5}\\)`,
          value: "C",
          feedback: `Chyba. Toto je vzdalenost vrcholu paraboly V(1; 9) od bodu B(3; 5): \\(\\sqrt{4+16}=2\\sqrt{5}\\). Body A, B maji stejnou y -- vzdalenost je horizontalni.`
        },
        {
          label: `\\(|AB| = 6\\)`,
          value: "D",
          feedback: `Kritická chyba. Vzdálenost \\(6\\) jsou kořeny paraboly \\(f\\) (průsečíky s osou \\(x\\)): \\(x=-2\\) a \\(x=4\\). Průsečíky s přímkou \\(g: y=5\\) jsou jiné body.`
        },
      ],
      correctAnswer: "A", reward: { xp: 20 }
    },
    {
      id: "t_funkce_04", regionId: "funkce", type: "closed", monsterName: `SIM: Pruseciky paraboly s primkou`,
      isTraining: true, bossId: "q_funkce_04", visual_color: "#2ecc8a", visual_symbol: `AB`, points: 0,
      question: `Najděte \\(x\\)-souřadnice průsečíků \\(f\\colon y = -x^2+2x+8\\) s \\(g\\colon y = 5\\).`,
      formula: `$$- x^{2} + 2x + 8 = 5$$`,
      instruction: `Vyberte spravnou sadu x-souradnic pruseciku.`,
      steps: [
        {
          trigger: `> Krok 1: Rovnice pruseciku`,
          content: `Průsečíky nastávají, kde \\(f(x) = g(x)\\). Dosadíme: \\(-x^2+2x+8 = 5\\), upravíme: \\(x^2 - 2x - 3 = 0\\).`
        },
        {
          trigger: `> Krok 2: Reseni kvadraticke rovnice`,
          content: `Rozklad: \\(x^2-2x-3 = (x-3)(x+1) = 0\\). Kořeny: \\(x_1 = -1,\; x_2 = 3\\). Logika potvrzena.`
        },
      ],
      choices: [
        {
          label: `\\(x = 4nebox = - 2\\)`,
          value: "A",
          feedback: `Chyba. Tyto hodnoty jsou průsečíky paraboly \\(f\\) s osou \\(x\\) (\\(f(x)=0\\)), ne s přímkou \\(g\\colon y=5\\).`
        },
        {
          label: `\\(x = 1nebox = 3\\)`,
          value: "B",
          feedback: `Chyba. Ověř dosazením: \\(f(1) = -1+2+8 = 9 \\neq 5\\).`
        },
        {
          label: `\\(x = 2nebox = 0\\)`,
          value: "C",
          feedback: `Chyba. Ověř: \\(f(2)=-4+4+8=8\\) a \\(f(0)=8\\), ani jedno se nerovná \\(5\\).`
        },
        {
          label: `\\(x = 3nebox = - 1\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(f(3)=-9+6+8=5\\) a \\(f(-1)=-1-2+8=5\\). Průsečíky \\(A=(-1;5)\\) a \\(B=(3;5)\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_funkce_05", regionId: "funkce", type: "closed", monsterName: `FW-05E: Definicni obor odmocniny`,
      visual_color: "#4fc3f7", visual_symbol: `D(f)`, points: 3, trainingTasks: ["t_funkce_05"],
      question: `Funkce \\(f\\) je definována předpisem:`,
      formula: `$$f(x) = \\sqrt{x^{2} - 9}$$`,
      instruction: `Vyberte definicni obor funkce f.`,
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
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_funkce_05", regionId: "funkce", type: "closed", monsterName: `SIM: Podminka odmocniny`,
      isTraining: true, bossId: "q_funkce_05", visual_color: "#2ecc8a", visual_symbol: `D(f)`, points: 0,
      question: `Pro jaké hodnoty \\(x\\) je výraz \\(\\sqrt{x + 5}\\) definovaný?`,
      formula: `$$\\sqrt{x + 5}$$`,
      instruction: `Vyberte spravnou podminu definovanosti.`,
      steps: [
        {
          trigger: `> Krok 1: Podminka pod odmocninou`,
          content: `Sudá odmocnina je definována tehdy, když výraz pod ní je <b>nezáporný</b> \\((\\geq 0)\\). Záporné číslo nemá reálnou odmocninu.`
        },
        {
          trigger: `> Krok 2: Reseni nerovnice`,
          content: `\\(x + 5 \\geq 0 \\Rightarrow x \\geq -5\\). Pro \\(x = -5\\) dostaneme \\(\\sqrt{0} = 0\\) — stále definováno. Logika potvrzena.`
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
      id: "q_funkce_06", regionId: "funkce", type: "closed", monsterName: `FW-05F: Soucet souradnic vrcholu paraboly`,
      visual_color: "#4fc3f7", visual_symbol: `V(x,y)`, points: 3, trainingTasks: ["t_funkce_06"],
      question: `Kvadratická funkce \\(f\\) je definována předpisem:`,
      formula: `$$f(x) = x^{2} - 10x + 16$$`,
      instruction: `Urcete soucet souradnic vrcholu V funkce f.`,
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
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_funkce_06", regionId: "funkce", type: "closed", monsterName: `SIM: Y-souradnice vrcholu paraboly`,
      isTraining: true, bossId: "q_funkce_06", visual_color: "#2ecc8a", visual_symbol: `V(x,y)`, points: 0,
      question: `Kvadratická funkce \\(f\\colon y = x^2 - 6x + 5\\). Jaká je \\(y\\)-souřadnice vrcholu \\(V\\)?`,
      formula: `$$f(x) = x^{2} - 6x + 5$$`,
      instruction: `Vyberte y-souradnici vrcholu.`,
      steps: [
        {
          trigger: `> Krok 1: Najdi x-souradnici vrcholu`,
          content: `Pro parabolu \\(y = ax^2+bx+c\\): \\(x_v = -b/(2a)\\). Zde \\(a=1,\; b=-6\\): \\(x_v = -(-6)/(2 \\cdot 1) = 6/2 = 3\\).`
        },
        {
          trigger: `> Krok 2: Dosaď do predpisu`,
          content: `\\(y_v = f(x_v) = f(3) = 3^2 - 6 \\cdot 3 + 5 = 9 - 18 + 5 = \\mathbf{-4}\\). Přístup povolen.`
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
      id: "q_funkce_07", regionId: "funkce", type: "closed", monsterName: `FW-05F: Tvrzeni o parabole`,
      visual_color: "#4fc3f7", visual_symbol: `f(x)`, points: 3, trainingTasks: ["t_funkce_07"],
      question: `V kartézské soustavě souřadnic je zobrazen graf kladné paraboly \\(f\\).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 270" style="width:100%;max-width:300px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"> <line x1="30" y1="0" x2="30" y2="270" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="70" y1="0" x2="70" y2="270" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="110" y1="0" x2="110" y2="270" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="150" y1="0" x2="150" y2="270" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="190" y1="0" x2="190" y2="270" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="230" y1="0" x2="230" y2="270" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="270" y1="0" x2="270" y2="270" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="264" x2="300" y2="264" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="242" x2="300" y2="242" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="220" x2="300" y2="220" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="198" x2="300" y2="198" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="176" x2="300" y2="176" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="154" x2="300" y2="154" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="132" x2="300" y2="132" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="110" x2="300" y2="110" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="88" x2="300" y2="88" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="66" x2="300" y2="66" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="44" x2="300" y2="44" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="22" x2="300" y2="22" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="0" x2="300" y2="0" stroke="#64748b" stroke-width="0.5" opacity="0.45"/> <line x1="0" y1="220" x2="300" y2="220" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="300,220 293,216 293,224" fill="#e2e8f0"/> <text x="295" y="212" fill="#e2e8f0" font-size="12" font-style="italic">x</text> <line x1="110" y1="270" x2="110" y2="0" stroke="#e2e8f0" stroke-width="1.5"/> <polygon points="110,0 106,10 114,10" fill="#e2e8f0"/> <text x="116" y="14" fill="#e2e8f0" font-size="12" font-style="italic">y</text> <text x="96" y="234" fill="#e2e8f0" font-size="11">O</text> <line x1="30" y1="217" x2="30" y2="223" stroke="#e2e8f0" stroke-width="1"/> <text x="30" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">-2</text> <line x1="70" y1="217" x2="70" y2="223" stroke="#e2e8f0" stroke-width="1"/> <text x="70" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">-1</text> <line x1="150" y1="217" x2="150" y2="223" stroke="#e2e8f0" stroke-width="1"/> <text x="150" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">1</text> <line x1="190" y1="217" x2="190" y2="223" stroke="#e2e8f0" stroke-width="1"/> <text x="190" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">2</text> <line x1="230" y1="217" x2="230" y2="223" stroke="#e2e8f0" stroke-width="1"/> <text x="230" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">3</text> <line x1="270" y1="217" x2="270" y2="223" stroke="#e2e8f0" stroke-width="1"/> <text x="270" y="235" fill="#e2e8f0" font-size="10" text-anchor="middle">4</text> <line x1="107" y1="242" x2="113" y2="242" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="246" fill="#e2e8f0" font-size="10" text-anchor="end">-1</text> <line x1="107" y1="198" x2="113" y2="198" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="202" fill="#e2e8f0" font-size="10" text-anchor="end">1</text> <line x1="107" y1="176" x2="113" y2="176" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="180" fill="#e2e8f0" font-size="10" text-anchor="end">2</text> <line x1="107" y1="154" x2="113" y2="154" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="158" fill="#e2e8f0" font-size="10" text-anchor="end">3</text> <line x1="107" y1="132" x2="113" y2="132" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="136" fill="#e2e8f0" font-size="10" text-anchor="end">4</text> <line x1="107" y1="110" x2="113" y2="110" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="114" fill="#e2e8f0" font-size="10" text-anchor="end">5</text> <line x1="107" y1="88" x2="113" y2="88" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="92" fill="#e2e8f0" font-size="10" text-anchor="end">6</text> <line x1="107" y1="66" x2="113" y2="66" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="70" fill="#e2e8f0" font-size="10" text-anchor="end">7</text> <line x1="107" y1="44" x2="113" y2="44" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="48" fill="#e2e8f0" font-size="10" text-anchor="end">8</text> <line x1="107" y1="22" x2="113" y2="22" stroke="#e2e8f0" stroke-width="1"/> <text x="102" y="26" fill="#e2e8f0" font-size="10" text-anchor="end">9</text> <polyline points="2.3,157.0 3.2,158.7 4.1,160.4 5.0,162.0 5.9,163.6 6.8,165.2 7.7,166.7 8.6,168.2 9.5,169.8 10.5,171.2 11.4,172.7 12.3,174.2 13.2,175.6 14.1,177.0 15.0,178.3 15.9,179.7 16.8,181.0 17.7,182.3 18.6,183.6 19.5,184.9 20.4,186.1 21.3,187.4 22.2,188.6 23.1,189.7 24.0,190.9 24.9,192.0 25.8,193.1 26.7,194.2 27.6,195.3 28.5,196.3 29.4,197.3 30.3,198.3 31.2,199.3 32.1,200.3 33.0,201.2 33.9,202.1 34.8,203.0 35.7,203.8 36.6,204.7 37.5,205.5 38.4,206.3 39.3,207.1 40.2,207.8 41.1,208.5 42.0,209.2 42.9,209.9 43.8,210.6 44.7,211.2 45.6,211.8 46.5,212.4 47.4,213.0 48.3,213.6 49.2,214.1 50.2,214.6 51.1,215.1 52.0,215.5 52.9,216.0 53.8,216.4 54.7,216.8 55.6,217.1 56.5,217.5 57.4,217.8 58.3,218.1 59.2,218.4 60.1,218.6 61.0,218.9 61.9,219.1 62.8,219.3 63.7,219.5 64.6,219.6 65.5,219.7 66.4,219.8 67.3,219.9 68.2,220.0 69.1,220.0 70.0,220.0 70.9,220.0 71.8,220.0 72.7,219.9 73.6,219.8 74.5,219.7 75.4,219.6 76.3,219.5 77.2,219.3 78.1,219.1 79.0,218.9 79.9,218.6 80.8,218.4 81.7,218.1 82.6,217.8 83.5,217.5 84.4,217.1 85.3,216.8 86.2,216.4 87.1,216.0 88.0,215.5 88.9,215.1 89.8,214.6 90.8,214.1 91.7,213.6 92.6,213.0 93.5,212.4 94.4,211.8 95.3,211.2 96.2,210.6 97.1,209.9 98.0,209.2 98.9,208.5 99.8,207.8 100.7,207.1 101.6,206.3 102.5,205.5 103.4,204.7 104.3,203.8 105.2,203.0 106.1,202.1 107.0,201.2 107.9,200.3 108.8,199.3 109.7,198.3 110.6,197.3 111.5,196.3 112.4,195.3 113.3,194.2 114.2,193.1 115.1,192.0 116.0,190.9 116.9,189.7 117.8,188.6 118.7,187.4 119.6,186.1 120.5,184.9 121.4,183.6 122.3,182.3 123.2,181.0 124.1,179.7 125.0,178.3 125.9,177.0 126.8,175.6 127.7,174.2 128.6,172.7 129.5,171.2 130.5,169.8 131.4,168.2 132.3,166.7 133.2,165.2 134.1,163.6 135.0,162.0 135.9,160.4 136.8,158.7 137.7,157.0 138.6,155.3 139.5,153.6 140.4,151.9 141.3,150.1 142.2,148.4 143.1,146.6 144.0,144.7 144.9,142.9 145.8,141.0 146.7,139.1 147.6,137.2 148.5,135.3 149.4,133.3 150.3,131.3 151.2,129.3 152.1,127.3 153.0,125.3 153.9,123.2 154.8,121.1 155.7,119.0 156.6,116.8 157.5,114.7 158.4,112.5 159.3,110.3 160.2,108.1 161.1,105.8 162.0,103.5 162.9,101.2 163.8,98.9 164.7,96.6 165.6,94.2 166.5,91.8 167.4,89.4 168.3,87.0 169.2,84.6 170.2,82.1 171.1,79.6 172.0,77.1 172.9,74.5 173.8,72.0 174.7,69.4 175.6,66.8 176.5,64.1 177.4,61.5 178.3,58.8 179.2,56.1 180.1,53.4 181.0,50.7 181.9,47.9 182.8,45.1 183.7,42.3 184.6,39.5 185.5,36.6 186.4,33.7 187.3,30.8 188.2,27.9 189.1,25.0 190.0,22.0 190.9,19.0 191.8,16.0 192.7,13.0 193.6,9.9 194.5,6.8 195.4,3.7" fill="none" stroke="#4fc3f7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/> <line x1="70" y1="0" x2="70" y2="270" stroke="#fbbf24" stroke-width="1" stroke-dasharray="5,4" opacity="0.7"/> <circle cx="70.0" cy="220.0" r="5" fill="#cc4400" stroke="#111827" stroke-width="1.5"/> <text x="80" y="210" fill="#cc4400" font-size="9" text-anchor="start">V(-1; 0)</text> <circle cx="110.0" cy="198.0" r="4" fill="#a78bfa" stroke="#111827" stroke-width="1.5"/> <text x="118" y="192" fill="#a78bfa" font-size="9" text-anchor="start">(0; 1)</text> <text x="150" y="266" fill="#e2e8f0" font-size="10" text-anchor="middle">f(x) = ?</text> </svg>`,
      instruction: `Ktere z nasledujicich tvrzeni o funkci f je pravdive?`,
      choices: [
        {
          label: `Osa souměrnosti grafu je přímka \\(x = 1\\).`,
          value: "A",
          feedback: `Kritická chyba. Z grafu vidíme, že vrchol leží v bodě \\(V(-1;\, 0)\\), takže osa souměrnosti je \\(x = -1\\), ne \\(x = 1\\).`
        },
        {
          label: `\\(f(0) = 1\\)`,
          value: "B",
          feedback: `Přístup povolen. Dosaď \\(x = 0\\) do předpisu \\((x+1)^2\\): \\(f(0) = 1^2 = 1\\). Bod \\((0;\, 1)\\) leží na grafu.`
        },
        {
          label: `Obor hodnot funkce \\(f\\) je \\(H_{f} = ( - \\infty;\\mspace{6mu} 0\\rangle\\).`,
          value: "C",
          feedback: `Chyba. Kladná parabola má minimum ve vrcholu \\(V(-1;\, 0)\\), takže \\(H_f = \\langle 0;\, +\\infty)\\), ne \\((-\\infty;\, 0\\rangle\\).`
        },
        {
          label: `Funkce \\(f\\) klesá v intervalu \\((0;\\mspace{6mu} + \\infty)\\).`,
          value: "D",
          feedback: `Chyba. Kladna parabola s vrcholem V(-1; 0) klesa na (-inf; -1) a roste na (-1; +inf). Na (0; +inf) roste.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_funkce_07", regionId: "funkce", type: "closed", monsterName: `SIM: Vrchol paraboly y = (x-2)^2`,
      isTraining: true, bossId: "q_funkce_07", visual_color: "#2ecc8a", visual_symbol: `f(x)`, points: 0,
      question: `Parabola \\(y = (x - 2)^{2}\\) je ve vrcholovem tvaru \\(y = (x - p)^{2} + q\\).`,
      instruction: `Urcete souradnice vrcholu teto paraboly.`,
      steps: [
        {
          trigger: `> Krok 1: Identifikuj p a q`,
          content: `Vrcholový tvar \\(y = (x - p)^2 + q\\) má vrchol \\(V(p;\, q)\\). Porovnej s \\(y = (x - 2)^2 + 0\\).`
        },
        {
          trigger: `> Krok 2: Zapis vrchol`,
          content: `\\(p = 2,\; q = 0\\) → \\(V(2;\, 0)\\). Parabola se dotýká osy \\(x\\) právě v bodě \\(x = 2\\).`
        },
      ],
      choices: [
        {
          label: `\\(V(0;\\mspace{6mu} 2)\\)`,
          value: "A",
          feedback: `Záměna souřadnic. \\(p\\) a \\(q\\) jsou ve vrcholovém tvaru \\(y=(x-p)^2+q\\) na opačných místech.`
        },
        {
          label: `\\(V(2;\\mspace{6mu} 0)\\)`,
          value: "B",
          feedback: `Přístup povolen. Vrcholový tvar \\(y=(x-2)^2+0\\) ihned dává \\(V(2;\, 0)\\).`
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
      id: "q_funkce_08", regionId: "funkce", type: "closed", monsterName: `FW-05G: Predpis paraboly z vrcholu a bodu`,
      visual_color: "#4fc3f7", visual_symbol: `V+B`, points: 3, trainingTasks: ["t_funkce_08"],
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
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_funkce_08", regionId: "funkce", type: "closed", monsterName: `SIM: Koeficient a z bodu paraboly`,
      isTraining: true, bossId: "q_funkce_08", visual_color: "#2ecc8a", visual_symbol: `V+B`, points: 0,
      question: `Parabola ma vrchol \\(V(2;\\mspace{6mu} - 1)\\) a prochazi bodem \\((0;\\mspace{6mu} 3)\\). Predpis: \\(y = a(x - 2)^{2} - 1\\).`,
      instruction: `Urcete koeficient a dosazenim bodu (0; 3).`,
      steps: [
        {
          trigger: `> Krok 1: Dosadte bod (0; 3)`,
          content: `\\(x = 0,\; y = 3\\) → \\(3 = a(0-2)^2 - 1 = 4a - 1\\).`
        },
        {
          trigger: `> Krok 2: Resen rovnice`,
          content: `\\(4a - 1 = 3 \\Rightarrow 4a = 4 \\Rightarrow a = 1\\). Předpis: \\(y = (x-2)^2 - 1 = x^2 - 4x + 3\\).`
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
      id: "q_funkce_09", regionId: "funkce", type: "closed", monsterName: `FW-05H: Nepravdive tvrzeni o parabole`,
      visual_color: "#4fc3f7", visual_symbol: `A/N`, points: 3, trainingTasks: ["t_funkce_09"],
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
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_funkce_09", regionId: "funkce", type: "closed", monsterName: `SIM: Obor hodnot zaporne paraboly`,
      isTraining: true, bossId: "q_funkce_09", visual_color: "#2ecc8a", visual_symbol: `A/N`, points: 0,
      question: `Funkce \\(f:y = 9 - x^{2}\\) je zaporna parabola s vrcholem \\(V(0;\\mspace{6mu} 9)\\).`,
      instruction: `Jaky je obor hodnot funkce f?`,
      steps: [
        {
          trigger: `> Krok 1: Typ paraboly`,
          content: `Koeficient u \\(x^2\\) je \\(-1 < 0\\) → záporná parabola má <b>maximum</b> ve vrcholu. Ramena jdou dolů.`
        },
        {
          trigger: `> Krok 2: Obor hodnot`,
          content: `Maximum je \\(f(0) = 9\\). Funkce klesá do \\(-\\infty\\). Obor hodnot: \\(H_f = (-\\infty;\, 9\\rangle\\) (9 je dosaženo ve vrcholu).`
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
      id: "q_funkce_10", regionId: "funkce", type: "closed", monsterName: `FW-05I: Obor hodnot exponencialni funkce`,
      visual_color: "#4fc3f7", visual_symbol: `a^x`, points: 3, trainingTasks: ["t_funkce_10"],
      question: `Funkce \\(f:y = \\left( \\frac{3}{2} \\right)^{x}\\) je definována pro všechna \\(x \\in \\mathbb{R}\\).`,
      instruction: `Ze souboru \\(\\left\\{\\,-\\dfrac{3}{2};\\quad 0;\\quad \\dfrac{3}{2};\\quad \\dfrac{4}{9};\\quad \\dfrac{9}{4}\\,\\right\\}\\) vyberte cislo, ktere NEPATI do oboru hodnot funkce f.`,
      choices: [
        {
          label: `\\(- \\frac{3}{2}\\)`,
          value: "A",
          feedback: `Toto číslo nepatří do oboru hodnot, ale hledáme jediné nepravdivé — navíc \\(-\\tfrac{3}{2}\\) je záporné a \\(\\left(\\tfrac{3}{2}\\right)^x > 0\\) vždy. Správná odpověď je B.`
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
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_funkce_10", regionId: "funkce", type: "closed", monsterName: `SIM: Pati 0 do oboru hodnot (3/2)^x?`,
      isTraining: true, bossId: "q_funkce_10", visual_color: "#2ecc8a", visual_symbol: `a^x`, points: 0,
      question: `Funkce \\(f:y = \\left( \\frac{3}{2} \\right)^{x}\\) je definovana pro vsechna \\(x \\in \\mathbb{R}\\).`,
      instruction: `Pati cislo 0 do oboru hodnot funkce f?`,
      steps: [
        {
          trigger: `> Krok 1: Obor hodnot`,
          content: `\\(\\left(\\tfrac{3}{2}\\right)^x > 0\\) pro všechna \\(x \\in \\mathbb{R}\\). Exponenciální funkce je vždy kladná — nikdy nemůže být nulová ani záporná.`
        },
        {
          trigger: `> Krok 2: Co se deje pro x → -∞?`,
          content: `\\(\\lim_{x\\to-\\infty} \\left(\\tfrac{3}{2}\\right)^x = 0\\), ale tato limita <b>není nikdy dosažena</b>. \\(0\\) leží na hranici, ale do oboru hodnot nenáleží.`
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
      id: "q_funkce_11", regionId: "funkce", type: "closed", monsterName: `FW-05J: Rozpoznani sude funkce`,
      visual_color: "#4fc3f7", visual_symbol: `f(-x)`, points: 3, trainingTasks: ["t_funkce_11"],
      question: `Jsou dany ctyri funkce s definicnim oborem \\(\\mathbb{R}\\).`,
      instruction: `Ktera z nasledujicich funkci je suda (jeji graf je soumerny podle osy y)?`,
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
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_funkce_11", regionId: "funkce", type: "closed", monsterName: `SIM: Je f(x) = x^2 + 3 suda?`,
      isTraining: true, bossId: "q_funkce_11", visual_color: "#2ecc8a", visual_symbol: `f(-x)`, points: 0,
      question: `Funkce \\(f:y = x^{2} + 3\\) definovana pro vsechna \\(x \\in \\mathbb{R}\\).`,
      instruction: `Je tato funkce suda? Vypocti f(-x) a porovnej s f(x).`,
      steps: [
        {
          trigger: `> Krok 1: Vypocti f(-x)`,
          content: `Dosaďte \\(-x\\) místo \\(x\\): \\(f(-x) = (-x)^2 + 3 = x^2 + 3\\).`
        },
        {
          trigger: `> Krok 2: Porovnej s f(x)`,
          content: `\\(f(-x) = x^2 + 3 = f(x)\\). Platí pro všechna \\(x\\) → funkce JE SUDÁ. Graf je souměrný podle osy \\(y\\).`
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

    // ==========================================
    // GONIOMETRIE — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_gon_01", regionId: "goniometrie", type: "closed", monsterName: `FW-10A: Tangens ze sinu`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 2, trainingTasks: ["t_gon_01"],
      question: `Pro \\(x \\in (\\pi;\\, \\tfrac{3\\pi}{2})\\) platí:`,
      formula: `$$\\text{sin}x = - \\frac{\\sqrt{3}}{2}$$`,
      instruction: `Vyberte správnou hodnotu tg x.`,
      choices: [
        {
          label: `\\(- \\sqrt{3}\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Ve 3. kvadrantu jsou obě funkce záporné — tangens je kladný: \\(\\tfrac{(-)}{(-)} = +\\).`
        },
        {
          label: `\\(- \\frac{\\sqrt{3}}{3}\\)`,
          value: "B",
          feedback: `Kritická chyba. Záměna podílu \\(\\sin/\\cos\\) — výsledek by odpovídal \\(-\\operatorname{cotg} x\\).`
        },
        {
          label: `\\(\\sqrt{3}\\)`,
          value: "C",
          feedback: `Přístup povolen. Ve 3. kvadrantu: \\(\\sin x < 0,\\; \\cos x < 0\\) → \\(\\tan x = \\tfrac{-\\sqrt{3}/2}{-1/2} = \\sqrt{3}\\). ✓`
        },
        {
          label: `hodnota neexistuje`,
          value: "D",
          feedback: `Chyba. \\(\\tan x\\) neexistuje jen pro \\(\\cos x = 0\\). Zde \\(\\cos x = -\\tfrac{1}{2} \\neq 0\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_gon_01", regionId: "goniometrie", type: "closed", monsterName: `SIM: Znaménka ve 3. kvadrantu`,
      isTraining: true, bossId: "q_gon_01", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `Číslo \\(x\\) leží ve 3. kvadrantu: \\(x \\in (\\pi;\\, \\tfrac{3\\pi}{2})\\). Jaká jsou znaménka \\(\\sin x\\) a \\(\\cos x\\)?`,
      formula: `$$x \\in \\left( \\pi;\\mspace{6mu}\\frac{3\\pi}{2} \\right)$$`,
      instruction: `Vyberte správnou kombinaci znamének.`,
      steps: [
        {
          trigger: `> Krok 1: Kvadranty a osy`,
          content: `Osa \\(x\\) dělí rovinu na horní (\\(\\sin > 0\\)) a dolní (\\(\\sin < 0\\)). Osa \\(y\\) dělí na pravou (\\(\\cos > 0\\)) a levou (\\(\\cos < 0\\)).`
        },
        {
          trigger: `> Krok 2: Lokalizace 3. kvadrantu`,
          content: `3. kvadrant je <b>vlevo dole</b> — obě souřadnice záporné: \\(\\sin x < 0,\\; \\cos x < 0\\).`
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
      id: "q_gon_02", regionId: "goniometrie", type: "closed", monsterName: `FW-10B: Rovnice sekans`,
      visual_color: "#e040fb", visual_symbol: `cos`, points: 2, trainingTasks: ["t_gon_02"],
      question: `V intervalu \\((0;\\, 2\\pi)\\) je řešena rovnice:`,
      formula: `$$\\frac{1}{\\text{cos}x} = - 2$$`,
      instruction: `Která z množin obsahuje všechna řešení dané rovnice?`,
      choices: [
        {
          label: `\\(\\left\\{ \\frac{\\pi}{3};\\,\\frac{5\\pi}{3} \\right\\}\\)`,
          value: "A",
          feedback: `Chyba znaménka. Tato řešení odpovídají \\(\\cos x = +\\tfrac{1}{2}\\), ne \\(-\\tfrac{1}{2}\\).`
        },
        {
          label: `\\(\\left\\{ \\frac{2\\pi}{3};\\,\\frac{4\\pi}{3} \\right\\}\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\cos\\tfrac{2\\pi}{3} = \\cos\\tfrac{4\\pi}{3} = -\\tfrac{1}{2}\\). Ref. úhel \\(\\tfrac{\\pi}{3}\\), 2. a 3. kvadrant. ✓`
        },
        {
          label: `\\(\\left\\{ \\frac{\\pi}{6};\\,\\frac{5\\pi}{6} \\right\\}\\)`,
          value: "C",
          feedback: `Kritická chyba. Tato řešení platí pro \\(\\sin x = \\tfrac{1}{2}\\) — jiná goniometrická funkce.`
        },
        {
          label: `\\(\\left\\{ \\frac{5\\pi}{6};\\,\\frac{7\\pi}{6} \\right\\}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Nesprávný ref. úhel — \\(\\arccos(\\tfrac{1}{2}) = \\tfrac{\\pi}{3}\\), nikoli \\(\\tfrac{\\pi}{6}\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_gon_02", regionId: "goniometrie", type: "closed", monsterName: `SIM: Referenční úhel pro cos`,
      isTraining: true, bossId: "q_gon_02", visual_color: "#2ecc8a", visual_symbol: `cos`, points: 0,
      question: `Jaký je referenční (ostrý) úhel pro rovnici \\(\\cos x = -\\tfrac{1}{2}\\)?`,
      formula: `$$\\text{cos}x = - \\frac{1}{2}$$`,
      instruction: `Vyberte správný referenční úhel.`,
      steps: [
        {
          trigger: `> Krok 1: Ignoruj znaménko`,
          content: `Referenční úhel hledáme pro \\(|\\cos x| = \\tfrac{1}{2}\\). Ptáme se: jaký ostrý úhel \\(\\alpha\\) splňuje \\(\\cos \\alpha = \\tfrac{1}{2}\\)?`
        },
        {
          trigger: `> Krok 2: Základní hodnoty`,
          content: `Pamatuj: \\(\\cos(\\tfrac{\\pi}{3}) = \\tfrac{1}{2}\\), \\(\\cos(\\tfrac{\\pi}{4}) = \\tfrac{\\sqrt{2}}{2}\\), \\(\\cos(\\tfrac{\\pi}{6}) = \\tfrac{\\sqrt{3}}{2}\\). Hledáme \\(\\tfrac{1}{2}\\) → referenční úhel je <b>\\(\\tfrac{\\pi}{3}\\)</b>.`
        },
      ],
      choices: [
        {
          label: `\\(\\frac{\\pi}{3}\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(\\cos(\\tfrac{\\pi}{3}) = \\tfrac{1}{2}\\). ✓`
        },
        {
          label: `\\(\\frac{\\pi}{4}\\)`,
          value: "B",
          feedback: `Chyba. \\(\\cos(\\tfrac{\\pi}{4}) = \\tfrac{\\sqrt{2}}{2} \\approx 0{,}71 \\neq \\tfrac{1}{2}\\).`
        },
        {
          label: `\\(\\frac{\\pi}{6}\\)`,
          value: "C",
          feedback: `Chyba. \\(\\cos(\\tfrac{\\pi}{6}) = \\tfrac{\\sqrt{3}}{2} \\approx 0{,}87 \\neq \\tfrac{1}{2}\\).`
        },
        {
          label: `\\(\\frac{\\pi}{2}\\)`,
          value: "D",
          feedback: `Chyba. \\(\\cos(\\tfrac{\\pi}{2}) = 0 \\neq \\tfrac{1}{2}\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_gon_03", regionId: "goniometrie", type: "closed", monsterName: `FW-10C: Tangens rovnice`,
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
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_gon_03", regionId: "goniometrie", type: "closed", monsterName: `SIM: Počet řešení tangens`,
      isTraining: true, bossId: "q_gon_03", visual_color: "#2ecc8a", visual_symbol: `tg`, points: 0,
      question: `Kolik řešení má rovnice \\(\\operatorname{tg} x = k\\) (\\(k \\in \\mathbb{R}\\) libovolné) v intervalu \\((0°;\\, 360°)\\)?`,
      formula: `$$\\text{tg}x = k,\\quad k \\in \\mathbb{R}$$`,
      instruction: `Vyberte správný počet.`,
      steps: [
        {
          trigger: `> Krok 1: Perioda tangensu`,
          content: `Funkce \\(\\tan x\\) má periodu <b>\\(180°\\)</b> (na rozdíl od \\(\\sin\\) a \\(\\cos\\), které mají periodu \\(360°\\)).`
        },
        {
          trigger: `> Krok 2: Počet period v intervalu`,
          content: `V intervalu \\((0°;\\, 360°)\\) se vejdou <b>dvě periody</b> tangensu → každá hodnota \\(k\\) je dosažena právě dvakrát.`
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
      id: "q_gon_04", regionId: "goniometrie", type: "closed", monsterName: `FW-10D: Nejmenší kladné x`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 2, trainingTasks: ["t_gon_04"],
      question: `Určete nejmenší kladné číslo \\(x\\), pro které platí:`,
      formula: `$$\\text{sin}\\left( x - \\frac{\\pi}{6} \\right) = 1$$`,
      instruction: `Vyberte správný výsledek.`,
      choices: [
        {
          label: `\\(\\frac{\\pi}{3}\\)`,
          value: "A",
          feedback: `Chyba znaménka. \\(x = \\tfrac{\\pi}{2} - \\tfrac{\\pi}{6} = \\tfrac{\\pi}{3}\\) — fázový posun byl odečten místo přičten.`
        },
        {
          label: `\\(\\frac{\\pi}{2}\\)`,
          value: "B",
          feedback: `Chyba. Fázový posun byl ignorován — rovnice \\(\\sin(x) = 1\\) dává \\(x = \\tfrac{\\pi}{2}\\), ale posun \\(-\\tfrac{\\pi}{6}\\) výsledek mění.`
        },
        {
          label: `\\(\\frac{7\\pi}{6}\\)`,
          value: "C",
          feedback: `Kritická chyba. Záměna: \\(\\sin = 1\\) nastává pro \\(\\tfrac{\\pi}{2}\\), ne pro \\(\\pi\\). Správně: \\(x = \\tfrac{\\pi}{2} + \\tfrac{\\pi}{6} = \\tfrac{2\\pi}{3}\\).`
        },
        {
          label: `\\(\\frac{2\\pi}{3}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(\\sin(\\alpha) = 1 \\Rightarrow \\alpha = \\tfrac{\\pi}{2}\\), tedy \\(x - \\tfrac{\\pi}{6} = \\tfrac{\\pi}{2} \\Rightarrow x = \\tfrac{2\\pi}{3}\\). ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 10 }
    },
    {
      id: "t_gon_04", regionId: "goniometrie", type: "closed", monsterName: `SIM: Kdy nastává sin = 1`,
      isTraining: true, bossId: "q_gon_04", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `Pro která \\(\\alpha\\) (obecně) platí \\(\\sin \\alpha = 1\\)?`,
      formula: `$$\\text{sin}\\alpha = 1$$`,
      instruction: `Vyberte správné obecné řešení.`,
      steps: [
        {
          trigger: `> Krok 1: Maximum sinu na kružnici`,
          content: `Na jednotkové kružnici je \\(\\sin \\alpha\\) souřadnice \\(y\\). Maximum \\(\\sin = 1\\) nastane v <b>nejvyšším bodě kružnice</b>.`
        },
        {
          trigger: `> Krok 2: Úhel nejvyššího bodu`,
          content: `Nejvyšší bod \\((0, 1)\\) odpovídá úhlu <b>\\(\\tfrac{\\pi}{2}\\)</b>. S periodou \\(2\\pi\\): \\(\\alpha = \\tfrac{\\pi}{2} + 2k\\pi,\\; k \\in \\mathbb{Z}\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\alpha = 2k\\pi;\\mspace{6mu} k \\in \\mathbb{Z}\\)`,
          value: "A",
          feedback: `Chyba. Pro \\(\\alpha = 0\\) je \\(\\sin 0 = 0\\), ne \\(1\\).`
        },
        {
          label: `\\(\\alpha = \\pi + 2k\\pi;\\mspace{6mu} k \\in \\mathbb{Z}\\)`,
          value: "B",
          feedback: `Chyba. \\(\\sin \\pi = 0\\), ne \\(1\\).`
        },
        {
          label: `\\(\\alpha = \\frac{\\pi}{2} + 2k\\pi;\\mspace{6mu} k \\in \\mathbb{Z}\\)`,
          value: "C",
          feedback: `Přístup povolen. \\(\\sin(\\tfrac{\\pi}{2}) = 1\\). ✓`
        },
        {
          label: `\\(\\alpha = \\frac{3\\pi}{2} + 2k\\pi;\\mspace{6mu} k \\in \\mathbb{Z}\\)`,
          value: "D",
          feedback: `Chyba. \\(\\sin(\\tfrac{3\\pi}{2}) = -1\\), ne \\(+1\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_gon_05", regionId: "goniometrie", type: "closed", monsterName: `FW-10E: Identita dvojného úhlu`,
      visual_color: "#e040fb", visual_symbol: `cos`, points: 3, trainingTasks: ["t_gon_05"],
      question: `Zjednodušte výraz pro \\(x \\in \\mathbb{R}\\):`,
      formula: `$$\\frac{1 - \\text{cos}2x}{2}$$`,
      instruction: `Vyberte ekvivalentní výraz.`,
      choices: [
        {
          label: `\\(\\text{cos}^{2}x\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Záměna: \\(1 + \\cos 2x = 2\\cos^2 x\\). Se znaménkem mínus to dává \\(\\sin^2 x\\), ne \\(\\cos^2 x\\).`
        },
        {
          label: `\\(\\text{sin}^{2}x\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\cos 2x = 1 - 2\\sin^2 x\\) → \\(\\tfrac{1 - \\cos 2x}{2} = \\sin^2 x\\). ✓`
        },
        {
          label: `\\(2\\text{sin}^{2}x\\)`,
          value: "C",
          feedback: `Chyba. Výsledek je \\(\\sin^2 x\\) — dělení jmenovatelem \\(2\\) bylo opomenuto.`
        },
        {
          label: `\\(\\text{sin}x\\)`,
          value: "D",
          feedback: `Kritická chyba. Mocnina je nezbytná — výsledkem je \\(\\sin^2 x\\), nikoli \\(\\sin x\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_gon_05", regionId: "goniometrie", type: "closed", monsterName: `SIM: Vzorec cos 2x přes sin`,
      isTraining: true, bossId: "q_gon_05", visual_color: "#2ecc8a", visual_symbol: `cos`, points: 0,
      question: `Který vzorec pro \\(\\cos 2x\\) vyjádřený pomocí \\(\\sin x\\) je správný?`,
      formula: `$$\\text{cos}2x = ?$$`,
      instruction: `Vyberte správný vzorec.`,
      steps: [
        {
          trigger: `> Krok 1: Základní tvar`,
          content: `Výchozí vzorec pro dvojný úhel: \\(\\cos 2x = \\cos^2 x - \\sin^2 x\\).`
        },
        {
          trigger: `> Krok 2: Eliminace cos²x`,
          content: `Z Pythagorovy identity: \\(\\cos^2 x = 1 - \\sin^2 x\\). Dosadíme: \\(\\cos 2x = (1 - \\sin^2 x) - \\sin^2 x = \\mathbf{1 - 2\\sin^2 x}\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\text{cos}2x = 2\\text{sin}x\\)`,
          value: "A",
          feedback: `Chyba. Chybí mocnina i konstanta: \\(2\\sin x \\neq \\cos 2x\\).`
        },
        {
          label: `\\(\\text{cos}2x = 1 + 2\\text{sin}^{2}x\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Záměna znaménka — správně je \\(1 - 2\\sin^2 x\\), ne \\(1 + 2\\sin^2 x\\).`
        },
        {
          label: `\\(\\text{cos}2x = 2\\text{sin}^{2}x - 1\\)`,
          value: "C",
          feedback: `Chyba. \\(2\\sin^2 x - 1 = -(1 - 2\\sin^2 x) = -\\cos 2x\\), nikoli \\(\\cos 2x\\).`
        },
        {
          label: `\\(\\text{cos}2x = 1 - 2\\text{sin}^{2}x\\)`,
          value: "D",
          feedback: `Logika potvrzena. Přímé dosazení \\(\\cos^2 x = 1 - \\sin^2 x\\) dává \\(1 - 2\\sin^2 x\\). ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_gon_06", regionId: "goniometrie", type: "closed", monsterName: `FW-10F: Amplituda a posun z grafu`,
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
          feedback: `Chyba. Amplituda \\(a = 2\\) je správně, ale \\(b = 0\\) by znamenalo střed oscilace v \\(y = 0\\) — z grafu vidíš, že střed leží v \\(y = 1\\).`
        },
        {
          label: `\\(a = 3,\\mspace{6mu} b = 1\\)`,
          value: "C",
          feedback: `Chyba. \\(a = 3\\) je hodnota maxima, nikoli amplituda. Amplituda \\(= \\tfrac{\\max - \\min}{2} = \\tfrac{3-(-1)}{2} = 2\\).`
        },
        {
          label: `\\(a = 1,\\mspace{6mu} b = 2\\)`,
          value: "D",
          feedback: `Kritická chyba. Záměna \\(a\\) a \\(b\\) — amplituda (rozsah kmitu) je \\(2\\), vertikální posun je \\(1\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_gon_06", regionId: "goniometrie", type: "closed", monsterName: `SIM: Amplituda z grafu`,
      isTraining: true, bossId: "q_gon_06", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
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
          content: `\\(a = \\dfrac{5 - (-1)}{2} = \\dfrac{6}{2} = \\mathbf{3}\\). Střed oscilace: \\(b = \\dfrac{5 + (-1)}{2} = 2\\).`
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
      id: "q_gon_07", regionId: "goniometrie", type: "closed", monsterName: `FW-10G: Identifikace funkce z grafu`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 3, trainingTasks: ["t_gon_07"],
      question: `Na obrázku je znázorněn graf funkce \\(f\\) pro \\(x \\in (0;\\, 2\\pi)\\). Určete předpis funkce \\(f\\).`,
      diagram: `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="90.1" y1="18" x2="90.1" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="128.2" y1="18" x2="128.2" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="18" x2="204.5" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="18" x2="280.8" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="18" x2="357.0" y2="212" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="27.0" x2="357" y2="27.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="71.0" x2="357" y2="71.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="159.0" x2="357" y2="159.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="203.0" x2="357" y2="203.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="115" x2="369" y2="115" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,111 376,115 369,119" fill="#e2e8f0"/><text x="379" y="119" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="217" x2="52" y2="10" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,10 52,3 56,10" fill="#e2e8f0"/><text x="52" y="1" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="90.1" y1="112" x2="90.1" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="90.1" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">π/4</text><line x1="128.2" y1="112" x2="128.2" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">π/2</text><line x1="204.5" y1="112" x2="204.5" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="280.8" y1="112" x2="280.8" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">3π/2</text><line x1="357.0" y1="112" x2="357.0" y2="118" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="131" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="49" y1="27.0" x2="55" y2="27.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="31.0" font-size="9" fill="#e2e8f0" text-anchor="end">2</text><line x1="49" y1="71.0" x2="55" y2="71.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="75.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="159.0" x2="55" y2="159.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="163.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><line x1="49" y1="203.0" x2="55" y2="203.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="207.0" font-size="9" fill="#e2e8f0" text-anchor="end">-2</text><polyline points="52.0,115.0 52.8,112.2 53.5,109.5 54.3,106.7 55.0,104.0 55.8,101.2 56.6,98.5 57.3,95.8 58.1,93.1 58.9,90.4 59.6,87.8 60.4,85.2 61.1,82.6 61.9,80.1 62.7,77.5 63.4,75.0 64.2,72.6 65.0,70.2 65.7,67.8 66.5,65.5 67.2,63.3 68.0,61.1 68.8,58.9 69.5,56.8 70.3,54.8 71.1,52.8 71.8,50.9 72.6,49.0 73.3,47.2 74.1,45.5 74.9,43.8 75.6,42.2 76.4,40.7 77.2,39.3 77.9,37.9 78.7,36.6 79.5,35.4 80.2,34.2 81.0,33.2 81.7,32.2 82.5,31.3 83.3,30.5 84.0,29.8 84.8,29.1 85.5,28.6 86.3,28.1 87.1,27.7 87.8,27.4 88.6,27.2 89.4,27.0 90.1,27.0 90.9,27.0 91.7,27.2 92.4,27.4 93.2,27.7 93.9,28.1 94.7,28.6 95.5,29.1 96.2,29.8 97.0,30.5 97.8,31.3 98.5,32.2 99.3,33.2 100.0,34.2 100.8,35.4 101.6,36.6 102.3,37.9 103.1,39.3 103.9,40.7 104.6,42.2 105.4,43.8 106.1,45.5 106.9,47.2 107.7,49.0 108.4,50.9 109.2,52.8 109.9,54.8 110.7,56.8 111.5,58.9 112.2,61.1 113.0,63.3 113.8,65.5 114.5,67.8 115.3,70.2 116.1,72.6 116.8,75.0 117.6,77.5 118.3,80.1 119.1,82.6 119.9,85.2 120.6,87.8 121.4,90.4 122.1,93.1 122.9,95.8 123.7,98.5 124.4,101.2 125.2,104.0 126.0,106.7 126.7,109.5 127.5,112.2 128.2,115.0 129.0,117.8 129.8,120.5 130.5,123.3 131.3,126.0 132.1,128.8 132.8,131.5 133.6,134.2 134.3,136.9 135.1,139.6 135.9,142.2 136.6,144.8 137.4,147.4 138.2,149.9 138.9,152.5 139.7,155.0 140.4,157.4 141.2,159.8 142.0,162.2 142.7,164.5 143.5,166.7 144.3,168.9 145.0,171.1 145.8,173.2 146.6,175.2 147.3,177.2 148.1,179.1 148.8,181.0 149.6,182.8 150.4,184.5 151.1,186.2 151.9,187.8 152.7,189.3 153.4,190.7 154.2,192.1 154.9,193.4 155.7,194.6 156.5,195.8 157.2,196.8 158.0,197.8 158.8,198.7 159.5,199.5 160.3,200.2 161.0,200.9 161.8,201.4 162.6,201.9 163.3,202.3 164.1,202.6 164.9,202.8 165.6,203.0 166.4,203.0 167.1,203.0 167.9,202.8 168.7,202.6 169.4,202.3 170.2,201.9 170.9,201.4 171.7,200.9 172.5,200.2 173.2,199.5 174.0,198.7 174.8,197.8 175.5,196.8 176.3,195.8 177.0,194.6 177.8,193.4 178.6,192.1 179.3,190.7 180.1,189.3 180.9,187.8 181.6,186.2 182.4,184.5 183.2,182.8 183.9,181.0 184.7,179.1 185.4,177.2 186.2,175.2 187.0,173.2 187.7,171.1 188.5,168.9 189.2,166.7 190.0,164.5 190.8,162.2 191.5,159.8 192.3,157.4 193.1,155.0 193.8,152.5 194.6,149.9 195.4,147.4 196.1,144.8 196.9,142.2 197.6,139.6 198.4,136.9 199.2,134.2 199.9,131.5 200.7,128.8 201.4,126.0 202.2,123.3 203.0,120.5 203.7,117.8 204.5,115.0 205.3,112.2 206.0,109.5 206.8,106.7 207.6,104.0 208.3,101.2 209.1,98.5 209.8,95.8 210.6,93.1 211.4,90.4 212.1,87.8 212.9,85.2 213.7,82.6 214.4,80.1 215.2,77.5 215.9,75.0 216.7,72.6 217.5,70.2 218.2,67.8 219.0,65.5 219.8,63.3 220.5,61.1 221.3,58.9 222.0,56.8 222.8,54.8 223.6,52.8 224.3,50.9 225.1,49.0 225.8,47.2 226.6,45.5 227.4,43.8 228.1,42.2 228.9,40.7 229.7,39.3 230.4,37.9 231.2,36.6 231.9,35.4 232.7,34.2 233.5,33.2 234.2,32.2 235.0,31.3 235.8,30.5 236.5,29.8 237.3,29.1 238.1,28.6 238.8,28.1 239.6,27.7 240.3,27.4 241.1,27.2 241.9,27.0 242.6,27.0 243.4,27.0 244.2,27.2 244.9,27.4 245.7,27.7 246.4,28.1 247.2,28.6 248.0,29.1 248.7,29.8 249.5,30.5 250.2,31.3 251.0,32.2 251.8,33.2 252.5,34.2 253.3,35.4 254.1,36.6 254.8,37.9 255.6,39.3 256.4,40.7 257.1,42.2 257.9,43.8 258.6,45.5 259.4,47.2 260.2,49.0 260.9,50.9 261.7,52.8 262.5,54.8 263.2,56.8 264.0,58.9 264.7,61.1 265.5,63.3 266.3,65.5 267.0,67.8 267.8,70.2 268.6,72.6 269.3,75.0 270.1,77.5 270.8,80.1 271.6,82.6 272.4,85.2 273.1,87.8 273.9,90.4 274.6,93.1 275.4,95.8 276.2,98.5 276.9,101.2 277.7,104.0 278.5,106.7 279.2,109.5 280.0,112.2 280.8,115.0 281.5,117.8 282.3,120.5 283.0,123.3 283.8,126.0 284.6,128.8 285.3,131.5 286.1,134.2 286.9,136.9 287.6,139.6 288.4,142.2 289.1,144.8 289.9,147.4 290.7,149.9 291.4,152.5 292.2,155.0 293.0,157.4 293.7,159.8 294.5,162.2 295.2,164.5 296.0,166.7 296.8,168.9 297.5,171.1 298.3,173.2 299.0,175.2 299.8,177.2 300.6,179.1 301.3,181.0 302.1,182.8 302.9,184.5 303.6,186.2 304.4,187.8 305.2,189.3 305.9,190.7 306.7,192.1 307.4,193.4 308.2,194.6 309.0,195.8 309.7,196.8 310.5,197.8 311.2,198.7 312.0,199.5 312.8,200.2 313.5,200.9 314.3,201.4 315.1,201.9 315.8,202.3 316.6,202.6 317.3,202.8 318.1,203.0 318.9,203.0 319.6,203.0 320.4,202.8 321.2,202.6 321.9,202.3 322.7,201.9 323.5,201.4 324.2,200.9 325.0,200.2 325.7,199.5 326.5,198.7 327.3,197.8 328.0,196.8 328.8,195.8 329.6,194.6 330.3,193.4 331.1,192.1 331.8,190.7 332.6,189.3 333.4,187.8 334.1,186.2 334.9,184.5 335.6,182.8 336.4,181.0 337.2,179.1 337.9,177.2 338.7,175.2 339.5,173.2 340.2,171.1 341.0,168.9 341.8,166.7 342.5,164.5 343.3,162.2 344.0,159.8 344.8,157.4 345.6,155.0 346.3,152.5 347.1,149.9 347.9,147.4 348.6,144.8 349.4,142.2 350.1,139.6 350.9,136.9 351.7,134.2 352.4,131.5 353.2,128.8 354.0,126.0 354.7,123.3 355.5,120.5 356.2,117.8 357.0,115.0" fill="none" stroke="#0077bb" stroke-width="2.5"/><circle cx="90.1" cy="27.0" r="3" fill="#cc4400" opacity="0.9"/><circle cx="242.6" cy="27.0" r="3" fill="#cc4400" opacity="0.9"/><text x="337" y="22" font-size="13" fill="#0077bb" font-style="italic" text-anchor="middle">f</text></svg>`,
      instruction: `Vyberte správný předpis funkce.`,
      choices: [
        {
          label: `\\(y = \\text{sin}(2x)\\)`,
          value: "A",
          feedback: `Chyba. Perioda \\(\\pi\\) je správná, ale amplituda grafu je \\(2\\), nikoli \\(1\\).`
        },
        {
          label: `\\(y = 2 \\cdot \\text{sin}x\\)`,
          value: "B",
          feedback: `Chyba. Amplituda \\(2\\) je správná, ale perioda je \\(2\\pi\\) — v grafu vidíš \\(2\\) celé kmity v \\((0;\\, 2\\pi)\\).`
        },
        {
          label: `\\(y = 2 \\cdot \\text{cos}(2x)\\)`,
          value: "C",
          feedback: `Chyba. Amplituda i perioda sedí, ale \\(\\cos\\) začíná v maximu (\\(y=2\\) pro \\(x=0\\)) — graf začíná v \\(0\\).`
        },
        {
          label: `\\(y = 2 \\cdot \\text{sin}(2x)\\)`,
          value: "D",
          feedback: `Přístup povolen. Amplituda \\(2\\) ✓, perioda \\(\\pi\\) ✓, začíná v \\(0\\) (sinus) ✓. ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_gon_07", regionId: "goniometrie", type: "closed", monsterName: `SIM: Perioda y = sin(2x)`,
      isTraining: true, bossId: "q_gon_07", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
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
          content: `\\(T = \\dfrac{2\\pi}{2} = \\mathbf{\\pi}\\). Graf se zdvojnásobí — kmitá \\(2\\times\\) rychleji než \\(\\sin x\\).`
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
      id: "q_gon_08", regionId: "goniometrie", type: "closed", monsterName: `FW-10H: Fázový posun z grafu`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 2, trainingTasks: ["t_gon_08"],
      question: `Tučná křivka odpovídá funkci \\(g\\colon y = \\sin(x + \\varphi)\\), \\(\\varphi > 0\\). Šedá přerušovaná je referenční \\(\\sin x\\). Určete nejmenší kladné \\(\\varphi\\).`,
      diagram: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="77.4" y1="25" x2="77.4" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="128.2" y1="25" x2="128.2" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="25" x2="204.5" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="25" x2="280.8" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="25" x2="357.0" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="37.0" x2="357" y2="37.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="177.0" x2="357" y2="177.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="107" x2="369" y2="107" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,103 376,107 369,111" fill="#e2e8f0"/><text x="379" y="111" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="197" x2="52" y2="17" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,17 52,10 56,17" fill="#e2e8f0"/><text x="52" y="8" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="77.4" y1="104" x2="77.4" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="77.4" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π/6</text><line x1="128.2" y1="104" x2="128.2" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π/2</text><line x1="204.5" y1="104" x2="204.5" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="280.8" y1="104" x2="280.8" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">3π/2</text><line x1="357.0" y1="104" x2="357.0" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="49" y1="37.0" x2="55" y2="37.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="41.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="177.0" x2="55" y2="177.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="181.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><polyline points="52.0,107.0 52.8,105.9 53.5,104.8 54.3,103.7 55.0,102.6 55.8,101.5 56.6,100.4 57.3,99.3 58.1,98.2 58.9,97.1 59.6,96.0 60.4,95.0 61.1,93.9 61.9,92.8 62.7,91.7 63.4,90.7 64.2,89.6 65.0,88.5 65.7,87.5 66.5,86.4 67.2,85.4 68.0,84.3 68.8,83.3 69.5,82.3 70.3,81.2 71.1,80.2 71.8,79.2 72.6,78.2 73.3,77.2 74.1,76.2 74.9,75.2 75.6,74.2 76.4,73.3 77.2,72.3 77.9,71.4 78.7,70.4 79.5,69.5 80.2,68.6 81.0,67.7 81.7,66.7 82.5,65.9 83.3,65.0 84.0,64.1 84.8,63.2 85.5,62.4 86.3,61.5 87.1,60.7 87.8,59.9 88.6,59.1 89.4,58.3 90.1,57.5 90.9,56.7 91.7,56.0 92.4,55.2 93.2,54.5 93.9,53.8 94.7,53.1 95.5,52.4 96.2,51.7 97.0,51.0 97.8,50.4 98.5,49.7 99.3,49.1 100.0,48.5 100.8,47.9 101.6,47.3 102.3,46.7 103.1,46.2 103.9,45.7 104.6,45.1 105.4,44.6 106.1,44.1 106.9,43.7 107.7,43.2 108.4,42.8 109.2,42.3 109.9,41.9 110.7,41.5 111.5,41.1 112.2,40.8 113.0,40.4 113.8,40.1 114.5,39.8 115.3,39.5 116.1,39.2 116.8,38.9 117.6,38.7 118.3,38.5 119.1,38.2 119.9,38.0 120.6,37.9 121.4,37.7 122.1,37.6 122.9,37.4 123.7,37.3 124.4,37.2 125.2,37.1 126.0,37.1 126.7,37.0 127.5,37.0 128.2,37.0 129.0,37.0 129.8,37.0 130.5,37.1 131.3,37.1 132.1,37.2 132.8,37.3 133.6,37.4 134.3,37.6 135.1,37.7 135.9,37.9 136.6,38.0 137.4,38.2 138.2,38.5 138.9,38.7 139.7,38.9 140.4,39.2 141.2,39.5 142.0,39.8 142.7,40.1 143.5,40.4 144.3,40.8 145.0,41.1 145.8,41.5 146.6,41.9 147.3,42.3 148.1,42.8 148.8,43.2 149.6,43.7 150.4,44.1 151.1,44.6 151.9,45.1 152.7,45.7 153.4,46.2 154.2,46.7 154.9,47.3 155.7,47.9 156.5,48.5 157.2,49.1 158.0,49.7 158.8,50.4 159.5,51.0 160.3,51.7 161.0,52.4 161.8,53.1 162.6,53.8 163.3,54.5 164.1,55.2 164.9,56.0 165.6,56.7 166.4,57.5 167.1,58.3 167.9,59.1 168.7,59.9 169.4,60.7 170.2,61.5 170.9,62.4 171.7,63.2 172.5,64.1 173.2,65.0 174.0,65.9 174.8,66.7 175.5,67.7 176.3,68.6 177.0,69.5 177.8,70.4 178.6,71.4 179.3,72.3 180.1,73.3 180.9,74.2 181.6,75.2 182.4,76.2 183.2,77.2 183.9,78.2 184.7,79.2 185.4,80.2 186.2,81.2 187.0,82.3 187.7,83.3 188.5,84.3 189.2,85.4 190.0,86.4 190.8,87.5 191.5,88.5 192.3,89.6 193.1,90.7 193.8,91.7 194.6,92.8 195.4,93.9 196.1,95.0 196.9,96.0 197.6,97.1 198.4,98.2 199.2,99.3 199.9,100.4 200.7,101.5 201.4,102.6 202.2,103.7 203.0,104.8 203.7,105.9 204.5,107.0 205.3,108.1 206.0,109.2 206.8,110.3 207.6,111.4 208.3,112.5 209.1,113.6 209.8,114.7 210.6,115.8 211.4,116.9 212.1,118.0 212.9,119.0 213.7,120.1 214.4,121.2 215.2,122.3 215.9,123.3 216.7,124.4 217.5,125.5 218.2,126.5 219.0,127.6 219.8,128.6 220.5,129.7 221.3,130.7 222.0,131.7 222.8,132.8 223.6,133.8 224.3,134.8 225.1,135.8 225.8,136.8 226.6,137.8 227.4,138.8 228.1,139.8 228.9,140.7 229.7,141.7 230.4,142.6 231.2,143.6 231.9,144.5 232.7,145.4 233.5,146.3 234.2,147.3 235.0,148.1 235.8,149.0 236.5,149.9 237.3,150.8 238.1,151.6 238.8,152.5 239.6,153.3 240.3,154.1 241.1,154.9 241.9,155.7 242.6,156.5 243.4,157.3 244.2,158.0 244.9,158.8 245.7,159.5 246.4,160.2 247.2,160.9 248.0,161.6 248.7,162.3 249.5,163.0 250.2,163.6 251.0,164.3 251.8,164.9 252.5,165.5 253.3,166.1 254.1,166.7 254.8,167.3 255.6,167.8 256.4,168.3 257.1,168.9 257.9,169.4 258.6,169.9 259.4,170.3 260.2,170.8 260.9,171.2 261.7,171.7 262.5,172.1 263.2,172.5 264.0,172.9 264.7,173.2 265.5,173.6 266.3,173.9 267.0,174.2 267.8,174.5 268.6,174.8 269.3,175.1 270.1,175.3 270.8,175.5 271.6,175.8 272.4,176.0 273.1,176.1 273.9,176.3 274.6,176.4 275.4,176.6 276.2,176.7 276.9,176.8 277.7,176.9 278.5,176.9 279.2,177.0 280.0,177.0 280.8,177.0 281.5,177.0 282.3,177.0 283.0,176.9 283.8,176.9 284.6,176.8 285.3,176.7 286.1,176.6 286.9,176.4 287.6,176.3 288.4,176.1 289.1,176.0 289.9,175.8 290.7,175.5 291.4,175.3 292.2,175.1 293.0,174.8 293.7,174.5 294.5,174.2 295.2,173.9 296.0,173.6 296.8,173.2 297.5,172.9 298.3,172.5 299.0,172.1 299.8,171.7 300.6,171.2 301.3,170.8 302.1,170.3 302.9,169.9 303.6,169.4 304.4,168.9 305.2,168.3 305.9,167.8 306.7,167.3 307.4,166.7 308.2,166.1 309.0,165.5 309.7,164.9 310.5,164.3 311.2,163.6 312.0,163.0 312.8,162.3 313.5,161.6 314.3,160.9 315.1,160.2 315.8,159.5 316.6,158.8 317.3,158.0 318.1,157.3 318.9,156.5 319.6,155.7 320.4,154.9 321.2,154.1 321.9,153.3 322.7,152.5 323.5,151.6 324.2,150.8 325.0,149.9 325.7,149.0 326.5,148.1 327.3,147.3 328.0,146.3 328.8,145.4 329.6,144.5 330.3,143.6 331.1,142.6 331.8,141.7 332.6,140.7 333.4,139.8 334.1,138.8 334.9,137.8 335.6,136.8 336.4,135.8 337.2,134.8 337.9,133.8 338.7,132.8 339.5,131.7 340.2,130.7 341.0,129.7 341.8,128.6 342.5,127.6 343.3,126.5 344.0,125.5 344.8,124.4 345.6,123.3 346.3,122.3 347.1,121.2 347.9,120.1 348.6,119.0 349.4,118.0 350.1,116.9 350.9,115.8 351.7,114.7 352.4,113.6 353.2,112.5 354.0,111.4 354.7,110.3 355.5,109.2 356.2,108.1 357.0,107.0" fill="none" stroke="#4a5568" stroke-width="1.5" stroke-dasharray="7,5" opacity="0.6"/><text x="265.5" y="189.6" font-size="10" fill="#4a5568" opacity="0.7" font-style="italic">sin x</text><polyline points="52.0,46.4 52.8,45.8 53.5,45.3 54.3,44.8 55.0,44.3 55.8,43.8 56.6,43.4 57.3,42.9 58.1,42.5 58.9,42.1 59.6,41.6 60.4,41.3 61.1,40.9 61.9,40.5 62.7,40.2 63.4,39.9 64.2,39.6 65.0,39.3 65.7,39.0 66.5,38.8 67.2,38.5 68.0,38.3 68.8,38.1 69.5,37.9 70.3,37.8 71.1,37.6 71.8,37.5 72.6,37.3 73.3,37.2 74.1,37.2 74.9,37.1 75.6,37.0 76.4,37.0 77.2,37.0 77.9,37.0 78.7,37.0 79.5,37.1 80.2,37.1 81.0,37.2 81.7,37.3 82.5,37.4 83.3,37.5 84.0,37.6 84.8,37.8 85.5,38.0 86.3,38.2 87.1,38.4 87.8,38.6 88.6,38.8 89.4,39.1 90.1,39.4 90.9,39.7 91.7,40.0 92.4,40.3 93.2,40.7 93.9,41.0 94.7,41.4 95.5,41.8 96.2,42.2 97.0,42.6 97.8,43.1 98.5,43.5 99.3,44.0 100.0,44.5 100.8,45.0 101.6,45.5 102.3,46.0 103.1,46.6 103.9,47.1 104.6,47.7 105.4,48.3 106.1,48.9 106.9,49.5 107.7,50.2 108.4,50.8 109.2,51.5 109.9,52.1 110.7,52.8 111.5,53.5 112.2,54.3 113.0,55.0 113.8,55.7 114.5,56.5 115.3,57.2 116.1,58.0 116.8,58.8 117.6,59.6 118.3,60.4 119.1,61.3 119.9,62.1 120.6,62.9 121.4,63.8 122.1,64.7 122.9,65.6 123.7,66.5 124.4,67.4 125.2,68.3 126.0,69.2 126.7,70.1 127.5,71.1 128.2,72.0 129.0,73.0 129.8,73.9 130.5,74.9 131.3,75.9 132.1,76.9 132.8,77.9 133.6,78.9 134.3,79.9 135.1,80.9 135.9,81.9 136.6,82.9 137.4,84.0 138.2,85.0 138.9,86.1 139.7,87.1 140.4,88.2 141.2,89.2 142.0,90.3 142.7,91.4 143.5,92.4 144.3,93.5 145.0,94.6 145.8,95.7 146.6,96.8 147.3,97.9 148.1,99.0 148.8,100.0 149.6,101.1 150.4,102.2 151.1,103.3 151.9,104.4 152.7,105.5 153.4,106.6 154.2,107.7 154.9,108.8 155.7,109.9 156.5,111.0 157.2,112.1 158.0,113.2 158.8,114.3 159.5,115.4 160.3,116.5 161.0,117.6 161.8,118.7 162.6,119.8 163.3,120.8 164.1,121.9 164.9,123.0 165.6,124.1 166.4,125.1 167.1,126.2 167.9,127.2 168.7,128.3 169.4,129.3 170.2,130.4 170.9,131.4 171.7,132.4 172.5,133.4 173.2,134.5 174.0,135.5 174.8,136.5 175.5,137.5 176.3,138.5 177.0,139.4 177.8,140.4 178.6,141.4 179.3,142.3 180.1,143.3 180.9,144.2 181.6,145.1 182.4,146.0 183.2,146.9 183.9,147.8 184.7,148.7 185.4,149.6 186.2,150.5 187.0,151.3 187.7,152.2 188.5,153.0 189.2,153.8 190.0,154.7 190.8,155.5 191.5,156.2 192.3,157.0 193.1,157.8 193.8,158.5 194.6,159.3 195.4,160.0 196.1,160.7 196.9,161.4 197.6,162.1 198.4,162.8 199.2,163.4 199.9,164.1 200.7,164.7 201.4,165.3 202.2,165.9 203.0,166.5 203.7,167.1 204.5,167.6 205.3,168.2 206.0,168.7 206.8,169.2 207.6,169.7 208.3,170.2 209.1,170.6 209.8,171.1 210.6,171.5 211.4,171.9 212.1,172.4 212.9,172.7 213.7,173.1 214.4,173.5 215.2,173.8 215.9,174.1 216.7,174.4 217.5,174.7 218.2,175.0 219.0,175.2 219.8,175.5 220.5,175.7 221.3,175.9 222.0,176.1 222.8,176.2 223.6,176.4 224.3,176.5 225.1,176.7 225.8,176.8 226.6,176.8 227.4,176.9 228.1,177.0 228.9,177.0 229.7,177.0 230.4,177.0 231.2,177.0 231.9,176.9 232.7,176.9 233.5,176.8 234.2,176.7 235.0,176.6 235.8,176.5 236.5,176.4 237.3,176.2 238.1,176.0 238.8,175.8 239.6,175.6 240.3,175.4 241.1,175.2 241.9,174.9 242.6,174.6 243.4,174.3 244.2,174.0 244.9,173.7 245.7,173.3 246.4,173.0 247.2,172.6 248.0,172.2 248.7,171.8 249.5,171.4 250.2,170.9 251.0,170.5 251.8,170.0 252.5,169.5 253.3,169.0 254.1,168.5 254.8,168.0 255.6,167.4 256.4,166.9 257.1,166.3 257.9,165.7 258.6,165.1 259.4,164.5 260.2,163.8 260.9,163.2 261.7,162.5 262.5,161.9 263.2,161.2 264.0,160.5 264.7,159.7 265.5,159.0 266.3,158.3 267.0,157.5 267.8,156.8 268.6,156.0 269.3,155.2 270.1,154.4 270.8,153.6 271.6,152.7 272.4,151.9 273.1,151.1 273.9,150.2 274.6,149.3 275.4,148.4 276.2,147.5 276.9,146.6 277.7,145.7 278.5,144.8 279.2,143.9 280.0,142.9 280.8,142.0 281.5,141.0 282.3,140.1 283.0,139.1 283.8,138.1 284.6,137.1 285.3,136.1 286.1,135.1 286.9,134.1 287.6,133.1 288.4,132.1 289.1,131.1 289.9,130.0 290.7,129.0 291.4,127.9 292.2,126.9 293.0,125.8 293.7,124.8 294.5,123.7 295.2,122.6 296.0,121.6 296.8,120.5 297.5,119.4 298.3,118.3 299.0,117.2 299.8,116.1 300.6,115.0 301.3,114.0 302.1,112.9 302.9,111.8 303.6,110.7 304.4,109.6 305.2,108.5 305.9,107.4 306.7,106.3 307.4,105.2 308.2,104.1 309.0,103.0 309.7,101.9 310.5,100.8 311.2,99.7 312.0,98.6 312.8,97.5 313.5,96.4 314.3,95.3 315.1,94.2 315.8,93.2 316.6,92.1 317.3,91.0 318.1,89.9 318.9,88.9 319.6,87.8 320.4,86.8 321.2,85.7 321.9,84.7 322.7,83.6 323.5,82.6 324.2,81.6 325.0,80.6 325.7,79.5 326.5,78.5 327.3,77.5 328.0,76.5 328.8,75.5 329.6,74.6 330.3,73.6 331.1,72.6 331.8,71.7 332.6,70.7 333.4,69.8 334.1,68.9 334.9,68.0 335.6,67.1 336.4,66.2 337.2,65.3 337.9,64.4 338.7,63.5 339.5,62.7 340.2,61.8 341.0,61.0 341.8,60.2 342.5,59.3 343.3,58.5 344.0,57.8 344.8,57.0 345.6,56.2 346.3,55.5 347.1,54.7 347.9,54.0 348.6,53.3 349.4,52.6 350.1,51.9 350.9,51.2 351.7,50.6 352.4,49.9 353.2,49.3 354.0,48.7 354.7,48.1 355.5,47.5 356.2,46.9 357.0,46.4" fill="none" stroke="#0077bb" stroke-width="2.5"/><line x1="77.4" y1="107" x2="77.4" y2="37" stroke="#cc4400" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85"/><circle cx="77.4" cy="37.0" r="4" fill="#cc4400"/><text x="70.3" y="23.8" font-size="13" fill="#0077bb" font-style="italic">g</text></svg>`,
      instruction: `Vyberte správnou hodnotu φ.`,
      choices: [
        {
          label: `\\(\\frac{\\pi}{6}\\)`,
          value: "A",
          feedback: `Chyba. \\(\\tfrac{\\pi}{6}\\) je poloha maxima na ose \\(x\\) — to není \\(\\varphi\\). Správně: \\(\\varphi = \\tfrac{\\pi}{2} - \\tfrac{\\pi}{6} = \\tfrac{\\pi}{3}\\).`
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
          feedback: `Chyba. \\(\\varphi = \\tfrac{\\pi}{2} + \\tfrac{\\pi}{6}\\) místo \\(\\tfrac{\\pi}{2} - \\tfrac{\\pi}{6}\\) — přičetl(a) jsi polohu maxima místo odečetl(a).`
        },
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_gon_08", regionId: "goniometrie", type: "closed", monsterName: `SIM: Směr fázového posunu`,
      isTraining: true, bossId: "q_gon_08", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `Funkce \\(y = \\sin\\!\\left(x + \\tfrac{\\pi}{3}\\right)\\) je oproti \\(y = \\sin x\\) posunuta:`,
      formula: `$$y = \\text{sin}\\left( x + \\frac{\\pi}{3} \\right)$$`,
      instruction: `Vyberte správný popis posunu.`,
      steps: [
        {
          trigger: `> Krok 1: Pravidlo posunu`,
          content: `\\(y = \\sin(x + \\varphi)\\): kladné \\(\\varphi\\) uvnitř argumentu posouvá graf <b>doleva</b> o \\(\\varphi\\). (Paradox: \\(+\\) v argumentu = pohyb grafu doleva.)`
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
      id: "q_gon_09", regionId: "goniometrie", type: "closed", monsterName: `FW-10I: Perioda z grafu`,
      visual_color: "#e040fb", visual_symbol: `cos`, points: 2, trainingTasks: ["t_gon_09"],
      question: `Na obrázku je znázorněn graf funkce \\(h\\colon y = \\cos(kx)\\) pro \\(k > 0\\). Odečtěte periodu z grafu.`,
      diagram: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="128.2" y1="25" x2="128.2" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="25" x2="204.5" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="25" x2="280.8" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="25" x2="357.0" y2="192" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="37.0" x2="357" y2="37.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="177.0" x2="357" y2="177.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="107" x2="369" y2="107" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,103 376,107 369,111" fill="#e2e8f0"/><text x="379" y="111" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="197" x2="52" y2="17" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,17 52,10 56,17" fill="#e2e8f0"/><text x="52" y="8" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="128.2" y1="104" x2="128.2" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="204.5" y1="104" x2="204.5" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="280.8" y1="104" x2="280.8" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">3π</text><line x1="357.0" y1="104" x2="357.0" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="123" font-size="9" fill="#e2e8f0" text-anchor="middle">4π</text><line x1="49" y1="37.0" x2="55" y2="37.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="41.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="177.0" x2="55" y2="177.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="181.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><polyline points="52.0,37.0 52.8,37.0 53.5,37.0 54.3,37.1 55.0,37.1 55.8,37.2 56.6,37.3 57.3,37.4 58.1,37.6 58.9,37.7 59.6,37.9 60.4,38.0 61.1,38.2 61.9,38.5 62.7,38.7 63.4,38.9 64.2,39.2 65.0,39.5 65.7,39.8 66.5,40.1 67.2,40.4 68.0,40.8 68.8,41.1 69.5,41.5 70.3,41.9 71.1,42.3 71.8,42.8 72.6,43.2 73.3,43.7 74.1,44.1 74.9,44.6 75.6,45.1 76.4,45.7 77.2,46.2 77.9,46.7 78.7,47.3 79.5,47.9 80.2,48.5 81.0,49.1 81.7,49.7 82.5,50.4 83.3,51.0 84.0,51.7 84.8,52.4 85.5,53.1 86.3,53.8 87.1,54.5 87.8,55.2 88.6,56.0 89.4,56.7 90.1,57.5 90.9,58.3 91.7,59.1 92.4,59.9 93.2,60.7 93.9,61.5 94.7,62.4 95.5,63.2 96.2,64.1 97.0,65.0 97.8,65.9 98.5,66.7 99.3,67.7 100.0,68.6 100.8,69.5 101.6,70.4 102.3,71.4 103.1,72.3 103.9,73.3 104.6,74.2 105.4,75.2 106.1,76.2 106.9,77.2 107.7,78.2 108.4,79.2 109.2,80.2 109.9,81.2 110.7,82.3 111.5,83.3 112.2,84.3 113.0,85.4 113.8,86.4 114.5,87.5 115.3,88.5 116.1,89.6 116.8,90.7 117.6,91.7 118.3,92.8 119.1,93.9 119.9,95.0 120.6,96.0 121.4,97.1 122.1,98.2 122.9,99.3 123.7,100.4 124.4,101.5 125.2,102.6 126.0,103.7 126.7,104.8 127.5,105.9 128.2,107.0 129.0,108.1 129.8,109.2 130.5,110.3 131.3,111.4 132.1,112.5 132.8,113.6 133.6,114.7 134.3,115.8 135.1,116.9 135.9,118.0 136.6,119.0 137.4,120.1 138.2,121.2 138.9,122.3 139.7,123.3 140.4,124.4 141.2,125.5 142.0,126.5 142.7,127.6 143.5,128.6 144.3,129.7 145.0,130.7 145.8,131.7 146.6,132.8 147.3,133.8 148.1,134.8 148.8,135.8 149.6,136.8 150.4,137.8 151.1,138.8 151.9,139.8 152.7,140.7 153.4,141.7 154.2,142.6 154.9,143.6 155.7,144.5 156.5,145.4 157.2,146.3 158.0,147.3 158.8,148.1 159.5,149.0 160.3,149.9 161.0,150.8 161.8,151.6 162.6,152.5 163.3,153.3 164.1,154.1 164.9,154.9 165.6,155.7 166.4,156.5 167.1,157.3 167.9,158.0 168.7,158.8 169.4,159.5 170.2,160.2 170.9,160.9 171.7,161.6 172.5,162.3 173.2,163.0 174.0,163.6 174.8,164.3 175.5,164.9 176.3,165.5 177.0,166.1 177.8,166.7 178.6,167.3 179.3,167.8 180.1,168.3 180.9,168.9 181.6,169.4 182.4,169.9 183.2,170.3 183.9,170.8 184.7,171.2 185.4,171.7 186.2,172.1 187.0,172.5 187.7,172.9 188.5,173.2 189.2,173.6 190.0,173.9 190.8,174.2 191.5,174.5 192.3,174.8 193.1,175.1 193.8,175.3 194.6,175.5 195.4,175.8 196.1,176.0 196.9,176.1 197.6,176.3 198.4,176.4 199.2,176.6 199.9,176.7 200.7,176.8 201.4,176.9 202.2,176.9 203.0,177.0 203.7,177.0 204.5,177.0 205.3,177.0 206.0,177.0 206.8,176.9 207.6,176.9 208.3,176.8 209.1,176.7 209.8,176.6 210.6,176.4 211.4,176.3 212.1,176.1 212.9,176.0 213.7,175.8 214.4,175.5 215.2,175.3 215.9,175.1 216.7,174.8 217.5,174.5 218.2,174.2 219.0,173.9 219.8,173.6 220.5,173.2 221.3,172.9 222.0,172.5 222.8,172.1 223.6,171.7 224.3,171.2 225.1,170.8 225.8,170.3 226.6,169.9 227.4,169.4 228.1,168.9 228.9,168.3 229.7,167.8 230.4,167.3 231.2,166.7 231.9,166.1 232.7,165.5 233.5,164.9 234.2,164.3 235.0,163.6 235.8,163.0 236.5,162.3 237.3,161.6 238.1,160.9 238.8,160.2 239.6,159.5 240.3,158.8 241.1,158.0 241.9,157.3 242.6,156.5 243.4,155.7 244.2,154.9 244.9,154.1 245.7,153.3 246.4,152.5 247.2,151.6 248.0,150.8 248.7,149.9 249.5,149.0 250.2,148.1 251.0,147.3 251.8,146.3 252.5,145.4 253.3,144.5 254.1,143.6 254.8,142.6 255.6,141.7 256.4,140.7 257.1,139.8 257.9,138.8 258.6,137.8 259.4,136.8 260.2,135.8 260.9,134.8 261.7,133.8 262.5,132.8 263.2,131.7 264.0,130.7 264.7,129.7 265.5,128.6 266.3,127.6 267.0,126.5 267.8,125.5 268.6,124.4 269.3,123.3 270.1,122.3 270.8,121.2 271.6,120.1 272.4,119.0 273.1,118.0 273.9,116.9 274.6,115.8 275.4,114.7 276.2,113.6 276.9,112.5 277.7,111.4 278.5,110.3 279.2,109.2 280.0,108.1 280.8,107.0 281.5,105.9 282.3,104.8 283.0,103.7 283.8,102.6 284.6,101.5 285.3,100.4 286.1,99.3 286.9,98.2 287.6,97.1 288.4,96.0 289.1,95.0 289.9,93.9 290.7,92.8 291.4,91.7 292.2,90.7 293.0,89.6 293.7,88.5 294.5,87.5 295.2,86.4 296.0,85.4 296.8,84.3 297.5,83.3 298.3,82.3 299.0,81.2 299.8,80.2 300.6,79.2 301.3,78.2 302.1,77.2 302.9,76.2 303.6,75.2 304.4,74.2 305.2,73.3 305.9,72.3 306.7,71.4 307.4,70.4 308.2,69.5 309.0,68.6 309.7,67.7 310.5,66.7 311.2,65.9 312.0,65.0 312.8,64.1 313.5,63.2 314.3,62.4 315.1,61.5 315.8,60.7 316.6,59.9 317.3,59.1 318.1,58.3 318.9,57.5 319.6,56.7 320.4,56.0 321.2,55.2 321.9,54.5 322.7,53.8 323.5,53.1 324.2,52.4 325.0,51.7 325.7,51.0 326.5,50.4 327.3,49.7 328.0,49.1 328.8,48.5 329.6,47.9 330.3,47.3 331.1,46.7 331.8,46.2 332.6,45.7 333.4,45.1 334.1,44.6 334.9,44.1 335.6,43.7 336.4,43.2 337.2,42.8 337.9,42.3 338.7,41.9 339.5,41.5 340.2,41.1 341.0,40.8 341.8,40.4 342.5,40.1 343.3,39.8 344.0,39.5 344.8,39.2 345.6,38.9 346.3,38.7 347.1,38.5 347.9,38.2 348.6,38.0 349.4,37.9 350.1,37.7 350.9,37.6 351.7,37.4 352.4,37.3 353.2,37.2 354.0,37.1 354.7,37.1 355.5,37.0 356.2,37.0 357.0,37.0" fill="none" stroke="#0077bb" stroke-width="2.5"/><circle cx="204.5" cy="177.0" r="3" fill="#cc4400" opacity="0.9"/><text x="128.2" y="35.5" font-size="13" fill="#0077bb" font-style="italic">h</text></svg>`,
      instruction: `Vyberte správnou periodu funkce h.`,
      choices: [
        {
          label: `\\(\\pi\\)`,
          value: "A",
          feedback: `Chyba. Perioda \\(\\pi\\) odpovídá \\(y = \\cos(2x)\\). V grafu jeden úplný kmit sahá do \\(4\\pi\\).`
        },
        {
          label: `\\(4\\pi\\)`,
          value: "B",
          feedback: `Přístup povolen. Graf dokončí jeden celý kmit na \\(x = 4\\pi\\). \\(T = 4\\pi\\). ✓`
        },
        {
          label: `\\(2\\pi\\)`,
          value: "C",
          feedback: `Chyba. \\(2\\pi\\) je výchozí perioda \\(\\cos x\\) — ale koeficient \\(k\\) periodu mění.`
        },
        {
          label: `\\(8\\pi\\)`,
          value: "D",
          feedback: `Kritická chyba. Z grafu jasně vidíš, že kmit končí v \\(4\\pi\\), ne v \\(8\\pi\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_gon_09", regionId: "goniometrie", type: "closed", monsterName: `SIM: Perioda y = cos(x/2)`,
      isTraining: true, bossId: "q_gon_09", visual_color: "#2ecc8a", visual_symbol: `cos`, points: 0,
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
          content: `\\(T = \\dfrac{2\\pi}{|k|} = \\dfrac{2\\pi}{1/2} = 2\\pi \\cdot 2 = \\mathbf{4\\pi}\\). Menší \\(k\\) → delší perioda, pomalejší kmitání.`
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
      id: "q_gon_10", regionId: "goniometrie", type: "closed", monsterName: `FW-10J: Porovnání sin a cos`,
      visual_color: "#e040fb", visual_symbol: `sin`, points: 3, trainingTasks: ["t_gon_10"],
      question: `Na obrázku jsou grafy \\(f\\colon y = \\sin x\\) (modrá) a \\(g\\colon y = \\cos x\\) (zelená) pro \\(x \\in (0;\\, 2\\pi)\\). Pro která \\(x \\in (0;\\, 2\\pi)\\) leží graf \\(f\\) nad grafem \\(g\\)?`,
      diagram: `<svg viewBox="0 0 400 215" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="90.1" y1="28" x2="90.1" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="128.2" y1="28" x2="128.2" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="204.5" y1="28" x2="204.5" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="242.6" y1="28" x2="242.6" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="280.8" y1="28" x2="280.8" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="357.0" y1="28" x2="357.0" y2="197" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="40.0" x2="357" y2="40.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="52" y1="180.0" x2="357" y2="180.0" stroke="#64748b" stroke-width="1" opacity="0.4"/><line x1="44" y1="110" x2="369" y2="110" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="369,106 376,110 369,114" fill="#e2e8f0"/><text x="379" y="114" font-size="12" fill="#e2e8f0">x</text><line x1="52" y1="202" x2="52" y2="20" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="48,20 52,13 56,20" fill="#e2e8f0"/><text x="52" y="11" font-size="12" fill="#e2e8f0" text-anchor="middle">y</text><line x1="90.1" y1="107" x2="90.1" y2="113" stroke="#e2e8f0" stroke-width="1.5"/><text x="90.1" y="126" font-size="9" fill="#e2e8f0" text-anchor="middle">π/4</text><line x1="128.2" y1="107" x2="128.2" y2="113" stroke="#e2e8f0" stroke-width="1.5"/><text x="128.2" y="126" font-size="9" fill="#e2e8f0" text-anchor="middle">π/2</text><line x1="204.5" y1="107" x2="204.5" y2="113" stroke="#e2e8f0" stroke-width="1.5"/><text x="204.5" y="126" font-size="9" fill="#e2e8f0" text-anchor="middle">π</text><line x1="242.6" y1="107" x2="242.6" y2="113" stroke="#e2e8f0" stroke-width="1.5"/><text x="242.6" y="126" font-size="9" fill="#e2e8f0" text-anchor="middle">5π/4</text><line x1="280.8" y1="107" x2="280.8" y2="113" stroke="#e2e8f0" stroke-width="1.5"/><text x="280.8" y="126" font-size="9" fill="#e2e8f0" text-anchor="middle">3π/2</text><line x1="357.0" y1="107" x2="357.0" y2="113" stroke="#e2e8f0" stroke-width="1.5"/><text x="357.0" y="126" font-size="9" fill="#e2e8f0" text-anchor="middle">2π</text><line x1="49" y1="40.0" x2="55" y2="40.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="44.0" font-size="9" fill="#e2e8f0" text-anchor="end">1</text><line x1="49" y1="180.0" x2="55" y2="180.0" stroke="#e2e8f0" stroke-width="1.5"/><text x="46" y="184.0" font-size="9" fill="#e2e8f0" text-anchor="end">-1</text><polyline points="52.0,40.0 52.8,40.0 53.5,40.0 54.3,40.1 55.0,40.1 55.8,40.2 56.6,40.3 57.3,40.4 58.1,40.6 58.9,40.7 59.6,40.9 60.4,41.0 61.1,41.2 61.9,41.5 62.7,41.7 63.4,41.9 64.2,42.2 65.0,42.5 65.7,42.8 66.5,43.1 67.2,43.4 68.0,43.8 68.8,44.1 69.5,44.5 70.3,44.9 71.1,45.3 71.8,45.8 72.6,46.2 73.3,46.7 74.1,47.1 74.9,47.6 75.6,48.1 76.4,48.7 77.2,49.2 77.9,49.7 78.7,50.3 79.5,50.9 80.2,51.5 81.0,52.1 81.7,52.7 82.5,53.4 83.3,54.0 84.0,54.7 84.8,55.4 85.5,56.1 86.3,56.8 87.1,57.5 87.8,58.2 88.6,59.0 89.4,59.7 90.1,60.5 90.9,61.3 91.7,62.1 92.4,62.9 93.2,63.7 93.9,64.5 94.7,65.4 95.5,66.2 96.2,67.1 97.0,68.0 97.8,68.9 98.5,69.7 99.3,70.7 100.0,71.6 100.8,72.5 101.6,73.4 102.3,74.4 103.1,75.3 103.9,76.3 104.6,77.2 105.4,78.2 106.1,79.2 106.9,80.2 107.7,81.2 108.4,82.2 109.2,83.2 109.9,84.2 110.7,85.3 111.5,86.3 112.2,87.3 113.0,88.4 113.8,89.4 114.5,90.5 115.3,91.5 116.1,92.6 116.8,93.7 117.6,94.7 118.3,95.8 119.1,96.9 119.9,98.0 120.6,99.0 121.4,100.1 122.1,101.2 122.9,102.3 123.7,103.4 124.4,104.5 125.2,105.6 126.0,106.7 126.7,107.8 127.5,108.9 128.2,110.0 129.0,111.1 129.8,112.2 130.5,113.3 131.3,114.4 132.1,115.5 132.8,116.6 133.6,117.7 134.3,118.8 135.1,119.9 135.9,121.0 136.6,122.0 137.4,123.1 138.2,124.2 138.9,125.3 139.7,126.3 140.4,127.4 141.2,128.5 142.0,129.5 142.7,130.6 143.5,131.6 144.3,132.7 145.0,133.7 145.8,134.7 146.6,135.8 147.3,136.8 148.1,137.8 148.8,138.8 149.6,139.8 150.4,140.8 151.1,141.8 151.9,142.8 152.7,143.7 153.4,144.7 154.2,145.6 154.9,146.6 155.7,147.5 156.5,148.4 157.2,149.3 158.0,150.3 158.8,151.1 159.5,152.0 160.3,152.9 161.0,153.8 161.8,154.6 162.6,155.5 163.3,156.3 164.1,157.1 164.9,157.9 165.6,158.7 166.4,159.5 167.1,160.3 167.9,161.0 168.7,161.8 169.4,162.5 170.2,163.2 170.9,163.9 171.7,164.6 172.5,165.3 173.2,166.0 174.0,166.6 174.8,167.3 175.5,167.9 176.3,168.5 177.0,169.1 177.8,169.7 178.6,170.3 179.3,170.8 180.1,171.3 180.9,171.9 181.6,172.4 182.4,172.9 183.2,173.3 183.9,173.8 184.7,174.2 185.4,174.7 186.2,175.1 187.0,175.5 187.7,175.9 188.5,176.2 189.2,176.6 190.0,176.9 190.8,177.2 191.5,177.5 192.3,177.8 193.1,178.1 193.8,178.3 194.6,178.5 195.4,178.8 196.1,179.0 196.9,179.1 197.6,179.3 198.4,179.4 199.2,179.6 199.9,179.7 200.7,179.8 201.4,179.9 202.2,179.9 203.0,180.0 203.7,180.0 204.5,180.0 205.3,180.0 206.0,180.0 206.8,179.9 207.6,179.9 208.3,179.8 209.1,179.7 209.8,179.6 210.6,179.4 211.4,179.3 212.1,179.1 212.9,179.0 213.7,178.8 214.4,178.5 215.2,178.3 215.9,178.1 216.7,177.8 217.5,177.5 218.2,177.2 219.0,176.9 219.8,176.6 220.5,176.2 221.3,175.9 222.0,175.5 222.8,175.1 223.6,174.7 224.3,174.2 225.1,173.8 225.8,173.3 226.6,172.9 227.4,172.4 228.1,171.9 228.9,171.3 229.7,170.8 230.4,170.3 231.2,169.7 231.9,169.1 232.7,168.5 233.5,167.9 234.2,167.3 235.0,166.6 235.8,166.0 236.5,165.3 237.3,164.6 238.1,163.9 238.8,163.2 239.6,162.5 240.3,161.8 241.1,161.0 241.9,160.3 242.6,159.5 243.4,158.7 244.2,157.9 244.9,157.1 245.7,156.3 246.4,155.5 247.2,154.6 248.0,153.8 248.7,152.9 249.5,152.0 250.2,151.1 251.0,150.3 251.8,149.3 252.5,148.4 253.3,147.5 254.1,146.6 254.8,145.6 255.6,144.7 256.4,143.7 257.1,142.8 257.9,141.8 258.6,140.8 259.4,139.8 260.2,138.8 260.9,137.8 261.7,136.8 262.5,135.8 263.2,134.7 264.0,133.7 264.7,132.7 265.5,131.6 266.3,130.6 267.0,129.5 267.8,128.5 268.6,127.4 269.3,126.3 270.1,125.3 270.8,124.2 271.6,123.1 272.4,122.0 273.1,121.0 273.9,119.9 274.6,118.8 275.4,117.7 276.2,116.6 276.9,115.5 277.7,114.4 278.5,113.3 279.2,112.2 280.0,111.1 280.8,110.0 281.5,108.9 282.3,107.8 283.0,106.7 283.8,105.6 284.6,104.5 285.3,103.4 286.1,102.3 286.9,101.2 287.6,100.1 288.4,99.0 289.1,98.0 289.9,96.9 290.7,95.8 291.4,94.7 292.2,93.7 293.0,92.6 293.7,91.5 294.5,90.5 295.2,89.4 296.0,88.4 296.8,87.3 297.5,86.3 298.3,85.3 299.0,84.2 299.8,83.2 300.6,82.2 301.3,81.2 302.1,80.2 302.9,79.2 303.6,78.2 304.4,77.2 305.2,76.3 305.9,75.3 306.7,74.4 307.4,73.4 308.2,72.5 309.0,71.6 309.7,70.7 310.5,69.7 311.2,68.9 312.0,68.0 312.8,67.1 313.5,66.2 314.3,65.4 315.1,64.5 315.8,63.7 316.6,62.9 317.3,62.1 318.1,61.3 318.9,60.5 319.6,59.7 320.4,59.0 321.2,58.2 321.9,57.5 322.7,56.8 323.5,56.1 324.2,55.4 325.0,54.7 325.7,54.0 326.5,53.4 327.3,52.7 328.0,52.1 328.8,51.5 329.6,50.9 330.3,50.3 331.1,49.7 331.8,49.2 332.6,48.7 333.4,48.1 334.1,47.6 334.9,47.1 335.6,46.7 336.4,46.2 337.2,45.8 337.9,45.3 338.7,44.9 339.5,44.5 340.2,44.1 341.0,43.8 341.8,43.4 342.5,43.1 343.3,42.8 344.0,42.5 344.8,42.2 345.6,41.9 346.3,41.7 347.1,41.5 347.9,41.2 348.6,41.0 349.4,40.9 350.1,40.7 350.9,40.6 351.7,40.4 352.4,40.3 353.2,40.2 354.0,40.1 354.7,40.1 355.5,40.0 356.2,40.0 357.0,40.0" fill="none" stroke="#228833" stroke-width="2.5"/><text x="66" y="30.1" font-size="12" fill="#228833" font-style="italic">g</text><polyline points="52.0,110.0 52.8,108.9 53.5,107.8 54.3,106.7 55.0,105.6 55.8,104.5 56.6,103.4 57.3,102.3 58.1,101.2 58.9,100.1 59.6,99.0 60.4,98.0 61.1,96.9 61.9,95.8 62.7,94.7 63.4,93.7 64.2,92.6 65.0,91.5 65.7,90.5 66.5,89.4 67.2,88.4 68.0,87.3 68.8,86.3 69.5,85.3 70.3,84.2 71.1,83.2 71.8,82.2 72.6,81.2 73.3,80.2 74.1,79.2 74.9,78.2 75.6,77.2 76.4,76.3 77.2,75.3 77.9,74.4 78.7,73.4 79.5,72.5 80.2,71.6 81.0,70.7 81.7,69.7 82.5,68.9 83.3,68.0 84.0,67.1 84.8,66.2 85.5,65.4 86.3,64.5 87.1,63.7 87.8,62.9 88.6,62.1 89.4,61.3 90.1,60.5 90.9,59.7 91.7,59.0 92.4,58.2 93.2,57.5 93.9,56.8 94.7,56.1 95.5,55.4 96.2,54.7 97.0,54.0 97.8,53.4 98.5,52.7 99.3,52.1 100.0,51.5 100.8,50.9 101.6,50.3 102.3,49.7 103.1,49.2 103.9,48.7 104.6,48.1 105.4,47.6 106.1,47.1 106.9,46.7 107.7,46.2 108.4,45.8 109.2,45.3 109.9,44.9 110.7,44.5 111.5,44.1 112.2,43.8 113.0,43.4 113.8,43.1 114.5,42.8 115.3,42.5 116.1,42.2 116.8,41.9 117.6,41.7 118.3,41.5 119.1,41.2 119.9,41.0 120.6,40.9 121.4,40.7 122.1,40.6 122.9,40.4 123.7,40.3 124.4,40.2 125.2,40.1 126.0,40.1 126.7,40.0 127.5,40.0 128.2,40.0 129.0,40.0 129.8,40.0 130.5,40.1 131.3,40.1 132.1,40.2 132.8,40.3 133.6,40.4 134.3,40.6 135.1,40.7 135.9,40.9 136.6,41.0 137.4,41.2 138.2,41.5 138.9,41.7 139.7,41.9 140.4,42.2 141.2,42.5 142.0,42.8 142.7,43.1 143.5,43.4 144.3,43.8 145.0,44.1 145.8,44.5 146.6,44.9 147.3,45.3 148.1,45.8 148.8,46.2 149.6,46.7 150.4,47.1 151.1,47.6 151.9,48.1 152.7,48.7 153.4,49.2 154.2,49.7 154.9,50.3 155.7,50.9 156.5,51.5 157.2,52.1 158.0,52.7 158.8,53.4 159.5,54.0 160.3,54.7 161.0,55.4 161.8,56.1 162.6,56.8 163.3,57.5 164.1,58.2 164.9,59.0 165.6,59.7 166.4,60.5 167.1,61.3 167.9,62.1 168.7,62.9 169.4,63.7 170.2,64.5 170.9,65.4 171.7,66.2 172.5,67.1 173.2,68.0 174.0,68.9 174.8,69.7 175.5,70.7 176.3,71.6 177.0,72.5 177.8,73.4 178.6,74.4 179.3,75.3 180.1,76.3 180.9,77.2 181.6,78.2 182.4,79.2 183.2,80.2 183.9,81.2 184.7,82.2 185.4,83.2 186.2,84.2 187.0,85.3 187.7,86.3 188.5,87.3 189.2,88.4 190.0,89.4 190.8,90.5 191.5,91.5 192.3,92.6 193.1,93.7 193.8,94.7 194.6,95.8 195.4,96.9 196.1,98.0 196.9,99.0 197.6,100.1 198.4,101.2 199.2,102.3 199.9,103.4 200.7,104.5 201.4,105.6 202.2,106.7 203.0,107.8 203.7,108.9 204.5,110.0 205.3,111.1 206.0,112.2 206.8,113.3 207.6,114.4 208.3,115.5 209.1,116.6 209.8,117.7 210.6,118.8 211.4,119.9 212.1,121.0 212.9,122.0 213.7,123.1 214.4,124.2 215.2,125.3 215.9,126.3 216.7,127.4 217.5,128.5 218.2,129.5 219.0,130.6 219.8,131.6 220.5,132.7 221.3,133.7 222.0,134.7 222.8,135.8 223.6,136.8 224.3,137.8 225.1,138.8 225.8,139.8 226.6,140.8 227.4,141.8 228.1,142.8 228.9,143.7 229.7,144.7 230.4,145.6 231.2,146.6 231.9,147.5 232.7,148.4 233.5,149.3 234.2,150.3 235.0,151.1 235.8,152.0 236.5,152.9 237.3,153.8 238.1,154.6 238.8,155.5 239.6,156.3 240.3,157.1 241.1,157.9 241.9,158.7 242.6,159.5 243.4,160.3 244.2,161.0 244.9,161.8 245.7,162.5 246.4,163.2 247.2,163.9 248.0,164.6 248.7,165.3 249.5,166.0 250.2,166.6 251.0,167.3 251.8,167.9 252.5,168.5 253.3,169.1 254.1,169.7 254.8,170.3 255.6,170.8 256.4,171.3 257.1,171.9 257.9,172.4 258.6,172.9 259.4,173.3 260.2,173.8 260.9,174.2 261.7,174.7 262.5,175.1 263.2,175.5 264.0,175.9 264.7,176.2 265.5,176.6 266.3,176.9 267.0,177.2 267.8,177.5 268.6,177.8 269.3,178.1 270.1,178.3 270.8,178.5 271.6,178.8 272.4,179.0 273.1,179.1 273.9,179.3 274.6,179.4 275.4,179.6 276.2,179.7 276.9,179.8 277.7,179.9 278.5,179.9 279.2,180.0 280.0,180.0 280.8,180.0 281.5,180.0 282.3,180.0 283.0,179.9 283.8,179.9 284.6,179.8 285.3,179.7 286.1,179.6 286.9,179.4 287.6,179.3 288.4,179.1 289.1,179.0 289.9,178.8 290.7,178.5 291.4,178.3 292.2,178.1 293.0,177.8 293.7,177.5 294.5,177.2 295.2,176.9 296.0,176.6 296.8,176.2 297.5,175.9 298.3,175.5 299.0,175.1 299.8,174.7 300.6,174.2 301.3,173.8 302.1,173.3 302.9,172.9 303.6,172.4 304.4,171.9 305.2,171.3 305.9,170.8 306.7,170.3 307.4,169.7 308.2,169.1 309.0,168.5 309.7,167.9 310.5,167.3 311.2,166.6 312.0,166.0 312.8,165.3 313.5,164.6 314.3,163.9 315.1,163.2 315.8,162.5 316.6,161.8 317.3,161.0 318.1,160.3 318.9,159.5 319.6,158.7 320.4,157.9 321.2,157.1 321.9,156.3 322.7,155.5 323.5,154.6 324.2,153.8 325.0,152.9 325.7,152.0 326.5,151.1 327.3,150.3 328.0,149.3 328.8,148.4 329.6,147.5 330.3,146.6 331.1,145.6 331.8,144.7 332.6,143.7 333.4,142.8 334.1,141.8 334.9,140.8 335.6,139.8 336.4,138.8 337.2,137.8 337.9,136.8 338.7,135.8 339.5,134.7 340.2,133.7 341.0,132.7 341.8,131.6 342.5,130.6 343.3,129.5 344.0,128.5 344.8,127.4 345.6,126.3 346.3,125.3 347.1,124.2 347.9,123.1 348.6,122.0 349.4,121.0 350.1,119.9 350.9,118.8 351.7,117.7 352.4,116.6 353.2,115.5 354.0,114.4 354.7,113.3 355.5,112.2 356.2,111.1 357.0,110.0" fill="none" stroke="#0077bb" stroke-width="2.5"/><text x="146.6" y="34.9" font-size="12" fill="#0077bb" font-style="italic">f</text><circle cx="90.1" cy="60.5" r="4" fill="#cc4400"/><circle cx="242.6" cy="159.5" r="4" fill="#cc4400"/><rect x="295" y="10" width="10" height="10" fill="#0077bb"/><text x="309" y="19" font-size="9" fill="#e2e8f0">f: sin x</text><rect x="295" y="24" width="10" height="10" fill="#228833"/><text x="309" y="33" font-size="9" fill="#e2e8f0">g: cos x</text></svg>`,
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
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_gon_10", regionId: "goniometrie", type: "closed", monsterName: `SIM: Průsečík sin a cos`,
      isTraining: true, bossId: "q_gon_10", visual_color: "#2ecc8a", visual_symbol: `sin`, points: 0,
      question: `V bodě \\(x = \\tfrac{\\pi}{4}\\) platí \\(\\sin\\tfrac{\\pi}{4} = \\cos\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{2}}{2}\\). Jak se porovnání změní pro \\(x\\) těsně větší než \\(\\tfrac{\\pi}{4}\\) (např. \\(x = \\tfrac{\\pi}{3}\\))?`,
      formula: `$$\\text{sin}\\frac{\\pi}{4} = \\text{cos}\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$$`,
      instruction: `Vyberte správné tvrzení pro x = π/3.`,
      steps: [
        {
          trigger: `> Krok 1: Výpočet v π/3`,
          content: `\\(\\sin(\\tfrac{\\pi}{3}) = \\tfrac{\\sqrt{3}}{2} \\approx 0{,}866\\). \\(\\quad\\cos(\\tfrac{\\pi}{3}) = \\tfrac{1}{2} = 0{,}5\\).`
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
      id: "q_ana_01", regionId: "analytika", type: "closed", monsterName: `FW-06A: Rovnice z bodu a vektoru`,
      visual_color: "#e74c3c", visual_symbol: `→n`, points: 2, trainingTasks: ["t_ana_01"],
      question: `Přímka p prochází bodem B[3; −1] a má směrový vektor \\(\\overrightarrow{u} = (2;1)\\).`,
      instruction: `Vyberte obecnou rovnici přímky p.`,
      choices: [
        {
          label: `\\(x + 2y + 1 = 0\\)`,
          value: "A",
          feedback: `Kritická chyba. Tento výraz neplatí pro bod B: 3 + 2·(−1) + 1 = 2 ≠ 0.`
        },
        {
          label: `\\(2x - y - 7 = 0\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Normálový vektor přímky musí být kolmý ke směrovému vektoru, nikoli totožný s ním.`
        },
        {
          label: `\\(x - 2y - 5 = 0\\)`,
          value: "C",
          feedback: `Přístup povolen. Normálový vektor (1; −2) je kolmý k ū = (2; 1): skalární součin = 0. Dosazení bodu B ověří konstantu.`
        },
        {
          label: `\\(x - 2y + 5 = 0\\)`,
          value: "D",
          feedback: `Logická chyba. Správný normálový vektor, ale chyba ve znaménku konstanty při dosazení bodu B.`
        },
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_ana_01", regionId: "analytika", type: "closed", monsterName: `SIM: Normálový vektor`,
      isTraining: true, bossId: "q_ana_01", visual_color: "#2ecc8a", visual_symbol: `→n`, points: 0,
      question: `Přímka p má směrový vektor \\(\\overrightarrow{u} = (1;\\ 2)\\). Který z vektorů je normálový vektor přímky p?`,
      instruction: `Vyberte správný normálový vektor.`,
      steps: [
        {
          trigger: `> Krok 1: Co je normálový vektor?`,
          content: `Normálový vektor přímky je <b>kolmý</b> ke směrovému vektoru. Podmínka kolmosti: skalární součin \\(\\vec{n} \\cdot \\vec{u} = 0\\).`
        },
        {
          trigger: `> Krok 2: Testujte každou možnost`,
          content: `Pro \\(\\vec{u} = (1; 2)\\) spočítejte skalární součin s každou možností. Hledáte výsledek 0.`
        },
        {
          trigger: `> Krok 3: Výsledek`,
          content: `Pro \\(\\vec{n} = (2; -1)\\): \\(1 \\cdot 2 + 2 \\cdot (-1) = 0\\) ✓. Odpověď: C.`
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
      id: "q_ana_02", regionId: "analytika", type: "closed", monsterName: `FW-06B: Průsečík přímek`,
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
          feedback: `Protokol zamítnut. Přímka q: 2·1 − 4 − 1 = −3 ≠ 0. Bod [1; 4] neleží na q.`
        },
        {
          label: `\\(P\\lbrack 4;\\ 1\\rbrack\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Přehozené souřadnice — zkontrolujte, která hodnota je x a která y.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_ana_02", regionId: "analytika", type: "closed", monsterName: `SIM: Průsečík substitucí`,
      isTraining: true, bossId: "q_ana_02", visual_color: "#2ecc8a", visual_symbol: `∩`, points: 0,
      question: `Přímky \\(r:2x + y = 7\\) a \\(s:x - y = 2\\) se protínají v bodě P. Vyjádřete x ze přímky s a dosaďte do r.`,
      instruction: `Jaké jsou souřadnice průsečíku P?`,
      steps: [
        {
          trigger: `> Krok 1: Vyjádřit x`,
          content: `Ze přímky s: \\(x - y = 2\\) → \\(x = y + 2\\).`
        },
        {
          trigger: `> Krok 2: Dosadit do r`,
          content: `Do \\(2x + y = 7\\): \\(2(y+2) + y = 7\\) → \\(3y + 4 = 7\\) → \\(y = 1\\).`
        },
        {
          trigger: `> Krok 3: Dopočítat x`,
          content: `\\(x = y + 2 = 1 + 2 = 3\\). Průsečík: P[3; 1].`
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
          feedback: `Přehozené souřadnice. Výsledek x = 3 a y = 1, nikoli naopak.`
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
      id: "q_ana_03", regionId: "analytika", type: "closed", monsterName: `FW-06C: Vzdálenost bodu od přímky`,
      visual_color: "#e74c3c", visual_symbol: `d`, points: 3, trainingTasks: ["t_ana_03"],
      question: `V rovině leží bod \\(M\\lbrack 1;\\  - 2\\rbrack\\) a přímka \\(p:3x + 4y - 10 = 0\\).`,
      instruction: `Určete vzdálenost bodu M od přímky p.`,
      choices: [
        {
          label: `\\(\\frac{3}{5}\\)`,
          value: "A",
          feedback: `Chyba v čitateli. Do vzorce správně dosaďte souřadnice M: |3·1 + 4·(−2) − 10|.`
        },
        {
          label: `\\(\\sqrt{15}\\)`,
          value: "B",
          feedback: `Kritická chyba. Jmenovatel vzorce je √(a² + b²) = √25 = 5, nikoli √15.`
        },
        {
          label: `\\(15\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Správný čitatel — ale zapomněli jste dělit jmenovatelem √(3²+4²) = 5.`
        },
        {
          label: `\\(3\\)`,
          value: "D",
          feedback: `Logika potvrzena. |3−8−10| = 15, √(9+16) = 5 → vzdálenost = 15/5 = 3.`
        },
      ],
      correctAnswer: "D", reward: { xp: 15 }
    },
    {
      id: "t_ana_03", regionId: "analytika", type: "closed", monsterName: `SIM: Vzdálenost od přímky`,
      isTraining: true, bossId: "q_ana_03", visual_color: "#2ecc8a", visual_symbol: `d`, points: 0,
      question: `Vypočtěte vzdálenost počátku souřadnic \\(O\\lbrack 0;\\ 0\\rbrack\\) od přímky \\(r:3x + 4y - 5 = 0\\).`,
      formula: `$$v(O,r) = \\frac{|a \\cdot x_{0} + b \\cdot y_{0} + c|}{\\sqrt{a^{2} + b^{2}}}$$`,
      instruction: `Dosaďte souřadnice O do vzorce a vypočítejte vzdálenost.`,
      steps: [
        {
          trigger: `> Krok 1: Dosadit souřadnice`,
          content: `Souřadnice O = (0; 0). Číslitel: \\(|3 \\cdot 0 + 4 \\cdot 0 - 5| = |-5| = 5\\).`
        },
        {
          trigger: `> Krok 2: Jmenovatel`,
          content: `Jmenovatel: \\(\\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5\\).`
        },
        {
          trigger: `> Krok 3: Výsledek`,
          content: `Vzdálenost = \\(5 / 5 = 1\\).`
        },
      ],
      choices: [
        {
          label: `\\(1\\)`,
          value: "A",
          feedback: `Protokol potvrzen. |−5| / √25 = 5/5 = 1. ✓`
        },
        {
          label: `\\(5\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Zapomněli jste dělit jmenovatelem √(9+16) = 5.`
        },
        {
          label: `\\(\\frac{1}{5}\\)`,
          value: "C",
          feedback: `Chyba ve vzorci. Správně: |čitatel| / jmenovatel, nikoli obráceně.`
        },
        {
          label: `\\(\\sqrt{5}\\)`,
          value: "D",
          feedback: `Kritická chyba. Jmenovatel je √25 = 5, nikoli √5. Součet pod odmocninou je 9+16 = 25.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_ana_04", regionId: "analytika", type: "closed", monsterName: `FW-06D: Parametrická na obecnou`,
      visual_color: "#e74c3c", visual_symbol: `t`, points: 3, trainingTasks: ["t_ana_04"],
      question: `Přímka p je dána parametrickým vyjádřením:`,
      formula: `$$p:\\ x = - 1 + 2t,\\ y = 4 - t;\\ t \\in \\mathbb{R}$$`,
      instruction: `Vyberte obecnou rovnici přímky p.`,
      choices: [
        {
          label: `\\(x + 2y - 7 = 0\\)`,
          value: "A",
          feedback: `Přístup povolen. Směrový vektor (2;−1) → normálový (1;2). Rovnice: 1·(x+1)+2·(y−4) = 0 → x+2y−7 = 0.`
        },
        {
          label: `\\(2x - y + 6 = 0\\)`,
          value: "B",
          feedback: `Kritická chyba. Použili jste směrový vektor jako normálový. Normálový vektor musí být kolmý ke směrovému.`
        },
        {
          label: `\\(x + 2y + 9 = 0\\)`,
          value: "C",
          feedback: `Chyba v konstantě. Správný normálový vektor, ale špatné dosazení bodu z parametrické přímky.`
        },
        {
          label: `\\(x - 2y + 9 = 0\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Záměna znaménka y-složky normálového vektoru — normálový k (2;−1) je (1;2), nikoli (1;−2).`
        },
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_ana_04", regionId: "analytika", type: "closed", monsterName: `SIM: Bod na parametrické přímce`,
      isTraining: true, bossId: "q_ana_04", visual_color: "#2ecc8a", visual_symbol: `t`, points: 0,
      question: `Přímka p: \\(x = 2 - t,\\ y = 1 + 3t;\\ t \\in \\mathbb{R}\\). Leží bod \\(M\\lbrack 0;\\ 7\\rbrack\\) na přímce p?`,
      instruction: `Dosaďte souřadnice M a určete, zda existuje t, pro které M ∈ p.`,
      steps: [
        {
          trigger: `> Krok 1: Dosadit x-souřadnici`,
          content: `Z první rovnice: \\(2 - t = 0\\) → \\(t = 2\\).`
        },
        {
          trigger: `> Krok 2: Ověřit y-souřadnici`,
          content: `Dosadíme t = 2 do druhé rovnice: \\(y = 1 + 3 \\cdot 2 = 7\\). Souhlasí! M ∈ p.`
        },
      ],
      choices: [
        {
          label: `Ano, pro \\(t = 3\\)`,
          value: "A",
          feedback: `Chyba: pro t=3 → x = 2−3 = −1 ≠ 0. Zkontrolujte výpočet t z x-souřadnice.`
        },
        {
          label: `Ano, pro \\(t = 2\\)`,
          value: "B",
          feedback: `Logika potvrzena. t=2 → x=0 ✓, y=7 ✓. Bod M leží na přímce p.`
        },
        {
          label: `Ne, bod neleží na p`,
          value: "C",
          feedback: `Chyba v závěru. Zkontrolujte výpočet — parametr t=2 splní obě rovnice.`
        },
        {
          label: `Ano, pro \\(t = - 2\\)`,
          value: "D",
          feedback: `Kritická chyba: pro t=−2 → x = 2−(−2) = 4 ≠ 0.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_ana_05", regionId: "analytika", type: "closed", monsterName: `FW-06E: Kolmá přímka`,
      visual_color: "#e74c3c", visual_symbol: `⊥`, points: 4, trainingTasks: ["t_ana_05"],
      question: `Jsou dány body \\(A\\lbrack - 2;\\ 1\\rbrack\\) a \\(B\\lbrack 4;\\ 3\\rbrack\\). Přímka q je kolmá k úsečce AB a prochází bodem B.`,
      instruction: `Která rovnice určuje přímku q?`,
      choices: [
        {
          label: `\\(3x - y - 9 = 0\\)`,
          value: "A",
          feedback: `Chyba ve znaménku. Normálový vektor kolmé přímky musí být rovnoběžný se směrem AB = (6; 2), nikoli (3; −1).`
        },
        {
          label: `\\(x - 3y + 5 = 0\\)`,
          value: "B",
          feedback: `Logická chyba. Zaměnili jste role směrového a normálového vektoru — přímka q má normálový vektor ∥ AB, ne kolmý.`
        },
        {
          label: `\\(3x + y - 15 = 0\\)`,
          value: "C",
          feedback: `Přístup povolen. Normálový vektor q = směr AB = (3; 1). Dosazení B[4; 3]: 12+3−15 = 0 ✓`
        },
        {
          label: `\\(x + 3y - 13 = 0\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Normálový vektor (1; 3) není rovnoběžný se směrem AB = (6; 2). Přímky by nebyly kolmé.`
        },
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_ana_05", regionId: "analytika", type: "closed", monsterName: `SIM: Normálový vektor AB`,
      isTraining: true, bossId: "q_ana_05", visual_color: "#2ecc8a", visual_symbol: `⊥`, points: 0,
      question: `Jsou dány body \\(A\\lbrack 1;\\ 3\\rbrack\\) a \\(B\\lbrack 5;\\ 1\\rbrack\\). Který z vektorů je normálový vektor přímky AB?`,
      instruction: `Vypočtěte směrový vektor AB, pak najděte normálový vektor (kolmý k AB).`,
      steps: [
        {
          trigger: `> Krok 1: Směrový vektor AB`,
          content: `\\(\\vec{AB} = B - A = (5-1;\\ 1-3) = (4;\\ -2)\\).`
        },
        {
          trigger: `> Krok 2: Normálový vektor`,
          content: `Normálový vektor je kolmý k \\(\\vec{AB}\\). Skalární součin musí být 0. Otočením souřadnic a záměnou znaménka: \\(\\vec{n} = (2;\\ 4)\\) nebo \\(\\vec{n} = (1;\\ 2)\\).`
        },
      ],
      choices: [
        {
          label: `\\((4;\\  - 2)\\)`,
          value: "A",
          feedback: `Kritická chyba. Toto je směrový vektor AB, nikoli normálový. Normálový musí být na něj kolmý.`
        },
        {
          label: `\\((2;\\  - 1)\\)`,
          value: "B",
          feedback: `Chyba: (2;−1)·(4;−2) = 8+2 = 10 ≠ 0. Tento vektor není kolmý k AB.`
        },
        {
          label: `\\((1;\\ 2)\\)`,
          value: "C",
          feedback: `Přístup povolen. \\((1; 2) \\cdot (4; -2) = 4 - 4 = 0\\) ✓. Normálový vektor přímky AB.`
        },
        {
          label: `\\(( - 2;\\  - 1)\\)`,
          value: "D",
          feedback: `Chyba: (−2;−1)·(4;−2) = −8+2 = −6 ≠ 0. Není kolmý k AB.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_ana_06", regionId: "analytika", type: "closed", monsterName: `FW-06F: Rovnice z grafu`,
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
          feedback: `Přístup povolen. Sklon −2 (body [0;3] a [2;−1]) a y-průsečík 3. Odpovídá y = −2x+3.`
        },
        {
          label: `\\(x + 2y - 6 = 0\\)`,
          value: "C",
          feedback: `Chyba ve sklonu. Tato přímka má sklon −1/2, nikoli −2. Sklon čtěte jako Δy/Δx.`
        },
        {
          label: `\\(y = 2x + 3\\)`,
          value: "D",
          feedback: `Chyba v orientaci. Přímka klesá zleva doprava — sklon musí být záporný.`
        },
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_ana_06", regionId: "analytika", type: "closed", monsterName: `SIM: Sklon přímky`,
      isTraining: true, bossId: "q_ana_06", visual_color: "#2ecc8a", visual_symbol: `p`, points: 0,
      question: `Přímka p prochází body \\(K\\lbrack - 2;\\ 4\\rbrack\\) a \\(L\\lbrack 1;\\  - 2\\rbrack\\).`,
      formula: `$$k = \\frac{y_{2} - y_{1}}{x_{2} - x_{1}}$$`,
      instruction: `Vypočtěte sklon přímky p.`,
      steps: [
        {
          trigger: `> Krok 1: Určit Δy a Δx`,
          content: `\\(\\Delta y = y_L - y_K = -2 - 4 = -6\\). \\(\\Delta x = x_L - x_K = 1 - (-2) = 3\\).`
        },
        {
          trigger: `> Krok 2: Sklon`,
          content: `\\(k = \\Delta y / \\Delta x = -6 / 3 = -2\\). Přímka klesá — sklon je záporný.`
        },
      ],
      choices: [
        {
          label: `\\(k = 2\\)`,
          value: "A",
          feedback: `Chyba v znaménku. Přímka klesá (y klesá se rostoucím x), sklon musí být záporný.`
        },
        {
          label: `\\(k = - 3\\)`,
          value: "B",
          feedback: `Chyba v Δx. Δx = 1−(−2) = 3, nikoli 2. Pozor na zápornou souřadnici počátečního bodu.`
        },
        {
          label: `\\(k = - \\frac{1}{2}\\)`,
          value: "C",
          feedback: `Obrácené pořadí. Sklon = Δy/Δx, nikoli Δx/Δy.`
        },
        {
          label: `\\(k = - 2\\)`,
          value: "D",
          feedback: `Logika potvrzena. −6/3 = −2 ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_ana_07", regionId: "analytika", type: "closed", monsterName: `FW-06G: Kolmá přímka z grafu`,
      visual_color: "#e74c3c", visual_symbol: `⊥`, points: 2, trainingTasks: ["t_ana_07"],
      question: `V souřadnicové soustavě Oxy je umístěna přímka p.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="34" y1="86" x2="34" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="86" x2="62" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="86" x2="90" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="118" y1="86" x2="118" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="146" y1="86" x2="146" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="174" y1="86" x2="174" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="202" y1="86" x2="202" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="230" y1="86" x2="230" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="86" x2="258" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="286" y1="86" x2="286" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="254" x2="286" y2="254" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="226" x2="286" y2="226" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="198" x2="286" y2="198" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="170" x2="286" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="142" x2="286" y2="142" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="114" x2="286" y2="114" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="86" x2="286" y2="86" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="58" x2="286" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="170" x2="286" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="86" x2="90" y2="282" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="286,170 280,166 280,174" fill="#e2e8f0"/><polygon points="90,282 86,288 94,288" fill="#e2e8f0"/><text x="294" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="278" fill="#e2e8f0" font-size="13">y</text><line x1="118" y1="167" x2="118" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="114" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="142" x2="93" y2="142" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="146" fill="#e2e8f0" font-size="11">1</text><line x1="34.0" y1="170.0" x2="258.0" y2="58.0" stroke="#0077bb" stroke-width="2.5"/><text x="235" y="72.0" fill="#0077bb" font-size="13" font-style="italic">p</text></svg>`,
      instruction: `Která z přímek a, b, c, d je kolmá k přímce p?`,
      choices: [
        {
          label: `\\(a:\\ x - 2y + 6 = 0\\)`,
          value: "A",
          feedback: `Kritická chyba. Tato přímka je rovnoběžná s p (stejný sklon 1/2), nikoli kolmá.`
        },
        {
          label: `\\(b:\\ x + y - 4 = 0\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Sklon −1 není kolmý ke sklonu 1/2. Kolmý sklon je −2.`
        },
        {
          label: `\\(c:\\ 2x - y - 3 = 0\\)`,
          value: "C",
          feedback: `Chyba v orientaci. Sklon 2 je kladný — kolmá přímka k p musí mít záporný sklon (−2).`
        },
        {
          label: `\\(d:\\ 2x + y - 5 = 0\\)`,
          value: "D",
          feedback: `Přístup povolen. Sklon −2 je zápornou převrácenou hodnotou sklonu p (1/2). Přímky jsou kolmé.`
        },
      ],
      correctAnswer: "D", reward: { xp: 10 }
    },
    {
      id: "t_ana_07", regionId: "analytika", type: "closed", monsterName: `SIM: Podmínka kolmosti`,
      isTraining: true, bossId: "q_ana_07", visual_color: "#2ecc8a", visual_symbol: `⊥`, points: 0,
      question: `Vektor \\(\\overrightarrow{u} = (4;\\ u_{2})\\) je kolmý k vektoru \\(\\overrightarrow{v} = ( - 3;\\ 2)\\).`,
      formula: `$$\\overrightarrow{u} \\cdot \\overrightarrow{v} = 0$$`,
      instruction: `Vypočtěte chybějící souřadnici u₂.`,
      steps: [
        {
          trigger: `> Krok 1: Zapsat podmínku`,
          content: `\\(\\vec{u} \\cdot \\vec{v} = 4 \\cdot (-3) + u_2 \\cdot 2 = 0\\).`
        },
        {
          trigger: `> Krok 2: Řešit rovnici`,
          content: `\\(-12 + 2u_2 = 0\\) → \\(2u_2 = 12\\) → \\(u_2 = 6\\).`
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
      id: "q_ana_08", regionId: "analytika", type: "closed", monsterName: `FW-06H: Normálový vektor`,
      visual_color: "#e74c3c", visual_symbol: `n⃗`, points: 3, trainingTasks: ["t_ana_08"],
      question: `V souřadnicové soustavě Oxy je umístěna přímka p se směrovým vektorem \\(\\overrightarrow{u}\\).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#7733aa"/></marker></defs><line x1="62" y1="114" x2="62" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="114" x2="90" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="118" y1="114" x2="118" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="146" y1="114" x2="146" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="174" y1="114" x2="174" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="202" y1="114" x2="202" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="230" y1="114" x2="230" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="114" x2="258" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="286" y1="114" x2="286" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="226" x2="286" y2="226" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="198" x2="286" y2="198" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="170" x2="286" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="142" x2="286" y2="142" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="114" x2="286" y2="114" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="86" x2="286" y2="86" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="58" x2="286" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="170" x2="286" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="114" x2="90" y2="282" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="286,170 280,166 280,174" fill="#e2e8f0"/><polygon points="90,282 86,288 94,288" fill="#e2e8f0"/><text x="294" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="278" fill="#e2e8f0" font-size="13">y</text><line x1="118" y1="167" x2="118" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="114" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="142" x2="93" y2="142" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="146" fill="#e2e8f0" font-size="11">1</text><line x1="62.0" y1="188.7" x2="258.0" y2="58.0" stroke="#0077bb" stroke-width="2.5"/><line x1="90" y1="170" x2="174" y2="114" stroke="#7733aa" stroke-width="2.5" marker-end="url(#arr)"/><text x="179" y="109" fill="#7733aa" font-size="12">ū = (3; 2)</text><text x="230" y="142.0" fill="#0077bb" font-size="13" font-style="italic">p</text></svg>`,
      instruction: `Který z vektorů je normálový vektor přímky p?`,
      choices: [
        {
          label: `\\(\\overrightarrow{n} = (2;\\  - 3)\\)`,
          value: "A",
          feedback: `Přístup povolen. Skalární součin: (2; −3)·(3; 2) = 6−6 = 0 ✓. Vektory jsou na sebe kolmé.`
        },
        {
          label: `\\(\\overrightarrow{n} = (3;\\ 2)\\)`,
          value: "B",
          feedback: `Kritická chyba. Tento vektor je totožný se směrovým vektorem ū — normálový musí být kolmý ke směrovému.`
        },
        {
          label: `\\(\\overrightarrow{n} = (2;\\ 3)\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Skalární součin: (2; 3)·(3; 2) = 6+6 = 12 ≠ 0. Vektory nejsou kolmé.`
        },
        {
          label: `\\(\\overrightarrow{n} = ( - 3;\\ 2)\\)`,
          value: "D",
          feedback: `Chyba v souřadnicích. (−3; 2)·(3; 2) = −9+4 = −5 ≠ 0. Záměna x a y složky nestačí.`
        },
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_ana_08", regionId: "analytika", type: "closed", monsterName: `SIM: Skalární součin`,
      isTraining: true, bossId: "q_ana_08", visual_color: "#2ecc8a", visual_symbol: `n⃗`, points: 0,
      question: `Jsou dány vektory \\(\\overrightarrow{a} = (3;\\  - 2)\\) a \\(\\overrightarrow{b} = (1;\\ 4)\\).`,
      formula: `$$\\overrightarrow{a} \\cdot \\overrightarrow{b} = a_{1}b_{1} + a_{2}b_{2}$$`,
      instruction: `Vypočtěte skalární součin vektorů ā a b̄.`,
      steps: [
        {
          trigger: `> Krok 1: Dosadit složky`,
          content: `\\(\\vec{a} \\cdot \\vec{b} = 3 \\cdot 1 + (-2) \\cdot 4\\).`
        },
        {
          trigger: `> Krok 2: Spočítat`,
          content: `\\(= 3 + (-8) = 3 - 8 = -5\\).`
        },
      ],
      choices: [
        {
          label: `\\(11\\)`,
          value: "A",
          feedback: `Chyba v znaménku. Skalární součin zahrnuje záporné číslo: 3·1+(−2)·4 = 3−8 = −5, nikoli 3+8.`
        },
        {
          label: `\\(- 5\\)`,
          value: "B",
          feedback: `Logika potvrzena. 3·1+(−2)·4 = 3−8 = −5. ✓`
        },
        {
          label: `\\(5\\)`,
          value: "C",
          feedback: `Chyba: správná absolutní hodnota, ale špatné znaménko. Výsledek je záporný.`
        },
        {
          label: `\\(- 11\\)`,
          value: "D",
          feedback: `Kritická chyba. 3·1 = +3, nikoli −3. Znaménko prvního členu je kladné.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_ana_09", regionId: "analytika", type: "closed", monsterName: `FW-06I: Odchylka přímky`,
      visual_color: "#e74c3c", visual_symbol: `φ`, points: 2, trainingTasks: ["t_ana_09"],
      question: `V souřadnicové soustavě Oxy je umístěna přímka p.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="62" y1="114" x2="62" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="114" x2="90" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="118" y1="114" x2="118" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="146" y1="114" x2="146" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="174" y1="114" x2="174" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="202" y1="114" x2="202" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="230" y1="114" x2="230" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="114" x2="258" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="286" y1="114" x2="286" y2="282" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="226" x2="286" y2="226" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="198" x2="286" y2="198" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="170" x2="286" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="142" x2="286" y2="142" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="114" x2="286" y2="114" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="86" x2="286" y2="86" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="58" x2="286" y2="58" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="62" y1="170" x2="286" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="114" x2="90" y2="282" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="286,170 280,166 280,174" fill="#e2e8f0"/><polygon points="90,282 86,288 94,288" fill="#e2e8f0"/><text x="294" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="278" fill="#e2e8f0" font-size="13">y</text><line x1="118" y1="167" x2="118" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="114" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="142" x2="93" y2="142" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="146" fill="#e2e8f0" font-size="11">1</text><line x1="62.0" y1="132.7" x2="174.0" y2="58.0" stroke="#0077bb" stroke-width="2.5"/><circle cx="90" cy="114" r="4" fill="#cc4400"/><text x="96" y="110" fill="#e2e8f0" font-size="11">[0; 2]</text><circle cx="174" cy="58" r="4" fill="#cc4400"/><text x="180" y="54" fill="#e2e8f0" font-size="11">[3; 4]</text><text x="258" y="-6.0" fill="#0077bb" font-size="13" font-style="italic">p</text></svg>`,
      instruction: `Jaká je odchylka přímky p od souřadnicové osy x? (Výsledek zaokrouhlete na celé minuty.)`,
      choices: [
        {
          label: `\\(26{^\\circ}34\\prime\\)`,
          value: "A",
          feedback: `Chyba ve čtení sklonu. arctan(1/2) = 26°34' odpovídá sklonu 1/2. Přímka p má sklon 2/3, ne 1/2.`
        },
        {
          label: `\\(45{^\\circ}00\\prime\\)`,
          value: "B",
          feedback: `Chyba syntaxe. 45° odpovídá sklonu 1. Přečtěte sklon z grafu: Δy/Δx = 2/3.`
        },
        {
          label: `\\(33{^\\circ}41\\prime\\)`,
          value: "C",
          feedback: `Přístup povolen. Sklon k = 2/3. Odchylka φ = arctan(2/3) ≈ 33,69° ≈ 33°41'. ✓`
        },
        {
          label: `\\(56{^\\circ}19\\prime\\)`,
          value: "D",
          feedback: `Kritická chyba. arctan(3/2) ≈ 56°19' odpovídá sklonu 3/2 — převrácenou hodnotou sklonu p.`
        },
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_ana_09", regionId: "analytika", type: "closed", monsterName: `SIM: Sklon a odchylka`,
      isTraining: true, bossId: "q_ana_09", visual_color: "#2ecc8a", visual_symbol: `φ`, points: 0,
      question: `Přímka r má rovnici \\(x - 2y + 4 = 0\\). Vyjádřete sklon přímky a určete odchylku od osy x.`,
      formula: `$$\\varphi = \\text{arctan}(k)$$`,
      instruction: `Vyberte správnou odchylku přímky r od osy x. (Zaokrouhlete na celé minuty.)`,
      steps: [
        {
          trigger: `> Krok 1: Vyjádřit sklon`,
          content: `\\(x - 2y + 4 = 0\\) → \\(2y = x + 4\\) → \\(y = \\frac{1}{2}x + 2\\). Sklon \\(k = \\frac{1}{2}\\).`
        },
        {
          trigger: `> Krok 2: Odchylka`,
          content: `\\(\\varphi = \\arctan(1/2) \\approx 26{,}57° \\approx 26°34'\\).`
        },
      ],
      choices: [
        {
          label: `\\(63{^\\circ}26\\prime\\)`,
          value: "A",
          feedback: `Kritická chyba. 63°26' je komplementární úhel k 26°34'. Odchylka od osy x, nikoli od osy y.`
        },
        {
          label: `\\(45{^\\circ}00\\prime\\)`,
          value: "B",
          feedback: `Chyba: 45° odpovídá sklonu 1. Sklon přímky r je 1/2.`
        },
        {
          label: `\\(18{^\\circ}26\\prime\\)`,
          value: "C",
          feedback: `Chyba ve sklonu. arctan(1/3) ≈ 18°26'. Přímka r má sklon 1/2, ne 1/3.`
        },
        {
          label: `\\(26{^\\circ}34\\prime\\)`,
          value: "D",
          feedback: `Přístup povolen. k = 1/2, φ = arctan(1/2) ≈ 26°34'. ✓`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_ana_10", regionId: "analytika", type: "closed", monsterName: `FW-06J: Délka úsečky ze středu`,
      visual_color: "#e74c3c", visual_symbol: `S`, points: 3, trainingTasks: ["t_ana_10"],
      question: `Bod S[3; 2] je středem úsečky AB. Souřadnice bodu A jsou A[−1; −1].`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><line x1="18" y1="98" x2="18" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="42" y1="98" x2="42" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="66" y1="98" x2="66" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="90" y1="98" x2="90" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="114" y1="98" x2="114" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="138" y1="98" x2="138" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="162" y1="98" x2="162" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="186" y1="98" x2="186" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="98" x2="210" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="234" y1="98" x2="234" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="258" y1="98" x2="258" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="282" y1="98" x2="282" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="306" y1="98" x2="306" y2="314" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="242" x2="306" y2="242" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="218" x2="306" y2="218" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="194" x2="306" y2="194" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="170" x2="306" y2="170" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="146" x2="306" y2="146" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="122" x2="306" y2="122" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="98" x2="306" y2="98" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="74" x2="306" y2="74" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="50" x2="306" y2="50" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="26" x2="306" y2="26" stroke="#64748b" stroke-width="0.5" opacity="0.5"/><line x1="18" y1="170" x2="306" y2="170" stroke="#e2e8f0" stroke-width="1.5"/><line x1="90" y1="98" x2="90" y2="314" stroke="#e2e8f0" stroke-width="1.5"/><polygon points="306,170 300,166 300,174" fill="#e2e8f0"/><polygon points="90,314 86,320 94,320" fill="#e2e8f0"/><text x="314" y="175" fill="#e2e8f0" font-size="13">x</text><text x="94" y="310" fill="#e2e8f0" font-size="13">y</text><line x1="114" y1="167" x2="114" y2="173" stroke="#e2e8f0" stroke-width="1"/><text x="110" y="184" fill="#e2e8f0" font-size="11">1</text><line x1="87" y1="146" x2="93" y2="146" stroke="#e2e8f0" stroke-width="1"/><text x="95" y="150" fill="#e2e8f0" font-size="11">1</text><line x1="66" y1="194" x2="258" y2="50" stroke="#0077bb" stroke-width="2" stroke-dasharray="6,3"/><circle cx="66" cy="194" r="5" fill="#cc4400"/><circle cx="162" cy="122" r="5" fill="#f7b84f"/><circle cx="258" cy="50" r="5" fill="#cc4400"/><text x="46" y="198" fill="#cc4400" font-size="12" font-weight="bold">A</text><text x="168" y="116" fill="#f7b84f" font-size="12" font-weight="bold">S</text><text x="264" y="54" fill="#cc4400" font-size="12" font-weight="bold">B</text><text x="46" y="211" fill="#e2e8f0" font-size="10">[−1; −1]</text><text x="168" y="134" fill="#e2e8f0" font-size="10">[3; 2]</text></svg>`,
      instruction: `Jaká je délka úsečky AB?`,
      choices: [
        {
          label: `\\(4\\sqrt{5}\\)`,
          value: "A",
          feedback: `Chyba v násobení. Spočítali jste délku AS = √25 = 5 a pak provedli jinou operaci. |AB| = 2·|AS|.`
        },
        {
          label: `\\(10\\)`,
          value: "B",
          feedback: `Přístup povolen. B = [7; 5]. |AS| = √(16+9) = 5. |AB| = 2·5 = 10. ✓`
        },
        {
          label: `\\(5\\)`,
          value: "C",
          feedback: `Logická chyba. Délka 5 odpovídá vzdálenosti A–S, nikoli A–B. Úsečka AB je dvakrát delší.`
        },
        {
          label: `\\(8\\)`,
          value: "D",
          feedback: `Kritická chyba. Vzdálenost nelze spočítat jen z rozdílu x-souřadnic — použijte Pythagorovu větu.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_ana_10", regionId: "analytika", type: "closed", monsterName: `SIM: Střed úsečky`,
      isTraining: true, bossId: "q_ana_10", visual_color: "#2ecc8a", visual_symbol: `S`, points: 0,
      question: `Jsou dány body \\(A\\lbrack - 3;\\ 2\\rbrack\\) a \\(B\\lbrack 5;\\  - 4\\rbrack\\).`,
      formula: `$$S = \\left\\lbrack \\frac{x_{A} + x_{B}}{2};\\ \\frac{y_{A} + y_{B}}{2} \\right\\rbrack$$`,
      instruction: `Vypočtěte souřadnice středu S úsečky AB.`,
      steps: [
        {
          trigger: `> Krok 1: Průměr x-souřadnic`,
          content: `\\(x_S = \\frac{-3 + 5}{2} = \\frac{2}{2} = 1\\).`
        },
        {
          trigger: `> Krok 2: Průměr y-souřadnic`,
          content: `\\(y_S = \\frac{2 + (-4)}{2} = \\frac{-2}{2} = -1\\). Střed: S[1; −1].`
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

    // ==========================================
    // POSLOUPNOSTI — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_posl_01", regionId: "posloupnosti", type: "closed", monsterName: `FW-11A: Součet aritmetické posloupnosti`,
      visual_color: "#a78bfa", visual_symbol: `Σ`, points: 3, trainingTasks: ["t_posl_01"],
      question: `V aritmetické posloupnosti platí vzorec pro \\(n\\)-tý člen:`,
      formula: `$$a_{n} = 4n - 9$$`,
      instruction: `Jaká je hodnota součtu prvních 12 členů této posloupnosti?`,
      choices: [
        {
          label: `\\(S_{12} = 204\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(S_{12} = \\frac{12}{2}(2 \\cdot (-5) + 11 \\cdot 4) = 6 \\cdot 34 = 204\\)`
        },
        {
          label: `\\(S_{12} = 192\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Zkontroluj první člen: \\(a_1 = 4 \\cdot 1 - 9 = -5\\), ne 0.`
        },
        {
          label: `\\(S_{12} = 228\\)`,
          value: "C",
          feedback: `Kritická chyba. Použil(a) jsi \\(n = 13\\) místo 12.`
        },
        {
          label: `\\(S_{12} = 168\\)`,
          value: "D",
          feedback: `Chyba protokolu. Zaměnil(a) jsi diferencí nebo počet členů.`
        },
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_posl_01", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Dosazení do vzorce`,
      isTraining: true, bossId: "q_posl_01", visual_color: "#2ecc8a", visual_symbol: `Σ`, points: 0,
      question: `V aritmetické posloupnosti platí vzorec \\(a_{n} = 4n - 9\\). Jaká je hodnota třetího členu \\(a_{3}\\)?`,
      formula: `$$a_{n} = 4n - 9$$`,
      instruction: `Dosaď \\(n = 3\\) do vzorce.`,
      steps: [
        {
          trigger: `> Krok 1: Identifikuj vzorec`,
          content: `Vzorec \\(a_n = 4n - 9\\) říká: vezmi pořadové číslo \\(n\\), vynásob čtyřmi a odečti 9.`
        },
        {
          trigger: `> Krok 2: Dosaď n = 3`,
          content: `\\(a_3 = 4 \\cdot 3 - 9 = 12 - 9 = 3\\). Protokol potvrzen.`
        },
      ],
      choices: [
        {
          label: `\\(a_{3} = - 1\\)`,
          value: "A",
          feedback: `Chyba: výsledek odpovídá \\(a_2 = 4 \\cdot 2 - 9 = -1\\), ne \\(a_3\\).`
        },
        {
          label: `\\(a_{3} = 3\\)`,
          value: "B",
          feedback: `Logika potvrzena. \\(4 \\cdot 3 - 9 = 3\\).`
        },
        {
          label: `\\(a_{3} = 5\\)`,
          value: "C",
          feedback: `Kritická chyba. Pravděpodobně jsi zapomněl(a) odečíst 9.`
        },
        {
          label: `\\(a_{3} = 7\\)`,
          value: "D",
          feedback: `Chyba: výsledek odpovídá \\(a_4 = 4 \\cdot 4 - 9 = 7\\).`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_posl_02", regionId: "posloupnosti", type: "closed", monsterName: `FW-11B: Člen geometrické posloupnosti`,
      visual_color: "#a78bfa", visual_symbol: `q^n`, points: 3, trainingTasks: ["t_posl_02"],
      question: `V geometrické posloupnosti je \\(a_{1} = 3\\) a \\(a_{5} = 48\\).`,
      instruction: `Jaká je hodnota sedmého členu \\(a_7\\)?`,
      choices: [
        {
          label: `\\(a_{7} = 96\\)`,
          value: "A",
          feedback: `Chyba indexování. \\(a_7 = a_1 \\cdot q^6\\), ale použil(a) jsi \\(q^5\\).`
        },
        {
          label: `\\(a_{7} = 144\\)`,
          value: "B",
          feedback: `Kritická chyba. Špatně určen kvocient — ověř \\(q^4 = a_5/a_1\\).`
        },
        {
          label: `\\(a_{7} = 192\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(q = 2\\), \\(a_7 = 3 \\cdot 2^6 = 192\\).`
        },
        {
          label: `\\(a_{7} = 256\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Zapomněl(a) jsi na \\(a_1\\): \\(256 = 2^8\\), ne \\(3 \\cdot 2^6\\).`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_posl_02", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Kvocient ze dvou členů`,
      isTraining: true, bossId: "q_posl_02", visual_color: "#2ecc8a", visual_symbol: `q^n`, points: 0,
      question: `V geometrické posloupnosti je \\(a_{1} = 6\\) a \\(a_{3} = 24\\). Jaká je hodnota kvocientu \\(q\\) (pro \\(q > 0\\))?`,
      formula: `$$a_{3} = a_{1} \\cdot q^{2}$$`,
      instruction: `Vyjádři \\(q\\) ze vztahu \\(a_3 = a_1 \\cdot q^2\\).`,
      steps: [
        {
          trigger: `> Krok 1: Vyjádři q²`,
          content: `\\(q^2 = \\frac{a_3}{a_1} = \\frac{24}{6} = 4\\)`
        },
        {
          trigger: `> Krok 2: Odmocni (q > 0)`,
          content: `\\(q = \\sqrt{4} = 2\\). Přístup povolen.`
        },
      ],
      choices: [
        {
          label: `\\(q = 2\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(q^2 = 4\\), tedy \\(q = 2\\).`
        },
        {
          label: `\\(q = 3\\)`,
          value: "B",
          feedback: `Chyba: ověř \\(6 \\cdot 3^2 = 54 \\neq 24\\).`
        },
        {
          label: `\\(q = 4\\)`,
          value: "C",
          feedback: `Chyba syntaxe. \\(q = 4\\) platí pro jiné zadání — zde \\(q^2 = 4\\), ne \\(q = 4\\).`
        },
        {
          label: `\\(q = 6\\)`,
          value: "D",
          feedback: `Kritická chyba. \\(q \\neq a_3/a_1\\); nezapomeň na mocninu.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_posl_03", regionId: "posloupnosti", type: "closed", monsterName: `FW-11C: Diference aritmetické posloupnosti`,
      visual_color: "#a78bfa", visual_symbol: `d`, points: 3, trainingTasks: ["t_posl_03"],
      question: `V aritmetické posloupnosti je \\(a_{4} = 7\\) a \\(a_{8} = 19\\).`,
      instruction: `Jaká je diference \\(d\\) této posloupnosti?`,
      choices: [
        {
          label: `\\(d = 2\\)`,
          value: "A",
          feedback: `Chyba protokolu. Rozdíl indexů je 4, ne 6. \\(d = (19-7)/4 = 3\\).`
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
      id: "t_posl_03", regionId: "posloupnosti", type: "closed", monsterName: `SIM: N-tý člen ze vzorce`,
      isTraining: true, bossId: "q_posl_03", visual_color: "#2ecc8a", visual_symbol: `d`, points: 0,
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
          content: `\\(a_5 = 1 + 12 = 13\\). Protokol potvrzen.`
        },
      ],
      choices: [
        {
          label: `\\(a_{5} = 9\\)`,
          value: "A",
          feedback: `Chyba: toto je \\(a_3 = 1+2 \\cdot 3 = 7\\)... ne, \\(a_3=7\\). \\(9\\) neodpovídá žádnému členu.`
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
      id: "q_posl_04", regionId: "posloupnosti", type: "closed", monsterName: `FW-11D: Šestý člen geometrické posloupnosti`,
      visual_color: "#a78bfa", visual_symbol: `q²`, points: 4, trainingTasks: ["t_posl_04"],
      question: `V geometrické posloupnosti je \\(a_{2} = 4\\) a \\(a_{4} = 16\\).`,
      instruction: `Jaká je hodnota šestého členu \\(a_6\\)?`,
      choices: [
        {
          label: `\\(a_{6} = 32\\)`,
          value: "A",
          feedback: `Chyba protokolu. Použil(a) jsi \\(q\\) místo \\(q^2\\): \\(a_6 = a_4 \\cdot q^2\\).`
        },
        {
          label: `\\(a_{6} = 48\\)`,
          value: "B",
          feedback: `Kritická chyba. Špatný výpočet — \\(q^2 = 16/4 = 4\\), ne 3.`
        },
        {
          label: `\\(a_{6} = 56\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek neodpovídá geometrické posloupnosti.`
        },
        {
          label: `\\(a_{6} = 64\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(q^2 = 4\\), \\(a_6 = a_4 \\cdot q^2 = 16 \\cdot 4 = 64\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_posl_04", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Člen geometrické posloupnosti`,
      isTraining: true, bossId: "q_posl_04", visual_color: "#2ecc8a", visual_symbol: `q²`, points: 0,
      question: `Geometrická posloupnost má \\(a_{1} = 5\\) a kvocient \\(q = 3\\). Jaká je hodnota čtvrtého členu \\(a_{4}\\)?`,
      formula: `$$a_{n} = a_{1} \\cdot q^{n - 1}$$`,
      instruction: `Dosaď \\(a_1 = 5\\), \\(q = 3\\), \\(n = 4\\).`,
      steps: [
        {
          trigger: `> Krok 1: Mocnina kvocientu`,
          content: `Pro \\(n = 4\\) počítáme \\(q^{n-1} = 3^3 = 27\\).`
        },
        {
          trigger: `> Krok 2: Výsledek`,
          content: `\\(a_4 = 5 \\cdot 27 = 135\\). Protokol potvrzen.`
        },
      ],
      choices: [
        {
          label: `\\(a_{4} = 45\\)`,
          value: "A",
          feedback: `Chyba protokolu. Použil(a) jsi \\(q^2 = 9\\) místo \\(q^3 = 27\\).`
        },
        {
          label: `\\(a_{4} = 90\\)`,
          value: "B",
          feedback: `Kritická chyba. Pravděpodobně chyba v mocnině nebo součinu.`
        },
        {
          label: `\\(a_{4} = 120\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek neodpovídá \\(5 \\cdot 3^3\\).`
        },
        {
          label: `\\(a_{4} = 135\\)`,
          value: "D",
          feedback: `Logika potvrzena. \\(5 \\cdot 3^3 = 5 \\cdot 27 = 135\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_posl_05", regionId: "posloupnosti", type: "closed", monsterName: `FW-11E: Interval pro diferenci`,
      visual_color: "#a78bfa", visual_symbol: `d∈?`, points: 4, trainingTasks: ["t_posl_05"],
      question: `V aritmetické posloupnosti s prvním členem \\(a_{1} = 9\\) platí: trojnásobek druhého členu se rovná součtu třetího a pátého členu.`,
      formula: `$$3a_{2} = a_{3} + a_{5}$$`,
      instruction: `Do kterého intervalu patří diference \\(d\\) této posloupnosti?`,
      choices: [
        {
          label: `\\((2,5;\\ 3,5)\\)`,
          value: "A",
          feedback: `Přístup povolen. \\(3(9+d) = (9+2d)+(9+4d)\\) → \\(d = 3\\).`
        },
        {
          label: `\\(( - 0,5;\\ 0,5)\\)`,
          value: "B",
          feedback: `Kritická chyba. Výsledek d = 3, ne d ≈ 0.`
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
      id: "t_posl_05", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Diference z podmínky`,
      isTraining: true, bossId: "q_posl_05", visual_color: "#2ecc8a", visual_symbol: `d∈?`, points: 0,
      question: `Aritmetická posloupnost má \\(a_{1} = 2\\). Platí: \\(a_{2} + a_{4} = 20\\). Jaká je diference \\(d\\)?`,
      formula: `$$a_{2} + a_{4} = 20$$`,
      instruction: `Rozpiš oba členy pomocí \\(a_1\\) a \\(d\\).`,
      steps: [
        {
          trigger: `> Krok 1: Rozpiš členy`,
          content: `\\(a_2 = a_1 + d = 2+d\\) a \\(a_4 = a_1 + 3d = 2+3d\\).`
        },
        {
          trigger: `> Krok 2: Řeš rovnici`,
          content: `\\((2+d)+(2+3d) = 20\\) → \\(4+4d = 20\\) → \\(d = 4\\).`
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
      id: "q_posl_06", regionId: "posloupnosti", type: "closed", monsterName: `FW-11F: Nepravdivé tvrzení`,
      visual_color: "#a78bfa", visual_symbol: `¬`, points: 3, trainingTasks: ["t_posl_06"],
      question: `V aritmetické posloupnosti \\((a_{n})\\) platí: \\(a_{1} = 3\\) a \\(a_{4} = 12\\).`,
      instruction: `Které z následujících tvrzení je <b>nepravdivé</b>?`,
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
      id: "t_posl_06", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Pátý člen aritmetické posloupnosti`,
      isTraining: true, bossId: "q_posl_06", visual_color: "#2ecc8a", visual_symbol: `¬`, points: 0,
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
          content: `\\(a_5 = 2 + 20 = 22\\). Přístup povolen.`
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
      id: "q_posl_07", regionId: "posloupnosti", type: "closed", monsterName: `FW-11G: Schodiště ze čtverečků`,
      visual_color: "#a78bfa", visual_symbol: `⬛`, points: 4, trainingTasks: ["t_posl_07"],
      question: `Schodišťový obrazec je tvořen sloupci čtverečků (1 cm × 1 cm). Sloupec s pořadovým číslem \\(k\\) obsahuje \\((2k - 1)\\) čtverečků.`,
      formula: `$$a_{k} = 2k - 1$$`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 255" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><text x="160" y="20" fill="#e2e8f0" font-size="11" text-anchor="middle" font-weight="bold">k-tý sloupec má (2k−1) čtverečků</text><line x1="46" y1="215" x2="300" y2="215" stroke="#e2e8f0" stroke-width="1.5"/><rect x="50" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="72" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="72" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="72" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="147" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="94" y="130" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="147" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="130" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="113" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="116" y="96" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="198" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="181" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="164" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="147" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="130" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="113" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="96" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="79" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><rect x="138" y="62" width="17" height="17" fill="#1a3a6e" stroke="#0077bb" stroke-width="1"/><text x="170" y="164" fill="#e2e8f0" font-size="18">…</text><text x="58" y="229" fill="#94a3b8" font-size="9" text-anchor="middle">1</text><text x="58" y="193" fill="#7dd3fc" font-size="9" text-anchor="middle">1</text><text x="80" y="229" fill="#94a3b8" font-size="9" text-anchor="middle">2</text><text x="80" y="159" fill="#7dd3fc" font-size="9" text-anchor="middle">3</text><text x="102" y="229" fill="#94a3b8" font-size="9" text-anchor="middle">3</text><text x="102" y="125" fill="#7dd3fc" font-size="9" text-anchor="middle">5</text><text x="124" y="229" fill="#94a3b8" font-size="9" text-anchor="middle">4</text><text x="124" y="91" fill="#7dd3fc" font-size="9" text-anchor="middle">7</text><text x="146" y="229" fill="#94a3b8" font-size="9" text-anchor="middle">5</text><text x="146" y="57" fill="#7dd3fc" font-size="9" text-anchor="middle">9</text><text x="102" y="241" fill="#94a3b8" font-size="9" text-anchor="middle">číslo sloupce k</text></svg>`,
      instruction: `Kolik čtverečků celkem obsahuje schodiště se 7 sloupci?`,
      choices: [
        {
          label: `36 čtverečků`,
          value: "A",
          feedback: `Chyba protokolu. \\(36 = 6^2\\) — počítal(a) jsi jen 6 sloupců.`
        },
        {
          label: `49 čtverečků`,
          value: "B",
          feedback: `Logika potvrzena. \\(\\sum_{k=1}^{7}(2k-1) = 7^2 = 49\\).`
        },
        {
          label: `56 čtverečků`,
          value: "C",
          feedback: `Kritická chyba. Pravděpodobně jsi sečítal(a) špatné hodnoty.`
        },
        {
          label: `64 čtverečků`,
          value: "D",
          feedback: `Chyba syntaxe. \\(64 = 8^2\\) — počítal(a) jsi 8 sloupců místo 7.`
        },
      ],
      correctAnswer: "B", reward: { xp: 20 }
    },
    {
      id: "t_posl_07", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Trojúhelníkové schodiště`,
      isTraining: true, bossId: "q_posl_07", visual_color: "#2ecc8a", visual_symbol: `⬛`, points: 0,
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
          content: `\\(1+2+3+4 = 10\\). Nebo vzorcem: \\(\\frac{4 \\cdot 5}{2} = 10\\).`
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
      id: "q_posl_08", regionId: "posloupnosti", type: "closed", monsterName: `FW-11H: Pyramida obdélníků`,
      visual_color: "#a78bfa", visual_symbol: `▬`, points: 5, trainingTasks: ["t_posl_08"],
      question: `Plakát je složen z obdélníků seřazených nad sebou. Každý obdélník má výšku 4 cm. Horní (první) obdélník má šířku 6 cm, každý další je o 4 cm širší. Plakát celkem obsahuje 8 obdélníků.`,
      formula: `$$w_{n} = 6 + 4(n - 1)$$`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><text x="160" y="18" fill="#e2e8f0" font-size="11" text-anchor="middle" font-weight="bold">Pyramida obdélníků (každý o 4 cm širší)</text><rect x="139" y="35" width="42" height="22" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><rect x="126" y="60" width="68" height="22" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><rect x="113" y="85" width="94" height="22" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><rect x="100" y="110" width="120" height="22" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><rect x="87" y="135" width="146" height="22" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><text x="160" y="170" fill="#e2e8f0" font-size="16" text-anchor="middle">⋮</text><text x="160" y="190" fill="#e2e8f0" font-size="16" text-anchor="middle">⋮</text><text x="186" y="50" fill="#94a3b8" font-size="8">6 cm</text><text x="199" y="75" fill="#94a3b8" font-size="8">10 cm</text><text x="212" y="100" fill="#94a3b8" font-size="8">14 cm</text><text x="225" y="125" fill="#94a3b8" font-size="8">18 cm</text><text x="238" y="150" fill="#94a3b8" font-size="8">22 cm</text><line x1="129" y1="35" x2="129" y2="57" stroke="#f7b84f" stroke-width="1.2"/><line x1="125" y1="35" x2="133" y2="35" stroke="#f7b84f" stroke-width="1"/><line x1="125" y1="57" x2="133" y2="57" stroke="#f7b84f" stroke-width="1"/><text x="117" y="50" fill="#f7b84f" font-size="9" text-anchor="middle">4</text><text x="117" y="60" fill="#f7b84f" font-size="9" text-anchor="middle">cm</text><line x1="139" y1="25" x2="181" y2="25" stroke="#f7b84f" stroke-width="1.2"/><line x1="139" y1="21" x2="139" y2="29" stroke="#f7b84f" stroke-width="1"/><line x1="181" y1="21" x2="181" y2="29" stroke="#f7b84f" stroke-width="1"/><text x="160" y="21" fill="#f7b84f" font-size="9" text-anchor="middle">6 cm</text></svg>`,
      instruction: `Jaká je šířka \\(w_8\\) nejspodnějšího (osmého) obdélníku?`,
      choices: [
        {
          label: `\\(w_{8} = 26\\) cm`,
          value: "A",
          feedback: `Chyba protokolu. Výsledek odpovídá \\(w_6\\), ne \\(w_8\\).`
        },
        {
          label: `\\(w_{8} = 30\\) cm`,
          value: "B",
          feedback: `Chyba syntaxe. Zkontroluj: \\(w_8 = 6 + 4 \\cdot 7\\).`
        },
        {
          label: `\\(w_{8} = 32\\) cm`,
          value: "C",
          feedback: `Kritická chyba. Použil(a) jsi \\(n = 8\\) místo \\(n-1 = 7\\).`
        },
        {
          label: `\\(w_{8} = 34\\) cm`,
          value: "D",
          feedback: `Přístup povolen. \\(w_8 = 6 + 4 \\cdot 7 = 34\\) cm.`
        },
      ],
      correctAnswer: "D", reward: { xp: 25 }
    },
    {
      id: "t_posl_08", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Šířka obdélníku v pyramidě`,
      isTraining: true, bossId: "q_posl_08", visual_color: "#2ecc8a", visual_symbol: `▬`, points: 0,
      question: `Pyramida obdélníků: první obdélník (nahoře) má šířku 6 cm, každý další je o 4 cm širší. Jaká je šířka čtvrtého obdélníku?`,
      formula: `$$w_{n} = 6 + 4(n - 1)$$`,
      instruction: `Dosaď \\(n = 4\\) do vzorce.`,
      steps: [
        {
          trigger: `> Krok 1: Identifikuj parametry`,
          content: `\\(a_1 = 6\\) cm (první šířka), \\(d = 4\\) cm (přírůstek).`
        },
        {
          trigger: `> Krok 2: Vypočti w₄`,
          content: `\\(w_4 = 6 + 4 \\cdot (4-1) = 6 + 12 = 18\\) cm.`
        },
      ],
      choices: [
        {
          label: `\\(w_{4} = 14\\) cm`,
          value: "A",
          feedback: `Chyba: to je \\(w_3 = 6 + 4 \\cdot 2 = 14\\) cm.`
        },
        {
          label: `\\(w_{4} = 16\\) cm`,
          value: "B",
          feedback: `Chyba protokolu. Použil(a) jsi \\(d = 3\\) nebo \\(n - 1 = 2.5\\)?`
        },
        {
          label: `\\(w_{4} = 20\\) cm`,
          value: "C",
          feedback: `Chyba syntaxe. Použil(a) jsi \\(n = 4\\) místo \\(n-1 = 3\\) jako násobitel.`
        },
        {
          label: `\\(w_{4} = 18\\) cm`,
          value: "D",
          feedback: `Logika potvrzena. \\(w_4 = 6 + 4 \\cdot 3 = 18\\) cm.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_posl_09", regionId: "posloupnosti", type: "closed", monsterName: `FW-11I: Věž z krychlí`,
      visual_color: "#a78bfa", visual_symbol: `∑q`, points: 5, trainingTasks: ["t_posl_09"],
      question: `Věž je postavena z 5 krychlí na sobě. Největší (spodní) krychle má délku hrany 16 cm, každá další krychle má hranu o polovinu kratší.`,
      formula: `$$a_{n} = 16 \\cdot \\left( \\frac{1}{2} \\right)^{n - 1}$$`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 270" style="width:100%;max-width:320px;display:block;margin:12px auto;background:#111827;border:1px solid #1a2544;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;"><text x="160" y="18" fill="#e2e8f0" font-size="11" text-anchor="middle" font-weight="bold">Věž z krychlí (geometrická posloupnost)</text><rect x="157" y="239" width="6" height="6" fill="#1a3a6e" stroke="#0077bb" stroke-width="0.9"/><rect x="155" y="225" width="11" height="11" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.1"/><rect x="149" y="200" width="22" height="22" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.2"/><rect x="138" y="153" width="44" height="44" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.4"/><rect x="116" y="62" width="88" height="88" fill="#1a3a6e" stroke="#0077bb" stroke-width="1.5"/><text x="170" y="234" fill="#94a3b8" font-size="9">2 cm</text><text x="176" y="215" fill="#94a3b8" font-size="9">4 cm</text><text x="187" y="179" fill="#94a3b8" font-size="9">8 cm</text><text x="209" y="110" fill="#94a3b8" font-size="9">16 cm</text><line x1="106" y1="245" x2="106" y2="67" stroke="#f7b84f" stroke-width="1" stroke-dasharray="3,2"/><line x1="100" y1="245" x2="112" y2="245" stroke="#f7b84f" stroke-width="1"/><line x1="100" y1="67" x2="112" y2="67" stroke="#f7b84f" stroke-width="1"/><text x="88" y="157" fill="#f7b84f" font-size="11" text-anchor="middle" font-weight="bold">h?</text><text x="160" y="262" fill="#94a3b8" font-size="9" text-anchor="middle">a₁ = 16 cm, q = ½</text></svg>`,
      instruction: `Jaká je celková výška \\(h\\) věže (v cm)?`,
      choices: [
        {
          label: `\\(h = 31\\) cm`,
          value: "A",
          feedback: `Přístup povolen. \\(16 + 8 + 4 + 2 + 1 = 31\\) cm.`
        },
        {
          label: `\\(h = 28\\) cm`,
          value: "B",
          feedback: `Chyba protokolu. Zapomněl(a) jsi na pátou (nejmenší) krychli s hranou 1 cm.`
        },
        {
          label: `\\(h = 24\\) cm`,
          value: "C",
          feedback: `Kritická chyba. Sečítal(a) jsi jen první 4 krychle: \\(16+8+4+2 = 30\\) — ještě chybuje.`
        },
        {
          label: `\\(h = 20\\) cm`,
          value: "D",
          feedback: `Chyba syntaxe. Zdá se, že jsi počítal(a) jen hrany, ne součet všech výšek.`
        },
      ],
      correctAnswer: "A", reward: { xp: 25 }
    },
    {
      id: "t_posl_09", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Výška věže ze čtyř krychlí`,
      isTraining: true, bossId: "q_posl_09", visual_color: "#2ecc8a", visual_symbol: `∑q`, points: 0,
      question: `Věž je tvořena 4 krychlemi. Spodní (největší) krychle má hranu 8 cm, každá další má hranu dvakrát kratší. Jaká je celková výška věže?`,
      formula: `$$a_{n} = 8 \\cdot \\left( \\frac{1}{2} \\right)^{n - 1}$$`,
      instruction: `Sečti výšky všech čtyř krychlí.`,
      steps: [
        {
          trigger: `> Krok 1: Urči hrany krychlí`,
          content: `Hrany od spodu: \\(8, 4, 2, 1\\) cm. Každá je polovinou předchozí.`
        },
        {
          trigger: `> Krok 2: Sečti výšky`,
          content: `Výška = hrana. Celkem: \\(8 + 4 + 2 + 1 = 15\\) cm.`
        },
      ],
      choices: [
        {
          label: `\\(h = 10\\) cm`,
          value: "A",
          feedback: `Kritická chyba. Pravděpodobně jsi sečítal(a) jen 3 krychle.`
        },
        {
          label: `\\(h = 15\\) cm`,
          value: "B",
          feedback: `Přístup povolen. \\(8+4+2+1 = 15\\) cm.`
        },
        {
          label: `\\(h = 18\\) cm`,
          value: "C",
          feedback: `Chyba protokolu. Zkontroluj hrany — druhá krychle má hranu 4, ne 5 cm.`
        },
        {
          label: `\\(h = 20\\) cm`,
          value: "D",
          feedback: `Chyba syntaxe. To odpovídá \\(8+6+4+2\\), ne geometrické posloupnosti.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_posl_10", regionId: "posloupnosti", type: "closed", monsterName: `FW-11J: Kvocient a člen geometrické posloupnosti`,
      visual_color: "#a78bfa", visual_symbol: `q⁴`, points: 4, trainingTasks: ["t_posl_10"],
      question: `V geometrické posloupnosti je třetí člen \\(a_{3} = 12\\) a sedmý člen \\(a_{7} = 192\\). Kvocient posloupnosti je kladný.`,
      instruction: `Jaká je hodnota čtvrtého členu \\(a_4\\)?`,
      choices: [
        {
          label: `\\(a_{4} = 16\\)`,
          value: "A",
          feedback: `Chyba syntaxe. Výsledek neodpovídá geometrické posloupnosti s \\(q = 2\\).`
        },
        {
          label: `\\(a_{4} = 20\\)`,
          value: "B",
          feedback: `Kritická chyba. \\(a_4 = a_3 \\cdot q = 12 \\cdot 2 = 24\\), ne 20.`
        },
        {
          label: `\\(a_{4} = 24\\)`,
          value: "C",
          feedback: `Logika potvrzena. \\(q^4 = 192/12 = 16\\), \\(q = 2\\), \\(a_4 = 12 \\cdot 2 = 24\\).`
        },
        {
          label: `\\(a_{4} = 36\\)`,
          value: "D",
          feedback: `Chyba protokolu. Zdá se, že jsi kvocient zaměnil za 3.`
        },
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_posl_10", regionId: "posloupnosti", type: "closed", monsterName: `SIM: Pátý člen geometrické posloupnosti`,
      isTraining: true, bossId: "q_posl_10", visual_color: "#2ecc8a", visual_symbol: `q⁴`, points: 0,
      question: `Geometrická posloupnost má \\(a_{1} = 3\\) a kvocient \\(q = 2\\). Jaká je hodnota pátého členu \\(a_{5}\\)?`,
      formula: `$$a_{5} = a_{1} \\cdot q^{4}$$`,
      instruction: `Dosaď do vzorce \\(a_n = a_1 \\cdot q^{n-1}\\) pro \\(n = 5\\).`,
      steps: [
        {
          trigger: `> Krok 1: Mocnina kvocientu`,
          content: `\\(q^{n-1} = 2^4 = 16\\). Exponent je \\(n-1 = 4\\), ne 5.`
        },
        {
          trigger: `> Krok 2: Výsledek`,
          content: `\\(a_5 = 3 \\cdot 16 = 48\\). Protokol potvrzen.`
        },
      ],
      choices: [
        {
          label: `\\(a_{5} = 48\\)`,
          value: "A",
          feedback: `Logika potvrzena. \\(3 \\cdot 2^4 = 3 \\cdot 16 = 48\\).`
        },
        {
          label: `\\(a_{5} = 32\\)`,
          value: "B",
          feedback: `Chyba: \\(32 = 2^5\\) — zapomněl(a) jsi na \\(a_1 = 3\\).`
        },
        {
          label: `\\(a_{5} = 64\\)`,
          value: "C",
          feedback: `Chyba protokolu. Použil(a) jsi exponent 5 místo 4.`
        },
        {
          label: `\\(a_{5} = 96\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Zdá se, že jsi počítal(a) \\(3 \\cdot 2^5 = 96\\).`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },

    // ==========================================
    // PRAVDEPODOBNOST — NOVÉ PŘÍKLADY
    // ==========================================

    {
      id: "q_prav_01", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08A: Klasická pravděpodobnost`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 2, trainingTasks: ["t_prav_01"],
      question: `V sáčku je 6 červených a 4 modré kuličky. Náhodně vytáhneme jednu kuličku.`,
      instruction: `Jaká je pravděpodobnost, že vytažená kulička bude modrá?`,
      choices: [
        {
          label: `\\(\\frac{3}{5}\\)`,
          value: "A",
          feedback: `Chyba protokolu. Výsledek 3/5 odpovídá červeným kuličkám (6/10), ne modrým. Spočítejte podíl modrých ku celkovému počtu.`
        },
        {
          label: `\\(\\frac{2}{5}\\)`,
          value: "B",
          feedback: `Přístup povolen. 4 modré ze 10 celkem → P = 4/10 = 2/5. Logika ověřena.`
        },
        {
          label: `\\(\\frac{4}{6}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Ve jmenovateli musí být celkový počet kuliček (10), ne počet červených.`
        },
        {
          label: `\\(\\frac{1}{4}\\)`,
          value: "D",
          feedback: `Kritická chyba. Pravděpodobnost se nestanoví jako 1 děleno počtem barev — záleží na četnostech.`
        },
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_prav_01", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Výběr z urny`,
      isTraining: true, bossId: "q_prav_01", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `V sáčku jsou 3 červené a 2 modré kuličky. Vytáhneme náhodně jednu.`,
      instruction: `Jaká je pravděpodobnost, že kulička bude červená?`,
      steps: [
        {
          trigger: `> Krok 1: Celkový počet`,
          content: `Spočítejte všechny kuličky v sáčku: 3 červené + 2 modré = <b>5 kuliček celkem</b>. Toto číslo půjde do jmenovatele.`
        },
        {
          trigger: `> Krok 2: Příznivé případy`,
          content: `Hledáme červené → příznivé případy = 3. Pravděpodobnost: \\(P = \\frac{3}{5}\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\frac{2}{5}\\)`,
          value: "A",
          feedback: `Chyba. To je pravděpodobnost modré kuličky, ne červené.`
        },
        {
          label: `\\(\\frac{3}{5}\\)`,
          value: "B",
          feedback: `Logika potvrzena. 3 červené ze 5 celkem → 3/5.`
        },
        {
          label: `\\(\\frac{1}{3}\\)`,
          value: "C",
          feedback: `Chyba. Ve jmenovateli musí být celkový počet (5), ne počet modrých.`
        },
        {
          label: `\\(\\frac{3}{2}\\)`,
          value: "D",
          feedback: `Kritická chyba. Pravděpodobnost nemůže být větší než 1.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_prav_02", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08B: Variace bez opakování`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 2, trainingTasks: ["t_prav_02"],
      question: `Z písmen {A, B, C, D, E} sestavujeme dvoupísmenné kódy, přičemž obě písmena musí být různá.`,
      instruction: `Kolik různých dvoupísmenných kódů lze sestavit?`,
      choices: [
        {
          label: `10`,
          value: "A",
          feedback: `Chyba syntaxe. Výsledek 10 odpovídá kombinacím C(5,2) — výběru bez pořadí. Kódy AB a BA jsou ale různé, takže záleží na pořadí.`
        },
        {
          label: `25`,
          value: "B",
          feedback: `Chyba protokolu. Výsledek 25 = 5² platí pro kódy S opakováním. Podmínka říká, že písmena musí být různá.`
        },
        {
          label: `20`,
          value: "C",
          feedback: `Přístup povolen. V(5, 2) = 5 × 4 = 20. Pořadí záleží, opakování zakázáno. Logika ověřena.`
        },
        {
          label: `5`,
          value: "D",
          feedback: `Kritická chyba. Výsledek 5 ignoruje druhé písmeno. Kód má dvě místa — každé se volí samostatně.`
        },
      ],
      correctAnswer: "C", reward: { xp: 10 }
    },
    {
      id: "t_prav_02", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Variace, malá množina`,
      isTraining: true, bossId: "q_prav_02", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Z písmen {P, Q, R} sestavujeme dvoupísmenné kódy s různými písmeny.`,
      instruction: `Kolik různých kódů lze sestavit?`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec`,
          content: `Jde o variace bez opakování: \\(V(n, k) = n \\cdot (n-1) \\cdot \\ldots\\) pro \\(k\\) kroků. Zde \\(n=3\\), \\(k=2\\).`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `\\(V(3, 2) = 3 \\times 2 = 6\\). Kódy: PQ, PR, QP, QR, RP, RQ — skutečně 6 různých.`
        },
      ],
      choices: [
        {
          label: `6`,
          value: "A",
          feedback: `Přístup povolen. V(3,2) = 3 × 2 = 6.`
        },
        {
          label: `9`,
          value: "B",
          feedback: `Chyba. 9 = 3² platí pro kódy s opakováním.`
        },
        {
          label: `3`,
          value: "C",
          feedback: `Chyba. 3 = C(3,1) — výběr jednoho, ne dvou různých.`
        },
        {
          label: `12`,
          value: "D",
          feedback: `Kritická chyba. Zdvojenými přepočty. Správně: 3 × 2 = 6.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_prav_03", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08C: Kombinace — výběr ze skupiny`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 3, trainingTasks: ["t_prav_03"],
      question: `Třída má 10 chlapců a 8 dívek. Náhodně losujeme 2 žáky.`,
      instruction: `Kolik různých způsobů výběru existuje, při kterých jsou oba vylosovaní žáci chlapci?`,
      choices: [
        {
          label: `45`,
          value: "A",
          feedback: `Přístup povolen. \\(C(10, 2) = \\frac{10!}{2! \\cdot 8!} = 45\\). Pořadí nezáleží, opakování není. Logika ověřena.`
        },
        {
          label: `90`,
          value: "B",
          feedback: `Chyba protokolu. Výsledek 90 = 2 × C(10,2) — výsledek byl zdvojen. Každá dvojice se počítá jednou.`
        },
        {
          label: `20`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek 20 neodpovídá žádnému kombinatorickému vzorci pro tento případ. Použijte C(10, 2).`
        },
        {
          label: `100`,
          value: "D",
          feedback: `Kritická chyba. Výsledek 100 = 10² by platil pro uspořádané dvojice s opakováním. Kombinace C(10,2) nezahrnuje pořadí ani opakování.`
        },
      ],
      correctAnswer: "A", reward: { xp: 15 }
    },
    {
      id: "t_prav_03", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Výpočet C(n,k)`,
      isTraining: true, bossId: "q_prav_03", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Ze skupiny 6 kamarádů chceme vybrat 2 na výlet. Na pořadí nezáleží.`,
      formula: `$$C(6,2) = ?$$`,
      instruction: `Kolik různých způsobů výběru existuje?`,
      steps: [
        {
          trigger: `> Krok 1: Vzorec pro kombinace`,
          content: `Kombinace \\(C(n, k) = \\dfrac{n!}{k! \\cdot (n-k)!}\\). Sem dosazujeme \\(n=6\\), \\(k=2\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `\\(C(6,2) = \\dfrac{6!}{2! \\cdot 4!} = \\dfrac{6 \\times 5}{2 \\times 1} = \\dfrac{30}{2} = 15\\).`
        },
      ],
      choices: [
        {
          label: `30`,
          value: "A",
          feedback: `Chyba. 30 = 6 × 5 — zapomnělo se dělit 2! (pořadí nezáleží).`
        },
        {
          label: `12`,
          value: "B",
          feedback: `Chyba syntaxe. Výsledek neodpovídá vzorci C(6,2).`
        },
        {
          label: `15`,
          value: "C",
          feedback: `Přístup povolen. C(6,2) = 6!/(2!×4!) = 15.`
        },
        {
          label: `36`,
          value: "D",
          feedback: `Kritická chyba. 36 = 6² — to by byl případ s opakováním a pořadím.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_prav_04", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08D: Pravděpodobnost na kostce`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 2, trainingTasks: ["t_prav_04"],
      question: `Hodíme jednou spravedlivou šestistěnnou kostkou.`,
      instruction: `Jaká je pravděpodobnost, že padne číslo větší než 4?`,
      choices: [
        {
          label: `\\(\\frac{1}{2}\\)`,
          value: "A",
          feedback: `Chyba protokolu. Čísla větší než 4 jsou {5, 6} — jen 2 čísla ze 6, ne polovina.`
        },
        {
          label: `\\(\\frac{2}{3}\\)`,
          value: "B",
          feedback: `Kritická chyba. Výsledek 2/3 = 4/6 odpovídá P(číslo ≥ 3), nikoliv P(číslo > 4).`
        },
        {
          label: `\\(\\frac{1}{6}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek 1/6 platí pro pravděpodobnost jednoho konkrétního čísla. Větší než 4 jsou dvě čísla: 5 a 6.`
        },
        {
          label: `\\(\\frac{1}{3}\\)`,
          value: "D",
          feedback: `Přístup povolen. Příznivé případy: {5, 6} → 2 ze 6 možností. P = 2/6 = 1/3. Logika ověřena.`
        },
      ],
      correctAnswer: "D", reward: { xp: 10 }
    },
    {
      id: "t_prav_04", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Sudé číslo na kostce`,
      isTraining: true, bossId: "q_prav_04", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Hodíme jednou šestistěnnou kostkou.`,
      instruction: `Jaká je pravděpodobnost, že padne sudé číslo?`,
      steps: [
        {
          trigger: `> Krok 1: Příznivé případy`,
          content: `Sudá čísla na kostce: <b>{2, 4, 6}</b> → 3 příznivé případy ze 6 celkem.`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `\\(P(\\text{sudé}) = \\dfrac{3}{6} = \\dfrac{1}{2}\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\frac{1}{3}\\)`,
          value: "A",
          feedback: `Chyba. 1/3 by odpovídalo 2 ze 6 případů. Sudá čísla jsou 3: {2, 4, 6}.`
        },
        {
          label: `\\(\\frac{2}{3}\\)`,
          value: "B",
          feedback: `Chyba. 2/3 je pravděpodobnost opačné události (lichých čísel)? Ne — lichá jsou také 3/6 = 1/2.`
        },
        {
          label: `\\(\\frac{1}{6}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. 1/6 je pravděpodobnost jednoho konkrétního čísla, ne skupiny.`
        },
        {
          label: `\\(\\frac{1}{2}\\)`,
          value: "D",
          feedback: `Přístup povolen. {2, 4, 6} — 3 ze 6. P = 1/2.`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_prav_05", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08E: Permutace — seřazení objektů`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 2, trainingTasks: ["t_prav_05"],
      question: `Na poličce má být seřazeno 5 různých knih.`,
      instruction: `Kolika různými způsoby lze 5 knih seřadit?`,
      choices: [
        {
          label: `25`,
          value: "A",
          feedback: `Kritická chyba. Výsledek 25 = 5² — to by platilo pro nezávislý výběr s opakováním ze 5 prvků na 2 místa.`
        },
        {
          label: `120`,
          value: "B",
          feedback: `Přístup povolen. P(5) = 5! = 5 × 4 × 3 × 2 × 1 = 120. Každé pořadí je unikátní kombinace. Logika ověřena.`
        },
        {
          label: `20`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek 20 = V(5,2) — variace, nikoli permutace. Seřazujeme všech 5 knih, ne jen 2.`
        },
        {
          label: `60`,
          value: "D",
          feedback: `Chyba protokolu. Výsledek 60 = 5!/2 — byl by správný pro permutace, kde by se 2 prvky opakovaly. Všechny knihy jsou různé.`
        },
      ],
      correctAnswer: "B", reward: { xp: 10 }
    },
    {
      id: "t_prav_05", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Permutace 3 prvků`,
      isTraining: true, bossId: "q_prav_05", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Na poličce jsou 3 různé knihy: matematika, fyzika, čeština.`,
      instruction: `Kolika různými způsoby lze tyto 3 knihy seřadit?`,
      steps: [
        {
          trigger: `> Krok 1: Co je permutace`,
          content: `Permutace = <b>počet pořadí</b> všech prvků. Vzorec: \\(P(n) = n!\\). Pro 3 knihy: \\(P(3) = 3!\\).`
        },
        {
          trigger: `> Krok 2: Výpočet faktoriálu`,
          content: `\\(3! = 3 \\times 2 \\times 1 = 6\\). Pořadí: M-F-Č, M-Č-F, F-M-Č, F-Č-M, Č-M-F, Č-F-M — skutečně 6.`
        },
      ],
      choices: [
        {
          label: `9`,
          value: "A",
          feedback: `Chyba. 9 = 3² — to by odpovídalo výběru s opakováním, ne permutaci.`
        },
        {
          label: `6`,
          value: "B",
          feedback: `Přístup povolen. 3! = 6.`
        },
        {
          label: `3`,
          value: "C",
          feedback: `Chyba syntaxe. 3 je jen počet knih, ne počet pořadí.`
        },
        {
          label: `12`,
          value: "D",
          feedback: `Kritická chyba. 12 = 2 × 3! / 1 — nesprávné zdvojení. Permutace 3 prvků je přesně 6.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    {
      id: "q_prav_06", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08F: Kombinace — smíšená skupina`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 3, trainingTasks: ["t_prav_06"],
      question: `Výbor 3 osob se tvoří z 6 chlapců a 4 dívek.`,
      instruction: `Kolik různých způsobů výběru existuje, kde jsou ve výboru právě 2 chlapci a 1 dívka?`,
      choices: [
        {
          label: `15`,
          value: "A",
          feedback: `Chyba protokolu. Výsledek 15 = C(6,2) — zahrnuje jen výběr chlapců, ale chybí výběr dívky.`
        },
        {
          label: `80`,
          value: "B",
          feedback: `Kritická chyba. Výsledek neodpovídá správnému kombinatorickému postupu. Výběry jsou na sobě nezávislé — vynásobte C(6,2) × C(4,1).`
        },
        {
          label: `60`,
          value: "C",
          feedback: `Přístup povolen. C(6,2) × C(4,1) = 15 × 4 = 60. Chlapce a dívku vybíráme nezávisle a výsledky vynásobíme. Logika ověřena.`
        },
        {
          label: `30`,
          value: "D",
          feedback: `Chyba syntaxe. Výsledek 30 = C(6,2) × C(4,1) / 2 — došlo k neoprávněnému vydělení dvěma. Výbory jsou různé, nesdílíme pořadí.`
        },
      ],
      correctAnswer: "C", reward: { xp: 15 }
    },
    {
      id: "t_prav_06", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Smíšená skupina — malá`,
      isTraining: true, bossId: "q_prav_06", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Ze 3 chlapců a 2 dívek vybíráme skupinu 2 osob: 1 chlapec a 1 dívka.`,
      instruction: `Kolik různých způsobů výběru existuje?`,
      steps: [
        {
          trigger: `> Krok 1: Rozdělit výběr`,
          content: `Chlapce a dívku vybíráme <b>nezávisle</b>: nejdřív vybereme chlapce (C(3,1) = 3), pak dívku (C(2,1) = 2).`
        },
        {
          trigger: `> Krok 2: Vynásobit`,
          content: `Celkový počet = \\(C(3,1) \\times C(2,1) = 3 \\times 2 = 6\\).`
        },
      ],
      choices: [
        {
          label: `6`,
          value: "A",
          feedback: `Přístup povolen. C(3,1) × C(2,1) = 3 × 2 = 6.`
        },
        {
          label: `10`,
          value: "B",
          feedback: `Chyba. 10 = C(5,2) — výběr 2 z 5 bez podmínky. Zde máme podmínku 1 chlapec + 1 dívka.`
        },
        {
          label: `3`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek 3 bere v úvahu jen výběr chlapce.`
        },
        {
          label: `12`,
          value: "D",
          feedback: `Chyba protokolu. Výsledek 12 je zdvojenný. Nezávislé výběry: 3 × 2 = 6, ne 3 × 4.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_prav_07", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08G: Pravděpodobnost — výběr karty`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 2, trainingTasks: ["t_prav_07"],
      question: `Z balíčku 20 karet číslovaných 1 až 20 vytáhneme náhodně jednu kartu.`,
      instruction: `Jaká je pravděpodobnost, že číslo na vytažené kartě je násobkem čísla 4?`,
      choices: [
        {
          label: `\\(\\frac{1}{4}\\)`,
          value: "A",
          feedback: `Přístup povolen. Násobky 4 z {1, …, 20}: {4, 8, 12, 16, 20} — celkem 5 karet. P = 5/20 = 1/4. Logika ověřena.`
        },
        {
          label: `\\(\\frac{1}{5}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. Výsledek 1/5 = 4/20 odpovídá 4 příznivým případům. Správně jich je 5: {4, 8, 12, 16, 20}.`
        },
        {
          label: `\\(\\frac{1}{3}\\)`,
          value: "C",
          feedback: `Kritická chyba. Výsledek 1/3 neodpovídá tomuto případu — mohlo dojít k záměně s násobky 3 nebo s jinou podmínkou.`
        },
        {
          label: `\\(\\frac{3}{20}\\)`,
          value: "D",
          feedback: `Chyba protokolu. Výsledek 3/20 odpovídá pouze 3 příznivým případům. Správně: {4, 8, 12, 16, 20} — tedy 5 čísel.`
        },
      ],
      correctAnswer: "A", reward: { xp: 10 }
    },
    {
      id: "t_prav_07", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Sudá čísla v balíčku`,
      isTraining: true, bossId: "q_prav_07", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Z balíčku 10 karet číslovaných 1 až 10 vytáhneme náhodně jednu.`,
      instruction: `Jaká je pravděpodobnost, že číslo na kartě je sudé?`,
      steps: [
        {
          trigger: `> Krok 1: Identifikovat sudá čísla`,
          content: `Sudá čísla z {1, 2, …, 10}: <b>{2, 4, 6, 8, 10}</b> — celkem 5 čísel.`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `\\(P = \\dfrac{5}{10} = \\dfrac{1}{2}\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\frac{2}{5}\\)`,
          value: "A",
          feedback: `Chyba. 2/5 = 4/10 odpovídá 4 případům, ne 5.`
        },
        {
          label: `\\(\\frac{3}{10}\\)`,
          value: "B",
          feedback: `Chyba syntaxe. 3/10 by znamenalo jen 3 příznivé případy.`
        },
        {
          label: `\\(\\frac{1}{2}\\)`,
          value: "C",
          feedback: `Přístup povolen. {2, 4, 6, 8, 10} = 5 ze 10. P = 1/2.`
        },
        {
          label: `\\(\\frac{3}{5}\\)`,
          value: "D",
          feedback: `Kritická chyba. 3/5 = 6/10 by odpovídalo 6 příznivým případům.`
        },
      ],
      correctAnswer: "C", reward: { xp: 5 }
    },
    {
      id: "q_prav_08", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08H: Pravděpodobnost komplementu`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 4, trainingTasks: ["t_prav_08"],
      question: `V krabici je 7 žárovek, z nichž 2 jsou vadné. Náhodně vytáhneme 2 žárovky.`,
      instruction: `Jaká je pravděpodobnost, že alespoň jedna z vytažených žárovek je vadná?`,
      choices: [
        {
          label: `\\(\\frac{2}{7}\\)`,
          value: "A",
          feedback: `Chyba protokolu. Výsledek 2/7 odpovídá pravděpodobnosti výběru 1 vadné při výběru 1 kusu, ne 2. Použijte komplement.`
        },
        {
          label: `\\(\\frac{4}{7}\\)`,
          value: "B",
          feedback: `Kritická chyba. Tento výsledek neodpovídá žádnému správnému postupu. Výpočet přes komplement: P(alespoň 1 vadná) = 1 − P(žádná vadná).`
        },
        {
          label: `\\(\\frac{10}{21}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek 10/21 = C(5,2)/C(7,2) je pravděpodobnost, že žádná vadná — tedy komplement výsledku, ne výsledek sám.`
        },
        {
          label: `\\(\\frac{11}{21}\\)`,
          value: "D",
          feedback: `Přístup povolen. P = 1 − C(5,2)/C(7,2) = 1 − 10/21 = 11/21. Komplement aplikován správně. Logika ověřena.`
        },
      ],
      correctAnswer: "D", reward: { xp: 20 }
    },
    {
      id: "t_prav_08", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Pravděpodobnost komplementu`,
      isTraining: true, bossId: "q_prav_08", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Pravděpodobnost jevu A je \\(P(A) = \\frac{3}{8}\\).`,
      instruction: `Jaká je pravděpodobnost doplňkového jevu \\(\\bar{A}\\)?`,
      steps: [
        {
          trigger: `> Krok 1: Pravidlo komplementu`,
          content: `Platí: \\(P(A) + P(\\bar{A}) = 1\\), tedy \\(P(\\bar{A}) = 1 - P(A)\\).`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `\\(P(\\bar{A}) = 1 - \\dfrac{3}{8} = \\dfrac{5}{8}\\).`
        },
      ],
      choices: [
        {
          label: `\\(\\frac{3}{8}\\)`,
          value: "A",
          feedback: `Chyba. To je pravděpodobnost samotného jevu A, ne jeho komplementu.`
        },
        {
          label: `\\(\\frac{3}{5}\\)`,
          value: "B",
          feedback: `Kritická chyba. Komplement se nepočítá jako P(A) podělené zbytkem — použijte 1 − P(A).`
        },
        {
          label: `\\(\\frac{1}{8}\\)`,
          value: "C",
          feedback: `Chyba syntaxe. Výsledek 1/8 neodpovídá 1 − 3/8.`
        },
        {
          label: `\\(\\frac{5}{8}\\)`,
          value: "D",
          feedback: `Přístup povolen. \\(1 - \\frac{3}{8} = \\frac{5}{8}\\).`
        },
      ],
      correctAnswer: "D", reward: { xp: 5 }
    },
    {
      id: "q_prav_09", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08I: Hesla s podmínkou`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 3, trainingTasks: ["t_prav_09"],
      question: `Heslo se skládá ze 3 číslic (každá z číslic 0–9). Číslice se mohou opakovat.`,
      instruction: `Kolik různých hesel začíná číslicí 1?`,
      choices: [
        {
          label: `90`,
          value: "A",
          feedback: `Kritická chyba. Výsledek 90 = 10² − 10 odpovídá specifickým podmínkám bez opakování. Zde se číslice opakovat mohou.`
        },
        {
          label: `100`,
          value: "B",
          feedback: `Přístup povolen. První místo je fixováno na 1 (1 možnost), druhé a třetí místo: 10 × 10 = 100. Logika ověřena.`
        },
        {
          label: `1000`,
          value: "C",
          feedback: `Chyba protokolu. Výsledek 1000 je celkový počet tříciferných hesel bez podmínky. Omezením první číslice na 1 se počet sníží 10krát.`
        },
        {
          label: `72`,
          value: "D",
          feedback: `Chyba syntaxe. Výsledek 72 neodpovídá žádnému kombinatorickému výpočtu pro tento případ. Při fixovaném prvním místě: 1 × 10 × 10 = 100.`
        },
      ],
      correctAnswer: "B", reward: { xp: 15 }
    },
    {
      id: "t_prav_09", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Hesla s fixním začátkem`,
      isTraining: true, bossId: "q_prav_09", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Dvoumístné heslo se skládá z číslic 0–9 (opakování povoleno).`,
      instruction: `Kolik různých hesel začíná číslicí 0?`,
      steps: [
        {
          trigger: `> Krok 1: Fixní první místo`,
          content: `První číslice je pevně daná (0) — <b>1 možnost</b>. Druhé místo může být libovolná číslice 0–9.`
        },
        {
          trigger: `> Krok 2: Výpočet`,
          content: `Celkem: \\(1 \\times 10 = 10\\) hesel.`
        },
      ],
      choices: [
        {
          label: `10`,
          value: "A",
          feedback: `Přístup povolen. 1 × 10 = 10.`
        },
        {
          label: `9`,
          value: "B",
          feedback: `Chyba. 9 by bylo správné jen kdyby druhá číslice nesměla být 0. Opakování je zde povoleno.`
        },
        {
          label: `100`,
          value: "C",
          feedback: `Chyba protokolu. 100 = 10² je celkový počet 2místných hesel bez podmínky na první číslici.`
        },
        {
          label: `19`,
          value: "D",
          feedback: `Kritická chyba. Sčítáním místo násobení — kombinatorické situace se násobí, ne sčítají.`
        },
      ],
      correctAnswer: "A", reward: { xp: 5 }
    },
    {
      id: "q_prav_10", regionId: "pravdepodobnost", type: "closed", monsterName: `FW-08J: Inkluzivně-exkluzivní pravidlo`,
      visual_color: "#e84393", visual_symbol: `P(A)`, points: 4, trainingTasks: ["t_prav_10"],
      question: `Ve třídě 30 žáků hraje 18 volejbal a 12 basketbal. Celkem 7 žáků hraje oba sporty.`,
      instruction: `Jaká je pravděpodobnost, že náhodně vybraný žák hraje alespoň jeden z těchto sportů?`,
      choices: [
        {
          label: `1`,
          value: "A",
          feedback: `Chyba protokolu. Pravděpodobnost 1 by znamenala, že všichni hrají aspoň jeden sport. Ale 18 + 12 − 7 = 23 ≠ 30.`
        },
        {
          label: `\\(\\frac{17}{30}\\)`,
          value: "B",
          feedback: `Kritická chyba. Výsledek 17/30 nedodržuje inkluzivně-exkluzivní pravidlo. Správně: |V ∪ B| = 18 + 12 − 7 = 23.`
        },
        {
          label: `\\(\\frac{23}{30}\\)`,
          value: "C",
          feedback: `Přístup povolen. |V ∪ B| = 18 + 12 − 7 = 23. P = 23/30. Inkluzivně-exkluzivní pravidlo aplikováno správně. Logika ověřena.`
        },
        {
          label: `\\(\\frac{7}{30}\\)`,
          value: "D",
          feedback: `Chyba syntaxe. Výsledek 7/30 je pravděpodobnost průniku (obou sportů zároveň), nikoliv sjednocení. Hledáme alespoň jeden sport.`
        },
      ],
      correctAnswer: "C", reward: { xp: 20 }
    },
    {
      id: "t_prav_10", regionId: "pravdepodobnost", type: "closed", monsterName: `SIM: Počet prvků sjednocení`,
      isTraining: true, bossId: "q_prav_10", visual_color: "#2ecc8a", visual_symbol: `P(A)`, points: 0,
      question: `Ve třídě 20 žáků hraje 12 fotbal, 8 tenis a 3 žáci hrají oboje.`,
      instruction: `Kolik žáků hraje alespoň jeden z těchto sportů?`,
      steps: [
        {
          trigger: `> Krok 1: Inkluzivně-exkluzivní pravidlo`,
          content: `\\(|F \\cup T| = |F| + |T| - |F \\cap T|\\). Průnik odečítáme, aby nebyl zahrnut dvakrát.`
        },
        {
          trigger: `> Krok 2: Dosazení`,
          content: `\\(|F \\cup T| = 12 + 8 - 3 = 17\\).`
        },
      ],
      choices: [
        {
          label: `20`,
          value: "A",
          feedback: `Chyba protokolu. 20 by znamenalo, že všichni hrají sport — ale z 20 žáků hraje sport jen |F ∪ T| = 17.`
        },
        {
          label: `17`,
          value: "B",
          feedback: `Přístup povolen. 12 + 8 − 3 = 17.`
        },
        {
          label: `23`,
          value: "C",
          feedback: `Chyba. 23 = 12 + 8 + 3 — průnik byl přičten místo odečten.`
        },
        {
          label: `9`,
          value: "D",
          feedback: `Chyba syntaxe. Výsledek 9 neodpovídá inkluzivně-exkluzivnímu pravidlu.`
        },
      ],
      correctAnswer: "B", reward: { xp: 5 }
    },
    // --- ZÁSTUPNÍ UZLY ---
    { id: "q_placeholder_3", regionId: "planimetrie", type: "closed", monsterName: "FW-03: Planimetrie", choices: [{label: "A", value: "A"}], correctAnswer: "A", reward: { xp: 10 } },
    { id: "q_placeholder_4", regionId: "stereometrie", type: "closed", monsterName: "FW-04: Stereometrie", choices: [{label: "A", value: "A"}], correctAnswer: "A", reward: { xp: 10 } },
    { id: "q_placeholder_6", regionId: "analytika", type: "closed", monsterName: "FW-06: Analytika", choices: [{label: "A", value: "A"}], correctAnswer: "A", reward: { xp: 10 } },
    { id: "q_placeholder_7", regionId: "statistika", type: "closed", monsterName: "FW-07: Statistika", choices: [{label: "A", value: "A"}], correctAnswer: "A", reward: { xp: 10 } },
    { id: "q_placeholder_8", regionId: "pravdepodobnost", type: "closed", monsterName: "FW-08: Pravděpodobnost", choices: [{label: "A", value: "A"}], correctAnswer: "A", reward: { xp: 10 } },
    { id: "q_placeholder_9", regionId: "logaritmy", type: "closed", monsterName: "FW-09: Logaritmy", choices: [{label: "A", value: "A"}], correctAnswer: "A", reward: { xp: 10 } },
    { id: "q_placeholder_10", regionId: "goniometrie", type: "closed", monsterName: "FW-10: Goniometrie", choices: [{label: "A", value: "A"}], correctAnswer: "A", reward: { xp: 10 } },
    { id: "q_placeholder_11", regionId: "maturita", type: "closed", monsterName: "JÁDRO SYSTÉMU", choices: [{label: "Iniciovat simulaci", value: "A"}], correctAnswer: "A", reward: { xp: 100 } }
  ]
};
