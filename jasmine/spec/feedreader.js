/* feedreader.js
 *
 * This is a spec file that will be read by Jasmine and contains
 * all of the tests that will be run against my application.
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
		 * empty.
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* This is a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */

		it('Urls are defined', function() {
			for (const  allFeed of allFeeds) {
				expect(allFeed.url).toBeDefined(); 
				expect(allFeed.url.length).not.toBe(0);
			}
		});


		/* TODO: This is a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */

		it('Names are defined', function() {
			for (const  allFeed of allFeeds) {
				expect(allFeed.name).toBeDefined();
				expect(allFeed.name.length).not.toBe(0);
			}
		});

	});


	/* TODO: This is a new test suite named "The menu" */

	describe('The menu', function() {

		const  body = document.querySelector('body');
		const  menuIcon = document.querySelector('.menu-icon-link');
		
		// function visHid() {
			// body.classList.toggle('menu-hidden');
		// };

		/* This is a test that ensures the menu element is
		 * hidden by default. 
		 */

		it('is hidden', function() {
			expect(body.classList.contains('menu-hidden')).toBe(true);
		});

		 /* A test that ensures the menu changes
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

	/* TODO: This is a new test suite named "Initial Entries" */

	describe('Initial Entries', function() {

		/* This is a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 */

		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('contains at least a single entry in the feed container', function() {
			const feed = document.querySelectorAll('.feed .entry-link');
			expect(feed.length > 0).toBe(true);
		});
	});

	/* TODO: This is a new test suite named "New Feed Selection" */

	describe('New Feed Selection', function() {

		/* TODO: This is a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */

  	let firstFeed;
  	let secondFeed;

    beforeEach(function(done){
			const feed = document.querySelectorAll('.feed .entry-link');
  		loadFeed(0, function () {
     		firstFeed = feed[0].innerHTML
     		loadFeed(1, function () {
         	secondFeed = feed[1].innerHTML
         	done();
     		})
  		})
		});

		it('changes content', function() {
			console.log(firstFeed);
			console.log(secondFeed);
      expect(firstFeed).not.toEqual(secondFeed);
		});
	});
}());