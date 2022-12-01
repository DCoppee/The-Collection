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
      lastAlbum: "link to Will of the People (2022)",
      photo: "image",
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
        lastAlbum: "link to Tempête, Tempête (2022)",
        photo: "image",
      },
    {
        artist: "Nick Cave",
        festival: "Rock Werchter",
        year: 2011,
        originalMembers: "Nick Cave",
        lastAlbum: "link to Carnage (2021)",
        photo: "image",
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
        lastAlbum: "link to Who (2019)",
        photo: "image",
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
        lastAlbum: "link to That's why God made the Radio (2018)",
        photo: "image",
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
        lastAlbum: "link to Why you so crazy (2022)",
        photo: "image",
      },
      {
        artist: "Thomas Fersen",
        festival: "LaSemo",
        year: 2012,
        originalMembers: [
          "Thomas Fersen",
        ],
        lastAlbum: "link to C'est tout ce qu'il me reste (2019)",
        photo: "image",
      },
      {
        artist: "Henri Dès",
        festival: "Les Solidarités",
        year: 2014,
        originalMembers: [
          "Henri Dès",
        ],
        lastAlbum: "link to Casse-pieds (2013)",
        photo: "image",
      },
      {
        artist: "Jack Johnson",
        festival: "Rock Werchter",
        year: 2014,
        originalMembers: [
          "Jack Johnson",
        ],
        lastAlbum: "link to Meet the Moonlight (2022)",
        photo: "image",
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
        lastAlbum: "link to Villains (2017)",
        photo: "image",
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
        <h3>${singleCollectionObjects.artist}</h3>
        <p>${singleCollectionObjects.originalMembers}</p>
        <h4>${singleCollectionObjects.festival}</h4>
        <h5>${singleCollectionObjects.year}</h5>
        <p>Listen the last album : ${singleCollectionObjects.lastAlbum}</p>
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