/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */

		it('Urls are defined', function() {
			for (const  allFeed of allFeeds) {
				expect(allFeed.url).toBeDefined(); 
				expect(allFeed.url).not.toBeNull();
			}
		});


		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */

		it('Names are defined', function() {
			for (const  allFeed of allFeeds) {
				expect(allFeed.name).toBeDefined();
				expect(allFeed.name).not.toBeNull();
			}
		});

	});


	/* TODO: Write a new test suite named "The menu" */

	describe('The menu', function() {

		const  body = document.querySelector('body');
		const  menuIcon = document.querySelector('.menu-icon-link');
		
		// function visHid() {
			// body.classList.toggle('menu-hidden');
		// };

		/* TODO: Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */

		it('is hidden', function() {
			expect(body.classList.contains('menu-hidden')).toBe(true);
		});

		 /* a test that ensures the menu changes
		  * visibility when the menu icon is clicked. 
		  */

		it('changes visibility when clicked', function() {
			// menuIcon.addEventListener('click', visHid);
			menuIcon.click();
			expect(body.classList.contains('menu-hidden')).toBe(false);
			// menuIcon.addEventListener('click', visHid);
			menuIcon.click();
			expect(body.classList.contains('menu-hidden')).toBe(true);
		});
	});

	/* TODO: Write a new test suite named "Initial Entries" */

	describe('Initial Entries', function() {

		/* TODO: Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */

		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('contains at least a single entry in the feed container', function() {
			const container = document.querySelector('.feed');
			const children = container.children;
			expect(children.length > 0).toBe(true);
		});
	});

	/* TODO: Write a new test suite named "New Feed Selection" */

	describe('New Feed Selection', function() {

		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */

    const container = document.querySelector('.feed-list');
    const children = container.children;
    const feedArr = [...children];

    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

    const shuffledFeed = shuffle(feedArr);
    const feedId = shuffledFeed[0];
    const feedId1 = shuffledFeed[1];

    beforeEach(function(done) {
      loadFeed(0);
      loadFeed(1, done);
    });

		it('changes content', function() {
      expect(feedId.textContent !== feedId1.textContent).toBe(true)
		});
	});
}());
