import { Link } from "react-router-dom";
import { rumahPanjang } from "../assets/img";
import { tasbeeFarm } from "../assets/img";
import { wajidTeaTime } from "../assets/img";
import { ratanBags } from "../assets/img";
import { dusun } from "../assets/img";

const IndiGroup = () => {
  return (
    <div className="indigrid-container">
      <div
        className="indigrid-item1"
        style={{ backgroundImage: `url(${ratanBags})` }}
      >
        <div className="indigrid-content">
          <h3>Iban</h3>
          <hr />
          <p>
            Teraja is a quiet rural village in the far edges of Brunei. It is
            home to a longhouse, which is a traditional Iban house that is
            shared by multiple families. The village is a great place to
            experience Bruneian culture in a more personal way. The residents
            are more than willing to show visitors around the countryside, from
            hiking trails to waterfalls and hills to traditional Iban
            craftsmanship workshops.
          </p>
        </div>
      </div>
      <div
        className="indigrid-item2"
        style={{ backgroundImage: `url(${dusun})` }}
      >
        <div className="indigrid-content">
          <h3>Dusun</h3>
          <hr />
          <p>
            Dusun dance is called Tamarok, performed by a group of graceful and
            synchronized women wearing traditional costumes made of beads and
            feathers. The dance represents fertility and abundance, often
            performed during harvest festivals to celebrate nature's generosity
            and express gratitude for a successful harvest. The Dusun people
            have a proud culture and heritage, where traditional dances like
            Tamarok hold importance in self-expression, ancestral connection,
            and celebration of their way of life.
          </p>
        </div>
      </div>
      <div
        className="indigrid-item3"
        style={{ backgroundImage: `url(${tasbeeFarm})` }}
      >
        <div className="indigrid-content">
          <h3>Tutong</h3>
          <hr />
          <p>
            Tasbee Meliponiculture Farm is a place where over 100 nests of
            stingless bees are kept to produce delicious "Kelulut Honey." In
            addition to their sweet gold, you can also find honey soaps,
            candles, and other honey-based products, all locally made from the
            home-grown bee colonies. For the curious traveler, there is a mini
            gallery open to the public, and an eye-opening tour around the busy
            bee farm is sure to be a memorable experience.
          </p>
        </div>
      </div>
      <div
        className="indigrid-item4"
        style={{ backgroundImage: `url(${wajidTeaTime})` }}
      >
        <div className="indigrid-content">
          <h3>Temburong</h3>
          <hr />
          <p>
            Wajid is a popular dessert in Brunei, Wajid Temburong is a unique
            and sought-after delicacy. wajid is traditionally made with
            glutinous sticky rice, wajid Temburong is made with beras Jawa, a
            type of rice that is difficult to find elsewhere. This gives wajid
            Temburong a less sticky and chewier texture. The dark brown color of
            wajid Temburong is due to the use of coconut milk and sugar that are
            cooked to a dark caramel consistency before being mixed with the
            rice. Wajid Temburong is neatly wrapped in daun nyirik (phyrinium
            leaves) and secured with a little skewer made from coconut leaves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndiGroup;
