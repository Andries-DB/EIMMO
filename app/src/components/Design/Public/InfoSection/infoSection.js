import { useTranslation } from 'react-i18next';
import React from 'react';
import Anchor from '../../Anchor/Anchor';
import './infoSection.css';

function infoSection({ image }) {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="infoSection">
        <div className="columnLeft">
          <h1>{t('InfoSection.Heading')}</h1>
          <p>{t('InfoSection.P1')}</p>
          <p>{t('InfoSection.P2')}</p>
          <div className="buttons">
            <Anchor href="/search" color="primary">{t('Button.Search')}</Anchor>
          </div>
        </div>
        <div className="columnRight">
          <img alt="Home" src={image}></img>
        </div>
      </div>
    </section>
  );
}

export default infoSection;
