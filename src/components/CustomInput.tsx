import { Input, InputProps } from '@chakra-ui/react';

const CustomInput: React.FC<InputProps> = (props) => {
  return (
    <Input
      bg="brandOrange.50"
      p={8}
      fontSize="2rem"
      _placeholder={{ color: 'brandGray.400' }}
      {...props}
    />
  );
};

export default CustomInput;
