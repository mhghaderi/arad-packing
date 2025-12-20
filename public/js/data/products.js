const productsData = {
  // 1. کیک و کلوچه
  PM50: {
    name: "PM50",
    category: "کیک و کلوچه",
    usage: {
      1: "بسته بندی کیک و کلوچه",
      2: "بسته بندی ویفر",
      3: "بسته بندی نان های شیرینی و اسنک",
    },
    slug: "کیک-کلوچه",
    space: {
      packWidth_A: "6-160 mm",
      packLength_B: "120 x 260 - 200 x 500 mm",
      packHeight_C: "1-80 mm",
      weight: "800kg",
      workingVoltage: "220-380 v",
      powerConsumption: "3 kw",
      speed: "40-60 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی PM50 مخصوص بسته‌بندی کیک و کلوچه با سرعت بالا و دقت فوق‌العاده. این دستگاه قابلیت بسته‌بندی انواع کیک‌های صنعتی، کاپ کیک، کیک صبحانه و کلوچه‌های مختلف را دارد.`,
    images: {
      thumbnails: {
        default: "../images/product-image/PM50/thumbnail1.jpg",
        hover: "../images/product-image/PM50/thumbnail2.jpg",
      },
      size: "../images/product-image/PM50/product-size.jpg",
      gallery: [
        "../images/product-image/PM50/1.jpg",
        "../images/product-image/PM50/2.jpg",
        "../images/product-image/PM50/3.jpg",
      ],
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 2. بیسکوئیت
  PB60: {
    name: "PB60",
    category: "بیسکوئیت",
    usage: {
      1: "بسته بندی بیسکوئیت ساده",
      2: "بسته بندی بیسکوئیت شکلاتی",
      3: "بسته بندی کراکر و بیسکوئیت رژیمی",
    },
    slug: "بیسکوئیت",
    space: {
      packWidth_A: "5-120 mm",
      packLength_B: "100 x 200 - 180 x 400 mm",
      packHeight_C: "0.5-50 mm",
      weight: "750kg",
      workingVoltage: "220-380 v",
      powerConsumption: "2.8 kw",
      speed: "60-80 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی بیسکوئیت PB60 با قابلیت تنظیم سرعت و حرارت برای انواع بیسکوئیت. مناسب برای خطوط تولید بیسکوئیت‌های صنعتی و نیمه صنعتی.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 3. ویفر
  PW70: {
    name: "PW70",
    category: "ویفر",
    usage: {
      1: "بسته بندی ویفر شکلاتی",
      2: "بسته بندی ویفر میوه‌ای",
      3: "بسته بندی ویفر کریمی",
    },
    slug: "ویفر",
    space: {
      packWidth_A: "4-100 mm",
      packLength_B: "80 x 180 - 150 x 350 mm",
      packHeight_C: "0.3-30 mm",
      weight: "700kg",
      workingVoltage: "220-380 v",
      powerConsumption: "2.5 kw",
      speed: "80-100 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی ویفر PW70 با سیستم حرارتی پیشرفته برای بسته‌بندی ویفرهای حساس. قابلیت بسته‌بندی ویفر در ابعاد مختلف با حفظ تازگی محصول.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 4. تجهیزات پزشکی
  PMD80: {
    name: "PMD80",
    category: "تجهیزات پزشکی",
    usage: {
      1: "بسته بندی سرنگ",
      2: "بسته بندی گاز استریل",
      3: "بسته بندی دستکش یکبار مصرف",
    },
    slug: "تجهیزات-پزشکی",
    space: {
      packWidth_A: "10-200 mm",
      packLength_B: "150 x 300 - 250 x 600 mm",
      packHeight_C: "2-100 mm",
      weight: "950kg",
      workingVoltage: "220-380 v",
      powerConsumption: "3.5 kw",
      speed: "30-50 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی تجهیزات پزشکی PMD80 با استانداردهای بهداشتی بالا. مناسب برای بسته‌بندی لوازم پزشکی استریل با شرایط کاملاً بهداشتی.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 5. ساندویچ و همبرگر
  PS90: {
    name: "PS90",
    category: "ساندویچ و همبرگر",
    usage: {
      1: "بسته بندی همبرگر",
      2: "بسته بندی ساندویچ سرد",
      3: "بسته بندی ساندویچ گرم",
    },
    slug: "ساندویچ-همبرگر",
    space: {
      packWidth_A: "80-250 mm",
      packLength_B: "200 x 400 - 300 x 800 mm",
      packHeight_C: "10-120 mm",
      weight: "1100kg",
      workingVoltage: "220-380 v",
      powerConsumption: "4 kw",
      speed: "20-40 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی ساندویچ و همبرگر PS90 با قابلیت بسته‌بندی تحت خلأ. مناسب برای فست‌فودها و کارخانه‌های تولید غذای آماده.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 6. شیرینی و شکلات
  PC100: {
    name: "PC100",
    category: "شیرینی و شکلات",
    usage: {
      1: "بسته بندی شکلات",
      2: "بسته بندی تافی",
      3: "بسته بندی آبنبات",
    },
    slug: "شیرینی-شکلات",
    space: {
      packWidth_A: "5-80 mm",
      packLength_B: "50 x 100 - 150 x 300 mm",
      packHeight_C: "1-40 mm",
      weight: "650kg",
      workingVoltage: "220-380 v",
      powerConsumption: "2.2 kw",
      speed: "100-120 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی شیرینی و شکلات PC100 با سیستم خنک‌کننده برای محصولات حساس به حرارت. قابلیت بسته‌بندی شکلات در اشکال مختلف.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 7. بستنی
  PI110: {
    name: "PI110",
    category: "بستنی",
    usage: {
      1: "بسته بندی بستنی چوبی",
      2: "بسته بندی بستنی قیفی",
      3: "بسته بندی فالوده",
    },
    slug: "بستنی",
    space: {
      packWidth_A: "30-150 mm",
      packLength_B: "100 x 200 - 200 x 400 mm",
      packHeight_C: "5-80 mm",
      weight: "850kg",
      workingVoltage: "220-380 v",
      powerConsumption: "3.2 kw",
      speed: "50-70 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی بستنی PI110 با سیستم سرمایشی برای حفظ دمای محصول. مناسب برای کارخانه‌های تولید بستنی و دسرهای منجمد.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 8. ظروف یکبار مصرف
  PD120: {
    name: "PD120",
    category: "ظروف یکبار مصرف",
    usage: {
      1: "بسته بندی لیوان یکبار مصرف",
      2: "بسته بندی قاشق و چنگال",
      3: "بسته بندی ظروف غذاخوری",
    },
    slug: "ظروف-یکبار-مصرف",
    space: {
      packWidth_A: "50-300 mm",
      packLength_B: "150 x 300 - 400 x 800 mm",
      packHeight_C: "20-150 mm",
      weight: "900kg",
      workingVoltage: "220-380 v",
      powerConsumption: "3 kw",
      speed: "40-60 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی ظروف یکبار مصرف PD120 با قابلیت بسته‌بندی حجمی بالا. مناسب برای صنایع تولید ظروف پلاستیکی و کاغذی.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 9. قطعات
  PP130: {
    name: "PP130",
    category: "قطعات",
    usage: {
      1: "بسته بندی قطعات الکترونیکی",
      2: "بسته بندی لوازم یدکی",
      3: "بسته بندی پیچ و مهره",
    },
    slug: "قطعات",
    space: {
      packWidth_A: "3-50 mm",
      packLength_B: "30 x 60 - 100 x 200 mm",
      packHeight_C: "0.5-20 mm",
      weight: "600kg",
      workingVoltage: "220-380 v",
      powerConsumption: "2 kw",
      speed: "120-150 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی قطعات PP130 با سیستم شمارش دقیق. مناسب برای بسته‌بندی قطعات کوچک صنعتی و الکترونیکی.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 10. توت فرنگی و توت‌بارکو
  PB140: {
    name: "PB140",
    category: "توت فرنگی و توت‌بارکو",
    usage: {
      1: "بسته بندی توت فرنگی تازه",
      2: "بسته بندی توت خشک",
      3: "بسته بندی میوه‌های ریز",
    },
    slug: "توت-فرنگی",
    space: {
      packWidth_A: "20-120 mm",
      packLength_B: "100 x 200 - 200 x 400 mm",
      packHeight_C: "3-60 mm",
      weight: "780kg",
      workingVoltage: "220-380 v",
      powerConsumption: "2.7 kw",
      speed: "60-80 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی توت فرنگی PB140 با سیستم حفاظتی برای محصولات حساس. مناسب برای بسته‌بندی میوه‌های تازه و خشک.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 11. آرد و غلات
  PG150: {
    name: "PG150",
    category: "آرد و غلات",
    usage: {
      1: "بسته بندی آرد",
      2: "بسته بندی غلات",
      3: "بسته بندی حبوبات",
    },
    slug: "آرد-غلات",
    space: {
      packWidth_A: "100-500 mm",
      packLength_B: "200 x 400 - 500 x 1000 mm",
      packHeight_C: "50-200 mm",
      weight: "1300kg",
      workingVoltage: "220-380 v",
      powerConsumption: "5 kw",
      speed: "10-30 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی آرد و غلات PG150 با سیستم توزین دقیق. مناسب برای بسته‌بندی محصولات پودری و دانه‌ای با وزن‌های مختلف.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 12. میوه
  PF160: {
    name: "PF160",
    category: "میوه",
    usage: {
      1: "بسته بندی سیب",
      2: "بسته بندی پرتقال",
      3: "بسته بندی میوه‌های درختی",
    },
    slug: "میوه",
    space: {
      packWidth_A: "50-200 mm",
      packLength_B: "150 x 300 - 300 x 600 mm",
      packHeight_C: "20-100 mm",
      weight: "950kg",
      workingVoltage: "220-380 v",
      powerConsumption: "3.3 kw",
      speed: "30-50 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی میوه PF160 با سیستم شستشوی قبل از بسته‌بندی. مناسب برای بسته‌بندی میوه‌های تازه با حفظ طراوت.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 13. نان
  PB170: {
    name: "PB170",
    category: "نان",
    usage: {
      1: "بسته بندی نان صنعتی",
      2: "بسته بندی نان تست",
      3: "بسته بندی نان سنتی",
    },
    slug: "نان",
    space: {
      packWidth_A: "100-300 mm",
      packLength_B: "200 x 400 - 400 x 800 mm",
      packHeight_C: "30-120 mm",
      weight: "1000kg",
      workingVoltage: "220-380 v",
      powerConsumption: "3.8 kw",
      speed: "25-45 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی نان PB170 با سیستم تهویه برای جلوگیری از کپک زدگی. مناسب برای نانوایی‌های صنعتی و نان‌های بسته‌بندی.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 14. لوازم التحریر
  PS180: {
    name: "PS180",
    category: "لوازم التحریر",
    usage: {
      1: "بسته بندی خودکار",
      2: "بسته بندی مداد",
      3: "بسته بندی دفترچه",
    },
    slug: "لوازم-التحریر",
    space: {
      packWidth_A: "5-80 mm",
      packLength_B: "100 x 200 - 250 x 500 mm",
      packHeight_C: "2-50 mm",
      weight: "550kg",
      workingVoltage: "220-380 v",
      powerConsumption: "1.8 kw",
      speed: "80-100 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی لوازم التحریر PS180 با سیستم قرارگیری دقیق محصولات. مناسب برای بسته‌بندی محصولات اداری و مدرسه.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 15. لوازم آرایشی و بهداشتی
  PC190: {
    name: "PC190",
    category: "لوازم آرایشی و بهداشتی",
    usage: {
      1: "بسته بندی شامپو",
      2: "بسته بندی کرم",
      3: "بسته بندی لوازم آرایشی",
    },
    slug: "آرایشی-بهداشتی",
    space: {
      packWidth_A: "20-150 mm",
      packLength_B: "80 x 160 - 200 x 400 mm",
      packHeight_C: "5-80 mm",
      weight: "720kg",
      workingVoltage: "220-380 v",
      powerConsumption: "2.5 kw",
      speed: "50-70 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی لوازم آرایشی و بهداشتی PC190 با شرایط کاملاً بهداشتی. مناسب برای محصولات حساس به آلودگی.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 16. ماکارونی
  PM200: {
    name: "PM200",
    category: "ماکارونی",
    usage: {
      1: "بسته بندی اسپاگتی",
      2: "بسته بندی پنه",
      3: "بسته بندی ماکارونی فرمی",
    },
    slug: "ماکارونی",
    space: {
      packWidth_A: "80-250 mm",
      packLength_B: "150 x 300 - 300 x 600 mm",
      packHeight_C: "20-100 mm",
      weight: "1050kg",
      workingVoltage: "220-380 v",
      powerConsumption: "4.2 kw",
      speed: "35-55 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی ماکارونی PM200 با سیستم ضد رطوبت. مناسب برای بسته‌بندی انواع ماکارونی و پاستا با حفظ کیفیت.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },

  // 17. اسفنج بازی
  PS210: {
    name: "PS210",
    category: "اسفنج بازی",
    usage: {
      1: "بسته بندی اسفنج حمام",
      2: "بسته بندی اسفنج آشپزخانه",
      3: "بسته بندی اسفنج صنعتی",
    },
    slug: "اسفنج-بازی",
    space: {
      packWidth_A: "50-200 mm",
      packLength_B: "100 x 200 - 250 x 500 mm",
      packHeight_C: "10-80 mm",
      weight: "680kg",
      workingVoltage: "220-380 v",
      powerConsumption: "2.3 kw",
      speed: "45-65 بسته در دقیقه",
    },
    description: `دستگاه بسته‌بندی اسفنج بازی PS210 با سیستم فشرده‌سازی. مناسب برای بسته‌بندی محصولات اسفنجی با حجم متغیر.`,
    images: {
      imagePath1: "../images/product-image/PM50/1.jpg",
      imagePath2: "../images/product-image/PM50/2.jpg",
      imagePath3: "../images/product-image/PM50/3.jpg",
    },
    videos: {
      videoPath1: "../assets/videos/product-videos/PM50/PM50.mp4",
    },
  },
};

export default productsData;
