import { useWindowSize } from "@/hooks/useDimension";

interface WindowSizeProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const window_size = (): WindowSizeProps => {
  const dimension = useWindowSize();

  if (dimension.width <= 650) {
    return {
      isDesktop: false,
      isTablet: false,
      isMobile: true
    }
  };

  if (dimension.width <= 651 && dimension.width >= 950) {
    return {
      isDesktop: false,
      isTablet: true,
      isMobile: false
    }
  };

  if (dimension.width >= 1360) {
    return {
      isDesktop: true,
      isTablet: false,
      isMobile: false
    }
  };

  return {
    isDesktop: false,
    isTablet: false,
    isMobile: false
  };
};

export const typography = {
  size: {
    thin: '10px',
    extra_light: '12px',
    light: '14px',
    regular: '14px',
    medium: '16px',
    semi_bold: '18px',
    bold: '20px',
    extra_bold: '22px',
    black: '24px',

    title: '30px',

    banner_desktop: '100px',
    banner_mobile: '50px',
  },

  weight: {
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
    '800': 800,
  },

  family: {
    default: "--font-montserrat_alternates",
    montserrat: "--font-montserrat",
    poppins: "--font-poppins",
  },

  style: {
    normal: 'normal',
    italic: 'italic',
  }
};

export const colors = {
  primary: '#41B06E',

  white: '#FFFFFF',

  background: '#EBEEF7',

  dark_gray_300: '#303030',
  dark_gray_500: '#505050',
  dark_gray_700: '#707070',

  description: '#AAAAAA',

  loading: '#F55D00'
};

export const dimension = {
  mobile: 650,

  window_size
};

export default {
  colors,
  typography,
  dimension,
  settings: {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    borderRadius: {
      small: '3px',
      mediun: '6px',
      large: '9px',
    }
  }
}