import React, {useEffect, useState, useRef} from 'react';
import Styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import Working from "../../images/working.jpeg"
import Kite from "../../images/kite.jpeg"
import Talent from "../../images/talent.jpeg"
import Platform from "../../images/platform.jpeg"
import Managed from "../../images/managed.jpeg"
import Colors from "../../utils/colors"
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
const Lorem = "Lorem ipsum dolor consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const ShortLorem = "Lorem ipsum dolor consequat. Duis aute irure dolor in reprehenderit in voluptate velit"
const bgVideoSrc = "https://video.wixstatic.com/video/11062b_40811fcc9cac4a5bbfb0d93aaa94d70d/1080p/mp4/file.mp4"

const SiteFlag = (props) => {
    const {bgColor, textColor, heading, actionText, icon, bodyText} = props;
    return(   
        <Flag bgColor={bgColor} textColor={textColor}>
            <FlagHeading>{heading}</FlagHeading>
            <FlagIcon>{icon}</FlagIcon>
            <FlagAction>{actionText}</FlagAction>
            <FlagBody>{bodyText}</FlagBody>
        </Flag>
    )
}

const ValueSquare = (props) => {
    const {heading, transitionHeading, message, bgImage} = props;
    const [show, setShow] = useState(false)
    const mousedOn = () => {
        setShow(true)
    }
    const mousedOff = () => {
        setShow(false)
    }
    return(
        <ValueBox bgImage={bgImage} onMouseOver={mousedOn} onMouseLeave={mousedOff}>
            <ValueBoxHeading>{heading}</ValueBoxHeading>
            <ValueSecondary show={show}>
                <ValueBoxHeading>{heading}</ValueBoxHeading>
                <Divider/>
                <ValueText>{ShortLorem}</ValueText>
            </ValueSecondary>
        </ValueBox>
    )

}

