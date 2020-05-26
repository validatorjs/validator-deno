import test from './test-template.ts'

test({
    validator: 'equals',
    args: ['abc'],
    valid: ['abc'],
    invalid: ['Abc', '123']
});

test({
    validator: 'equals',
    args: ['abc ', { trim: true }],
    valid: ['  abc  '],
    invalid: ['Abc', '123']
});

test({
    validator: 'equals',
    args: ['abc', { ignore_case: true }],
    valid: ['abc', 'AbC'],
    invalid: ['@bc', '123']
});

test({
    validator: 'isAscii',
    valid: [
        'foobar',
        '0987654321',
        'test@example.com',
        '1234abcDEF',
    ],
    invalid: [
        'ｆｏｏbar',
        'ｘｙｚ０９８',
        '１２３456',
        'ｶﾀｶﾅ',
    ],
});

test({
    validator: 'isBase32',
    valid: [
        'ZG======',
        'JBSQ====',
        'JBSWY===',
        'JBSWY3A=',
        'JBSWY3DP',
        'JBSWY3DPEA======',
        'K5SWYY3PNVSSA5DPEBXG6ZA=',
        'K5SWYY3PNVSSA5DPEBXG6===',
    ],
    invalid: [
        '12345',
        '',
        'JBSWY3DPtesting123',
        'ZG=====',
        'Z======',
        'Zm=8JBSWY3DP',
        '=m9vYg==',
        'Zm9vYm/y====',
    ],
});

test({
    validator: 'isBase64',
    valid: [
        'Zg==',
        'Zm8=',
        'Zm9v',
        'Zm9vYg==',
        'Zm9vYmE=',
        'Zm9vYmFy',
        'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4=',
        'Vml2YW11cyBmZXJtZW50dW0gc2VtcGVyIHBvcnRhLg==',
        'U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==',
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuMPNS1Ufof9EW/M98FNw' +
        'UAKrwflsqVxaxQjBQnHQmiI7Vac40t8x7pIb8gLGV6wL7sBTJiPovJ0V7y7oc0Ye' +
        'rhKh0Rm4skP2z/jHwwZICgGzBvA0rH8xlhUiTvcwDCJ0kc+fh35hNt8srZQM4619' +
        'FTgB66Xmp4EtVyhpQV+t02g6NzK72oZI0vnAvqhpkxLeLiMCyrI416wHm5Tkukhx' +
        'QmcL2a6hNOyu0ixX/x2kSFXApEnVrJ+/IxGyfyw8kf4N2IZpW5nEP847lpfj0SZZ' +
        'Fwrd1mnfnDbYohX2zRptLy2ZUn06Qo9pkG5ntvFEPo9bfZeULtjYzIl6K8gJ2uGZ' +
        'HQIDAQAB',
    ],
    invalid: [
        '12345',
        '',
        'Vml2YW11cyBmZXJtZtesting123',
        'Zg=',
        'Z===',
        'Zm=8',
        '=m9vYg==',
        'Zm9vYmFy====',
    ]
})

test({
    validator: 'isBase64',
    valid: [
        'Zg==',
        'Zm8=',
        'Zm9v',
        'Zm9vYg==',
        'Zm9vYmE=',
        'Zm9vYmFy',
        'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4=',
        'Vml2YW11cyBmZXJtZW50dW0gc2VtcGVyIHBvcnRhLg==',
        'U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==',
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuMPNS1Ufof9EW/M98FNw' +
        'UAKrwflsqVxaxQjBQnHQmiI7Vac40t8x7pIb8gLGV6wL7sBTJiPovJ0V7y7oc0Ye' +
        'rhKh0Rm4skP2z/jHwwZICgGzBvA0rH8xlhUiTvcwDCJ0kc+fh35hNt8srZQM4619' +
        'FTgB66Xmp4EtVyhpQV+t02g6NzK72oZI0vnAvqhpkxLeLiMCyrI416wHm5Tkukhx' +
        'QmcL2a6hNOyu0ixX/x2kSFXApEnVrJ+/IxGyfyw8kf4N2IZpW5nEP847lpfj0SZZ' +
        'Fwrd1mnfnDbYohX2zRptLy2ZUn06Qo9pkG5ntvFEPo9bfZeULtjYzIl6K8gJ2uGZ' +
        'HQIDAQAB',
    ],
    invalid: [
        '12345',
        '',
        'Vml2YW11cyBmZXJtZtesting123',
        'Zg=',
        'Z===',
        'Zm=8',
        '=m9vYg==',
        'Zm9vYmFy====',
    ],
})

