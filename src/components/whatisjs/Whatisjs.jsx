// import CountUp from 'react-countup';
import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Whatisjs.css"
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTrophy, faUserGraduate, faGripLines, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Block } from '@material-ui/icons';

export default function Whatisjs() {
    let [introText, setIntroText] = useState("Được thành lập vào tháng 2 năm 2014 câu lạc bộ Japanese Software mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS nói riêng và toàn thể các bạn sinh viên nói chung.  Khác với những câu lạc bộ khác câu lạc bộ Japanese Software có những hoạt động như chia sẻ kinh nghiệm , học tập cùng những sinh viên giỏi, tìm hiểu về văn hóa nhật bản, Thử sức với những cuộc thi học thuật tầm cỡ như Coding Project, Algorithm Arena. Những hoạt động của CLB luôn hướng đến sinh viên, giúp sinh viên phát triển bản thân, thỏa mãn đam mê và sáng tạo. CLB chia ra làm 4 ban là Ban chuyên môn, Ban nội dung, Ban Văn Hóa, Ban Truyền Thông, mỗi ban với một nhiệm vụ riêng vì mục tiêu Phát triển CLB đã cố gắng làm việc cho nên kể từ lúc thành lập CLB đã đạt rất nhiều thành tích với 11 lần đạt CLB xuất xác của trường đại học FPT.");
    let [title, setTitle] = useState("JS là gì?");
    let [achievementTitle, setAchievementTitle] = useState("Thành Tựu");
    let [nember, setNember] = useState("Thành viên đang hoạt động ở CLB");
    let [CLB, setCLB] = useState("Đạt danh hiệu CLB xuất xắc");
    let [CV, setCV] = useState("Sinh viên đạt danh hiệu Cóc Vàng");
    let [boss, setBoss] = useState("Chủ Nghiệm Qua Các Đời");
    let [questionTitle, setQuestionTitle] = useState("Những câu hỏi thường gặp");
    let [questionOne, setQuestionOne] = useState("Câu lạc bộ JS là gì?");
    let [questionTwo, setQuestionTwo] = useState("Phân Ban nào đông nhất trong JS?");
    let [questionThree, setQuestionThree] = useState("JS có thường xuyên sinh hoạt không?");
    let [questionFour, setQuestionFour] = useState("Tại sao JS rất được các nhà tuyển dụng săn đón?");
    let [answerQOne, setAnswerQOne] = useState("Câu lạc Bộ Japanese Software là câu lạc bộ được thành lập vào tháng 2 năm 2014 thuộc đại học FPT. Câu lạc bộ mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS nói riêng và toàn thể các bạn sinh viên nói chung.");
    let [answerQTwo, setAnswerQTwo] = useState("Trong đại gia đình JS, Văn hóa và Chuyên môn chính là hai phân ban đông thành viên nhất, năng nổ nhất.");
    let [answerQThree, setAnswerQThree] = useState("Do tình hình dịch bệnh không thể đến trường nhưng gia đình JS vẫn có những buổi gặp mặt cuối tuần đều đặn qua Google Meet nha. Ngoài ra khi lên trường thì JS sẽ có những bữa trưa vui vẻ cùng nhau ở Canteen hàng tuần và các sự kiện sinh hoạt, các buổi training vô cùng thú vị khác.");
    let [answerQFour, setAnswerQFour] = useState("Tham gia vào JS các bạn sẽ có nhiều cơ hội được học tập và rèn luyện kỹ năng mà những nhà tuyển dụng cần ở một ứng viên, không những vậy các bạn còn được tiếp xúc trực tiếp và ghi điểm với các công ty công nghệ cực “hot” thông qua các hoạt động của JS nữa.");

    let [buttonPreText, setButtonPreText] = useState(true);
    const Handle = () => {
        if (introText == "Được thành lập vào tháng 2 năm 2014 câu lạc bộ Japanese Software mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS nói riêng và toàn thể các bạn sinh viên nói chung.  Khác với những câu lạc bộ khác câu lạc bộ Japanese Software có những hoạt động như chia sẻ kinh nghiệm , học tập cùng những sinh viên giỏi, tìm hiểu về văn hóa nhật bản, Thử sức với những cuộc thi học thuật tầm cỡ như Coding Project, Algorithm Arena. Những hoạt động của CLB luôn hướng đến sinh viên, giúp sinh viên phát triển bản thân, thỏa mãn đam mê và sáng tạo. CLB chia ra làm 4 ban là Ban chuyên môn, Ban nội dung, Ban Văn Hóa, Ban Truyền Thông, mỗi ban với một nhiệm vụ riêng vì mục tiêu Phát triển CLB đã cố gắng làm việc cho nên kể từ lúc thành lập CLB đã đạt rất nhiều thành tích với 11 lần đạt CLB xuất xác của trường đại học FPT."
            && title == "JS là gì"
            && achievementTitle == "Thành Tựu"
            && nember == "Thành viên đang hoạt động ở CLB"
            && CLB == "Đạt danh hiệu CLB xuất xắc"
            && CV == "Sinh viên đạt danh hiệu Cóc Vàng"
            && boss == "Chủ Nghiệm Qua Các Đời"
            && questionTitle == "Những câu hỏi thường gặp"
            && questionOne == "Câu lạc bộ JS là gì?"
            && questionTwo == "Phân Ban nào đông nhất trong JS?"
            && questionThree == "JS có thường xuyên sinh hoạt không?"
            && questionFour == "Tại sao JS rất được các nhà tuyển dụng săn đón?"
            && answerQOne == "Câu lạc Bộ Japanese Software là câu lạc bộ được thành lập vào tháng 2 năm 2014 thuộc đại học FPT. Câu lạc bộ mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS nói riêng và toàn thể các bạn sinh viên nói chung."
            && answerQTwo == "Trong đại gia đình JS, Văn hóa và Chuyên môn chính là hai phân ban đông thành viên nhất, năng nổ nhất."
            && answerQThree == "Do tình hình dịch bệnh không thể đến trường nhưng gia đình JS vẫn có những buổi gặp mặt cuối tuần đều đặn qua Google Meet nha. Ngoài ra khi lên trường thì JS sẽ có những bữa trưa vui vẻ cùng nhau ở Canteen hàng tuần và các sự kiện sinh hoạt, các buổi training vô cùng thú vị khác."
            && answerQFour == "Tham gia vào JS các bạn sẽ có nhiều cơ hội được học tập và rèn luyện kỹ năng mà những nhà tuyển dụng cần ở một ứng viên, không những vậy các bạn còn được tiếp xúc trực tiếp và ghi điểm với các công ty công nghệ cực “hot” thông qua các hoạt động của JS nữa."
        ) {
            setButtonPreText(true)
        }
        else if (introText = "2014年2月に 設立されたJSクラブは 全ての　一般的な　学生、特にJSの  分野の　学生を　つなぐ　コミュニティ　に　なる　使命を 持っています。他の　クラブと　違って、　JSクラブは　経験の　共有や、優秀な学生と　共同学習や　日本文化の　紹介や　コーディングプロジェクト、アルゴリズムアリーナを　はじめ、アカデミックコンテスト　チャレンジするなど　いろいろな　活動が　あります。クラブの　活動は　いつも　学生の能力を　伸ばしたり、学生環境を　整えたり。学生の発想を　助けたり　します。クラブは　専門部門、コンテンツ部門、文化部門、メディア部門の　4つのセクションに　分けます。それぞれの　各部門が　責任を　持って、クラブの発展のために　一生懸命　努力して　いるので、　設立されてから、JSクラブは　たくさんの　実績を　達成し、特に　FPT大学で　優秀なクラブとして　賞を　11回　受賞しました。JSクラブは　これからも　引き続き　全力で　前進します"
            && title == "JS クラブとは"
            && achievementTitle == "成果"
            && nember == "クラブのメンバー"
            && CLB == "優秀なクラブ賞を受賞しました。"
            && CV == "学生はゴールデンカエル賞を獲得しました。"
            && boss == "クラブ会長"
            && questionTitle == "よくある質問"
            && questionOne == "JS クラブとは。"
            && questionTwo == "JSの中で　一番　人数が多い部門は。"
            && questionThree == "JSクラブは　よく活動して　いますか。"
            && questionFour == "なぜJSは雇用主にそんなに求められているのですか。"
            && answerQOne == "JS クラブは　 2014年2月に　設立された　FPT大学のクラブです。JSクラブは　全ての　一般的な　学生、特にJSの　分野の　学生を　つなぐ　コミュニティ　に　なる　使命を　はたして　います。"
            && answerQTwo == "JSの中で　専門部門と文化部門　の人数が　一番多いです。"
            && answerQThree == "今、コロナ禍で　大学に　行かなくなった　けど　毎週　JSクラブは　グーグルミートで　面会を開きます。さらに　学生に行く時、JSクラブは　毎週　食堂で　楽しい昼食や　興味深い活動や　面白いトレーニングがあります。"
            && answerQFour == "JSに参加すると、雇用主が候補者に必要とする能力を学び、実践する多くの機会が得られるだけでなく、企業と直接接触してスコアを付けることができます。JS活動を通じて非常に「ホットな」テクノロジー。"
        ) {
            setButtonPreText(false)
        }
        if (buttonPreText == true) {
            setIntroText("2014年2月に 設立されたJSクラブは 全ての　一般的な　学生、特にJSの  分野の　学生を　つなぐ　コミュニティ　に　なる　使命を 持っています。他の　クラブと　違って、　JSクラブは　経験の　共有や、優秀な学生と　共同学習や　日本文化の　紹介や　コーディングプロジェクト、アルゴリズムアリーナを　はじめ、アカデミックコンテスト　チャレンジするなど　いろいろな　活動が　あります。クラブの　活動は　いつも　学生の能力を　伸ばしたり、学生環境を　整えたり。学生の発想を　助けたり　します。クラブは　専門部門、コンテンツ部門、文化部門、メディア部門の　4つのセクションに　分けます。それぞれの　各部門が　責任を　持って、クラブの発展のために　一生懸命　努力して　いるので、　設立されてから、JSクラブは　たくさんの　実績を　達成し、特に　FPT大学で　優秀なクラブとして　賞を　11回　受賞しました。JSクラブは　これからも　引き続き　全力で　前進します")
            setTitle("JS クラブとは")
            setAchievementTitle("成果")
            setNember("クラブのメンバー")
            setCLB("優秀なクラブ賞を受賞しました。")
            setCV("学生はゴールデンカエル賞を獲得しました。")
            setBoss("クラブ会長")
            setQuestionTitle("よくある質問")
            setQuestionOne("JS クラブとは。")
            setQuestionTwo("JSの中で　一番　人数が多い部門は。")
            setQuestionThree("JSクラブは　よく活動して　いますか。")
            setQuestionFour("なぜJSは雇用主にそんなに求められているのですか。")
            setAnswerQOne("JS クラブは　 2014年2月に　設立された　FPT大学のクラブです。JSクラブは　全ての　一般的な　学生、特にJSの　分野の　学生を　つなぐ　コミュニティ　に　なる　使命を　はたして　います。")
            setAnswerQTwo("JSの中で　専門部門と文化部門　の人数が　一番多いです。")
            setAnswerQThree("今、コロナ禍で　大学に　行かなくなった　けど　毎週　JSクラブは　グーグルミートで　面会を開きます。さらに　学生に行く時、JSクラブは　毎週　食堂で　楽しい昼食や　興味深い活動や　面白いトレーニングがあります。")
            setAnswerQFour("JSに参加すると、雇用主が候補者に必要とする能力を学び、実践する多くの機会が得られるだけでなく、企業と直接接触してスコアを付けることができます。JS活動を通じて非常に「ホットな」テクノロジー。")
        }
        else if (buttonPreText == false) {
            // changeText("Text")
            setIntroText("Được thành lập vào tháng 2 năm 2014 câu lạc bộ Japanese Software mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS nói riêng và toàn thể các bạn sinh viên nói chung.  Khác với những câu lạc bộ khác câu lạc bộ Japanese Software có những hoạt động như chia sẻ kinh nghiệm , học tập cùng những sinh viên giỏi, tìm hiểu về văn hóa nhật bản, Thử sức với những cuộc thi học thuật tầm cỡ như Coding Project, Algorithm Arena. Những hoạt động của CLB luôn hướng đến sinh viên, giúp sinh viên phát triển bản thân, thỏa mãn đam mê và sáng tạo. CLB chia ra làm 4 ban là Ban chuyên môn, Ban nội dung, Ban Văn Hóa, Ban Truyền Thông, mỗi ban với một nhiệm vụ riêng vì mục tiêu Phát triển CLB đã cố gắng làm việc cho nên kể từ lúc thành lập CLB đã đạt rất nhiều thành tích với 11 lần đạt CLB xuất xác của trường đại học FPT.")
            setTitle("JS là gì")
            setAchievementTitle("Thành Tựu")
            setNember("Thành viên đang hoạt động ở CLB")
            setCLB("Đạt danh hiệu CLB xuất xắc")
            setCV("Sinh viên đạt danh hiệu Cóc Vàng")
            setBoss("Chủ Nghiệm Qua Các Đời")
            setQuestionTitle("Những câu hỏi thường gặp")
            setQuestionOne("Câu lạc bộ JS là gì?")
            setQuestionTwo("Phân Ban nào đông nhất trong JS?")
            setQuestionThree("JS có thường xuyên sinh hoạt không?")
            setQuestionFour("Tại sao JS rất được các nhà tuyển dụng săn đón?")
            setAnswerQOne("Câu lạc Bộ Japanese Software là câu lạc bộ được thành lập vào tháng 2 năm 2014 thuộc đại học FPT. Câu lạc bộ mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS nói riêng và toàn thể các bạn sinh viên nói chung.")
            setAnswerQTwo("Trong đại gia đình JS, Văn hóa và Chuyên môn chính là hai phân ban đông thành viên nhất, năng nổ nhất.")
            setAnswerQThree("Do tình hình dịch bệnh không thể đến trường nhưng gia đình JS vẫn có những buổi gặp mặt cuối tuần đều đặn qua Google Meet nha. Ngoài ra khi lên trường thì JS sẽ có những bữa trưa vui vẻ cùng nhau ở Canteen hàng tuần và các sự kiện sinh hoạt, các buổi training vô cùng thú vị khác.")
            setAnswerQFour("Tham gia vào JS các bạn sẽ có nhiều cơ hội được học tập và rèn luyện kỹ năng mà những nhà tuyển dụng cần ở một ứng viên, không những vậy các bạn còn được tiếp xúc trực tiếp và ghi điểm với các công ty công nghệ cực “hot” thông qua các hoạt động của JS nữa.")
        }
    }

    return (
        <div className="Whatisjs">
            <section className="image">
                <div className="JS">
                    <p className="text">{title}</p>
                </div>
            </section>
            <p className="Introduction">{introText}</p>
            <div className='button'>
            <button onClick={Handle}>JP/VN</button>
            </div>

            <section className="achievement">
                <div className="line"><FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon></div>
                <h2 className="Title">{achievementTitle}</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon></li>
                </ul>
                <ul>
                    <li>
                        <div className="C1">
                            <p>1000+</p>
                        </div>
                    </li>
                    <li>
                        <div className="C2">
                            <p>11+</p>
                        </div>
                    </li>
                    <li>
                        <div className="C3">

                            <p>50+</p>
                        </div>
                    </li>
                </ul>
                <ul className="Text">
                    <li className="Nember"><p>{nember}</p></li>
                    <li className="CLB"><p>{CLB}</p></li>
                    <li className="CV"><p>{CV}</p></li>
                </ul>
            </section>

            <section className="Boss">
                <div className="line"><FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon></div>
                <h2 className="Title">{boss}</h2>
                <div className="Table">
                    <table>
                        <tbody>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN1" width={300} /></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN2" width={300} /></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN3" width={300} /></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN4" width={300} /></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN5" width={300} /></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN6" width={300} /></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN7" width={300} /></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></td>
                                <td className="nd"><img src="https://scontent.fhph3-1.fna.fbcdn.net/v/t39.30808-6/277353426_5021696387944837_5433350480935908705_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TFw9iYUFyGoAX_yPNHu&_nc_ht=scontent.fhph3-1.fna&oh=00_AT_VRI9wBu5exR03GvGpu9aj7FELBuJOAL5UwvMGOFv2Ag&oe=625201B0" alt="CN8" width={300} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="Question">
                <div className="line"><FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon></div>
                <h2 className="Title">{questionTitle}</h2>
                <div stlye={{}} className="questions">
                    <Accordion style={{ width: 400, display:Block}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography
                                style={{
                                    fontWeight: 10,
                                }}
                            >
                                {questionOne}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{answerQOne}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: 400, display:Block }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography
                                style={{
                                    fontWeight: 10,
                                }}
                            >
                                {questionTwo}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{answerQTwo}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: 400, display:Block }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography
                                style={{
                                    fontWeight: 10,
                                }}
                            >
                                {questionThree}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{answerQThree}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: 400, display:Block }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography
                                style={{
                                    fontWeight: 10,
                                }}
                            >
                                {questionFour}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{answerQFour}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </section>

            <section className="Footer">
                <div className="Bottom">
                </div>
            </section>
        </div>
    )
}