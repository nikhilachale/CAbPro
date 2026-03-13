// ─────────────────────────────────────────────────────────────────────────────
//  INDORE CITY PLACES — Enriched Dataset
//  8 must-visit spots within Indore with detailed descriptions,
//  history, highlights, practical info, food recommendations, and tips.
// ─────────────────────────────────────────────────────────────────────────────

const indorePlaces = [
  {
    id: 1,
    slug: "rajwada-palace",
    name: "Rajwada Palace",
    emoji: "🏯",
    tag: "Heritage",
    tagColor: "#c8963e",

    shortDescription:
      "A seven-storied historical landmark built by the Holkar dynasty. Rajwada blends Maratha, Mughal, and French architecture and still anchors the old-city energy of Indore.",

    longDescription: [
      "Rajwada Palace has stood at the very heart of Indore for more than two centuries and remains the city's most recognizable emblem of royal heritage. Built gradually over multiple reigns by the Holkar dynasty — the Maratha rulers of Indore — the palace reflects a confident blending of Mughal grandeur, Maratha utility, and French decorative detail that was fashionable among Indian royalty in the 18th and 19th centuries.",
      "The structure rises seven stories, though only the lower floors are fully intact. The ground level features imposing carved teak wood pillars and an ornate facade that is among the largest wooden palace fronts in India. Successive floors narrow progressively, topped by delicate jali screens and covered balconies that once sheltered the royal women's quarters. The palace has survived two devastating fires — in 1801 and again in 1984 — and has been painstakingly restored on both occasions, which explains the occasional contrast between older stone sections and newer reconstructed portions.",
      "Inside the main gate, a large ceremonial courtyard was historically used for royal assemblies, military parades, and public durbars. A small temple dedicated to the Holkar family deity sits within the complex and remains active. The palace's inner chambers now house modest exhibition spaces displaying photographs, maps, and artefacts documenting Holkar-era Indore.",
      "The real magic of Rajwada lies not just in the building but in its surroundings. Rajwada Chowk — the square that faces the palace — is one of the oldest continuously active commercial spaces in central India. Flower vendors, namkeen shops, textile merchants, sweet stalls, and street food carts crowd every lane radiating outward from the palace. Exploring these lanes after visiting the palace turns a heritage stop into a full cultural immersion.",
    ],

    history:
      "The palace was originally constructed around 1747 CE by Maharaja Malhar Rao Holkar, founder of the Holkar dynasty of Indore. Subsequent rulers expanded and embellished it over several generations. It served as the administrative and ceremonial seat of the Holkar kingdom until the early 20th century.",

    highlights: [
      "Seven-story Maratha-Mughal-French heritage structure over 200 years old",
      "Ornate carved teak wood facade — one of the largest wooden palace fronts in India",
      "Inner ceremonial courtyard with active family temple",
      "Sound and light show in evenings narrating Holkar history",
      "Immediate access to one of central India's oldest bazaars",
      "Photography-friendly plaza especially during golden hour",
      "Rich mix of Mughal arches, French decorative windows, and Maratha carved pillars",
    ],

    nearbyAttractions: [
      "Kanch Mandir (0.5 km) — Glass and mirror Jain temple",
      "Sarafa Bazaar (0.3 km) — Legendary night food street",
      "Khade Ganesh Temple (0.2 km) — Local neighbourhood shrine",
      "Cloth Market (0.4 km) — One of the largest textile markets in MP",
    ],

    foodNearby: [
      "Joshi Ki Mithai — Famous for Indori namkeen and sweets for over 100 years",
      "Vijay Chaat House — Beloved local chaat spot near the palace gate",
      "Sarafa Bazaar vendors — Garadu, Bhutte ka Kees, Jalebi-Rabdi from 9 PM",
    ],

    location: "Rajwada Chowk, Old Indore",
    bestTime: "October to March · Golden Hour (5–6 PM)",
    timings: "10:00 AM – 5:00 PM (Closed Mondays)",
    entryFee: "₹10 for Indians · ₹150 for foreign nationals",
    timeNeeded: "1.5 to 2.5 hours",
    howToReach: "Auto-rickshaw or cab from anywhere in Indore. Central location — walkable from Sarafa and Chappan Dukan.",
    tip: "Visit at golden hour when warm amber light makes the teak wood glow. After the palace, walk into the lanes behind the structure — the traditional bazaar atmosphere is as historically rich as the building itself. Don't miss the Sound & Light show in the evening.",
  },

  {
    id: 2,
    slug: "sarafa-bazaar",
    name: "Sarafa Bazaar",
    emoji: "🌙",
    tag: "Food & Culture",
    tagColor: "#6b9e4a",

    shortDescription:
      "A jewelry market by day and one of India's most iconic night food streets by late evening. Sarafa is where locals come for Indore's signature flavors.",

    longDescription: [
      "Sarafa Bazaar is perhaps the most distinctively Indori experience anywhere in India — a place that lives a double life. By day, this narrow lane in the old city is a thriving gold and silver jewelry market, its glass cases glittering with necklaces, bangles, and earrings as merchants weigh precious metal on tiny scales. But as evening falls and jewelers pull down their shutters, another transformation begins.",
      "By 9 PM, the shuttered storefronts become the backdrops for a parade of food carts, gas-flame griddles, and handwritten menu boards. Sarafa's night food bazaar is not a tourist attraction — it is a living institution that Indoris themselves have been coming to for generations. Families arrive after dinner for dessert. College students gather in groups for late-night snacks. Street food enthusiasts make it the final stop on a long day of eating across the city.",
      "The food here is hyper-local. Garadu — deep-fried purple yam dusted with chaat masala — is a winter seasonal specialty available almost nowhere else in India. Bhutte ka Kees, grated roasted corn cooked with milk, turmeric, and spices until thick and fragrant, is a dish that originated in Indore and is carried in the memory of every Indori who has ever moved away. Jalebi served with thick Rabdi, Malpua dripping with syrup, Dahi Bhalla so light they dissolve, and the cooling Shahi Shikanji — saffron lemonade with milk and crushed nuts — complete a food landscape unlike any other.",
      "The physical experience of Sarafa at night is as memorable as the food. Vendors call out their specialties. Smoke rises from a dozen griddles simultaneously. Hundreds of people squeeze through a lane barely wide enough for two cars, passing paper plates between strangers, arguing cheerfully about whose jalebi is better. It is chaotic, fragrant, loud, and entirely alive.",
    ],

    history:
      "Sarafa has functioned as a jewelry market in the old city for well over a century. The night food tradition developed organically as vendors began setting up after the jewelers closed, taking advantage of the foot traffic from evening shoppers. Over decades it became institutionalised as Indore's most celebrated food street.",

    highlights: [
      "Night food market operating from 9 PM – 2 AM daily",
      "Garadu (fried purple yam) — a winter delicacy unique to Indore",
      "Bhutte ka Kees — a grated corn dish invented in Indore, rarely found elsewhere",
      "Jalebi with thick Rabdi served piping hot after 10 PM",
      "Shahi Shikanji — saffron-laced royal lemonade with milk",
      "Dahi Bhalla, Malpua, Khopra Patties, and seasonal specials",
      "Authentic local crowd — this is where Indoris themselves eat",
      "Adjacent to Rajwada Palace — easy to combine in one evening",
    ],

    mustTryDishes: [
      { name: "Garadu", description: "Fried purple yam with tangy masala. Winter only (Oct–Feb). The most iconic Indori street food." },
      { name: "Bhutte ka Kees", description: "Grated roasted corn cooked with milk and spices. Unique to Indore. Available year-round." },
      { name: "Jalebi with Rabdi", description: "Fresh crispy spirals soaked in syrup, served with thick cold rabdi. Best eaten at 11 PM." },
      { name: "Shahi Shikanji", description: "Chilled lemonade with milk, saffron, rose water, and crushed pistachios. Indore's royal lemonade." },
      { name: "Dahi Bhalla", description: "Lentil dumplings in chilled yoghurt with tamarind and mint chutney. Indore style is exceptionally light." },
      { name: "Malpua", description: "Deep-fried sweet pancakes soaked in sugar syrup, topped with cream. A late-night dessert staple." },
    ],

    nearbyAttractions: [
      "Rajwada Palace (0.3 km) — Combine as an evening heritage + food outing",
      "Kanch Mandir (0.5 km) — Glass Jain temple best visited before Sarafa",
    ],

    location: "Sarafa Lane, near Rajwada Chowk, Old Indore",
    bestTime: "Year-round · 9:30 PM – 1:00 AM",
    timings: "Food stalls: 9:00 PM – 2:00 AM",
    entryFee: "No entry fee · Pay per dish (₹20–₹120 per item)",
    timeNeeded: "1.5 to 2 hours for a proper food crawl",
    howToReach: "Auto or cab to Rajwada Chowk, then a 3-minute walk into Sarafa lane.",
    tip: "Arrive at 9:30 PM — early enough for the freshest food, late enough for the full atmosphere. Walk the entire lane once before buying anything so you can survey all options. Cash is king here. In winter, do not leave without trying Garadu — it vanishes when the cold weather ends.",
  },

  {
    id: 3,
    slug: "lal-bagh-palace",
    name: "Lal Bagh Palace",
    emoji: "🏛️",
    tag: "Architecture",
    tagColor: "#9b4dca",

    shortDescription:
      "An elegant Holkar-era palace inspired by Italian Renaissance style, known for grand interiors, Buckingham-replica gates, crystal chandeliers, and stately halls.",

    longDescription: [
      "Lal Bagh Palace is one of the most architecturally ambitious buildings in Madhya Pradesh — a deliberate statement of cosmopolitan refinement by the Holkar rulers, who wished to demonstrate that Indore could match the great courts of Europe. Construction began under Maharaja Shivaji Rao Holkar I in 1886 and was completed by his successors over three decades, with the palace finally assuming its current form around 1921.",
      "The palace is built in the Italian Renaissance style, a choice that placed it firmly in the tradition of great European public buildings of the 19th century. The exterior features a symmetrical neoclassical facade with Corinthian columns, ornate cornices, and large arched windows. The overall proportions are grand and unhurried — this is a building designed to impress from a distance as much as up close.",
      "The interiors are even more spectacular than the facade suggests. The main durbar hall — where the Holkars received guests, settled disputes, and held state functions — rises nearly 50 feet, its ceiling painted with Renaissance-style murals and supported by fluted columns. Belgian crystal chandeliers hang throughout the main halls, catching light from tall windows and dispersing it in prismatic patterns across Venetian marble floors. French Rococo furniture, hand-embroidered drapes, and European oil paintings fill the state rooms, creating an interior more evocative of a Florentine palazzo than a Madhya Pradesh palace.",
      "The most famous exterior feature is the set of three gates that line the approach to the palace from the main road. The first and second are imposing but relatively understated. The third — the innermost gate — is an exact replica of the ceremonial gates of Buckingham Palace in London, reportedly gifted to the Holkar rulers by the British government as a gesture of diplomatic goodwill. The sight of this unmistakably British gate opening onto an Italian Renaissance palace in central India is one of the strangest and most memorable visual experiences the city offers.",
      "The surrounding grounds extend across 28 acres of formal gardens with fountains, reflecting pools, and shaded walkways. A portion of the palace now functions as a museum displaying royal portraits, vintage automobiles belonging to the Holkars, ceremonial weapons, dinnerware, and personal artefacts that give an intimate portrait of life in one of India's most refined royal courts.",
    ],

    history:
      "Built between 1886 and 1921 under Maharaja Shivaji Rao Holkar I and continued by Maharaja Tukoji Rao Holkar III, Lal Bagh represented the Holkars' desire to build a palace that could stand comparison with European royal residences. The name 'Lal Bagh' (Red Garden) likely refers to the rose gardens that originally surrounded the building.",

    highlights: [
      "Buckingham Palace replica gates — exact reproduction gifted by the British",
      "Durbar hall with 50-foot painted ceiling and Belgian crystal chandeliers",
      "Venetian marble floors and French Rococo period furnishings",
      "28 acres of formal Italian-style gardens with fountains and reflecting pools",
      "Museum with Holkar royal portraits, vintage cars, weapons, and artefacts",
      "Three-gate processional approach creating a dramatic arrival experience",
      "One of the finest examples of Indo-European royal architecture in India",
    ],

    nearbyAttractions: [
      "Central Museum Indore (2 km) — Archaeological museum with Paramara-era sculptures",
      "Rajwada Palace (3 km) — Contrast of old-city Maratha heritage vs European palace",
    ],

    location: "Lal Bagh Road, Residency Area, Indore",
    bestTime: "October to March · Weekday mornings (10 AM – 12 PM)",
    timings: "10:00 AM – 5:00 PM (Closed Mondays)",
    entryFee: "₹20–₹50 for Indians · ₹200 for foreign nationals",
    timeNeeded: "2 to 3 hours (including gardens and museum)",
    howToReach: "5–10 min by auto from Indore city centre. Ask for 'Lal Bagh Road' or 'Holkar Palace'.",
    tip: "Hire the official guide available at the gate (₹100–₹150) — the stories they share about individual rooms and objects are extraordinary and not written on any placard. Visit weekday mornings to experience the interiors in quiet and the gardens in the best morning light.",
  },

  {
    id: 4,
    slug: "patalpani-waterfall",
    name: "Patalpani Waterfall",
    emoji: "🌊",
    tag: "Nature",
    tagColor: "#2a9d8f",

    shortDescription:
      "A scenic waterfall around 35 km from Indore, popular during monsoon when the gorge fills with a dramatic 300-foot cascade surrounded by dense forest.",

    longDescription: [
      "Patalpani is the kind of place that demands the right season. Visit in summer and you will find a dusty gorge with a thin trickle of water. Visit in July and you will hear the waterfall before you see it — a deep, continuous roar rising from a gorge filled with white water, mist, and the smell of wet earth and green leaves.",
      "The name translates roughly as 'water that reaches the underworld' — a poetic reference to the near-vertical drop of almost 300 feet (around 90 metres) into a gorge so deep that the base is permanently shrouded in mist and shadow. The water falls in multiple cascades, each narrower than the last, disappearing into a pool far below that is not visible from the viewing area. The sense of water vanishing into unknown depths gives the place its name and its particular atmosphere.",
      "The surrounding landscape during monsoon is overwhelmingly lush — dense tropical forest covers every hillside, wildflowers appear overnight along every path, and the air is heavy with moisture and the sound of birds and insects. Monsoon rainbows form regularly in the mist above the gorge when the sun breaks through cloud, creating moments of brief extraordinary beauty.",
      "The journey to Patalpani is almost as rewarding as the destination itself. The Mhow–Patalpani–Kalakund Heritage Railway — a narrow-gauge line built by the British in the late 19th century — winds through the Vindhya hills on a route of extraordinary scenic beauty. The train passes through hand-cut rock tunnels, over British-era stone viaducts, and through dense bamboo forest before reaching the small, unchanged Patalpani station. This toy train journey is one of central India's most beautiful railway experiences.",
      "Outside the monsoon window (July–September), Patalpani is still scenic but significantly less dramatic. Post-monsoon (October–November) the flow is reduced but the forest greenery lingers. By January the falls may reduce to a thin cascade, and by April they are largely dry.",
    ],

    history:
      "The area around Patalpani has been known to local tribal communities for centuries. The British-era railway that passes through was constructed in the 1870s as part of the Mhow military cantonment infrastructure, and the scenic route later became a popular leisure ride for British officers.",

    highlights: [
      "300-foot (90-metre) sheer waterfall drop — one of MP's tallest seasonal falls",
      "Dense monsoon forest surrounding the gorge with vibrant wildlife and wildflowers",
      "Monsoon rainbows forming regularly in the mist above the gorge",
      "Heritage narrow-gauge toy train from Mhow through tunnels and viaducts",
      "Patalpani railway station — small, heritage, largely unchanged since colonial era",
      "Tribal village nearby offering cultural context to the landscape",
      "Dramatic sound and mist experience at peak monsoon flow",
    ],

    nearbyAttractions: [
      "Mhow Cantonment Town (8 km) — Historic British military town with colonial architecture",
      "Kalakund (15 km) — End point of heritage railway with hill viewpoints",
      "Jam Gate (20 km) — Scenic valley viewpoint on the Mhow–Indore road",
    ],

    location: "Patalpani Village, near Mhow, 35 km from Indore",
    bestTime: "July to September (monsoon peak) · October for post-monsoon greenery",
    timings: "Sunrise to sunset (no artificial lighting at the site)",
    entryFee: "No major entry fee · Parking ₹20",
    timeNeeded: "2 to 4 hours including travel and exploration",
    howToReach: "By road: 35 km from Indore via Mhow. By heritage train: Narrow-gauge railway from Mhow station (check schedule in advance — runs twice daily).",
    tip: "Take the heritage toy train from Mhow station for the most memorable approach. Arrive before 9 AM during peak monsoon to get parking. Never cross safety barriers near the gorge edge — the rocks are permanently slippery and water levels can surge without warning. Wear shoes with grip, not sandals or slippers.",
  },

  {
    id: 5,
    slug: "khajrana-ganesh-temple",
    name: "Khajrana Ganesh Temple",
    emoji: "🛕",
    tag: "Spiritual",
    tagColor: "#e76f51",

    shortDescription:
      "One of Indore's most visited and beloved temples, known for deep local faith, a Holkar-era swayambhu idol, daily aarti, and a calm yet vibrant devotional atmosphere.",

    longDescription: [
      "Of all the sacred sites in Indore, Khajrana Ganesh Temple occupies a unique position — it is not primarily a pilgrimage destination for outsiders, but the deeply beloved neighbourhood deity of the city itself. The temple is woven into the daily life of Indore in a way that few religious sites in any city can claim. Residents visit not just on auspicious occasions but as part of their weekly or even daily routine, creating an atmosphere that feels less like a tourist attraction and more like a living, breathing expression of civic faith.",
      "The temple's historical origin is inseparable from the legendary Ahilya Bai Holkar, the philosopher-queen of the Holkar dynasty who ruled in the late 18th century and is regarded as a saint-ruler by many Hindus. According to local tradition, she ordered a Ganesha idol to be buried in this date-palm orchard (khajrana means 'full of dates') to protect it from the iconoclasm of the Mughal emperor Aurangzeb. When the idol was retrieved, it was declared swayambhu — self-manifested, meaning it appeared of its own divine will rather than being carved by human hands. This status gives the idol supreme sanctity in the Hindu tradition.",
      "The main sanctum houses a substantial black stone Ganesha idol that is lavishly adorned — covered in gold and silver ornaments, buried under fresh flower garlands changed daily, and given a warm vermilion (sindoor) coating that creates a richly red-orange appearance. The effect in the flickering light of oil lamps and camphor flames is deeply striking.",
      "The temple complex has expanded considerably over decades and now includes subsidiary shrines for Shiva, Hanuman, and the Navagrahas (nine planets), a large kitchen that distributes free prasad, manicured gardens for post-darshan relaxation, and a dedicated offering market outside the gates. The surrounding lanes are fragrant with fresh marigolds, jasmine garlands, and the sweet smell of modak and ladoo being prepared.",
      "Wednesday — considered the day sacred to Ganesha — draws crowds from across Madhya Pradesh. The Ganesh Chaturthi festival each year transforms the entire area into one of the most vibrant celebrations in central India, with the temple lit by millions of lamps and flowers for ten consecutive days and nights.",
    ],

    history:
      "The temple was established under Ahilya Bai Holkar (ruled 1767–1795 CE), one of the most revered rulers of the Holkar dynasty. She was a prolific temple builder across India, and Khajrana was one of her personal religious initiatives in Indore. The temple has been expanded and renovated multiple times since then by the Indore Royal Trust.",

    highlights: [
      "Swayambhu (self-manifested) Ganesha idol — supreme sanctity in the Hindu tradition",
      "Daily aarti at 7 PM — bells, conch, camphor flames, and devotional singing",
      "Wednesday darshan — especially auspicious, draws large crowds from across MP",
      "Ganesh Chaturthi 10-day festival — one of MP's most spectacular religious celebrations",
      "Free modak and ladoo prasad distributed daily from the temple kitchen",
      "Active flower market surrounding the temple — one of Indore's most fragrant streets",
      "Subsidiary shrines for Shiva, Hanuman, and all nine planetary deities",
    ],

    nearbyAttractions: [
      "Bijasen Tekri Temple (3 km) — Hilltop Devi temple with panoramic city views",
      "Treasure Island Mall (2 km) — Major commercial centre nearby",
    ],

    location: "Khajrana Colony, Indore",
    bestTime: "Year-round · Weekday evenings for peaceful darshan · Wednesdays for full atmosphere",
    timings: "5:00 AM – 10:30 PM (open all days)",
    entryFee: "Free entry · Open to all faiths and communities",
    timeNeeded: "45 minutes to 1.5 hours",
    howToReach: "Auto or cab. Ask for 'Khajrana Mandir' — universally known in the city.",
    tip: "The evening aarti at 7 PM is the highlight. Arrive 20 minutes early and position yourself near the inner sanctum entrance. The simultaneous ringing of bells, conch shells, and camphor lamps creates an overwhelming sensory experience. On weekdays (except Wednesday) the crowd is manageable and darshan is peaceful. The modak prasad is made fresh each morning — arrive early if you want to take some home.",
  },

  {
    id: 6,
    slug: "chappan-dukan",
    name: "Chappan Dukan",
    emoji: "🍽️",
    tag: "Food Street",
    tagColor: "#e9c46a",

    shortDescription:
      "A famous food strip in New Palasia with long-running legacy snack outlets, iconic Indori breakfast staples, and a lively evening atmosphere for families and food lovers.",

    longDescription: [
      "Chappan Dukan — literally 'fifty-six shops' — is one of the most democratically beloved food streets in all of India. Located in the upscale New Palasia neighbourhood, it was established in the 1970s when exactly 56 food stalls were set up in a row. The number has since multiplied many times over, but the name has stuck as firmly as the flavors it represents.",
      "What distinguishes Chappan Dukan from other Indian food streets is its remarkable range combined with its authentic local character. This is not a street that has been cleaned up or repackaged for tourism. Generations of the same families still run their original stalls, using recipes that have not changed in 40 or 50 years, served from the same counter to customers who have been coming since childhood and now bring their own children.",
      "The street is active at almost any hour. Morning visitors come for the iconic Indori breakfast — Poha-Jalebi — soft flattened rice tempered with mustard seeds and curry leaves, eaten alongside a hot crispy jalebi. This combination sounds unusual but is one of the most satisfying breakfast pairings in Indian cuisine, and Chappan's poha vendors have been perfecting it since the 1970s.",
      "By evening the street transforms into a multi-generational gathering. College students occupy one end around the momos and fast-food counters while families with children crowd the classic chaat and dessert stalls. The air is filled with the sizzle of oil, the smell of fresh coriander and tamarind, and the constant chatter of a city that takes its food culture seriously.",
      "Among the must-try items are Khopra Patties — deep-fried potato patties filled with sweetened coconut, a uniquely Indori invention that appears on very few menus outside this city — and Shrikhand, thick strained yoghurt sweetened with sugar and saffron, served cold in clay pots. The sugarcane juice vendors press their produce with ginger and lemon directly before handing it over, making it one of the freshest juice experiences in the city.",
    ],

    history:
      "Established in the mid-1970s in the New Palasia area, Chappan Dukan began as a planned cluster of 56 licensed food stalls set up by the Indore Municipal Corporation. Over decades it grew organically into a multi-generational food institution. Several original vendors from 1975 are still represented today through their descendants.",

    highlights: [
      "Poha-Jalebi breakfast — the quintessential Indori morning meal, available from 7:30 AM",
      "Khopra Patties — potato patties with sweetened coconut filling, an Indori invention",
      "Shrikhand and Rabdi — cold, saffron-laced dairy desserts from legacy shops",
      "Sev Puri and Dahi Puri — Indore's chaat with distinctively tangy-spicy local chutneys",
      "Fresh pressed sugarcane juice with ginger and lemon",
      "Family-friendly atmosphere active from morning through late night",
      "Mix of 40-year-old legacy stalls and newer generation counters in one walkable strip",
    ],

    mustTryDishes: [
      { name: "Poha-Jalebi", description: "The Indori breakfast. Soft tempered flattened rice eaten with a hot crispy jalebi. Served 7 AM – 10 AM." },
      { name: "Khopra Patties", description: "Deep-fried potato cutlet with sweet coconut filling. Uniquely Indori. Available all day." },
      { name: "Sev Puri", description: "Flat puri topped with potatoes, onions, chutneys, and crispy sev. Indore's version is notably spicier." },
      { name: "Shrikhand", description: "Thick strained sweetened yoghurt with saffron and cardamom. Best from the older dairy-based shops." },
      { name: "Sugarcane Juice", description: "Fresh pressed with ginger and lime. Refreshing afternoon drink, especially in warm weather." },
    ],

    nearbyAttractions: [
      "Rajwada Palace (2 km) — Can combine as a full old-city evening itinerary",
      "Treasure Island Mall (1 km) — Major shopping destination nearby",
    ],

    location: "New Palasia, Indore",
    bestTime: "Year-round · Mornings (7–10 AM) for breakfast · Evenings (6–10 PM) for snack crawl",
    timings: "Most stalls 7:00 AM – 11:30 PM (individual stalls vary)",
    entryFee: "No entry fee · ₹100–₹300 per person for a full food crawl",
    timeNeeded: "1 to 2 hours",
    howToReach: "Auto or cab to New Palasia. Ask for 'Chappan Dukan' — every driver knows it.",
    tip: "Come for Poha-Jalebi before 9 AM to catch the freshest batch. For the evening crawl, come hungry and walk the full length before buying — the quality varies significantly between older legacy stalls and newer counters. Ask any local which stall their family uses; that recommendation will always lead to the best version of whatever you are looking for.",
  },

  {
    id: 7,
    slug: "kanch-mandir",
    name: "Kanch Mandir (Glass Temple)",
    emoji: "✨",
    tag: "Unique",
    tagColor: "#457b9d",

    shortDescription:
      "A glass-and-mirror Jain temple with every surface covered in intricate mosaic work, creating a kaleidoscopic interior that is unlike any other religious space in India.",

    longDescription: [
      "There are religious buildings in India that are remarkable for their age, their scale, their sculpture, or their setting. Kanch Mandir is remarkable for something entirely different — the sustained, obsessive, room-by-room transformation of every surface into a shimmering world of glass and reflection that makes the interior feel less like a building and more like stepping inside a jewel.",
      "The temple was commissioned in 1903 by Seth Hukumchand, one of the wealthiest Jain merchants of Indore and a man of considerable aesthetic ambition. He brought craftsmen from across India and reportedly from Belgium as well, providing them with vast quantities of coloured glass, mirrors, and crystal to work with. The result, completed over several years, is a mosaic interior of staggering intricacy — every wall, column, arch, and ceiling surface covered in carefully arranged pieces of coloured glass that together create panoramic scenes from Jain cosmology.",
      "Walking into Kanch Mandir for the first time is genuinely disorienting. The eyes do not know where to look. Reflections of reflections create infinite visual corridors. Blue glass depicting celestial realms abuts gold-and-red panels showing earthly scenes. Green glass garden scenes give way to silver-white geometric patterns. The entire effect changes as the viewer moves — what appears as one image from one angle dissolves into something entirely different from another.",
      "The experience is most extraordinary between 9 and 11 in the morning, when direct sunlight enters through the ornate windows and activates the glass. The interior fills with fractured rainbows. Warm and cool light sources interact. The marble Tirthankara idol in the central sanctum appears to be illuminated from within. At these moments the temple seems less like an architectural achievement and more like a naturally occurring phenomenon.",
      "Despite its visual extravagance, Kanch Mandir remains a functioning place of worship. It is maintained in private ownership by the descendants of Seth Hukumchand and continues to be used for Jain religious observances. The atmosphere inside is quiet and serious — visitors are expected to be respectful, remove their footwear, and maintain silence. Flash photography is prohibited, both out of respect and because it would destroy the very quality that makes the space memorable.",
    ],

    history:
      "Built in 1903 by Seth Hukumchand Jain, a prominent merchant and philanthropist of early-20th-century Indore. The temple was intended as both a house of worship and a statement of artistic patronage, drawing on the Jain tradition of creating visually overwhelming sacred spaces. It has remained in the Hukumchand family's private care since its founding.",

    highlights: [
      "Every wall, ceiling, column, and floor covered in coloured glass and mirror mosaic",
      "Morning light (9–11 AM) activates the glass and fills the interior with moving rainbow patterns",
      "Detailed Jain cosmological scenes depicted across hundreds of glass panels",
      "Marble Tirthankara idol in the central sanctum appearing to glow from within",
      "One of the most visually unique religious interiors in all of India",
      "Private family ownership — actively maintained as a functioning Jain temple",
      "Located within the old-city heritage zone near Rajwada",
    ],

    nearbyAttractions: [
      "Rajwada Palace (0.5 km) — Combine as a heritage walking morning",
      "Sarafa Bazaar (0.4 km) — Evening food street within easy walking distance",
      "Cloth Market (0.3 km) — Traditional textile bazaar nearby",
    ],

    location: "Jawai Bakhal, near Rajwada, Old Indore",
    bestTime: "October to March · Morning light (9–11 AM) for best visual experience",
    timings: "6:00 AM – 12:00 PM · 4:00 PM – 8:00 PM",
    entryFee: "Free · Donations welcome",
    timeNeeded: "45 minutes to 1 hour",
    howToReach: "Short walk or auto from Rajwada Chowk. Ask for 'Kanch Mandir' in old city lanes.",
    tip: "Visit between 9 and 11 AM when direct morning sunlight enters the windows and the glass comes fully alive. Bring a small pen torch to illuminate the ceiling panels above the sanctum — they are among the most detailed in the temple and are easily missed in lower light. Dress modestly and maintain silence inside the sanctum.",
  },

  {
    id: 8,
    slug: "ralamandal-wildlife-sanctuary",
    name: "Ralamandal Wildlife Sanctuary",
    emoji: "🦌",
    tag: "Nature",
    tagColor: "#2a9d8f",

    shortDescription:
      "Madhya Pradesh's oldest wildlife sanctuary, located just 12 km from Indore, offering forest trails, early-morning deer and birdwatching, and a hilltop viewpoint over the city.",

    longDescription: [
      "Few cities of Indore's scale and density can claim a genuine wildlife sanctuary within a 15-minute drive of the city centre. Ralamandal is that rare privilege — a 2,340-hectare expanse of undulating hills covered in teak, bamboo, and mixed deciduous forest that begins almost where the city's residential areas end.",
      "The sanctuary was formally established in 1989, making it the oldest protected wildlife zone in Madhya Pradesh, though the forest itself has existed in some form of protection since the Holkar era when it was maintained as a royal hunting reserve. This long history of limited human interference has allowed the ecosystem to develop a genuine character — the teak forest here is mature, with trees several decades old creating a dense canopy quite unlike the scrubby secondary growth found around many Indian cities.",
      "The wildlife is primarily ungulates and medium mammals. Spotted deer (chital) are present in substantial numbers and are regularly seen in clearings, particularly in the early morning. Sambar deer, nilgai (blue bull), wild boar, and golden jackal are also frequently encountered. Leopard have been confirmed in the sanctuary through camera trap records though sightings by visitors are rare. The birdlife is genuinely exceptional — over 200 species have been documented including the Indian pitta, Indian paradise flycatcher, crested serpent eagle, Indian roller, and multiple species of kingfisher, bee-eater, and woodpecker.",
      "The sanctuary's centrepiece is the Ralamandal hill itself — a forested ridge that, from its summit, offers a panoramic view that is quietly extraordinary. To the south, Indore's skyline is visible in its entirety — towers, traffic, urban density. To the north and west, an uninterrupted green canopy extends to the horizon. Standing on the hilltop and being able to see both simultaneously creates a perspective on the relationship between city and wilderness that is difficult to find elsewhere.",
      "Forest trails of varying length and difficulty allow visitors to explore independently, though hiring a forest department guide is strongly recommended for wildlife spotting. The sanctuary's interpretation centre at the entrance provides good context on the local ecosystem.",
    ],

    history:
      "The Ralamandal forest was maintained as a hunting reserve by the Holkar dynasty and later by the Indore State forest department during the colonial period. It was formally declared a wildlife sanctuary in 1989 under the Wildlife Protection Act, becoming Madhya Pradesh's first officially designated sanctuary. It covers 2,340 hectares across the Vindhya foothills.",

    highlights: [
      "Spotted deer herds visible in forest clearings especially at dawn and dusk",
      "200+ documented bird species — excellent birding with kingfishers, eagles, and barbets",
      "Hilltop viewpoint with simultaneous panorama of city skyline and uninterrupted forest",
      "MP's oldest wildlife sanctuary with mature teak-bamboo forest canopy",
      "Marked walking trails ranging from 1 km to 5 km through varied forest terrain",
      "Forest department interpretation centre with ecosystem and wildlife documentation",
      "Leopard presence confirmed — remote but thrilling possibility on dawn walks",
    ],

    wildlife: [
      { species: "Spotted Deer (Chital)", status: "Common", bestTime: "6–8 AM at forest clearings" },
      { species: "Sambar Deer", status: "Regular", bestTime: "Early morning and dusk" },
      { species: "Nilgai (Blue Bull)", status: "Regular", bestTime: "Morning along forest edges" },
      { species: "Wild Boar", status: "Common", bestTime: "Early morning near water sources" },
      { species: "Golden Jackal", status: "Occasional", bestTime: "Dawn and dusk" },
      { species: "Crested Serpent Eagle", status: "Regular", bestTime: "Morning hours near canopy" },
      { species: "Indian Pitta", status: "Seasonal visitor", bestTime: "Monsoon and post-monsoon" },
    ],

    nearbyAttractions: [
      "Tincha Falls (5 km) — Small seasonal waterfall accessible from the same road",
      "Patalpani Waterfall (25 km) — Larger seasonal waterfall further along the Mhow road",
    ],

    location: "Ralamandal, 12 km from Indore city centre",
    bestTime: "October to March · Dawn entry (6–8 AM) for wildlife",
    timings: "6:00 AM – 6:00 PM",
    entryFee: "₹30 for Indians · ₹150 for foreign nationals · Guide: ₹150 extra",
    timeNeeded: "2 to 4 hours depending on trail chosen",
    howToReach: "12 km from Indore centre via Scheme 78 road. Auto or private vehicle. No public bus service to the gate.",
    tip: "Arrive at the gate at exactly 6 AM — the first hour after dawn is when deer are most active in clearings and birds are most vocal in the canopy. Hire a forest guide at the gate; they know exactly which clearings to visit and which trails have seen the most recent activity. Avoid weekends in December–January when picnicker crowds disturb wildlife patterns. Carry binoculars if you have them — they make a significant difference for the birds.",
  },
];

// ─────────────────────────────────────────────
//  Derived exports for easy consumption
// ─────────────────────────────────────────────

const indorePlaceTags = ["All", ...new Set(indorePlaces.map((place) => place.tag))];

const indorePlacesBySlug = indorePlaces.reduce((accumulator, place) => {
  accumulator[place.slug] = place;
  return accumulator;
}, {});

export { indorePlaces, indorePlaceTags, indorePlacesBySlug };
export default indorePlaces;