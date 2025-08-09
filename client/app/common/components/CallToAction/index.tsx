"use client";

import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import Link from "next/link";

interface CallToActionProps {
  buttonLink: string;
  translationKey: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  translationKey,
  buttonLink,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.fullTitle}>
          <div className={style.title}>{t(`${translationKey}.title`)}</div>
          {i18n.exists(`${translationKey}.subtitle`) && (
            <div className={style.subTitle}>
              {t(`${translationKey}.subtitle`)}
            </div>
          )}
        </div>
        <div className={style.content}>{t(`${translationKey}.content`)}</div>
        <Link href={buttonLink} className={style.button}>
          {t(`${translationKey}.button`)}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
