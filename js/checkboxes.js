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

	var makeMaterialCheckbox = function (normalCheckbox)
	{
		var materialCheckbox = doc.createElement('div');
			materialCheckbox.setAttribute('class', 'checkbox');

		var ripple = doc.createElement('span');
			ripple.setAttribute('class', 'ripple');

		var check = doc.createElement('span');
			check.setAttribute('class', 'check');

		materialCheckbox.appendChild(normalCheckbox);
		materialCheckbox.appendChild(ripple);
		materialCheckbox.appendChild(check);

		return materialCheckbox;
	}

	setEventListener(win, 'load', function ()
	{
		var checkboxes = doc.querySelectorAll('input[type="checkbox"]'), checkboxes_length = checkboxes.length;

		for (var i = 0; i < checkboxes_length; ++i)
		{
			var normalCheckbox = checkboxes[i];
			var materialCheckbox = makeMaterialCheckbox(normalCheckbox.cloneNode());

			normalCheckbox.parentNode.replaceChild(materialCheckbox, normalCheckbox);
		}
	});
})(window, document);