const { decode } = require('html-entities');
const { fetchHTML } = require('./functions');

module.exports = async (title) => {
	if (!title && typeof title !== 'string') {
		throw new Error('Title must be a string');
	}

	title = title
		.toLowerCase()
		.replace(
			new RegExp(
				/((\[|\()(?!.*?(remix|edit|remake)).*?(\]|\))|\/+|-+| x |,|"|video oficial|official lyric video| ft.?|\|+|yhlqmdlg|x100pre|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|\u274C)/,
				'g',
			),
			'',
		)
		.replace(new RegExp(/  +/, 'g'), ' ')
		.trim();

	try {
		const HTML = await fetchHTML(title);
		return decode(
			HTML.split(
				'</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">',
			)[1]
				.split(
					'</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">',
				)[0]
				.replace(new RegExp(/<span dir="rtl">|<\/span>/, 'g'), '')
				.trim(),
		);
	} catch (error) {
		return error;
	}
};