test({
    validator: 'isBIC',
    valid: [
        'SBICKEN1345',
        'SBICKEN1',
        'SBICKENY',
        'SBICKEN1YYP',
    ],
    invalid: [
        'SBIC23NXXX',
        'S23CKENXXXX',
        'SBICKENXX',
        'SBICKENXX9',
        'SBICKEN13458',
        'SBICKEN',
    ],
})


test({
    validator: 'isBoolean',
    valid: [
        'true',
        'false',
        '0',
        '1',
    ],
    invalid: [
        '1.0',
        '0.0',
        'true ',
        'False',
        'True',
        'yes',
    ],
})


test({
    validator: 'isBtcAddress',
    valid: [
        '1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL',
        '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
        'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
    ],
    invalid: [
        '4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
        '0x56F0B8A998425c53c75C4A303D4eF987533c5597',
        'pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g',
    ],
})

test({
    validator: 'isCreditCard',
    valid: [
        '375556917985515',
        '36050234196908',
        '4716461583322103',
        '4716-2210-5188-5662',
        '4929 7226 5379 7141',
        '5398228707871527',
        '6283875070985593',
        '6263892624162870',
        '6234917882863855',
        '6234698580215388',
        '6226050967750613',
        '6246281879460688',
        '2222155765072228',
        '2225855203075256',
        '2720428011723762',
        '2718760626256570',
        '6765780016990268',
        '4716989580001715211',
    ],
    invalid: [
        'foo',
        'foo',
        '5398228707871528',
        '2718760626256571',
        '2721465526338453',
        '2220175103860763',
        '375556917985515999999993',
        '899999996234917882863855',
        'prefix6234917882863855',
        '623491788middle2863855',
        '6234917882863855suffix',
        '4716989580001715213',
    ],
});

test({
    validator: 'isDataURI',
    valid: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC',
        '   data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC   ',
        'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Crect%20fill%3D%22%2300B1FF%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCBmaWxsPSIjMDBCMUZGIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjwvc3ZnPg==',
        ' data:,Hello%2C%20World!',
        ' data:,Hello World!',
        ' data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D',
        ' data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E',
        'data:,A%20brief%20note',
        'data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E',
    ],
    invalid: [
        'dataxbase64',
        'data:HelloWorld',
        'data:,A%20brief%20invalid%20[note',
        'file:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D',
        'data:text/html;charset=,%3Ch1%3EHello!%3C%2Fh1%3E',
        'data:text/html;charset,%3Ch1%3EHello!%3C%2Fh1%3E', 'data:base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
        '',
        'http://wikipedia.org',
        'base64',
        'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
    ],
});

test({
    validator: 'isDecimal',
    valid: [
        '123',
        '00123',
        '-00123',
        '0',
        '-0',
        '+123',
        '0.01',
        '.1',
        '1.0',
        '-.25',
        '-0',
        '0.0000000000001',
    ],
    invalid: [
        '0,01',
        ',1',
        '1,0',
        '-,25',
        '0,0000000000001',
        '0٫01',
        '٫1',
        '1٫0',
        '-٫25',
        '0٫0000000000001',
        '....',
        ' ',
        '',
        '-',
        '+',
        '.',
        '0.1a',
        'a',
        '\n',
    ],
})


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
// })

test({
    validator: 'isEmpty',
    valid: [
        '',
    ],
    invalid: [
        ' ',
        'foo',
        '3',
    ],
});

test({
    validator: 'isEmpty',
    args: [{ ignore_whitespace: false }],
    valid: [
        '',
    ],
    invalid: [
        ' ',
        'foo',
        '3',
    ],
});

test({
    validator: 'isEmpty',
    args: [{ ignore_whitespace: true }],
    valid: [
        '',
        ' ',
    ],
    invalid: [
        'foo',
        '3',
    ],
});


