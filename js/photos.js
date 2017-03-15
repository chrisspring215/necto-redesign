// Master list of club videos posted on Youtube
var photosFactory = [
    'IMG_9009.JPG','IMG_9025.JPG','IMG_9041.JPG','IMG_9057.JPG','IMG_9073.JPG','IMG_9010.JPG','IMG_9026.JPG','IMG_9042.JPG','IMG_9058.JPG','IMG_9074.JPG','IMG_9011.JPG','IMG_9027.JPG','IMG_9043.JPG','IMG_9059.JPG','IMG_9075.JPG','IMG_9012.JPG','IMG_9028.JPG','IMG_9044.JPG','IMG_9060.JPG','IMG_9076.JPG','IMG_9013.JPG','IMG_9029.JPG','IMG_9045.JPG','IMG_9061.JPG','IMG_9077.JPG','IMG_9014.JPG','IMG_9030.JPG','IMG_9046.JPG','IMG_9062.JPG','IMG_9078.JPG','IMG_9015.JPG','IMG_9031.JPG','IMG_9047.JPG','IMG_9063.JPG','IMG_9079.JPG','IMG_9016.JPG','IMG_9032.JPG','IMG_9048.JPG','IMG_9064.JPG','IMG_9080.JPG','IMG_9017.JPG','IMG_9033.JPG','IMG_9049.JPG','IMG_9065.JPG','IMG_9081.JPG','IMG_9018.JPG','IMG_9034.JPG','IMG_9050.JPG','IMG_9066.JPG','IMG_9082.JPG','IMG_9019.JPG','IMG_9035.JPG','IMG_9051.JPG','IMG_9067.JPG','IMG_9083.JPG','IMG_9020.JPG','IMG_9036.JPG','IMG_9052.JPG','IMG_9068.JPG','IMG_9084.JPG','IMG_9021.JPG','IMG_9037.JPG','IMG_9053.JPG','IMG_9069.JPG','IMG_9085.JPG','IMG_9022.JPG','IMG_9038.JPG','IMG_9054.JPG','IMG_9070.JPG','IMG_9086.JPG','IMG_9023.JPG','IMG_9039.JPG','IMG_9055.JPG','IMG_9071.JPG','IMG_9087.JPG','IMG_9024.JPG','IMG_9040.JPG','IMG_9056.JPG','IMG_9072.JPG'
];

var photosMix = [
    "img/weekly-photos/photos/mix" + "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
    "https://www.youtube.com/embed/X8rlzGmn39I?ecver=1",
    "https://www.youtube.com/embed/pAl8vVPh6a8?ecver=1",
    "https://www.youtube.com/embed/pFapnjwvuBk?ecver=1",
    "https://www.youtube.com/embed/LGajm9WIb10?ecver=1",
];

var photosPride = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
];

var photosFrequency = [
    "https://www.youtube.com/embed/4VOIXPOnfSM?ecver=1",
];

//Populates videos on the Weekly event pages
function populateWeeklyPhotos(day) {
        
    var numOfPhotos;
    var photoPool;
    var photoDayPath;

    /* mon */ if (day === 1) { numOfPhotos = photosFactory.length; photoPool = photosFactory; photoDayPath = '/photos-factory/'};
    /* thr  */if (day === 4) { numOfPhotos = photosMix.length; photoPool = photosMix; };
    /* fri */ if (day === 5) { numOfPhotos = photosPride.length; photoPool = photosPride; };
    /* sat */ if (day === 6) { numOfPhotos = photosFrequency.length; photoPool = photosFrequency; };

    document.getElementById('weekly-photo-1').setAttribute('src', ('img/weekly-photos' + photoDayPath + photoPool[Math.floor(Math.random() * numOfPhotos)]));
    document.getElementById('weekly-photo-2').setAttribute('src', ('img/weekly-photos' + photoDayPath + photoPool[Math.floor(Math.random() * numOfPhotos)]));
    document.getElementById('weekly-photo-3').setAttribute('src', ('img/weekly-photos' + photoDayPath + photoPool[Math.floor(Math.random() * numOfPhotos)]));
    document.getElementById('weekly-photo-4').setAttribute('src', ('img/weekly-photos' + photoDayPath + photoPool[Math.floor(Math.random() * numOfPhotos)]));


    function test() {
		for (var i = 1; i <= 4; i++) {


			if (document.getElementById('weekly-photo-' + i).height > document.getElementById('weekly-photo-' + i).width) {
				document.getElementById('weekly-photo-' + i).setAttribute('src', ('img/weekly-photos' + photoDayPath + photoPool[Math.floor(Math.random() * numOfPhotos)]));
				test()
			}

			else {
				
			}
	    } 
	}
    test()


}