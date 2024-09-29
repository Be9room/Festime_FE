import Divider from "../../components/Divider";
import Layout from "../../components/Layout";
import TextBlock from "../../components/TextBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import SupportBoothMap from "../../assets/images/supportBoothMap.webp";
import PhotoBoothMap from "../../assets/images/photoBoothMap.webp";

const Event = () => {
  return (
    <Layout>
      <TextBlock
        title="비룡제 이벤트 안내"
        innerComponent={[
          { type: "text", detail: "현 페이지는 아래 내용을 포함하고 있습니다." },
          { type: "text", detail: "• 서포터즈 부스 운영 안내" },
          { type: "text", detail: "• 비룡제 포토부스(인하 네컷)운영 안내" }
        ]}
      />

      <Divider />

      <TextBlock
        title="서포터즈 부스 운영 안내"
        innerComponent={[
          { type: "image", detail: SupportBoothMap },

          { type: "text-title", detail: "위치" },
          { type: "text", detail: "정석학술정보관 뒤" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "운영 시간" },
          { type: "text", detail: "12:00~18:00" },
          { type: "br", detail: "" },

          { type: "text-red", detail: "※ 상품 소진 시 조기 마감될 수 있습니다." }
        ]}
      />
      <LinkBlock text="서포터즈 부스 위치 확인하기" to="https://maps.app.goo.gl/KEPq4S12YratYtbp8" />

      <TextBlock
        className="mt-8"
        title="콘텐츠 안내"
        innerComponent={[
          { type: "text-title", detail: "학생부스 스탬프 투어" },
          { type: "text", detail: "참여 방법: 스탬프판을 받은 후 6개 이상의 학생부스에 참여하여 스탬프를 모으면 성공" },
          { type: "text", detail: "상품: 반다나 또는 응원타올" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "도전! <7초 맞추기>" },
          {
            type: "text",
            detail: "참여 방법: 화면을 보지 않고 속으로 초를 센 후, 대형 엔터키를 눌러 7초를 맞추면 성공"
          },
          { type: "text", detail: "상품: 성공 시 키링과 타투 스티커, 실패 시 타투 스티커" }
        ]}
      />
      <LinkBlock
        text="이벤트 상품 확인하기"
        to="https://www.instagram.com/p/DAct_biBESW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      />

      <Divider />

      <TextBlock
        title="비룡제 포토부스(인하 네컷)운영 안내"
        innerComponent={[
          { type: "image", detail: PhotoBoothMap },

          { type: "text-title", detail: "위치" },
          { type: "text", detail: "학생회관 앞 통일광장 / 5남 앞" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "운영 시간" },
          { type: "text", detail: "상시 운영 (9.27~10.2)" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "운영 가격" },
          { type: "text", detail: "4컷 프레임 2매 : 4,000원" },
          { type: "text", detail: "6컷 프레임 2매 : 5,000원" }
        ]}
      />
      <LinkBlock text="통일광장 포토부스 위치 확인하기" to="https://maps.app.goo.gl/J6JETbqffyYfhiJK6" />
      <LinkBlock
        className="mt-3"
        text="5호관 앞 포토부스 위치 확인하기"
        to="https://maps.app.goo.gl/Hkufvx2VspqS4JwD6"
      />
      <LinkBlock
        className="mt-3"
        text="포토 프레임 디자인 확인하기"
        to="https://www.instagram.com/p/DAZ6OKhykPU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      />

      <Divider />

      <TextBlock title="문의사항" />
      <LinkBlock text="2024 비룡제 축제 이메일" to="mailto:inhasg.festival.2024@gmail.com" />
      <LinkBlock className="mt-3" text="인하대학교 총학생회" to="tel:+82328608451" />
      <LinkBlock className="mt-3" text="현재 페이지 공유하기" to="share" />
    </Layout>
  );
};

export default Event;
