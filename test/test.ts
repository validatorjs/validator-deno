import test from './test-template.ts'

test({
    validator: 'equals',
    args: ['abc'],
    valid: ['abc'],
    invalid: ['Abc', '123']
})

test({
    validator: 'equals',
    args: ['abc ', { trim: true }],
    valid: ['  abc  '],
    invalid: ['Abc', '123']
})

test({
    validator: 'equals',
    args: ['abc', { ignore_case: true }],
    valid: ['abc', 'AbC'],
    invalid: ['@bc', '123']
})

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
})

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
})

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
})

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