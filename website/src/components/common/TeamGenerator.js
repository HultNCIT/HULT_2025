'use client'
import React from 'react'
import TeamCard from "@/components/common/team";
import { useEffect } from "react";
import { useState } from "react";
function TeamGenerator() {
    const teamHult=[
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Sujal Shrestha",
          "position":"Program Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Simon Khadka",
          "position":"Deputy Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      },
      {
          "name":"Samikshya Ghimire",
          "position":"Campus Director",
          "img_link":"/demon.jpeg",
          "facebook":"https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
          "instagram":"https://www.instagram.com/samikshyaxx/",
          "lindedin":"https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
          "twitter":"#"
      }
  ]
    // const [teamData, setTeamData] = useState([]);
    // useEffect(() => {
    //   // Fetch the team data from the JSON file (assuming it is in the public folder)
    //   fetch('/jsonFiles/teaminfo.json')
    //     .then((response) => response.json())
    //     .then((data) => setTeamData(data.teamHult)) // Extract teamDeputy from JSON
    //     .catch((error) => console.log('Error fetching team data:', error));
    // }, []);
  return (
    <div className="px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {teamHult.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          position={member.position}
          image={member.img_link} // Corrected to match the json key name
          facebook={member.facebook}
          instagram={member.instagram}
          linkedin={member.lindedin} // Corrected to match the json key name
          twitter={member.twitter}
        />
      ))}
    </div>
  )
}

export default TeamGenerator