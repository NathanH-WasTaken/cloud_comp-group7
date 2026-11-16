const animeData = [
    {
        title: 'Demon Slayer',
        genre: 'Action',
        description: 'A kind-hearted swordsman joins the Demon Slayer Corps to save his sister from a curse.',
        image: 'download_images/DemonSlayer.jpg'
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        genre: 'Action',
        description: 'Two brothers search for the Philosopher\'s Stone after an alchemy experiment goes wrong.'
    },
    {
        title: 'Attack on Titan',
        genre: 'Action',
        description: 'Humanity fights for survival behind enormous walls while uncovering a hidden history.'
    },
    {
        title: 'My Hero Academia',
        genre: 'Action',
        description: 'A determined student trains to become a hero in a world where superpowers are common.'
    },
    {
        title: 'Spy x Family',
        genre: 'Comedy',
        description: 'A spy, an assassin, and a telepath form an unlikely family while hiding their secrets.'
    },
    {
        title: 'Kaguya-sama: Love Is War',
        genre: 'Comedy',
        description: 'Two brilliant student council leaders turn romance into a hilarious battle of wits.'
    },
    {
        title: 'Fruits Basket',
        genre: 'Romance',
        description: 'An optimistic student befriends a family carrying a mysterious zodiac curse.'
    },
    {
        title: 'Your Lie in April',
        genre: 'Romance',
        description: 'A young pianist rediscovers music and joy after meeting a spirited violinist.'
    },
    {
        title: 'Haikyu!!',
        genre: 'Sports',
        description: 'A short but driven athlete joins his high school volleyball team and aims for nationals.'
    },
    {
        title: 'Blue Lock',
        genre: 'Sports',
        description: 'Talented strikers enter an intense program designed to create Japan\'s ultimate forward.'
    },
    {
        title: 'Death Note',
        genre: 'Thriller',
        description: 'A gifted student discovers a notebook with deadly power and challenges a master detective.'
    },
    {
        title: 'Steins;Gate',
        genre: 'Sci-Fi',
        description: 'A group of friends accidentally discovers a way to send messages into the past.'
    }
];

function filterAnime(animeList, searchTerm = '', selectedGenre = 'All') {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const normalizedGenre = selectedGenre.trim().toLowerCase();

    return animeList.filter((anime) => {
        const titleMatches = anime.title.toLowerCase().includes(normalizedSearch);
        const genreMatches = normalizedGenre === 'all'
            || anime.genre.toLowerCase() === normalizedGenre;

        return titleMatches && genreMatches;
    });
}

function createAnimeCard(anime) {
    const card = document.createElement('article');
    card.className = 'anime-card';

    const media = document.createElement('div');
    media.className = 'anime-card-media';

    if (anime.image) {
        const image = document.createElement('img');
        image.src = anime.image;
        image.alt = `${anime.title} artwork`;
        image.loading = 'lazy';
        media.appendChild(image);
    } else {
        const placeholder = document.createElement('span');
        placeholder.className = 'anime-placeholder';
        placeholder.setAttribute('aria-hidden', 'true');
        placeholder.textContent = anime.title.charAt(0);
        media.appendChild(placeholder);
    }

    const content = document.createElement('div');
    content.className = 'anime-card-content';

    const genre = document.createElement('p');
    genre.className = 'anime-genre';
    genre.textContent = anime.genre;

    const title = document.createElement('h2');
    title.textContent = anime.title;

    const description = document.createElement('p');
    description.className = 'anime-description';
    description.textContent = anime.description;

    content.append(genre, title, description);
    card.append(media, content);

    return card;
}

function initializeSearch() {
    const searchInput = document.querySelector('#anime-search');
    const genreSelect = document.querySelector('#genre-filter');
    const resultsContainer = document.querySelector('#search-results');
    const resultsSummary = document.querySelector('#results-summary');
    const emptyState = document.querySelector('#empty-state');

    if (!searchInput || !genreSelect || !resultsContainer || !resultsSummary || !emptyState) {
        return;
    }

    function updateResults() {
        const matches = filterAnime(animeData, searchInput.value, genreSelect.value);
        resultsContainer.replaceChildren(...matches.map(createAnimeCard));

        const resultLabel = matches.length === 1 ? 'anime' : 'anime titles';
        resultsSummary.textContent = `${matches.length} ${resultLabel} found`;
        emptyState.hidden = matches.length !== 0;
    }

    searchInput.addEventListener('input', updateResults);
    genreSelect.addEventListener('change', updateResults);
    updateResults();
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSearch);
    } else {
        initializeSearch();
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { animeData, filterAnime };
}
