

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
        "eventDate"    : new Date("mar 17, 2017 17:00:00"),
        "eventName"    : "Courtney Act &amp; Tatianna",
        "eventArtist"  : "Courtney Act &amp; Tatianna",
        "eventDesc"    : "This St Patty's Day falls on Pride! So Let's Get Lucky with COURTNEY ACT, Runner Up of RuPaul's Drag Race S6 & TATIANNA, RuPaul's Drag Race S2 & All Stars. Great St Patty's Drink Specials All Day!",
        "eventDescLong": "",
        "eventCover"   : 'Cover from 5pm - 9pm : FREE for 21+ | $15 for 18-20',
        "eventLink"    : 'special-events/' + 'courtney-act-tatianna-at-necto-nightclub-ann-arbor-michigan-mar-17th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1840982122782083/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-courtney-act-tatianna-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-courtney-act-tatianna-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("feb 27, 2017 21:00:00"),
        "eventName"    : "Mardi Gras: French Quarter Vampire Voodoo",
        "eventArtist"  : "Factory Mardi Gras",
        "eventDesc"    : "What's Vampire Voodoo? An altered state somewhere between Interview with a Vampire, From Dust till Dawn & Angel Heart. Let's party French Quarter style with Void 6, MC Yoda, DJ Madisi & all the Factory Fam.",
        "eventDescLong": "",
        "eventCover"   : '$1 before 10pm and $3 after 10pm',
        "eventLink"    : 'special-events/' + 'mardi-gras-at-necto-nightclub-ann-arbor-michigan-feb-25th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/640451952805391/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-mardi-gras-vampire-voodoo-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-mardi-gras-vampire-voodoo-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("feb 25, 2017 21:00:00"),
        "eventName"    : "Mardi Gras: Bourbon Street Blow Out",
        "eventArtist"  : "Frequency Mardi Gras",
        "eventDesc"    : "Let's get a little crazy New Orlean's style! Join DJ Hardy & MC Yoda as we celebrate Mardi Gras! Lots of beads & French Quarter drink menu all night!",
        "eventDescLong": "",
        "eventCover"   : 'Free before 10pm. Ladies get in Free before 11pm. $5 for 21+ and $10 for 18 - 20',
        "eventLink"    : 'special-events/' + 'mardi-gras-at-necto-nightclub-ann-arbor-michigan-feb-25th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1308490445874744/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-mardi-gras-2017-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-mardi-gras-2017-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("feb 24, 2017 21:00:00"),
        "eventName"    : "Mardi Gras : Laissez les bons temps rouler!",
        "eventArtist"  : "Ivy Winters",
        "eventDesc"    : "Join Special Guest Ivy Winters, Miss Congeniality from RuPauls Drag Race S5!!! Also featuring DJ Jace, DJ DigiMark, Chanel Hunter & Jadein Black for Pride's annual Mardi Gras Party. Lots of beads & New Orlean's inspired drinks.",
        "eventDescLong": "",
        "eventCover"   : 'Free before 10pm. With College ID cover is Free before 11pm. $5 for 21+ and $10 for 18 - 20',
        "eventLink"    : 'special-events/' + 'ivy-winters-mardi-gras-at-necto-nightclub-ann-arbor-michigan-feb-24th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/148044559024977/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-ivy-winters-mardi-gras-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-ivy-winters-mardi-gras-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("feb 23, 2017 21:00:00"),
        "eventName"    : "Rezz",
        "eventArtist"  : "Rezz",
        "eventDesc"    : "Niagara Falls native Isabelle Rezazadeh, aka REZZ, is quickly making a name for herself thanks to her genre-smashing brand of dark and sinister techno. Pegged as being an artist to watch in 2016 by music industry masses in the know, Rezz has proven that she is a force to be reckoned with. Despite being self-taught, her edgy and hard-hitting productions have caught the attention of Skrillex's Nest and drawn comparisons to Gesaffelstein and Trent Reznor.",
        "eventDescLong": "",
        "eventCover"   : 'Pre-sale tickets are $15 - $18 | limited 4 pack tickets $45 | At doors $20-$25',
        "eventLink"    : 'special-events/' + 'rezz-at-necto-nightclub-ann-arbor-michigan-feb-23rd-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1831441243800571/',
        "eventTix"     : 'http://www.clubtix.com/rezz-at-necto-ann-arbor-tickets-493993?p=24795',
        "eventImgTall" : 'img/event-images/' + 'cal-rezz-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'cal-rezz-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("feb 13, 2017 21:00:00"),
        "eventName"    : "My Bloody Valentine",
        "eventArtist"  : "My Bloody Valentine",
        "eventDesc"    : "Roses are red, violets are black, Factory parties are fun when we all get drunk! Get pics all night by Bruno.",
        "eventDescLong": "",
        "eventCover"   : '$1 before 10PM, $3 after 10PM',
        "eventLink"    : 'special-events/' + 'https://www.facebook.com/events/352741681775405/',
        "eventSocial"  : 'https://www.facebook.com/events/352741681775405/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-my-bloody-valentine-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-my-bloody-valentine-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("feb 10, 2017 21:00:00"),
        "eventName"    : "Jinkx Monsoon",
        "eventArtist"  : "Jinkx Monsoon",
        "eventDesc"    : "Join us as we welcome the Winner of RuPaul's Drag Race S5... Jinkx Monsoon!!! Let's hang out this Friday with Seattle's hottest, youngest MILF, and the hardest working single mother in show business!",
        "eventDescLong": "",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'special-events/' + 'jinkx-monsoon-at-necto-nightclub-ann-arbor-michigan-feb-10th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/167805097036112/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-jinkx-monsoon-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("jan 30, 2017 21:00:00"),
        "eventName"    : "specialEventName",
        "eventArtist"  : "specialEventArtist",
        "eventDesc"    : "specialEventShortDesc",
        "eventDescLong": "Join us as we welcome the Winner of RuPaul's Drag Race S5... Jinkx Monsoon!!! Let's hang out this Friday with Seattle's hottest, youngest MILF, and the hardest working single mother in show business!",
        "eventCover"   : 'specialEventCover',
        "eventLink"    : 'special-events/' + '01-special-event-jan-30-2017-at-necto-nightclub-ann-arbor-michigan.html',
        "eventSocial"  : 'https://www.facebook.com/events/167805097036112/',
        "eventTix"     : 'https://www.eventbrite.com/e/miss-necto-proam-pageant-2017-evil-queens-tickets-29831519879',
        "eventImgTall" : 'img/event-images/' + 'cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-jinkx-monsoon-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },



    {
        "eventDate"    : new Date("Jan 29, 2017 18:00:00"),
        "eventName"    : "Miss Necto Professional/Amateur Pageant 2017",
        "eventArtist"  : "Miss Necto Pageant",
        "eventDesc"    : "Join us Sunday January 29th, 2017 as we join the huntsman for the 3rd annual Miss Necto Professional/ Amateur Pageant! This year's theme is Evil Queens!",
        "eventDescLong": "",
        "eventCover"   : 'Pre-sale single ticket - $15 | 2 Tickets - $20 | 4 Pack Tickets - $30',
        "eventLink"    : 'special-events/' + 'miss-necto-professional-amateur-pageant-2017-at-necto-nightclub-ann-arbor-michigan-jan-29th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/235480763538626/',
        "eventTix"     : 'https://www.eventbrite.com/e/miss-necto-proam-pageant-2017-evil-queens-tickets-29831519879',
        "eventImgTall" : 'img/event-images/' + 'cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-miss-necto-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("Jan 26, 2017 21:00:00"),
        "eventName"    : "Worthy: One on One Tour with Golf Clap",
        "eventArtist"  : "Worthy w/ Golf Clap",
        "eventDesc"    : 'Worthy (Dirtybird • Anabatic) is doing a 32-city "One-On-One". The tour will last from his Holy Ship performance in early Jan all the way to Miami Music Week in March. Joining Worthy with Detroit‘s own Golf Clap & ADMN',
        "eventDescLong": '',
        "eventCover"   : 'Pre-sale Early Bird $15 | 4 Pack $40 | Day of Show $20',
        "eventLink"    : 'special-events/' + 'worthy-golf-clap-at-necto-nightclub-ann-arbor-michigan-jan-26th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/981986061934932/',
        "eventTix"     : 'https://www.eventbrite.com/e/worthy-one-on-one-tour-with-golf-clap-tickets-29881447213',
        "eventImgTall" : 'img/event-images/' + 'cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-worthy-golf-clap-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jan 12, 2017 21:00:00"),
        "eventName"    : "Worthy: One on One Tour with Golf Clap",
        "eventArtist"  : "Worthy w/ Golf Clap",
        "eventDesc"    : 'Worthy (Dirtybird • Anabatic) is doing a 32-city "One-On-One". The tour will last from his Holy Ship performance in early Jan all the way to Miami Music Week in March. Joining Worthy with Detroit‘s own Golf Clap & ADMN',
        "eventDescLong": '',
        "eventCover"   : 'Pre-sale Early Bird $15 | 4 Pack $40 | Day of Show $20',
        "eventLink"    : 'special-events/' + 'worthy-golf-clap-at-necto-nightclub-ann-arbor-michigan-jan-26th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/981986061934932/',
        "eventTix"     : 'https://www.eventbrite.com/e/worthy-one-on-one-tour-with-golf-clap-tickets-29881447213',
        "eventImgTall" : 'img/event-images/' + 'cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-worthy-golf-clap-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jan 10, 2017 21:00:00"),
        "eventName"    : "Worthy: One on One Tour with Golf Clap",
        "eventArtist"  : "Worthy w/ Golf Clap",
        "eventDesc"    : 'Worthy (Dirtybird • Anabatic) is doing a 32-city "One-On-One". The tour will last from his Holy Ship performance in early Jan all the way to Miami Music Week in March. Joining Worthy with Detroit‘s own Golf Clap & ADMN',
        "eventDescLong": '',
        "eventCover"   : 'Pre-sale Early Bird $15 | 4 Pack $40 | Day of Show $20',
        "eventLink"    : 'special-events/' + 'worthy-golf-clap-at-necto-nightclub-ann-arbor-michigan-jan-26th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/981986061934932/',
        "eventTix"     : 'https://www.eventbrite.com/e/worthy-one-on-one-tour-with-golf-clap-tickets-29881447213',
        "eventImgTall" : 'img/event-images/' + 'cal-medma-groove-d-art-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-worthy-golf-clap-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
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
        
        if (upcomingEvents[i].eventTix != 'none') {

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
    // Setting the condition number (i <= 10) will change how many weekly events are added
    // to the cal. Special events will still display if they occur after this cut off.
    for (i = 0; i <= 10; i++) {

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
            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-12 "><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + formatedDate + ', ' + formatedTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="An event poster for ' + calWeeklyEventsList[i].eventArtist + ' performing at the Necto Nightclub in Ann Arbor, Michigan on ' +  calWeeklyEventsList[i].eventDate.getMonth() + 1 + '/' + calWeeklyEventsList[i].eventDate.getDate() + '/' + calWeeklyEventsList[i].eventDate.getFullYear() + '."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col-xs-4">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-4 ">REQUEST VIP</a><a href="' + calWeeklyEventsList[i].eventTix + '" class="col-xs-4 ">BUY TICKETS</a></div></div><br><br>');
            }

            else {
            formatedDate = calWeeklyEventsList[i].eventDate.toDateString();
            formatedTime = calWeeklyEventsList[i].eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-12 "><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + formatedDate + ', ' + formatedTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="An event poster for ' + calWeeklyEventsList[i].eventArtist + ' performing at the Necto Nightclub in Ann Arbor, Michigan on ' +  calWeeklyEventsList[i].eventDate.getMonth() + 1 + '/' + calWeeklyEventsList[i].eventDate.getDate() + '/' + calWeeklyEventsList[i].eventDate.getFullYear() + '."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col-xs-6">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-6 ">REQUEST VIP</a></div></div><br><br>');
            }
        }

        else {
            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content col-xs-12 col-sm-12 "><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + calWeeklyEventsList[i].eventDate + ', ' + calWeeklyEventsList[i].eventTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="A image of ' + calWeeklyEventsList[i].eventName + ', a weekly event at the Necto Nightclub in Ann Arbor, Michigan."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col-xs-6">VIEW EVENT</a><a href="bottle-service.com" class="col-xs-6 ">REQUEST VIP</a></div></div><br><br>');
        }
    }
}

