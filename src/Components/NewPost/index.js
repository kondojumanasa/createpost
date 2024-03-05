import {Container,CreatePostBtn,Container1,Title,Summary,ChooseFile,Button,NoFile,Container2,H1Cont,Content,LastButton} from "./styledComponents";

const CreatePost =()=>{
    return (
        <Container>
            <CreatePostBtn>Create New Post</CreatePostBtn>
            <Container1>
                <Title type="text" placeholder="Title"/>
                <Summary type="text" placeholder="Summary"/>
                <ChooseFile>
                    <Button>Choose File</Button>
                    <NoFile>No file Chosen</NoFile>
                </ChooseFile>
            <Container2>
                <H1Cont>
                    <Content>H1 H2 Sans Serif</Content>
                </H1Cont>
            </Container2>
            <LastButton>Create Post</LastButton>
            </Container1>
        </Container>
    )
}
export default CreatePost;