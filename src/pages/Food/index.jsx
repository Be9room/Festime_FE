import Layout from "../../components/Layout";
import TitleBlock from "../../components/TitleBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import Divider from "../../components/Divider";
import FOOD_ARRAY from "./../../constants/foodArray";

const Food = () => {
  return (
    <Layout>
      <TitleBlock
        title="축제 안내사항"
        subtitle={[
          "현 페이지는 아래 내용을 포함하고 있습니다.",
          "• F&B존 및 취식 구역 운영 안내",
          "• 푸드트럭 운영 리스트",
          "• 이용 시 주의사항"
        ]}
      />

      <Divider />

      <TitleBlock
        title="F&B존 및 취식 구역 운영 안내"
        subtitle={[
          <span key="title" className="bold-14">
            • 위치
          </span>,
          "정석학술정보관 뒤",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 취식 구역
          </span>,
          "정석학술정보관 뒤편 : 약 400석",
          "본관 뒤편 : 약 600석",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 운영 시간
          </span>,
          "11:00 ~ 23:00"
        ]}
      />
      <LinkBlock text="정석학술정보관 위치 확인하기" to="https://maps.app.goo.gl/Ly1A77LWbEq54h226" />
      <LinkBlock className="mt-3" text="본관 위치 확인하기" to="https://maps.app.goo.gl/7X8Yy9nVTTwRiWqf9" />

      <Divider />

      <TitleBlock title="푸드트럭 운영 리스트" />
      <div className="flex w-full flex-col gap-3">
        {FOOD_ARRAY &&
          FOOD_ARRAY.map(({ name, foodList }) => (
            <div key="name" className="darkgrayblock darkgrayblock-block-hover flex w-full flex-col gap-2 p-4">
              <p className="bold-16 break-keep">• {name}</p>
              <p className="medium-14 w-full break-keep">{foodList}</p>
            </div>
          ))}
      </div>

      <Divider />

      <TitleBlock
        title="이용 시 주의사항"
        subtitle={[
          <span key="note" className="text-live-red">
            ※ 사용한 일회용 용기와 쓰레기는 지정된 쓰레기통에 분리수거 후 폐기해주시기 바랍니다.
          </span>,
          <span key="note" className="text-live-red">
            ※ F&B존 이용 및 대기 시 안전에 유의하여 이동해주시기 바랍니다. 특히 음식을 들고 이동하실 때는 넘어지거나
            부딪히지 않도록 각별히 주의해 주시기 바랍니다.
          </span>,
          <span key="note" className="text-live-red">
            ※ 부스에 따라 성인 인증을 요구할 수 있으니 신분증을 지참해 주시기 바랍니다.
          </span>
        ]}
      />

      <Divider />

      <TitleBlock title="문의사항" />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default Food;
