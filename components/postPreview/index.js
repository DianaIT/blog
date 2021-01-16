import React from "react"
import Link from "next/link"

function postPreview({ post }) {
  return (
    <>
      <Link href={"[slug]"} as={`${post.slug}`}>
        <a key={post.id} className="container">
          <img className="mainImage" src={post.image} alt="post.title" />
          <section className="content">
            <h1 className="title">{post.title}</h1>
            <p className="text">{post.text}</p>

            <section className="footer">
              <section className="author">
                <section className="previewUserInfo">
                  <p className="previewDate">
                    <span role="img" aria-label="calendar">
                      📅
                    </span>
                    {post.date}
                  </p>
                </section>
              </section>
            </section>
          </section>
        </a>
      </Link>
      <style jsx>{`
        .container {
          margin: 0.5rem;
          font-size: 0.9rem;
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #494746;
        }

        span {
          margin-right: 8px;
        }

        h1 {
          margin-bottom: 0.4rem;
        }

        .mainImage {
          width: 80px;
          height: 80px;
          padding: 0.5rem;
          height: auto;
        }
        .author {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 0.6rem;
        }

        p {
          margin: 0;
          font-size: 0.7;
        }

        .footer {
          margin-top: 0.5rem;
          display: flex;
          justify-items: center;
          align-items: center;
          justify-content: space-between;
        }

        h1,
        p {
          font-family: verdana;
          padding-left: 8px;
        }

        @media (min-width: 770px) {
          .container {
            max-width: 800px;
            margin: 0.7rem auto;
            font-size: 1rem;
          }

          .author {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}

export default React.memo(postPreview)
