import { MemeTemplate } from "./schema";
import Image from "next/image";

const memeTemplates: MemeTemplate[] = [
  {
    name: "drakeposting",
    description: `
    One of the most popular memes on the Internet, this template shows Drake first leaning to the side expressing distaste for a certain thing, then in the bottom panel, expressing more like for a similar but better thing. In the top panel (text_1), Drake says "no" to something he dislikes, but in the bottom panel (text_2), Drake says "yes" to something he likes. You should use the Drake meme maker to show a similar but subtly clear comparison between two things. 
  
    # Example
    text_1: Use study guides
    text_2: Don't study 
    `,
    arguments: [
      {
        fieldName: "text_1",
        description: "something drake says 'no' to, something he dislikes",
      },
      {
        fieldName: "text_2",
        description: "something drake says 'yes' to, something he likes",
      },
    ],
    render: ({ text_1, text_2 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/drakeposting.jpg" />
        <div className="absolute left-4">{text_1}</div>
        <div className="absolute left-11">{text_2}</div>
      </div>
    ),
  },
  {
    name: "persian_cat_room_guardian",
    description:
      "The Persian Cat Room Guardian meme features an image of a wide-eyed, fluffy Persian cat sitting in an odd, human-like posture on a chair, which originally comes from a deviantART user's post. The image gained popularity due to the cat's almost surreal, anthropomorphic pose and expression, which people found amusing and somewhat unsettling. It is commonly used to react to surprising or disapproving situations, embodying a sense of oddity and judgment. The humor lies in the juxtaposition of a cat displaying almost human-like emotions and reactions, particularly those of surprise, skepticism, or disapproval. This meme taps into the internet's love for cats and the universal appeal of anthropomorphizing animals, thus making it versatile for a variety of contexts, often to express reactions that words alone cannot fully convey.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/persian_cat_room_guardian.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "cats_can_have_a_little_salami",
    description:
      'The "Cats Can Have a Little Salami" meme humorously addresses the obsession people have with feeding pets human food, alongside the tendency to anthropomorphize pets\' desires. Originating from a tweet joking about giving cats "a little salami" as a treat, the phrase caught on for its quirky mix of specificity and the seemingly arbitrary nature of salami as the chosen treat. The humor lies in the solemn seriousness applied to such a trivial topic, reflecting a larger comedic theme of elevating mundane, everyday decisions to matters of grave importance. It playfully taps into pet owners\' universal experiences and dilemmas regarding pet diets and the humanization of those decisions. This meme has become a versatile template for discussing permissible indulgences in various contexts, often highlighting the absurdity of minor indulgences in life with exaggerated significance.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image
          width="800"
          height="500"
          src="/cats_can_have_a_little_salami.jpg"
        />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "smudge_the_cat",
    description:
      '"Smudge the Cat" refers to an image of a white cat sitting at a dinner table in front of a plate of vegetables with a confused or disgusted expression. This image became widely known as the reaction image for various situations where someone is presented with something they dislike or disapprove of. The meme gained immense popularity when it was combined with a photograph of two women seemingly yelling and pointing at the cat, creating a humorous scene often used to represent arguments or confrontational situations. The humor in "Smudge the Cat" memes comes from the juxtaposition of a cat being treated as a human dinner guest and its human-like expression of disdain, reflecting absurd or relatable scenarios in a comedic light. This meme is widely adaptable, making it perfect for depicting a variety of scenarios where someone feels out of place or in disagreement.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/smudge_the_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "ouhhh_husbant_now_we_are_homeress",
    description:
      'The meme "Ouhhh Husbant, Now We Are Homeress" humorously plays on a misspelling of the words "husband" and "homeless". It features an exaggerated or incorrect reaction to a minor setback or mistake, usually made by one\'s partner, depicted in various image macro formats. The humorous aspect lies in the overreaction to situations that are not typically disastrous, embodying a playful critique on how some people may dramatically respond to small issues in relationships or daily life. Its humor also stems from the intentional misspellings, which add a layer of silliness and exaggeration. This meme is versatile and can be adapted to a wide range of scenarios, making it relatable to different contexts while poking fun at the tendency to over-dramatize minor inconveniences.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image
          width="800"
          height="500"
          src="/ouhhh_husbant_now_we_are_homeress.jpg"
        />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "wawa_cat_oh_the_misery_cat",
    description:
      'The "Wawa Cat" or "Oh the Misery Cat" meme features an image of a white cat with a seemingly distressed or miserable facial expression, often accompanied by captions that humorously exaggerate sadness, discomfort, or existential dread. Originating from a picture posted on Twitter in 2018, this meme gained attention for its expressive portrayal of over-the-top despair, making it a favorite for conveying moments of melodramatic sorrow or misfortune in a comedic light. Its humor lies in the contrast between the cat\'s exaggerated miserable face and the often trivial or hyperbolic situations described in the captions, poking fun at human tendencies to overreact or wallow in self-pity.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/wawa_cat_oh_the_misery_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "its_over",
    description:
      'The "It\'s Over" meme typically features a still or an image from a scene followed by the phrase "It\'s Over" to signify a drastic, often humorous, conclusion to a situation. The humor in this meme comes from its dramatic nature, exaggerating the finality of often trivial or mundane situations. Its versatility allows users to apply it to all sorts of contexts, from the end of a relationship to the completion of a difficult video game level, thereby amplifying the comedic effect by likening these situations to the end of a significant era or event. The meme taps into a common human experience of overreaction, making it relatable and funny. Its adaptability to a wide range of scenarios also contributes to its popularity within internet culture, where it serves as a witty commentary on the closure of any event, big or small.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/its_over.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "ronaldo_sipping_drinking",
    description:
      "The \"Ronaldo Sipping/Drinking\" meme originates from a photo of the famous Portuguese footballer Cristiano Ronaldo making a skeptical facial expression while sipping from a small cup. This image captured the internet's imagination due to Ronaldo's seemingly unimpressed or judgmental look, which made it universally applicable to scenarios where one is dubiously assessing a situation, person, or claim. Humor in this meme stems from juxtaposing Ronaldo's skeptical demeanor with everyday situations or outlandish statements that merit doubt or criticism, thereby amplifying the ridiculousness of what's being assessed. The meme's versatility allows it to be humorously applied to a wide range of contexts, from poking fun at unbelievable stories shared on social media to expressing personal skepticism about popular trends or news items. It showcases Ronaldo's cultural influence beyond the soccer field, leveraging his public persona for comedic effect.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/ronaldo_sipping_drinking.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "the_rocks_eyebrow_raise",
    description:
      '"The Rock\'s Eyebrow Raise" is a meme inspired by Dwayne "The Rock" Johnson, an iconic wrestler and actor known for his signature move, raising one eyebrow, often referred to as "The People\'s Eyebrow." This gesture, which he frequently used during his wrestling days to express skepticism, disbelief, or challenge, has become a popular meme format. It\'s used across the internet to convey a similar range of emotions, particularly disbelief or doubt, in a humorous or exaggerated manner. The humor lies in applying this exaggerated, dramatic gesture to mundane or absurd situations, magnifying their perceived silliness or incredulity. This meme captures the essence of The Rock\'s larger-than-life persona, making it adaptable to various contexts where an over-the-top reaction is comedically appropriate.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/the_rocks_eyebrow_raise.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "duck_chick_with_knife",
    description:
      'The "Duck/Chick with Knife" meme features an image of a small duckling or chick holding a knife. This juxtaposition of an adorable, innocent creature wielding a potentially dangerous object creates an amusing contrast. The comedic essence of this meme lies in this stark incongruity, evoking a sense of absurdity and unexpectedness. Typically, this image is used to humorously convey a threat, defiance, or an overreaction to a minor problem, encapsulating a "cute but dangerous" vibe. The humorous impact is heightened by the viewer\'s awareness that the animal is, in reality, harmless and the situation is purely fictional. This meme is versatile and can be adapted to various contexts where the idea of posing an exaggerated or cute threat is relevant, making it a favorite for expressing playful defiance or mock aggression in internet culture.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/duck_chick_with_knife.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "limmy_waking_up",
    description:
      'The "Limmy Waking Up" meme originates from a segment of "Limmy\'s Show," a Scottish sketch comedy series. It features comedian Brian Limond, known as Limmy, waking up suddenly in bed with a concerned expression, often captioned with texts expressing sudden realization or panic about mundane or absurd concerns typically forgotten until the moment of waking. The humor in this meme comes from the exaggerated portrayal of waking up from sleep panicked about seemingly trivial matters, tapping into the universal experience of remembering something important at the last minute. Its versatility lies in its ability to be adapted to various contexts and personal anxieties, making it relatable and humorous across different audiences. The meme captures the comically exaggerated essence of stress and overreaction to everyday situations.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/limmy_waking_up.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "sweaty_speedrunner",
    description:
      'The "Sweaty Speedrunner" meme captures an image from a video of a "speedrunner" (a gamer who completes games as quickly as possible) appearing extremely focused and sweaty during their attempt. This image is humorously used to illustrate intense concentration or the feeling of being under pressure in non-gaming contexts, as well as in gaming circles where achieving a personal best or breaking a world record requires extreme dedication. The humor comes from the exaggerated portrayal of stress and effort, often applied to mundane or trivial tasks with the implication that they require the same level of intense focus as a challenging video game. This meme resonates with both the gaming community for its authentic representation of the speedrunning culture and with a wider audience for its exaggeration of everyday efforts.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/sweaty_speedrunner.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "crying_wojak",
    description:
      'The "Crying Wojak" meme features a cartoonish illustration of a man crying intensely. Originally emerging from the Wojak or "Feels Guy" meme, this particular version illustrates deep sadness or emotional distress, often used to exaggerate a reaction to minor inconveniences or to mock self-pity. Its humor comes from the stark contrast between the magnitude of the depicted emotional response and the triviality of the situation that supposedly caused it. In various contexts, "Crying Wojak" represents overreaction, melodrama, or sincere sadness, making it a versatile tool for expressing mock sorrow or genuine upset. Its widespread relatability and exaggeration of the feeling of despair contribute to its humorous impact, especially when used to overstate minor frustrations in a hyperbolic manner.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/crying_wojak.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "will_you_shut_up_man__2",
    description:
      "The meme \"Will You Shut Up, Man\" originates from the first presidential debate between Donald Trump and Joe Biden on September 29, 2020. During the debate, Biden uttered this phrase in response to Trump's constant interruptions, which became an instant highlight. The phrase symbolizes exasperation and the desire to silence incessant or unproductive noise, resonating with a wide audience who have experienced similar frustrations in various contexts. Humorously, it's used online to react to annoying comments or to criticize someone's incessant, often irrelevant talk. It’s versatility in expressing frustration humorously has made it a popular meme across social media platforms, where it’s used both in political discussions and everyday annoyances, showing its adaptability beyond its political origins.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/will_you_shut_up_man__2.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "bonk_cheems",
    description:
      'The "Bonk" meme, featuring Cheems (a character based on the doge meme, which showcases a Shiba Inu dog with a distinctive speech pattern), humorously visualizes the act of being metaphorically "bonked" on the head in response to horny or inappropriate thoughts. Cheems is often depicted wearing a doge face, sometimes edited to wear a helmet, getting hit by a stick or hammer with the caption "Bonk." This meme is used widely in online communities to humorously reprimand those expressing sexual frustration or lustful thoughts, suggesting they need to be brought back to their senses. It encapsulates humor through the exaggerated and playful punishment for common, mostly harmless, human impulses, leveraging the juxtaposition of a cute meme character and the act of being bonked to highlight overreactions to natural feelings. This meme thrives on its relatability and the light-hearted way it addresses and visualizes thoughts considered taboo or embarrassing.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/bonk_cheems.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "catjam_vibing_cat",
    description:
      'The "CatJam" or "Vibing Cat" meme features a white cat bobbing its head rhythmically as if deeply enjoying music, usually accompanied by electronic or upbeat music. This meme became popular due to its humorous portrayal of carefree enjoyment and has been widely used to signify being in a good mood, getting into the groove of a catchy tune, or vibing without a care in the world. It has been edited into various videos and GIFs, where the cat appears to jam out to different songs, showcasing its versatility and appeal across different contexts. The amusing image of the cat passionately moving to music resonates with people\'s desire to find joy in simple pleasures, making this meme a go-to representation of having a good time and fully immersing oneself in music.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/catjam_vibing_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "thumbs_up_crying_cat",
    description:
      'The "Thumbs Up Crying Cat" meme features an image of a cat with a photoshopped teary-eyed expression, giving a thumbs up. This meme is used to convey a blend of approval or acceptance while simultaneously showing sadness, disappointment, or resignation. The juxtaposition of the cat\'s thumbs up gesture with its sorrowful expression humorously captures the complex emotion of begrudgingly going along with something or putting on a brave face in less-than-ideal situations. This meme has gained popularity for its ability to encapsulate feelings of trying to stay positive or keep morale high in the face of adversity, often used online to react to personal setbacks or to comment on relatable, slightly tragic situations with a mix of humor and stoicism.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/thumbs_up_crying_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "mother_ignoring_kid_drowning_in_a_pool",
    description:
      'The "Mother Ignoring Kid Drowning in a Pool" meme is a darkly comedic image macro that juxtaposes a photo of a woman on her phone, seemingly oblivious, with a child appearing to struggle in the background of a swimming pool. Originating from a stock photo, this meme reflects scenarios where individuals are so engrossed in their phones or personal interests that they overlook urgent situations around them. It humorously exaggerates the idea of neglecting important responsibilities or missing critical events due to distraction, typically used online to mock situations where people\'s priorities are questionably placed. The meme thrives on the contrast between the calm demeanor of the person on the phone and the implied urgency or distress of the background situation, thus highlighting the absurdity of being disconnected from immediate surroundings.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image
          width="800"
          height="500"
          src="/mother_ignoring_kid_drowning_in_a_pool.jpg"
        />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "joe_rogan_daniel_cormier",
    description:
      "The meme featuring Joe Rogan, Daniel Cormier, and Jon Anik reacting during UFC 248 captures a moment of intense shock and awe. Originating from a March 2020 Ultimate Fighting Championship event, this image shows the commentators' exaggerated facial expressions in response to a particularly surprising moment in a fight. Their wide eyes, open mouths, and overall body language communicate a profound and unexpected turn of events, making it a perfect template for expressing over-the-top reactions to incredible or shocking information in various contexts. Its humor lies in the hyperbolic representation of being surprised or amazed, allowing users to apply it to everyday situations that are, in reality, far less dramatic, thus exaggerating their own responses humorously. It encapsulates the feeling of being so emotionally invested in something that one can't help but react in an exaggerated manner, making it versatile for internet humor across different scenarios.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image
          width="800"
          height="500"
          src="/joe_rogan_daniel_cormier_and_jon_anik_ufc_248_reaction.jpg"
        />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "what_the_hell_happened_here",
    description:
      'The meme "What the Hell Happened Here?" originates from a scene in the Marvel Cinematic Universe movie "Avengers: Age of Ultron." In this scene, the character Bruce Banner, portrayed by Mark Ruffalo, examines a wrecked ship and, puzzled by the destruction, utters the line "What the hell happened here?" This meme is commonly used online to express confusion or disbelief towards chaotic, unexpected, or bizarre situations. It humorously underscores the shock or incredulity someone might feel upon encountering something drastically awry, emphasizing the drastic deviation from normalcy or expectation. Its versatile nature allows it to be applied to various scenarios, from everyday mishaps to broader societal or cultural events, encapsulating a mix of bewilderment and curiosity in one catchphrase.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image
          width="800"
          height="500"
          src="/what_the_hell_happened_here.jpg"
        />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "oof_stones",
    description:
      'The "Oof Stones" meme is inspired by the visual of six small, round stones, each with the letter "O", "O", "F" respectively, laid out to spell "OOO FFF" when combined. This setup humorously emulates the popular online expression "oof," which is used to signify discomfort, surprise, or acknowledging a mistake, often in a comedic or light-hearted manner. The juxtaposition of these ancient-looking stones with a modern internet slang term creates a humorous contrast, invoking laughter by placing a typically digital reaction into a physical, almost archaic context. This meme showcases the versatility of internet language and humor, as it applies current expressions to unexpected or historical scenarios, making it a playful commentary on the ubiquity and timelessness of human reactions to adversity.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/oof_stones.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "crying_cat",
    description:
      'The "Crying Cat" meme features a photoshopped image of a cat looking very saddened, with glassy, teary eyes that give the impression it\'s about to cry. The image is a play on the classic "sad cat" meme but exaggerated to evoke stronger emotional empathy or humor through its overly dramatic expression. This meme is often used to overemphasize sorrow or sadness in a situation, sometimes in trivial or comically exaggerated contexts, which is where the humor lies. It plays on the internet\'s love of cats and the human tendency to anthropomorphize animals, attaching deep emotional significance to their expressions. It\'s versatile, being applicable to both genuinely disappointing situations and more light-hearted, relatable frustrations, thus capturing a wide range of emotional resonance within internet culture.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/crying_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "arthurs_fist",
    description:
      'The "Arthur\'s Fist" meme originates from a scene in the children\'s show "Arthur," where the main character, Arthur Read, is seen clenching his fist in frustration. This image has become symbolic of mild irritation or suppressed anger. Unlike many memes that might be loud or overt, Arthur\'s fist encapsulates a quiet, relatable moment of vexation, making it versatile for expressing annoyance or dissatisfaction in various contexts. Its humor lies in its universality—almost everyone can relate to the feeling of having to hold back frustration in a calm manner, making its application to mundane or trivial problems particularly comedic. This meme is often used to humorously highlight overreactions to minor inconveniences.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/arthurs_fist.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "feels_good",
    description:
      'The "Feels Good" meme, also known as "Feels Good Man," originates from a comic strip by artist Matt Furie called "Boys Club." It features Pepe the Frog, a character who became widely recognized in internet culture. In the particular panel that sparked the meme, Pepe is seen urinating with his pants pulled all the way down to his ankles. When questioned about his peculiar method of urination, Pepe simply responds, "Feels good man." \n\nThis meme is emblematic of personal satisfaction or pleasure in the face of unconventional or odd behaviors, often used to express a sense of contentment or to highlight absurdly positive reactions in various contexts. Its humor lies in its relatability—everyone has their unique quirks that make them happy, no matter how strange they may seem to others. Over time, "Feels Good Man" has been adapted into various iterations to express a range of emotions, from genuine happiness to ironic or sarcastic delight.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/feels_good.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "awkward_look_monkey_puppet",
    description:
      "The Awkward Look Monkey Puppet features a monkey toy turning its head to face the camera, then looking uneasily to the side with wide eyes. Originating from a Spanish children's show, this image became a popular reaction meme to express discomfort, awkwardness, or embarrassment in response to someone else's actions or a situation. Its humor lies in the exaggerated and human-like expression of unease and hesitancy shown by the puppet, making it relatable for moments when one finds themselves in a tight spot or when acknowledging something awkward without wanting to address it directly. The meme is versatile and used in various contexts online where people want to highlight a sense of awkward tension or an uncomfortable acknowledgment without spelling it out.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/awkward_look_monkey_puppet.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "dimitri_finds_out",
    description:
      'The "Dimitri Finds Out" meme consists of a series of videos in which the character Dimitri reacts with intense joy upon hearing unexpected good news. The format originates from a viral video where people trick a man into believing he has won the lottery, capturing his unbridled joy upon receiving the false news. Memes featuring Dimitri typically follow a template where the first part of the text sets up a scenario, and the punchline, coinciding with Dimitri\'s elated reaction, reveals an unexpectedly positive outcome or twist. This meme humorously exaggerates reactions to everyday victories or surprise positive events, making it versatile for various contexts. Its humor lies in the dramatic escalation from mundane or negative setups to excessively joyful conclusions, playing on the human tendency to find exaggerated contrasts amusing.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/dimitri_finds_out.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "elmo_rise",
    description:
      '"Elmo Rise," also known as "Hellmo," is a meme featuring an image of the Muppet character Elmo from the children\'s television show "Sesame Street" against a background of flames. The image shows Elmo with a menacing look, hands raised, as if controlling or reveling in the fiery chaos. This meme originated from a "Tickle Me Elmo" toy placed on a wooden stake in front of a fire, taken during a protest in 2012. It quickly gained popularity for its stark contrast between Elmo\'s usually innocent and joyful character and the apocalyptic setting. The meme humorously illustrates overreactions to minor incidents, moments of empowerment in adversarial situations, or when someone takes joy or gains an advantage from chaos or destruction. It\'s versatile, allowing users to express a feeling of triumph, defiance, or malevolence in a comedic and exaggerated manner.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/elmo_rise.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "polite_cat",
    description:
      "The \"Polite Cat\" meme features an image of a cat with a peculiar, somewhat unsettling smile that makes it appear as if it's awkwardly grinning. This cat, named Ollie, captured the internet's fancy due to its human-like expression of polite discomfort or forced friendliness, which seems both endearing and slightly eerie. The meme typically involves the cat's image accompanied by captions that depict scenarios where someone might reluctantly agree or emotions of forced politeness in uncomfortable social situations. It humorously reflects the common human experience of having to maintain civility or feign enthusiasm in less-than-ideal circumstances, making the cat's expression universally relatable on a comedic level. This blend of adorable and awkward has led to its wide use in depicting ironic politeness or discomfort in various contexts.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/polite_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "american_chopper_argument",
    description:
      'The "American Chopper Argument" meme features a still image or a series of images from the reality television show *American Chopper*, showing an intense argument between Paul Teutul Sr. and his son Paul Teutul Jr. The meme has been widely used to humorously depict a range of contentious and petty arguments across a variety of topics. Initially, the text superimposed on the images closely mirrors the kind of heated, yet somewhat trivial, disputes that might arise in real life or online, often exaggerating the pettiness to comedic effect. However, as the meme evolved, users began to apply it to more elaborate and niche debates, allowing for creative reinterpretations across different contexts. The juxtaposition of a serious argument with trivial or highly specific subject matter creates a humorous contrast, making this meme a versatile tool for commentary on the nature of online debates and disagreements.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/american_chopper_argument.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "you_tried",
    description:
      'The "You Tried" star meme originates from a gold star sticker with the words "You Tried" written inside, often handed out to acknowledge someone\'s effort regardless of the outcome, successful or not. This meme is widely used on the internet to humorously commend attempts that are well-intentioned but ultimately fail or fall short of expectations. Its humor lies in the juxtaposition of offering a symbol traditionally associated with success and achievement (a gold star) in situations where the effort didn\'t lead to the desired result, thus providing a light-hearted way to acknowledge that not all efforts lead to success. It can be both a gentle ribbing among friends or a self-deprecating acknowledgment of one\'s own shortcomings, showcasing a universal understanding that not every attempt can be a winner, but the effort is still recognized.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/you_tried.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "omg_cat",
    description:
      "The \"OMG Cat\" meme features a video of a wide-eyed cat looking incredibly surprised or shocked. The cat's expression is so exaggerated that it immediately became a humorous representation of shock, disbelief, or amazement. This meme taps into the universal experience of being taken aback by unexpected news or events, but its humor lies in the extreme reaction depicted by a cat, an animal not known for its wide range of facial expressions. The meme's versatility allows it to be used in various contexts where an over-the-top representation of surprise or astonishment is fitting, making it relatable and humorous across different scenarios. This meme's simplicity and the universal emotion it conveys have cemented its place in internet culture.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/omg_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "inhaling_seagull",
    description:
      "The \"Inhaling Seagull\" meme features a series of four panel images of a seagull appearing to be in the process of inhaling sharply before squawking loudly. It captures a moment right before the seagull makes a noise, with each panel zooming closer into the bird's face to emphasize the buildup of its screech. This meme template is widely used to humorously depict situations where someone is preparing to say something with exaggerated anticipation or is gearing up to overreact to something trivial. The humor derives from the relatable human tendency to overly dramatize reactions to everyday events, paralleled with the dramatic zoom on the seagull's face, making it seem as though it's about to say something significant, only for the implication to be it's about to let out a simple squawk. The absurdity of using a seagull to portray human overreactions contributes to the meme’s comedic effect.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/inhaling_seagull.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "confused_nick_young_swaggy_p",
    description:
      'The "Confused Nick Young" meme features an image of professional basketball player Nick Young with a perplexed expression, accompanied by multiple question marks. This meme originates from a web series on YouTube where Young talks about growing up and the untruthful things his teachers told him, leading to his confused expression when recalling these stories. It\'s widely used online to express confusion or disbelief in response to contradictory statements or complex situations. The meme humorously conveys the feeling of being bewildered or incredulous, often in scenarios where common sense is defied, making it a versatile and relatable format for depicting puzzlement across various contexts.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image
          width="800"
          height="500"
          src="/confused_nick_young_swaggy_p.jpg"
        />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "terrified_noot_noot",
    description:
      'The "Terrified Noot Noot" meme features a character named Pingu from the Swiss-British children\'s clay animation called "Pingu." The meme captures a moment where Pingu, typically known for his catchphrase "noot noot," appears shocked or terrified. The humorous element often springs from the use of this image in various contexts to express overreaction, sudden horror, or comedic fear in situations where such a reaction might be exaggerated or unexpected. Its versatility allows it to blend seamlessly into different scenarios, particularly those that play on the melodrama of everyday inconveniences or surprises, making it a favorite for portraying comedic overreactions online.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/terrified_noot_noot.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "scared_hamster",
    description:
      'The "Scared Hamster" meme, also known as "Shocked Hamster," features a close-up image of a hamster with an exaggeratedly alarmed expression. Originating from a video where the hamster turns its head and stares directly into the camera with wide eyes, this image captures a moment of pure comedic surprise or horror. This meme is often used to represent a dramatic or exaggerated reaction to unexpected or shocking news, situations, or revelations. The humor in this meme comes from the melodramatic and human-like expression of shock on the small animal\'s face, juxtaposing a typically uneventful or mildly surprising human situation with the extreme reaction of the hamster. It showcases the internet\'s love for personifying animals in humorous contexts, making everyday moments hilariously over-the-top.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/scared_hamster.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "sweating_jordan_peele",
    description:
      'The "Sweating Jordan Peele" meme originates from a clip of Jordan Peele sweating profusely during an interview on the late-night show "Late Night with Seth Meyers" in March 2018. The meme captures a moment of intense sweating by Peele as a reaction, often used to convey extreme nervousness, stress, or anxiety in a variety of humorous contexts. Its humor lies in the exaggerated physical manifestation of stress, making it a relatable and over-the-top way to express feelings of being under pressure or in an awkward situation. The meme is versatile, able to depict anything from the stress of answering a difficult question to the anxiety of being discovered in a lie, making it broadly applicable across numerous scenarios.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/sweating_jordan_peele.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "putting_on_clown_makeup",
    description:
      'The "Putting on Clown Makeup" meme features a series of panels that show a person applying clown makeup, symbolizing a gradual realization or acceptance of one\'s foolishness or naivety in a given situation. This meme humorously captures the process of someone coming to terms with their own silliness or having been fooled, embodying the feeling of transforming into a "clown" for having believed or done something ridiculous. It\'s often used in contexts where individuals or groups realize they\'ve made an error in judgment, clinging to a belief, or having an unwarranted confidence in a specific outcome that does not happen. The humor lies in the exaggerated transformation into a circus clown, which is universally recognized as a character meant to entertain others with silly and foolish behavior, thereby poking fun at oneself or others for being overly naive or misguided.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/putting_on_clown_makeup.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "evil_toddler",
    description:
      'The "Evil Toddler" meme features a young kid with a devilish grin, suggesting that they\'re up to no good or have just done something mischievous. Originating from a stock photo, this meme is used widely to depict those moments when someone has a nefariously clever or unexpectedly sly idea that is typically humorous, harmless, but cheeky. It captures the universal recognition of innocence paired with an unexpected cunningness, often seen in children when they think they’ve outsmarted adults. The humor in the meme comes from the juxtaposition of the child’s innocent appearance with the implied mischief or cleverness the image suggests. This meme is versatile, applied in various contexts where a light-hearted acknowledgment of cunning or mischievous behavior is called for, echoing that universal, somewhat nostalgic, connection to childhood cleverness and the mild trouble it causes.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/evil_toddler.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "willem_dafoe_looking_up",
    description:
      'The "Willem Dafoe Looking Up" meme features a screenshot from the movie "Spider-Man" in which actor Willem Dafoe, who plays the character Norman Osborn, is seen looking upwards with an eager or sinister expression. This expression has been widely used across the internet to evoke or parody moments of sudden realization, plotting, or anticipating an event with a mix of excitement and potentially ill intent. The juxtaposition of Dafoe\'s intense expression with ordinary or exaggerated captions creates humor, emphasizing the dramatic overreaction to everyday situations or highlighting the dramatic internal plotting we all occasionally experience. The meme\'s versatility allows it to be adapted to various contexts, making it a popular choice for expressing eagerness, plotting, or the comedic amplification of planning and anticipation in meme culture.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/willem_dafoe_looking_up.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "clap_emoji",
    description:
      'The "Clap Emoji" meme involves inserting the 👏 emoji between words in a sentence, used online to mimic the gesture of clapping between words for emphasis in spoken conversation. This often serves to accentuate the point being made, enforcing a tone of insistence or intensity. Though it can be used to mimic applause or agreement, in meme culture, it\'s primarily employed for humorous or sarcastic effect, particularly to mock or satirize the perceived overuse or unnecessary application of emphasis in digital communication. The visual interruption of the clap emoji between each word grabs attention and exaggerates the sentiment, making it a popular choice for comedic effect in internet discourse.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/clap_emoji_%F0%9F%91%8F.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "the_world_if",
    description:
      '"The World If" meme features a parallel universe concept, often humorously implying a better world resulting from trivial or unlikely events. The format typically shows two images: a mundane, real-world scenario captioned "The World If," followed by a fictional, often overly positive outcome, vividly illustrated or photoshopped, suggesting a utopian world arising from simple actions (e.g., "The World If people actually read the terms and conditions"). The meme plays on the human tendency to wonder "what if" over minor things, exaggerating their importance in a humorous way. The contrast between reality and this idealized world sparks humor, poking fun at our desires for simple solutions to complex problems and highlighting the absurdity of wishful thinking using exaggerated outcomes.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/the_world_if.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "are_you_sure_about_that",
    description:
      'The "Are You Sure About That?" meme features a clip of professional wrestler John Cena from the 2012 web show "John Cena\'s Sexy High School Adventure." In the clip, Cena unexpectedly appears, confronting the speaker with the question, "Are you sure about that?" in a humorous and skeptical tone. This meme gained popularity for its use in various social media and video platforms, where it is employed to comically question the validity or truth of someone\'s statement or action. Its humor lies in the exaggerated skepticism and the surprising, often out-of-context appearance of John Cena, which mocks the original certainty of the questioned statement. It\'s commonly used to introduce a humorous doubt or to playfully challenge claims, making it a versatile tool for comedic effect in online discussions and content.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/are_you_sure_about_that.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "panik_kalm",
    description:
      'The "Panik Kalm Panik" meme consists of a multi-panel comic featuring Meme Man, a 3D computer head known for its misspelled English. The sequence showcases two contrasting emotions or reactions to a situation across three stages: initial panic, a momentary realization that calms the panic, followed by a return to panic due to a new realization or forgotten factor. This meme captures the rollercoaster of emotions one experiences when rapidly switching between feelings of distress and relief in quick succession. The humor derives from its relatable depiction of overreacting to a problem, temporarily finding a solution or reassurance, then realizing the problem still exists or has worsened, all encapsulated in a simple and visually stark format. It’s popularly used online to humorously depict scenarios in personal life, work, gaming, and various other contexts where quickly fluctuating emotions are common.',
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/panik_kalm.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
  {
    name: "screaming_cat",
    description:
      "The \"Screaming Cat\" meme features an image of a wide-eyed cat with an open mouth, as if it's screaming. Originating from a viral photograph, the image quickly became utilized across the internet to express shock, surprise, or intense emotion in a humorous way. Often, the cat's supposed scream is juxtaposed with a caption that describes an overreaction to a mundane or absurd situation, thereby amplifying the humor. The exaggerated expression of the cat serves to melodramatically underscore the triviality or absurdity of human concerns, often leading to comedic effect. The meme's versatility allows it to be adapted to a wide range of contexts, making it a popular choice for conveying exaggerated dismay or panic in a light-hearted manner.",
    arguments: [
      {
        fieldName: "text_1",
        description: "text 1",
      },
    ],
    render: ({ text_1 }) => (
      <div className="border relative">
        <Image width="800" height="500" src="/screaming_cat.jpg" />
        <div className="absolute left-4">{text_1}</div>
      </div>
    ),
  },
];

export { memeTemplates };
