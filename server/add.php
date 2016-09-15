<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

$json = json_decode(file_get_contents('./list.json'), true);

$author = $_POST['author'];
$text = $_POST['text'];

$last = end($json);
$id = $last['id'] + 1;

$json[] = [
	'id' => $id,
	'author' => $author,
	'text'=> $text
];

$content = json_encode($json, JSON_PRETTY_PRINT);

file_put_contents('./list.json', $content);

echo $content;