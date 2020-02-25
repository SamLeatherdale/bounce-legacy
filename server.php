<?php
function process($url) {
	$data = [
		'url' => $url
	];
	file_put_contents('url.json', json_encode($data));
}
$isPost = isset($_REQUEST['url']);
$_url = $_REQUEST['url'] ?? '';
if ($isPost) {
	process($_url);
}
$url = htmlspecialchars($_url);
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Bounce Server</title>
        <style>
            form > * {
                display: block;
            }
            textarea {
                height: 100px;
                width: 300px;
            }
        </style>
	</head>
	<body>
        <p>
            <a href="index.php">Go to Client</a>
        </p>
		<form method="get">
			<label for="input-url">URL</label>
			<textarea
				name="url"
				id="input-url"
				><?php echo $url; ?></textarea>

			<input type="submit" />
		</form>
	</body>
</html>