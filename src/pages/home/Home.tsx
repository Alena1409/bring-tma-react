import ServiceCard from '@/components/ui/service-card/service-card';
import servicesData from '@/data/services-data';
import './Home.css';

export default function Home() {
  return (
    <section className="home">
      {servicesData.map((item) => (
        <ServiceCard
          key={item.id}
          id={item.id}
          title={item.title}
          Icon={item.icon}
        />
      ))}
    </section>
  );
}
