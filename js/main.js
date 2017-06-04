/** EVENT POPULATION **/
// Assigns a var to the special events list on the homepage
//TODO: Repeat this for cal, past events page
var homepageSpecialEvents = document.getElementById('homepageSpecialEvents');
// Assigns a var to the cal events list on the cal page
var calendarEvents = document.getElementById('calendarEvents');
// Uses this to determin if an event is in the future or past
var currentDate = new Date();
// Sets the default hours an event should display for after start
var displayForXHours = 6;
// An array containg future events to be placed in the eventList
var upcomingEvents = [];
// An array of past events to be placed in the Past Events list on the the Past events page
var pastEvents = [];
// Sets a var for an empty array to be populated with weekly events n-th days in the future
var calWeeklyEventsList = [];
// Master list of club videos posted on Youtube
var videosMon = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
    "https://www.youtube.com/embed/O3GB5x7nkpA?ecver=1",
];
var videosThurs = [
    /*
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
    "https://www.youtube.com/embed/X8rlzGmn39I?ecver=1",
    "https://www.youtube.com/embed/pAl8vVPh6a8?ecver=1",
    "https://www.youtube.com/embed/pFapnjwvuBk?ecver=1",
    "https://www.youtube.com/embed/LGajm9WIb10?ecver=1",
    "https://www.youtube.com/embed/xcxTj61GEfg?ecver=1",
    "https://www.youtube.com/embed/N-Cc_telSsA?ecver=1",
    */
    "https://www.youtube.com/embed/L8b1jnrrOtA",
];
var videosFri = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
    "https://www.youtube.com/embed/N-Cc_telSsA?ecver=1",
    "https://www.youtube.com/embed/sBxWRXFz2r8",
];
var videosSat = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
    "https://www.youtube.com/embed/N-Cc_telSsA?ecver=1",
];
// Populates videos on the Weekly event pages
function populateWeeklyVideo(day) {
    var numOfVideos;
    var videoPool;
    /* mon */ if (day === 1) { numOfVideos = videosMon.length; videoPool = videosMon; }
    /* thr */ if (day === 4) { numOfVideos = videosThurs.length; videoPool = videosThurs; }
    /* fri */ if (day === 5) { numOfVideos = videosFri.length; videoPool = videosFri; }
    /* sat */ if (day === 6) { numOfVideos = videosSat.length; videoPool = videosSat; }
    document.getElementById('weekly-video-container').innerHTML = '<iframe width="611" height="344" src="' + videoPool[Math.floor(Math.random() * numOfVideos)] + '" frameborder="0" allowfullscreen></iframe>';
}
// Pulls event data from the Events.js file
var events = eventsJSON;
// The basic Weekly Events
var weeklyEvents = [
    {
        "eventName"    : "Factory Monday",
        "eventDesc"    : "Factory is one of the longest running Goth-Industrial nights in the US. Always featuring local talents spinning Goth-Industrial, EBM, Alternative, Cyberpunk and Synth-pop in the Main Room. Madisi plays bass driven dance music in the Red Room. Hosted by MC Yoda.",
        "eventLink"    : 'factory-monday.html',
        "eventImgWide" : 'img/factory-monday-necto-nightclub-calendar.jpg',
        "eventTime"    : '9:00 PM',
        "eventDay"     : 1, // Do not modify
    },
    {
        "eventName"    : "Mix Thursday",
        "eventDesc"    : "We’re mixing it up each and every Thursday, with a blend of concerts by renowned artists, special events, unique parties, and even functions that you can book. Heard about a DJ at Necto? It was probably on a Thursday - check our calendar to see what’s happening this week.",
        "eventLink"    : 'mix-thursday.html',
        "eventImgWide" : 'img/mix-thursday-necto-nightclub-calendar.jpg',
        "eventTime"    : '9:00 PM',
        "eventDay"     : 4, // Do not modify
    },
    {
        "eventName"    : "Pride Friday",
        "eventDesc"    : "The One-and-Only Gay Night. DJ Jace in the Main Room spins the hottest Pop, Top 40 and EDM. DJ Digi Mark plays Retro 80's to Top 40 Pop videos in the Red Room. Hosted by Chanel Hunter and Jadein Black at the Largest weekly LGBTQ Party in Michigan!",
        "eventLink"    : 'pride-friday.html',
        "eventImgWide" : 'img/pride-friday-necto-nightclub-calendar.jpg',
        "eventTime"    : '9:00 PM',
        "eventDay"     : 5, // Do not modify
    },
    {
        "eventName"    : "Frequency Saturday",
        "eventDesc"    : "DJ Hardy and MC Yoda host the hottest club night around. The dance floor will be packed from the best Top 40, House and Hip Hop Tracks. Don't let your weekend down. Let's get Turnt!",
        "eventLink"    : 'frequency-saturday.html',
        "eventImgWide" : 'img/frequency-saturday-necto-nightclub-calendar.jpg',
        "eventTime"    : '9:00 PM',
        "eventDay"     : 6, // Do not modify
    }
];

