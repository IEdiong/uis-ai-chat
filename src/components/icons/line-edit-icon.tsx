import { Icon } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/react';

const LineEditIcon = (props: IconProps) => (
  <Icon
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    stroke='currentColor'
    {...props}
  >
    <path d='M12 20h9' />
    <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
  </Icon>
);

export default LineEditIcon;
