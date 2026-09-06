/*
 * TRY IT ON — STORY BANK
 *
 * This file contains the conversation content only.
 * You can add/edit stories here without touching the page UI.
 *
 * Every story variant includes several natural uses of {name},
 * since the purpose of this page is specifically to test how
 * a name feels when other people actually say it.
 */

const SLOTS = {
  drink: [
    "an oat milk latte",
    "a cold brew",
    "a matcha latte",
    "a chai latte",
    "an iced americano",
    "a hot chocolate"
  ],

  snack: [
    "a croissant",
    "a blueberry muffin",
    "a cinnamon roll",
    "a bagel with cream cheese",
    "a scone"
  ],

  dayLooking: [
    "Tuesday",
    "the weekend",
    "Wednesday",
    "Friday",
    "this morning"
  ],

  activity: [
    "trivia night",
    "a movie",
    "board games",
    "something outdoorsy",
    "brunch"
  ],

  stressor: [
    "work deadlines",
    "moving apartments",
    "wedding planning",
    "a big job hunt",
    "training for a race"
  ],

  newActivity: [
    "pottery",
    "rock climbing",
    "learning guitar",
    "running",
    "cooking classes"
  ],

  hobby: [
    "pottery",
    "trivia",
    "rock climbing",
    "running",
    "painting",
    "chess"
  ],

  hangout: [
    "coffee",
    "lunch",
    "dinner",
    "a walk",
    "a proper catch-up"
  ],

  newsItem: [
    "that new restaurant downtown",
    "Jamie’s big move",
    "the reunion everyone’s planning",
    "that show everyone’s binging",
    "the new place on Main Street"
  ],

  priorJob: [
    "marketing",
    "retail management",
    "freelance design",
    "customer support",
    "teaching"
  ],

  reasonForJob: [
    "the team culture",
    "the mission",
    "the flexibility",
    "the growth opportunities",
    "the people I met interviewing"
  ],

  officeHazard: [
    "the third-floor printer",
    "the coffee after 3pm",
    "reply-all emails",
    "the break room microwave",
    "the office playlist"
  ],

  chore: [
    "the dishes",
    "the laundry",
    "vacuuming",
    "the recycling",
    "the grocery shopping"
  ],

  chore2: [
    "walking the dog",
    "answering some emails",
    "a nap",
    "returning some calls",
    "finishing my coffee"
  ],

  timeSlot: [
    "on Friday",
    "Saturday night",
    "Sunday afternoon",
    "tonight",
    "this weekend"
  ],

  thirdParty: [
    "Jordan",
    "Alex",
    "Sam",
    "Priya",
    "Marcus"
  ],

  snackFood: [
    "pizza",
    "cookies",
    "chips",
    "ice cream",
    "cake"
  ],

  meetDay: [
    "Saturday",
    "Sunday",
    "Friday night",
    "tomorrow",
    "next weekend"
  ],

  meetTime: [
    "7",
    "6:30",
    "8ish",
    "5:45",
    "noon"
  ],

  weekday: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ],

  careerFocus: [
    "strategic",
    "creative",
    "hands-on",
    "collaborative",
    "leadership"
  ],

  trait: [
    "work well under pressure",
    "love solving problems",
    "pick things up quickly",
    "pay attention to detail",
    "work well with a team",
    "stay calm when things get hectic"
  ],

  growthArea: [
    "delegating more",
    "public speaking",
    "saying no to extra projects",
    "getting better at documentation",
    "not micromanaging myself"
  ],

  timeframe: [
    "six months",
    "the first year",
    "90 days",
    "the first quarter",
    "a year"
  ],

  successMetric: [
    "leading your own projects",
    "being fully ramped up with the team",
    "contributing to key decisions",
    "mentoring newer hires",
    "owning a full workstream"
  ],

  concernTopic: [
    "the team’s current workload",
    "how remote work is handled",
    "the timeline for this role",
    "the team structure",
    "growth opportunities here"
  ],

  field: [
    "marketing",
    "software",
    "teaching",
    "healthcare",
    "design",
    "finance"
  ],

  relative: [
    "your cousin",
    "your uncle",
    "your brother",
    "your aunt",
    "your grandma"
  ],

  occasion: [
    "the holidays",
    "Thanksgiving",
    "the family reunion",
    "my birthday",
    "the Fourth of July"
  ],

  dish: [
    "grilled salmon",
    "mushroom risotto",
    "veggie burger",
    "pad thai",
    "roasted chicken"
  ],

  weather: [
    "pouring rain",
    "a heat wave",
    "that weird windy weather",
    "the first really cold morning",
    "perfect sunny weather"
  ],

  place: [
    "the bookstore",
    "the park",
    "the museum",
    "the little café downtown",
    "the farmer’s market"
  ],

  object: [
    "a ridiculous mug",
    "a tiny plant",
    "an old camera",
    "a bright red jacket",
    "a completely unnecessary lamp"
  ],

  food: [
    "dumplings",
    "ramen",
    "tacos",
    "pancakes",
    "fresh bread"
  ],

  game: [
    "Codenames",
    "Mario Kart",
    "a card game",
    "charades",
    "a ridiculously complicated board game"
  ],

  errand: [
    "pick up a package",
    "return a shirt",
    "buy toothpaste",
    "get groceries",
    "drop something off"
  ],

  excuse: [
    "I missed the bus",
    "my phone died",
    "I took a wrong turn",
    "I got distracted by a dog",
    "I underestimated how far away it was"
  ],

  compliment: [
    "your jacket",
    "your haircut",
    "your shoes",
    "your taste in music",
    "your laugh"
  ],

  surprise: [
    "I got tickets",
    "I found the thing you were looking for",
    "I actually remembered your coffee order",
    "I brought snacks",
    "I have a ridiculous story"
  ],

  destination: [
    "the coast",
    "the mountains",
    "the next city over",
    "a tiny town nobody’s heard of",
    "somewhere with absolutely no itinerary"
  ],

  weatherPlan: [
    "go for a walk",
    "sit outside",
    "check out the market",
    "take the scenic route",
    "find somewhere with good coffee"
  ]
};


