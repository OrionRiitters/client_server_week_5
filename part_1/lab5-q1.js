var rates = {
  AUD: 1.5417,
  BGN: 1.9558,
  BRL: 3.8959,
  CAD: 1.5194,
  CHF: 1.1787
};

function eur_to_aud(eur_amt) {
  return eur_amt * rates["AUD"];
}

// For rate in rates, update largest_rate and symbol if rate largest. Return largest.
function largest_exchange_rate() {
  largest_rate = 0;
  largest_symbol = "";

  for (rate in rates) {
    if (rates[rate] > largest_rate) {
      largest_rate = rates[rate];
      largest_symbol = rate;
    }
  }
  return largest_symbol;
}

var cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
];
// For obj in cats_n_owners, if obj[name] is Gary Oldman, print obj[cat].
function cat_of_gary_oldman(cats_and_owners) {
  cats_and_owners.forEach(obj => {
    if (obj["name"] == "Gary Oldman") console.log(obj["cat"]);
  });
}

function add_t_swift(cats_and_owners) {
  cats_and_owners.push({ name: "Taylor Swift", cat: "Meredith" });
}

function print_cats_and_owners(cats_and_owners) {
  cats_and_owners.forEach(obj => {
    console.log(`Cat Owner: ${obj.name}\t|  Cat Name: ${obj.cat}`);
  });
}

var iss_location = {
  timestamp: 1515784140,
  iss_position: {
    latitude: "49.2167",
    longitude: "100.5363"
  },
  message: "success"
};

function find_iss(iss_location) {
  console.log(`ISS latitude: ${iss_location.iss_position.latitude}`);
  console.log(`ISS longitude: ${iss_location.iss_position.longitude}`);
}

var nobel_prize_winners_2017 = {
  prizes: [
    {
      year: "2017",
      category: "physics",
      laureates: [
        {
          id: "941",
          firstname: "Rainer",
          surname: "Weiss",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "2"
        },
        {
          id: "942",
          firstname: "Barry C.",
          surname: "Barish",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4"
        },
        {
          id: "943",
          firstname: "Kip S.",
          surname: "Thorne",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4"
        }
      ]
    },
    {
      year: "2017",
      category: "chemistry",
      laureates: [
        {
          id: "944",
          firstname: "Jacques",
          surname: "Dubochet",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3"
        },
        {
          id: "945",
          firstname: "Joachim",
          surname: "Frank",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3"
        },
        {
          id: "946",
          firstname: "Richard",
          surname: "Henderson",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3"
        }
      ]
    },
    {
      year: "2017",
      category: "medicine",
      laureates: [
        {
          id: "938",
          firstname: "Jeffrey C.",
          surname: "Hall",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3"
        },
        {
          id: "939",
          firstname: "Michael",
          surname: "Rosbash",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3"
        },
        {
          id: "940",
          firstname: "Michael W.",
          surname: "Young",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3"
        }
      ]
    },
    {
      year: "2017",
      category: "literature",
      laureates: [
        {
          id: "947",
          firstname: "Kazuo",
          surname: "Ishiguro",
          motivation:
            '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"',
          share: "1"
        }
      ]
    },
    {
      year: "2017",
      category: "peace",
      laureates: [
        {
          id: "948",
          firstname: "International Campaign to Abolish Nuclear Weapons (ICAN)",
          motivation:
            '"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons"',
          share: "1",
          surname: ""
        }
      ]
    },
    {
      year: "2017",
      category: "economics",
      laureates: [
        {
          id: "949",
          firstname: "Richard H.",
          surname: "Thaler",
          motivation: '"for his contributions to behavioural economics"',
          share: "1"
        }
      ]
    }
  ]
};
// Function used to make other functions look a little cleaner.
function iterate_prizes(prize_winners) {
  return prize_winners.prizes;
}
// Function used to reduce repetitive code in other functions that iterate over each
// laureate.
function iterate_laureates(prize_winners, laureate_function) {
  prizes = iterate_prizes(prize_winners);
  for (prize in prizes) laureate_function(prize, prizes);
}
// For each prize, if category = literature, print laureates' full names.
// Used in conjunction with iterate_laureates.
function print_literature_names(prize, prizes) {
  if (prizes[prize]["category"] == "literature") {
    for (laureate in prizes[prize]["laureates"]) {
      console.log(
        `${prizes[prize]["laureates"][laureate]["firstname"]} ${
          prizes[prize]["laureates"][laureate]["surname"]
        }`
      );
    }
  }
}
// For each prize, if category = physics, print laureates' ids.
// Used in conjunction with irterate_laureates.
function print_physics_ids(prize, prizes) {
  if (prizes[prize]["category"] == "physics") {
    for (laureate in prizes[prize]["laureates"]) {
      console.log(`${prizes[prize]["laureates"][laureate]["id"]}`);
    }
  }
}

function print_prize_categories() {
  for (prize in nobel_prize_winners_2017.prizes) {
    console.log(nobel_prize_winners_2017.prizes[prize]["category"]);
  }
}
// For each prize, increase number of categories by 1.
function print_number_of_categories() {
  prizes = iterate_prizes(nobel_prize_winners_2017);
  number_of_categories = 0;
  for (prize in prizes) {
    number_of_categories++;
  }
  console.log(number_of_categories);
}
// For each laureate, increase number of categories by 1.
function print_number_of_laureates(prize_winners) {
  prizes = iterate_prizes(prize_winners);
  number_of_laureates = 0;
  for (prize in prizes) {
    for (laureate in prizes[prize]["laureates"]) {
      number_of_laureates++;
    }
  }
  console.log(number_of_laureates);
}
// Run every function to ensure their functionality.
function main() {
  console.log(eur_to_aud(100));
  console.log(largest_exchange_rate());
  cat_of_gary_oldman(cats_and_owners);
  add_t_swift(cats_and_owners);
  print_cats_and_owners(cats_and_owners);
  find_iss(iss_location);
  iterate_laureates(nobel_prize_winners_2017, print_literature_names);
  iterate_laureates(nobel_prize_winners_2017, print_physics_ids);
  print_prize_categories();
  print_number_of_categories();
  print_number_of_laureates(nobel_prize_winners_2017);
}

main();
