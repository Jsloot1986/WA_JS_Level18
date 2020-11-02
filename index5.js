const superheroes = [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
    },
    {
    name: "Green Lantern",
    publishe: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
    },
    {
    name: "Captain America",
    publishe: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"   
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
    }
    ];
    //A
    
    const superheroName = superheroes.map(heroes=>heroes.name)
    
    //console.log(superheroName);
    //B
    const lightWeight = superheroes.filter(weight => weight.weight <= 190);

    //console.log(lightWeight);
    //C
    const heroes200 = superheroes
    .filter(hero => (hero.weight.indexOf("200")>-1))
    .map(hero => hero.name);

    //console.log(heroes200)
    //D
    const firstAppearance = superheroes
    .filter(hero => (hero.first_appearance.indexOf("#1")))
    .map(hero => hero.name);

    //console.log(firstAppearance);

    //E
    const dcComics = superheroes
    .filter(hero => (hero.publisher === "DC Comics"))
    .map(hero => hero.name)

    //console.log(dcComics);

    const marvelComics = superheroes
    .filter(hero => (hero.publisher === "Marvel Comics"))
    .map(hero => hero.name);

    //console.log(marvelComics);

    //F
    const weightFromAllDCcomics = superheroes
    .filter(hero => (hero.publisher === "DC Comics"));
    let totalWeight = weightFromAllDCcomics
    .reduce((totWeight, hero)=> {
        if (isNaN(hero.weight)){
            return totWeight + 0;
        } else return totWeight + parseInt(hero.weight);
    }, 0);
    //console.log (totalWeight);

    //G
    const weightFromAllMarvel = superheroes
    .filter(hero => (hero.publisher === "Marvel Comics"));
    let totalWeight1 = weightFromAllMarvel
    .reduce((totWeight, hero)=> {
        if (isNaN(hero.weight)){
            return totWeight + 0;
        } else return totWeight + parseInt(hero.weight);
    }, 0);
    //console.log (totalWeight1);

    //H
    const heaviestSuperHero = superheroes
    .filter (hero => (hero.weight >= 1000))
    .map (hero => hero.name);
    console.log(heaviestSuperHero);

    