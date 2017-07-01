import json, re

def createJson():
	# Opens the Events JS file
	file = open('../js/events.js', 'r')
	file_contents = file.read()

	# Removes the var from the object
	cleanUp01 = file_contents.split('var eventsJSON = ')
	cleanedUp01 = '{ "events" : '.join(cleanUp01)

	# Cleans up the data
	cleanUp02 = cleanedUp01.split('new Date(')
	cleanedUp02 = "".join(cleanUp02)

	# Conctas firle paths
	cleanUp03 = cleanedUp02.split('" + "')
	cleanedUp03 = "".join(cleanUp03)

	# Removes JS comments
	cleanUp04 = cleanedUp03.split(' // Do not modify')
	cleanedUp04 = "".join(cleanUp04)

	# More date clean up, this should be higher up
	cleanUp05 = cleanedUp04.split('"),')
	cleanedUp05 = '",'.join(cleanUp05)

	# Removes more random comments
	cleanUp06 = cleanedUp05.split('//')
	cleanedUp06 = "".join(cleanUp06)

	# Removes white space
	removeSpace = re.sub("\s\s+$"," ", cleanedUp06)

	# Removes escaping chars
	removeSpace2 = re.sub('\\"','"', removeSpace)

	# Opens and over writes the EventsJSON file
	target = open('../js/events.json','w')
	target.write(removeSpace2 + "}")

	file.close
createJson()

######################################

