/**
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

/**
 * JavaScript to handle confirm windows in the Import/Export module
 */
define('TYPO3/CMS/Impexp/ImportExport', ['jquery'], function ($) {
	$(function() {
		$(document).on('click', '.t3js-confirm-trigger', function() {
			$button = $(this);
			top.TYPO3.Modal.confirm($button.data('title'), $button.data('message'))
				.on('confirm.button.ok', function() {
					$('#t3js-submit-field')
						.attr('name', $button.attr('name'))
						.closest('form').submit();
					top.TYPO3.Modal.currentModal.trigger('modal-dismiss');
				})
				.on('confirm.button.cancel', function() {
					top.TYPO3.Modal.currentModal.trigger('modal-dismiss');
				});
		});
	});
});
