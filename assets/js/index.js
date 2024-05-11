var lang = 'en';

var dict = {
	ko: {
		"about1": "아키택쳐 설계",
		"about1_desc": "주어진 환경에 맞는 최적의 시스템 아키텍쳐 설계한다",
		"about2": "코딩",
		"about2_desc": "주어진 설계에 알맞은 서비스를 코딩하고 개발하여 환경을 구축한다",
		"about3": "유지보수",
		"about3_desc": "개발된 시스템을 유지보수 하여 더 좋은 서비스를 제공하거나 버그와 에러를 고친다",
		"about4": "모니터링",
		"about4_desc": "시스템의 모니터링 환경을 구축하여 에러를 빠르게 인지하거나, 통계 데이터를 구축해 서비스의 전체적인 환경을 파악한다",
		"experience1": "팀: 서비스개발팀<br>게임 웹사이트, 브랜드사이트, 이벤트, 게임시작, 웹상점 등의 여러 게임들의 서비스부분을 개발",
		"experience1_date": "2019.11 ~ 현재",
		"experience2": "대학교 인턴<br>2016년 필리핀 대통령 선거 결과를 분석하여 통계적 데이터를 제공하는 소프트웨어 개발",
		"portfolio1": "통합발송 시스템",
		"portfolio1_desc": `<p class="blog-card-caption">\
								<p>Kakaogames</p>
							</p>
							<p>Spring Boot와 NIFI 시스템을 이용하여 개발된 통합발송 시스템 개발 및 유지보수를 담당하였습니다.<br>통합발송 시스템은 카카오톡, SMS, 이메일, 앱푸시 발송이 모두 가능하도록 설계되어 전사에서 유저들에게 보내는 모든 메세지를 발송 시켜주는 시스템입니다.</p>
							<p><b>해당 시스템의 신규 기능들과 신규 발송 방법들을 추가 개발하는 작업을 진행하였고, 발송이 원할히 이루어지도록 시스템을 모니터링 및 유지보수 하였습니다.<br>모니터링을 위해 데이터들을 Elasticsearch와 Grafana를 연동하여, 메세지 전송율, 에러율, 시스템 상태등의 데이터를 볼수 있도록 환경 개선을 진행하였습니다.</b></p>
							<p>해당 시스템의 담당 개발자로서, 신규 기능들을 기획하고 개발하여 시스템을 개선하고, 전사에서 사용하는 시스템인만큼 에러 없이 구동 되도록 안정성을 보장하였습니다.</p>
		`,
		"portfolio2": "회사 공용 글로벌 앱 알림 및 푸시 시스템 설계 및 개발",
		"portfolio2_desc": `<p class="blog-card-caption">
								<p>Kakaogames</p>
							</p>

							<p>글로벌 게임 공용 앱의 알림과 푸시 시스템을 설계 및 개발하였습니다. 많은 알림 요청들을 누락없이 모두 전송 가능한 시스템을 만들어야하는 요구 사항으로, Spring Boot와 Kafka를 사용하여 asynchronous하고 loosely coupled 한 시스템을 설계하였습니다.
							<br>
							<br>
							<b>요청을 받는 부분과, 요청을 처리하는 부분을 Kafka를 통해 분리한 설계를 통하여, 요청을 받는 부분에서 서버당 TPS 4000에 달하는 성능을 달성 할수 있었고, 메세지가 누락없이 모든 유저들에게 성공적으로 전송되도록 개발하였습니다.</b>
							<br>
							<br>
							또한 데이터들을 Elasticsearch, Grafana와 연동하는 Python 스크립트를 사용하여, 메세지들과 시스템 환경을 모니터링 할수 있는 대시보드를 생성하여 운영하였고, 메세지 누락이나, 에러 발생시 알람을 만들어 보다 빠르게 대처 할수 있도록 하였습니다.
							</p>`,
		"portfolio3": "신규 게임들의 웹사이트와 브랜드 페이지 개발",
		"portfolio3_desc": `<p class="blog-card-caption">
                            <p>Kakaogames</p>
                        </p>

                        <p>신규 게임들의 웹사이트와 브랜드 페이지 환경을 구성하고 개발하였습니다. 유저들이 로그인, 게임시작, 웹상점, 컨텐츠들을 사용할수 있는 웹사이트 환경을 제공하고, 보다 편리하게 게임에 접근할수 있도록 다양한 서비스들을 개발하였습니다.
						<br>
						<br>
						<b>브랜드 페이지 환경 구성으로는 S3 + Cloudfront 조합을 사용하여 frontend를 구성하였고, 공용 컨텐츠 API를 통해서 페이지에 다양한 컨텐츠들을 설정 가능하도록 설계하였습니다. CSR 형태로 제공함으로서 비용 절감에 성공하였고, 글로벌 유저들이 보다 빠르게 페이지에 접근 가능하도록 제공 할수 있었습니다.
						<br>또한 공용 어드민을 Vue3로 개발하여 보다 쉽게 메뉴를 추가하고 신규 기능들을 제공 할수 있도록 확장성을 고려한 어드민을 개발하였습니다.</b>
						</p>
						<p>런칭담당한 사이트:</p>
						<a href="https://er.game.daum.net" target="_blank" class="blog-card-link">이터널리턴 <i class="ti-angle-double-right"></i></a>
						<a href="https://tw-odin.game.daum.net" target="_blank" class="blog-card-link">오딘 - 대만 <i class="ti-angle-double-right"></i></a>
						<a href="https://jp-odin.game.daum.net" target="_blank" class="blog-card-link">오딘 - 일본 <i class="ti-angle-double-right"></i></a>
						<a href="https://jp-eversoul.kakaogames.com" target="_blank" class="blog-card-link">에버소울 - 일본 <i class="ti-angle-double-right"></i></a>`,
		"portfolio4": "게시판 모니터링 시스템",
		"portfolio4_desc": `<p class="blog-card-caption">
							<p>Kakaogames</p>
							</p>
							<p>Python과 Elasticsearch를 사용하여 개발된 게시판 모니터링 시스템. 각종 게임들의 커뮤니티들의 게시글들의 데이터를 활용하여 유저 동향을 파악하는데 사용되는 시스템입니다.
							<br>Python의 APScheduler를 사용하여 특정 간경으로 게시글 데이터를 가져와서 Elasticsearch에 적재한후에, 데이터들을 파싱하고 추출하여 유저 동향에 파악에 필요한 단어 등장 횟수, 게시글 반응, 인기글 등의 데이터를 제공해줍니다.
							<br><b>해당 시스템으로 인하여 기존 모든 커뮤니티들을 일일히 방문하여 동향파악을 하던 방식보다 하나의 대시보드에서 유저 동향 파악을 할수 있도록 개발하여 운영 비용 절감에 성공하였습니다. 또한 별도의 개발없이 게임이 추가될때마다 모니터링에 해당 게임이 포함되도록 확장성을 고려하여 설계하여 큰 개발 비용 없이 운영이 가능하였습니다.</b></p>`,
		"portfolio5": "AWS Serverless를 활용한 어드민툴",
		"portfolio5_desc": `<p class="blog-card-caption">
                            <p>Kakaogames</p>
                        </p>
                        <p>어드민툴 서버 비용을 절감하기 위하여 AWS Serverless를 사용하여 어드민툴을 개발하였습니다.
						<br>
						어드민툴은 상시 사용되는 시스템이 아닌, 특정 컨텐츠를 업데이트하거나 하는등 사용 빈도수가 낮은 시스템입니다. 따라서 serverless를 적용한다면, 비용을 절감할수 있을거라 판단하여, serverless로 신규 어드민툴을 개발하였습니다.
						<br>
						어드민툴의 frontend는 VueJS를 사용하여 개발하여, vue의 component들을 활용하여 어드민 확장을 적은 비용으로 가능하도록 설계하였습니다. 각종 기능들을 component화 하여 추후 다른 메뉴를 만들거나 신규 기능을 추가할때 component를 새로 만들거나 기존 component를 가져와서 사용하도록 개발하였습니다.
						</p>`,
		"portfolio6": "2016 필리핀 대통령 선거 결과 분석 소프트웨어",
		"portfolio6_desc": `<p class="blog-card-caption">
                            <p>University of the Philippines Diliman</p>
                        </p>
                        <p>Python에서 K-평균 알고리즘을 사용하여 필리핀의 각 지역별로 선거 결과 데이터를 분석하였습니다.
						<br>
						필리피에 있는 각 지방들의 선거 결과 데이터를 받아, 파싱 및 알고리즘을 통하여 데이터를 정제한 후에, 요구사항에 맞는 그래픽 데이터로 결과를 제공하였습니다.
						<br>
						</p>`,
		"education1": `<p class="blog-card-caption">
                            <p>컴퓨터 과학과</p>
							<p>2013 ~ 2017</p>
                        </p>
                        <p><b>GWA: 1.3955 (Magna Cum Laude)</b><br>성적 시스템: 1.00 (최고 점수 A) ~ 5.00 (최저 점수 F)</p>
						<br>
						<p>논문: <a href="https://ieeexplore.ieee.org/abstract/document/8316417" target="_blank">https://ieeexplore.ieee.org/abstract/document/8316417</a></p>`
	},
	
	en: {
		"about1": "Design Architecture",
		"about1_desc": "I design backend service architecture that suits best for the given environment",
		"about2": "Code",
		"about2_desc": "I code and develop servers that fits the architecture I previously designed.",
		"about3": "Maintenance",
		"about3_desc": "I maintain the codes and systems to fix bugs and add new features to provide better service.",
		"about4": "Monitor",
		"about4_desc": "I build monitoring systems to get alerts when servers get in trouble and make statistic datas to overview the system.",
		"experience1": "Team: Service Development Team<br>Developed various services of games for user convenient such as websites, events, membership, shop, etc.",
		"experience1_date": "2019.11 ~ Present",
		"experience2": "Intership at University.<br>Developed a software that analyzes and make summaries of the president election of Philippines in 2016",
		"portfolio1": "Integrated Notification System",
		"portfolio1_desc": `<p class="blog-card-caption">
								<p>Kakaogames</p>
							</p>
							<p>Developed and maintained integrated notification system of the company which was developed in <b> Spring Boot and NIFI system</b>.<br>The notification systems sends various messages to users in different sending methods such as <b>Kakaotalk(messenger app), email, SMS, and app push</b>.</p>

							<p><b>The system is developed in a way where any other sending method can easily be added to the system. And to handle large amount of requests, it used NIFI and Kafka to make the whole system loosely coupled.
							<br>
							Additionally, I used Elasticsearch to gather data from the system in order to get statistical data such as success rate, error rate, system environment. And added those data to Grafana to overview the system in dashboard and make custom alerts for any errors or abnormal status.
							</b>
							</p>
							<p>I was encharge of maintaining the system to add sending methods, handle bugs and errors, and develop any additional features for better service.</p>`,
		"portfolio2": "Design and Develop App Notification System",
		"portfolio2_desc": `<p class="blog-card-caption">
								<p>Kakaogames</p>
							</p>

							<p>I was encharge of developing a notification system for company's global app. The system needed to send alarms and app push to users without any miss since the messages may contain critical alarms.
							<br>
							<br>
							<b>I used Spring Boot and Kafka to make asynchronous and loosely coupled system in order to handle large amount of requests and not to loose any requests made to users. I separated request receiving part and sending requested message part from the system and achieved TPS of 4000 per server at the receiving part.
							The system was able to handle all the message requests to the users.</b>
							<br>
							<br>
							I customly designed monitoring system using Elasticsearch, Grafana, and some Python scripts to make a dashboard that shows current rate of incoming and outgoing messages and to make alerts for any errors.
							</p>`,
		"portfolio3": "Game websites and brand pages",
		"portfolio3_desc": `<p class="blog-card-caption">
                            <p>Kakaogames</p>
                        </p>

                        <p>I created websites and brand pages for new games. I provided various services in the website such as login, gamestart, shop, and contents.
						<br>
						<br>
						<b>Some of brand pages were served using S3 + Cloudfront for frontend with contents API as backend. I designed such to lower the cost for servers and to provide convenient environment for global users.
						<br>I also developed a common admin tool for setting contents of the sites using Vue3 for easier feature upgrades and creating new menus.</b>
						</p>
						<p>Sites launched:</p>
						<a href="https://er.game.daum.net" target="_blank" class="blog-card-link">Eternal Return <i class="ti-angle-double-right"></i></a>
						<a href="https://tw-odin.game.daum.net" target="_blank" class="blog-card-link">Odin - Taiwan <i class="ti-angle-double-right"></i></a>
						<a href="https://jp-odin.game.daum.net" target="_blank" class="blog-card-link">Odin - Japan <i class="ti-angle-double-right"></i></a>
						<a href="https://jp-eversoul.kakaogames.com" target="_blank" class="blog-card-link">Eversoul - Japan <i class="ti-angle-double-right"></i></a>`,
		"portfolio4": "Community Monitoring System",
		"portfolio4_desc": `<p class="blog-card-caption">
                            <p>Kakaogames</p>
                        </p>
                        <p>Using Python and Elasticsearch, I created a batch software that collects data from different communities of games to Elasticsearch and made statistical data to provide game operating team user feedbacks and trends.
						<br>
						<br>
						<b>Before using the system, the operating team had to visit each communities and view users' articles in order to monitor and read trends. But after the system was developed, they were able to reduce their cost for reading the trends where they were able to view what they needed in a single dashboard.
						<br>I designed the system in which a new game is added, admin can simply add the link of the community to the system to get the data without any further development to decrease the cost of development.</b>
						</p>`,
		"portfolio5": "Admin tool made with AWS Serverless",
		"portfolio5_desc": `<p class="blog-card-caption">
                            <p>Kakaogames</p>
                        </p>
                        <p>I made an admin tool for setting contents for websites using AWS Serverless to reduce cost for admin tool servers.
						<br>
						Since admin tools are not used frequently, but oftenly when the contents of the websites have to change. So I designed the admin tool to be serverless to reduce cost but provide same functions and quality of the tool.
						<br>
						I also used VueJS for admin tool frontend. Using the components of VueJS, the admin tool was more flexible with adding new menus and functions compared to previous legacy admin tool that our team was using.
						</p>`,
		"portfolio6": "2016 Philippines president election analyzing software",
		"portfolio6_desc": `<p class="blog-card-caption">
                            <p>University of the Philippines Diliman</p>
                        </p>
                        <p>I used Python to make an analyzing software to analyze president election result and provide graphical data.
						<br>
						Using K-means algorithm, I was able to get mean, median, highest, lowest election result data from each regions of the Phlippines and made a graphical analysis using the data.
						<br>
						</p>`,
		"education1": `<p class="blog-card-caption">
                            <p>BS Computer Science</p>
							<p>2013 ~ 2017</p>
                        </p>
                        <p><b>GWA: 1.3955 (Magna Cum Laude)</b><br>where 1.00 is the highest score, 3.00 is pass and 5.00 is lowest score</p>
						<br>
						<p>Thesis: <a href="https://ieeexplore.ieee.org/abstract/document/8316417" target="_blank">https://ieeexplore.ieee.org/abstract/document/8316417</a></p>`
	}
}

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
	
	var userLang = navigator.language || navigator.userLanguage;
	if (userLang === 'ko') {
		lang = 'ko'
	}
	else {
		lang = 'en'
	}
	
	setTextLang();
});

$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function toggleLang() {
	if (lang === 'ko') {
		lang = 'en'
	}
	else {
		lang = 'ko'
	}
	
	setTextLang();
}

function setTextLang() {
	var currDict = dict[lang];
	document.getElementById('langButton').innerHTML = lang === 'ko' ? 'KO' : 'EN';
	
	for (i in currDict) {
		var elem = document.getElementById(i);
		if (elem != null) {
			elem.innerHTML = currDict[i];
		}
	}
}