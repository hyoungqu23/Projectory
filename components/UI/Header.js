import Link from 'next/link';
import Toggle from './Toggle';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: flex;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <Link href="/">
            <a>
              <span>Projectory</span>
            </a>
          </Link>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
          {/* <Toggle /> */}
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
