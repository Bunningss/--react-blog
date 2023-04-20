import "../styles/PostPage.css";
import { Link } from "react-router-dom";
import demo from "../Images/landing.png";

const Post = () => {
  return (
    <>
      <main>
        <div className="default post">
          <div className="post_wrapper">
            <div className="post_image_container">
              <img src={demo} alt="" className="post_image" fill />
            </div>
            <div className="post_actual">
              <div className="col"></div>
              <div className="col">
                <h2 className="header post_header">
                  How much does business insurance cost?
                </h2>
                <div className="post_refs">
                  <Link to="/">Nafiza Karim Riya</Link>
                  <Link to="">Nafiza Karim Riya</Link>
                  <Link to="">Nafiza Karim Riya</Link>
                  <Link to="">Nafiza Karim Riya</Link>
                  <Link to="">Nafiza Karim Riya</Link>
                  <Link to="">Nafiza Karim Riya</Link>
                </div>
                <p className="text_regular post_details">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum ea laboriosam eius omnis est at corrupti! Doloribus
                  mollitia repellat delectus cum cumque, iste molestiae
                  voluptate corrupti quaerat, non vero corporis praesentium
                  aliquam earum omnis ut. Pariatur impedit cupiditate molestiae
                  ab, vero ipsam doloribus corporis recusandae dolorem tempore
                  ea! Architecto a pariatur placeat rerum molestias iusto ipsa
                  vitae officia inventore optio voluptatem ex reiciendis
                  repellat esse ut porro libero nostrum sit enim adipisci,
                  consequatur debitis iste numquam eligendi. Aliquam voluptatem
                  consequuntur rerum, enim aut dolorum dolores deserunt
                  necessitatibus dolorem voluptates. \n Voluptatum quas
                  reprehenderit laborum beatae, veniam atque vel veritatis
                  rerum, a facere eos iure eius amet temporibus. Consectetur eum
                  quibusdam blanditiis ipsam nam numquam consequatur veniam
                  quasi dolorum. \n Hic praesentium voluptas enim necessitatibus
                  eos eligendi blanditiis iusto, at, explicabo magnam nam modi,
                  dolorum quibusdam assumenda mollitia expedita autem iure
                  minima sed velit dolorem. Ipsam voluptate amet doloremque,
                  aliquid obcaecati illum libero repellendus, ratione aspernatur
                  explicabo quae. Unde excepturi neque eos perferendis quo
                  corrupti natus, hic ipsam? Iste aut odit, illo, necessitatibus
                  quae, veritatis adipisci deserunt ullam molestiae praesentium
                  maiores quis est consequatur vitae dolore nam. Aspernatur
                  repellendus nam quidem dolore nemo expedita cupiditate a quis
                  similique accusamus, itaque ex perferendis atque eligendi
                  soluta, tenetur, error sequi quo veritatis eveniet temporibus
                  id! Qui minus numquam voluptates, nostrum ab facilis
                  blanditiis ducimus rerum ratione ad! Odio nemo quas illo
                  cupiditate repudiandae, vitae quisquam! Dolor, minus.
                  Architecto eos quibusdam commodi ipsa deserunt necessitatibus
                  pariatur, odio veniam alias rerum aliquam consequatur eaque
                  earum sed expedita voluptates minima suscipit asperiores?
                  Temporibus sed ratione totam minima laboriosam, deserunt
                  officiis! Eligendi, dignissimos distinctio eaque inventore
                  pariatur quidem impedit magni, ratione fugit fugiat eos iste
                  reiciendis maxime vero possimus error? Obcaecati labore
                  quaerat accusantium. Ratione fuga ut perspiciatis maxime?
                  Voluptatum ea provident, eveniet numquam cum eligendi nulla
                  minus nesciunt esse nam, sed amet a saepe facilis aperiam
                  unde. Mollitia, unde? Quisquam eius, dolore nam facere, quo
                  fugit deleniti tempore eum delectus illum soluta rem eaque
                  placeat commodi unde quibusdam. Soluta molestiae consectetur
                  numquam. Libero tempore voluptate sint, amet pariatur facilis
                  consequuntur et ab quia eveniet cupiditate, beatae cum. Nihil
                  consectetur quo sapiente hic reiciendis voluptatum placeat!
                  Molestias quam natus, voluptatum earum molestiae ratione
                  debitis libero. Dignissimos et autem, laboriosam possimus
                  totam animi neque? Est minus iusto maxime obcaecati
                  voluptatibus, corporis dolore tempore ex totam libero
                  voluptate incidunt ullam. Repellat quaerat nulla libero
                  expedita nostrum repellendus nisi distinctio nihil doloribus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Post;
