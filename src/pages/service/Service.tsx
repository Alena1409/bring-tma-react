import { Button } from '@/components/ui/button/button';
import servicesData from '@/data/services-data';
import { CircleCheckBig } from 'lucide-react';
import { useParams } from 'react-router-dom';
import './Service.css';

export default function Service() {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return <div className="service-page__empty">Service not found</div>;
  }

  const HeroIcon = service.icon;

  return (
    <section className="service-page">
      <div className="service-page__hero">
        <div className="service-page__hero-main">
          <h1 className="service-page__hero-title">
            <span className="service-page__hero-icon">
              <HeroIcon />
            </span>
            <span>{service.title}</span>
          </h1>
          <p className="service-page__hero-description">{service.description}</p>
        </div>

        <div className="service-page__hero-actions">
          <Button variant="secondary" className="service-page__cta">
            Order service
          </Button>
        </div>
      </div>

      <div className="service-page__grid">
        <section className="service-page__section">
          <div className="service-page__list">
            {service.advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.text} className="service-page__list-item">
                  <div className="service-page__list-icon service-page__list-icon--accent">
                    <Icon />
                  </div>
                  <div className="service-page__list-text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="service-page__section">
          <ul className="service-page__feature-list">
            {service.features.map((item) => (
              <li key={item} className="service-page__feature-item">
                <CircleCheckBig className="service-page__feature-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
