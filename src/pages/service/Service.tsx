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
          <p className="service-page__hero-slogan">{service.slogan}</p>
          <p className="service-page__hero-description">
            {service.description}
          </p>
        </div>

        {service.characteristics.length ? (
          <div className="service-page__hero-badges">
            {service.characteristics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.text}-${item.context}`}
                  className="service-page__badge"
                >
                  <div className="service-page__badge-icon">
                    <Icon />
                  </div>
                  <div className="service-page__badge-copy">
                    <span className="service-page__badge-label">
                      {item.text}
                    </span>
                    <span className="service-page__badge-value">
                      {item.context}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="service-page__layout">
        <div className="service-page__main-column">
          {service.costCalculation.length ? (
            <section className="service-page__section">
              <div className="service-page__section-head">
                <h2 className="service-page__section-title">
                  Расчет стоимости
                </h2>
              </div>
              <ul className="service-page__detail-list">
                {service.costCalculation.map((item) => (
                  <li key={item} className="service-page__detail-item">
                    <CircleCheckBig className="service-page__detail-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {service.steps?.length ? (
            <section className="service-page__section">
              <div className="service-page__section-head">
                <h2 className="service-page__section-title">Оформление</h2>
              </div>
              <ol className="service-page__steps">
                {service.steps.map((step, index) => (
                  <li
                    key={`${step.label}-${index}`}
                    className="service-page__step"
                  >
                    <span className="service-page__step-index">
                      {index + 1}
                    </span>
                    <div className="service-page__step-body">
                      <span className="service-page__step-text">
                        {step.label}
                      </span>
                      {step.sub ? (
                        <span className="service-page__step-subtext">
                          {step.sub}
                        </span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </div>

        <aside className="service-page__side-column">
          {service.tariff.length ? (
            <section className="service-page__section service-page__section--highlight">
              <div className="service-page__section-head">
                <h2 className="service-page__section-title">Тарифы</h2>
              </div>
              <ul className="service-page__tariff-list">
                {service.tariff.map((item) => (
                  <li key={item} className="service-page__tariff-item">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {service.features.length ? (
            <section className="service-page__section">
              <div className="service-page__section-head">
                <h2 className="service-page__section-title">Особенности</h2>
              </div>
              <ul className="service-page__feature-list">
                {service.features.map((item) => (
                  <li key={item} className="service-page__feature-item">
                    <CircleCheckBig className="service-page__feature-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {service.advantages.length ? (
            <section className="service-page__section">
              <div className="service-page__section-head">
                <h2 className="service-page__section-title">Преимущества</h2>
              </div>
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
          ) : null}
        </aside>
      </div>
    </section>
  );
}
