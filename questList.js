class quetzian {
    constructor(quest, engAnswer, korAnswer, engFullname) {
        this.quest = quest;
        this.engAnswer = engAnswer;
        this.korAnswer = korAnswer;
        this.engFullname = engFullname;
    }
}

function shuffle(list) {

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
    
    list.push(new quetzian("인터넷 등 통신 사업자의 공중 네트워크를 사용자가 마치 자신의 전용 회선처럼 사용할 수 있게 하는 서비스이다. 공중 네트워크를 통해 한 회사나 몇몇 단체가 내용을 바깥 사람에게 드러내지 않고 통신할 목적으로 쓰이는 사설 통신망이다.", "VPN", "가상 사설 통신망", "Virtual Private Network"));
    list.push(new quetzian("무선 접속 장치(AP, Access Point)가 설치된 곳을 중심으로 무선 주파수(RF) 기술을 이용하여 근거리에서 특정 카드가 장착된 개인 휴대정보 단말기를 이용해 인터넷에 연결하는 네트워크이다. 최근 메시 네트워크 개발로 인한 이동성의 확보와 540Mbps의 전송 속도를 지원하는 차세대 표준 규격이 상용화되면서 최근에는 유선을 뛰어넘는 인프라로 자리 잡아 가고 있다.", "WLAN", "무선랜", "Wireless LAN"));
    list.push(new quetzian("고속 데이터를 각 반송파가 직교 관계에 있는 다수의 부반송파에 나누어 실어 다중 전송하는 디지털 변조 방식이다. 보통의 주파수 분할 다중에 비해 훨씬 더 많은 반송파의 다중이 가능하므로 주파수 이용 효율이 높고 멀티패스(Multipath)에 의한 심벌 간 간섭에 강한 특성이 있어 고속 데이터 전송에 적합하다. 802.11, WLAN, DMB, PLC, xDSL, 4G, 와이브로 등 많은 분야의 핵심기술로 사용되고 있다.", "OFDM", "직교 주파수 분할 다중", "Orthogonal Frequency Division Multiplexing"));
    list.push(new quetzian("컴퓨터와 컴퓨터 또는 컴퓨터와 인터넷 사이에서 파일을 주고받을 수 있도록 하는 원격 파일 전송 프로토콜이다. 이것을 이용하여 파일의 전송(업로드)과 수신(다운로드), 삭제, 이름 변경 등의 작업을 할 수 있다.", "FTP", "파일 전송 프로토콜", "File Transfer Protocol"));
    list.push(new quetzian("신호를 전달하는 전파가 통로상의 여러 가지 장애물에 의해 두 개 이상의 경로를 통하여 수신 측에 도달하는 경우, 그 합성 신호가 시공간적으로 강도가 변하는 현상이다. 전자파가 진행하는 경로에 여러가지 장애물이 있을 경우 반사가 일어나고 반사파는 반사되는 경로에 따라 진폭과 위상이 달라진다. 이러한 채널 환경에서 수신기는 직접파와 반사파 또는 반사파만으로 구성된 복합된 신호를 수신하게 되어 수신 장해를 받는다. 이 현상의 방지책으로는 직교 주파수 분할 다중(OFDM), 다이버시티, 이퀄라이저 기술 등이 이용되고 있다.", "Multipath Fading", "다중 경로 페이딩", "Multipath Fading"));
    list.push(new quetzian("전기, 가스, 수도 계량기 등을 검침원이 일일히 방문하지 않고 원격으로 단말기를 사용하여 검침 데이터를 읽을 수 있는 시스템. 전화선이나 전력선 또는 무선주파수 방식에 의해 정보를 수집하며, 컴퓨터 프로그램과 연계해 고지서 발급은 물론 수요 패턴까지 파악할 수 있다.", "AMR", "원격 검침", "Automatic Meter Reading"));
    list.push(new quetzian("ITU-T에서 개발하고 있는 유선망 기반의 차세대 통신망이다. 유선 접속망 뿐만 아니라 이동 사용자 지원까지를 목표로 하며, 이동통신에서 제공하는 완전한 이동성(Full Mobility) 제공을 목표로 개발되고 있다. 이것의 배경 개념은 하나의 망이 인터넷상에서와 같이 모든 정보와 서비스를 패킷으로 압축하여 전송한다는 것이며, 인터넷 프로토콜 기반으로 구축되므로 ALL-IP라는 용어도 이것의 변화를 기술하는데 사용되기도 한다.", "NGN", "차세대 통신망", "Next Generation Network"));
    //list.push(new quetzian("", "", "", ""));



    return list;
}