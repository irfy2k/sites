# Outreach kit: websites for Lahore businesses

Goal for week 1: 2 paying clients. Time budget: 5 to 10 hours, almost all of it on finding and talking to clients. Claude builds the sites.

Prices below are my estimates for the Lahore market, not survey data. Adjust after your first 5 conversations.

---

## 0. One-time setup (about 1 hour)

1. **WhatsApp Business app** (free). Business name "Ahmed Zuhair, Websites". Add the services page link to the profile. Turn on a greeting message.
2. **JazzCash or Easypaisa in your own name** (free with your CNIC). Do not route client payments through a friend's account. If the friend keeps it, you have no record and no recourse.
3. **WhatsApp number.** Done: every page uses `923094413394` (0309 4413394) and a.zuhair.baig@gmail.com.
4. **Publish the page.** Create a public repo `irfy2k/sites`, push this folder, then turn on GitHub Pages (Settings, Pages, branch `main`, folder `/`). It goes live at `https://irfy2k.github.io/sites/`.
5. **Add a link** to the services page from your main portfolio's contact section.

---

## 1. Who to target, and how to pick

Your proof decides your best targets:

| Segment | Your proof | Offer to lead with |
|---|---|---|
| Dental, skin and physio clinics | ClinicalHub (appointments app) | One page now; booking system later |
| Home bakers, caterers, cloud kitchens | Bakery demo | One page with menu and WhatsApp order buttons |
| Tuition academies, Quran and IELTS centres | Academy demo | One page with subjects, timings and fees |
| Clothing, lawn and perfume brands on Instagram | SCNT Studio store, FabricOS | WooCommerce store, PKR 35,000+ |
| Salons, gyms, car detailing, repair shops | Clinic demo layout | One page |

Start in areas you can walk to: Faisal Town, Johar Town, Model Town, Township, Garden Town.

### Finding leads on Google Maps (best source)
1. Search `dentist in Johar Town Lahore` (swap in the category and area).
2. Open each listing. **No "Website" button means a lead.**
3. Prioritise listings with 20+ reviews and a phone number. They have customers and care about them.
4. Skip chains and franchises. Head office decides, not the branch.

### Finding leads on Instagram
Search `#lahorebakers`, `#homebakerslahore`, `#lahorelawn`, `#lahoreclothingbrand`. Pick accounts with 2,000 to 50,000 followers, no website in the bio, and "DM to order" in posts.

### Track every lead
Use a Google Sheet with columns: Name, Category, Area, Phone/IG, Source, Date contacted, Status (new, messaged, replied, preview sent, paid, done), Notes.

---

## 2. The trick that closes: a free preview

For your 5 best leads, build their page **before** you message them. Use the facts already public on their Google listing or Instagram: name, address, timings, menu. Claude builds it in minutes from the demo templates.

Send it as a private preview link, or a screenshot plus a link. An owner who sees their own business on a page is much easier to close than one reading a pitch.

Rules for previews:
- Mark it "Preview for <business>, not published".
- Don't submit it to Google, and don't post it anywhere public.
- If they say no, delete it.

---

## 3. Message scripts

Personalise the first line every time. Send 15 to 20 messages a day at most. Mass-messaging unknown numbers gets WhatsApp accounts banned.

### First WhatsApp message (English)
> Assalam o alaikum. I'm Ahmed, a developer from FAST Lahore. I found {business} on Google Maps. You have {N} good reviews, but no website, so people who search "{category} near me" can't see your prices or timings.
>
> I made a quick preview of what your page could look like: {link}
>
> If you like it, I can put it live in 3 days for PKR 9,000. If not, no problem.

### First WhatsApp message (Roman Urdu)
> Assalam o alaikum. Main Ahmed hoon, FAST Lahore se developer. Google Maps par {business} dekha. Reviews achay hain lekin website nahi hai, is liye jo log "{category} near me" search karte hain unhein aap ke rates aur timings nahi milte.
>
> Maine aap ke liye ek preview banaya hai: {link}
>
> Pasand aaye to 3 din mein live kar doon ga, PKR 9,000 mein. Na pasand ho to koi baat nahi.

### Instagram DM (home businesses and brands)
> Hi! Love the {specific product} posts. Quick idea: a simple page where customers see your full menu with prices and tap to order on WhatsApp, instead of asking "price?" in DMs every day. Here's a sample: {bakery demo link}. Want me to make one for {brand}? Rs 9,000, ready in 3 days.

