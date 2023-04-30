import "../styles/ProfileArticleCard.css";
import { secondary_button } from "./Navbar";
import SecondaryButton from "../Components/SecondaryButton";

const ProfileArticleCard = ({ article }) => {
  return (
    <div className="fade_in profile_article_card">
      <div className="profile_article_card_container">
        <div className="column">
          <img
            src={article.Image}
            alt=""
            className="profile_article_card_image"
          />
        </div>
        <div className="column">
          <h2 className="header">{article.Title}</h2>
          <p className="text_regular profile_article_card_text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus voluptatum assumenda sapiente saepe
            non magnam labore! Rerum tenetur corporis hic! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Officia harum ipsam, porro
            modi tempora sed hic veniam, eligendi aperiam, iste fuga ab natus
            praesentium numquam exercitationem. Ullam sint numquam, corporis
            perferendis ut ducimus illum ad! Ab praesentium tempora laudantium
            eos, ullam commodi eaque eveniet unde cumque assumenda vitae sunt?
            Voluptatum! ur, adipisicing elit. Quisquam numquam praesentium
            placeat vero aliquid nemo ad modi minus maxime nostrum cumque nisi
            fugit adipisci ullam labore quas rerum ipsa culpa mollitia in
            facilis corporis, perspiciatis consequuntur? Corrupti repellat,
            blanditiis nostrum itaque officiis animi nobis reprehenderit magnam,
            eos minus temporibus totam.
          </p>
        </div>
        <div className="column">
          <SecondaryButton
            btn_styles={{
              ...secondary_button,
              backgroundColor: "skyblue",
              height: "auto",
              padding: "10px 0",
              color: "var(--content-bg)",
            }}
            text={"view"}
          />
          <SecondaryButton
            btn_styles={{
              ...secondary_button,
              height: "auto",
              padding: "10px 0",
              backgroundColor: "var(--secondary)",
              color: "var(--content-bg)",
            }}
            text={"modify"}
          />
          <SecondaryButton
            btn_styles={{
              ...secondary_button,
              backgroundColor: "red",
              height: "auto",
              padding: "10px 0",
              color: "var(--content-bg)",
            }}
            text={"delete"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileArticleCard;
