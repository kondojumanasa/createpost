import sepnoty from "../Images/sepnoty.png";
import signup from "../Images/Signup.png";
import { Container,Title,InputContainer,Container1 ,SepnotyCont,SepnotyImg,Welcome,Para,
Image,SignUpCont,Head,Form,Input,CheckBox,Check,Label,Button} from "./styledComponents";

const UserInput=()=>{
    return (
        <Container>
            <Title>Resources > Admin login</Title>
            <InputContainer>
            <Container1>
                <SepnotyCont>
                    <SepnotyImg src={sepnoty} alt='sepnoty'/>
                    <Welcome>Welcome</Welcome>
                    <Para>Sign in to continue Access</Para>
                    <Image src={signup} alt="not found"/>
                </SepnotyCont>
                <SignUpCont>
                    <Head>Sign Up</Head>
                    <Form >
                        <Input type='text' placeholder="User name"/>
                        <Input type='text' placeholder="Email Address / Mobile Number"/>
                        <Input type='text' placeholder="Password"/>
                        <CheckBox>
                        <Check type="checkbox" />
                        <Label >By signing up you agreeing with the terms & conditions and privacy policy of Sepnoty.com</Label>
                        </CheckBox>
                        <Button type="button">Sign in</Button>
                    </Form>
                </SignUpCont>
            </Container1>
            </InputContainer>
        </Container>
    )


}

export default UserInput;