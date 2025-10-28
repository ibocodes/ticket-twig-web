<?php
// Router for PHP built-in server
// Checks if the requested file exists and serves it, otherwise routes to index.php

$requestUri = $_SERVER['REQUEST_URI'];
$requestPath = parse_url($requestUri, PHP_URL_PATH);

// Remove query string
$requestPath = strtok($requestPath, '?');

// If the file exists and is readable, serve it
$filePath = __DIR__ . $requestPath;
if ($requestPath !== '/' && file_exists($filePath) && is_file($filePath) && is_readable($filePath)) {
    return false; // Let the server handle it
}

// If it's a directory, try index.php in that directory
if (is_dir($filePath)) {
    $indexPath = $filePath . '/index.php';
    if (file_exists($indexPath)) {
        return false;
    }
}

// Otherwise, route everything to index.php
$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['SCRIPT_FILENAME'] = __DIR__ . '/index.php';
require __DIR__ . '/index.php';

