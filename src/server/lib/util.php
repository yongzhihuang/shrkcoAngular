<?php
    function sanitize($input) {
        if (is_array($input)) {
            foreach($input as $var=>$val) {
                $output[$var] = sanitize($val);
            }
        }
        else {
            if (get_magic_quotes_gpc()) {
                $input = stripslashes($input);
            }
            $input  = cleanInput($input);
            $output = mysql_real_escape_string($input);
        }
        return $output;
    }

    function getPageTitle($page_url) {
        $read_page=file_get_contents($page_url);
        preg_match("/<title.*?>[\n\r\s]*(.*)[\n\r\s]*<\/title>/", $read_page, $page_title);
        if (isset($page_title[1]))
        {
            if ($page_title[1] == '')
            {
                  return $page_url;
            }
            $page_title = $page_title[1];
            return trim($page_title);
        }
        else
        {
            return $page_url;
        }
    }
?>
