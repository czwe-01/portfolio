import "./Home.css";
import me from "../../images/me.png";

function Home() {
  const name = (name) => (
    <h1>
      <span className="hi">Hi, I'm</span> {name}
    </h1>
  );

  return (
    <div className="container">
      <div className="img-container">
        <div className="img">
          <img src={me} />
        </div>
        <span className="blob"></span>
        <span className="blob-2"></span>
      </div>
      <p className="name">{name("Thulasizwe Nkambule")}</p>
      <p className="intro">full-stack developer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veritatis
        dicta dolorum officia aut a recusandae atque labore molestiae assumenda,
        praesentium cumque nulla cupiditate vel porro quos. Excepturi similique
        sint asperiores nihil nisi deleniti consequatur quibusdam saepe facilis
        modi error sit incidunt sapiente velit vero, facere non voluptatum? Nam
        sint iusto obcaecati beatae eos ab, asperiores nulla veritatis quam,
        excepturi, rem possimus. Perferendis modi perspiciatis nihil quasi, cum
        culpa distinctio tempore omnis sapiente saepe error nulla voluptatibus
        sit! Modi adipisci delectus architecto suscipit placeat possimus
        asperiores consequuntur, nam optio? Vel animi perspiciatis veritatis
        doloremque quo. Commodi ullam eveniet ad quis?
      </p>
    </div>
  );
}

export default Home;
