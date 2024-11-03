<!-- src/components/TeamDirectory.vue -->
<template>
    <div class="team-directory">
      <div class="header">
        <h1>HikerFeed Team Directory</h1>
        <div class="search-container">
          <input 
            type="text" 
            v-model="searchTerm" 
            placeholder="Search team members..."
            class="search-input"
          />
        </div>
      </div>
  
      <div class="team-grid">
        <div v-for="member in filteredMembers" :key="member.name" class="team-card">
          <div class="card-header">
            <img :src="member.avatar" :alt="member.name" class="avatar" />
            <div class="header-text">
              <h3>{{ member.name }}</h3>
              <p class="role">{{ member.role }}</p>
            </div>
          </div>
          <div class="card-content">
            <div class="info-row">
              <span class="location">📍 {{ member.location }}</span>
              <span class="timezone">🕒 {{ member.timezone }}</span>
            </div>
            <div class="skills">
              <span v-for="skill in member.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
            <div class="motivation">
              <h4>Why HikerFeed?</h4>
              <p>{{ member.whyHikerFeed }}</p>
            </div>
            <div class="fun-fact">
              <h4>Fun Fact</h4>
              <p>{{ member.funFact }}</p>
            </div>
            <!-- Photos section for each member -->
            <div v-if="member.photos" class="photos">
              <h4>Photos:</h4>
              <div v-for="photo in member.photos" :key="photo" class="photo-container">
                <img :src="photo" alt="Team Member Photo" class="team-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import teamData from '../data/teamData'
  
  interface TeamMember {
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
    photos?: string[] // Added this field to the interface
  }
  
  const searchTerm = ref('')
  
  const teamMembers = ref<TeamMember[]>(teamData)
  
  const filteredMembers = computed(() => {
    const search = searchTerm.value.toLowerCase()
    return teamMembers.value.filter(member => 
      Object.values(member).some(value => 
        value.toString().toLowerCase().includes(search)
      )
    )
  })
  </script>
  
  <style scoped>
  .team-directory {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  /* Style adjustments for clarity */
  .header {
    margin-bottom: 2rem;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .search-container {
    position: relative;
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .team-card {
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    padding: 1rem;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  
  .header-text h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  
  .role {
    color: #666;
    margin: 0;
  }
  
  .info-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .skill-tag {
    background: #e9ecef;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
  }
  
  .motivation, .fun-fact {
    margin-top: 1rem;
  }
  
  .motivation h4, .fun-fact h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: #666;
  }
  
  .motivation p, .fun-fact p {
    margin: 0;
    font-size: 0.875rem;
  }
  
  .photos {
    margin-top: 1rem;
  }
  
  .photo-container {
    display: inline-block;
    margin-right: 8px;
  }
  
  .team-photo {
    width: 64px;
    height: 64px;
    border-radius: 4px;
  }
  </style>
  