test({
    validator: 'isEthereumAddress',
    valid: [
        '0x0000000000000000000000000000000000000001',
        '0x683E07492fBDfDA84457C16546ac3f433BFaa128',
        '0x88dA6B6a8D3590e88E0FcadD5CEC56A7C9478319',
        '0x8a718a84ee7B1621E63E680371e0C03C417cCaF6',
        '0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b42',
    ],
    invalid: [
        '0xGHIJK05pwm37asdf5555QWERZCXV2345AoEuIdHt',
        '0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b422222',
        '0xFCb5AFB808b5679b4911230Aa41FfCD0cd33',
        '0b0110100001100101011011000110110001101111',
        '683E07492fBDfDA84457C16546ac3f433BFaa128',
        '1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU',
    ],
})

// test({
//     validator: 'isFloat',
//     valid: [
//         '123',
//         '123.',
//         '123.123',
//         '-123.123',
//         '-0.123',
//         '+0.123',
//         '0.123',
//         '.0',
//         '-.123',
//         '+.123',
//         '01.123',
//         '-0.22250738585072011e-307',
//     ],
//     invalid: [
//         '+',
//         '-',
//         '  ',
//         '',
//         '.',
//         'foo',
//         '20.foo',
//         '2020-01-06T14:31:00.135Z',
//     ],
// })

test({
    validator: 'isFullWidth',
    valid: [
        'ひらがな・カタカナ、．漢字',
        '３ー０　ａ＠ｃｏｍ',
        'Ｆｶﾀｶﾅﾞﾬ',
        'Good＝Parts',
    ],
    invalid: [
        'abc',
        'abc123',
        '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
    ],
});


// test({
//     validator: 'isHash',
//     valid: [
//         'ZG======',
//         'JBSQ====',
//         'JBSWY===',
//         'JBSWY3A=',
//         'JBSWY3DP',
//         'JBSWY3DPEA======',
//         'K5SWYY3PNVSSA5DPEBXG6ZA=',
//         'K5SWYY3PNVSSA5DPEBXG6===',
//     ],
//     invalid: [
//         '12345',
//         '',
//         'JBSWY3DPtesting123',
//         'ZG=====',
//         'Z======',
//         'Zm=8JBSWY3DP',
//         '=m9vYg==',
//         'Zm9vYm/y====',
//     ],
// })

test({
    validator: 'isHalfWidth',
    valid: [
        '"#$%&()<>/+=-_? ~^|.,@`{}[]',
        'l-btn_02--active',
        'abc123い',
        'ｶﾀｶﾅﾞﾬ￩',
    ],
    invalid: [
        'あいうえお',
        '００１１',
    ]
});


test({
    validator: 'isHexadecimal',
    valid: [
        'deadBEEF',
        'ff0044',
    ],
    invalid: [
        'abcdefg',
        '',
        '..',
        '0xa2h',
        '0xa20x',
        '0x0123456789abcDEFq',
        '0hfedCBA9876543210q',
        '01234q56789abcDEF',
    ],
})


test({
    validator: 'isHexColor',
    valid: [
        '#ff0000ff',
        '#ff0034',
        '#CCCCCC',
        '0f38',
        'fff',
        '#f00',
    ],
    invalid: [
        '#ff',
        'fff0a',
        '#ff12FG',
    ],
})


