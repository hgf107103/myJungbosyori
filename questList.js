class question {
    constructor(quest, engAnswer, korAnswer, engFullname, category) {
        this.quest = quest;
        this.engAnswer = engAnswer;
        this.korAnswer = korAnswer;
        this.engFullname = engFullname;
        this.category = category;
    }
}

function shuffle(list) {

    if (list.length <= 1) {
        return;
    }

    for (let i = 0; i < list.length; i++) {
        let random = Math.floor(Math.random() * list.length);
    
        while (random == i) {
            if (i == 0 && random == 0) {
                random++;
            } else if(i > 0 && random > 0 && i == random) {
                random--;
            }
        }
    
        let temp = list[i];
        list[i] = list[random];
        list[random] = temp;
    }
    

}
//설명, 영어줄임말, 한글, 영어풀네임
function getList() {
    let list = new Array;
    
    list.push(new question("인터넷 등 통신 사업자의 공중 네트워크를 사용자가 마치 자신의 전용 회선처럼 사용할 수 있게 하는 서비스이다. 공중 네트워크를 통해 한 회사나 몇몇 단체가 내용을 바깥 사람에게 드러내지 않고 통신할 목적으로 쓰이는 사설 통신망이다.", "VPN", "가상 사설 통신망", "Virtual Private Network", "데이터 통신"));
    list.push(new question("무선 접속 장치(AP, Access Point)가 설치된 곳을 중심으로 무선 주파수(RF) 기술을 이용하여 근거리에서 특정 카드가 장착된 개인 휴대정보 단말기를 이용해 인터넷에 연결하는 네트워크이다. 최근 메시 네트워크 개발로 인한 이동성의 확보와 540Mbps의 전송 속도를 지원하는 차세대 표준 규격이 상용화되면서 최근에는 유선을 뛰어넘는 인프라로 자리 잡아 가고 있다.", "WLAN", "무선랜", "Wireless LAN", "데이터 통신"));
    list.push(new question("고속 데이터를 각 반송파가 직교 관계에 있는 다수의 부반송파에 나누어 실어 다중 전송하는 디지털 변조 방식이다. 보통의 주파수 분할 다중에 비해 훨씬 더 많은 반송파의 다중이 가능하므로 주파수 이용 효율이 높고 멀티패스(Multipath)에 의한 심벌 간 간섭에 강한 특성이 있어 고속 데이터 전송에 적합하다. 802.11, WLAN, DMB, PLC, xDSL, 4G, 와이브로 등 많은 분야의 핵심기술로 사용되고 있다.", "OFDM", "직교 주파수 분할 다중", "Orthogonal Frequency Division Multiplexing", "데이터 통신"));
    list.push(new question("컴퓨터와 컴퓨터 또는 컴퓨터와 인터넷 사이에서 파일을 주고받을 수 있도록 하는 원격 파일 전송 프로토콜이다. 이것을 이용하여 파일의 전송(업로드)과 수신(다운로드), 삭제, 이름 변경 등의 작업을 할 수 있다.", "FTP", "파일 전송 프로토콜", "File Transfer Protocol", "데이터 통신"));
    list.push(new question("신호를 전달하는 전파가 통로상의 여러 가지 장애물에 의해 두 개 이상의 경로를 통하여 수신 측에 도달하는 경우, 그 합성 신호가 시공간적으로 강도가 변하는 현상이다. 전자파가 진행하는 경로에 여러가지 장애물이 있을 경우 반사가 일어나고 반사파는 반사되는 경로에 따라 진폭과 위상이 달라진다. 이러한 채널 환경에서 수신기는 직접파와 반사파 또는 반사파만으로 구성된 복합된 신호를 수신하게 되어 수신 장해를 받는다. 이 현상의 방지책으로는 직교 주파수 분할 다중(OFDM), 다이버시티, 이퀄라이저 기술 등이 이용되고 있다.", "", "다중 경로 페이딩", "Multipath Fading", "데이터 통신"));
    list.push(new question("전기, 가스, 수도 계량기 등을 검침원이 일일히 방문하지 않고 원격으로 단말기를 사용하여 검침 데이터를 읽을 수 있는 시스템. 전화선이나 전력선 또는 무선주파수 방식에 의해 정보를 수집하며, 컴퓨터 프로그램과 연계해 고지서 발급은 물론 수요 패턴까지 파악할 수 있다.", "AMR", "원격 검침", "Automatic Meter Reading", "데이터 통신"));
    list.push(new question("ITU-T에서 개발하고 있는 유선망 기반의 차세대 통신망이다. 유선 접속망 뿐만 아니라 이동 사용자 지원까지를 목표로 하며, 이동통신에서 제공하는 완전한 이동성(Full Mobility) 제공을 목표로 개발되고 있다. 이것의 배경 개념은 하나의 망이 인터넷상에서와 같이 모든 정보와 서비스를 패킷으로 압축하여 전송한다는 것이며, 인터넷 프로토콜 기반으로 구축되므로 ALL-IP라는 용어도 이것의 변화를 기술하는데 사용되기도 한다.", "NGN", "차세대 통신망", "Next Generation Network", "데이터 통신"));
    list.push(new question("미국의 GPS, 유럽의 갈릴레오 위치결정시스템과 유사한 러시아의 전파위성 항법 시스템이다. 미국의 상업 및 군사용으로 개발된 GPS는 CDMA 방식인 반면 이 시스템은 FDMA 방식을 이용한다.", "", "글로나스", "GLONASS", "데이터 통신"));
    list.push(new question("WBAN의 의료분야에서 임플란트 장치 간의 통신 서비스를 부르는 명칭이다. 인체내 통신으로 감쇄가 적은 주파수 사용이 필요하여 402 ~ 405MHZ를 사용하고, 대역폭은 300KHZ로 적어 가용 비트레이드도 적다. 그리고 타 통신에 혼신을 피하기 위하여 출력은 EIRP기준 25μW이하로 정하고 있다.", "MICS", "", "Medical Implant Communication Service", "데이터 통신"));
    list.push(new question("네트워크를 컴퓨터처럼 모델링하여 여러 사용자가 각각의 소프트웨어 프로그램들로 네트워킹을 가상화 하여 제어하고 관리하는 네트워크이다. 이 기술은 네트워크 비용 및 복잡성을 해결할 수 있는 기술로 간주되어 기존 네트워킹 기술의 폐쇄형 하드웨어 및 소프트웨어 기술을 개방형으로 변화시키는 미래 인터넷 기술로 떠오르고 있다.", "SDN", "소프트웨어 정의 네트워킹", "Software Defined Networking", "데이터 통신"));
    list.push(new question("고주파(HF)를 이용한 근거리 무선통신 기술이다. Ecma 340, ISO/IEC 18092표준으로, 아주 가까운 거리에서 양방향 통신을 지원하는 RFID 기술의 일종이다. 13.56MHz 주파수를 이용해 10cm안에서 최고 424Kbps의 속도로 데이터 전송을 지원한다. 모바일 기기에서 결제뿐만 아니라 슈퍼마켓이나 일반 상점에서 물품 정보나 방문객을 위한 여행 정보 전송, 교통, 출입 통제, 잠금장치 등에 광범위하게 사용된다", "NFC", "근거리 무선 통신", "Near Field Communication", "데이터 통신"));
    list.push(new question("이것은 서비스의 질을 의미하는 것으로, 네트워크에서 일정 기준 이하의 지연시간이나 데이터 손실률 등을 보증하기 위한 서비스 규격이다. 전송 우선순위에 따라 네트워크 트래픽을 분류하고 우선순위가 높은 트래픽을 먼저 전송하게 된다. 화상 회의, 영상 통화, 동영상 전송 등의 실시간 프로그램은 이것을 사용함으로써 네트워크 대역폭을 가장 효율적으로 사용할 수 있게 된다.", "QoS", "서비스 품질", "Quality of Service", "데이터 통신"));
    list.push(new question("디지털 신호를 아날로그 신호로 변환하는 변조 과정과 아날로스 신호를 디지털 신호로 변환하는 복조 과정을 수행하는 신호변환장치", "", "모뎀", "MODEM", "데이터 통신")); 
    list.push(new question("아시아와 유럽을 연결하는 초고속 정보 통신망이다. 아시아와 유럽의 주요 연구, 교육망을 초고속 네트워크로 연결하여 전자상거래를 포함한 정보 통신 기술, 생명 공학, 신소재 같은 첨단 분야를 공동 연구하고, 관련 기술을 상용망에 적용해 두 대륙 국가들의 경제 발전과 교류를 이루는 데 목적을 두고 있다.", "TEIN", "트랜스 유라시아 네트워크", "Trans-Eurasia Information Network", "데이터 통신"));
    list.push(new question("복수의 주파수 대역을 동시에 사용할 수 있는 대역폭(Bandwidth) 확장 기술로, LTE-Advanced의 핵심 기술이다. 최대 20MHz의 대역폭을 가지는 반송파를 요소 반송파(Component Carrir)라고 정의하는데, LTE-Advanced에서는 이러한 요소 반송파들을 최대 5개까지 묶어서 100MHz의 대역폭을 가질 수 있다. 요소 반송파로 묶을 수 있는 주파수 대역은 연속적일 수도 있고, 불연속적일 수도 있다.", "", "반송파 묶음", "Carrier Aggregation", "데이터 통신"));
    list.push(new question("이것은 LAN과 WAN의 중간 형태로 LAN의 기능을 충분히 수용하면서 도시 전역 또는 도시와 도시 등 넓은 지역을 연결하는 통신망으로, 한 도시 내의 네트워크들을 하나의 거대한 네트워크로 서로 연결하는 데 사용된다.", "MAN", "도시권 통신망", "Metropolitan Area Network", "데이터 통신"));
    list.push(new question("이것은 다양한 정보의 데이터베이스를 구축하여 연결된 컴퓨터 또는 텔레비전을 통해 사용자가 요구하는 정보를 원하는 시간에 볼 수 있도록 전송하는 멀티미디어 서비스이다. 개인이 가지고 있는 단말기를 가입자 선로를 통해 각 전화국으로 연결하고 여기서 다시 인공위성으로 연결함으로써 수신할 수 있다. 원하는 때 원하는 프로그램을 선택할 수 있다는 점에서 대화형 TV의 원형이라고 할 수 있다. 프로그램을 시청하는 도중에 일시 정지시키거나 느린 속도로, 혹은 반복해서 볼 수도 있다.", "VOD", "주문형 비디오", "Video On Demand", "데이터 통신"));
    list.push(new question("이것은 인터넷에 연결된 서로 다른 기종의 컴퓨터들 간에 데이터를 주고받을 수 있도록 하는 표준 프로토콜로, 인트라넷 이나 엑스트라넷과 같은 사설망에서도 사용된다. 이것은 망의 일부가 파손되어도, 남아 있는 망으로 통신이 가능한 신뢰성 있는 통신 규약이다.", "TCP/IP", "", "Transfer Control Protocol/Internet Protocol", "데이터 통신"));
    list.push(new question("네트워크에서 서로 다른 컴퓨터들 간에 정보 교환을 할 수 있게 해주는 표준화된 통신 규약이다. 이것은 네트워크 기능을 효율적으로 발휘하도록 하기 위한 협정으로 TCP/IP가 대표적이며, 통신 연결 시 다양한 레벨을 갖는다.", "", "프로토콜", "Protocol", "데이터 통신"));
    list.push(new question("만국우편연합(UPU)에서 표준화한 온라인 자료에 대한 전자적인 우편배달 서비스이다. 최근에는 EPCM(Electronic Postal Certification Mark)라고 부른다. 소인이란 우표에 특정 표식의 도장을 찍어서 재사용을 방지하고 우편이 효력을 가진 일자와 시간을 표시한 것을 말하며, 이것은 그 내용을 전자적으로 표현한 것이다.", "DPM", "디지털 우편소인", "Digital PostMark", "데이터 통신"));
    list.push(new question("비동기식 3세대 이동 통신의 하향 링크에서 10Mbps 수준의 고속 패킷 데이터 서비스를 제공하는 전송 규격이다. 인터넷 통신은 주로 다운로드가 많아 하향 링크의 고속화가 서비스의 필수 요소이며, 고속 데이터는 주로 정지 상태에서 사용되므로 이러한 조건을 최대한 수용하도록 하향 링크의 전송 규격을 개선한 것으로 WCDMA R5에 적용되었다. 기본 개념은 각종 물리 링크나 MAC 링크 기능을 기지국에서 수행토록 하며, 단말기가 기지국에 가깝거나 정지 상태에서는 오버헤드를 줄여 처리 속도를 높인 것으로, 적응형 변복조 및 부호화 방식, 하이브리드 ARQ, 송수신 다중 다이버시티, 고속 패킷 스케줄링 등의 기술이 적용되었다.", "HSDPA", "고속 하향 패킷 접속", "High Speed Downlink Packet Access", "데이터 통신"));
    list.push(new question("물리적 공간과 네트워크로 연결된 첨단 보건의료 기술의 전자적 공간을 연결하여 보건 의료 대상자의 삶과 진료가 중심이 되도록 하는 것을 의미한다. 보건의료 기술의 급격한 발전과 정보의 디지털화, 통신의 광대역화, 유무선 통신망을 통한 대용량의 정보를 빠르게 전송할 수 있게 되었으며, 멀티미디어 처리 및 저장 기술의 발전, RFID를 비롯한 각종 유비쿼터스 환경의 등장으로 u-Health의 현실화가 빠르게 진행되고 있다.", "u-Health", "유헬스", "ubiquitous-Health", "데이터 통신"));
    list.push(new question("디지털(Digital)과 리터라티(Literati)의 합성어로 컴퓨터, 정보 통신 등 디지털 분야의 지식이 많은 사람을 지칭하는 용어로, 디지털 사회에서 정보 통신 산업을 이끌어 가는 사람을 말한다.", "", "디저라티", "Digerati", "데이터 통신"));
    list.push(new question("웨어러블(Wearable) 또는 몸에 심는(Implant) 형태의 센서나 기기를 무선으로 연결하는 개인 영역 네트워킹 기술이다. 무선 센서나 기기로부터 수집한 정보를 휴대폰 또는 간이형 기지국(Base Station)을 통하여 병원이나 기타 필요한 곳에 실시간으로 전송함으로써 uHealth 등의 서비스를 받는데 응용할 수 있다. 현재 IEEE 802.15.6에 Working Group이 구성되어 서비스 모델과 요구사항 등을 정의하고 있고, 이를 완성한 후에 이에 대한 표준을 진행할 예정이다.", "WBAN", "인체 통신망", "Wireless Body Area Network", "데이터 통신"));
    list.push(new question("저속 전송 속도를 갖는 홈오토메이션 및 데이터 네트워크를 위한 표준 기술이다. 버튼 하나로 하나의 동작을 잡아 집안 어느 곳에서나 전등 제어 및 홈보안 시스템 VCR on/off 등을 할 수 있고, 인터넷을 통한 전화 접속으로 홈오토메이션을 더욱 편리하게 이용하려는 것에서 부터 출발한 기술이다.", "", "지그비", "ZigBee", "데이터 통신"));
    list.push(new question("정보통신기술(ICT)의 접근성과 서비스 이용에 관한 전 세계적 비교 지수이다. 각국의 정보통신망 및 기기의 보급, 그리고 서비스 이용에 관한 각종 자료를 바탕으로 결정되며, 국제전기통신연합(ITU)이 2003년에 처음 발표하였다.", "", "디지털 접근 지수", "Digital Access Index", "데이터 통신"));
    list.push(new question("자동차에 IT기술을 접목해 차량 충돌을 예방하는 기술이다. 자동차와 노면 간 RF(라디오 주파수) 통신을 주고 받아 제한속도를 넘어서면 자동으로 차량 속도가 감속되는 것은 물론, 차량 간 통신으로 충돌을 예방하는 기술이다.", "VMC", "차량 멀티홉 통신", "Vehicle Mutihop Communication", "데이터 통신"));
    list.push(new question("이것은 자원 공유를 목적으로 회사, 학교, 연구소 등의 구내에서 사용하는 통신망으로서, 직원들이 가장 효과적으로 공동 사용할 수 있도록 연결된 통신망이다. 전송 거리가 짧아 고속 전송이 가능하며, 에러 발생률이 낮다.", "LAN", "근거리 통신망", "Local Area Network", "데이터 통신"));
    list.push(new question("이것은 지리적으로 자료를 수집, 저장, 분석, 출력할 수 있는 컴퓨터 응용 시스템으로, 위성을 이용해 모든 사물의 위치 정보를 제공해 주는 것을 말한다. 지도에서 사물을 확인하는 단계를 벗어나 인터넷, 인공위성 등 다양한 매체를 통해 지리 데이터를 수집, 구축, 분석, 처리 과정을 거쳐 고품질의 공간 정보를 생성함으로써 보다 나은 공간 의사 결정에 도움을 주는 단계에까지 이르고 있다. 예를 들면 자동차에서 자신의 위치와 목적지를 지정하여 최단 거리를 찾을 수도 있다.", "GIS", "지리 정보 시스템", "Geographic Information System", "데이터 통신"));
    list.push(new question("이것은 미래의 정보 기술 시장을 선도하기 위하여 정보통신부가 2004년 2월 수립한 IT 성장 전략을 말한다. 이는 유비쿼터스 코리아를 추진하기 위한 운동으로, 향후 IT 산업의 핵심이 될 IT 8대 서비스, 3대 인프라, 9대 성장 동력을 함께 묶어 부르는 명칭으로 2006년 2월 기존 전략을 일부 수정하여 더 앞선 전략을 수립하였다.", "IT839", "IT839 전략", "u-IT839", "데이터 통신"));
    list.push(new question("이것은 각종 센서로 수집한 정보를 무선으로 수집할 수 있도록 구성한 네트워크를 말한다. 즉, 필요한 모든 곳에 RFID 태그를 부착하고, 이를 통하여 사물의 인식 정보는 물론 주변의 환경정보까지 탐지하여 이를 네트워크에 연결하여 정보를 관리하는 것을 의미한다. 사람의 접근이 불가능한 취약지구에 수백개의 센서 네트워크 노드를 설치하여 사람이 감시하는 것과 마찬가지의 역할을 한다.", "USN", "유비쿼터스 센서 네트워크", "Ubiquitous Sensor Network", "데이터 통신"));
    list.push(new question("RADIUS (Remote Authentication  Dial In User Service) 데이터를 전송 제어 프로토콜 (TCP) 이나 전송계층 보안 (TLS) 을 이용하여 전송하기 위한 프로토콜이다. 이것은 'RADIUS over TLS'의 준말로, RADIUS는 이용자가 접속을 요구할 때 이용자의 ID나 암호와 같은 정보를 서버로 보내어 식별하고 인증을 수행한다. 하지만 기존의 RADIUS가 보안이 위약한 사용자 데이터그램 프로토콜 (UDP) 에 의존한다는 점과 패킷 적재 부분에서의 보안 취약성을 보완하기 위해 이것이 등장하였다.  이것은 보안성이 높은 TCP나 TLS를 사용하고, 이용자와 서버 간의 인증서 교환 등을 통한 상호 인증 서비스를 제공한다.", "", "래드섹 프로토콜", "RadSec Protocol", "데이터 통신"));
    list.push(new question("장비에 스토리지를 직접 연결하여 데이터를 저장하는 것으로 대용량의 데이터를 저장하기 위해 등장한 저장 장치이다. 서로 다른 종류의 데이터 저장 장치를 하나의 데이터 서버에 연결하여 관리하는 네트워크이다.", "SAN", "스토리지 전용 네트워크", "Storage Area Network", "데이터 통신"));
    list.push(new question("네트워크 상의 다른 기기들에게 파일 기반 데이터 저장 서비스를 제공한다. 일반 서버와는 다르게, 완전한 형태의 운영체제는 사용하지 않고 최소한의 기능만을 탑재한 운영 체제를 사용한다. 설치와 관리가 용이하고 구축이 저렴하기 때문에 소규모 파일 공유 환경에서 인기를 얻고 있다.", "NAS", "망 부착 저장장치", "Network Attached Storage", "데이터 통신"));
    list.push(new question("주변 상황에 맞추어 스스로 망을 구성하는 네트워크를 말한다. 통신망 커버리지 및 전송 용량 확장의 경제성 문제를 해결하고, 망의 운영과 관리의 효율성을 높이는 것을 목적으로 한다. 갑작스러운 사용자의 증가나 감소 시에는 자동으로 주변 셀과의 협력을 통해 셀 용량을 변화시키며, 장애가 발생했을 때 자체적인 치유도 가능하다.", "SON", "자동 구성 네트워크", "Self Organizing Network", "데이터 통신"));
    list.push(new question("가상 이동 통신망 사업자라는 의미로, 이동통신망을 보유하지 않고 기존의 이동 통신망 사업자로부터 통신망을 임대하여 서비스를 제공하는 사업자들을 의미한다. 우리나라에서는 2011년부터 본격적으로 보급되어 2012년 6월부터 '알뜰폰' 이라는 이름으로 사용되어지고 있다.", "MVNO", "", "Mobile Virtual Network Operators", "데이터 통신"));
    list.push(new question("전 국민이 이용하는 공공 편의 시설에 무료 와이파이를 설치함으로써 서민들의 통신비를 절감하겠다는 계획이다. 이것의 의무 설치는 문재인 대통령의 대선 공약이기도 하다. 이것은 주민센터, 전통시장, 보건소 등 서민과 소외계층 중심이던 이전 버전과는 달리 도서관, 관광지, 체육, 상업, 문화 시설 등 다양한 시설로 확대된다. 국민들의 체감 효과를 대폭 늘리기 위해 5만~10만개의 접속장치 설치를 목표로 하고 있다. 정부는 이것의 체감 속도가 LTE와 차이가 없을 것이라고 밝혔다.", "", "공공 와이파이 2.0", "Public WiFi 2.0", "데이터 통신"));
    list.push(new question("한국정보화진흥원 (NIA, National Information Society Agency) 에서 운영하는 연구 개발망으로, 상용망에 적용하기 어려운 미래 네트워크 기술을 시험, 검증하고 기술 개발과 상용화를 지원하기 위해 운영된다. 이것은 현재 국립암센터. 기상청, 서울대 등 80개 이상 기관 망과 연결되어 있다. 2019년 초에는 서울과 판교 41km 구간에 양자암호통신망을 구축하여 시범 운영하는 등 활발히 이용되고 있다.", "KOREN", "미래네트워크 선도 시험망", "KOrea advanced REsearch Network", "데이터 통신"));
    list.push(new question("스마트 그리드와 같은 장거리 무선 통신을 필요로 하는 사물인터넷 (IoT) 서비스를 위한 저전력 장거리 (LPWA, Low-Power Wide Area) 통신기술이다. 이것은 짧은 시간 동안 데이터 전송이 빈번한 검침 분야에 유용하며, 낮은 지연속도, 메시 네트워크 기반 확장성, 펌웨어 업그레이드 용이성 면에서 다른 저전력 장거리 통신기술에 비해 우월하다. 2017년 3월 전남 고창군에 도입되면서 주목받았는데, 해당 기술은 국제표준화 단체 IEEE의 802.15.4g 표준을 준수하며, 900MHz의 비면허 대역을 활용하여 최대 데이터 전송 속도 300Kbps로 약 5Km까지 전송이 가능하다.", "", "와이선", "Wi-SUN", "데이터 통신"));
    list.push(new question("10cm 이내의 거리에서 3.5Gbps 속도의 데이터 전송이 가능한 초고속 근접무선통신 (NFC) 이다. 휴대용 스마트 기기, 노트북, 쇼핑몰, 거리 등의 광고나 키오스크에 접목하여 사용할 수 있다. 한국전자통신연구원 (ETRI) 주관으로 전자부품연구원, 코프, LG이노텍 등이 기술 개발에 참여했다. 2017년 3월에는 IEEE 국제표준 IEEE 802.15.3e로 등록됐다.", "", "징", "Zing", "데이터 통신"));


    //인터넷
    list.push(new question("인터넷 사용자에게 보다 향상된 대화식 웹 서비스를 제공하기 위한 웹 프로그래밍의 일종으로서, 하나의 기술이라기보다는 여러 기술들이 복합된 개념이다. HTML, XHTML, CSS, 자바스크립트, DOM(문서객체모델), XML, XSLT, XMLHttpRequest 객체 등 기존의 다양한 웹 기술들을 함꼐 사용하는 새로운 접근 방법이다.", "AJAX", "", "Asynchronous Javascript And Xml", "인터넷"));
    list.push(new question("웹 브라우저를 만드는 데 기반을 제공하는 레이아웃 엔진이다. 원래 Mac OS X의 사파리 웹 브라우저 엔진으로 사용하기 위해 컨커러 브라우저의 KHTML 소프트웨어 라이브러리에서 가져온 것이었으나 최근에는 애플의 사파리와 구글 크롬은 물론 림의 블랙베리에서도 브라우저의 엔진으로 사용되고 있다.", "", "웹키트", "WebKit", "인터넷"));
    list.push(new question("웹에서 제공하는 정보 및 서비스를 이용하여 새로운 소프트웨어나 서비스, 데이터베이스 등을 만드는 기술이다. 즉 다수의 정보원이 제공하는 콘텐츠를 조합하여 하나의 서비스로 제공하는 웹 사이트 또는 애플리케이션을 말한다. 구글 지도에 부동산 매물 정보를 결합한 구글의 하우징맵스 (Housing Maps) 가 대표적이다.", "", "매시업", "Mashup", "인터넷"));
    list.push(new question("인터넷 프로토콜 상의 음성 전송이라는 의미로서, 인터넷을 통하여 통화할 수 있는 기술이다. 기존에 사용되고 있던 데이터 통신용 패킷망을 인터넷 폰에 이용하는 것으로, 음성 데이터를 인터넷 프로토콜 데이터 패킷으로 변화하여 일반 전화망에서의 통화를 가능하게 해주는 통신 서비스 기술이다. VoIP는 여러 사람이 동시에 사용할 수 있을 뿐만 아니라 확장성도 뛰어나며, 기존 전화에 비하여 요금도 훨씬 저렴하다는 특징을 가진다.", "VoIP", "", "Voice over Internet Protocol", "인터넷"));
    list.push(new question("인터넷 상에 존재하는 각종 자원이 있는 위치를 나타내는 표준 주소 체계이다. 웹 사이트에 접근하는 일반적인 방법은 웹 브라우저의 주소창에 접속할 홈페이지 파일의 이것을 입력하는 것이다.", "URL", "", "Uniform Resource Locator", "인터넷"));
    list.push(new question("웹 사이트에서 사용자의 하드디스크에 저장하는 특별한 파일로서, 인터넷 사용자에 대한 특정 웹 사이트의 접속 정보를 저장하기 위한 것이다. 이것을 이용하면 인터넷 접속 시 매번 아이디와 비밀번호를 입력하지 않아도 자동으로 로그인 되게 할 수 있다.", "", "쿠키", "Cookie", "인터넷"));
    list.push(new question("인터넷 프로토콜을 기반으로 음성, 오디오, 비디오 및 데이터 등의 멀티미디어 서비스를 제공하는 규격이다. 기본적으로 범용의 인터넷 기반 기술과 표준화된 네트워크 기능들을 사용함으로써 서비스의 가격 경쟁력 향상과 신속한 서비스 개발 및 변경을 추구한다. 액세스 네트워크와는 독립적이며, 세션 관리 기능의 개선으로, 서로 다른 네트워크의 애플리케이션들이 손쉽게 연동되어 서비스 간 글로벌 연동과 유 무선망의 컨버전을 촉진시킨다. 초기 ALL-IP망 광대역 부호 분할 다중 접속망에서 다른 이동 통신 시스템 간의 상호 연동과 컨버전을 위하여 제안되었지만, 현재는 이동 통신 시스템 뿐만 아니라 IP망을 기반으로 하는 각종 유 무선 통합망을 지원하는 기술로 확대되고 있다.", "IMS", "IP 멀티미디어 서브시스템", "IP Multimedia Subsystem", "인터넷"));
    list.push(new question("구내 정보 통신망(LAN)이나 인터넷에 접속되어 있는 일부 사용자 내에서 한 사람이 몇 사람에게 정보를 송신하고 그것을 수신한 몇 사람이 같은 내용을 버킷 릴레이(Bucket Relay)식으로 복수의 사람에게 송신함으로써 정보를 전파하는 특정 다수인에 대한 전송이다. 특정 1인에게 송신하는 유니캐스트나 불특정 다수인에게 정보를 송신하는 방송(Broadcast)과는 달리 특정의 다수 단말에만 정보를 송신하는 것을 이것이라고 부른다.", "", "멀티캐스트", "Multicast", "인터넷"));
    list.push(new question("온라인에서 사용되는 가상의 디지털 화폐로, 블록체인 기술을 이용하여 2009년에 만들어졌으나 개발자는 분명치 않다. 비트코인이 들어있는 계좌를 '지갑'이라고 부르는데 사용자들은 인터넷에서 다운로드한 '지갑' 프로그램을 이용하여 인터넷뱅킹으로 계좌 이체하듯 이것을 주고받는다. 유럽, 북아메리카, 중국 등에서 현급처럼 사용되고 있으며, 우리나라에는 2013년 4월 '코빗'이라는 거래소가 생겼다.", "", "비트코인", "Bitcoin", "인터넷"));
    list.push(new question("플래시 에니메이션 기술과 웹 서버 애플리케이션 기술을 통합하여 기존 HTML보다 역동적이고 인터렉티브한 웹페이지를 제공하는 신개념의 플래시 웹 페이지 제작 기술이다. 다양한 컴포넌트가 추가된 플래시(Flash)와 플렉스(Flex) 같은 멀티미디어 도구와 데이터베이스가 연동되는 단일 인터페이스를 통해 기존의 웹에서는 볼 수 없었던 다이나믹하고 편리한 고객 중심의 웹페이지가 제공된다. 2001년 매크로 미디어사가 플래시 MX저작툴을 통해 처음 선보인 이후 쇼핑몰이나 대고객 웹서비스, 포탈 등을 중심으로 널리 확산되고 있다. 원래 이것은 웹 애플리케이션의 일종으로 통상적인 데스크톱 응용의 기능과 특징을 유사하게 갖는 형태를 말한다. MS의 원격스크립팅, SUN의 자바, 매크로미디어의 X-인터넷, AJAX 등도 이것으로 통칭되고 있다.", "RIA", "리치 인터넷 애플리케이션", "Rich Internet Application", "인터넷"));
    list.push(new question("개인이나 회사들에게 인터넷 접속 서비스, 웹 사이트 구축 및 웹 호스팅 서비스 등을 제공하는 회사들을 말한다. 이를 위하여 이것은 인터넷 접속에 필요한 장비와 통신 회선을 갖추고 있으며, 큰 곳들은 전화망 사업자에 비해 덜 의존적이면서도 자신들의 고객들에게 좀 더 나은 서비스를 제공하기 위해 자기 고유의 고속 전용 리스 회선을 갖추기도 한다.", "ISP", "인터넷 서비스 제공자", "Internet Service Provider", "인터넷"));
    list.push(new question("실제 촬영한 화면에 가상의 정보를 부가하여 보여주는 기술로, 혼합현실(MR)이라고도 부른다. 편리할 뿐만 아니라 감성적 측면에서의 만족도도 대단히 높기 때문에 방송은 물론 게임, 교육, 오락, 패션 등 다양한 분야에서 응용이 가능하다. 스포츠 중계 시 등장하는 선수가 소속된 국가나 선수의 정보를 보여주거나 화장한 자신의 모습을 미리 보고, 옷도 가상으로 입어보고 구매할 수 있다. 모바일 분야에서는 위치기반 서비스 (LBS) 분야에서 이용이 활발하다. 스마트폰으로 거리를 비추면 커피숍이나 약국 등의 정보가 화면에 부가적으로 표시되는 것이 그 예다.", "AR", "증강현실", "Augmented Reality", "인터넷"));
    list.push(new question("호스트 컴퓨터는 웹 접속을 위해 하나의 IP 주소를 가져야 하는데, 이 IP 주소는 DNS가 호스트 컴퓨터의 도메인 이름을 변환하여 생성한다. 그러나 종종 여러 개의 도메인 이름을 동일한 하나의 IP 주소로 변환하여 사용하기도 한다. 이것은 하나의 IP 주소에서 여러 개의 서버를 운영할 때 유용하게 사용할 수 있다.", "CNAME", "", "Canonical NAME", "인터넷"));
    list.push(new question("ISO/IEC JTC1 MPEG에서 AVC(Advanced Video Coding) 이후의 표준으로 추진 중인 차세대 비디오 부호화 표준이다. HD 이상의 해상도를 주 대상으로 하는 차세대 비디오 부호화 표준으로 고성능의 압축 효율은 물론 이동성을 보장한다. 화질은 QVGA에서 8K * 4K를 지원하고, 컬러 스페이스 (Color Space)도 YUV가 4:4:4, 픽셀 당 비트 수가 14Bit, 프레임 레이트는 172fps까지를 구현할 수 있다. 또한 이동방송을 고려한 SVC와 이동망에서의 에러 강인성을 제공한다.", "HVC", "고성능 영상 코딩", "High performance Video Coding", "인터넷"));
    list.push(new question("다른 사람의 글을 읽고 그 글에 직접 댓글을 올리는 대신에 내 블로그에 글을 올리고 내 글의 일정 부분이 다른 사람의 댓글로 보이도록 핑을 보내는 것을 말한다.", "", "트랙백", "Trackback", "인터넷"));
    list.push(new question("Web(웹) 과 Alcoholism (알코올 중독증)의 합성어로서 일상생활에 지장을 느낄 정도로 지나치게 인터넷에 몰두하고, 인터넷에 접속하지 않으면 불안감을 느끼는 것으로 인터넷 중독증, 또는 인터넷 의존증이라고 한다.", "", "웨바홀리즘", "Webaholism", "인터넷"));
    list.push(new question("정보 통신 기술을 기반으로 실세계(Physical World)와 가상 세계(Virtual World)의 다양한 사물들을 연결하여 진보된 서비스를 제공하기 위한 서비스 기반 시설이다. 유비쿼터스 공간을 구현하기 위한 컴퓨팅 기기들이 환경과 사물에 심겨 환경이나 사물 그 자체가 지능화되는 것부터 사람과 사물, 사물과 사물 간에 지능 통신을 할 수 있는 엠투엠(M2M, Machine to Machine)의 개념을 인터넷으로 확장하여 사물은 물론, 현실과 가상 세계의 모든 정보와 상호 작용하는 개념으로 진화했다. 이것의 주요 기술로는 센싱 기술, 유무선 통신 및 네트워크 인프라 기술, 인터페이스 기술, 이것을 통한 서비스 기술 등이 있다.", "IoT", "사물 인터넷", "Internet of Things", "인터넷"));
    list.push(new question("이것은 매우 간현한 정보 배달이라는 의미를 가지고 있으며, 업데이트가 잦은 사이트의 최신 정보를 쉽게 확인할 수 있게 해주는 기술의 표준이다. 주소를 전용 리더 프로그램에 등록해 두면 해당 사이트를 방문하지 않고도 전자 우편을 열어보듯 쉽게 업데이트 내용을 읽어볼 수 있게 해준다. 이 서비스가 주로 적용되는 곳은 블로그, 뉴스, 쇼핑, 날씨 등 콘텐츠가 자주 업데이트되는 사이트들이다.", "RSS", "맞춤형 정보 배달", "Really Simple Syndication", "인터넷"));
    list.push(new question("무선 통신을 이용한 기계와 기계 사이의 통신이다. 변압기 원격 감시, 전기, 가스 등의 원격 검침, 무선신용 카드 조회기, 무선 보안 단말기, 버스 운행 시스템, 위치 추적 시스템, 시설물 관리 등 무선으로 통합하여 상호 작용하는 통신이며, 부호 분할 다중 접속(CDMA), GSM(디지털 셀룰러 이동통신 시스템 표준 규격), 무선 데이터 통신 등 다양한 무선 통신망을 사용한다.", "M2M", "사물 통신", "Machine to Machine", "인터넷"));
    list.push(new question("숫자로 된 IP 주소를 사람이 이해하기 쉬운 문자 형태로 표현한 것으로, 호스트 컴퓨터 이름, 소속 기관 이름, 소속 기관의 종류, 소속 국가명 순으로 구성되며 왼쪽에서 오른쪽으로 갈수록 상위인 것을 의미한다. 컴퓨터가 이것을 바로 인식할 수는 없으므로 문자로 된 이것을 숫자로 된 IP 주소로 바꾸어주는 역할을 하는 것으로 DNS가 사용된다.", "", "도메인 네임", "Domain Name", "인터넷"));
    list.push(new question("인터넷 상에서 한 컴퓨터에서 다른 컴퓨터로 데이터를 보내는 방식이나 규약을 말한다. 인터넷 상에서 호스트로 알려진 각 컴퓨터는 적어도 하나의 이것을 가지고 있으며, 이것은 인터넷 상에서 모든 컴퓨터들로부터 이 컴퓨터를 유일하게 구별할 수 있도록 하는 것이다.", "IP", "아이피", "Internet Protocol", "인터넷"));
    list.push(new question("검색 엔진에서 검색했을 때 상위에 나타나도록 관리하는 것이다. 방법으로는 자신의 사이트를 대표할 수 있는 핵심적인 키워드로 사이트를 등록하고, 배너 교환이나 여러 사이트에 추천 사이트로 등록해 두면, 자연스럽게 이용자가 많아지고, 이로 인해 사이트의 순위도 올라가게 된다.", "SEO", "검색 엔진 최적화", "Search Engine Optimization", "인터넷"));
    list.push(new question("전 세계 사람들 누구나 자유롭게 쓸 수 있고 함께 만들어 가는 웹 기반의 백과사전이다. 2001년 1월 15일에 지미 웨일스와 래리 생어가 공동으로 세운 비영리 단체에서 운영하고 있다. 누구에게나 열어 두고 운영하기에 누구나 '편집'을 눌러서 내용을 수정하거나 추가 할 수 있으며, 모든 정보를 자유롭게 쓸 수 있다.", "", "위키피디아", "Wikipedia", "인터넷"));
    list.push(new question("프로페셔널과 아마추어의 합성어로 전문가 같은 아마추어를 말한다. 웹 2.0이 일반화되면서 일반 네티즌이 정보의 수요자가 아닌 공급 주체로 떠오르면서 적극적으로 자신의 의견을 개진하고 전문가 못지않은 식견을 가진 사람을 말한다.", "Proteur", "프로추어", "Professional amateur", "인터넷"));
    list.push(new question("현재 사용하고 있는 IP 주소 체계인 IPv4의 주소 부족 문제를 해결하기 위해 개발된 IP 주소 체계의 차세대 버전이다. 이것은 16비트씩 8부분, 총 128비트로 구성되어 있으며 각 부분은 16진수로 표현하며 콜론으로 구분한다.", "IPv6", "", "Internet Protocol Version 6", "인터넷"));
    list.push(new question("IPv6에서 한 송신자와 인근에 있는 소수 수신자 간의 통신이다. 특정 다수에게 전송하는 멀티캐스트나 특정인에게 전송하는 유니캐스트와 구분된다. 이것은 수신자들을 묶어 하나의 그룹으로 나타낸 주소를 사용하여 그룹 내에서 가장 가까운 호스트에게만 전송하는 것으로, 한 호스트는 그룹내의 호스트들을 위한 라우터 테이블을 현행화 하고, 가장 가까운 호스트로 선택되면 마치 유니캐스트 처럼 패킷을 전송받아 그 그룹 내의 다른 호스트와 통신을 한다.", "", "애니캐스트", "Anycast", "인터넷"));
    list.push(new question("메시지의 수신 주소를 1개만 지정하는 1:1 통신 형태이며, 네트워크 내의 모든 주소에 동일한 메시지를 보내는 것을 '브로드캐스트', '지정한 복수의 수신 주소에 동일 메시지를 보내는 것을 '멀티캐스트'라고 한다. IP주소의 클래스 A, 클래스 B, 클래스 C는 이것의 주소이다.", "", "유니캐스트", "Unicast", "인터넷"));
    list.push(new question("컴퓨터가 사람을 대신하여 정보를 읽고 이해하고 가공하여 새로운 정보를 만들어 낼 수 있도록, 이해하기 쉬운 의미를 가진 차세대 지능형 웹이다. 예를 들면, 휴가 계획을 짜기 위하여 웹 상에 있는 여행 정보를 일일이 직접 찾아서 비행기와 호텔을 예약하는 대신에 자동화된 프로그램에 대략적 휴가일정과 개인의 선호도만을 알려주면 자료의 의미가 포함되어 있는 웹상의 정보를 해독하여 손쉽게 세부 일정과 여행에 필요한 예약이 이루어지는 것과 같은 원리이다. 이것을 구성하는 핵심기술로는 웹 자원(Resource)을 서술하기 위한 자원 서술 기술, 온톨로지(Ontology)를 통한 지식 서술 기술, 통합적으로 운영하기 위한 에이전트(Agent)기술들을 들 수 있다.", "", "시맨틱 웹", "Semantic Web", "인터넷"));
    list.push(new question("W3C가 채택한 차세대 인터넷 표준 언어로, HTML의 문법이 각 웹 브라우저에서 상호 호환적이지 못하다는 문제와 SGML의 복잡함을 해결하기 위하여 개발되었다. 웹 문서에 쉽게 응용할 수 있도록 SGML의 특정 부분을 사용하였고, 사용자가 직접 문서의 내용에 관련된 태그를 정의할 수 있을뿐만 아니라 그 태그를 다른 사용자들이 사용할 수도 있다.", "XML", "확장성 마크업 언어", "eXtensible Markup Language", "인터넷"));
    list.push(new question("웹 서비스와 관련된 서식이나 프로토콜 등을 표준적인 방법으로 기술하고 게시하기 위한 언어로 SOAP 툴킷에 웹 서비스를 기술하기 위해 개발되었다. 웹 서비스가 확장성 생성 언어(XML)를 기반으로 하여 표현되고 웹 서비스 기술 언어로 정의되면, UDDI (Universal Description, Discovery, and Integration)에 의해 서비스 저장소에 등록된다. 이후 등록된 서비스는 웹에 접속하는 누구라도 찾아 사용할 수 있도록 공개된다, 웹 서비스는 웹 서비스 기술 언어에 의해 서비스 제공 장소나 서비스 메시지 포맷, 프로토콜 등의 구체적인 내용이 기술된다.", "WSDL", "웹 서비스 기술 언어", "Web Services Description Language", "인터넷"));
    list.push(new question("3세대 이동 통신 서비스의 기본 요소로서 정지영상, 음악, 음성 및 동영상 등의 다양한 형식의 데이터를 주고받을 수 있는 메시징 시스템이다. 2세대의 짧은 메시지 서비스 (SMS)의 뒤를 이은 이것은 기존의 미디어 형식의 메시지와 멀티미디어 형식의 메시지를 모두 제공한다.", "MMS", "멀티미디어 메시징 시스템", "Multimedia Messaging System", "인터넷"));
    list.push(new question("AI, IoT, Big Data 등의 최신 디지털 기술들을 활용하여 현대의 끊임없이 변화하는 환경에 맞게 기존의 전통적인 사회를 혁신하여 경쟁력을 확보하는 것을 말한다. 2011년에 발표한 IBM 기업가치 연구소의 보고서에서는 이것을 '기업이 디지털과 물리적인 요소들을 통합하여 비즈니스 모델을 변화시키고, 산업에 새로운 방향을 정립하는 전략' 이라고 정의했고, 세계적인 경영 컨설팅 업체인 A.T. Kearney는 2016년 보고서에서 이것을 'Mobile, Cloud, Big Data, AI, IoT 등 디지털 신기술로 촉발되는 경영 환경상의 변화 동인에 선제적으로 대응함으로써 현행 비즈니스의 경쟁력을 획기적으로 높이거나 새로운 비즈니스를 통한 신규 성장을 추구하는 기업 활동'이라고 정의했다. 이것은 아날로그 정보를 디지털 형식으로 변환하는 '전산화(digitization)' 과정과 전산화된 정보들을 산업 내에서 기술적으로 활용하는 '디지털화(digitalization)' 과정을 통해 수행된다.", "DX", "디지털 전환", "Digital Transformation", "인터넷"));
    list.push(new question("이것은 네트워크 관리자들이 조직 내의 네트워크 상에서 IP 주소를 중앙에서 관리하고 할당할 수 있도록 해주는 프로토콜이다. 주어진 IP 주소가 일정한 시간 동안만 그 컴퓨터에 유효하도록 하는 '임대' 개념을 사용하므로, 사용 가능한 IP 주소의 개수보다 더 많은 컴퓨터가 있는 경우에 IP 주소의 임대 시간을 짧게 함으로써, 네트워크를 동적으로 재구성할 수 있다. 결국 이것은 고유한 IP 주소가 없어도 인터넷에 접속할 수 있도록 해주는 것이다.", "DHCP", "동적 호스트 설정 통신 규약", "Dynamic Host Configuration Protocol", "인터넷"));
    list.push(new question("인터넷 이용자들이 만들어가는 온라인 백과사전인 위키피디아와 경제학을 의미하는 이코노믹스의 합성어로, 소수에 의해 좌지우지되었던 기존의 경제 구조에서 탈피한 대중의 지혜와 지성이 지배하는 경제를 의미한다. IT기술의 발달로 전 세계 대중들의 대규모 협업이 가능해지면서 참여, 공유, 개방을 기초로 하여 이와 같은 경제 패러다임의 변화가 나타나고 있다. 대표적인 사례로는 컴퓨터용 운영체제인 리눅스(Linux)가 있다.", "", "위키노믹스", "Wikinomics", "인터넷"));
    list.push(new question("TCP/IP 프로토콜을 기반으로 하여 전세계 수많은 컴퓨터와 네트워크들이 연결된 광범위한 컴퓨터 통신망으로 유닉스 운영체제를 기반으로 하고 있다. 통신망과 컴퓨터가 있는 곳이라면 시간과 장소에 구애받지 않고 정보를 교환할 수 있으며, 이것에 연결된 모든 컴퓨터는 고유한 IP 주소를 갖는다. 이것은 미국 국방성의 ARPANET에서 시작되었다.", "", "인터넷", "Internet", "인터넷"));
    list.push(new question("와이파이 얼라이언스(연합체)가 발표한 최신 무선 디스플레이 기술로, 스마트 폰이나 스마트 패드와 같은 모바일 기기가 TV와 직접 Wi-Fi 기반의 무선 통신으로 연결되어 큰 화면으로 모바일 기기 속의 콘텐츠를 전송할 수 있는 기술이다.", "", "미라캐스트", "Miracast", "인터넷"));
    list.push(new question("주로 서버용 컴퓨터에서 사용되는 운영체제로 시분할 시스템 (Time Sharing System)을 위해 설계된 대화식 운영체제이다. 대부분 C언어로 작성되어 있어 이식성이 높으며 장치, 프로세스 간의 호환성이 높고 많은 네트워킹 기능을 제공하므로 통신망 관리용 운영체제로 적합하다. 크게 커널(Kernel)과 쉘(Shell)로 구성된다. 커널 : 가장 핵심적인 부분으로 하드웨어를 보호하고, 프로그램과 하드웨어 간의 인터페이스 역할을 담당함. 쉘 : 사용자의 명령어를 인식하여 프로그램을 호출하고 명령을 수행하는 명령어 해석기로 시스템과 사용자 간의 인터페이스를 담당함", "", "유닉스", "UNIX", "인터넷"));
    list.push(new question("근거리에서 데이터 통신을 무선으로 가능하게 해주는 표준 기술이다. 핸드폰, PDA, 노트북과 같은 휴대 가능한 장치들 간의 양방향 근거리 통신을 복잡한 전선 없이도 낮은 가격으로 구현할 수 있다.", "", "블루투스", "Bluetooth", "인터넷"));
    list.push(new question("VoD, T-커머스, 오락, 뱅킹, 정보, TV 포털 및 다채널 방송 서비스와 같은 멀티미디어 콘텐츠를 ADSL, FTTH와 같은 초고속 인터넷망을 통해 디지털 셋톱박스에 연계된 TV 단말기에 제공하는 양방향 TV 서비스를 말한다. 기존에 PC기반으로 인터넷 서비스를 제공하는 통신 기능과 다채널 TV 방송 서비스를 제공하는 방송 기능을 통합 했을 뿐만 아니라 VoD, EPG, T-커머스, 방송프로그램 연동형 데이터 서비스와 같은 새로운 양방향 콘텐츠를 제공하는 통신과 방송 기능을 모두 포함하는 융합 서비스이다.", "IPTV", "", "Internet Protocol TeleVision", "인터넷"));
    list.push(new question("이동통신망을 이용하여 차량 대 차량, 차량 대 보행자, 차량 대 인프라 간에 정보를 공유하는 기술을 말한다. 기존에 카메라, 레이더, 센서 등에 의존하여 주변 환경을 인식하던 V2X에 이동통신망을 접목하여 다른 차량이나 도로 인프라 등을 실시간으로 확인하고 돌발 상황에 대처하는 것이 가능해졌다. 이것은 3GPP 기술 표준이며, 과학기술정보통신부에서 차세대 자율주행 기술로 지목하고 2018년 사업계획에 포함시켜 상용화를 준비하고 있다. V2X에 통신 기술을 접목하는 또 다른 기술인 V2X WAVE와 세계 시장에서 경합을 벌이고 있다.", "C-V2X", "셀룰러-차량 사물통신", "Cellular Vehicle To Everything", "인터넷"));
    list.push(new question("데이터센터를 효율적으로 운영, 관리하기 위해 데이터센터 내의 모든 자원을 가상화하여 서비스하는 것을 의미한다. 인력의 개입 없이 소프트웨어 조작만으로 제어, 관리가 가능하며, 특정 하드웨어와 상관없이 독립적인 운용이 가능하다. 컴퓨팅, 네트워킹, 스토리지 등을 모두 소프트웨어로 정의하여 실제 물리적 환경과 동일하게 구성한다. 기상청은 2020년까지 내부 업무망을 이것으로 전환한다고 발표하였다.", "SDDC", "소프트웨어 정의 데이터센터", "Software-Defined Date Center", "인터넷"));
    list.push(new question("지방 출장 및 거주 공무원들이 어느 곳에서든 시간과 거리 제약 없이 필요한 업무를 처리할 수 있도록 구축한 지능형 오피스를 의미한다. 이곳에서는 업무용 소프트웨어가 설치된 PC뿐만 아니라 보안 시설을 갖춘 전산망, 회의실, 각종 사무용품들을 배치하여 기존 금누지처럼 문서 작성, 보고, 결재 등이 가능하다. 2010년부터 서울, 대전 등의 주요 지역 정부청사에 설치되었으며, 이후 전국 14개 시·도청에 확대 운영한다고 밝힌 바 있다.", "", "스마트워크센터", "Smart Work Center", "인터넷"));
    list.push(new question("편의성과 안전성을 극대화하기 위해 사물인터넷(IoT), 차세대 통신망 등 첨단 ICT 기술을 활용한 미래형 지하철을 의미한다. 중앙에 통합 관리시스템을 구축하고 각 역사에 차세대 통신망을 구축하여 실시간 영상 데이터를 포함한 다양한 데이터를 실시간으로 전송 받을 수 있게 됨으로써 긴급 상황 발생 시 영상과 각종 자료를 통해 상황을 실시간으로 파악하고 대응하는 것이 가능해진다. 정부는 2022년까지 277개 지하철역을 이것으로 구축할 계획을 갖고 있으며, 지하철역 하나에 10억 원 가까이 투자되어 총 사업비는 2,000억 원을 상회할 것으로 추정되고 있다.", "", "스마트 스테이션", "Smart Station", "인터넷"));
    list.push(new question("기존에는 셋톱박스를 통해 영상 콘텐츠를 제공하는 서비스를 의미하였으나, 현재는 인터넷과 이동통신을 통해 영상 콘텐츠를 제공하는 모든 서비스를 의미한다. 대표적인 제공 사업자로는 넷플릭스(Netflix), 유튜브(Youtube) 등이 있다. 이것은 방송 내용이나 광고 등에 규제가 엄격한 방송법이 아닌 이용자의 신고가 있어야만 심의를 받는 전기통신사업법의 적용을 받는다. 이로 인해 발생하는 영상의 공공성·공정성 등의 문제를 해결하기 위해 방송통신위원회는 2017년 말 '10대 정책과제' 중의 하나로 '신유형 서비스 제도 정비'를 내세웠다.", "OTT", "오버더톱 서비스", "Over-The-Top", "인터넷"));
    list.push(new question("구글, 페이스북, 트위터 등과 같은 대형 인터넷 정보기술(IT) 업체들은 사용자가 좋아하거나 자주 검색, 클릭해 보는 관심사들을 수집하여 사용자가 선호하는 콘텐츠 위주로 정보 및 광고를 제공한다. 이로 인해 사용자는 특정 취향의 이용자라는 그룹안에 갇혀 다양한 정보를 접할 기회를 잃게 되는데 이를 라이 파리저(Eli Pariser)가 쓴 책 <생각 조종자들(The Filter Bubble)>에서 제기된 개념이다. 예를 들어 뉴스의 경우 자신의 성향에 맞는 뉴스에만 계속 노출 될 경우 다양한 시각을 가진 기사나 다른 분야의 기사를 접할 기회를 잃게 되어 사고가 편향되는 등의 인식이 왜곡될 우려가 있다.", "", "필터버블", "Filter Bubble", "인터넷"));
    
    
    
    //모바일 컴퓨팅
    list.push(new question("재난 현장과 같이 별도의 고정된 유선망을 구축할 수 없는 장소에서 모바일 호스트(Mobile Host)만을 이용하여 구성한 네트워크로, 망을 구성한 후 단기간 사용되는 경우나 유선망을 구성하기 어려운 경우에 적합하다. 유선망과 기지국이 필요 없고 호스트의 이동에 제약이 없어 빠른 망 구성과 저렴한 비용이 장점이다.", "", "애드 혹 네트워크", "Ad-hoc Network", "모바일 컴퓨팅"));
    list.push(new question("IEEE에서 802.11n 후속으로 진행하고 있는 표준안이다. 802.11n 대비 2배 이상의 전송속도인 1Gbps 이상을 지원하여 압축되지 않은 HD 동영상의 전송을 가능하게 하며, 802.11n과 비교할 때 개선된 커버리지와 전력 소모 기능을 갖고, 기존 무선랜 사양들에 대한 하위 호환성을 지원할 수 있다.", "VHT", "", "Very High Throughput", "모바일 컴퓨팅"));
    list.push(new question("WCDNA 시스템에 적용하는 송신 다이버시티 방식이다. 송신 안테나 두 개, 수신 안테나 한 개를 사용하며, 송신 심벌들을 일정 블록 단위로 순서를 뒤집어서 양쪽으로 송신하여 공간 다이버시티와 시간 다이버시티 이점을 동시에 얻는다. 크기가 작은 휴대폰에 두 개의 안테나를 설치하기가 어려운 반면 크기가 크게 문제가 되지 않는 기지국에서는 두 개의 안테나를 설치하는 것이 용이하다는 점에 착안하여 이 기술이 개발되었다.", "STTD", "시공간 송신 다이버시티", "Space Time Transmit Diversity", "모바일 컴퓨팅"));
    list.push(new question("60GHz 대역을 이용해 데이터를 기가급으로 전송할 수 있는 기술이다. 전 세계적으로 비 허가 대역인 57~64GHz 범위의 주파수를 이용하여 넓은 대역폭의 높은 데이터 전송률(3Gbps)을 얻을 수 있다. 또 전파 거리가 짧고, 직진성이 강해 주변 간섭에 매우 강하고 보안성이 뛰어나며 주파수 재사용도 용이하다. 홈 네트워크나 실내 무선랜 지원에 가장 적합한 기술로 대두되고 있다.", "", "기가파이", "Giga Fi", "모바일 컴퓨팅"));
    list.push(new question("각종 컴퓨팅 자원을 중앙 컴퓨터에 두고 인터넷 기능을 갖는 모든 단말로 언제 어디서나 인터넷을 통해 컴퓨터 작업을 수행할 수 있는 환경을 의미한다. 중앙 컴퓨터는 복수의 데이터 센터를 가상화 기술로 통합한 대형 데이터 센터로 각종 소프트웨어, 데이터, 보안 솔루션 기능 등 컴퓨팅 자원을 보유하고 있다. 사용자는 키보드와 모니터, 마우스를 갖추고 통신 포트만 연결하면 업무 수행이 가능하다. 그리드 컴퓨팅과 다른 점은 그리드 컴퓨팅이 수많은 컴퓨터를 하나의 컴퓨터처럼 묶어 분산 처리한느 방식으로 기상예측이나 우주적 문제 등 대규모 연산에 사용되었다면, 이것은 중앙의 대형 데이터 센터의 컴퓨팅 자원을 필요한 이들에게 필요한 순간에 적절하게 배분해 공급하는 방식이다.", "", "클라우드 컴퓨팅", "Cloud Computing", "모바일 컴퓨팅"));
    list.push(new question("2015년 2월 삼성전자가 인수한 미국기업 LoopPay사가 개발한 기술로 안테나가 내장된 휴대폰을 마그네틱 결제 단말기에 근접시켜 신용카드 정보를 전송하는 기술이다. 마그네틱 결제 단말기에 근접시켜 신용카드 정보를 전송하는 기술이다. 마그네틱 신용카드에서 발생되는 자기장과 동일한 자기장을 휴대폰에서 발생시킴으로써 기존의 마그네틱 결제 단말기를 교체할 필요 없이 편리하게 모바일 결제를 이용할 수 있다.", "MST", "마그네틱 안정 전송", "Magnetic Secure Transmission", "모바일 컴퓨팅"));
    
    /*list.push(new question("", "", "", "", "모바일 컴퓨팅"));
    list.push(new question("", "", "", "", "모바일 컴퓨팅"));*/

    //list.push(new question("설명", "영어줄임말", "한글", "영어풀네임", "카테고리"));



    return list;
}