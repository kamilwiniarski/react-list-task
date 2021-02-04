import styled from 'styled-components';

const Container = styled.li`
  margin: ${({panelMargin}) => panelMargin ? `${panelMargin}px 0` : '10px 0'};
`;

const Head = styled.div`
  padding: 5px;
  color: #282c34;
  font-size: 16px;
`;

const Body = styled.div`
  padding: 5px;
  font-size: 12px;
  color: #474747;
`;

export function Panel({ title, children, onClick, opened, panelMargin }) {
    const isOpen = () => {
      return opened.includes(title);
    }
    return (
        <Container panelMargin={panelMargin}>
            <Head onClick={() => onClick(title)}>{ title }</Head>
            { isOpen() && <Body>{ children }</Body> }
        </Container>
    )
}
