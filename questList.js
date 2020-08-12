class question {
    constructor(quest, engAnswer, korAnswer, engFullname) {
        this.quest = quest;
        this.engAnswer = engAnswer;
        this.korAnswer = korAnswer;
        this.engFullname = engFullname;
    }
}

function shuffle(list) {

    if (list.length <= 1) {
        return;
    }

    for (let i = 0; i < 50; i++) {
        let random1 = Math.floor(Math.random() * list.length);
        let random2 = Math.floor(Math.random() * list.length);
    
        while (random1 == random2) {
            random2 = Math.floor(Math.random() * list.length);
        }
    
        let temp = list[random2];
        list[random2] = list[random1];
        list[random1] = temp;
    }
    

}
//설명, 영어줄임말, 한글, 영어풀네임
function getList() {
    let list = new Array;
    
    list.push(new question("인터넷 등 통신 사업자의 공중 네트워크를 사용자가 마치 자신의 전용 회선처럼 사용할 수 있게 하는 서비스이다. 공중 네트워크를 통해 한 회사나 몇몇 단체가 내용을 바깥 사람에게 드러내지 않고 통신할 목적으로 쓰이는 사설 통신망이다.", "VPN", "가상 사설 통신망", "Virtual Private Network"));
    list.push(new question("무선 접속 장치(AP, Access Point)가 설치된 곳을 중심으로 무선 주파수(RF) 기술을 이용하여 근거리에서 특정 카드가 장착된 개인 휴대정보 단말기를 이용해 인터넷에 연결하는 네트워크이다. 최근 메시 네트워크 개발로 인한 이동성의 확보와 540Mbps의 전송 속도를 지원하는 차세대 표준 규격이 상용화되면서 최근에는 유선을 뛰어넘는 인프라로 자리 잡아 가고 있다.", "WLAN", "무선랜", "Wireless LAN"));
    list.push(new question("고속 데이터를 각 반송파가 직교 관계에 있는 다수의 부반송파에 나누어 실어 다중 전송하는 디지털 변조 방식이다. 보통의 주파수 분할 다중에 비해 훨씬 더 많은 반송파의 다중이 가능하므로 주파수 이용 효율이 높고 멀티패스(Multipath)에 의한 심벌 간 간섭에 강한 특성이 있어 고속 데이터 전송에 적합하다. 802.11, WLAN, DMB, PLC, xDSL, 4G, 와이브로 등 많은 분야의 핵심기술로 사용되고 있다.", "OFDM", "직교 주파수 분할 다중", "Orthogonal Frequency Division Multiplexing"));
    list.push(new question("컴퓨터와 컴퓨터 또는 컴퓨터와 인터넷 사이에서 파일을 주고받을 수 있도록 하는 원격 파일 전송 프로토콜이다. 이것을 이용하여 파일의 전송(업로드)과 수신(다운로드), 삭제, 이름 변경 등의 작업을 할 수 있다.", "FTP", "파일 전송 프로토콜", "File Transfer Protocol"));
    list.push(new question("신호를 전달하는 전파가 통로상의 여러 가지 장애물에 의해 두 개 이상의 경로를 통하여 수신 측에 도달하는 경우, 그 합성 신호가 시공간적으로 강도가 변하는 현상이다. 전자파가 진행하는 경로에 여러가지 장애물이 있을 경우 반사가 일어나고 반사파는 반사되는 경로에 따라 진폭과 위상이 달라진다. 이러한 채널 환경에서 수신기는 직접파와 반사파 또는 반사파만으로 구성된 복합된 신호를 수신하게 되어 수신 장해를 받는다. 이 현상의 방지책으로는 직교 주파수 분할 다중(OFDM), 다이버시티, 이퀄라이저 기술 등이 이용되고 있다.", "", "다중 경로 페이딩", "Multipath Fading"));
    list.push(new question("전기, 가스, 수도 계량기 등을 검침원이 일일히 방문하지 않고 원격으로 단말기를 사용하여 검침 데이터를 읽을 수 있는 시스템. 전화선이나 전력선 또는 무선주파수 방식에 의해 정보를 수집하며, 컴퓨터 프로그램과 연계해 고지서 발급은 물론 수요 패턴까지 파악할 수 있다.", "AMR", "원격 검침", "Automatic Meter Reading"));
    list.push(new question("ITU-T에서 개발하고 있는 유선망 기반의 차세대 통신망이다. 유선 접속망 뿐만 아니라 이동 사용자 지원까지를 목표로 하며, 이동통신에서 제공하는 완전한 이동성(Full Mobility) 제공을 목표로 개발되고 있다. 이것의 배경 개념은 하나의 망이 인터넷상에서와 같이 모든 정보와 서비스를 패킷으로 압축하여 전송한다는 것이며, 인터넷 프로토콜 기반으로 구축되므로 ALL-IP라는 용어도 이것의 변화를 기술하는데 사용되기도 한다.", "NGN", "차세대 통신망", "Next Generation Network"));
    list.push(new question("미국의 GPS, 유럽의 갈릴레오 위치결정시스템과 유사한 러시아의 전파위성 항법 시스템이다. 미국의 상업 및 군사용으로 개발된 GPS는 CDMA 방식인 반면 이 시스템은 FDMA 방식을 이용한다.", "", "글로나스", "GLONASS"));
    list.push(new question("WBAN의 의료분야에서 임플란트 장치 간의 통신 서비스를 부르는 명칭이다. 인체내 통신으로 감쇄가 적은 주파수 사용이 필요하여 402 ~ 405MHZ를 사용하고, 대역폭은 300KHZ로 적어 가용 비트레이드도 적다. 그리고 타 통신에 혼신을 피하기 위하여 출력은 EIRP기준 25μW이하로 정하고 있다.", "MICS", "", "Medical Implant Communication Service"));
    list.push(new question("네트워크를 컴퓨터처럼 모델링하여 여러 사용자가 각각의 소프트웨어 프로그램들로 네트워킹을 가상화 하여 제어하고 관리하는 네트워크이다. 이 기술은 네트워크 비용 및 복잡성을 해결할 수 있는 기술로 간주되어 기존 네트워킹 기술의 폐쇄형 하드웨어 및 소프트웨어 기술을 개방형으로 변화시키는 미래 인터넷 기술로 떠오르고 있다.", "SDN", "소프트웨어 정의 네트워킹", "Software Defined Networking"));
    list.push(new question("고주파(HF)를 이용한 근거리 무선통신 기술이다. Ecma 340, ISO/IEC 18092표준으로, 아주 가까운 거리에서 양방향 통신을 지원하는 RFID 기술의 일종이다. 13.56MHz 주파수를 이용해 10cm안에서 최고 424Kbps의 속도로 데이터 전송을 지원한다. 모바일 기기에서 결제뿐만 아니라 슈퍼마켓이나 일반 상점에서 물품 정보나 방문객을 위한 여행 정보 전송, 교통, 출입 통제, 잠금장치 등에 광범위하게 사용된다", "NFC", "근거리 무선 통신", "Near Field Communication"));
    list.push(new question("이것은 서비스의 질을 의미하는 것으로, 네트워크에서 일정 기준 이하의 지연시간이나 데이터 손실률 등을 보증하기 위한 서비스 규격이다. 전송 우선순위에 따라 네트워크 트래픽을 분류하고 우선순위가 높은 트래픽을 먼저 전송하게 된다. 화상 회의, 영상 통화, 동영상 전송 등의 실시간 프로그램은 이것을 사용함으로써 네트워크 대역폭을 가장 효율적으로 사용할 수 있게 된다.", "QoS", "서비스 품질", "Quality of Service"));
    list.push(new question("디지털 신호를 아날로그 신호로 변환하는 변조 과정과 아날로스 신호를 디지털 신호로 변환하는 복조 과정을 수행하는 신호변환장치", "", "모뎀", "MODEM")); 
    list.push(new question("아시아와 유럽을 연결하는 초고속 정보 통신망이다. 아시아와 유럽의 주요 연구, 교육망을 초고속 네트워크로 연결하여 전자상거래를 포함한 정보 통신 기술, 생명 공학, 신소재 같은 첨단 분야를 공동 연구하고, 관련 기술을 상용망에 적용해 두 대륙 국가들의 경제 발전과 교류를 이루는 데 목적을 두고 있다.", "TEIN", "트랜스 유라시아 네트워크", "Trans-Eurasia Information Network"));
    list.push(new question("복수의 주파수 대역을 동시에 사용할 수 있는 대역폭(Bandwidth) 확장 기술로, LTE-Advanced의 핵심 기술이다. 최대 20MHz의 대역폭을 가지는 반송파를 요소 반송파(Component Carrir)라고 정의하는데, LTE-Advanced에서는 이러한 요소 반송파들을 최대 5개까지 묶어서 100MHz의 대역폭을 가질 수 있다. 요소 반송파로 묶을 수 있는 주파수 대역은 연속적일 수도 있고, 불연속적일 수도 있다.", "", "반송파 묶음", "Carrier Aggregation"));
    list.push(new question("이것은 LAN과 WAN의 중간 형태로 LAN의 기능을 충분히 수용하면서 도시 전역 또는 도시와 도시 등 넓은 지역을 연결하는 통신망으로, 한 도시 내의 네트워크들을 하나의 거대한 네트워크로 서로 연결하는 데 사용된다.", "MAN", "도시권 통신망", "Metropolitan Area Network"));
    list.push(new question("이것은 다양한 정보의 데이터베이스를 구축하여 연결된 컴퓨터 또는 텔레비전을 통해 사용자가 요구하는 정보를 원하는 시간에 볼 수 있도록 전송하는 멀티미디어 서비스이다. 개인이 가지고 있는 VOD 단말기를 가입자 선로를 통해 각 전화국으로 연결하고 여기서 다시 인공위성으로 연결함으로써 수신할 수 있다. 원하는 때 원하는 프로그램을 선택할 수 있다는 점에서 대화형 TV의 원형이라고 할 수 있다. 프로그램을 시청하는 도중에 일시 정지시키거나 느린 속도로, 혹은 반복해서 볼 수도 있다.", "VOD", "주문형 비디오", "Video On Demand"));
    list.push(new question("이것은 인터넷에 연결된 서로 다른 기종의 컴퓨터들 간에 데이터를 주고받을 수 있도록 하는 표준 프로토콜로, 인트라넷 이나 엑스트라넷과 같은 사설망에서도 사용된다. 이것은 망의 일부가 파손되어도, 남아 있는 망으로 통신이 가능한 신뢰성 있는 통신 규약이다.", "TCP/IP", "", "Transfer Control Protocol/Internet Protocol"));
    list.push(new question("네트워크에서 서로 다른 컴퓨터들 간에 정보 교환을 할 수 있게 해주는 표준화된 통신 규약이다. 이것은 네트워크 기능을 효율적으로 발휘하도록 하기 위한 협정으로 TCP/IP가 대표적이며, 통신 연결 시 다양한 레벨을 갖는다.", "", "프로토콜", "Protocol"));
    list.push(new question("만국우편연합(UPU)에서 표준화한 온라인 자료에 대한 전자적인 우편배달 서비스이다. 최근에는 EPCM(Electronic Postal Certification Mark)라고 부른다. 소인이란 우표에 특정 표식의 도장을 찍어서 재사용을 방지하고 우편이 효력을 가진 일자와 시간을 표시한 것을 말하며, 이것은 그 내용을 전자적으로 표현한 것이다.", "DPM", "디지털 우편소인", "Digital PostMark"));
    list.push(new question("비동기식 3세대 이동 통신의 하향 링크에서 10Mbps 수준의 고속 패킷 데이터 서비스를 제공하는 전송 규격이다. 인터넷 통신은 주로 다운로드가 많아 하향 링크의 고속화가 서비스의 필수 요소이며, 고속 데이터는 주로 정지 상태에서 사용되므로 이러한 조건을 최대한 수용하도록 하향 링크의 전송 규격을 개선한 것으로 WCDMA R5에 적용되었다. 기본 개념은 각종 물리 링크나 MAC 링크 기능을 기지국에서 수행토록 하며, 단말기가 기지국에 가깝거나 정지 상태에서는 오버헤드를 줄여 처리 속도를 높인 것으로, 적응형 변복조 및 부호화 방식, 하이브리드 ARQ, 송수신 다중 다이버시티, 고속 패킷 스케줄링 등의 기술이 적용되었다.", "HSDPA", "고속 하향 패킷 접속", "High Speed Downlink Packet Access"));
    list.push(new question("물리적 공간과 네트워크로 연결된 첨단 보건의료 기술의 전자적 공간을 연결하여 보건 의료 대상자의 삶과 진료가 중심이 되도록 하는 것을 의미한다. 보건의료 기술의 급격한 발전과 정보의 디지털화, 통신의 광대역화, 유무선 통신망을 통한 대용량의 정보를 빠르게 전송할 수 있게 되었으며, 멀티미디어 처리 및 저장 기술의 발전, RFID를 비롯한 각종 유비쿼터스 환경의 등장으로 u-Health의 현실화가 빠르게 진행되고 있다.", "u-Health", "유헬스", "ubiquitous-Health"));
    list.push(new question("디지털(Digital)과 리터라티(Literati)의 합성어로 컴퓨터, 정보 통신 등 디지털 분야의 지식이 많은 사람을 지칭하는 용어로, 디지털 사회에서 정보 통신 산업을 이끌어 가는 사람을 말한다.", "", "디저라티", "Digerati"));
    list.push(new question("웨어러블(Wearable) 또는 몸에 심는(Implant) 형태의 센서나 기기를 무선으로 연결하는 개인 영역 네트워킹 기술이다. 무선 센서나 기기로부터 수집한 정보를 휴대폰 또는 간이형 기지국(Base Station)을 통하여 병원이나 기타 필요한 곳에 실시간으로 전송함으로써 uHealth 등의 서비스를 받는데 응용할 수 있다. 현재 IEEE 802.15.6에 Working Group이 구성되어 서비스 모델과 요구사항 등을 정의하고 있고, 이를 완성한 후에 이에 대한 표준을 진행할 예정이다.", "WBAN", "", "Wireless Body Area Network"));


    //list.push(new question("설명", "영어줄임말", "한글", "영어풀네임"));



    return list;
}