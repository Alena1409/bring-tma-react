import { Link } from 'react-router-dom';
import './service-card.css';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

type Props = {
  id: string;
  title: string;
  Icon: LucideIcon;
};

export default function ServiceCard({ id, title, Icon }: Props) {
  return (
    <Link to={`/service/${id}`} className="service-card">
      <Card>
        <CardContent>
          <div className="service-card__icon">
            <Icon />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="service-card__title">{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
