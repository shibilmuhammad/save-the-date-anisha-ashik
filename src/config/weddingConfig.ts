export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'ceremony' | 'reception' | 'couple' | 'details';
}

export interface WeddingConfig {
  brideName: string;
  brideNameArabic: string;
  groomName: string;
  groomNameArabic: string;
  bismillahText: string;
  brideBio: string;
  groomBio: string;
  weddingDate: string; // ISO date YYYY-MM-DDTHH:mm:ss
  weddingTime: string;
  weddingDateDisplay: string;
  weddingDayOfWeek: string;
  venueName: string;
  venueAddress: string;
  venueCity: string;
  googleMapsLink: string;
  invitationMessageHeadline: string;
  invitationMessageBody: string;
  emotionalQuote: string;
  weddingStoryTitle: string;
  weddingStoryText: string;
  nikahHeading: string;
  rsvpDeadline: string;
  dressCode: string;
  musicTrackUrl: string;
  envelopeVideoUrl: string;
  themeColors: {
    softIvory: string;
    champagneGold: string;
    antiqueGoldBronze: string;
  };
  images: {
    hero: string;
    bride: string;
    groom: string;
    auditorium: string;
    envelopeSeal: string;
    gallery: GalleryItem[];
  };
  socialSharing: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export const WEDDING_CONFIG: WeddingConfig = {
  groomName: "Mohammad Ashik",
  groomNameArabic: "",
  brideName: "S. Anisha",
  brideNameArabic: "",
  bismillahText: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
  groomBio: "Ambitious, warm, and dedicated to creating unforgettable memories and lifelong joy.",
  brideBio: "Graceful, kind-hearted, and passionate about design, nature, and family traditions.",
  weddingDate: "2027-01-03T11:00:00",
  weddingTime: "11:00 AM",
  weddingDateDisplay: "January 3, 2027",
  weddingDayOfWeek: "Sunday",
  venueName: "Zara Convention Centre",
  venueAddress: "Ganjimata",
  venueCity: "Mangaluru",
  googleMapsLink: "https://maps.app.goo.gl/wycvYdL6yJ1q1NYJ6",
  invitationMessageHeadline: "With the blessings of Almighty Allah & our families...",
  invitationMessageBody: "We request the honor of your presence as we celebrate our Nikah and the sacred beginning of our eternal union.",
  emotionalQuote: "And We created you in pairs. — Quran 78:8",
  weddingStoryTitle: "Our Journey of Faith & Love",
  weddingStoryText: "Guided by love, family blessings, and shared values, our story is a celebration of two souls coming together to build a future filled with happiness and faith.",
  nikahHeading: "Counting Down to Our Nikah",
  rsvpDeadline: "December 20, 2026",
  dressCode: "Modest Luxury Formal & Traditional",
  musicTrackUrl: "/bgm/audio.mpeg",
  envelopeVideoUrl: "/videos/erasio_envelope_opening_6e1309b3_1080p.mp4",
  themeColors: {
    softIvory: "#F2F1E8",
    champagneGold: "#D2C08A",
    antiqueGoldBronze: "#9E824A",
  },
  images: {
    hero: "/images/couple.png",
    bride: "/images/bride.jpeg",
    groom: "/images/groom.jpeg",
    auditorium: "/images/auditorium.jpg",
    envelopeSeal: "/images/gallery_rings.png",
    gallery: [
      {
        id: "1",
        src: "/images/1f.jpeg",
        alt: "Mohammad Ashik & S. Anisha",
        caption: "Mohammad Ashik & S. Anisha",
        category: "couple"
      },
      {
        id: "2",
        src: "/images/2f.jpeg",
        alt: "Mohammad Ashik & S. Anisha",
        caption: "Mohammad Ashik & S. Anisha",
        category: "couple"
      }
    ]
  },
  socialSharing: {
    title: "Nikah Invitation — Mohammad Ashik & S. Anisha | Jan 3, 2027",
    description: "With the blessings of Almighty Allah & our families, you are cordially invited to celebrate the Nikah of Mohammad Ashik & S. Anisha on Sunday, January 3, 2027 at 11:00 AM at Zara Convention Centre, Ganjimata, Mangaluru.",
    ogImage: "/images/couple.png"
  }
};
