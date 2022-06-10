const lyrics = require('../index');

(async () => {
	const lyric = await lyrics.LyricsFinder('sacrifice - the weeknd');
	console.log(lyric);
})();

// or

lyrics.LyricsFinder('sacrifice - the weeknd').then(data => {
	console.log(data);
});