test({
    validator: 'isHSL',
    valid: [
        'hsl(360,0000000000100%,000000100%)',
        'hsl(000010, 00000000001%, 00000040%)',
        'HSL(00000,0000000000100%,000000100%)',
        'hsL(0, 0%, 0%)',
        'hSl(  360  , 100%  , 100%   )',
        'Hsl(  00150  , 000099%  , 01%   )',
        'hsl(01080, 03%, 4%)',
        'hsl(-540, 03%, 4%)',
        'hsla(+540, 03%, 4%)',
        'hsla(+540, 03%, 4%, 500)',
        'hsl(+540deg, 03%, 4%, 500)',
        'hsl(+540gRaD, 03%, 4%, 500)',
        'hsl(+540.01e-98rad, 03%, 4%, 500)',
        'hsl(-540.5turn, 03%, 4%, 500)',
        'hsl(+540, 03%, 4%, 500e-01)',
        'hsl(+540, 03%, 4%, 500e+80)',
        'hsl(4.71239rad, 60%, 70%)',
        'hsl(270deg, 60%, 70%)',
        'hsl(200, +.1%, 62%, 1)',
        'hsl(270 60% 70%)',
        'hsl(200, +.1e-9%, 62e10%, 1)',
        'hsl(.75turn, 60%, 70%)',
        // 'hsl(200grad+.1%62%/1)', //supposed to pass, but need to handle delimiters
        'hsl(200grad +.1% 62% / 1)',
        'hsl(270, 60%, 50%, .15)',
        'hsl(270, 60%, 50%, 15%)',
        'hsl(270 60% 50% / .15)',
        'hsl(270 60% 50% / 15%)',
    ],
    invalid: [
        'hsl (360,0000000000100%,000000100%)',
        'hsl(0260, 100 %, 100%)',
        'hsl(0160, 100%, 100%, 100 %)',
        'hsl(-0160, 100%, 100a)',
        'hsl(-0160, 100%, 100)',
        'hsl(-0160 100%, 100%, )',
        'hsl(270 deg, 60%, 70%)',
        'hsl( deg, 60%, 70%)',
        'hsl(, 60%, 70%)',
        'hsl(3000deg, 70%)',
    ],
})

test({
    validator: 'isInt',
    valid: [
        '13',
        '123',
        '0',
        '-0',
        '+1',
        '01',
        '-01',
        '000',
    ],
    invalid: [
        '100e10',
        '123.123',
        '   ',
        '',
    ],
});

test({
    validator: 'isInt',
    args: [{ allow_leading_zeroes: false }],
    valid: [
        '13',
        '123',
        '0',
        '123',
        '-0',
        '+1',
    ],
    invalid: [
        '01',
        '-01',
        '000',
        '100e10',
        '123.123',
        '   ',
        '',
    ],
});

test({
    validator: 'isInt',
    args: [{ allow_leading_zeroes: true }],
    valid: [
        '13',
        '123',
        '0',
        '123',
        '-0',
        '+1',
        '01',
        '-01',
        '000',
        '-000',
        '+000',
    ],
    invalid: [
        '100e10',
        '123.123',
        '   ',
        '',
    ],
});

test({
    validator: 'isInt',
    args: [{
        min: 10,
    }],
    valid: [
        '15',
        '80',
        '99',
    ],
    invalid: [
        '9',
        '6',
        '3.2',
        'a',
    ],
});

test({
    validator: 'isInt',
    args: [{
        min: 10,
        max: 15,
    }],
    valid: [
        '15',
        '11',
        '13',
    ],
    invalid: [
        '9',
        '2',
        '17',
        '3.2',
        '33',
        'a',
    ],
});

test({
    validator: 'isInt',
    args: [{
        gt: 10,
        lt: 15,
    }],
    valid: [
        '14',
        '11',
        '13',
    ],
    invalid: [
        '10',
        '15',
        '17',
        '3.2',
        '33',
        'a',
    ],
});




test({
    validator: 'isJSON',
    valid: [
        '{ "key": "value" }',
        '{}',
    ],
    invalid: [
        '{ key: "value" }',
        '{ \'key\': \'value\' }',
        'null',
        '1234',
        'false',
        '"nope"',
    ],
})



test({
    validator: 'isJWT',
    valid: [
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2xvciI6InNpdCIsImFtZXQiOlsibG9yZW0iLCJpcHN1bSJdfQ.rRpe04zbWbbJjwM43VnHzAboDzszJtGrNsUxaqQ-GQ8',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqb2huIjp7ImFnZSI6MjUsImhlaWdodCI6MTg1fSwiamFrZSI6eyJhZ2UiOjMwLCJoZWlnaHQiOjI3MH19.YRLPARDmhGMC3BBk_OhtwwK21PIkVCqQe8ncIRPKo-E',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ', // No signature
    ],
    invalid: [
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        '$Zs.ewu.su84',
        'ks64$S/9.dy$§kz.3sd73b',
    ],
})


