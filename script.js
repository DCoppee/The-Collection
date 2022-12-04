//Stocker la collection d'artistes dans un tableau
const collection = [
    {
      artist: "Muse",
      festival: "Rock Werchter",
      year: 2000,
      originalMembers: [
        "Matthew Bellamy",
        " Christopher Wolsenholme",
        " Dominic Howard",
      ],
      trueStory: "That year, Matt Bellamy had red hair. True story.",
      lastAlbum: "https://open.spotify.com/album/68J2rIUZze8X3hAa8ali4k?autoplay=true",
      photo: "./assets/Muse.jpg"
    },
    {
        artist: "Les Wampas",
        festival: "Francofolies de Spa",
        year: 2007,
        originalMembers: [
          "Didier Wampas",
          " Jean-Michel Lejoux",
          " Effello",
          " Nicolas Schauer",
          " Tony Truant",
        ],
        trueStory: "That year, Didier Wampas wore a pink crop top. True story.",
        lastAlbum: "https://open.spotify.com/album/3UVMHEN9JxbXms8BI1Bk58",
        photo: "./assets/Wampas.jpg",
      },
    {
        artist: "Nick Cave",
        festival: "Rock Werchter",
        year: 2011,
        originalMembers: "Nick Cave",
        trueStory: "In the audience, many people were wearing the famous horseshoe mustache... What a shock when Nick appeared clean-shaven! (In fact, he was performing with his band Grinderman.)",
        lastAlbum: "https://open.spotify.com/album/2ENZX0TZOt42tmCMgUyoNJ",
        photo: "./assets/Nick_Cave.jpg",
      },
      {
        artist: "The Who",
        festival: "Lokerse Feesten",
        year: 2011,
        originalMembers: [
          "Roger Daltrey",
          " Pete Townshend",
          " Keith Moon",
          " John Entwistle",
        ],
        trueStory: "It was more precisely Roger Daltrey interpreting The Who. He had not yet reconciled with Pete Townshend.",
        lastAlbum: "https://open.spotify.com/album/2WuaYvGgx9MS1Vj37aBiyU",
        photo: "./assets/Who.jpg",
      },
      {
        artist: "The Beach Boys",
        festival: "Lokerse Feesten",
        year: 2012,
        originalMembers: [
          "Brian Wilson",
          " Dennis Wilson",
          " Carl Wilson",
          " Mick Love",
          " Al Jardine",
        ],
        trueStory: "The real Beach Boys! As dashing as in the 60's! With the always perfectly nasal voice of Mick Love!",
        lastAlbum: "https://open.spotify.com/album/1XtjXmGBlpgUm5OWFqarj4",
        photo: "./assets/Beach_Boys.jpg",
      },
      {
        artist: "The Dandy Warhols",
        festival: "Le Cabaret Vert",
        year: 2012,
        originalMembers: [
          "Courtney Taylor-Taylor",
          " Zia McCabe",
          " Peter Holmström",
          " Brent De Boer",
        ],
        trueStory: "As a teenager, I was completely in love with Courtney, whom I had already seen at the Ancienne Belgique. If I had expected to see him arrive with a long braid on his shoulder...",
        lastAlbum: "https://open.spotify.com/album/2jWOmtU1d3CwWzc2NaeGff",
        photo: "./assets/Dandy_Warhols.jpg",
      },
      {
        artist: "Thomas Fersen",
        festival: "LaSemo",
        year: 2012,
        originalMembers: [
          "Thomas Fersen",
        ],
        trueStory: "I follow Thomas Fersen whenever he comes to Belgium, I think he is great. The last time I saw him, he was dressed as a rabbit. True story.",
        lastAlbum: "https://open.spotify.com/album/3rUcuofe0MV76EYevUkODr?highlight=spotify:track:4PG9XB29PGobEgmiPiU8NB",
        photo: "./assets/Thomas_Fersen.jpg",
      },
      {
        artist: "Henri Dès",
        festival: "Les Solidarités",
        year: 2014,
        originalMembers: [
          "Henri Dès",
        ],
        trueStory: "Honestly, he was singing two steps away from my house, and I wouldn't have gone there?",
        lastAlbum: "https://open.spotify.com/album/3gxa2gEULX3DWevTB0eJk9",
        photo: "./assets/Henri_Dès.jpg",
      },
      {
        artist: "Carlos Santana",
        festival: "TW Classic",
        year: 2013,
        originalMembers: [
          "Carlos Santana",
        ],
        trueStory: "My son was -3 months old at the time, so he probably benefited in utero from the burning heat of this concert, in every sense of the word.",
        lastAlbum: "https://open.spotify.com/album/7GypVubhQFr1L5u19Hfq22",
        photo: "./assets/Santana.jpg",
      },
      {
        artist: "Queens of the Stone Age",
        festival: "Pukkelpop",
        year: 2014,
        originalMembers: [
          "Josh Homme",
          " Troy Van Leeuwen",
          " Dean Fertita",
          " Michael Shuman",
          " Jon Theodore",
        ],
        trueStory: "This concert was a real release between my two pregnancies. I had already seen Josh Homme with the supergroup Them Crooked Vultures (with Dave Grohl and John Paul Jones) at Werchter.",
        lastAlbum: "https://open.spotify.com/album/7vuIN24G18PAUAvjnICyA6",
        photo: "./assets/QOTSA.jpg",
      },
  ];
