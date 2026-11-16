const test = require('node:test');
const assert = require('node:assert/strict');

let searchModule = {};

try {
    searchModule = require('../search.js');
} catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
        throw error;
    }
}

const { animeData, filterAnime } = searchModule;

test('provides at least ten local anime entries', () => {
    assert.ok(Array.isArray(animeData), 'animeData should be an array');
    assert.ok(animeData.length >= 10, 'animeData should contain at least ten entries');
});

test('matches partial titles without case sensitivity', () => {
    const results = filterAnime(animeData, 'DEMON', 'All');

    assert.deepEqual(results.map((anime) => anime.title), ['Demon Slayer']);
});

test('filters by genre and combines genre with a title query', () => {
    const actionResults = filterAnime(animeData, '', 'Action');
    const combinedResults = filterAnime(animeData, 'full', 'Action');

    assert.ok(actionResults.length > 1);
    assert.ok(actionResults.every((anime) => anime.genre === 'Action'));
    assert.deepEqual(combinedResults.map((anime) => anime.title), ['Fullmetal Alchemist: Brotherhood']);
});

test('treats empty or whitespace search as no title restriction', () => {
    assert.equal(filterAnime(animeData, '', 'All').length, animeData.length);
    assert.equal(filterAnime(animeData, '   ', 'All').length, animeData.length);
});

test('returns an empty array when no anime matches', () => {
    assert.deepEqual(filterAnime(animeData, 'not a real anime title', 'All'), []);
});