def buildPages():
	# Opens the JSON file
	xxx = open('../js/events.json')
	yyy = json.load(xxx)
	urlData = '../js/events.json'
	jsonFile = open(urlData)
	data = jsonFile.read()
	pythonData = json.loads(data)

	# Builds Special Event pages

	message = """<!doctype html>
<html class="no-js" lang="">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title id="pageTitle"><!-- CREATE WITH JS --></title>
      <meta name="description" id="pageDesc" content="">
      <base href="" id="baseTag">
      <script src="../js/baseTagTesting.js"></script>
      
      <!-- Robots -->
      <meta name="robots" content="index,follow">
      <!-- Search Console -->
      <meta name="google-site-verification" content="verification_token">
      <meta name="url" content="https://www.necto.com/">
      <!-- Geo tags -->
      <meta name="ICBM" content="42.279187, -83.742423">
      <meta name="geo.position" content="latitude;longitude">
      <meta name="geo.region" content="US-MI]">
      <meta name="geo.placename" content="Ann Arbor">
      <!-- Canonical TODO: Set up JS to populate this -->
      <link href="https://www.necto.com" rel="canonical">
      <!-- Author -->
      <link href="https://plus.google.com/110171494641120366973" rel="author">
      <link href="https://plus.google.com/110171494641120366973" rel="me" type="text/html">
      <link href="mailto:info@necto.com" rel="me">
      <link href="tel:+17349945835" rel="me">
      <!-- favicon.ico-->
      <link href="favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
      <link href="favicon/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
      <link href="favicon/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16">
      <link href="favicon/manifest.json" rel="manifest">
      <link href="favicon/safari-pinned-tab.svg" rel="mask-icon" color="#ed1968">
      <link href="favicon/favicon.ico" rel="shortcut icon">
      <meta name="msapplication-config" content="favicon/browserconfig.xml">
      <meta name="theme-color" content="#3bddff">
      <!-- Facebook OG EVENT PAGES Data -->
      <meta property="og:type" content="article">
      <meta property="og:title" content="" id="ogTitle">
      <meta property="og:site_name" content="Necto Nightclub">
      <meta property="og:url" content="" id="ogURL">
      <meta property="og:image" content=""  id="ogImg">
      <!-- Twitter Card Data -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="@Necto">
      <meta name="twitter:title" content=""  id="twitterTitle">
      <meta name="twitter:description" content="" id="twitterDesc">
      <!--
      <script src="js/vendor/modernizr-2.8.3.min.js"></script>
      -->
      <!-- Styles -->
      <link href="css/main.css" rel="stylesheet">
      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700" rel="stylesheet"> 
      <script>
      /**
      * Function that tracks a click on an outbound link in Analytics.
      * This function takes a valid URL string as an argument, and uses that URL string
      * as the event label. Setting the transport method to 'beacon' lets the hit be sent
      * using 'navigator.sendBeacon' in browser that support it.
      */
      var trackOutboundLink = function(url) {
        ga('send', 'event', 'Outbound', 'Outbound Clicks', url, {
          'transport': 'beacon',
          'hitCallback': function(){document.location = url;}
        });
      }
      </script> 
  </head>
  <body>
      <!--[if lt IE 8]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
      <![endif]-->
    <!-- MOBILE GLOBAL NAV -->
    <header class="mobile-global-nav">
      <div class="top-bar">
        <a href="/" class="logo"><img src="img/necto-logo.png" alt="The logo for the Necto Nightclub in Ann Arbor, Michigan."></a>
        <nav class="global-nav" >
          <span id="mobileMenuButton" onclick="openMobileNav()">MENU</span>
        </nav>
      </div>
      <div class="mobile-global-nav-modal-hidden row" id="mobileGlobalNav">
        <ul id="mobileHeaderNav">
          <li id="weeklyMobileNavcontainer" class="weeklyMobileNavLink"></li>
        </ul> 
      </div>
    </header>
    <!-- DESKTOP GLOBAL NAV -->
    <header class="full-global-nav">
        <a href="/" class="logo"><img src="img/necto-logo.png" alt="The logo for the Necto Nightclub in Ann Arbor, Michigan."></a>
        <nav class="global-nav" id="desktopHeaderMainNav"></nav>
        <br>
        <nav class="weekly-nav" id="desktopHeaderWeeklyNav"></nav>
    </header>
    <main class="sub-page">
      <!-- SPECIAL EVENT -->
      <div class="row centered-cols section-header">
        <div class="col col-12-xs col-8-md" id="specialEventPageContent">
          <!-- INSERT SPECIAL EVENT CONTENT HERE -->
        </div>
      </div>
    </main>
    <footer>
      <div class="row">
        <div class="col col-12-xs col-3-sm">
          <div itemscope itemtype="http://schema.org/Organization">
              <span itemprop="name">Necto Nightclub</span><br>
              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                  <a href="directions.html"><span itemprop="streetAddress">516 E. Liberty</span><br>
                  <span itemprop="addressLocality">Ann Arbor</span><span>, </span><span itemprop="addressRegion">MI</span> 
                  <span itemprop="postalCode">48104</span></a>
              </div>
              Info:  <span itemprop="telephone"><a href="tel:17349945436">734-994-5436</a></span><br>
              Phone: <span itemprop="telephone"><a href="tel:17349945835">734-994-5835</a></span><br>
              Email: <span itemprop="email"><a href="mailto:info@necto.com">info@necto.com</a></span>
          </div>
        </div>
        <div class="col col-12-xs col-3-sm">
          <nav>
            <ul id="footerWeeklyNav">
            </ul>
          </nav>
        </div>
        <div class="col col-12-xs col-3-sm">
          <nav>
            <ul id="footerMainNav">
            </ul>
          </nav>
        </div>
        <div class="col col-12-xs col-3-sm">
          <nav>
            <ul id="footerSecondaryNav">
            </ul>
          </nav>
        </div>
      </div>
    </footer>
    <!-- DO WE NEED JQUERY?
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
    -->
    <script src="js/plugins.js"></script>
    <script src="js/events-min.js"></script>
    <script src="js/main.js"></script>
    <!-- Builds all navigtion -->
    <script>buildNavs()</script>
    <!-- Populates the Special Events on the Special Event Page -->
    <script>specialEventPage()</script>
    <!-- Google Analytics -->
    <script type="text/javascript">
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-71282212-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
"""

	numberOfEvents = len(pythonData['events'])

	for event in range(0, numberOfEvents):
		eventLink = pythonData['events'][event]['eventLink']
		url = eventLink.replace("special-events/", "")
		
		# Makes new page
		newPage = open('../special-events/'+url,'w')
		newPage.write(message)

buildPages()

##############

# Build Sitemap