const Home = (props) => {
    const {colors} = props;
    const videoRef = useRef();

    useEffect(()=>{
        videoRef.current.play();
    },[])
  return (
    <HomeContainer>
        <CloudyBG playsinline autoplay muted loop ref={videoRef}>
            <source src={bgVideoSrc} type="video/mp4"></source>
        </CloudyBG>
        <Main>
            <MainHeading>
                <div><KiteImage src={Kite}/></div>
                <div>KITESTRING</div>
            </MainHeading>
            <MainBody>
                <div>Great Talent</div>
                <div>Great Companies</div>
                <div>Great Place To Work</div>
            </MainBody>
        </Main>
        <SiteFlags>
           <SiteFlag bgColor={Colors.kiteBlue} textColor={Colors.white}  heading={"FIND WORK"} actionText={"Meet The Team >"} bodyText={Lorem} icon={<RecordVoiceOverIcon style={{fontSize: "80"}}/>} />
           <SiteFlag bgColor={Colors.lightBlue} textColor={Colors.white}  heading={"FIND TALENT"} actionText={"Ready To Start >"} bodyText={Lorem} icon={<EmojiObjectsRoundedIcon style={{fontSize: "80"}}/>} />
           <SiteFlag bgColor={Colors.sky} textColor={"gray"}  heading={"LEARN MORE"} actionText={"Case Studies >"} bodyText={Lorem} icon={<BorderColorRoundedIcon style={{fontSize: "80"}}/>} />
           <SiteFlag bgColor={Colors.green} textColor={Colors.white}  heading={"ENGAGE US"} actionText={"Reach Out >"} bodyText={Lorem} icon={<QuestionAnswerRoundedIcon style={{fontSize: "80"}}/>} />
        </SiteFlags>
        <ValuesSection>
            <ValueHeading>How We Deliver Value</ValueHeading>
            <ValueContainer>
                <ValueSquare bgImage={Talent} heading={"TALENT PROVISIONING"}/>
                <ValueSquare bgImage={Working} heading={"EXPERT ASSESSMENT"}/>
                <ValueSquare bgImage={Platform} heading={"ENTERPRISE PLATFORM"}/>
                <ValueSquare bgImage={Managed} heading={"MANAGED OUTCOME"}/>
            </ValueContainer>
        </ValuesSection>
        <DifferentSection>
            <DiffHeading>What Makes Us Different</DiffHeading>
            <DiffBoxContainer>
                <DiffBox>
                    <DiffBoxItem><DiffBoxLabel>OUR MISSION</DiffBoxLabel></DiffBoxItem>
                    <DiffBoxItem>{ShortLorem}</DiffBoxItem>
                </DiffBox>
                <DiffBox>
                    <DiffBoxItem><DiffBoxLabel>SPEED AND QUALITY</DiffBoxLabel></DiffBoxItem>
                    <DiffBoxItem>{Lorem}</DiffBoxItem>
                </DiffBox>
                <DiffBox>
                    <DiffBoxItem><DiffBoxLabel>EFFICIENCY</DiffBoxLabel></DiffBoxItem>
                    <DiffBoxItem>{ShortLorem}</DiffBoxItem>
                </DiffBox>
                <DiffBox>
                    <DiffBoxItem><DiffBoxLabel>PARTNERSHIP</DiffBoxLabel></DiffBoxItem>
                    <DiffBoxItem>{Lorem}</DiffBoxItem>
                </DiffBox>
            </DiffBoxContainer>           
        </DifferentSection>
        <ExperienceSection>
            <DiffHeading> Experience Speaks Volumes</DiffHeading>
                <ExpBoxesContainer>
                    <ExpBox>
                        <ExpLabel> "Quote Snippet Here" </ExpLabel>
                        <ExpBody>
                            {Lorem}
                        </ExpBody>
                         <ExpUser>
                            <PersonPinIcon style={{ fontSize: "4em" }}/>
                            <ExpUserLabel> Developer </ExpUserLabel>
                        </ExpUser>
                    </ExpBox>
                      <ExpBox>
                        <ExpLabel> "Quote Snippet Here" </ExpLabel>
                        <ExpBody>
                            {Lorem}
                        </ExpBody>
                         <ExpUser>
                            <PersonPinIcon style={{ fontSize: "4em" }}/>
                            <ExpUserLabel> Developer </ExpUserLabel>
                        </ExpUser>
                    </ExpBox>
                      <ExpBox>
                        <ExpLabel> "Quote Snippet Here" </ExpLabel>
                        <ExpBody>
                            {Lorem}
                        </ExpBody>
                         <ExpUser>
                            <PersonPinIcon style={{ fontSize: "4em" }}/>
                            <ExpUserLabel> Developer </ExpUserLabel>
                        </ExpUser>
                    </ExpBox>
                      <ExpBox>
                        <ExpLabel> "Quote Snippet Here" </ExpLabel>
                        <ExpBody>
                            {Lorem}
                        </ExpBody>
                         <ExpUser>
                            <PersonPinIcon style={{ fontSize: "4em" }}/>
                            <ExpUserLabel> Developer </ExpUserLabel>
                        </ExpUser>
                    </ExpBox>
                    <ExpBox>
                        <ExpLabel> "Quote Snippet Here" </ExpLabel>
                        <ExpBody>
                            {Lorem}
                        </ExpBody>
                         <ExpUser>
                            <PersonPinIcon style={{ fontSize: "4em" }}/>
                            <ExpUserLabel> Developer </ExpUserLabel>
                        </ExpUser>
                    </ExpBox>
                    <ExpBox>
                        <ExpLabel> "Quote Snippet Here" </ExpLabel>
                        <ExpBody>
                            {Lorem}
                        </ExpBody>
                         <ExpUser>
                            <PersonPinIcon style={{ fontSize: "4em" }}/>
                            <ExpUserLabel> Developer </ExpUserLabel>
                        </ExpUser>
                    </ExpBox>
                </ExpBoxesContainer>
        </ExperienceSection>
        <Footer>
            <div><a href="#"> Let's Work Together</a></div>
            <div>
                <div>Providing Unbeatable IT Partnership for 20+ Years</div>
                <div>© 2020 by Kitestring Technical Services, Inc.</div>
            </div>
            <div>
                <FacebookIcon fontSize="Large"/>
                <LinkedInIcon fontSize="Large"/>
                <TwitterIcon fontSize="Large"/>
            </div>
        </Footer>
    </HomeContainer>
  );
}

const KiteImage = Styled.img`
    height: 200px;
    width: 200px;
    
`
const Footer = Styled.div`
    display: flex;
    justify-content: space-around;
    height: 75px;
    margin-top: 50px;
    align-items: center;
`

