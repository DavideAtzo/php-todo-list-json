<?php

$data = file_get_contents(__DIR__ . '/data.json');
$newTodo = isset($_POST['newToDo']) ? $_POST['newToDo'] : NULL;

if ($newTodo !== NULL) {
    $data = json_decode($data, true);
    $data[] = [
        "text" => $newTodo,
        "done" => false
    ];
    $data = json_encode($data);
    file_put_contents(__DIR__ . '/data.json', $data);
}


header('Content-Type: application/json');

echo $data;