test({
    validator: 'isLatLong',
    valid: [
        '(-17.738223, 85.605469)',
        '(-12.3456789, +12.3456789)',
        '(-60.978437, -0.175781)',
        '(77.719772, -37.529297)',
        '(7.264394, 165.058594)',
        '0.955766, -19.863281',
        '(31.269161,164.355469)',
        '+12.3456789, -12.3456789',
        '-15.379543, -137.285156',
        '(11.770570, -162.949219)',
        '-55.034319, 113.027344',
        '58.025555, 36.738281',
        '55.720923,-28.652344',
        '-90.00000,-180.00000',
        '(-71, -146)',
        '(-71.616864, -146.616864)',
        '-0.55, +0.22',
        '90, 180',
        '+90, -180',
        '-90,+180',
        '90,180',
        '0, 0',
    ],
    invalid: [
        '(020.000000, 010.000000000)',
        '89.9999999989, 360.0000000',
        '90.1000000, 180.000000',
        '+90.000000, -180.00001',
        '090.0000, 0180.0000',
        '126, -158',
        '(-126.400010, -158.400010)',
        '-95, -96',
        '-95.738043, -96.738043',
        '137, -148',
        '(-137.5942, -148.5942)',
        '(-120, -203)',
        '(-119, -196)',
        '+119.821728, -196.821728',
        '(-110, -223)',
        '-110.369532, 223.369532',
        '(-120.969949, +203.969949)',
        '-116, -126',
        '-116.894222, -126.894222',
        '-112, -160',
        '-112.96381, -160.96381',
        '-90., -180.',
        '+90.1, -180.1',
        '(-17.738223, 85.605469',
        '0.955766, -19.863281)',
        '+,-',
        '(,)',
        ',',
        ' ',
    ],
})



test({
    validator: 'isLocale',
    valid: [
        'uz_Latn_UZ',
        'en',
        'gsw',
        'es_ES',
        'sw_KE',
        'am_ET',
        'ca_ES_VALENCIA',
        'en_US_POSIX',
    ],
    invalid: [
        'lo_POP',
        '12',
        '12_DD',
    ]
})






test({
    validator: 'isJWT',
    valid: [
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2xvciI6InNpdCIsImFtZXQiOlsibG9yZW0iLCJpcHN1bSJdfQ.rRpe04zbWbbJjwM43VnHzAboDzszJtGrNsUxaqQ-GQ8',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqb2huIjp7ImFnZSI6MjUsImhlaWdodCI6MTg1fSwiamFrZSI6eyJhZ2UiOjMwLCJoZWlnaHQiOjI3MH19.YRLPARDmhGMC3BBk_OhtwwK21PIkVCqQe8ncIRPKo-E',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ', // No signature
    ],
    invalid: [
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        '$Zs.ewu.su84',
        'ks64$S/9.dy$§kz.3sd73b',
    ],
});

test({
    validator: 'isLowerCase',
    valid: [
        'abc',
        'abc123',
        'this is lowercase.',
        'tr竪s 端ber',
    ],
    invalid: [
        'fooBar',
        '123A',
    ],
});

test({
    validator: 'isMACAddress',
    valid: [
        'ab:ab:ab:ab:ab:ab',
        'FF:FF:FF:FF:FF:FF',
        '01:02:03:04:05:ab',
        '01:AB:03:04:05:06',
        'A9 C5 D4 9F EB D3',
        '01 02 03 04 05 ab',
        '01-02-03-04-05-ab',
        '0102.0304.05ab',
    ],
    invalid: [
        'abc',
        '01:02:03:04:05',
        '01:02:03:04::ab',
        '1:2:3:4:5:6',
        'AB:CD:EF:GH:01:02',
        'A9C5 D4 9F EB D3',
        '01-02 03:04 05 ab',
        '0102.03:04.05ab',
    ],
});

