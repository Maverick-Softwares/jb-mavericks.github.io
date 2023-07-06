import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import styles from "./Banner.module.css";
const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Banner = () => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };
  return (
    <>
      <div className={styles.container}>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div
          ref={ref}
          className={styles.hooksMain}
          onMouseMove={handleMouseMove}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.to(trans) }}
            />
          ))}
        </div>
      </div>
      <div className="bg-[url('https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover bg-no-repeat bg-center h-screen">
        <div className="w-full h-full flex lg:px-16 items-center backdrop-brightness-50">
          <div className="text-white font-bold lg:w-1/2">
            <h1
              className="text-5xl font-[nunito]"
              style={{ lineHeight: "3.4rem" }}
            >
              Personalized product recommendation platform for E-Commerce
              businesses
            </h1>
            <h6 className="my-8 text-xl text-gray-300">
              We recommend the right products, at the right time, to the right
              person.
            </h6>
            <button className="btn rounded-sm font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