/** PAST EVENTS PAGE POPULATION **/
var pastEventsList = document.getElementById('pastEventsList')
function populatePastEventsPageEvents() {
    for (i = 0; i <= pastEvents.length - 1; i++) {
        pastEventsList.innerHTML = pastEventsList.innerHTML + '<span class="past-events-date">' + pastEvents[i].eventDate.toDateString() + '&nbsp;&nbsp;</span><span class="past-events-event"><a href="' + pastEvents[i].eventLink + '">' + pastEvents[i].eventName + '</a></span><br>'
    }
}

/** SPECIAL EVENT PAGE POPULATION **/
var specialEventPageContent = document.getElementById('specialEventPageContent')

function specialEventPage() {

    // Grabs the URL and searches for a match in the Events Array then displays the content for the Event page
    var specialEventURL = window.location.href.split('/');

    for (i = 0; i <= events.length - 1; i++) {

        function buildSpecialPageMeta(date, artist) {
            document.getElementById('pageTitle').innerHTML = artist + ' | ' + date + ' | Necto Nightclub, Ann Arbor, Michigan.';
            document.getElementById('pageDesc').content = artist + ' live on ' + date + ' at the Necto Nightclub in Ann Arbor Michigan.';


        }

        if (specialEventURL[specialEventURL.length - 2] + '/' + specialEventURL[specialEventURL.length - 1] === events[i].eventLink) {

            // Does it have tix or no tix?
            if (events[i].eventTix !== 'none') {
                specialEventPageContent.innerHTML =  '<span class="special-event-date">' + events[i].eventDate.toDateString() + ', ' + events[i].eventDate.toLocaleTimeString() + '</span>' + '<br>' + '<h1 class="special-event-name">' + events[i].eventName + '</h1><br><img class="special-event-img" src="' + events[i].eventImgWide + '"><br>' + '<div class="row event-nav"><a href="bottle-service.com" class="col-xs-6 ">REQUEST VIP</a><a href="' + events[i].eventTix + '" class="col-xs-6 ">BUY TICKETS</a></div>' + '<p class="special-event-desc">' + events[i].eventDescLong + '</p>' + '<p>Follow this event on Facebook <a href="' + events[i].eventSocial + '" class="special-event-social"><b>here</b></a>.</p><h3>Cover:</h3><p class="special-event-cover">' + events[i].eventCover + '</h3>';
                buildSpecialPageMeta(events[i].eventDate.toDateString(), events[i].eventArtist);
            }

            else {
                specialEventPageContent.innerHTML =  '<span class="special-event-date">' + events[i].eventDate.toDateString() + ', ' + events[i].eventDate.toLocaleTimeString() + '</span>' + '<br>' + '<h1 class="special-event-name">' + events[i].eventName + '</h1><br><img class="special-event-img" src="' + events[i].eventImgWide + '"><br>' + '<div class="row event-nav"><a href="bottle-service.com" class="col-xs-12 ">REQUEST VIP</a></div>' + '<p class="special-event-desc">' + events[i].eventDescLong + '</p>' + '<p>Follow this event on Facebook <a href="' + events[i].eventSocial + '" class="special-event-social"><b>here</b></a>.</p><h3>Cover:</h3><p class="special-event-cover">' + events[i].eventCover + '</h3>'
                buildSpecialPageMeta(events[i].eventDate.toDateString(), events[i].eventArtist);
            }
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