import {
  Store,
  ShieldCheck,
  LockKeyhole,
  BookCheck,
  Handbag,
  HeartPlus,
  Earth,
  Signpost,
  Route,
  Building2,
  Hammer,
  ListCheck
} from 'lucide-react';

const servicesData = [
  {
    id: 'marketplaces',
    title: 'Маркетплейсы (WB, Ozon)',
    icon: Store,
    description: 'Транспортировка ваших заказов из ПВЗ во Владикавказе',
    features: [
      'Доставка 5-15 дней',
      'Забор груза с ПВЗ',
      'Контроль качества по запросу',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'any_shops',
    title: 'Другие интернет-магазины',
    icon: Handbag,
    description:
      'Доставка оплаченных вами товаров из любых интернет-магазинов, работающих со СДЭК.',
    features: [
      'Доставка 5-15 дней',
      'Забор груза с ПВЗ',
      'Контроль качества по запросу',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'beauty_health',
    title: 'Красота и здоровье',
    icon: HeartPlus,
    description: 'Доставка товаров из Золотого Яблока, Fitomarket и т. д.',
    features: [
      'Доставка 5-15 дней',
      'Бережная перевозка',
      'Соблюдение условий хранения',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'rf_cis_ge',
    title: 'РФ и СНГ ↔ Грузия',
    icon: Signpost,
    description: 'Регулярное грузовое сообщение между странами.',
    features: [
      'Доставка 5-15 дней',
      'Сборные грузы от 1 кг',
      'Страховка отправлений',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'europe_ge',
    title: 'Европа ↔ Грузия',
    icon: Earth,
    description: 'Логистика из стран ЕС в Грузию и обратно.',
    features: [
      'Доставка 15-30 дней',
      'Регулярные рейсы',
      'Грузы любых габаритов',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'ukraine_ge',
    title: 'Украина ↔ Грузия',
    icon: Route,
    description: 'Перевозка любых грузов по отработанным маршрутам.',
    features: [
      'Доставка 15-30 дней',
      'Услуга под ключ',
      'Логистическое сопровождение',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'business',
    title: 'Перевозки для бизнеса',
    icon: Building2,
    description: 'Транспортные услуги для бизнеса',
    features: [
      'Доставка 5-15 дней',
      'Мелкие и крупные партии',
      'Прохождение таможни',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'special_stores',
    title: 'Техника, Инструменты, Запчасти, Все для дома',
    icon: Hammer,
    description: 'Перевозка из Leroy Merlin, Exist и ВсеИнструменты.',
    features: [
      'Доставка 5-15 дней',
      'Перевозка тяжеловесных грузов',
      'Дополнительная обрешетка',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
  {
    id: 'delivery_terms',
    title: 'Условия доставки',
    icon: ListCheck,
    description: 'Правила перевозки и важная информация.',
    features: [
      'Расчет веса и объема',
      'Условия страхования',
      'Дополнительные услуги',
    ],
    advantages: [
      { icon: ShieldCheck, text: 'Полная безопасность' },
      { icon: LockKeyhole, text: 'Ответственное хранение' },
      { icon: BookCheck, text: 'Учет и контроль' },
    ],
  },
];

export default servicesData;
