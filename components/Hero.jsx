import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words", // kita split dia menjadi chars dan words artinya per huruf
    });
    const paragraphSPlit = new SplitText(".subtitle", {
      type: "lines", // kita split dia menjadi lines artinya per baris
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06, // jeda antar komponen dalam menjalankan animasi
    });

    gsap.from(paragraphSPlit.lines, {
      opacity: 0,
      yPercent: 100,
      duration1: 1.8,
      ease: "expo.out",
      stagger: 0.06, // jeda antar komponen dalam menjalankan animasi
      delay: 1, // jeda sebelum menjalankan animasi
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool, Crisp, Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet culpa ipsum magnam. Consequatur illum esse a fugit.
                Nobis, similique sed.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
