'use client';

import { FunctionComponent } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';

const ToTopControl: FunctionComponent = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const scrollToTopHandler = (): void => {
    scrollTo({ y: 0 });
  };

  return (
    <>
      {scroll.y > 0 && (
        <Button
          onClick={scrollToTopHandler}
          variant={'filled'}
          color={'var(--mantine-color-dark-3)'}
          pos={'fixed'}
          right={'24px'}
          bottom={'12px'}
          radius={'50%'}
          w={42}
          h={42}
          p={0}
          styles={{
            root: {
              zIndex: 2,
            },
          }}
        >
          <IconArrowUp />
        </Button>
      )}
    </>
  );
};

export default ToTopControl;
