// Initial LEGO inventory data
// Prices are illustrative placeholders until official MSRP values are verified.

export const INITIAL_LEGO_SETS = [
    {
        id: 1,
        name: "Millennium Falcon",
        setNumber: "75192",
        category: "Star Wars",
        pieces: 7541,
        price: 849.99,
        currency: "USD",
        condition: "sealed",
        available: true,
        image: "/images/75192/main.jpg",
        images: [
            "/images/75192/main.jpg",
            "/images/75192/detail-1.jpg",
            "/images/75192/detail-2.jpg"
        ],
        description:
            "A detailed Ultimate Collector Series model of the Millennium Falcon, featuring intricate interior sections and iconic Star Wars details.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/75192"
    },
    {
        id: 2,
        name: "Porsche 911 RSR",
        setNumber: "42096",
        category: "Technic",
        pieces: 1580,
        price: 149.99,
        currency: "USD",
        condition: "used",
        available: false,
        image: "/images/42096/main.jpg",
        images: [
            "/images/42096/main.jpg",
            "/images/42096/detail-1.jpg",
            "/images/42096/detail-2.jpg"
        ],
        description:
            "A LEGO Technic replica of the Porsche 911 RSR, featuring realistic engineering details and a detailed racing design.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/42096"
    },
    {
        id: 3,
        name: "Great Pyramid of Giza",
        setNumber: "21058",
        category: "Architecture",
        pieces: 1476,
        price: 139.99,
        currency: "USD",
        condition: "new",
        available: true,
        image: "/images/21058/main.jpg",
        images: [
            "/images/21058/main.jpg",
            "/images/21058/detail-1.jpg",
            "/images/21058/detail-2.jpg"
        ],
        description:
            "An architectural recreation of the Great Pyramid of Giza, showing the monument as it may have appeared in ancient Egypt.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/21058"
    },
    {
        id: 4,
        name: "Titanic",
        setNumber: "10294",
        category: "Icons",
        pieces: 9090,
        price: null,
        currency: "USD",
        condition: "sealed",
        available: true,
        image: "/images/10294/main.jpg",
        images: [
            "/images/10294/main.jpg",
            "/images/10294/detail-1.jpg",
            "/images/10294/detail-2.jpg"
        ],
        description:
            "A large-scale model of the RMS Titanic, featuring detailed decks, lifeboats, and interior cross-sections.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/10294"
    },
    {
        id: 5,
        name: "Eiffel Tower",
        setNumber: "10307",
        category: "Icons",
        pieces: 10001,
        price: null,
        currency: "USD",
        condition: "new",
        available: true,
        image: "/images/10307/main.jpg",
        images: [
            "/images/10307/main.jpg",
            "/images/10307/detail-1.jpg",
            "/images/10307/detail-2.jpg"
        ],
        description:
            "An impressive LEGO recreation of the Eiffel Tower, capturing its recognizable iron lattice structure.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/10307"
    },
    {
        id: 6,
        name: "NASA Artemis Space Launch System",
        setNumber: "10341",
        category: "Icons",
        pieces: 3601,
        price: null,
        currency: "USD",
        condition: "sealed",
        available: false,
        image: "/images/10341/main.jpg",
        images: [
            "/images/10341/main.jpg",
            "/images/10341/detail-1.jpg",
            "/images/10341/detail-2.jpg"
        ],
        description:
            "A detailed display model inspired by NASA's Artemis Space Launch System and its mobile launch tower.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/10341"
    },
    {
        id: 7,
        name: "Hogwarts Castle",
        setNumber: "71043",
        category: "Harry Potter",
        pieces: 6020,
        price: null,
        currency: "USD",
        condition: "used",
        available: true,
        image: "/images/71043/main.jpg",
        images: [
            "/images/71043/main.jpg",
            "/images/71043/detail-1.jpg",
            "/images/71043/detail-2.jpg"
        ],
        description:
            "A microscale recreation of Hogwarts Castle, featuring towers, classrooms, and memorable locations from the Harry Potter universe.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/71043"
    },
    {
        id: 8,
        name: "Lamborghini Sián FKP 37",
        setNumber: "42115",
        category: "Technic",
        pieces: 3696,
        price: null,
        currency: "USD",
        condition: "sealed",
        available: true,
        image: "/images/42115/main.jpg",
        images: [
            "/images/42115/main.jpg",
            "/images/42115/detail-1.jpg",
            "/images/42115/detail-2.jpg"
        ],
        description:
            "A LEGO Technic supercar model featuring a V12 engine, working transmission, and Lamborghini-inspired styling.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/42115"
    },
    {
        id: 9,
        name: "The Lord of the Rings: Rivendell",
        setNumber: "10316",
        category: "Icons",
        pieces: 6167,
        price: null,
        currency: "USD",
        condition: "new",
        available: true,
        image: "/images/10316/main.jpg",
        images: [
            "/images/10316/main.jpg",
            "/images/10316/detail-1.jpg",
            "/images/10316/detail-2.jpg"
        ],
        description:
            "A detailed recreation of Rivendell from The Lord of the Rings, featuring Elven architecture and recognizable scenes.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/10316"
    },
    {
        id: 10,
        name: "Concorde",
        setNumber: "10318",
        category: "Icons",
        pieces: 2083,
        price: null,
        currency: "USD",
        condition: "sealed",
        available: true,
        image: "/images/10318/main.jpg",
        images: [
            "/images/10318/main.jpg",
            "/images/10318/detail-1.jpg",
            "/images/10318/detail-2.jpg"
        ],
        description:
            "A display model of the Concorde supersonic aircraft, including its distinctive nose and elegant aerodynamic shape.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/10318"
    },
    {
        id: 11,
        name: "Vincent van Gogh – The Starry Night",
        setNumber: "21333",
        category: "Ideas",
        pieces: 2316,
        price: null,
        currency: "USD",
        condition: "new",
        available: false,
        image: "/images/21333/main.jpg",
        images: [
            "/images/21333/main.jpg",
            "/images/21333/detail-1.jpg",
            "/images/21333/detail-2.jpg"
        ],
        description:
            "A three-dimensional LEGO interpretation of Vincent van Gogh's famous painting, The Starry Night.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/21333"
    },
    {
        id: 12,
        name: "McLaren P1",
        setNumber: "42172",
        category: "Technic",
        pieces: 3893,
        price: null,
        currency: "USD",
        condition: "sealed",
        available: true,
        image: "/images/42172/main.jpg",
        images: [
            "/images/42172/main.jpg",
            "/images/42172/detail-1.jpg",
            "/images/42172/detail-2.jpg"
        ],
        description:
            "A LEGO Technic recreation of the McLaren P1 hypercar, featuring complex mechanical details and an aerodynamic body.",
        instructionsUrl:
            "https://www.lego.com/en-us/service/buildinginstructions/42172"
    }
];