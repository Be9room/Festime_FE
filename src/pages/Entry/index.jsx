import Layout from "../../components/Layout";
import TitleBlock from "../../components/TitleBlock";
import LinkBlock from "./../../components/LinkBlock/index";
import Divider from "./../../components/Divider/index";

const Entry = () => {
  return (
    <Layout>
      <TitleBlock
        title="재학생존 입장 안내"
        subtitle={[
          "현 페이지는 아래 내용을 포함하고 있습니다.",
          "• 비룡제 재학생존 운영 안내",
          "• 비룡제 재학생존 입장 안내"
        ]}
      />

      <Divider />

      <TitleBlock
        title="비룡제 재학생존 운영 안내"
        subtitle={[
          "비룡제 재학생존 운영에 대하여 안내드립니다.",
          "아래 내용 확인하시어 비룡제 재학생존 이용에 참고해 주시길 바랍니다."
        ]}
      />

      <TitleBlock
        className="mt-8"
        title="재학생존 입장 대상자"
        subtitle={[
          "인하대학교 정규등록생·부분등록생·휴학생 등 학부생",
          <span key="note" className="text-live-red">
            ※ 졸업생·대학원생·교직원·외부인은 입장 불가합니다.
          </span>
        ]}
      />

      <TitleBlock
        className="mt-8"
        title="입장 가능 시간"
        subtitle={[
          <span key="title" className="bold-14">
            • 선입장(티켓 소지자)
          </span>,
          "17시 입장 시작(16시부터 대기 가능, 이전 대기줄은 해산)",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 티켓 미소지 학부생
          </span>,
          "20시부터 학부생 대상 개방(학생증 등 재학생 신분 확인 절차 진행)"
        ]}
      />

      <Divider />

      <TitleBlock
        title="비룡제 재학생존 입장 안내"
        subtitle={[
          "각 일자별로 온라인 티켓팅이 가능하신 학우분들은 아래의 설명을 꼼꼼히 읽으시고 재학생존 입장을 위한 팔찌 수령을 해주시기를 바랍니다."
        ]}
      />

      <TitleBlock
        className="mt-8"
        title="재학생존 입장 절차"
        subtitle={[
          "1) 축제 당일, 본인확인을 통해 재학생존 입장을 위한 팔찌 교환 (10시부터 19시 30분까지)",
          "2) 선착순으로 줄을 선 뒤, 재학생존 입장 (17시부터 20시까지)",
          <br key="br" />,
          <span key="note" className="text-live-red">
            ※ 티켓 양도 및 교환, 대리 입장 등은 절대 불가
          </span>,
          <span key="note" className="text-live-red">
            ※ 티켓팅 당시의 본인과 최대 동행인 포함 2인(재학생, 휴학생 등
            학부생 한정)은 팔찌 수령 가능하며, 팔찌를 부착한 후 재학생존
            입장 가능
          </span>,
          <span key="note" className="text-live-red">
            ※ 학생증/모바일 학생증/재학증명서 등 본인 학적과 본인 사진이
            있는 증빙자료 필수 지참
          </span>,
          <span key="note" className="text-live-red">
            ※ 팔찌 훼손 시 입장 불가
          </span>,
          <br key="br" />,
          <span key="title" className="bold-14">
            • 팔찌 수령 하는 법
          </span>,
          "본인 티켓팅 날짜에 재학생존 입장 팔찌 수령",
          "1) 당일 <농구장 옆 티켓 교환 부스>에서 팔찌로 교환 (10시부터 19시 30분까지 가능)",
          "2) 교환 시 사전에 입력된 학생 정보와 본인 일치 여부 확인",
          "3) 팔찌 착용",
          <br key="br" />,
          <span key="title" className="bold-14">
            • 재학생존 입장하는 법
          </span>,
          "착용한 팔찌와 본인 확인이 가능한 증빙자료 확인 후 입장",
          "1) 선착순으로 16시부터 줄을 서서 17시부터 입장 가능 (16시 이전 줄은 인정하지 않음)",
          "2) 입장 시 팔찌 착용 상태 및 본인 확인 절차 진행"
        ]}
      />

      <TitleBlock
        className="mt-8"
        title="주의사항"
        subtitle={[
          <span key="note" className="text-live-red">
            ※ 팔찌를 착용했더라도 20시 이후 출입이 제한될 수 있음
          </span>,
          <span key="note" className="text-live-red">
            ※ 선착순으로 입장. 단, 16시보다 이른 시간에 임의로 줄을 서는 것은
            엄격히 제한함
          </span>,
          <span key="note" className="text-live-red">
            ※ 입장 후 높이 뛰는 행위 등 시야를 가리거나, 타인에게 위해를 가할 수
            있다고 판단되는 경우 바로 퇴장될 수 있음
          </span>,
          <span key="note" className="text-live-red">
            ※ 입장 후 어떤 이유로든 재학생존에서 이탈한 경우 재입장하려면
            줄을 다시 서야 함 (화장실은 미리 다녀오기를 권장)
          </span>,
          <span key="note" className="text-live-red">
            ※ 티켓과 팔찌를 모두 배부받더라도 당시 상황에 따라 입장이 제한될 수
            있음(안전상의 이유)
          </span>,
          <span key="note" className="text-live-red">
            ※ 뚜껑이 있는 페트병에 담긴 음료, 물 이외의 음식물 반입 금지
          </span>,
          <span key="note" className="text-live-red">
            ※ 카메라 렌즈, 가방 등 주위의 사람에게 방해가 될 수 있는 물품은 반입
            금지
          </span>,
          <span key="note" className="text-live-red">
            ※ 암표 거래가 적발될 경우, 재학생존 입장은 영구적으로 제한됨
          </span>,
          <span key="note" className="text-live-red">
            ※ 재학생존을 제외한 구역에서는 모든 사람이 자유롭게 관람 가능
          </span>,
          <span key="note" className="text-live-red">
            ※ 당일 안전요원들의 지시에 따르지 않을 경우, 퇴장될 수 있음 (수천
            명의 안전이 걸린 문제이기에 많은 협조 부탁드립니다.)
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

export default Entry;
