# cloud_comp-group7
Members: Nathan, Allen, David

# Rules
1. Always merge main into your branch before creating pull request with your changes (this helps avoid merge conflicts)
2. Merge main into your local branch if someone pushed their changes before starting your own changes (avoids conflicts)
3. Pull Request needs to be created to merge code to main (just as a reminder to notify people that you made changes, and helps have an update log of what changed)
4. Check that main did indeed receive your changes after merging pull request in (just a last check to ensure your changes were merged) 
![Image of checking that changes were pushed](rule_image.png)

## index.html
This is where the home page is.

## downloads.html
This is where the downloading page will be.

## gallery.html 
This is where the image gallery will be.

## style.css
This is where all styling will be.

## Anime Search & Filter

The search feature runs entirely in the browser with local sample data; it does not require AWS, an API, a database, or credentials.

To test it locally:

1. Open `search.html` directly in a web browser, or serve the repository with a simple local web server and visit `/search.html`.
2. Type part of an anime title in the search field. Matching is case-insensitive and updates immediately.
3. Choose a genre to filter the cards. The title and genre filters can be used together.
4. Enter a title that is not in the sample data to verify the empty state.

Feature files:

- `search.html` contains the accessible search controls, results area, navigation, and footer.
- `search.js` contains the local anime dataset, filtering logic, and card rendering.
- `style.css` contains the responsive, feature-specific search styles.
- `index.html`, `gallery.html`, and `downloads.html` include the Search navigation link.
- `tests/search.test.js` verifies title matching, genre filtering, combined filters, empty input, and zero results using Node's built-in test runner (`node --test tests/search.test.js`).
