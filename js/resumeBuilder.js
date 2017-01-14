// var name = "Jaehyun Kim";
// var formattedName =HTMLheaderName.replace("%data%", name);

// var role = "Frontend developer";
// var formattedRole = HTMLheaderRole.replace("%data%",role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);



var bio = 
{
 	"name": "Jaehyun Kim",
 	"role": "Frontend Developer",
 	"contact info" :{
 		"email" :"jae.jaehyunkim@gmail.com",
 		"location" : "New York",
 		"github" :"https://github.com/jhyun103"},
 	"welcome message": "Welcome!",
 	"skills" : ["Unity3D","HTML","CSS", "Javascript"],
 	"bioPic" :"images/icon.png"


 };

 bio.display=function(){
 	var formattedName = HTMLheaderName.replace("%data%",bio.name);
 	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 	var formattedpic = HTMLbioPic.replace("%data%",bio.bioPic);

 	 $("#header").prepend(formattedName);
 	 $("#header").prepend(formattedRole);
 	 $("#header").prepend(formattedpic);
if(bio.skills.length>0){

$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append (formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills);
// formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
// $("#skills").append(formattedSkills);
};

};

bio.display();







var work={


	"Jobs": [{
		"employer" : "Institute of Play",
		"title" : "Designer",
		"location" :"New York City",
		"description" : "Designs and produces digital and non digital game materials and game-based learning tools • Supports the development of design assets and materials for the Institute of Play programs.• Works closely with the game design and communications teams to design and produce print and online materials to support a broad range of Institute projects and programs, including materials for workshops, events, school-based initiatives, products marketing and fundraising"
			},{
			"employer" : "Children's Museum of the Arts",
		"title" : "Museum Educator",
		"location" :"New York City",
		"description" : "Leading Video Game Design and Filmmaking class for 6 to 12 years old children• Developed the effective and fun curriculum which teaches games as a form of creative expression• Gave students opportunity to create their own experimental games with Scratch software"
			}]


};

work.display=function(){


for ( job in work.Jobs){

$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace ("%data%",work.Jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.Jobs[job].title);

var formattedEmployertitle = formattedEmployer + formattedTitle;

$(".work-entry:last").append(formattedEmployertitle);


var formattedLocation = HTMLworkLocation.replace("%data%",work.Jobs[job].location);
$(".work-entry:last").append(formattedLocation);

var formattedDescription = HTMLworkDescription.replace("%data%", work.Jobs[job].description);
$(".work-entry:last").append(formattedDescription);

}
};

work.display();

var projects = {

	"Game" :
	[{
		"title" :"the forger",
		"date" : "2016",
		"images" : ["images/theforger.jpg"]},

		{
			"title" :"soft-landing",
			"date" : "2015",
			"images" : ["images/softlanding.jpg"]
		}

	]
};

projects.display = function(){

for ( project in projects.Game){

$("#projects").append(HTMLprojectStart);

var formattedTitle = HTMLprojectTitle.replace("%data%", projects.Game[project].title);
$(".project-entry:last").append(formattedTitle);

var formattedDate = HTMLprojectDates.replace("%data%", projects.Game[project].date);
$(".project-entry:last").append(formattedDate);


if(projects.Game[project].images.length>0)
{

	for(image in projects.Game[project].images){

		var formattedImage = HTMLprojectImage.replace("%data%",projects.Game[project].images[image]);
		$(".project-entry:last").append(formattedImage);
	}
}
}

};

projects.display();


var education = {
	"Schools": [{
		"name": "Sungkyunkwan University",
		"location" : "Seoul,Korea",
		"degree": "BFA",
    	"major" : "Film,Tv and Multimedia",
    	"dates" : "2013"
	}, 
	{
		"name": "School of Art Institute of Chicago",
		"degree": "MFA",
    	"major" : "Art and Technology"
	}]
,
	"onlineCourses":[{
		"title" :"udacity",
		"school" :"udaicty",
		"dates" :"2016-2017",
		"url" :"https://www.udacity.com/"
	}]

};

education.display = function(){

for ( edu in education.Schools){

$("#education").append(HTMLschoolStart);

var formattedName = HTMLschoolName.replace("%data%", education.Schools[edu].name);
$(".education-entry:last").append(formattedName);

var formattedDegree = HTMLschoolDegree.replace("%data%", education.Schools[edu].degree);
$(".education-entry:last").append(formattedDegree);


var formattedMajor = HTMLschoolMajor.replace("%data%", education.Schools[edu].major);
$(".education-entry:last").append(formattedMajor);

}
};

education.display();



// $(document).click(function(loc){

// 	var x = loc.pageX;
// 	var y = loc.pageY;

// 	logClicks(x,y);

// });

// var skills =["awesomeness","programming","teaching","js"];
// $("#main").append(skills[0]);
// function inName(name){

// name = name.trim().split(" ");
// console.log(name);
// name[0] = name[0].slice(0,1),toUpperCase()+ name[0].slice(1).toLowerCase();
// name[1] = name[1].toUpperCase();

// return name[0] + " " + name[1];

// }

// $("#main").append(internationalizeButton);

//$("#mapDiv").append(googleMap);

// education["name"] = "saic";
// education["years"]="2015";



// $("#main").append(education.name);
// $("#main").append(work["position"]);