// The total number of events
var eventsLength = events.length;

// Sets the eventDay to push out Upcomming Events to Weekly Pages
for (var i = 0; i < eventsLength; i++) {
    events[i].eventDay = events[i].eventDate.getDay();
}

// Sets the pastEvent status for displaying on the Front Page, Weekly Page, Cal and Past Events.
// This is compairing the event's time to the current time minus some hours so that it does not disapear
// After midnight
for (i = 0; i < eventsLength; i++) {

    var endDate = events[i].eventDate.setHours(events[i].eventDate.getHours() + displayForXHours);

    if (endDate >= currentDate) {
        events[i].eventDate.setHours(events[i].eventDate.getHours() - displayForXHours);
        events[i].pastEvent = false;
    }

    else {
        events[i].eventDate.setHours(events[i].eventDate.getHours() - displayForXHours);
        events[i].pastEvent = true;
    }
}

// Pushes upcoming events into the upcoming events array
for (i = 0; i <= eventsLength - 1; i++) {
    if (events[i].pastEvent === false) {
        upcomingEvents.push(events[i]);
    }
    else {      
    }
}

// Pushes upcoming events into the past evens array
for (i = 0; i <= eventsLength - 1; i++) {
    if (events[i].pastEvent === true) {
        pastEvents.push(events[i]);
    }
    else {      
    }
}

//Is called on the home page and populates the front page events list.
//Use this for the Past events page and cal too.
function populateFrontPageEvents() {
    upcomingEvents.reverse();

    // Populates the event list on the homepage
    for (i = 0; i <= upcomingEvents.length - 1; i++) {
        var eventCount = document.getElementById('homepageSpecialEvents').childElementCount % 2;

        // Looks to see if an event is ticketed or not and adds the ticket button if it does
        if (upcomingEvents[i].eventTix != 'none') {
            if (eventCount === 0) {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-4-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html?=fromfrontpageevent" class="col col-4-xs ">REQUEST VIP</a><a href="' + upcomingEvents[i].eventTix + '" onclick="trackOutboundLink(' + "'" + upcomingEvents[i].eventTix + "'" + '); return true;" class="col col-4-xs ">BUY TICKETS</a></div></div>';
            }

            else {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-4-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html?=fromfrontpageevent" class="col col-4-xs ">REQUEST VIP</a><a href="' + upcomingEvents[i].eventTix + '" onclick="trackOutboundLink(' + "'" + upcomingEvents[i].eventTix + "'" + '); return true;" class="col col-4-xs ">BUY TICKETS</a></div></div>';
            }
        }
        
        // Does not add the ticket button
        else {
            if (eventCount === 0) {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html?=fromfrontpageevent" class="col col-6-xs ">REQUEST VIP</a>';
            }

            else {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html?=fromfrontpageevent" class="col col-6-xs ">REQUEST VIP</a>';
            }
        }     
    }
}

