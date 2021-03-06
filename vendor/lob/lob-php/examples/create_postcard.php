<?php
require '../vendor/autoload.php';

$file = file_get_contents('html/card.html');

$lob = new \Lob\Lob('test_7c5d111af5ccfedb9f0eea91745c93896a1');

$to_address = $lob->addresses()->create(array(
  'name'          => 'Lob.com',
  'address_line1' => '185 Berry Street',
  'address_line2' => 'Suite 1510',
  'address_city'  => 'San Francisco',
  'address_state' => 'CA',
  'address_zip'   => '94107',
  'email'         => 'support@lob.com',
  'phone'         => '555-555-5555'
));

$from_address = $lob->addresses()->create(array(
  'name'          => 'The Big House',
  'address_line1' => '1201 S Main St',
  'address_line2' => '',
  'address_city'  => 'Ann Arbor',
  'address_state' => 'MI',
  'address_zip'   => '48104',
  'email'         => 'goblue@umich.edu',
  'phone'         => '734-647-2583'
));

$postcard = $lob->postcards()->create(array(
  'to'          => $to_address['id'],
  'from'        => $from_address['id'],
  'front'       => $file,
  'message'     => 'Happy Birthday!',
  'data[name]'  => 'Harry'
));

print_r($postcard);
?>
