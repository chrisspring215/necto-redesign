/** MOBILE NAV **/

// Sets Vars for the Open button and the menu
var mobileGlobalNav = document.getElementById('mobileGlobalNav');
var mobileMenuButton = document.getElementById('mobileMenuButton');

// Opens the menu and changes the onclick to close the menu
function openMobileNav() {
    mobileGlobalNav.setAttribute('class', 'mobile-global-nav-modal');
    mobileMenuButton.setAttribute('onclick', 'closeMobileNav()');
}

// Closes the menu and changes the onclick to open the menu
function closeMobileNav() {
    mobileGlobalNav.setAttribute('class', 'mobile-global-nav-modal-hidden');
    mobileMenuButton.setAttribute('onclick', 'openMobileNav()');
}

/** EVENT POPULATION **/

// Assigns a var to the special events list on the homepage
//TODO: Repeat this for cal, past events page
var homepageSpecialEvents = document.getElementById('homepageSpecialEvents');

// Uses this to determin if an event is in the future or past
// TODO: Needs to factor in that an event typically goes until 2 am
var currentDate = new Date();

// Sets the default hours an event should display for after start
var displayForXHours = 1;

// An array containg future events to be placed in the eventList
var upcomingEvents = [];

// An array of past events to be placed in the Past Events list on the the Past events page
var pastEvents = [];

// The master list of all special past and present events
// TODO: Add meta data tags for the indivual event pages
var events = [
    {
        "eventDate"    : new Date("Jan 16, 2017 18:22:00"),
        "eventName"    : "Emily",
        "eventArtist"  : "Emily",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("Jan 15, 2017 18:24:00"),
        "eventName"    : "Emily",
        "eventArtist"  : "Emily",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("Jan 14, 2017 18:34:00"),
        "eventName"    : "Emily",
        "eventArtist"  : "Emily",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
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

// Pushes upcoming events into the upcoming evens array
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

//Is called ont he home page and populates the front page events list.
//Use this for the Past events page and cal too.
function populateFrontPageEvents() {
    upcomingEvents.reverse();

    // Populates the event list on the homepage
    for (i = 0; i <= upcomingEvents.length - 1; i++) {
        homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML +
        '<div class="home-page-event-content col-xs-12 col-sm-6 "><h3><a href="'+
        upcomingEvents[i].eventLink +
        '"><span class="event-day">' +
        upcomingEvents[i].eventDate.getMonth()+1 +
        '/' + upcomingEvents[i].eventDate.getDate() +
        '/' + upcomingEvents[i].eventDate.getFullYear()
        + '&nbsp;&nbsp;' + upcomingEvents[i].eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        +'</span>&nbsp;<span class="event-name">' +
        upcomingEvents[i].eventName +
        '</span></a></h3><a href="' + upcomingEvents[i].eventLink +
        '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + upcomingEvents[i].eventDate.getMonth()+1 +
        '/' + upcomingEvents[i].eventDate.getDate() +
        '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink +
        '" class="col-xs-4">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-4 ">REQUEST VIP</a><a href="' +
        upcomingEvents[i].eventTix + '" class="col-xs-4 ">BUY TICKETS</a></div></div>';
    }
}

/** NAVIGATION POPULATION **/
//  TODO: You need to decide on how you want to do the mobile Dropdown Global nav. 

// Header Navs
var desktopHeaderMainNav = document.getElementById('desktopHeaderMainNav');
var desktopHeaderWeeklyNav = document.getElementById('desktopHeaderWeeklyNav');

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

    // Sets the destop Main Header Nav
    for (var i = 0; i <= mainNavigation.length -1; i++) {
        desktopHeaderMainNav.innerHTML = desktopHeaderMainNav.innerHTML + '<a href="' + mainNavigation[i].linkUrl + '">' + mainNavigation[i].anchorName + '</a>';
    }

    // Sets the destop Weekly Header Nav
    for (var i = 0; i <= weeklyNavigation.length -1; i++) {
        desktopHeaderWeeklyNav.innerHTML = desktopHeaderWeeklyNav.innerHTML + '<a href="' + weeklyNavigation[i].linkUrl + '">' + weeklyNavigation[i].anchorName + '</a>'
    };

    // Sets the Weekly Footer Nav
    for (var i = 0; i <= weeklyNavigation.length -1; i++) {
        footerWeeklyNav.innerHTML = footerWeeklyNav.innerHTML + '<li><a href="' + weeklyNavigation[i].linkUrl + '">' + weeklyNavigation[i].anchorName + '</a></li>'
    };

    // Sets the Main Footer Nav
    for (var i = 0; i <= mainNavigation.length -1; i++) {
        footerMainNav.innerHTML = footerMainNav.innerHTML + '<li><a href="' + mainNavigation[i].linkUrl + '">' + mainNavigation[i].anchorName + '</a></li>'
    };

    // Sets the Secondary Footer Nav
    for (var i = 0; i <= secondaryNavigation.length -1; i++) {
        footerSecondaryNav.innerHTML = footerSecondaryNav.innerHTML + '<li><a href="' + secondaryNavigation[i].linkUrl + '">' + secondaryNavigation[i].anchorName + '</a></li>'
    };

}

