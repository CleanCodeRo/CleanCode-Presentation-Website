import { Metadata } from "next";
import ProjectForm from "@components/ProjectForm";
import style from "@components/Contact/style.module.scss";

export const metadata: Metadata = {
  title: "Share Ideas",
  description:
    "Get in touch with us for inquiries, support, or more information about our services.",
};

const ShareIdeas = () => {
  return (
    <section className={style.contactComponent}>
      <div className={style.TitleAndDescription}>
        <div className={style.contactTitle}>
          Don&apos;t wait -{" "}
          <span className={style.highlight}>share your ideas with us.</span>
        </div>
        <div className={style.contactDescription}>
          Connect now to explore innovative software solutions and take the
          first step towards making your dream project a success!
        </div>
      </div>
      <div className={style.contactSubComponent}>
        <div className={style.contactForm}></div>
        <ProjectForm />
      </div>
    </section>
  );
};

export default ShareIdeas;