def buildSiteMap():

	listItemStart = '<li><a href="special-events/'
	listItemMid = '">'
	listItemEnd = '</a></li>'
	theListArray = []
	

	# Opens the JSON file
	xxx = open('../js/events.json')
	yyy = json.load(xxx)
	urlData = '../js/events.json'
	jsonFile = open(urlData)
	data = jsonFile.read()
	pythonData = json.loads(data)
	numberOfEvents = len(pythonData['events'])


	for event in range(0, numberOfEvents):

		eventLink = pythonData['events'][event]['eventLink']
		url = eventLink.replace("special-events/", "")
		theListArray.append(listItemStart + url + listItemMid + url + listItemEnd)
		theListString = ''.join(theListArray)

		

	head = """<!doctype html>
	<html class="no-js" lang="">
	  <head>
	      <meta charset="utf-8">
	      <meta http-equiv="x-ua-compatible" content="ie=edge">
	      <meta name="viewport" content="width=device-width, initial-scale=1">

	      <title>Sitemap | Necto Nightclub | Ann Arbor, MI</title>
	      <meta name="description" content="A list of web pages found on Necto.com, the website for the Necto Nightclub in Ann Arbor, MI.">
	      
	      <base href="" id="baseTag">

	      <!-- Robots -->
	      <meta name="robots" content="noindex,follow,nosnippet">

	      <!-- Search Console -->
	      <meta name="google-site-verification" content="verification_token">

	      <meta name="url" content="https://www.necto.com/">

	      <!-- Geo tags -->
	      <meta name="ICBM" content="42.279187, -83.742423">
	      <meta name="geo.position" content="latitude;longitude">
	      <meta name="geo.region" content="US-MI]">
	      <meta name="geo.placename" content="Ann Arbor">

	      <!-- Canonical TODO: Set up JS to populate this -->
	      <link href="https://www.necto.com" rel="canonical">

	      <!-- Author -->
	      <link href="https://plus.google.com/110171494641120366973" rel="author">
	      <link href="https://plus.google.com/110171494641120366973" rel="me" type="text/html">
	      <link href="mailto:info@necto.com" rel="me">
	      <link href="tel:+17349945835" rel="me">

	      <!-- favicon.ico-->
	      <link href="favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
	      <link href="favicon/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
	      <link href="favicon/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16">
	      <link href="favicon/manifest.json" rel="manifest">
	      <link href="favicon/safari-pinned-tab.svg" rel="mask-icon" color="#ed1968">
	      <link href="favicon/favicon.ico" rel="shortcut icon">
	      <meta name="msapplication-config" content="favicon/browserconfig.xml">
	      <meta name="theme-color" content="#3bddff">

	      <!--
	      <script src="js/vendor/modernizr-2.8.3.min.js"></script>
	      -->
	      <!-- Styles -->
	      <link href="css/main.css" rel="stylesheet">

	      <!-- Google Fonts -->
	      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700" rel="stylesheet"> 
				<script>
				/**
				* Function that tracks a click on an outbound link in Analytics.
				* This function takes a valid URL string as an argument, and uses that URL string
				* as the event label. Setting the transport method to 'beacon' lets the hit be sent
				* using 'navigator.sendBeacon' in browser that support it.
				*/
				var trackOutboundLink = function(url) {
					ga('send', 'event', 'Outbound', 'Outbound Clicks', url, {
						'transport': 'beacon',
						'hitCallback': function(){document.location = url;}
					});
				}
				</script> 
	  </head>
	  <body>
	      <!--[if lt IE 8]>
	          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	      <![endif]-->

	    <!-- MOBILE GLOBAL NAV -->
	    <header class="mobile-global-nav">
	      <div class="top-bar">
	        <a href="/" class="logo"><img src="img/necto-logo.png" alt="The logo for the Necto Nightclub in Ann Arbor, Michigan."></a>
	        <nav class="global-nav" >
	          <span id="mobileMenuButton" onclick="openMobileNav()">MENU</span>
	        </nav>
	      </div>
	      <div class="mobile-global-nav-modal-hidden row" id="mobileGlobalNav">
	        <ul id="mobileHeaderNav">
	          <li id="weeklyMobileNavcontainer" class="weeklyMobileNavLink"></li>
	        </ul> 
	      </div>
	    </header>

	    <!-- DESKTOP GLOBAL NAV -->
	    <header class="full-global-nav">
	        <a href="/" class="logo"><img src="img/necto-logo.png" alt="The logo for the Necto Nightclub in Ann Arbor, Michigan."></a>
	        <nav class="global-nav" id="desktopHeaderMainNav"></nav>
	        <br>
	        <nav class="weekly-nav" id="desktopHeaderWeeklyNav"></nav>
	    </header>

	    <main class="sub-page page-section">

	      <div class="row sitemap-list">
	        <div class="col col-12-xs col-9-sm">
	          <h2 class="page-section-sub-header">EVENTS</h2>
	          <ul>
	""" 


	close = """
	</ul>
	        </div>
	        <div class="col col-12-xs col-3-sm">
	          <h2 class="page-section-sub-header">OTHER</h2>
	          <ul>
	            <li><a href="index.html">Home Page</a></li>
	            <li><a href="bottle-service-vip-reservations.html">Bottle Service/VIP</a></li>
	            <li><a href="private-event-night-club-rental.html">Private Rental</a></li>
	            <li><a href="directions.html">Directions</a></li>
	            <li><a href="contact.html">Contact</a></li>
	            <li>&nbsp;</li>
	            <li><a href="factory-monday.html">Factory Monday</a></li>
	            <li><a href="mix-thursday.html">MIX Thursday</a></li>
	            <li><a href="pride-friday.html">PRIDE Friday</a></li>
	            <li><a href="frequency-saturday.html">Frequency Saturday</a></li>
	            <li>&nbsp;</li>
	            <li><a href="about-the-necto.html">About the Necto</a></li>
	            <li><a href="necto-press.html">Press</a></li>
	            <li><a href="faq.html">FAQ</a></li>
	            <li><a href="necto-policies.html">Policies</a></li>
	            <li><a href="necto-booking.html">Booking</a></li>
	          </ul>
	        </div>
	      </div>


	    </main>

	    <footer>
	      <div class="row">
	        <div class="col col-12-xs col-3-sm">
	          <div itemscope itemtype="http://schema.org/Organization">
	              <span itemprop="name">Necto Nightclub</span><br>
	              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
	                  <a href="directions.html"><span itemprop="streetAddress">516 E. Liberty</span><br>
	                  <span itemprop="addressLocality">Ann Arbor</span><span>, </span><span itemprop="addressRegion">MI</span> 
	                  <span itemprop="postalCode">48104</span></a>
	              </div>
	              Info:  <span itemprop="telephone"><a href="tel:17349945436">734-994-5436</a></span><br>
	              Phone: <span itemprop="telephone"><a href="tel:17349945835">734-994-5835</a></span><br>
	              Email: <span itemprop="email"><a href="mailto:info@necto.com">info@necto.com</a></span>
	          </div>
	        </div>

	        <div class="col col-12-xs col-3-sm">
	          <nav>
	            <ul id="footerWeeklyNav">
	            </ul>
	          </nav>
	        </div>

	        <div class="col col-12-xs col-3-sm">
	          <nav>
	            <ul id="footerMainNav">
	            </ul>
	          </nav>
	        </div>

	        <div class="col col-12-xs col-3-sm">
	          <nav>
	            <ul id="footerSecondaryNav">
	            </ul>
	          </nav>
	        </div>
	      </div>
	    </footer>

	    <!-- DO WE NEED JQUERY?
	    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
	    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
	    -->

	    <script src="js/plugins.js"></script>
	    <script src="js/events-min.js"></script>
	    <script src="js/main.js"></script>

	    <!-- Builds all navigtion -->
	    <script>buildNavs()</script>

	    <!-- Populates the Special Events on the Home Page -->
	    <script>populateFrontPageEvents()</script>

	    <!-- Google Analytics -->
	    <script type="text/javascript">
	      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	      ga('create', 'UA-71282212-1', 'auto');
	      ga('send', 'pageview');
	    </script>

	  </body>
	</html>
	"""

	message = head + theListString + close

	f = open('../sitemap.html','w')
	f.write(message)
	f.close()

buildSiteMap()

# Mins JS
def minJS():
	
	# Opens the Events JS file
	file = open('../js/events.js', 'r');
	file_contents = file.read();
	
	# Removes white space
	removeSpace5 = re.sub("     "," ", file_contents)
	removeSpace4 = re.sub("    "," ", removeSpace5)
	removeSpace3 = re.sub("   "," ", removeSpace4)
	removeSpace2 = re.sub("  "," ", removeSpace3)
	lineBreaks = re.sub("/(\r\n|\n|\r)/gm","", removeSpace2)
	comment1 = re.sub(" // Do not modify","", lineBreaks)
	comment2 = re.sub(' //"eventWklOvrd" : true,','', comment1)
	tf1 = re.sub('"eventWklOvrd" : true,','"eventWklOvrd" : 1,', comment2)
	tf2 = re.sub('"eventWklOvrd" : false,','"eventWklOvrd" : 0,', tf1)
	tf3 = re.sub('"pastEvent" : false','"pastEvent" : 0', tf2)

	# Opens and over writes the EventsJSON file
	target = open('../js/events-min.js','w')
	target.write(tf3)

	file.close


minJS()