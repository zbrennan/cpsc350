import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  marginLeft: 15,
  color: "#125213"
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>  
    <Link href="/campSearch">
      <a style={linkStyle}>Find a Campground</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