const ExpUserLabel = Styled.div`
    font-size: 2em;
`

const ExpUser = Styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    text-align: center;
    align-items: center;
    color: ${Colors.white}
`

const ExpBoxesContainer = Styled.div`
    display: grid;
     grid-template-columns: repeat(3, auto);
    grid-template-rows: auto;
    justify-content: center;
    grid-gap: 1em;
`

const ExpLabel = Styled.div`
    text-align: center;
    padding: 1em;
    font-size: 1.5em;
    color: ${Colors.white};
`

const ExpBody = Styled.div`

    padding: 0 2em  0 2em;
    border-bottom: solid ${Colors.white};
    color: ${Colors.white};
    display: flex;
`

const ExpBox = Styled.div`
    background-color: ${Colors.kiteBlue};
    display: grid;
    grid-template-rows: 20% 60% 20%;
    height: 400px;
    width: 300px;
    
    
`

const ExperienceSection = Styled.div`

`

const DiffBox = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 4em 4em;
    
`;

const DiffBoxLabel = Styled.div`
    font-size: 2em;
      text-align: center;
    
`

const DiffBoxItem = Styled.div`
  flex: 0 0 50%;

`

const DiffBoxContainer = Styled.div``

const DiffHeading = Styled.div`
    font-size: 3em;
    text-align: center;
    margin: 1em 1em;
    color: ${Colors.kiteBlue}
`

const DifferentSection = Styled.div`
    
    background-color: #D9EDF7;
    border: solid 1px;
    
`

const Divider = Styled.div`
    border: 2px solid ${Colors.white};
    width: 25%;
    justify-self: center;
`
const ValueText = Styled.div`
    padding: 0 15% 0 15%;
    text-align: center;
`

const ValueBoxHeading = Styled.div`
    font-size: 2.5em;
    text-align: center;
    
`

const ValueSecondary = Styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background:${Colors.kiteBlue};
    display: ${props => props.show ? "grid" : "none"};
    z-index: 1;
    align-content: center;
    grid-gap: 1em;
    

`

const ValueHeading = Styled.div`
    font-size: 4em;
    margin: 1em 1em;
    text-align: center;
    color: ${Colors.white};
`

const ValueContainer = Styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
    
`

const ValueBox = Styled.div`
        height: 300px;
        width: 300px;
        background: gray;
        margin: 1em;
        opacity: .5;
        background-image: url(${props=>props.bgImage});
        background-size: cover;
        display: grid;
        justify-content: center;
        align-content: center;
        grid-template-rows: auto;
        position: relative;
        color: ${Colors.white};

`

const ValuesSection = Styled.div`
    width: 100vw;
    background-color: ${Colors.normalBlue};
    display: flex;
    flex-direction: column;
    
`

const Item = Styled.div`
    display: grid;
    align-items: center;
`

const FlagAction = Styled(Item)`
    font-weight: bold;
    font-size: 1.4em;
`

const FlagBody = Styled(Item)`
    padding: 4px;
` 

const FlagIcon = Styled(Item)`
    
    display: flex;
    justify-content: center;
`

const FlagHeading = Styled(Item)`
    font-weight: bold;
    font-size: 2em;
`
const HomeContainer = Styled.div`
    font-family: 'Roboto Condensed', sans-serif;
`


const Flag = Styled.div`
    color: ${props => props.textColor};
    display: grid;
    grid-template-rows: 10% 40% 5% auto;
    text-align: center;
    min-height: 60vh;
    margin: 1%;
    width: 250px;
    height: 400px;
    background-color: ${props=>props.bgColor};
`

const SiteFlags = Styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    min-width: 100%;
    flex-wrap: wrap;
    padding: 2%;
`

const MainBody = Styled.div`
    font-size: 4.5em;
    display: grid;
    align-items: center;
    color: #002E5D; 
    font-weight: bold;
`

const MainHeading = Styled.div`
    font-size: 2em;
    display: grid;
    align-items: center;
    color: black;
`
const CloudyBG = Styled.video`
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: .4;
    top: 0;
`   

const Main = Styled.div`  
    height: 90vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 40% auto;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
`
export default Home;
