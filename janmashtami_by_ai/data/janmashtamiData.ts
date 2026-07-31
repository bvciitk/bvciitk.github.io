export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface MentorItem {
  name: string;
  title: string;
  image: string;
  link: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
}

export const HERO_CONTENT = {
  title: "Why do We Celebrate Janmashtami?",
  subtitle: "A Grand Celebration of Joy, Love, and Divinity",
  description:
    "Janmashtami is a grand celebration to commemorate the appearance of Lord Krishna, who is believed to be the Supreme Lord or the Lord of the Lords. It is the celebration of joy, love, and divinity. The story of Krishna's appearance reminds us through Kansa's actions that ego and pride are the major faults in human beings which can only doom them.",
  sanskritMantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे || हरे राम हरे राम राम राम हरे हरे",
};

export const EVENTS_DATA: EventItem[] = [
  {
    id: "cultural",
    title: "Cultural Activities",
    subtitle: "Ecstatic Drama, Dance & Classical Music",
    description:
      "To increase the intensity of the celebration of Janmashtami, we organize a multitude of cultural events, such as drama, classical music performances, shloka recitations, and traditional dance forms.",
    image: "/Janmashtami/images/Cultural.jpg",
    category: "Performance",
  },
  {
    id: "interschool",
    title: "Competitions",
    subtitle: "Vedic Quiz, Shloka Recitation & Painting",
    description:
      "Exciting and fun competitions for primary and high school students with enthusiastic participation in Shloka recitation, Vedic Quiz, Painting, and Vedic arts.",
    image: "/Janmashtami/images/Interschool.jpg",
    category: "Competition",
  },
  {
    id: "kirtan",
    title: "Bhajan Clubbing",
    subtitle: "Soul-Stirring Chanting & Mantra Meditation",
    description:
      "Ecstatic kirtans designed to create internal peace, confidence and joy. Kirtan chanting calms restless minds, promotes clarity of focus, and helps dissolve anxiety.",
    image: "/Janmashtami/images/Kirtan.jpg",
    category: "Meditation",
  },
  {
    id: "poster",
    title: "IKS Exhibition",
    subtitle: "Bhagavad Gita's Timeless Philosophy",
    description:
      "Visual poster presentations demonstrating the perennial philosophy and scientific wisdom of ancient Vedic India in a concise, accessible manner.",
    image: "/Janmashtami/images/Poster.jpg",
    category: "Exhibition",
  },
  {
    id: "prasadam",
    title: "Prasadam For All",
    subtitle: "Sacred Food Offered to the Supreme Lord",
    description:
      "As explained in Srimad Bhagavatam, deity worship involves offering sacred bhoga to the Lord and distributing it as Prasadam to elevate consciousness and perceive the divine presence.",
    image: "/Janmashtami/images/Prasadam.jpg",
    category: "Feast",
  },
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: "05:00 AM",
    title: "Mangal Aarti",
    description: "Morning prayers, conch blowing, and awakening ceremony for Lord Krishna.",
  },
  {
    time: "06:30 AM",
    title: "Shloka Recitation & Chanting",
    description: "Recitation of sacred verses from Bhagavad Gita and Srimad Bhagavatam.",
  },
  {
    time: "08:30 AM",
    title: "Competitions",
    description: "Vedic Quiz, Painting, and Shloka competitions for campus and school students.",
  },
  {
    time: "11:00 AM",
    title: "Poster Exhibition & Philosophy Walk",
    description: "Exhibition showcasing Vedic science, consciousness, and Bhagavad Gita wisdom.",
  },
  {
    time: "01:00 PM",
    title: "Grand Prasadam Feast",
    description: "Distribution of sanctified vegetarian feast blessed by Lord Krishna.",
    highlight: true,
  },
  {
    time: "04:30 PM",
    title: "Cultural Performances & Drama",
    description: "Traditional dance forms, classical musical recitals, and Krishna Leela drama.",
  },
  {
    time: "07:00 PM",
    title: "Mahā-Kirtan & Bhajan Sandhya",
    description: "Soul-stirring kirtan concert and ecstatic congregational chanting.",
    highlight: true,
  },
  {
    time: "09:30 PM",
    title: "Krishna Janmashtami Abhishek",
    description: "Sacred bathing ceremony of Lord Krishna's deity with milk, honey, and holy water.",
    highlight: true,
  },
  {
    time: "11:00 PM",
    title: "Katha & Midnight Preparation",
    description: "Discourse on Lord Krishna's divine birth and pastimes in Vrindavan.",
  },
  {
    time: "11:59 PM",
    title: "Midnight Janmashtami Celebration",
    description: "Grand midnight Maha-Aarti celebrating the exact moment of Lord Krishna's arrival!",
    highlight: true,
  },
];

export const MENTORS_DATA: MentorItem[] = [
  {
    name: "HG Lila Purushottam Das",
    title: "Director, IIT Mandi",
    image: "/Janmashtami/images/lakshmidhar_behera.jpeg",
    link: "https://home.iitk.ac.in/~lbehera/",
  },
  {
    name: "HG Suvendu Samanta",
    title: "Associate Professor, IIT Kanpur",
    image: "/Janmashtami/images/suvendu_sir.jpeg",
    link: "https://home.iitk.ac.in/~suvendus/",
  },
  {
    name: "HG Gururaj M Vishwanath",
    title: "Associate Professor, IIT Kanpur",
    image: "/Janmashtami/images/Prof_Gururaj.jpg",
    link: "https://home.iitk.ac.in/~gururajmv/Home.html",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: "1", src: "/Janmashtami/images/highlights/1.png", caption: "Ecstatic Kirtan & Chanting" },
  { id: "2", src: "/Janmashtami/images/highlights/2.png", caption: "Cultural Dance Performances" },
  { id: "3", src: "/Janmashtami/images/highlights/3.png", caption: "Vedic Quiz & Competitions" },
  { id: "4", src: "/Janmashtami/images/highlights/4.png", caption: "Deity Abhishek Ceremony" },
  { id: "5", src: "/Janmashtami/images/highlights/5.png", caption: "Grand Midnight Aarti" },
  { id: "6", src: "/Janmashtami/images/highlights/6.png", caption: "Prasadam Feast Distribution" },
  { id: "7", src: "/Janmashtami/images/highlights/7.png", caption: "Drama & Krishna Leela" },
  { id: "8", src: "/Janmashtami/images/highlights/IMG1.jpg", caption: "Campus Celebrations" },
];