### Walk-in (clinics, academies, shops)
Go between 11 am and 1 pm, when it's quiet. Ask for the owner or manager. Have the preview open on your phone.
> "Assalam o alaikum, I'm a FAST student and I make websites for businesses in this area. I noticed you don't have one on Google. Can I show you a 30-second sample?" (Show the phone.) "This is ready in 3 days, PKR 9,000. Half now, half when you're happy."

Leave your number on a small card or note, even if they say "baad mein".

### Follow-up (3 days later, once only)
> Assalam o alaikum, just following up on the website preview for {business}. I'm taking 2 more clients this week. Should I keep a slot for you?

---

## 4. Handling objections

| They say | You say |
|---|---|
| "Instagram is enough" | "Google shows websites, not Instagram posts. Plus customers who don't use Instagram can still find you." |
| "Too expensive" | "It's one-time. No monthly hosting fee. One extra customer usually covers it." Can drop to PKR 7,000 with no custom domain. Never below that. |
| "My nephew will make it" | "Sure. If it doesn't happen, my number's here." Then move on. |
| "Send me details" | Send the price table link, then follow up once. |
| "What if I need changes?" | "Small fixes free for 2 weeks. After that, PKR 2,000 a month covers updates." |

---

## 5. Closing and payment terms

When they say yes, send this in WhatsApp so there's a written record:

> Great. To confirm:
> - Package: {One page / Business}, PKR {price}
> - Includes: {list}. Two rounds of changes.
> - 50% advance (PKR {half}) to JazzCash {your number}, {your name}. Work starts when received.
> - Live on your phone within {3/5} days of getting your photos and details.
> - Remaining 50% when you approve it. Then I publish the final version.
> - Domain (if any) is registered in your name, charged at cost.
>
> Please send: logo, 3 to 6 photos, services/menu with prices, timings, address, WhatsApp number.

**Never start without the advance.** Never hand over the final version or domain before full payment. Until then, it's a preview on your account.

---

## 6. Delivery checklist (with Claude)

1. Collect: logo, photos, price list, timings, address, WhatsApp number, Google Maps link.
2. Ask Claude: "Build a site for {business} from the {clinic/bakery/academy} demo. Here's their info: ...". Review it on your phone.
3. Send the preview. Make at most two rounds of changes.
4. Get the final payment.
5. Publish free on GitHub Pages or Cloudflare Pages. For the Business package, buy the domain in the **client's name**, at cost, and point it at the site.
6. **Google Business Profile:** help them add the website link to their listing. The client must own and verify the profile. You never own it.
7. Ask for a one-line review and permission to list them as a client on your page.
8. Offer Monthly care (PKR 2,000/month). Five care clients is PKR 10,000 a month of recurring income.

---

## 7. This week's plan (about 8 hours)

| Day | Task | Time |
|---|---|---|
| Mon | Setup (section 0). Publish the services page. | 1 h |
| Tue | Find 30 leads on Maps and Instagram. Pick the top 5. Claude builds 5 previews. | 1.5 h |
| Wed | Send the 5 preview messages plus 15 plain messages. | 1 h |
| Thu | 3 to 5 walk-ins near campus. Answer replies. | 1.5 h |
| Fri | 15 more messages. Follow up on Tuesday's leads. Close anyone warm. | 1 h |
| Sat | Build and deliver for anyone who paid an advance. | 1.5 h |
| Sun | Review the tracker. Note what worked and adjust the pitch. | 0.5 h |

Rough funnel (my estimate): about 50 contacts lead to 5 to 8 replies, 2 to 3 serious conversations, and 1 to 2 paid. Preview messages should convert much better than plain ones. Track this to find out.

---

## 8. After week 1: bigger offers from your existing work

- **Clinic booking system** (ClinicalHub): appointments and reminders for clinics already on a one-page site. PKR 40,000+.
- **3D product customiser** (FabricOS): for Lahore clothing and furniture brands. Premium, PKR 60,000+.
- **WooCommerce stores** (SCNT Studio): for Instagram brands outgrowing DMs.
- **AI voice and WhatsApp agents** (The Negotiator): for property dealers and clinics that miss calls. Price after you've built one.
- **Roblox scripting commissions** (Walls Were Built to Fall, 130 spell cards): dollar income on Talent Hub and Discord. Needs 3 short demo clips.
- **Shorts automation** (Shorts Pipeline): done-for-you YouTube Shorts for creators and coaches.
