import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  render(props, state) {
    return (
      <section class={style.menu}>
        <div class={style.user - info}>
          <div class={style.image}>
            {" "}
            <img src="" width="48" height="48" alt="User" />
          </div>
          <div class={style.info - container}>
            <div class={style.name}>Александр Владимирович</div>
            <div class={style.email}>a.v.petrov@jkh.ru</div>
          </div>
        </div>
        <div class={style.navigation}>
          <div>Заявки</div>
          <div>Карта</div>
          <div>Сотрудники</div>
        </div>
      </section>
    );
  }
}

export default Menu;
