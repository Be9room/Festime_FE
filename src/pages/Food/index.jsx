import Layout from "../../components/Layout";
import TextBlock from "../../components/TextBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import Divider from "../../components/Divider";
import FOOD_ARRAY from "./../../constants/foodArray";
import FoodMap from "../../assets/images/foodMap.webp";

const Food = () => {
  return (
    <Layout>
      <TextBlock
        title="축제 안내사항"
        innerComponent={[
          { type: "text", detail: "현 페이지는 아래 내용을 포함하고 있습니다." },
          { type: "text", detail: "• F&B존 및 취식 구역 운영 안내" },
          { type: "text", detail: "• 푸드트럭 운영 리스트" },
          { type: "text", detail: "• 이용 시 주의사항" }
        ]}
      />

      <Divider />

      <TextBlock
        title="F&B존 및 취식 구역 운영 안내"
        innerComponent={[
          { type: "image", detail: FoodMap },
          { type: "text-green", detail: "• F&B존 + 취식 구역" },
          { type: "text-pink", detail: "• 취식 구역" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "위치" },
          { type: "text", detail: "정석학술정보관 뒤" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "취식 구역" },
          { type: "text", detail: "정석학술정보관 뒤편 : 약 400석" },
          { type: "text", detail: "본관 뒤편 : 약 600석" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "운영 시간" },
          { type: "text", detail: "11:00 ~ 23:00" }
        ]}
      />
      <LinkBlock text="정석학술정보관 위치 확인하기" to="https://maps.app.goo.gl/Ly1A77LWbEq54h226" />
      <LinkBlock className="mt-3" text="본관 위치 확인하기" to="https://maps.app.goo.gl/7X8Yy9nVTTwRiWqf9" />

      <Divider />

      <TextBlock title="푸드트럭 운영 리스트" />
      <div className="flex w-full flex-col gap-3">
        {FOOD_ARRAY &&
          FOOD_ARRAY.map(({ name, foodList }) => (
            <div key={name} className="darkgrayblock darkgrayblock-block-hover flex w-full flex-col gap-2 p-4">
              <p className="bold-16 break-keep">• {name}</p>
              <p className="medium-14 w-full break-keep">{foodList}</p>
            </div>
          ))}
      </div>

      <Divider />

      <TextBlock
        title="이용 시 주의사항"
        innerComponent={[
          {
            type: "text-red",
            detail: "※ 사용한 일회용 용기와 쓰레기는 지정된 쓰레기통에 분리수거 후 폐기해주시기 바랍니다."
          },
          {
            type: "text-red",
            detail:
              "※ F&B존 이용 및 대기 시 안전에 유의하여 이동해주시기 바랍니다. 특히 음식을 들고 이동하실 때는 넘어지거나 부딪히지 않도록 각별히 주의해 주시기 바랍니다."
          },
          { type: "text-red", detail: "※ 부스에 따라 성인 인증을 요구할 수 있으니 신분증을 지참해 주시기 바랍니다." }
        ]}
      />

      <Divider />

      <TextBlock title="문의사항" />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default Food;
