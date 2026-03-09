export type Lang = "en" | "ru" | "am";

export interface Translations {
  nav: {
    home: string;
    rooms: string;
    hotel: string;
    dining: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    welcomeTo: string;
    subtitle: string;
    exploreRooms: string;
    bookNow: string;
  };
  about: {
    label: string;
    title: string;
    text: string;
    discoverMore: string;
  };
  location: {
    label: string;
    title: string;
    text: string;
  };
  amenities: {
    label: string;
    title: string;
    wifi: string;
    wifiDesc: string;
    sport: string;
    sportDesc: string;
    restaurant: string;
    restaurantDesc: string;
    bar: string;
    barDesc: string;
  };
  roomsPreview: {
    label: string;
    title: string;
    viewAll: string;
    guests: string;
    from: string;
  };
  restaurantPreview: {
    label: string;
    title: string;
    text: string;
    exploreDining: string;
  };
  cta: {
    label: string;
    title: string;
    text: string;
    bookYourStay: string;
  };
  roomsPage: {
    subtitle: string;
    title: string;
    intro: string;
    guests: string;
    bathroom: string;
    rooms: string;
    bookNowFrom: string;
    roomNames: {
      standardMountain: string;
      standardCourtyard: string;
      standardNoBalcony: string;
      deluxe: string;
      familySuite: string;
      signatureSuite: string;
      chalet: string;
    };
    features: {
      kingBed: string;
      showerBathroom: string;
      modernAmenities: string;
      modernAmenitiesPleasant: string;
      balconyViews: string;
      twinBeds: string;
      courtyardBalcony: string;
      spaciousElegant: string;
      balconyViewsBeautiful: string;
      kingBedComfort: string;
      privateEntrance: string;
      elegantSofa: string;
      superKingBed: string;
      tubView: string;
      elegantFurnitureSofa: string;
      sharingBalconies: string;
      showerTubView: string;
      elegantFurniture: string;
      terraceViews: string;
    };
  };
  hotelPage: {
    subtitle: string;
    title: string;
    overview1: string;
    overview2: string;
    viewRooms: string;
    diningLabel: string;
    diningTitle: string;
    diningText: string;
    exploreDining: string;
    rooftopLabel: string;
    rooftopTitle: string;
    rooftopText: string;
    wellnessLabel: string;
    wellnessTitle: string;
    wellnessText: string;
    bookYourStay: string;
    serviceLabel: string;
    serviceTitle: string;
    serviceText: string;
    bookNow: string;
  };
  diningPage: {
    subtitle: string;
    title: string;
    restaurantLabel: string;
    restaurantTitle: string;
    restaurantText1: string;
    restaurantText2: string;
    menuLabel: string;
    menuTitle: string;
    viewFullMenu: string;
    rooftopLabel: string;
    rooftopTitle: string;
    rooftopText: string;
    hoursLabel: string;
    hoursTitle: string;
    hoursText: string;
    callUs: string;
    emailUs: string;
  };
  contactPage: {
    subtitle: string;
    title: string;
    reachUs: string;
    weWouldLove: string;
    address: string;
    addressValue: string;
    phone: string;
    email: string;
    restaurantHours: string;
    restaurantHoursValue: string;
    sendMessage: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
  bookPage: {
    label: string;
    title: string;
    text: string;
    needAssistance: string;
    orEmail: string;
  };
  footer: {
    brandText: string;
    quickLinks: string;
    contact: string;
    hours: string;
    checkin: string;
    restaurantHours: string;
    bookNow: string;
    rights: string;
  };
  eventPopup: {
    label: string;
    title: string;
    text: string;
    time: string;
    location: string;
    limited: string;
    reserve: string;
  };
}
