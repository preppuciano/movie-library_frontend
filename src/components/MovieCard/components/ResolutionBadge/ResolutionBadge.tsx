import './ResolutionBadge.scss';

interface propsInterface {
  width: number;
  height: number;
}

export default function ResolutionBadge(props: propsInterface) {

  function getResolution(width: number, height: number): string {
    if (width === 1920 && height === 1080) {
      return 'FULL HD';
    } else if (width === 1280 && height === 720) {
      return 'HD';
    } else if (width >= 3840 && height >= 2160) {
      return '4K';
    } else if (width >= 2560 && height >= 1440) {
      return '3K';
    } else {
      return 'N/A';
    }
  }

  return (
    <div className='resolution-badge'>{getResolution(props.width, props.height)}</div>
  );
}