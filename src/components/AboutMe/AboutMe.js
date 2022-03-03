import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = ({ showAbout, setShowAbout }) => {
  return (
    <>
      <span className={styles.about} onClick={setShowAbout}>
        About Me
      </span>
      {showAbout && (
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed
            pulvinar proin gravida hendrerit lectus. Eu nisl nunc mi ipsum
            faucibus vitae. Egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium. Turpis massa tincidunt dui ut
            ornare lectus sit amet est. Neque egestas congue quisque egestas. Et
            malesuada fames ac turpis egestas integer eget aliquet. Egestas
            fringilla phasellus faucibus scelerisque eleifend donec pretium
            vulputate sapien. Venenatis tellus in metus vulputate eu scelerisque
            felis. Pharetra pharetra massa massa ultricies mi quis. Cras semper
            auctor neque vitae tempus quam pellentesque nec. Lorem ipsum dolor
            sit amet consectetur adipiscing elit pellentesque. Mi sit amet
            mauris commodo. Eleifend quam adipiscing vitae proin sagittis nisl.
            Odio eu feugiat pretium nibh ipsum consequat nisl. Felis bibendum ut
            tristique et egestas. Non nisi est sit amet facilisis. Vitae tempus
            quam pellentesque nec nam aliquam. Sed vulputate mi sit amet mauris.
            Scelerisque eu ultrices vitae auctor eu augue. Fames ac turpis
            egestas sed tempus urna et pharetra pharetra. Turpis in eu mi
            bibendum neque egestas congue quisque egestas. Facilisis mauris sit
            amet massa vitae tortor. Diam ut venenatis tellus in metus vulputate
            eu. Dignissim sodales ut eu sem integer vitae justo. Ultrices
            sagittis orci a scelerisque purus semper eget. Eu sem integer vitae
            justo eget magna fermentum iaculis. Consequat ac felis donec et
            odio. Tincidunt arcu non sodales neque sodales ut. Id eu nisl nunc
            mi ipsum faucibus vitae. Sed odio morbi quis commodo odio aenean
            sed. Ultrices neque ornare aenean euismod. Ornare lectus sit amet
            est placerat in. Orci phasellus egestas tellus rutrum tellus. Non
            nisi est sit amet facilisis magna. Nunc faucibus a pellentesque sit
            amet. Neque vitae tempus quam pellentesque nec. Sapien faucibus et
            molestie ac feugiat. Sed adipiscing diam donec adipiscing tristique
            risus nec feugiat in. Erat velit scelerisque in dictum non. Blandit
            turpis cursus in hac habitasse platea dictumst quisque sagittis.
            Morbi tincidunt augue interdum velit euismod in. At urna condimentum
            mattis pellentesque id. Adipiscing elit pellentesque habitant morbi
            tristique senectus et netus. Ultrices vitae auctor eu augue ut
            lectus arcu bibendum. Diam sit amet nisl suscipit adipiscing
            bibendum est ultricies integer. Eget est lorem ipsum dolor sit.
          </p>
        </div>
      )}
    </>
  );
};

export default AboutMe;
