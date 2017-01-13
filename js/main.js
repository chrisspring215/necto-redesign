// Assigns a var to the special events list on the homepage
//TODO: Repeat this for cal, past events page
var homepageSpecialEvents = document.getElementById('homepageSpecialEvents');

// Uses this to determin if an event is in the future or past
// TODO: Needs to factor in that an event typically goes until 2 am
var currentDate = new Date();

// An array containg future events to be placed in the eventList
var upcomingEvents = [];

// An array of past events to be placed in the Past Events list on the the Past events page
var pastEvents = [];

// The master list of all special past and present events
// TODO: Add meta data tags for the indivual event pages
var events = [
    {
    	"eventDate"    : new Date("Jan 8, 2017 11:13:00"),
        "eventName"    : "first",
        "eventArtist"  : "Chris Collins",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"	   : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : '/event-images/imaeg.jpg',
        "eventImgWide" : '/event-images/imaeg.jpg',
        "eventDay"	   : 0, // Do not modify
        "pastEvent"	   : false // Do not modify
    },

    {
    	"eventDate"    : new Date("Jan 8, 2017 11:13:00"),
        "eventName"    : "first",
        "eventArtist"  : "Chris Collins",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"	   : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : '/event-images/imaeg.jpg',
        "eventImgWide" : '/event-images/imaeg.jpg',
        "eventDay"	   : 0, // Do not modify
        "pastEvent"	   : false // Do not modify
    },

    {
    	"eventDate"    : new Date("Jan 16, 2017 20:00:00"),
        "eventName"    : "Dave",
        "eventArtist"  : "Dave",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.eventlink.com',
        "eventSocial"  : 'https://www.facebook.com',
        "eventTix"	   : 'https://www.Tixlink.com',
        "eventImgTall" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventDay"	   : 0, // Do not modify
        "pastEvent"	   : false // Do not modify
    },

    {
        "eventDate"    : new Date("Jan 17, 2017 20:00:00"),
        "eventName"    : "Bruce",
        "eventArtist"  : "Bruce",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.eventlink.com',
        "eventSocial"  : 'https://www.facebook.com',
        "eventTix"     : 'https://www.Tixlink.com',
        "eventImgTall" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
    	"eventDate"    : new Date("Jan 18, 2017 11:13:00"),
        "eventName"    : "Emily",
        "eventArtist"  : "Emily",
        "eventDesc"    : "Some info about the event.",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"	   : 'https://www.facebook.com/events/352741681775405/',
        "eventImgTall" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        "eventDay"	   : 0, // Do not modify
        "pastEvent"	   : false // Do not modify
    }
];

// The total number of events
var eventsLength = events.length;

// Sets the eventDay to push out Upcomming Events to Weekly Pages
for (var i = 0; i < eventsLength; i++) {
	events[i].eventDay = events[i].eventDate.getDay();
}

// Sets the pastEvent status for displaying on the Front Page, Weekly Page, Cal and Past Events.
for (i = 0; i < eventsLength; i++) {
	if (events[i].eventDate >= currentDate) {
		events[i].pastEvent = false;
	}

	else {
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

// Sets Navigation varibles to build the header nav on all pages
var desktopHeaderNav = [

    {
        "linkUrl"    : 'firstlink.com',
        "anchorName" : 'firstLink',
    }
];

// Builds both header and footer navigation on all pages.
function buildNavs() {
    alert()
}

