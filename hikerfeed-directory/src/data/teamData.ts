// src/data/teamData.ts
export interface TeamMember {
    name: string
    role: string
    location: string
    timezone: string
    skills: string[]
    whyHikerFeed: string
    funFact: string
    avatar: string
    bestTimesToMeet?: string
    communicationPreference?: string
    goals?: string
    photos?: string[]
  }
  
  const teamData: TeamMember[] = [
    {
      name: "Kyle Huber aka Details",
      role: "Head of Product and Business Operations",
      location: "Seattle, WA",
      timezone: "PST",
      skills: ["Product Management", "Business Strategy", "Finance", "Marketing"],
      whyHikerFeed: "Excited to create tools that connect and inspire outdoor enthusiasts",
      funFact: "Has traveled to 36 countries and speaks German, French, and Japanese",
      avatar: "https://ui-avatars.com/api/?name=Kyle+Huber",
      photos: [
        "/images/Kyle_Headshot_Monochrome.jpg", "/images/Kyle_Hiking_Rainier.jpg",
      ],
      bestTimesToMeet: "Weekdays 10am - 2pm PST",
      communicationPreference: "Google Meet",
      goals: "Create a product that is loved by the hiking community and build a cohesive team culture",
    },
    // Add other team members here
  ];
  
  export default teamData;