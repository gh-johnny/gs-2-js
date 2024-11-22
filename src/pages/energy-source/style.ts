import styled from "styled-components"

export const Main = styled.main`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: .5rem;
`

export const BackButtonWrapper = styled.div`
  width: 70%;

  @media(max-width: 1023px){
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;

      button {
          width: 100%;
          border-radius: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;

          *:first-child {
              width: 21px;
          }

          *:last-child {
              margin-top: 2px;
          }
      }
  }
`

export const BackButton = styled.button`
  padding: .5rem 1rem;
  border: 1px solid var(--bg-accent);
  align-self: start;
  border-radius: 8px;
  display: flex;
  column-gap: .3rem;
  transition: all 0.1s ease;

  *:first-child {
    width: 16px;
  }

  &:hover {
      scale: 1.03;
      cursor: pointer;
      opacity: .9;
  }
`

export const ContentWrapper = styled.section`
  display: flex;
  width: 70%;
  height: 70%;
  border: 1px solid var(--bg-accent);
  border-radius: 12px;
  position: relative;

  @media(max-width: 1023px){
      flex-direction: column;
      margin-bottom: 4rem;
      height: 80%;

      h1 {
          height: 5rem;
          position: absolute;
          top: 0rem;
      }

      aside:first-child {
          width: 100%;
          margin-top: 5rem;
          height: 25vh;
          border-right: 0;
          border-bottom: 1px solid var(--bg-accent);

          img {
            border-radius: 0;
          }
      }

      aside:nth-child(2) {
          overflow-x: hidden;
          overflow-y: auto;

          article {
            ul {
                padding: 2.5rem 2rem 0 2.5rem;
                height: auto;
                list-style-type: none;

                li {
                    padding: 0 0 5vh 0;
                    text-align: center;
                    border-bottom: 1px solid var(--bg-accent);

                    &:last-child {
                        border-bottom: 1px solid transparent;
                    }
                }
            }

            &>*:last-child {
                flex-direction: column;
                padding-inline: 2rem;
            }
          }
      }
  }

`

export const AsideImage = styled.aside`
  height: 100%;
  width: 45%;
  border-right: 1px solid var(--bg-accent);
  
  img {
      border-radius: 11px 0 0 11px;
      object-fit: cover;
      width: 100%;
      height: 100%;
  }
`

export const AsideContent = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`

export const ContentTitle = styled.h1`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.75rem;
  border-bottom: 1px solid var(--bg-accent);
`

export const ContentDescription = styled.article`
  height: 100%;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
`

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  list-style-type: "✔ ";
  padding: 3rem;
  overflow-y: auto;
`

export const ContentSpecs = styled.div`
  border-top: 1px solid var(--bg-accent);
  height: 12.5rem;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
`