//Vérifier dans la console
console.log(collection);

//Ajouter un string vide au code html
let htmlCode = ``;

//Extraire chaque objet du tableau: ouvrir le tableau avec la méthode .forEach() et retourner les objets qui la composent
  collection.forEach(function(singleCollectionObjects) {

//Ajouter le code html à la variable html créée mais encore vide
//Utiliser la notation . pour référencer les propriétés de l'objet (ses "enfants")
    htmlCode = htmlCode +
    `<section>
      <div>
        <img  src="${singleCollectionObjects.photo}" 
              alt="${singleCollectionObjects.artist}">
      </div>
      <div>
        <h4>${singleCollectionObjects.artist}</h4>
        <h5>${singleCollectionObjects.festival}</h5>
        <h6>${singleCollectionObjects.year}</h6>
        <p class="originalMembers" >${singleCollectionObjects.originalMembers}</p>
        <p class="trueStory">${singleCollectionObjects.trueStory}<p>
        <p class="lastAlbum">Listen the last album <a href="${singleCollectionObjects.lastAlbum}">here</a></p>
      </div>
    </section>
  `;
});

//Envoyer ce nouveau code html dans le fichier html: 
//D'abord, définir les limites de l'objet à ajouter au DOM: 
//Créer la <div class="allArtists"> (vide) dans index.html, et référencer cette classe comme emplacement cible de la collection
const artistsCards = document.querySelector(".allArtists");

//Envoyer le contenu html de cette nouvelle div dans le code html
artistsCards.innerHTML = htmlCode;

/*Code non utilisé car problèmes
function listElement() {

  let main = document.createElement("main");
  let section = document.createElement("section");

  for (let element of collection) {
    let article = document.createElement("article");
    article.className = element.artist;

    let photo = document.createElement("img");
    photo.setAttribute("src", element.photo);
    article.appendChild(img);

    let artist = document.createElement("h3");
    artist.innerText = element.artist;
    article.appendChild(artist);

    let originalMembers = document.createElement("p");
    originalMembers.innerText = element.originalMembers;
    article.appendChild(originalMembers);

    let festival = document.createElement("h4");
    festival.innerText = element.festival;
    article.appendChild(festival);

    let year = document.createElement("h5");
    year.innerText = element.year;
    article.appendChild(year);

    let trueStory = document.createElement("p");
    trueStory.innerText = element.trueStory;
    article.appendChild(trueStory);

    let lastAlbum = document.createElement("p");
    lastAlbum.innerText = element.lastAlbum;
    article.appendChild(lastAlbum);

    let link = document.createElement("a");
    link.setAttribute("href", element.a);
    article.appendChild(link);

    section.appendChild(article);
    main.appendChild(section);
//Insérer "main" avant "footer" puis retourner le 1er élément de la liste grâce à [0]
    document.body.insertBefore(main, document.getElementsByTagName("footer")[0]);
  }
}
listElement();
*/