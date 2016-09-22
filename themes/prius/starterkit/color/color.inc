<?php

/**
 * @file
 * Lists available colors and color schemes for the Prius theme.
 */

$info = array(
  // Available colors and color labels used in theme.
  'fields' => array(
    'base' => t('Base background'),
  ),
  // Pre-defined color schemes.
  'schemes' => array(
    'default' => array(
      'title' => t('Prius (default)'),
      'colors' => array(
        'base' => '#9f8365',
      ),
    ),
    'whity' => array(
      'title' => t('Whity'),
      'colors' => array(
        'base' => '#ffffff',
      ),
    ),
  ),

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => array(
    'css/colors.css',
  ),

  // Files to copy.
  'copy' => array(
    'logo.png',
  ),

  // Gradient definitions.
  'gradients' => array(
    array(
      // (x, y, width, height).
      'dimension' => array(0, 0, 0, 0),
      // Direction of gradient ('vertical' or 'horizontal').
      'direction' => 'horizontal',
      // Keys of colors to use for the gradient.
      'colors' => array('left', 'right'),
    ),
  ),

  // Preview files.
  'preview_library' => 'prius/color.preview',
  'preview_html' => 'color/preview.html',
);
