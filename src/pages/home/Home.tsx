import ServiceCard from '@/components/ui/service-card/service-card';
import servicesData from '@/data/services-data';
import './Home.css';
import Media from '@/components/ui/media/media';

export default function Home() {
  return (
    <>
    <Media />
    <section className="home__grid">
      {servicesData.map((item) => (
        <ServiceCard
          key={item.id}
          id={item.id}
          title={item.title}
          Icon={item.icon}
        />
      ))}
    </section>
    </>
  );
}