//** CAL PAGE POPULATION **//
//Is called on the cal page and populates the cal page events list.
function populateCalPageEvents() {
    upcomingEvents.reverse();
    
    // Builds the array of Weekly Events that will later have the upcoming events pushed into it.
    // Setting the condition number (i <= 10) will change how many weekly events are added
    // to the cal. Special events will still display if they occur after this cut off.
    for (i = 0; i <= 90; i++) {

        var calEndDate = new Date();
        var weeklyCalEntry = calEndDate.setDate(calEndDate.getDate() + i);
        var weeklyCalEntryString = new Date(weeklyCalEntry);

        if (weeklyCalEntryString.getDay() === 1) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[0].eventName, 'eventDesc' : weeklyEvents[0].eventDesc, 'eventImgWide' : weeklyEvents[0].eventImgWide, 'eventTime' : weeklyEvents[0].eventTime, 'eventLink' : weeklyEvents[0].eventLink});
        }

        else if (weeklyCalEntryString.getDay() === 4) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[1].eventName, 'eventDesc' : weeklyEvents[1].eventDesc, 'eventImgWide' : weeklyEvents[1].eventImgWide, 'eventTime' : weeklyEvents[1].eventTime, 'eventLink' : weeklyEvents[1].eventLink});
        }

        else if (weeklyCalEntryString.getDay() === 5) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[2].eventName, 'eventDesc' : weeklyEvents[2].eventDesc, 'eventImgWide' : weeklyEvents[2].eventImgWide, 'eventTime' : weeklyEvents[2].eventTime, 'eventLink' : weeklyEvents[2].eventLink});
        }

        else if (weeklyCalEntryString.getDay() === 6) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[3].eventName, 'eventDesc' : weeklyEvents[3].eventDesc, 'eventImgWide' : weeklyEvents[3].eventImgWide, 'eventTime' : weeklyEvents[3].eventTime, 'eventLink' : weeklyEvents[3].eventLink});
        }
    }

    // Adds upcoming events to the weekly events
    for (i = 0; i <= upcomingEvents.length - 1; i++) {
            calWeeklyEventsList.push(upcomingEvents[i]);
    }

    // Sorts the cal events
    calWeeklyEventsList.sort(function(a,b){var c = new Date(a.eventDate); var d = new Date(b.eventDate); return c-d;});

    // Pushes Cal events into the cal page
    function buildCal(a) {
        calendarEvents.innerHTML = a;
    }

    // Removes Weekly if a special event is set to overide
    for (i = 0; i <= calWeeklyEventsList.length - 1; i++) {
        
        // If a Special Event is set to Override, remove the previous weekly entry
        if (calWeeklyEventsList[i].eventWklOvrd === true) {
            calWeeklyEventsList.splice(i-1, 1);
        }
        // Else, Do nothing
        else {           
        }
    }

    // Fixes the Special Event Dates for the cal and builds the Event entry. Push to the buildCal function.
    var formatedDate;
    var formatedTime;
    
    for (i = 0; i <= calWeeklyEventsList.length - 1; i++) {

        if (calWeeklyEventsList[i].eventTix !== undefined) {
            
            if (calWeeklyEventsList[i].eventTix != 'none') {
            formatedDate = calWeeklyEventsList[i].eventDate.toDateString();
            formatedTime = calWeeklyEventsList[i].eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});     

            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content"><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + formatedDate + ', ' + formatedTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="An event poster for ' + calWeeklyEventsList[i].eventArtist + ' performing at the Necto Nightclub in Ann Arbor, Michigan on ' +  (calWeeklyEventsList[i].eventDate.getMonth() + 1) + '/' + calWeeklyEventsList[i].eventDate.getDate() + '/' + calWeeklyEventsList[i].eventDate.getFullYear() + '."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col col-4-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html?=calpagelink" class="col col-4-xs">REQUEST VIP</a><a href="' + calWeeklyEventsList[i].eventTix + '" onclick="trackOutboundLink(' + "'" + calWeeklyEventsList[i].eventTix + "'" + '); return true;" class="col col-4-xs ">BUY TICKETS</a></div></div><br><br>');
            }

            else {
            formatedDate = calWeeklyEventsList[i].eventDate.toDateString();
            formatedTime = calWeeklyEventsList[i].eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content"><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + formatedDate + ', ' + formatedTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="An event poster for ' + calWeeklyEventsList[i].eventArtist + ' performing at the Necto Nightclub in Ann Arbor, Michigan on ' +  (calWeeklyEventsList[i].eventDate.getMonth() + 1) + '/' + calWeeklyEventsList[i].eventDate.getDate() + '/' + calWeeklyEventsList[i].eventDate.getFullYear() + '."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html?=calpagelink" class="col col-6-xs ">REQUEST VIP</a></div></div><br><br>');
            }
        }

        else {
            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content"><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + calWeeklyEventsList[i].eventDate + ', ' + calWeeklyEventsList[i].eventTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="A image of ' + calWeeklyEventsList[i].eventName + ', a weekly event at the Necto Nightclub in Ann Arbor, Michigan."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html?=calpagelink" class="col col-6-xs ">REQUEST VIP</a></div></div><br><br>');
        }
    }
}

