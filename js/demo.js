;(function (win, doc, undefined)
{ 'use strict';

	var setEventListener = function (element, event, callback)
	{
		if (element.addEventListener)
		{
			element.addEventListener(event, callback, false);
		}
		else if (element.attachEvent)
		{
			element.attachEvent('on' + event, callback);
		}
	}

	setEventListener(win, 'load', function ()
	{
		var lightThemeButton = doc.getElementById('light-theme');
		var darkThemeButton = doc.getElementById('dark-theme');

		setEventListener(lightThemeButton, 'click', function ()
		{
			doc.body.classList.remove('dark');

			darkThemeButton.querySelector('input[type="checkbox"]').checked = false;
		});

		setEventListener(darkThemeButton, 'click', function ()
		{
			doc.body.classList.add('dark');

			lightThemeButton.querySelector('input[type="checkbox"]').checked = false;
		});
	});
})(window, document);