test({
    validator: 'isMagnetURI',
    valid: [
        'magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce',
        'magnet:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337',
        'magnet:?xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337',
        'magnet:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337',
        'magnet:?xt=urn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337',
        'magnet:?xt=urn:btih:LAKDHWDHEBFRFVUFJENBYYTEUY837562JH2GEFYH&dn=foobar&tr=udp://foobar.com:1337',
        'magnet:?xt=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337',
        'magnet:?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337',
        'magnet:?xt=urn:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337',
    ],
    invalid: [
        '',
        ':?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce',
        'magnett:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337',
        'xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337',
        'magneta:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337',
        'magnet:?xt=uarn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337',
        'magnet:?xt=urn:btihz&dn=foobar&tr=udp://foobar.com:1337',
        'magnet:?xat=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337',
        'magnet::?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337',
        'magnet:?xt:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337',
    ],
});
test({
    validator: 'isMD5',
    valid: [
        'd94f3f016ae679c3008de268209132f2',
        '751adbc511ccbe8edf23d486fa4581cd',
        '88dae00e614d8f24cfd5a8b3f8002e93',
        '0bf1c35032a71a14c2f719e5a14c1e96',
    ],
    invalid: [
        'KYT0bf1c35032a71a14c2f719e5a14c1',
        'q94375dj93458w34',
        '39485729348',
        '%&FHKJFvk',
    ],
});
test({
    validator: 'isMimeType',
    valid: [
        'application/json',
        'application/xhtml+xml',
        'audio/mp4',
        'image/bmp',
        'font/woff2',
        'message/http',
        'model/vnd.gtw',
        'multipart/form-data',
        'multipart/form-data; boundary=something',
        'multipart/form-data; charset=utf-8; boundary=something',
        'multipart/form-data; boundary=something; charset=utf-8',
        'multipart/form-data; boundary=something; charset="utf-8"',
        'multipart/form-data; boundary="something"; charset=utf-8',
        'multipart/form-data; boundary="something"; charset="utf-8"',
        'text/css',
        'text/plain; charset=utf8',
        'Text/HTML;Charset="utf-8"',
        'text/html;charset=UTF-8',
        'Text/html;charset=UTF-8',
        'text/html; charset=us-ascii',
        'text/html; charset=us-ascii (Plain text)',
        'text/html; charset="us-ascii"',
        'video/mp4',
    ],
    invalid: [
        '',
        ' ',
        '/',
        'f/b',
        'application',
        'application\\json',
        'application/json/text',
        'application/json; charset=utf-8',
        'audio/mp4; charset=utf-8',
        'image/bmp; charset=utf-8',
        'font/woff2; charset=utf-8',
        'message/http; charset=utf-8',
        'model/vnd.gtw; charset=utf-8',
        'video/mp4; charset=utf-8',
    ],
});
test({
    validator: 'isMongoId',
    valid: [
        '507f1f77bcf86cd799439011',
    ],
    invalid: [
        '507f1f77bcf86cd7994390',
        '507f1f77bcf86cd79943901z',
        '',
        '507f1f77bcf86cd799439011 ',
    ],
});
test({
    validator: 'isMultibyte',
    valid: [
        'ひらがな・カタカナ、．漢字',
        'あいうえお foobar',
        'test＠example.com',
        '1234abcDEｘｙｚ',
        'ｶﾀｶﾅ',
        '中文',
    ],
    invalid: [
        'abc',
        'abc123',
        '<>@" *.',
    ],
});



test({
    validator: 'isNumeric',
    valid: [
        '123',
        '00123',
        '-00123',
        '0',
        '-0',
        '+123',
        '123.123',
        '+000000',
    ],
    invalid: [
        ' ',
        '',
        '.',
    ],
});


test({
    validator: 'isNumeric',
    args: [{
        no_symbols: true,
    }],
    valid: [
        '123',
        '00123',
        '0',
    ],
    invalid: [
        '-0',
        '+000000',
        '',
        '+123',
        '123.123',
        '-00123',
        ' ',
        '.',
    ],
});


test({
    validator: 'isOctal',
    valid: [
        '076543210',
        '0o01234567',
    ],
    invalid: [
        'abcdefg',
        '012345678',
        '012345670c',
        '00c12345670c',
        '',
        '..',
    ],
});

// test({
//     validator: 'isPort',
//     valid: [
//         '0',
//         '22',
//         '80',
//         '443',
//         '3000',
//         '8080',
//         '65535',
//     ],
//     invalid: [
//         '',
//         '-1',
//         '65536',
//     ],
// });

