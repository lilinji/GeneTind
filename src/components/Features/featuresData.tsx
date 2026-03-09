import { Feature } from "@/types/feature";

const featuresData = (t: any): Feature[] => [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="currentColor"
          fillOpacity="0.05"
        />
        <path
          d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: t("feature1_title"),
    paragraph: t("feature1_desc"),
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="currentColor" fillOpacity="0.05" />
        <path d="M11 11H29V29H11V11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 17H23V23H17V17Z" fill="currentColor" />
        <path d="M20 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 23V29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 20H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M23 20H29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: t("feature2_title"),
    paragraph: t("feature2_desc"),
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="currentColor" fillOpacity="0.05"/>
        <path d="M13 22L18 27L28 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 27H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: t("feature3_title"),
    paragraph: t("feature3_desc"),
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <rect width="40" height="40" rx="8" fillOpacity="0.05" />
        <path d="M10 12h20v16H10z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 16h12v2H14zm0 6h8v2h-8z" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    title: t("feature4_title"),
    paragraph: t("feature4_desc"),
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
        />
        <rect width="28" height="28" rx="1" />
      </svg>
    ),
    title: t("feature5_title"),
    paragraph: t("feature5_desc"),
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
        />
        <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" />
      </svg>
    ),
    title: t("feature6_title"),
    paragraph: t("feature6_desc"),
  },
];
export default featuresData;
