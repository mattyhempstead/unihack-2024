"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var openai_1 = require("openai");
var memes_urls = [
    {
        url: "https://knowyourmeme.com/memes/persian-cat-room-guardian",
    },
    {
        url: "https://knowyourmeme.com/memes/cats-can-have-a-little-salami",
    },
    {
        url: "https://knowyourmeme.com/memes/smudge-the-cat",
    },
    {
        url: "https://knowyourmeme.com/memes/ouhhh-husbant-now-we-are-homeress",
    },
    {
        url: "https://knowyourmeme.com/memes/wawa-cat-oh-the-misery-cat",
    },
    {
        url: "https://knowyourmeme.com/memes/its-over",
    },
    {
        url: "https://knowyourmeme.com/memes/i-be-poppin-bottles-sparkles-and-champagne-shannon-sharpe-fit-checks",
    },
    {
        url: "https://knowyourmeme.com/memes/ronaldo-sipping-drinking",
    },
    {
        url: "https://knowyourmeme.com/memes/the-rocks-eyebrow-raise",
    },
    {
        url: "https://knowyourmeme.com/memes/duck-chick-with-knife",
    },
    {
        url: "https://knowyourmeme.com/memes/limmy-waking-up",
    },
    {
        url: "https://knowyourmeme.com/memes/sweaty-speedrunner",
    },
    {
        url: "https://knowyourmeme.com/memes/crying-wojak",
    },
    {
        url: "https://knowyourmeme.com/memes/will-you-shut-up-man--2",
    },
    {
        url: "https://knowyourmeme.com/memes/bonk-cheems",
    },
    {
        url: "https://knowyourmeme.com/memes/catjam-vibing-cat",
    },
    {
        url: "https://knowyourmeme.com/memes/thumbs-up-crying-cat",
    },
    {
        url: "https://knowyourmeme.com/memes/mother-ignoring-kid-drowning-in-a-pool",
    },
    {
        url: "https://knowyourmeme.com/memes/%F0%9F%91%89%F0%9F%91%88-two-fingers-touching",
    },
    {
        url: "https://knowyourmeme.com/memes/joe-rogan-daniel-cormier-and-jon-anik-ufc-248-reaction",
    },
    {
        url: "https://knowyourmeme.com/memes/what-the-hell-happened-here",
    },
    {
        url: "https://knowyourmeme.com/memes/oof-stones",
    },
    {
        url: "https://knowyourmeme.com/memes/crying-cat",
    },
    {
        url: "https://knowyourmeme.com/memes/arthurs-fist",
    },
    {
        url: "https://knowyourmeme.com/memes/feels-good",
    },
    {
        url: "https://knowyourmeme.com/memes/awkward-look-monkey-puppet",
    },
    {
        url: "https://knowyourmeme.com/memes/dimitri-finds-out",
    },
    {
        url: "https://knowyourmeme.com/memes/elmo-rise",
    },
    {
        url: "https://knowyourmeme.com/memes/polite-cat",
    },
    {
        url: "https://knowyourmeme.com/memes/american-chopper-argument",
    },
    {
        url: "https://knowyourmeme.com/memes/you-tried",
    },
    {
        url: "https://knowyourmeme.com/memes/omg-cat",
    },
    {
        url: "https://knowyourmeme.com/memes/inhaling-seagull",
    },
    {
        url: "https://knowyourmeme.com/memes/confused-nick-young-swaggy-p",
    },
    {
        url: "https://knowyourmeme.com/memes/terrified-noot-noot",
    },
    {
        url: "https://knowyourmeme.com/memes/scared-hamster",
    },
    {
        url: "https://knowyourmeme.com/memes/sweating-jordan-peele",
    },
    {
        url: "https://knowyourmeme.com/memes/putting-on-clown-makeup",
    },
    {
        url: "https://knowyourmeme.com/memes/evil-toddler",
    },
    {
        url: "https://knowyourmeme.com/memes/willem-dafoe-looking-up",
    },
    {
        url: "https://knowyourmeme.com/memes/clap-emoji-%F0%9F%91%8F",
    },
    {
        url: "https://knowyourmeme.com/memes/the-world-if",
    },
    {
        url: "https://knowyourmeme.com/memes/are-you-sure-about-that",
    },
    {
        url: "https://knowyourmeme.com/memes/panik-kalm",
    },
    {
        url: "https://knowyourmeme.com/memes/screaming-cat",
    },
];
var systemPrompts = [
    {
        role: "system",
        content: "\nMeme Insight is an intelligent bot designed to provide detailed descriptions and explanations of memes, capturing their complex cultural nuances, emotional and cultural meanings, as well as their humorous aspects. For each meme, it not only explains the face-value contents and the underlying emotional and cultural significance but also delves into why the meme is humorous and how it can be used humorously in different contexts. This approach offers a comprehensive understanding of the meme's relevance, its potential for humor, and its versatility in various cultural contexts. Meme Insight tailors its explanations to the user's familiarity with internet culture, emphasizing the meme's current cultural context and the emotions it conveys. The bot maintains a respectful and neutral tone, and does not link to webpages for additional information. It does not ask for clarification or further details. The description should be less than 150 words.\n    ",
    },
];
var openaiclient = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
var messages = __spreadArray([], systemPrompts, true);
var sampleMemeTemplate = {
    name: "smudge_the_cat",
    description: "\n  The \"Ouhhh Husbant, now we are Homeress\" meme originates from a voiceover parody video where a pet bird, seemingly being evicted from its nest by a squirrel, vocally laments in an exaggerated manner to its \"husband\" about their sudden homelessness. The humor in this meme lies in the anthropomorphism of animals\u2014in this case, attributing them with human-like concerns and speech patterns, especially the misspelling of \"husband\" as \"husbant\" and \"homeless\" as \"homeress,\" which adds a layer of innocence and humor. Additionally, the over-dramatic tone used in the imagined dialogue plays on the comedic trope of overreaction to everyday problems. This meme can be used humorously in various contexts, particularly in situations involving displacement or minor inconveniences, to evoke a lighthearted response to relatable adversities.\n  ",
    arguments: [
        {
            fieldName: "text_1",
            description: "text 1",
        },
    ],
    // render: ({ text_1 }: any) => (
    //   <div className="border relative">
    //     <Image src="./smudge_the_cat.jpg" />
    //     <div className="absolute left-4">{text_1}</div>
    //   </div>
    // ),
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, memes_urls_1, url, response, newMeme, memeNameJpg, _a, _b, _c, key, value;
    var _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                (0, fs_1.writeFileSync)("meme_data.tsx", "export const memeTemplates = [\n");
                _i = 0, memes_urls_1 = memes_urls;
                _h.label = 1;
            case 1:
                if (!(_i < memes_urls_1.length)) return [3 /*break*/, 4];
                url = memes_urls_1[_i].url;
                messages.push({
                    role: "user",
                    content: url,
                });
                return [4 /*yield*/, openaiclient.chat.completions.create({
                        model: "gpt-4-0125-preview",
                        stream: false,
                        messages: messages,
                    })];
            case 2:
                response = _h.sent();
                console.log((_d = url.split("/").at(-1)) === null || _d === void 0 ? void 0 : _d.replace(/-/g, "_"));
                console.log(response.choices[0].message.content);
                console.log("\n");
                newMeme = sampleMemeTemplate;
                newMeme.name = (_f = (_e = url.split("/").at(-1)) === null || _e === void 0 ? void 0 : _e.replace(/-/g, "_")) !== null && _f !== void 0 ? _f : "";
                newMeme.description =
                    (_g = response.choices[0].message.content) !== null && _g !== void 0 ? _g : "No description";
                memeNameJpg = "./" + newMeme.name + ".jpg";
                // write memeTemplates to a file called meme_data.tsx
                (0, fs_1.appendFileSync)("meme_data.tsx", "{\n");
                for (_a = 0, _b = Object.entries(newMeme); _a < _b.length; _a++) {
                    _c = _b[_a], key = _c[0], value = _c[1];
                    (0, fs_1.appendFileSync)("meme_data.tsx", "".concat(key, ": ") + JSON.stringify(value, null, 2) + ",\n");
                }
                (0, fs_1.appendFileSync)("meme_data.tsx", "render: ({ text_1 }) => (\n<div className=\"border relative\">\n  <Image src=\"".concat(memeNameJpg, "\" />\n  <div className=\"absolute left-4\">{text_1}</div>\n</div>\n),\n},\n"));
                _h.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                (0, fs_1.appendFileSync)("meme_data.tsx", "];\n");
                return [2 /*return*/];
        }
    });
}); })();