test({
    validator: 'isRFC3339',
    valid: [
        '2009-05-19 14:39:22-06:00',
        '2009-05-19 14:39:22+06:00',
        '2009-05-19 14:39:22Z',
        '2009-05-19T14:39:22-06:00',
        '2009-05-19T14:39:22Z',
        '2010-02-18T16:23:48.3-06:00',
        '2010-02-18t16:23:33+06:00',
        '2010-02-18t16:23:33+06:00',
        '2010-02-18t16:12:23.23334444z',
        '2010-02-18T16:23:55.2283Z',
        '2009-05-19 14:39:22.500Z',
        '2009-05-19 14:39:55Z',
        '2009-05-31 14:39:55Z',
        '2009-05-31 14:53:60Z',
        '2010-02-18t00:23:23.33+06:00',
        '2010-02-18t00:23:32.33+00:00',
        '2010-02-18t00:23:32.33+23:00',
    ],
    invalid: [
        '2010-02-18t00:23:32.33+24:00',
        '2009-05-31 14:60:55Z',
        '2010-02-18t24:23.33+0600',
        '2009-05-00 1439,55Z',
        '2009-13-19 14:39:22-06:00',
        '2009-05-00 14:39:22+0600',
        '2009-00-1 14:39:22Z',
        '2009-05-19T14:39:22',
    ],
});





test({
    validator: 'isRgbColor',
    valid: [
        'rgb(0,0,0)',
        'rgb(255,255,255)',
        'rgba(0,0,0,0)',
        'rgba(255,255,255,1)',
        'rgba(255,255,255,.1)',
        'rgba(255,255,255,0.1)',
        'rgb(5%,5%,5%)',
        'rgba(5%,5%,5%,.3)',
    ],
    invalid: [
        'rgb(0,0,0,)',
        'rgb(0,0,)',
        'rgb(0,0,256)',
        'rgb()',
        'rgba(0,0,0)',
        'rgba(255,255,255,2)',
        'rgba(255,255,255,.12)',
        'rgba(255,255,256,0.1)',
        'rgb(4,4,5%)',
        'rgba(5%,5%,5%)',
        'rgba(3,3,3%,.3)',
        'rgb(101%,101%,101%)',
        'rgba(3%,3%,101%,0.3)',
    ],
});



test({
    validator: 'isSemVer',
    valid: [
        '0.0.4',
        '1.2.3',
        '10.20.30',
        '1.1.2-prerelease+meta',
        '1.1.2+meta',
        '1.1.2+meta-valid',
        '1.0.0-alpha',
        '1.0.0-beta',
        '1.0.0-alpha.beta',
        '1.0.0-alpha.beta.1',
        '1.0.0-alpha.1',
        '1.0.0-alpha0.valid',
        '1.0.0-alpha.0valid',
        '1.0.0-alpha-a.b-c-somethinglong+build.1-aef.1-its-okay',
        '1.0.0-rc.1+build.1',
        '2.0.0-rc.1+build.123',
        '1.2.3-beta',
        '10.2.3-DEV-SNAPSHOT',
        '1.2.3-SNAPSHOT-123',
        '1.0.0',
        '2.0.0',
        '1.1.7',
        '2.0.0+build.1848',
        '2.0.1-alpha.1227',
        '1.0.0-alpha+beta',
        '1.2.3----RC-SNAPSHOT.12.9.1--.12+788',
        '1.2.3----R-S.12.9.1--.12+meta',
        '1.2.3----RC-SNAPSHOT.12.9.1--.12',
        '1.0.0+0.build.1-rc.10000aaa-kk-0.1',
        '99999999999999999999999.999999999999999999.99999999999999999',
        '1.0.0-0A.is.legal',
    ],
    invalid: [
        '-invalid+invalid',
        '-invalid.01',
        'alpha',
        'alpha.beta',
        'alpha.beta.1',
        'alpha.1',
        'alpha+beta',
        'alpha_beta',
        'alpha.',
        'alpha..',
        'beta',
        '1.0.0-alpha_beta',
        '-alpha.',
        '1.0.0-alpha..',
        '1.0.0-alpha..1',
        '1.0.0-alpha...1',
        '1.0.0-alpha....1',
        '1.0.0-alpha.....1',
        '1.0.0-alpha......1',
        '1.0.0-alpha.......1',
        '01.1.1',
        '1.01.1',
        '1.1.01',
        '1.2',
        '1.2.3.DEV',
        '1.2-SNAPSHOT',
        '1.2.31.2.3----RC-SNAPSHOT.12.09.1--..12+788',
        '1.2-RC-SNAPSHOT',
        '-1.0.3-gamma+b7718',
        '+justmeta',
        '9.8.7+meta+meta',
        '9.8.7-whatever+meta+meta',
        '99999999999999999999999.999999999999999999.99999999999999999-',
        '---RC-SNAPSHOT.12.09.1--------------------------------..12',
    ],
});




