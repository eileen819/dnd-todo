import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #7e7e7e;
`;
const Link = styled.a`
  margin-left: 10px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #c88cf9;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <p>&copy;{year} Eileen. All rights reserved.</p>
      <Link
        href="https://github.com/eileen819"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
      <Link href="mailto:eileen.ju.8819@gmail.com">E-mail</Link>
    </Wrapper>
  );
}

export default Footer;
