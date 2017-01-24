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

// The master list of all special past and present events
// TODO: Add meta data tags for the indivual event pages
var events = [
    {
        "eventDate"    : new Date("mar 27, 2017 20:00:00"),
        "eventName"    : "ljhsadfljhasbdfjklsadbfjsakd",
        "eventArtist"  : "Emily",
        "eventDesc"    : "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventDescLong": "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("jan 27, 2017 19:30:00"),
        "eventName"    : "ljhsadfljhasbdfjklsadbfjsakd",
        "eventArtist"  : "Emily",
        "eventDesc"    : "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventDescLong": "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("Jan 26, 2017 19:00:00"),
        "eventName"    : "2nd",
        "eventArtist"  : "Emily",
        "eventDesc"    : "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventDescLong": "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("Jan 25, 2017 23:00:00"),
        "eventName"    : "1st",
        "eventArtist"  : "Emily",
        "eventDesc"    : "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventDescLong": "This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    }
];

// The basic Weekly Events
var weeklyEvents = [
    {
        "eventName"    : "Factory Monday",
        "eventDesc"    : "Factory is one of the longest running Goth-Industrial nights in the US. Always featuring local talents spinning Goth-Industrial, EBM, Alternative, Cyberpunk and Synth-pop in the Main Room. Madisi plays bass driven dance music in the Red Room. Hosted by MC Yoda.",
        "eventLink"    : 'factory-monday.html',
        "eventImgWide" : 'img/factory-monday.jpg',
        "eventTime"    : '9:00 PM',
        "eventDay"     : 1, // Do not modify
    },
    {
        "eventName"    : "Mix Thursday",
        "eventDesc"    : "We’re mixing it up each and every Thursday, with a blend of concerts by renowned artists, special events, unique parties, and even functions that you can book. Heard about a DJ at Necto? It was probably on a Thursday - check our calendar to see what’s happening this week.",
        "eventLink"    : 'mix-thursday.html',
        "eventImgWide" : 'img/mix-thursday.jpg',
        "eventTime"    : '9:00 PM',
        "eventDay"     : 4, // Do not modify
    },
    {
        "eventName"    : "Pride Friday",
        "eventDesc"    : "The One-and-Only Gay Night. DJ Jace in the Main Room spins the hottest Pop, Top 40 and EDM. DJ Digi Mark plays Retro 80's to Top 40 Pop videos in the Red Room. Hosted by Chanel Hunter and Jadein Black at the Largest weekly LGBTQ Party in Michigan!",
        "eventLink"    : 'pride-friday.html',
        "eventImgWide" : 'img/pride-friday.jpg',
        "eventTime"    : '9:00 PM',
        "eventDay"     : 5, // Do not modify
    },
    {
        "eventName"    : "Frequency Saturday",
        "eventDesc"    : "DJ Hardy and MC Yoda host the hottest club night around. The dance floor will be packed from the best Top 40, House and Hip Hop Tracks. Don't let your weekend down. Let's get Turnt!",
        "eventLink"    : 'frequency-saturday.html',
        "eventImgWide" : 'img/frequency-saturday.jpg',
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
        
        if (upcomingEvents[i].eventTix != 'none') {
            //            homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-6 "><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.getMonth() + 1 + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '&nbsp;&nbsp;' + upcomingEvents[i].eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + '</span><br><span class="event-name">' + upcomingEvents[i].eventName + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + upcomingEvents[i].eventDate.getMonth() + 1 + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col-xs-4">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-4 ">REQUEST VIP</a><a href="' + upcomingEvents[i].eventTix + '" class="col-xs-4 ">BUY TICKETS</a></div></div>';

            homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-6 "><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventName + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + upcomingEvents[i].eventDate.getMonth() + 1 + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col-xs-4">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-4 ">REQUEST VIP</a><a href="' + upcomingEvents[i].eventTix + '" class="col-xs-4 ">BUY TICKETS</a></div></div>';
        }

        else {
            homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-6 "><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventName + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + upcomingEvents[i].eventDate.getMonth() + 1 + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col-xs-6">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-6 ">REQUEST VIP</a>';
        }     
    }
}

//** CAL PAGE POPULATION **//
//Is called on the cal page and populates the cal page events list.
function populateCalPageEvents() {
    upcomingEvents.reverse();
    
    // Builds the array of Weekly Events that will later have the upcoming events pushed into it.
    for (i = 0; i <= 50; i++) {

        var calEndDate = new Date();
        var weeklyCalEntry = calEndDate.setDate(calEndDate.getDate() + i);
        var weeklyCalEntryString = new Date(weeklyCalEntry);

        if (weeklyCalEntryString.getDay() === 1) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[0].eventName, 'eventDesc' : weeklyEvents[0].eventDesc, 'eventImgWide' : weeklyEvents[0].eventImgWide, 'eventTime' : weeklyEvents[0].eventTime, 'eventLink' : weeklyEvents[0].eventLink});
        }

        else if (weeklyCalEntryString.getDay() === 4) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[1].eventName, 'eventDesc' : weeklyEvents[1].eventDesc, 'eventImgWide' : weeklyEvents[1].eventImgWide, 'eventTime' : weeklyEvents[1].eventTime, 'eventLink' : weeklyEvents[1].eventLink});        }

        else if (weeklyCalEntryString.getDay() === 5) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[2].eventName, 'eventDesc' : weeklyEvents[2].eventDesc, 'eventImgWide' : weeklyEvents[2].eventImgWide, 'eventTime' : weeklyEvents[2].eventTime, 'eventLink' : weeklyEvents[2].eventLink});        }

        else if (weeklyCalEntryString.getDay() === 6) {
            calWeeklyEventsList.push({'eventDate' : weeklyCalEntryString.toDateString(), 'eventName' : weeklyEvents[3].eventName, 'eventDesc' : weeklyEvents[3].eventDesc, 'eventImgWide' : weeklyEvents[3].eventImgWide, 'eventTime' : weeklyEvents[3].eventTime, 'eventLink' : weeklyEvents[3].eventLink});        }

    }

    // Adds upcoming events to the weekly events
    for (i = 0; i <= upcomingEvents.length - 1; i++) {
            calWeeklyEventsList.push(upcomingEvents[i])
    }

    // Sorts the cal events
    calWeeklyEventsList.sort(function(a,b){
        var c = new Date(a.eventDate);
        var d = new Date(b.eventDate);
        return c-d;
    });

    //TODO: Figure out a way to remove the weekly event if need be if a special event falls on the same day.

    // Pushes Cal events into the cal page
    for (i = 0; i <= calWeeklyEventsList.length - 1; i++) {
        
        if (calWeeklyEventsList[i].eventTix != undefined) {
            
            var formatedDate = calWeeklyEventsList[i].eventDate.toDateString();
            var formatedTime = calWeeklyEventsList[i].eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            calendarEvents.innerHTML = calendarEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-12 "><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + formatedDate + ', ' + formatedTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt=""></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col-xs-4">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-4 ">REQUEST VIP</a><a href="tickets.html" class="col-xs-4 ">BUY TICKETS</a></div></div><br><br>';

        }

        else {
            calendarEvents.innerHTML = calendarEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-12 "><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + calWeeklyEventsList[i].eventDate + ', ' + calWeeklyEventsList[i].eventTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt=""></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col-xs-4">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-4 ">REQUEST VIP</a><a href="tickets.html" class="col-xs-4 ">BUY TICKETS</a></div></div><br><br>';

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
        "linkUrl"    : 'bottle-service-vip-reservations.html',
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