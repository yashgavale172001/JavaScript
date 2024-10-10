// let arr=[1,2,3,4,5,6,7]
// let num=4000;
// arr.splice(arr.length+2,0,num);
// console.log(arr)

// let arr2=[987654,54567,6,2]
// arr2.splice(0,arr2.length,4000)
// console.log(arr2)

//array of objects
let obj=[
    [
        {
          "name": "Lyle Davis",
          "address": "Joanamouth",
          "contact": "1-289-356-4716 x531",
          "id": "1"
        },
        {
          "name": "Dawn Stark",
          "address": "New Karina",
          "contact": "850.603.9809 x264",
          "id": "2"
        },
        {
          "name": "Stuart Gislason",
          "address": "Ellicott City",
          "contact": "(200) 566-7789 x114",
          "id": "3"
        },
        {
          "name": "Madeline Wisoky",
          "address": "Raleigh",
          "contact": "676-575-3308",
          "id": "4"
        },
        {
          "name": "Jeffrey Lang",
          "address": "Blue Springs",
          "contact": "(424) 593-6854 x503",
          "id": "5"
        },
        {
          "name": "Mathew Braun",
          "address": "Lake Chayaville",
          "contact": "297-405-5961",
          "id": "6"
        },
        {
          "name": "Essie Towne",
          "address": "Laurineport",
          "contact": "1-520-966-1573",
          "id": "7"
        },
        {
          "name": "Vernon Reinger",
          "address": "New Brandynborough",
          "contact": "1-456-633-6756 x40631",
          "id": "8"
        },
        {
          "name": "Miss Jesse D'Amore",
          "address": "Vista",
          "contact": "(687) 880-6602",
          "id": "9"
        },
        {
          "name": "Cecelia Bosco II",
          "address": "Downey",
          "contact": "745-762-9473 x6928",
          "id": "10"
        },
        {
          "name": "Tracey Anderson",
          "address": "South Neilchester",
          "contact": "849.375.2966",
          "id": "11"
        },
        {
          "name": "Drew Rosenbaum DDS",
          "address": "Portland",
          "contact": "1-887-497-9822 x39007",
          "id": "12"
        },
        {
          "name": "Regina Lynch",
          "address": "Lake Shayne",
          "contact": "1-986-760-4022",
          "id": "13"
        },
        {
          "name": "Charlie O'Reilly",
          "address": "Dale City",
          "contact": "1-241-776-8562",
          "id": "14"
        },
        {
          "name": "Ashley Pollich",
          "address": "New Jeffrey",
          "contact": "348.521.5387 x00434",
          "id": "15"
        },
        {
          "name": "Lewis Dickinson",
          "address": "West Raeganmouth",
          "contact": "926.730.6039 x886",
          "id": "16"
        },
        {
          "name": "Kerry Marks",
          "address": "Wardberg",
          "contact": "1-738-233-2614",
          "id": "17"
        },
        {
          "name": "Violet Sipes",
          "address": "West Ginaborough",
          "contact": "(629) 860-5635 x655",
          "id": "18"
        },
        {
          "name": "Ora Emmerich",
          "address": "New Darlene",
          "contact": "749-688-5877 x13534",
          "id": "19"
        },
        {
          "name": "Billy Torphy",
          "address": "Kertzmannton",
          "contact": "781.437.2113 x279",
          "id": "20"
        },
        {
          "name": "Luz Ratke",
          "address": "Honolulu",
          "contact": "438-397-6054 x694",
          "id": "21"
        },
        {
          "name": "Joel Huel",
          "address": "West Roelhaven",
          "contact": "924-373-0971 x730",
          "id": "22"
        },
        {
          "name": "Kim Gorczany",
          "address": "South Sonyaview",
          "contact": "1-384-206-6599",
          "id": "23"
        },
        {
          "name": "Amelia Schamberger",
          "address": "Keelingtown",
          "contact": "(432) 715-9604 x85205",
          "id": "24"
        },
        {
          "name": "Dr. Tyler Jerde",
          "address": "South Tyler",
          "contact": "1-980-894-1595 x2854",
          "id": "25"
        },
        {
          "name": "Pearl Kutch",
          "address": "Jacobsonshire",
          "contact": "246.452.3410 x0934",
          "id": "26"
        },
        {
          "name": "Miss Phil Hansen",
          "address": "Evaland",
          "contact": "(634) 926-2092",
          "id": "27"
        },
        {
          "name": "Dominick Quigley",
          "address": "Manchester",
          "contact": "(380) 336-1878 x79286",
          "id": "28"
        },
        {
          "name": "Herman Hegmann",
          "address": "Grimesfurt",
          "contact": "363.391.8944 x0487",
          "id": "29"
        },
        {
          "name": "Mr. Billy Orn",
          "address": "Elizabeth",
          "contact": "(394) 443-4692 x1650",
          "id": "30"
        },
        {
          "name": "Ms. Joey Grant",
          "address": "Lake Karinefurt",
          "contact": "1-589-320-4883 x23621",
          "id": "31"
        },
        {
          "name": "Kim MacGyver",
          "address": "Hagenescester",
          "contact": "455.301.8766 x4446",
          "id": "32"
        },
        {
          "name": "Ms. Bernice Watsica",
          "address": "Opheliastead",
          "contact": "(332) 927-6126",
          "id": "33"
        },
        {
          "name": "Nora Cremin Jr.",
          "address": "Cartwrightstead",
          "contact": "(910) 414-7741 x9000",
          "id": "34"
        },
        {
          "name": "Louise Dickens",
          "address": "Lake Rebekah",
          "contact": "471.631.0213",
          "id": "35"
        },
        {
          "name": "Hector Kilback Sr.",
          "address": "Glendale",
          "contact": "821.507.8310 x514",
          "id": "36"
        },
        {
          "name": "Lynda Jerde",
          "address": "Daisyton",
          "contact": "(461) 662-8088 x236",
          "id": "37"
        },
        {
          "name": "Ms. Domingo Kub",
          "address": "Boscoview",
          "contact": "1-637-645-9889 x69340",
          "id": "38"
        },
        {
          "name": "Leland Kshlerin",
          "address": "Virginia Beach",
          "contact": "955.392.3444",
          "id": "39"
        },
        {
          "name": "Sheila Waelchi",
          "address": "Madison",
          "contact": "(634) 259-1167 x265",
          "id": "40"
        },
        {
          "name": "Dan Roob",
          "address": "West Covina",
          "contact": "1-654-806-0267 x6008",
          "id": "41"
        },
        {
          "name": "Lamar Green",
          "address": "Salina",
          "contact": "463-208-8760 x92564",
          "id": "42"
        },
        {
          "name": "Mildred Murphy",
          "address": "West Greyson",
          "contact": "1-607-950-2104 x845",
          "id": "43"
        },
        {
          "name": "Jamie Champlin",
          "address": "Wellington",
          "contact": "1-434-924-9066 x1679",
          "id": "44"
        },
        {
          "name": "Sylvester Ward",
          "address": "Dunwoody",
          "contact": "969.989.8347",
          "id": "45"
        },
        {
          "name": "Minnie Romaguera",
          "address": "Veumshire",
          "contact": "1-941-334-0179 x687",
          "id": "46"
        },
        {
          "name": "Jose Heathcote",
          "address": "Zemlakport",
          "contact": "417-960-6114 x6133",
          "id": "47"
        },
        {
          "name": "Bradley Pfeffer",
          "address": "Harmonybury",
          "contact": "(535) 682-6553 x30973",
          "id": "48"
        },
        {
          "name": "Manuel Cormier",
          "address": "New Gladycetown",
          "contact": "736-788-6488",
          "id": "49"
        },
        {
          "name": "Miss Maurice Ernser",
          "address": "New Magdalena",
          "contact": "731-212-7696",
          "id": "50"
        },
        {
          "name": "Kari Bogisich",
          "address": "Makenzieville",
          "contact": "1-911-461-0644",
          "id": "51"
        },
        {
          "name": "Mr. Bradley Goodwin",
          "address": "Pascaletown",
          "contact": "(700) 790-3805",
          "id": "52"
        },
        {
          "name": "Travis Champlin",
          "address": "Tianafort",
          "contact": "726.750.2307 x645",
          "id": "53"
        },
        {
          "name": "Lorene Pacocha",
          "address": "Port Aditya",
          "contact": "392.329.7690",
          "id": "54"
        },
        {
          "name": "Moses Schowalter IV",
          "address": "Corwinboro",
          "contact": "365.309.0659 x515",
          "id": "55"
        },
        {
          "name": "Jamie Jenkins",
          "address": "Davis",
          "contact": "1-876-767-1173 x8514",
          "id": "56"
        },
        {
          "name": "Sonia Schmidt",
          "address": "Turnerside",
          "contact": "455.625.3708 x223",
          "id": "57"
        },
        {
          "name": "Miss Patsy O'Conner DDS",
          "address": "Celineburgh",
          "contact": "(764) 516-5078",
          "id": "58"
        },
        {
          "name": "Eddie Yundt",
          "address": "Jayville",
          "contact": "739-810-6387 x73354",
          "id": "59"
        },
        {
          "name": "Milton Bednar",
          "address": "New Edberg",
          "contact": "1-251-901-3249 x6269",
          "id": "60"
        },
        {
          "name": "Jennie Harvey",
          "address": "Brownfield",
          "contact": "(253) 807-8376 x53101",
          "id": "61"
        },
        {
          "name": "Brittany Nolan",
          "address": "New Pricetown",
          "contact": "301-548-0393 x6672",
          "id": "62"
        },
        {
          "name": "Henrietta Goldner",
          "address": "Waelchiside",
          "contact": "265.548.5218 x5194",
          "id": "63"
        },
        {
          "name": "Kara Prosacco",
          "address": "East Giovanny",
          "contact": "910.255.0765 x6684",
          "id": "64"
        },
        {
          "name": "Miss Louise Morissette",
          "address": "Tacoma",
          "contact": "895-392-7324 x592",
          "id": "65"
        },
        {
          "name": "Floyd Stracke",
          "address": "Hellerport",
          "contact": "(936) 294-3537 x338",
          "id": "66"
        },
        {
          "name": "Pedro Hettinger",
          "address": "South Brennonside",
          "contact": "764-328-4818",
          "id": "67"
        },
        {
          "name": "Janice Moen",
          "address": "Montebello",
          "contact": "831.593.2020 x078",
          "id": "68"
        },
        {
          "name": "Dana Beahan",
          "address": "Fort Jacey",
          "contact": "(557) 974-6322",
          "id": "69"
        },
        {
          "name": "Elsa Bode",
          "address": "Plymouth",
          "contact": "662-306-0625 x5128",
          "id": "70"
        },
        {
          "name": "Lindsey Kohler DVM",
          "address": "Lake Jaylen",
          "contact": "935-808-8050 x5596",
          "id": "71"
        },
        {
          "name": "Tanya Koss",
          "address": "South Jordon",
          "contact": "619.525.7840 x111",
          "id": "72"
        },
        {
          "name": "Ted Sipes",
          "address": "Nikolausville",
          "contact": "(304) 817-9350",
          "id": "73"
        },
        {
          "name": "Courtney Kassulke",
          "address": "Paramount",
          "contact": "729-967-7386 x91379",
          "id": "74"
        },
        {
          "name": "Calvin Mitchell",
          "address": "Schinnerfurt",
          "contact": "1-425-545-7824 x6161",
          "id": "75"
        },
        {
          "name": "Ricardo Satterfield",
          "address": "Jeffreycester",
          "contact": "669-471-2105 x84418",
          "id": "76"
        },
        {
          "name": "Jenna Feeney",
          "address": "New Howell",
          "contact": "(326) 206-2171",
          "id": "77"
        },
        {
          "name": "Gilberto Heaney",
          "address": "Lake Claudie",
          "contact": "918.370.7515 x441",
          "id": "78"
        },
        {
          "name": "Emily Frami",
          "address": "Lake Corine",
          "contact": "799.693.5028 x417",
          "id": "79"
        },
        {
          "name": "Ramon Kautzer",
          "address": "Jaidencester",
          "contact": "1-899-764-7831",
          "id": "80"
        },
        {
          "name": "Kenneth Hermann",
          "address": "Cutler Bay",
          "contact": "1-359-270-9928 x92173",
          "id": "81"
        },
        {
          "name": "Willard Bashirian",
          "address": "Leilafield",
          "contact": "936-444-1645 x440",
          "id": "82"
        },
        {
          "name": "Garry Jaskolski",
          "address": "Fort Marvinland",
          "contact": "1-658-650-2267 x75369",
          "id": "83"
        },
        {
          "name": "Sheila Ullrich",
          "address": "Orem",
          "contact": "(809) 259-6959 x59570",
          "id": "84"
        },
        {
          "name": "Jerry Jenkins",
          "address": "Calebstad",
          "contact": "(437) 392-6286 x09184",
          "id": "85"
        },
        {
          "name": "Michelle Hand Sr.",
          "address": "Harveyfield",
          "contact": "(319) 439-3110",
          "id": "86"
        },
        {
          "name": "Angel Labadie",
          "address": "Streichchester",
          "contact": "1-408-345-1056 x4227",
          "id": "87"
        },
        {
          "name": "Ruben Von",
          "address": "South Taureanmouth",
          "contact": "(291) 233-8223 x7333",
          "id": "88"
        },
        {
          "name": "Carolyn Kub",
          "address": "Abbeyside",
          "contact": "(576) 275-9776 x2112",
          "id": "89"
        },
        {
          "name": "Casey Watsica",
          "address": "Cassandracester",
          "contact": "458-647-7194",
          "id": "90"
        },
        {
          "name": "Lynn Lindgren",
          "address": "Lake Traviscester",
          "contact": "331.597.5371 x856",
          "id": "91"
        },
        {
          "name": "Clarence Bergnaum",
          "address": "Weimannville",
          "contact": "346.337.7198 x03161",
          "id": "92"
        },
        {
          "name": "Marcia Hilll",
          "address": "Skokie",
          "contact": "715-909-3030 x41041",
          "id": "93"
        },
        {
          "name": "Bobbie Luettgen",
          "address": "Garfieldfort",
          "contact": "1-455-592-0642 x344",
          "id": "94"
        },
        {
          "name": "Wilson Sporer III",
          "address": "Wymanmouth",
          "contact": "592.759.1181",
          "id": "95"
        },
        {
          "name": "Thomas Weber",
          "address": "Fort Alta",
          "contact": "(252) 584-1878 x971",
          "id": "96"
        },
        {
          "name": "Sherman Zulauf",
          "address": "Port Serena",
          "contact": "(605) 438-3162",
          "id": "97"
        },
        {
          "name": "Billie Hettinger IV",
          "address": "Mannbury",
          "contact": "(802) 214-4434 x13406",
          "id": "98"
        },
        {
          "name": "Emilio Ledner",
          "address": "Port Mariliebury",
          "contact": "1-990-748-9747 x861",
          "id": "99"
        },
        {
          "name": "Kurt Jaskolski",
          "address": "Santee",
          "contact": "234-771-7935 x9663",
          "id": "100"
        }
      ]
]

let newobj={
    name: "raju", address: "chaudhari galli", contact: "764348876545", id: '101'
}
//let obj2=JSON.stringify(newobj);
//let obj3=JSON.parse(obj2);
obj.push(newobj);
console.log(obj)

// obj.push(obj2);
// console.log(obj)

