import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from '@chakra-ui/react';

type Props = {
  message: string;
  show: boolean;
  title?: string;
  type?: 'error' | 'success' | 'warning' | 'info';
};

const CustomAlert = ({ message, show, title, type }: Props) => {
  return (
    <Alert
      status={type || 'error'}
      overflow="hidden"
      pointerEvents={show ? 'initial' : 'none'}
      opacity={show ? 1 : 0}
      maxHeight={show ? '1000px' : '0px'}
      transition="200ms ease-in-out"
    >
      <AlertIcon />
      <AlertTitle fontSize="xl">{title || 'Error'}</AlertTitle>
      <AlertDescription fontSize="xl">{message}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
