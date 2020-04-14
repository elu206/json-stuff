let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    "title" : "goat number two",
    "picture_url" : "https://media.npr.org/assets/img/2014/12/14/ap798386886673_custom-247a20518bf04f86ef4457d12939f46521c8751b-s800-c85.jpg",
    "background_color" : "#",
    "thoughts" : ["oh to be a cute little baby goat frolicking about in a field of flowers", "nice jump, good form", "my heart feels so full.  i love this goat"]
  },
  {
    "title" : "goat number three",
    "picture_url" : "https://stmedia.stimg.co/CTYP+ALIST+Goat+to+your+Happy+Place+GettyImages-177369626.jpg?w=800",
      "background_color" : "#",
    "thoughts" : ["first of all, adorable", "look at his little tongue", "i love him too"]
  },
  {
    "title" : "goat number four",
    "picture_url" : "https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "background_color" : "#",
    "thoughts" : ["what a funky little man", "looks kind of like an alien", "these sound kind of mean but i meant them in the best way.  i love this guy as well"]
  },
  {
    "title" : "goat number five",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg",
    "background_color" : "#",
    "thoughts" : ["wow, posing for the camera", "he looks very proud of himself", "i also love him"]
  },
  {
    "title" : "goat number six",
    "picture_url" : "https://i.ytimg.com/vi/FfsmLgD2ZFM/hqdefault.jpg",
    "background_color" : "#",
    "thoughts" : ["seems like a cool guy", "look at this dude.  just hanging out.  just vibing.  good for him", "what a good goat.  i love him"]
  }
]

for (var i=0; i< jsonDatabase.length; i++){
  createtheElement(jsonDatabase[i])
}

function createtheElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['background_color']
  newContentElement.classList.add("contentItem");

  let newContentHeading = document.createElement("H3")
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("contentImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentThoughts = document.createElement("UL");
  newContentElement.appendChild(newContentThoughts);

  for(var i=0; i<incomingJSON['thoughts'].length; i++){
    var currentThoughtsString = incomingJSON['thoughts'][i];
    var newThought = document.createElement("LI");
    newThought.innerHTML = currentThoughtsString;
    newContentThoughts.appendChild(newThought);
  }

  contentGridElement.appendChild(newContentElement);
}
