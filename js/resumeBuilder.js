var bio = {
    "name": "Amber Davenport",
    "role": "Project Manager",
    "welcomeMessage": "Welcome to my resume",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "loveit@gmail.com",
        "twitter": "@toOldforThis",
        "github": "AmbDav",
        "blog": "Seriously",
        "location": "Palatka, FL"
    },
    "skills": ["Social Work", "Crisis Management", "Web Development"],
    "biopic": "images/People300.jpg"
};

function display_contacts(contacts, location) {
    var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", contacts.location);

    $(location).append(formattedMobile);
    $(location).append(formattedEmail);
    $(location).append(formattedGithub);
    $(location).append(formattedTwitter);
    $(location).append(formattedBlog);
    $(location).append(formattedLocation);
}

bio.display = function() {

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedBiopic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedMessage);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedContacts = ["#topContacts", "#footerContacts"];
    formattedContacts.forEach(function(location) {
        display_contacts(bio.contacts, location);
    });

    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

//The work experience section

var work = {
    "jobs": [{
            "employer": "DeusDat Solutions",
            "title": "Project Manager",
            "dates": "Nov 2016-Present",
            "location": "Palatka,FL",
            "description": "Creating web based projects for use in social work.",
            "url": "http://www.deusdatsolutions.com"
        },
        {
            "employer": "Hospice",
            "title": "Social Worker",
            "dates": "Sept 2013-Nov 2016",
            "location": "Palatka, FL",
            "description": "Provide emotional and legal support to people at the end of life.",
            "url": "http://www.hospiceofcitrus.org"
        }
    ]
};

/*
 * param: job - object that represets our jobs. See work.jobs[].
 */
work.display = function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer)
        .replace("#", job.url);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);


    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);

};

// for(i = 0; i < work.jobs.length; i++) {
// 	var j = work.jobs[i];
// 	work.display(j);	
// }

work.jobs.forEach(work.display);

//work.display();

//The accomplishments section

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "Jan 2017",
        "description": "That is self explanatory!",
        "images": ["images/placeimgarch.jpg"]
    }]
};

projects.display = function(project) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    var showimage = function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").prepend(formattedImage);
    };
    project.images.forEach(showimage);
};
projects.projects.forEach(projects.display);

//The learning section

var education = {
    "schools": [{
            "name": "Taylor University",
            "location": "Upland, IN",
            "degree": "BS",
            "majors": ["Social Work"],
            "dates": "Feb 2002-May 2006",
            "url": "http://www.tayloru.edu"
        },
        {
            "name": "IUPUI",
            "location": "Indianapolis, IN",
            "degree": "Masters",
            "majors": ["Social Work"],
            "dates": "Aug 2008-May 2011",
            "url": "https://www.iupui.edu"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "Dec 2016-Present",
        "url": "http://udacity.com"
    }]
};

education.display_school = function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name)
        .replace("#", school.url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedSchoolName + formattedDegree);


    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedMajor);
};

education.display_schools = function() {
    education.schools.forEach(education.display_school);
};

education.display_online = function(course) {
    $("#education").append(HTMLonlineStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    $(".education-entry:last").append(formattedTitle + formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(formattedURL);
};

education.display = function() {
    education.display_schools();
    education.display_online_courses();
};

//education.display();

education.display_big = function() {
    education.schools.forEach(education.display_school);


    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(education.display_online);
};
education.display_big();


//Extras

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUppercase();
    name[0] = name[0].slice(0, 1).toUppercase() + name[0].slice(1).toLowercase();

    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

//$("#mapDiv").append(googleMap);
//The map function was not working. It either showed nothing or gave errors that broke the who page. 
//People who know more than me said they believe that the browser is reading the helper.js file and is not seeing
//the appendage and moving on. The map has been moved to the HTML page.