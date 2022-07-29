import sum, { div, sub }  from '../src/sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sub 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
});

test('div 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2);
});