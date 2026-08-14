'use client';

import { Box, Button, Group, Image, Modal } from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';
import { IconDownload, IconMaximize, IconMinimize, IconX, IconZoomIn, IconZoomOut } from '@tabler/icons-react';
import type { ComponentPropsWithoutRef, JSX, MouseEvent } from 'react';
import { useState } from 'react';
import Cropper from 'react-easy-crop';

type MdxImageProps = ComponentPropsWithoutRef<'img'>;

interface Point {
  x: number;
  y: number;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;
const DEFAULT_ASPECT_WIDTH = 16;
const DEFAULT_ASPECT_HEIGHT = 9;
const DEFAULT_ASPECT = DEFAULT_ASPECT_WIDTH / DEFAULT_ASPECT_HEIGHT;

export function MdxImage({ alt = '', src = '', ...props }: MdxImageProps): JSX.Element | null {
  const [opened, setOpened] = useState(false);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(MIN_ZOOM);
  const [rotation] = useState<number>(0);
  const [aspect, setAspect] = useState<number>(DEFAULT_ASPECT);

  const { toggle: fullscreenToggle, fullscreen } = useFullscreen();

  const imageSrc = typeof src === 'string' ? src : '';

  if (!imageSrc) {
    return null;
  }

  const openHandler = (evt: MouseEvent<HTMLImageElement>): void => {
    const { naturalWidth, naturalHeight } = evt.currentTarget;
    setAspect(naturalHeight ? naturalWidth / naturalHeight : DEFAULT_ASPECT);
    setCrop({ x: 0, y: 0 });
    setZoom(MIN_ZOOM);
    setOpened(true);
  };

  const closeHandler = (): void => {
    setOpened(false);
  };

  const zoomUpdateHandler = (operation: 'in' | 'out'): void => {
    const modifiersMap = { in: ZOOM_STEP, out: -ZOOM_STEP };
    setZoom((currentZoomLevel) => currentZoomLevel + modifiersMap[operation]);
  };

  const zoomInHandler = (): void => zoomUpdateHandler('in');
  const zoomOutHandler = (): void => zoomUpdateHandler('out');

  const downloadHandler = (): void => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop() || 'screenshot.webp';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonStyles = {
    root: {
      padding: '5px',
      borderRadius: '8px',
      borderColor: 'var(--mantine-color-dark-4)',
    },
  };

  return (
    <>
      {/* Кадры в справке ужаты шириной колонки — по клику открываем их в лайтбоксе с зумом. */}
      <Image {...props} alt={alt} src={imageSrc} style={{ cursor: 'zoom-in' }} onClick={openHandler} />

      <Modal
        opened={opened}
        onClose={closeHandler}
        fullScreen
        padding={0}
        withCloseButton={false}
        styles={{ content: { background: 'rgba(0, 0, 0, 0.9)' }, body: { height: '100vh', padding: 0 } }}
      >
        <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Group
            pos="absolute"
            top={12}
            right={12}
            p={12}
            gap={8}
            style={{
              zIndex: 1,
              borderRadius: 8,
              backgroundColor: 'var(--mantine-color-dark-8)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
            }}
          >
            <Button onClick={downloadHandler} variant="outline" color="rgba(255, 255, 255, 1)" styles={buttonStyles}>
              <IconDownload />
            </Button>

            <Button
              onClick={zoomOutHandler}
              disabled={zoom <= MIN_ZOOM}
              variant="outline"
              color="rgba(255, 255, 255, 1)"
              styles={buttonStyles}
            >
              <IconZoomOut />
            </Button>

            <Button
              onClick={zoomInHandler}
              disabled={zoom >= MAX_ZOOM}
              variant="outline"
              color="rgba(255, 255, 255, 1)"
              styles={buttonStyles}
            >
              <IconZoomIn />
            </Button>

            <Button onClick={fullscreenToggle} variant="outline" color="rgba(255, 255, 255, 1)" styles={buttonStyles}>
              {fullscreen ? <IconMinimize /> : <IconMaximize />}
            </Button>

            <Button onClick={closeHandler} variant="outline" color="rgba(255, 255, 255, 1)" styles={buttonStyles}>
              <IconX />
            </Button>
          </Group>

          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
            rotation={rotation}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            showGrid={false}
            style={{ cropAreaStyle: { boxShadow: 'none', border: 'none' } }}
          />
        </Box>
      </Modal>
    </>
  );
}
