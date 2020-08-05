import Link from "next/link";

export default function Share() {
  const text = "adfadf";
  const link = "adfadfad";
  const hashtags = "akdjfla, afjkadf, akjdfja";
  const url = `https://twitter.com/intent/tweet?text=${text}&url=${link}&hashtags=${hashtags}`;

  return (
    <>
      <Link href={url}>
        <img src="./icons/003-gorjeo.svg" />
        <a target="_blank">Comparte</a>;
      </Link>
      <style jsx>{`
        aside {
          position: fixed;
          bottom: 1rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
