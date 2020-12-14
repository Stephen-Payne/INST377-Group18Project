import sqlite3 from 'sqlite3'

let db = new sqlite3.Database('./server_files/db/database.db')

// Create Tables

const sql = `
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    text TEXT,
    memberId TEXT
  )
`
db.run(sql)

// Insert Members

// db.run(`INSERT INTO members(id) VALUES ("A000374"),("A000370"),("A000055"),("A000371"),("A000372"),("A000376"),("A000367"),("A000369"),("A000377"),("A000375"),("A000378"),("B001291"),("B001298"),("B001307"),("B001306"),("B001299"),("B001282"),("B001300"),("B001270"),("B001281"),("B001287"),("B001301"),("B001292"),("B001302"),("B001257"),("B001311"),("B001250"),("B000490"),("B000574"),("B001303"),("B001278"),("B001295"),("B001296"),("B000755"),("B001308"),("B001274"),("B001284"),("B001304"),("B001285"),("B001260"),("B001297"),("B001275"),("B001305"),("B001309"),("B001248"),("B001286"),("B001251"),("B001289"),("C000059"),("C001112"),("C001097"),("C001072"),("C001051"),("C001103"),("C001090"),("C001055"),("C001117"),("C001066"),("C001091"),("C000266"),("C001109"),("C001080"),("C001084"),("C001123"),("C001101"),("C001067"),("C001049"),("C001061"),("C001118"),("C001115"),("C000537"),("C001068"),("C001053"),("C001093"),("C001092"),("C001108"),("C001062"),("C001078"),("C001094"),("C000754"),("C001110"),("C001059"),("C001069"),("C001124"),("C001119"),("C001087"),("C001120"),("C001111"),("C001121"),("C001063"),("C000984"),("C001122"),("C001114"),("D000629"),("D000626"),("D000096"),("D000619"),("D000598"),("D000631"),("D000191"),("D000197"),("D000216"),("D000617"),("D000630"),("D000627"),("D000623"),("D000616"),("D000610"),("D000600"),("D000624"),("D000399"),("D000482"),("D000614"),("D000615"),("D000628"),("E000294"),("E000179"),("E000299"),("E000215"),("E000297"),("E000298"),("E000296"),("F000465"),("F000467"),("F000466"),("F000459"),("F000468"),("F000461"),("F000449"),("F000454"),("F000450"),("F000462"),("F000455"),("F000469"),("G000571"),("G000578"),("G000579"),("G000574"),("G000559"),("G000587"),("G000586"),("G000061"),("G000584"),("G000563"),("G000552"),("G000592"),("G000585"),("G000588"),("G000581"),("G000582"),("G000589"),("G000565"),("G000583"),("G000377"),("G000560"),("G000577"),("G000546"),("G000553"),("G000590"),("G000568"),("G000551"),("G000576"),("G000591"),("G000558"),("H001080"),("H001088"),("H001092"),("H001090"),("H001052"),("H001053"),("H000324"),("H001081"),("H001064"),("H001082"),("H001056"),("H001071"),("H001077"),("H001038"),("H001087"),("H001072"),("H001047"),("H001065"),("H001074"),("H001083"),("H001066"),("H001085"),("H000874"),("H001067"),("H001068"),("H001058"),("H001048"),("H001073"),("J000032"),("J000020"),("J000298"),("J000294"),("J000299"),("J000301"),("J000292"),("J000126"),("J000288"),("J000255"),("J000289"),("J000295"),("J000302"),("K000009"),("K000386"),("K000375"),("K000395"),("K000385"),("K000376"),("K000388"),("K000379"),("K000389"),("K000380"),("K000381"),("K000394"),("K000188"),("K000210"),("K000362"),("K000378"),("K000368"),("K000391"),("K000382"),("K000392"),("L000585"),("L000578"),("L000588"),("L000564"),("L000559"),("L000560"),("L000557"),("L000566"),("L000581"),("L000586"),("L000590"),("L000551"),("L000589"),("L000593"),("L000592"),("L000287"),("L000582"),("L000563"),("L000565"),("L000397"),("L000576"),("L000583"),("L000579"),("L000480"),("L000491"),("L000569"),("L000570"),("L000591"),("L000562"),("M001203"),("M001185"),("M000087"),("M001158"),("M001179"),("M001198"),("M001184"),("M001199"),("M001163"),("M001209"),("M001208"),("M001165"),("M001157"),("M001177"),("M001143"),("M001200"),("M000312"),("M001156"),("M001180"),("M001159"),("M001166"),("M001187"),("M001137"),("M001188"),("M001204"),("M000687"),("M001205"),("M001201"),("M001194"),("M001195"),("M001160"),("M001206"),("M001196"),("M001207"),("M001190"),("M001210"),("M001202"),("N000002"),("N000179"),("N000015"),("N000191"),("N000189"),("N000188"),("N000190"),("N000147"),("N000181"),("O000171"),("O000172"),("O000168"),("O000173"),("P000601"),("P000034"),("P000609"),("P000613"),("P000614"),("P000096"),("P000604"),("P000197"),("P000615"),("P000593"),("P000605"),("P000608"),("P000258"),("P000616"),("P000597"),("P000610"),("P000607"),("P000618"),("P000599"),("P000617"),("P000523"),("Q000023"),("R000600"),("R000606"),("R000601"),("R000585"),("R000610"),("R000602"),("R000597"),("R000588"),("R000611"),("R000591"),("R000582"),("R000395"),("R000575"),("R000607"),("R000612"),("R000613"),("R000616"),("R000603"),("R000614"),("R000486"),("R000599"),("R000576"),("R000515"),("R000609"),("R000577"),("S001177"),("S001204"),("S001156"),("S001168"),("S001176"),("S001205"),("S001145"),("S001150"),("S001190"),("S001180"),("S001216"),("S001183"),("S001157"),("S001189"),("S000185"),("S000244"),("S000248"),("S001185"),("S001206"),("S000344"),("S001207"),("S000364"),("S001148"),("S001165"),("S001208"),("S001172"),("S000510"),("S000522"),("S001195"),("S001199"),("S001200"),("S001209"),("S001210"),("S001175"),("S001211"),("S001212"),("S001196"),("S001213"),("S001214"),("S001215"),("S001192"),("S001187"),("S001201"),("S001193"),("T000472"),("T000479"),("T000467"),("T000460"),("T000193"),("T000238"),("T000165"),("T000480"),("T000470"),("T000468"),("T000481"),("T000469"),("T000474"),("T000484"),("T000482"),("T000483"),("T000463"),("U000040"),("U000031"),("V000133"),("V000130"),("V000131"),("V000132"),("V000081"),("V000108"),("W000812"),("W000798"),("W000791"),("W000819"),("W000813"),("W000823"),("W000797"),("W000187"),("W000824"),("W000822"),("W000814"),("W000806"),("W000800"),("W000815"),("W000821"),("W000825"),("W000826"),("W000816"),("W000795"),("W000808"),("W000804"),("W000809"),("W000810"),("W000827"),("Y000062"),("Y000065"),("Y000033"),("Z000017")  `)
