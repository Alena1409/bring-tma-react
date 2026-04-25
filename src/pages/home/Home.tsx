import { Button } from '@/components/ui/button/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>HOME</div>
      <Button asChild>
          <Link to="/service">
            <ArrowLeft />
            service
          </Link>
        </Button>
    </>
  );
}
