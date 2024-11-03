# HikerFeed Team Directory

Welcome to the **HikerFeed Team Directory**! 🎉

### What This Does
The HikerFeed Team Directory is displays profiles for each team member. It's meant to be a quick reference where we can:
- Get to know who's who on the team,
- See each other's skills and what we're working on,
- Have a bit of fun and photos that show off our best sides.

The app includes each team member's:
- **Name**
- **Role**
- **Location** (we’re all over the place)
- **Timezone** (scheduling is tough)
- **Skills**
- **Why HikerFeed?** (a short reason you’re here)
- **Fun Fact** (bonus points for creativity)
- **Best Times to Meet** (optional, but super helpful)
- **Preferred Communication Method** (for the introverts among us)
- **Goals at HikerFeed** (optional – think of it as a wish list for what you’d like to achieve here)
- **Photos** (optional – feel free to add one or more)

### How to Add Yourself

1. **Locate the Team Data File**
   - Head over to `src/data/teamData.ts`. This file holds all the profiles for our team. It’s just a simple array of objects, where each object represents a team member.

2. **Add Your Profile**
   - Add a new object to the array for yourself. You can copy the format below and paste it at the bottom of the array. Please don’t delete anyone else’s profile...unless you have a good reason and a solid alibi.

   ```typescript
   {
     name: "Your Name Here",
     role: "Your Role (e.g., Backend Engineer, Full-Stack Magician, etc.)",
     location: "Your City, Country (optional but nice to know)",
     timezone: "Your Timezone (e.g., PST, GMT+1, etc.)",
     skills: ["Skill 1", "Skill 2", "Skill 3"],  // Keep this reasonable, we all know you're amazing!
     whyHikerFeed: "Why you're here and why you think HikerFeed is awesome",
     funFact: "A fun fact about yourself. If it involves a bear encounter, +10 points.",
     avatar: "https://ui-avatars.com/api/?name=Your+Name",  // You can use the avatar generator link or add your own URL here.
     bestTimesToMeet: "Your availability (e.g., Weekdays 10am - 2pm PST)",
     communicationPreference: "Preferred way to communicate (Slack, Google Meet, Signal via Morse Code, etc.)",
     goals: "What you'd like to accomplish here at HikerFeed",
     photos: ["https://your-photo-link.com/photo1.jpg", "https://your-photo-link.com/photo2.jpg"]  // Optional, can add multiple if you like.
   }