const scenarios = [

  /* ==========================================================
     COFFEE SHOP REGULAR
     ========================================================== */

  {
    context: "Coffee shop regular",

    variants: [

      [
        ["Barista", "Hey, {name}. You’re early."],
        ["You", "That sounds accusatory."],
        ["Barista", "I’m impressed. Usually you arrive exactly when the line gets terrible."],
        ["You", "I like to live dangerously."],
        ["Barista", "The usual?"],
        ["You", "Actually, surprise me. {drink} maybe?"],
        ["Barista", "Bold choice. And food?"],
        ["You", "I’m pretending I came here for the coffee, but yes, {snack}."],
        ["Barista", "Thank you for being honest."],
        ["You", "How’s your {weekday} going?"],
        ["Barista", "Ask me after I’ve made approximately twenty-seven more drinks."],
        ["You", "So that’s a no."],
        ["Barista", "That’s a strong maybe."],
        ["You", "Fair enough."],
        ["Barista", "Here you go, {name}. Try not to let {activity} ruin the rest of your day."],
        ["You", "No promises."],
        ["Barista", "I never get promises from you anyway."],
        ["You", "Yet you keep serving me."],
        ["Barista", "Occupational hazard."],
        ["You", "See you tomorrow, probably."],
        ["Barista", "I’ll see you then, {name}."]
      ],

      [
        ["Barista", "Morning, {name}. I have a question."],
        ["You", "That’s ominous."],
        ["Barista", "Why do you always stare at the menu like it personally offended you?"],
        ["You", "Because every morning I forget how coffee works."],
        ["Barista", "You’ve ordered the same thing for six months."],
        ["You", "That has never stopped me from considering my options."],
        ["Barista", "Fine. What are we considering?"],
        ["You", "{drink} and {snack}."],
        ["Barista", "A truly groundbreaking decision."],
        ["You", "Thank you for respecting my process."],
        ["Barista", "I’m trying."],
        ["You", "Anything exciting happen today?"],
        ["Barista", "Someone tried to order a cappuccino with no milk."],
        ["You", "How did you respond?"],
        ["Barista", "I stared at them until they reconsidered."],
        ["You", "Powerful."],
        ["Barista", "Anyway, here’s your coffee, {name}."],
        ["You", "You remembered."],
        ["Barista", "Of course I remembered, {name}."],
        ["You", "Okay, that’s actually very sweet."],
        ["Barista", "Don’t let it go to your head."]
      ],

      [
        ["Barista", "Hey, {name}. You look like you lost an argument with your alarm clock."],
        ["You", "I did. It was a decisive defeat."],
        ["Barista", "The coffee may be able to help."],
        ["You", "Please make that a legally binding statement."],
        ["Barista", "What’ll it be?"],
        ["You", "{drink}. And {snack}, because apparently I’m capable of planning ahead after all."],
        ["Barista", "I’m proud of you."],
        ["You", "Thank you. I’ve been working on myself."],
        ["Barista", "Huge day?"],
        ["You", "I’ve got {activity} later, and I’d like to arrive with at least one functional brain cell."],
        ["Barista", "Then we have a mission."],
        ["You", "We do."],
        ["Barista", "How much encouragement do you need, {name}?"],
        ["You", "A dangerous amount."],
        ["Barista", "Good. Here’s your order."],
        ["You", "You’re a lifesaver."],
        ["Barista", "Come back tomorrow and I’ll deny ever hearing that, {name}."],
        ["You", "Deal."]
      ]

    ]
  },


  /* ==========================================================
     OLD FRIEND
     ========================================================== */

  {
    context: "Catching up with an old friend",

    variants: [

      [
        ["Friend", "{name}! Oh my gosh, I haven’t seen you in forever."],
        ["You", "Hi! It has been way too long."],
        ["Friend", "Seriously, {name}, where have you even been?"],
        ["You", "Mostly dealing with {stressor}."],
        ["Friend", "Ah. So you chose chaos."],
        ["You", "Apparently."],
        ["Friend", "And you’re just telling me this now? Come on, {name}."],
        ["You", "I was going to tell you eventually."],
        ["Friend", "Sure you were."],
        ["You", "What about you? Are you still doing {hobby}?"],
        ["Friend", "Absolutely. Every week."],
        ["You", "I knew you’d stick with it."],
        ["Friend", "Unlike you, apparently. What is the new obsession?"],
        ["You", "{newActivity}."],
        ["Friend", "Of course. {name}, you collect hobbies like they’re Pokémon."],
        ["You", "That’s a terrible analogy."],
        ["Friend", "It’s a perfect analogy."],
        ["You", "Whatever you say."],
        ["Friend", "Seriously, though, I’ve missed this."],
        ["You", "Yeah. Me too."],
        ["Friend", "Let’s do {hangout} soon, okay, {name}?"],
        ["You", "Deal. And this time I actually mean it."]
      ],

      [
        ["Friend", "Wait. Is that actually you, {name}?"],
        ["You", "I have been asking myself the same question."],
        ["Friend", "You look exactly the same."],
        ["You", "That’s either a compliment or a threat."],
        ["Friend", "Definitely a compliment."],
        ["You", "I’ll take it."],
        ["Friend", "So what’s new, {name}?"],
        ["You", "I got really into {newActivity}. It happened by accident."],
        ["Friend", "Of course it did."],
        ["You", "What is that supposed to mean?"],
        ["Friend", "You collect hobbies the way other people collect mugs."],
        ["You", "That is a very unfair comparison."],
        ["Friend", "Is it?"],
        ["You", "Yes."],
        ["Friend", "Okay. What’s your current favorite?"],
        ["You", "{hobby}."],
        ["Friend", "Yep. Still predictable."],
        ["You", "And yet you missed me."],
        ["Friend", "Unfortunately, yes, {name}."],
        ["You", "I’ll take it."]
      ],

      [
        ["Friend", "{name}! I knew that was you."],
        ["You", "You recognized me from across the room?"],
        ["Friend", "Please. I could recognize that expression anywhere."],
        ["You", "What expression?"],
        ["Friend", "The one that says you’re pretending everything is under control."],
        ["You", "I am offended by how accurate that is."],
        ["Friend", "So what’s going on, {name}?"],
        ["You", "Honestly? Pretty good. I’ve been trying {newActivity} lately."],
        ["Friend", "You? Really?"],
        ["You", "That’s the reaction I was hoping for."],
        ["Friend", "No, I mean it suits you."],
        ["You", "I’ll take that."],
        ["Friend", "We have so much catching up to do."],
        ["You", "Start with the biggest piece of news."],
        ["Friend", "Fine. Did you hear about {newsItem}?"],
        ["You", "No!"],
        ["Friend", "Perfect. I have a story."],
        ["You", "Then I’m getting comfortable. Go."],
        ["Friend", "Glad you’re here, {name}."]
      ]

    ]
  },


  /* ==========================================================
     NEW JOB
     ========================================================== */

  {
    context: "First day at a new job",

    variants: [

      [
        ["Coworker", "You must be {name}. Welcome! I’m your unofficial tour guide."],
        ["You", "Unofficial? Should I be worried?"],
        ["Coworker", "Only about my sense of direction."],
        ["You", "Good start."],
        ["Coworker", "Coffee machine first. Everything else can wait."],
        ["You", "Finally, someone with priorities."],
        ["Coworker", "Where were you before this, {name}?"],
        ["You", "I was doing {priorJob}, then decided I needed a change."],
        ["Coworker", "And this place won you over?"],
        ["You", "Mostly {reasonForJob}."],
        ["Coworker", "Yeah, that got me too."],
        ["You", "I’m trying not to look too lost."],
        ["Coworker", "Don’t bother. Everyone looks lost on day one."],
        ["You", "That is strangely reassuring."],
        ["Coworker", "One more rule: never volunteer to fix {officeHazard}."],
        ["You", "Now I definitely want to know why."],
        ["Coworker", "Give it a week, {name}."],
        ["You", "Deal. I’ll ask you then."]
      ],

      [
        ["Coworker", "Morning! You’re {name}, right?"],
        ["You", "Yep. First day."],
        ["Coworker", "I know. You have the first-day look."],
        ["You", "Is it that obvious?"],
        ["Coworker", "Only because I had it last month."],
        ["You", "Excellent. At least I’m in good company."],
        ["Coworker", "Come on, I’ll show you your desk."],
        ["You", "Before I get lost?"],
        ["Coworker", "Exactly before you get lost."],
        ["You", "Thanks. So what’s the one thing I should know, {name}?"],
        ["Coworker", "The calendar is lying to you."],
        ["You", "That’s ominous."],
        ["Coworker", "If something says thirty minutes, assume an hour."],
        ["You", "Noted."],
        ["Coworker", "Also, lunch on {weekday}. We all go."],
        ["You", "That’s easy enough."],
        ["Coworker", "Great. You’re already learning, {name}."],
        ["You", "I think I can survive this place."]
      ],

      [
        ["Coworker", "Hey, {name}. I’m supposed to make sure you don’t wander into the wrong department."],
        ["You", "That sounds like useful supervision."],
        ["Coworker", "I’m excellent at preventing wandering."],
        ["You", "So where do I start?"],
        ["Coworker", "Tell me what you did before coming here."],
        ["You", "{priorJob}. A little different from this."],
        ["Coworker", "Different can be good."],
        ["You", "That’s what I’m hoping."],
        ["Coworker", "What sold you on the job, {name}?"],
        ["You", "The {reasonForJob}, mostly."],
        ["Coworker", "Good answer. You’ll hear that come up a lot."],
        ["You", "Any survival advice?"],
        ["Coworker", "Ask questions early. Pretending you understand only creates paperwork."],
        ["You", "Noted."],
        ["Coworker", "And stay away from {officeHazard}, {name}."],
        ["You", "You keep saying things like that without explanations."],
        ["Coworker", "It’s more fun this way."],
        ["You", "Okay. I already have questions."]
      ]

    ]
  },


  /* ==========================================================
     ROOMMATE
     ========================================================== */

  {
    context: "Living with a roommate",

    variants: [

      [
        ["Roommate", "{name}, did you eat my {snackFood}?"],
        ["You", "Define ‘eat.’"],
        ["Roommate", "That is the worst possible answer."],
        ["You", "Okay, yes. I did."],
        ["Roommate", "It had my name on it."],
        ["You", "In fairness, the handwriting was tiny."],
        ["Roommate", "You’re replacing it, {name}."],
        ["You", "Obviously."],
        ["Roommate", "And while you’re up, did you ever do {chore}?"],
        ["You", "I was going to."],
        ["Roommate", "When?"],
        ["You", "Eventually."],
        ["Roommate", "Your definition of eventually is terrifying."],
        ["You", "I’ll do it tonight."],
        ["Roommate", "Fine. Also, are we still doing {activity} {timeSlot}?"],
        ["You", "Yes. I actually remembered."],
        ["Roommate", "Miracles really are happening today, {name}."],
        ["You", "I contain multitudes."]
      ],

      [
        ["Roommate", "Why is there a bowl in the living room, {name}?"],
        ["You", "Long story."],
        ["Roommate", "I have time."],
        ["You", "I started {chore2}, got distracted, and somehow ended up here."],
        ["Roommate", "That’s not a story. That’s a cry for help."],
        ["You", "A very productive cry for help."],
        ["Roommate", "Did you at least buy {snackFood}?"],
        ["You", "No, but I can."],
        ["Roommate", "Good. Peace offering accepted."],
        ["You", "So we’re good?"],
        ["Roommate", "We’re good if you also promise to do {chore}, {name}."],
        ["You", "You’re really committed to the chore agenda."],
        ["Roommate", "Someone has to be."],
        ["You", "Fine. After {activity}."],
        ["Roommate", "We’re actually still doing that?"],
        ["You", "Absolutely."],
        ["Roommate", "Okay. Then I’ll let the bowl stay mysterious for now."],
        ["You", "Thank you for your trust."]
      ],

      [
        ["Roommate", "{name}, we’re out of coffee."],
        ["You", "That is catastrophic."],
        ["Roommate", "I know. I checked the cabinet twice."],
        ["You", "Okay. New plan: emergency coffee run."],
        ["Roommate", "I’m listening."],
        ["You", "We go now, get coffee, and pick up {snackFood}."],
        ["Roommate", "And then?"],
        ["You", "Then I come home and finally do {chore}."],
        ["Roommate", "You’re saying all the right words."],
        ["You", "You don’t believe me."],
        ["Roommate", "I have historical evidence, {name}."],
        ["You", "Fair."],
        ["Roommate", "What are we doing {timeSlot}, anyway?"],
        ["You", "{activity}, remember?"],
        ["Roommate", "Right. Invite the others?"],
        ["You", "Sure, but only if nobody expects me to be organized."],
        ["Roommate", "No promises, {name}."],
        ["You", "Then we’re ready."]
      ]

    ]
  },


  /* ==========================================================
     TEXT THREAD
     ========================================================== */

  {
    context: "A text thread",

    variants: [

      [
        ["Friend (text)", "hey {name} you doing anything {timeSlot}?"],
        ["You (text)", "depends why"],
        ["Friend (text)", "couple people are getting together for {activity}"],
        ["You (text)", "who’s going"],
        ["Friend (text)", "{thirdParty} lol"],
        ["You (text)", "oh no"],
        ["Friend (text)", "that bad?"],
        ["You (text)", "not bad. just statistically unpredictable"],
        ["Friend (text)", "you’re coming though, right {name}"],
        ["You (text)", "probably"],
        ["Friend (text)", "good because I’m bringing {snackFood}"],
        ["You (text)", "okay now I’m definitely coming"],
        ["Friend (text)", "knew that would work"],
        ["You (text)", "what time"],
        ["Friend (text)", "around {meetTime}"],
        ["You (text)", "and where"],
        ["Friend (text)", "I’ll send it"],
        ["You (text)", "deal. don’t let {thirdParty} choose the music"],
        ["Friend (text)", "no promises, {name}"]
      ],

      [
        ["Friend (text)", "urgent question, {name}"],
        ["You (text)", "what"],
        ["Friend (text)", "are you free {meetDay}"],
        ["You (text)", "maybe. why"],
        ["Friend (text)", "I need someone willing to commit to {activity}"],
        ["You (text)", "that sounds suspiciously like work"],
        ["Friend (text)", "it is not work"],
        ["You (text)", "then probably yes"],
        ["Friend (text)", "excellent"],
        ["You (text)", "who else"],
        ["Friend (text)", "{thirdParty} and a few others"],
        ["You (text)", "interesting lineup"],
        ["Friend (text)", "don’t overthink it, {name}"],
        ["You (text)", "too late"],
        ["Friend (text)", "bringing {snackFood} if that helps"],
        ["You (text)", "it does"],
        ["Friend (text)", "around {meetTime}?"],
        ["You (text)", "works. send details"],
        ["Friend (text)", "knew I could count on you, {name}"]
      ],

      [
        ["Friend (text)", "you around, {name}"],
        ["You (text)", "yeah what’s up"],
        ["Friend (text)", "I accidentally made plans"],
        ["You (text)", "how do you accidentally make plans"],
        ["Friend (text)", "long story"],
        ["You (text)", "continue"],
        ["Friend (text)", "anyway we’re doing {activity} {meetDay}"],
        ["You (text)", "we?"],
        ["Friend (text)", "you and me and whoever answers"],
        ["You (text)", "bold strategy"],
        ["Friend (text)", "you’re available though"],
        ["You (text)", "sadly"],
        ["Friend (text)", "great. {meetTime}?"],
        ["You (text)", "sure"],
        ["Friend (text)", "also I’m bringing {snackFood}"],
        ["You (text)", "now it feels official"],
        ["Friend (text)", "I knew food would win, {name}"],
        ["You (text)", "you know me too well"]
      ]

    ]
  },


  /* ==========================================================
     JOB INTERVIEW
     ========================================================== */

  {
    context: "A job interview",

    variants: [

      [
        ["Interviewer", "Thanks for coming in, {name}. How are you feeling?"],
        ["You", "A little nervous, but excited."],
        ["Interviewer", "That’s completely fair. Let’s start simple. Tell me about your background."],
        ["You", "I spent several years in {priorJob}, and lately I’ve wanted something more {careerFocus}."],
        ["Interviewer", "What drew you toward that change?"],
        ["You", "{reasonForJob}, mostly. I wanted work I could really care about."],
        ["Interviewer", "What do you think you bring to a team, {name}?"],
        ["You", "I {trait}."],
        ["Interviewer", "Can you give me an example?"],
        ["You", "Sure. There was one project where things went sideways, and I ended up..."],
        ["Interviewer", "That is exactly the sort of example I was looking for."],
        ["You", "Good."],
        ["Interviewer", "What are you still working on?"],
        ["You", "Probably {growthArea}. I’m getting better at it."],
        ["Interviewer", "That’s a thoughtful answer."],
        ["You", "Thank you."],
        ["Interviewer", "What would success look like after {timeframe}, {name}?"],
        ["You", "Being trusted with bigger pieces of the work and contributing without needing hand-holding."],
        ["Interviewer", "That sounds like a good goal."],
        ["You", "I’d like to think so."]
      ],

      [
        ["Interviewer", "Hi, {name}. Thanks for being here."],
        ["You", "Thanks for having me."],
        ["Interviewer", "I’ll skip the formal script. What interested you about this role?"],
        ["You", "The combination of the work itself and {reasonForJob}."],
        ["Interviewer", "What work have you done that feels most relevant, {name}?"],
        ["You", "I was in {priorJob}, where I learned how to {trait}."],
        ["Interviewer", "And what’s something you had to learn the hard way?"],
        ["You", "{growthArea}, definitely."],
        ["Interviewer", "That’s a common answer. What changed for you?"],
        ["You", "I stopped treating it like a weakness and started treating it like a skill I could practice."],
        ["Interviewer", "I like that framing."],
        ["You", "It took me a while to get there."],
        ["Interviewer", "Where would you hope to be after {timeframe}?"],
        ["You", "I’d like to be someone the team can rely on for difficult work."],
        ["Interviewer", "Good. Do you have questions for me?"],
        ["You", "Actually, yes. What does the team wish a new hire understood sooner?"],
        ["Interviewer", "Excellent question, {name}."],
        ["You", "I figured you’d know better than the job posting."]
      ],

      [
        ["Interviewer", "So, {name}, why should we hire you?"],
        ["You", "You’re starting with the easy question."],
        ["Interviewer", "I thought I’d make it interesting."],
        ["You", "Then I’ll give you the honest answer: I learn quickly, I care about doing things well, and I {trait}."],
        ["Interviewer", "Good. Tell me about a time you made a mistake."],
        ["You", "I underestimated how much coordination a project needed."],
        ["Interviewer", "What did you do?"],
        ["You", "I changed the plan, told everyone what happened, and fixed it."],
        ["Interviewer", "No hiding it?"],
        ["You", "That usually makes the problem worse."],
        ["Interviewer", "Fair."],
        ["You", "I’m much more careful about {growthArea} now, too."],
        ["Interviewer", "Why this company, {name}?"],
        ["You", "{reasonForJob} stood out to me."],
        ["Interviewer", "And what would make you successful here?"],
        ["You", "Clear expectations, room to take ownership, and a good team."],
        ["Interviewer", "That sounds promising, {name}."],
        ["You", "I’m glad to hear it."]
      ]

    ]
  },


  /* ==========================================================
     PARTY
     ========================================================== */

  {
    context: "Meeting someone at a party",

    variants: [

      [
        ["Someone new", "Hi. I don’t think we’ve met."],
        ["You", "I’m {name}. I don’t know many people here either."],
        ["Someone new", "Excellent. We can be confused together."],
        ["You", "Deal."],
        ["Someone new", "How do you know the host?"],
        ["You", "We used to work together. You?"],
        ["Someone new", "Friend of a friend, which apparently is enough to get invited."],
        ["You", "Sounds official."],
        ["Someone new", "So what do you do, {name}?"],
        ["You", "I’m in {field}. It keeps me busy."],
        ["Someone new", "And what do you do when you’re not busy?"],
        ["You", "Usually {hobby}."],
        ["Someone new", "Oh, actually? How did you get into that?"],
        ["You", "A friend dragged me into it once. I stayed."],
        ["Someone new", "That’s how all good hobbies happen."],
        ["You", "Maybe you should try it."],
        ["Someone new", "I might."],
        ["You", "Then I’ll expect a review."],
        ["Someone new", "I’ll remember that, {name}."]
      ],

      [
        ["Someone new", "You look like you know where the snacks are."],
        ["You", "That’s the nicest compliment I’ve gotten tonight."],
        ["Someone new", "I’m serious."],
        ["You", "Then yes. Kitchen, left side."],
        ["Someone new", "Thank you. I’m Taylor."],
        ["You", "I’m {name}."],
        ["Someone new", "Nice to meet you, {name}."],
        ["You", "You too."],
        ["Someone new", "How do you know everyone here?"],
        ["You", "I don’t. That’s the trick."],
        ["Someone new", "Good, so it’s not just me."],
        ["You", "Definitely not."],
        ["Someone new", "What keeps you occupied, {name}?"],
        ["You", "{field}, mostly, and {hobby} when I need an excuse to stop thinking about work."],
        ["Someone new", "That sounds useful."],
        ["You", "It is until I start thinking about it too much."],
        ["Someone new", "I like your system."],
        ["You", "You should borrow it."],
        ["Someone new", "I might, {name}."]
      ],

      [
        ["Someone new", "Mind if I stand here? I needed a break from the loud room."],
        ["You", "Please. I was doing the exact same thing."],
        ["Someone new", "Perfect."],
        ["You", "I’m {name}, by the way."],
        ["Someone new", "Nice to meet you."],
        ["You", "You too."],
        ["Someone new", "What brought you here, {name}?"],
        ["You", "The promise of knowing at least two people."],
        ["Someone new", "And how many do you know now?"],
        ["You", "Still two."],
        ["Someone new", "Same."],
        ["You", "We’re doing great."],
        ["Someone new", "So what are you into?"],
        ["You", "Lately? {hobby}."],
        ["Someone new", "I’ve always wanted to try that."],
        ["You", "There’s a place nearby. You should come sometime."],
        ["Someone new", "I’d actually like that."],
        ["You", "Then let’s not lose each other in this party."],
        ["Someone new", "I’ll find you, {name}."]
      ]

    ]
  },


  /* ==========================================================
     MOM
     ========================================================== */

  {
    context: "A weekend call with Mom",

    variants: [

      [
        ["Mom", "Hi, honey. How’s your weekend going?"],
        ["You", "Pretty good. I finally have a little breathing room."],
        ["Mom", "Good. What have you been up to, {name}?"],
        ["You", "Mostly {stressor}, unfortunately."],
        ["Mom", "That sounds exhausting."],
        ["You", "It is, but I’m managing."],
        ["Mom", "You’re always ‘managing.’ Have you done anything fun?"],
        ["You", "I actually started looking into {newActivity}."],
        ["Mom", "Really? Since when?"],
        ["You", "Since I decided I needed a hobby that wasn’t work."],
        ["Mom", "I approve."],
        ["You", "How are things at home?"],
        ["Mom", "Good. {relative} has apparently become obsessed with {hobby}."],
        ["You", "No way."],
        ["Mom", "I know. I never saw that coming."],
        ["You", "Me neither."],
        ["Mom", "Are you coming for {occasion}, {name}?"],
        ["You", "I am. I wouldn’t miss it."],
        ["Mom", "Good. I’ll hold you to that."]
      ],

      [
        ["Mom", "Hey, sweetie. Did I catch you at a bad time?"],
        ["You", "Nope. I was just deciding what to do with the rest of the day."],
        ["Mom", "Anything interesting, {name}?"],
        ["You", "Maybe {activity}. I haven’t decided."],
        ["Mom", "That sounds more fun than anything I’m doing."],
        ["You", "What are you doing?"],
        ["Mom", "Trying to organize the house while everyone else makes it worse."],
        ["You", "So, the usual."],
        ["Mom", "Exactly."],
        ["You", "How’s everybody?"],
        ["Mom", "Good. Your {relative} called earlier and told me all about {newActivity}."],
        ["You", "Of course they did."],
        ["Mom", "You two really do have that in common."],
        ["You", "Maybe that’s not a bad thing."],
        ["Mom", "No, it’s sweet."],
        ["You", "What are we doing for {occasion}?"],
        ["Mom", "Nothing huge. I just want everyone together."],
        ["You", "Then I’ll be there."],
        ["Mom", "That’s my {name}."]
      ],

      [
        ["Mom", "Hi, {name}. I was thinking about you."],
        ["You", "That’s nice. I was actually about to call."],
        ["Mom", "Then apparently we have good timing."],
        ["You", "How have you been?"],
        ["Mom", "Busy. There’s always something."],
        ["You", "What’s the something this week?"],
        ["Mom", "Getting ready for {occasion} and trying to keep everyone on schedule."],
        ["You", "How’s that working?"],
        ["Mom", "Badly."],
        ["You", "At least you’re honest."],
        ["Mom", "What about you, {name}?"],
        ["You", "I’m okay. I’ve been spending some time on {newActivity}."],
        ["Mom", "I like hearing you have something fun to do."],
        ["You", "Me too."],
        ["Mom", "Will you call before you make travel plans?"],
        ["You", "Of course."],
        ["Mom", "Good. I want to actually see you this time."],
        ["You", "You will. Promise."],
        ["Mom", "Okay, {name}. I’ll let you get back to your day."]
      ]

    ]
  },


  /* ==========================================================
     SPONTANEOUS AFTERNOON
     ========================================================== */

  {
    context: "A spontaneous afternoon out",

    variants: [

      [
        ["Friend", "So. I have an idea."],
        ["You", "That sentence has caused problems before."],
        ["Friend", "This one is good."],
        ["You", "Go on."],
        ["Friend", "We go to {place}, get {food}, and refuse to check the time."],
        ["You", "That is a very good idea."],
        ["Friend", "I knew you’d understand, {name}."],
        ["You", "What if we get bored?"],
        ["Friend", "Then we invent something to do."],
        ["You", "What if it starts raining?"],
        ["Friend", "Then we become people who enjoy rain."],
        ["You", "You’ve planned this impressively little."],
        ["Friend", "Exactly."],
        ["You", "Alright. I’m in."],
        ["Friend", "Excellent. Let’s go before either of us becomes sensible."],
        ["You", "Too late. I brought a jacket."],
        ["Friend", "Unbelievable."],
        ["You", "You underestimate me, {name}."],
        ["Friend", "I absolutely do not."]
      ],

      [
        ["Friend", "Do you have plans, {name}?"],
        ["You", "Not anymore."],
        ["Friend", "Perfect."],
        ["You", "Why does that sound like a trap?"],
        ["Friend", "Because I need you to accompany me on an extremely important mission."],
        ["You", "What kind?"],
        ["Friend", "We need to find the best {food} in town."],
        ["You", "You’re serious."],
        ["Friend", "Completely."],
        ["You", "Alright. I’ll help."],
        ["Friend", "Excellent."],
        ["You", "How many places are we trying?"],
        ["Friend", "As many as necessary."],
        ["You", "That is not a number."],
        ["Friend", "It is now."],
        ["You", "Okay, {name}. Lead on."],
        ["Friend", "That’s the spirit."],
        ["You", "And if we get lost?"],
        ["Friend", "We call it exploring."]
      ],

      [
        ["Friend", "{name}, put your shoes on."],
        ["You", "Excuse me?"],
        ["Friend", "We’re going somewhere."],
        ["You", "Where?"],
        ["Friend", "I refuse to tell you until we’re in the car."],
        ["You", "That sounds suspicious."],
        ["Friend", "It’s not suspicious. It’s mysterious."],
        ["You", "Those are dangerously close synonyms."],
        ["Friend", "Trust me, {name}."],
        ["You", "Fine. Give me one clue."],
        ["Friend", "There will be {food}."],
        ["You", "You could have led with that."],
        ["Friend", "I knew it would work."],
        ["You", "Okay, I’m coming."],
        ["Friend", "Excellent."],
        ["You", "Do I need anything?"],
        ["Friend", "A phone, shoes, and a willingness to make poor decisions."],
        ["You", "I was born ready."],
        ["Friend", "That’s why I called you, {name}."]
      ]

    ]
  },


  /* ==========================================================
     FIRST DATE
     ========================================================== */

  {
    context: "A surprisingly good first date",

    variants: [

      [
        ["Date", "Hi. You’re {name}, right?"],
        ["You", "Yep. And you must be the person I was hoping actually existed."],
        ["Date", "Okay, that’s a strong opening."],
        ["You", "I’m trying to set expectations early."],
        ["Date", "I respect it."],
        ["You", "How nervous are you?"],
        ["Date", "About a six out of ten."],
        ["You", "That low?"],
        ["Date", "It was an eight until you made me laugh."],
        ["You", "I’ll take that as a win."],
        ["Date", "So what’s something I wouldn’t guess from your profile, {name}?"],
        ["You", "I’m weirdly competitive about {hobby}."],
        ["Date", "That is incredibly specific."],
        ["You", "I know."],
        ["Date", "I’m going to need evidence eventually."],
        ["You", "Eventually can be arranged."],
        ["Date", "Good. I like where this is going."],
        ["You", "Me too."],
        ["Date", "I’m glad I met you, {name}."]
      ],

      [
        ["Date", "I almost walked past you."],
        ["You", "Why? Do I not look like my pictures?"],
        ["Date", "No, you do. I just expected you to look more nervous."],
        ["You", "Oh, I’m nervous. I’m just hiding it professionally."],
        ["Date", "Impressive."],
        ["You", "Thank you."],
        ["Date", "What do you normally do on a weekend, {name}?"],
        ["You", "Usually {activity}, or convincing myself I’m going to be productive."],
        ["Date", "How often does the productivity happen?"],
        ["You", "I’d rather not disclose that."],
        ["Date", "Fair enough."],
        ["You", "What about you?"],
        ["Date", "I’m trying to get into {newActivity}."],
        ["You", "You’ll have to tell me how that goes."],
        ["Date", "I could tell you now."],
        ["You", "Now?"],
        ["Date", "If we get coffee again."],
        ["You", "I think I can make time for that, {name}."],
        ["Date", "Good answer."]
      ],

      [
        ["Date", "Okay, {name}, honest question."],
        ["You", "That sounds dangerous."],
        ["Date", "What’s the weirdest hobby you’ve ever had?"],
        ["You", "That depends on what you consider weird."],
        ["Date", "Excellent. We’re off to a good start."],
        ["You", "I knew I liked you."],
        ["Date", "Careful, {name}. It’s only been ten minutes."],
        ["You", "Too late."],
        ["Date", "Fine. Your answer?"],
        ["You", "Probably {hobby}."],
        ["Date", "That’s honestly kind of adorable."],
        ["You", "Adorable? I’ll take it."],
        ["Date", "What about you?"],
        ["You", "I once got very invested in {newActivity}."],
        ["Date", "You two might actually get along."],
        ["You", "Who?"],
        ["Date", "You and my terrible decision-making."],
        ["You", "Okay, {name}, I think this is going pretty well."],
        ["Date", "I think so too."]
      ]

    ]
  },


  /* ==========================================================
     ROAD TRIP
     ========================================================== */

  {
    context: "Planning a tiny road trip",

    variants: [

      [
        ["Friend", "Okay, important question: how much luggage are you bringing?"],
        ["You", "Define luggage."],
        ["Friend", "That answer scares me."],
        ["You", "I’m a light packer."],
        ["Friend", "You once brought three jackets for an overnight trip."],
        ["You", "There were different climates."],
        ["Friend", "It was one state over."],
        ["You", "Details."],
        ["Friend", "We’re driving to {destination}."],
        ["You", "Nice."],
        ["Friend", "And I want no itinerary."],
        ["You", "Now that is dangerous."],
        ["Friend", "We stop when we see something interesting."],
        ["You", "I love that."],
        ["Friend", "I knew you would, {name}."],
        ["You", "What’s the one rule?"],
        ["Friend", "No complaining about the playlist."],
        ["You", "I can’t promise that."],
        ["Friend", "Then we’re doomed, {name}."]
      ],

      [
        ["Friend", "I made the plan."],
        ["You", "That sentence is either comforting or terrifying."],
        ["Friend", "Comforting."],
        ["You", "Explain."],
        ["Friend", "We’re leaving Saturday morning, getting {food}, and ending up in {destination}."],
        ["You", "And the rest?"],
        ["Friend", "We’ll figure it out."],
        ["You", "You actually planned nothing."],
        ["Friend", "I planned the important part."],
        ["You", "The food?"],
        ["Friend", "Exactly."],
        ["You", "You know what? I’m convinced."],
        ["Friend", "Excellent."],
        ["You", "Can I control the music sometimes?"],
        ["Friend", "Absolutely not."],
        ["You", "Then I withdraw my support."],
        ["Friend", "Too late, {name}. You’re coming."],
        ["You", "Fine. I’m coming."],
        ["Friend", "Good. I knew I could count on you."]
      ],

      [
        ["Friend", "{name}, pack a bag."],
        ["You", "For what?"],
        ["Friend", "Road trip."],
        ["You", "That is not enough information."],
        ["Friend", "We’re going to {destination}."],
        ["You", "How long?"],
        ["Friend", "Long enough to get sick of my playlist."],
        ["You", "That sounds dangerous."],
        ["Friend", "You volunteered to ride with me, {name}."],
        ["You", "I was not properly informed."],
        ["Friend", "There’s also going to be {food}."],
        ["You", "Now I’m listening."],
        ["Friend", "I knew that would get you."],
        ["You", "Where are we staying?"],
        ["Friend", "We’ll figure it out."],
        ["You", "You are terrifyingly relaxed about this."],
        ["Friend", "And yet you’re still coming."],
        ["You", "Unfortunately, yes."],
        ["Friend", "Excellent. See you Saturday, {name}."]
      ]

    ]
  },


  /* ==========================================================
     FAMILY DINNER
     ========================================================== */

  {
    context: "An unexpectedly chaotic family dinner",

    variants: [

      [
        ["Relative", "{name}, you’re late."],
        ["You", "I’m not late. Dinner is early."],
        ["Relative", "That is not how time works."],
        ["You", "It is in this family."],
        ["Relative", "Come help me with the table."],
        ["You", "What happened to everyone else?"],
        ["Relative", "Someone forgot the bread, someone is arguing about music, and your {relative} is telling the same story again."],
        ["You", "Ah. So everything is normal."],
        ["Relative", "Exactly."],
        ["You", "What are we eating, {name}?"],
        ["Relative", "{dish}."],
        ["You", "Okay, suddenly this is worth being here for."],
        ["Relative", "Be nice."],
        ["You", "I am being nice."],
        ["Relative", "You called the seating arrangement ‘political.’"],
        ["You", "Because it is."],
        ["Relative", "Just sit down, {name}."],
        ["You", "Fine."],
        ["Relative", "And no starting arguments."],
        ["You", "I make no promises."]
      ],

      [
        ["Relative", "You made it, {name}!"],
        ["You", "Barely."],
        ["Relative", "What happened?"],
        ["You", "Long story."],
        ["Relative", "Give me the short version."],
        ["You", "{excuse}."],
        ["Relative", "That sounds exactly like something you would do."],
        ["You", "Thank you."],
        ["Relative", "That was not a compliment."],
        ["You", "I’m choosing to hear it as one."],
        ["Relative", "Come on, dinner’s ready."],
        ["You", "What did you make?"],
        ["Relative", "{dish}."],
        ["You", "Okay, now I’m glad I came."],
        ["Relative", "We were going to eat without you."],
        ["You", "Heartless."],
        ["Relative", "Hungry."],
        ["You", "Fair."],
        ["Relative", "Come sit down, {name}."]
      ],

      [
        ["Relative", "There you are, {name}. We were starting without you."],
        ["You", "I was only ten minutes late."],
        ["Relative", "In family time, that’s practically tomorrow."],
        ["You", "I’ll remember that."],
        ["Relative", "Good. Help me carry this."],
        ["You", "What is it?"],
        ["Relative", "{dish}."],
        ["You", "Oh. Suddenly I regret nothing."],
        ["Relative", "You’re impossible."],
        ["You", "You invited me."],
        ["Relative", "I did."],
        ["You", "Then this is partly your fault."],
        ["Relative", "Fair point."],
        ["You", "So who started the argument?"],
        ["Relative", "Your {relative}."],
        ["You", "Of course."],
        ["Relative", "And please don’t encourage them, {name}."],
        ["You", "I’m innocent."],
        ["Relative", "That remains to be seen."]
      ]

    ]
  },


  /* ==========================================================
     NEW TEAM
     ========================================================== */

  {
    context: "First day on a new team",

    variants: [

      [
        ["Coworker", "You must be {name}. Welcome."],
        ["You", "Thanks. I’m still trying to figure out where everything is."],
        ["Coworker", "That takes about a month."],
        ["You", "Good. I have time."],
        ["Coworker", "Coffee’s over there. Snacks are hidden in the cabinet nobody labels."],
        ["You", "Important information."],
        ["Coworker", "You were doing {priorJob} before this, right?"],
        ["You", "Yep. I wanted something more {careerFocus}."],
        ["Coworker", "Then you picked an interesting place."],
        ["You", "Interesting good or interesting concerning?"],
        ["Coworker", "Ask me after you’ve met the calendar."],
        ["You", "The calendar?"],
        ["Coworker", "You’ll see."],
        ["You", "That is not reassuring."],
        ["Coworker", "You’ll be fine, {name}."],
        ["You", "I’m choosing to believe you."],
        ["Coworker", "Excellent. You’re already adapting, {name}."]
      ],

      [
        ["Coworker", "Hey, {name}. I’m supposed to show you around."],
        ["You", "Perfect. I have approximately twelve questions."],
        ["Coworker", "Good. Save the other twelve for tomorrow."],
        ["You", "I like your optimism."],
        ["Coworker", "Where were you before this?"],
        ["You", "{priorJob}."],
        ["Coworker", "And why leave?"],
        ["You", "Mostly {reasonForJob}."],
        ["Coworker", "Fair."],
        ["You", "Any rules I should know, {name}?"],
        ["Coworker", "Never touch {officeHazard}."],
        ["You", "You’re the second person to say that."],
        ["Coworker", "Then listen to the second person."],
        ["You", "Noted."],
        ["Coworker", "And come to the team lunch on {weekday}."],
        ["You", "That one I can handle."],
        ["Coworker", "Great. You’re officially one of us, {name}."]
      ],

      [
        ["Coworker", "Morning, {name}. Welcome to the team."],
        ["You", "Thanks. I’m excited."],
        ["Coworker", "Good. Excited is useful."],
        ["You", "What should I know first?"],
        ["Coworker", "Nobody understands the printer."],
        ["You", "That seems universal."],
        ["Coworker", "Correct."],
        ["You", "And after that?"],
        ["Coworker", "The people here are great. The calendar is not."],
        ["You", "I’m sensing a theme."],
        ["Coworker", "You catch on fast, {name}."],
        ["You", "I try."],
        ["Coworker", "What were you doing before this?"],
        ["You", "{priorJob}."],
        ["Coworker", "Nice. That’ll probably help."],
        ["You", "Hopefully."],
        ["Coworker", "You’ll be fine, {name}."],
        ["You", "That’s what I keep hearing."],
        ["Coworker", "Because it’s true."]
      ]

    ]
  }

];
