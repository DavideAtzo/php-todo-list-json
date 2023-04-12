<?php
$data = file_get_contents(__DIR__.'/data.json');

$data = json_decode($data, true);
var_dump($data)

?>