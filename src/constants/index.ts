import {
  footer_logo,
  instagram,
  X,
  facebook,
  snapchat,
  whatsapp,
  android,
  apple,
  subscribe,
} from "@/assets/svg";
import { best_realestate1, best_realestate2, features1, features2, features3, features4 } from "@/assets/images";
 
export const navItems = [
  {
    label: "الرئيسية",
    href: "/",
    id: "home",
  },
  {
    label: "العقارات",
    href: "",
    id: "real-estate",
  },
  {
    label: "التصنيفات",
    href: "",
    id: "categories",
  },
  {
    label: "اتصل بنا",
    href: "",
    id: "contact",
  },
];

// app/constants/footerData.ts

export const footerData = {
  logo: {
    imageSrc: footer_logo,
    alt: "سكة للتسويق العقاري",
    description:
      "نوفر لك مجموعة متكاملة من الخدمات تشمل تأجير العقارات والمرافق والمنشآت، بالإضافة إلى إدارة علاقات العملاء والمؤجرين",
  },

  socialLinks: [
    { label: "Instagram", icon: instagram, href: "#" },
    { label: "Twitter", icon: X, href: "#" },
    { label: "Facebook", icon: facebook, href: "#" },
    { label: "Snapchat", icon: snapchat, href: "#" },
    { label: "WhatsApp", icon: whatsapp, href: "#" },
  ],

  columns: [
    {
      title: "حول سكة",
      links: [
        { label: "من نحن", href: "#" },
        { label: "تواصل معنا", href: "#" },
        { label: "شمل تأجير", href: "#" },
        { label: "حمل التطبيق الآن", href: "#" },
      ],
    },
    {
      title: "روابط تهمك",
      links: [
        { label: "سياسة الخصوصية", href: "#" },
        { label: "شروط الاستخدام", href: "#" },
        { label: "إقرار مالك العقار", href: "#" },
        { label: "إقرار المستأجر", href: "#" },
      ],
    },

    {
      title: "حمل التطبيق",
      storeButtons: [
        {
          label: "Google Play",
          subLabel: "احصل عليه من",
          icon: android,
          href: "#",
        },
        {
          label: "Apple Store",
          subLabel: "تنزيل من",
          icon: apple,
          href: "#",
        },
      ],
    },
  ],

  newsletter: {
    title: "اشترك في النشرة البريدية",
    placeholder: "البريد الالكتروني",
    icon: subscribe,
  },

  copyright: "© 2024 سكة - جميع الحقوق محفوظة.",
};



export const bestRealEstate = [
  {
    id: 1,
    title: " ولاية مسقط",
    number: "3 عقارات",
    image: best_realestate1,
    
  },
  {
    id: 2,
    title: "  ولاية صلالة",
    number: "3 عقارات",
    image: best_realestate2,
  },
  {
    id: 3,
    title: "  ولاية مطرح",
    number: "3 عقارات",
    image: best_realestate1,
  },

  {
    id: 4,
    title: "  ولاية بوشر",
    number: "3 عقارات",
    image: best_realestate2,
  },

  {
    id: 5,
    title: "  ولاية الجبل الأخضر",
    number: "3 عقارات",
    image: best_realestate1,
  },

  {
    id: 6,
    title: "  ولاية صور    ",
    number: "3 عقارات",
    image: best_realestate2,
  },
];

// data/features.ts
export const properties = [
  {
    id: 1,
    title: "شقة 120م للإيجار اليومي المفروش بالقرب من بلدية ظفار",
    price: 15,
    currency: "ر.ع",
    rating: 4.92,
    reviewsCount: 24,
    location: "ولاية ظفار، الوادي الجديد",
    area: "120 م²",
    bedrooms: 3,
    bathrooms: 1,
    isFeatured: true,
    isForFamiliesOnly: false,
    image: [features1, features2],
  },
  {
    id: 2,
    title: "شقة 120م للإيجار اليومي المفروش بالقرب من بلدية ظفار",
    price: 15,
    currency: "ر.ع",
    rating: 4.92,
    reviewsCount: 24,
    location: "ولاية ظفار، الوادي الجديد",
    area: "120 م²",
    bedrooms: 3,
    bathrooms: 1,
    isFeatured: true,
    isForFamiliesOnly: false,
    image: [features2, features1],
  },
  {
    id: 3,
    title: "شقة 120م للإيجار اليومي المفروش بالقرب من بلدية ظفار",
    price: 15,
    currency: "ر.ع",
    rating: 4.92,
    reviewsCount: 24,
    location: "ولاية ظفار، الوادي الجديد",
    area: "120 م²",
    bedrooms: 3,
    bathrooms: 1,
    isFeatured: true,
    isForFamiliesOnly: false,
    image:[features3, features4],
  },
  {
    id: 4,
    title: "شاليه للإيجار اليومي مفروش بجوار بلدية مسقط",
    price: 15,
    currency: "ر.ع",
    rating: 4.92,
    reviewsCount: 24,
    location: "ولاية مسقط، النقيرة",
    area: "100 م²",
    bedrooms: 2,
    bathrooms: 1,
    isFeatured: true,
    isForFamiliesOnly: true,
    image: [features4, features3],
  },
  {
    id: 5,
    title: "شاليه للإيجار اليومي مفروش بجوار بلدية مسقط",
    price: 15,
    currency: "ر.ع",
    rating: 4.92,
    reviewsCount: 24,
    location: "ولاية مسقط، النقيرة",
    area: "100 م²",
    bedrooms: 2,
    bathrooms: 1,
    isFeatured: true,
    isForFamiliesOnly: true,
    image: [features4, features3],
  },
  {
    id: 6,
    title: "شاليه للإيجار اليومي مفروش بجوار بلدية مسقط",
    price: 15,
    currency: "ر.ع",
    rating: 4.92,
    reviewsCount: 24,
    location: "ولاية مسقط، النقيرة",
    area: "100 م²",
    bedrooms: 2,
    bathrooms: 1,
    isFeatured: true,
    isForFamiliesOnly: true,
    image: [features4, features3],
  },
  {
    id: 7,
    title: "شاليه للإيجار اليومي مفروش بجوار بلدية مسقط",
    price: 15,
    currency: "ر.ع",
    rating: 4.92,
    reviewsCount: 24,
    location: "ولاية مسقط، النقيرة",
    area: "100 م²",
    bedrooms: 2,
    bathrooms: 1,
    isFeatured: true,
    isForFamiliesOnly: true,
    image: [features4, features3],
  },
];
