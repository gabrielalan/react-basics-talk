<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	require_once('add.php');
} else {
	require_once('list.php');
}