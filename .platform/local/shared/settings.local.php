<?php
/**
 * @file
 * An example settings.local.php file for Drupal.
 */

// Add your database configuration here (and uncomment the block).
$databases['default']['default'] = array(
  'driver' => 'mysql',
  'host' => '127.0.0.1',
  'username' => 'root',
  'password' => 'root',
  'database' => 'chriskinch_drupal8_platformsh',
  'prefix' => '',
);

$settings['hash_salt'] = "something";
