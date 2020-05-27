import test from "./test-template.ts";

test({
  validator: "equals",
  args: ["abc"],
  valid: ["abc"],
  invalid: ["Abc", "123"],
});

test({
  validator: "equals",
  args: ["abc ", { trim: true }],
  valid: ["  abc  "],
  invalid: ["Abc", "123"],
});

test({
  validator: "equals",
  args: ["abc", { ignore_case: true }],
  valid: ["abc", "AbC"],
  invalid: ["@bc", "123"],
});

test({
  validator: "isAlpha",
  valid: [
    "abc",
    "ABC",
    "FoObar",
  ],
  invalid: [
    "abc1",
    "  foo  ",
    "",
    "ÄBC",
    "FÜübar",
    "Jön",
    "Heiß",
  ],
});

test({
  validator: "isAlpha",
  args: ["bg-BG"],
  valid: [
    "абв",
    "АБВ",
    "жаба",
    "яГоДа",
  ],
  invalid: [
    "abc1",
    "  foo  ",
    "",
    "ЁЧПС",
    "_аз_обичам_обувки_",
    "ехо!",
  ],
});

test({
  validator: "isAlpha",
  args: ["cs-CZ"],
  valid: [
    "žluťoučký",
    "KŮŇ",
    "Pěl",
    "Ďábelské",
    "ódy",
  ],
  invalid: [
    "ábc1",
    "  fůj  ",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["sk-SK"],
  valid: [
    "môj",
    "ľúbím",
    "mäkčeň",
    "stĹp",
    "vŕba",
    "ňorimberk",
    "ťava",
    "žanéta",
    "Ďábelské",
    "ódy",
  ],
  invalid: [
    "1moj",
    "你好世界",
    "  Привет мир  ",
    "مرحبا العا ",
  ],
});

test({
  validator: "isAlpha",
  args: ["da-DK"],
  valid: [
    "aøå",
    "Ære",
    "Øre",
    "Åre",
  ],
  invalid: [
    "äbc123",
    "ÄBC11",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["nl-NL"],
  valid: [
    "Kán",
    "één",
    "vóór",
    "nú",
    "héél",
  ],
  invalid: [
    "äca ",
    "abcß",
    "Øre",
  ],
});

test({
  validator: "isAlpha",
  args: ["de-DE"],
  valid: [
    "äbc",
    "ÄBC",
    "FöÖbär",
    "Heiß",
  ],
  invalid: [
    "äbc1",
    "  föö  ",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["hu-HU"],
  valid: [
    "árvíztűrőtükörfúrógép",
    "ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP",
  ],
  invalid: [
    "äbc1",
    "  fäö  ",
    "Heiß",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["pt-PT"],
  valid: [
    "palíndromo",
    "órgão",
    "qwértyúão",
    "àäãcëüïÄÏÜ",
  ],
  invalid: [
    "12abc",
    "Heiß",
    "Øre",
    "æøå",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["it-IT"],
  valid: [
    "àéèìîóòù",
    "correnti",
    "DEFINIZIONE",
    "compilazione",
    "metró",
    "pèsca",
    "PÉSCA",
    "genî",
  ],
  invalid: [
    "äbc123",
    "ÄBC11",
    "æøå",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["ar"],
  valid: [
    "أبت",
    "اَبِتَثّجً",
  ],
  invalid: [
    "١٢٣أبت",
    "١٢٣",
    "abc1",
    "  foo  ",
    "",
    "ÄBC",
    "FÜübar",
    "Jön",
    "Heiß",
  ],
});

test({
  validator: "isAlpha",
  args: ["fa-IR"],
  valid: [
    "پدر",
    "مادر",
    "برادر",
    "خواهر",
  ],
  invalid: [
    "فارسی۱۲۳",
    "۱۶۴",
    "abc1",
    "  foo  ",
    "",
    "ÄBC",
    "FÜübar",
    "Jön",
    "Heiß",
  ],
});

test({
  validator: "isAlpha",
  args: ["ku-IQ"],
  valid: [
    "ئؤڤگێ",
    "کوردستان",
  ],
  invalid: [
    "ئؤڤگێ١٢٣",
    "١٢٣",
    "abc1",
    "  foo  ",
    "",
    "ÄBC",
    "FÜübar",
    "Jön",
    "Heiß",
  ],
});

test({
  validator: "isAlpha",
  args: ["nb-NO"],
  valid: [
    "aøå",
    "Ære",
    "Øre",
    "Åre",
  ],
  invalid: [
    "äbc123",
    "ÄBC11",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["pl-PL"],
  valid: [
    "kreską",
    "zamknięte",
    "zwykłe",
    "kropką",
    "przyjęły",
    "święty",
    "Pozwól",
  ],
  invalid: [
    "12řiď ",
    "blé!!",
    "föö!2!",
  ],
});

test({
  validator: "isAlpha",
  args: ["sr-RS"],
  valid: [
    "ШћжЂљЕ",
    "ЧПСТЋЏ",
  ],
  invalid: [
    "řiď ",
    "blé33!!",
    "föö!!",
  ],
});

test({
  validator: "isAlpha",
  args: ["sr-RS@latin"],
  valid: [
    "ŠAabčšđćž",
    "ŠATROĆčđš",
  ],
  invalid: [
    "12řiď ",
    "blé!!",
    "föö!2!",
  ],
});

test({
  validator: "isAlpha",
  args: ["es-ES"],
  valid: [
    "ábcó",
    "ÁBCÓ",
    "dormís",
    "volvés",
    "español",
  ],
  invalid: [
    "äca ",
    "abcß",
    "föö!!",
  ],
});

test({
  validator: "isAlpha",
  args: ["sv-SE"],
  valid: [
    "religiös",
    "stjäla",
    "västgöte",
    "Åre",
  ],
  invalid: [
    "AİıÖöÇçŞşĞğÜüZ",
    "religiös23",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["ar-SY"],
  valid: [
    "أبت",
    "اَبِتَثّجً",
  ],
  invalid: [
    "١٢٣أبت",
    "١٢٣",
    "abc1",
    "  foo  ",
    "",
    "ÄBC",
    "FÜübar",
    "Jön",
    "Heiß",
  ],
});

test({
  validator: "isAlpha",
  args: ["tr-TR"],
  valid: [
    "AİıÖöÇçŞşĞğÜüZ",
  ],
  invalid: [
    "0AİıÖöÇçŞşĞğÜüZ1",
    "  AİıÖöÇçŞşĞğÜüZ  ",
    "abc1",
    "  foo  ",
    "",
    "ÄBC",
    "Heiß",
  ],
});

test({
  validator: "isAlpha",
  args: ["uk-UA"],
  valid: [
    "АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ",
  ],
  invalid: [
    "0AİıÖöÇçŞşĞğÜüZ1",
    "  AİıÖöÇçŞşĞğÜüZ  ",
    "abc1",
    "  foo  ",
    "",
    "ÄBC",
    "Heiß",
    "ЫыЪъЭэ",
  ],
});

test({
  validator: "isAlpha",
  args: ["el-GR"],
  valid: [
    "αβγδεζηθικλμνξοπρςστυφχψω",
    "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
    "άέήίΰϊϋόύώ",
    "ΆΈΉΊΪΫΎΏ",
  ],
  invalid: [
    "0AİıÖöÇçŞşĞğÜüZ1",
    "  AİıÖöÇçŞşĞğÜüZ  ",
    "ÄBC",
    "Heiß",
    "ЫыЪъЭэ",
    "120",
    "jαckγ",
  ],
});

test({
  validator: "isAlpha",
  args: ["he"],
  valid: [
    "בדיקה",
    "שלום",
  ],
  invalid: [
    "בדיקה123",
    "  foo  ",
    "abc1",
    "",
  ],
});

test({
  validator: "isAlpha",
  args: ["is-NOT"],
  error: [
    "abc",
    "ABC",
  ],
});

test({
  validator: "isAlphanumeric",
  valid: [
    "abc123",
    "ABC11",
  ],
  invalid: [
    "abc ",
    "foo!!",
    "ÄBC",
    "FÜübar",
    "Jön",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["en-GB"],
  valid: [
    "abc123",
    "ABC11",
  ],
  invalid: [
    "abc ",
    "foo!!",
    "ÄBC",
    "FÜübar",
    "Jön",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["bg-BG"],
  valid: [
    "абв1",
    "4АБ5В6",
    "жаба",
    "яГоДа2",
    "йЮя",
    "123",
  ],
  invalid: [
    " ",
    "789  ",
    "hello000",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["cs-CZ"],
  valid: [
    "řiť123",
    "KŮŇ11",
  ],
  invalid: [
    "řiď ",
    "blé!!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["sk-SK"],
  valid: [
    "1môj",
    "2ľúbím",
    "3mäkčeň",
    "4stĹp",
    "5vŕba",
    "6ňorimberk",
    "7ťava",
    "8žanéta",
    "9Ďábelské",
    "10ódy",
  ],
  invalid: [
    "1moj!",
    "你好世界",
    "  Привет мир  ",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["da-DK"],
  valid: [
    "ÆØÅ123",
    "Ære321",
    "321Øre",
    "123Åre",
  ],
  invalid: [
    "äbc123",
    "ÄBC11",
    "",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["nl-NL"],
  valid: [
    "Kán123",
    "één354",
    "v4óór",
    "nú234",
    "hé54él",
  ],
  invalid: [
    "1äca ",
    "ab3cß",
    "Øre",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["de-DE"],
  valid: [
    "äbc123",
    "ÄBC11",
  ],
  invalid: [
    "äca ",
    "föö!!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["hu-HU"],
  valid: [
    "0árvíztűrőtükörfúrógép123",
    "0ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP123",
  ],
  invalid: [
    "1időúr!",
    "äbc1",
    "  fäö  ",
    "Heiß!",
    "",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["pt-PT"],
  valid: [
    "palíndromo",
    "2órgão",
    "qwértyúão9",
    "àäãcë4üïÄÏÜ",
  ],
  invalid: [
    "!abc",
    "Heiß",
    "Øre",
    "æøå",
    "",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["it-IT"],
  valid: [
    "123àéèìîóòù",
    "123correnti",
    "DEFINIZIONE321",
    "compil123azione",
    "met23ró",
    "pès56ca",
    "PÉS45CA",
    "gen45î",
  ],
  invalid: [
    "äbc123",
    "ÄBC11",
    "æøå",
    "",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["es-ES"],
  valid: [
    "ábcó123",
    "ÁBCÓ11",
  ],
  invalid: [
    "äca ",
    "abcß",
    "föö!!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["ar"],
  valid: [
    "أبت123",
    "أبتَُِ١٢٣",
  ],
  invalid: [
    "äca ",
    "abcß",
    "föö!!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["fa-IR"],
  valid: [
    "پارسی۱۲۳",
    "۱۴۵۶",
    "مژگان9",
  ],
  invalid: [
    "äca ",
    "abcßة",
    "föö!!",
    "٤٥٦",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["ku-IQ"],
  valid: [
    "ئؤڤگێ١٢٣",
  ],
  invalid: [
    "äca ",
    "abcß",
    "föö!!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["ar-SY"],
  valid: [
    "أبت123",
    "أبتَُِ١٢٣",
  ],
  invalid: [
    "abc ",
    "foo!!",
    "ÄBC",
    "FÜübar",
    "Jön",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["nb-NO"],
  valid: [
    "ÆØÅ123",
    "Ære321",
    "321Øre",
    "123Åre",
  ],
  invalid: [
    "äbc123",
    "ÄBC11",
    "",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["pl-PL"],
  valid: [
    "kre123ską",
    "zam21knięte",
    "zw23ykłe",
    "123",
    "prz23yjęły",
    "świ23ęty",
    "Poz1322wól",
  ],
  invalid: [
    "12řiď ",
    "blé!!",
    "föö!2!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["sr-RS"],
  valid: [
    "ШћжЂљЕ123",
    "ЧПСТ132ЋЏ",
  ],
  invalid: [
    "řiď ",
    "blé!!",
    "föö!!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["sr-RS@latin"],
  valid: [
    "ŠAabčšđćž123",
    "ŠATRO11Ćčđš",
  ],
  invalid: [
    "řiď ",
    "blé!!",
    "föö!!",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["sv-SE"],
  valid: [
    "religiös13",
    "st23jäla",
    "västgöte123",
    "123Åre",
  ],
  invalid: [
    "AİıÖöÇçŞşĞğÜüZ",
    "foo!!",
    "",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["tr-TR"],
  valid: [
    "AİıÖöÇçŞşĞğÜüZ123",
  ],
  invalid: [
    "AİıÖöÇçŞşĞğÜüZ ",
    "foo!!",
    "ÄBC",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["uk-UA"],
  valid: [
    "АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ123",
  ],
  invalid: [
    "éeoc ",
    "foo!!",
    "ÄBC",
    "ЫыЪъЭэ",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["el-GR"],
  valid: [
    "αβγδεζηθικλμνξοπρςστυφχψω",
    "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
    "20θ",
    "1234568960",
  ],
  invalid: [
    "0AİıÖöÇçŞşĞğÜüZ1",
    "  AİıÖöÇçŞşĞğÜüZ  ",
    "ÄBC",
    "Heiß",
    "ЫыЪъЭэ",
    "jαckγ",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["he"],
  valid: [
    "אבג123",
    "שלום11",
  ],
  invalid: [
    "אבג ",
    "לא!!",
    "abc",
    "  foo  ",
  ],
});

test({
  validator: "isAlphanumeric",
  args: ["is-NOT"],
  error: [
    "1234568960",
    "abc123",
  ],
});

test({
  validator: "isAfter",
  args: ["2011-08-03"],
  valid: ["2011-08-04", new Date(2011, 8, 10).toString()],
  invalid: ["2010-07-02", "2011-08-03", new Date(0).toString(), "foo"],
});
test({
  validator: "isAfter",
  valid: ["2100-08-04", new Date(Date.now() + 86400000).toString()],
  invalid: ["2010-07-02", new Date(0).toString()],
});
test({
  validator: "isAfter",
  args: ["2011-08-03"],
  valid: ["2015-09-17"],
  invalid: ["invalid date"],
});
test({
  validator: "isAfter",
  args: ["invalid date"],
  invalid: ["invalid date", "2015-09-17"],
});

test({
  validator: "isAscii",
  valid: [
    "foobar",
    "0987654321",
    "test@example.com",
    "1234abcDEF",
  ],
  invalid: [
    "ｆｏｏbar",
    "ｘｙｚ０９８",
    "１２３456",
    "ｶﾀｶﾅ",
  ],
});

test({
  validator: "isBase32",
  valid: [
    "ZG======",
    "JBSQ====",
    "JBSWY===",
    "JBSWY3A=",
    "JBSWY3DP",
    "JBSWY3DPEA======",
    "K5SWYY3PNVSSA5DPEBXG6ZA=",
    "K5SWYY3PNVSSA5DPEBXG6===",
  ],
  invalid: [
    "12345",
    "",
    "JBSWY3DPtesting123",
    "ZG=====",
    "Z======",
    "Zm=8JBSWY3DP",
    "=m9vYg==",
    "Zm9vYm/y====",
  ],
});

test({
  validator: "isBase64",
  valid: [
    "Zg==",
    "Zm8=",
    "Zm9v",
    "Zm9vYg==",
    "Zm9vYmE=",
    "Zm9vYmFy",
    "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4=",
    "Vml2YW11cyBmZXJtZW50dW0gc2VtcGVyIHBvcnRhLg==",
    "U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==",
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuMPNS1Ufof9EW/M98FNw" +
    "UAKrwflsqVxaxQjBQnHQmiI7Vac40t8x7pIb8gLGV6wL7sBTJiPovJ0V7y7oc0Ye" +
    "rhKh0Rm4skP2z/jHwwZICgGzBvA0rH8xlhUiTvcwDCJ0kc+fh35hNt8srZQM4619" +
    "FTgB66Xmp4EtVyhpQV+t02g6NzK72oZI0vnAvqhpkxLeLiMCyrI416wHm5Tkukhx" +
    "QmcL2a6hNOyu0ixX/x2kSFXApEnVrJ+/IxGyfyw8kf4N2IZpW5nEP847lpfj0SZZ" +
    "Fwrd1mnfnDbYohX2zRptLy2ZUn06Qo9pkG5ntvFEPo9bfZeULtjYzIl6K8gJ2uGZ" +
    "HQIDAQAB",
  ],
  invalid: [
    "12345",
    "",
    "Vml2YW11cyBmZXJtZtesting123",
    "Zg=",
    "Z===",
    "Zm=8",
    "=m9vYg==",
    "Zm9vYmFy====",
  ],
});

test({
  validator: "isBefore",
  args: ["08/04/2011"],
  valid: ["2010-07-02", "2010-08-04", new Date(0).toString()],
  invalid: ["08/04/2011", new Date(2011, 9, 10).toString()],
});
test({
  validator: "isBefore",
  args: [new Date(2011, 7, 4).toString()],
  valid: ["2010-07-02", "2010-08-04", new Date(0).toString()],
  invalid: ["08/04/2011", new Date(2011, 9, 10).toString()],
});
test({
  validator: "isBefore",
  valid: [
    "2000-08-04",
    new Date(0).toString(),
    new Date(Date.now() - 86400000).toString(),
  ],
  invalid: ["2100-07-02", new Date(2217, 10, 10).toString()],
});
test({
  validator: "isBefore",
  args: ["2011-08-03"],
  valid: ["1999-12-31"],
  invalid: ["invalid date"],
});
test({
  validator: "isBefore",
  args: ["invalid date"],
  invalid: ["invalid date", "1999-12-31"],
});

test({
  validator: "isBIC",
  valid: [
    "SBICKEN1345",
    "SBICKEN1",
    "SBICKENY",
    "SBICKEN1YYP",
  ],
  invalid: [
    "SBIC23NXXX",
    "S23CKENXXXX",
    "SBICKENXX",
    "SBICKENXX9",
    "SBICKEN13458",
    "SBICKEN",
  ],
});

test({
  validator: "isBoolean",
  valid: [
    "true",
    "false",
    "0",
    "1",
  ],
  invalid: [
    "1.0",
    "0.0",
    "true ",
    "False",
    "True",
    "yes",
  ],
});

test({
  validator: "isBtcAddress",
  valid: [
    "1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL",
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  ],
  invalid: [
    "4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    "0x56F0B8A998425c53c75C4A303D4eF987533c5597",
    "pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g",
  ],
});

test({
  validator: "isByteLength",
  args: [2],
  valid: ["abc", "de", "abcd", "ｇｍａｉｌ"],
  invalid: ["", "a"],
});
test({
  validator: "isByteLength",
  args: [2, 3],
  valid: ["abc", "de", "ｇ"],
  invalid: ["", "a", "abcd", "ｇｍ"],
});
test({
  validator: "isByteLength",
  args: [0, 0],
  valid: [""],
  invalid: ["ｇ", "a"],
});

test({
  validator: "isCreditCard",
  valid: [
    "375556917985515",
    "36050234196908",
    "4716461583322103",
    "4716-2210-5188-5662",
    "4929 7226 5379 7141",
    "5398228707871527",
    "6283875070985593",
    "6263892624162870",
    "6234917882863855",
    "6234698580215388",
    "6226050967750613",
    "6246281879460688",
    "2222155765072228",
    "2225855203075256",
    "2720428011723762",
    "2718760626256570",
    "6765780016990268",
    "4716989580001715211",
  ],
  invalid: [
    "foo",
    "foo",
    "5398228707871528",
    "2718760626256571",
    "2721465526338453",
    "2220175103860763",
    "375556917985515999999993",
    "899999996234917882863855",
    "prefix6234917882863855",
    "623491788middle2863855",
    "6234917882863855suffix",
    "4716989580001715213",
  ],
});

test({
  validator: "isDataURI",
  valid: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC",
    "   data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC   ",
    "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Crect%20fill%3D%22%2300B1FF%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCBmaWxsPSIjMDBCMUZGIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjwvc3ZnPg==",
    " data:,Hello%2C%20World!",
    " data:,Hello World!",
    " data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D",
    " data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E",
    "data:,A%20brief%20note",
    "data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E",
  ],
  invalid: [
    "dataxbase64",
    "data:HelloWorld",
    "data:,A%20brief%20invalid%20[note",
    "file:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D",
    "data:text/html;charset=,%3Ch1%3EHello!%3C%2Fh1%3E",
    "data:text/html;charset,%3Ch1%3EHello!%3C%2Fh1%3E",
    "data:base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC",
    "",
    "http://wikipedia.org",
    "base64",
    "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC",
  ],
});

test({
  validator: "isDecimal",
  valid: [
    "123",
    "00123",
    "-00123",
    "0",
    "-0",
    "+123",
    "0.01",
    ".1",
    "1.0",
    "-.25",
    "-0",
    "0.0000000000001",
  ],
  invalid: [
    "0,01",
    ",1",
    "1,0",
    "-,25",
    "0,0000000000001",
    "0٫01",
    "٫1",
    "1٫0",
    "-٫25",
    "0٫0000000000001",
    "....",
    " ",
    "",
    "-",
    "+",
    ".",
    "0.1a",
    "a",
    "\n",
  ],
});

// test({
//     validator: 'isDivisibleBy',
//     args: [2],
//     valid: ['2', '4', '100', '1000'],
//     invalid: [
//         '1',
//         '2.5',
//         '101',
//         'foo',
//         '',
//         '2020-01-06T14:31:00.135Z',
//     ],
// });

test({
  validator: "isEmpty",
  valid: [
    "",
  ],
  invalid: [
    " ",
    "foo",
    "3",
  ],
});

test({
  validator: "isEmpty",
  args: [{ ignore_whitespace: false }],
  valid: [
    "",
  ],
  invalid: [
    " ",
    "foo",
    "3",
  ],
});

test({
  validator: "isEmpty",
  args: [{ ignore_whitespace: true }],
  valid: [
    "",
    " ",
  ],
  invalid: [
    "foo",
    "3",
  ],
});

test({
  validator: "isEthereumAddress",
  valid: [
    "0x0000000000000000000000000000000000000001",
    "0x683E07492fBDfDA84457C16546ac3f433BFaa128",
    "0x88dA6B6a8D3590e88E0FcadD5CEC56A7C9478319",
    "0x8a718a84ee7B1621E63E680371e0C03C417cCaF6",
    "0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b42",
  ],
  invalid: [
    "0xGHIJK05pwm37asdf5555QWERZCXV2345AoEuIdHt",
    "0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b422222",
    "0xFCb5AFB808b5679b4911230Aa41FfCD0cd33",
    "0b0110100001100101011011000110110001101111",
    "683E07492fBDfDA84457C16546ac3f433BFaa128",
    "1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU",
  ],
});

test({
  validator: "isIP",
  valid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "::1",
    "2001:db8:0000:1:1:1:1:1",
    "2001:41d0:2:a141::1",
    "::ffff:127.0.0.1",
    "::0000",
    "0000::",
    "1::",
    "1111:1:1:1:1:1:1:1",
    "fe80::a6db:30ff:fe98:e946",
    "::",
    "::ffff:127.0.0.1",
    "0:0:0:0:0:ffff:127.0.0.1",
  ],
  invalid: [
    "abc",
    "256.0.0.0",
    "0.0.0.256",
    "26.0.0.256",
    "0200.200.200.200",
    "200.0200.200.200",
    "200.200.0200.200",
    "200.200.200.0200",
    "::banana",
    "banana::",
    "::1banana",
    "::1::",
    "1:",
    ":1",
    ":1:1:1::2",
    "1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1",
    "::11111",
    "11111:1:1:1:1:1:1:1",
    "2001:db8:0000:1:1:1:1::1",
    "0:0:0:0:0:0:ffff:127.0.0.1",
    "0:0:0:0:ffff:127.0.0.1",
  ],
});
test({
  validator: "isIP",
  args: [4],
  valid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "255.0.0.1",
    "0.0.1.1",
  ],
  invalid: [
    "::1",
    "2001:db8:0000:1:1:1:1:1",
    "::ffff:127.0.0.1",
    "137.132.10.01",
    "0.256.0.256",
    "255.256.255.256",
  ],
});
test({
  validator: "isIP",
  args: [6],
  valid: [
    "::1",
    "2001:db8:0000:1:1:1:1:1",
    "::ffff:127.0.0.1",
    "fe80::1234%1",
    "ff08::9abc%10",
    "ff08::9abc%interface10",
    "ff02::5678%pvc1.3",
  ],
  invalid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "::ffff:287.0.0.1",
    "%",
    "fe80::1234%",
    "fe80::1234%1%3%4",
    "fe80%fe80%",
  ],
});
test({
  validator: "isIP",
  args: [10],
  valid: [],
  invalid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "::1",
    "2001:db8:0000:1:1:1:1:1",
  ],
});

test({
  validator: "isIPRange",
  valid: [
    "127.0.0.1/24",
    "0.0.0.0/0",
    "255.255.255.0/32",
  ],
  invalid: [
    "127.200.230.1/35",
    "127.200.230.1/-1",
    "1.1.1.1/011",
    "::1/64",
    "1.1.1/24.1",
    "1.1.1.1/01",
    "1.1.1.1/1.1",
    "1.1.1.1/1.",
    "1.1.1.1/1/1",
    "1.1.1.1",
  ],
});

test({
  validator: "isISRC",
  valid: [
    "USAT29900609",
    "GBAYE6800011",
    "USRC15705223",
    "USCA29500702",
  ],
  invalid: [
    "USAT2990060",
    "SRC15705223",
    "US-CA29500702",
    "USARC15705223",
  ],
});

test({
  validator: "isISSN",
  valid: [
    "0378-5955",
    "0000-0000",
    "2434-561X",
    "2434-561x",
    "01896016",
    "20905076",
  ],
  invalid: [
    "0378-5954",
    "0000-0001",
    "0378-123",
    "037-1234",
    "0",
    "2434-561c",
    "1684-5370",
    "19960791",
    "",
  ],
});
test({
  validator: "isISSN",
  args: [{ case_sensitive: true }],
  valid: [
    "2434-561X",
    "2434561X",
    "0378-5955",
    "03785955",
  ],
  invalid: [
    "2434-561x",
    "2434561x",
  ],
});
test({
  validator: "isISSN",
  args: [{ require_hyphen: true }],
  valid: [
    "2434-561X",
    "2434-561x",
    "0378-5955",
  ],
  invalid: [
    "2434561X",
    "2434561x",
    "03785955",
  ],
});
test({
  validator: "isISSN",
  args: [{ case_sensitive: true, require_hyphen: true }],
  valid: [
    "2434-561X",
    "0378-5955",
  ],
  invalid: [
    "2434-561x",
    "2434561X",
    "2434561x",
    "03785955",
  ],
});

test({
  validator: "isISRC",
  valid: [
    "USAT29900609",
    "GBAYE6800011",
    "USRC15705223",
    "USCA29500702",
  ],
  invalid: [
    "USAT2990060",
    "SRC15705223",
    "US-CA29500702",
    "USARC15705223",
  ],
});

test({
  validator: "isFloat",
  valid: [
    "123",
    "123.",
    "123.123",
    "-123.123",
    "-0.123",
    "+0.123",
    "0.123",
    ".0",
    "-.123",
    "+.123",
    "01.123",
    "-0.22250738585072011e-307",
  ],
  invalid: [
    "+",
    "-",
    "  ",
    "",
    ".",
    "foo",
    "20.foo",
    "2020-01-06T14:31:00.135Z",
  ],
});

test({
  validator: "isFloat",
  args: [{ locale: "en-AU" }],
  valid: [
    "123",
    "123.",
    "123.123",
    "-123.123",
    "-0.123",
    "+0.123",
    "0.123",
    ".0",
    "-.123",
    "+.123",
    "01.123",
    "-0.22250738585072011e-307",
  ],
  invalid: [
    "123٫123",
    "123,123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFloat",
  args: [{ locale: "de-DE" }],
  valid: [
    "123",
    "123,",
    "123,123",
    "-123,123",
    "-0,123",
    "+0,123",
    "0,123",
    ",0",
    "-,123",
    "+,123",
    "01,123",
    "-0,22250738585072011e-307",
  ],
  invalid: [
    "123.123",
    "123٫123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFloat",
  args: [{ locale: "ar-JO" }],
  valid: [
    "123",
    "123٫",
    "123٫123",
    "-123٫123",
    "-0٫123",
    "+0٫123",
    "0٫123",
    "٫0",
    "-٫123",
    "+٫123",
    "01٫123",
    "-0٫22250738585072011e-307",
  ],
  invalid: [
    "123,123",
    "123.123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFloat",
  args: [{
    min: 3.7,
  }],
  valid: [
    "3.888",
    "3.92",
    "4.5",
    "50",
    "3.7",
    "3.71",
  ],
  invalid: [
    "3.6",
    "3.69",
    "3",
    "1.5",
    "a",
  ],
});
test({
  validator: "isFloat",
  args: [{
    min: 0.1,
    max: 1.0,
  }],
  valid: [
    "0.1",
    "1.0",
    "0.15",
    "0.33",
    "0.57",
    "0.7",
  ],
  invalid: [
    "0",
    "0.0",
    "a",
    "1.3",
    "0.05",
    "5",
  ],
});
test({
  validator: "isFloat",
  args: [{
    gt: -5.5,
    lt: 10,
  }],
  valid: [
    "9.9",
    "1.0",
    "0",
    "-1",
    "7",
    "-5.4",
  ],
  invalid: [
    "10",
    "-5.5",
    "a",
    "-20.3",
    "20e3",
    "10.00001",
  ],
});
test({
  validator: "isFloat",
  args: [{
    min: -5.5,
    max: 10,
    gt: -5.5,
    lt: 10,
  }],
  valid: [
    "9.99999",
    "-5.499999",
  ],
  invalid: [
    "10",
    "-5.5",
  ],
});
test({
  validator: "isFloat",
  args: [{
    locale: "de-DE",
    min: 3.1,
  }],
  valid: [
    "123",
    "123,",
    "123,123",
    "3,1",
    "3,100001",
  ],
  invalid: [
    "3,09",
    "-,123",
    "+,123",
    "01,123",
    "-0,22250738585072011e-307",
    "-123,123",
    "-0,123",
    "+0,123",
    "0,123",
    ",0",
    "123.123",
    "123٫123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFullWidth",
  valid: [
    "ひらがな・カタカナ、．漢字",
    "３ー０　ａ＠ｃｏｍ",
    "Ｆｶﾀｶﾅﾞﾬ",
    "Good＝Parts",
  ],
  invalid: [
    "abc",
    "abc123",
    '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
  ],
});

test({
  validator: "isHalfWidth",
  valid: [
    '"#$%&()<>/+=-_? ~^|.,@`{}[]',
    "l-btn_02--active",
    "abc123い",
    "ｶﾀｶﾅﾞﾬ￩",
  ],
  invalid: [
    "あいうえお",
    "００１１",
  ],
});

["md5", "md4", "ripemd128", "tiger128"].forEach((algorithm) => {
  test({
    validator: "isHash",
    args: [algorithm],
    valid: [
      "d94f3f016ae679c3008de268209132f2",
      "751adbc511ccbe8edf23d486fa4581cd",
      "88dae00e614d8f24cfd5a8b3f8002e93",
      "0bf1c35032a71a14c2f719e5a14c1e96",
      "d94f3F016Ae679C3008de268209132F2",
      "88DAE00e614d8f24cfd5a8b3f8002E93",
    ],
    invalid: [
      "q94375dj93458w34",
      "39485729348",
      "%&FHKJFvk",
      "KYT0bf1c35032a71a14c2f719e5a1",
    ],
  });
});

["crc32", "crc32b"].forEach((algorithm) => {
  test({
    validator: "isHash",
    args: [algorithm],
    valid: [
      "d94f3f01",
      "751adbc5",
      "88dae00e",
      "0bf1c350",
      "88DAE00e",
      "751aDBc5",
    ],
    invalid: [
      "KYT0bf1c35032a71a14c2f719e5a14c1",
      "q94375dj93458w34",
      "q943",
      "39485729348",
      "%&FHKJFvk",
    ],
  });
});

["sha1", "tiger160", "ripemd160"].forEach((algorithm) => {
  test({
    validator: "isHash",
    args: [algorithm],
    valid: [
      "3ca25ae354e192b26879f651a51d92aa8a34d8d3",
      "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d",
      "beb8c3f30da46be179b8df5f5ecb5e4b10508230",
      "efd5d3b190e893ed317f38da2420d63b7ae0d5ed",
      "AAF4c61ddCC5e8a2dabede0f3b482cd9AEA9434D",
      "3ca25AE354e192b26879f651A51d92aa8a34d8D3",
    ],
    invalid: [
      "KYT0bf1c35032a71a14c2f719e5a14c1",
      "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
      "q94375dj93458w34",
      "39485729348",
      "%&FHKJFvk",
    ],
  });
});

test({
  validator: "isHash",
  args: ["sha256"],
  valid: [
    "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
    "1d996e033d612d9af2b44b70061ee0e868bfd14c2dd90b129e1edeb7953e7985",
    "80f70bfeaed5886e33536bcfa8c05c60afef5a0e48f699a7912d5e399cdcc441",
    "579282cfb65ca1f109b78536effaf621b853c9f7079664a3fbe2b519f435898c",
    "2CF24dba5FB0a30e26E83b2AC5b9E29E1b161e5C1fa7425E73043362938b9824",
    "80F70bFEAed5886e33536bcfa8c05c60aFEF5a0e48f699a7912d5e399cdCC441",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});
test({
  validator: "isHash",
  args: ["sha384"],
  valid: [
    "3fed1f814d28dc5d63e313f8a601ecc4836d1662a19365cbdcf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31",
    "b330f4e575db6e73500bd3b805db1a84b5a034e5d21f0041d91eec85af1dfcb13e40bb1c4d36a72487e048ac6af74b58",
    "bf547c3fc5841a377eb1519c2890344dbab15c40ae4150b4b34443d2212e5b04aa9d58865bf03d8ae27840fef430b891",
    "fc09a3d11368386530f985dacddd026ae1e44e0e297c805c3429d50744e6237eb4417c20ffca8807b071823af13a3f65",
    "3fed1f814d28dc5d63e313f8A601ecc4836d1662a19365CBDCf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31",
    "b330f4E575db6e73500bd3b805db1a84b5a034e5d21f0041d91EEC85af1dfcb13e40bb1c4d36a72487e048ac6af74b58",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});
test({
  validator: "isHash",
  args: ["sha512"],
  valid: [
    "9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043",
    "83c586381bf5ba94c8d9ba8b6b92beb0997d76c257708742a6c26d1b7cbb9269af92d527419d5b8475f2bb6686d2f92a6649b7f174c1d8306eb335e585ab5049",
    "45bc5fa8cb45ee408c04b6269e9f1e1c17090c5ce26ffeeda2af097735b29953ce547e40ff3ad0d120e5361cc5f9cee35ea91ecd4077f3f589b4d439168f91b9",
    "432ac3d29e4f18c7f604f7c3c96369a6c5c61fc09bf77880548239baffd61636d42ed374f41c261e424d20d98e320e812a6d52865be059745fdb2cb20acff0ab",
    "9B71D224bd62f3785D96d46ad3ea3d73319bFBC2890CAAdae2dff72519673CA72323C3d99ba5c11d7c7ACC6e14b8c5DA0c4663475c2E5c3adef46f73bcDEC043",
    "432AC3d29E4f18c7F604f7c3c96369A6C5c61fC09Bf77880548239baffd61636d42ed374f41c261e424d20d98e320e812a6d52865be059745fdb2cb20acff0ab",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});
test({
  validator: "isHash",
  args: ["tiger192"],
  valid: [
    "6281a1f098c5e7290927ed09150d43ff3990a0fe1a48267c",
    "56268f7bc269cf1bc83d3ce42e07a85632394737918f4760",
    "46fc0125a148788a3ac1d649566fc04eb84a746f1a6e4fa7",
    "7731ea1621ae99ea3197b94583d034fdbaa4dce31a67404a",
    "6281A1f098c5e7290927ed09150d43ff3990a0fe1a48267C",
    "46FC0125a148788a3AC1d649566fc04eb84A746f1a6E4fa7",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});

test({
  validator: "isHexadecimal",
  valid: [
    "deadBEEF",
    "ff0044",
  ],
  invalid: [
    "abcdefg",
    "",
    "..",
    "0xa2h",
    "0xa20x",
    "0x0123456789abcDEFq",
    "0hfedCBA9876543210q",
    "01234q56789abcDEF",
  ],
});

test({
  validator: "isHexColor",
  valid: [
    "#ff0000ff",
    "#ff0034",
    "#CCCCCC",
    "0f38",
    "fff",
    "#f00",
  ],
  invalid: [
    "#ff",
    "fff0a",
    "#ff12FG",
  ],
});

test({
  validator: "isHSL",
  valid: [
    "hsl(360,0000000000100%,000000100%)",
    "hsl(000010, 00000000001%, 00000040%)",
    "HSL(00000,0000000000100%,000000100%)",
    "hsL(0, 0%, 0%)",
    "hSl(  360  , 100%  , 100%   )",
    "Hsl(  00150  , 000099%  , 01%   )",
    "hsl(01080, 03%, 4%)",
    "hsl(-540, 03%, 4%)",
    "hsla(+540, 03%, 4%)",
    "hsla(+540, 03%, 4%, 500)",
    "hsl(+540deg, 03%, 4%, 500)",
    "hsl(+540gRaD, 03%, 4%, 500)",
    "hsl(+540.01e-98rad, 03%, 4%, 500)",
    "hsl(-540.5turn, 03%, 4%, 500)",
    "hsl(+540, 03%, 4%, 500e-01)",
    "hsl(+540, 03%, 4%, 500e+80)",
    "hsl(4.71239rad, 60%, 70%)",
    "hsl(270deg, 60%, 70%)",
    "hsl(200, +.1%, 62%, 1)",
    "hsl(270 60% 70%)",
    "hsl(200, +.1e-9%, 62e10%, 1)",
    "hsl(.75turn, 60%, 70%)",
    // 'hsl(200grad+.1%62%/1)', //supposed to pass, but need to handle delimiters
    "hsl(200grad +.1% 62% / 1)",
    "hsl(270, 60%, 50%, .15)",
    "hsl(270, 60%, 50%, 15%)",
    "hsl(270 60% 50% / .15)",
    "hsl(270 60% 50% / 15%)",
  ],
  invalid: [
    "hsl (360,0000000000100%,000000100%)",
    "hsl(0260, 100 %, 100%)",
    "hsl(0160, 100%, 100%, 100 %)",
    "hsl(-0160, 100%, 100a)",
    "hsl(-0160, 100%, 100)",
    "hsl(-0160 100%, 100%, )",
    "hsl(270 deg, 60%, 70%)",
    "hsl( deg, 60%, 70%)",
    "hsl(, 60%, 70%)",
    "hsl(3000deg, 70%)",
  ],
});

test({
  validator: "isIn",
  args: ["foobar"],
  valid: ["foo", "bar", "foobar", ""],
  invalid: ["foobarbaz", "barfoo"],
});
test({
  validator: "isIn",
  args: [["foo", "bar"]],
  valid: ["foo", "bar"],
  invalid: ["foobar", "barfoo", ""],
});
test({
  validator: "isIn",
  args: [["1", "2", "3"]],
  valid: ["1", "2", "3"],
  invalid: ["4", ""],
});
test({
  validator: "isIn",
  args: [["1", "2", "3", { foo: "bar" }, () => 5, { toString: "test" }]],
  valid: ["1", "2", "3", ""],
  invalid: ["4"],
});
test({ validator: "isIn", invalid: ["foo", ""] });

test({
  validator: "isIn",
  args: [{ foo: 1, bar: 2, foobar: 3 }],
  valid: ["foo", "bar", "foobar"],
  invalid: ["foobarbaz", "barfoo", ""],
});
test({
  validator: "isIn",
  args: [{ 1: 3, 2: 0, 3: 1 }],
  valid: ["1", "2", "3"],
  invalid: ["4", ""],
});

test({
  validator: "isInt",
  valid: [
    "65535",
    "13",
    "123",
    "0",
    "-0",
    "+1",
    "01",
    "-01",
    "000",
  ],
  invalid: [
    "100e10",
    "123.123",
    "   ",
    "",
  ],
});

test({
  validator: "isInt",
  args: [{ allow_leading_zeroes: false }],
  valid: [
    "13",
    "123",
    "0",
    "123",
    "-0",
    "+1",
  ],
  invalid: [
    "01",
    "-01",
    "000",
    "100e10",
    "123.123",
    "   ",
    "",
  ],
});

test({
  validator: "isInt",
  args: [{ allow_leading_zeroes: true }],
  valid: [
    "13",
    "123",
    "0",
    "123",
    "-0",
    "+1",
    "01",
    "-01",
    "000",
    "-000",
    "+000",
  ],
  invalid: [
    "100e10",
    "123.123",
    "   ",
    "",
  ],
});

test({
  validator: "isInt",
  args: [{
    min: 10,
  }],
  valid: [
    "15",
    "80",
    "99",
  ],
  invalid: [
    "9",
    "6",
    "3.2",
    "a",
  ],
});

test({
  validator: "isInt",
  args: [{
    min: 10,
    max: 15,
  }],
  valid: [
    "15",
    "11",
    "13",
  ],
  invalid: [
    "9",
    "2",
    "17",
    "3.2",
    "-1",
    "33",
    "a",
  ],
});

test({
  validator: "isInt",
  args: [{
    gt: 10,
    lt: 15,
  }],
  valid: [
    "14",
    "11",
    "13",
  ],
  invalid: [
    "10",
    "15",
    "17",
    "3.2",
    "33",
    "a",
  ],
});

test({
  validator: "isJSON",
  valid: [
    '{ "key": "value" }',
    "{}",
  ],
  invalid: [
    '{ key: "value" }',
    "{ 'key': 'value' }",
    "null",
    "1234",
    "false",
    '"nope"',
  ],
});

test({
  validator: "isJWT",
  valid: [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2xvciI6InNpdCIsImFtZXQiOlsibG9yZW0iLCJpcHN1bSJdfQ.rRpe04zbWbbJjwM43VnHzAboDzszJtGrNsUxaqQ-GQ8",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqb2huIjp7ImFnZSI6MjUsImhlaWdodCI6MTg1fSwiamFrZSI6eyJhZ2UiOjMwLCJoZWlnaHQiOjI3MH19.YRLPARDmhGMC3BBk_OhtwwK21PIkVCqQe8ncIRPKo-E",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ", // No signature
  ],
  invalid: [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "$Zs.ewu.su84",
    "ks64$S/9.dy$§kz.3sd73b",
  ],
});

test({
  validator: "isLatLong",
  valid: [
    "(-17.738223, 85.605469)",
    "(-12.3456789, +12.3456789)",
    "(-60.978437, -0.175781)",
    "(77.719772, -37.529297)",
    "(7.264394, 165.058594)",
    "0.955766, -19.863281",
    "(31.269161,164.355469)",
    "+12.3456789, -12.3456789",
    "-15.379543, -137.285156",
    "(11.770570, -162.949219)",
    "-55.034319, 113.027344",
    "58.025555, 36.738281",
    "55.720923,-28.652344",
    "-90.00000,-180.00000",
    "(-71, -146)",
    "(-71.616864, -146.616864)",
    "-0.55, +0.22",
    "90, 180",
    "+90, -180",
    "-90,+180",
    "90,180",
    "0, 0",
  ],
  invalid: [
    "(020.000000, 010.000000000)",
    "89.9999999989, 360.0000000",
    "90.1000000, 180.000000",
    "+90.000000, -180.00001",
    "090.0000, 0180.0000",
    "126, -158",
    "(-126.400010, -158.400010)",
    "-95, -96",
    "-95.738043, -96.738043",
    "137, -148",
    "(-137.5942, -148.5942)",
    "(-120, -203)",
    "(-119, -196)",
    "+119.821728, -196.821728",
    "(-110, -223)",
    "-110.369532, 223.369532",
    "(-120.969949, +203.969949)",
    "-116, -126",
    "-116.894222, -126.894222",
    "-112, -160",
    "-112.96381, -160.96381",
    "-90., -180.",
    "+90.1, -180.1",
    "(-17.738223, 85.605469",
    "0.955766, -19.863281)",
    "+,-",
    "(,)",
    ",",
    " ",
  ],
});

test({
  validator: "isLocale",
  valid: [
    "uz_Latn_UZ",
    "en",
    "gsw",
    "es_ES",
    "sw_KE",
    "am_ET",
    "ca_ES_VALENCIA",
    "en_US_POSIX",
  ],
  invalid: [
    "lo_POP",
    "12",
    "12_DD",
  ],
});

test({
  validator: "isLowerCase",
  valid: [
    "abc",
    "abc123",
    "this is lowercase.",
    "tr竪s 端ber",
  ],
  invalid: [
    "fooBar",
    "123A",
  ],
});

test({
  validator: "isMACAddress",
  valid: [
    "ab:ab:ab:ab:ab:ab",
    "FF:FF:FF:FF:FF:FF",
    "01:02:03:04:05:ab",
    "01:AB:03:04:05:06",
    "A9 C5 D4 9F EB D3",
    "01 02 03 04 05 ab",
    "01-02-03-04-05-ab",
    "0102.0304.05ab",
  ],
  invalid: [
    "abc",
    "01:02:03:04:05",
    "01:02:03:04::ab",
    "1:2:3:4:5:6",
    "AB:CD:EF:GH:01:02",
    "A9C5 D4 9F EB D3",
    "01-02 03:04 05 ab",
    "0102.03:04.05ab",
  ],
});

test({
  validator: "isMagnetURI",
  valid: [
    "magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce",
    "magnet:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337",
    "magnet:?xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337",
    "magnet:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337",
    "magnet:?xt=urn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337",
    "magnet:?xt=urn:btih:LAKDHWDHEBFRFVUFJENBYYTEUY837562JH2GEFYH&dn=foobar&tr=udp://foobar.com:1337",
    "magnet:?xt=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337",
    "magnet:?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337",
    "magnet:?xt=urn:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337",
  ],
  invalid: [
    "",
    ":?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce",
    "magnett:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337",
    "xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337",
    "magneta:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337",
    "magnet:?xt=uarn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337",
    "magnet:?xt=urn:btihz&dn=foobar&tr=udp://foobar.com:1337",
    "magnet:?xat=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337",
    "magnet::?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337",
    "magnet:?xt:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337",
  ],
});

test({
  validator: "isMD5",
  valid: [
    "d94f3f016ae679c3008de268209132f2",
    "751adbc511ccbe8edf23d486fa4581cd",
    "88dae00e614d8f24cfd5a8b3f8002e93",
    "0bf1c35032a71a14c2f719e5a14c1e96",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});

test({
  validator: "isMimeType",
  valid: [
    "application/json",
    "application/xhtml+xml",
    "audio/mp4",
    "image/bmp",
    "font/woff2",
    "message/http",
    "model/vnd.gtw",
    "multipart/form-data",
    "multipart/form-data; boundary=something",
    "multipart/form-data; charset=utf-8; boundary=something",
    "multipart/form-data; boundary=something; charset=utf-8",
    'multipart/form-data; boundary=something; charset="utf-8"',
    'multipart/form-data; boundary="something"; charset=utf-8',
    'multipart/form-data; boundary="something"; charset="utf-8"',
    "text/css",
    "text/plain; charset=utf8",
    'Text/HTML;Charset="utf-8"',
    "text/html;charset=UTF-8",
    "Text/html;charset=UTF-8",
    "text/html; charset=us-ascii",
    "text/html; charset=us-ascii (Plain text)",
    'text/html; charset="us-ascii"',
    "video/mp4",
  ],
  invalid: [
    "",
    " ",
    "/",
    "f/b",
    "application",
    "application\\json",
    "application/json/text",
    "application/json; charset=utf-8",
    "audio/mp4; charset=utf-8",
    "image/bmp; charset=utf-8",
    "font/woff2; charset=utf-8",
    "message/http; charset=utf-8",
    "model/vnd.gtw; charset=utf-8",
    "video/mp4; charset=utf-8",
  ],
});

test({
  validator: "isMongoId",
  valid: [
    "507f1f77bcf86cd799439011",
  ],
  invalid: [
    "507f1f77bcf86cd7994390",
    "507f1f77bcf86cd79943901z",
    "",
    "507f1f77bcf86cd799439011 ",
  ],
});

test({
  validator: "isMultibyte",
  valid: [
    "ひらがな・カタカナ、．漢字",
    "あいうえお foobar",
    "test＠example.com",
    "1234abcDEｘｙｚ",
    "ｶﾀｶﾅ",
    "中文",
  ],
  invalid: [
    "abc",
    "abc123",
    '<>@" *.',
  ],
});

test({
  validator: "isNumeric",
  valid: [
    "123",
    "00123",
    "-00123",
    "0",
    "-0",
    "+123",
    "123.123",
    "+000000",
  ],
  invalid: [
    " ",
    "",
    ".",
  ],
});

test({
  validator: "isNumeric",
  args: [{
    no_symbols: true,
  }],
  valid: [
    "123",
    "00123",
    "0",
  ],
  invalid: [
    "-0",
    "+000000",
    "",
    "+123",
    "123.123",
    "-00123",
    " ",
    ".",
  ],
});

test({
  validator: "isOctal",
  valid: [
    "076543210",
    "0o01234567",
  ],
  invalid: [
    "abcdefg",
    "012345678",
    "012345670c",
    "00c12345670c",
    "",
    "..",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["AM"],
  valid: [
    "AF0549358",
  ],
  invalid: [
    "A1054935",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["AR"],
  valid: [
    "AAC811035",
  ],
  invalid: [
    "A11811035",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["AT"],
  valid: [
    "P 1630837",
    "P 4366918",
  ],
  invalid: [
    "0 1630837",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["AU"],
  valid: [
    "N0995852",
    "L4819236",
  ],
  invalid: [
    "1A012345",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["BE"],
  valid: [
    "EM000000",
    "LA080402",
  ],
  invalid: [
    "00123456",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["BG"],
  valid: [
    "346395366",
    "039903356",
  ],
  invalid: [
    "ABC123456",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["CA"],
  valid: [
    "GA302922",
    "ZE000509",
  ],
  invalid: [
    "AB0123456",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["CH"],
  valid: [
    "S1100409",
    "S5200073",
    "X4028791",
  ],
  invalid: [
    "AB123456",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["CN"],
  valid: [
    "G25352389",
    "E00160027",
  ],
  invalid: [
    "K0123456",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["CY"],
  valid: [
    "K00000413",
  ],
  invalid: [
    "K10100",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["CZ"],
  valid: [
    "99003853",
    "42747260",
  ],
  invalid: [
    "012345678",
    "AB123456",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["DE"],
  valid: [
    "C01X00T47",
    "C26VMVVC3",
  ],
  invalid: [
    "AS0123456",
    "A012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["DK"],
  valid: [
    "900010172",
  ],
  invalid: [
    "01234567",
    "K01234567",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["DZ"],
  valid: [
    "855609385",
    "154472412",
    "197025599",
  ],
  invalid: [
    "AS0123456",
    "A012345678",
    "0123456789",
    "12345678",
    "98KK54321",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["EE"],
  valid: [
    "K4218285",
    "K3295867",
    "KB0167630",
    "VD0023777",
  ],
  invalid: [
    "K01234567",
    "KB00112233",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["ES"],
  valid: [
    "AF238143",
    "ZAB000254",
  ],
  invalid: [
    "AF01234567",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["FI"],
  valid: [
    "XP8271602",
    "XD8500003",
  ],
  invalid: [
    "A01234567",
    "ABC012345",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["FR"],
  valid: [
    "10CV28144",
    "60RF19342",
    "05RP34083",
  ],
  invalid: [
    "012345678",
    "AB0123456",
    "01C234567",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["GB"],
  valid: [
    "925076473",
    "107182890",
    "104121156",
  ],
  invalid: [
    "A012345678",
    "K000000000",
    "0123456789",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["GR"],
  valid: [
    "AE0000005",
    "AK0219304",
  ],
  invalid: [
    "A01234567",
    "012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["HR"],
  valid: [
    "007007007",
    "138463188",
  ],
  invalid: [
    "A01234567",
    "00112233",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["HU"],
  valid: [
    "ZA084505",
    "BA0006902",
  ],
  invalid: [
    "A01234567",
    "012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["IE"],
  valid: [
    "D23145890",
    "X65097105",
    "XN0019390",
  ],
  invalid: [
    "XND012345",
    "0123456789",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["IN"],
  valid: [
    "A-1234567",
    "A1234567",
    "X0019390",
  ],
  invalid: [
    "AB-1234567",
    "0123456789",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["IS"],
  valid: [
    "A2040611",
    "A1197783",
  ],
  invalid: [
    "K0000000",
    "01234567",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["IT"],
  valid: [
    "YA8335453",
    "KK0000000",
  ],
  invalid: [
    "01234567",
    "KAK001122",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["JP"],
  valid: [
    "NH1106002",
    "TE3180251",
    "XS1234567",
  ],
  invalid: [
    "X12345678",
    "012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["KR"],
  valid: [
    "M35772699",
    "M70689098",
  ],
  invalid: [
    "X12345678",
    "012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["LT"],
  valid: [
    "20200997",
    "LB311756",
  ],
  invalid: [
    "LB01234567",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["LU"],
  valid: [
    "JCU9J4T2",
    "JC4E7L2H",
  ],
  invalid: [
    "JCU9J4T",
    "JC4E7L2H0",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["LV"],
  valid: [
    "LV9000339",
    "LV4017173",
  ],
  invalid: [
    "LV01234567",
    "4017173LV",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["MT"],
  valid: [
    "1026564",
  ],
  invalid: [
    "01234567",
    "MT01234",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["NL"],
  valid: [
    "XTR110131",
    "XR1001R58",
  ],
  invalid: [
    "XTR11013R",
    "XR1001R58A",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["PO"],
  valid: [
    "ZS 0000177",
    "AN 3000011",
  ],
  invalid: [
    "A1 0000177",
    "012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["PT"],
  valid: [
    "I700044",
    "K453286",
  ],
  invalid: [
    "0700044",
    "K4532861",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["RO"],
  valid: [
    "05485968",
    "040005646",
  ],
  invalid: [
    "R05485968",
    "0511060461",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["SE"],
  valid: [
    "59000001",
    "56702928",
  ],
  invalid: [
    "SE012345",
    "012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["SL"],
  valid: [
    "PB0036440",
    "PB1390281",
  ],
  invalid: [
    "SL0123456",
    "P01234567",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["SK"],
  valid: [
    "P0000000",
  ],
  invalid: [
    "SK012345",
    "012345678",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["TR"],
  valid: [
    "U 06764100",
    "U 01048537",
  ],
  invalid: [
    "06764100U",
    "010485371",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["UA"],
  valid: [
    "EH345655",
    "EK000001",
    "AP841503",
  ],
  invalid: [
    "01234567",
    "012345EH",
    "A012345P",
  ],
});

test({
  validator: "isPassportNumber",
  args: ["US"],
  valid: [
    "790369937",
    "340007237",
  ],
  invalid: [
    "US0123456",
    "0123456US",
    "7903699371",
  ],
});

test({
  validator: "isPort",
  valid: [
    "0",
    "22",
    "80",
    "443",
    "3000",
    "8080",
    "65535",
  ],
  invalid: [
    "",
    "-1",
    "65536",
  ],
});

const fixtures = [
  {
    locale: "AU",
    valid: [
      "4000",
      "2620",
      "3000",
      "2017",
      "0800",
    ],
  },
  {
    locale: "CA",
    valid: [
      "L4T 0A5",
      "G1A-0A2",
      "A1A 1A1",
      "X0A-0H0",
      "V5K 0A1",
    ],
  },
  {
    locale: "JP",
    valid: [
      "135-0000",
      "874-8577",
      "669-1161",
      "470-0156",
      "672-8031",
    ],
  },
  {
    locale: "GR",
    valid: [
      "022 93",
      "29934",
      "90293",
      "299 42",
      "94944",
    ],
  },
  {
    locale: "GB",
    valid: [
      "TW8 9GS",
      "BS98 1TL",
      "DE99 3GG",
      "DE55 4SW",
      "DH98 1BT",
      "DH99 1NS",
      "GIR0aa",
      "SA99",
      "W1N 4DJ",
      "AA9A 9AA",
      "AA99 9AA",
      "BS98 1TL",
      "DE993GG",
    ],
  },
  {
    locale: "FR",
    valid: [
      "75008",
      "44 522",
      "98025",
      "38 499",
      "39940",
    ],
  },
  {
    locale: "ID",
    valid: [
      "10210",
      "40181",
      "55161",
      "60233",
    ],
  },
  {
    locale: "IE",
    valid: [
      "A65 TF12",
      "A6W U9U9",
    ],
    invalid: [
      "123",
      "75690HG",
      "AW5  TF12",
      "AW5 TF12",
      "756  90HG",
      "A65T F12",
      "O62 O1O2",
    ],
  },
  {
    locale: "IN",
    valid: [
      "364240",
      "360005",
    ],
    invalid: [
      "123",
      "012345",
      "011111",
      "101123",
      "291123",
      "351123",
      "541123",
      "551123",
      "651123",
      "661123",
      "861123",
      "871123",
      "881123",
      "891123",
    ],
  },
  {
    locale: "BG",
    valid: [
      "1000",
    ],
  },
  {
    locale: "CZ",
    valid: [
      "20134",
      "392 90",
      "39919",
      "938 29",
      "39949",
    ],
  },
  {
    locale: "NL",
    valid: [
      "1012 SZ",
      "3432FE",
      "1118 BH",
      "3950IO",
      "3997 GH",
    ],
  },
  {
    locale: "NP",
    valid: [
      "10811",
      "32600",
      "56806",
      "977",
    ],
    invalid: [
      "11977",
      "asds",
      "13 32",
      "-977",
      "97765",
    ],
  },
  {
    locale: "PL",
    valid: [
      "47-260",
      "12-930",
      "78-399",
      "39-490",
      "38-483",
    ],
  },
  {
    locale: "TW",
    valid: [
      "360",
      "90312",
      "399",
      "935",
      "38842",
    ],
  },
  {
    locale: "LI",
    valid: [
      "9485",
      "9497",
      "9491",
      "9489",
      "9496",
    ],
  },
  {
    locale: "PT",
    valid: [
      "4829-489",
      "0294-348",
      "8156-392",
    ],
  },
  {
    locale: "SE",
    valid: [
      "12994",
      "284 39",
      "39556",
      "489 39",
      "499 49",
    ],
  },
  {
    locale: "AD",
    valid: [
      "AD100",
      "AD200",
      "AD300",
      "AD400",
      "AD500",
      "AD600",
      "AD700",
    ],
  },
  {
    locale: "UA",
    valid: [
      "65000",
      "65080",
      "01000",
    ],
  },
  {
    locale: "BR",
    valid: [
      "39100-000",
      "22040-020",
      "39400-152",
    ],
    invalid: [
      "79800A12",
      "13165-00",
      "38175-abc",
      "81470-2763",
      "78908",
      "13010|111",
    ],
  },
  {
    locale: "NZ",
    valid: [
      "7843",
      "3581",
      "0449",
      "0984",
      "4144",
    ],
  },
  {
    locale: "MT",
    valid: [
      "VLT2345",
      "VLT 2345",
      "ATD1234",
      "MSK8723",
    ],
  },
  {
    locale: "PR",
    valid: [
      "00979",
      "00631",
      "00786",
      "00987",
    ],
  },
];

let allValid: Array<string> = [];

// Test fixtures
fixtures.forEach((fixture) => {
  if (fixture.valid) allValid = allValid.concat(fixture.valid);
  test({
    validator: "isPostalCode",
    valid: fixture.valid,
    invalid: fixture.invalid,
    args: [fixture.locale],
  });
});

// Test generics
test({
  validator: "isPostalCode",
  valid: [
    ...allValid,
    "1234",
    "6900",
    "1292",
    "9400",
    "27616",
    "90210",
    "10001",
    "21201",
    "33142",
    "060623",
    "123456",
    "293940",
    "002920",
  ],
  invalid: [
    "asdf",
    "1",
    "ASDFGJKLmZXJtZtesting123",
    "Vml2YW11cyBmZXJtZtesting123",
    "48380480343",
    "29923-329393-2324",
    "4294924224",
    "13",
  ],
  args: ["any"],
});

test({
  validator: "isPostalCode",
  args: ["is-NOT"],
  error: [
    "293940",
    "1234",
  ],
});

test({
  validator: "isRFC3339",
  valid: [
    "2009-05-19 14:39:22-06:00",
    "2009-05-19 14:39:22+06:00",
    "2009-05-19 14:39:22Z",
    "2009-05-19T14:39:22-06:00",
    "2009-05-19T14:39:22Z",
    "2010-02-18T16:23:48.3-06:00",
    "2010-02-18t16:23:33+06:00",
    "2010-02-18t16:23:33+06:00",
    "2010-02-18t16:12:23.23334444z",
    "2010-02-18T16:23:55.2283Z",
    "2009-05-19 14:39:22.500Z",
    "2009-05-19 14:39:55Z",
    "2009-05-31 14:39:55Z",
    "2009-05-31 14:53:60Z",
    "2010-02-18t00:23:23.33+06:00",
    "2010-02-18t00:23:32.33+00:00",
    "2010-02-18t00:23:32.33+23:00",
  ],
  invalid: [
    "2010-02-18t00:23:32.33+24:00",
    "2009-05-31 14:60:55Z",
    "2010-02-18t24:23.33+0600",
    "2009-05-00 1439,55Z",
    "2009-13-19 14:39:22-06:00",
    "2009-05-00 14:39:22+0600",
    "2009-00-1 14:39:22Z",
    "2009-05-19T14:39:22",
  ],
});

test({
  validator: "isRgbColor",
  valid: [
    "rgb(0,0,0)",
    "rgb(255,255,255)",
    "rgba(0,0,0,0)",
    "rgba(255,255,255,1)",
    "rgba(255,255,255,.1)",
    "rgba(255,255,255,0.1)",
    "rgb(5%,5%,5%)",
    "rgba(5%,5%,5%,.3)",
  ],
  invalid: [
    "rgb(0,0,0,)",
    "rgb(0,0,)",
    "rgb(0,0,256)",
    "rgb()",
    "rgba(0,0,0)",
    "rgba(255,255,255,2)",
    "rgba(255,255,255,.12)",
    "rgba(255,255,256,0.1)",
    "rgb(4,4,5%)",
    "rgba(5%,5%,5%)",
    "rgba(3,3,3%,.3)",
    "rgb(101%,101%,101%)",
    "rgba(3%,3%,101%,0.3)",
  ],
});

test({
  validator: "isSemVer",
  valid: [
    "0.0.4",
    "1.2.3",
    "10.20.30",
    "1.1.2-prerelease+meta",
    "1.1.2+meta",
    "1.1.2+meta-valid",
    "1.0.0-alpha",
    "1.0.0-beta",
    "1.0.0-alpha.beta",
    "1.0.0-alpha.beta.1",
    "1.0.0-alpha.1",
    "1.0.0-alpha0.valid",
    "1.0.0-alpha.0valid",
    "1.0.0-alpha-a.b-c-somethinglong+build.1-aef.1-its-okay",
    "1.0.0-rc.1+build.1",
    "2.0.0-rc.1+build.123",
    "1.2.3-beta",
    "10.2.3-DEV-SNAPSHOT",
    "1.2.3-SNAPSHOT-123",
    "1.0.0",
    "2.0.0",
    "1.1.7",
    "2.0.0+build.1848",
    "2.0.1-alpha.1227",
    "1.0.0-alpha+beta",
    "1.2.3----RC-SNAPSHOT.12.9.1--.12+788",
    "1.2.3----R-S.12.9.1--.12+meta",
    "1.2.3----RC-SNAPSHOT.12.9.1--.12",
    "1.0.0+0.build.1-rc.10000aaa-kk-0.1",
    "99999999999999999999999.999999999999999999.99999999999999999",
    "1.0.0-0A.is.legal",
  ],
  invalid: [
    "-invalid+invalid",
    "-invalid.01",
    "alpha",
    "alpha.beta",
    "alpha.beta.1",
    "alpha.1",
    "alpha+beta",
    "alpha_beta",
    "alpha.",
    "alpha..",
    "beta",
    "1.0.0-alpha_beta",
    "-alpha.",
    "1.0.0-alpha..",
    "1.0.0-alpha..1",
    "1.0.0-alpha...1",
    "1.0.0-alpha....1",
    "1.0.0-alpha.....1",
    "1.0.0-alpha......1",
    "1.0.0-alpha.......1",
    "01.1.1",
    "1.01.1",
    "1.1.01",
    "1.2",
    "1.2.3.DEV",
    "1.2-SNAPSHOT",
    "1.2.31.2.3----RC-SNAPSHOT.12.09.1--..12+788",
    "1.2-RC-SNAPSHOT",
    "-1.0.3-gamma+b7718",
    "+justmeta",
    "9.8.7+meta+meta",
    "9.8.7-whatever+meta+meta",
    "99999999999999999999999.999999999999999999.99999999999999999-",
    "---RC-SNAPSHOT.12.09.1--------------------------------..12",
  ],
});

test({
  validator: "isSlug",
  args: ["cs_67CZ"],
  valid: ["cs-cz", "cscz"],
  invalid: [
    "not-----------slug",
    "@#_$@",
    "-not-slug",
    "not-slug-",
    "_not-slug",
    "not-slug_",
  ],
});

test({
  validator: "isSurrogatePair",
  valid: [
    "𠮷野𠮷",
    "𩸽",
    "ABC千𥧄1-2-3",
  ],
  invalid: [
    "吉野竈",
    "鮪",
    "ABC1-2-3",
  ],
});

test({
  validator: "isUpperCase",
  valid: [
    "ABC",
    "ABC123",
    "ALL CAPS IS FUN.",
    "   .",
  ],
  invalid: [
    "fooBar",
    "123abc",
  ],
});

test({
  validator: "isUUID",
  valid: [
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "A987FBC9-4BED-4078-8F07-9141BA07C9F3",
    "A987FBC9-4BED-5078-AF07-9141BA07C9F3",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3xxx",
    "A987FBC94BED3078CF079141BA07C9F3",
    "934859",
    "987FBC9-4BED-3078-CF07A-9141BA07C9F3",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
  ],
});

test({
  validator: "isUUID",
  args: [3],
  valid: [
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "934859",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
    "A987FBC9-4BED-4078-8F07-9141BA07C9F3",
    "A987FBC9-4BED-5078-AF07-9141BA07C9F3",
  ],
});

test({
  validator: "isUUID",
  args: [4],
  valid: [
    "713ae7e3-cb32-45f9-adcb-7c4fa86b90c1",
    "625e63f3-58f5-40b7-83a1-a72ad31acffb",
    "57b73598-8764-4ad0-a76a-679bb6640eb1",
    "9c858901-8a57-4791-81fe-4c455b099bc9",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "934859",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
    "A987FBC9-4BED-5078-AF07-9141BA07C9F3",
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
  ],
});

test({
  validator: "isUUID",
  args: [5],
  valid: [
    "987FBC97-4BED-5078-AF07-9141BA07C9F3",
    "987FBC97-4BED-5078-BF07-9141BA07C9F3",
    "987FBC97-4BED-5078-8F07-9141BA07C9F3",
    "987FBC97-4BED-5078-9F07-9141BA07C9F3",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "934859",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
    "9c858901-8a57-4791-81fe-4c455b099bc9",
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
  ],
});

test({
  validator: "isVariableWidth",
  valid: [
    "ひらがなカタカナ漢字ABCDE",
    "３ー０123",
    "Ｆｶﾀｶﾅﾞﾬ",
    "Good＝Parts",
  ],
  invalid: [
    "abc",
    "abc123",
    '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
    "ひらがな・カタカナ、．漢字",
    "１２３４５６",
    "ｶﾀｶﾅﾞﾬ",
  ],
});

test({
  validator: "isEmpty",
  valid: [
    "",
  ],
  invalid: [
    " ",
    "foo",
    "3",
  ],
});

test({
  validator: "isEmpty",
  args: [{
    ignore_whitespace: false,
  }],
  valid: [
    "",
  ],
  invalid: [
    " ",
    "foo",
    "3",
  ],
});

test({
  validator: "isEmpty",
  args: [{
    ignore_whitespace: true,
  }],
  valid: [
    "",
    " ",
  ],
  invalid: [
    "foo",
    "3",
  ],
});

test({
  validator: "isEthereumAddress",
  valid: [
    "0x0000000000000000000000000000000000000001",
    "0x683E07492fBDfDA84457C16546ac3f433BFaa128",
    "0x88dA6B6a8D3590e88E0FcadD5CEC56A7C9478319",
    "0x8a718a84ee7B1621E63E680371e0C03C417cCaF6",
    "0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b42",
  ],
  invalid: [
    "0xGHIJK05pwm37asdf5555QWERZCXV2345AoEuIdHt",
    "0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b422222",
    "0xFCb5AFB808b5679b4911230Aa41FfCD0cd33",
    "0b0110100001100101011011000110110001101111",
    "683E07492fBDfDA84457C16546ac3f433BFaa128",
    "1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU",
  ],
});

test({
  validator: "isIP",
  valid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "::1",
    "2001:db8:0000:1:1:1:1:1",
    "2001:41d0:2:a141::1",
    "::ffff:127.0.0.1",
    "::0000",
    "0000::",
    "1::",
    "1111:1:1:1:1:1:1:1",
    "fe80::a6db:30ff:fe98:e946",
    "::",
    "::ffff:127.0.0.1",
    "0:0:0:0:0:ffff:127.0.0.1",
  ],
  invalid: [
    "abc",
    "256.0.0.0",
    "0.0.0.256",
    "26.0.0.256",
    "0200.200.200.200",
    "200.0200.200.200",
    "200.200.0200.200",
    "200.200.200.0200",
    "::banana",
    "banana::",
    "::1banana",
    "::1::",
    "1:",
    ":1",
    ":1:1:1::2",
    "1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1",
    "::11111",
    "11111:1:1:1:1:1:1:1",
    "2001:db8:0000:1:1:1:1::1",
    "0:0:0:0:0:0:ffff:127.0.0.1",
    "0:0:0:0:ffff:127.0.0.1",
  ],
});
test({
  validator: "isIP",
  args: [4],
  valid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "255.0.0.1",
    "0.0.1.1",
  ],
  invalid: [
    "::1",
    "2001:db8:0000:1:1:1:1:1",
    "::ffff:127.0.0.1",
    "137.132.10.01",
    "0.256.0.256",
    "255.256.255.256",
  ],
});
test({
  validator: "isIP",
  args: [6],
  valid: [
    "::1",
    "2001:db8:0000:1:1:1:1:1",
    "::ffff:127.0.0.1",
    "fe80::1234%1",
    "ff08::9abc%10",
    "ff08::9abc%interface10",
    "ff02::5678%pvc1.3",
  ],
  invalid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "::ffff:287.0.0.1",
    "%",
    "fe80::1234%",
    "fe80::1234%1%3%4",
    "fe80%fe80%",
  ],
});
test({
  validator: "isIP",
  args: [10],
  valid: [],
  invalid: [
    "127.0.0.1",
    "0.0.0.0",
    "255.255.255.255",
    "1.2.3.4",
    "::1",
    "2001:db8:0000:1:1:1:1:1",
  ],
});

test({
  validator: "isIPRange",
  valid: [
    "127.0.0.1/24",
    "0.0.0.0/0",
    "255.255.255.0/32",
  ],
  invalid: [
    "127.200.230.1/35",
    "127.200.230.1/-1",
    "1.1.1.1/011",
    "::1/64",
    "1.1.1/24.1",
    "1.1.1.1/01",
    "1.1.1.1/1.1",
    "1.1.1.1/1.",
    "1.1.1.1/1/1",
    "1.1.1.1",
  ],
});

test({
  validator: "isISRC",
  valid: [
    "USAT29900609",
    "GBAYE6800011",
    "USRC15705223",
    "USCA29500702",
  ],
  invalid: [
    "USAT2990060",
    "SRC15705223",
    "US-CA29500702",
    "USARC15705223",
  ],
});

test({
  validator: "isISSN",
  valid: [
    "0378-5955",
    "0000-0000",
    "2434-561X",
    "2434-561x",
    "01896016",
    "20905076",
  ],
  invalid: [
    "0378-5954",
    "0000-0001",
    "0378-123",
    "037-1234",
    "0",
    "2434-561c",
    "1684-5370",
    "19960791",
    "",
  ],
});
test({
  validator: "isISSN",
  args: [{
    case_sensitive: true,
  }],
  valid: [
    "2434-561X",
    "2434561X",
    "0378-5955",
    "03785955",
  ],
  invalid: [
    "2434-561x",
    "2434561x",
  ],
});
test({
  validator: "isISSN",
  args: [{
    require_hyphen: true,
  }],
  valid: [
    "2434-561X",
    "2434-561x",
    "0378-5955",
  ],
  invalid: [
    "2434561X",
    "2434561x",
    "03785955",
  ],
});
test({
  validator: "isISSN",
  args: [{
    case_sensitive: true,
    require_hyphen: true,
  }],
  valid: [
    "2434-561X",
    "0378-5955",
  ],
  invalid: [
    "2434-561x",
    "2434561X",
    "2434561x",
    "03785955",
  ],
});

test({
  validator: "isISRC",
  valid: [
    "USAT29900609",
    "GBAYE6800011",
    "USRC15705223",
    "USCA29500702",
  ],
  invalid: [
    "USAT2990060",
    "SRC15705223",
    "US-CA29500702",
    "USARC15705223",
  ],
});

test({
  validator: "isFloat",
  valid: [
    "123",
    "123.",
    "123.123",
    "-123.123",
    "-0.123",
    "+0.123",
    "0.123",
    ".0",
    "-.123",
    "+.123",
    "01.123",
    "-0.22250738585072011e-307",
  ],
  invalid: [
    "+",
    "-",
    "  ",
    "",
    ".",
    "foo",
    "20.foo",
    "2020-01-06T14:31:00.135Z",
  ],
});

test({
  validator: "isFloat",
  args: [{
    locale: "en-AU",
  }],
  valid: [
    "123",
    "123.",
    "123.123",
    "-123.123",
    "-0.123",
    "+0.123",
    "0.123",
    ".0",
    "-.123",
    "+.123",
    "01.123",
    "-0.22250738585072011e-307",
  ],
  invalid: [
    "123٫123",
    "123,123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFloat",
  args: [{
    locale: "de-DE",
  }],
  valid: [
    "123",
    "123,",
    "123,123",
    "-123,123",
    "-0,123",
    "+0,123",
    "0,123",
    ",0",
    "-,123",
    "+,123",
    "01,123",
    "-0,22250738585072011e-307",
  ],
  invalid: [
    "123.123",
    "123٫123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFloat",
  args: [{
    locale: "ar-JO",
  }],
  valid: [
    "123",
    "123٫",
    "123٫123",
    "-123٫123",
    "-0٫123",
    "+0٫123",
    "0٫123",
    "٫0",
    "-٫123",
    "+٫123",
    "01٫123",
    "-0٫22250738585072011e-307",
  ],
  invalid: [
    "123,123",
    "123.123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFloat",
  args: [{
    min: 3.7,
  }],
  valid: [
    "3.888",
    "3.92",
    "4.5",
    "50",
    "3.7",
    "3.71",
  ],
  invalid: [
    "3.6",
    "3.69",
    "3",
    "1.5",
    "a",
  ],
});
test({
  validator: "isFloat",
  args: [{
    min: 0.1,
    max: 1.0,
  }],
  valid: [
    "0.1",
    "1.0",
    "0.15",
    "0.33",
    "0.57",
    "0.7",
  ],
  invalid: [
    "0",
    "0.0",
    "a",
    "1.3",
    "0.05",
    "5",
  ],
});
test({
  validator: "isFloat",
  args: [{
    gt: -5.5,
    lt: 10,
  }],
  valid: [
    "9.9",
    "1.0",
    "0",
    "-1",
    "7",
    "-5.4",
  ],
  invalid: [
    "10",
    "-5.5",
    "a",
    "-20.3",
    "20e3",
    "10.00001",
  ],
});
test({
  validator: "isFloat",
  args: [{
    min: -5.5,
    max: 10,
    gt: -5.5,
    lt: 10,
  }],
  valid: [
    "9.99999",
    "-5.499999",
  ],
  invalid: [
    "10",
    "-5.5",
  ],
});
test({
  validator: "isFloat",
  args: [{
    locale: "de-DE",
    min: 3.1,
  }],
  valid: [
    "123",
    "123,",
    "123,123",
    "3,1",
    "3,100001",
  ],
  invalid: [
    "3,09",
    "-,123",
    "+,123",
    "01,123",
    "-0,22250738585072011e-307",
    "-123,123",
    "-0,123",
    "+0,123",
    "0,123",
    ",0",
    "123.123",
    "123٫123",
    "  ",
    "",
    ".",
    "foo",
  ],
});

test({
  validator: "isFullWidth",
  valid: [
    "ひらがな・カタカナ、．漢字",
    "３ー０　ａ＠ｃｏｍ",
    "Ｆｶﾀｶﾅﾞﾬ",
    "Good＝Parts",
  ],
  invalid: [
    "abc",
    "abc123",
    '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
  ],
});

test({
  validator: "isHalfWidth",
  valid: [
    '"#$%&()<>/+=-_? ~^|.,@`{}[]',
    "l-btn_02--active",
    "abc123い",
    "ｶﾀｶﾅﾞﾬ￩",
  ],
  invalid: [
    "あいうえお",
    "００１１",
  ],
});

["md5", "md4", "ripemd128", "tiger128"].forEach((algorithm) => {
  test({
    validator: "isHash",
    args: [algorithm],
    valid: [
      "d94f3f016ae679c3008de268209132f2",
      "751adbc511ccbe8edf23d486fa4581cd",
      "88dae00e614d8f24cfd5a8b3f8002e93",
      "0bf1c35032a71a14c2f719e5a14c1e96",
      "d94f3F016Ae679C3008de268209132F2",
      "88DAE00e614d8f24cfd5a8b3f8002E93",
    ],
    invalid: [
      "q94375dj93458w34",
      "39485729348",
      "%&FHKJFvk",
      "KYT0bf1c35032a71a14c2f719e5a1",
    ],
  });
});

["crc32", "crc32b"].forEach((algorithm) => {
  test({
    validator: "isHash",
    args: [algorithm],
    valid: [
      "d94f3f01",
      "751adbc5",
      "88dae00e",
      "0bf1c350",
      "88DAE00e",
      "751aDBc5",
    ],
    invalid: [
      "KYT0bf1c35032a71a14c2f719e5a14c1",
      "q94375dj93458w34",
      "q943",
      "39485729348",
      "%&FHKJFvk",
    ],
  });
});

["sha1", "tiger160", "ripemd160"].forEach((algorithm) => {
  test({
    validator: "isHash",
    args: [algorithm],
    valid: [
      "3ca25ae354e192b26879f651a51d92aa8a34d8d3",
      "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d",
      "beb8c3f30da46be179b8df5f5ecb5e4b10508230",
      "efd5d3b190e893ed317f38da2420d63b7ae0d5ed",
      "AAF4c61ddCC5e8a2dabede0f3b482cd9AEA9434D",
      "3ca25AE354e192b26879f651A51d92aa8a34d8D3",
    ],
    invalid: [
      "KYT0bf1c35032a71a14c2f719e5a14c1",
      "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
      "q94375dj93458w34",
      "39485729348",
      "%&FHKJFvk",
    ],
  });
});

test({
  validator: "isHash",
  args: ["sha256"],
  valid: [
    "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
    "1d996e033d612d9af2b44b70061ee0e868bfd14c2dd90b129e1edeb7953e7985",
    "80f70bfeaed5886e33536bcfa8c05c60afef5a0e48f699a7912d5e399cdcc441",
    "579282cfb65ca1f109b78536effaf621b853c9f7079664a3fbe2b519f435898c",
    "2CF24dba5FB0a30e26E83b2AC5b9E29E1b161e5C1fa7425E73043362938b9824",
    "80F70bFEAed5886e33536bcfa8c05c60aFEF5a0e48f699a7912d5e399cdCC441",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});
test({
  validator: "isHash",
  args: ["sha384"],
  valid: [
    "3fed1f814d28dc5d63e313f8a601ecc4836d1662a19365cbdcf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31",
    "b330f4e575db6e73500bd3b805db1a84b5a034e5d21f0041d91eec85af1dfcb13e40bb1c4d36a72487e048ac6af74b58",
    "bf547c3fc5841a377eb1519c2890344dbab15c40ae4150b4b34443d2212e5b04aa9d58865bf03d8ae27840fef430b891",
    "fc09a3d11368386530f985dacddd026ae1e44e0e297c805c3429d50744e6237eb4417c20ffca8807b071823af13a3f65",
    "3fed1f814d28dc5d63e313f8A601ecc4836d1662a19365CBDCf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31",
    "b330f4E575db6e73500bd3b805db1a84b5a034e5d21f0041d91EEC85af1dfcb13e40bb1c4d36a72487e048ac6af74b58",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});
test({
  validator: "isHash",
  args: ["sha512"],
  valid: [
    "9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043",
    "83c586381bf5ba94c8d9ba8b6b92beb0997d76c257708742a6c26d1b7cbb9269af92d527419d5b8475f2bb6686d2f92a6649b7f174c1d8306eb335e585ab5049",
    "45bc5fa8cb45ee408c04b6269e9f1e1c17090c5ce26ffeeda2af097735b29953ce547e40ff3ad0d120e5361cc5f9cee35ea91ecd4077f3f589b4d439168f91b9",
    "432ac3d29e4f18c7f604f7c3c96369a6c5c61fc09bf77880548239baffd61636d42ed374f41c261e424d20d98e320e812a6d52865be059745fdb2cb20acff0ab",
    "9B71D224bd62f3785D96d46ad3ea3d73319bFBC2890CAAdae2dff72519673CA72323C3d99ba5c11d7c7ACC6e14b8c5DA0c4663475c2E5c3adef46f73bcDEC043",
    "432AC3d29E4f18c7F604f7c3c96369A6C5c61fC09Bf77880548239baffd61636d42ed374f41c261e424d20d98e320e812a6d52865be059745fdb2cb20acff0ab",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});
test({
  validator: "isHash",
  args: ["tiger192"],
  valid: [
    "6281a1f098c5e7290927ed09150d43ff3990a0fe1a48267c",
    "56268f7bc269cf1bc83d3ce42e07a85632394737918f4760",
    "46fc0125a148788a3ac1d649566fc04eb84a746f1a6e4fa7",
    "7731ea1621ae99ea3197b94583d034fdbaa4dce31a67404a",
    "6281A1f098c5e7290927ed09150d43ff3990a0fe1a48267C",
    "46FC0125a148788a3AC1d649566fc04eb84A746f1a6E4fa7",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});

test({
  validator: "isHexadecimal",
  valid: [
    "deadBEEF",
    "ff0044",
  ],
  invalid: [
    "abcdefg",
    "",
    "..",
    "0xa2h",
    "0xa20x",
    "0x0123456789abcDEFq",
    "0hfedCBA9876543210q",
    "01234q56789abcDEF",
  ],
});

test({
  validator: "isHexColor",
  valid: [
    "#ff0000ff",
    "#ff0034",
    "#CCCCCC",
    "0f38",
    "fff",
    "#f00",
  ],
  invalid: [
    "#ff",
    "fff0a",
    "#ff12FG",
  ],
});

test({
  validator: "isHSL",
  valid: [
    "hsl(360,0000000000100%,000000100%)",
    "hsl(000010, 00000000001%, 00000040%)",
    "HSL(00000,0000000000100%,000000100%)",
    "hsL(0, 0%, 0%)",
    "hSl(  360  , 100%  , 100%   )",
    "Hsl(  00150  , 000099%  , 01%   )",
    "hsl(01080, 03%, 4%)",
    "hsl(-540, 03%, 4%)",
    "hsla(+540, 03%, 4%)",
    "hsla(+540, 03%, 4%, 500)",
    "hsl(+540deg, 03%, 4%, 500)",
    "hsl(+540gRaD, 03%, 4%, 500)",
    "hsl(+540.01e-98rad, 03%, 4%, 500)",
    "hsl(-540.5turn, 03%, 4%, 500)",
    "hsl(+540, 03%, 4%, 500e-01)",
    "hsl(+540, 03%, 4%, 500e+80)",
    "hsl(4.71239rad, 60%, 70%)",
    "hsl(270deg, 60%, 70%)",
    "hsl(200, +.1%, 62%, 1)",
    "hsl(270 60% 70%)",
    "hsl(200, +.1e-9%, 62e10%, 1)",
    "hsl(.75turn, 60%, 70%)",
    // 'hsl(200grad+.1%62%/1)', //supposed to pass, but need to handle delimiters
    "hsl(200grad +.1% 62% / 1)",
    "hsl(270, 60%, 50%, .15)",
    "hsl(270, 60%, 50%, 15%)",
    "hsl(270 60% 50% / .15)",
    "hsl(270 60% 50% / 15%)",
  ],
  invalid: [
    "hsl (360,0000000000100%,000000100%)",
    "hsl(0260, 100 %, 100%)",
    "hsl(0160, 100%, 100%, 100 %)",
    "hsl(-0160, 100%, 100a)",
    "hsl(-0160, 100%, 100)",
    "hsl(-0160 100%, 100%, )",
    "hsl(270 deg, 60%, 70%)",
    "hsl( deg, 60%, 70%)",
    "hsl(, 60%, 70%)",
    "hsl(3000deg, 70%)",
  ],
});

test({
  validator: "isIn",
  args: ["foobar"],
  valid: ["foo", "bar", "foobar", ""],
  invalid: ["foobarbaz", "barfoo"],
});
test({
  validator: "isIn",
  args: [
    ["foo", "bar"],
  ],
  valid: ["foo", "bar"],
  invalid: ["foobar", "barfoo", ""],
});
test({
  validator: "isIn",
  args: [
    ["1", "2", "3"],
  ],
  valid: ["1", "2", "3"],
  invalid: ["4", ""],
});
test({
  validator: "isIn",
  args: [
    [
      "1",
      "2",
      "3",
      {
        foo: "bar",
      },
      () => 5,
      {
        toString: "test",
      },
    ],
  ],
  valid: ["1", "2", "3", ""],
  invalid: ["4"],
});
test({
  validator: "isIn",
  invalid: ["foo", ""],
});

test({
  validator: "isIn",
  args: [{
    foo: 1,
    bar: 2,
    foobar: 3,
  }],
  valid: ["foo", "bar", "foobar"],
  invalid: ["foobarbaz", "barfoo", ""],
});
test({
  validator: "isIn",
  args: [{
    1: 3,
    2: 0,
    3: 1,
  }],
  valid: ["1", "2", "3"],
  invalid: ["4", ""],
});

test({
  validator: "isInt",
  valid: [
    "65535",
    "13",
    "123",
    "0",
    "-0",
    "+1",
    "01",
    "-01",
    "000",
  ],
  invalid: [
    "100e10",
    "123.123",
    "   ",
    "",
  ],
});

test({
  validator: "isInt",
  args: [{
    allow_leading_zeroes: false,
  }],
  valid: [
    "13",
    "123",
    "0",
    "123",
    "-0",
    "+1",
  ],
  invalid: [
    "01",
    "-01",
    "000",
    "100e10",
    "123.123",
    "   ",
    "",
  ],
});

test({
  validator: "isInt",
  args: [{
    allow_leading_zeroes: true,
  }],
  valid: [
    "13",
    "123",
    "0",
    "123",
    "-0",
    "+1",
    "01",
    "-01",
    "000",
    "-000",
    "+000",
  ],
  invalid: [
    "100e10",
    "123.123",
    "   ",
    "",
  ],
});

test({
  validator: "isInt",
  args: [{
    min: 10,
  }],
  valid: [
    "15",
    "80",
    "99",
  ],
  invalid: [
    "9",
    "6",
    "3.2",
    "a",
  ],
});

test({
  validator: "isInt",
  args: [{
    min: 10,
    max: 15,
  }],
  valid: [
    "15",
    "11",
    "13",
  ],
  invalid: [
    "9",
    "2",
    "17",
    "3.2",
    "-1",
    "33",
    "a",
  ],
});

test({
  validator: "isInt",
  args: [{
    gt: 10,
    lt: 15,
  }],
  valid: [
    "14",
    "11",
    "13",
  ],
  invalid: [
    "10",
    "15",
    "17",
    "3.2",
    "33",
    "a",
  ],
});

test({
  validator: "isJSON",
  valid: [
    '{ "key": "value" }',
    "{}",
  ],
  invalid: [
    '{ key: "value" }',
    "{ 'key': 'value' }",
    "null",
    "1234",
    "false",
    '"nope"',
  ],
});

test({
  validator: "isJWT",
  valid: [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2xvciI6InNpdCIsImFtZXQiOlsibG9yZW0iLCJpcHN1bSJdfQ.rRpe04zbWbbJjwM43VnHzAboDzszJtGrNsUxaqQ-GQ8",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqb2huIjp7ImFnZSI6MjUsImhlaWdodCI6MTg1fSwiamFrZSI6eyJhZ2UiOjMwLCJoZWlnaHQiOjI3MH19.YRLPARDmhGMC3BBk_OhtwwK21PIkVCqQe8ncIRPKo-E",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ", // No signature
  ],
  invalid: [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "$Zs.ewu.su84",
    "ks64$S/9.dy$§kz.3sd73b",
  ],
});

test({
  validator: "isLatLong",
  valid: [
    "(-17.738223, 85.605469)",
    "(-12.3456789, +12.3456789)",
    "(-60.978437, -0.175781)",
    "(77.719772, -37.529297)",
    "(7.264394, 165.058594)",
    "0.955766, -19.863281",
    "(31.269161,164.355469)",
    "+12.3456789, -12.3456789",
    "-15.379543, -137.285156",
    "(11.770570, -162.949219)",
    "-55.034319, 113.027344",
    "58.025555, 36.738281",
    "55.720923,-28.652344",
    "-90.00000,-180.00000",
    "(-71, -146)",
    "(-71.616864, -146.616864)",
    "-0.55, +0.22",
    "90, 180",
    "+90, -180",
    "-90,+180",
    "90,180",
    "0, 0",
  ],
  invalid: [
    "(020.000000, 010.000000000)",
    "89.9999999989, 360.0000000",
    "90.1000000, 180.000000",
    "+90.000000, -180.00001",
    "090.0000, 0180.0000",
    "126, -158",
    "(-126.400010, -158.400010)",
    "-95, -96",
    "-95.738043, -96.738043",
    "137, -148",
    "(-137.5942, -148.5942)",
    "(-120, -203)",
    "(-119, -196)",
    "+119.821728, -196.821728",
    "(-110, -223)",
    "-110.369532, 223.369532",
    "(-120.969949, +203.969949)",
    "-116, -126",
    "-116.894222, -126.894222",
    "-112, -160",
    "-112.96381, -160.96381",
    "-90., -180.",
    "+90.1, -180.1",
    "(-17.738223, 85.605469",
    "0.955766, -19.863281)",
    "+,-",
    "(,)",
    ",",
    " ",
  ],
});

test({
  validator: "isLocale",
  valid: [
    "uz_Latn_UZ",
    "en",
    "gsw",
    "es_ES",
    "sw_KE",
    "am_ET",
    "ca_ES_VALENCIA",
    "en_US_POSIX",
  ],
  invalid: [
    "lo_POP",
    "12",
    "12_DD",
  ],
});

test({
  validator: "isLowerCase",
  valid: [
    "abc",
    "abc123",
    "this is lowercase.",
    "tr竪s 端ber",
  ],
  invalid: [
    "fooBar",
    "123A",
  ],
});

test({
  validator: "isMACAddress",
  valid: [
    "ab:ab:ab:ab:ab:ab",
    "FF:FF:FF:FF:FF:FF",
    "01:02:03:04:05:ab",
    "01:AB:03:04:05:06",
    "A9 C5 D4 9F EB D3",
    "01 02 03 04 05 ab",
    "01-02-03-04-05-ab",
    "0102.0304.05ab",
  ],
  invalid: [
    "abc",
    "01:02:03:04:05",
    "01:02:03:04::ab",
    "1:2:3:4:5:6",
    "AB:CD:EF:GH:01:02",
    "A9C5 D4 9F EB D3",
    "01-02 03:04 05 ab",
    "0102.03:04.05ab",
  ],
});

test({
  validator: "isMagnetURI",
  valid: [
    "magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce",
    "magnet:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337",
    "magnet:?xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337",
    "magnet:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337",
    "magnet:?xt=urn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337",
    "magnet:?xt=urn:btih:LAKDHWDHEBFRFVUFJENBYYTEUY837562JH2GEFYH&dn=foobar&tr=udp://foobar.com:1337",
    "magnet:?xt=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337",
    "magnet:?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337",
    "magnet:?xt=urn:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337",
  ],
  invalid: [
    "",
    ":?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce",
    "magnett:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337",
    "xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337",
    "magneta:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337",
    "magnet:?xt=uarn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337",
    "magnet:?xt=urn:btihz&dn=foobar&tr=udp://foobar.com:1337",
    "magnet:?xat=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337",
    "magnet::?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337",
    "magnet:?xt:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337",
  ],
});

test({
  validator: "isMD5",
  valid: [
    "d94f3f016ae679c3008de268209132f2",
    "751adbc511ccbe8edf23d486fa4581cd",
    "88dae00e614d8f24cfd5a8b3f8002e93",
    "0bf1c35032a71a14c2f719e5a14c1e96",
  ],
  invalid: [
    "KYT0bf1c35032a71a14c2f719e5a14c1",
    "q94375dj93458w34",
    "39485729348",
    "%&FHKJFvk",
  ],
});

test({
  validator: "isMimeType",
  valid: [
    "application/json",
    "application/xhtml+xml",
    "audio/mp4",
    "image/bmp",
    "font/woff2",
    "message/http",
    "model/vnd.gtw",
    "multipart/form-data",
    "multipart/form-data; boundary=something",
    "multipart/form-data; charset=utf-8; boundary=something",
    "multipart/form-data; boundary=something; charset=utf-8",
    'multipart/form-data; boundary=something; charset="utf-8"',
    'multipart/form-data; boundary="something"; charset=utf-8',
    'multipart/form-data; boundary="something"; charset="utf-8"',
    "text/css",
    "text/plain; charset=utf8",
    'Text/HTML;Charset="utf-8"',
    "text/html;charset=UTF-8",
    "Text/html;charset=UTF-8",
    "text/html; charset=us-ascii",
    "text/html; charset=us-ascii (Plain text)",
    'text/html; charset="us-ascii"',
    "video/mp4",
  ],
  invalid: [
    "",
    " ",
    "/",
    "f/b",
    "application",
    "application\\json",
    "application/json/text",
    "application/json; charset=utf-8",
    "audio/mp4; charset=utf-8",
    "image/bmp; charset=utf-8",
    "font/woff2; charset=utf-8",
    "message/http; charset=utf-8",
    "model/vnd.gtw; charset=utf-8",
    "video/mp4; charset=utf-8",
  ],
});

test({
  validator: "isMongoId",
  valid: [
    "507f1f77bcf86cd799439011",
  ],
  invalid: [
    "507f1f77bcf86cd7994390",
    "507f1f77bcf86cd79943901z",
    "",
    "507f1f77bcf86cd799439011 ",
  ],
});

test({
  validator: "isMultibyte",
  valid: [
    "ひらがな・カタカナ、．漢字",
    "あいうえお foobar",
    "test＠example.com",
    "1234abcDEｘｙｚ",
    "ｶﾀｶﾅ",
    "中文",
  ],
  invalid: [
    "abc",
    "abc123",
    '<>@" *.',
  ],
});

test({
  validator: "isNumeric",
  valid: [
    "123",
    "00123",
    "-00123",
    "0",
    "-0",
    "+123",
    "123.123",
    "+000000",
  ],
  invalid: [
    " ",
    "",
    ".",
  ],
});

test({
  validator: "isNumeric",
  args: [{
    no_symbols: true,
  }],
  valid: [
    "123",
    "00123",
    "0",
  ],
  invalid: [
    "-0",
    "+000000",
    "",
    "+123",
    "123.123",
    "-00123",
    " ",
    ".",
  ],
});

test({
  validator: "isOctal",
  valid: [
    "076543210",
    "0o01234567",
  ],
  invalid: [
    "abcdefg",
    "012345678",
    "012345670c",
    "00c12345670c",
    "",
    "..",
  ],
});

test({
  validator: "isPort",
  valid: [
    "0",
    "22",
    "80",
    "443",
    "3000",
    "8080",
    "65535",
  ],
  invalid: [
    "",
    "-1",
    "65536",
  ],
});

test({
  validator: "isRFC3339",
  valid: [
    "2009-05-19 14:39:22-06:00",
    "2009-05-19 14:39:22+06:00",
    "2009-05-19 14:39:22Z",
    "2009-05-19T14:39:22-06:00",
    "2009-05-19T14:39:22Z",
    "2010-02-18T16:23:48.3-06:00",
    "2010-02-18t16:23:33+06:00",
    "2010-02-18t16:23:33+06:00",
    "2010-02-18t16:12:23.23334444z",
    "2010-02-18T16:23:55.2283Z",
    "2009-05-19 14:39:22.500Z",
    "2009-05-19 14:39:55Z",
    "2009-05-31 14:39:55Z",
    "2009-05-31 14:53:60Z",
    "2010-02-18t00:23:23.33+06:00",
    "2010-02-18t00:23:32.33+00:00",
    "2010-02-18t00:23:32.33+23:00",
  ],
  invalid: [
    "2010-02-18t00:23:32.33+24:00",
    "2009-05-31 14:60:55Z",
    "2010-02-18t24:23.33+0600",
    "2009-05-00 1439,55Z",
    "2009-13-19 14:39:22-06:00",
    "2009-05-00 14:39:22+0600",
    "2009-00-1 14:39:22Z",
    "2009-05-19T14:39:22",
  ],
});

test({
  validator: "isRgbColor",
  valid: [
    "rgb(0,0,0)",
    "rgb(255,255,255)",
    "rgba(0,0,0,0)",
    "rgba(255,255,255,1)",
    "rgba(255,255,255,.1)",
    "rgba(255,255,255,0.1)",
    "rgb(5%,5%,5%)",
    "rgba(5%,5%,5%,.3)",
  ],
  invalid: [
    "rgb(0,0,0,)",
    "rgb(0,0,)",
    "rgb(0,0,256)",
    "rgb()",
    "rgba(0,0,0)",
    "rgba(255,255,255,2)",
    "rgba(255,255,255,.12)",
    "rgba(255,255,256,0.1)",
    "rgb(4,4,5%)",
    "rgba(5%,5%,5%)",
    "rgba(3,3,3%,.3)",
    "rgb(101%,101%,101%)",
    "rgba(3%,3%,101%,0.3)",
  ],
});

test({
  validator: "isSemVer",
  valid: [
    "0.0.4",
    "1.2.3",
    "10.20.30",
    "1.1.2-prerelease+meta",
    "1.1.2+meta",
    "1.1.2+meta-valid",
    "1.0.0-alpha",
    "1.0.0-beta",
    "1.0.0-alpha.beta",
    "1.0.0-alpha.beta.1",
    "1.0.0-alpha.1",
    "1.0.0-alpha0.valid",
    "1.0.0-alpha.0valid",
    "1.0.0-alpha-a.b-c-somethinglong+build.1-aef.1-its-okay",
    "1.0.0-rc.1+build.1",
    "2.0.0-rc.1+build.123",
    "1.2.3-beta",
    "10.2.3-DEV-SNAPSHOT",
    "1.2.3-SNAPSHOT-123",
    "1.0.0",
    "2.0.0",
    "1.1.7",
    "2.0.0+build.1848",
    "2.0.1-alpha.1227",
    "1.0.0-alpha+beta",
    "1.2.3----RC-SNAPSHOT.12.9.1--.12+788",
    "1.2.3----R-S.12.9.1--.12+meta",
    "1.2.3----RC-SNAPSHOT.12.9.1--.12",
    "1.0.0+0.build.1-rc.10000aaa-kk-0.1",
    "99999999999999999999999.999999999999999999.99999999999999999",
    "1.0.0-0A.is.legal",
  ],
  invalid: [
    "-invalid+invalid",
    "-invalid.01",
    "alpha",
    "alpha.beta",
    "alpha.beta.1",
    "alpha.1",
    "alpha+beta",
    "alpha_beta",
    "alpha.",
    "alpha..",
    "beta",
    "1.0.0-alpha_beta",
    "-alpha.",
    "1.0.0-alpha..",
    "1.0.0-alpha..1",
    "1.0.0-alpha...1",
    "1.0.0-alpha....1",
    "1.0.0-alpha.....1",
    "1.0.0-alpha......1",
    "1.0.0-alpha.......1",
    "01.1.1",
    "1.01.1",
    "1.1.01",
    "1.2",
    "1.2.3.DEV",
    "1.2-SNAPSHOT",
    "1.2.31.2.3----RC-SNAPSHOT.12.09.1--..12+788",
    "1.2-RC-SNAPSHOT",
    "-1.0.3-gamma+b7718",
    "+justmeta",
    "9.8.7+meta+meta",
    "9.8.7-whatever+meta+meta",
    "99999999999999999999999.999999999999999999.99999999999999999-",
    "---RC-SNAPSHOT.12.09.1--------------------------------..12",
  ],
});

test({
  validator: "isSlug",
  args: ["cs_67CZ"],
  valid: ["cs-cz", "cscz"],
  invalid: [
    "not-----------slug",
    "@#_$@",
    "-not-slug",
    "not-slug-",
    "_not-slug",
    "not-slug_",
  ],
});

test({
  validator: "isSurrogatePair",
  valid: [
    "𠮷野𠮷",
    "𩸽",
    "ABC千𥧄1-2-3",
  ],
  invalid: [
    "吉野竈",
    "鮪",
    "ABC1-2-3",
  ],
});

test({
  validator: "isUpperCase",
  valid: [
    "ABC",
    "ABC123",
    "ALL CAPS IS FUN.",
    "   .",
  ],
  invalid: [
    "fooBar",
    "123abc",
  ],
});

test({
  validator: "isUUID",
  valid: [
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "A987FBC9-4BED-4078-8F07-9141BA07C9F3",
    "A987FBC9-4BED-5078-AF07-9141BA07C9F3",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3xxx",
    "A987FBC94BED3078CF079141BA07C9F3",
    "934859",
    "987FBC9-4BED-3078-CF07A-9141BA07C9F3",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
  ],
});

test({
  validator: "isUUID",
  args: [3],
  valid: [
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "934859",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
    "A987FBC9-4BED-4078-8F07-9141BA07C9F3",
    "A987FBC9-4BED-5078-AF07-9141BA07C9F3",
  ],
});

test({
  validator: "isUUID",
  args: [4],
  valid: [
    "713ae7e3-cb32-45f9-adcb-7c4fa86b90c1",
    "625e63f3-58f5-40b7-83a1-a72ad31acffb",
    "57b73598-8764-4ad0-a76a-679bb6640eb1",
    "9c858901-8a57-4791-81fe-4c455b099bc9",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "934859",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
    "A987FBC9-4BED-5078-AF07-9141BA07C9F3",
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
  ],
});

test({
  validator: "isUUID",
  args: [5],
  valid: [
    "987FBC97-4BED-5078-AF07-9141BA07C9F3",
    "987FBC97-4BED-5078-BF07-9141BA07C9F3",
    "987FBC97-4BED-5078-8F07-9141BA07C9F3",
    "987FBC97-4BED-5078-9F07-9141BA07C9F3",
  ],
  invalid: [
    "",
    "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3",
    "934859",
    "AAAAAAAA-1111-1111-AAAG-111111111111",
    "9c858901-8a57-4791-81fe-4c455b099bc9",
    "A987FBC9-4BED-3078-CF07-9141BA07C9F3",
  ],
});

test({
  validator: "isVariableWidth",
  valid: [
    "ひらがなカタカナ漢字ABCDE",
    "３ー０123",
    "Ｆｶﾀｶﾅﾞﾬ",
    "Good＝Parts",
  ],
  invalid: [
    "abc",
    "abc123",
    '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
    "ひらがな・カタカナ、．漢字",
    "１２３４５６",
    "ｶﾀｶﾅﾞﾬ",
  ],
});

test({
  validator: "isWhitelisted",
  args: ["abcdefghijklmnopqrstuvwxyz-"],
  valid: ["foo", "foobar", "baz-foo"],
  invalid: ["foo bar", "fo.bar", "türkçe"],
});

test({
  validator: "isFQDN",
  valid: [
    "domain.com",
    "dom.plato",
    "a.domain.co",
    "foo--bar.com",
    "xn--froschgrn-x9a.com",
    "rebecca.blackfriday",
  ],
  invalid: [
    "abc",
    "256.0.0.0",
    "_.com",
    "*.some.com",
    "s!ome.com",
    "domain.com/",
    "/more.com",
    "domain.com�",
    "domain.com©",
  ],
});

test({
  validator: "isFQDN",
  args: [{
    allow_trailing_dot: true,
  }],
  valid: [
    "example.com.",
  ],
});
