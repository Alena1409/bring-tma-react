import { Button } from '../button/button';
import './media.css';
import { mediaData } from '@/data/media-data';

export default function Media() {
  return (
    <div className='media'>
      {mediaData.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.link}
            asChild
            variant='outline'
            size='lg'
            className='media__button'
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Icon />
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
