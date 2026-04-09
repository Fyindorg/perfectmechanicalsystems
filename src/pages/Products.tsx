import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Product images — updated with high-quality matched images
import craneValvesImg from "@/assets/products/crane-ball-valve.webp";
import muellerValvesImg from "@/assets/products/mueller-check-valve.webp";
import peglerValvesImg from "@/assets/products/pegler-gate-valve.webp";
import nibcoValveImg from "@/assets/products/pegler-lockshield.jpeg";
import wikaGaugesImg from "@/assets/products/wika-thermowell.jpeg";
import hitachiFittingsImg from "@/assets/products/hitachi-mi-elbow.webp";
import bothwellFittingsImg from "@/assets/products/bothwell-fittings.jpg";
import benkanFittingsImg from "@/assets/products/benkan-bw-elbow.webp";
import nationalGroovedImg from "@/assets/products/national-coupling.jpeg";
import shurjointCouplingsImg from "@/assets/products/shurjoint-outlet.jpeg";
import shurjointFlangesImg from "@/assets/products/shurjoint-flanges.jpg";
import shurjointFittingsImg from "@/assets/products/shurjoint-fittings.jpg";
import shurjointSSImg from "@/assets/products/shurjoint-ss.jpg";
import shurjointValvesImg from "@/assets/products/shurjoint-valves.jpg";
import shurjointThreadedImg from "@/assets/products/shurjoint-threaded.jpg";
import shurjointRingjointImg from "@/assets/products/shurjoint-ringjoint.jpg";
import shurjointCopperImg from "@/assets/products/shurjoint-copper.jpg";
import shurjointHdpeImg from "@/assets/products/shurjoint-hdpe.jpg";
import shurjointAwwaImg from "@/assets/products/shurjoint-awwa.jpg";
import ssFittingsImg from "@/assets/products/ss-fittings.jpg";
import copperFittingsImg from "@/assets/products/copper-fittings.jpg";
import interpipePipesImg from "@/assets/products/interpipe-pipes.jpg";
import potterSwitchImg from "@/assets/products/potter-switch.jpg";
import mrflexExpansionImg from "@/assets/products/mrflex-expansion.jpg";
import axialExpansionImg from "@/assets/products/axial-expansion.jpg";
import neumeriaFlangesImg from "@/assets/products/neumeria-flanges.jpg";
import gasketsImg from "@/assets/products/gaskets.jpg";
import wattsPrvImg from "@/assets/products/watts-relief-valve.webp";
import pipeHangersImg from "@/assets/products/pipe-hangers.jpg";
import dielectricUnionImg from "@/assets/products/dielectric-union.jpg";

interface ProductItem {
  brand: string;
  subtitle: string;
  description: string;
  specs: string[];
  image?: string;
}

