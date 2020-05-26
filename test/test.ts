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