<?php
	/*API endpoint for meta parser
	Parameters:	url
	Request Type: GET
	Url Sample: /server/api/metaparse.php?url=www.yahoo.com
	*/
	include ('../config.php');
	include ('../lib/util.php');

	$url = $_GET['url'];
	
	//Validate URL to make sure it contains http:// if not, then add it.
	$position_of_http = strpos($url, 'http://');

	if ($position_of_http === false) {
		$url = 'http://'.$url;
	}
		
	if (isset($url) && filter_var($url, FILTER_VALIDATE_URL)) {

		$pageTitle = getPageTitle($url);
		echo $pageTitle;
	} else {
		echo 'Error: No URL specified.';
	}

?>