const products: { category: string; color: string; items: ProductItem[] }[] = [
  {
    category: "Valves Division",
    color: "from-blue-700 to-blue-900",
    items: [
      {
        brand: "CRANE Fluid Systems",
        subtitle: "General Valves — Ball, Gate, Globe, Butterfly & More",
        description:
          "Since 1919, Crane Fluid Systems has been designing and manufacturing a wide range of general valves, including ball, butterfly, check, gate, globe, and press-fit valves. Crane Fluid Systems valves are utilized in plumbing and heating systems worldwide, serving homes, offices, industrial facilities, educational institutions, recreational centers, and hospital buildings.",
        specs: [
          "Full range of General Valves: ball, gate, globe, radiator and Press-Fit valves",
          "WRAS approved Public Health Valves for hot and cold water systems",
          "Thermal circulation valves that assist in preventing Legionnaires Disease",
          "Pressure reducing valves",
          "Compliance with WRAS certification standards",
        ],
        image: craneValvesImg,
      },
      {
        brand: "Mueller Co.",
        subtitle: "Fire Protection Products — OS&Y Gate Valves, Check Valves, Indicator Posts",
        description:
          "Private industry and public institutions rely upon special fire protection systems as required by their insurance underwriters. Mueller Co. provides these end users with a full line of fire protection products compliant to Underwriters Laboratories and Factory Mutual requirements (UL/FM).",
        specs: [
          "Indicator Posts",
          "Check Valves",
          "OS&Y Gate Valves",
          "UL Listed and Factory Mutual (FM) approved",
          "Designed for fire protection systems",
        ],
        image: muellerValvesImg,
      },
      {
        brand: "PEGLER Valve (Aalberts Piping Systems)",
        subtitle: "Integrated Piping & Valve Technology",
        description:
          "Pegler provides the best solutions for integrated piping systems — a range of product lines for connection technology and valve technology, offering the ultimate solution for top-quality integrated piping systems. PMS is an authorized distributor for Pegler Valves in the Kingdom of Saudi Arabia.",
        specs: [
          "1065 Gate Valve (2x female thread) — PN16, ½\" to 2\", ISO7-1 Rc taper / ANSI NPT / BS2779 PT, solid wedge, forged brass body",
          "Ball Valves — full bore, PN40 rated, various sizes",
          "Butterfly Valves — wafer and lug type",
          "Check Valves — swing and spring check",
          "Y-Pattern Strainers",
          "Pressure Reducing Valves",
          "Thermostatic Mixing Valves",
          "Balancing Valves",
          "Zone Valves with Actuators",
          "WRAS, CE, KIWA certified products",
        ],
        image: peglerValvesImg,
      },
      {
        brand: "NIBCO",
        subtitle: "Bronze Gate Valves — Fire Protection",
        description:
          "175 PSI WWP Dezincification Resistant Bronze Gate Valves for fire protection service. Screw-Over Bonnet, Outside Screw and Yoke, Solid Wedge design. 175 PSI/12.1 Bar Non-Shock Cold Water (400 PSI Non-Shock CWP General Service).",
        specs: [
          "UL/ULC Listed & FM Approved",
          "Approved by New York City B.S.A. 143-69-SA",
          "Sizes: ½\" to 2\"",
          "Body: Bronze ASTM B62",
          "Stem: Silicon Bronze ASTM B371 Alloy C69430",
          "Wedge: Bronze ASTM B62",
          "Packing: Non-Asbestos Aramid Fibers with Graphite",
          "Working Pressure: 175 PSI (12.1 Bar) non-shock cold water",
          "NPT x NPT connections",
        ],
        image: nibcoValveImg,
      },
    ],
  },
  {
    category: "Measurement Technology",
    color: "from-slate-700 to-slate-900",
    items: [
      {
        brand: "WIKA",
        subtitle: "Pressure, Temperature & Level Measurement Solutions",
        description:
          "Over the past 75 years, WIKA has established a reputation as a renowned partner and competent specialist in the field of measurement technology. Through steadily increasing efficiency, innovative technologies are employed in the development of new products and system solutions. The reliability of WIKA's products and its readiness to tackle market challenges have been key factors in achieving a leading position in the global market.",
        specs: [
          "Pressure gauges — all ranges, stainless steel & brass",
          "Temperature gauges and thermometers",
          "Level measurement instruments",
          "Transmitters and sensors",
          "Calibration instruments",
          "Process instrumentation",
        ],
        image: wikaGaugesImg,
      },
    ],
  },
  {
    category: "Pipes & Fittings Division",
    color: "from-navy-DEFAULT to-navy-dark",
    items: [
      {
        brand: "HITACHI METALS, LTD — Gourd Brand",
        subtitle: "Class 150 Malleable Iron Pipe Fittings",
        description:
          "Gourd Brand malleable iron pipe fittings are manufactured by Hitachi Metals, Ltd., the leading manufacturer of malleable iron pipe fittings in the world with a century of experience. The Gourd Brand has lived up to its reputation for excellence in quality, variety, and punctual delivery, known the world over.",
        specs: [
          "Class 150 threaded fittings — Black and Galvanized",
          "Class 300 fittings available",
          "90° Elbows (Banded Equal & Reducing), 45° Elbows",
          "Tees (Equal & Reducing), Crosses",
          "Couplings (Full & Half), Caps, Plugs, Unions",
          "Reducers, Bushings, Nipples",
          "Sizes: 1/8\" to 6\"",
          "Max Working Pressure (Class 150): 20.7 Bar at -29 to 66°C",
          "Thread Types: BSP, NPT available",
        ],
        image: hitachiFittingsImg,
      },
      {
        brand: "BOTH-WELL",
        subtitle: "High Pressure Forged Fittings — Threaded & Socket-Weld",
        description:
          "Ever since its establishment in 1985, BOTH-WELL has been well-recognized among customers worldwide for excellence of Quality and Services. ISO 9001, 14001, 45001, PED certified; approved vendor for Aramco and listed on Approval Supplier Lists of major domestic refineries and petrochemical factories.",
        specs: [
          "Types: Elbow, Tee, Coupling, Half Coupling, Cap, Plug, Bushing, Union, Outlet, Swage Nipple, Bull Plug, Reducer, Street Elbow",
          "End Types: Socket-Weld, Threaded (NPT, PT, BSP), Butt-Welding",
          "Sizes: NPS 1/8\" to 4\" (DN 6 to 100)",
          "Pressure Ratings — Threaded: 2000/3000/6000 Lbs; Socket-Weld: 3000/6000/9000 Lbs",
          "Standards: ASME B16.11, MSS SP-79, 83, 95, 97, BS3799",
          "Materials: ASTM A/SA105, A350 LF2, A182 (F304, F304L, F316, F316L, F321, F5, F9, F11, F22, F44, F51, F91), A312, A234, A403",
          "Carbon Steel, Alloy Steel, Stainless Steel",
        ],
        image: bothwellFittingsImg,
      },
      {
        brand: "BENKAN",
        subtitle: "Butt Weld Fittings",
        description:
          "Benkan Co. Ltd., the world's most renowned manufacturer of high quality Buttweld Fittings with over thirty years of experience. They maintain competitive prices, building credibility, and are continuously improving the effectiveness of their Quality Management System.",
        specs: [
          "Elbows (90°, 45°, LR, SR)",
          "Tees (Equal, Reducing)",
          "Reducers (Concentric, Eccentric)",
          "Caps",
          "Various carbon steel, stainless steel and alloy grades",
        ],
        image: benkanFittingsImg,
      },
      {
        brand: "NATIONAL",
        subtitle: "Grooved Fittings, Mechanical Couplings & Related Products",
        description:
          "National — 'a step up in value, a step down in cost.' An ISO 9001 certified company providing a comprehensive range of grooved piping system components.",
        specs: [
          "Rigid Couplings — Style 2 & Style 5",
          "Flexible Couplings — Style 10, 11, 11L, 12",
          "Snap Lock Coupling — Style 20",
          "Reducing Coupling — Style 25",
          "Grooved Flange — Style 14",
          "Mechanical Branchlets — Style 13, 15, 16",
          "Standard Grooved Fittings (Styles 100, 101, 102, 103, 110, 150) — 90°/45° Elbows, Tees, Crosses",
          "Reducing Tee — Style 115",
          "Concentric Reducer — Style 140; Eccentric Reducer — Style 145",
          "Flange Adapters — Style 190",
          "Grooved End Ball Valve & Butterfly Valve",
          "Stainless Steel Couplings — Style 05S, 12S",
          "Stainless Steel Grooved Fittings — Styles 105S, 106S, 107S",
          "UL Listed, FM Approved",
        ],
        image: nationalGroovedImg,
      },
      {
        brand: "SHURJOINT — Grooved Mechanical Couplings",
        subtitle: "Rigid & Flexible Couplings — ½\" to 104\", 3000+ Components",
        description:
          "With over four decades of experience, Shurjoint is a world leader in mechanical piping components offering 3000+ products from ½\" to 104\" for carbon steel, stainless steel, ductile iron, PVC, HDPE, CPVC, and copper tubing. Applications: HVAC, fire protection, water supply & treatment, oil & gas, chemical, marine, mining, municipal, food processing, desalination, and reverse osmosis.",
        specs: [
          "M07 Quick Install Coupling — fastest grooved coupling installation",
          "Z05 Rigid Coupling — standard rigid grooved coupling",
          "K-9 Rigid Coupling — compact rigid coupling",
          "Z07 Heavy Duty Rigid Coupling — for high-pressure applications",
          "Z07N Heavy Duty Rigid Coupling — extended size range",
          "7771 Standard Rigid Coupling — general purpose rigid",
          "XH-1000 Extra Heavy Rigid Coupling — extreme pressure service",
          "7705 Flexible Coupling — standard flexible joint",
          "7707 Heavy Duty Flexible Coupling — elevated pressure flexible",
          "7707L Large Diameter Coupling — 14\" to 26\" flexible",
          "7706 Reducing Coupling — joins different pipe sizes",
          "G28 Hinged Lever Coupling — lever-action quick connect",
          "C-7 Outlet Coupling — branch outlet",
          "7706-T & 7771-T Transition Couplings — IPS to metric/PE",
          "XH-70EP Extra Heavy Rigid Coupling with EP Gasket",
          "UL Listed and FM Approved products available",
        ],
        image: shurjointCouplingsImg,
      },
      {
        brand: "SHURJOINT — Flange Adapters & Mechanical Tees",
        subtitle: "Grooved-to-Flange Adapters ANSI Class 125/150/300 & Mechanical Tees",
        description:
          "Shurjoint flange adapters and mechanical tees convert grooved piping to flanged connections or add branch outlets without cutting pipe.",
        specs: [
          "7041 Flange Adapter — ANSI Class 125/150, PN10/16, BS 10 Table E",
          "7043 Flange Adapter — ANSI Class 300",
          "7170 Flange Adapter — ANSI Class 125/150 heavy duty",
          "7180 & 7181 Universal Flange Adapters — multi-standard",
          "49 Sandwich Plate",
          "7721 Mechanical Tee — Female Threaded Outlet",
          "M21 Mechanical Tee — Female Threaded Outlet (compact)",
          "7722 Mechanical Tee — Grooved-End Outlet",
          "M22 Mechanical Tee — Grooved-End Outlet (compact)",
          "723 Saddle-Let — branch outlets on existing pipe",
          "Available sizes 1\" to 12\" (25 to 300 mm)",
        ],
        image: shurjointFlangesImg,
      },
      {
        brand: "SHURJOINT — Cast & Wrought Grooved Fittings",
        subtitle: "Ductile Iron, Wrought Steel & Extra Heavy Grooved Fittings — Up to 24\"",
        description:
          "Shurjoint grooved-end fittings meet ASTM F1548 and ANSI/AWWA C606. Ductile iron per ASTM A536 Gr. 65-45-12. Available painted, hot-dip galvanized, or epoxy coated.",
        specs: [
          "7110/7111/7112/7113 Elbows — 90°, 45°, 22.5°, 11.25° standard radius",
          "7120 Tee, 7135 Cross, 7130 Lateral",
          "7121 Reducing Tee & 7125 Bullhead Tee",
          "7150 Concentric Reducer & 7151 Eccentric Reducer",
          "7160/7160T Caps; 7160P/7160H Cap & Dome End Cap",
          "7110LR/7111LR Long Radius Elbows & 7137 True-Y",
          "850/851/853 Sprinkler Hubs; 7114/7122/7133 Hydrant Elbow & Tees",
          "Wrought: W110LR, W111LR, W120, W121, W150, W151, W135, W137",
          "Long radius wrought elbows: L90/L60/L45/L30/L22/L11 in 3D, 5D, 6D",
          "Extra Heavy: 10EP/11EP/20EP/35EP/22EP elbows, tees & cross",
          "Sizes: 1\" to 24\" (25 to 600 mm)",
        ],
        image: shurjointFittingsImg,
      },
      {
        brand: "SHURJOINT — Stainless Steel Series",
        subtitle: "SS Grooved Couplings, Fittings, Flange Adapters, Ball & Butterfly Valves — 1\" to 24\"",
        description:
          "Shurjoint stainless steel grooved components in CF8 (304) and CF8M (316) for general service, plus specialty alloys for reverse osmosis and desalination. Sizes 1\" to 24\".",
        specs: [
          "SS-5 / SS-7 Rigid Couplings — standard stainless rigid",
          "SS-7X Rigid Coupling — extra heavy, 10\" to 24\"",
          "SS-8 / SS-8X Flexible Couplings — standard and extra heavy",
          "SS-1200 High Pressure Flexible Coupling",
          "SS-28 Hinged Lever Coupling",
          "SS-10/SS-11/SS-20/SS-60 — 90° Elbow, 45° Elbow, Tee, Cap",
          "SS-21 Reducing Tee & SS-50 Concentric Reducer",
          "SS-41 / SS-80 Flange Adapters",
          "SS-723 Mechanical Tee & SS-726 Y-Strainer",
          "SJ-600L / SJ-600W Stainless Ball Valves",
          "SJ-400 Stainless Butterfly Valves & SJ-630 Three Port Ball Valve",
          "Specialty alloys: CK3MCuN, CE8MN, CD3MN, CE3MN for desalination/RO",
          "Grades: CF8 (J92600, AISI 304) and CF8M (J92900, AISI 316)",
        ],
        image: shurjointSSImg,
      },
      {
        brand: "SHURJOINT — Valves & Flow Control Components",
        subtitle: "Butterfly, Ball, Check Valves, Strainers & Expansion Joints",
        description:
          "Shurjoint grooved-end valves install 3–4× faster than flanged equivalents. Full range from butterfly to check valves, suction diffusers, strainers, and expansion joints.",
        specs: [
          "SJ-200 Low-Profile Butterfly Valve — 232 psi / 1600 kPa, 2\" to 12\", 316 SS disc, oil & gas/mining service",
          "SJ-300N-L Butterfly Valve — lever operated, EPDM liner",
          "SJ-300N-W Butterfly Valve — gear operated for large diameters",
          "SJ-300F Butterfly Valve — specifically for fire protection service",
          "SJ-500L / SJ-500W Ball Valves — lever and gear operated full bore",
          "SJ-530 Three Port Ball Valve — diverting/mixing service",
          "SJ-900 Swing Check Valve & SJ-930 Horizontal Swing Check Valve",
          "SJ-915 Dual Disk Check Valve — space-saving dual plate design",
          "RCV Riser Check Valve — fire protection riser",
          "BH-22C Brass Swing Check Valve — small diameter brass",
          "651 Expansion Joint — grooved end, absorbs vibration & thermal movement",
          "725G / 725F Suction Diffuser — cast and fabricated",
          "726 Y-Strainer & 728 T-Strainer",
        ],
        image: shurjointValvesImg,
      },
      {
        brand: "SHURJOINT — Threaded Fittings (Ductile Iron Class 300)",
        subtitle: "UL Listed / FM Approved Threaded Fittings — ½\" to 2½\", 2000 psi rated",
        description:
          "Shurjoint ductile iron Class 300 threaded fittings are 100% air tested underwater. UL Listed and FM Approved. Tested to exceed 6,000 psi hydrostatic pressure. Designed to same dimensions as Class 150 malleable iron but with far superior strength.",
        specs: [
          "Working Pressure: ½\"–1\" = 2000 psi (140 Bar); 1¼\"–2\" = 1500 psi (105 Bar); 2½\" = 1000 psi (70 Bar)",
          "Steam Rating: 300 psi (20 Bar) | Material: Ductile Iron ASTM A536 Gr. 65-45-12",
          "Threads: ANSI B1.20.1 NPT or ISO 7 (BSPT) | Finish: Black or hot-dip galvanized",
          "811/812/813 — 90°, 45°, Street Elbows",
          "814/815 — Equal and Reducing Tees",
          "816/817 — Cross & Coupling",
          "818/819/820/825 — Coupling, Cap & Extension Piece",
          "827/831/830/832 — Hex Bushing, Elbow, Union & Tee",
          "841 Companion Flange",
          "Sizes: ½\" to 2½\" (15 to 65 mm) | UL Listed, FM Approved",
        ],
        image: shurjointThreadedImg,
      },
      {
        brand: "SHURJOINT — Ring Joint, Shouldered & Plain-End Couplings",
        subtitle: "High Pressure Up to 3770 psi — Non-Grooved Pipe Joining Systems",
        description:
          "For pipe that is difficult to groove or where grooving is not practical. Ring joint gaskets provide 2–3× the shearing force of roll-grooved systems. Ideal for mining, oil field, and heavy industry.",
        specs: [
          "R-88 Ring Joint Coupling — 2\" to 7\" and 8\" to 12\"",
          "R-88N 14\"–26\" Ring Joint Coupling",
          "R-88 28\"–96\" Large Diameter Ring Joint Coupling",
          "RH-1000 — 1000 psi Ring Joint Coupling",
          "RX-3000 — 3000 psi Ring Joint Coupling",
          "RX-3770 — 3770 psi (260 Bar) Ring Joint Coupling",
          "Ring Joint Fittings: RJ-10/RJ-11/RJ-20/RJ-60 Elbow, Tee & Cap",
          "RJ-21/RJ-50/RJ-51 Reducing Tee, Concentric & Eccentric Reducer",
          "RJ-70 Flange Adapter",
          "S35 Shouldered Flexible Coupling — Type A weld-on rings, irrigation & dewatering",
          "SD-28A Shouldered Toggle Coupling — quick release",
          "79 Wildcat Plain-End Coupling — no grooving required, mining & oil field service",
        ],
        image: shurjointRingjointImg,
      },
      {
        brand: "SHURJOINT — Copper Tubing Grooved Series",
        subtitle: "Grooved Couplings, Fittings & Valves for Copper Tubing (CTS) — 2\" to 6\"",
        description:
          "The most complete grooved copper tubing system available. No heat or solder required. NSF/ANSI 61 and 372 compliant for potable water. Wrought copper (ASTM B75, 99.9% copper) and lead-free bronze castings.",
        specs: [
          "C305 Rigid Coupling & C306 Reducing Coupling for copper CTS",
          "96 Continuity Clip — maintains electrical continuity across joints",
          "C307 Transition Coupling — copper CTS to IPS pipe",
          "C341 Flange Adapter — grooved copper to flanged connection",
          "C10/C11/C20/C60 — 90° Elbow, 45° Elbow, Tee, Cap in copper",
          "C21/C50/C26 — Reducing Tee, Concentric Reducer",
          "C52/C55/C55T — Concentric Reducer & Transition Adapters",
          "DE30-GG Dielectric Transition Fitting — prevents galvanic corrosion",
          "C723 Mechanical Tee — branch outlet without cutting copper pipe",
          "C726 Y-Strainer & SJ-C300 Butterfly Valve for copper systems",
          "Sizes: 2\" to 6\" (50 to 150 mm) | NSF/ANSI 61 & 372 for potable water",
        ],
        image: shurjointCopperImg,
      },
      {
        brand: "SHURJOINT — HDPE Series",
        subtitle: "HDPE Couplings, Transition Couplings & Flange Adapters — 2\" to 20\" IPS / ISO",
        description:
          "Shurjoint offers a complete series of HDPE couplings and adapters for joining HDPE pipe. HDPE pipe benefits include longer service life, increased flexibility, reduced weight, and superior resistance to corrosion, chemicals, and fatigue. The Shurjoint joining method eliminates the need for costly heat fusion equipment. Designed to join IPS HDPE pipe DR32.5 to 7.3, conforming to ASTM D2513, D3350 and/or ANSI/AWWA C901, and ISO HDPE pipe SDR 9 to 26, conforming to ISO 4427-1/2. Applications: municipal water & wastewater, water distribution & transport, mining, slurry, and general industrial.",
        specs: [
          "H305 HDPE Coupling — 4-bolt housing with machined teeth, leak-tight grip; IPS sizes 2\" to 20\" (O.D. 60.3 to 508 mm); ISO sizes 50mm to 450mm",
          "H305 IPS Weight Range: 5.7 lbs (2\") to 136.0 lbs (20\") | Bolts: ½\" to 1\" diameter",
          "H307 HDPE Transition Coupling — direct transition from HDPE to grooved end steel IPS pipe; sizes 2\" to 12\" IPS / ISO 63mm to 315mm",
          "H312 HDPE Flange Adapter — ANSI Class 125/150 and PN10/16; IPS sizes 3\" to 12\"; ISO sizes 63mm to 315mm",
          "Pressure Ratings (IPS) — PE4710: DR7.3=317psi, DR9=250psi, DR11=200psi, DR13.5=160psi, DR17=125psi, DR21=100psi, DR26=80psi, DR32.5=63psi",
          "Pressure Ratings (IPS) — PE3608/3408: DR7.3=265psi, DR9=200psi, DR11=160psi, DR13.5=130psi, DR17=100psi, DR21=80psi, DR26=65psi, DR32.5=50psi",
          "Pressure Ratings (ISO) — PE100: SDR9=20bar, SDR11=16bar, SDR17=10bar, SDR26=6.3bar | PE80: SDR9=16bar, SDR11=10bar, SDR17=6.3bar, SDR26=4bar",
          "Use silicone-based lubricant (not soap-based) | Wear gloves — machined teeth are sharp",
          "Contoured housing with integral ramps for sliding over obstacles during pipe relocation",
          "Highly restrained joint allows long pipe lengths to be pulled; easy system access by removing a few bolts",
        ],
        image: shurjointHdpeImg,
      },
      {
        brand: "SHURJOINT — AWWA Ductile Iron Series",
        subtitle: "Grooved Couplings & Fittings for AWWA Ductile Iron Pipe — 3\" to 12\"",
        description:
          "Shurjoint AWWA grooved mechanical couplings and fittings for ductile iron pipe per AWWA C606 radius cut groove specifications. Two-piece housing with GapSeal gasket for leak-tight seal.",
        specs: [
          "A505 AWWA Grooved Coupling — standard rigid/flexible AWWA coupling",
          "A507 Transition Coupling — AWWA DI pipe to IPS pipe",
          "A512 Flange Adapter — AWWA DI grooved to flanged connection",
          "A10/A11 — 90° and 45° Elbows for AWWA DI pipe",
          "A20 Tee, A60 Cap",
          "A25 Reducing Tee, A50 Concentric Reducer, A10R Reducing Elbow",
          "Three gasket grades: EPDM, Nitrile, Silicone for different service requirements",
          "Grooved to AWWA C606 Table 2 & 3 Radius Cut Groove Specifications",
          "Sizes: 3\" to 12\" (75 to 300 mm)",
        ],
        image: shurjointAwwaImg,
      },
      {
        brand: "Stainless Steel Fittings",
        subtitle: "Threaded & Butt-Weld Stainless Steel Fittings",
        description:
          "We stock a comprehensive range of stainless steel fittings for demanding industrial applications, including 316L stainless fittings with high approval rates for major construction projects.",
        specs: [
          "Elbows 90°/45°, Nipples, Couplings, Unions",
          "Bushings, Tees, Reducers, Crosses, Plugs, Caps",
          "Class: ANSI 150 Lbs",
          "Materials: ASTM A351 CF8M/304 & CF8/316",
          "Dimensions: ANSI B2.1",
          "Sizes: 1/4\" to 4\" Threaded (BSPT)",
        ],
        image: ssFittingsImg,
      },
      {
        brand: "Copper Fittings & Tubes",
        subtitle: "Copper Pipe Fittings and Seamless Tubes",
        description:
          "Modern technology recognizes copper as the prime material for conveying water. We supply copper tubes and fittings for all kinds of buildings: single-family homes, high-rise apartments, industrial, commercial and office buildings.",
        specs: [
          "Common Types: Elbow 45°/90°, Coupling, Reducer Coupling, Equal Tee, Reducer Tee, Hex Nipple, Plug, Union, Male Adapter, Female Adapter",
          "Size Range: 1/4\" to 8\"",
          "Medical Gas Copper Pipe available",
          "Hard Copper Tubes — Maxflow and Seamless",
          "15mm copper plumbing tubes and custom sizes",
        ],
        image: copperFittingsImg,
      },
      {
        brand: "INTERPIPE",
        subtitle: "Seamless Steel Pipes",
        description:
          "Interpipe is a global producer of steel pipes for all major fields of application — oil & gas exploration and transportation, power generation, mechanical and structural use. They supply pipe products to more than 80 countries in the world through a network of sales offices in Ukraine, Russia, Kazakhstan, Europe, the USA and the Gulf.",
        specs: [
          "Seamless steel pipes for oil & gas exploration",
          "Transportation pipelines",
          "Power generation applications",
          "Mechanical and structural use pipes",
          "Supplied to 80+ countries globally",
        ],
        image: interpipePipesImg,
      },
    ],
  },
  {
    category: "Fire Protection & Switch Division",
    color: "from-red-700 to-red-900",
    items: [
      {
        brand: "POTTER — VSR Waterflow Alarm Switch",
        subtitle: "Vane Type Waterflow Alarm Switch with Retard",
        description:
          "Since 1898, Potter has been committed to holding themselves to the highest standards of excellence. The Model VSR is a vane type waterflow switch for use on wet sprinkler systems. UL Listed and FM Approved for multiple pipe schedules and sizes.",
        specs: [
          "UL Listed for steel pipe schedules 5 through 40, sizes 2\" to 6\"",
          "UL Listed and FM Approved for steel pipe schedules 10 through 40, sizes 2\" to 8\" (50mm to 200mm)",
          "LPC approved sizes 2\" to 8\"",
          "0-90 second field replaceable time delay retard",
          "Two SPDT (Form C) contacts",
          "Contact Ratings: 10.0A at 125/250VAC; 2.0A at 30VDC",
          "Flow Sensitivity: 4-10 GPM (15-38 LPM)",
          "Max Service Pressure: 450 PSI (31 Bar)",
          "NEMA 4/IP54 Rated Enclosure (indoor/outdoor)",
          "Temperature Range: 40°F to 120°F (4.5°C to 49°C)",
          "Models: VSR-2, VSR-2½, VSR-3, VSR-3½, VSR-4, VSR-5, VSR-6, VSR-8",
          "Compliant with NFPA-13, NFPA-13D, NFPA-13R, NFPA-72",
        ],
        image: potterSwitchImg,
      },
    ],
  },
  {
    category: "Expansion Joints",
    color: "from-emerald-700 to-emerald-900",
    items: [
      {
        brand: "MR-FLEX",
        subtitle: "Rubber & Flexible Expansion Joints",
        description:
          "Our Mr. Flex expansion joints are far superior to alternatives in the Saudi Arabian market. While most expansion joints in the Kingdom can only withstand approximately ten bars of pressure, Mr. Flex offers 16 bars of pressure in most of its sizes. Mr. Flex is renowned for its reliability and specifically its durability.",
        specs: [
          "Working pressure up to 16 bar (PN16) in standard sizes",
          "Far superior to competitor products in the Saudi market",
          "Exceptional durability and reliability",
        ],
        image: mrflexExpansionImg,
      },
      {
        brand: "Axial Type Expansion Joints (HLS-60MKD-L)",
        subtitle: "Metal Bellows Axial Expansion Joints — Stainless Steel",
        description:
          "Axial expansion joints absorb expansion axially, caused by the thermal difference of the media inside the pipeline. Designed to absorb lateral movement of 30mm and 60mm. The main part is a stainless steel corrugated bellow.",
        specs: [
          "Design Standards: EN 13445, EN 13480, EN 14917; ASME VIII Div.I, ASME B31.3, ASME B31.1, EJMA",
          "Connection Types: Floating Flanged, Fixed Flanged, Butt-Weld",
          "Bellows Material: Austenitic stainless steels AISI 304/321",
          "Inner Sleeve (Liner): AISI 304/321",
          "Flange Material: St. 37.2 (standard carbon steel, optional stainless)",
          "Nominal Diameter: DN 25 (1\") to DN 5000 (200\")",
          "Working Pressure: PN 16 standard (higher pressure on request)",
          "Working Temperature: -80°C to +427°C (optional: -80°C to +1100°C)",
          "Standard Absorption: HLS-30MKD — ±30mm; HLS-60MKD-L — ±60mm",
          "Custom sizes and absorption values available based on project calculations",
        ],
        image: axialExpansionImg,
      },
      {
        brand: "SS-EXP-JOINT (HLS-60MKD-L)",
        subtitle: "Stainless Steel Expansion Joint — -40/+20mm Absorption",
        description:
          "Stainless steel expansion joint designed for axial absorption of -40mm to +20mm movement in pipeline systems, suitable for thermal expansion in demanding industrial environments.",
        specs: [
          "Axial absorption: -40mm to +20mm",
          "Stainless steel bellows construction",
          "Suitable for demanding industrial thermal expansion applications",
        ],
        image: axialExpansionImg,
      },
    ],
  },
  {
    category: "Flange Division",
    color: "from-purple-700 to-purple-900",
    items: [
      {
        brand: "NEUMERIA",
        subtitle: "Forged Piping Products & Flanges",
        description:
          "Neumeria is a company focused on goods associated with piping, forging products, and pieces under customer drawings made with material grades of all kinds — general engineering steels, stainless steels, and resistant special alloys for extreme working conditions. Their target is obtaining total satisfaction of the customer, collaborating in the definition and execution of projects, anticipating future necessities.",
        specs: [
          "Carbon steel flanges",
          "Stainless steel flanges",
          "Special alloy flanges for extreme conditions",
          "Forged piping products to customer drawings",
          "Full range of ANSI/ASME and DIN standard flanges",
          "Custom fabrication available",
        ],
        image: neumeriaFlangesImg,
      },
    ],
  },
  {
    category: "Gasket Division",
    color: "from-orange-700 to-orange-900",
    items: [
      {
        brand: "Al-Iman Gasket Factory",
        subtitle: "Industrial Gaskets — German Management, International Standards",
        description:
          "Al-Iman Gasket Factory is under German management and has been in active operation since 1988. It has established a renowned name delivering high quality gasket products proven by international standards. Their gaskets have been successfully used for many years by the OIL / GAS / Petrochemical industries including Saudi Aramco.",
        specs: [
          "Produced according to international standards: ASME, BS, DIN",
          "Flat Ring Gaskets, Spiral Wound Gaskets",
          "Ring Type Joint (RTJ) Gaskets",
          "Full Face and Raised Face types",
          "Proven in OIL / GAS / Petrochemical industries",
          "Approved for use in Saudi Aramco projects",
        ],
        image: gasketsImg,
      },
    ],
  },
  {
    category: "Water Solutions — WATTS",
    color: "from-cyan-700 to-cyan-900",
    items: [
      {
        brand: "WATTS",
        subtitle: "Water Products & Pressure Reducing Valves",
        description:
          "Watts is a global leader in quality water solutions for residential, industrial, municipal, and commercial settings. Their family of brands offers one of the most diverse product lines in the world, delivering world-class water-related solutions.",
        specs: [
          "Pressure reducing valves",
          "Backflow preventers",
          "Temperature and pressure relief valves",
          "Water quality products",
          "Drainage solutions",
          "HVAC products",
        ],
        image: wattsPrvImg,
      },
    ],
  },
  {
    category: "Pipe Hangers & Support Systems",
    color: "from-gray-700 to-gray-900",
    items: [
      {
        brand: "Pipe Hangers and Support System",
        subtitle: "Clamps, Hangers & Pipe Support Products",
        description:
          "We supply a comprehensive range of pipe hangers and support system products for all types of piping installations — from residential plumbing to industrial fire protection systems.",
        specs: [
          "Clevis Hangers",
          "Sprinkler Hangers",
          "Pipe Hanger with Lining",
          "Riser Hangers (standard and with lining)",
          "U Strap Hangers (standard and with lining)",
          "U Bolts",
          "Heavy Duty Pipe Hangers",
          "Two Bolt Riser Clamps",
          "Two Bolt Clamps",
          "Two Bolt Lined Clamps",
        ],
        image: pipeHangersImg,
      },
    ],
  },
  {
    category: "Dielectric Unions",
    color: "from-teal-700 to-teal-900",
    items: [
      {
        brand: "Mueller Taiwan — Dielectric Unions",
        subtitle: "High Quality Dielectric Unions for Corrosion Prevention",
        description:
          "With the market saturated with inferior Dielectric Unions, we provide our customers with world-renowned and high-quality Dielectric Unions from Mueller Taiwan. The Taiwanese-based firm has optimized massive production capabilities with several factories preventing accelerated corrosion and deterioration in piping systems.",
        specs: [
          "Prevents accelerated corrosion and deterioration in piping systems",
          "World-renowned quality from Mueller Taiwan",
          "Multiple factory production capabilities",
          "Suitable for water, gas, and general service piping",
        ],
        image: dielectricUnionImg,
      },
    ],
  },
  {
    category: "Shurjoint Technical Reference",
    color: "from-indigo-700 to-indigo-900",
    items: [
      {
        brand: "SHURJOINT — Pipe End Preparation & Roll Grooving Dimensions",
        subtitle: "Roll Grooving Tables for ANSI, BS, AS, ISO, KS, JIS & Large Diameter Pipe",
        description:
          "Shurjoint grooved piping systems require roll or cut grooves processed to pipe ends. Proper groove processing is integral to a secure, leak-tight joint. Shurjoint provides comprehensive grooving dimension tables for all major pipe standards. Roll grooves are applicable to pipe ≤0.375\"/9.5mm wall; heavy wall pipe should use cut-grooves. ERW and galvanized pipe are acceptable with proper surface preparation.",
        specs: [
          "ANSI B36.10 / BS 1387 (M) / AS-1074 (M) — Sizes ¾\" to 24\" per ANSI/AWWA C606-06",
          "ISO/FDIS 6182-12 Table 1 — ISO 4200 plain-end steel tubes: DN25 (33.7mm) to DN300 (328.2mm)",
          "KS D3507 / JIS G3452 Carbon Steel Pipe — 25A (34.0mm) to 200A (216.3mm)",
          "Large Diameter IPS — up to 104\" available",
          "Key dimensions: Gasket Seat A, Gasket Width B, Groove Diameter C, Groove Depth D (ref.), Flare Diameter F",
          "ANSI ¾\" O.D. 26.7mm: A=15.88mm, B=7.14mm, F=23.83mm, min wall 1.65mm",
          "ANSI 2\" O.D. 60.3mm: A=15.88mm, B=8.74mm, F=57.15mm, min wall 1.65mm",
          "ANSI 6\" O.D. 168.3mm: A=15.88mm, B=8.74mm, F=163.96mm, min wall 2.77mm",
          "ANSI 12\" O.D. 323.9mm: A=19.05mm, B=11.91mm, F=318.29mm, min wall 3.96mm",
          "ANSI 24\" O.D. 609.6mm: A=25.40mm, B=12.70mm, F=600.86mm, min wall 5.54mm",
          "ISO DN50 (60.3mm) to DN300 (328.2mm) groove dimensions per ISO/FDIS 6182-12",
          "Square cut end tolerance: max 0.03\" (≤3½\"), 0.045\" (4\"–6\"), 0.060\" (≥8\")",
          "Gasket seating surface A must be free from deep scores; groove diameter C must be uniform — verify with Shurjoint groove gauge",
          "ERW pipe: remove weld beads near pipe ends before grooving",
          "Galvanized pipe: avoid over-grinding; apply rust-prevention coating after grinding",
          "Beveled end pipe acceptable if wall ≤0.375\"/9.5mm and bevel is 37½ ±2½° or 30°",
        ],
      },
      {
        brand: "SHURJOINT — Gasket Selection Guide & UL/FM Fire Protection Ratings",
        subtitle: "Gasket Grade Index, NSF/ANSI 61, IAPMO, UL/FM Pressure Ratings for Fire Protection",
        description:
          "Shurjoint gaskets are engineered to ASTM D2000, AWWA C606, NSF61, and IAPMO standards. The fire protection series covers 600+ components listed/approved by UL, FM, VdS, and LPCB. Minimum working pressure for fire protection is 175 psi (12.3 Bar) per NFPA 13. Gasket grade selection requires careful consideration of temperature, fluid media, concentration, and service continuity.",
        specs: [
          "Grade E (EPDM) Green Stripe: cold & hot water to +230°F (+110°C), water with acid/chlorine, deionized/seawater/wastewater, dilute acids, oil-free air. NOT for petroleum/mineral oils or aromatic hydrocarbons. Range: -30°F to +230°F",
          "Grade EHM (EPDM) Green & Red Stripes: hot water to +250°F (+121°C); Quick Install Couplings only. Range: -30°F to +250°F",
          "Grade T (Nitrile) Orange Stripe: petroleum/mineral/vegetable oils, non-aromatic hydrocarbons, water ≤+150°F. Range: -20°F to +180°F",
          "Grade E-pw (EPDM) Double Green Stripe: potable water (cold +86°F / hot +180°F); UL classified per NSF/ANSI 61 & 372. Range: -30°F to +230°F",
          "EPDM Lube-E (E-A) Violet Stripe: UL-approved pre-lubricated; fire protection industry only",
          "Grade A (White Nitrile) White Gasket: food products, pharmaceutical, cosmetics; FDA approved per CFR Title 21 Part 177.2600. Range: +20°F to +180°F",
          "Grade L (Silicone) Red Gasket: dry hot air without hydrocarbons, high temperature chemical service. Range: -30°F to +350°F (+177°C)",
          "Grade V (Neoprene) Yellow Stripe: hot lubricating oils and certain chemicals. Range: -30°F to +180°F",
          "Grade O (Fluoro-elastomer) Blue Stripe: oxidizing acids, petroleum oils, halogenated hydrocarbons, hydraulic fluids, organic liquids. Range: +20°F to +300°F (+149°C)",
          "Grade M2 (Epichlorohydrin) White Stripe: aromatic fuels at low temperatures and ambient water. Range: -40°F to +160°F (+71°C)",
          "AWWA Grade S (Nitrile) Red Stripe: AWWA ductile iron pipe, petroleum/mineral/vegetable oils, air with oil vapors. Range: -20°F to +180°F",
          "AWWA Grade M (Halogenated Butyl) Brown Stripe: water, mild dilute acids, oil-free air; NSF/ANSI 61 & 372. Range: -20°F to +200°F (+93°C)",
          "GapSeal gaskets recommended for dry pipe, freezer, and vacuum (>10 inHg) applications — use with rigid couplings",
          "UL/FM Fire Protection (Sch.40/STD): 1\"–8\" = 300 psi UL/FM; 8\" XH-1000 (7705H) = 450 psi UL/FM",
          "UL/FM Fire Protection (Sch.10): 1\"–8\" = 300 psi UL/FM; rigid couplings up to 500 psi for select sizes",
          "Bending moment requirements: 2\"=1,559 Nm; 4\"=4,942 Nm; 6\"=9,606 Nm; 8\"=15,326 Nm; 10\"=22,757 Nm; 12\"=31,116 Nm; 14\"=37,217 Nm; 16\"=48,597 Nm",
          "FM minimum pipe schedules: ≤6\" cut groove = Sch.40; ≥8\" cut = Sch.30; ≤2\" roll = Sch.5; ≤6\" roll = Sch.10/thinwall 0.188\"; ≥8\" roll = light wall",
          "CAUTION: EPDM gaskets NOT compatible with steam service; never expose gaskets to temperatures outside ratings; failure to select proper gasket may result in joint leakage or failure",
        ],
      },
      {
        brand: "SHURJOINT — Anchoring, Hangers, Supports & Seismic Bracing",
        subtitle: "NFPA 13 & ANSI B31.1/B31.9 Compliant Hanger Spacing, Riser Support & Sway Bracing",
        description:
          "NFPA 13 defines a flexible coupling as allowing axial displacement, rotation, and ≥1° angular movement (≥0.5° for 8\" and larger). All pipe runs must be adequately suspended by rod hangers or steel angles attached to building structure. Hangers and components must be ferrous.",
        specs: [
          "Flexible coupling typical applications: sprinkler risers, feed mains through walls, seismic zones, pump discharge lines, new connections to existing mains, vibration-prone air/water fire service lines",
          "Hanger location for flexible couplings on straight runs: within 1/6 of span (L) from coupling",
          "Maximum hanger spacing per ANSI B31.1 / B31.9 / NFPA 13 (varies by pipe size and schedule)",
          "Curved pipe runs: additional hangers required; ≤1\" up to 800mm; ≥1¼\" up to 800mm from coupling",
          "Branch lines: hangers max 300mm from branch fitting; short drops/risers max 300mm",
          "Multi-story risers: fix at lowest level and top; weld riser clamps or U-bolts at each floor; one clamp per 3 stories if braced by floor penetration",
          "Sway braces: resilient isolators and heat insulators required; sway brace positions at 1F, 2F, 3F intervals",
          "Adjustable swivel ring rod sizes: up to 2\" = 5/16\" (7.9mm); 2½\"–6\" = 3/8\" (9.5mm); 8\" = ½\" (12.7mm); 10\"–12\" = 5/8\" (15.9mm)",
          "Eye rod sizes: up to 4\" = 3/8\" (9.5mm); 5\"–6\" = ½\" (12.7mm); 10\"–12\" = ¾\" (15.1mm)",
          "Trapeze hangers acceptable for multiple pipe runs suspended from ceiling; steel angle brackets for wall mounting",
        ],
      },
    ],
  },
];