test({
    validator: 'isSlug',
    args: ['cs_67CZ'],
    valid: ['cs-cz', 'cscz'],
    invalid: [
        'not-----------slug',
        '@#_$@',
        '-not-slug',
        'not-slug-',
        '_not-slug',
        'not-slug_',
    ],
});

test({
    validator: 'isSurrogatePair',    
    valid: [
    '𠮷野𠮷',
    '𩸽',
    'ABC千𥧄1-2-3',
    ],
    invalid: [
        '吉野竈',
        '鮪',
        'ABC1-2-3',
    ],
});

test({
    validator: 'isUpperCase',
    valid: [
        'ABC',
        'ABC123',
        'ALL CAPS IS FUN.',
        '   .',
    ],
    invalid: [
        'fooBar',
        '123abc',
    ],
});

test({
    validator: 'isUUID',
    valid: [
        'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
        'A987FBC9-4BED-4078-8F07-9141BA07C9F3',
        'A987FBC9-4BED-5078-AF07-9141BA07C9F3',
    ],
    invalid: [
        '',
        'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
        'A987FBC9-4BED-3078-CF07-9141BA07C9F3xxx',
        'A987FBC94BED3078CF079141BA07C9F3',
        '934859',
        '987FBC9-4BED-3078-CF07A-9141BA07C9F3',
        'AAAAAAAA-1111-1111-AAAG-111111111111',
    ],
});


// test({
//     validator: 'isUUID',
//     args: [3],
//     valid: [
//         'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
//     ],
//     invalid: [
//         '',
//         'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
//         '934859',
//         'AAAAAAAA-1111-1111-AAAG-111111111111',
//         'A987FBC9-4BED-4078-8F07-9141BA07C9F3',
//         'A987FBC9-4BED-5078-AF07-9141BA07C9F3',
//     ],
// });
// test({
//     validator: 'isUUID',
//     args: [4],
//     valid: [
//         '713ae7e3-cb32-45f9-adcb-7c4fa86b90c1',
//         '625e63f3-58f5-40b7-83a1-a72ad31acffb',
//         '57b73598-8764-4ad0-a76a-679bb6640eb1',
//         '9c858901-8a57-4791-81fe-4c455b099bc9',
//     ],
//     invalid: [
//         '',
//         'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
//         '934859',
//         'AAAAAAAA-1111-1111-AAAG-111111111111',
//         'A987FBC9-4BED-5078-AF07-9141BA07C9F3',
//         'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
//     ],
// });

// test({
//     validator: 'isUUID',
//     args: [5],
//     valid: [
//         '987FBC97-4BED-5078-AF07-9141BA07C9F3',
//         '987FBC97-4BED-5078-BF07-9141BA07C9F3',
//         '987FBC97-4BED-5078-8F07-9141BA07C9F3',
//         '987FBC97-4BED-5078-9F07-9141BA07C9F3',
//     ],
//     invalid: [
//         '',
//         'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
//         '934859',
//         'AAAAAAAA-1111-1111-AAAG-111111111111',
//         '9c858901-8a57-4791-81fe-4c455b099bc9',
//         'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
//     ],
// });


test({
    validator: 'isVariableWidth',
    valid: [
        'ひらがなカタカナ漢字ABCDE',
        '３ー０123',
        'Ｆｶﾀｶﾅﾞﾬ',
        'Good＝Parts',
    ],
    invalid: [
        'abc',
        'abc123',
        '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
        'ひらがな・カタカナ、．漢字',
        '１２３４５６',
        'ｶﾀｶﾅﾞﾬ',
    ],
});

test({
    validator: 'isWhitelisted',
    args: ['abcdefghijklmnopqrstuvwxyz-'],
    valid: ['foo', 'foobar', 'baz-foo'],
    invalid: ['foo bar', 'fo.bar', 'türkçe'],
});
