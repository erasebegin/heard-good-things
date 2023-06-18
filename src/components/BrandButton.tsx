import { Button } from '@chakra-ui/react';

interface BrandButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color: 'green' | 'blue' | 'yellow' | 'pink' | 'orange';
  rotate?: number;
  size?: string;
}

interface ShadowAndBg {
  [keyof: string]: { bg: string; shadow: string };
}

const shadowAndBg: ShadowAndBg = {
  green: { bg: 'brandGreen.300', shadow: '#eb9d93' },
  blue: { bg: 'brandBlue.200', shadow: '#f7ec37' },
  yellow: { bg: 'brandYellow.300', shadow: '#47a060' },
  pink: { bg: 'brandPink.100', shadow: '#f9d294' },
  orange: { bg: 'brandOrange.200', shadow: '#9ed4e6' }
};

const BrandButton: React.FC<BrandButtonProps> = ({
  onClick,
  children,
  color,
  size,
  rotate = 0
}) => {
  console.log(shadowAndBg[color].bg);
  return (
    <Button
      onClick={() => onClick && onClick()}
      bg={shadowAndBg[color].bg}
      p={8}
      boxShadow={`${shadowAndBg[color].shadow} 5px 5px 0px`}
      color="white"
      transform={`rotate(${rotate}deg)`}
      border="none"
      transition="100ms ease-in"
      fontWeight={700}
      fontSize={size || "1.5rem"}
      borderRadius="10px"
      _focus={{
        bg: shadowAndBg[color].bg,
        boxShadow: `${shadowAndBg[color].shadow} 5px 5px 0px`
      }}
      _active={{
        bg: shadowAndBg[color].bg,
        boxShadow: `${shadowAndBg[color].shadow} 0px 0px 0px`,
        transform: `translate(5px, 5px) rotate(${rotate}deg)`,
        transition: '100ms ease-out'
      }}
      _hover={{ bg: shadowAndBg[color].bg }}
    >
      {children}
    </Button>
  );
};

export default BrandButton;
