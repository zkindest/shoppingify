import { TextButton } from "~/mui-c/Button"
import { useStore } from "~/zustand"

const AddItemBanner = () => {
  const dispatchDrawer = useStore((state) => state.dispatchDrawer)
  return (
    <div className="add-item-banner">
      <div className="banner-img">
        <img src="/source.svg" alt="source" />
      </div>
      <div className="banner-info">
        <h3>Didn’t find what you need?</h3>
        <TextButton
          sx={{
            padding: ".5rem 1rem",
            marginTop: "1rem",
          }}
          onClick={() =>
            dispatchDrawer({ type: "drawer:set", payload: "create-item" })
          }
        >
          Add item
        </TextButton>
      </div>
      <style jsx>{`
        .add-item-banner {
          display: flex;
          width: 30rem;
          height: 13rem;
          border-radius: 2.2rem;
          background: var(--clr-brown);
          color: var(--clr-white);
          font-size: 1rem;
        }
        .banner-img {
          flex-basis: 30%;
        }
        .banner-img img {
          width: 100%;
          height: 100%;
          object-position: 4px -19px;
        }
        .banner-info {
          padding: 1.7em;
        }
        h3 {
          font-size: 1.6em;
        }
        @media (max-width: 40rem) {
          .add-item-banner {
            width: 100%;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AddItemBanner