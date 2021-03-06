.. include:: ../../Includes.txt

=======================================================================
Feature: #85607 - New ThumbnailViewHelper to render thumbnails deferred
=======================================================================

See :issue:`85607`

Description
===========

A new ViewHelper for the backend to render thumbnails deferred was introduced.

The :php:`\TYPO3\CMS\Backend\ViewHelpers\ThumbnailViewHelper` extends the :php:`ImageViewHelper` and generate the image tag with the special URI.

.. code-block:: HTML

	<be:thumbnail image="{file.resource}" maxWidth="{thumbnail.width}" maxHeight="{thumbnail.height}" />


Impact
======

Thumbnails do not block the rendering of a page, because the processing runs an extra http process.

.. index:: Backend, Fluid, ext:backend