/** PAST EVENTS PAGE POPULATION **/
pastEventsList = document.getElementById('pastEventsList');
function populatePastEventsPageEvents() {
    allPastEventsLen = pastEvents.length - 1;
    for (i = 0; i <= allPastEventsLen; i++) {
        pastEventsList.innerHTML = pastEventsList.innerHTML + '<span class="past-events-date">' + pastEvents[i].eventDate.toDateString() + '&nbsp;&nbsp;</span><span class="past-events-event"><a href="' + pastEvents[i].eventLink + '"><br>' + pastEvents[i].eventName + '</a></span><br style="margin-bottom: .75em">';
    }
}

/** SPECIAL EVENT PAGE POPULATION **/
var specialEventPageContent = document.getElementById('specialEventPageContent');

function specialEventPage() {

    // Grabs the URL and searches for a match in the Events Array then displays the content for the Event page
    var specialEventURL = window.location.href.split('/');

    for (i = 0; i <= events.length - 1; i++) {

        function buildSpecialPageMeta(date, artist) {
            document.getElementById('pageTitle').innerHTML = artist + ' | ' + date + ' | Necto Nightclub, Ann Arbor, Michigan.';
            document.getElementById('pageDesc').content = artist + ' live on ' + date + ' at the Necto Nightclub in Ann Arbor Michigan.';
            document.getElementById('ogTitle').content = artist + ' live on ' + date + ' at the Necto Nightclub in Ann Arbor Michigan.';
            document.getElementById('ogURL').content = window.location;
            document.getElementById('ogImg').content = events[i].eventImgWide;
            document.getElementById('twitterTitle').content = artist + ' | ' + date + ' | Necto Nightclub, Ann Arbor, Michigan.';
            document.getElementById('twitterDesc').content = artist + ' live on ' + date + ' at the Necto Nightclub in Ann Arbor Michigan.';
        }

        if (specialEventURL[specialEventURL.length - 2] + '/' + specialEventURL[specialEventURL.length - 1] === events[i].eventLink) {

            now = new Date();
  
            // Adds a newsletter form if the show is more than N hours in the past
            alert(events[i].eventDate)
            var newHours = events[i].eventDate.setHours()+6
            alert(newHours)
            alert(now)

            if (events[i].eventDate.getHours()+6 < now.getHours()) {

                var mailingMessage = '<div id="mc_embed_signup"><form action="//necto.us11.list-manage.com/subscribe/post?u=07d1e6b4e1063f1729724af7f&amp;id=f126fbdd63" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><h2 class="page-section-sub-header">Did you miss this event?</h2><p>Join our mailing list to stay in the loop on Necto events.</p><div class="mc-field-group"><label for="mce-EMAIL">Email Address </label><input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" value="" name="FNAME" class="" id="mce-FNAME"></div><div class="mc-field-group"><label for="mce-LNAME">Last Name </label><input type="text" value="" name="LNAME" class="" id="mce-LNAME"></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_07d1e6b4e1063f1729724af7f_f126fbdd63" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" ></div></div></form><br></div>';

                specialEventPageContent.innerHTML = '<span class="special-event-date">' + events[i].eventDate.toDateString() + ', ' + events[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span>' + '<br>' + '<h1 class="special-event-name">' + events[i].eventName + '</h1><br><img class="special-event-img" src="' + events[i].eventImgWide + '" alt="A event poster for ' +  events[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (events[i].eventDate.getMonth() + 1) + '/' + events[i].eventDate.getDate() + '/' + events[i].eventDate.getFullYear() + '" ><br>' +  mailingMessage + '<p class="special-event-desc">' + events[i].eventDescLong + '</p>' + '<p>Follow this event on Facebook <a href="' + events[i].eventSocial + '" class="special-event-social"><b>here</b></a>.</p><h3>Cover:</h3><p class="special-event-cover">' + events[i].eventCover + '</h3>';
                    buildSpecialPageMeta(events[i].eventDate.toDateString(), events[i].eventArtist);
            }

            else {
                // Does it have tix or no tix?
                if (events[i].eventTix !== 'none') {
                    specialEventPageContent.innerHTML =  '<span class="special-event-date">' + events[i].eventDate.toDateString() + ', ' + events[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span>' + '<br>' + '<h1 class="special-event-name">' + events[i].eventName + '</h1><br><img class="special-event-img" src="' + events[i].eventImgWide + '" alt="A event poster for ' +  events[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (events[i].eventDate.getMonth() + 1) + '/' + events[i].eventDate.getDate() + '/' + events[i].eventDate.getFullYear() + '"><br>' + '<div class="row event-nav" style="margin-left: 0; margin-right: 0;"><a href="bottle-service-vip-reservations.html?=linkfromevent" class="col col-6-xs ">REQUEST VIP</a><a href="' + events[i].eventTix + '" onclick="trackOutboundLink(' + "'" + events[i].eventTix + "'" + '); return true;" class="col col-6-xs">BUY TICKETS</a></div>' + '<p class="special-event-desc">' + events[i].eventDescLong + '</p>' + '<p>Follow this event on Facebook <a href="' + events[i].eventSocial + '" class="special-event-social"><b>here</b></a>.</p><h3>Cover:</h3><p class="special-event-cover">' + events[i].eventCover + '</h3>';
                    buildSpecialPageMeta(events[i].eventDate.toDateString(), events[i].eventArtist);
                }

                else {
                    specialEventPageContent.innerHTML =  '<span class="special-event-date">' + events[i].eventDate.toDateString() + ', ' + events[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span>' + '<br>' + '<h1 class="special-event-name">' + events[i].eventName + '</h1><br><img class="special-event-img" src="' + events[i].eventImgWide + '" alt="A event poster for ' +  events[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (events[i].eventDate.getMonth() + 1) + '/' + events[i].eventDate.getDate() + '/' + events[i].eventDate.getFullYear() + '" ><br>' + '<div class="row event-nav" style="margin-left: 0; margin-right: 0;"><a href="bottle-service-vip-reservations.html?=linkfromevent" class="col col-12-xs ">REQUEST VIP</a></div>' + '<p class="special-event-desc">' + events[i].eventDescLong + '</p>' + '<p>Follow this event on Facebook <a href="' + events[i].eventSocial + '" class="special-event-social"><b>here</b></a>.</p><h3>Cover:</h3><p class="special-event-cover">' + events[i].eventCover + '</h3>';
                    buildSpecialPageMeta(events[i].eventDate.toDateString(), events[i].eventArtist);
                }
            }
        }
    }
}

// Populates the Upcoming Events list on the weekly pages

var weeklyPageUpcommingEvents = document.getElementById('upcoming-event-list');

function populateWeeklyUpcomingEvents(day) {
    upcomingEvents.reverse();

    for (i = 0; i <= upcomingEvents.length -1; i++) {
        
        if (upcomingEvents[i].eventDate.getDay() === day) {
            weeklyPageUpcommingEvents.innerHTML = weeklyPageUpcommingEvents.innerHTML + '<span style="color: white;">' + upcomingEvents[i].eventDate.toDateString() + '</span>' + '<a href="' + upcomingEvents[i].eventLink + '">' + upcomingEvents[i].eventName + '</a>';
        }

        else
        {
        }
    }
}

/** NAVIGATION POPULATION **/
// Header Navs
var desktopHeaderMainNav = document.getElementById('desktopHeaderMainNav');
var desktopHeaderWeeklyNav = document.getElementById('desktopHeaderWeeklyNav');
var mobileHeaderNav = document.getElementById('mobileHeaderNav');

// Footer Navs
var footerWeeklyNav = document.getElementById('footerWeeklyNav');
var footerMainNav = document.getElementById('footerMainNav');
var footerSecondaryNav = document.getElementById('footerSecondaryNav');

// Sets Navigation varibles to build the Main Nav on all pages
var mainNavigation = [
    {
        "linkUrl"    : 'calendar.html',
        "anchorName" : 'CALENDAR',
    },
    {
        "linkUrl"    : 'bottle-service-vip-reservations.html?=linkFromMainNav',
        "anchorName" : 'BOTTLE SERVICE/VIP',
    },
    {
        "linkUrl"    : 'private-event-night-club-rental.html',
        "anchorName" : 'PRIVATE RENTAL',
    },
    {
        "linkUrl"    : 'directions.html',
        "anchorName" : 'DIRECTIONS',
    },
    {
        "linkUrl"    : 'contact.html',
        "anchorName" : 'CONTACT',
    },
    {
        "linkUrl"    : 'https://www.eventbrite.com/d/mi--ann-arbor/necto/?mode=search',
        "anchorName" : 'TICKETS',
    }
];

// Sets Navigation varibles to build the Weekly Nav on all pages
// TODO: Use this in the Weekly links too
var weeklyNavigation = [
    {
        "linkUrl"    : 'factory-monday.html',
        "anchorName" : 'FACTORY MONDAY',
    },
    {
        "linkUrl"    : 'mix-thursday.html',
        "anchorName" : 'MIX THURSDAY',
    },
    {
        "linkUrl"    : 'pride-friday.html',
        "anchorName" : 'PRIDE FRIDAY',
    },
    {
        "linkUrl"    : 'frequency-saturday.html',
        "anchorName" : 'FREQUENCY SATURDAY',
    }
];

// Sets Navigation varibles to build the Secondary Nav on all pages
var secondaryNavigation = [
    {
        "linkUrl"    : 'about-the-necto.html',
        "anchorName" : 'ABOUT',
    },
    {
        "linkUrl"    : 'necto-press.html',
        "anchorName" : 'PRESS',
    },
    {
        "linkUrl"    : 'faq.html',
        "anchorName" : 'FAQ',
    },
    {
        "linkUrl"    : 'necto-policies.html',
        "anchorName" : 'POLICIES',
    },
    {
        "linkUrl"    : 'necto-booking.html',
        "anchorName" : 'BOOKING',
    },
];

// Builds both header and footer navigation on all pages.
//  TODO: Add queries that tell where a visitor came from: ?=somePage. 
function buildNavs() {

    // Sets the mobile Main Header Nav (weeklys)
    for (var i = 0; i <= weeklyNavigation.length -1; i++) {
        mobileHeaderNav.innerHTML = mobileHeaderNav.innerHTML + '<li class="weeklyMobileNavLink"><a href="' + weeklyNavigation[i].linkUrl + '">' + weeklyNavigation[i].anchorName + '</a></li>';
    }

    // Sets the mobile Main Header Nav (main)
    for (i = 0; i <= mainNavigation.length -1; i++) {
        mobileHeaderNav.innerHTML = mobileHeaderNav.innerHTML + '<li><a href="' + mainNavigation[i].linkUrl + '">' + mainNavigation[i].anchorName + '</a></li>';
    }
    
    // Sets the destop Main Header Nav
    for (i = 0; i <= mainNavigation.length -1; i++) {
        desktopHeaderMainNav.innerHTML = desktopHeaderMainNav.innerHTML + '<a href="' + mainNavigation[i].linkUrl + '">' + mainNavigation[i].anchorName + '</a>';
    }

    // Sets the destop Weekly Header Nav
    for (i = 0; i <= weeklyNavigation.length -1; i++) {
        desktopHeaderWeeklyNav.innerHTML = desktopHeaderWeeklyNav.innerHTML + '<a href="' + weeklyNavigation[i].linkUrl + '">' + weeklyNavigation[i].anchorName + '</a>';
    }

    // Sets the Weekly Footer Nav
    for (i = 0; i <= weeklyNavigation.length -1; i++) {
        footerWeeklyNav.innerHTML = footerWeeklyNav.innerHTML + '<li><a href="' + weeklyNavigation[i].linkUrl + '">' + weeklyNavigation[i].anchorName + '</a></li>';
    }

    // Sets the Main Footer Nav
    for (i = 0; i <= mainNavigation.length -1; i++) {
        footerMainNav.innerHTML = footerMainNav.innerHTML + '<li><a href="' + mainNavigation[i].linkUrl + '">' + mainNavigation[i].anchorName + '</a></li>';
    }

    // Sets the Secondary Footer Nav
    for (i = 0; i <= secondaryNavigation.length -1; i++) {
        footerSecondaryNav.innerHTML = footerSecondaryNav.innerHTML + '<li><a href="' + secondaryNavigation[i].linkUrl + '">' + secondaryNavigation[i].anchorName + '</a></li>';
    }
}

/** MOBILE NAV **/

// Sets Vars for the Open button and the menu
var mobileGlobalNav = document.getElementById('mobileGlobalNav');
var mobileMenuButton = document.getElementById('mobileMenuButton');

// Opens the menu and changes the onclick to close the menu
function openMobileNav() {
    mobileGlobalNav.setAttribute('class', 'mobile-global-nav-modal');
    mobileMenuButton.setAttribute('onclick', 'closeMobileNav()');
    mobileMenuButton.innerHTML = 'CLOSE';
}

// Closes the menu and changes the onclick to open the menu
function closeMobileNav() {
    mobileGlobalNav.setAttribute('class', 'mobile-global-nav-modal-hidden');
    mobileMenuButton.setAttribute('onclick', 'openMobileNav()');
    mobileMenuButton.innerHTML = 'MENU';
}