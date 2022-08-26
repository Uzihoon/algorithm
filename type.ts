type Data = [location: string, timeStamp: number];

const data = { a: 5 };

type Data1 = typeof data;

type HasFourLegs<Animal> = Animal extends { legs: 4 } ? Animal : never;

type Animals = 'Bird' | 'Dog' | 'Ant' | 'Wolf';

type FourLegs = HasFourLegs<Animals>;

type SupportedLangs = 'en' | 'pt' | 'zh';

type FooterLocaleIDs = 'header' | 'footer';

type AllLocaleIDs = `${SupportedLangs}_${FooterLocaleIDs}_id`;

// "en_header_id" | "en_footer_id" | "pt_header_id" | "pt_footer_id" | "zh_header_id" | "zh_footer_id"