const ProductCard = ({ item }: { item: ProductItem }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-card rounded-2xl border border-border card-shadow hover:elevated-shadow transition-all duration-200 overflow-hidden">
      {/* Product Image */}
      {item.image && (
        <div className="relative overflow-hidden group cursor-pointer bg-white" onClick={() => setExpanded(!expanded)}>
          <img
            src={item.image}
            alt={`${item.brand} products`}
            loading="lazy"
            width={800}
            height={600}
            className="w-full h-72 object-contain p-4 transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      )}

      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="flex-1">
          <div className="font-bold text-foreground text-base mb-1">{item.brand}</div>
          <div className="text-muted-foreground text-sm">{item.subtitle}</div>
        </div>
        {expanded ? (
          <ChevronUp size={20} className="text-primary flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown size={20} className="text-primary flex-shrink-0 mt-1" />
        )}
      </button>
      {expanded && (
        <div className="px-6 pb-6 border-t border-border pt-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
          <div className="font-semibold text-foreground text-sm mb-2">Key Specifications:</div>
          <ul className="space-y-1.5">
            {item.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <main>
      {/* Header */}
      <section className="gradient-primary py-20 text-primary-foreground" aria-label="Products page header">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-3">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Products & Brands
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Comprehensive range of certified mechanical and industrial products from the world's leading manufacturers.
            All products come with full manufacturer certifications and approvals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-muted border-b border-border sticky top-[72px] z-30" aria-label="Filter by category">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              All Categories
            </button>
            {products.map((p) => (
              <button
                key={p.category}
                onClick={() => setActiveCategory(activeCategory === p.category ? null : p.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === p.category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                {p.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background" aria-label="Product catalog">
        <div className="container mx-auto px-4 space-y-16">
          {filtered.map((category) => (
            <div key={category.category} id={category.category.replace(/\s+/g, "-").toLowerCase()}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-10 w-1.5 rounded-full bg-gradient-to-b ${category.color}`} />
                <div>
                  <h2 className="text-2xl font-bold text-primary">{category.category}</h2>
                  <p className="text-muted-foreground text-sm">{category.items.length} product line{category.items.length !== 1 ? "s" : ""}</p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <ProductCard key={item.brand} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Request Quote CTA */}
      <section className="py-16 bg-muted border-t border-border" aria-label="Request a quote">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Need a Quote or Product Information?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contact our team for competitive pricing, availability, and technical specifications on any of our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966551040126"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-lg hover:bg-primary-dark transition-colors"
            >
              📞 Call: +966 551 040 126
            </a>
            <a
              href="mailto:info@perfectmechanicalsystem.com"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-light transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
