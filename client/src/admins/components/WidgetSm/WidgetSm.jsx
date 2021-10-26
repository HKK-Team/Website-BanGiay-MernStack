import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Thành viên mới tham gia</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/232065590_2026390717508739_7062352108676249331_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=3ehxPeSWN-EAX8BYbF-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=dc01a19e5b85eddabc8699023e9506ec&oe=619E4C89"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Đoàn Minh Khánh</span>
            <span className="widgetSmUserTitle">Make coffee</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/168270377_794225684834473_2331803775706012068_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=7sYCr7W9GdoAX8U-LQb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0a828aa61892fd28cddcbfab44e50037&oe=61798464"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Vũ Quốc Khánh</span>
            <span className="widgetSmUserTitle">Refill printer ink</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/207009728_773893093278214_4569051617534937648_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=IPh9ai4_X54AX-rMaoo&_nc_oc=AQmbdF_IPosRZFZgXHuLYE44kMScFlX0wWVPbtJkHGRaX53wd0MDEnYEy8s97-taoF2kEmhqQ8pfdClX6pdZVLY6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a291be8b043b807da28bd6c7d0d6fddc&oe=619C5598"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Huỳnh Đức Huy</span>
            <span className="widgetSmUserTitle">Mopping the floor</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/s370x247/146943164_1374494206223588_6536604324837126473_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=eWAE7qzM90wAX8q6oDd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e7696d22c32f8cb1a0fba419f4f87bf9&oe=619C13F6"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nguyễn Tiến Đạt</span>
            <span className="widgetSmUserTitle">Pull cable</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}