export const FRUITS = [
    'abacate', 'amora', 'ameixa', 'acerola', 'abacaxi', 'açai', 'banana',
    'carambola', 'caju', 'cereja', 'cacau', 'caqui', 'cupuaçu', 'damasco',
    'figo', 'framboesa', 'graviola', 'goiaba', 'groselia', 'guarana',
    'jaca', 'kiwi', 'laranja', 'limao', 'lima', 'lixia', 'melancia',
    'mamao', 'melao', 'maracuja', 'manga', 'maça', 'mexerica', 'morango',
    'nectarina', 'pera', 'pessego', 'pitanga', 'pinha', 'quina', 'roma',
    'tangerina', 'uva'
];

export const FRUITS_UPPER_CASE = FRUITS.map(a => a.toUpperCase());
export const FRUITS_FILTER_R = FRUITS_UPPER_CASE.filter(fruit => fruit.includes("R"));