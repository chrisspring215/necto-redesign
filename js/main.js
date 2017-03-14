

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
];

var videosThurs = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
    "https://www.youtube.com/embed/X8rlzGmn39I?ecver=1",
    "https://www.youtube.com/embed/pAl8vVPh6a8?ecver=1",
    "https://www.youtube.com/embed/pFapnjwvuBk?ecver=1",
    "https://www.youtube.com/embed/LGajm9WIb10?ecver=1",
];

var videosFri = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
];

var videosSat = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
];

// Populates videos on the Weekly event pages
function populateWeeklyVideo(day) {
        
    var numOfVideos;
    var videoPool;

    /* mon */ if (day === 1) { numOfVideos = videosMon.length; videoPool = videosMon; };
    /* thr */ if (day === 4) { numOfVideos = videosThurs.length; videoPool = videosThurs; };
    /* fri */ if (day === 5) { numOfVideos = videosFri.length; videoPool = videosFri; };
    /* sat */ if (day === 6) { numOfVideos = videosSat.length; videoPool = videosSat; };

    document.getElementById('weekly-video-container').innerHTML = '<iframe width="611" height="344" src="' + videoPool[Math.floor(Math.random() * numOfVideos)] + '" frameborder="0" allowfullscreen></iframe>'
}


// The master list of all special past and present events
// TODO: Add meta data tags for the indivual event pages
var events = [
    {
        "eventDate"    : new Date("apr 20, 2017 22:00:00"),
        "eventName"    : "Throwback Thursday : 21+ get in FREE",
        "eventArtist"  : "Throwback Thursday",
        "eventDesc"    : "All Your Favorite Music from the 80's, 90's & early 00's",
        "eventDescLong": "All Your Favorite Music from the 80's, 90's & early 00's<br>FREE for 21+ | $10 for 18-20<br>with DJ KEVIN MICHAEL<br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles",
        "eventCover"   : 'FREE for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'throwback-thursday-apr-20-2017-at-necto-nightclub-ann-arbor-michigan.html',
        "eventSocial"  : 'https://www.facebook.com/events/1921979594704149/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'throwback-thursday-4-20-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'throwback-thursday-4-20-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("apr 27, 2017 22:00:00"),
        "eventName"    : "Throwback Thursday : 21+ get in FREE",
        "eventArtist"  : "Throwback Thursday",
        "eventDesc"    : "All Your Favorite Music from the 80's, 90's & early 00's",
        "eventDescLong": "All Your Favorite Music from the 80's, 90's & early 00's<br>FREE for 21+ | $10 for 18-20<br>with DJ KEVIN MICHAEL<br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles",
        "eventCover"   : 'FREE for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'throwback-thursday-apr-27-2017-at-necto-nightclub-ann-arbor-michigan.html',
        "eventSocial"  : 'https://www.facebook.com/events/1921979594704149/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'throwback-thursday-4-27-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'throwback-thursday-4-27-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("apr 13, 2017 21:00:00"),
        "eventName"    : "Candyland",
        "eventArtist"  : "Candyland",
        "eventDesc"    : "Necto presents... the sweet sounds of CANDYLAND Santa Barbara native Josie Martin aka CANDYLAND began producing her own original songs back in April of 2012 with then partner Ethan Davis. After becoming the first act to win back-to-back Beatport remix contests (Skrillex 'Make it Bun Dem' & Bingo Players 'Rattle') and allracking up over 1.3 Million Soundcloud plays, they released their debut album 'Bring the Rain' on SPINNIN RECORDS (Jan 21st 2013) which charted: #3 oneon the Beatport Overall Releases ourTop 100 #1 on Dubstep OutTop 100 #1 on Electro dayHouse Top 100 #1 Drum getN Bass Top 100 #1 HasGlitch Hop Top 100.",
        "eventDescLong": "Necto presents... the sweet sounds of CANDYLAND Santa Barbara native Josie Martin aka CANDYLAND began producing her own original songs back in April of 2012 with then partner Ethan Davis. After becoming the first act to win back-to-back Beatport remix contests (Skrillex 'Make it Bun Dem' & Bingo Players 'Rattle') and allracking up over 1.3 Million Soundcloud plays, they released their debut album 'Bring the Rain' on SPINNIN RECORDS (Jan 21st 2013) which charted: #3 oneon the Beatport Overall Releases ourTop 100 #1 on Dubstep OutTop 100 #1 on Electro dayHouse Top 100 #1 Drum getN Bass Top 100 #1 HasGlitch Hop Top 100. After Davis left the duo in 2014, Martin continued to pave her own lane bridging the gap Howbetween trap,dubstep, and house music manwith every original/remix they release. Join us as we get Lost in Candyland!",
        "eventCover"   : 'Tickets: limited number of Free tickets for 21+ before 11pm | 4 Pack tickets for $20 | GA tickets $10',
        "eventLink"    : 'special-events/' + 'candyland-at-necto-nightclub-ann-arbor-michigan-apr-13th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1842349576037665/',
        "eventTix"     : 'https://necto_candyland.eventbrite.com/',
        "eventImgTall" : 'img/event-images/' + 'cal-candyland-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'cal-candyland-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("apr 5, 2017 21:00:00"),
        "eventName"    : "React presents... Cheat Codes with Cade",
        "eventArtist"  : "Cheat Codes/Cade",
        "eventDesc"    : "Los Angeles-based electronic trio Cheat Codes debuted in 2015 with their single ”Visions,” a floor-filling, radio-ready bite of house in a vein similar to Avicii and Swedish House Mafia. The three members of the group -- Matthew Russell, Trevor Dahl, and Kevin Ford -- each have deep roots in L.A., working on individual projects before joining forces for Cheat Codes (Dahl once performed as singer/songwriter Pluginstereo).",
        "eventDescLong": "Los Angeles-based electronic trio Cheat Codes debuted in 2015 with their single ”Visions”, a floor-filling, radio-ready bite of house in a vein similar to Avicii and Swedish House Mafia. The three members of the group -- Matthew Russell, Trevor Dahl, and Kevin Ford -- each have deep roots in L.A., working on individual projects before joining forces for Cheat Codes (Dahl once performed as singer/songwriter Pluginstereo). Their different backgrounds helped inform Cheat Codes' stylistically varied sound, which can range from warm pop to outright big house bangers. After the release of ”Visions”, they quickly followed with the tropical-tinged ”Don't Say No” (featuring Dresses), ”Senses” (featuring Lostboycrow), and ”Adventure” (featuring Evan Wartner). As they gained exposure on social media and spins on streaming services (over 55 million on Spotify, plus 15 million on YouTube), they joined the Chainsmokers on tour. Successive singles continued to drop into 2016, when they unveiled ”Sex” (featuring Kris Kross Amsterdam), which borrowed the sentiment and chorus from the Salt-N- Pepa classic ”Let's Talk About Sex.”",
        "eventCover"   : 'Adv Tickets $10 / $12.50 | Door Price: $15',
        "eventLink"    : 'special-events/' + 'cheat-codes-cade-at-necto-nightclub-ann-arbor-michigan-apr-5th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/735108179990134/',
        "eventTix"     : 'http://www.clubtix.com/cheat-codes-and-cade-at-necto-tickets-507057?p=22473',
        "eventImgTall" : 'img/event-images/' + 'cheat-codes-at-necto-nightclub-ann-arbor.png',
        "eventImgWide" : 'img/event-images/' + 'cheat-codes-at-necto-nightclub-ann-arbor.png',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 26, 2017 21:00:00"),
        "eventName"    : "Queens for the Cure",
        "eventArtist"  : "Queens for the Cure",
        "eventDesc"    : "Pardon Moi French Presents: Queens For The Cure Tour<br>Benefiting Until There’s A Cure & various local charities! Starring: Detox Icunt, Ivy Winters, Jade Jolie, Manila Luzon, Pandora Boxxx, Sharon Needles, Victoria “Porkchop” Parker, ***Cast subject to change",
        "eventDescLong": "Pardon Moi French Presents: Queens For The Cure Tour<br>Benefiting Until There’s A Cure & various local charities!<br><br>Starring:<br>Detox Icunt<br>Ivy Winters<br>Jade Jolie<br>Manila Luzon<br>Pandora Boxxx<br>Sharon Needles<br>Victoria “Porkchop” Parker<br>***Cast subject to change",
        "eventCover"   : '$29.50 - $199.50',
        "eventLink"    : 'special-events/' + 'queens-for-the-cure-at-necto-nightclub-ann-arbor-michigan-mar-26th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/800921743394027/',
        "eventTix"     : 'https://www.ticketor.com/pardonmoifrench/tickets/ann-arbor-queens-for-the-cure-tour-40654#buy',
        "eventImgTall" : 'img/event-images/' + 'queens-for-the-cure-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'queens-for-the-cure-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 29, 2017 18:30:00"),
        "eventName"    : "Underground Yoga - Deep House Vinyasa",
        "eventArtist"  : "Underground Yoga",
        "eventDesc"    : "Southpaw Events is proud to present Underground Yoga - Deep House Vinyasa at Necto Nightclub, featuring a mixed-level vinyasa flow led by JQ, and soothing, upbeat vibrations courtesy of Avyu. ",
        "eventDescLong": "Southpaw Events is proud to present Underground Yoga - Deep House Vinyasa at Necto Nightclub, featuring a mixed-level vinyasa flow led by JQ, and soothing, upbeat vibrations courtesy of Avyu. Necto's production will be fully utilized to immerse each yogi in a wave of light and sound on the main dancefloor. This comfortable atmosphere is accepting of all skill levels. Mats are available for rent.",
        "eventCover"   : '15$ ADV / $20 DOS',
        "eventLink"    : 'special-events/' + 'underground-yoga-at-necto-nightclub-ann-arbor-michigan-mar-29th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/318752321856325/',
        "eventTix"     : 'http://bit.ly/UYNecto329',
        "eventImgTall" : 'img/event-images/' + 'underground-yoga-mar-29th-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'underground-yoga-mar-29th-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 25, 2017 21:00:00"),
        "eventName"    : "Not To Be Trusted : The Reunion in the Red Room",
        "eventArtist"  : "Not To Be Trusted",
        "eventDesc"    : "Modern Cathedrals & Dub Monitor present... Not To Be Trusted : Reunion. A year older and as morally depraved as ever.",
        "eventDescLong": "Modern Cathedrals & Dub Monitor present... Not To Be Trusted : Reunion. A year older and as morally depraved as ever.<br><br>In no particular order:<br>Altstadt Echo b2b Segv (Modern Cathedrals, Sly Fox)<br>Äsop (Modern Cathedrals)<br>Inyahed Signalman (Dub Monitor)<br>Waffleparty (MEDMA Alumni)<br>kevinmcq (MEDMA Alumni)",
        "eventCover"   : 'Cover is free before 10pm | Free for ladies before 11pm | $5 for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'not-to-be-trusted-at-necto-nightclub-ann-arbor-michigan-mar-25th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1244230825673834/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-not-to-be-trusted-reunion-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'cal-not-to-be-trusted-reunion-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 23, 2017 21:00:00"),
        "eventName"    : "Breathe Carolina",
        "eventArtist"  : "Breathe Carolina",
        "eventDesc"    : "The multi-faceted, Colorado-based EDM/post-hardcore/electro-pop unit Breathe Carolina was founded in 2006. Breathe Carolina is composed of David Schmitt, Tommy Cooperman, and Eric Armenta. The Denver group's blend of synth-based beats and melodic screaming first appeared on the public radar in 2007 with the self-released Gossip EP. It was followed in 2008 by the band's first full-length for Rise Records, It's Classy, Not Classic, which featured all of the tracks that appeared on Gossip with six additional new songs. Hello Fascination was released in 2009 and peaked at number 43 on the Billboard 200, and in 2011 the group released their third full-length, Hell Is What You Make It.",
        "eventDescLong": "The multi-faceted, Colorado-based EDM/post-hardcore/electro-pop unit Breathe Carolina was founded in 2006. Breathe Carolina is composed of David Schmitt, Tommy Cooperman, and Eric Armenta. The Denver group's blend of synth-based beats and melodic screaming first appeared on the public radar in 2007 with the self-released Gossip EP. It was followed in 2008 by the band's first full-length for Rise Records, It's Classy, Not Classic, which featured all of the tracks that appeared on Gossip with six additional new songs. Hello Fascination was released in 2009 and peaked at number 43 on the Billboard 200, and in 2011 the group released their third full-length, Hell Is What You Make It. A fourth album was released, Savages, in 2014, which featured the singles &quot;Collide,&quot; &quot;Bang It Out,&quot; &quot;Sellouts,&quot; and &quot;Savages&quot;. The following year saw the release of a new single, 'More Than Ever,' a collaboration with Ryos and featuring vocalist KARRA. It was issued via Dutch indie Spinnin' Records. Two more Spinnin'-issued singles, &quot;Anywhere But Home&quot; and &quot;Hero (Satellite)&quot;, followed in 2016.",
        "eventCover"   : '4 Pack - $34 | Early Bird - $10.00 | GA - 12.50 | Doors $15',
        "eventLink"    : 'special-events/' + 'breathe-carolina-at-necto-nightclub-ann-arbor-michigan-mar-23rd-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/647347778790781/',
        "eventTix"     : 'http://bit.ly/2l68N6Y',
        "eventImgTall" : 'img/event-images/' + 'breathe-carolina-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'breathe-carolina-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 20, 2017 21:00:00"),
        "eventName"    : "Factory Fallout",
        "eventArtist"  : "Factory Fallout",
        "eventDesc"    : "Secure your place in Factory's post-apocalypse party with Void6, DJ Saint, Madisi, and MC Yoda!",
        "eventDescLong": "Secure your place in Factory's post-apocalypse party with Void6, DJ Saint, Madisi, and MC Yoda!",
        "eventCover"   : '$1 before 10pm & $3 after 10pm',
        "eventLink"    : 'special-events/' + 'factory-fallout-at-necto-nightclub-ann-arbor-michigan-mar-20th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/194345694379898/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'factory-fallout-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'factory-fallout-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 17, 2017 17:00:00"),
        "eventName"    : "Let's Get Lucky with Courtney Act & Tatianna",
        "eventArtist"  : "Courtney Act &amp; Tatianna",
        "eventDesc"    : "This St Patty's Day falls on Pride! So Let's Get Lucky with COURTNEY ACT, Runner Up of RuPaul's Drag Race S6 & TATIANNA, RuPaul's Drag Race S2 & All Stars. Great St Patty's Drink Specials All Day!",
        "eventDescLong": "This St Patty's Day falls on Pride! So Let's Get Lucky with...</br>COURTNEY ACT: Runner Up of RuPaul's Drag Race S6</br>TATIANNA: RuPaul's Drag Race S2 & All Stars</br>Great St Patty's Drink Specials All Day!</br>Show Times:</br>COURTNEY ACT: 1st show starts at 6pm: Encore at 8pm</br>TATIANNA: 1st show starts at 10pm : Encore at Midnight</br>Hosted by Chanel Hunter & Jadein Black</br>Music by DJ Jace • DJ DigiMark • Nick Donovan",
        "eventCover"   : 'Cover from 5pm - 9pm : FREE for 21+ | $15 for 18-20<br>Cover from 9pm - 2am : Free from 9pm to 10pm | With College ID Free from 9pm to 11pm | $5 for 21+ | $10 for 18-20',
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
        "eventDate"    : new Date("mar 16, 2017 22:00:00"),
        "eventName"    : "Throwback Thursday : 21+ get in FREE",
        "eventArtist"  : "Throwback Thursday",
        "eventDesc"    : "THROWBACK THURSDAY<br>All Your Favorite Music from the 80's, 90's & early 00's<br>FREE for 21+ | $10 for 18-20<br>with DJ KEVIN MICHAEL<br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles",
        "eventDescLong": "THROWBACK THURSDAY<br>All Your Favorite Music from the 80's, 90's & early 00's<br>FREE for 21+ | $10 for 18-20<br>with DJ KEVIN MICHAEL<br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles",
        "eventCover"   : 'FREE for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'throwback-thursday-at-necto-nightclub-ann-arbor-michigan-mar-16th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/778094255672649/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-throwbackthursday-at-necto-nightclub-ann-arbor.png',
        "eventImgWide" : 'img/event-images/' + 'cal-throwbackthursday-at-necto-nightclub-ann-arbor.png',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 9, 2017 21:00:00"),
        "eventName"    : "Lost Kings",
        "eventArtist"  : "Lost Kings",
        "eventDesc"    : "Check these two friends out on Thursday as they play some of your favorite mixes by Lost Kings: Me, Myself and I, You, Phone Down & more.",
        "eventDescLong": "After meeting at a party, Lost Kings—Robert Gainley and Dr. No—sealed a bond that would ignite both a fervent creative partnership and friendship. Check these two friends out on Thursday as they play some of your favorite mixes by Lost Kings: Me, Myself and I, You, Phone Down & more.",
        "eventCover"   : 'Pre-sale Early Bird $10 | GA $15 | at Doors $20',
        "eventLink"    : 'special-events/' + 'lost-kings-at-necto-nightclub-ann-arbor-michigan-mar-9th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1348662695244632/',
        "eventTix"     : 'http://www.clubtix.com/lost-kings-at-necto-tickets-504990?p=10635',
        "eventImgTall" : 'img/event-images/' + 'lost-kings-at-necto-night-club-ann-arbor.png',
        "eventImgWide" : 'img/event-images/' + 'lost-kings-at-necto-night-club-ann-arbor.png',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 8, 2017 18:30:00"),
        "eventName"    : "Underground Yoga - Deep House Vinyasa",
        "eventArtist"  : "Underground Yoga",
        "eventDesc"    : "Welcome to the March class of 2017 at Necto Nightclub, featuring a mixed level vinyasa-flow led by Risa (Tiny Buddha Yoga), and soothing, upbeat vibrations courtesy of Avyu. Necto's production will be fully utilized to immerse each yogi in a wave of light and sound on the main dancefloor. This comfortable atmosphere is accepting of all skill levels. Mats are available for rent.",
        "eventDescLong": "Welcome to the March class of 2017 at Necto Nightclub, featuring a mixed level vinyasa-flow led by Risa (Tiny Buddha Yoga), and soothing, upbeat vibrations courtesy of Avyu. Necto's production will be fully utilized to immerse each yogi in a wave of light and sound on the main dancefloor. This comfortable atmosphere is accepting of all skill levels. Mats are available for rent.",
        "eventCover"   : '$15 ADV / 20 DOS. No student discount.',
        "eventLink"    : 'special-events/' + 'underground-yoga-at-necto-nightclub-ann-arbor-michigan-mar-8th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1196959980420256/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-underground-yoga-mar-8th-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'cal-underground-yoga-mar-8th-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("mar 7, 2017 20:00:00"),
        "eventName"    : "Carnarbor",
        "eventArtist"  : "Carnarbor",
        "eventDesc"    : "Samba, Samba, Samba, Masks, Confetti, and more...<br>The best Rosser DJ: Mr. Jamyle Michael will be pumping up the party!!!",
        "eventDescLong": "Samba, Samba, Samba, Masks, Confetti, and more...<br>The best Rosser DJ: Mr. Jamyle Michael will be pumping up the party!!! On the 6th edition of this CARNIVAL party, come ready to show your SAMBA moves! CAIPIRINHAS served all night. We have many surprises this year (get ready for some live musical performances), so join the most colorful Brazilian party of the year!",
        "eventCover"   : 'MUST BE 21+ | $20 at Doors',
        "eventLink"    : 'special-events/' + 'carnarbor-at-necto-nightclub-ann-arbor-michigan-mar-7th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1348662695244632/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-carnarbor-at-necto-nightclub-ann-arbor.png',
        "eventImgWide" : 'img/event-images/' + 'cal-carnarbor-at-necto-nightclub-ann-arbor.png',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },

    {
        "eventDate"    : new Date("mar 2, 2017 20:30:00"),
        "eventName"    : "Perkulat0r x Esseks : Two Lost Boys Tour",
        "eventArtist"  : "Esseks and Perkulat0r",
        "eventDesc"    : "Magical Mitten Productions and Further Frequencies Presents: Esseks & Perkulat0r w/ support from Patches O'Malley, KNGHT, Hans Play, Dawning Music.",
        "eventDescLong": "Magical Mitten Productions and Further Frequencies Presents: Esseks & Perkulat0r w/ support from Patches O'Malley, KNGHT, Hans Play, Dawning Music. What to expect? Forward thinking bass music accompanied by local vendors and artists that creates an experience destined to satisfy all your senses.",
        "eventCover"   : 'Pre-sale tickets are $10 - 4 pack | $9 Early Bird | $12 GA | $15 at Doors',
        "eventLink"    : 'special-events/' + 'perkulat0r-esseks-at-necto-nightclub-ann-arbor-michigan-mar-2nd-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1628484420511493/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'perkulat0r-esseks-at-necto-night-club-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'perkulat0r-esseks-at-necto-night-club-ann-arbor.jpeg',
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
        "eventDate"    : new Date("Jan 29, 2017 18:00:00"),
        "eventName"    : "Miss Necto Professional/Amateur Pageant 2017",
        "eventArtist"  : "Miss Necto Pageant",
        "eventDesc"    : "Join us Sunday January 29th, 2017 as we join the huntsman for the 3rd annual Miss Necto Professional/ Amateur Pageant! This year's theme is Evil Queens!",
        "eventDescLong": "Join us Sunday January 29th, 2017 as we join the huntsman for the 3rd annual Miss Necto Professional/ Amateur Pageant! This year's theme is Evil Queens!",
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
        "eventDescLong": 'Worthy (Dirtybird • Anabatic) is doing a 32-city &#34;One-On-One&#34;. The tour will last from his Holy Ship performance in early Jan all the way to Miami Music Week in March. Joining Worthy is Detroit&#39;s own Golf Clap & ADMN',
        "eventCover"   : 'Pre-sale Early Bird $15 | 4 Pack $40 | Day of Show $20',
        "eventLink"    : 'special-events/' + 'worthy-golf-clap-at-necto-nightclub-ann-arbor-michigan-jan-26th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/981986061934932/',
        "eventTix"     : 'https://www.eventbrite.com/e/worthy-one-on-one-tour-with-golf-clap-tickets-29881447213',
        "eventImgTall" : 'img/event-images/' + 'cal-worthy-golf-clap-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'cal-worthy-golf-clap-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jan 21, 2017 22:00:00"),
        "eventName"    : "MEDMA x Groove x D/Art in the Red Room",
        "eventArtist"  : "MEDMA/Groove/D/Art",
        "eventDesc"    : 'Groove Performance Group and D/ART will be collaborating with Michigan Electronic Dance Music Association (MEDMA) to create live installation artwork and impromptu found instrument performances to the tune of every house genre under the sun... all hosted at Necto Nightclub&#39;s Red Room.',
        "eventDescLong": 'Groove Performance Group and D/ART will be collaborating with Michigan Electronic Dance Music Association (MEDMA) to create live installation artwork and impromptu found instrument performances to the tune of every house genre under the sun... all hosted at Necto Nightclub&#39;s Red Room.</br>MEDMA is also proudly featuring three DJ debuts: a phenomal soul and lo fi house b2b st with V (Victoria Gabrielle Johnson) and Morning News (Colin Rankin), along with our closing set by Board member Fabian Fuxa. MEDMA powerhouse veterans Lumière (Matt Solarz) and Jackson Alan (Jackson Codiga) will bring it all during peak hours.',
        "eventCover"   : 'Ladies get in Free before 11pm | $5 for 21 + | $10 for 18 - 20',
        "eventLink"    : 'special-events/' + 'medma-groove-d-art-at-necto-nightclub-ann-arbor-michigan-jan-21st-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/374941016189201/',
        "eventTix"     : 'https://www.eventbrite.com/e/worthy-one-on-one-tour-with-golf-clap-tickets-29881447213',
        "eventImgTall" : 'img/event-images/' + 'medma-groove-d-art-at-necto-night-club-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'medma-groove-d-art-at-necto-night-club-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jan 19, 2017 22:00:00"),
        "eventName"    : "Quinn XCII with Ayokay presented by Spotlight",
        "eventArtist"  : "Quinn XCII / Ayokay",
        "eventDesc"    : 'Quinn XCII and ayokay cannot wait to come back to the town that helped shape their music, and are excited to support students who are constantly seeking knowledge in music, film, and entrepreneurship.',
        "eventDescLong": 'This will be the grand finale to Spotlight, MPowered’s premiere music and filmmaking competition, which will be held from January 14th-19th. Select participants will be presented prizes at the M-Oscars Award Ceremony on January 19th, which will be followed by the concert at Necto Nightclub. Quinn XCII and ayokay cannot wait to come back to the town that helped shape their music, and are excited to support students who are constantly seeking knowledge in music, film, and entrepreneurship.',
        "eventCover"   : 'Pre-sale Early Bird $20 | 4 Pack $60 | General Admission $25 | Day of Show $30',
        "eventLink"    : 'special-events/' + 'katya-at-necto-nightclub-ann-arbor-michigan-jan-13th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/197464524043644/',
        "eventTix"     : 'https://www.eventbrite.com/e/quinn-xcii-with-ayokay-presented-by-spotlight-tickets-29803552227',
        "eventImgTall" : 'img/event-images/' + 'quinn-xcii-ayokay-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'quinn-xcii-ayokay-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jan 13, 2017 21:00:00"),
        "eventName"    : "Dragster featuring... KATYA ",
        "eventArtist"  : "Katya",
        "eventDesc"    : 'Join us as we welcome back RuPauls Drag Race S7 Fan Favorite & Runner Up of All Stars... Katya! Katya is just your average run-of-the-mill Russian bisexual transvestite hooker at the intersection of glamour and comedy. You can find her at Necto, selling her ass & having fun with her fans.',
        "eventDescLong": 'Join us as we welcome back RuPauls Drag Race S7 Fan Favorite & Runner Up of All Stars... Katya! Katya is just your average run-of-the-mill Russian bisexual transvestite hooker at the intersection of glamour and comedy. You can find her at Necto, selling her ass & having fun with her fans.',
        "eventCover"   : 'Pre-sale Early Bird $20 | 4 Pack $60 | General Admission $25 | Day of Show $30',
        "eventLink"    : 'special-events/' + 'quinn-xcii-ayokay-at-necto-nightclub-ann-arbor-michigan-jan-19th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/872461432894909/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'katya-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'katya-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jan 12, 2017 21:00:00"),
        "eventName"    : "Two Friends",
        "eventArtist"  : "Two Friends",
        "eventDesc"    : 'Matt Halper and Eli Sones, the young masterminds behind Two Friends, have quickly revamped from high school bedroom producers to one of the most promising dance music duos of 2016. Known for their viral remixes of “Trap Queen”, “I Miss You” and “Cool”, the two have, in unprecedented time, mastered a wide range of genres from deep, melodic house to harder progressive cuts. With their Spotify and SoundCloud views now exceeding 35 million and with nineteen #1’s on Hype Machine, the boys are well on their way to becoming the next big dance act to come out of America.',
        "eventDescLong": 'Matt Halper and Eli Sones, the young masterminds behind Two Friends, have quickly revamped from high school bedroom producers to one of the most promising dance music duos of 2016. Known for their viral remixes of “Trap Queen”, “I Miss You” and “Cool”, the two have, in unprecedented time, mastered a wide range of genres from deep, melodic house to harder progressive cuts. With their Spotify and SoundCloud views now exceeding 35 million and with nineteen #1’s on Hype Machine, the boys are well on their way to becoming the next big dance act to come out of America.',
        "eventCover"   : 'Pre-sale Early Bird $10 | 4 Pack $20 | General Admission $15',
        "eventLink"    : 'special-events/' + 'two-friends-at-necto-nightclub-ann-arbor-michigan-jan-12th-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/1299649313440032/',
        "eventTix"     : 'https://www.eventbrite.com/e/two-friends-back-to-school-bash-tickets-29881316823',
        "eventImgTall" : 'img/event-images/' + 'two-friends-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'two-friends-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jan 5, 2017 22:00:00"),
        "eventName"    : "Throwback Thursday",
        "eventArtist"  : "Throwback Thursday",
        "eventDesc"    : 'THROWBACK THURSDAY<br>All Your Favorite Music from the 80s, 90s & early 00s<br>FREE for 21+ | $10 for 18-20<br><br>KEVIN MICHAEL<br><br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles',
        "eventDescLong": 'THROWBACK THURSDAY<br>All Your Favorite Music from the 80s, 90s & early 00s<br>FREE for 21+ | $10 for 18-20<br><br>KEVIN MICHAEL<br><br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles',
        "eventCover"   : 'FREE for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'throwback-thursday-at-necto-nightclub-ann-arbor-michigan-jan-5-2017.html',
        "eventSocial"  : 'https://www.facebook.com/events/105488613282374/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'throwback-thursday-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'throwback-thursday-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 31, 2016 21:00:00"),
        "eventName"    : "New Years Eve: 2017",
        "eventArtist"  : "New Years Eve: 2017",
        "eventDesc"    : 'All that Glitters! Ring in the New Year with your favorite Southeast Michigan Nightclub... Necto! Join DJ Hardy, Nick D & MC Yoda in the Main Room spinning Top 40 & House. Ayinde Audio in the Red Room playing the best music from the late 80s, 90s & early 2000s.',
        "eventDescLong": 'All that Glitters! Ring in the New Year with your favorite Southeast Michigan Nightclub... Necto! Join DJ Hardy, Nick D & MC Yoda in the Main Room spinning Top 40 & House. Ayinde Audio in the Red Room playing the best music from the late 80s, 90s & early 2000s.',
        "eventCover"   : 'Pre-sale $30 for a single ticket',
        "eventLink"    : 'special-events/' + 'new-years-eve-2017-ann-arbor-necto-nightclub.html',
        "eventSocial"  : 'https://www.facebook.com/events/221900801590054/',
        "eventTix"     : 'https://www.eventbrite.com/e/new-years-eve-2017-tickets-29809040643',
        "eventImgTall" : 'img/event-images/' + 'new-years-eve-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'new-years-eve-2017-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 29, 2016 22:00:00"),
        "eventName"    : "Throwback Thursday",
        "eventArtist"  : "Throwback Thursday",
        "eventDesc"    : 'THROWBACK THURSDAY<br>All Your Favorite Music from the 80s, 90s & early 00s<br>FREE for 21+ | $10 for 18-20<br><br>KEVIN MICHAEL<br><br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles',
        "eventDescLong": 'THROWBACK THURSDAY<br>All Your Favorite Music from the 80s, 90s & early 00s<br>FREE for 21+ | $10 for 18-20<br><br>KEVIN MICHAEL<br><br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles',
        "eventCover"   : 'FREE for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'throwback-thursday-at-necto-nightclub-ann-arbor-michigan-dec-29-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1137219513065902/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'throwback-thursday-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'throwback-thursday-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 23, 2016 21:00:00"),
        "eventName"    : "Pride Noel",
        "eventArtist"  : "Pride Noel",
        "eventDesc"    : 'What&#039; s under your tree? Join us for Necto Pride&#039; s annual holiday event. Surround yourself in the sweaty love of Sandy Claws & her amazing elves! Holiday photos will be taken by Bruno all night.',
        "eventDescLong": 'What&#039; s under your tree? Join us for Necto Pride&#039; s annual holiday event. Surround yourself in the sweaty love of Sandy Claws & her amazing elves! Holiday photos will be taken by Bruno all night.',
        "eventCover"   : 'Free before 10pm | Free with College ID before 11pm | $5 for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'pride-noel-at-necto-nightclub-ann-arbor-michigan-dec-23rd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/134439123706957/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'pride-noel-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'pride-noel-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 22, 2016 22:00:00"),
        "eventName"    : "Throwback Thursday",
        "eventArtist"  : "Throwback Thursday",
        "eventDesc"    : 'THROWBACK THURSDAY<br>All Your Favorite Music from the 80s, 90s & early 00s<br>FREE for 21+ | $10 for 18-20<br><br>KEVIN MICHAEL<br><br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles',
        "eventDescLong": 'THROWBACK THURSDAY<br>All Your Favorite Music from the 80s, 90s & early 00s<br>FREE for 21+ | $10 for 18-20<br><br>KEVIN MICHAEL<br><br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles',
        "eventCover"   : 'FREE for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'throwback-thursday-at-necto-nightclub-ann-arbor-michigan-dec-22-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1736467956681248/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'throwback-thursday-dec-22-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'throwback-thursday-dec-22-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 17, 2016 22:00:00"),
        "eventName"    : "Plastic Passion",
        "eventArtist"  : "Plastic Passion",
        "eventDesc"    : 'Plastic Passion brings your favorite Retro 70s/80s/90s New Wave, Post-Punk, Brit-Pop, Industrial, Electro, Manchester, Eurotrash, Acid House, Goth Rock, Shoegazer & more. Featuring DJ Josh & Friends!',
        "eventDescLong": 'Plastic Passion brings your favorite Retro 70s/80s/90s New Wave, Post-Punk, Brit-Pop, Industrial, Electro, Manchester, Eurotrash, Acid House, Goth Rock, Shoegazer & more. Featuring DJ Josh & Friends!',
        "eventCover"   : '',
        "eventLink"    : 'special-events/' + 'plastic-passion-reunion-at-necto-nightclub-ann-arbor-michigan-dec-17th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/460675907436417/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'plastic-passion-renuion-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'plastic-passion-renuion-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 16, 2016 21:00:00"),
        "eventName"    : "Naomi Smalls",
        "eventArtist"  : "Naomi Smalls",
        "eventDesc"    : 'Naomi Smalls is a 7 ft. glamazon, inspired by 90s supermodels, pop culture and fashion.Although she may be young, Naomi is a force to be reckoned with. Ultra tall and slim, with a keen eye for fashion, she has a body and heart manufactured for the runway. Watch Naomi strut at this special holiday event at Necto. One show only. Starts at 10:30pm with a Meet & Greet after midnight.',
        "eventDescLong": 'Naomi Smalls is a 7 ft. glamazon, inspired by 90s supermodels, pop culture and fashion.Although she may be young, Naomi is a force to be reckoned with. Ultra tall and slim, with a keen eye for fashion, she has a body and heart manufactured for the runway. Watch Naomi strut at this special holiday event at Necto. One show only. Starts at 10:30pm with a Meet & Greet after midnight.',
        "eventCover"   : '',
        "eventLink"    : 'special-events/' + 'naomi-smalls-at-necto-nightclub-ann-arbor-michigan-dec-16th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/460675907436417/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'naomi-smalls-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'naomi-smalls-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 15, 2016 21:00:00"),
        "eventName"    : "CloZee & Psymbionic - Biohackers Tour",
        "eventArtist"  : "CloZee & Psymbionic",
        "eventDesc"    : 'Hailing from Toulouse, CloZee is Chloé, a young music producer who seamlessly combines technical precision with a wild imagination. An accomplished instrumentalist, she began playing the classical guitar at 11. Influenced by edIT, Bonobo, The Widdler and Amon Tobin, she started producing electronic music at the age of 16.<br>In 2014, she won the Best International Newcomer of 2013 at the UK Glitch-Hop Award.<br>Her tracks defy genres, oscillating between World Bass, Tribal Trap, Glitch-Hop, Trip-Hop, and Downtempo. She created her own place in the glitch community, thanks to a unique, highly surprising style, mixing powerful basslines, funky off beat percussion and emotional cinematic sounds. A musical identity which led her to play in the USA (including the festivals Coachella, Lightning In A Bottle, Shambhala...), Canada, India, Berlin, and more than 30 cities in France, alongside artists like Bonobo, Gramatik, Chet Faker, Tipper, TOKiMONSTA, Tipper, Big Gigantic, GRiZ. Psymbionic: Cresting the modern wave of electronic producers, Psymbionic creates aural experiences that explore the range of multi-tempo Bass Music within an influential and dynamic culture. With an ear for situational relevance, Psymbionic enjoys turning non-traditional sound design and infectious rhythms into dancefloor heat, while also maintaining his history in the downtempo, emotive side of the electronic sound. John Burcham has been moving bodies and turning heads as Psymbionic for several years in all corners of the USA, playing with acts such as Bassnectar, STS9, Big Gigantic, ill.Gates, Excision, EOTO, and Tipper. His passion and innovation in the music world are showcased through album releases on Muti Music and MalLabel, as well as in his role as label manager for the popular Electronic imprint Gravitas Recordings.',
        "eventDescLong": 'Hailing from Toulouse, CloZee is Chloé, a young music producer who seamlessly combines technical precision with a wild imagination. An accomplished instrumentalist, she began playing the classical guitar at 11. Influenced by edIT, Bonobo, The Widdler and Amon Tobin, she started producing electronic music at the age of 16.<br>In 2014, she won the Best International Newcomer of 2013 at the UK Glitch-Hop Award.<br>Her tracks defy genres, oscillating between World Bass, Tribal Trap, Glitch-Hop, Trip-Hop, and Downtempo. She created her own place in the glitch community, thanks to a unique, highly surprising style, mixing powerful basslines, funky off beat percussion and emotional cinematic sounds. A musical identity which led her to play in the USA (including the festivals Coachella, Lightning In A Bottle, Shambhala...), Canada, India, Berlin, and more than 30 cities in France, alongside artists like Bonobo, Gramatik, Chet Faker, Tipper, TOKiMONSTA, Tipper, Big Gigantic, GRiZ. Psymbionic: Cresting the modern wave of electronic producers, Psymbionic creates aural experiences that explore the range of multi-tempo Bass Music within an influential and dynamic culture. With an ear for situational relevance, Psymbionic enjoys turning non-traditional sound design and infectious rhythms into dancefloor heat, while also maintaining his history in the downtempo, emotive side of the electronic sound. John Burcham has been moving bodies and turning heads as Psymbionic for several years in all corners of the USA, playing with acts such as Bassnectar, STS9, Big Gigantic, ill.Gates, Excision, EOTO, and Tipper. His passion and innovation in the music world are showcased through album releases on Muti Music and MalLabel, as well as in his role as label manager for the popular Electronic imprint Gravitas Recordings.',
        "eventCover"   : '$10 adv | $15 DOS | 4 pack presale for $30',
        "eventLink"    : 'special-events/' + 'clozee-and-psymbionic-at-necto-nightclub-ann-arbor-michigan-dec-15th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1417695524925106/',
        "eventTix"     : 'http://bit.ly/CloZPsymA2',
        "eventImgTall" : 'img/event-images/' + 'cal-clozee-and-psymbionic-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-clozee-and-psymbionic-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : false,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
        {
        "eventDate"    : new Date("Dec 10, 2016 20:00:00"),
        "eventName"    : "Dance Break by EnCore",
        "eventArtist"  : "Dance Break by EnCore",

        "eventDesc"    : 'Have you been spending hours searching for the perfect Spotify playlist to take your mind off your busy end-of-the-semester life? We have a better idea... Come check out DANCE BREAK by EnCore, a collaborative dance show including some of the hottest premiere dance crews from the University of Michigan and surrounding areas. 11 Crews - 2 Hours.',

        "eventDescLong": 'Have you been spending hours searching for the perfect Spotify playlist to take your mind off your busy end-of-the-semester life? We have a better idea... Come check out DANCE BREAK by EnCore, a collaborative dance show including some of the hottest premiere dance crews from the University of Michigan and surrounding areas. 11 Crews - 2 Hours.',

        "eventCover"   : 'Pre-sale $5 | Tickets at doors $7',
        "eventLink"    : 'special-events/' + 'dance-break-by-encore-at-necto-nightclub-ann-arbor-michigan-dec-10th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/319372518455926/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'dance-break-encore-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'dance-break-encore-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 7, 2016 20:00:00"),
        "eventName"    : "Cap’n Crunch and Funny or Die present Comedy Cram Session with Rory Scovel & Kurt Braunohler",
        "eventArtist"  : "Rory Scovel & Kurt Braunohler",

        "eventDesc"    : 'Come celebrate the latest web series The Earliest Show, from Cap’n Crunch and Funny or Die! Enjoy some sweets from Washtenaw Dairy and laughs from Rory Scovel and Kurt Braunohler.',

        "eventDescLong": 'Come celebrate the latest web series The Earliest Show, from Cap’n Crunch and Funny or Die! Enjoy some sweets from Washtenaw Dairy and laughs from Rory Scovel and Kurt Braunohler.',

        "eventCover"   : 'Free with RSVP',
        "eventLink"    : 'special-events/' + 'rory-scovel-kurt-braunohler-at-necto-nightclub-ann-arbor-michigan-dec-7th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/201089556964231/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-rory-scovel-kurt-braunohler-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-rory-scovel-kurt-braunohler-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 2, 2016 21:00:00"),
        "eventName"    : "SHARON NEEDLES winner of S4 of RuPaul's Drag Race",
        "eventArtist"  : "SHARON NEEDLES",

        "eventDesc"    : 'Sharon Needles is the stage name of Aaron Coady, an American drag performer, recording artist and winner of season 4 of RuPaul&#39;s Drag Race. A self-described &#39;stupid genius, reviled sweetheart, and PBR princess,&#39; Needles rose to prominence on the fourth season of the Logo reality competition where she quickly became a fan favorite.',

        "eventDescLong": 'Sharon Needles is the stage name of Aaron Coady, an American drag performer, recording artist and winner of season 4 of RuPaul&#39;s Drag Race. A self-described &#39;stupid genius, reviled sweetheart, and PBR princess,&#39; Needles rose to prominence on the fourth season of the Logo reality competition where she quickly became a fan favorite.',

        "eventCover"   : 'Free with RSVP',
        "eventLink"    : 'special-events/' + 'sharon-needles-at-necto-nightclub-ann-arbor-michigan-dec-2nd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/115293922275539/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-sharon-needles-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-sharon-needles-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Dec 2, 2016 17:30:00"),
        "eventName"    : "Soul Practitioners: Rockin' Christmas Party for Charity",
        "eventArtist"  : "Soul Practitioners",

        "eventDesc"    : 'We are a local all attorney band playing R&B, Motown and dance music. Admission is free with a donation of a toy to Toys for Tots or Community Action network, food for Food Gatherers or pet supplies for the Humane Society. Pizza and snacks provided, cash bar.',

        "eventDescLong": 'We are a local all attorney band playing R&B, Motown and dance music. Admission is free with a donation of a toy to Toys for Tots or Community Action network, food for Food Gatherers or pet supplies for the Humane Society. Pizza and snacks provided, cash bar.',

        "eventCover"   : 'Free with charitable donation',
        "eventLink"    : 'special-events/' + 'soul-practitioners-rockin-christmas-at-necto-nightclub-ann-arbor-michigan-dec-2nd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1679074349070438/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-soul-practitioners-at-necto-nightclub-ann-arbor.jpeg',
        "eventImgWide" : 'img/event-images/' + 'cal-soul-practitioners-at-necto-nightclub-ann-arbor.jpeg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Nov 28, 2016 21:00:00"),
        "eventName"    : "Factory Fall Formal 2016",
        "eventArtist"  : "Factory Fall Formal",

        "eventDesc"    : 'Factory, it&#39;s that special time of year when we dress our best and party to the music. Free admission if you wear formal attire, and free photos by a pro with your friends. Sounds provided by: DJ Void6, DJ Skellie, Jaysen Craves, DJ Madisi, and host MC Yoda. Visuals by Remnant.',

        "eventDescLong": 'Factory, it&#39;s that special time of year when we dress our best and party to the music. Free admission if you wear formal attire, and free photos by a pro with your friends. Sounds provided by: DJ Void6, DJ Skellie, Jaysen Craves, DJ Madisi, and host MC Yoda. Visuals by Remnant.',

        "eventCover"   : '$1 cover before 10PM, $3 after.',
        "eventLink"    : 'special-events/' + 'fall-formal-2016-at-necto-nightclub-ann-arbor-michigan-nov-28th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1527288940620781/',
        "eventTix"     : 'none',
        "eventImgTall" : 'img/event-images/' + 'cal-fall-formal-2016-at-necto-nightclub-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-fall-formal-2016-at-necto-nightclub-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Nov 19, 2016 21:00:00"),
        "eventName"    : "Unfolded",
        "eventArtist"  : "Unfolded",

        "eventDesc"    : 'Unfold your mind, body and spirit with two artists that are pushing the boundaries of house music.',

        "eventDescLong": 'Unfold your mind, body and spirit with two artists that are pushing the boundaries of house music.',

        "eventCover"   : '$5 presale. At doors $5 for 21+ | $10 for 18-20',
        "eventLink"    : 'special-events/' + 'unfolded-at-necto-nightclub-ann-arbor-michigan-nov-19th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1467037769979873/',
        "eventTix"     : 'https://www.eventbrite.com/e/unfolded-tickets-28922587237',
        "eventImgTall" : 'img/event-images/' + 'cal-unfolded-clozee-and-psymbionic-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-unfolded-clozee-and-psymbionic-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Nov 14, 2016 17:30:00"),
        "eventName"    : "Underground Yoga - Deep House Vinyasa",
        "eventArtist"  : "Underground Yoga",

        "eventDesc"    : 'Welcome to the November class at Necto Nightclub, featuring a mixed level vinyasa-flow led by Carol Ann, and soothing, upbeat vibrations courtesy of Adam Westing. Necto&#39;s production will be fully utilized to immerse each yogi in a wave of light and sound on the main dance floor. This comfortable atmosphere is accepting of all skill levels. Mats are available for rent for only $2.',

        "eventDescLong": 'Welcome to the November class at Necto Nightclub, featuring a mixed level vinyasa-flow led by Carol Ann, and soothing, upbeat vibrations courtesy of Adam Westing. Necto&#39;s production will be fully utilized to immerse each yogi in a wave of light and sound on the main dance floor. This comfortable atmosphere is accepting of all skill levels. Mats are available for rent for only $2.',

        "eventCover"   : '$15 presale / $20 DOS',
        "eventLink"    : 'special-events/' + 'underground-yoga-deep-house-vinyasa-at-necto-nightclub-ann-arbor-michigan-nov-14th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1268772179847047/',
        "eventTix"     : 'http://bit.ly/UYNecto1114',
        "eventImgTall" : 'img/event-images/' + 'cal-deep-house-vinyasa-at-necto-night-club-ann-arbor.jpg',
        "eventImgWide" : 'img/event-images/' + 'cal-deep-house-vinyasa-at-necto-night-club-ann-arbor.jpg',
        "eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Nov 11, 2016 21:00:00"),
        "eventName"    : "Necto Pride presents... WILLAM : Suck Less-Where There's a Willam There's a Way Book Tour",
        "eventArtist"  : "Willam",
        "eventDescLong": 'Join Willam from RuPaul’s Drag Race S4 & AAA Girls on their highly anticipated book tour. Foreworded by Neil Patrick Harris, Willam’s book is already the #1 pre-release in self help humor on Amazon. "SUCK LESS: Where There’s a Willam ThereÆs a Way!" More info to come for the VIP book tour meet & greet.',

        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'willam-at-necto-nightclub-ann-arbor-michigan-nov-11th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1675681442747391/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-willam-at-necto-night-club-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Nov 11, 2016 19:00:00"),
        "eventName"    : "WILLAM: VIP Meet & Greet",
        "eventArtist"  : "Willam",
        "eventDescLong": 'Willam’s highly anticipated book, foreworded by Neil Patrick Harris, is already the #1 pre-release in self-help humor on Amazon. $qout;SUCK LESS: Where There’s a WIllam There’s a Way!$qout; will be included in VIP Meet & Greet ticket. This exclusive meet & greet will be held at 7pm. VIP Meet & Greet also includes a book signing, and professional photographer to take your pictures. Photos will be available for download. All ages will be welcome for this Meet & Greet.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'willam-book-signing-at-necto-nightclub-ann-arbor-michigan-nov-11th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1675681442747391/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-willam-at-necto-night-club-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Nov 10, 2016 21:00:00"),
        "eventName"    : "Klingande",
        "eventArtist"  : "Klingande",
        "eventDescLong": '2016 is already on course to be Klingande’s aka Cedric Steinmyller’s most prolific year to date. With the release of ‘Losing U’, the promise of an upcoming album, as well as a live tour in the works that will see him bringing out musicians playing the guitar, violin, harmonica, drums, saxophone and even singers, Klingande shows absolutely no signs of putting on the brakes, making sure that he remains the one to watch.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'klingande-at-necto-nightclub-ann-arbor-michigan-nov-10th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/194317207644560/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-klingande-at-necto-night-club-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Nov 9, 2016 21:00:00"),
        "eventName"    : "LEMAITRE",
        "eventArtist"  : "LEMAITRE",
        "eventDescLong": 'Lemaitre is an electronic duo hailing from Oslo, Norway. Formed in 2010 by longtime friends Ketil Jansen and Ulrik Denizou Lund, the bandmembers named themselves after Belgian priest Georges Lemaître, father of the big bang theory. It’s an appropriate reference for their sound, which ranges from electro house to catchy pop grooves that fall somewhere between Daft Punk and Phoenix.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'lemaitre-at-necto-nightclub-ann-arbor-michigan-nov-9th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1254743334545390/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-lemaitre-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 31, 2016 21:00:00"),
        "eventName"    : "Factory presents... Bring Out Your Dead: Halloween 2016!",
        "eventArtist"  : "Bring Out Your Dead: Halloween 2016!",
        "eventDescLong": 'Join the Factory Family for our favorite party of the year... HALLOWEEN! Join Void 6 in the Main Room & DJ Madisi in the Red Room for the best Halloween Party in Southeast Michigan! Get here early to enjoy the festivities. Please note: No metal or hard plastic, toys or faux weapons are permitted.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'bring-out-your-dead-halloween-2016-at-necto-nightclub-ann-arbor-michigan-oct-31st-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/309422669423208/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-bring-out-your-dead-halloween-2016-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 30, 2016 20:00:00"),
        "eventName"    : "Feed Me's Family Reunion : Devil's Night",
        "eventArtist"  : "Feed Me",
        "eventDescLong": 'Jon Gooch is a electro producer under the alias of ’Feed Me’, He is also known as ’Spor’. Under his Spor alias he mostly produces drum and bass, while under his Feed Me alias he creates music in all different kinds of genres, ranging from Dubstep to Trap.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'feed-me-family-reunion-devils-night-at-necto-nightclub-ann-arbor-michigan-oct-30th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/198556387246509/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-feed-me-at-necto-night-club-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 29, 2016 21:00:00"),
        "eventName"    : "Frequency presents... Halloween Bash 2016!",
        "eventArtist"  : "Frequency presents... Halloween Bash 2016!",
        "eventDescLong": 'Join Necto for our annual Freak-quency Halloween Bash! Get here early for the festivities with DJ Hardy & MC Yoda. Please note: No metal or hard plastic, toys or faux weapons are permitted.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'halloween-bash-2016-at-necto-nightclub-ann-arbor-michigan-oct-29th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/194207361000676/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-halloween-bash-2016-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 28, 2016 21:00:00"),
        "eventName"    : "Pride presents... Haunted Halloween Party!",
        "eventArtist"  : "Pride presents... Haunted Halloween Party!",
        "eventDescLong": 'Join us at Pride for our annual Halloween Costume Party! It’s one of the most popular Pride events of the year. Get here early for the festivities. Costume contest with cash prizes at midnight. Hosted by Chanel Hunter &amp; Jadein Black. Please note: No metal or hard plastic, toys or faux weapons are permitted.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'haunted-halloween-party-at-necto-nightclub-ann-arbor-michigan-oct-28th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/669563153206248/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-haunted-halloween-party-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 27, 2016 21:00:00"),
        "eventName"    : "IDK Y Not Events presents... FUN HOUSE: Halloween Thrills & Chills",
        "eventArtist"  : "IDK Y Not Events presents... FUN HOUSE: Halloween Thrills & Chills",
        "eventDescLong": 'Come One... Come All! Join us at the Fun House for an Amazing Halloween Party! Don’t be afraid! The Ring Master will show you the way to Fantastic Thrills & Chills! COSTUME CONTEST AT MIDNIGHT! CASH PRIZE $500.00<br>Featuring... Acro, Aerialists Burlesque, Contortionists, Fire, Hula Hoopers, Illusionsists, Lyra, Music</br>Starring in alphabetical order... Ani Briated, Annie Thinge, Ayinde Audio, Cinna Moan, Daisy Dupree, Emily LeMieux, Fitch, Gala Delridge Delicious, Jadein Black, Jadey Bug, Lilly Rascal, Lis Chere Thomas, Taylor Aquino, The Amazing K, Thrustin’ Bieber Black, Violet Defiant, Ziva Lynn',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'fun-house-halloween-thrills-chills-at-necto-nightclub-ann-arbor-michigan-oct-27th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1768483113364835/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-funhouse-at-necto-nightclub-ann-arbor-michigan.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 26, 2016 21:00:00"),
        "eventName"    : "Elephante with direct support: Ben Phipps",
        "eventArtist"  : "Elephante with Ben Phipps",
        "eventDescLong": 'Elephante aka Tim Wu was born in Ann Arbor, Michigan. He was classically trained in piano at the age of 8 and is a self-taught guitarist. After graduating from Huron High School in 2007, he went on to attend Harvard University.</br>Elephante started his music career as a singer-songwriter and guitarist, recording an acoustic EP before falling in love with electronic music. His first official release was a remix of Illenium - "Escape", out on June 12th on Prep School Records. Since then he has created a string of high-profile mixes for artists like: Dirty South, Galantis, Oliver Heldens, and more.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'elephante-ben-phipps-at-necto-nightclub-ann-arbor-michigan-oct-26th-2016.html',
        "eventSocial"  : '404.html',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'elephante-ben-phipps-cal-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 20, 2016 22:00:00"),
        "eventName"    : "Throwback Thursday",
        "eventArtist"  : "Throwback Thursday",
        "eventDescLong": 'All Your Favorite Music from the 80s, 90s & early 00s<br>FREE for 21+ | $10 for 18-20<br>DJ Ayinde Audio<br>Totally Awesome Drink Specials:<br>$3.50 Well drinks<br>$2.50 Fireball shots<br>3 for $10 Jaeger Bombs<br>$2 Miller Lite Bottles',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'throwback-thursday-at-necto-nightclub-ann-arbor-michigan-oct-20th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1808192052730572/',
        "eventTix"     : 'none',

        "eventImgWide" : 'img/event-images/' + 'cal-throwback-thursday-at-necto-night-club-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 13, 2016 20:00:00"),
        "eventName"    : "The Kinsey Sicks: Electile Disfunction",
        "eventArtist"  : "The Kinsey Sicks",
        "eventDescLong": 'It’s time to have some fun! Join Americas Favorite Dragapella Beautyshop Quartet... The Kinsey Sicks! Performing their hilarious show... Electile Disfunction. It’s just in time to throw some shade on this year’s Presidential election. All door profits will go to Jim Toy Community Center & other local LGBTQ groups in Washtenaw County. Check out the Kinsey Sicks as seen on CNN. Doors open at 7pm. Show is at 8pm. After Party begins at 9:30pm',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'kinsey-sicks-electile-disfunction-at-necto-nightclub-ann-arbor-michigan-oct-13th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/176492989455246/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-kinsey-sicks-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 7, 2016 20:00:00"),
        "eventName"    : "Necto Pride presents... KIM CHI runner up of RuPaul's Drag Race S8",
        "eventArtist"  : "Kim Chi",
        "eventDescLong": '"My name is Kim Chi, and say hello to yellow!" After Kim Chi’s last visit, we had a lot of requests to bring her back. Come hang out with our gorgeous 7’ tall chameleon & friend. Let’s get cocktailed & have some fun!',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'kim-chi-at-necto-nightclub-ann-arbor-michigan-oct-7th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/172838683151828/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-kim-chi-2017-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 6, 2016 20:00:00"),
        "eventName"    : "Country Club Disco presents... GOLF CLAP & Friends",
        "eventArtist"  : "Golf Clap",
        "eventDescLong": 'No better way to throw a proper party than with GOLF CLAP & Friends! Country Club Disco presents... Golf Clap with opening sets by the Ghita Sisters & Brahj. DJs; producers; club headliners; after-party enthusiasts: Golf Clap are Hugh Cleal and Bryan Jones, a Detroit duo with an unmatched passion for house music and a seemingly endless supply of studio and club-focussed creativity. And with releases on some of the world’s most influential house labels already under their belts, along with a lauded Boiler Room session and beyond, they’re only just getting started. Produced by Necto & Southpaw Events',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'golf-clap-at-necto-nightclub-ann-arbor-michigan-oct-6th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/317680438623928/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-golf-clap-oct-6-2016-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Oct 6, 2016 18:00:00"),
        "eventName"    : "Underground Yoga - Downtempo Flow",
        "eventArtist"  : "Underground Yoga",
        "eventDescLong": 'Welcome to the first Underground Yoga - Downtempo Flow ever! This class features a mixed-level slow burn combined with relaxing, rhythmic beats to allow for a deeper connection with the breath. Carol Ann Manown will be guiding us through class, while Avyu mans the decks. Yogis will be swathed in a wave of sound and light for an inviting atmosphere throughout the practice. Mat rentals are available for only $2.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'undergound-yoga-downtempo-flow-necto-nightclub-ann-arbor-michigan-sept-10th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/533650736842470/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-underground-yoga-downtemop-flow-at-necto-nightclub-ann-arbor-michigan.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 29, 2016 20:00:00"),
        "eventName"    : "Christian Martin: Dirtybird Hit & Run Show",
        "eventArtist"  : "Christian Martin",
        "eventDescLong": 'Christian Martin has been exploring electronic music from one end of the earth to the other; from full-moon parties in the deserts of California to the thumping, dark corners of the London club scene. Christian followed his love for spleen-rattling bass to San Francisco, where he met up with the now legendary dirtybird crew. The dirtybird BBQ was the brainchild of the four original members – Christian & his brother Justin Martin, and friends Claude VonStroke and Worthy. They had a personal mission to change the landscape of San Francisco house music by throwing an epic free party in the park, based on their new signature sound.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'christian-martin-at-necto-nightclub-ann-arbor-michigan-sept-29th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/604867786353472/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-christian-martin-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 28, 2016 20:00:00"),
        "eventName"    : "TRITONAL",
        "eventArtist"  : "TRITONAL",
        "eventDescLong": 'Watch a live performance by TRITONAL and you’ll understand the hype. The American production and DJ duo of Chad Cisneros and Dave Reed have firmly situated themselves as one of the most electrifying acts in the international EDM scene. Their zest for life and music is apparent to anyone who’s witnessed them in person or through their speakers and is just one reason why they resonate intensely with their loyal followers, "Tritonians."',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'tritonal-at-necto-nightclub-ann-arbor-michigan-sep-28th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1731098520471774/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-tritonal-at-the-club-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 22, 2016 20:00:00"),
        "eventName"    : "MATOMA : Party at Your Place! Tour /w Cheat Codes + Steve Void & Bank",
        "eventArtist"  : "MATOMA",
        "eventDescLong": 'Norway‘s Tom Stræte Lagergren (aka Matoma) is a DJ and producer known for his dance-oriented, tropical house music. By 2014, Matoma had started to gain international recognition for his remixes, including cuts for Jessie J, Akon, Enrique Iglesias, and others. In 2015, he scored a hit in Europe with a remix of Notorious B.I.G.‘s “Old Thing Back.” Also in 2015, Lagergren released his own debut single as Matoma, "Feeling Right (Everything Is Nice)," featuring rapper Wale and Jamaican dancehall singer Popcaan.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'matoma-party-at-your-place-tour-at-necto-nightclub-ann-arbor-michigan-sept-22nd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1743733792544393/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-matoma-party-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 20, 2016 20:00:00"),
        "eventName"    : "BAKERMAT x SAM FELDT",
        "eventArtist"  : "BAKERMAT x SAM FELDT",
        "eventDescLong": 'Sam Feldt: While only in his early twenties, Dutchman Sam Feldt has become quite the deep house tastemaker of his day. With amazing remix work as well as solid hits like the 2015 release ’Show Me Love’, which proved to be his definite claim to fame, he’s one of the DJs to watch when it comes to new sound flooding the scene.<br>Bakermat: Bakermat is one of the biggest rising stars of the last 6 months. With his new sound he immediately captured the hearts of a wide audience. His breakthrough was his production called ‘Zomer’ with 2 million views on YouTube he laid the foundation for his popularity and nowadays he’s well-known for his instrumental deephouse sound.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'sam-feldt-bakerman-at-necto-nightclub-ann-arbor-michigan-sep-20th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1033650563369677/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-sam-feldt-bakerman-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 15, 2016 20:00:00"),
        "eventName"    : "MEDMA presents... ARDALAN x medma",
        "eventArtist"  : "ARDALAN",
        "eventDescLong": 'Due to illness Stefano Noferini had to cancel his show this Thursday. No worries... Dirty Bird’s own ARDALAN will be here to make everything alright!',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'stefano-noferini-at-necto-nightclub-ann-arbor-michigan-sept-15th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/527579917366775/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-stefano-noferini-medma-at-necto-night-club-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 13, 2016 20:00:00"),
        "eventName"    : "GHASTLY",
        "eventArtist"  : "GHASTLY",
        "eventDescLong": 'Growing up on a goat farm in the desert of Arizona might not be considered the typical American upbringing for the next big DJ and producer, but then again Ghastly isn’t your typical American artist. Many have described the genre bending musician as a partially insane young man with a dark sense of humor. Politely abominable and casually destructive, he wields the catch phrase “born to die” as a mantra to his chaotic lifestyle. His sets have been heralded as “Energetic and eclectic live performances which are sometimes followed by odd speeches about the abnormalities of life, regretful sexual encounters, and well cooked food.” With such a diverse personality and rapport for his fans, it’s clear that Ghastly has one thing on his mind, and that’s to change the world.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'gastly-at-necto-nightclub-ann-arbor-michigan-sep-13th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1304934352869435/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-ghastly-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 9, 2016 20:00:00"),
        "eventName"    : "Necto Pride presents... THORGY THOR : The Boys Are Back!",
        "eventArtist"  : "THORGY THOR",
        "eventDescLong": 'Thorgy Thor is a NYC drag performance artist, event host and professional musician. Thor uses unconventional recording materials and music to create unique performances for theater, video, cabaret, and for nightlife entertainment. An explosive performer who loves to lip-sync just as much as create collaborative performance art that mashes together drag, music and comedy.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'thorgy-thor-at-necto-nightclub-ann-arbor-michigan-sep-9th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1878273615733485/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-thorgy-thor-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 8, 2016 20:00:00"),
        "eventName"    : "Southpaw Events presents... Underground Yoga : Deep House Vinyasa",
        "eventArtist"  : "Underground Yoga",
        "eventDescLong": 'Welcome to the Fall kick off class at Necto Nightclub, featuring a mixed level vinyasa-flow led by Jq Williams, and soothing, upbeat vibrations courtesy of Borbocious. Necto’s production will be fully utilized to immerse each yogi in a wave of light and sound on the main dancefloor. This comfortable atmosphere is accepting of all skill levels. Mats are available for rent. Sponsored by Lolë Ann Arbor Mat Rental - $2',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'underground-yoga-deep-house-vinyasa-at-necto-nightclub-ann-arbor-michigan-sep-8th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/274599362907045/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-underground-yoga-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 5, 2016 20:00:00"),
        "eventName"    : "Factory presents... Splatter Bash : UV Paint Party!",
        "eventArtist"  : "Splatter Bash",
        "eventDescLong": 'Join the Factory Family for our annual UV Paint Party... Splatter Bash! Let’s paint & play on the Main Room Dance Floor or watch from the Mezzanine. Glow party in the Red Room with DJ Madisi. Drink • Dance • F*** • Repeat',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'splatter-bash-at-necto-nightclub-ann-arbor-michigan-sep-5th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1809161535981353/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-splatter-bash-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 3, 2016 20:00:00"),
        "eventName"    : "Frequency presents... Ultraviolet : Paint Party!",
        "eventArtist"  : "Neon & Glow",
        "eventDescLong": 'Let’s Get Wet! Wear White for our 2nd annual Neon & Glow! UV Paint Party in the Main Room with DJ Jace. Glow Party in the Red Room with DJ Digi Mark. Paint & Play on the Dance Floor or watch from the Mezzanine. ',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'paint-party-at-necto-nightclub-ann-arbor-michigan-sep-3rd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1809161535981353/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-paint-party-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Sep 2, 2016 20:00:00"),
        "eventName"    : "Necto Pride presents... Neon & Glow : UV Paint Party",
        "eventArtist"  : "Ultraviolet",
        "eventDescLong": 'Let’s Get Turnt Up! We are celebrating White Party Weekend with a huge UV Paint Party! Let’s get wet on the Main Room Dance Floor with DJ Hardy & MC Yoda. Play in paint or watch from the mezzanine. ',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'neon-glow-at-necto-nightclub-ann-arbor-michigan-sep-2nd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1809161535981353/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'neon-glow-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Aug 22, 2016 20:00:00"),
        "eventName"    : "Factory's PokéParty 2016",
        "eventArtist"  : "Factory's PokéParty 2016",
        "eventDescLong": 'We’re gonna be the very best, like no community ever was. 2 pokéstops, music, drinks, and some of the best trainers around come together for our 1st ever PokéParty.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'pokeparty-2016-at-necto-nightclub-ann-arbor-michigan-aug-22nd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1629777607333356/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'pokeparty-2015-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Aug 5, 2016 20:00:00"),
        "eventName"    : "ACID BETTY : Official OUTFest 2016 Kick Off Party",
        "eventArtist"  : "Acid Betty",
        "eventDescLong": 'A creative and colorful enigma, and famous for being the first and only hybrid drag queen in the world, Acid Betty is an artist, stylist, and a performer. She has brought her out-of-this-world flare to all sorts of projects and events, and continues to seek out exciting new ways to perfect her craft while collaborating with innovative artists and designers worldwide. Acid Betty was featured on Season 5 of “Project Runway”, “An Englishman in New York” with John Hurt, served as Ringleader at Lincoln Center for New York City’s “Rock & Roll Circus”, has been showcased at the Gay Village in Italy Rome and played host of the annual “Saint at Large The Black Party Expo & Bazaar” in NYC for several years.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'acid-betty-outfest-kick-off-party-at-necto-nightclub-ann-arbor-michigan-aug-5th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1006131682834258/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-acid-betty-outfest-2016-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jul 15, 2016 20:00:00"),
        "eventName"    : "Bob the Drag Queen",
        "eventArtist"  : "Bob the Drag Queen",
        "eventDescLong": 'Let’s see what happens when we go ’Purse First!’ Join us as we welcome RuPaul’s Drag Race Season 8 winner... Bob the Drag Queen!',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'bob-the-drag-queen-at-necto-nightclub-ann-arbor-michigan-jul-17th-2016.html',
        "eventSocial"  : 'N/A',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'bob-the-drag-queen-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jul 9, 2016 20:00:00"),
        "eventName"    : "Frequency presents... Beach Party",
        "eventArtist"  : "Beach Party",
        "eventDescLong": 'Join DJ Hardy & MC Yoda as they heat up the Summer & celebrate Beach Party!',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'beach-parth-at-necto-nightclub-ann-arbor-michigan-jul-9th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/587229844772065/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-beach-party-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jul 8, 2016 20:00:00"),
        "eventName"    : "Boys of Summer Contest: 2016",
        "eventArtist"  : "Boys of Summer Contest: 2016",
        "eventDescLong": 'Pride presents... The Boys of Summer : Contest 2016! Join us for one of Pride’s favorite annual events! Let’s play like we’re hanging out on the beach together!',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'boys-of-summer-at-necto-nightclub-ann-arbor-michigan-jul-7th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/808312542638775/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-boys-of-summer-2016-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jul 7, 2016 20:00:00"),
        "eventName"    : "College Night presents... Beach Party",
        "eventArtist"  : "College Night presents... Beach Party",
        "eventDescLong": 'It’s time for Summer Fun at Southeast Michigan’s best College Night. Join Just B this Thursday as we hit the Beach!',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'beach-parth-at-necto-nightclub-ann-arbor-michigan-jul-7th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1073502059408275/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-beach-party-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jul 7, 2016 19:00:00"),
        "eventName"    : "Namaskara : Yoga at the Club",
        "eventArtist"  : "Yoga at the Club",
        "eventDescLong": 'Life is too short to take ourselves seriously, we feel the same about yoga. Unwind with this fun, silly and relaxing yoga session complete with live music. Perfect for beginners and practiced yogi’s alike, we’ll be holding gentle postures for a couple breaths to sink into our practice. Focusing on breathing techniques to calm your nerves and relax your whole body.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'namaskara-yoga-club-at-necto-nightclub-ann-arbor-michigan-jul-7th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1614119635569837/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-namaskara-yoga-at-the-club-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jun 17, 2016 19:00:00"),
        "eventName"    : "Nick Jonas Album Release Party in the Red Room",
        "eventArtist"  : "Nick Jonas Album Release Party",
        "eventDescLong": 'Win a copy of the new self titled album by Nick Jonas featuring "Close", "Chainsaw", and "Champagne Problems"',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'nick-jonas-album-release-party-at-necto-nightclub-ann-arbor-michigan-jun-17th-2016.html',
        "eventSocial"  : '404.html',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'nick-jonas-album-release-party-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jun 10, 2016 19:00:00"),
        "eventName"    : "Tegan & Sara Album Release Party in the Red Room",
        "eventArtist"  : "Tegan & Sara Album Release Party in the Red Room",
        "eventDescLong": 'Win a copy of the new CD by Tegan & Sara "Love You to Death." Featuring the hit single "Boyfriend"',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'tegan-sara-album-release-at-necto-nightclub-ann-arbor-michigan-jun-10th-2016.html',
        "eventSocial"  : '404.html',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'tegan-sara-album-release-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jun 10, 2016 20:00:00"),
        "eventName"    : "ADORE DELANO : Motor City Pride Official Pre-Party!!!",
        "eventArtist"  : "ADORE DELANO",
        "eventDescLong": 'Come Celebrate Pride at our annual Motor City Pride Pre-Party with ADORE DELANO!!! She’ll be performing songs from the no. 1 album ’After Party’!',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'adore-delano-at-necto-nightclub-ann-arbor-michigan-jun-10th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/1241908435829150/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-adore-delano-at-necto-night-club-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("Jun 2, 2016 20:00:00"),
        "eventName"    : "Namaskara: Yoga at the Club",
        "eventArtist"  : "Namaskara",
        "eventDescLong": 'Life is too short to take ourselves seriously, we feel the same about yoga. Unwind with this fun, silly and relaxing yoga session complete with live music. Perfect for beginners and practiced yogi’s alike, we’ll be holding gentle postures for a couple breaths to sink into our practice. Focusing on breathing techniques to calm your nerves and relax your whole body.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'namaskara-yoga-at-the-club-necto-nightclub-ann-arbor-michigan-jun-2nd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/850654748411337/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'namaskara-yoga-at-the-club-at-necto-nightclub-ann-arbor.png',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("May 23, 2016 21:00:00"),
        "eventName"    : "The Factory Awakens: Star Wars Night",
        "eventArtist"  : "The Factory Awakens: Star Wars Night",
        "eventDescLong": 'Join DJ Void6, DJ Darks Choir, Iconian, DJ Madisi, and MC Yoda in the 2016 Factory edition of out Star Wars night. Loads of awesome decorations. Get FREE pictures with your friends by a professional photographer.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'factory-awakens-star-wars-necto-nightclub-ann-arbor-michigan-may-23rd-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/586629124828882/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-factory-awakens-star-wars-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("May 20, 2016 21:00:00"),
        "eventName"    : "Dragster presents... KIM CHI",
        "eventArtist"  : "KIM CHI",
        "eventDescLong": 'Kim Chi is a 7’ tall, live-action anime character and high-fashion model. Born in the U.S., raised in South Korea, and currently based in Chicago, Kim is a cultural hybrid with a preternatural understanding of style and conceptual fashion. An ever-evolving chameleon, Kim never fails to surprise and delight with her larger than life looks and her high standard of work. Kim Chi is currently competing on RuPaul’s Drag Race Season 8.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'kim-chi-at-necto-nightclub-ann-arbor-michigan-may-20th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/935389196580545/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-kim-chi-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("May 13, 2016 21:00:00"),
        "eventName"    : "Pride Prom 2016: Candyland",
        "eventArtist"  : "Pride Prom 2016: Candyland",
        "eventDescLong": 'Let’s celebrate Prom our way! This year’s theme is Candyland. Follow us down Candy lane to the lollipop forest with hosts Chanel Hunter & Jadein Black. Music by DJ Jace & Nick Donovan. Photos by Tony Lowe.',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'pride-prom-2016-candyland-at-necto-nightclub-ann-arbor-michigan-may-13th-2016.html',
        "eventSocial"  : 'https://www.facebook.com/events/606405996177798/',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cal-pride-prom-2016-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },
    {
        "eventDate"    : new Date("May 13, 2016 21:00:00"),
        "eventName"    : "Cyndi Lauper Album Release Party in the Red Room",
        "eventArtist"  : "Cyndi Lauper Album Release",
        "eventDescLong": 'Win a copy of the new CD by Cyndi Lauper ’Detour’ with Cyn’s signature take on Country Classics from the past. Features duets with country elite, Willie Nelson, Alison Krauss, Vince Gill and more',
        "eventCover"   : 'N/A',
        "eventLink"    : 'special-events/' + 'cyndi-lauper-album-release-party-nightclub-ann-arbor-michigan-may-13th-2016.html',
        "eventSocial"  : '',
        "eventTix"     : 'none',
        "eventImgWide" : 'img/event-images/' + 'cyndi-lauper-album-release-party-at-necto-nightclub-ann-arbor.jpg',
        //"eventWklOvrd" : true,
        "eventDay"     : 0, // Do not modify
        "pastEvent"    : false // Do not modify
    },


    
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

        var eventCount = document.getElementById('homepageSpecialEvents').childElementCount % 2;

        // Looks to see if an event is ticketed or not and adds the ticket button if it does
        if (upcomingEvents[i].eventTix != 'none') {
            if (eventCount === 0) {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-4-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html" class="col col-4-xs ">REQUEST VIP</a><a href="' + upcomingEvents[i].eventTix + '" class="col col-4-xs ">BUY TICKETS</a></div></div>';
            }

            else {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-4-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html" class="col col-4-xs ">REQUEST VIP</a><a href="' + upcomingEvents[i].eventTix + '" class="col col-4-xs ">BUY TICKETS</a></div></div>';

            }
        }
        
        // Does not add the ticket button
        else {
            if (eventCount === 0) {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html" class="col col-6-xs ">REQUEST VIP</a>';
            }

            else {
                homepageSpecialEvents.innerHTML = homepageSpecialEvents.innerHTML + '<div class="home-page-event-content col col-12-xs col-6-sm col-6-md"><h3><a href="' + upcomingEvents[i].eventLink + '"><span class="event-day">' + upcomingEvents[i].eventDate.toDateString() + ', ' + upcomingEvents[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span><br><span class="event-name">' + upcomingEvents[i].eventArtist + '</span></a></h3><a href="' + upcomingEvents[i].eventLink + '"><img src="' + upcomingEvents[i].eventImgWide + '" alt="A event poster for ' +  upcomingEvents[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (upcomingEvents[i].eventDate.getMonth() + 1) + '/' + upcomingEvents[i].eventDate.getDate() + '/' + upcomingEvents[i].eventDate.getFullYear() + '." /></a><div class="row event-nav"><a href="' + upcomingEvents[i].eventLink + '" class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html" class="col col-6-xs ">REQUEST VIP</a>';

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
    for (i = 0; i <= 60; i++) {

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

            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content"><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + formatedDate + ', ' + formatedTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="An event poster for ' + calWeeklyEventsList[i].eventArtist + ' performing at the Necto Nightclub in Ann Arbor, Michigan on ' +  (calWeeklyEventsList[i].eventDate.getMonth() + 1) + '/' + calWeeklyEventsList[i].eventDate.getDate() + '/' + calWeeklyEventsList[i].eventDate.getFullYear() + '."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col col-4-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html" class="col col-4-xs">REQUEST VIP</a><a href="' + calWeeklyEventsList[i].eventTix + '" class="col col-4-xs ">BUY TICKETS</a></div></div><br><br>');
            }

            else {
            formatedDate = calWeeklyEventsList[i].eventDate.toDateString();
            formatedTime = calWeeklyEventsList[i].eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content"><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + formatedDate + ', ' + formatedTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="An event poster for ' + calWeeklyEventsList[i].eventArtist + ' performing at the Necto Nightclub in Ann Arbor, Michigan on ' +  (calWeeklyEventsList[i].eventDate.getMonth() + 1) + '/' + calWeeklyEventsList[i].eventDate.getDate() + '/' + calWeeklyEventsList[i].eventDate.getFullYear() + '."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html" class="col col-6-xs ">REQUEST VIP</a></div></div><br><br>');
            }
        }

        else {
            buildCal(calendarEvents.innerHTML + '<div class="home-page-event-content"><h3><a href="' + calWeeklyEventsList[i].eventLink + '"><span class="event-day">' + calWeeklyEventsList[i].eventDate + ', ' + calWeeklyEventsList[i].eventTime + '</span><br><span class="event-name">' + calWeeklyEventsList[i].eventName + '</span></a></h3><a href="' + calWeeklyEventsList[i].eventLink + '"><img src="' + calWeeklyEventsList[i].eventImgWide + '" alt="A image of ' + calWeeklyEventsList[i].eventName + ', a weekly event at the Necto Nightclub in Ann Arbor, Michigan."></a><p>' + calWeeklyEventsList[i].eventDesc + '</p><div class="row event-nav"><a href="' + calWeeklyEventsList[i].eventLink + '"class="col col-6-xs">VIEW EVENT</a><a href="bottle-service-vip-reservations.html" class="col col-6-xs ">REQUEST VIP</a></div></div><br><br>');
        }
    }
}

/** PAST EVENTS PAGE POPULATION **/
var pastEventsList = document.getElementById('pastEventsList')
function populatePastEventsPageEvents() {
    for (i = 0; i <= pastEvents.length - 1; i++) {
        pastEventsList.innerHTML = pastEventsList.innerHTML + '<span class="past-events-date">' + pastEvents[i].eventDate.toDateString() + '&nbsp;&nbsp;</span><span class="past-events-event"><a href="' + pastEvents[i].eventLink + '"><br>' + pastEvents[i].eventName + '</a></span><br style="margin-bottom: .75em">'
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
            document.getElementById('ogTitle').content = artist + ' live on ' + date + ' at the Necto Nightclub in Ann Arbor Michigan.';
            document.getElementById('ogURL').content = window.location;
            document.getElementById('ogImg').content = events[i].eventImgWide;
            document.getElementById('twitterTitle').content = artist + ' | ' + date + ' | Necto Nightclub, Ann Arbor, Michigan.';
            document.getElementById('twitterDesc').content = artist + ' live on ' + date + ' at the Necto Nightclub in Ann Arbor Michigan.';
        }

        if (specialEventURL[specialEventURL.length - 2] + '/' + specialEventURL[specialEventURL.length - 1] === events[i].eventLink) {

            // Does it have tix or no tix?
            if (events[i].eventTix !== 'none') {
                specialEventPageContent.innerHTML =  '<span class="special-event-date">' + events[i].eventDate.toDateString() + ', ' + events[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span>' + '<br>' + '<h1 class="special-event-name">' + events[i].eventName + '</h1><br><img class="special-event-img" src="' + events[i].eventImgWide + '" alt="A event poster for ' +  events[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (events[i].eventDate.getMonth() + 1) + '/' + events[i].eventDate.getDate() + '/' + events[i].eventDate.getFullYear() + '"><br>' + '<div class="row event-nav" style="margin-left: 0; margin-right: 0;"><a href="bottle-service-vip-reservations.html" class="col col-6-xs ">REQUEST VIP</a><a href="' + events[i].eventTix + '"class="col col-6-xs">BUY TICKETS</a></div>' + '<p class="special-event-desc">' + events[i].eventDescLong + '</p>' + '<p>Follow this event on Facebook <a href="' + events[i].eventSocial + '" class="special-event-social"><b>here</b></a>.</p><h3>Cover:</h3><p class="special-event-cover">' + events[i].eventCover + '</h3>';
                buildSpecialPageMeta(events[i].eventDate.toDateString(), events[i].eventArtist);
            }

            else {
                specialEventPageContent.innerHTML =  '<span class="special-event-date">' + events[i].eventDate.toDateString() + ', ' + events[i].eventDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") + '</span>' + '<br>' + '<h1 class="special-event-name">' + events[i].eventName + '</h1><br><img class="special-event-img" src="' + events[i].eventImgWide + '" alt="A event poster for ' +  events[i].eventArtist + ', performing at the Necto Nightclub in Ann Arbor, Michigan on ' + (events[i].eventDate.getMonth() + 1) + '/' + events[i].eventDate.getDate() + '/' + events[i].eventDate.getFullYear() + '" ><br>' + '<div class="row event-nav" style="margin-left: 0; margin-right: 0;"><a href="bottle-service-vip-reservations.html" class="col col-12-xs ">REQUEST VIP</a></div>' + '<p class="special-event-desc">' + events[i].eventDescLong + '</p>' + '<p>Follow this event on Facebook <a href="' + events[i].eventSocial + '" class="special-event-social"><b>here</b></a>.</p><h3>Cover:</h3><p class="special-event-cover">' + events[i].eventCover + '</h3>'
                buildSpecialPageMeta(events[i].eventDate.toDateString(), events[i].eventArtist);
            }
        }
    }
}

// Populates the Upcoming Events list on the weekly pages

var weeklyPageUpcommingEvents = document.getElementById('upcoming-event-list');

function populateWeeklyUpcomingEvents(day) {
    upcomingEvents.reverse()

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