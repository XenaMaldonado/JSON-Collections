let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "real_name" : "Kim Namjoon",
    "stage_name" : "RM",
    "picture_url" : "https://dbkpop.com/wp-content/uploads/2019/04/bts_map_of_the_soul_persona_concept_RM_3-2000x1333.jpg",
    "microphone_color" : "#8dc3e0",
    "age" : "27",
    "solo_songs" : ["Love", "Reflection", "Persona"]
  },

  {
    "real_name" : "Kim Seokjin",
    "stage_name" : "Jin",
    "picture_url" : "https://dbkpop.com/wp-content/uploads/2019/04/bts_map_of_the_soul_persona_concept_Jin_3-2000x1333.jpg",
    "microphone_color" : "#f0a5c5",
    "age" : "29",
    "solo_songs" : ["Awake", "Mom", "Epiphany"]
  },

  {
    "real_name" : "Min Yoongi",
    "stage_name" : "Suga",
    "picture_url" : "https://dbkpop.com/wp-content/uploads/2019/04/bts_map_of_the_soul_persona_concept_SUGA_3-2000x1333.jpg",
    "microphone_color" : "#212d33",
    "age" : "29",
    "solo_songs" : ["Seesaw", "Agust D", "Shadow"]
  },

  {
    "real_name" : "Jung Hoseok",
    "stage_name" : "J-Hope",
    "picture_url" : "https://dbkpop.com/wp-content/uploads/2019/04/bts_map_of_the_soul_persona_concept_J-Hope_3-2000x1333.jpg",
    "microphone_color" : "#f46663",
    "age" : "28",
    "solo_songs" : ["Just Dance", "MAMA", "Ego"]
  },

  {
    "real_name" : "Park Jimin",
    "stage_name" : "Jimin",
    "picture_url" : "https://dbkpop.com/wp-content/uploads/2019/04/bts_map_of_the_soul_persona_concept_Jimin_3-2000x1333.jpg",
    "microphone_color" : "#f4db7c",
    "age" : "26",
    "solo_songs" : ["Lie", "Filter", "Serendipity"]
  },

  {
    "real_name" : "Kim Taehyung",
    "stage_name" : "V",
    "picture_url" : "https://dbkpop.com/wp-content/uploads/2019/04/bts_map_of_the_soul_persona_concept_V_3-2000x1333.jpg",
    "microphone_color" : "#679e6b",
    "age" : "26",
    "solo_songs" : ["Singularity", "Inner Child", "Stigma"]
  },

  {
    "real_name" : "Jeon Jungkook",
    "stage_name" : "Jungkook",
    "picture_url" : "https://dbkpop.com/wp-content/uploads/2019/04/bts_map_of_the_soul_persona_concept_Jungkook_3-2000x1333.jpg",
    "microphone_color" : "#ee80ff",
    "age" : "24",
    "solo_songs" : ["Begin", "My Time", "Euphoria"]
  },

];



for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  // microphone_color set as background
  // ELEMENT - box
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['microphone_color'];
  newContentElement.classList.add('contentItem');

  /// Real name, top middle each box
  // HEADING - real name
  let newContentHeading = document.createElement("H3");
  newContentHeading.innerText = incomingJSON['real_name'];
  newContentElement.appendChild(newContentHeading);

  // stage Name
  let newContentStageName = document.createElement("H4");
  newContentStageName.innerText = "Stage Name: " + incomingJSON['stage_name'];
  newContentElement.appendChild(newContentStageName);

  // Age
  let newContentAge = document.createElement("H4");
  newContentAge.innerText = "Age: " + incomingJSON['age'] + " years old";
  newContentElement.appendChild(newContentAge);

  // Solo songs
  let newContentSoloSongs = document.createElement("H4");
  newContentSoloSongs.innerText = "Solo Songs:";
  newContentElement.appendChild(newContentSoloSongs);

  //add solo songs to the list
  let newContentSoloSongsList = document.createElement("UL");
  newContentElement.appendChild(newContentSoloSongsList);

  for (var i = 0; i < incomingJSON['solo_songs'].length; i++) {
    var currentSoloSongsString = incomingJSON['solo_songs'][i];
    var newSong = document.createElement("LI");
    newSong.innerText = currentSoloSongsString;
    newContentSoloSongsList.appendChild(newSong);
  }

  // bottom image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  // adding everything to the page
  contentGridElement.appendChild(newContentElement);

}
