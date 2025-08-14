import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>
    </header>
  );
};

export default Header;
