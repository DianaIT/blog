import Social from "../components/social/index";
export default function Footer() {
  return (
    <>
      <fotter>
        <Social />
        <span>©️ 2020 </span>
      </fotter>
      <style jsx>{`
        fotter {
          margin: 2rem 0;
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 0;
        }

        span {
          font-size: 1.1rem;
          padding-left: 0.7rem;
          font-family: Arial;
        }
      `}</style>
    </>
  );
}
