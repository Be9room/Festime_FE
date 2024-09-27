import Layout from "../../components/Layout";
import TextBlock from "../../components/TextBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import Divider from "../../components/Divider";

const Ticketing = () => {
  return (
    <Layout>
      <TextBlock
        title="온라인 티켓팅 안내"
        innerComponent={[
          { type: "text", detail: "현 페이지는 아래 내용을 포함하고 있습니다." },
          { type: "text", detail: "• 비룡제 재학생존 온라인 티켓팅 안내" }
        ]}
      />

      <Divider />

      <TextBlock
        title="비룡제 재학생존 온라인 티켓팅 안내"
        innerComponent={[
          { type: "text", detail: "재학생존 온라인 티켓팅에 대하여 안내드립니다." },
          { type: "text", detail: "아래 내용 확인하시어 비룡제 재학생존 티켓팅에 참여해 주시길 바랍니다." }
        ]}
      />

      <TextBlock
        className="mt-8"
        title="온라인 추첨 티켓팅 진행 안내"
        innerComponent={[
          { type: "text-title", detail: "재학생존 티켓팅 대상자" },
          { type: "text", detail: "인하대학교 정규등록생·부분등록생·휴학생·수료생 등 학부생" },
          { type: "text-red", detail: "※ 졸업생·대학원생·교직원·외부인은 신청 불가" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "진행 일시" },
          { type: "text", detail: "9/23(월) 12:00 ~ 9/24(화) 12:00" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "진행 시간" },
          { type: "text", detail: "총 24시간" },
          { type: "br", detail: "" },

          { type: "text-title", detail: "진행 방식" },
          { type: "text", detail: "24시간의 신청 인원을 바탕으로 추첨을 진행" },
          { type: "br", detail: "" },

          {
            type: "text-red",
            detail: "※ 사전 티켓팅 링크는 9월 23일 중으로 MMS, 푸쉬알람을 통해 공지가 이뤄질 예정입니다."
          },
          {
            type: "text-red",
            detail: "※ 선착순이 아닌 추첨제를 통해 진행할 예정이니, 편하신 시간대에 참여하여 주시길 바랍니다."
          }
        ]}
      />

      <TextBlock
        className="mt-8"
        title="기타 안내사항"
        innerComponent={[
          { type: "text", detail: "선입장 티켓 추첨 인원은 일자별 1,200명입니다." },
          {
            type: "text",
            detail:
              "1인당 2매씩 배부될 예정이며, 당첨인과 동반인 모두 당일 티켓팅 부스에서 신원 확인 후 입장 티켓이 배부될 예정입니다."
          },
          { type: "text", detail: "선입장 가능 시간대는 17시입니다(공연 시작 30분 전)." }
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

export default Ticketing;
